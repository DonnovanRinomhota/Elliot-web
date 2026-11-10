import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import DemoRequestForm from "@/components/DemoRequestForm";

export const metadata: Metadata = {
  title: { absolute: "Kontakt · Elliot" },
  description: "Opowiedz nam o swoim biurze i umów krótką prezentację Elliota skonfigurowanego pod Twoje oferty.",
  alternates: { canonical: "/pl/kontakt", languages: { en: "/contact", pl: "/pl/kontakt" } },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Napisz do nas."
        description="Napisz kilka słów o swoim biurze, a odezwiemy się. Wolisz od razu wybrać termin? Umów rozmowę na stronie rezerwacji."
      />
      <section className="border-b border-surface-line bg-surface pb-24">
        <div className="container-content max-w-2xl">
          <DemoRequestForm locale="pl" />
        </div>
      </section>
    </>
  );
}
