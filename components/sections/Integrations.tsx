import SectionHeading from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/Card";

const integrations = [
  { name: "Google Calendar", status: "available" },
  { name: "Gmail", status: "available" },
  { name: "Website chat", status: "available" },
  { name: "Any CRM (webhook, Zapier, Make)", status: "available" },
  { name: "WhatsApp Business", status: "testing" },
  { name: "Microsoft Outlook", status: "planned" },
] as const;

const label = { available: "Available", testing: "In testing", planned: "Planned" };
const tone = { available: "pulse", testing: "amber", planned: "neutral" } as const;

export default function Integrations() {
  return (
    <section className="border-b border-surface-line bg-surface-dim py-24">
      <div className="container-content">
        <SectionHeading
          eyebrow="Integrations"
          title="Fits into the tools you already use."
          description="Elliot connects to your calendar, email and CRM. Here is exactly where each one stands."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((i) => (
            <div
              key={i.name}
              className="flex items-center justify-between gap-3 rounded-md border border-surface-line bg-card px-4 py-3.5"
            >
              <span className="text-[14px] text-fg">{i.name}</span>
              <Badge tone={tone[i.status]}>{label[i.status]}</Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
