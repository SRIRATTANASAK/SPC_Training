import React, { useEffect, useRef, useState } from 'react';
import { FastForward, Pause, Play, Subtitles, Volume2 } from 'lucide-react';
import type { VoiceoverTrack } from '../lib/types';
import { progressStore } from '../lib/storage';

interface Props {
  voiceover: VoiceoverTrack;
  screenId: string;
  isQuizOrWorkshop?: boolean;
  onAudioEnded?: () => void;
}

export const AudioPlayerBar: React.FC<Props> = ({
  voiceover,
  screenId,
  isQuizOrWorkshop = false,
  onAudioEnded,
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
          // Browser blocked unmuted autoplay until user interacts once
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
    <div className="border-t border-slate-800 bg-slate-900 text-slate-100">
      {hasMp3 && (
        <audio
          ref={audioRef}
          src={voiceover.audioFile}
          onEnded={handleEnded}
          preload="auto"
        />
      )}
      {showCaptions && captionText && (
        <div className="border-b border-slate-800 bg-slate-950/95 px-4 py-1.5 text-center text-xs sm:text-sm text-sky-100 leading-snug">
          {captionText}
        </div>
      )}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={togglePlay}
            disabled={!hasMp3}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-white hover:bg-sky-500 disabled:opacity-40 transition"
            aria-label={playing ? 'Pause narration' : 'Play narration'}
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
          </button>
          <div className="text-xs">
            <div className="font-bold text-white flex items-center gap-2">
              <Volume2 className="h-3.5 w-3.5 text-sky-400" />
              <span>{voiceover?.audioId}</span>
              <span className="text-slate-400">({voiceover?.duration})</span>
              {isQuizOrWorkshop && (
                <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-amber-300">
                  โหมดลงมือทำ (หยุดรอผู้เรียน)
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleAutoPlayToggle}
            title="เปิด/ปิด การเล่นและเปลี่ยนหน้าอัตโนมัติ (ยกเว้นหน้า Workshop/แบบทดสอบ)"
            className={`flex items-center gap-1 rounded border px-2 py-1 text-xs font-bold transition ${
              autoPlay
                ? 'border-emerald-500 bg-emerald-950 text-emerald-200'
                : 'border-slate-700 bg-slate-800 text-slate-400'
            }`}
          >
            <FastForward className="h-3.5 w-3.5" />
            <span>Auto {autoPlay ? 'ON' : 'OFF'}</span>
          </button>
          <button
            type="button"
            onClick={handleSpeedToggle}
            className="rounded border border-slate-700 bg-slate-800 px-2 py-1 text-xs font-bold text-slate-200 hover:bg-slate-700"
          >
            {speed}x
          </button>
          <button
            type="button"
            onClick={handleLangToggle}
            title="สลับภาษาคำบรรยาย (TH / EN) — จำค่าทุกหน้า"
            className="rounded border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-bold text-sky-300 hover:bg-slate-700"
          >
            {captionLang.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={handleCaptionsToggle}
            title="เปิด/ปิด คำบรรยาย (CC) — จำค่าทุกหน้า"
            className={`flex items-center gap-1 rounded border px-2.5 py-1 text-xs font-bold transition ${
              showCaptions
                ? 'border-sky-500 bg-sky-950 text-sky-200'
                : 'border-slate-700 bg-slate-800 text-slate-400'
            }`}
          >
            <Subtitles className="h-3.5 w-3.5" />
            <span>CC {showCaptions ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
