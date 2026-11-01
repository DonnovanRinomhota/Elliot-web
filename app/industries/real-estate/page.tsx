import type { Metadata } from "next";
import RealEstatePage from "@/components/realestate/RealEstatePage";

export const metadata: Metadata = {
  title: "AI assistant for estate agencies",
  description:
    "Elliot answers property enquiries, qualifies buyers and renters, books viewings into your calendar and sends leads to your CRM.",
  alternates: {
    canonical: "/industries/real-estate",
    languages: { en: "/industries/real-estate", pl: "/pl/nieruchomosci" },
  },
};

export default function Page() {
  return <RealEstatePage locale="en" />;
}
