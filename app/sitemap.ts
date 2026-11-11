import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { PAGE_TWINS } from "@/lib/i18n";

// Every page exists in both languages; the list lives in lib/i18n.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGE_TWINS.flatMap(([en, pl]) => {
    const languages = { en: `${SITE_URL}${en === "/" ? "" : en}`, pl: `${SITE_URL}${pl}` };
    return [languages.en, languages.pl].map((url) => ({
      url,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: en === "/" ? 1 : 0.7,
      alternates: { languages },
    }));
  });
}
