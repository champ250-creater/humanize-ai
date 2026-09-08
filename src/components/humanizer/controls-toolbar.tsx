"use client";

import React from "react";

interface ToneSettings {
  formality: number;
  creativity: number;
  assertiveness: number;
}

interface ControlsToolbarProps {
  academicLevel: string;
  discipline: string;
  toneSettings: ToneSettings;
  onAcademicLevelChange: (level: string) => void;
  onDisciplineChange: (discipline: string) => void;
  onToneSettingsChange: (settings: ToneSettings) => void;
  isProcessing: boolean;
}

const ACADEMIC_LEVELS = [
  "High School",
  "Undergraduate",
  "Master's",
  "PhD",
  "Postdoctoral",
];

const DISCIPLINES = [
  "STEM",
  "Humanities",
  "Social Sciences",
  "Business",
  "Law",
  "Medical",
  "General",
];

export function ControlsToolbar({
  academicLevel,
  discipline,
  toneSettings,
  onAcademicLevelChange,
  onDisciplineChange,
  onToneSettingsChange,
  isProcessing,
}: ControlsToolbarProps) {
  return (
    <div className="flex flex-col gap-6 p-5 bg-white border border-slate-200 shadow-sm rounded-xl mb-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-2">
          <label className="text-sm font-medium text-slate-700">Academic Level</label>
          <select
            disabled={isProcessing}
            value={academicLevel}
            onChange={(e) => onAcademicLevelChange(e.target.value)}
            className="w-full h-10 px-3 py-2 text-sm bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50"
          >
            {ACADEMIC_LEVELS.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 space-y-2">
          <label className="text-sm font-medium text-slate-700">Discipline</label>
          <select
            disabled={isProcessing}
            value={discipline}
            onChange={(e) => onDisciplineChange(e.target.value)}
            className="w-full h-10 px-3 py-2 text-sm bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50"
          >
            {DISCIPLINES.map((disc) => (
              <option key={disc} value={disc}>
                {disc}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-slate-100">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-slate-700">Formality</label>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{toneSettings.formality}</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            disabled={isProcessing}
            value={toneSettings.formality}
            onChange={(e) => onToneSettingsChange({ ...toneSettings, formality: parseInt(e.target.value) })}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 disabled:opacity-50"
          />
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-slate-700">Creativity</label>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{toneSettings.creativity}</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            disabled={isProcessing}
            value={toneSettings.creativity}
            onChange={(e) => onToneSettingsChange({ ...toneSettings, creativity: parseInt(e.target.value) })}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 disabled:opacity-50"
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-slate-700">Assertiveness</label>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{toneSettings.assertiveness}</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            disabled={isProcessing}
            value={toneSettings.assertiveness}
            onChange={(e) => onToneSettingsChange({ ...toneSettings, assertiveness: parseInt(e.target.value) })}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 disabled:opacity-50"
          />
        </div>
      </div>
    </div>
  );
}
