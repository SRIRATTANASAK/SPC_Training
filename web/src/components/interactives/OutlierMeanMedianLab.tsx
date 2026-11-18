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
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                Interactive Simulator
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
              แบบจำลองผลกระทบของ Outlier ต่อค่าเฉลี่ย
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setFifthValue(50.02)}
            className="rounded-lg border border-slate-300 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-700 hover:bg-slate-100 transition shadow-2xs"
          >
            รีเซ็ตค่าปกติ (50.02 mm)
          </button>
        </div>

        <div className="mb-3.5 rounded-xl bg-slate-50 p-3 sm:p-3.5 border border-slate-200">
          <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-1.5">
            <span>ปรับขนาดชิ้นที่ 5 (จำลองการหลุด Outlier):</span>
            <span className={`font-mono text-sm px-2 py-0.5 rounded ${fifthValue > 50.05 ? 'bg-rose-100 text-rose-800 font-extrabold border border-rose-300' : 'bg-slate-200 text-slate-900'}`}>
              {fifthValue.toFixed(2)} mm {fifthValue > 50.05 && '⚠️ Outlier!'}
            </span>
          </div>
          <input
            type="range"
            min={50.0}
            max={50.5}
            step={0.01}
            value={fifthValue}
            onChange={(e) => setFifthValue(Number(e.target.value))}
            className="w-full accent-rose-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
          />
          <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-semibold text-[11px]">ข้อมูล 5 ชิ้น:</span>
            {stats.arr.map((v, i) => (
              <span
                key={i}
                className={`rounded-lg px-2.5 py-1 font-mono text-xs font-bold transition-all ${
                  i === 4 && fifthValue > 50.05
                    ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-300'
                    : 'bg-white text-slate-800 border border-slate-300'
                }`}
              >
                #{i + 1}: {v.toFixed(2)}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
          <div className={`rounded-xl border p-2.5 transition-all ${fifthValue > 50.05 ? 'border-rose-300 bg-rose-50/80 shadow-xs ring-1 ring-rose-200' : 'border-slate-200 bg-slate-50'}`}>
            <div className="text-[11px] font-bold text-rose-700">
              Mean (X̄ {fifthValue > 50.05 ? 'ถูกดึงเอียง!' : 'ปกติ'})
            </div>
            <div className={`text-lg sm:text-xl font-black font-mono mt-0.5 ${fifthValue > 50.05 ? 'text-rose-700' : 'text-slate-900'}`}>
              {stats.mean.toFixed(3)}
            </div>
          </div>
          <div className="rounded-xl border border-emerald-300 bg-emerald-50/70 p-2.5 shadow-xs">
            <div className="text-[11px] font-bold text-emerald-800">Median (นิ่ง ทนทาน!)</div>
            <div className="text-lg sm:text-xl font-black font-mono text-emerald-900 mt-0.5">
              {stats.median.toFixed(3)}
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5">
            <div className="text-[11px] font-semibold text-slate-600">Range (R)</div>
            <div className="text-lg sm:text-xl font-bold font-mono text-slate-800 mt-0.5">{stats.range.toFixed(3)}</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5">
            <div className="text-[11px] font-semibold text-slate-600">Sample SD (s)</div>
            <div className="text-lg sm:text-xl font-bold font-mono text-slate-800 mt-0.5">{stats.sd.toFixed(3)}</div>
          </div>
        </div>
      </div>

      <div className="mt-3.5 pt-2 border-t border-slate-100">
        {fifthValue > 50.05 ? (
          <div className="rounded-xl border border-rose-300 bg-rose-50 p-3 text-xs text-rose-900 leading-relaxed shadow-xs flex items-start gap-2.5">
            <span className="text-base shrink-0">⚠️</span>
            <div>
              <span className="font-bold">ข้อสังเกตหน้างาน:</span> ชิ้นที่ 5 เพี้ยนเป็น <strong className="font-mono text-rose-700">{fifthValue.toFixed(2)} mm</strong> ดึงค่า <strong className="font-bold">Mean (X̄)</strong> ให้กระโดดจาก <span className="font-mono">50.004</span> ไปเป็น <strong className="font-mono text-rose-700">{stats.mean.toFixed(3)} mm</strong> ทันที! ในขณะที่ <strong className="text-emerald-800 font-bold">Median</strong> ยังคงนิ่งอยู่ที่ <strong className="font-mono text-emerald-800">{stats.median.toFixed(3)} mm</strong> แสดงว่า Mean ไวต่อค่า Outlier สูงมาก
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-3 text-xs text-sky-900 leading-relaxed shadow-xs flex items-start gap-2.5">
            <span className="text-base shrink-0">💡</span>
            <div>
              <span className="font-bold">สภาวะปกติ (ไม่มี Outlier):</span> ทั้ง Mean (<strong className="font-mono">{stats.mean.toFixed(3)}</strong>) และ Median (<strong className="font-mono">{stats.median.toFixed(3)}</strong>) มีค่าใกล้เคียงกันมาก แสดงว่าข้อมูลเกาะกลุ่มสมมาตรรอบจุดศูนย์กลาง
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
