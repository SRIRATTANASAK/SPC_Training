import React, { useEffect, useState } from 'react';
import { BookOpen, Database, ListChecks, X } from 'lucide-react';
import type { ModulePayload, ScreenItem } from '../lib/types';
import { progressStore } from '../lib/storage';
import { MarkdownContent } from './MarkdownContent';
import { AssetViewer } from './visuals/AssetViewer';
import { InteractiveRouter } from './interactives/InteractiveRouter';
import { AudioPlayerBar } from './AudioPlayerBar';

interface Props {
  screen: ScreenItem;
  moduleData: ModulePayload;
}

export const ScreenStage: React.FC<Props> = ({ screen, moduleData }) => {
  const [completedCount, setCompletedCount] = useState(0);
  const [drawer, setDrawer] = useState<'none' | 'resources' | 'workshop' | 'nav'>('none');

  useEffect(() => {
    const next = progressStore.markScreenCompleted(screen.screenId);
    setCompletedCount(next.var_completed_screens.length);
  }, [screen.screenId]);

  const progressPct = Math.round((screen.index / moduleData.totalScreens) * 100);

  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-900">
      {/* Header (10%) */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <a href="/" className="rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-extrabold text-white">
              SPC Training
            </a>
            <div className="text-xs sm:text-sm">
              <span className="font-bold text-sky-800">{screen.lessonId}</span>
              <span className="mx-1.5 text-slate-400">/</span>
              <span className="font-semibold text-slate-700">{screen.screenId}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 mr-2">
              <div className="h-2 w-28 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full bg-sky-600 transition-all" style={{ width: `${progressPct}%` }} />
              </div>
              <span className="text-xs font-bold text-slate-600">
                {screen.index}/{moduleData.totalScreens} ({completedCount} อ่านแล้ว)
              </span>
            </div>

            <button
              type="button"
              onClick={() => setDrawer((d) => (d === 'nav' ? 'none' : 'nav'))}
              className="flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              <ListChecks className="h-3.5 w-3.5" />
              <span>สารบัญ</span>
            </button>
            <button
              type="button"
              onClick={() => setDrawer((d) => (d === 'resources' ? 'none' : 'resources'))}
              className="flex items-center gap-1 rounded-lg border border-sky-300 bg-sky-50 px-2.5 py-1.5 text-xs font-bold text-sky-900 hover:bg-sky-100"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>Resources</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area (75%) */}
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm">
          <div className="mb-1 text-xs font-bold uppercase tracking-wider text-sky-700">
            {screen.lessonId}: {screen.lessonTitle}
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-5">{screen.title}</h1>

          <div className="space-y-6">
            <AssetViewer assetIds={screen.assetIds} screenId={screen.screenId} />
            {screen.markdown && <MarkdownContent markdown={screen.markdown} />}
          </div>
        </div>

        <InteractiveRouter screen={screen} moduleData={moduleData} />
      </main>

      {/* Persistent Audio & Caption Bar (5%) */}
      <div className="sticky bottom-0 z-30 shadow-lg">
        <AudioPlayerBar voiceover={screen.voiceover} screenId={screen.screenId} />

        {/* Footer Navigation (10%) */}
        <footer className="border-t border-slate-200 bg-white px-4 py-2.5">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-2">
            {screen.prevScreenId ? (
              <a
                href={`/module-01/${screen.prevScreenId}`}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50"
              >
                ← Back
              </a>
            ) : (
              <a
                href="/"
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50"
              >
                ← หน้าแรก
              </a>
            )}

            <button
              type="button"
              onClick={() => setDrawer((d) => (d === 'workshop' ? 'none' : 'workshop'))}
              className="flex items-center gap-1.5 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-900 hover:bg-amber-100"
            >
              <Database className="h-3.5 w-3.5" />
              <span>Workshop Data (CSV)</span>
            </button>

            {screen.nextScreenId ? (
              <a
                href={`/module-01/${screen.nextScreenId}`}
                className="rounded-lg bg-sky-700 px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-sky-800"
              >
                Next →
              </a>
            ) : (
              <a
                href="/"
                className="rounded-lg bg-emerald-700 px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-emerald-800"
              >
                จบ Module 1 ✓
              </a>
            )}
          </div>
        </footer>
      </div>

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
