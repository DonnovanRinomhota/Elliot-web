import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import HowItWorks from "@/components/sections/HowItWorks";
import TrainTestDeploy from "@/components/sections/TrainTestDeploy";
import DashboardMockup from "@/components/sections/DashboardMockup";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Elliot is set up for an estate agency: connect your channels and calendars, teach it your listings, set the rules, and go live.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From first call to answering your clients."
        description="Setting Elliot up is closer to onboarding a new colleague than installing software. Donnovan does it with you, and Elliot is usually ready within days."
      />
      <HowItWorks />
      <TrainTestDeploy />
      <DashboardMockup />
      <FinalCTA />
    </>
  );
}
