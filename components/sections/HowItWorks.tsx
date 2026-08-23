import SectionHeading from "@/components/sections/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Connect",
    detail: "Connect Elliot to your business systems and communication channels.",
  },
  {
    n: "02",
    title: "Teach",
    detail: "Give Elliot your company knowledge, documents, policies and instructions.",
  },
  {
    n: "03",
    title: "Configure",
    detail: "Define what Elliot can do, what needs approval, and when it should escalate.",
  },
  {
    n: "04",
    title: "Deploy",
    detail: "Deploy Elliot to your website and supported business channels.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-b border-surface-line bg-surface py-24">
      <div className="container-content reveal">
        <SectionHeading
          eyebrow="How it works"
          title="From job description to working AI employee."
          description="Elliot works 24/7 once deployed — no shifts, no onboarding delays."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="hover-lift group relative rounded-lg p-2 -m-2">
              <p className="inline-block bg-gradient-to-r from-violet to-sky bg-clip-text font-mono text-sm font-semibold text-transparent">
                {s.n}
              </p>
              <h3 className="mt-3 font-display text-xl text-fg transition-colors duration-300 group-hover:text-violet-700">
                {s.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600">{s.detail}</p>
              {i < steps.length - 1 && (
                <span className="absolute -right-4 top-3 hidden text-slate-200 transition-transform duration-300 group-hover:translate-x-1 lg:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
