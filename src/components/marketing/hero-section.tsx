import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white" />
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-100 bg-indigo-50/50 text-indigo-700 text-sm font-medium mb-8 shadow-sm backdrop-blur-sm">
          <span>🚀</span>
          <span>Trusted by 50,000+ students worldwide</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6 max-w-4xl mx-auto leading-tight">
          Write Like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Human.</span><br />
          Think Like a Scholar.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Transform AI-generated text into natural, undetectable academic writing in seconds. Pass any AI detector with confidence.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Start Writing for Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#demo"
            className="inline-flex items-center justify-center gap-2 bg-white text-zinc-700 border border-zinc-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm w-full sm:w-auto"
          >
            <Sparkles className="w-5 h-5 text-indigo-500" />
            See How It Works
          </Link>
        </div>

        {/* Microcopy */}
        <p className="text-sm text-zinc-500 mb-16">
          100% Free Forever • No login required
        </p>

        {/* Mockup */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl -z-10 rounded-full" />
          <div className="rounded-2xl border border-zinc-200/80 bg-white/50 backdrop-blur-md p-2 shadow-2xl overflow-hidden ring-1 ring-zinc-900/5">
            <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 flex flex-col overflow-hidden h-[400px]">
              <div className="h-12 border-b border-zinc-200/80 bg-white flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto bg-zinc-100 rounded-md px-32 py-1 text-xs text-zinc-500 font-medium hidden sm:block">editor.humanizeai.app</div>
              </div>
              <div className="flex-1 flex flex-col md:flex-row p-6 gap-6">
                <div className="flex-1 space-y-4">
                  <div className="text-sm font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" /> AI Generated
                  </div>
                  <div className="h-32 bg-white rounded-lg border border-red-100 p-4 text-zinc-400 font-serif text-sm relative">
                    Furthermore, it can be concluded that the aforementioned study elucidates the complex dynamics of...
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="bg-white p-2 rounded-full shadow-sm border border-zinc-100">
                    <ArrowRight className="w-5 h-5 text-indigo-400" />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="text-sm font-semibold text-indigo-500 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" /> Humanized
                  </div>
                  <div className="h-32 bg-white rounded-lg border border-indigo-100 shadow-[0_0_15px_rgba(99,102,241,0.1)] p-4 text-zinc-800 font-serif text-sm relative">
                    As this study shows, the underlying dynamics are deeply complex...
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
