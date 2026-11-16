import React, { useEffect, useMemo, useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Database, Layers, ListChecks, X } from 'lucide-react';
import type { ModulePayload, ScreenItem } from '../lib/types';
import { progressStore } from '../lib/storage';
import { InlineMarkdown, MarkdownContent } from './MarkdownContent';
import { AssetViewer } from './visuals/AssetViewer';
import { InteractiveRouter } from './interactives/InteractiveRouter';
import { AudioPlayerBar } from './AudioPlayerBar';

interface Props {
  screen: ScreenItem;
  moduleData: ModulePayload;
}

// Screens that have an interactive component rendered by InteractiveRouter
const INTERACTIVE_SCREENS = new Set([
  'M1L1-S03',
  'M1L1-S04',
  'M1L1-S06',
  'M1L2-S04',
  'M1L2-S06',
  'M1L3-S01',
  'M1L3-S02',
  'M1L3-S08',
  'M1L3-S09',
  'M1L4-S07',
  'M1L4-S08',
]);

// Screens that have 2 separate interactive steps
const TWO_STEP_INTERACTIVE_SCREENS = new Set(['M1L3-S08', 'M1L4-S07']);

// Workshop and Quiz/Assessment screens where auto-advance to the next screen pauses for user action
const PAUSE_AUTO_ADVANCE_SCREENS = new Set([
  'M1L1-S06', // KC-M1-L1
  'M1L2-S04', // Workshop 1
  'M1L2-S06', // KC-M1-L2
  'M1L3-S08', // Simulator & Match Game Workshop
  'M1L3-S09', // KC-M1-L3
  'M1L4-S07', // Workshop 2
  'M1L4-S08', // Final Exam
]);

// Screens that actually render a visible asset in AssetViewer
const VISIBLE_ASSET_IDS = new Set([
  'AST-M1-001',
  'AST-M1-002',
  'AST-M1-003',
  'AST-M1-006',
  'AST-M1-007',
  'AST-M1-010',
  'AST-M1-016',
]);

interface SlideView {
  id: string;
  label: string;
  kind: 'content' | 'visual-content' | 'interactive';
  interactiveStep?: number;
}

export const ScreenStage: React.FC<Props> = ({ screen, moduleData }) => {
  const [completedCount, setCompletedCount] = useState(0);
  const [drawer, setDrawer] = useState<'none' | 'resources' | 'workshop' | 'nav'>('none');
  const [slideIdx, setSlideIdx] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const hasVisibleAsset = useMemo(
    () => (screen.assetIds ?? []).some((id) => VISIBLE_ASSET_IDS.has(id)),
    [screen.assetIds]
  );
  const hasInteractive = INTERACTIVE_SCREENS.has(screen.screenId);
  const isActivityScreen = useMemo(
    () =>
      hasInteractive ||
      PAUSE_AUTO_ADVANCE_SCREENS.has(screen.screenId) ||
      screen.screenId === 'M1L1-S02' ||
      (screen.assetIds && screen.assetIds.includes('AST-M1-002')),
    [screen.screenId, hasInteractive, screen.assetIds]
  );

  // Build sub-slides so every view fits comfortably on a single viewport without vertical scrolling
  const slides = useMemo<SlideView[]>(() => {
    const sid = screen.screenId;
    // Pure Quiz / Workshop / Exam screens where the markdown is just a 1-line intro
    if (sid === 'M1L1-S06' || sid === 'M1L2-S04' || sid === 'M1L2-S06' || sid === 'M1L3-S09' || sid === 'M1L4-S08') {
      return [{ id: 'interactive-0', label: 'กิจกรรม / แบบทดสอบ', kind: 'interactive', interactiveStep: 0 }];
    }
    if (TWO_STEP_INTERACTIVE_SCREENS.has(sid)) {
      return [
        {
          id: 'interactive-0',
          label: sid === 'M1L3-S08' ? 'ส่วนที่ 1: Sigma Simulator' : 'ส่วนที่ 1: จับคู่เลือกกราฟ',
          kind: 'interactive',
          interactiveStep: 0,
        },
        {
          id: 'interactive-1',
          label: sid === 'M1L3-S08' ? 'ส่วนที่ 2: เกมจับคู่ค่าสถิติ' : 'ส่วนที่ 2: Factory Dashboard',
          kind: 'interactive',
          interactiveStep: 1,
        },
      ];
    }
    // Screens with both theory/visuals AND an interactive lab (M1L1-S03, M1L1-S04, M1L3-S01, M1L3-S02)
    if (hasInteractive) {
      return [
        { id: 'theory', label: 'ส่วนที่ 1: เนื้อหา & แนวคิดหลัก', kind: 'visual-content' },
        { id: 'lab', label: 'ส่วนที่ 2: ทดลองจำลอง (Interactive Lab)', kind: 'interactive', interactiveStep: 0 },
      ];
    }
    // Content + Visual screens fit side-by-side or cleanly in one full-screen slide
    return [{ id: 'main', label: 'เนื้อหาหลัก', kind: 'visual-content' }];
  }, [screen.screenId, hasInteractive]);

  useEffect(() => {
    setSlideIdx(0);
    setFadeIn(true);
    const next = progressStore.markScreenCompleted(screen.screenId);
    setCompletedCount(next.var_completed_screens.length);
  }, [screen.screenId]);

  const goToSlide = (nextIdx: number) => {
    if (nextIdx === slideIdx || nextIdx < 0 || nextIdx >= slides.length) return;
    setFadeIn(false);
    setTimeout(() => {
      setSlideIdx(nextIdx);
      setFadeIn(true);
    }, 180);
  };

  // Auto-advance handler when narration finishes
  const handleAudioEnded = () => {
    // กฎข้อที่ 1: ในกรณีที่มีกิจกรรม เช่น Hotspots ในหน้าที่ 2, คำถาม-ตอบ (KC/Exam), เครื่องคิดเลข, Lab จำลอง หรือ Workshop
    // ต้องรอให้ผู้เรียนทำกิจกรรมเสร็จ และกดปุ่ม "Next หรือ หน้าถัดไป" ด้วยตนเองเท่านั้น ระบบจะไม่ข้ามหน้าอัตโนมัติ
    if (isActivityScreen) {
      return;
    }

    // สำหรับหน้าบรรยายทั่วไป (ไม่มีกิจกรรม)
    if (slideIdx + 1 < slides.length) {
      goToSlide(slideIdx + 1);
      return;
    }
    if (screen.nextScreenId) {
      window.location.href = `/module-01/${screen.nextScreenId}`;
    }
  };

  const progressPct = Math.round((screen.index / moduleData.totalScreens) * 100);
  const currentSlide = slides[slideIdx] ?? slides[0];

  const headerLeft = (
    <>
      <a href="/" className="shrink-0 rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-extrabold text-white">
        SPC Training
      </a>
      <div className="truncate text-xs sm:text-sm">
        <span className="font-bold text-sky-800">{screen.lessonId}</span>
        <span className="mx-1.5 text-slate-400">/</span>
        <span className="font-semibold text-slate-700">{screen.screenId}</span>
        <span className="hidden md:inline ml-2 text-slate-500">— {screen.lessonTitle}</span>
      </div>
    </>
  );

  const headerRight = (
    <>
      <div className="hidden xl:flex h-8 items-center gap-2 mr-1">
        <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full bg-sky-600 transition-all" style={{ width: `${progressPct}%` }} />
        </div>
        <span className="text-xs font-bold text-slate-600">
          {screen.index}/{moduleData.totalScreens} ({completedCount} อ่านแล้ว)
        </span>
      </div>

      <button
        type="button"
        onClick={() => setDrawer((d) => (d === 'nav' ? 'none' : 'nav'))}
        className="flex h-8 items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
      >
        <ListChecks className="h-3.5 w-3.5" />
        <span>สารบัญ</span>
      </button>
      <button
        type="button"
        onClick={() => setDrawer((d) => (d === 'resources' ? 'none' : 'resources'))}
        className="flex h-8 items-center gap-1.5 rounded-lg border border-sky-300 bg-sky-50 px-3 text-xs font-bold text-sky-900 hover:bg-sky-100 transition"
      >
        <BookOpen className="h-3.5 w-3.5" />
        <span>Resources</span>
      </button>
    </>
  );

  // Strip redundant **หัวข้อ:** line from markdown on screens where the title already shows it
  const cleanMarkdown = useMemo(() => {
    return (screen.markdown ?? '').replace(/^\*\*หัวข้อ:\*\*.*\n?/m, '').trim();
  }, [screen.markdown]);

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-slate-100 text-slate-900">
      {/* Unified Top Header with Audio, Auto ON, Speed, TH/EN, CC */}
      <AudioPlayerBar
        voiceover={screen.voiceover}
        screenId={screen.screenId}
        isQuizOrWorkshop={isActivityScreen}
        onAudioEnded={handleAudioEnded}
        leftSlot={headerLeft}
        rightSlot={headerRight}
      />

      {/* Full-Viewport Stage Area (no page scroll, smooth fade-in/out sub-slides) */}
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between overflow-hidden px-4 py-2.5">
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
          {/* Screen Title & Sub-Slide Switcher Bar */}
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2 shrink-0">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-sky-700">
                {screen.lessonId}: {screen.lessonTitle}
              </div>
              <div className="flex flex-wrap items-baseline gap-2.5">
                <h1 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  <InlineMarkdown text={screen.title} />
                </h1>
                {screen.screenId === 'M1L1-S01' && (
                  <span className="text-sm font-semibold text-slate-500">ทุกกระบวนการมีความแปรปรวน</span>
                )}
              </div>
            </div>

            {slides.length > 1 && (
              <div className="flex items-center gap-1.5 rounded-xl bg-slate-100 p-1">
                <Layers className="ml-1.5 h-3.5 w-3.5 text-slate-500" />
                {slides.map((sl, idx) => (
                  <button
                    key={sl.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                      slideIdx === idx
                        ? 'bg-sky-700 text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {sl.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Animated Slide Body */}
          <div
            className={`flex-1 overflow-y-auto pr-1 transition-opacity duration-200 ${
              fadeIn ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {screen.screenId === 'M1L1-S01' ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 max-w-6xl mx-auto">
                <AssetViewer assetIds={screen.assetIds} screenId={screen.screenId} />
                <div className="w-full max-w-4xl rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-center text-sm sm:text-base leading-relaxed text-slate-800 shadow-sm">
                  พื้นฐานสถิติสำหรับงานวิศวกรรมการผลิต ในโรงงานอุตสาหกรรม ไม่ว่าเครื่องจักรจะใหม่แค่ไหน
                  หรือช่างจะเก่งเพียงใด ไม่มีกระบวนการผลิตไหนที่ทำชิ้นงานออกมาได้เท่ากันเป๊ะร้อยเปอร์เซ็นต์ทุกชิ้น
                  ความแตกต่างเล็กๆ น้อยๆ ตามธรรมชาตินี้ เราเรียกว่า{' '}
                  <strong className="text-sky-800">ความแปรปรวน หรือ Variation</strong>
                </div>
              </div>
            ) : screen.screenId === 'M1L1-S02' ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 max-w-5xl mx-auto">
                <div className="w-full max-w-xl">
                  <AssetViewer assetIds={screen.assetIds} screenId={screen.screenId} />
                </div>
                {cleanMarkdown && (
                  <div className="w-full">
                    <MarkdownContent markdown={cleanMarkdown} />
                  </div>
                )}
              </div>
            ) : currentSlide.kind === 'visual-content' ? (
              <div
                className={
                  hasVisibleAsset && cleanMarkdown
                    ? 'grid grid-cols-1 lg:grid-cols-12 gap-5 items-center h-full'
                    : 'flex flex-col justify-center h-full max-w-4xl mx-auto'
                }
              >
                {hasVisibleAsset && (
                  <div className={cleanMarkdown ? 'lg:col-span-5' : 'w-full'}>
                    <AssetViewer assetIds={screen.assetIds} screenId={screen.screenId} />
                  </div>
                )}
                {cleanMarkdown && (
                  <div className={hasVisibleAsset ? 'lg:col-span-7' : 'w-full'}>
                    <MarkdownContent markdown={cleanMarkdown} />
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex flex-col justify-center">
                <InteractiveRouter
                  screen={screen}
                  moduleData={moduleData}
                  stepIndex={currentSlide.interactiveStep ?? 0}
                />
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Clean Bottom Footer Navigation */}
      <footer className="shrink-0 z-30 border-t border-slate-200 bg-white px-4 py-2 shadow-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {screen.prevScreenId ? (
                <a
                  href={`/module-01/${screen.prevScreenId}`}
                  className="rounded-lg border border-slate-300 bg-white px-3.5 py-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  ← หน้าก่อนหน้า
                </a>
              ) : (
                <a
                  href="/"
                  className="rounded-lg border border-slate-300 bg-white px-3.5 py-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  ← หน้าแรก
                </a>
              )}

              {slides.length > 1 && slideIdx > 0 && (
                <button
                  type="button"
                  onClick={() => goToSlide(slideIdx - 1)}
                  className="flex items-center gap-1 rounded-lg border border-sky-300 bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-800 hover:bg-sky-100"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span>ส่วนก่อนหน้า</span>
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => setDrawer((d) => (d === 'workshop' ? 'none' : 'workshop'))}
              className="flex items-center gap-1.5 rounded-lg border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-900 hover:bg-amber-100"
            >
              <Database className="h-3.5 w-3.5" />
              <span>Workshop Data (CSV)</span>
            </button>

            <div className="flex items-center gap-2">
              {slides.length > 1 && slideIdx < slides.length - 1 && (
                <button
                  type="button"
                  onClick={() => goToSlide(slideIdx + 1)}
                  className="flex items-center gap-1 rounded-lg border border-sky-600 bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-900 hover:bg-sky-100"
                >
                  <span>ดูส่วนถัดไป ({slideIdx + 2}/{slides.length})</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              )}

              {screen.nextScreenId ? (
                <a
                  href={`/module-01/${screen.nextScreenId}`}
                  className="rounded-lg bg-sky-700 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white hover:bg-sky-800"
                >
                  หน้าถัดไป →
                </a>
              ) : (
                <a
                  href="/"
                  className="rounded-lg bg-emerald-700 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white hover:bg-emerald-800"
                >
                  จบ Module 1 ✓
                </a>
              )}
            </div>
          </div>
        </footer>

      {/* Slide-over Drawers */}
      {drawer !== 'none' && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/50">
          <div className="h-full w-full max-w-xl overflow-y-auto bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="text-lg font-extrabold text-slate-900">
                {drawer === 'resources' && 'Cheat Sheet & Glossary (Module 1)'}
                {drawer === 'workshop' && 'Workshop Raw CSV Data (Module 1)'}
                {drawer === 'nav' && 'สารบัญหน้าจอ Module 1 (29 Screens)'}
              </h2>
              <button
                type="button"
                onClick={() => setDrawer('none')}
                className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"
                aria-label="Close drawer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {drawer === 'resources' && <MarkdownContent markdown={moduleData.resourcesMarkdown} />}

            {drawer === 'nav' && (
              <div className="space-y-4">
                {moduleData.lessons.map((l) => (
                  <div key={l.id} className="space-y-1.5">
                    <div className="text-xs font-extrabold uppercase text-sky-800">
                      {l.id}: {l.title}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                      {l.screens.map((sid) => (
                        <a
                          key={sid}
                          href={`/module-01/${sid}`}
                          className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold ${
                            sid === screen.screenId
                              ? 'border-sky-600 bg-sky-50 text-sky-900'
                              : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {sid}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {drawer === 'workshop' && (
              <div className="space-y-4 text-xs">
                <p className="text-slate-600">
                  ข้อมูลโรงงานจริงจาก <code>workshop_m1_dimensions_and_defects.csv</code> (30 ตัวอย่าง):
                </p>
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="p-2">#</th>
                        <th className="p-2">MC</th>
                        <th className="p-2">Temp</th>
                        <th className="p-2">OD (mm)</th>
                        <th className="p-2">Defect</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {moduleData.workshops.dimensionsAndDefects.map((r) => (
                        <tr key={r.Sample_No}>
                          <td className="p-2 font-mono">{r.Sample_No}</td>
                          <td className="p-2">{r.Machine}</td>
                          <td className="p-2">{r.Mold_Temp_C}°C</td>
                          <td className="p-2 font-mono font-bold">{r.Shaft_Diameter_mm}</td>
                          <td className="p-2">{r.Defect_Type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
