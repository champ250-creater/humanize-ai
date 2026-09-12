import { Fingerprint, Upload, CheckCircle } from 'lucide-react';

export default function VoiceProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900">Voice Fingerprint</h1>
        <p className="mt-1 text-sm text-zinc-500">Train HumanizeAI to write exactly like you do</p>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
            <Fingerprint className="h-8 w-8 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-zinc-900">Calibrate Your Writing Voice</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Upload 3-5 essays or papers you have written. HumanizeAI will analyze your unique writing
            style — sentence structure, vocabulary, transitions, and tone — to make humanized text
            sound exactly like you.
          </p>

          <div className="mt-8 space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border border-dashed border-zinc-300 bg-white p-4 transition-colors hover:border-indigo-300">
                <Upload className="h-5 w-5 text-zinc-400" />
                <span className="text-sm text-zinc-500">Upload sample essay #{i}</span>
                <button className="ml-auto rounded-md bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-200">Browse</button>
              </div>
            ))}
          </div>

          <button className="mt-6 rounded-lg bg-indigo-600 px-8 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md disabled:opacity-50" disabled>
            Analyze My Writing Style
          </button>
          <p className="mt-2 text-xs text-zinc-400">Requires Pro plan • Upload at least 3 samples to begin</p>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h3 className="font-semibold text-zinc-900 mb-4">What We Analyze</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Avg Sentence Length', value: '—' },
            { label: 'Vocabulary Level', value: '—' },
            { label: 'Passive Voice Ratio', value: '—' },
            { label: 'Formality Score', value: '—' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-zinc-50 p-4 text-center">
              <div className="text-2xl font-bold text-zinc-900">{value}</div>
              <div className="mt-1 text-xs text-zinc-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
