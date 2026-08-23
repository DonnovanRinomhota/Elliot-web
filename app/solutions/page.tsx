import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Outcomes from "@/components/sections/Outcomes";
import Permissions from "@/components/sections/Permissions";
import Security from "@/components/sections/Security";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "See the business outcomes Elliot delivers, how permissions keep your business in control, and how tenant isolation keeps your data secure.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Built for the outcomes that matter to your business."
        description="Elliot is configured around what your business needs handled — customer response time, lead capture, appointment volume, and consistent follow-up."
      />
      <Outcomes />
      <Permissions />
      <Security />
      <FinalCTA />
    </>
  );
}
