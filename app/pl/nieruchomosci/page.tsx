import type { Metadata } from "next";
import RealEstatePage from "@/components/realestate/RealEstatePage";

export const metadata: Metadata = {
  title: { absolute: "Dla biur nieruchomości: sprzedaż i wynajem · Elliot" },
  description:
    "Dla sprzedaży i wynajmu: Elliot odpowiada kupującym, najemcom, sprzedającym i wynajmującym, dopasowuje oferty, umawia prezentacje i wyceny z agentami i przekazuje klientów do CRM.",
  alternates: {
    canonical: "/pl/nieruchomosci",
    languages: { en: "/industries/real-estate", pl: "/pl/nieruchomosci" },
  },
};

export default function Page() {
  return <RealEstatePage locale="pl" />;
}
