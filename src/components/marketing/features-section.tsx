import { cn } from "@/lib/utils";

const features = [
  {
    icon: "🔥",
    title: "AI Humanizer",
    description: "Transform robotic AI text into natural, undetectable prose with our advanced burstiness and perplexity engine."
  },
  {
    icon: "🛡️",
    title: "Detection Shield",
    description: "Pre-check your text against 5+ AI detectors before submission. See exactly which sentences flag."
  },
  {
    icon: "📝",
    title: "Auto-Citations",
    description: "Paste a URL or DOI. Get perfectly formatted APA, MLA, Chicago, IEEE citations instantly."
  },
  {
    icon: "📚",
    title: "Research Digest",
    description: "Upload PDFs, get structured summaries, key arguments, and auto-generated flashcards."
  },
  {
    icon: "🧠",
    title: "Voice Fingerprint",
    description: "Upload your past essays. Our AI learns YOUR writing style and matches it perfectly."
  },
  {
    icon: "🌍",
    title: "Multi-Language",
    description: "Support for 10+ languages with academic register preservation."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-zinc-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Everything You Need to Write Better
          </h2>
          <p className="text-lg text-zinc-600">
            One platform. No more juggling between 6 different tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl border border-zinc-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
