"use client";

import React from "react";

interface EditorPanelProps {
  value: string;
  onChange: (value: string) => void;
  wordCount: number;
  placeholder?: string;
}

export function EditorPanel({ value, onChange, wordCount, placeholder = "Paste your AI-generated text here..." }: EditorPanelProps) {
  const characterCount = value.length;
  // Average reading speed is ~200 words per minute
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="flex flex-col h-full bg-white border border-slate-200 rounded-l-xl shadow-sm overflow-hidden lg:border-r-0 lg:rounded-r-none">
      <div className="p-4 border-b border-slate-100 bg-slate-50/50">
        <h2 className="text-sm font-semibold text-slate-800">Input Text</h2>
      </div>
      <div className="flex-1 p-0 relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-full min-h-[400px] p-6 resize-none outline-none text-slate-700 leading-relaxed font-mono text-sm placeholder:text-slate-400 placeholder:font-sans"
        />
      </div>
      <div className="p-3 border-t border-slate-100 bg-slate-50 text-xs text-slate-500 flex justify-between items-center">
        <div className="flex gap-4">
          <span><strong className="font-medium text-slate-700">{wordCount}</strong> words</span>
          <span><strong className="font-medium text-slate-700">{characterCount}</strong> chars</span>
        </div>
        <div>
          ~{readingTime} min read
        </div>
      </div>
    </div>
  );
}
