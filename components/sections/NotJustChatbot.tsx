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
    <section className="border-b border-ink bg-ink py-24 text-white">
      <div className="container-content">
        <p className="mb-3 text-[13px] font-medium text-brass-light">The difference</p>
        <h2 className="text-[1.9rem] leading-[1.2] text-white md:text-[2.25rem]">Not just a chatbot.</h2>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-paper/60">
          Most chatbots answer questions. Elliot completes work.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-8">
            <p className="text-[13px] font-medium text-white/50">Chatbot</p>
            <p className="mt-4 font-display text-2xl text-paper/80">Answers questions.</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/50">
              A single turn: input, reply. Nothing is retrieved, decided, or
              carried out on your systems.
            </p>
          </div>

          <div className="rounded-lg border border-white/20 bg-white/[0.04] p-8">
            <p className="text-[13px] font-medium text-brass-light">Elliot</p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {elliotSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="cursor-default rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[13px] font-medium text-paper transition-all duration-300">
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
              to acting on it in your calendar, CRM and dashboard, and knowing when to
              bring a person in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
