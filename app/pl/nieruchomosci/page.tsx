import type { Metadata } from "next";
import RealEstatePage from "@/components/realestate/RealEstatePage";

export const metadata: Metadata = {
  title: { absolute: "Asystent AI dla biur nieruchomości · Elliot" },
  description:
    "Elliot odpowiada na zapytania o nieruchomości, kwalifikuje kupujących i najemców, umawia prezentacje w Twoim kalendarzu i przekazuje klientów do CRM.",
  alternates: {
    canonical: "/pl/nieruchomosci",
    languages: { en: "/industries/real-estate", pl: "/pl/nieruchomosci" },
  },
};

export default function Page() {
  return <RealEstatePage locale="pl" />;
}
