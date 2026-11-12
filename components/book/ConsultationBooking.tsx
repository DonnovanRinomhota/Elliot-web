"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { bookConsultation, CallType, getConsultationSlots, LIVE_BACKEND, Slot } from "@/services/elliotApi";

const TZ = "Europe/Warsaw";

const T = {
  en: {
    step1: "1. Choose a call",
    step2: "2. Pick a time",
    step3: "3. Your details",
    types: {
      intro: { title: "15-minute intro call", text: "Questions, pricing and whether Elliot fits your agency." },
      demo: { title: "30-minute live demo", text: "See Elliot answer clients on WhatsApp, email and your website, and the dashboard your team uses." },
    },
    meet: "On Google Meet. The link comes with the confirmation.",
    tzNote: "Times are in Warsaw time (CET).",
    loading: "Loading free times…",
    noSlots: "No free times in the next two weeks. Write to hello@getelliot.eu and we'll find one.",
    loadError: "Couldn't load free times. Please try again in a moment.",
    retry: "Try again",
    chosen: "Chosen:",
    change: "Change",
    name: "Your name",
    email: "Work email",
    phone: "Phone (optional)",
    agency: "Agency name",
    agents: "Number of agents",
    listings: "Listings, roughly",
    crm: "CRM you use (optional)",
    crmPh: "e.g. ASARI, Galactica Virgo, none",
    message: "Anything we should know? (optional)",
    pick: "Choose…",
    submit: "Book the call",
    sending: "Booking…",
    privacy: "We use these details only to arrange and hold this call. See the ",
    privacyLink: "privacy policy",
    privacyHref: "/privacy",
    needName: "Please enter your name.",
    needEmail: "Please enter a valid email address.",
    needAgency: "Please enter your agency name.",
    taken: "Someone just booked that time. Please pick another one.",
    failed: "We couldn't book that just now. Please try again, or write to hello@getelliot.eu.",
    doneTitle: "You're booked.",
    doneWhen: "When",
    doneMeet: "Google Meet",
    doneSent: (e: string) => `The confirmation and Meet link were emailed to ${e}.`,
    doneNoEmail: "Keep the Meet link above; it's also in the calendar invitation.",
    doneAgain: "Book another call",
    unavailable: "Online booking isn't available right now. Please write to hello@getelliot.eu or use the contact form.",
    contactHref: "/contact",
    contactLabel: "Contact form",
  },
  pl: {
    step1: "1. Wybierz rozmowę",
    step2: "2. Wybierz termin",
    step3: "3. Twoje dane",
    types: {
      intro: { title: "15-minutowa rozmowa wstępna", text: "Pytania, cennik i czy Elliot pasuje do Twojego biura." },
      demo: { title: "30-minutowa prezentacja na żywo", text: "Zobacz, jak Elliot odpowiada klientom na WhatsAppie, w mailu i na stronie, oraz panel dla zespołu." },
    },
    meet: "Przez Google Meet. Link przyjdzie z potwierdzeniem.",
    tzNote: "Godziny podane są w czasie warszawskim.",
    loading: "Wczytuję wolne terminy…",
    noSlots: "Brak wolnych terminów w najbliższych dwóch tygodniach. Napisz na hello@getelliot.eu, a coś znajdziemy.",
    loadError: "Nie udało się wczytać terminów. Spróbuj ponownie za chwilę.",
    retry: "Spróbuj ponownie",
    chosen: "Wybrano:",
    change: "Zmień",
    name: "Imię i nazwisko",
    email: "E-mail służbowy",
    phone: "Telefon (opcjonalnie)",
    agency: "Nazwa biura",
    agents: "Liczba agentów",
    listings: "Liczba ofert, mniej więcej",
    crm: "Używany CRM (opcjonalnie)",
    crmPh: "np. ASARI, Galactica Virgo, brak",
    message: "Coś, o czym powinniśmy wiedzieć? (opcjonalnie)",
    pick: "Wybierz…",
    submit: "Zarezerwuj rozmowę",
    sending: "Rezerwuję…",
    privacy: "Wykorzystamy te dane wyłącznie do umówienia i przeprowadzenia rozmowy. Zobacz ",
    privacyLink: "politykę prywatności",
    privacyHref: "/pl/prywatnosc",
    needName: "Podaj imię i nazwisko.",
    needEmail: "Podaj poprawny adres e-mail.",
    needAgency: "Podaj nazwę biura.",
    taken: "Ktoś właśnie zarezerwował ten termin. Wybierz inny.",
    failed: "Nie udało się zarezerwować. Spróbuj ponownie albo napisz na hello@getelliot.eu.",
    doneTitle: "Zarezerwowane.",
    doneWhen: "Termin",
    doneMeet: "Google Meet",
    doneSent: (e: string) => `Potwierdzenie z linkiem do Meet wysłaliśmy na ${e}.`,
    doneNoEmail: "Zachowaj powyższy link do Meet; jest też w zaproszeniu w kalendarzu.",
    doneAgain: "Zarezerwuj kolejną rozmowę",
    unavailable: "Rezerwacja online jest chwilowo niedostępna. Napisz na hello@getelliot.eu lub skorzystaj z formularza.",
    contactHref: "/pl/kontakt",
    contactLabel: "Formularz kontaktowy",
  },
};

const AGENTS = ["1", "2–5", "6–20", "21+"];
const LISTINGS = ["< 50", "50–200", "200–1000", "1000+"];

function dayKey(iso: string) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(iso));
}

export default function ConsultationBooking({ locale }: { locale: Locale }) {
  const t = T[locale];
  const intl = locale === "pl" ? "pl-PL" : "en-GB";
  const fmtDay = (iso: string) =>
    new Intl.DateTimeFormat(intl, { timeZone: TZ, weekday: "short", day: "numeric", month: "short" }).format(new Date(iso));
  const fmtTime = (iso: string) => new Intl.DateTimeFormat(intl, { timeZone: TZ, hour: "2-digit", minute: "2-digit" }).format(new Date(iso));
  const fmtFull = (iso: string) =>
    new Intl.DateTimeFormat(intl, { timeZone: TZ, weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" }).format(new Date(iso));

  const [type, setType] = useState<CallType>("demo");
  const [slots, setSlots] = useState<Slot[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [day, setDay] = useState<string | null>(null);
  const [slot, setSlot] = useState<Slot | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", agency: "", agents: "", listings: "", crm: "", message: "", website: "" });
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<{ starts_at: string; meet_link: string | null; sent_to: string | null } | null>(null);

  const load = useCallback(async (which: CallType) => {
    setSlots(null);
    setLoadError(false);
    setSlot(null);
    try {
      const r = await getConsultationSlots(which);
      setSlots(r.slots);
      setDay(r.slots.length ? dayKey(r.slots[0].starts_at) : null);
    } catch {
      setLoadError(true);
    }
  }, []);

  useEffect(() => {
    if (LIVE_BACKEND) void load(type);
  }, [type, load]);

  const days = useMemo(() => {
    const map = new Map<string, Slot[]>();
    for (const s of slots || []) {
      const k = dayKey(s.starts_at);
      map.set(k, [...(map.get(k) || []), s]);
    }
    return Array.from(map.entries());
  }, [slots]);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!slot) return;
    setError(null);
    if (!form.name.trim()) return setError(t.needName);
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) return setError(t.needEmail);
    if (!form.agency.trim()) return setError(t.needAgency);
    setBusy(true);
    const r = await bookConsultation({ type, starts_at: slot.starts_at, lang: locale, ...form });
    setBusy(false);
    if (r.ok) {
      setDone({ starts_at: r.starts_at || slot.starts_at, meet_link: r.meet_link, sent_to: r.confirmation_sent_to });
      return;
    }
    if (r.taken) {
      setError(t.taken);
      void load(type);
      return;
    }
    setError(t.failed);
  }

  const box = "panel rounded-[24px] p-5 md:p-6";
  const label = "mb-1.5 block text-[13.5px] font-medium text-fg";
  const input =
    "w-full rounded-md border border-surface-line bg-surface px-3 py-2.5 text-base text-fg placeholder:text-slate-400 focus:border-violet focus:outline-none md:text-[15px]";

  if (!LIVE_BACKEND) {
    return (
      <div className={box}>
        <p className="text-[15px] text-slate-700">{t.unavailable}</p>
        <a href={t.contactHref} className="mt-4 inline-block text-[15px] font-medium text-fg underline">
          {t.contactLabel}
        </a>
      </div>
    );
  }

  if (done) {
    return (
      <div className={`${box} animate-fadeUp`} role="status">
        <p className="font-display text-2xl text-fg">{t.doneTitle}</p>
        <p className="mt-1 text-[15px] text-slate-600">{t.types[type].title}</p>
        <dl className="mt-5 grid gap-3 text-[15px]">
          <div>
            <dt className="text-sm text-slate-600">{t.doneWhen}</dt>
            <dd className="text-fg">{fmtFull(done.starts_at)}</dd>
          </div>
          {done.meet_link && (
            <div>
              <dt className="text-sm text-slate-600">{t.doneMeet}</dt>
              <dd>
                <a href={done.meet_link} className="break-all text-fg underline" target="_blank" rel="noreferrer">
                  {done.meet_link}
                </a>
              </dd>
            </div>
          )}
        </dl>
        <p className="mt-5 text-[14.5px] text-slate-600">{done.sent_to ? t.doneSent(done.sent_to) : t.doneNoEmail}</p>
        <button
          type="button"
          onClick={() => {
            setDone(null);
            setSlot(null);
            void load(type);
          }}
          className="mt-6 text-[14.5px] font-medium text-fg underline"
        >
          {t.doneAgain}
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {/* 1. Call type */}
      <section className={box} aria-labelledby="book-step1">
        <h2 id="book-step1" className="text-[15px] font-semibold text-fg">
          {t.step1}
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2" role="radiogroup">
          {(["intro", "demo"] as CallType[]).map((k) => (
            <button
              key={k}
              type="button"
              role="radio"
              aria-checked={type === k}
              onClick={() => setType(k)}
              className={`rounded-lg border p-4 text-left transition-colors ${
                type === k ? "border-fg bg-surface ring-1 ring-fg" : "border-surface-line bg-surface hover:border-slate-400"
              }`}
            >
              <span className="block text-[15px] font-semibold text-fg">{t.types[k].title}</span>
              <span className="mt-1 block text-[14px] leading-snug text-slate-600">{t.types[k].text}</span>
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm text-slate-600">{t.meet}</p>
      </section>

      {/* 2. Time */}
      <section className={box} aria-labelledby="book-step2">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="book-step2" className="text-[15px] font-semibold text-fg">
            {t.step2}
          </h2>
          <span className="text-sm text-slate-600">{t.tzNote}</span>
        </div>

        {!slot && error && (
          <p role="alert" className="mt-4 rounded-md border border-alert/30 px-3 py-2 text-[14px] text-alert">
            {error}
          </p>
        )}
        {slot ? (
          <div className="mt-4 flex flex-wrap items-center gap-3 text-[15px]">
            <span className="text-slate-600">{t.chosen}</span>
            <span className="font-medium text-fg">{fmtFull(slot.starts_at)}</span>
            <button type="button" onClick={() => setSlot(null)} className="text-sm font-medium text-fg underline">
              {t.change}
            </button>
          </div>
        ) : loadError ? (
          <div className="mt-4 text-[15px] text-slate-700">
            {t.loadError}{" "}
            <button type="button" onClick={() => load(type)} className="font-medium text-fg underline">
              {t.retry}
            </button>
          </div>
        ) : !slots ? (
          <p className="mt-4 text-[15px] text-slate-600" aria-live="polite">
            {t.loading}
          </p>
        ) : !days.length ? (
          <p className="mt-4 text-[15px] text-slate-700">{t.noSlots}</p>
        ) : (
          <>
            <div className="-mx-1 mt-4 flex gap-2 overflow-x-auto px-1 pb-1">
              {days.map(([k, list]) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setDay(k)}
                  aria-pressed={day === k}
                  className={`shrink-0 rounded-md border px-3 py-2 text-[14px] ${
                    day === k ? "border-fg bg-fg text-surface" : "border-surface-line bg-surface text-fg hover:border-slate-400"
                  }`}
                >
                  {fmtDay(list[0].starts_at)}
                </button>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-6">
              {(days.find(([k]) => k === day)?.[1] || []).map((s) => (
                <button
                  key={s.starts_at}
                  type="button"
                  onClick={() => {
                    setError(null);
                    setSlot(s);
                  }}
                  className="rounded-md border border-surface-line bg-surface px-2 py-2.5 text-[14.5px] text-fg hover:border-fg"
                >
                  {fmtTime(s.starts_at)}
                </button>
              ))}
            </div>
          </>
        )}
      </section>

      {/* 3. Details */}
      {slot && (
        <section className={`${box} animate-fadeUp`} aria-labelledby="book-step3">
          <h2 id="book-step3" className="text-[15px] font-semibold text-fg">
            {t.step3}
          </h2>
          <form onSubmit={submit} noValidate className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="b-name" className={label}>{t.name}</label>
              <input id="b-name" value={form.name} onChange={set("name")} autoComplete="name" className={input} />
            </div>
            <div>
              <label htmlFor="b-email" className={label}>{t.email}</label>
              <input id="b-email" type="email" value={form.email} onChange={set("email")} autoComplete="email" className={input} />
            </div>
            <div>
              <label htmlFor="b-agency" className={label}>{t.agency}</label>
              <input id="b-agency" value={form.agency} onChange={set("agency")} autoComplete="organization" className={input} />
            </div>
            <div>
              <label htmlFor="b-phone" className={label}>{t.phone}</label>
              <input id="b-phone" type="tel" value={form.phone} onChange={set("phone")} autoComplete="tel" className={input} />
            </div>
            <div>
              <label htmlFor="b-agents" className={label}>{t.agents}</label>
              <select id="b-agents" value={form.agents} onChange={set("agents")} className={input}>
                <option value="">{t.pick}</option>
                {AGENTS.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="b-listings" className={label}>{t.listings}</label>
              <select id="b-listings" value={form.listings} onChange={set("listings")} className={input}>
                <option value="">{t.pick}</option>
                {LISTINGS.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="b-crm" className={label}>{t.crm}</label>
              <input id="b-crm" value={form.crm} onChange={set("crm")} placeholder={t.crmPh} className={input} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="b-message" className={label}>{t.message}</label>
              <textarea id="b-message" rows={3} value={form.message} onChange={set("message")} className={input} />
            </div>
            {/* Honeypot: hidden from people, bots fill it in. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="b-website">Website</label>
              <input id="b-website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
            </div>
            {error && (
              <p role="alert" className="text-[14px] text-alert sm:col-span-2">
                {error}
              </p>
            )}
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={busy}
                className="w-full rounded-md bg-ink px-5 py-3.5 text-[15px] font-medium text-white hover:bg-ink-soft disabled:opacity-50 dark:bg-brass-light dark:text-ink sm:w-auto"
              >
                {busy ? t.sending : t.submit}
              </button>
              <p className="mt-3 text-sm text-slate-600">
                {t.privacy}
                <a href={t.privacyHref} className="underline">
                  {t.privacyLink}
                </a>
                .
              </p>
            </div>
          </form>
        </section>
      )}
    </div>
  );
}
