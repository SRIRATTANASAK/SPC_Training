import React, { useCallback, useMemo, useState } from 'react';
import type { QuestionItem } from '../../lib/types';
import { progressStore } from '../../lib/storage';
import { InlineMarkdown } from '../MarkdownContent';
import { withBase } from '../../lib/base';

interface Props {
  questions: QuestionItem[];
}

function sampleN<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

function drawStratified(pool: QuestionItem[]): QuestionItem[] {
  const byRange = (lo: number, hi: number) =>
    pool.filter((q) => {
      const n = Number(q.id.split('-Q')[1]);
      return n >= lo && n <= hi;
    });
  return [
    ...sampleN(byRange(1, 10), 3),
    ...sampleN(byRange(11, 30), 6),
    ...sampleN(byRange(31, 50), 6),
    ...sampleN(byRange(51, 60), 5),
  ];
}

const PAGE_SIZE = 2;

export const FinalExam: React.FC<Props> = ({ questions }) => {
  const [examSet, setExamSet] = useState<QuestionItem[]>(() => drawStratified(questions));
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(examSet.length / PAGE_SIZE);
  const visibleQuestions = examSet.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const score = useMemo(() => examSet.filter((q) => answers[q.id] === q.correct).length, [examSet, answers]);
  const pct = Math.round((score / examSet.length) * 100);
  const passed = pct >= 80;

  const weakLessons = useMemo(() => {
    const map: Record<string, { ok: number; total: number; href: string; label: string }> = {
      'LO-M1-01': { ok: 0, total: 0, href: withBase('/module-01/M1L1-S01'), label: 'Lesson 1: Why Statistics & COPQ' },
      'LO-M1-02': { ok: 0, total: 0, href: withBase('/module-01/M1L2-S01'), label: 'Lesson 2: Data Types & NOIR Scales' },
      'LO-M1-03': { ok: 0, total: 0, href: withBase('/module-01/M1L3-S01'), label: 'Lesson 3: Descriptive Statistics' },
      'LO-M1-04': { ok: 0, total: 0, href: withBase('/module-01/M1L4-S01'), label: 'Lesson 4: Data Visualization' },
    };
    for (const q of examSet) {
      if (map[q.lo]) {
        map[q.lo].total++;
        if (answers[q.id] === q.correct) map[q.lo].ok++;
      }
    }
    return Object.values(map).filter((m) => m.total > 0 && m.ok / m.total < 0.8);
  }, [examSet, answers]);

  const handleSubmit = () => {
    setSubmitted(true);
    progressStore.save({
      var_exam_score: pct,
      var_exam_passed: passed,
    });
  };

  const handleRetry = useCallback(() => {
    setExamSet(drawStratified(questions));
    setAnswers({});
    setSubmitted(false);
    setPage(0);
  }, [questions]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">EXAM-M1 • Stratified Draw</span>
          <h3 className="text-lg font-extrabold text-slate-900">แบบทดสอบปลายโมดูลที่ 1 (20 ข้อจากคลัง 60 ข้อ)</h3>
          <p className="text-xs text-slate-600">เกณฑ์ผ่าน: ≥ 80% (16 / 20 ข้อ) — หน้า {page + 1} / {totalPages}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
            ตอบแล้ว {Object.keys(answers).length} / {examSet.length} ข้อ
          </span>
          <button
            type="button"
            onClick={handleRetry}
            className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100"
          >
            สุ่มชุดข้อสอบใหม่
          </button>
        </div>
      </div>

      {submitted && (
        <div
          className={`rounded-xl border-2 p-3 ${
            passed ? 'border-emerald-400 bg-emerald-50 text-emerald-950' : 'border-amber-400 bg-amber-50 text-amber-950'
          }`}
        >
          <div className="text-sm sm:text-base font-extrabold">
            ผลคะแนน: {score} / {examSet.length} ({pct}%) — {passed ? '✓ ผ่านเกณฑ์ Module 1!' : '✕ ยังไม่ถึง 80% ลองทบทวนบทที่พลาดนะคะ'}
          </div>
          {!passed && weakLessons.length > 0 && (
            <div className="mt-1.5 text-xs flex flex-wrap items-center gap-2">
              <span className="font-bold">บทเรียนแนะนำให้ทบทวน:</span>
              {weakLessons.map((w) => (
                <a
                  key={w.href}
                  href={w.href}
                  className="rounded-md bg-white px-2 py-0.5 font-semibold text-sky-800 underline shadow-sm"
                >
                  {w.label} ({w.ok}/{w.total})
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="space-y-3 transition-opacity duration-300">
        {visibleQuestions.map((q, idx) => {
          const qNum = page * PAGE_SIZE + idx + 1;
          return (
            <div key={q.id} className="rounded-lg border border-slate-200 bg-slate-50 p-3.5 space-y-2">
              <div className="flex items-center justify-between gap-2 text-[11px] text-slate-500">
                <span>ข้อที่ {qNum} ({q.id} • {q.lo})</span>
                <span>{q.bloom} ({q.difficulty})</span>
              </div>
              <div className="text-sm font-bold text-slate-900">
                {qNum}. <InlineMarkdown text={q.question} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(['A', 'B', 'C', 'D'] as const).map((k) => {
                  const label = q.choices[k];
                  if (!label || label === '-') return null;
                  const picked = answers[q.id] === k;
                  const isRight = q.correct === k;
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: k }))}
                      className={`rounded-lg border px-3 py-1.5 text-left text-xs transition ${
                        submitted
                          ? isRight
                            ? 'border-emerald-500 bg-emerald-50 font-bold text-emerald-900'
                            : picked
                              ? 'border-rose-500 bg-rose-50 text-rose-900'
                              : 'border-slate-200 bg-white text-slate-600'
                          : picked
                            ? 'border-sky-600 bg-sky-50 font-bold text-sky-900'
                            : 'border-slate-200 bg-white hover:bg-slate-100'
                      }`}
                    >
                      <strong>{k})</strong> <InlineMarkdown text={label} />
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <div className="rounded bg-white p-2 text-xs text-slate-700 border border-slate-200">
                  <strong>เฉลย ({q.correct}):</strong> <InlineMarkdown text={q.explanation} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 disabled:opacity-40 hover:bg-slate-50"
          >
            ← ข้อก่อนหน้า
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                className={`h-6 w-6 rounded text-[11px] font-bold ${
                  page === i ? 'bg-sky-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            type="button"
            disabled={page >= totalPages - 1}
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 disabled:opacity-40 hover:bg-slate-50"
          >
            ข้อถัดไป →
          </button>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-lg bg-sky-700 px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-sky-800 shadow"
        >
          ส่งข้อสอบ EXAM-M1 ทั้ง 20 ข้อ
        </button>
      </div>
    </div>
  );
};
