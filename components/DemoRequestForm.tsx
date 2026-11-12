"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { submitDemoRequest } from "@/services/elliotApi";
import type { Locale } from "@/lib/i18n";

// Option values stay in English so submissions look the same in n8n
// whichever language the visitor used; only the labels are translated.
const industries: { value: string; en: string; pl: string }[] = [
  { value: "Real Estate", en: "Real estate", pl: "Nieruchomości" },
  { value: "Property Management", en: "Property management", pl: "Zarządzanie nieruchomościami" },
  { value: "Other", en: "Other", pl: "Inna" },
];

const employeeRanges = ["1–10", "11–50", "51–200", "200+"];

const T = {
  en: {
    name: "Name",
    company: "Company",
    email: "Email",
    website: "Website",
    industry: "Industry",
    industryPh: "Select an industry",
    employees: "Number of employees",
    employeesPh: "Select a range",
    automate: "What would you like Elliot to handle?",
    automatePh: "e.g. answering property enquiries and booking viewings",
    submit: "Book a demo",
    sending: "Sending…",
    error: "Something went wrong. Please try again in a few minutes, or leave a message in the chat.",
    doneTitle: "Request received.",
    doneText: "Donnovan will get back to you shortly to arrange your demo.",
    privacyBefore: "We use these details only to reply to your request. See the ",
    privacyLink: "privacy policy",
    privacyHref: "/privacy",
  },
  pl: {
    name: "Imię i nazwisko",
    company: "Firma",
    email: "E-mail",
    website: "Strona internetowa",
    industry: "Branża",
    industryPh: "Wybierz branżę",
    employees: "Liczba pracowników",
    employeesPh: "Wybierz przedział",
    automate: "Czym Elliot miałby się zajmować?",
    automatePh: "np. odpowiadaniem na zapytania o oferty i umawianiem prezentacji",
    submit: "Umów prezentację",
    sending: "Wysyłanie…",
    error: "Coś poszło nie tak. Spróbuj ponownie za kilka minut albo zostaw wiadomość na czacie.",
    doneTitle: "Zgłoszenie przyjęte.",
    doneText: "Donnovan wkrótce się odezwie, żeby ustalić termin prezentacji.",
    privacyBefore: "Wykorzystamy te dane wyłącznie do odpowiedzi na Twoje zgłoszenie. Zobacz ",
    privacyLink: "politykę prywatności",
    privacyHref: "/pl/prywatnosc",
  },
};

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-[13.5px] font-medium text-fg">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

const inputClass =
  "w-full panel-inner rounded-xl px-3.5 py-2.5 text-base text-fg md:text-[14.5px] placeholder:text-slate-400 transition-colors duration-150 hover:border-slate-400 focus:border-ink focus:outline-none dark:focus:border-brass-light";

export default function DemoRequestForm({ locale = "en" }: { locale?: Locale }) {
  const t = T[locale];
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = new FormData(e.currentTarget);
    try {
      await submitDemoRequest({
        name: String(form.get("name") || ""),
        company: String(form.get("company") || ""),
        email: String(form.get("email") || ""),
        website: String(form.get("website") || ""),
        industry: String(form.get("industry") || ""),
        employees: String(form.get("employees") || ""),
        automate: String(form.get("automate") || ""),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="panel rounded-[24px] p-8 text-center">
        <p className="text-xl font-semibold text-fg">{t.doneTitle}</p>
        <p className="mt-2 text-[14.5px] text-slate-600">{t.doneText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <Field label={t.name} htmlFor="name">
        <input id="name" name="name" required className={inputClass} placeholder="Jane Kowalski" />
      </Field>
      <Field label={t.company} htmlFor="company">
        <input id="company" name="company" required className={inputClass} placeholder="Acme Realty" />
      </Field>
      <Field label={t.email} htmlFor="email">
        <input id="email" name="email" type="email" required className={inputClass} placeholder="jane@acme.com" />
      </Field>
      <Field label={t.website} htmlFor="website">
        <input id="website" name="website" className={inputClass} placeholder="acme.com" />
      </Field>
      <Field label={t.industry} htmlFor="industry">
        <select id="industry" name="industry" required className={inputClass} defaultValue="">
          <option value="" disabled>
            {t.industryPh}
          </option>
          {industries.map((i) => (
            <option key={i.value} value={i.value}>
              {i[locale]}
            </option>
          ))}
        </select>
      </Field>
      <Field label={t.employees} htmlFor="employees">
        <select id="employees" name="employees" required className={inputClass} defaultValue="">
          <option value="" disabled>
            {t.employeesPh}
          </option>
          {employeeRanges.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </Field>
      <div className="sm:col-span-2">
        <Field label={t.automate} htmlFor="automate">
          <textarea
            id="automate"
            name="automate"
            rows={4}
            className={inputClass}
            placeholder={t.automatePh}
          />
        </Field>
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" className="w-full sm:w-auto" disabled={status === "submitting"}>
          {status === "submitting" ? t.sending : t.submit}
        </Button>
        {status === "error" && (
          <p role="alert" className="mt-3 text-sm text-alert">
            {t.error}
          </p>
        )}
        <p className="mt-4 text-[13px] text-slate-600">
          {t.privacyBefore}
          <Link href={t.privacyHref} className="underline underline-offset-2 hover:text-fg">
            {t.privacyLink}
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
