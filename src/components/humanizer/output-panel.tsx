"use client";

import React from "react";
import { Copy, Download, Sparkles } from "lucide-react";
import { DetectionBadge } from "./detection-badge";

interface OutputPanelProps {
  text: string;
  isProcessing: boolean;
  aiDetectionScore: number | null;
}

export function OutputPanel({ text, isProcessing, aiDetectionScore }: OutputPanelProps) {
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  const handleCopy = () => {
    if (text) {
      navigator.clipboard.writeText(text);
    }
  };

  const handleDownload = () => {
    if (text) {
      const element = document.createElement("a");
      const file = new Blob([text], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "humanized-text.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 border border-slate-200 rounded-r-xl shadow-sm overflow-hidden lg:rounded-l-none lg:border-l">
      <div className="p-4 border-b border-slate-200 bg-white flex justify-between items-center">
        <h2 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-500" />
          Humanized Output
        </h2>
        {aiDetectionScore !== null && !isProcessing && (
          <DetectionBadge score={aiDetectionScore} />
        )}
      </div>

      <div className="flex-1 p-6 relative overflow-y-auto">
        {isProcessing ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-4 bg-slate-200 rounded w-3/4"></div>
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-2/3"></div>
            <div className="mt-8 h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-4/5"></div>
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-2 h-4 bg-indigo-400 animate-bounce"></div>
            </div>
          </div>
        ) : !text ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-2">
              <Sparkles className="w-8 h-8 text-slate-300" />
            </div>
            <p className="text-sm font-medium">Your humanized text will appear here</p>
          </div>
        ) : (
          <div className="text-slate-800 leading-relaxed whitespace-pre-wrap font-serif text-base">
            {text}
          </div>
        )}
      </div>

      <div className="p-3 border-t border-slate-200 bg-white flex justify-between items-center">
        <div className="text-xs text-slate-500">
          <strong className="font-medium text-slate-700">{wordCount}</strong> words
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            disabled={!text || isProcessing}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors disabled:opacity-50 disabled:pointer-events-none"
          >
            <Copy className="w-3.5 h-3.5" />
            Copy
          </button>
          <button
            onClick={handleDownload}
            disabled={!text || isProcessing}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors disabled:opacity-50 disabled:pointer-events-none"
          >
            <Download className="w-3.5 h-3.5" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
