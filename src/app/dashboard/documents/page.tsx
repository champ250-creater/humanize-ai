/**
 * Documents page.
 * Lists all saved documents with search and filter capabilities.
 */
import { FolderOpen, Plus, Search, FileText } from "lucide-react";

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">My Documents</h1>
          <p className="mt-1 text-sm text-zinc-500">
            All your saved documents, organized by course and semester
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md">
          <Plus className="h-4 w-4" />
          New Document
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search documents..."
            className="w-full rounded-lg border border-zinc-200 py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>
        <select className="rounded-lg border border-zinc-200 px-4 py-2.5 text-sm outline-none">
          <option>All Courses</option>
          <option>ENG 101</option>
          <option>PSY 200</option>
          <option>BIO 301</option>
        </select>
        <select className="rounded-lg border border-zinc-200 px-4 py-2.5 text-sm outline-none">
          <option>All Semesters</option>
          <option>Fall 2026</option>
          <option>Spring 2026</option>
        </select>
      </div>

      {/* Empty State */}
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/50 p-16 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
          <FolderOpen className="h-8 w-8 text-indigo-500" />
        </div>
        <h2 className="text-lg font-semibold text-zinc-900">
          No documents yet
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">
          Documents you create or humanize will appear here. Start by pasting
          text in the Humanizer or creating a new document.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="/dashboard/humanizer"
            className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700"
          >
            Open Humanizer
          </a>
          <button className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:bg-zinc-50">
            <FileText className="h-4 w-4" />
            New Blank Document
          </button>
        </div>
      </div>
    </div>
  );
}
