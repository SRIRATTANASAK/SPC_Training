import React, { useMemo, useState } from 'react';
import type { DimensionDefectRow } from '../../lib/types';

interface Props {
  rows: DimensionDefectRow[];
}

type ChartTab = 'histogram' | 'boxplot' | 'pareto' | 'scatter' | 'run';

const DIAGNOSTICS = [
  {
    q: 'Q1: จาก Box Plot เปรียบเทียบ เครื่องจักรใดมีความแปรปรวนสูงกว่าและเกิดจุด Outlier (50.14 mm)?',
    options: [
      'A) MC-A (SD = 0.015 mm)',
      'B) MC-B (SD = 0.030 mm, มี Outlier 50.14 mm)',
      'C) ทั้งสองเครื่องนิ่งเท่ากัน',
      'D) สรุปไม่ได้จาก Box Plot',
    ],
    correct: 1,
    exp: 'กล่องของ MC-B กว้างกว่าและเลื่อนสูงขึ้น (Median = 50.04 mm) พร้อมจุด Outlier ที่ 50.14 mm',
  },
  {
    q: 'Q2: จาก Pareto Chart การแก้ไข Defect 2 อันดับแรกข้อใดจะช่วยลดจำนวนจุดเสียได้ถึง 86.7% (กฎ 80/20)?',
    options: [
      'A) Dent + Crack (13.3%)',
      'B) Burr + Dent (33.3%)',
      'C) Scratch (9) + Burr (4) = 13/15 (86.7%)',
      'D) Scratch + Crack (66.7%)',
    ],
    correct: 2,
    exp: 'Scratch (60.0%) และ Burr (26.7%) รวมกันคิดเป็น 86.7% ของจุดเสียทั้งหมด 15 จุด',
  },
  {
    q: 'Q3: จาก Scatter Plot และ Run Chart แนวโน้มขนาดเพลาที่ไหลสูงขึ้นช่วงบ่ายสัมพันธ์กับตัวแปรใดมากที่สุด?',
    options: [
      'A) ความสัมพันธ์เชิงลบกับอุณหภูมิแม่พิมพ์',
      'B) ความสัมพันธ์เชิงบวกแข็งแรงกับอุณหภูมิแม่พิมพ์ (Mold_Temp_C, r = +0.9949)',
      'C) ไม่มีความสัมพันธ์ใดๆ (r ≈ 0)',
      'D) เกิดจากการคัดงานเสียทิ้ง (Cliff shape)',
    ],
    correct: 1,
    exp: 'เมื่อ Mold_Temp_C สูงขึ้นจาก 179°C เป็น 192°C ขนาดเพลาขยายใหญ่ขึ้นตาม (r = +0.9949)',
  },
];

export const FactoryDashboardWorkshop: React.FC<Props> = ({ rows }) => {
  const [tab, setTab] = useState<ChartTab>('pareto');
  const [ans, setAns] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const parsed = useMemo(() => {
    const nums = rows.map((r) => ({
      no: Number(r.Sample_No),
      machine: r.Machine,
      temp: Number(r.Mold_Temp_C),
      diam: Number(r.Shaft_Diameter_mm),
      defects: Number(r.Defect_Count),
      type: r.Defect_Type,
    }));

    // Pareto aggregation
    const counts: Record<string, number> = {};
    for (const r of nums) {
      if (r.type && r.type !== 'None' && r.defects > 0) {
        counts[r.type] = (counts[r.type] ?? 0) + r.defects;
      }
    }
    const paretoSorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const totalDef = paretoSorted.reduce((s, [, v]) => s + v, 0);
    let cum = 0;
    const pareto = paretoSorted.map(([k, v]) => {
      cum += v;
      return { label: k, count: v, cumPct: totalDef ? (cum / totalDef) * 100 : 0 };
    });

    // Histogram bins [49.96..50.15] step 0.02
    const bins = Array.from({ length: 10 }, (_, i) => {
      const lo = 49.96 + i * 0.02;
      const hi = lo + 0.02;
      const count = nums.filter((r) => r.diam >= lo && (i === 9 ? r.diam <= hi : r.diam < hi)).length;
      return { label: lo.toFixed(2), count };
    });

    // Box plot stats by machine
    const boxFor = (mc: string) => {
      const vals = nums.filter((r) => r.machine === mc).map((r) => r.diam).sort((a, b) => a - b);
      const q = (p: number) => vals[Math.min(vals.length - 1, Math.floor(p * (vals.length - 1)))];
      return { mc, min: vals[0], q1: q(0.25), med: q(0.5), q3: q(0.75), max: vals[vals.length - 1] };
    };

    return { nums, pareto, totalDef, bins, boxes: [boxFor('MC-A'), boxFor('MC-B')] };
  }, [rows]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">INT-M1-L4-02</span>
          <h3 className="text-lg font-bold text-slate-900">Workshop 2: Factory Dashboard (30 Samples)</h3>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ['pareto', 'Pareto (Defects)'],
              ['histogram', 'Histogram'],
              ['boxplot', 'Box Plot (MC-A vs MC-B)'],
              ['scatter', 'Scatter (Temp vs OD)'],
              ['run', 'Run Chart (Time)'],
            ] as const
          ).map(([k, label]) => (
            <button
              key={k}
              type="button"
              onClick={() => setTab(k)}
              className={`rounded-lg px-2.5 py-1.5 text-xs font-bold ${
                tab === k ? 'bg-sky-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        {tab === 'pareto' && (
          <svg viewBox="0 0 520 200" className="w-full max-w-2xl mx-auto">
            <line x1="50" y1="160" x2="470" y2="160" stroke="#94a3b8" strokeWidth="1.5" />
            {parsed.pareto.map((p, i) => {
              const x = 80 + i * 95;
              const h = (p.count / 10) * 120;
              return (
                <g key={p.label}>
                  <rect x={x} y={160 - h} width="52" height={h} fill="#0284c7" rx="4" />
                  <text x={x + 26} y={154 - h} textAnchor="middle" className="fill-slate-900 text-[11px] font-bold">
                    {p.count}
                  </text>
                  <text x={x + 26} y="178" textAnchor="middle" className="fill-slate-700 text-[11px] font-semibold">
                    {p.label}
                  </text>
                  <text x={x + 26} y="192" textAnchor="middle" className="fill-amber-700 text-[10px] font-bold">
                    Cum {p.cumPct.toFixed(1)}%
                  </text>
                </g>
              );
            })}
          </svg>
        )}

        {tab === 'histogram' && (
          <svg viewBox="0 0 520 200" className="w-full max-w-2xl mx-auto">
            <line x1="35" y1="160" x2="495" y2="160" stroke="#94a3b8" strokeWidth="1.5" />
            {parsed.bins.map((b, i) => {
              const x = 42 + i * 44;
              const h = (b.count / 12) * 125;
              return (
                <g key={b.label}>
                  <rect x={x} y={160 - h} width="38" height={h} fill="#1e40af" rx="2" />
                  <text x={x + 19} y={154 - h} textAnchor="middle" className="fill-slate-800 text-[10px] font-bold">
                    {b.count > 0 ? b.count : ''}
                  </text>
                  <text x={x + 19} y="176" textAnchor="middle" className="fill-slate-600 text-[9px]">
                    {b.label}
                  </text>
                </g>
              );
            })}
          </svg>
        )}

        {tab === 'boxplot' && (
          <svg viewBox="0 0 520 190" className="w-full max-w-2xl mx-auto">
            <line x1="70" y1="155" x2="470" y2="155" stroke="#94a3b8" strokeWidth="1.5" />
            {parsed.boxes.map((b, idx) => {
              const y = idx === 0 ? 55 : 110;
              const mapX = (v: number) => 80 + ((v - 49.96) / 0.2) * 370;
              return (
                <g key={b.mc}>
                  <text x="20" y={y + 4} className="fill-slate-900 text-[12px] font-bold">{b.mc}</text>
                  <line x1={mapX(b.min)} y1={y} x2={mapX(b.max)} y2={y} stroke="#475569" strokeWidth="2" />
                  <rect
                    x={mapX(b.q1)}
                    y={y - 16}
                    width={Math.max(8, mapX(b.q3) - mapX(b.q1))}
                    height="32"
                    fill={idx === 0 ? '#bae6fd' : '#fde68a'}
                    stroke="#0f172a"
                    strokeWidth="2"
                    rx="3"
                  />
                  <line x1={mapX(b.med)} y1={y - 16} x2={mapX(b.med)} y2={y + 16} stroke="#dc2626" strokeWidth="3" />
                  <circle cx={mapX(b.max)} cy={y} r="4" fill="#dc2626" />
                </g>
              );
            })}
            <text x="80" y="175" className="fill-slate-600 text-[10px]">49.96 mm</text>
            <text x="260" y="175" className="fill-slate-600 text-[10px]">50.06 mm</text>
            <text x="430" y="175" className="fill-rose-700 text-[10px] font-bold">50.14+ mm</text>
          </svg>
        )}

        {tab === 'scatter' && (
          <svg viewBox="0 0 520 200" className="w-full max-w-2xl mx-auto">
            <line x1="50" y1="165" x2="480" y2="165" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="50" y1="20" x2="50" y2="165" stroke="#94a3b8" strokeWidth="1.5" />
            {parsed.nums.map((r) => {
              const cx = 60 + ((r.temp - 178) / 16) * 400;
              const cy = 155 - ((r.diam - 49.97) / 0.18) * 125;
              return (
                <circle
                  key={r.no}
                  cx={cx}
                  cy={cy}
                  r="4.5"
                  fill={r.machine === 'MC-A' ? '#0284c7' : '#d97706'}
                  opacity="0.85"
                />
              );
            })}
            <text x="265" y="188" textAnchor="middle" className="fill-slate-700 text-[11px]">
              Mold_Temp_C (179°C → 192°C) | Correlation r = +0.9949
            </text>
          </svg>
        )}

        {tab === 'run' && (
          <svg viewBox="0 0 520 200" className="w-full max-w-2xl mx-auto">
            <line x1="45" y1="165" x2="495" y2="165" stroke="#94a3b8" strokeWidth="1.5" />
            <polyline
              fill="none"
              stroke="#1e40af"
              strokeWidth="2.5"
              points={parsed.nums
                .map((r, i) => {
                  const x = 55 + (i / 29) * 430;
                  const y = 155 - ((r.diam - 49.97) / 0.18) * 125;
                  return `${x.toFixed(1)},${y.toFixed(1)}`;
                })
                .join(' ')}
            />
            {parsed.nums.map((r, i) => {
              const x = 55 + (i / 29) * 430;
              const y = 155 - ((r.diam - 49.97) / 0.18) * 125;
              return <circle key={r.no} cx={x} cy={y} r="3.5" fill={r.machine === 'MC-A' ? '#0284c7' : '#dc2626'} />;
            })}
            <text x="270" y="186" textAnchor="middle" className="fill-slate-700 text-[11px]">
              Sample 1–15 (MC-A Day) → Sample 16–30 (MC-B Afternoon Drift)
            </text>
          </svg>
        )}
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-bold text-slate-900">คำถามวินิจฉัยจาก Workshop 2 (3 ข้อ)</h4>
        {DIAGNOSTICS.map((d, qi) => (
          <div key={qi} className="rounded-lg border border-slate-200 bg-slate-50 p-3.5">
            <div className="text-xs font-bold text-slate-900 mb-2">{d.q}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {d.options.map((opt, oi) => {
                const picked = ans[qi] === oi;
                const isRight = oi === d.correct;
                return (
                  <button
                    key={oi}
                    type="button"
                    onClick={() => setAns((prev) => ({ ...prev, [qi]: oi }))}
                    className={`rounded-lg border px-3 py-2 text-left text-xs transition ${
                      submitted
                        ? isRight
                          ? 'border-emerald-500 bg-emerald-50 font-bold text-emerald-900'
                          : picked
                            ? 'border-rose-500 bg-rose-50 text-rose-900'
                            : 'border-slate-200 bg-white text-slate-600'
                        : picked
                          ? 'border-sky-600 bg-sky-50 font-bold text-sky-900'
                          : 'border-slate-200 bg-white hover:bg-slate-100'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <p className="mt-2 text-xs text-slate-700 bg-white rounded p-2 border border-slate-200">
                <strong>คำอธิบาย:</strong> {d.exp}
              </p>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-bold text-white hover:bg-sky-800"
        >
          ตรวจคำตอบ Workshop 2
        </button>
      </div>
    </div>
  );
};
