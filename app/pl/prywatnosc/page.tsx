import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { PRIVACY } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: { absolute: "Polityka prywatności · Elliot" },
  alternates: { canonical: "/pl/prywatnosc", languages: { en: "/privacy", pl: "/pl/prywatnosc" } },
};

export default function Page() {
  return <LegalPage doc={PRIVACY.pl} />;
}
