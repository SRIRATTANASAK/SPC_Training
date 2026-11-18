import React, { useEffect, useRef, useState } from 'react';
import { FastForward, Minus, Pause, Play, Plus, Subtitles, Volume1, Volume2, VolumeX } from 'lucide-react';
import type { VoiceoverTrack } from '../lib/types';
import { progressStore } from '../lib/storage';
import { withBase } from '../lib/base';

/**
 * Master Template Props สำหรับ AudioPlayerBar
 * สามารถนำไปใช้ซ้ำใน Module 01 ถึง Module 10 โดยเชื่อมโยงกับ VoiceoverTrack และ Screen ID
 */
export interface MasterAudioPlayerBarProps {
  /** ข้อมูลเสียงบรรยายของหน้าจอ เช่น audioId, audioFile, duration, scripts */
  voiceover: VoiceoverTrack;
  /** รหัสหน้าจอปัจจุบัน เช่น M1L1-S01 หรือ M2L1-S01 */
  screenId: string;
  /** ระบุว่าเป็นหน้ากิจกรรม/แบบทดสอบ/Workshop หรือไม่ (เพื่อหยุด auto-advance) */
  isQuizOrWorkshop?: boolean;
  /** Callback เมื่อเสียงบรรยายเล่นจบ (สำหรับ auto-advance) */
  onAudioEnded?: () => void;
  /** Callback รายงานเวลาปัจจุบันของเสียง (วินาที) สำหรับ sync แอนิเมชัน */
  onTimeUpdate?: (currentTime: number) => void;
  /** Callback แจ้งสถานะการเล่นว่ากำลังเล่นอยู่หรือไม่ */
  onPlayStateChange?: (isPlaying: boolean) => void;
  /** ส่วนแสดงผลฝั่งซ้ายของแถบ Header ด้านบน (เช่น ชื่อหลักสูตร / Breadcrumbs) */
  leftSlot?: React.ReactNode;
  /** ส่วนแสดงผลฝั่งขวาของแถบ Header ด้านบน (เช่น สารบัญ / Resources / Progress) */
  rightSlot?: React.ReactNode;
}

/**
 * Master Template: AudioPlayerBar
 * แถบควบคุมเสียงและคำบรรยายส่วนกลางของแพลตฟอร์มการเรียนรู้ SPC Training
 * รองรับ:
 * - เล่น / หยุดชั่วคราว (Play/Pause)
 * - ปุ่มปิดเสียง / เปิดเสียง (Mute/Unmute)
 * - ตัวเลือกปรับระดับเสียง (Volume Slider + ปุ่มเพิ่ม-ลด + แสดงผลเปอร์เซ็นต์)
 * - เปิด/ปิด เปลี่ยนหน้าอัตโนมัติ (Auto-advance)
 * - ปรับความเร็วเสียง (Speed 1x / 1.25x)
 * - สลับภาษาคำบรรยาย (TH / EN)
 * - เปิด/ปิด แถบคำบรรยาย (CC)
 * - บันทึกสถานะลงใน Local Storage เพื่อคงค่าข้ามหน้าและข้ามโมดูลอัตโนมัติ
 */
export const AudioPlayerBar: React.FC<MasterAudioPlayerBarProps> = ({
  voiceover,
  screenId,
  isQuizOrWorkshop = false,
  onAudioEnded,
  onTimeUpdate,
  onPlayStateChange,
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
  const [volume, setVolume] = useState<number>(1);
  const [muted, setMuted] = useState<boolean>(false);
  const [hydrated, setHydrated] = useState(false);

  // โหลดค่ากำหนดของผู้เรียนจาก localStorage เมื่อเปิดหน้าจอ
  useEffect(() => {
    const saved = progressStore.load();
    setCaptionLang(saved.captionLang ?? 'th');
    setShowCaptions(saved.showCaptions ?? true);
    setAutoPlay(saved.autoPlay ?? true);
    setSpeed(saved.audioSpeed ?? 1);
    const savedVolume = typeof saved.audioVolume === 'number' ? saved.audioVolume : 1;
    setVolume(Math.max(0, Math.min(1, savedVolume)));
    setMuted(typeof saved.audioMuted === 'boolean' ? saved.audioMuted : false);
    setHydrated(true);
  }, []);

  // ซิงค์ระดับเสียงและสถานะ Mute ไปยัง audioRef เมื่อมีการเปลี่ยนแปลง
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = muted;
    }
  }, [volume, muted, hasMp3]);

  // ตรวจสอบความพร้อมของไฟล์เสียง MP3 เมื่อเปลี่ยนหน้าจอ
  useEffect(() => {
    setPlaying(false);
    setHasMp3(null);
    if (voiceover?.audioFile) {
      const src = withBase(voiceover.audioFile);
      fetch(src, { method: 'HEAD' })
        .then((res) => setHasMp3(res.ok))
        .catch(() => setHasMp3(false));
    }
  }, [screenId, voiceover?.audioFile]);

  // เล่นเสียงอัตโนมัติเมื่อพร้อมและเปิดใช้งาน autoPlay
  useEffect(() => {
    if (!hydrated || !hasMp3 || !audioRef.current) return;
    audioRef.current.playbackRate = speed;
    audioRef.current.volume = volume;
    audioRef.current.muted = muted;
    if (autoPlay) {
      audioRef.current
        .play()
        .then(() => {
          setPlaying(true);
          onPlayStateChange?.(true);
        })
        .catch(() => {
          setPlaying(false);
          onPlayStateChange?.(false);
        });
    }
  }, [hydrated, hasMp3, screenId]);

  const togglePlay = () => {
    if (hasMp3 && audioRef.current) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
        onPlayStateChange?.(false);
      } else {
        audioRef.current.playbackRate = speed;
        audioRef.current.volume = volume;
        audioRef.current.muted = muted;
        audioRef.current
          .play()
          .then(() => {
            setPlaying(true);
            onPlayStateChange?.(true);
          })
          .catch(() => {
            setPlaying(false);
            onPlayStateChange?.(false);
          });
      }
    }
  };

  /**
   * ปุ่มเปิด-ปิดเสียง (Mute / Unmute)
   */
  const handleToggleMute = () => {
    const nextMuted = !muted;
    let nextVolume = volume;

    // ถ้ากดปลด Mute แต่เสียงอยู่ที่ 0 ให้ปรับกลับขึ้นมาที่ 80% (0.8) เพื่อให้มีเสียงทันที
    if (!nextMuted && volume === 0) {
      nextVolume = 0.8;
      setVolume(nextVolume);
    }

    setMuted(nextMuted);

    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
      audioRef.current.volume = nextVolume;
    }

    progressStore.save({ audioMuted: nextMuted, audioVolume: nextVolume });
  };

  /**
   * ปรับระดับเสียงจาก Slider (0.0 ถึง 1.0)
   */
  const handleVolumeChange = (newVol: number) => {
    const clamped = Math.max(0, Math.min(1, Math.round(newVol * 100) / 100));
    setVolume(clamped);

    // หากลดเสียงจนถึง 0 ให้ปรับเป็นสถานะ Mute โดยอัตโนมัติ
    // หากเลื่อนเพิ่มเสียงจาก 0 ขึ้นมา ให้ปลด Mute อัตโนมัติ
    const shouldMute = clamped === 0;
    setMuted(shouldMute);

    if (audioRef.current) {
      audioRef.current.volume = clamped;
      audioRef.current.muted = shouldMute;
    }

    progressStore.save({ audioVolume: clamped, audioMuted: shouldMute });
  };

  /**
   * ปรับระดับเสียงทีละ Step (+/- 10%)
   */
  const handleVolumeStep = (delta: number) => {
    handleVolumeChange(volume + delta);
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
    onPlayStateChange?.(false);
    if (autoPlay && onAudioEnded) {
      onAudioEnded();
    }
  };

  const captionText =
    captionLang === 'th' ? voiceover?.displayScriptTh || voiceover?.ttsCleanTh : voiceover?.enReference;

  // เลือกระดับความดังสำหรับคำนวณไอคอน (0 หากโดน Mute)
  const effectiveVolume = muted ? 0 : volume;

  return (
    <header className="shrink-0 z-30 border-b border-slate-200 bg-white">
      {hasMp3 && (
        <audio
          ref={audioRef}
          src={withBase(voiceover.audioFile)}
          onEnded={handleEnded}
          onTimeUpdate={(e) => onTimeUpdate?.(e.currentTarget.currentTime)}
          preload="auto"
        />
      )}

      {/* Row 1: Course & Topic Navigation Bar (Left) + Tools/Drawers (Right) */}
      <div className="flex h-12 w-full items-center justify-between gap-3 border-b border-slate-100 px-4 sm:px-6">
        {/* Left: Course & Full Topic Breadcrumb */}
        <div className="flex items-center min-w-0 flex-1">{leftSlot}</div>

        {/* Right: Progress & Drawers (สารบัญ, Resources) */}
        <div className="flex items-center gap-2 shrink-0">{rightSlot}</div>
      </div>

      {/* Row 2: Master Audio Playback & Narration Toolbar */}
      <div className="flex h-9 w-full items-center justify-center bg-slate-900 px-2 sm:px-4 text-slate-100 shadow-inner overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Play / Pause Toggle Button */}
          <button
            type="button"
            onClick={togglePlay}
            disabled={!hasMp3}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white hover:bg-sky-500 disabled:opacity-40 transition"
            aria-label={playing ? 'Pause narration' : 'Play narration'}
            title={playing ? 'หยุดชั่วคราว (Pause)' : 'เล่นเสียงบรรยาย (Play)'}
          >
            {playing ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3 ml-0.5" />}
          </button>

          {/* Audio Track Badge */}
          <div className="flex items-center gap-1.5 px-1 text-[11px] font-bold text-white shrink-0">
            <span className="font-mono text-sky-400">{voiceover?.audioId}</span>
            <span className="text-slate-400 font-normal">({voiceover?.duration})</span>
            {isQuizOrWorkshop && (
              <span className="hidden md:inline rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-amber-300">
                กิจกรรม (รอผู้เรียนกดถัดไป)
              </span>
            )}
          </div>

          <span className="h-3.5 w-px bg-slate-700 mx-0.5" />

          {/* Master Volume Controls: Mute Toggle + Volume Option (Slider + % + Step +/-) */}
          <div className="flex items-center gap-1 rounded border border-slate-700 bg-slate-800/95 px-1.5 py-0.5 shrink-0">
            {/* ปุ่ม Mute / Unmute */}
            <button
              type="button"
              onClick={handleToggleMute}
              title={effectiveVolume === 0 ? 'เปิดเสียง (Unmute)' : 'ปิดเสียง (Mute)'}
              className={`flex h-5 w-5 items-center justify-center rounded transition ${
                effectiveVolume === 0
                  ? 'bg-rose-950/80 text-rose-400 hover:bg-rose-900'
                  : 'text-sky-300 hover:bg-slate-700'
              }`}
              aria-label={effectiveVolume === 0 ? 'เปิดเสียง (Unmute)' : 'ปิดเสียง (Mute)'}
            >
              {effectiveVolume === 0 ? (
                <VolumeX className="h-3.5 w-3.5" />
              ) : effectiveVolume < 0.5 ? (
                <Volume1 className="h-3.5 w-3.5" />
              ) : (
                <Volume2 className="h-3.5 w-3.5" />
              )}
            </button>

            {/* ปุ่มลดเสียง (-) ทีละ 10% */}
            <button
              type="button"
              onClick={() => handleVolumeStep(-0.1)}
              title="ลดเสียง 10%"
              disabled={effectiveVolume <= 0}
              className="hidden sm:flex h-4 w-4 items-center justify-center rounded text-slate-400 hover:bg-slate-700 hover:text-white disabled:opacity-30 transition"
              aria-label="ลดระดับเสียง"
            >
              <Minus className="h-2.5 w-2.5" />
            </button>

            {/* แถบเลื่อนปรับระดับเสียง (Volume Slider) */}
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={effectiveVolume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              title={`ปรับระดับเสียง: ${effectiveVolume === 0 ? 'ปิดเสียง (Muted)' : `${Math.round(volume * 100)}%`}`}
              aria-label="แถบปรับระดับเสียง"
              className="h-1.5 w-12 sm:w-16 accent-sky-400 bg-slate-700 rounded-lg cursor-pointer"
            />

            {/* ตัวเลขเปอร์เซ็นต์ระดับเสียง */}
            <span className="font-mono text-[10px] font-bold text-slate-300 w-7 text-right select-none">
              {effectiveVolume === 0 ? '0%' : `${Math.round(volume * 100)}%`}
            </span>

            {/* ปุ่มเพิ่มเสียง (+) ทีละ 10% */}
            <button
              type="button"
              onClick={() => handleVolumeStep(0.1)}
              title="เพิ่มเสียง 10%"
              disabled={effectiveVolume >= 1}
              className="hidden sm:flex h-4 w-4 items-center justify-center rounded text-slate-400 hover:bg-slate-700 hover:text-white disabled:opacity-30 transition"
              aria-label="เพิ่มระดับเสียง"
            >
              <Plus className="h-2.5 w-2.5" />
            </button>
          </div>

          <span className="h-3.5 w-px bg-slate-700 mx-0.5" />

          {/* Auto Play / Auto Advance Toggle */}
          <button
            type="button"
            onClick={handleAutoPlayToggle}
            title="เปิด/ปิด การเล่นและเปลี่ยนหน้าอัตโนมัติ (ยกเว้นหน้ากิจกรรม/Workshop/แบบทดสอบ)"
            className={`flex h-6 items-center gap-1 rounded border px-2 text-[11px] font-bold shrink-0 transition ${
              autoPlay
                ? 'border-emerald-500 bg-emerald-950 text-emerald-200'
                : 'border-slate-700 bg-slate-800 text-slate-400'
            }`}
          >
            <FastForward className="h-3 w-3" />
            <span>Auto {autoPlay ? 'ON' : 'OFF'}</span>
          </button>

          {/* Narration Speed Toggle */}
          <button
            type="button"
            onClick={handleSpeedToggle}
            title="ปรับความเร็วการเล่นเสียง (1x หรือ 1.25x)"
            className="flex h-6 items-center rounded border border-slate-700 bg-slate-800 px-2 text-[11px] font-bold text-slate-200 hover:bg-slate-700 shrink-0"
          >
            {speed}x
          </button>

          {/* Caption Language Toggle (TH / EN) */}
          <button
            type="button"
            onClick={handleLangToggle}
            title="สลับภาษาคำบรรยาย (TH / EN) — จำค่าทุกหน้า"
            className="flex h-6 items-center rounded border border-slate-700 bg-slate-800 px-2 text-[11px] font-bold text-sky-300 hover:bg-slate-700 shrink-0"
          >
            {captionLang.toUpperCase()}
          </button>

          {/* Closed Captions (CC) Show/Hide Toggle */}
          <button
            type="button"
            onClick={handleCaptionsToggle}
            title="เปิด/ปิด คำบรรยาย (CC) — จำค่าทุกหน้า"
            className={`flex h-6 items-center gap-1 rounded border px-2 text-[11px] font-bold shrink-0 transition ${
              showCaptions
                ? 'border-sky-500 bg-sky-950 text-sky-200'
                : 'border-slate-700 bg-slate-800 text-slate-400'
            }`}
          >
            <Subtitles className="h-3 w-3" />
            <span>CC {showCaptions ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </div>

      {/* Row 3: Caption Strip Directly Below Top Bar */}
      {showCaptions && captionText && (
        <div className="border-t border-slate-800 bg-slate-900/95 px-4 py-1.5 text-center text-xs sm:text-sm text-sky-100 leading-snug">
          {captionText}
        </div>
      )}
    </header>
  );
};
