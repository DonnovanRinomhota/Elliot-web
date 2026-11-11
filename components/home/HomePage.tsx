"use client";

import { Button, ButtonLink } from "@/components/ui/Button";
import { useElliotChat } from "@/components/chat/ElliotChatProvider";
import { HOME, type Status } from "@/lib/content/home";
import { UI, type Locale } from "@/lib/i18n";
import { PRICING } from "@/lib/site";

// Section ids are localized so the Polish nav can link to "#cennik" etc.
const IDS = {
  en: { does: "what-it-does", flow: "how-it-works", control: "control", tools: "tools", pricing: "pricing" },
  pl: { does: "co-robi", flow: "jak-dziala", control: "kontrola", tools: "narzedzia", pricing: "cennik" },
};

export function StatusTag({ status, label }: { status: Status; label: string }) {
  const tone =
    status === "live"
      ? "bg-ink text-white dark:bg-white/10"
      : status === "testing"
        ? "bg-brass-soft text-brass-dark dark:bg-brass/20 dark:text-brass-light"
        : "border border-surface-line text-slate-600";
  return (
    <span className={`inline-flex shrink-0 items-center rounded px-2 py-0.5 text-xs font-medium ${tone}`}>
      {label}
    </span>
  );
}

function Heading({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-[1.9rem] leading-[1.2] text-fg md:text-[2.25rem]">{title}</h2>
      {lead && <p className="mt-4 text-[16px] leading-relaxed text-slate-600">{lead}</p>}
    </div>
  );
}

// "Not offered yet" takes the cells left in the last row (2 columns on
// tablets, 3 on desktops). Literal class names so Tailwind keeps them.
function fillLast(n: number): string {
  const sm = n % 2 === 0 ? "sm:col-span-2" : "sm:col-span-1";
  const lg = ["lg:col-span-3", "lg:col-span-2", "lg:col-span-1"][n % 3];
  return `${sm} ${lg}`;
}

export default function HomePage({ locale }: { locale: Locale }) {
  const t = HOME[locale];
  const ui = UI[locale];
  const ids = IDS[locale];
  const { openChat } = useElliotChat();
  const price = (n: number) => `${PRICING.currency}${n}`;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-surface-line bg-surface pt-14 pb-20 md:pt-20 md:pb-24">
        <div className="container-content grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 className="mt-4 text-[2.4rem] leading-[1.1] text-fg md:text-[3.2rem]">{t.hero.title}</h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-600">{t.hero.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={openChat}>
                {t.hero.primary}
              </Button>
              <ButtonLink href={ui.bookHref} variant="secondary" size="lg">
                {t.hero.secondary}
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm text-slate-600">{t.hero.note}</p>
          </div>

          <figure className="rounded-lg border border-surface-line bg-card">
            <figcaption className="flex items-center justify-between border-b border-surface-line px-5 py-3 text-sm">
              <span className="font-medium text-fg">Elliot</span>
              <span className="text-slate-600">{t.hero.sampleLabel}</span>
            </figcaption>
            <div className="space-y-3 p-5">
              {t.hero.sample.map((m, i) =>
                m.from === "client" ? (
                  <p
                    key={i}
                    className="ml-auto max-w-[85%] rounded-lg bg-ink px-4 py-2.5 dark:bg-ink-line text-[14px] leading-relaxed text-white"
                  >
                    {m.text}
                  </p>
                ) : (
                  <p
                    key={i}
                    className="max-w-[90%] rounded-lg border border-surface-line bg-surface-dim px-4 py-2.5 text-[14px] leading-relaxed text-fg"
                  >
                    {m.text}
                  </p>
                ),
              )}
            </div>
            <div className="border-t border-surface-line px-5 py-3 text-[13px] text-brass-dark dark:text-brass-light">
              {t.hero.sampleFooter}
            </div>
          </figure>
        </div>
      </section>

      {/* What Elliot does */}
      <section id={ids.does} className="scroll-mt-20 border-b border-surface-line bg-card py-20">
        <div className="container-content">
          <Heading eyebrow={t.does.eyebrow} title={t.does.title} lead={t.does.lead} />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-surface-line bg-surface-line sm:grid-cols-2 lg:grid-cols-3">
            {t.does.items.map((item) => (
              <div key={item.title} className="bg-card p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[17px] text-fg">{item.title}</h3>
                  <StatusTag status={item.status} label={t.statusLabel[item.status]} />
                </div>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
            {/* Fills the rest of the last row, whatever the number of items. */}
            <div className={`bg-surface p-6 ${fillLast(t.does.items.length)}`}>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[17px] text-fg">{t.does.notYetTitle}</h3>
                <StatusTag status="planned" label={t.statusLabel.planned} />
              </div>
              <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">{t.does.notYet}</p>
            </div>
          </div>
        </div>
      </section>

      {/* First message to booked viewing */}
      <section id={ids.flow} className="scroll-mt-20 border-b border-surface-line bg-surface py-20">
        <div className="container-content">
          <Heading eyebrow={t.flow.eyebrow} title={t.flow.title} lead={t.flow.lead} />
          <ol className="mt-12 grid gap-8 md:grid-cols-5 md:gap-6">
            {t.flow.steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-ink pt-4 dark:border-brass-light">
                <span className="text-sm font-medium text-brass-dark dark:text-brass-light">{i + 1}</span>
                <h3 className="mt-1 text-[16px] text-fg">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Control */}
      <section id={ids.control} className="scroll-mt-20 border-b border-surface-line bg-card py-20">
        <div className="container-content grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Heading eyebrow={t.control.eyebrow} title={t.control.title} lead={t.control.lead} />
          <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {t.control.items.map((c) => (
              <div key={c.title}>
                <dt className="text-[16px] font-semibold text-fg">{c.title}</dt>
                <dd className="mt-2 text-[14.5px] leading-relaxed text-slate-600">{c.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Tools */}
      <section id={ids.tools} className="scroll-mt-20 border-b border-surface-line bg-surface py-20">
        <div className="container-content">
          <Heading eyebrow={t.tools.eyebrow} title={t.tools.title} lead={t.tools.lead} />
          <ul className="mt-12 divide-y divide-surface-line rounded-lg border border-surface-line bg-card">
            {t.tools.items.map((tool) => (
              <li key={tool.name} className="flex flex-wrap items-center gap-x-6 gap-y-1 px-5 py-4">
                <span className="w-full text-[15px] font-semibold text-fg sm:w-56">{tool.name}</span>
                <span className="flex-1 text-[14.5px] text-slate-600">{tool.text}</span>
                <StatusTag status={tool.status} label={t.statusLabel[tool.status]} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What you can count on (replaces made-up statistics) */}
      <section className="border-b border-surface-line bg-card py-20">
        <div className="container-content">
          <Heading eyebrow={t.promises.eyebrow} title={t.promises.title} />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.promises.items.map((p) => (
              <div key={p.title} className="border-l-2 border-brass pl-4">
                <h3 className="text-[16px] text-fg">{p.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id={ids.pricing} className="scroll-mt-20 border-b border-surface-line bg-surface py-20">
        <div className="container-content grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Heading eyebrow={t.pricing.eyebrow} title={t.pricing.title} lead={t.pricing.lead} />
          <div className="rounded-lg border border-surface-line bg-card">
            <div className="border-b border-surface-line p-6 md:p-8">
              <p className="text-[15px] font-semibold text-fg">{t.pricing.planName}</p>
              <p className="mt-4 flex items-baseline gap-2 text-fg">
                <span className="text-sm text-slate-600">{t.pricing.from}</span>
                <span className="text-[2.6rem] font-semibold leading-none">{price(PRICING.monthlyFrom)}</span>
                <span className="text-slate-600">{t.pricing.perMonth}</span>
              </p>
              <p className="mt-3 text-[15px] text-slate-700">
                {t.pricing.setup} {price(PRICING.setupFrom)}
              </p>
              <p className="mt-1 text-sm text-slate-600">{t.pricing.vat}</p>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm font-semibold text-fg">{t.pricing.includesTitle}</p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {t.pricing.includes.map((inc) => (
                  <li key={inc} className="flex gap-2.5 text-[14.5px] leading-snug text-slate-700">
                    <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                    {inc}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ButtonLink href={ui.bookHref} size="lg">
                  {t.pricing.cta}
                </ButtonLink>
              </div>
              <p className="mt-4 text-sm text-slate-600">{t.pricing.footnote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink py-20 text-white">
        <div className="container-content max-w-3xl text-center">
          <h2 className="text-[1.9rem] leading-[1.2] md:text-[2.4rem]">{t.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-white/70">{t.cta.lead}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={ui.bookHref} variant="invert" size="lg">
              {t.cta.primary}
            </ButtonLink>
            <Button variant="invertGhost" size="lg" onClick={openChat}>
              {t.cta.secondary}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
