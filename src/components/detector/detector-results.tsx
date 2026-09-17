"use client";

import React, { useState } from "react";
import { AlertTriangle, CheckCircle, Info, ShieldAlert } from "lucide-react";

interface Sentence {
  text: string;
  score: number;
  reasoning: string;
}

interface DetectorResultsProps {
  overallScore: number | null;
  sentences: Sentence[];
  topIssues: string[];
  recommendation: string | null;
  isProcessing: boolean;
}

export function DetectorResults({ overallScore, sentences, topIssues, recommendation, isProcessing }: DetectorResultsProps) {
  const [hoveredSentence, setHoveredSentence] = useState<Sentence | null>(null);

  if (isProcessing) {
    return (
      <div className="flex flex-col h-full bg-slate-50 border border-slate-200 rounded-r-xl shadow-sm items-center justify-center p-12">
        <div className="w-16 h-16 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin mb-6" />
        <h3 className="text-xl font-medium text-slate-800">Analyzing Text...</h3>
        <p className="text-slate-500 mt-2 text-center max-w-sm">
          Scanning for AI patterns, structural formulaicism, and predictability.
        </p>
      </div>
    );
  }

  if (overallScore === null) {
    return (
      <div className="flex flex-col h-full bg-slate-50 border border-slate-200 rounded-r-xl shadow-sm items-center justify-center p-12 text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 mb-6">
          <ShieldAlert className="w-8 h-8 text-slate-300" />
        </div>
        <h3 className="text-xl font-medium text-slate-800">No Analysis Yet</h3>
        <p className="text-slate-500 mt-2 max-w-sm">
          Paste your text and click "Check AI Score" to see a detailed sentence-by-sentence breakdown.
        </p>
      </div>
    );
  }

  const scorePercentage = Math.round(overallScore * 100);
  let statusColor = "text-green-600";
  let statusBg = "bg-green-50";
  let statusBorder = "border-green-200";
  let statusText = "Likely Human";
  let StatusIcon = CheckCircle;

  if (scorePercentage >= 70) {
    statusColor = "text-red-600";
    statusBg = "bg-red-50";
    statusBorder = "border-red-200";
    statusText = "Likely AI-Generated";
    StatusIcon = AlertTriangle;
  } else if (scorePercentage >= 30) {
    statusColor = "text-amber-600";
    statusBg = "bg-amber-50";
    statusBorder = "border-amber-200";
    statusText = "Mixed Content (Caution)";
    StatusIcon = AlertTriangle;
  }

  const getHighlightClass = (score: number) => {
    if (score >= 0.7) return "bg-red-100 hover:bg-red-200";
    if (score >= 0.3) return "bg-amber-100 hover:bg-amber-200";
    return "bg-transparent hover:bg-green-50";
  };

  return (
    <div className="flex flex-col h-full bg-white border border-slate-200 rounded-r-xl shadow-sm overflow-hidden flex-1">
      <div className={`p-6 border-b ${statusBorder} ${statusBg} flex items-center gap-4`}>
        <div className="relative w-16 h-16 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-slate-200"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className={statusColor}
              strokeDasharray={`${scorePercentage}, 100`}
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-sm">
            {scorePercentage}%
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            {statusText}
            <StatusIcon className={`w-5 h-5 ${statusColor}`} />
          </h2>
          <p className="text-sm text-slate-600 font-medium">AI Probability Score</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        <div className="flex-1 p-6 overflow-y-auto leading-relaxed text-slate-800 font-serif text-sm">
          {sentences.map((sentence, idx) => (
            <span
              key={idx}
              className={`cursor-pointer transition-colors rounded px-0.5 mr-1 ${getHighlightClass(sentence.score)}`}
              onMouseEnter={() => setHoveredSentence(sentence)}
              onMouseLeave={() => setHoveredSentence(null)}
            >
              {sentence.text}
            </span>
          ))}
        </div>

        {/* Info Panel / Tooltip Area */}
        <div className="w-full md:w-64 bg-slate-50 border-l border-slate-200 p-4 overflow-y-auto flex-shrink-0">
          {hoveredSentence ? (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Sentence Analysis</h4>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded text-xs font-bold ${
                  hoveredSentence.score >= 0.7 ? "bg-red-100 text-red-700" :
                  hoveredSentence.score >= 0.3 ? "bg-amber-100 text-amber-700" :
                  "bg-green-100 text-green-700"
                }`}>
                  {Math.round(hoveredSentence.score * 100)}% AI
                </span>
              </div>
              <p className="text-sm text-slate-700 italic border-l-2 border-slate-300 pl-2">
                "{hoveredSentence.text}"
              </p>
              <p className="text-sm text-slate-600 bg-white p-3 rounded border border-slate-200">
                {hoveredSentence.reasoning}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1">
                  <Info className="w-4 h-4" /> Top Issues
                </h4>
                {topIssues && topIssues.length > 0 ? (
                  <ul className="space-y-2">
                    {topIssues.map((issue, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-slate-400 mt-0.5">•</span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-500 italic">No major issues found.</p>
                )}
              </div>
              
              {recommendation && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1">
                    <ShieldAlert className="w-4 h-4" /> Recommendation
                  </h4>
                  <p className="text-sm text-slate-700 bg-white p-3 rounded border border-slate-200">
                    {recommendation}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
