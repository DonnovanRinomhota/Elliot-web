import SectionHeading from "@/components/sections/SectionHeading";
import { Card } from "@/components/ui/Card";
import {
  IconSupport,
  IconTarget,
  IconCalendar,
  IconMail,
  IconFollowup,
  IconKnowledge,
  IconAutomation,
  IconHandoff,
  IconDatabase,
  IconAnalytics,
} from "@/components/ui/Icons";

const accents = [
  "from-violet to-sky",
  "from-coral to-amber",
  "from-sky to-pulse",
  "from-violet to-coral",
];

const features = [
  { title: "Customer support", detail: "Answers customer questions using your company knowledge.", Icon: IconSupport },
  { title: "Lead qualification", detail: "Captures information, qualifies prospects and scores leads.", Icon: IconTarget },
  { title: "Appointments", detail: "Books, reschedules and cancels appointments.", Icon: IconCalendar },
  { title: "Email", detail: "Reads, categorizes and responds to business emails.", Icon: IconMail },
  { title: "Follow-ups", badge: "Coming soon", detail: "Automatically follows up with prospects over time.", Icon: IconFollowup },
  { title: "Knowledge", detail: "Retrieves information from company documents and sources.", Icon: IconKnowledge },
  { title: "Business automation", badge: "Coming soon", detail: "Performs repetitive administrative tasks in the background.", Icon: IconAutomation },
  { title: "Human handoff", detail: "Knows when a human needs to take over, and hands off cleanly.", Icon: IconHandoff },
  { title: "CRM", badge: "Coming soon", detail: "Creates and updates business records automatically.", Icon: IconDatabase },
  { title: "Analytics", badge: "Coming soon", detail: "Shows what Elliot accomplished and its business impact.", Icon: IconAnalytics },
];

export default function FeatureGrid() {
  return (
    <section className="border-b border-surface-line bg-surface py-24">
      <div className="container-content reveal">
        <SectionHeading
          eyebrow="Capabilities"
          title="One AI employee. Multiple responsibilities."
          description="Elliot is configured for the work your business actually needs done — not a fixed script."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Card key={f.title} className="group p-6">
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-md bg-gradient-to-br ${accents[i % accents.length]} text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <f.Icon className="h-5 w-5" />
                </div>
                {f.badge && (
                  <span className="shrink-0 rounded-full bg-amber-soft px-2.5 py-1 text-[11px] font-medium text-amber-700 dark:bg-amber/15 dark:text-amber">
                    {f.badge}
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-display text-lg text-fg transition-colors duration-300 group-hover:text-violet-700">
                {f.title}
              </h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-slate-600">{f.detail}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
