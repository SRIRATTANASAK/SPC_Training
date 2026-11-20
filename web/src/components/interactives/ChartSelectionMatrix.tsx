import React, { useState, useMemo } from 'react';
import { progressStore } from '../../lib/storage';

interface QuestionScenario {
  id: number;
  scenario: string;
  chartType: string;
  chartSvg: React.ReactNode;
  hint: string;
}

const ALL_SCENARIOS: QuestionScenario[] = [
  {
    id: 1,
    scenario: 'ต้องการดูรูปร่างและการกระจายตัวของขนาดเพลากลึง 30 ตัวอย่างเทียบกับสเปก LSL / USL',
    chartType: 'Histogram',
    hint: 'แสดงเป็นแท่งความถี่ต่อเนื่องเพื่อดูลักษณะการกระจายตัว',
    chartSvg: (
      <svg viewBox="0 0 160 80" className="w-full h-20 bg-slate-900 rounded-lg p-1.5">
        <line x1="20" y1="70" x2="140" y2="70" stroke="#64748b" strokeWidth="1" />
        <rect x="25" y="55" width="15" height="15" fill="#38bdf8" />
        <rect x="42" y="35" width="15" height="35" fill="#38bdf8" />
        <rect x="59" y="15" width="15" height="55" fill="#0284c7" />
        <rect x="76" y="25" width="15" height="45" fill="#38bdf8" />
        <rect x="93" y="45" width="15" height="25" fill="#38bdf8" />
        <rect x="110" y="60" width="15" height="10" fill="#f43f5e" />
        <line x1="105" y1="10" x2="105" y2="70" stroke="#f43f5e" strokeDasharray="2 2" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 2,
    scenario: 'ต้องการจัดลำดับความสำคัญของปัญหาของเสีย (Defect) เพื่อเลือกแก้ไข 20% แรกที่จะลดปัญหาได้ถึง 80%',
    chartType: 'Pareto Chart',
    hint: 'แท่งเรียงจากมากไปน้อยพร้อมเส้นร้อยละสะสม Cumulative %',
    chartSvg: (
      <svg viewBox="0 0 160 80" className="w-full h-20 bg-slate-900 rounded-lg p-1.5">
        <rect x="20" y="20" width="22" height="50" fill="#f43f5e" />
        <rect x="46" y="42" width="22" height="28" fill="#f43f5e" />
        <rect x="72" y="58" width="22" height="12" fill="#94a3b8" />
        <rect x="98" y="64" width="22" height="6" fill="#94a3b8" />
        <polyline points="31,20 57,12 83,8 109,6" fill="none" stroke="#fbbf24" strokeWidth="2" />
        <circle cx="31" cy="20" r="3" fill="#fbbf24" />
        <circle cx="57" cy="12" r="3" fill="#fbbf24" />
        <circle cx="83" cy="8" r="3" fill="#fbbf24" />
        <circle cx="109" cy="6" r="3" fill="#fbbf24" />
      </svg>
    ),
  },
  {
    id: 3,
    scenario: 'ต้องการตรวจสอบความสัมพันธ์ระหว่าง อุณหภูมิแม่พิมพ์ (°C) กับ ขนาดชิ้นงาน (mm) ว่าสัมพันธ์เชิงเส้นหรือไม่',
    chartType: 'Scatter Plot',
    hint: 'พล็อตจุดคู่ตัวแปรต้น X กับตัวแปรผล Y เพื่อดูสหสัมพันธ์ (r)',
    chartSvg: (
      <svg viewBox="0 0 160 80" className="w-full h-20 bg-slate-900 rounded-lg p-1.5">
        <line x1="15" y1="70" x2="145" y2="70" stroke="#64748b" strokeWidth="1" />
        <line x1="15" y1="10" x2="15" y2="70" stroke="#64748b" strokeWidth="1" />
        <line x1="20" y1="65" x2="140" y2="15" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="30" cy="60" r="2.5" fill="#38bdf8" />
        <circle cx="50" cy="52" r="2.5" fill="#38bdf8" />
        <circle cx="70" cy="45" r="2.5" fill="#38bdf8" />
        <circle cx="90" cy="34" r="2.5" fill="#38bdf8" />
        <circle cx="110" cy="28" r="2.5" fill="#38bdf8" />
        <circle cx="130" cy="18" r="2.5" fill="#38bdf8" />
      </svg>
    ),
  },
  {
    id: 4,
    scenario: 'ต้องการเปรียบเทียบความนิ่งของการกระจายตัวระหว่างเครื่องจักร MC-A และ MC-B พร้อมดักจับจุด Outlier โดดเดี่ยว',
    chartType: 'Box Plot',
    hint: 'ใช้กล่องสี่เหลี่ยมแสดง Q1, Median, Q3 พร้อมหนวดยื่นหา Min, Max และจุด Outlier',
    chartSvg: (
      <svg viewBox="0 0 160 80" className="w-full h-20 bg-slate-900 rounded-lg p-1.5">
        {/* Box 1 */}
        <line x1="30" y1="30" x2="110" y2="30" stroke="#38bdf8" strokeWidth="1.5" />
        <rect x="50" y="20" width="35" height="20" fill="#0284c7" stroke="#38bdf8" rx="2" />
        <line x1="68" y1="20" x2="68" y2="40" stroke="#f8fafc" strokeWidth="2" />
        {/* Box 2 */}
        <line x1="50" y1="60" x2="125" y2="60" stroke="#f59e0b" strokeWidth="1.5" />
        <rect x="75" y="50" width="40" height="20" fill="#b45309" stroke="#f59e0b" rx="2" />
        <line x1="95" y1="50" x2="95" y2="70" stroke="#f8fafc" strokeWidth="2" />
        <circle cx="145" cy="60" r="3.5" fill="#f43f5e" />
      </svg>
    ),
  },
  {
    id: 5,
    scenario: 'ต้องการติดตามว่าขนาดเพลาที่ผลิตค่อยๆ ไหลเลื่อนสูงขึ้น (Upward Drift) ตามลำดับเวลาทำงานตั้งแต่เช้าถึงบ่ายหรือไม่',
    chartType: 'Run Chart',
    hint: 'พล็อตข้อมูลตามลำดับเวลาการผลิต (Time Order) เพื่อดูพฤติกรรมแนวโน้ม',
    chartSvg: (
      <svg viewBox="0 0 160 80" className="w-full h-20 bg-slate-900 rounded-lg p-1.5">
        <line x1="15" y1="25" x2="145" y2="25" stroke="#f43f5e" strokeDasharray="3 2" />
        <line x1="15" y1="50" x2="145" y2="50" stroke="#38bdf8" strokeDasharray="2 2" />
        <polyline points="20,52 35,48 50,53 65,49 80,44 95,40 110,32 125,27 140,20" fill="none" stroke="#fbbf24" strokeWidth="2" />
        <circle cx="140" cy="20" r="3" fill="#f43f5e" />
      </svg>
    ),
  },
];

const CHART_CHOICES = ['Histogram', 'Box Plot', 'Pareto Chart', 'Scatter Plot', 'Run Chart'];

export const ChartSelectionMatrix: React.FC = () => {
  // Randomize 2 questions on mount (Task 4.7 / Checklist Item 18)
  const [selectedQuestions] = useState<QuestionScenario[]>(() => {
    const shuffled = [...ALL_SCENARIOS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  });

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return selectedQuestions.filter((q) => answers[q.id] === q.chartType).length * 5;
  }, [selectedQuestions, answers]);

  const handleCheck = () => {
    setSubmitted(true);
    if (score >= 5) {
      const cur = progressStore.load();
      progressStore.save({
        var_lesson_scores: { ...cur.var_lesson_scores, L4: Math.max(cur.var_lesson_scores.L4 || 0, score) },
      });
    }
  };

  return (
    <div className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Workshop 2 (ส่วนที่ 1)</span>
          <h3 className="text-base font-bold text-slate-900">
            แบบทดสอบเลือกใช้กราฟแสดงผลข้อมูล (สุ่ม 2 ข้อพร้อมภาพประกอบ)
          </h3>
        </div>
        {submitted && (
          <span className="rounded-lg bg-sky-100 text-sky-900 font-bold px-3 py-1 text-sm border border-sky-300">
            คะแนน: {score} / 10
          </span>
        )}
      </div>

      <div className="space-y-4">
        {selectedQuestions.map((q, idx) => {
          const userPick = answers[q.id];
          const isCorrect = userPick === q.chartType;
          return (
            <div
              key={q.id}
              className={`grid grid-cols-1 md:grid-cols-12 gap-3.5 rounded-xl border p-3.5 transition ${
                submitted
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50/40'
                    : 'border-rose-300 bg-rose-50/40'
                  : 'border-slate-200 bg-slate-50'
              }`}
            >
              {/* Left 4 cols: Chart Preview */}
              <div className="md:col-span-4 flex flex-col justify-center items-center">
                {q.chartSvg}
                <span className="text-[10px] text-slate-500 mt-1 italic text-center">{q.hint}</span>
              </div>

              {/* Right 8 cols: Question & Selection */}
              <div className="md:col-span-8 flex flex-col justify-between space-y-2.5">
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                  ข้อ {idx + 1}. {q.scenario}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {CHART_CHOICES.map((c) => {
                    const picked = userPick === c;
                    const right = q.chartType === c;
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => !submitted && setAnswers((prev) => ({ ...prev, [q.id]: c }))}
                        className={`rounded-lg px-2.5 py-1 text-xs font-bold transition border ${
                          submitted
                            ? right
                              ? 'bg-emerald-600 text-white border-emerald-700 shadow-2xs'
                              : picked
                              ? 'bg-rose-600 text-white border-rose-700'
                              : 'bg-white text-slate-500 border-slate-200'
                            : picked
                            ? 'bg-sky-700 text-white border-sky-800 shadow-2xs'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <div className="text-xs font-semibold pt-1 border-t border-slate-200/80">
                    {isCorrect ? (
                      <span className="text-emerald-800">✓ ถูกต้อง! เป็นการประยุกต์ใช้ {q.chartType}</span>
                    ) : (
                      <span className="text-rose-800">✕ เฉลย: {q.chartType} ({q.hint})</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <button
          type="button"
          onClick={handleCheck}
          className="rounded-lg bg-sky-700 px-5 py-2 text-xs sm:text-sm font-bold text-white hover:bg-sky-800 shadow-xs"
        >
          ตรวจคำตอบ
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setAnswers({});
          }}
          className="rounded-lg bg-slate-200 px-4 py-1.5 text-xs font-bold text-slate-800 hover:bg-slate-300"
        >
          ทำใหม่อีกครั้ง
        </button>
      )}
    </div>
  );
};
