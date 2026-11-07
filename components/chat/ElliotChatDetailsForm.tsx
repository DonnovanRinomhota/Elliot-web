"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { VisitorDetails } from "@/lib/types";

const TEXT = {
  en: {
    intro: "Before we start, please tell us your name and an email or phone number, so the team can get back to you.",
    name: "Your name",
    email: "Email",
    phone: "Phone",
    start: "Start chat",
    needName: "Please enter your name.",
    needReach: "Please enter an email or a phone number.",
    badEmail: "That email address doesn't look right.",
    badPhone: "That phone number looks too short.",
  },
  pl: {
    intro: "Zanim zaczniemy, podaj proszę imię oraz e-mail lub numer telefonu, żeby zespół mógł się z Tobą skontaktować.",
    name: "Imię i nazwisko",
    email: "E-mail",
    phone: "Telefon",
    start: "Rozpocznij czat",
    needName: "Podaj imię.",
    needReach: "Podaj e-mail lub numer telefonu.",
    badEmail: "Ten adres e-mail wygląda na niepoprawny.",
    badPhone: "Ten numer telefonu jest za krótki.",
  },
};

// Name + email or phone, asked for before the chat starts. Shown in the
// Polish version on /pl pages.
export default function ElliotChatDetailsForm({
  initial,
  note,
  onSubmit,
}: {
  initial: VisitorDetails | null;
  note: string | null;
  onSubmit: (details: VisitorDetails) => void;
}) {
  const pathname = usePathname() || "/";
  const t = pathname === "/pl" || pathname.startsWith("/pl/") ? TEXT.pl : TEXT.en;
  const [name, setName] = useState(initial?.name ?? "");
  const [email, setEmail] = useState(initial?.email ?? "");
  const [phone, setPhone] = useState(initial?.phone ?? "");
  const [error, setError] = useState<string | null>(null);

  function submit(e: FormEvent) {
    e.preventDefault();
    const n = name.trim();
    const em = email.trim().toLowerCase();
    const ph = phone.trim();
    if (!n) return setError(t.needName);
    if (!em && !ph) return setError(t.needReach);
    if (em && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) return setError(t.badEmail);
    if (ph && ph.replace(/\D/g, "").length < 6) return setError(t.badPhone);
    onSubmit({ name: n, email: em || null, phone: ph || null });
  }

  const input =
    "w-full rounded-md border border-surface-line bg-surface px-3 py-2 text-base text-fg placeholder:text-slate-400 focus:border-violet focus:outline-none md:text-sm";

  return (
    <form onSubmit={submit} noValidate className="space-y-3 rounded-lg border border-surface-line bg-card p-4 animate-fadeUp">
      <p className="text-[13.5px] leading-relaxed text-slate-700">{note || t.intro}</p>
      <div>
        <label htmlFor="elliot-visitor-name" className="mb-1 block text-xs font-medium text-slate-600">
          {t.name}
        </label>
        <input id="elliot-visitor-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={input} autoFocus />
      </div>
      <div>
        <label htmlFor="elliot-visitor-email" className="mb-1 block text-xs font-medium text-slate-600">
          {t.email}
        </label>
        <input id="elliot-visitor-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" className={input} />
      </div>
      <div>
        <label htmlFor="elliot-visitor-phone" className="mb-1 block text-xs font-medium text-slate-600">
          {t.phone}
        </label>
        <input id="elliot-visitor-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" className={input} />
      </div>
      {error && (
        <p role="alert" className="text-[13px] text-alert">
          {error}
        </p>
      )}
      <button type="submit" className="w-full rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-paper hover:opacity-90">
        {t.start}
      </button>
    </form>
  );
}
