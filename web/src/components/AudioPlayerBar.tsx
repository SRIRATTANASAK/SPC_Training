import React, { useEffect, useRef, useState } from 'react';
import { FastForward, Pause, Play, Subtitles, Volume2 } from 'lucide-react';
import type { VoiceoverTrack } from '../lib/types';
import { progressStore } from '../lib/storage';

interface Props {
  voiceover: VoiceoverTrack;
  screenId: string;
  isQuizOrWorkshop?: boolean;
  onAudioEnded?: () => void;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

export const AudioPlayerBar: React.FC<Props> = ({
  voiceover,
  screenId,
  isQuizOrWorkshop = false,
  onAudioEnded,
  leftSlot,
  rightSlot,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [hasMp3, setHasMp3] = useState<boolean | null>(null);
  const [speed, setSpeed] = useState<1 | 1.25>(1);
  const [captionLang, setCaptionLang] = useState<'th' | 'en'>('th');
  const [showCaptions, setShowCaptions] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  // Load persisted user preferences on mount
  useEffect(() => {
    const saved = progressStore.load();
    setCaptionLang(saved.captionLang ?? 'th');
    setShowCaptions(saved.showCaptions ?? true);
    setAutoPlay(saved.autoPlay ?? true);
    setSpeed(saved.audioSpeed ?? 1);
    setHydrated(true);
  }, []);

  useEffect(() => {
    setPlaying(false);
    setHasMp3(null);
    if (voiceover?.audioFile) {
      fetch(voiceover.audioFile, { method: 'HEAD' })
        .then((res) => setHasMp3(res.ok))
        .catch(() => setHasMp3(false));
    }
  }, [screenId, voiceover?.audioFile]);

  // Auto-play MP3 when ready and autoPlay is enabled
  useEffect(() => {
    if (!hydrated || !hasMp3 || !audioRef.current) return;
    audioRef.current.playbackRate = speed;
    if (autoPlay) {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          setPlaying(false);
        });
    }
  }, [hydrated, hasMp3, screenId]);

  const togglePlay = () => {
    if (hasMp3 && audioRef.current) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        audioRef.current.playbackRate = speed;
        audioRef.current
          .play()
          .then(() => setPlaying(true))
          .catch(() => setPlaying(false));
      }
    }
  };

  const handleSpeedToggle = () => {
    const nextSpeed: 1 | 1.25 = speed === 1 ? 1.25 : 1;
    setSpeed(nextSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextSpeed;
    }
    progressStore.save({ audioSpeed: nextSpeed });
  };

  const handleLangToggle = () => {
    const nextLang: 'th' | 'en' = captionLang === 'th' ? 'en' : 'th';
    setCaptionLang(nextLang);
    progressStore.save({ captionLang: nextLang });
  };

  const handleCaptionsToggle = () => {
    const nextShow = !showCaptions;
    setShowCaptions(nextShow);
    progressStore.save({ showCaptions: nextShow });
  };

  const handleAutoPlayToggle = () => {
    const nextAuto = !autoPlay;
    setAutoPlay(nextAuto);
    progressStore.save({ autoPlay: nextAuto });
  };

  const handleEnded = () => {
    setPlaying(false);
    if (autoPlay && onAudioEnded) {
      onAudioEnded();
    }
  };

  const captionText =
    captionLang === 'th' ? voiceover?.displayScriptTh || voiceover?.ttsCleanTh : voiceover?.enReference;

  return (
    <header className="shrink-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      {hasMp3 && (
        <audio
          ref={audioRef}
          src={voiceover.audioFile}
          onEnded={handleEnded}
          preload="auto"
        />
      )}

      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4">
        {/* Left: Course & Screen Breadcrumb */}
        <div className="flex h-8 items-center gap-2.5 min-w-0">{leftSlot}</div>

        {/* Center: Audio & Caption Controls (perfectly aligned on same vertical baseline) */}
        <div className="flex h-8 items-center gap-1.5 rounded-lg bg-slate-900 px-2.5 text-slate-100 shadow-sm shrink-0">
          <button
            type="button"
            onClick={togglePlay}
            disabled={!hasMp3}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-white hover:bg-sky-500 disabled:opacity-40 transition"
            aria-label={playing ? 'Pause narration' : 'Play narration'}
          >
            {playing ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3 ml-0.5" />}
          </button>

          <div className="flex items-center gap-1.5 px-1 text-[11px] font-bold text-white">
            <Volume2 className="h-3.5 w-3.5 text-sky-400" />
            <span>{voiceover?.audioId}</span>
            <span className="text-slate-400 font-normal">({voiceover?.duration})</span>
            {isQuizOrWorkshop && (
              <span className="hidden sm:inline rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-amber-300">
                กิจกรรม (รอผู้เรียนกดถัดไป)
              </span>
            )}
          </div>

          <span className="h-4 w-px bg-slate-700 mx-0.5" />

          <button
            type="button"
            onClick={handleAutoPlayToggle}
            title="เปิด/ปิด การเล่นและเปลี่ยนหน้าอัตโนมัติ (ยกเว้นหน้ากิจกรรม/Workshop/แบบทดสอบ)"
            className={`flex h-6 items-center gap-1 rounded border px-2 text-[11px] font-bold transition ${
              autoPlay
                ? 'border-emerald-500 bg-emerald-950 text-emerald-200'
                : 'border-slate-700 bg-slate-800 text-slate-400'
            }`}
          >
            <FastForward className="h-3 w-3" />
            <span>Auto {autoPlay ? 'ON' : 'OFF'}</span>
          </button>

          <button
            type="button"
            onClick={handleSpeedToggle}
            className="flex h-6 items-center rounded border border-slate-700 bg-slate-800 px-2 text-[11px] font-bold text-slate-200 hover:bg-slate-700"
          >
            {speed}x
          </button>

          <button
            type="button"
            onClick={handleLangToggle}
            title="สลับภาษาคำบรรยาย (TH / EN) — จำค่าทุกหน้า"
            className="flex h-6 items-center rounded border border-slate-700 bg-slate-800 px-2 text-[11px] font-bold text-sky-300 hover:bg-slate-700"
          >
            {captionLang.toUpperCase()}
          </button>

          <button
            type="button"
            onClick={handleCaptionsToggle}
            title="เปิด/ปิด คำบรรยาย (CC) — จำค่าทุกหน้า"
            className={`flex h-6 items-center gap-1 rounded border px-2 text-[11px] font-bold transition ${
              showCaptions
                ? 'border-sky-500 bg-sky-950 text-sky-200'
                : 'border-slate-700 bg-slate-800 text-slate-400'
            }`}
          >
            <Subtitles className="h-3 w-3" />
            <span>CC {showCaptions ? 'ON' : 'OFF'}</span>
          </button>
        </div>

        {/* Right: Progress & Drawers */}
        <div className="flex h-8 items-center gap-2 shrink-0">{rightSlot}</div>
      </div>

      {/* Caption Strip Directly Below Top Bar */}
      {showCaptions && captionText && (
        <div className="border-t border-slate-800 bg-slate-900 px-4 py-1.5 text-center text-xs sm:text-sm text-sky-100 leading-snug">
          {captionText}
        </div>
      )}
    </header>
  );
};
