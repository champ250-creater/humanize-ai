"use client";

import React, { useState } from "react";
import { ControlsToolbar } from "@/components/humanizer/controls-toolbar";
import { EditorPanel } from "@/components/humanizer/editor-panel";
import { OutputPanel } from "@/components/humanizer/output-panel";
import { Wand2, Loader2 } from "lucide-react";

export default function HumanizerPage() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiDetectionScore, setAiDetectionScore] = useState<number | null>(null);
  
  const [academicLevel, setAcademicLevel] = useState("Undergraduate");
  const [discipline, setDiscipline] = useState("General");
  const [toneSettings, setToneSettings] = useState({
    formality: 70,
    creativity: 30,
    assertiveness: 50,
  });

  const wordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0;

  const handleHumanize = () => {
    if (!inputText.trim()) return;
    
    setIsProcessing(true);
    setAiDetectionScore(null);

    // Simulate API call
    setTimeout(() => {
      setOutputText(
        "Climate change stands as one of the most pressing challenges of our time, demanding immediate and coordinated action across all sectors of society. At its core, the issue stems from the unprecedented accumulation of greenhouse gases in the Earth's atmosphere, primarily driven by industrial activities, deforestation, and the widespread combustion of fossil fuels.\n\n" +
        "While natural climate variations have always occurred, the current rate of warming is unparalleled in recent history. The scientific consensus clearly indicates that human activities are the dominant cause of observed warming since the mid-20th century. This rapid environmental shift brings cascading consequences: rising sea levels, more frequent and severe extreme weather events, and significant disruptions to both natural ecosystems and human agricultural systems.\n\n" +
        "Addressing this crisis requires a multifaceted approach. Transitioning to renewable energy sources, implementing sustainable land-use practices, and developing innovative carbon capture technologies are essential steps. Furthermore, international cooperation is crucial, as the impacts of climate change transcend national boundaries, affecting vulnerable communities disproportionately despite their minimal contribution to the problem."
      );
      setAiDetectionScore(0.08); // 8% AI -> "Safe"
      setIsProcessing(false);
    }, 3000);
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
        isProcessing={isProcessing}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 shadow-lg rounded-xl overflow-hidden border border-slate-200 bg-white">
        <EditorPanel
          value={inputText}
          onChange={setInputText}
          wordCount={wordCount}
        />
        <OutputPanel
          text={outputText}
          isProcessing={isProcessing}
          aiDetectionScore={aiDetectionScore}
        />
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={handleHumanize}
          disabled={!inputText.trim() || isProcessing}
          className="group relative flex items-center justify-center gap-3 w-full max-w-md py-4 px-8 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 rounded-full shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:pointer-events-none overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full" />
          
          {isProcessing ? (
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
