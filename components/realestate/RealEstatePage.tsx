"use client";

import { Button, ButtonLink } from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import ActivityTimeline from "@/components/product/ActivityTimeline";
import { useElliotChat } from "@/components/chat/ElliotChatProvider";
import { UI, type Locale } from "@/lib/i18n";

const CONTENT = {
  en: {
    eyebrow: "Real estate",
    title: "An assistant that knows your listings.",
    lead: "From the first enquiry to a booked viewing, Elliot handles the questions your agents answer every day, so they can spend their time with serious buyers.",
    convoLabel: "Example conversation",
    convo: [
      { from: "client", text: "I'm looking for a 2-bedroom flat in Warsaw under €250,000." },
      { from: "elliot", text: "I found 3 that match. Before I share them: are you hoping to move in the next 1–3 months, or later?" },
      { from: "client", text: "Within a month, ideally." },
      { from: "elliot", text: "Got it. I can offer a viewing of the closest match this Thursday at 17:00. Shall I book it?" },
    ],
    timelineTitle: "What happens behind the scenes",
    timeline: [
      { time: "1", label: "Understands what they need", detail: "2 bedrooms · Warsaw · up to €250,000" },
      { time: "2", label: "Asks qualifying questions", detail: "Move-in date, financing" },
      { time: "3", label: "Matches your listings", detail: "3 listings found" },
      { time: "4", label: "Scores the lead", detail: "Hot" },
      { time: "5", label: "Offers free slots from your calendar" },
      { time: "6", label: "Books the viewing", detail: "Thursday 17:00 · confirmation emailed" },
      { time: "7", label: "Sends the lead to your CRM" },
      { time: "8", label: "Notifies your agent" },
      { time: "9", label: "Follows up if the client goes quiet", detail: "Within your approval rules" },
    ],
    note: "Illustrative example with demo data.",
    gainsTitle: "What your agency gets",
    gains: [
      { title: "No missed evening enquiries", text: "People browse listings after work. Elliot answers them then, not the next morning." },
      { title: "Fewer wasted viewings", text: "Budget, timing and financing are checked before anything is booked." },
      { title: "Less admin for agents", text: "Bookings, confirmations and CRM entries happen without anyone typing them." },
      { title: "A clear handover", text: "When a client is ready to talk, your agent gets the lead with the full conversation." },
    ],
    ctaTitle: "Try it with your own listings.",
    ctaLead: "In a short demo we set Elliot up with a few of your properties and you ask it what your clients would ask.",
    primary: "Request a demo",
    secondary: "Talk to Elliot now",
  },
  pl: {
    eyebrow: "Nieruchomości",
    title: "Asystent, który zna Twoje oferty.",
    lead: "Od pierwszego zapytania do umówionej prezentacji Elliot odpowiada na pytania, na które Twoi agenci odpowiadają codziennie, żeby mogli poświęcić czas zdecydowanym klientom.",
    convoLabel: "Przykładowa rozmowa",
    convo: [
      { from: "client", text: "Szukam mieszkania 2-pokojowego w Warszawie do 1 mln zł." },
      { from: "elliot", text: "Mam 3 pasujące oferty. Zanim je pokażę: planuje Pan przeprowadzkę w ciągu 1–3 miesięcy czy później?" },
      { from: "client", text: "Najlepiej w ciągu miesiąca." },
      { from: "elliot", text: "Rozumiem. Mogę zaproponować prezentację najlepiej dopasowanego mieszkania w ten czwartek o 17:00. Zarezerwować?" },
    ],
    timelineTitle: "Co dzieje się w tle",
    timeline: [
      { time: "1", label: "Rozumie, czego klient szuka", detail: "2 pokoje · Warszawa · do 1 mln zł" },
      { time: "2", label: "Zadaje pytania kwalifikujące", detail: "Termin przeprowadzki, finansowanie" },
      { time: "3", label: "Dopasowuje Twoje oferty", detail: "3 oferty" },
      { time: "4", label: "Ocenia klienta", detail: "Gorący" },
      { time: "5", label: "Proponuje wolne terminy z Twojego kalendarza" },
      { time: "6", label: "Umawia prezentację", detail: "Czwartek 17:00 · potwierdzenie wysłane e-mailem" },
      { time: "7", label: "Przekazuje klienta do Twojego CRM" },
      { time: "8", label: "Powiadamia agenta" },
      { time: "9", label: "Przypomina się, jeśli klient przestanie odpowiadać", detail: "Według Twoich zasad zatwierdzania" },
    ],
    note: "Przykład poglądowy na danych demonstracyjnych.",
    gainsTitle: "Co zyskuje Twoje biuro",
    gains: [
      { title: "Żadnych przegapionych wieczornych zapytań", text: "Ludzie przeglądają oferty po pracy. Elliot odpowiada im wtedy, a nie następnego dnia rano." },
      { title: "Mniej zmarnowanych prezentacji", text: "Budżet, termin i finansowanie są sprawdzone, zanim cokolwiek zostanie umówione." },
      { title: "Mniej pracy biurowej dla agentów", text: "Rezerwacje, potwierdzenia i wpisy w CRM powstają bez ręcznego przepisywania." },
      { title: "Jasne przekazanie klienta", text: "Gdy klient jest gotowy do rozmowy, agent dostaje go razem z całą historią rozmowy." },
    ],
    ctaTitle: "Sprawdź na własnych ofertach.",
    ctaLead: "Podczas krótkiej prezentacji konfigurujemy Elliota z kilkoma Twoimi nieruchomościami, a Ty zadajesz mu pytania, jakie zadają Twoi klienci.",
    primary: "Umów prezentację",
    secondary: "Porozmawiaj z Elliotem",
  },
} as const;

export default function RealEstatePage({ locale }: { locale: Locale }) {
  const t = CONTENT[locale];
  const ui = UI[locale];
  const { openChat } = useElliotChat();

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.lead} />

      <section className="bg-deep py-24 md:py-28">
        <div className="container-content grid gap-6 lg:grid-cols-2 lg:items-start">
          <figure className="panel rounded-[24px]">
            <figcaption className="border-b border-white/[0.07] px-6 py-4 text-sm text-slate-600">
              {t.convoLabel}
            </figcaption>
            <div className="space-y-3 p-5">
              {t.convo.map((m, i) => (
                <p
                  key={i}
                  className={
                    m.from === "client"
                      ? "ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[#2f6bff] px-4 py-2.5 text-[14px] leading-relaxed text-white"
                      : "panel-inner max-w-[90%] rounded-2xl rounded-bl-md px-4 py-2.5 text-[14px] leading-relaxed text-white/90"
                  }
                >
                  {m.text}
                </p>
              ))}
            </div>
          </figure>
          <div>
            <ActivityTimeline events={[...t.timeline]} title={t.timelineTitle} />
            <p className="mt-3 text-xs text-slate-600">{t.note}</p>
          </div>
        </div>
      </section>

      <section className="bg-night py-24 md:py-28">
        <div className="container-content">
          <h2 className="text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-[3rem]">{t.gainsTitle}</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.gains.map((g, i) => (
              <div key={g.title} className="glass rounded-[24px] p-7">
                <span className="text-gold text-[2.2rem] font-semibold leading-none">0{i + 1}</span>
                <h3 className="mt-5 text-[17px] font-semibold text-white">{g.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28 md:py-36">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,#071631_0%,#14325c_60%,#2b4f82_100%)]" />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(700px_380px_at_50%_100%,rgba(196,222,255,0.35),transparent_70%)]" />
        <div className="container-content relative max-w-3xl text-center">
          <h2 className="text-[2.3rem] font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-[3.4rem]">{t.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/75">{t.ctaLead}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={ui.bookHref} size="lg" arrow>
              {t.primary}
            </ButtonLink>
            <Button variant="secondary" size="lg" onClick={openChat}>
              {t.secondary}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
