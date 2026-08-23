import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ElliotChatProvider } from "@/components/chat/ElliotChatProvider";
import ElliotChatLauncher from "@/components/chat/ElliotChatLauncher";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import { ThemeProvider, themeInitScript } from "@/components/ThemeProvider";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elliot.ai"),
  title: {
    default: "Elliot — Your AI employee",
    template: "%s · Elliot",
  },
  description:
    "Elliot is an AI employee for your business. It answers customer questions, qualifies leads, books appointments, follows up with prospects and automates repetitive work — 24/7.",
  keywords: [
    "AI employee",
    "AI business assistant",
    "AI sales assistant",
    "AI customer service agent",
    "AI automation",
    "AI lead qualification",
    "AI appointment booking",
  ],
  openGraph: {
    title: "Elliot — Your AI employee",
    description:
      "Elliot handles customer conversations, qualifies leads, books appointments, follows up with prospects and automates repetitive business operations — 24/7.",
    url: "https://www.elliot.ai",
    siteName: "Elliot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elliot — Your AI employee",
    description:
      "Elliot handles customer conversations, qualifies leads, books appointments and automates repetitive work — 24/7.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
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
