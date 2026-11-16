import React, { useState } from 'react';
import { progressStore } from '../../lib/storage';

export const CopqCalculator: React.FC = () => {
  const [scrap, setScrap] = useState(15000);
  const [rework, setRework] = useState(12000);
  const [sorting, setSorting] = useState(8000);
  const [warranty, setWarranty] = useState(5000);
  const [tested, setTested] = useState(false);

  const total = scrap + rework + sorting + warranty;
  const yearly = total * 12;

  const markTested = () => {
    if (!tested) {
      setTested(true);
      const cur = progressStore.load();
      progressStore.save({
        var_lesson_scores: { ...cur.var_lesson_scores, L1: Math.max(cur.var_lesson_scores.L1, 10) },
      });
    }
  };

  let statusClass = 'bg-emerald-50 border-emerald-300 text-emerald-900';
  let statusBadge = '✓ Low Impact — ควบคุมได้ดี แต่ยังลดต่อได้';
  if (total >= 10000 && total <= 50000) {
    statusClass = 'bg-amber-50 border-amber-300 text-amber-900';
    statusBadge = '⚠ Moderate Loss — สูญเสียเทียบเท่าค่าจ้างพนักงาน 1–3 คน/เดือน';
  } else if (total > 50000) {
    statusClass = 'bg-rose-50 border-rose-300 text-rose-900';
    statusBadge = '✕ Critical Profit Leak — ต้องรีบทำ SPC & Root Cause ทันที!';
  }

  const fields = [
    { label: 'Scrap Cost (งานทิ้ง/เดือน)', val: scrap, set: setScrap },
    { label: 'Rework Cost (งานซ่อม/เดือน)', val: rework, set: setRework },
    { label: 'Sorting Cost (ค่าคัดแยก 100%/เดือน)', val: sorting, set: setSorting },
    { label: 'Warranty & Claim (เคลมลูกค้า/เดือน)', val: warranty, set: setWarranty },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">INT-M1-L1-02</span>
          <h3 className="text-lg font-bold text-slate-900">COPQ Calculator (THB / เดือน)</h3>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              setScrap(4000);
              setRework(3000);
              setSorting(1500);
              setWarranty(0);
              markTested();
            }}
            className="rounded-lg bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800 hover:bg-emerald-200"
          >
            Preset: โรงงานคุมดี
          </button>
          <button
            type="button"
            onClick={() => {
              setScrap(35000);
              setRework(22000);
              setSorting(18000);
              setWarranty(15000);
              markTested();
            }}
            className="rounded-lg bg-rose-100 px-2.5 py-1 text-xs font-semibold text-rose-800 hover:bg-rose-200"
          >
            Preset: วิกฤตของเสีย
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {fields.map((f) => (
          <label key={f.label} className="block rounded-lg border border-slate-200 bg-slate-50 p-3">
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
              <span>{f.label}</span>
              <span className="text-sky-800">{f.val.toLocaleString()} ฿</span>
            </div>
            <input
              type="range"
              min={0}
              max={60000}
              step={1000}
              value={f.val}
              onChange={(e) => {
                f.set(Number(e.target.value));
                markTested();
              }}
              className="w-full accent-sky-700"
            />
          </label>
        ))}
      </div>

      <div className={`rounded-xl border-2 p-4 ${statusClass}`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="text-xs font-semibold uppercase opacity-80">Total COPQ</div>
            <div className="text-2xl font-extrabold">{total.toLocaleString()} THB / เดือน</div>
            <div className="text-xs font-medium mt-0.5">สะสมต่อปี: {yearly.toLocaleString()} THB / ปี</div>
          </div>
          <div className="rounded-lg bg-white/80 px-3 py-2 text-xs font-bold shadow-sm">{statusBadge}</div>
        </div>
      </div>
    </div>
  );
};
