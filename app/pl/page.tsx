import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import { withStatus } from "@/lib/capabilities";

export const metadata: Metadata = {
  title: { absolute: "Elliot: obsługa sprzedaży dla biur nieruchomości" },
  description: withStatus(
    "Elliot prowadzi każde zapytanie o nieruchomość: odpowiada na Twojej stronie, w e-mailu i na WhatsAppie[[whatsapp]], kwalifikuje kupujących i najemców, dopasowuje oferty, umawia prezentacje i przekazuje klienta agentom.",
    "pl",
  ),
  alternates: { canonical: "/pl", languages: { en: "/", pl: "/pl" } },
  openGraph: {
    title: "Elliot: żadne zapytanie o nieruchomość nie utknie",
    description: "Obsługa sprzedaży dla biur nieruchomości. AI przejmuje pracę operacyjną, a agenci zamykają transakcje.",
    locale: "pl_PL",
    url: "/pl",
  },
};

export default function Page() {
  return <HomePage locale="pl" />;
}
