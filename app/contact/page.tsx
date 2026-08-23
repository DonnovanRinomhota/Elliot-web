import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import DemoRequestForm from "@/components/DemoRequestForm";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "Tell us about your business and book time to see Elliot configured for your use case.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a demo."
        description="Tell us a little about your business and we'll show you what Elliot could handle for you."
      />
      <section className="border-b border-surface-line bg-surface pb-24">
        <div className="container-content max-w-2xl">
          <DemoRequestForm />
        </div>
      </section>
    </>
  );
}
