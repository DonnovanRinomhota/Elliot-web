import PageHero from "@/components/sections/PageHero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import NotJustChatbot from "@/components/sections/NotJustChatbot";
import HumanHandoff from "@/components/sections/HumanHandoff";
import Permissions from "@/components/sections/Permissions";
import Integrations from "@/components/sections/Integrations";
import Security from "@/components/sections/Security";
import FinalCTA from "@/components/sections/FinalCTA";
import { PRODUCT } from "@/lib/content/product";
import type { Locale } from "@/lib/i18n";

/** The Product page, the same sections in either language. */
export default function ProductPage({ locale }: { locale: Locale }) {
  const hero = PRODUCT[locale].productHero;
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />
      <FeatureGrid locale={locale} />
      <NotJustChatbot locale={locale} />
      <HumanHandoff locale={locale} />
      <Permissions locale={locale} />
      <Integrations locale={locale} />
      <Security locale={locale} />
      <FinalCTA locale={locale} />
    </>
  );
}
