import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { TERMS } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: { absolute: "Regulamin · Elliot" },
  alternates: { canonical: "/pl/regulamin", languages: { en: "/terms", pl: "/pl/regulamin" } },
};

export default function Page() {
  return <LegalPage doc={TERMS.pl} />;
}
