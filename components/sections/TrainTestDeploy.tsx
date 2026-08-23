import SectionHeading from "@/components/sections/SectionHeading";

const stages = [
  {
    title: "Train",
    detail: "Configure knowledge, instructions, personality, tools and permissions.",
  },
  {
    title: "Test",
    detail: "Run Elliot against realistic scenarios before it ever talks to a customer.",
  },
  {
    title: "Deploy",
    detail: "Publish Elliot to your website, and future channels as they roll out.",
  },
  {
    title: "Analyze",
    detail: "Review conversations, leads, appointments and resolution rates.",
  },
];

export default function TrainTestDeploy() {
  return (
    <section className="border-b border-surface-line bg-surface py-24">
      <div className="container-content">
        <SectionHeading
          eyebrow="The lifecycle"
          title="Train. Test. Deploy. Analyze."
          description="Elliot isn't switched on blind — every configuration is tested against realistic scenarios first."
        />

        <div className="reveal mt-14 grid gap-4 md:grid-cols-4">
          {stages.map((s, i) => (
            <div
              key={s.title}
              className="hover-lift glow-ring rounded-lg border border-surface-line bg-card p-6 shadow-card hover:shadow-glow"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet to-sky font-mono text-xs text-white">
                {`0${i + 1}`}
              </span>
              <h3 className="mt-4 font-display text-xl text-fg">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{s.detail}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-6 rounded-lg border border-ink bg-ink p-6 font-mono text-[12.5px] text-paper/80 shadow-glowLg">
          <p className="text-paper/40">test scenario</p>
          <p className="mt-2">customer_message: &quot;Can I reschedule my viewing to Friday?&quot;</p>
          <p className="mt-1 text-violet">tool_used: calendar.check_availability</p>
          <p className="mt-1 text-violet">knowledge_retrieved: booking_policy.md</p>
          <p className="mt-1 text-pulse">action_taken: appointment.reschedule(id: 4821, to: &quot;Fri 14:00&quot;)</p>
          <p className="mt-1">elliot_response: &quot;Done — you&apos;re confirmed for Friday at 2:00 PM.&quot;</p>
        </div>
      </div>
    </section>
  );
}
