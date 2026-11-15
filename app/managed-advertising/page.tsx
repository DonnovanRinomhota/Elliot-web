import type { Metadata } from "next";
import AdvertisingPage from "@/components/advertising/AdvertisingPage";
import { ADVERTISING } from "@/lib/content/advertising";

export const metadata: Metadata = {
  title: ADVERTISING.en.meta.title,
  description: ADVERTISING.en.meta.description,
  alternates: {
    canonical: "/managed-advertising",
    languages: { en: "/managed-advertising", pl: "/pl/obsluga-reklam" },
  },
};

export default function Page() {
  return <AdvertisingPage locale="en" />;
}
