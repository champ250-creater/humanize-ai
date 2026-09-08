/**
 * AI Detection Pre-Check page.
 * Allows students to check their text against AI detection algorithms.
 */
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";

export default function DetectorPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900">
          AI Detection Pre-Check
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          Check your text against multiple AI detection algorithms before
          submission
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-12 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50">
          <Shield className="h-8 w-8 text-amber-500" />
        </div>
        <h2 className="text-lg font-semibold text-zinc-900">
          Coming in Phase 2
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">
          The Detection Shield will analyze your text against GPTZero,
          Originality.ai, Copyleaks, and more — giving you a sentence-level
          heatmap of what flags as AI-generated.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 text-sm">
          <span className="flex items-center gap-1.5 text-green-600">
            <CheckCircle className="h-4 w-4" /> Green = Safe
          </span>
          <span className="flex items-center gap-1.5 text-amber-600">
            <AlertTriangle className="h-4 w-4" /> Yellow = Caution
          </span>
          <span className="flex items-center gap-1.5 text-red-600">
            <AlertTriangle className="h-4 w-4" /> Red = Rework
          </span>
        </div>
      </div>
    </div>
  );
}
