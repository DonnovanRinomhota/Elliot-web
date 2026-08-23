import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import DemoWalkthrough from "@/components/demo/DemoWalkthrough";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Demo",
  description: "Try an interactive walkthrough of Elliot handling a real estate enquiry, from first message to booked viewing.",
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Demo"
        title="See Elliot handle a real enquiry."
        description="Click through a real estate scenario step by step — Elliot's response on the left, the system activity it triggers on the right. All data below is fictional."
      />

      <section className="border-b border-surface-line bg-surface pb-24">
        <div className="container-content">
          <DemoWalkthrough />

          <div className="mt-14 rounded-lg border border-surface-line bg-surface-dim p-8 text-center">
            <h2 className="font-display text-xl text-fg">Want to see this for your business?</h2>
            <p className="mx-auto mt-2 max-w-md text-[14.5px] text-slate-600">
              Book time with the team and we&apos;ll walk through what Elliot
              would handle for your specific enquiries.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact" variant="primary">
                Book a Demo
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
