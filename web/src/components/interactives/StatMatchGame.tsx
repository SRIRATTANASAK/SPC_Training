import React, { useState } from 'react';
import { progressStore } from '../../lib/storage';

const PAIRS = [
  { id: 'mean', term: 'Mean (ค่าเฉลี่ย)', def: 'ผลรวมข้อมูลทั้งหมดหารด้วยจำนวนตัวอย่าง — บอก Process Centering แต่วิ่งตาม Outlier' },
  { id: 'median', term: 'Median (มัธยฐาน)', def: 'ค่าตรงกลางเมื่อเรียงข้อมูลจากน้อยไปมาก — ทนทานต่อ Outlier และข้อมูลเบ้' },
  { id: 'mode', term: 'Mode (ฐานนิยม)', def: 'ค่าที่เกิดซ้ำบ่อยที่สุด — ใช้จับสัญญาณ Bimodal (ข้อมูล 2 แหล่งปนกัน) ได้' },
  { id: 'range', term: 'Range (พิสัย)', def: 'ค่าสูงสุดลบค่าต่ำสุด (Max − Min) — คำนวณเร็วหน้างานสำหรับกลุ่มเล็ก n ≤ 10' },
  { id: 'variance', term: 'Variance (ความแปรปรวน)', def: 'ค่าเฉลี่ยกำลังสองของระยะห่างจาก Mean (หาร n − 1) — มีหน่วยเป็นกำลังสอง' },
  { id: 'sd', term: 'Standard Deviation (SD)', def: 'รากที่สองของ Variance — หน่วยเดียวกับชิ้นงานจริง ใช้สร้างกฎ ±3σ' },
  { id: 'cv', term: 'CV (%)', def: '(SD / Mean) × 100% — ใช้เทียบความนิ่งข้ามขนาดหรือข้ามหน่วย' },
];

export const StatMatchGame: React.FC = () => {
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const correctCount = PAIRS.filter((p) => selected[p.id] === p.id).length;

  const handleCheck = () => {
    setChecked(true);
    if (correctCount >= 6) {
      const cur = progressStore.load();
      progressStore.save({
        var_lesson_scores: { ...cur.var_lesson_scores, L3: Math.max(cur.var_lesson_scores.L3, 10) },
      });
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">INT-M1-L3-03</span>
          <h3 className="text-lg font-bold text-slate-900">Statistics Match Game (7 Terms)</h3>
        </div>
        <span className="text-xs font-semibold text-slate-600">เกณฑ์ผ่าน: ≥ 6/7 (85%)</span>
      </div>

      <div className="space-y-2.5">
        {PAIRS.map((p) => {
          const isOk = selected[p.id] === p.id;
          return (
            <div key={p.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
              <div className="text-xs text-slate-700 sm:w-2/3">{p.def}</div>
              <select
                aria-label={p.def}
                value={selected[p.id] ?? ''}
                onChange={(e) => setSelected((prev) => ({ ...prev, [p.id]: e.target.value }))}
                className={`rounded-lg border px-3 py-1.5 text-xs font-bold sm:w-1/3 ${
                  checked
                    ? isOk
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                      : 'border-rose-500 bg-rose-50 text-rose-900'
                    : 'border-slate-300 bg-white'
                }`}
              >
                <option value="">-- เลือกคำศัพท์ --</option>
                {PAIRS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.term}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={handleCheck}
          className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-bold text-white hover:bg-sky-800"
        >
          ตรวจคำตอบ Match Game
        </button>
        {checked && (
          <div className={`text-sm font-bold ${correctCount >= 6 ? 'text-emerald-700' : 'text-amber-700'}`}>
            ได้ {correctCount} / 7 {correctCount >= 6 ? '✓ ผ่านเกณฑ์!' : 'ลองทบทวนอีกครั้งนะคะ'}
          </div>
        )}
      </div>
    </div>
  );
};
