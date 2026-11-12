import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import DemoWalkthrough from "@/components/demo/DemoWalkthrough";
import LiveDemo from "@/components/demo/LiveDemo";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Live demo",
  description: "Chat with Elliot as a home buyer at a sample estate agency: listings, questions and a booked viewing.",
  alternates: { canonical: "/demo", languages: { en: "/demo", pl: "/pl/demo" } },
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Live demo"
        title="See Elliot in action."
        description="Play a client of a sample Warsaw agency. Ask about flats, compare options and book a viewing, just as your clients would."
      />

      <section className="section-light pb-24 pt-14">
        <div className="container-content">
          <LiveDemo locale="en" />

          <h2 className="mt-20 font-display text-2xl text-fg">Or click through a sample conversation</h2>
          <p className="mt-2 max-w-2xl text-[15px] text-slate-600">
            Elliot&apos;s replies on the left, what it does in the background on the right. All data is fictional.
          </p>
          <div className="mt-8">
            <DemoWalkthrough />
          </div>

          <div className="mt-14 panel rounded-[24px] p-8 text-center">
            <h2 className="font-display text-xl text-fg">Want to see this for your business?</h2>
            <p className="mx-auto mt-2 max-w-md text-[14.5px] text-slate-600">
              Book a free call and we&apos;ll show you Elliot set up with
              your own listings.
            </p>
            <div className="mt-6">
              <ButtonLink href="/book" variant="primary">
                Book a call
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
