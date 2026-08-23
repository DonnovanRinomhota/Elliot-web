import Hero from "@/components/sections/Hero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import NotJustChatbot from "@/components/sections/NotJustChatbot";
import RealEstateDemo from "@/components/sections/RealEstateDemo";
import HowItWorks from "@/components/sections/HowItWorks";
import DashboardMockup from "@/components/sections/DashboardMockup";
import PerformanceMetrics from "@/components/sections/PerformanceMetrics";
import HumanHandoff from "@/components/sections/HumanHandoff";
import Permissions from "@/components/sections/Permissions";
import Integrations from "@/components/sections/Integrations";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <NotJustChatbot />
      <RealEstateDemo />
      <HowItWorks />
      <DashboardMockup />
      <PerformanceMetrics />
      <HumanHandoff />
      <Permissions />
      <Integrations />
      <FinalCTA />
    </>
  );
}
