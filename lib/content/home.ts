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

type HeroCard = { title: string; text: string; icon: IconName };

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
    /** The three glass cards floating over the picture (left, top, right). */
    floating: [HeroCard, HeroCard, HeroCard];
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
  /** What goes wrong without Elliot. */
  problem: { eyebrow: string; title: string; lead: string; items: { title: string; text: string; icon: IconName }[] };
  /** The whole customer journey, and who leads each stage. */
  journey: {
    eyebrow: string;
    title: string;
    lead: string;
    legend: { elliot: string; together: string; agent: string };
    stages: { name: string; owner: "elliot" | "together" | "agent" }[];
    note: string;
  };
  /** People and Elliot: who does what. */
  people: { eyebrow: string; title: string; lead: string; photoAlt: string; elliotTitle: string; elliotItems: string[]; agentTitle: string; agentItems: string[] };
  /** The dashboard screenshots (lib/content/screens.ts holds the screens). */
  showcase: { eyebrow: string; title: string; lead: string };
  realEstate: { eyebrow: string; title: string; text: string; photoAlt: string; points: string[]; link: string };
  advertising: { eyebrow: string; title: string; text: string; points: string[]; link: string };
  cta: { title: string; lead: string; primary: string; secondary: string };
};

const RAW: Record<Locale, Content> = {
  en: {
    hero: {
      eyebrow: "Revenue operations for real estate agencies",
      title: ["Keep every", "property enquiry", "moving."],
      lead: "From the first customer enquiry to property matching, viewing appointments and agent follow-ups, Elliot connects the work that keeps your agency's opportunities moving.",
      primary: "Request a demo",
      secondary: "See how it works",
      sceneAlt: "A laptop showing Elliot's dashboard overview: conversations this week, chats handled by Elliot, leads received and viewings booked.",
      floating: [
        { title: "Qualify leads", text: "Focus on the right prospects.", icon: "people" },
        { title: "Instant responses", text: "24/7 reply to every enquiry.", icon: "chat" },
        { title: "Book viewings", text: "Automatically schedule appointments.", icon: "calendar" },
      ],
      strip: [
        { title: "Always on", text: "Replies in seconds, day and night.", icon: "bolt" },
        { title: "Agents in control", text: "People lead the relationship and the deal.", icon: "people" },
        { title: "One connected record", text: "Enquiries, leads and viewings together.", icon: "chart" },
        { title: "Your data, your rules", text: "Approval rules you set.", icon: "shield" },
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
          title: "Matches your listings",
          text: "Searches your own listings for what the client asked for and shares up to three that fit, with an honest word on how each one differs. It never invents a property.",
          cap: "answers",
          icon: "eye",
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
        },
        {
          title: "Hands over to your team",
          text: "When a client asks for a person, or a question falls outside your rules, Elliot flags it in your dashboard straight away.",
          cap: "handover",
          icon: "handover",
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
    problem: {
      eyebrow: "The problem",
      title: "Enquiries don't wait. Neither do buyers.",
      lead: "Agencies rarely lose clients for lack of good listings. They lose them in the gaps between messages, tools and people.",
      items: [
        { title: "Enquiries at all hours", text: "People browse listings in the evening and at weekends. By the next morning, they have written to three other agencies.", icon: "chat" },
        { title: "Slow first replies", text: "Agents are out on viewings. Questions about price, fees and availability wait hours for an answer.", icon: "bolt" },
        { title: "Disconnected tools", text: "Portals, the inbox, WhatsApp, calendars and the CRM each hold part of the story. Nobody sees all of it.", icon: "inbox" },
        { title: "Follow-ups that slip", text: "A promising client goes quiet after a viewing, and nobody writes back in time.", icon: "repeat" },
      ],
    },
    journey: {
      eyebrow: "The customer journey",
      title: "Every stage of the enquiry, connected.",
      lead: "Elliot carries the operational work from the first message to the agent's handover and the follow-ups. Your agents lead the relationship and the deal.",
      legend: { elliot: "Elliot handles", together: "Elliot and your agent", agent: "Your agent leads" },
      stages: [
        { name: "Property discovery", owner: "agent" },
        { name: "Enquiry", owner: "elliot" },
        { name: "Qualification", owner: "elliot" },
        { name: "Property matching", owner: "elliot" },
        { name: "Viewing", owner: "together" },
        { name: "Agent handover", owner: "together" },
        { name: "Follow-up", owner: "elliot" },
        { name: "Offer and negotiation", owner: "agent" },
        { name: "Completion", owner: "agent" },
      ],
      note: "Tracking offers, negotiations and completed transactions in Elliot is on our product roadmap. Today these stages stay with your agents and your own tools.",
    },
    people: {
      eyebrow: "People and Elliot",
      title: "AI handles the operational workload. Your agents close the deals.",
      lead: "Elliot doesn't negotiate, make offers or give legal or financial advice. It prepares the ground, so your agents arrive at every viewing knowing who they're meeting and what that person needs.",
      photoAlt: "An estate agent showing a bright apartment to a couple.",
      elliotTitle: "Elliot handles",
      elliotItems: [
        "First replies, day and night",
        "Questions about listings, fees and availability",
        "Qualifying questions and lead scores",
        "Matching enquiries to your listings",
        "Booking, moving and confirming viewings",
        "Follow-ups within your approval rules",
      ],
      agentTitle: "Your agents own",
      agentItems: ["The relationship with every client", "Viewings and advice on the property", "Offers and negotiation", "Contracts, closing and every consequential decision"],
    },
    showcase: {
      eyebrow: "The product",
      title: "One place for every enquiry, lead and viewing.",
      lead: "This is the Elliot dashboard your team works in every day.",
    },
    realEstate: {
      eyebrow: "Built for real estate",
      title: "Made for the way agencies actually work.",
      text: "Sales and rentals, buyers and renters, sellers and landlords. Elliot knows the difference between a viewing and a valuation, and answers your clients in Polish or English.",
      photoAlt: "A bright, modern apartment living room with large windows over the city.",
      points: ["Residential sales and rentals", "Buyer, renter, seller and landlord enquiries", "Independent agencies and growing teams"],
      link: "Elliot for real estate agencies",
    },
    advertising: {
      eyebrow: "Optional service",
      title: "Need more enquiries, too? We can run your ads.",
      text: "Managed Google and Meta advertising is a separate service with its own agreement. Elliot works fully without it.",
      points: ["Your ad accounts stay in your name", "You set the budget and pay the platforms directly", "Our campaign management is quoted separately"],
      link: "About managed advertising",
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
      eyebrow: "Obsługa sprzedaży dla biur nieruchomości",
      title: ["Żadne zapytanie", "o nieruchomość", "nie utknie."],
      lead: "Od pierwszego zapytania, przez dopasowanie ofert i umawianie prezentacji, po kolejne kontakty agentów: Elliot łączy pracę, dzięki której szanse sprzedaży Twojego biura nie stoją w miejscu.",
      primary: "Umów prezentację",
      secondary: "Zobacz, jak to działa",
      sceneAlt: "Laptop z panelem Elliota: rozmowy w tym tygodniu, rozmowy obsłużone przez Elliota, nowi klienci i umówione prezentacje.",
      floating: [
        { title: "Kwalifikuje klientów", text: "Skup się na właściwych osobach.", icon: "people" },
        { title: "Natychmiastowe odpowiedzi", text: "Odpowiedź na każde zapytanie, 24/7.", icon: "chat" },
        { title: "Umawia prezentacje", text: "Terminy ustalane automatycznie.", icon: "calendar" },
      ],
      strip: [
        { title: "Zawsze włączony", text: "Odpowiedź w kilka sekund, w dzień i w nocy.", icon: "bolt" },
        { title: "Agenci decydują", text: "Relację i transakcję prowadzą ludzie.", icon: "people" },
        { title: "Wszystko w jednym miejscu", text: "Zapytania, klienci i prezentacje razem.", icon: "chart" },
        { title: "Twoje dane, Twoje zasady", text: "Zasady zatwierdzania ustalasz Ty.", icon: "shield" },
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
          title: "Dopasowuje Twoje oferty",
          text: "Przeszukuje Twoje oferty pod kątem tego, o co pytał klient, i pokazuje do trzech pasujących, uczciwie mówiąc, czym każda się różni. Nigdy nie wymyśla nieruchomości.",
          cap: "answers",
          icon: "eye",
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
        },
        {
          title: "Przekazuje rozmowę zespołowi",
          text: "Gdy klient prosi o kontakt z człowiekiem albo pytanie wykracza poza Twoje zasady, Elliot od razu oznacza to w panelu.",
          cap: "handover",
          icon: "handover",
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
    problem: {
      eyebrow: "Problem",
      title: "Zapytania nie czekają. Kupujący też nie.",
      lead: "Biura rzadko tracą klientów z braku dobrych ofert. Tracą ich w lukach między wiadomościami, narzędziami i ludźmi.",
      items: [
        { title: "Zapytania o każdej porze", text: "Ludzie przeglądają oferty wieczorami i w weekendy. Zanim nadejdzie ranek, napisali już do trzech innych biur.", icon: "chat" },
        { title: "Wolne pierwsze odpowiedzi", text: "Agenci są na prezentacjach. Pytania o cenę, opłaty i dostępność czekają godzinami na odpowiedź.", icon: "bolt" },
        { title: "Rozproszone narzędzia", text: "Portale, skrzynka, WhatsApp, kalendarze i CRM mają po kawałku historii. Nikt nie widzi całości.", icon: "inbox" },
        { title: "Gubione kontakty", text: "Obiecujący klient milknie po prezentacji, a nikt nie odezwie się do niego na czas.", icon: "repeat" },
      ],
    },
    journey: {
      eyebrow: "Ścieżka klienta",
      title: "Każdy etap zapytania, połączony.",
      lead: "Elliot przejmuje pracę operacyjną od pierwszej wiadomości po przekazanie klienta agentowi i kolejne kontakty. Relację i transakcję prowadzą Twoi agenci.",
      legend: { elliot: "Zajmuje się Elliot", together: "Elliot i agent", agent: "Prowadzi agent" },
      stages: [
        { name: "Wybór nieruchomości", owner: "agent" },
        { name: "Zapytanie", owner: "elliot" },
        { name: "Kwalifikacja", owner: "elliot" },
        { name: "Dopasowanie ofert", owner: "elliot" },
        { name: "Prezentacja", owner: "together" },
        { name: "Przekazanie agentowi", owner: "together" },
        { name: "Ponowny kontakt", owner: "elliot" },
        { name: "Oferta i negocjacje", owner: "agent" },
        { name: "Finalizacja", owner: "agent" },
      ],
      note: "Śledzenie ofert, negocjacji i zakończonych transakcji w Elliocie jest w naszych planach rozwoju. Dziś te etapy prowadzą Twoi agenci w Twoich narzędziach.",
    },
    people: {
      eyebrow: "Ludzie i Elliot",
      title: "AI przejmuje pracę operacyjną. Agenci zamykają transakcje.",
      lead: "Elliot nie negocjuje, nie składa ofert i nie udziela porad prawnych ani finansowych. Przygotowuje grunt, żeby Twoi agenci przychodzili na każdą prezentację, wiedząc, z kim się spotykają i czego ta osoba potrzebuje.",
      photoAlt: "Agentka nieruchomości pokazuje parze jasne mieszkanie.",
      elliotTitle: "Elliot zajmuje się",
      elliotItems: [
        "Pierwszymi odpowiedziami, w dzień i w nocy",
        "Pytaniami o oferty, opłaty i dostępność",
        "Pytaniami kwalifikującymi i oceną klientów",
        "Dopasowaniem zapytań do Twoich ofert",
        "Umawianiem, przesuwaniem i potwierdzaniem prezentacji",
        "Ponownym kontaktem według Twoich zasad zatwierdzania",
      ],
      agentTitle: "Twoi agenci odpowiadają za",
      agentItems: ["Relację z każdym klientem", "Prezentacje i doradztwo w sprawie nieruchomości", "Oferty i negocjacje", "Umowy, finalizację i każdą ważną decyzję"],
    },
    showcase: {
      eyebrow: "Produkt",
      title: "Jedno miejsce na każde zapytanie, klienta i prezentację.",
      lead: "Tak wygląda panel Elliota, w którym Twój zespół pracuje na co dzień.",
    },
    realEstate: {
      eyebrow: "Stworzony dla nieruchomości",
      title: "Zbudowany wokół tego, jak naprawdę pracują biura.",
      text: "Sprzedaż i najem, kupujący i najemcy, sprzedający i wynajmujący. Elliot odróżnia prezentację od wyceny i odpowiada Twoim klientom po polsku lub po angielsku.",
      photoAlt: "Jasny, nowoczesny salon z dużymi oknami z widokiem na miasto.",
      points: ["Sprzedaż i najem mieszkań", "Zapytania kupujących, najemców, sprzedających i wynajmujących", "Niezależne biura i rosnące zespoły"],
      link: "Elliot dla biur nieruchomości",
    },
    advertising: {
      eyebrow: "Usługa dodatkowa",
      title: "Potrzebujesz też więcej zapytań? Poprowadzimy Twoje reklamy.",
      text: "Obsługa kampanii w Google i Meta to osobna usługa na podstawie osobnej umowy. Elliot działa w pełni bez niej.",
      points: ["Konta reklamowe pozostają na Ciebie", "Ty ustalasz budżet i płacisz platformom bezpośrednio", "Prowadzenie kampanii wyceniamy osobno"],
      link: "Więcej o obsłudze reklam",
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
