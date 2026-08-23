import SectionHeading from "@/components/sections/SectionHeading";

const points = [
  { title: "Tenant isolation", detail: "Every business's data is kept separate at the database layer." },
  { title: "Row-Level Security", detail: "Database-enforced access rules, not just application logic." },
  { title: "Audit logging", detail: "Every action Elliot takes is recorded and reviewable." },
  { title: "Approval gates", detail: "Sensitive actions wait for human sign-off before they happen." },
  { title: "Human escalation", detail: "Elliot hands off complex or high-stakes situations by design." },
];

export default function Security() {
  return (
    <section className="border-b border-surface-line bg-surface py-24">
      <div className="container-content">
        <SectionHeading
          eyebrow="Security & trust"
          title="Built with tenant isolation from day one."
          description="Elliot is architected so one business's data and configuration never touches another's."
        />

        <div className="reveal mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="glow-ring hover-lift rounded-lg border border-surface-line bg-card p-6 shadow-card hover:shadow-glow"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-violet to-sky text-white">
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
