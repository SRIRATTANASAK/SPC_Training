import React, { useMemo, useState } from 'react';
import { getProgressStore } from '../../lib/storage';

// Pre-seeded population N=1000 with mean=20.000, sd=0.025
const POPULATION_1000: number[] = (() => {
  const arr: number[] = [];
  for (let i = 0; i < 1000; i++) {
    const u1 = ((i + 1) * 73) % 997 / 997 || 0.5;
    const u2 = ((i + 1) * 199) % 991 / 991 || 0.5;
    const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    arr.push(20.0 + z * 0.025);
  }
  return arr;
})();

export const SeriesFpySimulator: React.FC = () => {
  const [y1, setY1] = useState(0.95);
  const [y2, setY2] = useState(0.95);
  const [y3, setY3] = useState(0.95);
  const [sampleSize, setSampleSize] = useState<5 | 20 | 50>(5);
  const [biasedMode, setBiasedMode] = useState(false);
  const [drawSeed, setDrawSeed] = useState(1);
  const [testedSizes, setTestedSizes] = useState<Set<number>>(() => new Set([5]));

  const fpyTotal = y1 * y2 * y3;
  const defectRate = 1 - fpyTotal;

  const sampleStats = useMemo(() => {
    const picked: number[] = [];
    for (let i = 0; i < sampleSize; i++) {
      if (biasedMode) {
        // Biased top-layer convenience draw (systematically higher values +0.032 mm)
        const idx = (drawSeed * 13 + i) % POPULATION_1000.length;
        picked.push(POPULATION_1000[idx] + 0.032);
      } else {
        const idx = (drawSeed * 97 + i * 37) % POPULATION_1000.length;
        picked.push(POPULATION_1000[idx]);
      }
    }
    const mean = picked.reduce((a, b) => a + b, 0) / picked.length;
    const variance =
      picked.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / Math.max(1, picked.length - 1);
    const sd = Math.sqrt(variance);
    const error = Math.abs(mean - 20.0);
    const theoreticalSe = 0.025 / Math.sqrt(sampleSize);
    return { picked, mean, sd, error, theoreticalSe };
  }, [sampleSize, biasedMode, drawSeed]);

  const handleDraw = (n: 5 | 20 | 50, isBiased = false) => {
    setSampleSize(n);
    setBiasedMode(isBiased);
    setDrawSeed((s) => s + 1);
    const nextSet = new Set(testedSizes);
    nextSet.add(n);
    setTestedSizes(nextSet);
    if (nextSet.size >= 2) {
      const store = getProgressStore('M2');
      const cur = store.load();
      store.save({
        var_lesson_scores: {
          ...cur.var_lesson_scores,
          L2: Math.max(cur.var_lesson_scores.L2 ?? 0, 10),
        },
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
      {/* Part A: Series Line FPY Calculator */}
      <div className="lg:col-span-5 rounded-xl border border-slate-300 bg-white p-4 shadow-sm space-y-3">
        <div className="border-b border-slate-200 pb-2">
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
            Part A: Series Line First Pass Yield (FPY)
          </h3>
          <p className="text-xs text-slate-600">
            ปรับ Yield ของ 3 สถานีที่ต่ออนุกรมกัน: FPY = Y₁ × Y₂ × Y₃
          </p>
        </div>

        {[
          { label: 'Station 1 (CNC Roughing Y₁)', val: y1, set: setY1 },
          { label: 'Station 2 (Finish Boring Y₂)', val: y2, set: setY2 },
          { label: 'Station 3 (Honing & Wash Y₃)', val: y3, set: setY3 },
        ].map((st, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between text-xs font-bold text-slate-800">
              <span>{st.label}</span>
              <span className="font-mono text-sky-800">{(st.val * 100).toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="0.80"
              max="1.00"
              step="0.01"
              value={st.val}
              onChange={(e) => st.set(parseFloat(e.target.value))}
              className="w-full accent-sky-600 cursor-pointer"
            />
          </div>
        ))}

        <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700">Rolled FPY รวมทั้งสายการผลิต:</span>
            <span className="text-lg font-extrabold font-mono text-sky-900">
              {(fpyTotal * 100).toFixed(2)}%
            </span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200 flex">
            <div
              className="h-full bg-emerald-600 transition-all"
              style={{ width: `${(fpyTotal * 100).toFixed(1)}%` }}
            />
            <div
              className="h-full bg-rose-500 transition-all"
              style={{ width: `${(defectRate * 100).toFixed(1)}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-semibold">
            <span className="text-emerald-800">ผ่านตั้งแต่รอบแรก: {(fpyTotal * 100).toFixed(2)}%</span>
            <span className="text-rose-700">ของเสีย/ซ่อมสะสม: {(defectRate * 100).toFixed(2)}%</span>
          </div>
        </div>
      </div>

      {/* Part B: Population N=1000 Random Sampler */}
      <div className="lg:col-span-7 rounded-xl border border-slate-300 bg-white p-4 shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
              Part B: Population (N = 1,000) Random Sampler
            </h3>
            <p className="text-xs text-slate-600">
              ประชากรจริง: μ = 20.000 mm, σ = 0.025 mm — สังเกตความคลาดเคลื่อน |x̄ − μ| เมื่อเพิ่ม n
            </p>
          </div>
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-700">
            ทดลองแล้ว {testedSizes.size} ขนาดตัวอย่าง
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {([5, 20, 50] as const).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => handleDraw(n, false)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                !biasedMode && sampleSize === n
                  ? 'border-sky-700 bg-sky-700 text-white shadow-xs'
                  : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
              }`}
            >
              Draw Random n = {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleDraw(sampleSize, true)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              biasedMode
                ? 'border-rose-700 bg-rose-700 text-white shadow-xs'
                : 'border-rose-300 bg-rose-50 text-rose-900 hover:bg-rose-100'
            }`}
          >
            ⚠️ Biased Top-Layer Draw (n = {sampleSize})
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
            <div className="text-[11px] text-slate-500">Sample Mean (x̄)</div>
            <div className="font-mono text-sm font-extrabold text-slate-900">
              {sampleStats.mean.toFixed(4)} mm
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
            <div className="text-[11px] text-slate-500">Sample SD (s)</div>
            <div className="font-mono text-sm font-extrabold text-slate-900">
              {sampleStats.sd.toFixed(4)} mm
            </div>
          </div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-2.5">
            <div className="text-[11px] text-sky-800">Sampling Error |x̄ − μ|</div>
            <div className={`font-mono text-sm font-extrabold ${biasedMode ? 'text-rose-700' : 'text-sky-900'}`}>
              {sampleStats.error.toFixed(4)} mm
            </div>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-2.5">
            <div className="text-[11px] text-emerald-800">Theoretical SE (σ/√n)</div>
            <div className="font-mono text-sm font-extrabold text-emerald-950">
              {sampleStats.theoreticalSe.toFixed(4)} mm
            </div>
          </div>
        </div>

        {/* Visual Number Line comparing Population Mean vs Sample Mean */}
        <div className="rounded-xl border border-slate-200 bg-slate-900 p-3 text-white">
          <div className="text-[11px] text-slate-300 mb-1 flex justify-between">
            <span>แผนภาพเปรียบเทียบค่าเฉลี่ยตัวอย่าง (x̄) เทียบกับค่าเฉลี่ยประชากร (μ = 20.000 mm)</span>
            <span className="font-mono text-amber-300">
              {biasedMode ? 'โหมดสุ่มผิดวิธี (Convenience Bias)' : `สุ่มแบบไร้ความลำเอียง (Random n=${sampleSize})`}
            </span>
          </div>
          <svg viewBox="0 0 500 75" className="w-full">
            <line x1="30" y1="40" x2="470" y2="40" stroke="#475569" strokeWidth="2" />
            {/* Target 20.000 at x=250 */}
            <line x1="250" y1="15" x2="250" y2="62" stroke="#10b981" strokeWidth="2.5" />
            <text x="250" y="12" textAnchor="middle" className="fill-emerald-400 text-[10px] font-bold">
              μ = 20.000
            </text>
            {/* Individual sampled points */}
            {sampleStats.picked.slice(0, 25).map((val, i) => {
              const x = Math.max(30, Math.min(470, 250 + (val - 20.0) * 3200));
              return <circle key={i} cx={x} cy="40" r="3" fill="#38bdf8" opacity="0.65" />;
            })}
            {/* Sample Mean xbar marker */}
            {(() => {
              const xBarPos = Math.max(30, Math.min(470, 250 + (sampleStats.mean - 20.0) * 3200));
              return (
                <g>
                  <circle
                    cx={xBarPos}
                    cy="40"
                    r="6"
                    fill={biasedMode ? '#f43f5e' : '#f59e0b'}
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  <text
                    x={xBarPos}
                    y="68"
                    textAnchor="middle"
                    className="fill-amber-300 text-[10px] font-bold"
                  >
                    x̄ = {sampleStats.mean.toFixed(4)}
                  </text>
                </g>
              );
            })()}
          </svg>
        </div>
      </div>
    </div>
  );
};
