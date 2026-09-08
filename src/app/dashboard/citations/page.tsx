/**
 * Citation Manager page.
 * Auto-generate APA, MLA, Chicago, IEEE citations from URLs and DOIs.
 */
import { BookOpen, Link, FileText, Plus } from "lucide-react";

export default function CitationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">
            Citation Manager
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Auto-generate perfectly formatted citations from URLs, DOIs, or ISBNs
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md">
          <Plus className="h-4 w-4" />
          Add Citation
        </button>
      </div>

      {/* Citation Input */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <label className="block text-sm font-medium text-zinc-700 mb-2">
          Paste a URL, DOI, or ISBN
        </label>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Link className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="https://doi.org/10.1234/example or paste any article URL..."
              className="w-full rounded-lg border border-zinc-200 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          <select className="rounded-lg border border-zinc-200 px-4 py-3 text-sm outline-none">
            <option>APA 7th</option>
            <option>MLA 9th</option>
            <option>Chicago 17th</option>
            <option>IEEE</option>
            <option>Harvard</option>
          </select>
          <button className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-700">
            Generate
          </button>
        </div>
      </div>

      {/* Empty State */}
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/50 p-12 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50">
          <BookOpen className="h-8 w-8 text-purple-500" />
        </div>
        <h2 className="text-lg font-semibold text-zinc-900">
          No citations yet
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">
          Paste a URL or DOI above to automatically generate a perfectly
          formatted citation. We support APA, MLA, Chicago, IEEE, Harvard,
          and more.
        </p>
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-400">
          <FileText className="h-3.5 w-3.5" />
          <span>Citations are saved automatically to your library</span>
        </div>
      </div>
    </div>
  );
}
