"use client";

import React from "react";
import { Loader2, ShieldCheck } from "lucide-react";

interface DetectorInputProps {
  value: string;
  onChange: (value: string) => void;
  wordCount: number;
  onAnalyze: () => void;
  isProcessing: boolean;
}

export function DetectorInput({ value, onChange, wordCount, onAnalyze, isProcessing }: DetectorInputProps) {
  const characterCount = value.length;

  return (
    <div className="flex flex-col h-full bg-white border border-slate-200 rounded-l-xl shadow-sm overflow-hidden lg:border-r-0 lg:rounded-r-none">
      <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
        <h2 className="text-sm font-semibold text-slate-800">Text to Analyze</h2>
        <button
          onClick={onAnalyze}
          disabled={!value.trim() || isProcessing}
          className="flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 disabled:opacity-50 transition-colors"
        >
          {isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
          {isProcessing ? "Analyzing..." : "Check AI Score"}
        </button>
      </div>
      <div className="flex-1 p-0 relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste the text you want to check for AI generation here..."
          className="w-full h-full min-h-[400px] p-6 resize-none outline-none text-slate-700 leading-relaxed font-sans text-sm placeholder:text-slate-400"
        />
      </div>
      <div className="p-3 border-t border-slate-100 bg-slate-50 text-xs text-slate-500 flex justify-between items-center">
        <div className="flex gap-4">
          <span><strong className="font-medium text-slate-700">{wordCount}</strong> words</span>
          <span><strong className="font-medium text-slate-700">{characterCount}</strong> chars</span>
        </div>
      </div>
    </div>
  );
}
