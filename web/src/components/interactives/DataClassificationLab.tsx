import React, { useMemo, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import type { ClassificationRow } from '../../lib/types';
import { progressStore } from '../../lib/storage';

interface Props {
  rows: ClassificationRow[];
}

export const DataClassificationLab: React.FC<Props> = ({ rows }) => {
  // Automatically randomize a subset of 8 questions from the 20 factory items
  const [activeRows, setActiveRows] = useState<ClassificationRow[]>(() => {
    return [...rows].sort(() => Math.random() - 0.5).slice(0, 8);
  });
  const [answers, setAnswers] = useState<Record<string, { cat: string; scale: string }>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleRandomizeNewSet = () => {
    setActiveRows([...rows].sort(() => Math.random() - 0.5).slice(0, 8));
    setAnswers({});
    setSubmitted(false);
  };

  const score = useMemo(() => {
    let catOk = 0;
    let scaleOk = 0;
    for (const r of activeRows) {
      const a = answers[r.Item_ID];
      if (a?.cat === r.Category_Variable_or_Attribute) catOk++;
      if (a?.scale === r.Measurement_Scale) scaleOk++;
    }
    return { catOk, scaleOk, total: activeRows.length };
  }, [activeRows, answers]);

  const handleSubmit = () => {
    setSubmitted(true);
    const pct = Math.round(((score.catOk + score.scaleOk) / (score.total * 2)) * 100);
    if (pct >= 80) {
      const cur = progressStore.load();
      progressStore.save({
        var_lesson_scores: { ...cur.var_lesson_scores, L2: Math.max(cur.var_lesson_scores.L2, 10) },
      });
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-slate-100 pb-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">INT-M1-L2-01 &amp; 02</span>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">Workshop 1 : การจำแนกข้อมูล</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-800 border border-sky-200">
            ชุดแบบฝึกหัดสุ่ม (8 ข้อ)
          </span>
          <button
            type="button"
            onClick={handleRandomizeNewSet}
            title="สุ่มชุดแบบฝึกหัดใหม่จากคลังข้อมูลโรงงานจริง 20 รายการ"
            className="flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
          >
            <RotateCcw className="h-3.5 w-3.5 text-slate-500" />
            <span>สุ่มชุดใหม่</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
              <th className="p-2.5">ID / ข้อมูลหน้างาน</th>
              <th className="p-2.5">ตัวอย่างค่า</th>
              <th className="p-2.5">Variable vs Attribute</th>
              <th className="p-2.5">Scale (NOIR)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {activeRows.map((r) => {
              const a = answers[r.Item_ID] ?? { cat: '', scale: '' };
              const catRight = a.cat === r.Category_Variable_or_Attribute;
              const scaleRight = a.scale === r.Measurement_Scale;
              return (
                <tr key={r.Item_ID} className="align-top">
                  <td className="p-2.5">
                    <div className="font-bold text-slate-900">
                      {r.Item_ID} ({r.Process_Area})
                    </div>
                    <div className="text-slate-600">{r.Description}</div>
                    {submitted && (
                      <div className="mt-1 rounded bg-slate-50 px-2 py-1 text-[11px] text-slate-700 border border-slate-200">
                        <strong>เฉลย:</strong> {r.Category_Variable_or_Attribute} / {r.Measurement_Scale} — {r.Rationale}
                      </div>
                    )}
                  </td>
                  <td className="p-2.5 text-slate-600 whitespace-nowrap">{r.Example_Values}</td>
                  <td className="p-2.5">
                    <select
                      aria-label={`${r.Item_ID} Variable or Attribute`}
                      value={a.cat}
                      onChange={(e) =>
                        setAnswers((prev) => ({
                          ...prev,
                          [r.Item_ID]: { ...a, cat: e.target.value },
                        }))
                      }
                      className={`rounded border px-2 py-1.5 text-xs ${
                        submitted
                          ? catRight
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-rose-500 bg-rose-50'
                          : 'border-slate-300'
                      }`}
                    >
                      <option value="">-- เลือก --</option>
                      <option value="Variable">Variable</option>
                      <option value="Attribute">Attribute</option>
                    </select>
                  </td>
                  <td className="p-2.5">
                    <select
                      aria-label={`${r.Item_ID} Measurement Scale`}
                      value={a.scale}
                      onChange={(e) =>
                        setAnswers((prev) => ({
                          ...prev,
                          [r.Item_ID]: { ...a, scale: e.target.value },
                        }))
                      }
                      className={`rounded border px-2 py-1.5 text-xs ${
                        submitted
                          ? scaleRight
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-rose-500 bg-rose-50'
                          : 'border-slate-300'
                      }`}
                    >
                      <option value="">-- เลือก --</option>
                      <option value="Nominal">Nominal</option>
                      <option value="Ordinal">Ordinal</option>
                      <option value="Interval">Interval</option>
                      <option value="Ratio">Ratio</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-bold text-white hover:bg-sky-800"
        >
          ตรวจคำตอบ Workshop 1
        </button>
        {submitted && (
          <div className="text-sm font-bold text-slate-900">
            คะแนน: Category {score.catOk}/{score.total} | Scale {score.scaleOk}/{score.total}
          </div>
        )}
      </div>
    </div>
  );
};
