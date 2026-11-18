import React, { useEffect, useMemo, useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Database, Layers, ListChecks, X } from 'lucide-react';
import type { ModulePayload, ScreenItem } from '../lib/types';
import { progressStore } from '../lib/storage';
import { InlineMarkdown, MarkdownContent } from './MarkdownContent';
import { AssetViewer } from './visuals/AssetViewer';
import { FishboneDiagram } from './visuals/FishboneDiagram';
import { InteractiveRouter } from './interactives/InteractiveRouter';
import { AudioPlayerBar } from './AudioPlayerBar';
import { withBase } from '../lib/base';

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
  const [audioTime, setAudioTime] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);

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
    setAudioTime(0);
    setAudioPlaying(false);
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
      window.location.href = withBase(`/module-01/${screen.nextScreenId}`);
    }
  };

  const progressPct = Math.round((screen.index / moduleData.totalScreens) * 100);
  const currentSlide = slides[slideIdx] ?? slides[0];

  const headerLeft = (
    <div className="flex items-center gap-2.5 min-w-0">
      <a
        href={withBase('/')}
        className="shrink-0 rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-extrabold text-white hover:bg-slate-800 transition"
      >
        SPC Training
      </a>
      <div className="flex items-center gap-1.5 text-xs sm:text-sm min-w-0 truncate">
        <span className="font-bold text-sky-800 shrink-0">{screen.lessonId}</span>
        <span className="text-slate-300 shrink-0">/</span>
        <span className="font-bold text-slate-800 shrink-0">{screen.screenId}</span>
        <span className="text-slate-300 shrink-0">—</span>
        <span className="font-semibold text-slate-800 truncate" title={`${screen.lessonTitle}: ${screen.title}`}>
          <span className="text-slate-800 font-bold">{screen.lessonTitle}</span>
          <span className="mx-1.5 text-slate-400 font-normal">:</span>
          <span className="text-slate-600 font-medium">{screen.title}</span>
        </span>
      </div>
    </div>
  );

  const headerRight = (
    <>
      <div className="hidden lg:flex h-8 items-center gap-2 mr-1">
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
        onTimeUpdate={setAudioTime}
        onPlayStateChange={setAudioPlaying}
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
              <div className="flex h-full flex-col items-center justify-center gap-4 w-full max-w-6xl mx-auto">
                <AssetViewer assetIds={screen.assetIds} screenId={screen.screenId} />
                <div className="w-full max-w-5xl xl:max-w-6xl rounded-2xl border border-slate-200 bg-slate-50/90 px-6 py-4 text-center text-sm sm:text-base leading-relaxed text-slate-800 shadow-sm transition-all">
                  พื้นฐานสถิติสำหรับงานวิศวกรรมการผลิต ในโรงงานอุตสาหกรรม ไม่ว่าเครื่องจักรจะใหม่แค่ไหน
                  หรือช่างจะเก่งเพียงใด ไม่มีกระบวนการผลิตไหนที่ทำชิ้นงานออกมาได้เท่ากันเป๊ะร้อยเปอร์เซ็นต์ทุกชิ้น
                  ความแตกต่างเล็กๆ น้อยๆ ตามธรรมชาตินี้ เราเรียกว่า{' '}
                  <strong className="text-sky-800 font-bold whitespace-nowrap">ความแปรปรวน หรือ Variation</strong>
                </div>
              </div>
            ) : screen.screenId === 'M1L1-S02' ? (
              <div className="flex h-full flex-col items-center justify-start gap-3 w-full max-w-5xl xl:max-w-6xl mx-auto pt-0 sm:pt-1">
                <div className="w-full max-w-3xl lg:max-w-4xl">
                  <AssetViewer assetIds={screen.assetIds} screenId={screen.screenId} />
                </div>
                {/* 3x3 Comparison Table: Dimension vs Gut Feeling vs Data-Driven */}
                <div className="w-full max-w-3xl lg:max-w-4xl">
                  <div className="overflow-hidden rounded-xl border border-slate-300 shadow-sm bg-white">
                    <table className="w-full border-collapse text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-slate-300 bg-slate-900 text-white">
                          <th className="w-[24%] px-4 py-2.5 border-r border-slate-700 font-extrabold text-slate-100">
                            มิติการตัดสินใจ
                          </th>
                          <th className="w-[38%] px-4 py-2.5 border-r border-slate-700 font-extrabold text-amber-200">
                            แบบเดิม (Gut Feeling / ประสบการณ์ล้วน)
                          </th>
                          <th className="w-[38%] px-4 py-2.5 font-extrabold text-sky-200">
                            แบบ Data-Driven Decision (ใช้สถิติ)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-2.5 border-r border-slate-200 font-bold text-slate-900 bg-slate-50/70">
                            การหาสาเหตุ
                          </td>
                          <td className="px-4 py-2.5 border-r border-slate-200 text-slate-700 leading-relaxed">
                            ลองผิดลองถูก ปรับตั้งเครื่องไปเรื่อยๆ
                          </td>
                          <td className="px-4 py-2.5 text-sky-950 font-medium bg-sky-50/40 leading-relaxed">
                            วัดผลและทดสอบสมมติฐาน ชี้เป้าสาเหตุจริง
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-2.5 border-r border-slate-200 font-bold text-slate-900 bg-slate-50/70">
                            มุมมองความเห็น
                          </td>
                          <td className="px-4 py-2.5 border-r border-slate-200 text-slate-700 leading-relaxed">
                            เถียงกันตามความเห็นของแต่ละกะ/แผนก
                          </td>
                          <td className="px-4 py-2.5 text-sky-950 font-medium bg-sky-50/40 leading-relaxed">
                            ใช้ตัวเลขกลางชุดเดียวกัน คุยด้วยหลักฐาน
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-2.5 border-r border-slate-200 font-bold text-slate-900 bg-slate-50/70">
                            จังหวะการแก้ไข
                          </td>
                          <td className="px-4 py-2.5 border-r border-slate-200 text-slate-700 leading-relaxed">
                            รอให้ลูกค้าเคลมหรือเกิดของเสียกองโตก่อน (Reactive)
                          </td>
                          <td className="px-4 py-2.5 text-sky-950 font-medium bg-sky-50/40 leading-relaxed">
                            จับสัญญาณแนวโน้มก่อนหลุด Spec (Proactive)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : screen.screenId === 'M1L1-S04' && currentSlide.id === 'theory' ? (
              <div className="flex h-full flex-col items-center justify-start gap-2.5 w-full max-w-5xl xl:max-w-6xl mx-auto pt-0 sm:pt-1">
                {/* หมายเลข 1: ปรับตารางตัวอย่างอุตสาหกรรมให้สูงขึ้นและสวยงามเด่นชัด */}
                <div className="w-full">
                  <div className="overflow-hidden rounded-xl border border-slate-300 shadow-sm bg-white">
                    <table className="w-full border-collapse text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-slate-300 bg-slate-900 text-white">
                          <th className="w-[26%] px-3.5 py-2 border-r border-slate-700 font-extrabold text-slate-100">
                            อุตสาหกรรม (Industry)
                          </th>
                          <th className="w-[34%] px-3.5 py-2 border-r border-slate-700 font-extrabold text-amber-200">
                            ตัวแปรคุณภาพที่ควบคุม
                          </th>
                          <th className="w-[40%] px-3.5 py-2 font-extrabold text-sky-200">
                            ตัวอย่างการประยุกต์ใช้สถิติ
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-3.5 py-1.5 border-r border-slate-200 font-bold text-slate-900 bg-slate-50/70">
                            1. Machining (CNC)
                          </td>
                          <td className="px-3.5 py-1.5 border-r border-slate-200 font-mono text-slate-800">
                            เส้นผ่านศูนย์กลางเพลา 50.00 ± 0.05 mm
                          </td>
                          <td className="px-3.5 py-1.5 text-slate-700 leading-snug">
                            ติดตามการสึกหรอของมีดกลึง (Tool Wear) ก่อนหลุดสเปก
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-3.5 py-1.5 border-r border-slate-200 font-bold text-slate-900 bg-slate-50/70">
                            2. Injection Molding
                          </td>
                          <td className="px-3.5 py-1.5 border-r border-slate-200 text-slate-800">
                            น้ำหนักชิ้นงาน (Shot Weight)
                          </td>
                          <td className="px-3.5 py-1.5 text-slate-700 leading-snug">
                            เปรียบเทียบความสม่ำเสมอระหว่าง Cavity 1–4
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-3.5 py-1.5 border-r border-slate-200 font-bold text-slate-900 bg-slate-50/70">
                            3. Stamping
                          </td>
                          <td className="px-3.5 py-1.5 border-r border-slate-200 text-slate-800">
                            ความหนาแผ่นโลหะ &amp; จำนวนครีบ (Burr)
                          </td>
                          <td className="px-3.5 py-1.5 text-slate-700 leading-snug">
                            ควบคุมแรงกดปั๊มและนับความถี่จุดบกพร่อง
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-3.5 py-1.5 border-r border-slate-200 font-bold text-slate-900 bg-slate-50/70">
                            4. Electronics / Assembly
                          </td>
                          <td className="px-3.5 py-1.5 border-r border-slate-200 text-slate-800">
                            แรงบิดขันสกรู (Torque)
                          </td>
                          <td className="px-3.5 py-1.5 text-slate-700 leading-snug">
                            คุมค่าเฉลี่ยแรงบิดและจัดอันดับ Defect ด้วย Pareto
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* หมายเลข 2: Fishbone Diagram หัวปลาคือ "ความแปรปรวน" พร้อมก้างปลาขึ้นตามเสียงบรรยาย */}
                <div className="w-full">
                  <FishboneDiagram audioTime={audioTime} isPlaying={audioPlaying} />
                </div>
              </div>
            ) : screen.screenId === 'M1L1-S05' ? (
              <div className="flex h-full flex-col items-center justify-start gap-4 sm:gap-5 w-full max-w-5xl xl:max-w-6xl mx-auto pt-1 sm:pt-2">
                {/* ข้อ 2: นำ 2 หลักคิดขึ้นด้านบน และปรับขนาดตัวหนังสือให้ใหญ่ขึ้น ชัดเจน โดดเด่น */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 w-full">
                  {/* กล่องหลักคิดที่ 1 */}
                  <div className="rounded-xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-4 shadow-sm hover:shadow transition">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-sky-700 text-white font-extrabold text-xs shadow-sm">
                        1
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                        All work is a process
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      ทุกงานในโรงงานคือกระบวนการที่เชื่อมโยงกัน{' '}
                      <span className="font-mono text-sm sm:text-base font-semibold text-sky-700 whitespace-nowrap bg-sky-100/70 px-2 py-0.5 rounded-md border border-sky-300/60">
                        Input → Process → Output
                      </span>
                    </p>
                  </div>

                  {/* กล่องหลักคิดที่ 2 */}
                  <div className="rounded-xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-4 shadow-sm hover:shadow transition">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-700 text-white font-extrabold text-xs shadow-sm">
                        2
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-800">
                        Variation exists in all processes
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      ทุกกระบวนการมีความแปรปรวนอยู่เสมอ{' '}
                      <span className="font-mono text-sm sm:text-base font-semibold text-indigo-700 whitespace-nowrap bg-indigo-100/70 px-2 py-0.5 rounded-md border border-indigo-300/60">
                        (เสถียร ≠ เท่ากันทุกชิ้น)
                      </span>
                    </p>
                  </div>
                </div>

                {/* ข้อ 3: ตารางเปรียบเทียบความแปรปรวน สมดุลกับหน้าต่าง และตัวหนังสือใหญ่ขึ้น คมชัด สวยงาม */}
                <div className="w-full">
                  <div className="overflow-hidden rounded-xl border border-slate-300 shadow-sm bg-white">
                    <table className="w-full border-collapse text-left">
                      <thead>
                        <tr className="border-b border-slate-300 bg-slate-900 text-white">
                          <th className="w-[23%] px-4 py-3 border-r border-slate-700 text-sm sm:text-base font-extrabold text-slate-100">
                            ประเภทความแปรปรวน
                          </th>
                          <th className="w-[27%] px-4 py-3 border-r border-slate-700 text-sm sm:text-base font-extrabold text-amber-200">
                            สาเหตุ (Causes)
                          </th>
                          <th className="w-[25%] px-4 py-3 border-r border-slate-700 text-sm sm:text-base font-extrabold text-sky-200">
                            พฤติกรรมของกระบวนการ
                          </th>
                          <th className="w-[25%] px-4 py-3 text-sm sm:text-base font-extrabold text-emerald-200">
                            การจัดการที่ถูกต้อง
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-sm sm:text-base">
                        {/* แถวที่ 1: Normal Variation */}
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3.5 border-r border-slate-200 bg-slate-50/70">
                            <div className="font-bold text-slate-900">
                              Normal Variation
                            </div>
                            <div className="text-xs text-slate-500 font-medium">
                              (Common Cause / ผันแปรปกติ)
                            </div>
                          </td>
                          <td className="px-4 py-3.5 border-r border-slate-200 text-slate-700 leading-relaxed">
                            สภาพแวดล้อม, การสั่นสะเทือนตามธรรมชาติของเครื่องจักร
                          </td>
                          <td className="px-4 py-3.5 border-r border-slate-200 leading-relaxed">
                            <span className="inline-block rounded-md bg-emerald-100 px-2 py-0.5 text-xs sm:text-sm font-bold text-emerald-800 border border-emerald-300 mb-1">
                              In Control
                            </span>
                            <div className="text-slate-700 text-xs sm:text-sm">
                              แกว่งตัวสม่ำเสมอในขอบเขตปกติ
                            </div>
                          </td>
                          <td className="px-4 py-3.5 bg-amber-50/30 leading-relaxed">
                            <div className="font-bold text-rose-700 text-sm sm:text-base">
                              ห้ามปรับตั้งเครื่องมั่ว
                            </div>
                            <div className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
                              (ห้าม <strong className="text-rose-800">Tampering</strong> จะยิ่งทำให้เครื่องแกว่งหนักขึ้น)
                            </div>
                          </td>
                        </tr>

                        {/* แถวที่ 2: Abnormal Variation */}
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3.5 border-r border-slate-200 bg-slate-50/70">
                            <div className="font-bold text-slate-900">
                              Abnormal Variation
                            </div>
                            <div className="text-xs text-slate-500 font-medium">
                              (Special Cause / ผิดปกติ)
                            </div>
                          </td>
                          <td className="px-4 py-3.5 border-r border-slate-200 text-slate-700 leading-relaxed">
                            มีดกลึงแตก (Tool wear), วัตถุดิบผิดสเปก, ช่างตั้งค่าผิด
                          </td>
                          <td className="px-4 py-3.5 border-r border-slate-200 leading-relaxed">
                            <span className="inline-block rounded-md bg-rose-100 px-2 py-0.5 text-xs sm:text-sm font-bold text-rose-800 border border-rose-300 mb-1">
                              Out of Control
                            </span>
                            <div className="text-slate-700 text-xs sm:text-sm">
                              หลุดเส้นควบคุม หรือเกิดแนวโน้มผิดปกติ
                            </div>
                          </td>
                          <td className="px-4 py-3.5 bg-sky-50/30 leading-relaxed">
                            <div className="font-bold text-sky-900 text-sm sm:text-base">
                              หยุดเครื่องและค้นหาสาเหตุรากเหง้า
                            </div>
                            <div className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
                              (<strong className="text-sky-950">Root Cause</strong>) ทันทีเพื่อขจัดต้นตอ
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : screen.screenId === 'M1L2-S02' ? (
              <div className="flex h-full flex-col items-center justify-start gap-4 sm:gap-5 w-full max-w-5xl xl:max-w-6xl mx-auto pt-1 sm:pt-2">
                {/* 2 Concept Highlight Cards on top */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 w-full">
                  <div className="rounded-xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-3.5 sm:p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-sky-700 text-white font-extrabold text-xs shadow-sm">
                        C
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                        Continuous Data (ข้อมูลต่อเนื่อง)
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      ได้จากการ <strong className="text-sky-800">"วัดค่า"</strong> ตามความละเอียดของเครื่องมือวัด ซอยเป็นทศนิยมได้ไม่สิ้นสุด
                    </p>
                  </div>

                  <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-3.5 sm:p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-600 text-white font-extrabold text-xs shadow-sm">
                        A
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                        Attribute Data (ข้อมูลเชิงคุณลักษณะ)
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      ได้จากการ <strong className="text-amber-800">"นับจำนวนหรือจัดหมวดหมู่"</strong> เป็นจำนวนเต็มชัดเจน ไม่มีทศนิยม
                    </p>
                  </div>
                </div>

                {/* Enhanced 3x3 Comparison Table */}
                <div className="w-full">
                  <div className="overflow-hidden rounded-xl border border-slate-300 shadow-sm bg-white">
                    <table className="w-full border-collapse text-left">
                      <thead>
                        <tr className="border-b border-slate-300 bg-slate-900 text-white">
                          <th className="w-[22%] px-4 sm:px-5 py-3 border-r border-slate-700 text-sm sm:text-base font-extrabold text-slate-100">
                            มิติเปรียบเทียบ
                          </th>
                          <th className="w-[39%] px-4 sm:px-5 py-3 border-r border-slate-700 text-sm sm:text-base font-extrabold text-sky-200">
                            Continuous Data (ข้อมูลต่อเนื่อง)
                          </th>
                          <th className="w-[39%] px-4 sm:px-5 py-3 text-sm sm:text-base font-extrabold text-amber-200">
                            Attribute Data (ข้อมูลเชิงคุณลักษณะ)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-sm sm:text-base">
                        {/* แถวที่ 1: ลักษณะค่าข้อมูล */}
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 sm:px-5 py-3.5 sm:py-4 border-r border-slate-200 font-bold text-slate-900 bg-slate-50/70 align-top">
                            ลักษณะค่าข้อมูล
                          </td>
                          <td className="px-4 sm:px-5 py-3.5 sm:py-4 border-r border-slate-200 text-slate-700 leading-relaxed bg-sky-50/20 align-top">
                            <div>
                              แบ่งย่อยเป็นทศนิยมได้ไม่สิ้นสุดตามความละเอียดของเครื่องมือวัด
                            </div>
                            <div className="mt-1.5 flex flex-wrap gap-1.5 text-xs text-sky-800 font-semibold">
                              <span className="rounded bg-sky-100 px-2 py-0.5 border border-sky-300">
                                ซอยละเอียดเป็นช่วงต่อเนื่อง (Continuum)
                              </span>
                            </div>
                          </td>
                          <td className="px-4 sm:px-5 py-3.5 sm:py-4 text-slate-700 leading-relaxed bg-amber-50/20 align-top">
                            <div>
                              เป็นจำนวนนับเต็มหน่วย หรือหมวดหมู่ชัดเจน (ไม่มีทศนิยม)
                            </div>
                            <div className="mt-1.5 flex flex-wrap gap-1.5 text-xs text-amber-900 font-semibold">
                              <span className="rounded bg-amber-100 px-2 py-0.5 border border-amber-300">
                                นับเป็นจำนวนเต็มชัดเจน (ไม่มี 1.5 จุด)
                              </span>
                            </div>
                          </td>
                        </tr>

                        {/* แถวที่ 2: ตัวอย่างในโรงงาน */}
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 sm:px-5 py-3.5 sm:py-4 border-r border-slate-200 font-bold text-slate-900 bg-slate-50/70 align-top">
                            ตัวอย่างในโรงงาน
                          </td>
                          <td className="px-4 sm:px-5 py-3.5 sm:py-4 border-r border-slate-200 text-slate-800 leading-relaxed bg-sky-50/20 align-top">
                            <div className="font-semibold text-slate-900 mb-1">
                              ขนาดเพลา:
                            </div>
                            <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs sm:text-sm">
                              <span className="rounded bg-white px-2 py-0.5 border border-slate-300 text-sky-900 font-bold">50.00 mm</span>
                              <span className="text-slate-400">→</span>
                              <span className="rounded bg-white px-2 py-0.5 border border-slate-300 text-sky-900 font-bold">50.01 mm</span>
                              <span className="text-slate-400">→</span>
                              <span className="rounded bg-white px-2 py-0.5 border border-slate-300 text-sky-900 font-bold">50.014 mm</span>
                            </div>
                            <div className="text-xs text-slate-500 mt-1.5">
                              รวมถึงน้ำหนัก (g), แรงบิด (N·m), อุณหภูมิ (°C)
                            </div>
                          </td>
                          <td className="px-4 sm:px-5 py-3.5 sm:py-4 text-slate-800 leading-relaxed bg-amber-50/20 align-top">
                            <div className="font-semibold text-slate-900 mb-1">
                              จำนวนจุดเสีย &amp; สถานะ:
                            </div>
                            <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
                              <span className="rounded bg-white px-2 py-0.5 border border-slate-300 font-mono font-bold text-amber-900">0, 1, 2, 3 จุด</span>
                              <span className="text-slate-400">|</span>
                              <span className="rounded bg-white px-2 py-0.5 border border-slate-300 font-semibold text-slate-800">Pass / Fail</span>
                              <span className="text-slate-400">|</span>
                              <span className="rounded bg-white px-2 py-0.5 border border-slate-300 font-semibold text-slate-800">Day / Night</span>
                            </div>
                            <div className="text-xs text-slate-500 mt-1.5">
                              เช่น จำนวน Scratch, รอย Burr, ฟองอากาศ, คราบน้ำมัน
                            </div>
                          </td>
                        </tr>

                        {/* แถวที่ 3: ข้อควรระวังหน้างาน */}
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 sm:px-5 py-3.5 sm:py-4 border-r border-slate-200 font-bold text-slate-900 bg-slate-50/70 align-top">
                            ข้อควรระวังหน้างาน
                          </td>
                          <td className="px-4 sm:px-5 py-3.5 sm:py-4 border-r border-slate-200 text-slate-700 leading-relaxed bg-sky-50/20 align-top">
                            <div>
                              หากใช้เครื่องมือวัดหยาบเกินไป (Resolution ต่ำ เช่น อ่านได้ทีละ <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs text-slate-800">0.5 mm</code>) ข้อมูลจะกลายเป็นขั้นๆ จนวิเคราะห์ SPC ไม่แม่นยำ
                            </div>
                            <div className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-rose-50 border border-rose-300 px-2.5 py-1 text-xs font-bold text-rose-800">
                              ⚠️ ระวัง Chunky Data (Insufficient Discrimination)
                            </div>
                          </td>
                          <td className="px-4 sm:px-5 py-3.5 sm:py-4 text-slate-700 leading-relaxed bg-amber-50/20 align-top">
                            <div>
                              ต้องเก็บขนาดตัวอย่าง (<strong className="text-slate-900">Sample Size</strong>) ให้มากพอจึงจะเห็นแนวโน้มการเปลี่ยนแปลงและสัญญาณเตือน
                            </div>
                            <div className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-amber-100/80 border border-amber-300 px-2.5 py-1 text-xs font-bold text-amber-900">
                              💡 ต้องใช้ขนาดตัวอย่างมากกว่า Variable หลายเท่า
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : currentSlide.kind === 'visual-content' ? (
              <div
                className={
                  hasVisibleAsset && cleanMarkdown
                    ? 'grid grid-cols-1 lg:grid-cols-12 gap-5 items-center h-full'
                    : 'flex flex-col justify-center h-full w-full max-w-5xl xl:max-w-6xl mx-auto'
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
              <div className="min-h-full flex flex-col justify-start py-1">
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
                  href={withBase(`/module-01/${screen.prevScreenId}`)}
                  className="rounded-lg border border-slate-300 bg-white px-3.5 py-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  ← หน้าก่อนหน้า
                </a>
              ) : (
                <a
                  href={withBase('/')}
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
                  className="flex items-center gap-1.5 rounded-lg bg-sky-700 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white hover:bg-sky-800 shadow-sm transition"
                >
                  <span>ดูส่วนถัดไป ({slideIdx + 2}/{slides.length})</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              )}

              {slides.length > 1 && slideIdx < slides.length - 1 ? (
                <button
                  type="button"
                  disabled
                  title={`กรุณาเปิดดูหรือทำกิจกรรมให้ครบทุกส่วนก่อน (กำลังดูส่วนที่ ${slideIdx + 1} จาก ${slides.length})`}
                  className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-100 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-slate-400 cursor-not-allowed select-none"
                >
                  <span>หน้าถัดไป →</span>
                </button>
              ) : screen.nextScreenId ? (
                <a
                  href={withBase(`/module-01/${screen.nextScreenId}`)}
                  className="rounded-lg bg-sky-700 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white hover:bg-sky-800 shadow-sm transition"
                >
                  หน้าถัดไป →
                </a>
              ) : (
                <a
                  href={withBase('/')}
                  className="rounded-lg bg-emerald-700 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white hover:bg-emerald-800 shadow-sm transition"
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
                          href={withBase(`/module-01/${sid}`)}
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
