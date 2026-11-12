"use client";

import { ButtonLink } from "@/components/ui/Button";
import { ElliotMark } from "@/components/ElliotLogoArt";
import LaptopOverview from "@/components/home/LaptopOverview";
import { HomeIcon } from "@/components/home/HomeIcon";
import type { IconName } from "@/lib/content/home";

type HeroText = {
  eyebrow: string;
  title: [string, string, string];
  lead: string;
  primary: string;
  secondary: string;
  cards: { title: string; text: string; icon: IconName }[];
  strip: { title: string; text: string; icon: IconName }[];
};

// Glass towers behind the laptop: [left %, width %, top %, brightness].
const TOWERS: [number, number, number, number][] = [
  [47, 6, 40, 0.45],
  [52, 8, 26, 0.7],
  [61, 5, 44, 0.4],
  [65, 9, 12, 0.85],
  [74, 6, 30, 0.55],
  [79, 10, 6, 1],
  [89, 7, 24, 0.7],
  [95.5, 7, 38, 0.5],
];

function GlassCard({ c, className, wide }: { c: { title: string; text: string; icon: IconName }; className: string; wide?: boolean }) {
  // `wide`: only on screens with room for it beside the others.
  return (
    <div className={`glass absolute hidden w-[210px] rounded-2xl p-4 text-white ${wide ? "xl:block" : "lg:block"} ${className}`}>
      <span className="text-[#bcd3ff] drop-shadow-[0_0_8px_rgba(120,170,255,0.8)]">
        <HomeIcon name={c.icon} className="h-8 w-8" />
      </span>
      <p className="mt-2.5 text-[15px] font-semibold">{c.title}</p>
      <p className="mt-1 text-[12.5px] leading-snug text-white/75">{c.text}</p>
    </div>
  );
}

export default function Hero({ t, bookHref, howHref }: { t: HeroText; bookHref: string; howHref: string }) {
  return (
    <section className="relative overflow-hidden">
      {/* Sky: deep navy at the top left, bright glass to the right, a pale floor. */}
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,#06132b_0%,#102a50_30%,#25497c_55%,#5f84b4_70%,#c3d1e2_82%,#e9eef5_100%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(800px_520px_at_80%_30%,rgba(196,222,255,0.5),transparent_62%),radial-gradient(900px_700px_at_0%_20%,rgba(4,12,30,0.9),transparent_70%)]"
      />
      {/* Towers */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 hidden h-[74%] [mask-image:linear-gradient(180deg,transparent_0%,#000_30%,#000_100%)] md:block">
        {TOWERS.map(([l, w, top, b], i) => (
          <div
            key={i}
            className="absolute bottom-0 border-l border-white/50"
            style={{
              left: `${l}%`,
              width: `${w}%`,
              top: `${top}%`,
              background: `linear-gradient(100deg, rgba(235,244,255,${0.26 * b}) 0%, rgba(170,200,240,${0.12 * b}) 40%, rgba(235,244,255,${0.2 * b}) 100%)`,
              boxShadow: `inset 1px 0 0 rgba(255,255,255,${0.5 * b}), inset -1px 0 0 rgba(255,255,255,${0.15 * b})`,
            }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-white/70" />
            {/* light seams */}
            <div className="absolute bottom-0 top-[8%] left-[38%] w-px bg-gradient-to-b from-white/0 via-white/60 to-white/0 shadow-[0_0_10px_2px_rgba(255,236,200,0.45)]" />
          </div>
        ))}
      </div>
      {/* Floor reflection */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[22%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(236,241,248,0.9)_45%,#edf1f7_100%)]" />

      <div className="container-content relative pt-28 md:pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          {/* Words */}
          <div className="relative z-10 pb-4">
            <p className="eyebrow text-white/90">{t.eyebrow}</p>
            <h1 className="mt-7 text-[2.7rem] font-medium leading-[1.06] tracking-[-0.04em] text-white sm:text-[3.5rem] lg:whitespace-nowrap lg:text-[3.6rem] xl:text-[4.25rem]">
              <span className="block">{t.title[0]}</span>
              <span className="block">{t.title[1]}</span>
              <span className="text-gold block pb-1">{t.title[2]}</span>
            </h1>
            <p className="mt-7 max-w-[30rem] text-[17.5px] leading-relaxed text-white/85 md:text-[19px]">{t.lead}</p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <ButtonLink href={bookHref} size="lg" arrow>
                {t.primary}
              </ButtonLink>
              <a href={howHref} className="group inline-flex items-center gap-3 text-[16px] font-medium text-white">
                {t.secondary}
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 transition-colors group-hover:bg-white/10">
                  <svg viewBox="0 0 20 20" className="ml-0.5 h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                    <path d="M6 4.5v11l9-5.5z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Scene */}
          <div className="relative mx-auto w-full max-w-[780px] pb-8 lg:-mr-[6%] lg:pb-12 lg:pt-36">
            <GlassCard c={t.cards[2]} className="-left-[4%] top-[20%] z-20 !w-[172px]" />
            <GlassCard c={t.cards[0]} className="left-[40%] top-[1%] z-20 !w-[236px] xl:left-[34%]" />
            <GlassCard c={t.cards[1]} className="right-0 top-[10%] z-20 !w-[168px]" wide />

            <div className="relative z-10 ml-auto w-[80%] lg:mt-8">
              <LaptopOverview label={t.cards[0].title} />
            </div>

            {/* Orb on a stone block */}
            <div aria-hidden="true" className="absolute -left-[6%] bottom-[2%] z-20 hidden md:block lg:bottom-[6%]">
              <div className="relative h-24 w-24">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,#9fc0ff_0%,#2a5bd7_30%,#0a1d4a_70%,#050d22_100%)] shadow-[0_0_40px_8px_rgba(70,130,255,0.45),inset_0_-10px_30px_rgba(0,0,0,0.6)] ring-1 ring-white/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ElliotMark size={40} className="drop-shadow-[0_0_10px_rgba(255,220,170,0.9)]" />
                </div>
                <div className="absolute left-[18%] top-[12%] h-6 w-10 rounded-full bg-white/40 blur-[6px]" />
              </div>
              <div className="mx-auto -mt-2 h-8 w-36 -translate-x-2 rounded-[4px] bg-gradient-to-b from-[#c6ccd5] to-[#7f8794] shadow-[0_18px_30px_-12px_rgba(0,0,0,0.6)]" />
            </div>

            {/* Stone platform under the laptop */}
            <div
              aria-hidden="true"
              className="absolute -bottom-0 left-[8%] right-[-8%] h-[18%] rounded-[6px] bg-gradient-to-b from-[#d9dee6] via-[#aab2be] to-[#8c95a3] shadow-[0_30px_60px_-20px_rgba(10,25,50,0.6)] [clip-path:polygon(4%_0,100%_0,100%_100%,0_100%)] lg:bottom-6"
            />
          </div>
        </div>

        {/* What you get, on the pale floor */}
        <ul className="relative z-10 mt-6 grid gap-8 pb-14 pt-6 sm:grid-cols-2 lg:mt-0 lg:grid-cols-4 lg:gap-0">
          {t.strip.map((s, i) => (
            <li key={s.title} className={`flex gap-4 lg:px-8 ${i > 0 ? "lg:border-l lg:border-[#0f1f38]/15" : "lg:pl-0"}`}>
              <span className="text-[#b98048]">
                <HomeIcon name={s.icon} className="h-9 w-9" />
              </span>
              <span>
                <span className="block text-[17px] font-semibold text-[#0f1f38]">{s.title}</span>
                <span className="mt-1 block text-[14.5px] leading-snug text-[#48586f]">{s.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
