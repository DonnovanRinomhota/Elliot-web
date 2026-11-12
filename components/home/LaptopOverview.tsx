"use client";

import { useEffect, useRef, useState } from "react";
import { ElliotMark } from "@/components/ElliotLogoArt";

// A laptop showing Elliot's dashboard Overview page, drawn in HTML so it stays
// sharp at any size. Drawn at 1000 x 625 and scaled to fit. The dashboard
// itself is in English, so this is too, on both language versions. The agency
// and the people are made up.

const W = 1000;
const H = 625;

const NAV: { group?: string; items: { label: string; badge?: number; active?: boolean; icon: string }[] }[] = [
  { items: [{ label: "Overview", active: true, icon: "grid" }] },
  {
    group: "Needs attention",
    items: [
      { label: "Inbox", badge: 3, icon: "inbox" },
      { label: "Escalations", icon: "alert" },
      { label: "Approvals", badge: 2, icon: "check" },
    ],
  },
  {
    group: "Customers",
    items: [
      { label: "Leads", icon: "user" },
      { label: "Appointments", icon: "cal" },
      { label: "Calendar", icon: "cal" },
      { label: "Conversations", icon: "chat" },
      { label: "Follow-ups", icon: "repeat" },
    ],
  },
  {
    group: "Your agency",
    items: [
      { label: "Listings", icon: "home" },
      { label: "Knowledge base", icon: "book" },
      { label: "Team", icon: "user" },
    ],
  },
];

const ICON: Record<string, string> = {
  grid: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
  inbox: "M4 13l2.5-8h11l2.5 8v5.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5zM4 13h4.5l1.2 2.2h4.6l1.2-2.2H20",
  alert: "M12 4 21 19.5H3zM12 10v4.2M12 17h.01",
  check: "M5 5h14v14H5zM8.5 12l2.4 2.4 4.6-4.8",
  user: "M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM5 20c.8-3.6 3.6-5.6 7-5.6s6.2 2 7 5.6",
  cal: "M4 6h16v14H4zM4 10h16M8.5 3.5v4M15.5 3.5v4",
  chat: "M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v6a2.5 2.5 0 0 1-2.5 2.5H11l-4 3.5V15a2 2 0 0 1-2-2z",
  repeat: "M5 11a6.5 6.5 0 0 1 11.3-4.3L18.5 9M18.5 4.5V9H14M19 13a6.5 6.5 0 0 1-11.3 4.3L5.5 15M5.5 19.5V15H10",
  home: "M4 11 12 4.5l8 6.5M6 9.5v10h12v-10",
  book: "M5 5.5A1.5 1.5 0 0 1 6.5 4H19v14H6.5A1.5 1.5 0 0 0 5 19.5zM5 19.5A1.5 1.5 0 0 0 6.5 21H19v-3",
};

function Ico({ d, className = "" }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

function Screen() {
  const bars = [52, 40, 46, 62, 22, 30, 88];
  const days = ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"];
  return (
    <div className="flex h-full w-full gap-3 bg-[#eef2f7] p-3 font-body text-[#0f1f38]" style={{ width: W, height: H }}>
      {/* Sidebar */}
      <aside className="flex w-[180px] shrink-0 flex-col rounded-2xl bg-white p-3 shadow-[0_1px_2px_rgba(15,31,56,0.06)]">
        <div className="flex items-center gap-2 px-1">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0f1f38] text-[12px] font-semibold text-white">M</span>
          <span className="leading-tight">
            <span className="block text-[11.5px] font-semibold">Mokotów Homes</span>
            <span className="flex items-center gap-1 text-[9.5px] text-[#6b7a90]">
              <ElliotMark size={9} /> Elliot assistant
            </span>
          </span>
        </div>
        <div className="mt-3 flex items-center gap-1.5 rounded-lg border border-[#e3e8ef] px-2 py-1.5 text-[10px] text-[#6b7a90]">
          <span className="text-[#2f6bff]">✦</span> Search or ask Elliot
        </div>
        <nav className="mt-2 flex-1 overflow-hidden">
          {NAV.map((g, gi) => (
            <div key={gi} className="mt-2">
              {g.group && <p className="px-2 pb-1 pt-1 text-[8.5px] font-semibold uppercase tracking-[0.12em] text-[#8a97ab]">{g.group}</p>}
              {g.items.map((it) => (
                <div
                  key={it.label}
                  className={`flex items-center gap-2 rounded-lg px-2 py-[5px] text-[10.5px] ${it.active ? "bg-[#e8efff] font-semibold text-[#2f6bff]" : "text-[#33435c]"}`}
                >
                  <Ico d={ICON[it.icon]} className="h-3 w-3" />
                  <span className="flex-1">{it.label}</span>
                  {it.badge && <span className="rounded-full bg-[#eef2f7] px-1.5 text-[9px] font-semibold text-[#33435c]">{it.badge}</span>}
                </div>
              ))}
            </div>
          ))}
        </nav>
        <div className="rounded-xl bg-[#f4f6fa] p-2.5">
          <div className="flex justify-between text-[9.5px]">
            <span className="font-semibold">Your day</span>
            <span className="text-[#6b7a90]">1 of 3 viewings done</span>
          </div>
          <div className="mt-1.5 h-1 rounded-full bg-[#dfe5ee]">
            <div className="h-1 w-1/3 rounded-full bg-[#2f6bff]" />
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-end justify-between px-1 pt-1">
          <div>
            <p className="text-[21px] font-semibold tracking-[-0.02em]">Overview</p>
            <p className="mt-0.5 text-[10.5px] text-[#5b6b82]">2 chats need a person and 3 hot leads to call. 5 viewings today.</p>
          </div>
          <div className="flex gap-1.5 text-[9.5px] font-medium">
            <span className="rounded-full border border-[#dfe5ee] bg-white px-2.5 py-1">Last 7 days</span>
            <span className="rounded-full border border-[#dfe5ee] bg-white px-2.5 py-1">
              <span className="text-[#2f6bff]">✦</span> Ask Elliot
            </span>
            <span className="rounded-full bg-[#0f1f38] px-2.5 py-1 text-white">+ Add listing</span>
          </div>
        </div>

        <div className="mt-3 grid flex-1 grid-cols-3 grid-rows-[1fr_1.08fr] gap-2.5">
          {/* Queue */}
          <section className="row-span-2 flex flex-col rounded-2xl bg-white p-3">
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-semibold">Your queue</p>
              <span className="rounded-full border border-[#dfe5ee] px-2 py-0.5 text-[9px]">Inbox ›</span>
            </div>
            <div className="mt-2.5 rounded-xl border border-[#e7ebf1] border-l-[3px] border-l-[#2f6bff] p-2.5 shadow-[0_6px_16px_-12px_rgba(15,31,56,0.35)]">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold">Hot lead</p>
                <span className="rounded-full bg-[#fdecec] px-1.5 py-0.5 text-[8.5px] font-semibold text-[#d33]">● Urgent</span>
              </div>
              <p className="mt-0.5 text-[9.5px] font-medium text-[#d33]">Waiting for a person</p>
              <p className="mt-1 text-[9.5px] leading-snug text-[#5b6b82]">Score 85. Anna Kowalska, 3-room flat, Mokotów, mortgage approved.</p>
              <p className="mt-1 text-[8.5px] text-[#8a97ab]">18 min ago</p>
            </div>
            <p className="mt-3 flex justify-between text-[10.5px] font-semibold">
              <span>Waiting on your team</span>
              <span>8</span>
            </p>
            {[
              ["Chats waiting for a person", 2],
              ["Hot leads to call", 3],
              ["Emails to approve", 2],
              ["Viewings without an agent", 1],
            ].map(([l, n]) => (
              <div key={String(l)} className="flex items-center justify-between border-b border-[#eef1f5] py-[6px] text-[10px] text-[#33435c]">
                <span>{l}</span>
                <span className="rounded-full bg-[#eef2f7] px-1.5 text-[9px] font-semibold">{n}</span>
              </div>
            ))}
            <div className="mt-auto flex items-center justify-between rounded-xl bg-[#f4f6fa] px-2.5 py-2 text-[9.5px]">
              <span>
                <span className="block font-semibold">5 viewings today</span>
                <span className="text-[#6b7a90]">Next at 11:00, Tomasz Zieliński</span>
              </span>
              <span className="font-semibold text-[#2f6bff]">Open</span>
            </div>
          </section>

          {/* Conversations */}
          <section className="flex flex-col rounded-2xl bg-white p-3">
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-semibold">Conversations</p>
              <span className="rounded-full border border-[#dfe5ee] px-2 py-0.5 text-[9px]">View ›</span>
            </div>
            <div className="mt-2 rounded-xl bg-[#f4f6fa] p-2">
              <div className="flex items-center gap-2">
                <span className="text-[24px] font-semibold leading-none">33</span>
                <span className="text-[9px] leading-tight text-[#5b6b82]">
                  chats this week
                  <br />
                  <span className="font-semibold text-[#2f6bff]">↑ +27% vs last week</span>
                </span>
              </div>
              <div className="mt-1.5 flex gap-2 text-[9px] text-[#5b6b82]">
                <span><b className="block text-[11px] text-[#0f1f38]">4</b>New leads</span>
                <span><b className="block text-[11px] text-[#0f1f38]">3</b>Viewings</span>
                <span><b className="block text-[11px] text-[#d33]">2</b>Handed over</span>
              </div>
            </div>
            <div className="mt-auto flex h-[52px] items-end gap-1.5">
              {bars.map((b, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-0.5">
                  <div className={`w-full rounded-[4px] ${i === bars.length - 1 ? "bg-[#2f6bff]" : "bg-[#dbe6ff]"}`} style={{ height: `${b * 0.42}px` }} />
                  <span className="text-[7.5px] text-[#8a97ab]">{days[i]}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Handled by Elliot */}
          <section className="flex flex-col rounded-2xl bg-white p-3">
            <p className="text-[12px] font-semibold">Handled by Elliot</p>
            <div className="relative mx-auto mt-1 h-[86px] w-[150px]">
              <svg viewBox="0 0 150 86" className="absolute inset-0" aria-hidden="true">
                <path d="M15 78a60 60 0 0 1 120 0" fill="none" stroke="#e6ecf5" strokeWidth="13" strokeLinecap="round" />
                <path d="M15 78a60 60 0 0 1 112.8-28.6" fill="none" stroke="#2f6bff" strokeWidth="13" strokeLinecap="round" />
                <path d="M127.8 49.4A60 60 0 0 1 135 78" fill="none" stroke="#f5a524" strokeWidth="13" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-x-0 bottom-1 text-center">
                <span className="text-[24px] font-semibold leading-none">94%</span>
                <span className="block text-[8.5px] text-[#6b7a90]">of this week&apos;s chats</span>
              </div>
            </div>
            <div className="mt-1.5 flex justify-center gap-3 text-[9px] text-[#33435c]">
              <span><span className="text-[#2f6bff]">●</span> By Elliot <b>31</b></span>
              <span><span className="text-[#f5a524]">●</span> To a person <b>2</b></span>
            </div>
            <div className="mt-auto rounded-full bg-[#f4f6fa] py-1.5 text-center text-[9.5px] font-semibold">Review 2 open handovers ›</div>
          </section>

          {/* Leads received */}
          <section className="flex flex-col rounded-2xl bg-white p-3">
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-semibold">Leads received</p>
              <span className="text-[9px] text-[#6b7a90]">Last 14 days</span>
            </div>
            <svg viewBox="0 0 200 70" className="mt-2 w-full flex-1" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="lo-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#2f6bff" stopOpacity="0.18" />
                  <stop offset="1" stopColor="#2f6bff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 60 L30 58 L45 44 L60 58 L80 50 L95 56 L115 40 L135 46 L160 26 L180 22 L200 8 L200 70 L0 70Z" fill="url(#lo-fill)" />
              <path d="M0 60 L30 58 L45 44 L60 58 L80 50 L95 56 L115 40 L135 46 L160 26 L180 22 L200 8" fill="none" stroke="#2f6bff" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <p className="mt-1 flex items-center gap-1.5">
              <span className="text-[22px] font-semibold leading-none">27</span>
              <span className="rounded-full bg-[#e8efff] px-1.5 py-0.5 text-[8.5px] font-semibold text-[#2f6bff]">↑ 18% vs prior 14 days</span>
            </p>
          </section>

          {/* Viewings booked */}
          <section className="flex flex-col rounded-2xl bg-[#2f6bff] p-3 text-white">
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-semibold">Viewings booked</p>
              <span className="text-[9px] text-white/75">Last 30 days</span>
            </div>
            <svg viewBox="0 0 200 70" className="mt-2 w-full flex-1" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 62 L25 58 L50 60 L70 50 L90 52 L110 40 L130 44 L150 30 L170 26 L200 10" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="200" cy="10" r="3.5" fill="#2f6bff" stroke="#fff" strokeWidth="2" />
            </svg>
            <p className="mt-1 flex items-center gap-1.5">
              <span className="text-[22px] font-semibold leading-none">19</span>
              <span className="rounded-full bg-white/15 px-1.5 py-0.5 text-[8.5px] font-semibold">↑ 6 vs prior 30 days</span>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default function LaptopOverview({ label }: { label: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const fit = () => setScale(el.clientWidth / W);
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <figure className="relative w-full" aria-label={label}>
      {/* Lid */}
      <div className="relative rounded-[18px] bg-gradient-to-b from-[#3a4250] to-[#1b2029] p-[1.6%] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.75)] ring-1 ring-white/15">
        <div className="absolute left-1/2 top-[0.6%] h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-black/60" />
        <div ref={box} className="relative w-full overflow-hidden rounded-[8px] bg-[#eef2f7]" style={{ aspectRatio: `${W} / ${H}` }}>
          <div className="absolute left-0 top-0 origin-top-left" style={{ transform: `scale(${scale})` }}>
            <Screen />
          </div>
          {/* Screen glare */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_35%)]" />
        </div>
      </div>
      {/* Base */}
      <div className="relative mx-[-5%] h-[14px] rounded-b-[14px] rounded-t-[3px] bg-gradient-to-b from-[#c9d0da] via-[#9aa3b0] to-[#5d6572] shadow-[0_24px_40px_-14px_rgba(0,0,0,0.7)]">
        <div className="absolute left-1/2 top-0 h-[5px] w-[16%] -translate-x-1/2 rounded-b-[8px] bg-[#7d8693]" />
      </div>
    </figure>
  );
}
