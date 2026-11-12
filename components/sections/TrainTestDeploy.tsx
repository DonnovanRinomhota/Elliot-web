import SectionHeading from "@/components/sections/SectionHeading";
import { ElliotMark } from "@/components/ElliotLogoArt";
import { IconTile } from "@/components/home/HomeIcon";
import { PRODUCT } from "@/lib/content/product";
import type { Locale } from "@/lib/i18n";

// What actually happens before and after an agency goes live, and one
// message followed through, told in pictures. No claims about automated
// scenario testing or statistics the dashboard doesn't have.

function Check({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3.5 8.5 3 3 6-6.5" />
    </svg>
  );
}

/** Elliot's mark in a small dark disc, as the "speaker" of a step. */
function ElliotBadge() {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0b1426] ring-1 ring-[#d9a56c]/60 shadow-[0_0_18px_rgba(217,165,108,0.35)]">
      <ElliotMark size={17} />
    </span>
  );
}

type Lifecycle = (typeof PRODUCT)["en"]["lifecycle"];

function StoryPicture({ step, t }: { step: number; t: Lifecycle }) {
  const v = t.exampleVisual;
  if (step === 0) {
    // The client writes.
    return (
      <div className="flex w-full items-end justify-end gap-2">
        <p className="max-w-[88%] rounded-2xl rounded-br-md bg-[#2f6bff] px-3.5 py-2.5 text-[13.5px] leading-snug text-white shadow-[0_10px_24px_-12px_rgba(47,107,255,0.8)]">
          {t.example[0].text.replace(/^[“„"]|[”"]$/g, "")}
        </p>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-[11px] font-semibold text-white">AK</span>
      </div>
    );
  }
  if (step === 1) {
    // Elliot looks up the booking and the agent's calendar.
    return (
      <div className="flex w-full flex-col gap-2.5">
        <div className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.07] px-3 py-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[#e8c08e]">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <rect x="4" y="5.5" width="16" height="14.5" rx="2.5" />
              <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
            </svg>
          </span>
          <span className="min-w-0">
            <span className="block text-[11px] uppercase tracking-[0.12em] text-white/55">{v.booking}</span>
            <span className="block truncate text-[13px] text-white">{v.bookingValue}</span>
          </span>
        </div>
        <div className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.07] px-3 py-2.5">
          <IconTile name="googleCalendar" size="sm" />
          <span className="min-w-0 flex-1">
            <span className="block text-[11px] uppercase tracking-[0.12em] text-white/55">{v.calendar}</span>
            <span className="block truncate text-[13px] text-white">{v.calendarValue}</span>
          </span>
          <span className="text-[#6ee7a0]">
            <Check />
          </span>
        </div>
      </div>
    );
  }
  if (step === 2) {
    // Elliot moves the viewing and tells the agent.
    return (
      <div className="w-full">
        <div className="flex items-center gap-2.5">
          <span className="rounded-lg border border-white/15 px-2.5 py-1.5 text-[13px] text-white/45 line-through decoration-[#f07167]">{v.from}</span>
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#e8c08e]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M4 12h15M14 6.5 19.5 12 14 17.5" />
          </svg>
          <span className="rounded-lg bg-white px-2.5 py-1.5 text-[13px] font-semibold text-[#0f1f38] shadow-[0_8px_20px_-10px_rgba(0,0,0,0.6)]">{v.to}</span>
        </div>
        <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#4ade80]/30 bg-[#4ade80]/10 px-3 py-1.5 text-[12.5px] text-[#86efac]">
          <Check className="h-3 w-3" />
          {v.notified}
        </p>
      </div>
    );
  }
  // Elliot answers.
  return (
    <div className="flex w-full items-end gap-2">
      <ElliotBadge />
      <p className="max-w-[88%] rounded-2xl rounded-bl-md border border-white/15 bg-white/[0.09] px-3.5 py-2.5 text-[13.5px] leading-snug text-white">
        {t.example[3].text.replace(/^[“„"]|[”"]$/g, "")}
      </p>
    </div>
  );
}

export default function TrainTestDeploy({ locale = "en" }: { locale?: Locale }) {
  const t = PRODUCT[locale].lifecycle;
  return (
    <section className="section-light py-24 md:py-32">
      <div className="container-content">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="reveal mt-14 grid gap-4 md:grid-cols-4">
          {t.stages.map((s, i) => (
            <div key={s.title} className="panel rounded-[24px] p-7">
              <span className="gold-tile inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d9a56c]/25 bg-[#d9a56c]/[0.08] text-[13px] font-semibold text-[#e8c08e]">
                {i + 1}
              </span>
              <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.01em] text-fg">{s.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-600">{s.detail}</p>
            </div>
          ))}
        </div>

        {/* One message, followed through: a picture and a line for each step. */}
        <figure className="reveal relative mt-6 overflow-hidden rounded-[28px] p-6 text-white md:p-9">
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(135deg,#071631_0%,#14325c_55%,#2b5590_100%)]" />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(600px_300px_at_85%_0%,rgba(205,225,255,0.25),transparent_65%)]" />
          <figcaption className="relative text-[12.5px] font-medium uppercase tracking-[0.18em] text-white/60">{t.exampleLabel}</figcaption>
          <ol className="relative mt-7 grid gap-4 md:grid-cols-4 md:gap-3">
            {t.example.map((row, i) => (
              <li key={row.label} className="relative flex flex-col rounded-[22px] border border-white/12 bg-white/[0.05] p-5 backdrop-blur-sm">
                <div className="flex h-[132px] items-center">
                  <StoryPicture step={i} t={t} />
                </div>
                <div className="mt-5 flex items-center gap-2.5 border-t border-white/10 pt-4">
                  {i === 0 ? (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2f6bff]/25 text-[11px] font-semibold text-[#bcd3ff]">AK</span>
                  ) : (
                    <ElliotBadge />
                  )}
                  <span className="text-[15px] font-semibold text-[#ebc48f]">{row.label}</span>
                </div>
                {/* The first and last pictures already say it in the bubbles. */}
                {i > 0 && i < t.example.length - 1 && <p className="mt-2.5 text-[14px] leading-relaxed text-white/80">{row.text}</p>}
                {i < t.example.length - 1 && (
                  <span aria-hidden="true" className="absolute -right-[13px] top-[78px] z-10 hidden h-6 w-6 items-center justify-center rounded-full bg-gold text-[#0b1426] shadow-gold md:flex">
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 10h9M10.5 6 14.5 10l-4 4" />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  );
}
