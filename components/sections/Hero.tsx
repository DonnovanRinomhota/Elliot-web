"use client";

import { ButtonLink, Button } from "@/components/ui/Button";
import { StatusPill } from "@/components/ui/Card";
import { useElliotChat } from "@/components/chat/ElliotChatProvider";

const steps = [
  { label: "Customer asks a question", detail: "\u201cDo you have 2-bed apartments under \u20ac250k?\u201d" },
  { label: "Elliot understands intent", detail: "Property search · Warsaw · budget qualified" },
  { label: "Elliot retrieves information", detail: "3 matching listings found" },
  { label: "Elliot takes action", detail: "Viewing offered for Thursday, 5:00 PM" },
  { label: "Business system updated", detail: "Lead scored HOT · CRM updated · agent notified" },
];

export default function Hero() {
  const { openChat } = useElliotChat();

  return (
    <section className="relative overflow-hidden border-b border-surface-line bg-surface pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Decorative mesh gradient backdrop */}
      <div
        aria-hidden="true"
        className="mesh-bg pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 animate-blobFloat opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-coral/20 blur-[90px] animate-blobFloat [animation-delay:2s]"
      />

      <div className="container-content relative grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="animate-fadeUp">
          <StatusPill label="Elliot is online" />
          <h1 className="mt-6 font-display text-[2.75rem] leading-[1.05] tracking-tight text-fg md:text-[3.75rem]">
            Meet your <span className="text-gradient italic">AI employee.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600 md:text-lg">
            Elliot handles customer conversations, qualifies leads, books
            appointments, follows up with prospects and automates repetitive
            business operations — 24/7.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" onClick={openChat}>
              Talk to Elliot
            </Button>
            <ButtonLink href="/how-it-works" variant="secondary" size="lg">
              See How It Works
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <span className="font-mono">Trusted for:</span>
            {["Real estate", "Recruitment", "Professional services", "Healthcare"].map((t) => (
              <span key={t} className="font-medium text-slate-500">{t}</span>
            ))}
          </div>
        </div>

        <div className="relative animate-fadeUp [animation-delay:150ms]">
          <div className="glow-ring rounded-xl">
            <div className="rounded-xl border border-surface-line bg-card/90 p-5 shadow-cardHover backdrop-blur-sm transition-shadow duration-500 hover:shadow-glowLg md:p-6">
              <div className="flex items-center justify-between border-b border-surface-line pb-4">
                <div className="flex items-center gap-2">
                  <span className="presence-dot" />
                  <span className="text-sm font-medium text-fg">Elliot · live workflow</span>
                </div>
                <span className="font-mono text-xs text-slate-400">real estate</span>
              </div>

              <ol className="mt-5 space-y-0">
                {steps.map((s, i) => (
                  <li
                    key={s.label}
                    className="group relative -mx-2 rounded-md px-2 pl-8 pb-6 pt-1 transition-colors duration-300 last:pb-1 hover:bg-violet-100/40"
                  >
                    {i < steps.length - 1 && (
                      <span className="absolute left-[9px] top-6 h-full w-px bg-surface-line" />
                    )}
                    <span
                      className={`absolute left-2 top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full text-[10px] font-mono transition-transform duration-300 group-hover:scale-110 ${
                        i === steps.length - 1
                          ? "bg-pulse text-white"
                          : "bg-gradient-to-br from-violet to-sky text-white"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <p className="text-[14px] font-medium text-fg">{s.label}</p>
                    <p className="mt-0.5 font-mono text-[12.5px] text-slate-500">{s.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-slate-400">
            Illustrative workflow · demo data
          </p>
        </div>
      </div>
    </section>
  );
}
