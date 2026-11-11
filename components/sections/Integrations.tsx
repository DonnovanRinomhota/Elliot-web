import SectionHeading from "@/components/sections/SectionHeading";
import { StatusTag } from "@/components/ui/StatusTag";
import { PRODUCT } from "@/lib/content/product";
import { STATUS_LABEL, statusOf } from "@/lib/capabilities";
import type { Locale } from "@/lib/i18n";

// Where each connection stands comes from lib/capabilities.ts, the same
// source the homepage uses.
export default function Integrations({ locale = "en" }: { locale?: Locale }) {
  const t = PRODUCT[locale].integrations;
  return (
    <section className="border-b border-surface-line bg-surface-dim py-24">
      <div className="container-content">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((i) => (
            <div
              key={i.name}
              className="flex items-center justify-between gap-3 rounded-md border border-surface-line bg-card px-4 py-3.5"
            >
              <span className="text-[14px] text-fg">{i.name}</span>
              <StatusTag status={statusOf(i.cap)} label={STATUS_LABEL[locale][statusOf(i.cap)]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
