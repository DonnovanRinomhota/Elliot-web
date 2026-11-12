// Copy for the Product and How-it-works pages, in both languages.
// Statuses come from lib/capabilities.ts (see lib/content/home.ts for how).

import type { Locale } from "@/lib/i18n";
import { assertSameShape, resolveStatuses, type Capability } from "@/lib/capabilities";

type Heading = { eyebrow: string; title: string; description: string };
export type FeatureIcon = "support" | "target" | "calendar" | "mail" | "followup" | "knowledge" | "handoff" | "database" | "analytics" | "gmail" | "whatsapp" | "googleCalendar";

type Content = {
  productMeta: { title: string; description: string };
  productHero: Heading;
  features: Heading & { items: { title: string; detail: string; icon: FeatureIcon; cap?: Capability }[] };
  notJustChatbot: {
    eyebrow: string;
    title: string;
    lead: string;
    chatbotLabel: string;
    chatbotTitle: string;
    chatbotText: string;
    steps: string[];
    elliotText: string;
  };
  handoff: Heading & {
    simple: string;
    complex: string;
    cardLabel: string;
    rows: { label: string; value: string }[];
    note: string;
  };
  permissions: Heading & { columns: { title: string; tag: string; tone: "pulse" | "amber" | "neutral"; items: string[] }[] };
  integrations: Heading;
  security: Heading & { points: { title: string; detail: string }[] };
  finalCta: { title: string; lead: string; primary: string; secondary: string };
  howMeta: { title: string; description: string };
  howHero: Heading;
  steps: Heading & { items: { title: string; detail: string }[] };
  lifecycle: Heading & {
    stages: { title: string; detail: string }[];
    exampleLabel: string;
    example: { label: string; text: string }[];
    /** Words inside the pictures of the example. */
    exampleVisual: {
      booking: string;
      bookingValue: string;
      calendar: string;
      calendarValue: string;
      from: string;
      to: string;
      notified: string;
    };
  };
  dashboard: Heading & { badge: string; active: string; recent: string; metrics: string[]; rows: { name: string; note: string }[]; caption: string };
};

const RAW: Record<Locale, Content> = {
  en: {
    productMeta: {
      title: "Product",
      description:
        "Elliot answers estate agencies' enquiries on the website, by email and on WhatsApp[[whatsapp]], qualifies buyers, renters and sellers, and books viewings and valuations with your agents.",
    },
    productHero: {
      eyebrow: "Product",
      title: "Your agency's front office, always on.",
      description:
        "Elliot answers buyers, renters, sellers and landlords on your website, by email and on WhatsApp[[whatsapp]], books viewings and valuations with your agents, and brings in a person when it matters.",
    },
    features: {
      eyebrow: "Capabilities",
      title: "One assistant, the whole enquiry.",
      description: "Elliot is set up around how your agency works, not a fixed script.",
      items: [
        { title: "Customer questions", detail: "Answers questions from your own listings, fees and FAQs, and says so when it doesn't know.", icon: "support", cap: "answers" },
        { title: "Lead qualification", detail: "Asks the right questions and scores each lead hot, warm or cold.", icon: "target", cap: "qualification" },
        { title: "Viewings", detail: "Books viewings into your agents' own Google Calendars, reminds clients the day before, and lets them confirm, move or cancel by message.", icon: "googleCalendar", cap: "viewings" },
        { title: "Sellers and valuations", detail: "Takes valuation requests from people selling or letting, alerts an agent and books the valuation visit.", icon: "target", cap: "sellers" },
        { title: "Email", detail: "Answers enquiries in your inbox (Gmail, Outlook or any other) in seconds, in your agency's name, and reads the PDFs and photos clients attach.", icon: "gmail", cap: "email" },
        { title: "WhatsApp", detail: "The same conversations on your WhatsApp Business number: answers, qualifying and booking, in seconds.", icon: "whatsapp", cap: "whatsapp" },
        { title: "Follow-ups", detail: "Follows up by email with people who go quiet, within your approval rules. Follow-ups on WhatsApp[[whatsappFollowUps]] come with WhatsApp.", icon: "followup", cap: "followUps" },
        { title: "Listings and knowledge", detail: "Your listings from a spreadsheet or ASARI CRM[[asari]], plus your fees and FAQs. Update them and Elliot uses the new version.", icon: "knowledge", cap: "listingsImport" },
        { title: "Human handover", detail: "Flags conversations for your team when a person should take over.", icon: "handoff", cap: "handover" },
        { title: "CRM sync", detail: "Sends new leads and bookings to your CRM, directly or via Zapier or Make.", icon: "database", cap: "crm" },
        { title: "Dashboard", detail: "Leads, bookings, conversations and approvals in one place.", icon: "analytics" },
      ],
    },
    notJustChatbot: {
      eyebrow: "The difference",
      title: "Not just a chatbot.",
      lead: "Most chatbots answer questions. Elliot completes work.",
      chatbotLabel: "Chatbot",
      chatbotTitle: "Answers questions.",
      chatbotText: "A single turn: input, reply. Nothing is retrieved, decided, or carried out on your systems.",
      steps: ["Understands", "Looks up your listings", "Asks what matters", "Books in the calendar", "Saves the lead", "Follows up", "Hands over when needed"],
      elliotText:
        "A full loop, every time: from understanding what's being asked to acting on it in your calendar, CRM and dashboard, and knowing when to bring a person in.",
    },
    handoff: {
      eyebrow: "Trust",
      title: "Elliot knows when to step aside.",
      description: "Simple questions are answered straight away. Anything complex, sensitive or high-value goes to a person, with the whole conversation attached.",
      simple: "Simple question → Elliot answers",
      complex: "Complex situation → Elliot hands over",
      cardLabel: "What your agent receives",
      rows: [
        { label: "Conversation", value: "The full transcript" },
        { label: "Client", value: "Anna K. · anna@example.com · +48 600 000 000" },
        { label: "Why it was handed over", value: "Asked for custom contract terms" },
        { label: "Done so far", value: "Lead scored hot, viewing booked" },
      ],
      note: "Illustrative example.",
    },
    permissions: {
      eyebrow: "Control",
      title: "You decide what Elliot can do.",
      description: "You choose what Elliot does on its own and what waits for your approval.",
      columns: [
        {
          title: "Elliot does this by itself",
          tag: "Allowed",
          tone: "pulse",
          items: ["Answer on chat, email and WhatsApp[[whatsapp]]", "Capture and score leads", "Book viewings and valuations (unless you prefer to confirm them)", "Send records to your CRM"],
        },
        {
          title: "Waits for your approval",
          tag: "Approval",
          tone: "amber",
          items: ["Follow-up emails (unless you allow them)", "Follow-up WhatsApp messages[[whatsappFollowUps]] (unless you allow them)", "Viewings, if you switch on confirmation"],
        },
        {
          title: "Handed to your team",
          tag: "Handover",
          tone: "neutral",
          items: ["Requests to speak to a person", "Questions outside its rules", "Hot leads and sellers ready to talk"],
        },
      ],
    },
    integrations: {
      eyebrow: "Integrations",
      title: "Fits into the tools you already use.",
      description: "Elliot connects to your website, inbox, calendars, CRM and WhatsApp.",
    },
    security: {
      eyebrow: "Data and trust",
      title: "Your clients' details, handled carefully.",
      description: "Agencies hold sensitive information. Elliot is built so it stays yours.",
      points: [
        { title: "Your data, kept apart", detail: "Each agency's data is separated from every other agency's by the database itself, not just by the app." },
        { title: "Clients know it's an AI", detail: "Elliot says it's an AI assistant from the first message and passes clients to a person whenever they ask." },
        { title: "Files stay private", detail: "Documents clients email are stored privately, and only your team can open them." },
        { title: "Everything on record", detail: "Every message, booking and hand-over is saved, so you can check what Elliot said and did." },
        { title: "You see every visit", detail: "If the Elliot team opens your dashboard to help, you see when and what they looked at." },
        { title: "GDPR", detail: "You remain the controller of your clients' data; we process it for you under a data processing agreement. Details are in the privacy policy." },
      ],
    },
    finalCta: {
      title: "See Elliot working for your agency.",
      lead: "Book a short demo and we'll set Elliot up with a few of your own listings so you can try it yourself.",
      primary: "Request a demo",
      secondary: "Talk to Elliot",
    },
    howMeta: {
      title: "How It Works",
      description: "How Elliot is set up for an estate agency: connect your channels and calendars, teach it your listings, set the rules, and go live.",
    },
    howHero: {
      eyebrow: "How it works",
      title: "From first call to answering your clients.",
      description: "Setting Elliot up is closer to onboarding a new colleague than installing software. Donnovan does it with you, and Elliot is usually ready within days.",
    },
    steps: {
      eyebrow: "How it works",
      title: "Four steps, done with you.",
      description: "Once it is live, Elliot answers around the clock.",
      items: [
        { title: "Connect", detail: "Your website chat, email inbox and your agents' calendars. WhatsApp[[whatsapp]] and ASARI[[asari]] if you use them." },
        { title: "Teach", detail: "Your listings, fees, areas and the questions clients ask most." },
        { title: "Set the rules", detail: "What Elliot does on its own, what waits for approval, who gets which leads and when to hand over." },
        { title: "Go live", detail: "After you've tried it yourself, Elliot starts answering your clients." },
      ],
    },
    lifecycle: {
      eyebrow: "Before and after go-live",
      title: "Set up. Try. Go live. Review.",
      description: "Elliot isn't switched on blind: you try it with your own listings first.",
      stages: [
        { title: "Set up", detail: "Donnovan loads your listings, fees and FAQs and sets the rules with you." },
        { title: "Try", detail: "You ask Elliot what your clients would ask, before any client talks to it." },
        { title: "Go live", detail: "Elliot is switched on for your website chat and email, and WhatsApp[[whatsapp]] where connected." },
        { title: "Review", detail: "Read any conversation, see the leads and viewings, and tell us what to adjust." },
      ],
      exampleLabel: "Example: what one message sets in motion",
      example: [
        { label: "Client", text: "“Can I move my viewing to Friday?”" },
        { label: "Elliot checks", text: "the client's booking and the agent's calendar" },
        { label: "Elliot does", text: "moves the viewing to Friday 14:00, updates the calendar, tells the agent" },
        { label: "Elliot replies", text: "“Done. Your viewing is now on Friday at 14:00.”" },
      ],
      exampleVisual: {
        booking: "Booking",
        bookingValue: "Thu 17:00 · ul. Puławska 145",
        calendar: "Ola's calendar",
        calendarValue: "Fri 14:00 is free",
        from: "Thu 17:00",
        to: "Fri 14:00",
        notified: "Ola notified",
      },
    },
    dashboard: {
      eyebrow: "Dashboard",
      title: "Everything Elliot does, in one place.",
      description: "Your team sees every conversation, lead and viewing Elliot handles. The dashboard is in English.",
      badge: "Example data",
      active: "Elliot active",
      recent: "Recent conversations",
      metrics: ["Conversations", "New leads", "Hot leads", "Viewings booked"],
      rows: [
        { name: "Anna K.", note: "2-bedroom flat enquiry" },
        { name: "Marek W.", note: "Moved a viewing" },
        { name: "Website visitor", note: "Question about fees" },
      ],
      caption: "Illustrative mockup with example data.",
    },
  },

  pl: {
    productMeta: {
      title: "Produkt",
      description:
        "Elliot odpowiada na zapytania do biur nieruchomości na stronie, w e-mailu i na WhatsAppie[[whatsapp]], kwalifikuje kupujących, najemców i sprzedających oraz umawia prezentacje i wyceny z Twoimi agentami.",
    },
    productHero: {
      eyebrow: "Produkt",
      title: "Recepcja Twojego biura, czynna zawsze.",
      description:
        "Elliot odpowiada kupującym, najemcom, sprzedającym i wynajmującym na Twojej stronie, w e-mailu i na WhatsAppie[[whatsapp]], umawia prezentacje i wyceny z Twoimi agentami i włącza człowieka, gdy to ważne.",
    },
    features: {
      eyebrow: "Możliwości",
      title: "Jeden asystent, całe zapytanie.",
      description: "Elliot jest ustawiany pod sposób pracy Twojego biura, a nie pod sztywny scenariusz.",
      items: [
        { title: "Pytania klientów", detail: "Odpowiada na podstawie Twoich ofert, opłat i najczęstszych pytań, a gdy czegoś nie wie, mówi o tym.", icon: "support", cap: "answers" },
        { title: "Kwalifikacja klientów", detail: "Zadaje właściwe pytania i ocenia każdego klienta jako gorącego, ciepłego lub zimnego.", icon: "target", cap: "qualification" },
        { title: "Prezentacje", detail: "Umawia prezentacje w Kalendarzach Google Twoich agentów, przypomina klientom dzień wcześniej i pozwala im potwierdzić, przenieść lub odwołać termin wiadomością.", icon: "googleCalendar", cap: "viewings" },
        { title: "Sprzedający i wyceny", detail: "Przyjmuje prośby o wycenę od osób, które sprzedają lub wynajmują, powiadamia agenta i umawia wizytę.", icon: "target", cap: "sellers" },
        { title: "E-mail", detail: "Odpowiada na zapytania w Twojej skrzynce (Gmail, Outlook lub dowolna inna) w kilka sekund, w imieniu Twojego biura, i czyta pliki PDF oraz zdjęcia od klientów.", icon: "gmail", cap: "email" },
        { title: "WhatsApp", detail: "Te same rozmowy na Twoim numerze WhatsApp Business: odpowiedzi, kwalifikacja i umawianie, w kilka sekund.", icon: "whatsapp", cap: "whatsapp" },
        { title: "Przypomnienia", detail: "Przypomina się e-mailem osobom, które przestały odpowiadać, według Twoich zasad zatwierdzania. Przypomnienia na WhatsAppie[[whatsappFollowUps]] pojawią się razem z WhatsAppem.", icon: "followup", cap: "followUps" },
        { title: "Oferty i wiedza", detail: "Twoje oferty z arkusza lub z ASARI CRM[[asari]], do tego opłaty i najczęstsze pytania. Zmieniasz je, a Elliot korzysta z nowej wersji.", icon: "knowledge", cap: "listingsImport" },
        { title: "Przekazanie człowiekowi", detail: "Oznacza rozmowy dla Twojego zespołu, gdy powinien je przejąć człowiek.", icon: "handoff", cap: "handover" },
        { title: "Synchronizacja z CRM", detail: "Przekazuje nowych klientów i rezerwacje do Twojego CRM, bezpośrednio lub przez Zapier albo Make.", icon: "database", cap: "crm" },
        { title: "Panel", detail: "Klienci, rezerwacje, rozmowy i zatwierdzenia w jednym miejscu.", icon: "analytics" },
      ],
    },
    notJustChatbot: {
      eyebrow: "Różnica",
      title: "Nie tylko chatbot.",
      lead: "Większość chatbotów odpowiada na pytania. Elliot wykonuje pracę.",
      chatbotLabel: "Chatbot",
      chatbotTitle: "Odpowiada na pytania.",
      chatbotText: "Jedna wymiana: pytanie, odpowiedź. Niczego nie sprawdza, o niczym nie decyduje i niczego nie robi w Twoich systemach.",
      steps: ["Rozumie", "Sprawdza Twoje oferty", "Pyta o to, co ważne", "Rezerwuje w kalendarzu", "Zapisuje klienta", "Przypomina się", "Przekazuje, gdy trzeba"],
      elliotText:
        "Pełny cykl, za każdym razem: od zrozumienia pytania, przez działanie w Twoim kalendarzu, CRM i panelu, po wiedzę, kiedy włączyć człowieka.",
    },
    handoff: {
      eyebrow: "Zaufanie",
      title: "Elliot wie, kiedy ustąpić miejsca.",
      description: "Na proste pytania odpowiada od razu. Wszystko, co złożone, wrażliwe lub o dużej wartości, trafia do człowieka razem z całą rozmową.",
      simple: "Proste pytanie → odpowiada Elliot",
      complex: "Złożona sytuacja → Elliot przekazuje",
      cardLabel: "Co dostaje Twój agent",
      rows: [
        { label: "Rozmowa", value: "Pełny zapis" },
        { label: "Klient", value: "Anna K. · anna@example.com · +48 600 000 000" },
        { label: "Powód przekazania", value: "Prośba o niestandardowe warunki umowy" },
        { label: "Co już zrobiono", value: "Klient oceniony jako gorący, prezentacja umówiona" },
      ],
      note: "Przykład poglądowy.",
    },
    permissions: {
      eyebrow: "Kontrola",
      title: "Ty decydujesz, co Elliot może robić.",
      description: "Wybierasz, co Elliot robi sam, a co czeka na Twoją zgodę.",
      columns: [
        {
          title: "Elliot robi to sam",
          tag: "Dozwolone",
          tone: "pulse",
          items: ["Odpowiada na czacie, w e-mailu i na WhatsAppie[[whatsapp]]", "Zapisuje i ocenia klientów", "Umawia prezentacje i wyceny (chyba że wolisz je potwierdzać)", "Przekazuje dane do Twojego CRM"],
        },
        {
          title: "Czeka na Twoją zgodę",
          tag: "Zgoda",
          tone: "amber",
          items: ["Przypomnienia e-mailem (chyba że na nie pozwolisz)", "Przypomnienia na WhatsAppie[[whatsappFollowUps]] (chyba że na nie pozwolisz)", "Prezentacje, jeśli włączysz potwierdzanie"],
        },
        {
          title: "Trafia do Twojego zespołu",
          tag: "Przekazanie",
          tone: "neutral",
          items: ["Prośby o rozmowę z człowiekiem", "Pytania poza jego zasadami", "Gorący klienci i sprzedający gotowi do rozmowy"],
        },
      ],
    },
    integrations: {
      eyebrow: "Integracje",
      title: "Pasuje do narzędzi, których już używasz.",
      description: "Elliot łączy się z Twoją stroną, skrzynką, kalendarzami, CRM i WhatsAppem.",
    },
    security: {
      eyebrow: "Dane i zaufanie",
      title: "Dane Twoich klientów pod dobrą opieką.",
      description: "Biura przechowują wrażliwe informacje. Elliot jest zbudowany tak, by pozostały Twoje.",
      points: [
        { title: "Twoje dane, oddzielone", detail: "Dane każdego biura są oddzielone od danych pozostałych na poziomie samej bazy danych, a nie tylko aplikacji." },
        { title: "Klient wie, że to AI", detail: "Elliot od pierwszej wiadomości mówi, że jest asystentem AI, i przekazuje klienta człowiekowi, gdy tylko ten o to poprosi." },
        { title: "Pliki pozostają prywatne", detail: "Dokumenty przesyłane przez klientów e-mailem są przechowywane prywatnie i tylko Twój zespół może je otworzyć." },
        { title: "Wszystko zapisane", detail: "Każda wiadomość, rezerwacja i przekazanie są zapisane, więc sprawdzisz, co Elliot powiedział i zrobił." },
        { title: "Widzisz każdą wizytę", detail: "Jeśli zespół Elliota otworzy Twój panel, żeby pomóc, widzisz, kiedy to zrobił i co oglądał." },
        { title: "RODO", detail: "Pozostajesz administratorem danych swoich klientów; przetwarzamy je dla Ciebie na podstawie umowy powierzenia. Szczegóły są w polityce prywatności." },
      ],
    },
    finalCta: {
      title: "Zobacz Elliota w pracy dla Twojego biura.",
      lead: "Umów krótką prezentację, a ustawimy Elliota z kilkoma Twoimi ofertami, żebyś mógł go sam wypróbować.",
      primary: "Umów prezentację",
      secondary: "Porozmawiaj z Elliotem",
    },
    howMeta: {
      title: "Jak to działa",
      description: "Jak wygląda wdrożenie Elliota w biurze nieruchomości: podłączenie kanałów i kalendarzy, nauka ofert, ustalenie zasad i start.",
    },
    howHero: {
      eyebrow: "Jak to działa",
      title: "Od pierwszej rozmowy do odpowiadania Twoim klientom.",
      description: "Wdrożenie Elliota bardziej przypomina wprowadzenie nowego pracownika niż instalację programu. Donnovan robi to razem z Tobą, a Elliot jest zwykle gotowy w kilka dni.",
    },
    steps: {
      eyebrow: "Jak to działa",
      title: "Cztery kroki, razem z Tobą.",
      description: "Po uruchomieniu Elliot odpowiada przez całą dobę.",
      items: [
        { title: "Podłączenie", detail: "Czat na stronie, skrzynka e-mail i kalendarze Twoich agentów. WhatsApp[[whatsapp]] i ASARI[[asari]], jeśli z nich korzystasz." },
        { title: "Nauka", detail: "Twoje oferty, opłaty, lokalizacje i pytania, które klienci zadają najczęściej." },
        { title: "Zasady", detail: "Co Elliot robi sam, co czeka na zgodę, kto dostaje których klientów i kiedy przekazać rozmowę." },
        { title: "Start", detail: "Gdy sam go wypróbujesz, Elliot zaczyna odpowiadać Twoim klientom." },
      ],
    },
    lifecycle: {
      eyebrow: "Przed startem i po nim",
      title: "Konfiguracja. Próba. Start. Przegląd.",
      description: "Elliot nie jest włączany w ciemno: najpierw wypróbujesz go na własnych ofertach.",
      stages: [
        { title: "Konfiguracja", detail: "Donnovan wczytuje Twoje oferty, opłaty i najczęstsze pytania i ustala z Tobą zasady." },
        { title: "Próba", detail: "Zadajesz Elliotowi pytania, jakie zadają Twoi klienci, zanim porozmawia z nim jakikolwiek klient." },
        { title: "Start", detail: "Elliot zostaje włączony na czacie na stronie i w e-mailu, a tam, gdzie jest podłączony, także na WhatsAppie[[whatsapp]]." },
        { title: "Przegląd", detail: "Czytasz dowolną rozmowę, widzisz klientów i prezentacje i mówisz nam, co poprawić." },
      ],
      exampleLabel: "Przykład: co uruchamia jedna wiadomość",
      example: [
        { label: "Klient", text: "„Czy mogę przenieść prezentację na piątek?”" },
        { label: "Elliot sprawdza", text: "rezerwację klienta i kalendarz agenta" },
        { label: "Elliot robi", text: "przenosi prezentację na piątek 14:00, aktualizuje kalendarz, informuje agenta" },
        { label: "Elliot odpowiada", text: "„Gotowe. Prezentacja jest teraz w piątek o 14:00.”" },
      ],
      exampleVisual: {
        booking: "Rezerwacja",
        bookingValue: "czw. 17:00 · ul. Puławska 145",
        calendar: "Kalendarz Oli",
        calendarValue: "pt. 14:00 jest wolne",
        from: "czw. 17:00",
        to: "pt. 14:00",
        notified: "Ola powiadomiona",
      },
    },
    dashboard: {
      eyebrow: "Panel",
      title: "Wszystko, co robi Elliot, w jednym miejscu.",
      description: "Twój zespół widzi każdą rozmowę, klienta i prezentację, którymi zajmuje się Elliot. Panel jest po angielsku.",
      badge: "Dane przykładowe",
      active: "Elliot aktywny",
      recent: "Ostatnie rozmowy",
      metrics: ["Rozmowy", "Nowi klienci", "Gorący klienci", "Umówione prezentacje"],
      rows: [
        { name: "Anna K.", note: "Zapytanie o mieszkanie 2-pokojowe" },
        { name: "Marek W.", note: "Przeniesiona prezentacja" },
        { name: "Gość ze strony", note: "Pytanie o opłaty" },
      ],
      caption: "Poglądowa makieta z przykładowymi danymi.",
    },
  },
};

assertSameShape("product", RAW.en, RAW.pl);

export const PRODUCT: Record<Locale, Content> = {
  en: resolveStatuses(RAW.en, "en"),
  pl: resolveStatuses(RAW.pl, "pl"),
};
