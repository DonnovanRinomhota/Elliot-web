import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <PageHero
      eyebrow="Legal"
      title="Terms of Service"
      description="Placeholder — replace with your finalized terms of service before launch."
    />
  );
}
