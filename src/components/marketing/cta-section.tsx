"use client";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-600 -z-20" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-700/50 to-transparent -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Write Smarter?
          </h2>
          <p className="text-lg text-indigo-100 mb-10">
            Join 50,000+ students who trust HumanizeAI for their academic writing.
          </p>
          
          <div className="flex justify-center">
            <a
              href="/dashboard"
              className="rounded-full bg-zinc-900 text-white px-10 py-5 text-lg font-semibold hover:bg-zinc-800 transition-colors shadow-lg whitespace-nowrap"
            >
              Go to Dashboard
            </a>
          </div>
          <p className="text-sm text-indigo-200 mt-6">
            100% Free Forever • No login required
          </p>
        </div>
      </div>
    </section>
  );
}
