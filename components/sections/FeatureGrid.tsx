import SectionHeading from "@/components/sections/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StatusTag } from "@/components/ui/StatusTag";
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
import { STATUS_LABEL, statusOf } from "@/lib/capabilities";
import type { Locale } from "@/lib/i18n";

const ICONS: Record<FeatureIcon, typeof IconSupport> = {
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

// Anything that isn't live yet carries its status tag (from lib/capabilities.ts).
export default function FeatureGrid({ locale = "en" }: { locale?: Locale }) {
  const t = PRODUCT[locale].features;
  return (
    <section className="border-b border-surface-line bg-surface py-24">
      <div className="container-content">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((f) => {
            const Icon = ICONS[f.icon];
            const status = f.cap ? statusOf(f.cap) : "live";
            return (
              <Card key={f.title} className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <Icon className="h-5 w-5 text-brass-dark dark:text-brass-light" />
                  {status !== "live" && <StatusTag status={status} label={STATUS_LABEL[locale][status]} />}
                </div>
                <h3 className="mt-4 text-[17px] text-fg">{f.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-slate-600">{f.detail}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
