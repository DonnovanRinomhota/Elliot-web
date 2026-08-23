"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { submitDemoRequest } from "@/services/elliotApi";

const industries = [
  "Real Estate",
  "Recruitment",
  "Professional Services",
  "Healthcare",
  "E-commerce",
  "Education",
  "Financial Services",
  "Other",
];

const employeeRanges = ["1–10", "11–50", "51–200", "200+"];

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
  "w-full rounded-md border border-surface-line bg-card px-3.5 py-2.5 text-base text-fg md:text-[14.5px] placeholder:text-slate-400 transition-all duration-200 hover:border-slate-200 focus:border-violet focus:shadow-glow focus:outline-none";

export default function DemoRequestForm() {
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
      <div className="animate-fadeUp rounded-lg border border-pulse/30 bg-pulse-soft p-8 text-center shadow-card dark:bg-pulse/10">
        <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-pulse text-white">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8.5L6.5 12L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p className="mt-4 font-display text-xl text-fg">Request received.</p>
        <p className="mt-2 text-[14.5px] text-slate-600">
          The team will follow up shortly to schedule your demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <Field label="Name" htmlFor="name">
        <input id="name" name="name" required className={inputClass} placeholder="Jane Kowalski" />
      </Field>
      <Field label="Company" htmlFor="company">
        <input id="company" name="company" required className={inputClass} placeholder="Acme Realty" />
      </Field>
      <Field label="Email" htmlFor="email">
        <input id="email" name="email" type="email" required className={inputClass} placeholder="jane@acme.com" />
      </Field>
      <Field label="Website" htmlFor="website">
        <input id="website" name="website" className={inputClass} placeholder="acme.com" />
      </Field>
      <Field label="Industry" htmlFor="industry">
        <select id="industry" name="industry" required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select an industry
          </option>
          {industries.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Number of employees" htmlFor="employees">
        <select id="employees" name="employees" required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          {employeeRanges.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </Field>
      <div className="sm:col-span-2">
        <Field label="What would you like Elliot to automate?" htmlFor="automate">
          <textarea
            id="automate"
            name="automate"
            rows={4}
            className={inputClass}
            placeholder="e.g. answering property enquiries and booking viewings"
          />
        </Field>
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" className="w-full sm:w-auto" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Book a Demo"}
        </Button>
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">
            Something went wrong — please try again, or email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
