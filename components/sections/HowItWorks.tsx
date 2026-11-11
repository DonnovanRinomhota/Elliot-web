import SectionHeading from "@/components/sections/SectionHeading";
import { PRODUCT } from "@/lib/content/product";
import type { Locale } from "@/lib/i18n";

export default function HowItWorks({ locale = "en" }: { locale?: Locale }) {
  const t = PRODUCT[locale].steps;
  const steps = t.items.map((item, i) => ({ ...item, n: `0${i + 1}` }));
  return (
    <section className="border-b border-surface-line bg-surface py-24">
      <div className="container-content reveal">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="group relative rounded-lg p-2 -m-2">
              <p className="inline-block font-mono text-sm font-semibold text-brass-dark dark:text-brass-light">
                {s.n}
              </p>
              <h3 className="mt-3 font-display text-xl text-fg transition-colors duration-300 group-hover:text-violet-700">
                {s.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600">{s.detail}</p>
              {i < steps.length - 1 && (
                <span className="absolute -right-4 top-3 hidden text-slate-200 transition-transform duration-300 group-hover:translate-x-1 lg:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
