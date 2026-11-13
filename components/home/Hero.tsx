"use client";

import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { HomeIcon } from "@/components/home/HomeIcon";
import type { IconName } from "@/lib/content/home";
import heroScene from "@/public/images/hero-scene.webp";

type HeroText = {
  eyebrow: string;
  title: [string, string, string];
  lead: string;
  primary: string;
  secondary: string;
  sceneAlt: string;
  floating: { title: string; text: string; icon: IconName }[];
  strip: { title: string; text: string; icon: IconName }[];
};

// The scene (laptop with Elliot's Overview and the orb) is the brand artwork,
// cut from the reference image (public/images/hero-scene.webp). Its edges fade
// into a sky drawn here, so the words and buttons are real text. The three
// glass cards float over it as real text too, so they're translated and move.
const SCENE_MASK = {
  WebkitMaskImage:
    "linear-gradient(90deg, transparent 0%, #000 12%), linear-gradient(180deg, transparent 0%, #000 8%, #000 86%, transparent 100%)",
  WebkitMaskComposite: "source-in",
  maskImage:
    "linear-gradient(90deg, transparent 0%, #000 12%), linear-gradient(180deg, transparent 0%, #000 8%, #000 86%, transparent 100%)",
  maskComposite: "intersect",
} as const;

// Where each card sits on the picture (as a share of its width and height)
// and how it floats: the same places as in the original artwork.
const CARDS = [
  { left: "5.5%", top: "15%", width: "17.5%", float: "hero-float-a", delay: "0.15s" },
  { left: "50.7%", top: "3%", width: "26.5%", float: "hero-float-b", delay: "0.35s" },
  { left: "81.6%", top: "12.3%", width: "15.5%", float: "hero-float-c", delay: "0.55s" },
];

/** The artwork with the glass cards over it. Sizes follow the picture's width. */
function Scene({ cards, sizes, alt, priority = false, mask }: { cards: HeroText["floating"]; sizes: string; alt: string; priority?: boolean; mask?: React.CSSProperties }) {
  return (
    <div className="relative [container-type:inline-size]" style={mask}>
      <Image src={heroScene} alt={alt} priority={priority} sizes={sizes} className="h-auto w-full" />
      {cards.map((c, i) => (
        <div
          key={c.title}
          aria-hidden="true"
          className="hero-card-in absolute"
          style={{ left: CARDS[i].left, top: CARDS[i].top, width: CARDS[i].width, animationDelay: CARDS[i].delay }}
        >
          <div className={`${CARDS[i].float} rounded-[1.4cqw] border border-white/60 bg-[linear-gradient(145deg,rgba(255,255,255,0.62),rgba(225,236,252,0.34))] p-[1.5cqw] shadow-[0_1.6cqw_3.2cqw_-1.2cqw_rgba(8,30,70,0.55),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-md`}>
            <div className={i === 1 ? "flex items-center gap-[1.3cqw]" : ""}>
              <span className="flex h-[4.2cqw] w-[4.2cqw] shrink-0 items-center justify-center rounded-[1cqw] bg-[#0b2a66]/[0.08] text-[#2f6bff] shadow-[0_0_1.6cqw_rgba(47,107,255,0.45)] ring-1 ring-[#2f6bff]/40">
                <HomeIcon name={c.icon} className="h-[2.6cqw] w-[2.6cqw]" />
              </span>
              <div className={i === 1 ? "min-w-0" : "mt-[1.1cqw]"}>
                <p className="m-0 text-[1.9cqw] font-semibold leading-tight tracking-[-0.01em] text-[#0f1f38]">{c.title}</p>
                <p className="m-0 mt-[0.4cqw] text-[1.38cqw] leading-snug text-[#33476a]">{c.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero({ t, bookHref, howHref }: { t: HeroText; bookHref: string; howHref: string }) {
  return (
    <section className="relative overflow-hidden">
      {/* Sky: navy behind the words, pale blue light towards the scene, a white floor. */}
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,#03183a_0%,#0b2851_34%,#3d649b_58%,#a9bfdd_72%,#e3eaf5_82%,#f2f5fa_100%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(1100px_700px_at_82%_30%,rgba(180,206,240,0.75),transparent_62%),radial-gradient(900px_700px_at_0%_15%,rgba(2,16,40,0.9),transparent_65%)]"
      />

      {/* The scene, to the right edge of the window (desktop). */}
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-[96px] hidden w-[50vw] max-w-[1180px] lg:block xl:top-[88px] xl:w-[54vw]">
        <Scene cards={t.floating} alt="" priority sizes="(min-width: 1280px) 54vw, 50vw" mask={SCENE_MASK} />
      </div>

      <div className="container-content relative pt-32 md:pt-40">
        <div className="max-w-[36rem] pb-6 lg:min-h-[500px] lg:pb-4">
          <p className="eyebrow text-white/90">{t.eyebrow}</p>
          <h1 className="mt-7 text-[2.7rem] font-medium leading-[1.06] tracking-[-0.04em] text-white sm:text-[3.5rem] lg:whitespace-nowrap lg:text-[3.3rem] xl:text-[3.9rem]">
            <span className="block">{t.title[0]}</span>
            <span className="block">{t.title[1]}</span>
            <span className="text-gold block pb-1">{t.title[2]}</span>
          </h1>
          <p className="mt-7 max-w-[30rem] text-[17.5px] leading-relaxed text-white/90 md:text-[19px]">{t.lead}</p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <ButtonLink href={bookHref} size="lg" arrow>
              {t.primary}
            </ButtonLink>
            <a href={howHref} className="group inline-flex items-center gap-3 rounded-full bg-[#071a3a]/45 py-1.5 pl-5 pr-1.5 text-[16px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-[#071a3a]/60">
              {t.secondary}
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/10">
                <svg viewBox="0 0 20 20" className="ml-0.5 h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M6 4.5v11l9-5.5z" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* The scene under the words (phones and tablets). */}
        <div className="-mx-6 mt-10 md:-mx-10 lg:hidden">
          <Scene
            cards={t.floating}
            alt={t.sceneAlt}
            sizes="100vw"
            mask={{ WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 10%, #000 85%, transparent 100%)", maskImage: "linear-gradient(180deg, transparent 0%, #000 10%, #000 85%, transparent 100%)" }}
          />
        </div>
        <span className="sr-only">{t.sceneAlt}</span>

        {/* What you get, on the pale floor */}
        <ul className="relative z-10 grid gap-8 pb-16 pt-8 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4 lg:gap-0 xl:mt-10">
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
