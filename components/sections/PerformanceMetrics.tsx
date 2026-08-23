import SectionHeading from "@/components/sections/SectionHeading";
import CountUp from "@/components/ui/CountUp";

const metrics = [
  { value: "1,284", label: "Conversations" },
  { value: "187", label: "Leads generated" },
  { value: "73", label: "Qualified leads" },
  { value: "41", label: "Appointments" },
  { value: "312", label: "Follow-ups" },
  { value: "87%", label: "AI resolution rate" },
  { value: "13%", label: "Human intervention" },
];

export default function PerformanceMetrics() {
  return (
    <section className="border-b border-surface-line bg-surface py-24">
      <div className="container-content reveal">
        <SectionHeading
          eyebrow="Transparency"
          title="See what your AI employee actually accomplished."
          description="Fictional demonstration numbers — every Elliot deployment reports on its own real activity."
        />

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-7">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="group border-l-2 border-surface-line pl-4 transition-colors duration-300 hover:border-l-violet"
            >
              <p className="font-display text-3xl text-fg transition-colors duration-300 group-hover:text-violet-700">
                <CountUp value={m.value} />
              </p>
              <p className="mt-1 text-[13px] leading-snug text-slate-500">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
