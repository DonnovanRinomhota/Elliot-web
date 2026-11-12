"use client";

import { Button, ButtonLink } from "@/components/ui/Button";
import { useElliotChat } from "@/components/chat/ElliotChatProvider";
import { HOME } from "@/lib/content/home";
import { UI, type Locale } from "@/lib/i18n";
import Hero from "@/components/home/Hero";
import { HomeIcon, IconTile } from "@/components/home/HomeIcon";
import { ElliotMark } from "@/components/ElliotLogoArt";
import ToolsGraphic from "@/components/sections/ToolsGraphic";

// Section ids are localized (Polish page, Polish anchors).
const IDS = {
  en: { does: "what-it-does", flow: "how-it-works", control: "control", tools: "tools" },
  pl: { does: "co-robi", flow: "jak-dziala", control: "kontrola", tools: "narzedzia" },
};

function Heading({ eyebrow, title, lead, center = true }: { eyebrow: string; title: string; lead?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-xl"}>
      <p className={`eyebrow ${center ? "eyebrow-center text-slate-600" : ""}`}>{eyebrow}</p>
      <h2 className="mt-5 text-[2.3rem] font-semibold leading-[1.06] tracking-[-0.035em] text-fg md:text-[3.4rem]">{title}</h2>
      {lead && <p className={`mt-5 text-[17px] leading-relaxed text-slate-600 ${center ? "mx-auto max-w-2xl" : ""}`}>{lead}</p>}
    </div>
  );
}

function Check({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3.5 8.5 3 3 6-6.5" />
    </svg>
  );
}

type Flow = (typeof HOME)["en"]["flow"];

// The picture at the top of each "how it works" card.
function FlowVisual({ step, v }: { step: number; v: Flow["visual"] }) {
  if (step === 0) {
    const icons = ["web", "gmail", "whatsapp"] as const;
    return (
      <div className="flex w-full max-w-[260px] flex-col gap-2.5">
        {v.channels.map((c, i) => (
          <div key={c} className="panel-inner flex items-center gap-3 rounded-xl px-3 py-2.5">
            <IconTile name={icons[i]} size="sm" />
            <span className="flex-1 text-[14px] text-fg">{c}</span>
            <span className="h-2 w-2 rounded-full bg-[#4ade80] shadow-[0_0_10px_2px_rgba(74,222,128,0.6)]" />
          </div>
        ))}
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="flex w-full max-w-[290px] flex-col gap-3 text-[13px] leading-snug">
        <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[#2f6bff] px-3.5 py-2.5 text-white">{v.clientMessage}</p>
        <div className="flex items-end gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0b1426] ring-1 ring-[#d9a56c]/50">
            <ElliotMark size={14} />
          </span>
          <p className="panel-inner max-w-[85%] rounded-2xl rounded-bl-md px-3.5 py-2.5 text-slate-700">{v.elliotReply}</p>
        </div>
      </div>
    );
  }
  if (step === 2) {
    return (
      <div className="grid w-full max-w-[280px] grid-cols-2 gap-2.5">
        {v.questions.map((q) => (
          <span key={q} className="panel-inner flex items-center gap-2 rounded-xl px-3 py-2.5 text-[13.5px] text-fg">
            <span className="flex h-5 w-5 items-center justify-center rounded-full gold-tile bg-[#d9a56c]/15 text-[#e8c08e]">
              <Check className="h-3 w-3" />
            </span>
            {q}
          </span>
        ))}
      </div>
    );
  }
  if (step === 3) {
    return (
      <div className="panel-inner w-full max-w-[280px] rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <IconTile name="googleCalendar" size="sm" />
          <span>
            <span className="block text-[20px] font-semibold leading-none text-fg">{v.slot}</span>
            <span className="mt-1 block text-[12.5px] text-slate-600">{v.slotDay}</span>
          </span>
        </div>
        <p className="mt-3 flex items-center gap-2 border-t border-fg/[0.07] pt-3 text-[13px] text-[#4ade80]">
          <Check /> {v.booked}
        </p>
      </div>
    );
  }
  return (
    <div className="panel-inner w-full max-w-[290px] rounded-2xl p-4">
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-[#f07167]/15 px-2 py-0.5 text-[11.5px] font-semibold text-[#f79a92]">{v.hot}</span>
        <span className="truncate text-[13.5px] text-fg">{v.handover}</span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        {["SA", "OK", "JK"].map((a, i) => (
          <span
            key={a}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-semibold ${i === 1 ? "bg-gold text-[#0b1426]" : "bg-white/10 text-white/80"}`}
          >
            {a}
          </span>
        ))}
        <span className="ml-1 h-px flex-1 bg-gradient-to-r from-[#d9a56c]/60 to-transparent" />
      </div>
    </div>
  );
}

export default function HomePage({ locale }: { locale: Locale }) {
  const t = HOME[locale];
  const ui = UI[locale];
  const ids = IDS[locale];
  const { openChat } = useElliotChat();

  return (
    <>
      <Hero t={t.hero} bookHref={ui.bookHref} howHref={`#${ids.flow}`} />

      {/* What Elliot does */}
      <section id={ids.does} className="section-light scroll-mt-24 py-24 md:py-32">
        <div className="container-content">
          <Heading eyebrow={t.does.eyebrow} title={t.does.title} lead={t.does.lead} />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.does.items.map((item) => (
              <article key={item.title} className="panel flex flex-col rounded-[24px] p-7 transition-colors hover:border-white/15">
                <IconTile name={item.icon} />
                <h3 className="mt-6 text-[19px] font-semibold tracking-[-0.01em] text-fg">{item.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">{item.text}</p>
                {item.also && (
                  <p className="mt-auto flex items-center gap-2 pt-5 text-[13.5px] text-slate-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full gold-tile bg-[#d9a56c]/15 text-[#e8c08e]">
                      <Check className="h-3 w-3" />
                    </span>
                    {item.also.text}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* First message to booked viewing */}
      <section id={ids.flow} className="section-sky scroll-mt-24 py-24 md:py-32">
        <div className="container-content">
          <Heading eyebrow={t.flow.eyebrow} title={t.flow.title} lead={t.flow.lead} />
          <ol className="mt-16 grid gap-4 md:grid-cols-6">
            {t.flow.steps.map((s, i) => (
              <li key={s.title} className={`panel flex flex-col overflow-hidden rounded-[24px] ${i < 3 ? "md:col-span-2" : "md:col-span-3"}`}>
                <div className="flex h-56 items-center justify-center border-b border-fg/[0.06] bg-[radial-gradient(400px_200px_at_50%_0%,rgba(110,155,255,0.10),transparent_70%)] px-6">
                  <FlowVisual step={i} v={t.flow.visual} />
                </div>
                <div className="p-7">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[13px] text-slate-700">{i + 1}</span>
                  <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.01em] text-fg">{s.title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-600">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tools */}
      <section id={ids.tools} className="section-night scroll-mt-24 py-24 md:py-32">
        <div className="container-content">
          <Heading eyebrow={t.tools.eyebrow} title={t.tools.title} lead={t.tools.lead} />
          <ToolsGraphic t={t.tools} />
        </div>
      </section>

      {/* Control */}
      <section id={ids.control} className="section-light scroll-mt-24 py-24 md:py-32">
        <div className="container-content grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Heading eyebrow={t.control.eyebrow} title={t.control.title} lead={t.control.lead} center={false} />
          <div className="grid gap-4 sm:grid-cols-2">
            {t.control.items.map((c) => (
              <div key={c.title} className="panel rounded-[24px] p-7">
                <IconTile name={c.icon} />
                <h3 className="mt-5 text-[17.5px] font-semibold text-fg">{c.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-600">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you can count on */}
      <section className="section-sky py-24 md:py-32">
        <div className="container-content">
          <Heading eyebrow={t.promises.eyebrow} title={t.promises.title} />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.promises.items.map((p, i) => (
              <div key={p.title} className="glass rounded-[24px] p-7">
                <span className="text-gold text-[2.2rem] font-semibold leading-none">0{i + 1}</span>
                <h3 className="mt-5 text-[17px] font-semibold text-fg">{p.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,#071631_0%,#14325c_60%,#2b4f82_100%)]" />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(700px_380px_at_50%_100%,rgba(196,222,255,0.35),transparent_70%)]" />
        <div className="container-content relative max-w-3xl text-center">
          <ElliotMark size={52} className="mx-auto" />
          <h2 className="mt-8 text-[2.3rem] font-semibold leading-[1.08] tracking-[-0.035em] text-fg md:text-[3.4rem]">{t.cta.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-slate-700">{t.cta.lead}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={ui.bookHref} size="lg" arrow>
              {t.cta.primary}
            </ButtonLink>
            <Button variant="secondary" size="lg" onClick={openChat}>
              <HomeIcon name="chat" className="h-5 w-5" />
              {t.cta.secondary}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
