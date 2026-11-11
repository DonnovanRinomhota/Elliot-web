import type { Metadata } from "next";
import ProductPage from "@/components/product/ProductPage";
import { PRODUCT } from "@/lib/content/product";

export const metadata: Metadata = {
  title: { absolute: `${PRODUCT.pl.productMeta.title} · Elliot` },
  description: PRODUCT.pl.productMeta.description,
  alternates: { canonical: "/pl/produkt", languages: { en: "/product", pl: "/pl/produkt" } },
  openGraph: { locale: "pl_PL", url: "/pl/produkt" },
};

export default function Page() {
  return <ProductPage locale="pl" />;
}
