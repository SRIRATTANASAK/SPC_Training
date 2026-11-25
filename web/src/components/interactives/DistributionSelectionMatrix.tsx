import React, { useMemo, useState } from 'react';
import { getProgressStore } from '../../lib/storage';

type DistOption =
  | 'Normal Distribution'
  | 'Binomial Distribution'
  | 'Poisson Distribution'
  | 'Non-Normal / Weibull (Skewed)';

const OPTIONS: DistOption[] = [
  'Normal Distribution',
  'Binomial Distribution',
  'Poisson Distribution',
  'Non-Normal / Weibull (Skewed)',
];

interface MatrixCase {
  id: number;
  scenario: string;
  correct: DistOption;
  chartHint: string;
}

const CASES: MatrixCase[] = [
  {
    id: 1,
    scenario: 'น้ำหนักเม็ดพลาสติกต่อชิ้น (g) วัดด้วยเครื่องชั่งละเอียด',
    correct: 'Normal Distribution',
    chartHint: 'ข้อมูลต่อเนื่องจากการวัดค่า (Variable) → ใช้ Normal และ X̄-R / X̄-S Chart',
  },
  {
    id: 2,
    scenario: "จำนวนชิ้นงานที่ 'ไม่ผ่าน' ในกล่อง 50 ชิ้น (Pass/Fail)",
    correct: 'Binomial Distribution',
    chartHint: 'นับจำนวนชิ้นงานเสีย (Defective) จากตัวอย่างขนาด n คงที่ → ใช้ Binomial (P / NP Chart)',
  },
  {
    id: 3,
    scenario: 'จำนวนรอยขีดข่วนที่นับได้บนประตูรถยนต์ 1 บาน',
    correct: 'Poisson Distribution',
    chartHint: 'นับจำนวนจุดตำหนิ (Defects) ต่อพื้นที่ 1 หน่วย → ใช้ Poisson (C / U Chart)',
  },
  {
    id: 4,
    scenario: 'จำนวนล็อตที่ถูก Reject จากการตรวจรับสินค้า 30 ล็อต',
    correct: 'Binomial Distribution',
    chartHint: 'แต่ละล็อตมี 2 สถานะ (Accept/Reject) จาก 30 ล็อต → ใช้ Binomial Distribution',
  },
  {
    id: 5,
    scenario: 'จำนวนฟองอากาศต่อแผ่นกระจก 1 ตารางเมตร',
    correct: 'Poisson Distribution',
    chartHint: 'นับจำนวนเหตุการณ์/ฟองอากาศต่อหน่วยพื้นที่ → ใช้ Poisson Distribution',
  },
  {
    id: 6,
    scenario: 'อายุการใช้งานมีดกลึง (Tool Life) จนหัก ซึ่งมักเบ้ขวาชัดเจน',
    correct: 'Non-Normal / Weibull (Skewed)',
    chartHint: 'ข้อมูลอายุการใช้งาน/ความล้า (Life Data) มักเบ้ขวา (Weibull/Skewed) ห้ามเหมารวมเป็น Normal ตรงๆ',
  },
];

export const DistributionSelectionMatrix: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, DistOption>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () => CASES.filter((c) => answers[c.id] === c.correct).length,
    [answers]
  );

  const handleSubmit = () => {
    setSubmitted(true);
    if (score >= 5) {
      const store = getProgressStore('M2');
      const cur = store.load();
      store.save({
        var_lesson_scores: {
          ...cur.var_lesson_scores,
          L3: Math.max(cur.var_lesson_scores.L3 ?? 0, 10),
        },
      });
    }
  };

  return (
    <div className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
        <div>
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
            Distribution Selection Matrix (INT-M2-L3-03)
          </h3>
          <p className="text-xs text-slate-600">
            จับคู่โจทย์หน้างานโรงงาน 6 สถานการณ์ให้ตรงกับการแจกแจงความน่าจะเป็น (เกณฑ์ผ่าน ≥ 5/6)
          </p>
        </div>
        <span className="rounded-full bg-sky-100 px-3 py-0.5 text-xs font-bold text-sky-900 border border-sky-300">
          คะแนน: {score} / 6
        </span>
      </div>

      <div className="space-y-2.5">
        {CASES.map((c) => {
          const picked = answers[c.id];
          const isRight = picked === c.correct;
          return (
            <div
              key={c.id}
              className="rounded-lg border border-slate-200 bg-slate-50/70 p-3 space-y-2 text-xs"
            >
              <div className="font-bold text-slate-900 text-xs sm:text-sm">
                {c.id}. {c.scenario}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5">
                {OPTIONS.map((opt) => {
                  const active = picked === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setAnswers((prev) => ({ ...prev, [c.id]: opt }));
                        setSubmitted(false);
                      }}
                      className={`rounded-md border px-2.5 py-1.5 text-left text-[11px] font-bold transition cursor-pointer ${
                        submitted
                          ? opt === c.correct
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-950'
                            : active
                              ? 'border-rose-500 bg-rose-50 text-rose-900'
                              : 'border-slate-200 bg-white text-slate-500'
                          : active
                            ? 'border-sky-600 bg-sky-700 text-white shadow-2xs'
                            : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <div
                  className={`rounded px-2.5 py-1.5 text-[11px] ${
                    isRight
                      ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                      : 'bg-rose-50 text-rose-900 border border-rose-200'
                  }`}
                >
                  <strong>{isRight ? '✓ ถูกต้อง:' : `✕ เฉลยคือ ${c.correct}:`}</strong> {c.chartHint}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between pt-1">
        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-lg bg-sky-700 px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-sky-800 shadow-xs cursor-pointer"
        >
          ตรวจคำตอบทั้ง 6 สถานการณ์
        </button>
        {submitted && (
          <span className={`text-xs font-bold ${score >= 5 ? 'text-emerald-700' : 'text-amber-700'}`}>
            {score >= 5 ? '✓ ผ่านเกณฑ์ (≥ 5/6 ข้อ)' : 'ลองทบทวนข้อที่ยังเลือกผิดนะคะ'}
          </span>
        )}
      </div>
    </div>
  );
};
