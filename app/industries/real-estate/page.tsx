import type { Metadata } from "next";
import RealEstatePage from "@/components/realestate/RealEstatePage";

export const metadata: Metadata = {
  title: "For real estate agencies: sales and rentals",
  description:
    "For residential sales and rentals: Elliot answers buyers, renters, sellers and landlords, matches your listings, books viewings and valuations with your agents and sends leads to your CRM.",
  alternates: {
    canonical: "/industries/real-estate",
    languages: { en: "/industries/real-estate", pl: "/pl/nieruchomosci" },
  },
};

export default function Page() {
  return <RealEstatePage locale="en" />;
}
