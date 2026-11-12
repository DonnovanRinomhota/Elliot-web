// Homepage copy in both languages (November 2026 redesign).
//
// Each feature item names its capability ("cap"), our own record in
// lib/capabilities.ts; the site no longer shows statuses. "icon" picks the
// picture: a product logo (lib/brands.ts) where the item is a real product,
// otherwise one of our line icons. Both must be the same in both languages.

import type { Locale } from "@/lib/i18n";
import { assertSameShape, resolveStatuses, type Capability, type Status } from "@/lib/capabilities";

export type { Status };

export type IconName =
  | "chat"
  | "people"
  | "calendar"
  | "home"
  | "inbox"
  | "repeat"
  | "handover"
  | "mail"
  | "whatsapp"
  | "web"
  | "gmail"
  | "googleCalendar"
  | "googleDrive"
  | "asari"
  | "zapier"
  | "make"
  | "shield"
  | "bolt"
  | "chart"
  | "check"
  | "eye"
  | "book";

type Content = {
  hero: {
    eyebrow: string;
    /** Three lines; the last one is gold. */
    title: [string, string, string];
    lead: string;
    primary: string;
    secondary: string;
    /** Describes the hero picture for screen readers. */
    sceneAlt: string;
    strip: { title: string; text: string; icon: IconName }[];
  };
  does: {
    eyebrow: string;
    title: string;
    lead: string;
    /** `also`: a related part, shown underneath. */
    items: { title: string; text: string; cap: Capability; icon: IconName; also?: { cap: Capability; text: string } }[];
  };
  flow: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: { title: string; text: string }[];
    /** Words inside the pictures of the five steps. */
    visual: {
      channels: string[];
      clientMessage: string;
      elliotReply: string;
      questions: string[];
      slot: string;
      slotDay: string;
      booked: string;
      handover: string;
      hot: string;
    };
  };
  control: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; text: string; icon: IconName }[];
  };
  tools: {
    eyebrow: string;
    title: string;
    lead: string;
    connected: string;
    items: { name: string; text: string; icon: IconName }[];
  };
  promises: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string }[];
  };
  cta: { title: string; lead: string; primary: string; secondary: string };
};

const RAW: Record<Locale, Content> = {
  en: {
    hero: {
      eyebrow: "AI for estate agencies",
      title: ["More enquiries.", "More viewings.", "Less manual work."],
      lead: "Elliot helps estate agencies respond to enquiries, qualify prospects and book viewings, around the clock.",
      primary: "Request a demo",
      secondary: "See how it works",
      sceneAlt: "A laptop showing Elliot's dashboard overview: conversations this week, chats handled by Elliot, leads received and viewings booked.",
      strip: [
        { title: "Always on", text: "Never miss an opportunity again.", icon: "bolt" },
        { title: "Qualify leads", text: "Focus on the right opportunities.", icon: "people" },
        { title: "Secure & reliable", text: "Your data, your control.", icon: "shield" },
        { title: "Grow with you", text: "From one office to multiple locations.", icon: "chart" },
      ],
    },
    does: {
      eyebrow: "What Elliot does",
      title: "The repetitive part of the job, handled.",
      lead: "Elliot takes the questions, the qualifying and the booking off your team's plate, and leaves the relationship to you.",
      items: [
        {
          title: "Answers enquiries",
          text: "Replies in seconds, day or night, using your listings, fees and FAQs. If it doesn't know an answer, it says so and passes the question to you.",
          cap: "answers",
          icon: "chat",
        },
        {
          title: "Qualifies buyers and renters",
          text: "Asks about budget, area, size, timing and financing, then marks each lead hot, warm or cold so you know who to call first.",
          cap: "qualification",
          icon: "people",
        },
        {
          title: "Books viewings",
          text: "Offers free slots from your agents' own Google Calendars, books the one the client picks with an agent who's free, and sends a confirmation email. Reminds the client the day before; they can reply to confirm, move or cancel, and Elliot updates the calendar and tells the agent.",
          cap: "viewings",
          icon: "googleCalendar",
        },
        {
          title: "Wins sellers and landlords",
          text: "When someone wants to sell or let, or asks what their property is worth, Elliot never guesses a price. It asks about the property, alerts an agent and books a free valuation visit.",
          cap: "sellers",
          icon: "home",
        },
        {
          title: "Captures every lead",
          text: "Contact details and what each person is looking for go into your dashboard, and into your CRM if you use one.",
          cap: "leadCapture",
          icon: "inbox",
        },
        {
          title: "Follows up",
          text: "Follows up by email with people who go quiet. You approve each message before it goes out, or let them send automatically.",
          cap: "followUps",
          icon: "repeat",
          also: { cap: "whatsappFollowUps", text: "Follow-ups on WhatsApp" },
        },
        {
          title: "Hands over to your team",
          text: "When a client asks for a person, or a question falls outside your rules, Elliot flags it in your dashboard straight away.",
          cap: "handover",
          icon: "handover",
        },
        {
          title: "Email",
          text: "Answers the enquiries in your inbox (Gmail, Outlook or any other) in seconds, in the client's thread and in your agency's name. Enquiries from property portals included.",
          cap: "email",
          icon: "gmail",
          also: { cap: "emailAttachments", text: "Reading the PDFs and photos clients attach" },
        },
        {
          title: "WhatsApp",
          text: "The same conversations on your WhatsApp Business number: answers, qualifying and booking, in seconds.",
          cap: "whatsapp",
          icon: "whatsapp",
        },
      ],
    },
    flow: {
      eyebrow: "How it works",
      title: "From first message to booked viewing.",
      lead: "One conversation, usually a few minutes long, with no back-and-forth emails for your team.",
      steps: [
        { title: "A client gets in touch", text: "Through your website chat, email or WhatsApp[[whatsapp]], at any hour." },
        { title: "Elliot answers", text: "From your own listings, prices and FAQs, which you can edit at any time." },
        { title: "It asks the right questions", text: "Budget, area, size, timing and financing, in a natural way." },
        { title: "It books the viewing", text: "With an agent who's free, in their calendar, with a confirmation email to the client." },
        { title: "Your team takes over", text: "The lead, the full conversation and the booking are waiting in your dashboard." },
      ],
      visual: {
        channels: ["Website", "Email", "WhatsApp"],
        clientMessage: "Hi, is the 2-bed flat in Mokotów still available?",
        elliotReply: "Yes, it is. Shall I book you a viewing this week?",
        questions: ["Budget", "Area", "Move-in date", "Mortgage"],
        slot: "Thu 17:00",
        slotDay: "Viewing · ul. Puławska 145",
        booked: "Booked with Ola",
        handover: "Hot lead · Anna Kowalska",
        hot: "Hot",
      },
    },
    control: {
      eyebrow: "You stay in control",
      title: "Elliot works for you, within rules you set.",
      lead: "You decide what Elliot may do on its own and what needs your approval.",
      items: [
        {
          title: "Approval when it matters",
          icon: "check",
          text: "Follow-ups wait for your approval unless you let them send. Viewings can wait for your confirmation too, if you prefer. You can pause Elliot on any conversation and reply yourself.",
        },
        {
          title: "A person when it's needed",
          icon: "handover",
          text: "Clients can ask for a human at any point. Elliot passes the conversation on and tells them someone will be in touch.",
        },
        {
          title: "Everything on record",
          icon: "eye",
          text: "Every conversation, lead, booking and email is saved in your dashboard, so you can check what was said.",
        },
        {
          title: "Your knowledge, your words",
          icon: "book",
          text: "Elliot answers from information you give it. Update a price or a policy and it uses the new version straight away.",
        },
      ],
    },
    tools: {
      eyebrow: "Works with your tools",
      title: "Fits into how you already work.",
      lead: "No new system for your team to learn.",
      connected: "Connected",
      items: [
        { name: "Your website", text: "Chat on every page", icon: "web" },
        { name: "WhatsApp Business", text: "Your own number", icon: "whatsapp" },
        { name: "Gmail", text: "Replies in the same thread", icon: "gmail" },
        { name: "Outlook or any inbox", text: "Through forwarding", icon: "mail" },
        { name: "Google Calendar", text: "Each agent's calendar", icon: "googleCalendar" },
        { name: "Google Drive", text: "Listing photos", icon: "googleDrive" },
        { name: "ASARI CRM", text: "Listings every hour", icon: "asari" },
        { name: "Zapier", text: "Leads to your CRM", icon: "zapier" },
        { name: "Make", text: "Leads to your CRM", icon: "make" },
      ],
    },
    promises: {
      eyebrow: "What you can count on",
      title: "No made-up numbers. Just what you get.",
      items: [
        {
          title: "Replies in seconds, at any hour",
          text: "Evening and weekend enquiries get an answer while the client is still interested.",
        },
        {
          title: "You can step in any time",
          text: "Every conversation is in your dashboard. Take one over and Elliot pauses while your team replies.",
        },
        {
          title: "Set up for your agency",
          text: "Elliot is configured with your listings, your areas and your way of working before it talks to anyone.",
        },
        {
          title: "A real person behind it",
          text: "You deal directly with the person who sets Elliot up, watches how it performs and adjusts it with you.",
        },
      ],
    },
    cta: {
      title: "See Elliot working for your agency.",
      lead: "A short call where we set Elliot up with a few of your listings and you try it yourself.",
      primary: "Request a demo",
      secondary: "Talk to Elliot now",
    },
  },

  pl: {
    hero: {
      eyebrow: "AI dla biur nieruchomości",
      title: ["Więcej zapytań.", "Więcej prezentacji.", "Mniej ręcznej pracy."],
      lead: "Elliot pomaga biurom nieruchomości odpowiadać na zapytania, kwalifikować klientów i umawiać prezentacje, przez całą dobę.",
      primary: "Umów prezentację",
      secondary: "Zobacz, jak to działa",
      sceneAlt: "Laptop z panelem Elliota: rozmowy w tym tygodniu, rozmowy obsłużone przez Elliota, nowi klienci i umówione prezentacje.",
      strip: [
        { title: "Zawsze włączony", text: "Żadna okazja już nie przepadnie.", icon: "bolt" },
        { title: "Kwalifikuje klientów", text: "Skup się na właściwych okazjach.", icon: "people" },
        { title: "Bezpieczny i niezawodny", text: "Twoje dane, Twoja kontrola.", icon: "shield" },
        { title: "Rośnie razem z Tobą", text: "Od jednego biura do wielu oddziałów.", icon: "chart" },
      ],
    },
    does: {
      eyebrow: "Co robi Elliot",
      title: "Powtarzalna część pracy, z głowy.",
      lead: "Elliot zdejmuje z Twojego zespołu pytania, kwalifikowanie i umawianie terminów, a relację z klientem zostawia Tobie.",
      items: [
        {
          title: "Odpowiada na zapytania",
          text: "W kilka sekund, w dzień i w nocy, na podstawie Twoich ofert, opłat i najczęstszych pytań. Jeśli nie zna odpowiedzi, mówi o tym i przekazuje pytanie Tobie.",
          cap: "answers",
          icon: "chat",
        },
        {
          title: "Kwalifikuje kupujących i najemców",
          text: "Pyta o budżet, lokalizację, metraż, termin i finansowanie, a potem oznacza klienta jako gorącego, ciepłego lub zimnego, żebyś wiedział, do kogo dzwonić najpierw.",
          cap: "qualification",
          icon: "people",
        },
        {
          title: "Umawia prezentacje",
          text: "Proponuje wolne terminy z Kalendarzy Google Twoich agentów, rezerwuje wybrany u wolnego agenta i wysyła e-mail z potwierdzeniem. Dzień wcześniej przypomina klientowi o terminie; klient może odpisać, by potwierdzić, przenieść lub odwołać, a Elliot aktualizuje kalendarz i informuje agenta.",
          cap: "viewings",
          icon: "googleCalendar",
        },
        {
          title: "Pozyskuje sprzedających i wynajmujących",
          text: "Gdy ktoś chce sprzedać lub wynająć nieruchomość albo pyta, ile jest warta, Elliot nigdy nie zgaduje ceny. Pyta o nieruchomość, powiadamia agenta i umawia bezpłatną wizytę w celu wyceny.",
          cap: "sellers",
          icon: "home",
        },
        {
          title: "Zapisuje każdego klienta",
          text: "Dane kontaktowe i czego szuka każda osoba trafiają do Twojego panelu, a jeśli korzystasz z CRM, także tam.",
          cap: "leadCapture",
          icon: "inbox",
        },
        {
          title: "Przypomina się klientom",
          text: "Przypomina się e-mailem osobom, które przestały odpowiadać. Zatwierdzasz każdą wiadomość przed wysłaniem albo pozwalasz, by wychodziły same.",
          cap: "followUps",
          icon: "repeat",
          also: { cap: "whatsappFollowUps", text: "Przypomnienia na WhatsAppie" },
        },
        {
          title: "Przekazuje rozmowę zespołowi",
          text: "Gdy klient prosi o kontakt z człowiekiem albo pytanie wykracza poza Twoje zasady, Elliot od razu oznacza to w panelu.",
          cap: "handover",
          icon: "handover",
        },
        {
          title: "E-mail",
          text: "Odpowiada na zapytania w Twojej skrzynce (Gmail, Outlook lub dowolna inna) w kilka sekund, w tym samym wątku i w imieniu Twojego biura. Także na zapytania z portali ogłoszeniowych.",
          cap: "email",
          icon: "gmail",
          also: { cap: "emailAttachments", text: "Czytanie plików PDF i zdjęć załączanych przez klientów" },
        },
        {
          title: "WhatsApp",
          text: "Te same rozmowy na Twoim numerze WhatsApp Business: odpowiedzi, kwalifikacja i umawianie, w kilka sekund.",
          cap: "whatsapp",
          icon: "whatsapp",
        },
      ],
    },
    flow: {
      eyebrow: "Jak to działa",
      title: "Od pierwszej wiadomości do umówionej prezentacji.",
      lead: "Jedna rozmowa, zwykle kilkuminutowa, bez wymiany maili po stronie Twojego zespołu.",
      steps: [
        { title: "Klient się odzywa", text: "Przez czat na stronie, e-mail lub WhatsApp[[whatsapp]], o dowolnej porze." },
        { title: "Elliot odpowiada", text: "Na podstawie Twoich ofert, cen i najczęstszych pytań, które możesz zmieniać w każdej chwili." },
        { title: "Zadaje właściwe pytania", text: "O budżet, lokalizację, metraż, termin i finansowanie, w naturalny sposób." },
        { title: "Umawia prezentację", text: "U wolnego agenta, w jego kalendarzu, z e-mailem potwierdzającym dla klienta." },
        { title: "Twój zespół przejmuje", text: "Klient, cała rozmowa i rezerwacja czekają w Twoim panelu." },
      ],
      visual: {
        channels: ["Strona", "E-mail", "WhatsApp"],
        clientMessage: "Dzień dobry, czy mieszkanie 2-pokojowe na Mokotowie jest dostępne?",
        elliotReply: "Tak. Czy umówić prezentację w tym tygodniu?",
        questions: ["Budżet", "Lokalizacja", "Termin", "Kredyt"],
        slot: "czw. 17:00",
        slotDay: "Prezentacja · ul. Puławska 145",
        booked: "Umówione z Olą",
        handover: "Gorący klient · Anna Kowalska",
        hot: "Gorący",
      },
    },
    control: {
      eyebrow: "Masz kontrolę",
      title: "Elliot pracuje dla Ciebie, według Twoich zasad.",
      lead: "Ty decydujesz, co Elliot może robić sam, a co wymaga Twojej zgody.",
      items: [
        {
          title: "Zgoda tam, gdzie to ważne",
          icon: "check",
          text: "Przypomnienia czekają na Twoje zatwierdzenie, chyba że pozwolisz im wychodzić same. Prezentacje też mogą czekać na Twoje potwierdzenie, jeśli wolisz. W każdej rozmowie możesz wstrzymać Elliota i odpowiedzieć sam.",
        },
        {
          title: "Człowiek, gdy jest potrzebny",
          icon: "handover",
          text: "Klient może w każdej chwili poprosić o kontakt z człowiekiem. Elliot przekazuje rozmowę i informuje, że ktoś się odezwie.",
        },
        {
          title: "Wszystko zapisane",
          icon: "eye",
          text: "Każda rozmowa, klient, rezerwacja i e-mail są zapisane w panelu, więc zawsze sprawdzisz, co zostało powiedziane.",
        },
        {
          title: "Twoja wiedza, Twoje słowa",
          icon: "book",
          text: "Elliot odpowiada na podstawie informacji od Ciebie. Zmienisz cenę lub zasady, a od razu używa nowej wersji.",
        },
      ],
    },
    tools: {
      eyebrow: "Współpracuje z Twoimi narzędziami",
      title: "Pasuje do tego, jak już pracujesz.",
      lead: "Twój zespół nie musi uczyć się nowego systemu.",
      connected: "Połączono",
      items: [
        { name: "Twoja strona", text: "Czat na każdej podstronie", icon: "web" },
        { name: "WhatsApp Business", text: "Twój własny numer", icon: "whatsapp" },
        { name: "Gmail", text: "Odpowiedzi w tym samym wątku", icon: "gmail" },
        { name: "Outlook lub inna skrzynka", text: "Przez przekierowanie", icon: "mail" },
        { name: "Kalendarz Google", text: "Kalendarz każdego agenta", icon: "googleCalendar" },
        { name: "Dysk Google", text: "Zdjęcia ofert", icon: "googleDrive" },
        { name: "ASARI CRM", text: "Oferty co godzinę", icon: "asari" },
        { name: "Zapier", text: "Klienci do Twojego CRM", icon: "zapier" },
        { name: "Make", text: "Klienci do Twojego CRM", icon: "make" },
      ],
    },
    promises: {
      eyebrow: "Na co możesz liczyć",
      title: "Bez wymyślonych liczb. Tylko to, co dostajesz.",
      items: [
        {
          title: "Odpowiedź w kilka sekund, o każdej porze",
          text: "Zapytania wieczorem i w weekend dostają odpowiedź, póki klient jest jeszcze zainteresowany.",
        },
        {
          title: "Możesz wkroczyć w każdej chwili",
          text: "Każda rozmowa jest w Twoim panelu. Przejmij ją, a Elliot zatrzyma się, gdy odpowiada Twój zespół.",
        },
        {
          title: "Skonfigurowany pod Twoje biuro",
          text: "Zanim Elliot z kimkolwiek porozmawia, poznaje Twoje oferty, Twoje lokalizacje i Twój sposób pracy.",
        },
        {
          title: "Za Elliotem stoi człowiek",
          text: "Współpracujesz bezpośrednio z osobą, która konfiguruje Elliota, sprawdza, jak sobie radzi, i razem z Tobą go dopracowuje.",
        },
      ],
    },
    cta: {
      title: "Zobacz Elliota w pracy dla Twojego biura.",
      lead: "Krótka rozmowa, podczas której konfigurujemy Elliota z kilkoma Twoimi ofertami, a Ty sam go testujesz.",
      primary: "Umów prezentację",
      secondary: "Porozmawiaj z Elliotem",
    },
  },
};

// English and Polish must have the same items in the same order: a mismatch
// stops the build.
assertSameShape("home", RAW.en, RAW.pl);

export const HOME: Record<Locale, Content> = {
  en: resolveStatuses(RAW.en, "en"),
  pl: resolveStatuses(RAW.pl, "pl"),
};
