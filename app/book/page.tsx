import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ConsultationBooking from "@/components/book/ConsultationBooking";

export const metadata: Metadata = {
  title: "Book a call",
  description: "Book a free 15-minute intro call or a 30-minute live demo of Elliot on Google Meet. Pick a time that suits you.",
  alternates: { canonical: "/book", languages: { en: "/book", pl: "/pl/rezerwacja" } },
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a call"
        title="See if Elliot fits your agency."
        description="A free call on Google Meet with the team behind Elliot. Pick a quick intro or a full live demo, then a time that suits you."
      />
      <section className="section-light pb-24 pt-14">
        <div className="container-content max-w-3xl">
          <ConsultationBooking locale="en" />
          <p className="mt-8 text-[15px] text-slate-600">
            Rather try it yourself first?{" "}
            <a href="/demo" className="font-medium text-fg underline">
              Open the live demo
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
