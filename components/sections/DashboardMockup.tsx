import SectionHeading from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/Card";

const nav = [
  "Dashboard",
  "Conversations",
  "Leads",
  "Appointments",
  "Knowledge",
  "Automations",
  "Integrations",
  "Analytics",
  "Settings",
];

const metrics = [
  { label: "Conversations", value: "1,284" },
  { label: "New leads", value: "187" },
  { label: "Qualified leads", value: "73" },
  { label: "Appointments", value: "41" },
];

export default function DashboardMockup() {
  return (
    <section className="border-b border-surface-line bg-surface-dim py-24">
      <div className="container-content reveal">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Control center"
            title="Everything Elliot does, in one place."
            description="Your team stays in full view of every conversation, lead and appointment Elliot handles."
          />
          <Badge tone="sky">Example data</Badge>
        </div>

        <div className="hover-lift mt-14 overflow-hidden rounded-xl border border-surface-line bg-card shadow-cardHover hover:border-violet/20 hover:shadow-glowLg">
          <div className="flex">
            <aside className="hidden w-52 shrink-0 border-r border-surface-line bg-surface p-4 sm:block">
              <p className="px-2 text-xs font-mono uppercase tracking-wide text-slate-400">Elliot</p>
              <nav className="mt-4 flex flex-col gap-1">
                {nav.map((item, i) => (
                  <span
                    key={item}
                    className={`cursor-default rounded-md px-2.5 py-2 text-[13.5px] transition-colors duration-200 ${
                      i === 0
                        ? "bg-gradient-to-r from-violet to-sky text-white shadow-sm"
                        : "text-slate-600 hover:bg-violet-100/60 hover:text-violet-700"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </nav>
            </aside>

            <div className="flex-1 p-6 md:p-8">
              <div className="flex items-center justify-between">
                <p className="font-display text-lg text-fg">Dashboard</p>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-surface-line px-2.5 py-1 text-xs font-mono text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-pulse animate-pulseDot" />
                  Elliot active
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="group rounded-lg border border-surface-line p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/30 hover:shadow-glow"
                  >
                    <p className="font-display text-2xl text-fg transition-colors duration-300 group-hover:text-violet-700">
                      {m.value}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg border border-surface-line p-4">
                <p className="text-xs font-mono uppercase tracking-wide text-slate-400">
                  Recent conversations
                </p>
                <div className="mt-3 space-y-2.5">
                  {[
                    ["Anna K.", "2-bed apartment enquiry", "HOT"],
                    ["Marek W.", "Rescheduled viewing", "WARM"],
                    ["Prospect #4021", "Pricing question", "COLD"],
                  ].map(([name, note, score]) => (
                    <div
                      key={name}
                      className="flex items-center justify-between rounded-md px-2 py-2.5 -mx-2 border-b border-surface-line transition-colors duration-200 last:border-0 hover:bg-surface-dim"
                    >
                      <div>
                        <p className="text-[13.5px] font-medium text-fg">{name}</p>
                        <p className="text-xs text-slate-500">{note}</p>
                      </div>
                      <Badge tone={score === "HOT" ? "coral" : score === "WARM" ? "amber" : "neutral"}>
                        {score}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-slate-400">
          Illustrative product mockup · example / demo data
        </p>
      </div>
    </section>
  );
}
