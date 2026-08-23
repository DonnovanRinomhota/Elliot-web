import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <PageHero
      eyebrow="Legal"
      title="Privacy Policy"
      description="Placeholder — replace with your finalized privacy policy before launch."
    />
  );
}
