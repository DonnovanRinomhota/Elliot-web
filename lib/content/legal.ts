// Privacy Policy and Terms of Use, English and Polish.
//
// Written for a sole trader in Poland running this marketing website.
// Have a lawyer review before relying on them, and add a contact email
// as soon as you have one (GDPR expects a direct way to reach you).

import type { LegalDoc } from "@/components/legal/LegalPage";
import { LEGAL_UPDATED, OWNER, SITE_URL } from "@/lib/site";

const host = SITE_URL.replace(/^https?:\/\//, "");

export const PRIVACY: { en: LegalDoc; pl: LegalDoc } = {
  en: {
    eyebrow: "Legal",
    title: "Privacy policy",
    updatedLabel: "Last updated",
    updated: LEGAL_UPDATED.en,
    intro: `This policy explains what personal data we collect through this website (${host}), why, and what rights you have. We keep it short and only collect what we need to answer you.`,
    sections: [
      {
        h: "Who is responsible for your data",
        body: [
          `The controller of your personal data is ${OWNER.name}, a sole trader based in ${OWNER.country.en}, who runs Elliot ("we", "us").`,
          "You can contact us about anything in this policy through the contact form on this website or by leaving a message in the chat.",
        ],
      },
      {
        h: "What this policy covers",
        body: [
          "This policy covers this website, including the demo request form and the Elliot chat on this site.",
          "It does not cover Elliot when an estate agency uses it on its own website. In that case the agency decides how your data is used and is the controller; we process the data on the agency's behalf under a data processing agreement. Please read that agency's privacy policy.",
        ],
      },
      {
        h: "What data we collect",
        body: [
          [
            "Demo request form: your name, company, email address, website, industry, company size and the message you write.",
            "Chat: the messages you type and anything you choose to include in them (for example your name, phone number, email address or what property you are looking for), plus a conversation identifier and the time of each message.",
            "Technical data: our hosting provider records your IP address, browser type and the pages you request, to keep the site running and secure.",
          ],
          "Please do not share sensitive information in the chat, such as health data, bank details or passwords.",
        ],
      },
      {
        h: "Why we use it and on what legal basis",
        body: [
          [
            "To answer your demo request and arrange a demo, which are steps you ask us to take before a possible contract (Article 6(1)(b) GDPR).",
            "To answer your questions in the chat and, if you ask us to, get back to you (Article 6(1)(b) GDPR where you ask about our services, otherwise our legitimate interest in replying to enquiries, Article 6(1)(f) GDPR).",
            "To keep the website secure, prevent abuse and fix problems (our legitimate interest, Article 6(1)(f) GDPR).",
            "To establish, exercise or defend legal claims, if that is ever needed (our legitimate interest, Article 6(1)(f) GDPR).",
          ],
          "We do not send newsletters and we do not sell your data.",
          "Giving us your data is voluntary, but without an email address we cannot reply to a demo request.",
        ],
      },
      {
        h: "AI-generated replies",
        body: [
          "Replies in the chat are written by an AI model, based on information we have given it. They can occasionally be wrong or incomplete. If something matters to you, ask to speak to a person and we will get back to you.",
          "We do not make decisions about you based solely on automated processing that have legal or similarly significant effects on you.",
        ],
      },
      {
        h: "Who we share it with",
        body: [
          "We use the following service providers to run the website and Elliot. They process data only on our instructions, under data processing agreements:",
          [
            "Vercel Inc. (website hosting)",
            "n8n GmbH (workflow automation that receives form and chat submissions)",
            "Supabase Inc. (database where submissions and conversations are stored)",
            "Anthropic PBC (the AI model that writes the chat replies)",
            "Google (email notifications and calendar, where used)",
          ],
          "We may also disclose data where the law requires it, for example to a court or public authority.",
        ],
      },
      {
        h: "Transfers outside the European Economic Area",
        body: [
          "Some of these providers are based in the United States or may process data there. Where that happens, the transfer relies on the EU-US Data Privacy Framework (for providers certified under it) or on the European Commission's Standard Contractual Clauses. You can ask us for more information about these safeguards.",
        ],
      },
      {
        h: "How long we keep it",
        body: [
          [
            "Demo requests and chat conversations: up to 12 months after our last contact with you. If we start working together, for as long as the contract lasts and then for as long as the law requires or claims could be brought.",
            "Technical logs: for the short period set by our hosting provider, usually no more than 30 days.",
          ],
          "After that, the data is deleted or anonymised.",
        ],
      },
      {
        h: "Your rights",
        body: [
          "You have the right to:",
          [
            "access your data and get a copy of it,",
            "have inaccurate data corrected,",
            "have your data deleted,",
            "restrict how we use it,",
            "receive your data in a portable format,",
            "object to processing based on our legitimate interest.",
          ],
          "To use any of these rights, contact us through the contact form or the chat. We may need to confirm your identity, and we will reply within one month.",
          "You also have the right to lodge a complaint with the supervisory authority in Poland: the President of the Personal Data Protection Office (Prezes Urzędu Ochrony Danych Osobowych), ul. Stawki 2, 00-193 Warszawa, uodo.gov.pl.",
        ],
      },
      {
        h: "Cookies and browser storage",
        body: [
          "We do not use analytics or advertising cookies. The website stores one thing in your browser's local storage: your light or dark theme choice. You can clear it at any time in your browser settings.",
        ],
      },
      {
        h: "Changes to this policy",
        body: [
          "If we change this policy, we will publish the new version here with a new date. If the change is significant, we will say so on the website.",
        ],
      },
    ],
  },

  pl: {
    eyebrow: "Informacje prawne",
    title: "Polityka prywatności",
    updatedLabel: "Ostatnia aktualizacja",
    updated: LEGAL_UPDATED.pl,
    intro: `Ta polityka wyjaśnia, jakie dane osobowe zbieramy za pośrednictwem tej strony (${host}), w jakim celu i jakie masz prawa. Zbieramy tylko to, czego potrzebujemy, żeby Ci odpowiedzieć.`,
    sections: [
      {
        h: "Kto odpowiada za Twoje dane",
        body: [
          `Administratorem Twoich danych osobowych jest ${OWNER.name}, prowadzący jednoosobową działalność w Polsce, który prowadzi Elliota („my”).`,
          "W każdej sprawie związanej z tą polityką możesz się z nami skontaktować przez formularz kontaktowy na tej stronie lub zostawiając wiadomość na czacie.",
        ],
      },
      {
        h: "Czego dotyczy ta polityka",
        body: [
          "Polityka dotyczy tej strony internetowej, w tym formularza zgłoszenia na prezentację i czatu z Elliotem na tej stronie.",
          "Nie dotyczy Elliota używanego przez biuro nieruchomości na jego własnej stronie. Wtedy to biuro decyduje o wykorzystaniu Twoich danych i jest ich administratorem, a my przetwarzamy je w jego imieniu na podstawie umowy powierzenia. Zapoznaj się z polityką prywatności tego biura.",
        ],
      },
      {
        h: "Jakie dane zbieramy",
        body: [
          [
            "Formularz zgłoszenia: imię i nazwisko, firma, adres e-mail, strona internetowa, branża, wielkość firmy i treść wiadomości.",
            "Czat: wiadomości, które wpisujesz, i wszystko, co zdecydujesz się w nich podać (np. imię, numer telefonu, adres e-mail, jakiej nieruchomości szukasz), a także identyfikator rozmowy i czas każdej wiadomości.",
            "Dane techniczne: nasz dostawca hostingu zapisuje adres IP, rodzaj przeglądarki i odwiedzane podstrony, aby strona działała i była bezpieczna.",
          ],
          "Prosimy nie podawać na czacie danych wrażliwych, takich jak informacje o zdrowiu, dane bankowe czy hasła.",
        ],
      },
      {
        h: "Cele i podstawy prawne",
        body: [
          [
            "Odpowiedź na zgłoszenie i umówienie prezentacji, czyli działania podejmowane na Twoje żądanie przed ewentualnym zawarciem umowy (art. 6 ust. 1 lit. b RODO).",
            "Odpowiadanie na pytania na czacie i, jeśli o to poprosisz, kontakt zwrotny (art. 6 ust. 1 lit. b RODO, gdy pytasz o nasze usługi; w pozostałych przypadkach nasz prawnie uzasadniony interes w odpowiadaniu na zapytania, art. 6 ust. 1 lit. f RODO).",
            "Zapewnienie bezpieczeństwa strony, zapobieganie nadużyciom i usuwanie usterek (nasz prawnie uzasadniony interes, art. 6 ust. 1 lit. f RODO).",
            "Ustalenie, dochodzenie lub obrona roszczeń, jeśli kiedykolwiek będzie to potrzebne (nasz prawnie uzasadniony interes, art. 6 ust. 1 lit. f RODO).",
          ],
          "Nie wysyłamy newsletterów i nie sprzedajemy Twoich danych.",
          "Podanie danych jest dobrowolne, ale bez adresu e-mail nie możemy odpowiedzieć na zgłoszenie.",
        ],
      },
      {
        h: "Odpowiedzi generowane przez AI",
        body: [
          "Odpowiedzi na czacie pisze model sztucznej inteligencji na podstawie informacji, które mu przekazaliśmy. Czasami mogą być błędne lub niepełne. Jeśli coś jest dla Ciebie ważne, poproś o kontakt z człowiekiem, a odezwiemy się.",
          "Nie podejmujemy wobec Ciebie decyzji opartych wyłącznie na zautomatyzowanym przetwarzaniu, które wywoływałyby skutki prawne lub w podobny sposób istotnie na Ciebie wpływały.",
        ],
      },
      {
        h: "Komu przekazujemy dane",
        body: [
          "Do prowadzenia strony i Elliota korzystamy z poniższych dostawców. Przetwarzają oni dane wyłącznie na nasze polecenie, na podstawie umów powierzenia przetwarzania:",
          [
            "Vercel Inc. (hosting strony)",
            "n8n GmbH (automatyzacja, która odbiera zgłoszenia i wiadomości z czatu)",
            "Supabase Inc. (baza danych, w której przechowywane są zgłoszenia i rozmowy)",
            "Anthropic PBC (model AI, który pisze odpowiedzi na czacie)",
            "Google (powiadomienia e-mail i kalendarz, jeśli są używane)",
          ],
          "Możemy też ujawnić dane, gdy wymaga tego prawo, np. sądowi lub organowi publicznemu.",
        ],
      },
      {
        h: "Przekazywanie danych poza Europejski Obszar Gospodarczy",
        body: [
          "Niektórzy z tych dostawców mają siedzibę w Stanach Zjednoczonych lub mogą tam przetwarzać dane. W takim przypadku przekazanie odbywa się na podstawie programu EU-US Data Privacy Framework (w przypadku dostawców nim objętych) albo standardowych klauzul umownych zatwierdzonych przez Komisję Europejską. Możesz poprosić nas o więcej informacji o tych zabezpieczeniach.",
        ],
      },
      {
        h: "Jak długo przechowujemy dane",
        body: [
          [
            "Zgłoszenia i rozmowy na czacie: do 12 miesięcy od naszego ostatniego kontaktu. Jeśli zaczniemy współpracę, przez czas trwania umowy, a potem tak długo, jak wymagają tego przepisy lub jak mogą być dochodzone roszczenia.",
            "Logi techniczne: przez krótki okres ustalony przez dostawcę hostingu, zwykle nie dłużej niż 30 dni.",
          ],
          "Po tym czasie dane są usuwane lub anonimizowane.",
        ],
      },
      {
        h: "Twoje prawa",
        body: [
          "Masz prawo do:",
          [
            "dostępu do swoich danych i otrzymania ich kopii,",
            "sprostowania nieprawidłowych danych,",
            "usunięcia danych,",
            "ograniczenia przetwarzania,",
            "przenoszenia danych,",
            "sprzeciwu wobec przetwarzania opartego na naszym prawnie uzasadnionym interesie.",
          ],
          "Aby skorzystać z tych praw, skontaktuj się z nami przez formularz kontaktowy lub czat. Możemy poprosić o potwierdzenie tożsamości. Odpowiemy w ciągu miesiąca.",
          "Masz też prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa, uodo.gov.pl.",
        ],
      },
      {
        h: "Pliki cookie i pamięć przeglądarki",
        body: [
          "Nie używamy analitycznych ani reklamowych plików cookie. Strona zapisuje w pamięci lokalnej Twojej przeglądarki jedną rzecz: wybrany motyw (jasny lub ciemny). Możesz ją w każdej chwili usunąć w ustawieniach przeglądarki.",
        ],
      },
      {
        h: "Zmiany polityki",
        body: [
          "Jeśli zmienimy tę politykę, opublikujemy nową wersję na tej stronie z nową datą. O istotnych zmianach poinformujemy na stronie.",
        ],
      },
    ],
  },
};

export const TERMS: { en: LegalDoc; pl: LegalDoc } = {
  en: {
    eyebrow: "Legal",
    title: "Terms of use",
    updatedLabel: "Last updated",
    updated: LEGAL_UPDATED.en,
    intro: `These terms apply to your use of this website (${host}), including the Elliot chat and the demo request form. By using the website you agree to them.`,
    sections: [
      {
        h: "Who runs this website",
        body: [
          `The website is run by ${OWNER.name}, a sole trader based in ${OWNER.country.en} ("we", "us"). You can contact us through the contact form on this website or the chat.`,
        ],
      },
      {
        h: "What the website offers",
        body: [
          "Free of charge, the website lets you read about Elliot, talk to the Elliot chat and send a demo request.",
          "To use it you need an internet connection and an up-to-date web browser with JavaScript enabled. The demo form also needs a working email address.",
          "You can stop using the website at any time. A chat conversation ends when you close it; a demo request is complete once it is sent.",
        ],
      },
      {
        h: "Information on the website",
        body: [
          "The website describes Elliot in general terms. It is not an offer within the meaning of the Polish Civil Code. Prices shown as \"from\" are a guide; the final price and terms for any Elliot service are agreed in a separate written agreement.",
          "We try to keep the information accurate and up to date, and we mark features that are still in testing or not yet available.",
        ],
      },
      {
        h: "The Elliot chat",
        body: [
          [
            "Replies are generated by an AI model. They can be inaccurate or incomplete and are not legal, financial or other professional advice.",
            "Do not share sensitive information in the chat, such as health data, bank details or passwords.",
            "Conversations are stored and used as described in our privacy policy.",
            "We may limit or switch off the chat, for example during maintenance or if it is being misused.",
          ],
        ],
      },
      {
        h: "Acceptable use",
        body: [
          "When using the website you must not:",
          [
            "send unlawful, offensive or misleading content,",
            "try to disrupt, overload or gain unauthorised access to the website or its systems,",
            "send automated or bulk requests, or scrape the website,",
            "try to make the chat produce harmful content or reveal its configuration,",
            "pretend to be someone else.",
          ],
        ],
      },
      {
        h: "Intellectual property",
        body: [
          "The content and design of the website and the Elliot name belong to us or to our licensors. You may view and share links to the website for your own purposes, but you may not copy or reuse its content commercially without our permission.",
        ],
      },
      {
        h: "Availability and liability",
        body: [
          "We provide the website as it is and may change, pause or discontinue it. We are not liable for losses caused by relying on chat replies or by the website being unavailable, to the extent the law allows.",
          "Nothing in these terms limits liability that cannot be limited by law, or any rights you have as a consumer.",
        ],
      },
      {
        h: "Complaints",
        body: [
          "If something on the website does not work as described, tell us through the contact form or the chat, with a short description of the problem. We will reply within 14 days.",
          "If you are a consumer, you can also use out-of-court complaint and redress procedures, for example through the local consumer ombudsman (miejski or powiatowy rzecznik konsumentów).",
        ],
      },
      {
        h: "Elliot services for businesses",
        body: [
          "Using Elliot for your own agency is a separate service, provided under a separate written agreement. These terms do not govern that service.",
        ],
      },
      {
        h: "Governing law and changes",
        body: [
          "These terms are governed by Polish law. If you are a consumer, you keep the protection of the mandatory laws of the country where you live.",
          "We may update these terms. The new version applies from the date shown at the top of this page; it does not affect anything you did before that date.",
        ],
      },
    ],
  },

  pl: {
    eyebrow: "Informacje prawne",
    title: "Regulamin",
    updatedLabel: "Ostatnia aktualizacja",
    updated: LEGAL_UPDATED.pl,
    intro: `Regulamin określa zasady korzystania z tej strony internetowej (${host}), w tym z czatu Elliota i formularza zgłoszenia na prezentację. Korzystając ze strony, akceptujesz te zasady.`,
    sections: [
      {
        h: "Kto prowadzi stronę",
        body: [
          `Stronę prowadzi ${OWNER.name}, prowadzący jednoosobową działalność w Polsce („my”). Możesz się z nami skontaktować przez formularz kontaktowy na tej stronie lub czat.`,
        ],
      },
      {
        h: "Co oferuje strona",
        body: [
          "Strona bezpłatnie umożliwia zapoznanie się z informacjami o Elliocie, rozmowę na czacie z Elliotem i wysłanie zgłoszenia na prezentację.",
          "Do korzystania ze strony potrzebne jest połączenie z internetem i aktualna przeglądarka z włączoną obsługą JavaScript. Do wysłania formularza potrzebny jest działający adres e-mail.",
          "Możesz w każdej chwili przestać korzystać ze strony. Rozmowa na czacie kończy się po jego zamknięciu, a zgłoszenie jest zrealizowane z chwilą wysłania.",
        ],
      },
      {
        h: "Informacje na stronie",
        body: [
          "Strona opisuje Elliota w sposób ogólny i nie stanowi oferty w rozumieniu Kodeksu cywilnego. Ceny podane jako „od” są orientacyjne; ostateczną cenę i warunki usług Elliota ustalamy w odrębnej umowie zawartej na piśmie.",
          "Dbamy o to, by informacje były aktualne i rzetelne, i oznaczamy funkcje, które są jeszcze w testach lub niedostępne.",
        ],
      },
      {
        h: "Czat z Elliotem",
        body: [
          [
            "Odpowiedzi generuje model sztucznej inteligencji. Mogą być niedokładne lub niepełne i nie stanowią porady prawnej, finansowej ani innej porady profesjonalnej.",
            "Nie podawaj na czacie danych wrażliwych, takich jak informacje o zdrowiu, dane bankowe czy hasła.",
            "Rozmowy są przechowywane i wykorzystywane zgodnie z naszą polityką prywatności.",
            "Możemy ograniczyć lub wyłączyć czat, np. na czas prac technicznych lub w razie nadużyć.",
          ],
        ],
      },
      {
        h: "Zasady korzystania",
        body: [
          "Korzystając ze strony, nie wolno:",
          [
            "przesyłać treści bezprawnych, obraźliwych lub wprowadzających w błąd,",
            "zakłócać działania strony, przeciążać jej ani uzyskiwać nieuprawnionego dostępu do jej systemów,",
            "wysyłać zautomatyzowanych lub masowych zapytań ani pobierać treści strony automatycznie,",
            "próbować skłonić czat do tworzenia szkodliwych treści lub ujawnienia jego konfiguracji,",
            "podszywać się pod inne osoby.",
          ],
        ],
      },
      {
        h: "Prawa własności intelektualnej",
        body: [
          "Treści i wygląd strony oraz nazwa Elliot należą do nas lub naszych licencjodawców. Możesz przeglądać stronę i udostępniać linki do niej na własny użytek, ale nie możesz kopiować ani wykorzystywać jej treści komercyjnie bez naszej zgody.",
        ],
      },
      {
        h: "Dostępność i odpowiedzialność",
        body: [
          "Udostępniamy stronę w obecnej postaci i możemy ją zmieniać, wstrzymywać lub zakończyć jej działanie. W zakresie dozwolonym przez prawo nie odpowiadamy za szkody wynikające z polegania na odpowiedziach czatu ani z niedostępności strony.",
          "Żadne postanowienie regulaminu nie ogranicza odpowiedzialności, której nie można ograniczyć zgodnie z prawem, ani Twoich praw jako konsumenta.",
        ],
      },
      {
        h: "Reklamacje",
        body: [
          "Jeśli coś na stronie nie działa zgodnie z opisem, zgłoś to przez formularz kontaktowy lub czat, krótko opisując problem. Odpowiemy w ciągu 14 dni.",
          "Jeśli jesteś konsumentem, możesz też skorzystać z pozasądowych sposobów rozpatrywania reklamacji, np. z pomocy miejskiego lub powiatowego rzecznika konsumentów.",
        ],
      },
      {
        h: "Usługi Elliota dla firm",
        body: [
          "Korzystanie z Elliota we własnym biurze to odrębna usługa, świadczona na podstawie odrębnej umowy zawartej na piśmie. Ten regulamin jej nie dotyczy.",
        ],
      },
      {
        h: "Prawo właściwe i zmiany regulaminu",
        body: [
          "Regulamin podlega prawu polskiemu. Jeśli jesteś konsumentem, zachowujesz ochronę wynikającą z bezwzględnie obowiązujących przepisów kraju, w którym mieszkasz.",
          "Możemy zmienić regulamin. Nowa wersja obowiązuje od daty podanej na górze tej strony i nie wpływa na działania podjęte przed tą datą.",
        ],
      },
    ],
  },
};
