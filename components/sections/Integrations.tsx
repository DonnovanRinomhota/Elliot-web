import SectionHeading from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/Card";

const integrations = [
  { name: "Google Calendar", status: "available" },
  { name: "Gmail", status: "soon" },
  { name: "Microsoft Outlook", status: "soon" },
  { name: "HubSpot", status: "soon" },
  { name: "Salesforce", status: "soon" },
  { name: "Slack", status: "soon" },
  { name: "WhatsApp", status: "soon" },
];

export default function Integrations() {
  return (
    <section className="border-b border-surface-line bg-surface-dim py-24">
      <div className="container-content">
        <SectionHeading
          eyebrow="Integrations"
          title="Fits into the tools you already use."
          description="Elliot connects to your calendar and business systems. More integrations are on the way."
        />

        <div className="reveal mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {integrations.map((i) => (
            <div
              key={i.name}
              className={`hover-lift flex items-center justify-between rounded-md border border-surface-line bg-card px-4 py-3.5 shadow-card ${
                i.status === "available"
                  ? "hover:border-pulse/40 hover:shadow-glow"
                  : "hover:border-violet/25 hover:shadow-card"
              }`}
            >
              <span className="text-[14px] text-fg">{i.name}</span>
              {i.status === "available" ? (
                <Badge tone="pulse">Available</Badge>
              ) : (
                <Badge tone="neutral">Coming soon</Badge>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
