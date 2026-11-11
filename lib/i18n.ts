// Minimal two-language setup: English at "/", Polish under "/pl".
// No i18n library: plain objects are enough. Every page exists in both
// languages (PAGE_TWINS); app/sitemap.ts is built from the same list.

export type Locale = "en" | "pl";

export function localeFromPath(pathname: string | null | undefined): Locale {
  if (!pathname) return "en";
  return pathname === "/pl" || pathname.startsWith("/pl/") ? "pl" : "en";
}

/** Pages that exist in both languages, so the language switch lands on the twin. */
export const PAGE_TWINS: [en: string, pl: string][] = [
  ["/", "/pl"],
  ["/product", "/pl/produkt"],
  ["/how-it-works", "/pl/jak-to-dziala"],
  ["/industries/real-estate", "/pl/nieruchomosci"],
  ["/contact", "/pl/kontakt"],
  ["/book", "/pl/rezerwacja"],
  ["/demo", "/pl/demo"],
  ["/privacy", "/pl/prywatnosc"],
  ["/terms", "/pl/regulamin"],
];

export function twinPath(pathname: string, target: Locale): string {
  const current = localeFromPath(pathname);
  if (current === target) return pathname;
  const match = PAGE_TWINS.find(([en, pl]) => (current === "en" ? en : pl) === pathname);
  if (match) return target === "en" ? match[0] : match[1];
  return target === "en" ? "/" : "/pl";
}

export const UI = {
  en: {
    nav: [
      { href: "/product", label: "Product" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/industries/real-estate", label: "Real estate" },
      { href: "/#pricing", label: "Pricing" },
    ],
    talk: "Talk to Elliot",
    book: "Book a demo",
    bookHref: "/book",
    home: "/",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    switchLabel: "Polski",
    switchAria: "Przełącz na język polski",
    footer: {
      tagline:
        "An AI assistant for estate agencies: it answers enquiries, qualifies buyers and books viewings, around the clock.",
      columns: [
        {
          title: "Product",
          links: [
            { href: "/product", label: "Overview" },
            { href: "/how-it-works", label: "How it works" },
            { href: "/industries/real-estate", label: "Real estate" },
            { href: "/#pricing", label: "Pricing" },
          ],
        },
        {
          title: "Get in touch",
          links: [
            { href: "/book", label: "Book a call" },
            { href: "/demo", label: "Live demo" },
            { href: "/contact", label: "Contact form" },
          ],
        },
        {
          title: "Legal",
          links: [
            { href: "/privacy", label: "Privacy policy" },
            { href: "/terms", label: "Terms of use" },
          ],
        },
      ],
      operator: "Elliot is run by Donnovan Rinomhota, sole trader, Poland.",
    },
  },
  pl: {
    nav: [
      { href: "/pl/produkt", label: "Produkt" },
      { href: "/pl/jak-to-dziala", label: "Jak to działa" },
      { href: "/pl/nieruchomosci", label: "Nieruchomości" },
      { href: "/pl#cennik", label: "Cennik" },
    ],
    talk: "Porozmawiaj z Elliotem",
    book: "Umów prezentację",
    bookHref: "/pl/rezerwacja",
    home: "/pl",
    menuOpen: "Otwórz menu",
    menuClose: "Zamknij menu",
    switchLabel: "English",
    switchAria: "Switch to English",
    footer: {
      tagline:
        "Asystent AI dla biur nieruchomości: odpowiada na zapytania, kwalifikuje klientów i umawia prezentacje, o każdej porze.",
      columns: [
        {
          title: "Produkt",
          links: [
            { href: "/pl/produkt", label: "Przegląd" },
            { href: "/pl/jak-to-dziala", label: "Jak to działa" },
            { href: "/pl/nieruchomosci", label: "Nieruchomości" },
            { href: "/pl#cennik", label: "Cennik" },
          ],
        },
        {
          title: "Kontakt",
          links: [
            { href: "/pl/rezerwacja", label: "Umów rozmowę" },
            { href: "/pl/demo", label: "Demo na żywo" },
            { href: "/pl/kontakt", label: "Formularz kontaktowy" },
          ],
        },
        {
          title: "Informacje prawne",
          links: [
            { href: "/pl/prywatnosc", label: "Polityka prywatności" },
            { href: "/pl/regulamin", label: "Regulamin" },
          ],
        },
      ],
      operator: "Elliota prowadzi Donnovan Rinomhota, jednoosobowa działalność, Polska.",
    },
  },
} as const;
