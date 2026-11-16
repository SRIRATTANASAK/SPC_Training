import React, { useMemo, useState } from 'react';
import type { QuestionItem } from '../../lib/types';
import { progressStore } from '../../lib/storage';

interface Props {
  lessonId: string;
  questions: QuestionItem[];
}

const LESSON_QUESTION_RANGES: Record<string, [number, number]> = {
  'M1-L1': [1, 10],
  'M1-L2': [11, 30],
  'M1-L3': [31, 50],
};

export const KnowledgeCheck: React.FC<Props> = ({ lessonId, questions }) => {
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const kcQuestions = useMemo(() => {
    const [lo, hi] = LESSON_QUESTION_RANGES[lessonId] ?? [1, 10];
    return questions
      .filter((q) => {
        const num = Number(q.id.split('-Q')[1]);
        return num >= lo && num <= hi;
      })
      .slice(0, 2);
  }, [lessonId, questions]);

  const score = kcQuestions.filter((q) => selected[q.id] === q.correct).length;

  const handleSubmit = () => {
    setSubmitted(true);
    const key = lessonId.replace('M1-', '') as 'L1' | 'L2' | 'L3';
    const cur = progressStore.load();
    progressStore.save({
      var_lesson_scores: {
        ...cur.var_lesson_scores,
        [key]: Math.max(cur.var_lesson_scores[key] ?? 0, score * 10),
      },
    });
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">KC-{lessonId}</span>
          <h3 className="text-lg font-bold text-slate-900">แบบทดสอบความเข้าใจท้ายบท (2 ข้อ)</h3>
        </div>
        {submitted && (
          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-900">
            ได้ {score} / {kcQuestions.length}
          </span>
        )}
      </div>

      {kcQuestions.map((q, idx) => (
        <div key={q.id} className="rounded-lg border border-slate-200 bg-slate-50 p-4 space-y-2.5">
          <div className="text-sm font-bold text-slate-900">
            {idx + 1}. ({q.id}) {q.question}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {(['A', 'B', 'C', 'D'] as const).map((k) => {
              const label = q.choices[k];
              if (!label || label === '-') return null;
              const picked = selected[q.id] === k;
              const isRight = q.correct === k;
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => setSelected((prev) => ({ ...prev, [q.id]: k }))}
                  className={`rounded-lg border px-3 py-2 text-left text-xs transition ${
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
                  <strong>{k})</strong> {label}
                </button>
              );
            })}
          </div>
          {submitted && (
            <div className="rounded bg-white p-2.5 text-xs text-slate-700 border border-slate-200">
              <strong>เฉลย ({q.correct}):</strong> {q.explanation}
            </div>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={handleSubmit}
        className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-bold text-white hover:bg-sky-800"
      >
        ส่งคำตอบ Knowledge Check
      </button>
    </div>
  );
};
