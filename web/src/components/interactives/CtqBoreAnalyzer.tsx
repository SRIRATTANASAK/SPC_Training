import React, { useMemo, useState } from 'react';
import type { CtqBoreRow } from '../../lib/types';
import { getProgressStore } from '../../lib/storage';
import { normalCdf } from './ZScoreCalculator';

interface Props {
  rows: CtqBoreRow[];
}

const DIAGNOSTIC_QUESTIONS = [
  {
    q: 'Q1: เมื่อวิเคราะห์ข้อมูลทั้งหมด 50 ชิ้น (Mean = 20.0102, SD = 0.0356) ค่า Z_USL (USL = 20.10) และโอกาสหลุด Spec รวมอยู่ที่ประมาณเท่าใด? (ตัวเลข OOS ที่คำนวณได้จากข้อมูลชุดนี้เป็นค่าเบื้องต้น ยังใช้ตัดสิน Capability ไม่ได้)',
    options: [
      'A) Z = +4.50, OOS < 0.01%',
      'B) Z = +2.52, OOS ≈ 0.68%',
      'C) Z = +1.00, OOS ≈ 15.87%',
      'D) Z = +3.10, OOS ≈ 0.10%',
    ],
    correct: 1,
    exp: 'Z_USL = (20.10 - 20.0102) / 0.0356 = +2.52 (0.59%) รวมกับฝั่ง LSL (-3.10 = 0.10%) ได้ OOS ≈ 0.68% · ตัวเลขนี้เป็นค่าเบื้องต้นจากข้อมูล 50 ชิ้นที่ยังมี Special Cause (SG-09) จึงยังใช้ตัดสิน Capability ไม่ได้ ต้องแยก SG-09 และทำให้กระบวนการเสถียรก่อน',
  },
  {
    q: 'Q2: เมื่อพล็อตค่าเฉลี่ยราย Subgroup (SG-01 ถึง SG-10) Subgroup ใดแสดงสัญญาณ Special Cause ชัดเจนที่สุด?',
    options: [
      'A) SG-03 (20.004 mm)',
      'B) SG-08 (19.994 mm)',
      'C) SG-09 (20.094 mm — พุ่งสูงผิดปกติและมีชิ้นเกิน 20.10 mm)',
      'D) SG-10 (20.000 mm)',
    ],
    correct: 2,
    exp: 'SG-09 เวลา 16:00 น. มีค่าเฉลี่ยพุ่งไปที่ 20.094 mm และมีชิ้นงานจริงทะลุ USL (20.11, 20.12 mm)',
  },
  {
    q: 'Q3: เมื่อแยก SG-09 ออก (Baseline n=45) ได้ SD รายชิ้น = 0.0220 mm ตามกฎ CLT ค่า Standard Error (σ_x̄) ของ Subgroup ละ n = 5 ชิ้นจะเท่ากับเท่าใด?',
    options: [
      'A) 0.0220 mm (เท่าเดิม)',
      'B) 0.0220 / 5 = 0.0044 mm',
      'C) 0.0220 / √5 = 0.0099 mm',
      'D) 0.0220 × √5 = 0.0492 mm',
    ],
    correct: 2,
    exp: 'ตามกฎ CLT: σ_x̄ = s / √n = 0.0220 / √5 ≈ 0.0099 mm',
  },
  {
    q: 'Q4: จากข้อมูลทั้งหมด 50 ชิ้น หากวัดในมุม Attribute จะได้ค่าประมาณ Binomial Fail Rate (p̂) และ Poisson Defect Rate (λ̂) เท่าใด?',
    options: [
      'A) p̂ = 8.0% (4/50), λ̂ = 0.18 (9/50)',
      'B) p̂ = 4.0%, λ̂ = 0.08',
      'C) p̂ = 18.0%, λ̂ = 0.50',
      'D) p̂ = 2.0%, λ̂ = 0.09',
    ],
    correct: 0,
    exp: 'มีชิ้นงาน Visual Fail 4 ชิ้นจาก 50 ชิ้น (p̂ = 8.0%) และรวมจำนวนรอยตำหนิทั้งหมด 9 จุดจาก 50 ชิ้น (λ̂ = 0.18 defects/part)',
  },
];

export const CtqBoreAnalyzer: React.FC<Props> = ({ rows }) => {
  const [excludeSg09, setExcludeSg09] = useState(false);
  const [ans, setAns] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const analysis = useMemo(() => {
    const activeRows = excludeSg09 ? rows.filter((r) => r.Subgroup_ID !== 'SG-09') : rows;
    const vals = activeRows.map((r) => parseFloat(r.Bore_Diameter_mm));
    const n = vals.length || 1;
    const mean = vals.reduce((a, b) => a + b, 0) / n;
    const variance = vals.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / Math.max(1, n - 1);
    const sd = Math.sqrt(variance);
    const se = sd / Math.sqrt(5);

    const zUsl = (20.10 - mean) / sd;
    const zLsl = (19.90 - mean) / sd;
    const oosPct = ((1 - normalCdf(zUsl)) + normalCdf(zLsl)) * 100;

    // Subgroup means across all 10 subgroups
    const sgMap = new Map<string, number[]>();
    for (const r of rows) {
      const list = sgMap.get(r.Subgroup_ID) ?? [];
      list.push(parseFloat(r.Bore_Diameter_mm));
      sgMap.set(r.Subgroup_ID, list);
    }
    const subgroups = Array.from(sgMap.entries()).map(([sgId, list]) => ({
      sgId,
      mean: list.reduce((a, b) => a + b, 0) / list.length,
    }));

    const totalFails = rows.filter((r) => r.Visual_Pass_Fail === 'Fail').length;
    const totalDefects = rows.reduce((acc, r) => acc + (parseInt(r.Surface_Defect_Count, 10) || 0), 0);

    return {
      n: activeRows.length,
      mean,
      sd,
      se,
      zUsl,
      zLsl,
      oosPct,
      subgroups,
      pHat: (totalFails / Math.max(1, rows.length)) * 100,
      lambdaHat: totalDefects / Math.max(1, rows.length),
    };
  }, [rows, excludeSg09]);

  const quizScore = useMemo(
    () => DIAGNOSTIC_QUESTIONS.filter((q, idx) => ans[idx] === q.correct).length,
    [ans]
  );

  const handleSubmit = () => {
    setSubmitted(true);
    if (quizScore >= 3) {
      const store = getProgressStore('M2');
      const cur = store.load();
      store.save({
        var_lesson_scores: {
          ...cur.var_lesson_scores,
          L4: Math.max(cur.var_lesson_scores.L4 ?? 0, 10),
        },
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
              Workshop: CTQ Bore Diameter Analyzer (50 Parts • Spec 20.00 ± 0.10 mm)
            </h3>
            <p className="text-xs text-slate-600">
              สลับโหมดเพื่อเปรียบเทียบข้อมูลทั้งหมด (n=50) กับข้อมูล Baseline หลังตัด Special Cause SG-09 (n=45)
            </p>
          </div>
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => setExcludeSg09(false)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                !excludeSg09
                  ? 'bg-sky-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Data (n = 50)
            </button>
            <button
              type="button"
              onClick={() => setExcludeSg09(true)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                excludeSg09
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Exclude SG-09 Baseline (n = 45)
            </button>
          </div>
        </div>

        {/* Summary KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">
            <div className="text-[10px] text-slate-500">Mean (x̄)</div>
            <div className="font-mono text-xs sm:text-sm font-extrabold text-slate-900">
              {analysis.mean.toFixed(4)}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">
            <div className="text-[10px] text-slate-500">Sample SD (s)</div>
            <div className="font-mono text-xs sm:text-sm font-extrabold text-slate-900">
              {analysis.sd.toFixed(4)}
            </div>
          </div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-2">
            <div className="text-[10px] text-sky-800">SE (σ_x̄ = s/√5)</div>
            <div className="font-mono text-xs sm:text-sm font-extrabold text-sky-950">
              {analysis.se.toFixed(4)}
            </div>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-2">
            <div className="text-[10px] text-emerald-800">Z_USL / Z_LSL</div>
            <div className="font-mono text-xs sm:text-sm font-extrabold text-emerald-950">
              +{analysis.zUsl.toFixed(2)} / {analysis.zLsl.toFixed(2)}
            </div>
          </div>
          <div className="rounded-lg border border-rose-200 bg-rose-50 p-2">
            <div className="text-[10px] text-rose-800">Predicted OOS{!excludeSg09 && ' (ค่าเบื้องต้น)'}</div>
            <div className="font-mono text-xs sm:text-sm font-extrabold text-rose-900">
              {analysis.oosPct < 0.001 ? '< 0.001%' : `${analysis.oosPct.toFixed(2)}%`}
            </div>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-2">
            <div className="text-[10px] text-amber-900">Attribute p̂ / λ̂</div>
            <div className="font-mono text-xs sm:text-sm font-extrabold text-amber-950">
              {analysis.pHat.toFixed(1)}% / {analysis.lambdaHat.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Subgroup Xbar Trend Plot */}
        <div className="rounded-xl border border-slate-200 bg-slate-950 p-3 text-white">
          <div className="flex justify-between text-[11px] text-slate-300 mb-1">
            <span>กราฟค่าเฉลี่ยรายกลุ่มย่อย (Subgroup Mean X̄: SG-01 ถึง SG-10, กลุ่มละ n=5)</span>
            <span className="font-mono text-rose-400">🚨 SG-09 (16:00) = 20.094 mm (Special Cause!)</span>
          </div>
          <svg viewBox="0 0 540 155" className="w-full">
            {/* USL = 20.10 at y=20, Target = 20.00 at y=110 */}
            <line x1="40" y1="20" x2="500" y2="20" stroke="#f43f5e" strokeWidth="1.2" strokeDasharray="4 2" />
            <text x="505" y="23" className="fill-rose-400 text-[9px] font-bold">20.10</text>
            <line x1="40" y1="110" x2="500" y2="110" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="505" y="113" className="fill-emerald-400 text-[9px] font-bold">20.00</text>

            <polyline
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.2"
              points={analysis.subgroups
                .map((sg, i) => {
                  const x = 55 + i * 48;
                  const y = 110 - (sg.mean - 20.0) * 900;
                  return `${x},${y.toFixed(1)}`;
                })
                .join(' ')}
            />
            {analysis.subgroups.map((sg, i) => {
              const x = 55 + i * 48;
              const y = 110 - (sg.mean - 20.0) * 900;
              const isSg09 = sg.sgId === 'SG-09';
              return (
                <g key={sg.sgId}>
                  <circle
                    cx={x}
                    cy={y}
                    r={isSg09 ? 6 : 4}
                    fill={isSg09 ? '#f43f5e' : '#38bdf8'}
                    stroke="#ffffff"
                    strokeWidth="1.2"
                  />
                  <text x={x} y="142" textAnchor="middle" className="fill-slate-300 text-[9px]">
                    {sg.sgId}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Diagnostic 4 Questions */}
      <div className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-extrabold text-slate-900">
            คำถามวินิจฉัยผลจากข้อมูล CTQ 50 ชิ้น (เกณฑ์ผ่าน ≥ 3 / 4 ข้อ)
          </h4>
          <span className="rounded-full bg-sky-100 px-3 py-0.5 text-xs font-bold text-sky-900 border border-sky-300">
            ตอบถูก {quizScore} / 4
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {DIAGNOSTIC_QUESTIONS.map((item, qi) => (
            <div key={qi} className="rounded-lg border border-slate-200 bg-slate-50 p-3 space-y-2 text-xs">
              <div className="font-bold text-slate-900 leading-snug">{item.q}</div>
              <div className="space-y-1">
                {item.options.map((opt, oi) => {
                  const picked = ans[qi] === oi;
                  const isRight = oi === item.correct;
                  return (
                    <button
                      key={oi}
                      type="button"
                      onClick={() => {
                        setAns((prev) => ({ ...prev, [qi]: oi }));
                        setSubmitted(false);
                      }}
                      className={`w-full rounded border px-2.5 py-1.5 text-left text-[11px] font-semibold transition cursor-pointer ${
                        submitted
                          ? isRight
                            ? 'border-emerald-500 bg-emerald-50 font-bold text-emerald-950'
                            : picked
                              ? 'border-rose-500 bg-rose-50 text-rose-900'
                              : 'border-slate-200 bg-white text-slate-500'
                          : picked
                            ? 'border-sky-600 bg-sky-700 text-white'
                            : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <div className="rounded bg-white p-2 text-[11px] text-slate-700 border border-slate-200">
                  <strong>เฉลย:</strong> {item.exp}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-lg bg-sky-700 px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-sky-800 shadow-xs cursor-pointer"
          >
            ตรวจคำตอบ Workshop Module 2
          </button>
          {submitted && (
            <span className={`text-xs font-bold ${quizScore >= 3 ? 'text-emerald-700' : 'text-amber-700'}`}>
              {quizScore >= 3 ? '✓ ผ่านเกณฑ์ Workshop (≥ 3/4 ข้อ)!' : 'ลองทบทวนตัวเลขบน Dashboard อีกครั้งนะคะ'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
