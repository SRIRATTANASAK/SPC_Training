import React, { useMemo, useState } from 'react';
import { getProgressStore } from '../../lib/storage';

type PopShape = 'Skewed' | 'Uniform' | 'Bimodal' | 'Normal';

function sampleFromPop(shape: PopShape, u1: number, u2: number): number {
  const safeU1 = Math.max(0.0001, Math.min(0.9999, u1));
  const safeU2 = Math.max(0.0001, Math.min(0.9999, u2));
  if (shape === 'Skewed') {
    // Exponential(1) shifted to mean 20.00, scale 0.03
    const expVal = -Math.log(1 - safeU1);
    return 20.0 + (expVal - 1.0) * 0.03;
  }
  if (shape === 'Uniform') {
    // Uniform with mean 20.00, sd 0.03 -> half-width = sqrt(3)*0.03
    return 20.0 + (safeU1 - 0.5) * 2 * Math.sqrt(3) * 0.03;
  }
  if (shape === 'Bimodal') {
    const z = Math.sqrt(-2 * Math.log(safeU1)) * Math.cos(2 * Math.PI * safeU2);
    const modeShift = safeU2 < 0.5 ? -0.026 : 0.026;
    return 20.0 + modeShift + z * 0.015;
  }
  // Normal(20.00, 0.03)
  const z = Math.sqrt(-2 * Math.log(safeU1)) * Math.cos(2 * Math.PI * safeU2);
  return 20.0 + z * 0.03;
}

export const CltSimulator: React.FC = () => {
  const [popShape, setPopShape] = useState<PopShape>('Skewed');
  const [sampleSize, setSampleSize] = useState<number>(5);
  const [seed, setSeed] = useState(1);
  const [triedSizes, setTriedSizes] = useState<Set<number>>(() => new Set([5]));

  const sim = useMemo(() => {
    const numSubgroups = 500;
    const means: number[] = [];
    for (let g = 0; g < numSubgroups; g++) {
      let sum = 0;
      for (let i = 0; i < sampleSize; i++) {
        const k = seed * 10007 + g * 37 + i * 13 + 1;
        const u1 = ((Math.sin(k * 12.9898) * 43758.5453) % 1 + 1) % 1;
        const u2 = ((Math.cos(k * 78.233) * 43758.5453) % 1 + 1) % 1;
        sum += sampleFromPop(popShape, u1, u2);
      }
      means.push(sum / sampleSize);
    }

    const avgMean = means.reduce((a, b) => a + b, 0) / means.length;
    const variance = means.reduce((acc, v) => acc + Math.pow(v - avgMean, 2), 0) / (means.length - 1);
    const actualSe = Math.sqrt(variance);
    const theoreticalSe = 0.03 / Math.sqrt(sampleSize);

    // Build 19 bins from 19.91 to 20.09
    const bins = Array.from({ length: 19 }, (_, idx) => ({
      center: 19.91 + idx * 0.01,
      count: 0,
    }));
    for (const m of means) {
      const idx = Math.max(0, Math.min(18, Math.round((m - 19.91) / 0.01)));
      bins[idx].count++;
    }
    const maxCount = Math.max(1, ...bins.map((b) => b.count));

    return { avgMean, actualSe, theoreticalSe, bins, maxCount };
  }, [popShape, sampleSize, seed]);

  const handleSizeChange = (n: number) => {
    setSampleSize(n);
    const next = new Set(triedSizes);
    next.add(n);
    setTriedSizes(next);
    if (next.size >= 2) {
      const store = getProgressStore('M2');
      const cur = store.load();
      store.save({
        var_lesson_scores: {
          ...cur.var_lesson_scores,
          L4: Math.max(cur.var_lesson_scores.L4 ?? 0, 10),
        },
      });
    }
  };

  return (
    <div className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
        <div>
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
            Live Central Limit Theorem (CLT) Simulator — 500 Subgroups (INT-M2-L4-01)
          </h3>
          <p className="text-xs text-slate-600">
            เลือกรูปทรงประชากรดิบ (σ = 0.0300 mm) แล้วปรับขนาดตัวอย่าง n เพื่อดูการแจกแจงของค่าเฉลี่ย X̄ ลู่เข้าสู่ Normal
          </p>
        </div>
        <button
          type="button"
          onClick={() => setSeed((s) => s + 1)}
          className="rounded-lg border border-slate-300 bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-800 hover:bg-slate-200 cursor-pointer"
        >
          สุ่ม 500 กลุ่มใหม่ (Re-simulate)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <div className="text-xs font-bold text-slate-700">1. เลือกรูปร่างประชากรตั้งต้น (Population Shape):</div>
          <div className="flex flex-wrap gap-1.5">
            {(
              [
                { id: 'Skewed', label: 'Right-Skewed (เบ้ขวา)' },
                { id: 'Uniform', label: 'Uniform (แบนราบ)' },
                { id: 'Bimodal', label: 'Bimodal (2 ยอด)' },
                { id: 'Normal', label: 'Normal (ระฆังคว่ำ)' },
              ] as const
            ).map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setPopShape(s.id)}
                className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition cursor-pointer ${
                  popShape === s.id
                    ? 'border-sky-700 bg-sky-700 text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="text-xs font-bold text-slate-700">2. เลือกขนาดกลุ่มตัวอย่าง (Subgroup Size n):</div>
          <div className="flex flex-wrap gap-1.5">
            {[1, 2, 5, 10, 15, 30].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => handleSizeChange(n)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                  sampleSize === n
                    ? 'border-emerald-700 bg-emerald-700 text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                n = {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Histogram of 500 Sample Means */}
      <div className="rounded-xl border border-slate-200 bg-slate-950 p-3 text-white">
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-300 mb-1">
          <span>
            Sampling Distribution of X̄ (ประชากร: <strong className="text-amber-300">{popShape}</strong> → สุ่มกลุ่มละ{' '}
            <strong className="text-emerald-300">n = {sampleSize}</strong> จำนวน 500 กลุ่ม)
          </span>
          <span className="font-mono text-sky-300">
            ความแคบลง: √{sampleSize} = {Math.sqrt(sampleSize).toFixed(2)}×
          </span>
        </div>
        <svg viewBox="0 0 540 175" className="w-full">
          <line x1="35" y1="145" x2="505" y2="145" stroke="#475569" strokeWidth="1.5" />
          {/* Mean reference at center bin (idx=9) */}
          <line x1="270" y1="15" x2="270" y2="145" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 2" />
          {sim.bins.map((b, idx) => {
            const bw = 20;
            const x = 45 + idx * 24;
            const h = (b.count / sim.maxCount) * 115;
            return (
              <g key={idx}>
                <rect
                  x={x}
                  y={145 - h}
                  width={bw}
                  height={h}
                  fill={sampleSize >= 5 ? '#38bdf8' : '#f59e0b'}
                  opacity="0.88"
                  rx="2"
                />
                {idx % 3 === 0 && (
                  <text x={x + bw / 2} y="160" textAnchor="middle" className="fill-slate-400 text-[9px]">
                    {b.center.toFixed(2)}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
          <div className="text-[11px] text-slate-500">Population SD (σ)</div>
          <div className="font-mono text-sm font-extrabold text-slate-900">0.0300 mm</div>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-2.5">
          <div className="text-[11px] text-emerald-800">Theoretical SE (σ / √n)</div>
          <div className="font-mono text-sm font-extrabold text-emerald-950">
            {sim.theoreticalSe.toFixed(4)} mm
          </div>
        </div>
        <div className="rounded-lg border border-sky-200 bg-sky-50 p-2.5">
          <div className="text-[11px] text-sky-800">Simulated SD of X̄</div>
          <div className="font-mono text-sm font-extrabold text-sky-950">
            {sim.actualSe.toFixed(4)} mm
          </div>
        </div>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-2.5">
          <div className="text-[11px] text-amber-900">Mean of X̄ (μ_x̄)</div>
          <div className="font-mono text-sm font-extrabold text-amber-950">
            {sim.avgMean.toFixed(4)} mm
          </div>
        </div>
      </div>
    </div>
  );
};
