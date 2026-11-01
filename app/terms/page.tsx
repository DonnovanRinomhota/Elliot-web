import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { TERMS } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: "Terms of use",
  alternates: { canonical: "/terms", languages: { en: "/terms", pl: "/pl/regulamin" } },
};

export default function Page() {
  return <LegalPage doc={TERMS.en} />;
}
