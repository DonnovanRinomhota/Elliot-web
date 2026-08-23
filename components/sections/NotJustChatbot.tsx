import SectionHeading from "@/components/sections/SectionHeading";

const elliotSteps = [
  "Understands",
  "Reasons",
  "Retrieves knowledge",
  "Uses tools",
  "Takes action",
  "Updates systems",
  "Follows up",
  "Escalates when necessary",
];

export default function NotJustChatbot() {
  return (
    <section className="relative overflow-hidden border-b border-ink bg-ink py-24 text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-violet/25 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sky/20 blur-[110px]"
      />

      <div className="container-content reveal relative">
        <SectionHeading
          eyebrow="The difference"
          title={<span className="text-paper">Not just a chatbot.</span>}
          description=""
        />
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-paper/60">
          Most chatbots answer questions. Elliot completes work.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="hover-lift rounded-lg border border-white/10 bg-white/[0.03] p-8 hover:border-white/20 hover:bg-white/[0.05]">
            <p className="eyebrow text-white/40">Chatbot</p>
            <p className="mt-4 font-display text-2xl text-paper/80">Answers questions.</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/50">
              A single turn: input, reply. Nothing is retrieved, decided, or
              carried out on your systems.
            </p>
          </div>

          <div className="glow-ring hover-lift rounded-lg border border-violet/30 bg-gradient-to-br from-violet/[0.1] to-sky/[0.06] p-8">
            <p className="eyebrow text-violet-400">Elliot</p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {elliotSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="cursor-default rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[13px] font-medium text-paper transition-all duration-300 hover:scale-105 hover:border-violet/50 hover:bg-gradient-to-r hover:from-violet hover:to-sky">
                    {step}
                  </span>
                  {i < elliotSteps.length - 1 && (
                    <span className="text-white/25">→</span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-paper/60">
              A full loop, every time — from understanding what&apos;s being asked
              to acting on it in your business systems and knowing when to
              bring a person in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
