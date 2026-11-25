import React, { useMemo, useState } from 'react';
import type { QuestionItem } from '../../lib/types';
import { getProgressStore } from '../../lib/storage';
import { InlineMarkdown } from '../MarkdownContent';

interface Props {
  lessonId: string;
  questions: QuestionItem[];
  fixedQuestionIds?: string[];
  moduleId?: string;
}

const LESSON_QUESTION_RANGES: Record<string, [number, number]> = {
  'M1-L1': [1, 10],
  'M1-L2': [11, 30],
  'M1-L3': [31, 50],
  'M2-L1': [1, 10],
  'M2-L2': [11, 25],
  'M2-L3': [26, 45],
};

// ค่าบังคับ Knowledge Check ของ M2 ตาม SPEC_APPROVAL_spc_phaseB1.md ข้อ 3
const FIXED_LESSON_QUESTION_IDS: Record<string, string[]> = {
  'M2-L1': ['M2-Q001', 'M2-Q005'],
  'M2-L2': ['M2-Q012', 'M2-Q018'],
  'M2-L3': ['M2-Q026', 'M2-Q033', 'M2-Q040'],
};

interface PreparedQuestion {
  question: QuestionItem;
  shuffledChoices: Array<{ key: 'A' | 'B' | 'C' | 'D'; label: string }>;
}

export const KnowledgeCheck: React.FC<Props> = ({ lessonId, questions, fixedQuestionIds, moduleId }) => {
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const resolvedModuleId = useMemo(() => {
    if (moduleId) return moduleId;
    const prefix = lessonId.split('-')[0];
    return prefix || 'M1';
  }, [moduleId, lessonId]);

  const preparedQuestions = useMemo<PreparedQuestion[]>(() => {
    const fixedIds = fixedQuestionIds ?? FIXED_LESSON_QUESTION_IDS[lessonId];
    let picked: QuestionItem[] = [];

    if (fixedIds && fixedIds.length > 0) {
      const qMap = new Map(questions.map((q) => [q.id, q]));
      picked = fixedIds.map((id) => qMap.get(id)).filter((q): q is QuestionItem => Boolean(q));
    } else {
      const [lo, hi] = LESSON_QUESTION_RANGES[lessonId] ?? [1, 10];
      const pool = questions.filter((q) => {
        const num = Number(q.id.split('-Q')[1]);
        return num >= lo && num <= hi;
      });

      const shuffled = [...pool].sort(() => 0.5 - Math.random());
      const count = lessonId.endsWith('-L3') ? 3 : 2;
      picked = shuffled.slice(0, count);
    }

    return picked.map((q) => {
      const keys: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];
      const validChoices = keys
        .filter((k) => q.choices[k] && q.choices[k] !== '-')
        .map((k) => ({ key: k, label: q.choices[k] }));

      const shuffledOptions = [...validChoices].sort(() => 0.5 - Math.random());
      return { question: q, shuffledChoices: shuffledOptions };
    });
  }, [lessonId, questions, fixedQuestionIds]);

  const score = preparedQuestions.filter(
    (item) => selected[item.question.id] === item.question.correct
  ).length;

  const handleSubmit = () => {
    setSubmitted(true);
    const key = (lessonId.split('-')[1] || 'L1') as 'L1' | 'L2' | 'L3' | 'L4';
    const store = getProgressStore(resolvedModuleId);
    const cur = store.load();
    store.save({
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
          <div className="flex items-center justify-between gap-2">
            <div className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
              ข้อ {idx + 1}. <InlineMarkdown text={q.question} />
            </div>
            <span className="shrink-0 rounded bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-bold text-slate-600">
              {q.id}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {shuffledChoices.map(({ key, label }, choiceIdx) => {
              const displayLetter = String.fromCharCode(65 + choiceIdx);
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