import SectionHeading from "@/components/sections/SectionHeading";

const outcomes = [
  "Respond to customers faster",
  "Capture more leads",
  "Reduce repetitive work",
  "Book more appointments",
  "Follow up consistently",
  "Give employees more time",
  "Operate 24/7",
];

export default function Outcomes() {
  return (
    <section className="border-b border-surface-line bg-surface-dim py-24">
      <div className="container-content">
        <SectionHeading
          eyebrow="Business outcomes"
          title="Work Elliot handles — not promises Elliot makes."
          description="We won't put a made-up ROI number in front of you. Here's the work Elliot actually takes off your team's plate."
        />

        <div className="reveal mt-12 flex flex-wrap gap-3">
          {outcomes.map((o, i) => (
            <span
              key={o}
              className="hover-lift rounded-full border border-surface-line bg-card px-4 py-2 text-[14px] text-fg shadow-card transition-colors duration-200 hover:border-transparent hover:bg-gradient-to-r hover:from-violet hover:to-sky hover:text-white hover:shadow-glow"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {o}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
