import React, { useState } from 'react';

export const CopqIcebergSvg: React.FC = () => {
  const [showHidden, setShowHidden] = useState(true);
  return (
    <div className="rounded-xl border border-slate-200 bg-gradient-to-b from-sky-50 via-sky-100 to-slate-900 p-4 text-slate-900">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-900">
          AST-M1-003 • COPQ Iceberg Model
        </span>
        <button
          type="button"
          onClick={() => setShowHidden((v) => !v)}
          className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-900 shadow hover:bg-white"
        >
          {showHidden ? 'ซ่อนต้นทุนใต้น้ำ' : 'เปิดดูต้นทุนใต้น้ำ (Hidden)'}
        </button>
      </div>
      <svg viewBox="0 0 640 300" className="w-full max-w-2xl mx-auto">
        <rect x="0" y="0" width="640" height="108" fill="#e0f2fe" rx="8" />
        <rect x="0" y="108" width="640" height="192" fill="#0f172a" opacity="0.88" rx="8" />
        <line x1="0" y1="108" x2="640" y2="108" stroke="#0284c7" strokeWidth="3" strokeDasharray="8 4" />
        {/* Tip */}
        <polygon points="320,24 250,108 390,108" fill="#f8fafc" stroke="#38bdf8" strokeWidth="2" />
        <text x="320" y="72" textAnchor="middle" className="fill-slate-900 text-[13px] font-bold">
          Visible (~20%)
        </text>
        <text x="320" y="92" textAnchor="middle" className="fill-rose-700 text-[12px] font-semibold">
          Scrap &amp; Rework
        </text>
        {/* Underwater */}
        <g opacity={showHidden ? 1 : 0.12} className="transition-opacity duration-500">
          <polygon points="250,108 390,108 465,248 320,285 175,248" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="2" />
          <text x="320" y="140" textAnchor="middle" className="fill-amber-300 text-[13px] font-bold">
            Hidden Costs (~80%)
          </text>
          <text x="320" y="168" textAnchor="middle" className="fill-sky-100 text-[12px]">
            • Sorting Labor (ค่าแรงคัดแยก 100%)
          </text>
          <text x="320" y="192" textAnchor="middle" className="fill-sky-100 text-[12px]">
            • Machine Downtime &amp; Lost Capacity
          </text>
          <text x="320" y="216" textAnchor="middle" className="fill-sky-100 text-[12px]">
            • Expedited Freight &amp; Warranty Claims
          </text>
          <text x="320" y="242" textAnchor="middle" className="fill-amber-200 text-[12px] font-semibold">
            • Lost Customer Trust
          </text>
        </g>
      </svg>
    </div>
  );
};

export const NoirScaleCards: React.FC = () => {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const cards = [
    {
      id: 'N',
      title: 'Nominal (นามบัญญัติ)',
      example: 'Cavity ID (1,2,3,4), Pass/Fail, Defect Code',
      math: 'Count / Mode เท่านั้น (ห้ามหา Mean!)',
      color: 'border-sky-300 bg-sky-50',
    },
    {
      id: 'O',
      title: 'Ordinal (เรียงลำดับ)',
      example: 'เกรดผิวงาน (Poor / Fair / Good / Excellent)',
      math: 'เรียงลำดับได้ ใช้ Median / Mode ได้',
      color: 'border-indigo-300 bg-indigo-50',
    },
    {
      id: 'I',
      title: 'Interval (อันตรภาค)',
      example: 'อุณหภูมิเตาอบ (°C, °F) — ไม่มี 0 แท้',
      math: 'บวกลบได้ แต่อ้างเป็น "2 เท่า" ไม่ได้',
      color: 'border-amber-300 bg-amber-50',
    },
    {
      id: 'R',
      title: 'Ratio (อัตราส่วน)',
      example: 'Shaft OD (mm), น้ำหนัก (g), แรงบิด (N·m)',
      math: 'มี 0 แท้ คำนวณสัดส่วนกี่เท่าและค่า CV (%) ได้ครบทุกตัว (ส่วน Control Chart และ Cpk ใช้ได้ตั้งแต่ระดับ Interval Scale เช่น อุณหภูมิ °C เป็นต้นไป)',
      color: 'border-emerald-300 bg-emerald-50',
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {cards.map((c) => {
        const isOpen = !!flipped[c.id];
        return (
          <button
            key={c.id}
            type="button"
            onClick={() => setFlipped((prev) => ({ ...prev, [c.id]: !prev[c.id] }))}
            className={`rounded-xl border-2 p-4 text-left transition-all hover:shadow-md ${c.color}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-slate-900">{c.title}</span>
              <span className="rounded bg-white px-2 py-0.5 text-xs font-semibold text-slate-600 shadow-sm">
                {isOpen ? 'ซ่อน' : 'คลิกดู Allowed Math'}
              </span>
            </div>
            <p className="mt-1.5 text-sm text-slate-700">{c.example}</p>
            {isOpen && (
              <div className="mt-3 rounded-lg bg-white/90 px-3 py-2 text-xs font-semibold text-slate-800 border border-slate-200">
                Allowed Math: {c.math}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export const EmpiricalRuleBellSvg: React.FC = () => {
  const [band, setBand] = useState<1 | 2 | 3>(1);
  const labels = {
    1: '±1σ ครอบคลุม ~68.27% ของข้อมูลทั้งหมด',
    2: '±2σ ครอบคลุม ~95.45% ของข้อมูลทั้งหมด',
    3: '±3σ ครอบคลุม ~99.73% (ใช้เป็นขอบเขต Control Limits)',
  };
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
          AST-M1-016 • Empirical Rule (Normal Curve)
        </span>
        <div className="flex gap-1.5">
          {([1, 2, 3] as const).map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBand(b)}
              className={`rounded-lg px-3 py-1 text-xs font-bold transition ${
                band === b ? 'bg-sky-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              ±{b}σ
            </button>
          ))}
        </div>
      </div>
      <svg viewBox="0 0 560 190" className="w-full max-w-xl mx-auto">
        <line x1="30" y1="150" x2="530" y2="150" stroke="#94a3b8" strokeWidth="2" />
        {/* Highlight region */}
        <rect
          x={280 - band * 70}
          y="22"
          width={band * 140}
          height="128"
          fill={band === 1 ? '#bae6fd' : band === 2 ? '#fde68a' : '#bbf7d0'}
          opacity="0.6"
          rx="4"
        />
        {/* Bell Curve */}
        <path
          d="M 40 150 C 120 150, 175 135, 215 80 C 245 38, 260 25, 280 25 C 300 25, 315 38, 345 80 C 385 135, 440 150, 520 150"
          fill="none"
          stroke="#0f172a"
          strokeWidth="3"
        />
        <line x1="280" y1="22" x2="280" y2="150" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 3" />
        {[-3, -2, -1, 0, 1, 2, 3].map((k) => (
          <text key={k} x={280 + k * 70} y="170" textAnchor="middle" className="fill-slate-700 text-[12px] font-semibold">
            {k === 0 ? 'Mean' : `${k > 0 ? '+' : ''}${k}σ`}
          </text>
        ))}
      </svg>
      <p className="mt-2 text-center text-sm font-semibold text-sky-900">{labels[band]}</p>
    </div>
  );
};
