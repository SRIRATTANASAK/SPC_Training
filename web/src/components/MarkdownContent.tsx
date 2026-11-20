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
    <div className={`w-full ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          table: ({ children }) => (
            <div className="w-full overflow-x-auto my-2.5 rounded-xl border border-slate-300 shadow-sm bg-white">
              <table className="w-full border-collapse text-left text-sm sm:text-base">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-slate-900 text-white font-bold">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-slate-200 bg-white">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-slate-50 transition-colors">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-3 sm:px-4 py-2.5 sm:py-3 font-bold text-slate-100 border-r border-slate-700 last:border-r-0 text-center first:text-left text-xs sm:text-sm">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-slate-700 border-r border-slate-200 last:border-r-0 leading-relaxed align-middle text-xs sm:text-sm">
              {children}
            </td>
          ),
          p: ({ children }) => <p className="mb-2 text-slate-700 leading-relaxed">{children}</p>,
          strong: ({ children }) => <strong className="font-bold text-slate-900">{children}</strong>,
          blockquote: ({ children }) => (
            <blockquote className="my-2 rounded-r-lg border-l-4 border-amber-500 bg-amber-50/80 p-3 text-sm text-slate-800 shadow-xs">
              {children}
            </blockquote>
          ),
        }}
      >
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
