"use client";

import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
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
    noSlots: "No free times this month. Try the next one, or write to hello@getelliot.eu and we'll find a time.",
    noDay: "Pick a day with free times.",
    prevMonth: "Previous month",
    nextMonth: "Next month",
    week: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    freeTimes: (n: number) => (n === 1 ? "1 free time" : `${n} free times`),
    horizon: "You can book up to three months ahead.",
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
    noSlots: "Brak wolnych terminów w tym miesiącu. Sprawdź następny albo napisz na hello@getelliot.eu, a coś znajdziemy.",
    noDay: "Wybierz dzień z wolnymi terminami.",
    prevMonth: "Poprzedni miesiąc",
    nextMonth: "Następny miesiąc",
    week: ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"],
    freeTimes: (n: number) => (n === 1 ? "1 wolny termin" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? `${n} wolne terminy` : `${n} wolnych terminów`),
    horizon: "Rezerwować można do trzech miesięcy naprzód.",
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

function dayKey(iso: string | Date) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(iso));
}

/** How far ahead the calendar goes when the server doesn't say (workflow 35: HORIZON_DAYS). */
const HORIZON_DAYS = 90;

// Calendar dates as YYYY-MM-DD strings; arithmetic at noon UTC so no
// timezone or daylight-saving change can move a date.
const atNoon = (ymd: string) => new Date(`${ymd}T12:00:00Z`);
const ymdOf = (d: Date) => d.toISOString().slice(0, 10);
const addDays = (ymd: string, n: number) => ymdOf(new Date(atNoon(ymd).getTime() + n * 86400000));
const monthStart = (ymd: string) => `${ymd.slice(0, 7)}-01`;
const addMonths = (first: string, n: number) => {
  const d = atNoon(first);
  d.setUTCMonth(d.getUTCMonth() + n, 1);
  return ymdOf(d);
};
const monthEnd = (first: string) => addDays(addMonths(first, 1), -1);
/** The month's weeks, Monday first; null for the blanks around it. */
function monthGrid(first: string): (string | null)[] {
  const lead = (atNoon(first).getUTCDay() + 6) % 7;
  const last = Number(monthEnd(first).slice(8));
  const cells: (string | null)[] = Array(lead).fill(null);
  for (let i = 0; i < last; i++) cells.push(addDays(first, i));
  while (cells.length % 7) cells.push(null);
  return cells;
}

export default function ConsultationBooking({ locale }: { locale: Locale }) {
  const t = T[locale];
  const intl = locale === "pl" ? "pl-PL" : "en-GB";
  const fmtMonth = (first: string) => new Intl.DateTimeFormat(intl, { timeZone: "UTC", month: "long", year: "numeric" }).format(atNoon(first));
  const fmtDate = (ymd: string) =>
    new Intl.DateTimeFormat(intl, { timeZone: "UTC", weekday: "long", day: "numeric", month: "long" }).format(atNoon(ymd));
  const fmtTime = (iso: string) => new Intl.DateTimeFormat(intl, { timeZone: TZ, hour: "2-digit", minute: "2-digit" }).format(new Date(iso));
  const fmtFull = (iso: string) =>
    new Intl.DateTimeFormat(intl, { timeZone: TZ, weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" }).format(new Date(iso));

  const [type, setType] = useState<CallType>("demo");
  const today = useMemo(() => dayKey(new Date()), []);
  const [month, setMonth] = useState(() => monthStart(dayKey(new Date())));
  const [lastDate, setLastDate] = useState(() => addDays(dayKey(new Date()), HORIZON_DAYS));
  // Days of the shown month with free times (null while loading).
  const [monthDays, setMonthDays] = useState<Map<string, number> | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [day, setDay] = useState<string | null>(null);
  const [daySlots, setDaySlots] = useState<Slot[] | null>(null);
  const [dayError, setDayError] = useState(false);
  const [slot, setSlot] = useState<Slot | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", agency: "", agents: "", listings: "", crm: "", message: "", website: "" });
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<{ starts_at: string; meet_link: string | null; sent_to: string | null } | null>(null);

  // Times already fetched with the month, by day (only when the month came back complete).
  const cache = useRef(new Map<string, Slot[]>());
  const monthReq = useRef(0);
  const dayReq = useRef(0);

  const loadDay = useCallback(async (which: CallType, d: string) => {
    const id = ++dayReq.current;
    setDay(d);
    setSlot(null);
    setDayError(false);
    const cached = cache.current.get(d);
    if (cached) {
      setDaySlots(cached);
      return;
    }
    setDaySlots(null);
    try {
      const r = await getConsultationSlots(which, { from: d, to: d });
      if (id !== dayReq.current) return;
      const list = r.slots.filter((s) => dayKey(s.starts_at) === d);
      cache.current.set(d, list);
      setDaySlots(list);
    } catch {
      if (id === dayReq.current) setDayError(true);
    }
  }, []);

  const loadMonth = useCallback(
    async (which: CallType, first: string, keepDay: string | null = null) => {
      const id = ++monthReq.current;
      dayReq.current++;
      cache.current = new Map();
      setMonthDays(null);
      setLoadError(false);
      setSlot(null);
      setDay(null);
      setDaySlots(null);
      const from = first < today ? today : first;
      try {
        const r = await getConsultationSlots(which, { from, to: monthEnd(first) });
        if (id !== monthReq.current) return;
        if (r.lastDate) setLastDate(r.lastDate);
        const days = new Map(r.days.filter((x) => x.count > 0 && x.date.slice(0, 7) === first.slice(0, 7)).map((x) => [x.date, x.count]));
        if (!r.more) {
          for (const s of r.slots) {
            const k = dayKey(s.starts_at);
            cache.current.set(k, [...(cache.current.get(k) || []), s]);
          }
        }
        setMonthDays(days);
        const pick = keepDay && days.has(keepDay) ? keepDay : Array.from(days.keys()).sort()[0];
        if (pick) void loadDay(which, pick);
      } catch {
        if (id === monthReq.current) setLoadError(true);
      }
    },
    [today, loadDay],
  );

  useEffect(() => {
    if (LIVE_BACKEND) void loadMonth(type, month);
  }, [type, month, loadMonth]);

  const reload = () => void loadMonth(type, month, day);

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
      reload();
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
            reload();
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
        ) : (
          <div className="mt-5 grid gap-6 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
            {/* The month */}
            <div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setMonth((m) => addMonths(m, -1))}
                  disabled={month <= monthStart(today)}
                  aria-label={t.prevMonth}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-fg transition-colors hover:bg-surface-dim disabled:pointer-events-none disabled:opacity-25"
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M12.5 4.5 7 10l5.5 5.5" />
                  </svg>
                </button>
                <p className="text-[15.5px] font-semibold text-fg first-letter:uppercase" aria-live="polite">
                  {fmtMonth(month)}
                </p>
                <button
                  type="button"
                  onClick={() => setMonth((m) => addMonths(m, 1))}
                  disabled={addMonths(month, 1) > lastDate}
                  aria-label={t.nextMonth}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-fg transition-colors hover:bg-surface-dim disabled:pointer-events-none disabled:opacity-25"
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M7.5 4.5 13 10l-5.5 5.5" />
                  </svg>
                </button>
              </div>
              <div className="mt-3 grid grid-cols-7 gap-1.5 text-center">
                {t.week.map((w) => (
                  <span key={w} className="pb-1 text-[11.5px] font-medium uppercase tracking-[0.08em] text-slate-600">
                    {w}
                  </span>
                ))}
                {monthGrid(month).map((d, i) => {
                  if (!d) return <span key={`b${i}`} aria-hidden="true" />;
                  const count = monthDays?.get(d) || 0;
                  const open = count > 0;
                  const selected = d === day;
                  return (
                    <button
                      key={d}
                      type="button"
                      disabled={!open}
                      onClick={() => {
                        setError(null);
                        void loadDay(type, d);
                      }}
                      aria-pressed={selected}
                      aria-label={`${fmtDate(d)}${open ? `, ${t.freeTimes(count)}` : ""}`}
                      className={`relative flex aspect-square flex-col items-center justify-center rounded-xl border text-[14.5px] transition-colors md:aspect-[1/1.05] ${
                        selected
                          ? "border-transparent bg-gold font-semibold text-[#0b1426] shadow-[0_10px_24px_-14px_rgba(176,122,66,0.9)]"
                          : open
                            ? "border-surface-line bg-surface-dim font-medium text-fg hover:border-[#c99556]"
                            : "border-transparent text-slate-400"
                      } ${d === today && !selected ? "ring-1 ring-[#c99556]" : ""}`}
                    >
                      {Number(d.slice(8))}
                      {open && !selected && <span className="absolute bottom-1.5 h-1 w-1 rounded-full bg-[#c99556]" aria-hidden="true" />}
                    </button>
                  );
                })}
              </div>
              <p className="mt-3 text-[13px] text-slate-600">{t.horizon}</p>
            </div>

            {/* The day's times */}
            <div className="md:border-l md:border-surface-line md:pl-6">
              {loadError ? (
                <p className="text-[15px] text-slate-700">
                  {t.loadError}{" "}
                  <button type="button" onClick={reload} className="font-medium text-fg underline">
                    {t.retry}
                  </button>
                </p>
              ) : !monthDays ? (
                <p className="text-[15px] text-slate-600" aria-live="polite">
                  {t.loading}
                </p>
              ) : !monthDays.size ? (
                <p className="text-[15px] text-slate-700">{t.noSlots}</p>
              ) : !day ? (
                <p className="text-[15px] text-slate-600">{t.noDay}</p>
              ) : (
                <>
                  <p className="text-[15px] font-semibold text-fg first-letter:uppercase">{fmtDate(day)}</p>
                  {dayError ? (
                    <p className="mt-3 text-[15px] text-slate-700">
                      {t.loadError}{" "}
                      <button type="button" onClick={() => loadDay(type, day)} className="font-medium text-fg underline">
                        {t.retry}
                      </button>
                    </p>
                  ) : !daySlots ? (
                    <p className="mt-3 text-[15px] text-slate-600" aria-live="polite">
                      {t.loading}
                    </p>
                  ) : !daySlots.length ? (
                    <p className="mt-3 text-[15px] text-slate-700">{t.noDay}</p>
                  ) : (
                    <div className="mt-3 grid grid-cols-3 gap-2 md:max-h-[340px] md:overflow-y-auto md:pr-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3">
                      {daySlots.map((s) => (
                        <button
                          key={s.starts_at}
                          type="button"
                          onClick={() => {
                            setError(null);
                            setSlot(s);
                          }}
                          className="rounded-lg border border-surface-line bg-surface px-2 py-2.5 text-[14.5px] font-medium text-fg transition-colors hover:border-[#c99556] hover:bg-surface-dim"
                        >
                          {fmtTime(s.starts_at)}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
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
