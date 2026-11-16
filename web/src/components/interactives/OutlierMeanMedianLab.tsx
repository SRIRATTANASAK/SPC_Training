import React, { useMemo, useState } from 'react';

export const OutlierMeanMedianLab: React.FC = () => {
  const [fifthValue, setFifthValue] = useState(50.02);

  const stats = useMemo(() => {
    const arr = [49.99, 50.0, 50.0, 50.01, fifthValue];
    const sorted = [...arr].sort((a, b) => a - b);
    const mean = arr.reduce((s, v) => s + v, 0) / arr.length;
    const median = sorted[2];
    const range = sorted[4] - sorted[0];
    const variance = arr.reduce((s, v) => s + (v - mean) ** 2, 0) / (arr.length - 1);
    const sd = Math.sqrt(variance);
    return { arr, mean, median, range, sd };
  }, [fifthValue]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">INT-M1-L3-01</span>
          <h3 className="text-lg font-bold text-slate-900">Mean vs Median Outlier Lab</h3>
        </div>
        <button
          type="button"
          onClick={() => setFifthValue(50.02)}
          className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-200"
        >
          รีเซ็ต (50.02 mm)
        </button>
      </div>

      <div className="mb-4 rounded-lg bg-slate-50 p-3 border border-slate-200">
        <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
          <span>ปรับค่าชิ้นที่ 5 (จำลอง Outlier):</span>
          <span className="text-rose-700 font-bold">{fifthValue.toFixed(2)} mm</span>
        </div>
        <input
          type="range"
          min={50.0}
          max={50.5}
          step={0.01}
          value={fifthValue}
          onChange={(e) => setFifthValue(Number(e.target.value))}
          className="w-full accent-rose-600"
        />
        <div className="mt-2 flex flex-wrap gap-2 text-xs">
          {stats.arr.map((v, i) => (
            <span
              key={i}
              className={`rounded px-2 py-1 font-mono font-bold ${
                i === 4 && fifthValue > 50.05 ? 'bg-rose-100 text-rose-800 border border-rose-300' : 'bg-white border border-slate-200'
              }`}
            >
              {v.toFixed(2)}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
        <div className="rounded-lg border border-rose-200 bg-rose-50 p-2.5">
          <div className="text-[11px] text-rose-700">Mean (ถูกดึง!)</div>
          <div className="text-base font-extrabold text-rose-900">{stats.mean.toFixed(3)}</div>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-2.5">
          <div className="text-[11px] text-emerald-700">Median (นิ่ง!)</div>
          <div className="text-base font-extrabold text-emerald-900">{stats.median.toFixed(3)}</div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
          <div className="text-[11px] text-slate-600">Range (R)</div>
          <div className="text-base font-bold text-slate-900">{stats.range.toFixed(3)}</div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
          <div className="text-[11px] text-slate-600">SD (s)</div>
          <div className="text-base font-bold text-slate-900">{stats.sd.toFixed(3)}</div>
        </div>
      </div>
    </div>
  );
};
