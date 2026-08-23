import SectionHeading from "@/components/sections/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Card";
import ActivityTimeline from "@/components/product/ActivityTimeline";

const events = [
  { time: "19:43", label: "Customer contacted Elliot" },
  { time: "19:43", label: "Intent detected", detail: "PROPERTY SEARCH" },
  {
    time: "19:44",
    label: "Requirements collected",
    detail: "2 bedrooms · Warsaw · €250,000 max",
  },
  { time: "19:44", label: "Property database searched" },
  { time: "19:44", label: "3 properties matched" },
  { time: "19:45", label: "Viewing requested" },
  { time: "19:45", label: "Calendar checked" },
  { time: "19:45", label: "Viewing booked", detail: "HOT lead" },
  { time: "19:45", label: "CRM updated" },
  { time: "19:45", label: "Agent notified" },
];

export default function RealEstateDemo() {
  return (
    <section className="border-b border-surface-line bg-surface-dim py-24">
      <div className="container-content reveal">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Real estate"
            title="Your AI real estate employee."
            description="Real estate is Elliot's first fully built-out vertical — from first enquiry to booked viewing."
          />
          <Badge tone="coral">Demo data</Badge>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="hover-lift rounded-lg border border-surface-line bg-card p-6 shadow-card hover:border-violet/25 hover:shadow-glow">
            <p className="text-xs font-mono uppercase tracking-wide text-slate-400">Conversation</p>
            <div className="mt-4 space-y-3">
              <div className="ml-auto max-w-[85%] rounded-lg bg-ink px-4 py-2.5 text-[14px] text-paper">
                I&apos;m looking for a 2-bedroom apartment in Warsaw under €250,000.
              </div>
              <div className="max-w-[90%] rounded-lg border border-surface-line bg-gradient-to-br from-violet-100 to-sky-100 px-4 py-2.5 text-[14px] text-fg">
                I found 3 matching listings. Before I share them — are you
                looking to move in the next 1–3 months, or further out?
              </div>
              <div className="ml-auto max-w-[85%] rounded-lg bg-ink px-4 py-2.5 text-[14px] text-paper">
                Within a month, ideally.
              </div>
              <div className="max-w-[90%] rounded-lg border border-surface-line bg-gradient-to-br from-violet-100 to-sky-100 px-4 py-2.5 text-[14px] text-fg">
                Got it — I&apos;ve marked this as a priority lead. I can offer
                a viewing this Thursday at 5:00 PM for the closest match.
                Want me to book it?
              </div>
            </div>
          </div>

          <ActivityTimeline events={events} title="elliot · real-estate-agent" />
        </div>

        <div className="mt-10">
          <ButtonLink href="/industries/real-estate" variant="secondary">
            See the full real estate workflow
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
