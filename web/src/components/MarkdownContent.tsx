import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';

interface Props {
  markdown: string;
  className?: string;
}

export const MarkdownContent: React.FC<Props> = ({ markdown, className = '' }) => {
  return (
    <div
      className={`prose prose-slate max-w-none prose-headings:text-slate-900 prose-h3:text-lg prose-h3:font-bold prose-p:text-slate-700 prose-p:leading-relaxed prose-strong:text-slate-900 prose-code:rounded prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sky-800 prose-table:w-full prose-table:border-collapse prose-table:border prose-table:border-slate-300 prose-table:text-xs sm:prose-table:text-sm prose-th:border prose-th:border-slate-300 prose-th:bg-slate-100 prose-th:px-3 prose-th:py-2 prose-th:text-left prose-td:border prose-td:border-slate-300 prose-td:px-3 prose-td:py-2 prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-amber-50/70 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg ${className}`}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export const InlineMarkdown: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  return (
    <span className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          p: ({ children }) => <>{children}</>,
          code: ({ children }) => (
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[0.92em] text-sky-800">{children}</code>
          ),
        }}
      >
        {text}
      </ReactMarkdown>
    </span>
  );
};
