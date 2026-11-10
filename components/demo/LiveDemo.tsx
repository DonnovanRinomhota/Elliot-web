"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { ChatMessage, VisitorDetails } from "@/lib/types";
import ElliotChatMessage, { TypingIndicator } from "@/components/chat/ElliotChatMessage";
import ElliotChatInput from "@/components/chat/ElliotChatInput";
import { LIVE_BACKEND, requestDemoAccess, sendChatMessage } from "@/services/elliotApi";

// The live demo on /demo: the visitor leaves their details, then chats with
// the demo agency ("Demo Nieruchomości") exactly as an agency's client would.
// Bookings are real emails marked DEMO, in a separate demo calendar.

const T = {
  en: {
    formTitle: "Try Elliot as a home buyer",
    formLead: "Leave your details to open the live demo. You'll chat with a sample agency's Elliot, and if you book a viewing you'll get the confirmation email your clients would get (marked DEMO).",
    name: "Your name",
    email: "Work email",
    phone: "Phone (optional)",
    agency: "Your agency",
    submit: "Open the live demo",
    sending: "Opening…",
    needName: "Please enter your name.",
    needEmail: "Please enter a valid email address.",
    needAgency: "Please enter your agency name.",
    failed: "The demo isn't available right now. Please try again later, or book a live demo with us instead.",
    privacy: "We use these details to run the demo and to follow up about Elliot. Demo chats are deleted after 3 days. See the ",
    privacyLink: "privacy policy",
    privacyHref: "/privacy",
    chatTitle: "Demo Nieruchomości",
    chatSub: "Sample agency · answered by Elliot",
    placeholder: "Ask about flats, prices, viewings…",
    greeting: (n: string) =>
      `Hi ${n}! I'm the assistant of Demo Nieruchomości, a sample agency in Warsaw. Ask me about flats to buy or rent, and I can book you a viewing.`,
    prompts: ["2-room flats in Mokotów under 900,000 zł?", "I want to rent a studio near the metro", "Can I see the penthouse this week?"],
    error: "Sorry, I couldn't answer just now. Please try again in a moment.",
    sideTitle: "What the agency sees",
    side: [
      ["The conversation", "Every message, live, in the dashboard. A team member can join and reply."],
      ["A qualified lead", "Budget, area, timing and financing, marked hot, warm or cold."],
      ["The viewing", "In the agent's calendar, with the property and the client's details."],
      ["Your confirmation", "Book a viewing and check your inbox: that's the email clients get."],
    ],
    note: "Sample listings only. Nothing here is a real offer.",
    reset: "Start over",
    unavailable: "The live demo isn't switched on yet. Book a call and we'll show it to you.",
  },
  pl: {
    formTitle: "Wypróbuj Elliota jako kupujący",
    formLead: "Zostaw swoje dane, aby otworzyć demo na żywo. Porozmawiasz z Elliotem przykładowego biura, a jeśli umówisz prezentację, dostaniesz e-mail z potwierdzeniem, taki jak dostają Twoi klienci (oznaczony DEMO).",
    name: "Imię i nazwisko",
    email: "E-mail służbowy",
    phone: "Telefon (opcjonalnie)",
    agency: "Twoje biuro",
    submit: "Otwórz demo na żywo",
    sending: "Otwieram…",
    needName: "Podaj imię i nazwisko.",
    needEmail: "Podaj poprawny adres e-mail.",
    needAgency: "Podaj nazwę biura.",
    failed: "Demo jest chwilowo niedostępne. Spróbuj później albo umów z nami prezentację na żywo.",
    privacy: "Wykorzystamy te dane do przeprowadzenia demo i kontaktu w sprawie Elliota. Rozmowy demo usuwamy po 3 dniach. Zobacz ",
    privacyLink: "politykę prywatności",
    privacyHref: "/pl/prywatnosc",
    chatTitle: "Demo Nieruchomości",
    chatSub: "Przykładowe biuro · odpowiada Elliot",
    placeholder: "Zapytaj o mieszkania, ceny, prezentacje…",
    greeting: (n: string) =>
      `Dzień dobry, ${n}! Jestem asystentem Demo Nieruchomości, przykładowego biura w Warszawie. Zapytaj o mieszkania na sprzedaż lub wynajem, a umówię prezentację.`,
    prompts: ["Mieszkania 2-pokojowe na Mokotowie do 900 000 zł?", "Szukam kawalerki na wynajem blisko metra", "Czy mogę obejrzeć penthouse w tym tygodniu?"],
    error: "Przepraszam, nie mogę teraz odpowiedzieć. Spróbuj ponownie za chwilę.",
    sideTitle: "Co widzi biuro",
    side: [
      ["Rozmowę", "Każdą wiadomość na żywo w panelu. Agent może dołączyć i odpowiedzieć."],
      ["Zakwalifikowanego klienta", "Budżet, lokalizacja, termin i finansowanie, z oceną: gorący, ciepły, zimny."],
      ["Prezentację", "W kalendarzu agenta, z ofertą i danymi klienta."],
      ["Twoje potwierdzenie", "Umów prezentację i sprawdź skrzynkę: tak wygląda e-mail dla klienta."],
    ],
    note: "Wyłącznie przykładowe oferty. Nic tu nie jest prawdziwą ofertą.",
    reset: "Zacznij od nowa",
    unavailable: "Demo na żywo nie jest jeszcze włączone. Umów rozmowę, a pokażemy je.",
  },
};

const KEY = "elliot_live_demo";

type Access = { tenantSlug: string; visitor: VisitorDetails };

function id() {
  return Math.random().toString(36).slice(2, 10);
}

export default function LiveDemo({ locale }: { locale: Locale }) {
  const t = T[locale];
  const [access, setAccess] = useState<Access | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", agency: "", website: "" });
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // A returning visitor goes straight back to the chat (this browser only).
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "null");
      if (saved?.tenantSlug && saved?.visitor?.name) start(saved);
    } catch {
      /* private mode: show the form */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function start(a: Access) {
    setAccess(a);
    setConversationId(null);
    setMessages([{ id: id(), role: "elliot", text: t.greeting(a.visitor.name.split(/\s+/)[0]), createdAt: Date.now() }]);
  }

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    const name = form.name.trim();
    const email = form.email.trim().toLowerCase();
    if (!name) return setError(t.needName);
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return setError(t.needEmail);
    if (!form.agency.trim()) return setError(t.needAgency);
    setBusy(true);
    const r = await requestDemoAccess({ name, email, phone: form.phone.trim(), agency: form.agency.trim(), lang: locale, website: form.website });
    setBusy(false);
    if (!r.ok) return setError(t.failed);
    const a: Access = { tenantSlug: r.tenantSlug, visitor: { name, email, phone: form.phone.trim() || null } };
    try {
      localStorage.setItem(KEY, JSON.stringify(a));
    } catch {
      /* fine: works for this visit */
    }
    start(a);
  }

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || !access) return;
    const history = [...messages, { id: id(), role: "user" as const, text: trimmed, createdAt: Date.now() }];
    setMessages(history);
    setTyping(true);
    try {
      const r = await sendChatMessage({ tenantSlug: access.tenantSlug, history, message: trimmed, conversationId, contact: access.visitor });
      setConversationId(r.conversationId);
      setMessages((m) => [...m, { id: id(), role: "elliot", text: r.text, createdAt: Date.now() }]);
    } catch {
      setMessages((m) => [...m, { id: id(), role: "elliot", text: t.error, createdAt: Date.now() }]);
    } finally {
      setTyping(false);
    }
  }

  function reset() {
    try {
      localStorage.removeItem(KEY);
    } catch {
      /* nothing stored */
    }
    setAccess(null);
    setMessages([]);
  }

  const input =
    "w-full rounded-md border border-surface-line bg-surface px-3 py-2.5 text-base text-fg placeholder:text-slate-400 focus:border-violet focus:outline-none md:text-[15px]";
  const label = "mb-1.5 block text-[13.5px] font-medium text-fg";

  if (!LIVE_BACKEND) {
    return <p className="rounded-lg border border-surface-line bg-card p-6 text-[15px] text-slate-700">{t.unavailable}</p>;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
      {!access ? (
        <form onSubmit={submit} noValidate className="rounded-lg border border-surface-line bg-card p-5 md:p-7">
          <h2 className="font-display text-xl text-fg">{t.formTitle}</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{t.formLead}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="d-name" className={label}>{t.name}</label>
              <input id="d-name" value={form.name} onChange={set("name")} autoComplete="name" className={input} />
            </div>
            <div>
              <label htmlFor="d-email" className={label}>{t.email}</label>
              <input id="d-email" type="email" value={form.email} onChange={set("email")} autoComplete="email" className={input} />
            </div>
            <div>
              <label htmlFor="d-agency" className={label}>{t.agency}</label>
              <input id="d-agency" value={form.agency} onChange={set("agency")} autoComplete="organization" className={input} />
            </div>
            <div>
              <label htmlFor="d-phone" className={label}>{t.phone}</label>
              <input id="d-phone" type="tel" value={form.phone} onChange={set("phone")} autoComplete="tel" className={input} />
            </div>
          </div>
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="d-website">Website</label>
            <input id="d-website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
          </div>
          {error && (
            <p role="alert" className="mt-4 text-[14px] text-alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={busy}
            className="mt-5 w-full rounded-md bg-ink px-5 py-3.5 text-[15px] font-medium text-white hover:bg-ink-soft disabled:opacity-50 dark:bg-brass-light dark:text-ink sm:w-auto"
          >
            {busy ? t.sending : t.submit}
          </button>
          <p className="mt-3 text-sm text-slate-500">
            {t.privacy}
            <a href={t.privacyHref} className="underline">
              {t.privacyLink}
            </a>
            .
          </p>
        </form>
      ) : (
        <div className="flex h-[620px] max-h-[80vh] flex-col overflow-hidden rounded-lg border border-surface-line bg-surface">
          <div className="flex items-center justify-between gap-3 border-b border-ink-line bg-ink px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <span className="presence-dot" />
              <div>
                <p className="text-sm font-medium text-paper">{t.chatTitle}</p>
                <p className="text-xs text-paper/60">{t.chatSub}</p>
              </div>
            </div>
            <button type="button" onClick={reset} className="text-xs text-paper/70 underline hover:text-paper">
              {t.reset}
            </button>
          </div>
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            {messages.map((m) => (
              <ElliotChatMessage key={m.id} message={m} />
            ))}
            {typing && <TypingIndicator />}
            {messages.length === 1 && !typing && (
              <div className="flex flex-col gap-2 pt-2">
                {t.prompts.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => send(p)}
                    className="rounded-md border border-surface-line bg-card px-3 py-2.5 text-left text-[14px] text-slate-700 transition-colors hover:text-violet-600"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
          <ElliotChatInput onSend={send} disabled={typing} placeholder={t.placeholder} inputId="elliot-demo-input" />
        </div>
      )}

      <aside className="rounded-lg border border-surface-line bg-card p-5 md:p-6">
        <h3 className="text-[15px] font-semibold text-fg">{t.sideTitle}</h3>
        <ul className="mt-4 grid gap-4">
          {t.side.map(([title, text]) => (
            <li key={title} className="border-l-2 border-brass pl-3">
              <p className="text-[14.5px] font-medium text-fg">{title}</p>
              <p className="mt-0.5 text-[14px] leading-snug text-slate-600">{text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs text-slate-500">{t.note}</p>
      </aside>
    </div>
  );
}
