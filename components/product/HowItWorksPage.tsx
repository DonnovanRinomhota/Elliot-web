import PageHero from "@/components/sections/PageHero";
import HowItWorks from "@/components/sections/HowItWorks";
import TrainTestDeploy from "@/components/sections/TrainTestDeploy";
import DashboardMockup from "@/components/sections/DashboardMockup";
import FinalCTA from "@/components/sections/FinalCTA";
import { PRODUCT } from "@/lib/content/product";
import type { Locale } from "@/lib/i18n";

/** The How-it-works page, the same sections in either language. */
export default function HowItWorksPage({ locale }: { locale: Locale }) {
  const hero = PRODUCT[locale].howHero;
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />
      <HowItWorks locale={locale} />
      <TrainTestDeploy locale={locale} />
      <DashboardMockup locale={locale} />
      <FinalCTA locale={locale} />
    </>
  );
}
