import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import HowItWorks from "@/components/sections/HowItWorks";
import TrainTestDeploy from "@/components/sections/TrainTestDeploy";
import DashboardMockup from "@/components/sections/DashboardMockup";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Connect, teach, configure and deploy Elliot — then train, test, deploy and analyze on an ongoing basis.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From job description to working AI employee."
        description="Setting Elliot up looks less like installing software and more like onboarding a new hire — except Elliot is ready to work in days, not weeks."
      />
      <HowItWorks />
      <TrainTestDeploy />
      <DashboardMockup />
      <FinalCTA />
    </>
  );
}
