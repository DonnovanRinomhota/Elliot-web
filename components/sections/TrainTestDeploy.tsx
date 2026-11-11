import SectionHeading from "@/components/sections/SectionHeading";
import { PRODUCT } from "@/lib/content/product";
import type { Locale } from "@/lib/i18n";

// What actually happens before and after an agency goes live. No claims about
// automated scenario testing or statistics the dashboard doesn't have.
export default function TrainTestDeploy({ locale = "en" }: { locale?: Locale }) {
  const t = PRODUCT[locale].lifecycle;
  return (
    <section className="border-b border-surface-line bg-surface py-24">
      <div className="container-content">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="reveal mt-14 grid gap-4 md:grid-cols-4">
          {t.stages.map((s, i) => (
            <div key={s.title} className="rounded-lg border border-surface-line bg-card p-6">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink font-mono text-xs text-white">
                {`0${i + 1}`}
              </span>
              <h3 className="mt-4 font-display text-xl text-fg">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{s.detail}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-6 rounded-lg border border-ink bg-ink p-6 text-[13.5px] text-paper/80">
          <p className="text-paper/50">{t.exampleLabel}</p>
          <dl className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-[10rem_1fr]">
            {t.example.map((row) => (
              <div key={row.label} className="contents">
                <dt className="font-medium text-brass-light">{row.label}</dt>
                <dd className="text-paper/90">{row.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
