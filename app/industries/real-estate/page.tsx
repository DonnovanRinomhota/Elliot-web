import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import RealEstateDemo from "@/components/sections/RealEstateDemo";
import ActivityTimeline from "@/components/product/ActivityTimeline";
import { ButtonLink } from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "AI Employee for Real Estate",
  description:
    "Elliot handles property enquiries, qualifies leads, books viewings and updates your CRM — for real estate businesses.",
};

const fullFlow = [
  { time: "1", label: "Understands requirements", detail: "2 bedrooms · Warsaw · €250,000 max" },
  { time: "2", label: "Asks qualifying questions", detail: "Move-in timeline, financing status" },
  { time: "3", label: "Retrieves matching properties", detail: "3 listings matched" },
  { time: "4", label: "Qualifies the lead" },
  { time: "5", label: "Scores the lead", detail: "HOT" },
  { time: "6", label: "Offers appointment times" },
  { time: "7", label: "Books viewing", detail: "Thu 17:00" },
  { time: "8", label: "Updates CRM", detail: "Coming soon" },
  { time: "9", label: "Notifies agent" },
  { time: "10", label: "Follows up", detail: "Coming soon" },
];

export default function RealEstatePage() {
  return (
    <>
      <PageHero
        eyebrow="Industries · Real Estate"
        title="Your AI real estate employee."
        description="From the first enquiry to a booked viewing, Elliot handles the repetitive work of matching buyers to properties — so agents spend their time closing, not answering the same questions."
      />

      <RealEstateDemo />

      <section className="border-b border-surface-line bg-surface py-24">
        <div className="container-content grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow mb-3">Full workflow</p>
            <h2 className="font-display text-2xl text-fg">Ten steps, one conversation.</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Every enquiry follows the same reliable path — understanding
              what a buyer needs, matching it against your listings,
              qualifying and scoring the lead, and booking the viewing
              without back-and-forth emails.
            </p>
            <div className="mt-8">
              <ButtonLink href="/demo" variant="primary">
                Try the interactive demo
              </ButtonLink>
            </div>
          </div>
          <ActivityTimeline events={fullFlow} title="real-estate-agent · full flow" />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
