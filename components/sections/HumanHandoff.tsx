import SectionHeading from "@/components/sections/SectionHeading";
import { Card } from "@/components/ui/Card";
import { PRODUCT } from "@/lib/content/product";
import type { Locale } from "@/lib/i18n";

export default function HumanHandoff({ locale = "en" }: { locale?: Locale }) {
  const t = PRODUCT[locale].handoff;
  return (
    <section className="border-b border-surface-line bg-surface-dim py-24">
      <div className="container-content reveal grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
          <div className="mt-8 flex max-w-sm flex-col gap-3">
            <div className="flex items-center gap-3 rounded-md border border-surface-line bg-card px-4 py-3 transition-all duration-300 hover:shadow-card">
              <span className="h-2 w-2 rounded-full bg-pulse animate-pulseDot" />
              <span className="text-sm text-fg">{t.simple}</span>
            </div>
            <div className="flex items-center gap-3 rounded-md border border-surface-line bg-card px-4 py-3 transition-all duration-300 hover:shadow-card">
              <span className="h-2 w-2 rounded-full bg-amber" />
              <span className="text-sm text-fg">{t.complex}</span>
            </div>
          </div>
        </div>

        <div>
          <Card className="p-6">
            <p className="text-xs font-mono text-slate-400">{t.cardLabel}</p>
            <div className="mt-4 space-y-4">
              {t.rows.map((row) => (
                <div key={row.label} className="-mx-2 rounded-md px-2 py-1 transition-colors duration-200">
                  <p className="text-[13px] font-medium text-slate-500">{row.label}</p>
                  <p className="text-[14px] text-fg">{row.value}</p>
                </div>
              ))}
            </div>
          </Card>
          <p className="mt-3 text-xs text-slate-600">{t.note}</p>
        </div>
      </div>
    </section>
  );
}
