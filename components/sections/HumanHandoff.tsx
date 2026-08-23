import SectionHeading from "@/components/sections/SectionHeading";
import { Card } from "@/components/ui/Card";

export default function HumanHandoff() {
  return (
    <section className="border-b border-surface-line bg-surface-dim py-24">
      <div className="container-content reveal grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Trust"
            title="Elliot knows when to step aside."
            description="Simple questions get resolved instantly. Anything complex, sensitive or high-value goes to a person — with full context attached."
          />
          <div className="mt-8 flex flex-col gap-3 max-w-sm">
            <div className="flex items-center gap-3 rounded-md border border-surface-line bg-card px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-pulse/40 hover:shadow-card">
              <span className="h-2 w-2 rounded-full bg-pulse animate-pulseDot" />
              <span className="text-sm text-fg">Simple question → Elliot resolves</span>
            </div>
            <div className="flex items-center gap-3 rounded-md border border-surface-line bg-card px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber/40 hover:shadow-card">
              <span className="h-2 w-2 rounded-full bg-amber" />
              <span className="text-sm text-fg">Complex situation → Elliot escalates</span>
            </div>
          </div>
        </div>

        <Card className="p-6">
          <p className="text-xs font-mono uppercase tracking-wide text-slate-400">Escalation handoff</p>
          <div className="mt-4 space-y-4">
            {[
              ["Conversation history", "Full transcript included"],
              ["Customer information", "Anna K. · Warsaw · returning visitor"],
              ["Reason for escalation", "Requested custom contract terms"],
              ["Actions already taken", "Lead qualified, HOT scored, viewing booked"],
            ].map(([label, val]) => (
              <div
                key={label}
                className="-mx-2 rounded-md px-2 py-1 transition-colors duration-200 hover:bg-violet-100/40"
              >
                <p className="text-[13px] font-medium text-slate-500">{label}</p>
                <p className="text-[14px] text-fg">{val}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
