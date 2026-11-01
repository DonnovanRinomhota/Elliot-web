import SectionHeading from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/Card";

const columns = [
  {
    title: "Elliot does this by itself",
    tag: "Allowed",
    tone: "pulse" as const,
    items: ["Answer questions", "Capture and score leads", "Book and cancel viewings", "Send records to your CRM"],
  },
  {
    title: "Waits for your approval",
    tag: "Approval",
    tone: "amber" as const,
    items: ["Follow-up emails (unless you allow them)", "Replies to sensitive emails"],
  },
  {
    title: "Handed to your team",
    tag: "Handover",
    tone: "neutral" as const,
    items: ["Requests to speak to a person", "Questions outside its rules", "Hot leads ready to talk"],
  },
];

export default function Permissions() {
  return (
    <section className="border-b border-surface-line bg-surface py-24">
      <div className="container-content">
        <SectionHeading
          eyebrow="Control"
          title="You decide what Elliot can do."
          description="Each capability is switched on per agency. Anything sensitive waits for your approval first."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title} className="rounded-lg border border-surface-line bg-card p-6">
              <p className="text-sm font-semibold text-fg">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-center justify-between gap-3 text-[14.5px] text-slate-700">
                    <span>{item}</span>
                    <Badge tone={col.tone}>{col.tag}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
