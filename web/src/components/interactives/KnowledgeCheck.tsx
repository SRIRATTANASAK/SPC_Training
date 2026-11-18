import React, { useMemo, useState } from 'react';
import type { QuestionItem } from '../../lib/types';
import { progressStore } from '../../lib/storage';
import { InlineMarkdown } from '../MarkdownContent';

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
    <div className="w-full space-y-3">
      {kcQuestions.map((q, idx) => (
        <div key={q.id} className="rounded-xl border border-slate-300 bg-white p-3.5 sm:p-4 shadow-sm space-y-2.5">
          <div className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
            ข้อ {idx + 1}. <InlineMarkdown text={q.question} />
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
                  className={`rounded-lg border px-3 py-2 text-left text-xs sm:text-sm transition cursor-pointer ${
                    submitted
                      ? isRight
                        ? 'border-emerald-500 bg-emerald-50 font-bold text-emerald-900 shadow-xs'
                        : picked
                          ? 'border-rose-500 bg-rose-50 text-rose-900'
                          : 'border-slate-200 bg-slate-50 text-slate-500'
                      : picked
                        ? 'border-sky-600 bg-sky-50 font-bold text-sky-900 shadow-xs ring-1 ring-sky-300'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <strong className="mr-1 text-slate-900">{k})</strong> <InlineMarkdown text={label} />
                </button>
              );
            })}
          </div>
          {submitted && (
            <div className="rounded-lg bg-sky-50/80 p-2.5 text-xs sm:text-sm text-slate-800 border border-sky-200">
              <strong className="text-sky-900">เฉลย ({q.correct}):</strong> <InlineMarkdown text={q.explanation} />
            </div>
          )}
        </div>
      ))}

      <div className="flex items-center justify-between gap-3 pt-1">
        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-lg bg-sky-700 px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-sky-800 transition"
        >
          ส่งคำตอบแบบทดสอบความเข้าใจ
        </button>
        {submitted && (
          <span className="rounded-md bg-sky-100 px-3 py-1.5 text-xs sm:text-sm font-bold text-sky-900 border border-sky-300">
            คะแนนที่ได้: {score} / {kcQuestions.length} ข้อ
          </span>
        )}
      </div>
    </div>
  );
};
