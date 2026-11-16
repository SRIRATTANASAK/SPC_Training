import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play, Subtitles, Volume2 } from 'lucide-react';
import type { VoiceoverTrack } from '../lib/types';

interface Props {
  voiceover: VoiceoverTrack;
  screenId: string;
}

export const AudioPlayerBar: React.FC<Props> = ({ voiceover, screenId }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [hasMp3, setHasMp3] = useState<boolean | null>(null);
  const [speed, setSpeed] = useState<1 | 1.25>(1);
  const [captionLang, setCaptionLang] = useState<'th' | 'en'>('th');
  const [showCaptions, setShowCaptions] = useState(true);

  useEffect(() => {
    setPlaying(false);
    setHasMp3(null);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (voiceover?.audioFile) {
      fetch(voiceover.audioFile, { method: 'HEAD' })
        .then((res) => setHasMp3(res.ok))
        .catch(() => setHasMp3(false));
    }
  }, [screenId, voiceover?.audioFile]);

  const togglePlay = () => {
    if (hasMp3 && audioRef.current) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        audioRef.current.playbackRate = speed;
        audioRef.current.play().catch(() => {});
        setPlaying(true);
      }
      return;
    }

    // Fallback: Web Speech API when .mp3 is not yet generated
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (playing) {
        window.speechSynthesis.cancel();
        setPlaying(false);
      } else {
        const text = captionLang === 'th' ? voiceover.ttsCleanTh : voiceover.enReference;
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = captionLang === 'th' ? 'th-TH' : 'en-US';
        utter.rate = speed;
        utter.onend = () => setPlaying(false);
        utter.onerror = () => setPlaying(false);
        window.speechSynthesis.speak(utter);
        setPlaying(true);
      }
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
          onEnded={() => setPlaying(false)}
          preload="none"
        />
      )}
      {showCaptions && captionText && (
        <div className="border-b border-slate-800 bg-slate-950/90 px-4 py-2 text-center text-xs sm:text-sm text-sky-100">
          {captionText}
        </div>
      )}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2.5">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={togglePlay}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-white hover:bg-sky-500 transition"
            aria-label={playing ? 'Pause narration' : 'Play narration'}
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
          </button>
          <div className="text-xs">
            <div className="font-bold text-white flex items-center gap-2">
              <Volume2 className="h-3.5 w-3.5 text-sky-400" />
              <span>{voiceover?.audioId}</span>
              <span className="text-slate-400">({voiceover?.duration})</span>
            </div>
            <div className="text-[11px] text-slate-400">
              {hasMp3 ? 'MP3 Audio Ready' : 'Caption / Web Speech Preview (ใส่ .mp3 จาก generate_tts.py เพื่อเสียงจริง)'}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSpeed((s) => (s === 1 ? 1.25 : 1))}
            className="rounded border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-bold text-slate-200 hover:bg-slate-700"
          >
            {speed}x
          </button>
          <button
            type="button"
            onClick={() => setCaptionLang((l) => (l === 'th' ? 'en' : 'th'))}
            className="rounded border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-bold text-sky-300 hover:bg-slate-700"
          >
            {captionLang.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={() => setShowCaptions((v) => !v)}
            className={`flex items-center gap-1 rounded border px-2.5 py-1 text-xs font-bold ${
              showCaptions
                ? 'border-sky-500 bg-sky-950 text-sky-200'
                : 'border-slate-700 bg-slate-800 text-slate-400'
            }`}
          >
            <Subtitles className="h-3.5 w-3.5" />
            <span>CC</span>
          </button>
        </div>
      </div>
    </div>
  );
};
