/**
 * Research Digest page.
 * Upload PDFs to get structured summaries, flashcards, and chat with papers.
 */
import { FileText, Upload, Brain, MessageSquare } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900">Research Digest</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Upload research papers to get instant summaries, key arguments, and
          study flashcards
        </p>
      </div>

      {/* Upload Area */}
      <div className="rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-50/50 p-12 text-center transition-colors hover:border-indigo-300 hover:bg-indigo-50/30">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
          <Upload className="h-8 w-8 text-indigo-500" />
        </div>
        <h2 className="text-lg font-semibold text-zinc-900">
          Upload a Research Paper
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">
          Drag and drop your PDF, DOCX, or EPUB file here, or click to browse.
          Max file size: 25MB.
        </p>
        <button className="mt-6 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md">
          Choose File
        </button>
      </div>

      {/* Features Preview */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
            <FileText className="h-5 w-5 text-emerald-600" />
          </div>
          <h3 className="font-semibold text-zinc-900">Smart Summaries</h3>
          <p className="mt-1 text-sm text-zinc-500">
            TL;DR, key arguments, methodology analysis, strengths &amp;
            weaknesses
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50">
            <Brain className="h-5 w-5 text-purple-600" />
          </div>
          <h3 className="font-semibold text-zinc-900">Auto Flashcards</h3>
          <p className="mt-1 text-sm text-zinc-500">
            8-15 comprehension flashcards generated per paper, Anki-compatible
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
            <MessageSquare className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="font-semibold text-zinc-900">Chat with Paper</h3>
          <p className="mt-1 text-sm text-zinc-500">
            Ask questions about the paper; get answers grounded in the content
          </p>
        </div>
      </div>
    </div>
  );
}
