import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { PRIVACY } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: "Privacy policy",
  alternates: { canonical: "/privacy", languages: { en: "/privacy", pl: "/pl/prywatnosc" } },
};

export default function Page() {
  return <LegalPage doc={PRIVACY.en} />;
}
