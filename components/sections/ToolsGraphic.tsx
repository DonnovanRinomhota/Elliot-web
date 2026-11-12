"use client";

import { HOME } from "@/lib/content/home";
import { IconTile } from "@/components/home/HomeIcon";
import { ElliotMark } from "@/components/ElliotLogoArt";

function Check({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3.5 8.5 3 3 6-6.5" />
    </svg>
  );
}

// "Fits into how you already work", drawn: the tools, connected, around Elliot.
export default function ToolsGraphic({ t }: { t: (typeof HOME)["en"]["tools"] }) {
  const n = t.items.length;
  return (
    <div className="panel mt-14 grid overflow-hidden rounded-[28px] lg:grid-cols-[1fr_1.05fr]">
      <ul className="grid content-start gap-2.5 p-5 sm:grid-cols-2 sm:p-8 lg:grid-cols-1">
        {t.items.map((tool) => (
          <li key={tool.name} className="flex items-center gap-3 rounded-2xl border border-[#4ade80]/20 bg-[#4ade80]/[0.03] px-3 py-2.5">
            <IconTile name={tool.icon} size="sm" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[14.5px] font-medium text-white">{tool.name}</span>
              <span className="block truncate text-[12.5px] text-slate-600">{tool.text}</span>
            </span>
            <span className="hidden shrink-0 items-center gap-1 rounded-full border border-[#4ade80]/30 bg-[#4ade80]/10 px-2 py-1 text-[11.5px] font-medium text-[#6ee7a0] sm:inline-flex">
              <Check className="h-3 w-3" />
              {t.connected}
            </span>
          </li>
        ))}
      </ul>

      <div aria-hidden="true" className="relative hidden min-h-[460px] items-center justify-center border-l border-white/[0.06] bg-[radial-gradient(circle_at_center,rgba(47,107,255,0.14),transparent_60%)] lg:flex">
        <div className="relative h-[400px] w-[400px]">
          {[400, 290, 180].map((d) => (
            <div key={d} className="absolute left-1/2 top-1/2 rounded-full border border-white/[0.07]" style={{ width: d, height: d, marginLeft: -d / 2, marginTop: -d / 2 }} />
          ))}
          <svg viewBox="0 0 400 400" className="absolute inset-0">
            {t.items.map((tool, i) => {
              const a = (i / n) * Math.PI * 2 - Math.PI / 2;
              const r = i % 2 === 0 ? 172 : 118;
              return (
                <line
                  key={tool.name}
                  x1="200"
                  y1="200"
                  x2={200 + Math.cos(a) * r}
                  y2={200 + Math.sin(a) * r}
                  stroke="url(#tools-line)"
                  strokeWidth="1"
                  strokeDasharray="3 5"
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
                <IconTile name={tool.icon} />
              </div>
            );
          })}
          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#3a5f9e_0%,#0e2247_55%,#060f22_100%)] shadow-[0_0_50px_10px_rgba(70,130,255,0.35)] ring-1 ring-white/25">
            <ElliotMark size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

