// Homepage copy in both languages. Keep claims honest: only mark something
// "live" when a client could use it today.

import type { Locale } from "@/lib/i18n";

export type Status = "live" | "testing" | "planned";

type Content = {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primary: string;
    secondary: string;
    note: string;
    sampleLabel: string;
    sample: { from: "client" | "elliot"; text: string }[];
    sampleFooter: string;
  };
  statusLabel: Record<Status, string>;
  does: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; text: string; status: Status }[];
    notYetTitle: string;
    notYet: string;
  };
  flow: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: { title: string; text: string }[];
  };
  control: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; text: string }[];
  };
  tools: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { name: string; text: string; status: Status }[];
  };
  promises: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    lead: string;
    planName: string;
    perMonth: string;
    from: string;
    setup: string;
    vat: string;
    includesTitle: string;
    includes: string[];
    cta: string;
    footnote: string;
  };
  cta: { title: string; lead: string; primary: string; secondary: string };
};

export const HOME: Record<Locale, Content> = {
  en: {
    hero: {
      eyebrow: "AI assistant for estate agencies",
      title: "Answer every property enquiry. Book viewings around the clock.",
      lead: "Elliot works on your website, WhatsApp and email. It answers questions about your listings, asks buyers and renters the right questions, and books viewings straight into your Google Calendar. Your team sees every conversation and can step in at any time.",
      primary: "Talk to Elliot",
      secondary: "Book a demo",
      note: "The chat in the corner of this page is Elliot. Ask it anything.",
      sampleLabel: "Example conversation",
      sample: [
        { from: "client", text: "Hi, do you have 2-bedroom flats in Mokotów under €250,000?" },
        {
          from: "elliot",
          text: "Yes, there are three that fit. Before I send them: are you buying with a mortgage, and when would you like to move?",
        },
        { from: "client", text: "Mortgage is approved. Ideally within two months." },
        {
          from: "elliot",
          text: "Thanks. I can book you a viewing of the closest match on Thursday at 17:00 or Friday at 10:00. Which suits you?",
        },
      ],
      sampleFooter: "Lead marked hot · viewing booked · agent notified",
    },
    statusLabel: { live: "Available now", testing: "In testing", planned: "Not yet" },
    does: {
      eyebrow: "What Elliot does",
      title: "The repetitive part of the job, handled.",
      lead: "Everything marked “Available now” is built and working today. Where something is still being tested, we say so.",
      items: [
        {
          title: "Answers enquiries",
          text: "Replies in seconds, day or night, using your listings, fees and FAQs. If it doesn't know an answer, it says so and passes the question to you.",
          status: "live",
        },
        {
          title: "Qualifies buyers and renters",
          text: "Asks about budget, area, size, timing and financing, then marks each lead hot, warm or cold so you know who to call first.",
          status: "live",
        },
        {
          title: "Books viewings",
          text: "Offers free slots from your Google Calendar, books the one the client picks and sends a confirmation email. Cancel a viewing in your dashboard and the calendar updates.",
          status: "live",
        },
        {
          title: "Captures every lead",
          text: "Contact details and what each person is looking for go into your dashboard, and into your CRM if you use one.",
          status: "live",
        },
        {
          title: "Follows up",
          text: "Drafts follow-up emails for people who go quiet. You approve them before they go out, or let routine ones send automatically.",
          status: "live",
        },
        {
          title: "Hands over to your team",
          text: "When a client asks for a person, or a question falls outside your rules, Elliot flags it in your dashboard straight away.",
          status: "live",
        },
        {
          title: "WhatsApp and email",
          text: "The same conversations on your WhatsApp Business number and in your Gmail inbox, answered in seconds. Email replies stay in the client's thread.",
          status: "live",
        },
      ],
      notYetTitle: "Not offered yet",
      notYet:
        "Answering phone calls, letting clients move or cancel a viewing by message (your team does it in the dashboard), and Outlook or Microsoft 365 calendars.",
    },
    flow: {
      eyebrow: "How it works",
      title: "From first message to booked viewing.",
      lead: "One conversation, usually a few minutes long, with no back-and-forth emails for your team.",
      steps: [
        { title: "A client gets in touch", text: "Through your website chat, WhatsApp or email, at any hour." },
        { title: "Elliot answers", text: "From your own listings, prices and FAQs, which you can edit at any time." },
        { title: "It asks the right questions", text: "Budget, area, size, timing and financing, in a natural way." },
        { title: "It books the viewing", text: "In a free slot in your calendar, with a confirmation email to the client." },
        { title: "Your team takes over", text: "The lead, the full conversation and the booking are waiting in your dashboard." },
      ],
    },
    control: {
      eyebrow: "You stay in control",
      title: "Elliot works for you, within rules you set.",
      lead: "You decide what Elliot may do on its own and what needs your approval.",
      items: [
        {
          title: "Approval when it matters",
          text: "Choose which emails Elliot can send by itself and which wait for you to approve them.",
        },
        {
          title: "A person when it's needed",
          text: "Clients can ask for a human at any point. Elliot passes the conversation on and tells them someone will be in touch.",
        },
        {
          title: "Everything on record",
          text: "Every conversation, lead, booking and email is saved in your dashboard, so you can check what was said.",
        },
        {
          title: "Your knowledge, your words",
          text: "Elliot answers from information you give it. Update a price or a policy and it uses the new version straight away.",
        },
      ],
    },
    tools: {
      eyebrow: "Works with your tools",
      title: "Fits into how you already work.",
      lead: "No new system for your team to learn. Elliot connects to the tools you use.",
      items: [
        { name: "Your website", text: "A chat window added with one line of code.", status: "live" },
        { name: "Google Calendar", text: "Checks free slots and books viewings.", status: "live" },
        { name: "Gmail", text: "Answers enquiries in your inbox and sends confirmations and follow-ups from your address.", status: "live" },
        { name: "Your CRM", text: "New leads and bookings sent on, directly or through Zapier or Make.", status: "live" },
        { name: "WhatsApp Business", text: "Answers clients on your WhatsApp number, in seconds.", status: "live" },
        { name: "Outlook / Microsoft 365", text: "Calendar and email.", status: "planned" },
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
          title: "Nothing important sent without you",
          text: "Your approval rules apply to every email. You can change them whenever you like.",
        },
        {
          title: "Set up for your agency",
          text: "Elliot is configured with your listings, your areas and your way of working before it talks to anyone.",
        },
        {
          title: "A real person behind it",
          text: "You deal directly with Donnovan, who sets Elliot up, watches how it performs and adjusts it with you.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "One simple plan.",
      lead: "A one-off setup, then a monthly fee. The exact price depends on how many enquiries you get and which tools Elliot connects to. We confirm it in writing before anything starts.",
      planName: "Elliot for estate agencies",
      perMonth: "/ month",
      from: "from",
      setup: "Setup from",
      vat: "Net prices. VAT is added where it applies.",
      includesTitle: "Included",
      includes: [
        "Website chat, WhatsApp and email replies, trained on your listings and FAQs",
        "Lead qualification and scoring",
        "Viewing booking with Google Calendar",
        "Follow-up emails with your approval rules",
        "Dashboard with every lead, booking and conversation",
        "CRM connection",
        "Monthly review and adjustments",
      ],
      cta: "Book a demo",
      footnote: "Not sure it fits? Ask Elliot in the chat. It knows what it can and can't do.",
    },
    cta: {
      title: "See Elliot working for your agency.",
      lead: "A short call where we set Elliot up with a few of your listings and you try it yourself.",
      primary: "Book a demo",
      secondary: "Talk to Elliot now",
    },
  },

  pl: {
    hero: {
      eyebrow: "Asystent AI dla biur nieruchomości",
      title: "Odpowiedź na każde zapytanie. Prezentacje umawiane o każdej porze.",
      lead: "Elliot działa na Twojej stronie, w WhatsAppie i w e-mailu. Odpowiada na pytania o oferty, zadaje kupującym i najemcom właściwe pytania i umawia prezentacje bezpośrednio w Twoim Kalendarzu Google. Twój zespół widzi każdą rozmowę i może w każdej chwili przejąć klienta.",
      primary: "Porozmawiaj z Elliotem",
      secondary: "Umów prezentację",
      note: "Czat w rogu tej strony to Elliot. Zapytaj go o cokolwiek.",
      sampleLabel: "Przykładowa rozmowa",
      sample: [
        { from: "client", text: "Dzień dobry, czy macie mieszkania 2-pokojowe na Mokotowie do 1 mln zł?" },
        {
          from: "elliot",
          text: "Tak, mamy trzy pasujące oferty. Zanim je wyślę: czy kupuje Pan z kredytem i kiedy chciałby się Pan przeprowadzić?",
        },
        { from: "client", text: "Kredyt mam już przyznany. Najlepiej w ciągu dwóch miesięcy." },
        {
          from: "elliot",
          text: "Dziękuję. Mogę umówić prezentację najlepiej dopasowanego mieszkania w czwartek o 17:00 lub w piątek o 10:00. Który termin Panu odpowiada?",
        },
      ],
      sampleFooter: "Klient oznaczony jako gorący · prezentacja umówiona · agent powiadomiony",
    },
    statusLabel: { live: "Dostępne", testing: "W testach", planned: "Jeszcze nie" },
    does: {
      eyebrow: "Co robi Elliot",
      title: "Powtarzalna część pracy, z głowy.",
      lead: "Wszystko oznaczone jako „Dostępne” jest gotowe i działa już dziś. Jeśli coś jest jeszcze w testach, piszemy o tym wprost.",
      items: [
        {
          title: "Odpowiada na zapytania",
          text: "W kilka sekund, w dzień i w nocy, na podstawie Twoich ofert, opłat i najczęstszych pytań. Jeśli nie zna odpowiedzi, mówi o tym i przekazuje pytanie Tobie.",
          status: "live",
        },
        {
          title: "Kwalifikuje kupujących i najemców",
          text: "Pyta o budżet, lokalizację, metraż, termin i finansowanie, a potem oznacza klienta jako gorącego, ciepłego lub zimnego, żebyś wiedział, do kogo dzwonić najpierw.",
          status: "live",
        },
        {
          title: "Umawia prezentacje",
          text: "Proponuje wolne terminy z Twojego Kalendarza Google, rezerwuje wybrany i wysyła e-mail z potwierdzeniem. Odwołanie prezentacji w panelu od razu aktualizuje kalendarz.",
          status: "live",
        },
        {
          title: "Zapisuje każdego klienta",
          text: "Dane kontaktowe i czego szuka każda osoba trafiają do Twojego panelu, a jeśli korzystasz z CRM, także tam.",
          status: "live",
        },
        {
          title: "Przypomina się klientom",
          text: "Przygotowuje e-maile do osób, które przestały odpowiadać. Zatwierdzasz je przed wysłaniem albo pozwalasz, by rutynowe wychodziły same.",
          status: "live",
        },
        {
          title: "Przekazuje rozmowę zespołowi",
          text: "Gdy klient prosi o kontakt z człowiekiem albo pytanie wykracza poza Twoje zasady, Elliot od razu oznacza to w panelu.",
          status: "live",
        },
        {
          title: "WhatsApp i e-mail",
          text: "Te same rozmowy na Twoim numerze WhatsApp Business i w skrzynce Gmail, z odpowiedzią w kilka sekund. Odpowiedzi e-mail trafiają do tego samego wątku.",
          status: "live",
        },
      ],
      notYetTitle: "Jeszcze niedostępne",
      notYet:
        "Odbieranie telefonów, przenoszenie lub odwoływanie prezentacji przez klienta w wiadomości (robi to Twój zespół w panelu) oraz kalendarze Outlook i Microsoft 365.",
    },
    flow: {
      eyebrow: "Jak to działa",
      title: "Od pierwszej wiadomości do umówionej prezentacji.",
      lead: "Jedna rozmowa, zwykle kilkuminutowa, bez wymiany maili po stronie Twojego zespołu.",
      steps: [
        { title: "Klient się odzywa", text: "Przez czat na stronie, WhatsApp lub e-mail, o dowolnej porze." },
        { title: "Elliot odpowiada", text: "Na podstawie Twoich ofert, cen i najczęstszych pytań, które możesz zmieniać w każdej chwili." },
        { title: "Zadaje właściwe pytania", text: "O budżet, lokalizację, metraż, termin i finansowanie, w naturalny sposób." },
        { title: "Umawia prezentację", text: "W wolnym terminie w Twoim kalendarzu, z e-mailem potwierdzającym dla klienta." },
        { title: "Twój zespół przejmuje", text: "Klient, cała rozmowa i rezerwacja czekają w Twoim panelu." },
      ],
    },
    control: {
      eyebrow: "Masz kontrolę",
      title: "Elliot pracuje dla Ciebie, według Twoich zasad.",
      lead: "Ty decydujesz, co Elliot może robić sam, a co wymaga Twojej zgody.",
      items: [
        {
          title: "Zgoda tam, gdzie to ważne",
          text: "Wybierasz, które e-maile Elliot może wysyłać sam, a które czekają na Twoje zatwierdzenie.",
        },
        {
          title: "Człowiek, gdy jest potrzebny",
          text: "Klient może w każdej chwili poprosić o kontakt z człowiekiem. Elliot przekazuje rozmowę i informuje, że ktoś się odezwie.",
        },
        {
          title: "Wszystko zapisane",
          text: "Każda rozmowa, klient, rezerwacja i e-mail są zapisane w panelu, więc zawsze sprawdzisz, co zostało powiedziane.",
        },
        {
          title: "Twoja wiedza, Twoje słowa",
          text: "Elliot odpowiada na podstawie informacji od Ciebie. Zmienisz cenę lub zasady, a od razu używa nowej wersji.",
        },
      ],
    },
    tools: {
      eyebrow: "Współpracuje z Twoimi narzędziami",
      title: "Pasuje do tego, jak już pracujesz.",
      lead: "Twój zespół nie musi uczyć się nowego systemu. Elliot łączy się z narzędziami, których używasz.",
      items: [
        { name: "Twoja strona", text: "Okno czatu dodawane jedną linijką kodu.", status: "live" },
        { name: "Kalendarz Google", text: "Sprawdza wolne terminy i umawia prezentacje.", status: "live" },
        { name: "Gmail", text: "Odpowiada na zapytania w Twojej skrzynce i wysyła potwierdzenia oraz przypomnienia z Twojego adresu.", status: "live" },
        { name: "Twój CRM", text: "Nowi klienci i rezerwacje przekazywane bezpośrednio lub przez Zapier albo Make.", status: "live" },
        { name: "WhatsApp Business", text: "Odpowiada klientom na Twoim numerze WhatsApp w kilka sekund.", status: "live" },
        { name: "Outlook / Microsoft 365", text: "Kalendarz i poczta.", status: "planned" },
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
          title: "Nic ważnego bez Twojej wiedzy",
          text: "Twoje zasady zatwierdzania obowiązują dla każdego e-maila. Możesz je zmienić w dowolnym momencie.",
        },
        {
          title: "Skonfigurowany pod Twoje biuro",
          text: "Zanim Elliot z kimkolwiek porozmawia, poznaje Twoje oferty, Twoje lokalizacje i Twój sposób pracy.",
        },
        {
          title: "Za Elliotem stoi człowiek",
          text: "Współpracujesz bezpośrednio z Donnovanem, który konfiguruje Elliota, sprawdza, jak sobie radzi, i razem z Tobą go dopracowuje.",
        },
      ],
    },
    pricing: {
      eyebrow: "Cennik",
      title: "Jeden prosty plan.",
      lead: "Jednorazowe wdrożenie, potem stała opłata miesięczna. Dokładna cena zależy od liczby zapytań i narzędzi, z którymi Elliot ma się łączyć. Potwierdzamy ją na piśmie, zanim cokolwiek się zacznie.",
      planName: "Elliot dla biur nieruchomości",
      perMonth: "/ miesiąc",
      from: "od",
      setup: "Wdrożenie od",
      vat: "Ceny netto. VAT doliczany, jeśli ma zastosowanie.",
      includesTitle: "W cenie",
      includes: [
        "Czat na stronie, odpowiedzi w WhatsAppie i e-mailu, nauczone Twoich ofert i najczęstszych pytań",
        "Kwalifikacja i ocena klientów",
        "Umawianie prezentacji z Kalendarzem Google",
        "E-maile z przypomnieniami według Twoich zasad zatwierdzania",
        "Panel z każdym klientem, rezerwacją i rozmową",
        "Połączenie z CRM",
        "Comiesięczny przegląd i poprawki",
      ],
      cta: "Umów prezentację",
      footnote: "Nie wiesz, czy to dla Ciebie? Zapytaj Elliota na czacie. Wie, co potrafi, a czego nie.",
    },
    cta: {
      title: "Zobacz Elliota w pracy dla Twojego biura.",
      lead: "Krótka rozmowa, podczas której konfigurujemy Elliota z kilkoma Twoimi ofertami, a Ty sam go testujesz.",
      primary: "Umów prezentację",
      secondary: "Porozmawiaj z Elliotem",
    },
  },
};
