import PageHero from "@/components/sections/PageHero";
import ScreenFrame from "@/components/showcase/ScreenFrame";
import { ButtonLink } from "@/components/ui/Button";
import { ElliotMark } from "@/components/ElliotLogoArt";
import { IconTile } from "@/components/home/HomeIcon";
import { ADVERTISING } from "@/lib/content/advertising";
import { UI, type Locale } from "@/lib/i18n";

// Managed advertising: an optional service, separate from the software.
// The page keeps the three costs (software, management, ad spend) apart.

const CONTACT = { en: "/contact", pl: "/pl/kontakt" };

function Heading({ eyebrow, title, lead, center = true }: { eyebrow: string; title: string; lead?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-xl"}>
      <p className={`eyebrow ${center ? "eyebrow-center text-slate-600" : ""}`}>{eyebrow}</p>
      <h2 className="mt-5 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.035em] text-fg md:text-[3rem]">{title}</h2>
      {lead && <p className={`mt-5 text-[17px] leading-relaxed text-slate-600 ${center ? "mx-auto max-w-2xl" : ""}`}>{lead}</p>}
    </div>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3.5 8.5 3 3 6-6.5" />
    </svg>
  );
}

export default function AdvertisingPage({ locale }: { locale: Locale }) {
  const t = ADVERTISING[locale];
  const book = UI[locale].bookHref;

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} description={t.hero.description}>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href={book} size="lg" arrow>
            {t.hero.primary}
          </ButtonLink>
          <ButtonLink href={CONTACT[locale]} size="lg" variant="secondary">
            {t.hero.secondary}
          </ButtonLink>
        </div>
      </PageHero>

      {/* What we cover */}
      <section className="section-light py-24 md:py-28">
        <div className="container-content">
          <Heading eyebrow={t.scope.eyebrow} title={t.scope.title} lead={t.scope.lead} />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.scope.items.map((item) => (
              <article key={item.title} className="panel flex flex-col rounded-[24px] p-7">
                <IconTile name={item.icon} />
                <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.01em] text-fg">{item.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* A, B, C: three separate costs */}
      <section className="section-sky py-24 md:py-28">
        <div className="container-content">
          <Heading eyebrow={t.costs.eyebrow} title={t.costs.title} lead={t.costs.lead} />
          <ol className="mt-14 grid gap-4 md:grid-cols-3">
            {t.costs.parts.map((p, i) => (
              <li key={p.letter} className={`glass flex flex-col rounded-[24px] p-7 ${i === 1 ? "ring-1 ring-[#e8c08e]/40" : ""}`}>
                <span className="text-gold text-[2.6rem] font-semibold leading-none">{p.letter}</span>
                <h3 className="mt-5 text-[19px] font-semibold text-fg">{p.title}</h3>
                <p className="mt-1.5 text-[13.5px] font-medium text-[#f3d4a4]">{p.who}</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">{p.text}</p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-8 max-w-2xl text-center text-[14px] leading-relaxed text-slate-600">{t.costs.note}</p>
        </div>
      </section>

      {/* Ownership */}
      <section className="section-light py-24 md:py-28">
        <div className="container-content grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Heading eyebrow={t.ownership.eyebrow} title={t.ownership.title} lead={t.ownership.lead} center={false} />
          <div className="grid gap-4 sm:grid-cols-2">
            {t.ownership.items.map((c) => (
              <div key={c.title} className="panel rounded-[24px] p-7">
                <IconTile name={c.icon} />
                <h3 className="mt-5 text-[17.5px] font-semibold text-fg">{c.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-600">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* With Elliot, optionally */}
      <section className="section-night py-24 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Heading eyebrow={t.withElliot.eyebrow} title={t.withElliot.title} lead={t.withElliot.text} center={false} />
            <ul className="mt-8 space-y-3">
              {t.withElliot.points.map((x) => (
                <li key={x} className="flex gap-3 text-[15px] leading-snug text-slate-700">
                  <span className="mt-0.5 text-[#e8c08e]">
                    <Check />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <ScreenFrame screen="leads" alt={t.withElliot.screenAlt} sizes="(min-width: 1024px) 640px, 100vw" />
        </div>
      </section>

      {/* Process */}
      <section className="section-sky py-24 md:py-28">
        <div className="container-content">
          <Heading eyebrow={t.process.eyebrow} title={t.process.title} />
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {t.process.steps.map((s, i) => (
              <li key={s.title} className="glass rounded-[24px] p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-[13px] text-slate-700">{i + 1}</span>
                <h3 className="mt-5 text-[17px] font-semibold text-fg">{s.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light py-24 md:py-28">
        <div className="container-content max-w-3xl">
          <Heading eyebrow={t.faq.eyebrow} title={t.faq.title} />
          <div className="mt-12 space-y-3">
            {t.faq.items.map((f) => (
              <details key={f.q} className="panel group rounded-[20px] px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-fg">
                  {f.q}
                  <span aria-hidden="true" className="text-slate-400 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 md:py-32">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,#071631_0%,#14325c_60%,#2b4f82_100%)]" />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(700px_380px_at_50%_100%,rgba(196,222,255,0.35),transparent_70%)]" />
        <div className="container-content relative max-w-3xl text-center">
          <ElliotMark size={48} className="mx-auto" />
          <h2 className="mt-8 text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-[3.2rem]">{t.cta.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/75">{t.cta.lead}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={book} size="lg" arrow>
              {t.cta.primary}
            </ButtonLink>
            <ButtonLink href={CONTACT[locale]} size="lg" variant="secondary">
              {t.cta.secondary}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
