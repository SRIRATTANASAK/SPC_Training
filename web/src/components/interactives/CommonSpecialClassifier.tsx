import React, { useMemo, useState } from 'react';
import { getProgressStore } from '../../lib/storage';

interface ScenarioItem {
  id: number;
  text: string;
  answer: 'Common Cause' | 'Special Cause';
  reason: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: 1,
    text: 'ความสั่นสะเทือนปกติของมอเตอร์ที่ยังอยู่ในค่ามาตรฐาน',
    answer: 'Common Cause',
    reason: 'เป็นความแปรปรวนตามธรรมชาติที่ฝังอยู่ในระบบเครื่องจักรปกติ',
  },
  {
    id: 2,
    text: 'เม็ดมีดกลึง (Carbide Insert) แตกบิ่นกะทันหัน',
    answer: 'Special Cause',
    reason: 'มีสาเหตุเฉพาะเจาะจง (Assignable Cause) ทำให้ขนาดชิ้นงานกระโดดทันที',
  },
  {
    id: 3,
    text: 'ความแปรปรวนความแข็งเล็กน้อยภายในวัตถุดิบ Lot เดียวกัน',
    answer: 'Common Cause',
    reason: 'ความแตกต่างจุลภาคตามธรรมชาติของวัสดุในสเปกเดียวกัน',
  },
  {
    id: 4,
    text: 'พนักงานใหม่กะดึกตั้งค่า Tool Offset ผิดไป +0.08 mm',
    answer: 'Special Cause',
    reason: 'ความผิดพลาดจากการตั้งค่าเฉพาะครั้ง ทำให้ค่าเฉลี่ยเลื่อน (Shift)',
  },
  {
    id: 5,
    text: 'ลมแอร์ในโรงงานเปลี่ยนอุณหภูมิเล็กน้อย ±0.5 °C ตลอดวัน',
    answer: 'Common Cause',
    reason: 'สภาพแวดล้อมปกติที่แกว่งตัวเล็กน้อยตลอดเวลา',
  },
  {
    id: 6,
    text: 'น็อตยึด Fixture คลายตัวหลังเดินเครื่อง 14:00 น.',
    answer: 'Special Cause',
    reason: 'อุปกรณ์จับยึดหลวมเป็นเหตุการณ์ผิดปกติที่ต้องหยุดขันยึดแก้ไข',
  },
  {
    id: 7,
    text: 'ค่าการอ่าน Micrometer ที่แกว่งตาม Repeatability ปกติ (±0.002 mm)',
    answer: 'Common Cause',
    reason: 'ความคลาดเคลื่อนการวัดปกติตามความละเอียดเครื่องมือ',
  },
  {
    id: 8,
    text: 'ไฟตกชั่วขณะทำให้หัวฉีดขึ้นรูปแรงดันตก 1 รอบ',
    answer: 'Special Cause',
    reason: 'เหตุการณ์ไฟตกชั่วคราวทำให้เกิดชิ้นงานผิดปกติ (Spike)',
  },
];

function seededNormal(seed: number): { x: number; y: number } {
  const u1 = Math.max(0.0001, ((Math.sin(seed * 12.9898) * 43758.5453) % 1 + 1) % 1);
  const u2 = Math.max(0.0001, ((Math.cos(seed * 78.233) * 43758.5453) % 1 + 1) % 1);
  const r = Math.sqrt(-2.0 * Math.log(u1));
  const theta = 2.0 * Math.PI * u2;
  return { x: r * Math.cos(theta), y: r * Math.sin(theta) };
}

export const CommonSpecialClassifier: React.FC = () => {
  const [choices, setChoices] = useState<Record<number, 'Common Cause' | 'Special Cause'>>({});
  const [checked, setChecked] = useState(false);
  const [rule, setRule] = useState<'Rule1' | 'Rule2'>('Rule1');
  const [runSeed, setRunSeed] = useState(1);
  const [triedRules, setTriedRules] = useState<{ Rule1: boolean; Rule2: boolean }>({
    Rule1: true,
    Rule2: false,
  });

  const score = useMemo(
    () => SCENARIOS.filter((s) => choices[s.id] === s.answer).length,
    [choices]
  );

  const funnelData = useMemo(() => {
    const rawDrops = Array.from({ length: 30 }, (_, i) => seededNormal(runSeed * 100 + i + 1));
    const points: Array<{ x: number; y: number }> = [];
    let funnelX = 0;
    let funnelY = 0;

    for (const d of rawDrops) {
      const hitX = funnelX + d.x;
      const hitY = funnelY + d.y;
      points.push({ x: hitX, y: hitY });
      if (rule === 'Rule2') {
        // Rule 2: move funnel opposite to last error from target -> Z_t = e_t - e_{t-1}
        funnelX = -d.x;
        funnelY = -d.y;
      } else {
        funnelX = 0;
        funnelY = 0;
      }
    }

    const rSqSum = points.reduce((acc, p) => acc + (p.x * p.x + p.y * p.y) / 2, 0);
    const empiricalSd = Math.sqrt(rSqSum / points.length);
    const theoreticalSd = rule === 'Rule1' ? 1.0 : Math.SQRT2;
    return { points, empiricalSd, theoreticalSd };
  }, [rule, runSeed]);

  const saveScoreIfPassed = (nextScore: number, nextTried: { Rule1: boolean; Rule2: boolean }) => {
    if (nextScore >= 6 && nextTried.Rule1 && nextTried.Rule2) {
      const store = getProgressStore('M2');
      const cur = store.load();
      store.save({
        var_lesson_scores: {
          ...cur.var_lesson_scores,
          L1: Math.max(cur.var_lesson_scores.L1 ?? 0, 10),
        },
      });
    }
  };

  const handleSelectRule = (nextRule: 'Rule1' | 'Rule2') => {
    setRule(nextRule);
    const nextTried = { ...triedRules, [nextRule]: true };
    setTriedRules(nextTried);
    saveScoreIfPassed(score, nextTried);
  };

  const handleCheck = () => {
    setChecked(true);
    saveScoreIfPassed(score, triedRules);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
      {/* Part A: 8-Scenario Classifier */}
      <div className="lg:col-span-7 rounded-xl border border-slate-300 bg-white p-3.5 sm:p-4 shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
              Part A: จำแนก Common Cause vs Special Cause (8 สถานการณ์)
            </h3>
            <p className="text-xs text-slate-600">เกณฑ์ผ่านกิจกรรม: ตอบถูกอย่างน้อย 6 / 8 ข้อ</p>
          </div>
          <span className="rounded-full bg-sky-100 px-3 py-0.5 text-xs font-bold text-sky-900 border border-sky-300">
            คะแนน: {score} / 8
          </span>
        </div>

        <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
          {SCENARIOS.map((item) => {
            const picked = choices[item.id];
            const isCorrect = picked === item.answer;
            return (
              <div
                key={item.id}
                className="rounded-lg border border-slate-200 bg-slate-50/70 p-2.5 text-xs space-y-1.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="font-semibold text-slate-900">
                    <span className="inline-block w-5 font-extrabold text-sky-800">{item.id}.</span>
                    {item.text}
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {(['Common Cause', 'Special Cause'] as const).map((opt) => {
                      const active = picked === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setChoices((prev) => ({ ...prev, [item.id]: opt }));
                            setChecked(false);
                          }}
                          className={`rounded-md border px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
                            active
                              ? opt === 'Common Cause'
                                ? 'border-sky-600 bg-sky-700 text-white'
                                : 'border-amber-600 bg-amber-600 text-white'
                              : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {opt === 'Common Cause' ? 'Common' : 'Special'}
                        </button>
                      );
                    })}
                  </div>
                </div>
                {checked && (
                  <div
                    className={`rounded px-2 py-1 text-[11px] ${
                      isCorrect
                        ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                        : 'bg-rose-50 text-rose-900 border border-rose-200'
                    }`}
                  >
                    <strong>{isCorrect ? '✓ ถูกต้อง:' : `✕ เฉลยคือ ${item.answer}:`}</strong> {item.reason}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={handleCheck}
            className="rounded-lg bg-sky-700 px-4 py-1.5 text-xs font-bold text-white hover:bg-sky-800 shadow-xs transition cursor-pointer"
          >
            ตรวจคำตอบทั้ง 8 ข้อ
          </button>
          {checked && (
            <span
              className={`text-xs font-bold ${
                score >= 6 ? 'text-emerald-700' : 'text-amber-700'
              }`}
            >
              {score >= 6 ? '✓ ผ่านเกณฑ์ Part A (≥ 6/8)' : 'ลองทบทวนข้อที่ยังผิดอีกครั้ง'}
            </span>
          )}
        </div>
      </div>

      {/* Part B: Deming Funnel Simulator */}
      <div className="lg:col-span-5 rounded-xl border border-slate-300 bg-white p-3.5 sm:p-4 shadow-sm space-y-3">
        <div className="border-b border-slate-200 pb-2">
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
            Part B: Deming Funnel Experiment (30 Marbles)
          </h3>
          <p className="text-xs text-slate-600">
            เปรียบเทียบการปล่อยกรวยนิ่ง (Rule 1) vs การปรับชดเชยทุกครั้งตามจุดตกก่อนหน้า (Rule 2 Tampering)
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => handleSelectRule('Rule1')}
            className={`rounded-lg border px-3 py-2 text-left text-xs transition cursor-pointer ${
              rule === 'Rule1'
                ? 'border-emerald-600 bg-emerald-50 font-bold text-emerald-950 ring-1 ring-emerald-400'
                : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="font-extrabold">Rule 1: ห้ามปรับมั่ว (No Adjustment)</div>
            <div className="text-[11px] text-slate-600 mt-0.5">ตั้งกรวยตรงเป้าคงที่ (σ ≈ 1.00)</div>
          </button>

          <button
            type="button"
            onClick={() => handleSelectRule('Rule2')}
            className={`rounded-lg border px-3 py-2 text-left text-xs transition cursor-pointer ${
              rule === 'Rule2'
                ? 'border-rose-600 bg-rose-50 font-bold text-rose-950 ring-1 ring-rose-400'
                : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="font-extrabold">Rule 2: ปรับแก้ตามจุดล่าสุด (Tampering)</div>
            <div className="text-[11px] text-slate-600 mt-0.5">ขยับกรวยสวนทางความคลาดเคลื่อน (σ ≈ 1.414)</div>
          </button>
        </div>

        <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-950 p-3 text-white">
          <svg viewBox="-120 -120 240 240" className="h-48 w-48">
            <circle cx="0" cy="0" r="105" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="75" fill="none" stroke="#475569" strokeWidth="1" />
            <circle cx="0" cy="0" r="45" fill="none" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="4 2" />
            <circle cx="0" cy="0" r="15" fill="none" stroke="#10b981" strokeWidth="1.5" />
            <line x1="-115" y1="0" x2="115" y2="0" stroke="#334155" strokeWidth="1" />
            <line x1="0" y1="-115" x2="0" y2="115" stroke="#334155" strokeWidth="1" />

            {funnelData.points.map((pt, idx) => {
              const cx = Math.max(-110, Math.min(110, pt.x * 26));
              const cy = Math.max(-110, Math.min(110, pt.y * 26));
              return (
                <circle
                  key={idx}
                  cx={cx}
                  cy={cy}
                  r="3.8"
                  fill={rule === 'Rule1' ? '#38bdf8' : '#fb7185'}
                  opacity="0.88"
                  stroke="#0f172a"
                  strokeWidth="0.8"
                />
              );
            })}
          </svg>

          <div className="mt-2 grid grid-cols-3 gap-2 w-full text-center text-xs">
            <div className="rounded-lg bg-slate-900 p-2 border border-slate-800">
              <div className="text-[10px] text-slate-400">Theoretical σ</div>
              <div className="font-mono font-bold text-sky-300">
                {funnelData.theoreticalSd.toFixed(3)}
              </div>
            </div>
            <div className="rounded-lg bg-slate-900 p-2 border border-slate-800">
              <div className="text-[10px] text-slate-400">Simulated SD</div>
              <div className="font-mono font-bold text-amber-300">
                {funnelData.empiricalSd.toFixed(3)}
              </div>
            </div>
            <div className="rounded-lg bg-slate-900 p-2 border border-slate-800">
              <div className="text-[10px] text-slate-400">Variance Ratio</div>
              <div className={`font-mono font-bold ${rule === 'Rule2' ? 'text-rose-400' : 'text-emerald-400'}`}>
                {rule === 'Rule2' ? '≈ 2.00× (แย่ลง!)' : '1.00× (ต่ำสุด)'}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setRunSeed((s) => s + 1)}
            className="rounded-lg border border-slate-300 bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-800 hover:bg-slate-200 transition cursor-pointer"
          >
            ปล่อยลูกแก้วชุดใหม่ (Re-drop 30 Marbles)
          </button>
          <span className="text-[11px] font-semibold text-slate-600">
            {triedRules.Rule1 && triedRules.Rule2 ? '✓ ทดลองครบทั้ง Rule 1 & Rule 2 แล้ว' : 'กดสลับดูทั้ง Rule 1 และ Rule 2'}
          </span>
        </div>
      </div>
    </div>
  );
};
