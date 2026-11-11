import SectionHeading from "@/components/sections/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Connect",
    detail: "Your website chat, WhatsApp number, email inbox, your agents' calendars and, if you use it, ASARI.",
  },
  {
    n: "02",
    title: "Teach",
    detail: "Your listings, fees, areas and the questions clients ask most.",
  },
  {
    n: "03",
    title: "Set the rules",
    detail: "What Elliot does on its own, what waits for approval, who gets which leads and when to hand over.",
  },
  {
    n: "04",
    title: "Go live",
    detail: "After you've tried it yourself, Elliot starts answering your clients.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-b border-surface-line bg-surface py-24">
      <div className="container-content reveal">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps, done with you."
          description="Elliot works 24/7 once deployed — no shifts, no onboarding delays."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="group relative rounded-lg p-2 -m-2">
              <p className="inline-block font-mono text-sm font-semibold text-brass-dark dark:text-brass-light">
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
