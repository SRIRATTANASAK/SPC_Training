import React, { useMemo, useState } from 'react';
import type { ClassificationRow } from '../../lib/types';
import { progressStore } from '../../lib/storage';

interface Props {
  rows: ClassificationRow[];
}

export const DataClassificationLab: React.FC<Props> = ({ rows }) => {
  // สุ่มแบบฝึกหัด 8 ข้อโดยอัตโนมัติจากการเปิดหน้า page
  const [activeRows] = useState<ClassificationRow[]>(() => {
    return [...rows].sort(() => Math.random() - 0.5).slice(0, 8);
  });
  const [answers, setAnswers] = useState<Record<string, { cat: string; scale: string }>>({});
  const [submitted, setSubmitted] = useState(false);

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
    <div className="w-full flex flex-col justify-start">
      {/* Table Area (Designed to fit comfortably on 1 screen) */}
      <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-300 bg-slate-900 text-white">
              <th className="py-2 px-3 sm:px-4 font-extrabold w-[42%] border-r border-slate-700">
                กระบวนการ &amp; ข้อมูลหน้างาน
              </th>
              <th className="py-2 px-3 sm:px-4 font-extrabold w-[24%] border-r border-slate-700 text-amber-200">
                ตัวอย่างค่าที่วัด/นับได้
              </th>
              <th className="py-2 px-2.5 sm:px-3 font-extrabold w-[17%] border-r border-slate-700 text-sky-200 text-center">
                Variable vs Attribute
              </th>
              <th className="py-2 px-2.5 sm:px-3 font-extrabold w-[17%] text-emerald-200 text-center">
                Scale (NOIR)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-xs">
            {activeRows.map((r, idx) => {
              const a = answers[r.Item_ID] ?? { cat: '', scale: '' };
              const catRight = a.cat === r.Category_Variable_or_Attribute;
              const scaleRight = a.scale === r.Measurement_Scale;
              return (
                <tr key={r.Item_ID} className="hover:bg-slate-50 transition-colors">
                  {/* ข้อมูลหน้างาน (ไม่แสดงรหัส ID) */}
                  <td className="py-1.5 px-3 sm:px-4 border-r border-slate-200 align-middle">
                    <div className="flex items-center gap-2">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-600 border border-slate-300">
                        {idx + 1}
                      </span>
                      <div className="min-w-0">
                        <span className="font-bold text-slate-900">{r.Process_Area}</span>
                        <span className="mx-1 text-slate-400 font-normal">:</span>
                        <span className="text-slate-700">{r.Description}</span>
                      </div>
                    </div>
                    {submitted && (
                      <div className="mt-1 ml-6 inline-flex flex-wrap items-center gap-1.5 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] text-slate-800 border border-slate-300">
                        <span className="font-bold text-sky-900">เฉลย:</span>
                        <span className="font-semibold text-slate-900">{r.Category_Variable_or_Attribute}</span>
                        <span className="text-slate-400">•</span>
                        <span className="font-semibold text-slate-900">{r.Measurement_Scale}</span>
                        <span className="text-slate-600 font-normal">({r.Rationale})</span>
                      </div>
                    )}
                  </td>

                  {/* ตัวอย่างค่า */}
                  <td className="py-1.5 px-3 sm:px-4 border-r border-slate-200 text-slate-700 font-mono text-[11px] sm:text-xs align-middle">
                    {r.Example_Values}
                  </td>

                  {/* ตัวเลือก Variable vs Attribute */}
                  <td className="py-1.5 px-2.5 sm:px-3 border-r border-slate-200 text-center align-middle">
                    <select
                      aria-label={`${r.Process_Area} Variable or Attribute`}
                      value={a.cat}
                      onChange={(e) =>
                        setAnswers((prev) => ({
                          ...prev,
                          [r.Item_ID]: { ...a, cat: e.target.value },
                        }))
                      }
                      className={`w-full max-w-[130px] rounded-md border px-2 py-1 text-xs font-semibold cursor-pointer transition ${
                        submitted
                          ? catRight
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold'
                            : 'border-rose-500 bg-rose-50 text-rose-900 font-bold'
                          : 'border-slate-300 bg-white text-slate-800 hover:border-slate-400'
                      }`}
                    >
                      <option value="">-- เลือก --</option>
                      <option value="Variable">Variable</option>
                      <option value="Attribute">Attribute</option>
                    </select>
                  </td>

                  {/* ตัวเลือก Scale NOIR */}
                  <td className="py-1.5 px-2.5 sm:px-3 text-center align-middle">
                    <select
                      aria-label={`${r.Process_Area} Measurement Scale`}
                      value={a.scale}
                      onChange={(e) =>
                        setAnswers((prev) => ({
                          ...prev,
                          [r.Item_ID]: { ...a, scale: e.target.value },
                        }))
                      }
                      className={`w-full max-w-[120px] rounded-md border px-2 py-1 text-xs font-semibold cursor-pointer transition ${
                        submitted
                          ? scaleRight
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold'
                            : 'border-rose-500 bg-rose-50 text-rose-900 font-bold'
                          : 'border-slate-300 bg-white text-slate-800 hover:border-slate-400'
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

      {/* Submit Button & Score Display */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-1">
        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-lg bg-sky-700 px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-sky-800 transition"
        >
          ตรวจคำตอบ Workshop 1
        </button>
        {submitted && (
          <div className="flex items-center gap-3 text-xs sm:text-sm font-bold">
            <span className="rounded-md bg-sky-100 px-3 py-1 text-sky-900 border border-sky-300">
              Category: {score.catOk} / {score.total} ถูกต้อง
            </span>
            <span className="rounded-md bg-indigo-100 px-3 py-1 text-indigo-900 border border-indigo-300">
              Scale: {score.scaleOk} / {score.total} ถูกต้อง
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
