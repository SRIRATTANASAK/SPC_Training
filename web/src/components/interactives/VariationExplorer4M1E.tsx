import React, { useMemo, useState } from 'react';
import { progressStore } from '../../lib/storage';

export const VariationExplorer4M1E: React.FC = () => {
  const [shift, setShift] = useState<'Day' | 'Night'>('Day');
  const [machine, setMachine] = useState<'MC-A' | 'MC-B'>('MC-A');
  const [material, setMaterial] = useState<'Lot-1' | 'Lot-2'>('Lot-1');
  const [changes, setChanges] = useState(0);

  const stats = useMemo(() => {
    let mean = 50.0;
    let sd = 0.015;
    let defectRate = 1.0;
    const causes: string[] = [];
    if (machine === 'MC-B') {
      mean += 0.04;
      sd = 0.03;
      defectRate += 3.5;
      causes.push('Machine (MC-B): แกนหมุนสึกหรอ ทำให้ Mean เลื่อน +0.04 mm และ SD เพิ่มเท่าตัว');
    }
    if (material === 'Lot-2') {
      sd += 0.015;
      defectRate += 2.0;
      causes.push('Material (Lot-2): ความแข็งวัตถุดิบไม่สม่ำเสมอ เพิ่ม SD +0.015 mm');
    }
    if (shift === 'Night') {
      mean += 0.01;
      defectRate += 0.8;
      causes.push('Manpower/Environment (Night): อุณหภูมิและความล้าช่วงกะดึกขยับ Mean +0.01 mm');
    }
    if (causes.length === 0) {
      causes.push('สภาวะมาตรฐาน (Baseline): Common Cause Variation ตามธรรมชาติ คุมอยู่กลาง Target');
    }
    return { mean, sd, defectRate, causes };
  }, [shift, machine, material]);

  const updateFactor = (fn: () => void) => {
    fn();
    setChanges((c) => {
      const next = c + 1;
      if (next >= 2) {
        const cur = progressStore.load();
        progressStore.save({
          var_lesson_scores: { ...cur.var_lesson_scores, L1: Math.max(cur.var_lesson_scores.L1, 5) },
        });
      }
      return next;
    });
  };

  // SVG normal curve mapping [49.88..50.16]
  const pathD = useMemo(() => {
    const pts: string[] = [];
    for (let i = 0; i <= 60; i++) {
      const xVal = 49.88 + (i / 60) * 0.28;
      const z = (xVal - stats.mean) / stats.sd;
      const pdf = Math.exp(-0.5 * z * z) / (stats.sd * Math.sqrt(2 * Math.PI));
      const px = 20 + (i / 60) * 440;
      const py = 140 - Math.min(pdf * 3.8, 118);
      pts.push(`${i === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
    }
    return pts.join(' ');
  }, [stats]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">INT-M1-L1-01</span>
          <h3 className="text-lg font-bold text-slate-900">4M1E Variation Explorer</h3>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          ทดลองเปลี่ยนปัจจัย: {changes}/2 {changes >= 2 ? '✓ ผ่านเกณฑ์ (+5 pts)' : ''}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        <div className="rounded-lg bg-slate-50 p-3 border border-slate-200">
          <div className="text-xs font-bold text-slate-600 mb-2">Shift (Manpower / Env)</div>
          <div className="flex gap-2">
            {(['Day', 'Night'] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => updateFactor(() => setShift(s))}
                className={`flex-1 rounded-md py-1.5 text-xs font-bold ${
                  shift === s ? 'bg-sky-700 text-white' : 'bg-white border border-slate-300 text-slate-700'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-slate-50 p-3 border border-slate-200">
          <div className="text-xs font-bold text-slate-600 mb-2">Machine</div>
          <div className="flex gap-2">
            {(['MC-A', 'MC-B'] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => updateFactor(() => setMachine(m))}
                className={`flex-1 rounded-md py-1.5 text-xs font-bold ${
                  machine === m ? 'bg-sky-700 text-white' : 'bg-white border border-slate-300 text-slate-700'
                }`}
              >
                {m === 'MC-A' ? 'MC-A (New)' : 'MC-B (Worn)'}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-slate-50 p-3 border border-slate-200">
          <div className="text-xs font-bold text-slate-600 mb-2">Material</div>
          <div className="flex gap-2">
            {(['Lot-1', 'Lot-2'] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => updateFactor(() => setMaterial(l))}
                className={`flex-1 rounded-md py-1.5 text-xs font-bold ${
                  material === l ? 'bg-sky-700 text-white' : 'bg-white border border-slate-300 text-slate-700'
                }`}
              >
                {l === 'Lot-1' ? 'Lot-1 (Normal)' : 'Lot-2 (Hard)'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <svg viewBox="0 0 480 165" className="w-full rounded-lg border border-slate-200 bg-slate-50">
          <line x1="20" y1="140" x2="460" y2="140" stroke="#94a3b8" strokeWidth="1.5" />
          {/* LSL=49.95, Target=50.00, USL=50.05 */}
          <line x1="130" y1="15" x2="130" y2="140" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="208" y1="15" x2="208" y2="140" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="287" y1="15" x2="287" y2="140" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="130" y="155" textAnchor="middle" className="fill-rose-700 text-[10px] font-bold">LSL 49.95</text>
          <text x="208" y="155" textAnchor="middle" className="fill-sky-700 text-[10px] font-bold">50.00</text>
          <text x="287" y="155" textAnchor="middle" className="fill-rose-700 text-[10px] font-bold">USL 50.05</text>
          <path d={pathD} fill="none" stroke="#1e40af" strokeWidth="3" />
        </svg>

        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-lg bg-sky-50 p-2.5 border border-sky-200">
              <div className="text-[11px] text-slate-600">Mean</div>
              <div className="text-base font-bold text-slate-900">{stats.mean.toFixed(3)} mm</div>
            </div>
            <div className="rounded-lg bg-sky-50 p-2.5 border border-sky-200">
              <div className="text-[11px] text-slate-600">SD (σ)</div>
              <div className="text-base font-bold text-slate-900">{stats.sd.toFixed(3)} mm</div>
            </div>
            <div
              className={`rounded-lg p-2.5 border ${
                stats.defectRate > 3 ? 'bg-rose-50 border-rose-300' : 'bg-emerald-50 border-emerald-200'
              }`}
            >
              <div className="text-[11px] text-slate-600">Defect Rate</div>
              <div className={`text-base font-bold ${stats.defectRate > 3 ? 'text-rose-700' : 'text-emerald-700'}`}>
                {stats.defectRate.toFixed(1)}%
              </div>
            </div>
          </div>
          <ul className="space-y-1.5 text-xs text-slate-700 bg-slate-50 rounded-lg p-3 border border-slate-200">
            {stats.causes.map((c, idx) => (
              <li key={idx}>• {c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
