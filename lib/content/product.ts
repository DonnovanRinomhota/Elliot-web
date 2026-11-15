// Copy for the Product and How-it-works pages, in both languages.
// Statuses come from lib/capabilities.ts (see lib/content/home.ts for how).

import type { Locale } from "@/lib/i18n";
import { assertSameShape, resolveStatuses } from "@/lib/capabilities";
import type { ScreenKey } from "@/lib/content/screens";

type Heading = { eyebrow: string; title: string; description: string };

type Content = {
  productMeta: { title: string; description: string };
  productHero: Heading;
  /** The platform story: each part of the enquiry, what Elliot automates and what your team controls. */
  platform: Heading & {
    automatesLabel: string;
    controlsLabel: string;
    chapters: { title: string; text: string; screen: ScreenKey; screenAlt: string; automates: string[]; controls: string[] }[];
    roadmap: string;
  };
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
  dashboard: Heading & { screenAlt: string; caption: string };
};

const RAW: Record<Locale, Content> = {
  en: {
    productMeta: {
      title: "Product",
      description:
        "How Elliot runs the operational side of every property enquiry: capture, qualification, listing matching, viewings, follow-ups and handover to your agents, in one dashboard.",
    },
    productHero: {
      eyebrow: "Product",
      title: "The operational side of every enquiry, handled.",
      description:
        "Elliot captures each enquiry, understands it, qualifies the client, matches your listings, books the viewing and follows up, then hands the opportunity to the right person. Your agents see all of it in one dashboard.",
    },
    platform: {
      eyebrow: "The platform",
      title: "Every part of the enquiry, connected.",
      description: "Elliot does the operational work at each stage. Your team keeps the decisions, the relationship and the deal.",
      automatesLabel: "Elliot automates",
      controlsLabel: "Your team controls",
      chapters: [
        {
          title: "Capture and understand",
          text: "Every enquiry from your website chat, your inbox and WhatsApp[[whatsapp]] lands in one place. Elliot works out what the client wants, buying, renting, selling or letting, and answers from your own listings, fees and FAQs.",
          screen: "conversations",
          screenAlt: "The Elliot dashboard's conversations view, with sample data",
          automates: ["Replies in seconds, day and night", "Answers from your listings, fees and FAQs", "Says so when it doesn't know, and passes the question on"],
          controls: ["What Elliot knows and how it answers", "Reading any conversation and stepping in", "Pausing Elliot on a conversation"],
        },
        {
          title: "Qualify and match",
          text: "Elliot asks what matters in a natural way, then searches your listings for what fits and shares up to three, with an honest word on how each one differs. It never invents a property.",
          screen: "listings",
          screenAlt: "The Elliot dashboard's listings view, with sample data",
          automates: ["Questions about budget, area, size, timing and financing", "A hot, warm or cold score for each lead", "Matching listings from your own stock"],
          controls: ["Which questions matter to your agency", "Your listings, from a spreadsheet or ASARI CRM[[asari]]", "Who gets called first"],
        },
        {
          title: "Book viewings with the right agent",
          text: "Elliot offers free slots from your agents' own Google Calendars, books the one the client picks with an agent who's free and confirms it by email. Clients can move or cancel by message.",
          screen: "calendar",
          screenAlt: "The Elliot dashboard's calendar view, with sample data",
          automates: ["Booking into the agent's Google Calendar", "Confirmation email and a reminder the day before", "Moving or cancelling when the client asks", "Valuation visits for sellers and landlords"],
          controls: ["Which agents and calendars take viewings", "Confirming bookings first, if you prefer", "The viewing itself, and everything after it"],
        },
        {
          title: "Follow up and hand over",
          text: "Clients who go quiet get a follow-up email within your approval rules. When someone asks for a person, or a question falls outside your rules, Elliot hands the conversation to your team with everything attached.",
          screen: "leads",
          screenAlt: "The Elliot dashboard's leads view, with sample data",
          automates: ["Follow-up emails, with your approval or automatically", "Handover with the whole conversation and the lead's details", "New leads and bookings sent to your CRM"],
          controls: ["Approving follow-ups before they go", "Offers, negotiation and every decision that matters", "When to take a conversation over"],
        },
        {
          title: "See and manage everything",
          text: "The dashboard shows what's waiting for a person, today's viewings and how the week is going, with every conversation, lead and booking on record.",
          screen: "overview",
          screenAlt: "The Elliot dashboard's overview, with sample data",
          automates: ["A daily view of what needs you", "Every message, booking and handover saved", "Weekly numbers: conversations, leads, viewings"],
          controls: ["Your rules and approvals", "Reviewing any conversation", "Telling us what to adjust"],
        },
      ],
      roadmap: "Next on our roadmap: tracking offers, negotiations and completed transactions in Elliot. Today those stay with your agents and your own tools.",
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
      description: "Setting Elliot up is closer to onboarding a new colleague than installing software. We do it with you, and Elliot is usually ready within days.",
    },
    steps: {
      eyebrow: "How it works",
      title: "Eight steps, done with you.",
      description: "We set Elliot up with you, and once it is live it answers around the clock.",
      items: [
        { title: "Map your workflow", detail: "How enquiries reach you today, who handles what, and where they get stuck." },
        { title: "Connect your channels", detail: "Your website chat and email inbox, and WhatsApp[[whatsapp]] if you use it." },
        { title: "Import and check listings", detail: "From a spreadsheet or ASARI CRM[[asari]]. We check prices, areas and availability come through correctly." },
        { title: "Set knowledge and rules", detail: "Your fees, areas and FAQs, what Elliot does on its own and what waits for your approval." },
        { title: "Connect calendars and owners", detail: "Your agents' Google Calendars, who takes viewings and who gets which leads." },
        { title: "Test the whole journey", detail: "You try it as a client would, from the first message to a booked viewing, before any client talks to Elliot." },
        { title: "Go live", detail: "Elliot starts answering your clients on the channels you've chosen." },
        { title: "Monitor and improve", detail: "We review conversations with you and adjust answers and rules as you go." },
      ],
    },
    lifecycle: {
      eyebrow: "Before and after go-live",
      title: "Set up. Try. Go live. Review.",
      description: "Elliot isn't switched on blind: you try it with your own listings first.",
      stages: [
        { title: "Set up", detail: "We load your listings, fees and FAQs and set the rules with you." },
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
      eyebrow: "After go-live",
      title: "Everything Elliot does, in one place.",
      description: "Your team sees every conversation, lead and viewing Elliot handles. The dashboard is in English.",
      screenAlt: "The Elliot dashboard's overview, with sample data",
      caption: "Real Elliot dashboard, shown with sample data.",
    },
  },

  pl: {
    productMeta: {
      title: "Produkt",
      description:
        "Jak Elliot prowadzi operacyjną stronę każdego zapytania o nieruchomość: przyjęcie, kwalifikacja, dopasowanie ofert, prezentacje, przypomnienia i przekazanie agentom, w jednym panelu.",
    },
    productHero: {
      eyebrow: "Produkt",
      title: "Operacyjna strona każdego zapytania, załatwiona.",
      description:
        "Elliot przyjmuje każde zapytanie, rozumie je, kwalifikuje klienta, dopasowuje oferty, umawia prezentację i przypomina się, a potem przekazuje szansę właściwej osobie. Agenci widzą to wszystko w jednym panelu.",
    },
    platform: {
      eyebrow: "Platforma",
      title: "Każdy etap zapytania, połączony.",
      description: "Elliot wykonuje pracę operacyjną na każdym etapie. Decyzje, relacja z klientem i transakcja zostają przy Twoim zespole.",
      automatesLabel: "Elliot automatyzuje",
      controlsLabel: "Twój zespół decyduje",
      chapters: [
        {
          title: "Przyjęcie i zrozumienie",
          text: "Każde zapytanie z czatu na stronie, skrzynki e-mail i WhatsAppa[[whatsapp]] trafia w jedno miejsce. Elliot ustala, czego chce klient: kupić, wynająć, sprzedać czy oddać w najem, i odpowiada na podstawie Twoich ofert, opłat i najczęstszych pytań.",
          screen: "conversations",
          screenAlt: "Widok rozmów w panelu Elliota, na danych przykładowych",
          automates: ["Odpowiedź w kilka sekund, w dzień i w nocy", "Odpowiedzi z Twoich ofert, opłat i FAQ", "Mówi, gdy czegoś nie wie, i przekazuje pytanie dalej"],
          controls: ["Co Elliot wie i jak odpowiada", "Wgląd w każdą rozmowę i możliwość przejęcia", "Wstrzymanie Elliota w danej rozmowie"],
        },
        {
          title: "Kwalifikacja i dopasowanie",
          text: "Elliot w naturalny sposób pyta o to, co ważne, a potem szuka w Twoich ofertach tego, co pasuje, i pokazuje do trzech, uczciwie opisując, czym się różnią. Nigdy nie wymyśla nieruchomości.",
          screen: "listings",
          screenAlt: "Widok ofert w panelu Elliota, na danych przykładowych",
          automates: ["Pytania o budżet, lokalizację, metraż, termin i finansowanie", "Ocena każdego klienta: gorący, ciepły lub zimny", "Dopasowanie ofert z Twojej bazy"],
          controls: ["Które pytania są ważne dla Twojego biura", "Twoje oferty, z arkusza lub z ASARI CRM[[asari]]", "Do kogo zadzwonić najpierw"],
        },
        {
          title: "Prezentacje z właściwym agentem",
          text: "Elliot proponuje wolne terminy z kalendarzy Google Twoich agentów, rezerwuje wybrany z wolnym agentem i potwierdza go e-mailem. Klient może przenieść lub odwołać prezentację wiadomością.",
          screen: "calendar",
          screenAlt: "Widok kalendarza w panelu Elliota, na danych przykładowych",
          automates: ["Rezerwacja w kalendarzu Google agenta", "E-mail z potwierdzeniem i przypomnienie dzień wcześniej", "Przeniesienie lub odwołanie na prośbę klienta", "Wizyty wyceniające dla sprzedających i wynajmujących"],
          controls: ["Którzy agenci i kalendarze przyjmują prezentacje", "Potwierdzanie rezerwacji, jeśli wolisz", "Sama prezentacja i wszystko, co po niej"],
        },
        {
          title: "Kontakt i przekazanie",
          text: "Klienci, którzy przestali odpisywać, dostają e-mail przypominający zgodnie z Twoimi zasadami akceptacji. Gdy ktoś prosi o człowieka albo pytanie wykracza poza Twoje zasady, Elliot przekazuje rozmowę zespołowi z kompletem informacji.",
          screen: "leads",
          screenAlt: "Widok klientów w panelu Elliota, na danych przykładowych",
          automates: ["E-maile przypominające, za Twoją zgodą lub automatycznie", "Przekazanie z całą rozmową i danymi klienta", "Nowi klienci i rezerwacje wysyłani do Twojego CRM"],
          controls: ["Akceptacja przypomnień przed wysłaniem", "Oferty, negocjacje i każda ważna decyzja", "Kiedy przejąć rozmowę"],
        },
        {
          title: "Wszystko pod kontrolą",
          text: "Panel pokazuje, co czeka na człowieka, dzisiejsze prezentacje i jak mija tydzień, a każda rozmowa, klient i rezerwacja są zapisane.",
          screen: "overview",
          screenAlt: "Przegląd w panelu Elliota, na danych przykładowych",
          automates: ["Codzienny widok tego, co wymaga Twojej uwagi", "Zapis każdej wiadomości, rezerwacji i przekazania", "Tygodniowe liczby: rozmowy, klienci, prezentacje"],
          controls: ["Twoje zasady i akceptacje", "Wgląd w dowolną rozmowę", "Wskazanie nam, co poprawić"],
        },
      ],
      roadmap: "Następne w planach: śledzenie ofert, negocjacji i zamkniętych transakcji w Elliocie. Dziś te etapy zostają przy Twoich agentach i Twoich narzędziach.",
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
      description: "Wdrożenie Elliota bardziej przypomina wprowadzenie nowego pracownika niż instalację programu. Robimy to razem z Tobą, a Elliot jest zwykle gotowy w kilka dni.",
    },
    steps: {
      eyebrow: "Jak to działa",
      title: "Osiem kroków, razem z Tobą.",
      description: "Konfigurujemy Elliota razem z Tobą, a po uruchomieniu odpowiada przez całą dobę.",
      items: [
        { title: "Mapa procesu", detail: "Jak dziś trafiają do Ciebie zapytania, kto czym się zajmuje i gdzie sprawy utykają." },
        { title: "Podłączenie kanałów", detail: "Czat na stronie i skrzynka e-mail, a także WhatsApp[[whatsapp]], jeśli z niego korzystasz." },
        { title: "Import i sprawdzenie ofert", detail: "Z arkusza lub z ASARI CRM[[asari]]. Sprawdzamy, czy ceny, lokalizacje i dostępność wczytują się poprawnie." },
        { title: "Wiedza i zasady", detail: "Twoje opłaty, lokalizacje i FAQ, co Elliot robi sam, a co czeka na Twoją zgodę." },
        { title: "Kalendarze i opiekunowie", detail: "Kalendarze Google agentów, kto prowadzi prezentacje i kto dostaje których klientów." },
        { title: "Test całej ścieżki", detail: "Sprawdzasz Elliota jak klient, od pierwszej wiadomości po umówioną prezentację, zanim porozmawia z nim jakikolwiek klient." },
        { title: "Start", detail: "Elliot zaczyna odpowiadać Twoim klientom w wybranych kanałach." },
        { title: "Obserwacja i poprawki", detail: "Razem przeglądamy rozmowy i na bieżąco poprawiamy odpowiedzi i zasady." },
      ],
    },
    lifecycle: {
      eyebrow: "Przed startem i po nim",
      title: "Konfiguracja. Próba. Start. Przegląd.",
      description: "Elliot nie jest włączany w ciemno: najpierw wypróbujesz go na własnych ofertach.",
      stages: [
        { title: "Konfiguracja", detail: "Wczytujemy Twoje oferty, opłaty i najczęstsze pytania i ustalamy z Tobą zasady." },
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
      eyebrow: "Po starcie",
      title: "Wszystko, co robi Elliot, w jednym miejscu.",
      description: "Twój zespół widzi każdą rozmowę, klienta i prezentację, którymi zajmuje się Elliot. Panel jest po angielsku.",
      screenAlt: "Przegląd w panelu Elliota, na danych przykładowych",
      caption: "Prawdziwy panel Elliota, na danych przykładowych.",
    },
  },
};

assertSameShape("product", RAW.en, RAW.pl);

export const PRODUCT: Record<Locale, Content> = {
  en: resolveStatuses(RAW.en, "en"),
  pl: resolveStatuses(RAW.pl, "pl"),
};
