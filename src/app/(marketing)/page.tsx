import { HeroSection } from "@/components/marketing/hero-section";
import { StatsBar } from "@/components/marketing/stats-bar";
import { FeaturesSection } from "@/components/marketing/features-section";
import { CTASection } from "@/components/marketing/cta-section";

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}
