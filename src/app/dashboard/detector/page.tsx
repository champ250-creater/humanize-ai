"use client";

import React, { useState } from "react";
import { DetectorInput } from "@/components/detector/detector-input";
import { DetectorResults } from "@/components/detector/detector-results";
import { trpc } from "@/lib/trpc-client";

export default function DetectorPage() {
  const [inputText, setInputText] = useState("");
  
  const analyzeMutation = trpc.detection.analyze.useMutation();

  const handleAnalyze = () => {
    if (!inputText.trim()) return;
    analyzeMutation.mutate({ text: inputText });
  };

  const wordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 min-h-screen flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          AI Detection Pre-Check
        </h1>
        <p className="mt-2 text-slate-600">
          Check your text against multiple AI detection algorithms before submission.
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 shadow-lg rounded-xl overflow-hidden border border-slate-200 bg-white">
        <DetectorInput
          value={inputText}
          onChange={setInputText}
          wordCount={wordCount}
          onAnalyze={handleAnalyze}
          isProcessing={analyzeMutation.isPending}
        />
        <DetectorResults
          overallScore={analyzeMutation.data?.overallScore ?? null}
          sentences={analyzeMutation.data?.sentences ?? []}
          topIssues={analyzeMutation.data?.topIssues ?? []}
          recommendation={analyzeMutation.data?.recommendation ?? null}
          isProcessing={analyzeMutation.isPending}
        />
      </div>
    </div>
  );
}
