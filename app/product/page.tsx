import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import NotJustChatbot from "@/components/sections/NotJustChatbot";
import HumanHandoff from "@/components/sections/HumanHandoff";
import Permissions from "@/components/sections/Permissions";
import Integrations from "@/components/sections/Integrations";
import Security from "@/components/sections/Security";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Elliot answers estate agencies' enquiries on the website, WhatsApp and email, qualifies buyers, renters and sellers, and books viewings and valuations with your agents.",
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="Your agency's front office, always on."
        description="Elliot answers buyers, renters, sellers and landlords on your website, WhatsApp and email, books viewings and valuations with your agents, and brings in a person when it matters."
      />
      <FeatureGrid />
      <NotJustChatbot />
      <HumanHandoff />
      <Permissions />
      <Integrations />
      <Security />
      <FinalCTA />
    </>
  );
}
