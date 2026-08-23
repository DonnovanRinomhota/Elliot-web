import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import NotJustChatbot from "@/components/sections/NotJustChatbot";
import HumanHandoff from "@/components/sections/HumanHandoff";
import Permissions from "@/components/sections/Permissions";
import Integrations from "@/components/sections/Integrations";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Elliot is an AI employee platform — understanding, reasoning, retrieving knowledge, using tools, taking action and knowing when to escalate to a human.",
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="An AI employee, not a script."
        description="Elliot is built around a full reasoning loop — understanding what's being asked, retrieving the right knowledge, using tools, taking action, and knowing when to bring in a person."
      />
      <FeatureGrid />
      <NotJustChatbot />
      <HumanHandoff />
      <Permissions />
      <Integrations />
      <FinalCTA />
    </>
  );
}
