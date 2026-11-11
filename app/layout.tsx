import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ElliotChatProvider } from "@/components/chat/ElliotChatProvider";
import ElliotChatLauncher from "@/components/chat/ElliotChatLauncher";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import { ThemeProvider, themeInitScript } from "@/components/ThemeProvider";
import { SITE_URL } from "@/lib/site";
import { withStatus } from "@/lib/capabilities";


// Fonts (IBM Plex Sans / Mono) are bundled via @fontsource in globals.css,
// so there is no request to Google Fonts.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Elliot: AI assistant for estate agencies",
    template: "%s · Elliot",
  },
  description: withStatus(
    "Elliot answers property enquiries on your website, by email and on WhatsApp[[whatsapp]], qualifies buyers and renters, books viewings into your calendar and hands over to your team when it should. Built for estate agencies.",
    "en",
  ),
  keywords: [
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
    title: "Elliot: AI assistant for estate agencies",
    description:
      "Answers enquiries, qualifies buyers and books viewings, around the clock. You approve what matters.",
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
    title: "Elliot: AI assistant for estate agencies",
    description: "Answers enquiries, qualifies buyers and books viewings, around the clock.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
