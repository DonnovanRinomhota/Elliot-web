import type { Metadata } from "next";
import HowItWorksPage from "@/components/product/HowItWorksPage";
import { PRODUCT } from "@/lib/content/product";

export const metadata: Metadata = {
  title: { absolute: `${PRODUCT.pl.howMeta.title} · Elliot` },
  description: PRODUCT.pl.howMeta.description,
  alternates: { canonical: "/pl/jak-to-dziala", languages: { en: "/how-it-works", pl: "/pl/jak-to-dziala" } },
  openGraph: { locale: "pl_PL", url: "/pl/jak-to-dziala" },
};

export default function Page() {
  return <HowItWorksPage locale="pl" />;
}
