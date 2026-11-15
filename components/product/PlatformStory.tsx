import SectionHeading from "@/components/sections/SectionHeading";
import ScreenFrame from "@/components/showcase/ScreenFrame";
import { PRODUCT } from "@/lib/content/product";
import type { Locale } from "@/lib/i18n";

function Dot({ gold }: { gold?: boolean }) {
  return <span aria-hidden="true" className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${gold ? "bg-[#e8c08e]" : "bg-white/60"}`} />;
}

/** The product page's story: each stage, what Elliot automates, what the team controls, and the real screen. */
export default function PlatformStory({ locale }: { locale: Locale }) {
  const t = PRODUCT[locale].platform;
  return (
    <section className="section-night py-24 md:py-32">
      <div className="container-content">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} align="center" />
        <div className="mt-20 space-y-24 md:space-y-32">
          {t.chapters.map((c, i) => (
            <article key={c.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className={i % 2 ? "lg:order-2" : ""}>
                <span className="text-gold text-[13px] font-semibold tracking-[0.14em]">0{i + 1}</span>
                <h3 className="mt-3 text-[1.8rem] font-semibold leading-[1.1] tracking-[-0.03em] text-fg md:text-[2.2rem]">{c.title}</h3>
                <p className="mt-4 text-[16px] leading-relaxed text-slate-600">{c.text}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[20px] border border-[#d9a56c]/35 bg-[#d9a56c]/[0.07] p-5">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#f3d4a4]">{t.automatesLabel}</p>
                    <ul className="mt-3 space-y-2">
                      {c.automates.map((x) => (
                        <li key={x} className="flex gap-2.5 text-[14px] leading-snug text-slate-700">
                          <Dot gold />
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[20px] border border-white/15 bg-white/[0.04] p-5">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white/85">{t.controlsLabel}</p>
                    <ul className="mt-3 space-y-2">
                      {c.controls.map((x) => (
                        <li key={x} className="flex gap-2.5 text-[14px] leading-snug text-slate-700">
                          <Dot />
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <ScreenFrame screen={c.screen} alt={c.screenAlt} sizes="(min-width: 1024px) 600px, 100vw" className={i % 2 ? "lg:order-1" : ""} />
            </article>
          ))}
        </div>
        <p className="mx-auto mt-20 max-w-2xl text-center text-[14px] leading-relaxed text-slate-600">{t.roadmap}</p>
      </div>
    </section>
  );
}
