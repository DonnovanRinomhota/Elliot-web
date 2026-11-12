import SectionHeading from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/Card";
import { PRODUCT } from "@/lib/content/product";
import type { Locale } from "@/lib/i18n";

export default function Permissions({ locale = "en" }: { locale?: Locale }) {
  const t = PRODUCT[locale].permissions;
  return (
    <section className="bg-night py-24 md:py-32">
      <div className="container-content">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.columns.map((col) => (
            <div key={col.title} className="panel rounded-[24px] p-6">
              <p className="text-sm font-semibold text-fg">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-center justify-between gap-3 text-[14.5px] text-slate-700">
                    <span>{item}</span>
                    <Badge tone={col.tone}>{col.tag}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
