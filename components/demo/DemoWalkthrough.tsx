"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Card";

interface Step {
  message: { role: "user" | "elliot"; text: string };
  event: { time: string; label: string; detail?: string };
}

const steps: Step[] = [
  {
    message: { role: "user", text: "I'm looking for a 2-bedroom apartment in Warsaw under €250,000." },
    event: { time: "1", label: "Intent detected", detail: "PROPERTY SEARCH" },
  },
  {
    message: { role: "elliot", text: "I can help with that. Are you looking to move within the next month, or further out?" },
    event: { time: "2", label: "Qualifying question sent" },
  },
  {
    message: { role: "user", text: "Within a month, ideally." },
    event: { time: "3", label: "Requirements collected", detail: "2 bed · Warsaw · €250k · <1mo" },
  },
  {
    message: { role: "elliot", text: "Got it. I found 3 matching listings, and I've marked you as a priority lead. I can offer a viewing this Thursday at 5:00 PM — would that work?" },
    event: { time: "4", label: "3 properties matched · Lead scored HOT" },
  },
  {
    message: { role: "user", text: "Thursday at 5 works." },
    event: { time: "5", label: "Viewing booked", detail: "Thu 17:00" },
  },
  {
    message: { role: "elliot", text: "Confirmed for Thursday at 5:00 PM. I've updated your file and notified the agent — you'll get a reminder the day before." },
    event: { time: "6", label: "CRM updated · Agent notified" },
  },
];

export default function DemoWalkthrough() {
  const [step, setStep] = useState(0);
  const visible = steps.slice(0, step + 1);
  const isDone = step >= steps.length - 1;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="glow-ring flex h-[460px] flex-col rounded-lg border border-surface-line bg-card shadow-cardHover transition-shadow duration-500 hover:shadow-glowLg">
        <div className="flex items-center gap-2.5 border-b border-surface-line px-5 py-4">
          <span className="presence-dot" />
          <div>
            <p className="text-sm font-medium text-fg">Elliot · real estate</p>
            <p className="text-xs text-slate-400">Demo conversation</p>
          </div>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
          {visible.map((s, i) => (
            <div key={i} className={`flex ${s.message.role === "elliot" ? "justify-start" : "justify-end"}`}>
              <div
                className={`max-w-[85%] rounded-lg px-4 py-2.5 text-[14px] leading-relaxed animate-fadeUp ${
                  s.message.role === "elliot"
                    ? "border border-surface-line bg-surface text-fg"
                    : "bg-ink text-paper"
                }`}
              >
                {s.message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-surface-line p-4">
          <Button
            className="w-full"
            onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
            disabled={isDone}
          >
            {isDone ? "Scenario complete" : "Continue conversation →"}
          </Button>
        </div>
      </div>

      <div className="rounded-lg border border-ink bg-ink p-6 font-mono text-[12.5px] shadow-glowLg">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-paper/80">elliot · activity</span>
          <Badge tone="neutral">Live as you click</Badge>
        </div>
        <ol className="mt-3 space-y-3">
          {visible.map((s, i) => (
            <li key={i} className="flex gap-3 animate-fadeUp">
              <span className="w-5 shrink-0 text-white/35">{s.event.time}</span>
              <div>
                <p className="text-paper/90">{s.event.label}</p>
                {s.event.detail && <p className="mt-0.5 text-violet">{s.event.detail}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
