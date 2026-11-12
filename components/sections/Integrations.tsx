import SectionHeading from "@/components/sections/SectionHeading";
import ToolsGraphic from "@/components/sections/ToolsGraphic";
import { PRODUCT } from "@/lib/content/product";
import { HOME } from "@/lib/content/home";
import type { Locale } from "@/lib/i18n";

// The same connected-tools picture as the homepage (one list: lib/content/home.ts).
export default function Integrations({ locale = "en" }: { locale?: Locale }) {
  const t = PRODUCT[locale].integrations;
  return (
    <section className="section-light py-24 md:py-32">
      <div className="container-content">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <ToolsGraphic t={HOME[locale].tools} />
      </div>
    </section>
  );
}
