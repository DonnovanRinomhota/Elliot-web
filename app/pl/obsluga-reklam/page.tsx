import type { Metadata } from "next";
import AdvertisingPage from "@/components/advertising/AdvertisingPage";
import { ADVERTISING } from "@/lib/content/advertising";

export const metadata: Metadata = {
  title: { absolute: `${ADVERTISING.pl.meta.title} · Elliot` },
  description: ADVERTISING.pl.meta.description,
  alternates: {
    canonical: "/pl/obsluga-reklam",
    languages: { en: "/managed-advertising", pl: "/pl/obsluga-reklam" },
  },
  openGraph: { locale: "pl_PL", url: "/pl/obsluga-reklam" },
};

export default function Page() {
  return <AdvertisingPage locale="pl" />;
}
