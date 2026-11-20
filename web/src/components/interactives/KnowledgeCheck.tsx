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

interface PreparedQuestion {
  question: QuestionItem;
  shuffledChoices: Array<{ key: 'A' | 'B' | 'C' | 'D'; label: string }>;
}

export const KnowledgeCheck: React.FC<Props> = ({ lessonId, questions }) => {
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const preparedQuestions = useMemo<PreparedQuestion[]>(() => {
    const [lo, hi] = LESSON_QUESTION_RANGES[lessonId] ?? [1, 10];
    const pool = questions.filter((q) => {
      const num = Number(q.id.split('-Q')[1]);
      return num >= lo && num <= hi;
    });

    // Shuffle pool
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    // For M1-L3: pick 3 questions (Task 3.6 / Item 10), for L1 and L2 pick 2 questions
    const count = lessonId === 'M1-L3' ? 3 : 2;
    const picked = shuffled.slice(0, count);

    return picked.map((q) => {
      const keys: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];
      const validChoices = keys
        .filter((k) => q.choices[k] && q.choices[k] !== '-')
        .map((k) => ({ key: k, label: q.choices[k] }));

      // Shuffle options (Task 3.6 & 4.8)
      const shuffledOptions = [...validChoices].sort(() => 0.5 - Math.random());
      return { question: q, shuffledChoices: shuffledOptions };
    });
  }, [lessonId, questions]);

  const score = preparedQuestions.filter(
    (item) => selected[item.question.id] === item.question.correct
  ).length;

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
      {preparedQuestions.map(({ question: q, shuffledChoices }, idx) => (
        <div key={q.id} className="rounded-xl border border-slate-300 bg-white p-3.5 sm:p-4 shadow-sm space-y-2.5">
          <div className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
            ข้อ {idx + 1}. <InlineMarkdown text={q.question} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {shuffledChoices.map(({ key, label }, choiceIdx) => {
              const displayLetter = String.fromCharCode(65 + choiceIdx); // A, B, C, D visually
              const picked = selected[q.id] === key;
              const isRight = q.correct === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => !submitted && setSelected((prev) => ({ ...prev, [q.id]: key }))}
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
                  <strong className="mr-1 text-slate-900">{displayLetter})</strong> <InlineMarkdown text={label} />
                </button>
              );
            })}
          </div>
          {submitted && (
            <div className="rounded-lg bg-sky-50/80 p-2.5 text-xs sm:text-sm text-slate-800 border border-sky-200">
              <strong className="text-sky-900">เฉลย:</strong> <InlineMarkdown text={q.explanation} />
            </div>
          )}
        </div>
      ))}

      <div className="flex items-center justify-between gap-3 pt-1">
        {!submitted ? (
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-lg bg-sky-700 px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-sky-800 transition"
          >
            ส่งคำตอบแบบทดสอบความเข้าใจ
          </button>
        ) : (
          <span className="rounded-md bg-sky-100 px-3 py-1.5 text-xs sm:text-sm font-bold text-sky-900 border border-sky-300">
            คะแนนที่ได้: {score} / {preparedQuestions.length} ข้อ
          </span>
        )}
      </div>
    </div>
  );
};
