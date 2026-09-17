"use client";

import React, { useState } from "react";
import { ControlsToolbar } from "@/components/humanizer/controls-toolbar";
import { EditorPanel } from "@/components/humanizer/editor-panel";
import { OutputPanel } from "@/components/humanizer/output-panel";
import { Wand2, Loader2 } from "lucide-react";
import { trpc } from "@/components/providers";

export default function HumanizerPage() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [aiDetectionScore, setAiDetectionScore] = useState<number | null>(null);
  
  const [academicLevel, setAcademicLevel] = useState("Undergraduate");
  const [discipline, setDiscipline] = useState("General");
  const [toneSettings, setToneSettings] = useState({
    formality: 70,
    creativity: 30,
    assertiveness: 50,
  });

  const wordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0;

  const humanizeMutation = trpc.humanizer.humanize.useMutation({
    onSuccess: (data) => {
      setOutputText(data.humanizedText);
      setAiDetectionScore(data.aiDetectionScore ?? 0.05);
    },
    onError: (error) => {
      alert("Error: " + error.message);
    }
  });

  const handleHumanize = () => {
    if (!inputText.trim()) return;
    setOutputText("");
    setAiDetectionScore(null);
    humanizeMutation.mutate({
      text: inputText,
      academicLevel: academicLevel.toLowerCase().replace(/[^a-z]/g, '_') as any || 'undergraduate',
      discipline: discipline.toLowerCase().replace(/[^a-z]/g, '_') as any || 'general',
      toneSettings,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">AI Text Humanizer</h1>
        <p className="mt-2 text-slate-600">
          Transform AI-generated text into natural, human-like academic writing.
        </p>
      </div>

      <ControlsToolbar
        academicLevel={academicLevel}
        discipline={discipline}
        toneSettings={toneSettings}
        onAcademicLevelChange={setAcademicLevel}
        onDisciplineChange={setDiscipline}
        onToneSettingsChange={setToneSettings}
        isProcessing={humanizeMutation.isPending}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 shadow-lg rounded-xl overflow-hidden border border-slate-200 bg-white">
        <EditorPanel
          value={inputText}
          onChange={setInputText}
          wordCount={wordCount}
        />
        <OutputPanel
          text={outputText}
          isProcessing={humanizeMutation.isPending}
          aiDetectionScore={aiDetectionScore}
        />
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={handleHumanize}
          disabled={!inputText.trim() || humanizeMutation.isPending}
          className="group relative flex items-center justify-center gap-3 w-full max-w-md py-4 px-8 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 rounded-full shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:pointer-events-none overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full" />
          
          {humanizeMutation.isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin relative z-10" />
              <span className="relative z-10">Humanizing...</span>
            </>
          ) : (
            <>
              <Wand2 className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Humanize ✨</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
