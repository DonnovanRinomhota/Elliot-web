"use client";

import { HOME } from "@/lib/content/home";
import { IconTile } from "@/components/home/HomeIcon";
import { ElliotMark } from "@/components/ElliotLogoArt";

// "Fits into how you already work", drawn: the tools, connected, around Elliot.
// It moves: the list slides in, messages flow along the lines into Elliot,
// the rings turn slowly, the tools bob and Elliot's orb pulses. Everything
// stops for visitors who ask their system for less motion.
export default function ToolsGraphic({ t }: { t: (typeof HOME)["en"]["tools"] }) {
  const n = t.items.length;
  return (
    <div className="panel mt-14 grid overflow-hidden rounded-[28px] lg:grid-cols-[1fr_1.05fr]">
      <ul className="grid content-start gap-2.5 p-5 sm:grid-cols-2 sm:p-8 lg:grid-cols-1">
        {t.items.map((tool, i) => (
          <li key={tool.name} style={{ transitionDelay: `${i * 70}ms` }} className="reveal flex items-center gap-3 ok-row rounded-2xl border border-[#4ade80]/20 bg-[#4ade80]/[0.03] px-3 py-2.5">
            <IconTile name={tool.icon} size="sm" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[14.5px] font-medium text-fg">{tool.name}</span>
              <span className="block truncate text-[12.5px] text-slate-600">{tool.text}</span>
            </span>
            <span className="hidden shrink-0 items-center gap-1 rounded-full ok-pill border border-[#4ade80]/30 bg-[#4ade80]/10 px-2 py-1 text-[11.5px] font-medium text-[#6ee7a0] sm:inline-flex">
              <span className="tools-dot h-1.5 w-1.5 rounded-full bg-[#4ade80]" style={{ animationDelay: `${i * 0.3}s` }} />
              {t.connected}
            </span>
          </li>
        ))}
      </ul>

      <div aria-hidden="true" className="relative hidden min-h-[460px] items-center justify-center border-l border-fg/[0.06] bg-[radial-gradient(circle_at_center,rgba(47,107,255,0.14),transparent_60%)] lg:flex">
        <div className="relative h-[400px] w-[400px]">
          {[400, 290, 180].map((d, i) => (
            <div
              key={d}
              className={`absolute left-1/2 top-1/2 rounded-full border border-fg/[0.09] ${i === 0 ? "tools-spin border-dashed" : i === 1 ? "tools-spin-back" : ""}`}
              style={{ width: d, height: d, marginLeft: -d / 2, marginTop: -d / 2 }}
            >
              {i < 2 && <span className="absolute -top-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#d9a56c] shadow-[0_0_10px_#d9a56c]" />}
            </div>
          ))}
          {/* Rings of light leaving Elliot */}
          {[0, 1.6].map((delay) => (
            <div
              key={delay}
              className="tools-pulse absolute left-1/2 top-1/2 h-[120px] w-[120px] -ml-[60px] -mt-[60px] rounded-full border border-[#6e9bff]/50"
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
          <svg viewBox="0 0 400 400" className="absolute inset-0">
            {t.items.map((tool, i) => {
              const a = (i / n) * Math.PI * 2 - Math.PI / 2;
              const r = i % 2 === 0 ? 172 : 118;
              return (
                <line
                  key={tool.name}
                  className="tools-flow"
                  style={{ animationDelay: `${i * -0.25}s` }}
                  x1={200 + Math.cos(a) * r}
                  y1={200 + Math.sin(a) * r}
                  x2="200"
                  y2="200"
                  stroke="url(#tools-line)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeDasharray="4 12"
                />
              );
            })}
            <defs>
              <linearGradient id="tools-line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#d9a56c" stopOpacity="0.7" />
                <stop offset="1" stopColor="#6e9bff" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
          {t.items.map((tool, i) => {
            const a = (i / n) * Math.PI * 2 - Math.PI / 2;
            const r = i % 2 === 0 ? 172 : 118;
            return (
              <div key={tool.name} className="absolute" style={{ left: 200 + Math.cos(a) * r - 22, top: 200 + Math.sin(a) * r - 22 }}>
                <div className="tools-bob" style={{ animationDelay: `${i * -0.7}s` }}>
                  <IconTile name={tool.icon} />
                </div>
              </div>
            );
          })}
          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#3a5f9e_0%,#0e2247_55%,#060f22_100%)] tools-glow ring-1 ring-white/25">
            <ElliotMark size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

