import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ElliotChatProvider } from "@/components/chat/ElliotChatProvider";
import ElliotChatLauncher from "@/components/chat/ElliotChatLauncher";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import { SITE_URL } from "@/lib/site";
import { withStatus } from "@/lib/capabilities";


// Fonts (Plus Jakarta Sans, IBM Plex Mono) are bundled via @fontsource in globals.css,
// so there is no request to Google Fonts.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Elliot: revenue operations for real estate agencies",
    template: "%s · Elliot",
  },
  description: withStatus(
    "Elliot keeps every property enquiry moving: it answers on your website, by email and on WhatsApp[[whatsapp]], qualifies buyers and renters, matches your listings, books viewings and hands over to your agents. Built for real estate agencies.",
    "en",
  ),
  keywords: [
    "revenue operations for real estate agencies",
    "AI assistant for estate agents",
    "real estate chatbot",
    "AI lead qualification",
    "viewing booking automation",
    "asystent AI nieruchomości",
  ],
  alternates: {
    canonical: "/",
    languages: { en: "/", pl: "/pl" },
  },
  openGraph: {
    title: "Elliot: keep every property enquiry moving",
    description:
      "Revenue operations for real estate agencies. Elliot answers enquiries, qualifies buyers, matches listings and books viewings. Your agents close the deals.",
    url: SITE_URL,
    siteName: "Elliot",
    type: "website",
    locale: "en_GB",
    alternateLocale: ["pl_PL"],
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Elliot: Connect, Qualify, Book" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
    title: "Elliot: keep every property enquiry moving",
    description: "Revenue operations for real estate agencies. AI handles the operational workload; your agents close the deals.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

// Structured data: who we are and what the site is. No address, registration
// number or ratings, because none of those are published.
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Elliot",
      url: SITE_URL,
      logo: `${SITE_URL}/apple-touch-icon.png`,
      description: "Revenue operations for real estate agencies.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Elliot",
      url: SITE_URL,
      inLanguage: ["en", "pl"],
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
        <ElliotChatProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <ElliotChatLauncher />
          <ScrollRevealInit />
        </ElliotChatProvider>
      </body>
    </html>
  );
}
