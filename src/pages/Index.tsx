import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <MarketplaceSection />
      <HowItWorksSection />
      <SustainabilitySection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
