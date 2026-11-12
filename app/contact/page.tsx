import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import DemoRequestForm from "@/components/DemoRequestForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your agency and we'll get back to you. To pick a time straight away, use the booking page.",
  alternates: { canonical: "/contact", languages: { en: "/contact", pl: "/pl/kontakt" } },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Write to us."
        description="Tell us a little about your agency and we'll get back to you. Prefer to pick a time yourself? Book a call on the booking page."
      />
      <section className="section-light pb-24 pt-14">
        <div className="container-content max-w-2xl">
          <DemoRequestForm />
        </div>
      </section>
    </>
  );
}
