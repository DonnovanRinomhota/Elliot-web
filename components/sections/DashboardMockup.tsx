import SectionHeading from "@/components/sections/SectionHeading";
import LaptopOverview from "@/components/home/LaptopOverview";
import { PRODUCT } from "@/lib/content/product";
import type { Locale } from "@/lib/i18n";

// The team's side: the same laptop and Overview page as the homepage. The
// dashboard is in English, so the picture is too.
export default function DashboardMockup({ locale = "en" }: { locale?: Locale }) {
  const t = PRODUCT[locale].dashboard;
  return (
    <section className="section-sky overflow-hidden py-24 md:py-32">
      <div className="container-content">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <div className="relative mx-auto mt-16 max-w-[980px]">
          <div aria-hidden="true" className="absolute -inset-x-20 -inset-y-10 bg-[radial-gradient(closest-side,rgba(110,155,255,0.22),transparent)]" />
          <div className="relative">
            <LaptopOverview label={t.title} />
          </div>
          <p className="relative mt-8 text-center text-[13.5px] text-slate-600">{t.caption}</p>
        </div>
      </div>
    </section>
  );
}
