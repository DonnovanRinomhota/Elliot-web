import SectionHeading from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/Card";

const allowed = [
  "Answer questions",
  "Capture leads",
  "Book appointments",
  "Send follow-ups",
  "Update CRM",
];

const approvalRequired = ["Sensitive email replies", "Important customer changes"];

export default function Permissions() {
  return (
    <section className="border-b border-surface-line bg-surface py-24">
      <div className="container-content">
        <SectionHeading
          eyebrow="Control"
          title="Your business decides what Elliot can do."
          description="Every capability is opt-in. Anything sensitive routes through an approval gate before it happens."
        />

        <div className="reveal mt-14 grid gap-6 md:grid-cols-2">
          <div className="hover-lift rounded-lg border border-surface-line bg-card p-6 shadow-card hover:border-pulse/30 hover:shadow-glow">
            <p className="text-sm font-medium text-fg">Elliot can do this directly</p>
            <ul className="mt-4 space-y-3">
              {allowed.map((item) => (
                <li
                  key={item}
                  className="group flex items-center justify-between rounded-md px-2 py-1.5 text-[14.5px] text-slate-700 transition-colors duration-200 hover:bg-pulse-soft/60"
                >
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    {item}
                  </span>
                  <Badge tone="pulse">Enabled</Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="hover-lift rounded-lg border border-surface-line bg-card p-6 shadow-card hover:border-amber/30 hover:shadow-glow">
            <p className="text-sm font-medium text-fg">Requires approval</p>
            <ul className="mt-4 space-y-3">
              {approvalRequired.map((item) => (
                <li
                  key={item}
                  className="group flex items-center justify-between rounded-md px-2 py-1.5 text-[14.5px] text-slate-700 transition-colors duration-200 hover:bg-amber-soft/60"
                >
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    {item}
                  </span>
                  <Badge tone="amber">Approval gate</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
