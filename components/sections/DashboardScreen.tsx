import SectionHeading from "@/components/sections/SectionHeading";
import ScreenFrame from "@/components/showcase/ScreenFrame";
import { PRODUCT } from "@/lib/content/product";
import type { Locale } from "@/lib/i18n";

// The team's side, as a real screenshot of the dashboard (sample data).
// The dashboard is in English, so the picture is too.
export default function DashboardScreen({ locale = "en" }: { locale?: Locale }) {
  const t = PRODUCT[locale].dashboard;
  return (
    <section className="section-sky overflow-hidden py-24 md:py-32">
      <div className="container-content">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} align="center" />
        <div className="mx-auto mt-14 max-w-[1100px]">
          <ScreenFrame screen="overview" alt={t.screenAlt} />
          <p className="mt-6 text-center text-[13.5px] text-slate-600">{t.caption}</p>
        </div>
      </div>
    </section>
  );
}
