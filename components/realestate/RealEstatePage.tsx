"use client";

import { Button, ButtonLink } from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import ActivityTimeline from "@/components/product/ActivityTimeline";
import { useElliotChat } from "@/components/chat/ElliotChatProvider";
import { IconTile } from "@/components/home/HomeIcon";
import PhotoSplit from "@/components/showcase/PhotoSplit";
import ScreenFrame from "@/components/showcase/ScreenFrame";
import apartment from "@/public/images/photos/apartment-interior.webp";
import { UI, type Locale } from "@/lib/i18n";

const CONTENT = {
  en: {
    eyebrow: "Real estate",
    title: "Built for estate agencies, from the first enquiry to the viewing.",
    lead: "Elliot knows your listings, your areas and your agents' calendars. It handles the questions your team answers every day, so your agents can spend their time with serious buyers, renters, sellers and landlords.",
    segmentsEyebrow: "Who it's for",
    segmentsTitle: "Sales, rentals, and agencies of every size.",
    segments: [
      { icon: "home", title: "Residential sales", text: "Buyers asking about price, area, parking or the service charge get an answer and a viewing. Sellers asking what their flat is worth get an agent and a valuation visit." },
      { icon: "calendar", title: "Rentals", text: "Rental enquiries move fast. Elliot checks move-in date, budget, length of stay and pets, and books viewings before the flat is gone." },
      { icon: "people", title: "Independent agencies", text: "A small team can't answer every message at 21:00. Elliot does, in your agency's name, and your agents pick up in the morning." },
      { icon: "chart", title: "Growing teams", text: "More agents, more calendars, more listings. Elliot books with whoever is free and keeps every enquiry in one place for the manager." },
    ],
    sidesEyebrow: "Both sides of the market",
    sidesTitle: "Buyers and renters. Sellers and landlords.",
    sidesLead: "Each enquiry is different. Elliot recognises which one it is and does the right next thing.",
    sidesPhotoAlt: "A bright, modern apartment interior",
    sides: [
      {
        title: "Buyers and renters",
        example: "“Is the 2-room flat in Mokotów still available? Can I see it this week?”",
        points: ["Answers from your listings: price, area, fees, availability", "Asks about budget, timing and financing", "Suggests up to three matching listings", "Books the viewing in an agent's calendar"],
      },
      {
        title: "Sellers and landlords",
        example: "“I'd like to sell my flat in Wola. What could it be worth?”",
        points: ["Never guesses a price", "Asks about the property and the timing", "Alerts an agent straight away", "Books a valuation visit"],
      },
    ],
    screenEyebrow: "What your agents see",
    screenTitle: "Every viewing, in every agent's calendar.",
    screenText: "Bookings Elliot makes appear in the agents' own Google Calendars and in the dashboard, with the client, the listing and the conversation behind them.",
    screenAlt: "The Elliot dashboard's calendar view, with sample data",
    screenNote: "Real Elliot dashboard, shown with sample data.",
    localEyebrow: "Made in Poland",
    localTitle: "At home in the Polish market, ready for Europe.",
    local: [
      { title: "Polish and English", text: "Elliot replies in the language the client writes in, usually Polish or English." },
      { title: "Your currency, your streets", text: "Prices in złoty or euro and addresses exactly as they are in your listings." },
      { title: "Your tools", text: "Listings from a spreadsheet or ASARI CRM, leads to your CRM directly or via Zapier or Make." },
      { title: "Your time zone", text: "Viewing times are offered in your time zone, from your agents' real calendars." },
    ],
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
    title: "Stworzony dla biur nieruchomości, od pierwszego zapytania po prezentację.",
    lead: "Elliot zna Twoje oferty, lokalizacje i kalendarze agentów. Odpowiada na pytania, które zespół słyszy codziennie, żeby agenci mogli poświęcić czas zdecydowanym kupującym, najemcom, sprzedającym i wynajmującym.",
    segmentsEyebrow: "Dla kogo",
    segmentsTitle: "Sprzedaż, wynajem i biura każdej wielkości.",
    segments: [
      { icon: "home", title: "Sprzedaż mieszkań i domów", text: "Kupujący pytający o cenę, okolicę, miejsce postojowe czy czynsz dostają odpowiedź i termin prezentacji. Sprzedający pytający o wartość mieszkania dostają agenta i wizytę wyceniającą." },
      { icon: "calendar", title: "Wynajem", text: "Zapytania o wynajem toczą się szybko. Elliot pyta o termin wprowadzenia, budżet, okres najmu i zwierzęta i umawia prezentację, zanim mieszkanie zniknie." },
      { icon: "people", title: "Niezależne biura", text: "Mały zespół nie odpisze na każdą wiadomość o 21:00. Elliot tak, w imieniu Twojego biura, a agenci przejmują rano." },
      { icon: "chart", title: "Rosnące zespoły", text: "Więcej agentów, kalendarzy i ofert. Elliot umawia z tym, kto ma wolny termin, a manager widzi każde zapytanie w jednym miejscu." },
    ],
    sidesEyebrow: "Obie strony rynku",
    sidesTitle: "Kupujący i najemcy. Sprzedający i wynajmujący.",
    sidesLead: "Każde zapytanie jest inne. Elliot rozpoznaje, z którym ma do czynienia, i robi właściwy następny krok.",
    sidesPhotoAlt: "Jasne, nowoczesne wnętrze mieszkania",
    sides: [
      {
        title: "Kupujący i najemcy",
        example: "„Czy mieszkanie 2-pokojowe na Mokotowie jest jeszcze dostępne? Mogę je obejrzeć w tym tygodniu?”",
        points: ["Odpowiada z Twoich ofert: cena, metraż, opłaty, dostępność", "Pyta o budżet, termin i finansowanie", "Proponuje do trzech pasujących ofert", "Umawia prezentację w kalendarzu agenta"],
      },
      {
        title: "Sprzedający i wynajmujący",
        example: "„Chcę sprzedać mieszkanie na Woli. Ile może być warte?”",
        points: ["Nigdy nie zgaduje ceny", "Pyta o nieruchomość i termin", "Od razu powiadamia agenta", "Umawia wizytę wyceniającą"],
      },
    ],
    screenEyebrow: "Co widzą agenci",
    screenTitle: "Każda prezentacja w kalendarzu każdego agenta.",
    screenText: "Rezerwacje Elliota trafiają do kalendarzy Google agentów i do panelu, razem z klientem, ofertą i rozmową.",
    screenAlt: "Widok kalendarza w panelu Elliota, na danych przykładowych",
    screenNote: "Prawdziwy panel Elliota, na danych przykładowych.",
    localEyebrow: "Stworzone w Polsce",
    localTitle: "U siebie na polskim rynku, gotowy na Europę.",
    local: [
      { title: "Po polsku i po angielsku", text: "Elliot odpowiada w języku, w którym pisze klient, zwykle po polsku lub po angielsku." },
      { title: "Twoja waluta, Twoje ulice", text: "Ceny w złotych lub euro i adresy dokładnie takie, jak w Twoich ofertach." },
      { title: "Twoje narzędzia", text: "Oferty z arkusza lub z ASARI CRM, klienci do Twojego CRM bezpośrednio albo przez Zapier lub Make." },
      { title: "Twoja strefa czasowa", text: "Terminy prezentacji w Twojej strefie czasowej, z prawdziwych kalendarzy agentów." },
    ],
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

      <section className="section-light py-24 md:py-28">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow eyebrow-center text-slate-600">{t.segmentsEyebrow}</p>
            <h2 className="mt-5 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.035em] text-fg md:text-[3rem]">{t.segmentsTitle}</h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.segments.map((g) => (
              <article key={g.title} className="panel flex flex-col rounded-[24px] p-7">
                <IconTile name={g.icon} />
                <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.01em] text-fg">{g.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">{g.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-night py-24 md:py-28">
        <div className="container-content">
          <PhotoSplit src={apartment} alt={t.sidesPhotoAlt} imageClassName="aspect-[4/3] lg:aspect-[4/5]">
            <p className="eyebrow">{t.sidesEyebrow}</p>
            <h2 className="mt-5 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.035em] text-fg md:text-[2.8rem]">{t.sidesTitle}</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-slate-600">{t.sidesLead}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.sides.map((side, i) => (
                <div key={side.title} className={`rounded-[22px] border p-6 ${i === 0 ? "border-[#d9a56c]/35 bg-[#d9a56c]/[0.07]" : "border-white/15 bg-white/[0.04]"}`}>
                  <p className={`text-[15px] font-semibold ${i === 0 ? "text-[#f3d4a4]" : "text-white"}`}>{side.title}</p>
                  <p className="mt-3 text-[14px] italic leading-snug text-slate-700">{side.example}</p>
                  <ul className="mt-4 space-y-2">
                    {side.points.map((x) => (
                      <li key={x} className="flex gap-2.5 text-[14px] leading-snug text-slate-700">
                        <span aria-hidden="true" className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${i === 0 ? "bg-[#e8c08e]" : "bg-white/60"}`} />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </PhotoSplit>
        </div>
      </section>

      <section className="section-sky py-24 md:py-28">
        <div className="container-content grid gap-6 lg:grid-cols-2 lg:items-start">
          <figure className="panel rounded-[24px]">
            <figcaption className="border-b border-fg/[0.07] px-6 py-4 text-sm text-slate-600">
              {t.convoLabel}
            </figcaption>
            <div className="space-y-3 p-5">
              {t.convo.map((m, i) => (
                <p
                  key={i}
                  className={
                    m.from === "client"
                      ? "ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[#2f6bff] px-4 py-2.5 text-[14px] leading-relaxed text-white"
                      : "panel-inner max-w-[90%] rounded-2xl rounded-bl-md px-4 py-2.5 text-[14px] leading-relaxed text-slate-700"
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

      <section className="section-night py-24 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.screenEyebrow}</p>
            <h2 className="mt-5 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.035em] text-fg md:text-[2.8rem]">{t.screenTitle}</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-slate-600">{t.screenText}</p>
          </div>
          <div>
            <ScreenFrame screen="calendar" alt={t.screenAlt} sizes="(min-width: 1024px) 680px, 100vw" />
            <p className="mt-4 text-center text-[13px] text-slate-400">{t.screenNote}</p>
          </div>
        </div>
      </section>

      <section className="section-light py-24 md:py-28">
        <div className="container-content">
          <h2 className="text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.035em] text-fg md:text-[3rem]">{t.gainsTitle}</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.gains.map((g, i) => (
              <div key={g.title} className="glass rounded-[24px] p-7">
                <span className="text-gold text-[2.2rem] font-semibold leading-none">0{i + 1}</span>
                <h3 className="mt-5 text-[17px] font-semibold text-fg">{g.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sky py-24 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.localEyebrow}</p>
            <h2 className="mt-5 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.035em] text-fg md:text-[2.8rem]">{t.localTitle}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.local.map((l) => (
              <div key={l.title} className="glass rounded-[22px] p-6">
                <h3 className="text-[16.5px] font-semibold text-fg">{l.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600">{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28 md:py-36">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,#071631_0%,#14325c_60%,#2b4f82_100%)]" />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(700px_380px_at_50%_100%,rgba(196,222,255,0.35),transparent_70%)]" />
        <div className="container-content relative max-w-3xl text-center">
          <h2 className="text-[2.3rem] font-semibold leading-[1.08] tracking-[-0.035em] text-fg md:text-[3.4rem]">{t.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-slate-700">{t.ctaLead}</p>
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
