import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import LiveDemo from "@/components/demo/LiveDemo";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: { absolute: "Demo na żywo · Elliot" },
  description: "Porozmawiaj z Elliotem przykładowego biura nieruchomości jako kupujący: oferty, pytania i umówienie prezentacji.",
  alternates: { canonical: "/pl/demo", languages: { en: "/demo", pl: "/pl/demo" } },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Demo na żywo"
        title="Zobacz Elliota w akcji."
        description="Wciel się w klienta przykładowego biura z Warszawy. Zapytaj o mieszkania, porównaj oferty i umów prezentację, tak jak zrobiliby to Twoi klienci."
      />
      <section className="section-light pb-24 pt-14">
        <div className="container-content">
          <LiveDemo locale="pl" />
          <div className="mt-14 panel rounded-[24px] p-8 text-center">
            <h2 className="font-display text-xl text-fg">Chcesz to samo dla swojego biura?</h2>
            <p className="mx-auto mt-2 max-w-md text-[14.5px] text-slate-600">
              Umów bezpłatną rozmowę, a pokażemy Elliota skonfigurowanego z Twoimi ofertami.
            </p>
            <div className="mt-6">
              <ButtonLink href="/pl/rezerwacja" variant="primary">
                Umów rozmowę
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
