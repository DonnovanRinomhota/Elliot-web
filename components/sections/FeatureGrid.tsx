import SectionHeading from "@/components/sections/SectionHeading";
import { Card } from "@/components/ui/Card";
import {
  IconSupport,
  IconTarget,
  IconCalendar,
  IconMail,
  IconFollowup,
  IconKnowledge,
  IconHandoff,
  IconDatabase,
  IconAnalytics,
} from "@/components/ui/Icons";

// Every item here is built and working. Things still in testing or not yet
// built are listed honestly on the homepage ("What Elliot does").
const features = [
  { title: "Customer questions", detail: "Answers questions from your own listings, fees and FAQs, and says so when it doesn't know.", Icon: IconSupport },
  { title: "Lead qualification", detail: "Asks the right questions and scores each lead hot, warm or cold.", Icon: IconTarget },
  { title: "Viewings", detail: "Books viewings into your agents' own Google Calendars, reminds clients the day before, and lets them confirm, move or cancel by message.", Icon: IconCalendar },
  { title: "Sellers and valuations", detail: "Takes valuation requests from people selling or letting, alerts an agent and books the valuation visit.", Icon: IconTarget },
  { title: "Email and WhatsApp", detail: "Answers enquiries in your inbox (Gmail, Outlook or any other) and on WhatsApp in seconds, and reads the PDFs and photos clients attach.", Icon: IconMail },
  { title: "Follow-ups", detail: "Follows up by email or WhatsApp with people who go quiet, within your approval rules.", Icon: IconFollowup },
  { title: "Listings and knowledge", detail: "Your listings from ASARI CRM or a spreadsheet, plus your fees and FAQs. Update them and Elliot uses the new version.", Icon: IconKnowledge },
  { title: "Human handover", detail: "Flags conversations for your team when a person should take over.", Icon: IconHandoff },
  { title: "CRM sync", detail: "Sends new leads and bookings to your CRM, directly or via Zapier or Make.", Icon: IconDatabase },
  { title: "Dashboard", detail: "Leads, bookings, conversations and approvals in one place.", Icon: IconAnalytics },
];

export default function FeatureGrid() {
  return (
    <section className="border-b border-surface-line bg-surface py-24">
      <div className="container-content">
        <SectionHeading
          eyebrow="Capabilities"
          title="One assistant, the whole enquiry."
          description="Elliot is set up around how your agency works, not a fixed script."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="p-6">
              <f.Icon className="h-5 w-5 text-brass-dark dark:text-brass-light" />
              <h3 className="mt-4 text-[17px] text-fg">{f.title}</h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-slate-600">{f.detail}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
