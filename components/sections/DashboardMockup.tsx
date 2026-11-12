import Image from "next/image";
import SectionHeading from "@/components/sections/SectionHeading";
import { PRODUCT } from "@/lib/content/product";
import type { Locale } from "@/lib/i18n";
import dashboardLaptop from "@/public/images/dashboard-laptop.webp";

// The team's side: a laptop with Elliot's Overview page (brand artwork,
// public/images/dashboard-laptop.webp, background removed). The dashboard is
// in English, so the picture is too.
export default function DashboardMockup({ locale = "en" }: { locale?: Locale }) {
  const t = PRODUCT[locale].dashboard;
  return (
    <section className="section-sky overflow-hidden py-24 md:py-32">
      <div className="container-content">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <div className="relative mx-auto mt-14 max-w-[1080px]">
          <div aria-hidden="true" className="absolute -inset-x-16 -inset-y-6 bg-[radial-gradient(closest-side,rgba(205,225,255,0.35),transparent)]" />
          <Image
            src={dashboardLaptop}
            alt={t.title}
            sizes="(min-width: 1100px) 1080px, 100vw"
            className="relative h-auto w-full drop-shadow-[0_40px_50px_rgba(2,10,30,0.55)]"
          />
          <p className="relative mt-6 text-center text-[13.5px] text-slate-600">{t.caption}</p>
        </div>
      </div>
    </section>
  );
}
