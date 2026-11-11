import type { Metadata } from "next";
import ProductPage from "@/components/product/ProductPage";
import { PRODUCT } from "@/lib/content/product";

export const metadata: Metadata = {
  title: PRODUCT.en.productMeta.title,
  description: PRODUCT.en.productMeta.description,
  alternates: { canonical: "/product", languages: { en: "/product", pl: "/pl/produkt" } },
};

export default function Page() {
  return <ProductPage locale="en" />;
}
