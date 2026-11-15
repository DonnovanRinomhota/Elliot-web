"use client";

import { useState } from "react";
import ScreenFrame from "@/components/showcase/ScreenFrame";
import { SCREENS } from "@/lib/content/screens";
import type { Locale } from "@/lib/i18n";

// The product, shown with five real dashboard screens. Tabs choose the
// screen; on phones they scroll sideways.
export default function ProductShowcase({ locale, eyebrow, title, lead, id, sectionClass = "section-night" }: { locale: Locale; eyebrow: string; title: string; lead: string; id?: string; sectionClass?: string }) {
  const t = SCREENS[locale];
  const [active, setActive] = useState(0);
  const s = t.items[active];
  return (
    <section id={id} className={`${sectionClass} scroll-mt-24 py-24 md:py-32`}>
      <div className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow eyebrow-center text-slate-600">{eyebrow}</p>
          <h2 className="mt-5 text-[2.3rem] font-semibold leading-[1.06] tracking-[-0.035em] text-fg md:text-[3.2rem]">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-slate-600">{lead}</p>
        </div>

        <div role="tablist" aria-label={eyebrow} className="-mx-6 mt-12 flex gap-2 overflow-x-auto px-6 pb-1 md:mx-0 md:justify-center md:px-0">
          {t.items.map((item, i) => (
            <button
              key={item.key}
              type="button"
              role="tab"
              id={`screen-tab-${item.key}`}
              aria-selected={i === active}
              aria-controls="screen-panel"
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full border px-4 py-2 text-[14px] font-medium transition-colors ${
                i === active ? "border-transparent bg-gold text-[#0b1426]" : "border-white/15 bg-white/[0.04] text-white/80 hover:bg-white/[0.09] hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div id="screen-panel" role="tabpanel" aria-labelledby={`screen-tab-${s.key}`} className="mt-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-fg">{s.title}</h3>
            <p className="mt-2 text-[15.5px] leading-relaxed text-slate-600">{s.text}</p>
          </div>
          <ScreenFrame key={s.key} screen={s.key} alt={s.alt} className="screen-in mx-auto mt-8 max-w-[1100px]" />
          <p className="mt-4 text-center text-[13px] text-slate-400">{t.note}</p>
        </div>
      </div>
    </section>
  );
}
