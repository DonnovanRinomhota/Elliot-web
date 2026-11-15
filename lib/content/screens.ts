// The five dashboard screens shown on the public site (homepage and Product
// page). Real screenshots of the Elliot dashboard, taken with a made-up
// agency and sample data (no real clients). The rest of the dashboard
// (settings, approvals rules, the control panel, system health) is kept for
// private demos on purpose: see docs/website-assets.md.

import type { StaticImageData } from "next/image";
import type { Locale } from "@/lib/i18n";
import { assertSameShape } from "@/lib/capabilities";
import overview from "@/public/images/elliot/dashboard-overview.webp";
import leads from "@/public/images/elliot/dashboard-leads.webp";
import conversations from "@/public/images/elliot/dashboard-conversations.webp";
import listings from "@/public/images/elliot/dashboard-listings.webp";
import calendar from "@/public/images/elliot/dashboard-calendar.webp";

export type ScreenKey = "overview" | "leads" | "conversations" | "listings" | "calendar";

export const SCREEN_IMAGES: Record<ScreenKey, StaticImageData> = { overview, leads, conversations, listings, calendar };

type Screen = { key: ScreenKey; label: string; title: string; text: string; alt: string };

const RAW: Record<Locale, { note: string; items: Screen[] }> = {
  en: {
    note: "Real Elliot dashboard, shown with sample data.",
    items: [
      {
        key: "overview",
        label: "Overview",
        title: "Start the day knowing what needs you.",
        text: "What's waiting for a person, today's viewings and how the week is going, in the order you deal with them.",
        alt: "Elliot dashboard overview: a greeting, the work that needs a person, today's viewings and this week's conversations, leads and viewings.",
      },
      {
        key: "leads",
        label: "Leads",
        title: "Every lead, qualified and scored.",
        text: "Stage, score, what each client is looking for, who owns them and the next step, for buyers, renters, sellers and landlords.",
        alt: "Elliot leads list: leads by stage with their channel, score, what they're looking for, owner, next step and last contact.",
      },
      {
        key: "conversations",
        label: "Conversations",
        title: "Every conversation, with what happened next.",
        text: "Website chat, email and WhatsApp in one list. Open one to see the client's needs, the thread and whether a viewing was booked or a person took over.",
        alt: "Elliot conversations: a list of client conversations by channel, and an open chat where Elliot suggests matching listings and books a viewing.",
      },
      {
        key: "listings",
        label: "Listings",
        title: "Your listings, the source of every answer.",
        text: "Elliot only suggests properties from this list and never invents one. Import them from a spreadsheet or add them by hand.",
        alt: "Elliot listings: the agency's properties with photos, prices, locations, sizes and availability.",
      },
      {
        key: "calendar",
        label: "Calendar",
        title: "Viewings in your agents' calendars.",
        text: "Week by week, with the client, the property and its address on every booking.",
        alt: "Elliot calendar: a week of viewings with the client's name, the property photo and its address.",
      },
    ],
  },
  pl: {
    note: "Prawdziwy panel Elliota, na danych przykładowych.",
    items: [
      {
        key: "overview",
        label: "Przegląd",
        title: "Zacznij dzień, wiedząc, co na Ciebie czeka.",
        text: "Co wymaga człowieka, dzisiejsze prezentacje i wyniki tygodnia, w kolejności, w jakiej się nimi zajmujesz.",
        alt: "Przegląd w panelu Elliota: powitanie, sprawy wymagające człowieka, dzisiejsze prezentacje oraz rozmowy, klienci i prezentacje w tym tygodniu.",
      },
      {
        key: "leads",
        label: "Klienci",
        title: "Każdy klient zakwalifikowany i oceniony.",
        text: "Etap, ocena, czego klient szuka, kto go prowadzi i jaki jest następny krok, dla kupujących, najemców, sprzedających i wynajmujących.",
        alt: "Lista klientów w panelu Elliota: etap, kanał, ocena, czego szukają, opiekun, następny krok i ostatni kontakt.",
      },
      {
        key: "conversations",
        label: "Rozmowy",
        title: "Każda rozmowa i to, co wydarzyło się dalej.",
        text: "Czat na stronie, e-mail i WhatsApp na jednej liście. Otwórz rozmowę, żeby zobaczyć potrzeby klienta, cały wątek i czy umówiono prezentację lub rozmowę przejął agent.",
        alt: "Rozmowy w panelu Elliota: lista rozmów według kanału i otwarty czat, w którym Elliot proponuje pasujące oferty i umawia prezentację.",
      },
      {
        key: "listings",
        label: "Oferty",
        title: "Twoje oferty, źródło każdej odpowiedzi.",
        text: "Elliot proponuje tylko nieruchomości z tej listy i nigdy żadnej nie wymyśla. Zaimportuj je z arkusza lub dodaj ręcznie.",
        alt: "Oferty w panelu Elliota: nieruchomości biura ze zdjęciami, cenami, lokalizacją, metrażem i dostępnością.",
      },
      {
        key: "calendar",
        label: "Kalendarz",
        title: "Prezentacje w kalendarzach agentów.",
        text: "Tydzień po tygodniu, przy każdej rezerwacji klient, nieruchomość i jej adres.",
        alt: "Kalendarz w panelu Elliota: tydzień prezentacji z nazwiskiem klienta, zdjęciem nieruchomości i adresem.",
      },
    ],
  },
};

assertSameShape("screens", RAW.en, RAW.pl);

export const SCREENS = RAW;
