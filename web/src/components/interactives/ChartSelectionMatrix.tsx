import React, { useState } from 'react';
import { progressStore } from '../../lib/storage';

const SCENARIOS = [
  { id: 1, text: 'ต้องการดูรูปร่างการกระจายตัวของขนาดเพลาเทียบกับ Spec', answer: 'Histogram' },
  { id: 2, text: 'ต้องการจัดอันดับปัญหาของเสียเพื่อเลือกแก้ตัวใหญ่สุดก่อน (80/20)', answer: 'Pareto Chart' },
  { id: 3, text: 'ต้องการดูว่าอุณหภูมิแม่พิมพ์สัมพันธ์กับขนาดชิ้นงานหรือไม่', answer: 'Scatter Plot' },
  { id: 4, text: 'ต้องการเปรียบเทียบความนิ่งระหว่างเครื่อง MC-A และ MC-B พร้อมหา Outlier', answer: 'Box Plot' },
  { id: 5, text: 'ต้องการติดตามว่าขนาดเพลาไหล (Drift) ตั้งแต่เช้าถึงบ่ายหรือไม่', answer: 'Run Chart' },
];

const CHARTS = ['Histogram', 'Box Plot', 'Pareto Chart', 'Scatter Plot', 'Run Chart'];

export const ChartSelectionMatrix: React.FC = () => {
  const [picks, setPicks] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const score = SCENARIOS.filter((s) => picks[s.id] === s.answer).length * 2;

  const handleCheck = () => {
    setChecked(true);
    if (score >= 8) {
      const cur = progressStore.load();
      progressStore.save({
        var_lesson_scores: { ...cur.var_lesson_scores, L4: Math.max(cur.var_lesson_scores.L4, score) },
      });
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">INT-M1-L4-01</span>
          <h3 className="text-lg font-bold text-slate-900">Chart Selection Matrix (5 สถานการณ์)</h3>
        </div>
        {checked && <span className="text-sm font-bold text-sky-900">คะแนน: {score} / 10</span>}
      </div>

      <div className="space-y-2.5">
        {SCENARIOS.map((s) => {
          const ok = picks[s.id] === s.answer;
          return (
            <div key={s.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
              <span className="text-xs font-medium text-slate-800 sm:w-2/3">
                {s.id}. {s.text}
              </span>
              <select
                aria-label={`Scenario ${s.id}`}
                value={picks[s.id] ?? ''}
                onChange={(e) => setPicks((prev) => ({ ...prev, [s.id]: e.target.value }))}
                className={`rounded-lg border px-3 py-1.5 text-xs font-bold sm:w-1/3 ${
                  checked
                    ? ok
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                      : 'border-rose-500 bg-rose-50 text-rose-900'
                    : 'border-slate-300 bg-white'
                }`}
              >
                <option value="">-- เลือกกราฟ --</option>
                {CHARTS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={handleCheck}
        className="mt-4 rounded-lg bg-sky-700 px-4 py-2 text-sm font-bold text-white hover:bg-sky-800"
      >
        ตรวจคำตอบ Chart Matrix
      </button>
    </div>
  );
};
