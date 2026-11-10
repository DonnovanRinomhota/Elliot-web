import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: { absolute: "Elliot: asystent AI dla biur nieruchomości" },
  description:
    "Elliot odpowiada na zapytania o nieruchomości na Twojej stronie, w WhatsAppie i e-mailu, kwalifikuje kupujących i najemców, umawia prezentacje w Twoim kalendarzu i przekazuje rozmowę zespołowi, gdy trzeba.",
  alternates: { canonical: "/pl", languages: { en: "/", pl: "/pl" } },
  openGraph: {
    title: "Elliot: asystent AI dla biur nieruchomości",
    description: "Odpowiada na zapytania, kwalifikuje klientów i umawia prezentacje, o każdej porze.",
    locale: "pl_PL",
    url: "/pl",
  },
};

export default function Page() {
  return <HomePage locale="pl" />;
}
