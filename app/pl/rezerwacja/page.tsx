import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ConsultationBooking from "@/components/book/ConsultationBooking";

export const metadata: Metadata = {
  title: { absolute: "Umów rozmowę · Elliot" },
  description: "Umów bezpłatną 15-minutową rozmowę wstępną lub 30-minutową prezentację Elliota na żywo przez Google Meet.",
  alternates: { canonical: "/pl/rezerwacja", languages: { en: "/book", pl: "/pl/rezerwacja" } },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Umów rozmowę"
        title="Sprawdź, czy Elliot pasuje do Twojego biura."
        description="Bezpłatna rozmowa przez Google Meet z zespołem, który tworzy Elliota. Wybierz krótką rozmowę lub pełną prezentację, a potem dogodny termin."
      />
      <section className="section-light pb-24 pt-14">
        <div className="container-content max-w-3xl">
          <ConsultationBooking locale="pl" />
          <p className="mt-8 text-[15px] text-slate-600">
            Wolisz najpierw sam wypróbować?{" "}
            <a href="/pl/demo" className="font-medium text-fg underline">
              Otwórz demo na żywo
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
