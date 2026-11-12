import SectionHeading from "@/components/sections/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/home/HomeIcon";
import {
  IconSupport,
  IconTarget,
  IconCalendar,
  IconMail,
  IconFollowup,
  IconKnowledge,
  IconHandoff,
  IconDatabase,
  IconAnalytics,
} from "@/components/ui/Icons";
import { PRODUCT, type FeatureIcon } from "@/lib/content/product";
import type { Locale } from "@/lib/i18n";

const LINE: Partial<Record<FeatureIcon, typeof IconSupport>> = {
  support: IconSupport,
  target: IconTarget,
  calendar: IconCalendar,
  mail: IconMail,
  followup: IconFollowup,
  knowledge: IconKnowledge,
  handoff: IconHandoff,
  database: IconDatabase,
  analytics: IconAnalytics,
};

// Product logos where the feature is a product (Gmail, WhatsApp, Google Calendar).
const BRAND: Partial<Record<FeatureIcon, "gmail" | "whatsapp" | "googleCalendar">> = {
  gmail: "gmail",
  whatsapp: "whatsapp",
  googleCalendar: "googleCalendar",
};

export default function FeatureGrid({ locale = "en" }: { locale?: Locale }) {
  const t = PRODUCT[locale].features;
  return (
    <section className="section-light py-24 md:py-32">
      <div className="container-content">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((f) => {
            const Icon = LINE[f.icon];
            const brand = BRAND[f.icon];
            return (
              <Card key={f.title} className="p-7">
                {brand ? (
                  <IconTile name={brand} />
                ) : (
                  Icon && (
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl gold-tile border border-[#d9a56c]/25 bg-[#d9a56c]/[0.08] text-[#e8c08e]">
                      <Icon className="h-5 w-5" />
                    </span>
                  )
                )}
                <h3 className="mt-6 text-[18.5px] font-semibold tracking-[-0.01em] text-fg">{f.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-600">{f.detail}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
