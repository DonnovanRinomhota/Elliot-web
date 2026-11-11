import type { Metadata } from "next";
import HowItWorksPage from "@/components/product/HowItWorksPage";
import { PRODUCT } from "@/lib/content/product";

export const metadata: Metadata = {
  title: PRODUCT.en.howMeta.title,
  description: PRODUCT.en.howMeta.description,
  alternates: { canonical: "/how-it-works", languages: { en: "/how-it-works", pl: "/pl/jak-to-dziala" } },
};

export default function Page() {
  return <HowItWorksPage locale="en" />;
}
