// The managed advertising page (/managed-advertising, /pl/obsluga-reklam).
// An optional service, separate from the Elliot software. No prices, no
// packages and no results here: the management fee is quoted after a
// consultation, and the ad spend is paid by the agency straight to Google
// and Meta from its own accounts. The legal terms for this service are not
// written yet (see docs/website-assets.md and the redesign report).

import { assertSameShape } from "@/lib/capabilities";
import type { Locale } from "@/lib/i18n";
import type { IconName } from "@/lib/content/home";

type Item = { title: string; text: string; icon: IconName };

type Content = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; description: string; primary: string; secondary: string };
  scope: { eyebrow: string; title: string; lead: string; items: Item[] };
  costs: {
    eyebrow: string;
    title: string;
    lead: string;
    parts: { letter: string; title: string; who: string; text: string }[];
    note: string;
  };
  ownership: { eyebrow: string; title: string; lead: string; items: Item[] };
  withElliot: { eyebrow: string; title: string; text: string; points: string[]; screenAlt: string };
  process: { eyebrow: string; title: string; steps: { title: string; text: string }[] };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  cta: { title: string; lead: string; primary: string; secondary: string };
};

export const ADVERTISING: Record<Locale, Content> = {
  en: {
    meta: {
      title: "Managed advertising for estate agencies",
      description:
        "Google and Meta advertising for estate agencies, planned, run and reported for you. A separate, optional service: the ad accounts and budgets stay in your name.",
    },
    hero: {
      eyebrow: "Managed advertising",
      title: "More of the right enquiries, from ads we run for you.",
      description:
        "An optional service, separate from the Elliot software. We plan, run and report on Google and Meta campaigns for your agency and your listings. The ad accounts and the budget stay yours.",
      primary: "Request an advertising consultation",
      secondary: "Write to us",
    },
    scope: {
      eyebrow: "What we cover",
      title: "From the plan to the monthly report.",
      lead: "One team looks after your campaigns end to end, in Polish or English.",
      items: [
        { icon: "target", title: "Strategy", text: "What the campaigns are for: buyers, renters, sellers and landlords, or your agency's name, in the areas you work in." },
        { icon: "search", title: "Research", text: "How people search for property in your areas, what similar agencies advertise and which listings are worth promoting." },
        { icon: "megaphone", title: "Google Ads", text: "Search campaigns for people already looking, for example a flat to rent in a district or a valuation in your city." },
        { icon: "people", title: "Meta advertising", text: "Facebook and Instagram campaigns that put your listings and your agency in front of the right local audience." },
        { icon: "home", title: "Property campaigns", text: "Campaigns for single listings, new developments or a whole category, started and stopped as listings come and go." },
        { icon: "pen", title: "Copy and creative", text: "Ad text and visuals made from your own listings and photos, in your agency's voice." },
        { icon: "repeat", title: "Optimisation", text: "We watch what brings real enquiries and move the budget and the targeting accordingly." },
        { icon: "chart", title: "Reporting", text: "A plain report each month: what was spent, what it brought in and what we'll change next." },
      ],
    },
    costs: {
      eyebrow: "How the costs work",
      title: "Three separate things, kept separate.",
      lead: "You always know what you pay for, who you pay and why.",
      parts: [
        {
          letter: "A",
          title: "Elliot software",
          who: "Paid to us, under its own agreement",
          text: "The platform that answers enquiries, qualifies clients and books viewings. You don't need it to use our advertising service.",
        },
        {
          letter: "B",
          title: "Advertising management",
          who: "Paid to us, quoted after a consultation",
          text: "Our work on your campaigns: planning, setting up, writing, optimising and reporting. Agreed in writing before anything starts.",
        },
        {
          letter: "C",
          title: "Ad spend",
          who: "Paid by you, straight to Google and Meta",
          text: "The budget the platforms charge for showing your ads. It goes from your own accounts and never passes through us.",
        },
      ],
      note: "We don't promise a number of enquiries or sales. What campaigns bring in depends on your market, your listings and your budget, and the monthly report shows it as it is.",
    },
    ownership: {
      eyebrow: "Your accounts, your control",
      title: "Everything stays in your name.",
      lead: "We work inside your accounts as invited users, not the other way round.",
      items: [
        { icon: "key", title: "Your ad accounts", text: "The Google Ads and Meta accounts belong to your agency. You invite us and you can remove our access at any time." },
        { icon: "shield", title: "Your budget", text: "You decide the monthly budget and pay the platforms directly. We don't change it without asking you." },
        { icon: "check", title: "Your approval", text: "You see the campaigns, the text and the visuals before they go live." },
        { icon: "book", title: "Your data", text: "The campaigns, the history and the results stay in your accounts if we stop working together." },
      ],
    },
    withElliot: {
      eyebrow: "Better together, optional",
      title: "Ads bring the enquiries. Elliot makes sure none are wasted.",
      text: "If you also use Elliot, the enquiries your campaigns bring in are answered straight away, at any hour, then qualified and booked for viewings, so the budget isn't lost to slow replies.",
      points: [
        "Replies to enquiries from your ads in seconds, day and night",
        "Qualifies each lead and books viewings into your agents' calendars",
        "Your team sees every enquiry in one dashboard",
      ],
      screenAlt: "The Elliot dashboard's leads view, with sample data",
    },
    process: {
      eyebrow: "How we start",
      title: "Five steps, and you approve each one.",
      steps: [
        { title: "Consultation", text: "A call about your goals, your areas, your listings and the budget you have in mind." },
        { title: "Proposal", text: "A written plan and our management fee. Nothing starts until you agree to it." },
        { title: "Access", text: "You invite us to your Google Ads and Meta accounts, or we help you create them in your agency's name." },
        { title: "Launch", text: "We set the campaigns up and they go live once you've seen and approved them." },
        { title: "Improve and report", text: "We optimise as the campaigns run and send you a report every month." },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "Before you ask.",
      items: [
        { q: "Do I need Elliot to use this service?", a: "No. Managed advertising is a separate, optional service. It works on its own, and Elliot works fully without it." },
        { q: "Who pays Google and Meta?", a: "You do, directly, from your own ad accounts. The ad spend never goes through us." },
        { q: "How much does it cost?", a: "Our management fee depends on what you need and is quoted in writing after the consultation. The ad spend is yours to set." },
        { q: "Do you guarantee results?", a: "No. Nobody honest can. We tell you what we'll do, show you what it brings each month and change what doesn't work." },
        { q: "What happens if we stop?", a: "You remove our access. The accounts, the campaigns and their history stay with you." },
      ],
    },
    cta: {
      title: "Let's talk about your campaigns.",
      lead: "A short call about your areas, your listings and your budget, with no obligation.",
      primary: "Request an advertising consultation",
      secondary: "Write to us",
    },
  },
  pl: {
    meta: {
      title: "Obsługa reklam dla biur nieruchomości",
      description:
        "Kampanie Google i Meta dla biur nieruchomości: planujemy, prowadzimy i raportujemy. Osobna, opcjonalna usługa. Konta reklamowe i budżety zostają na Twoje nazwisko.",
    },
    hero: {
      eyebrow: "Obsługa reklam",
      title: "Więcej właściwych zapytań, z reklam, które prowadzimy za Ciebie.",
      description:
        "Opcjonalna usługa, osobna od oprogramowania Elliot. Planujemy, prowadzimy i raportujemy kampanie Google i Meta dla Twojego biura i Twoich ofert. Konta reklamowe i budżet zostają Twoje.",
      primary: "Umów konsultację w sprawie reklam",
      secondary: "Napisz do nas",
    },
    scope: {
      eyebrow: "Co obejmuje",
      title: "Od planu po miesięczny raport.",
      lead: "Jeden zespół zajmuje się Twoimi kampaniami od początku do końca, po polsku lub angielsku.",
      items: [
        { icon: "target", title: "Strategia", text: "Czemu służą kampanie: kupującym, najemcom, sprzedającym i wynajmującym albo marce biura, w Twoich lokalizacjach." },
        { icon: "search", title: "Analiza", text: "Jak ludzie szukają nieruchomości w Twojej okolicy, co reklamują podobne biura i które oferty warto promować." },
        { icon: "megaphone", title: "Google Ads", text: "Kampanie w wyszukiwarce dla osób, które już szukają, np. mieszkania na wynajem w dzielnicy albo wyceny w Twoim mieście." },
        { icon: "people", title: "Reklamy Meta", text: "Kampanie na Facebooku i Instagramie, które pokazują Twoje oferty i biuro właściwym osobom w okolicy." },
        { icon: "home", title: "Kampanie ofert", text: "Kampanie pojedynczych ofert, inwestycji albo całej kategorii, włączane i wyłączane razem z ofertami." },
        { icon: "pen", title: "Teksty i kreacje", text: "Treści i grafiki reklam przygotowane z Twoich ofert i zdjęć, w stylu Twojego biura." },
        { icon: "repeat", title: "Optymalizacja", text: "Sprawdzamy, co przynosi prawdziwe zapytania, i odpowiednio przesuwamy budżet i grupy odbiorców." },
        { icon: "chart", title: "Raporty", text: "Co miesiąc prosty raport: ile wydano, co to przyniosło i co zmienimy dalej." },
      ],
    },
    costs: {
      eyebrow: "Jak wyglądają koszty",
      title: "Trzy osobne rzeczy, rozliczane osobno.",
      lead: "Zawsze wiesz, za co płacisz, komu i dlaczego.",
      parts: [
        {
          letter: "A",
          title: "Oprogramowanie Elliot",
          who: "Płatne nam, na podstawie osobnej umowy",
          text: "Platforma, która odpowiada na zapytania, kwalifikuje klientów i umawia prezentacje. Nie jest potrzebna, żeby korzystać z obsługi reklam.",
        },
        {
          letter: "B",
          title: "Obsługa reklam",
          who: "Płatna nam, wycena po konsultacji",
          text: "Nasza praca nad kampaniami: planowanie, konfiguracja, teksty, optymalizacja i raporty. Ustalana na piśmie, zanim cokolwiek ruszy.",
        },
        {
          letter: "C",
          title: "Budżet reklamowy",
          who: "Płacisz Ty, bezpośrednio Google i Meta",
          text: "Kwota, którą platformy pobierają za wyświetlanie reklam. Idzie z Twoich kont i nigdy nie przechodzi przez nas.",
        },
      ],
      note: "Nie obiecujemy konkretnej liczby zapytań ani transakcji. To, co przyniosą kampanie, zależy od rynku, ofert i budżetu, a miesięczny raport pokazuje to takim, jakie jest.",
    },
    ownership: {
      eyebrow: "Twoje konta, Twoja kontrola",
      title: "Wszystko zostaje na Twoje nazwisko.",
      lead: "Pracujemy w Twoich kontach jako zaproszeni użytkownicy, a nie odwrotnie.",
      items: [
        { icon: "key", title: "Twoje konta reklamowe", text: "Konta Google Ads i Meta należą do Twojego biura. Ty nas zapraszasz i w każdej chwili możesz odebrać dostęp." },
        { icon: "shield", title: "Twój budżet", text: "Ty decydujesz o miesięcznym budżecie i płacisz platformom bezpośrednio. Nie zmieniamy go bez pytania." },
        { icon: "check", title: "Twoja akceptacja", text: "Widzisz kampanie, teksty i grafiki, zanim zostaną uruchomione." },
        { icon: "book", title: "Twoje dane", text: "Kampanie, ich historia i wyniki zostają na Twoich kontach, jeśli przestaniemy współpracować." },
      ],
    },
    withElliot: {
      eyebrow: "Razem lepiej, ale opcjonalnie",
      title: "Reklamy przynoszą zapytania. Elliot dba, żeby żadne się nie zmarnowało.",
      text: "Jeśli korzystasz też z Elliota, zapytania z kampanii dostają odpowiedź od razu, o każdej porze, a potem kwalifikację i termin prezentacji, więc budżet nie przepada przez wolne odpowiedzi.",
      points: [
        "Odpowiada na zapytania z reklam w kilka sekund, w dzień i w nocy",
        "Kwalifikuje każdego klienta i umawia prezentacje w kalendarzach agentów",
        "Zespół widzi każde zapytanie w jednym panelu",
      ],
      screenAlt: "Widok klientów w panelu Elliota, na danych przykładowych",
    },
    process: {
      eyebrow: "Jak zaczynamy",
      title: "Pięć kroków, każdy z Twoją akceptacją.",
      steps: [
        { title: "Konsultacja", text: "Rozmowa o celach, lokalizacjach, ofertach i budżecie, jaki masz na myśli." },
        { title: "Propozycja", text: "Plan na piśmie i nasze wynagrodzenie za obsługę. Nic nie rusza bez Twojej zgody." },
        { title: "Dostępy", text: "Zapraszasz nas do swoich kont Google Ads i Meta albo pomagamy je założyć na Twoje biuro." },
        { title: "Start", text: "Przygotowujemy kampanie i uruchamiamy je, gdy je zobaczysz i zaakceptujesz." },
        { title: "Poprawki i raporty", text: "Optymalizujemy kampanie w trakcie i co miesiąc wysyłamy raport." },
      ],
    },
    faq: {
      eyebrow: "Pytania",
      title: "Zanim zapytasz.",
      items: [
        { q: "Czy muszę korzystać z Elliota?", a: "Nie. Obsługa reklam to osobna, opcjonalna usługa. Działa samodzielnie, a Elliot w pełni działa bez niej." },
        { q: "Kto płaci Google i Meta?", a: "Ty, bezpośrednio, ze swoich kont reklamowych. Budżet reklamowy nigdy nie przechodzi przez nas." },
        { q: "Ile to kosztuje?", a: "Nasze wynagrodzenie zależy od zakresu i podajemy je na piśmie po konsultacji. Budżet reklamowy ustalasz Ty." },
        { q: "Czy gwarantujecie wyniki?", a: "Nie. Nikt uczciwy tego nie zrobi. Mówimy, co zrobimy, co miesiąc pokazujemy, co to przyniosło, i zmieniamy to, co nie działa." },
        { q: "Co jeśli zakończymy współpracę?", a: "Odbierasz nam dostęp. Konta, kampanie i ich historia zostają u Ciebie." },
      ],
    },
    cta: {
      title: "Porozmawiajmy o Twoich kampaniach.",
      lead: "Krótka rozmowa o lokalizacjach, ofertach i budżecie, bez zobowiązań.",
      primary: "Umów konsultację w sprawie reklam",
      secondary: "Napisz do nas",
    },
  },
};

assertSameShape("advertising", ADVERTISING.en, ADVERTISING.pl);
