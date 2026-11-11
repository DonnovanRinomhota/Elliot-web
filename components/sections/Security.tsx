import SectionHeading from "@/components/sections/SectionHeading";

const points = [
  { title: "Your data, kept apart", detail: "Each agency's data is separated from every other agency's by the database itself, not just by the app." },
  { title: "Clients know it's an AI", detail: "Elliot says it's an AI assistant from the first message and passes clients to a person whenever they ask." },
  { title: "Files stay private", detail: "Documents clients email, like ID scans or payslips, are stored privately and only your team can open them." },
  { title: "Everything on record", detail: "Every message, booking and hand-over is saved, so you can check what Elliot said and did." },
  { title: "You see every visit", detail: "If the Elliot team opens your dashboard to help, you see when and what they looked at." },
  { title: "GDPR", detail: "A data processing agreement with every agency, and data handled under the GDPR." },
];

export default function Security() {
  return (
    <section className="border-b border-surface-line bg-surface py-24">
      <div className="container-content">
        <SectionHeading
          eyebrow="Data and trust"
          title="Your clients' details, handled carefully."
          description="Agencies hold sensitive information. Elliot is built so it stays yours."
        />

        <div className="reveal mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-lg border border-surface-line bg-card p-6"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-ink text-white">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M8 1.5L13.5 3.75V7.25C13.5 10.75 11.25 13.25 8 14.5C4.75 13.25 2.5 10.75 2.5 7.25V3.75L8 1.5Z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="mt-4 font-display text-lg text-fg">{p.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
