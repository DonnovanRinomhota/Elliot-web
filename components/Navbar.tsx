"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath, twinPath, UI } from "@/lib/i18n";
import { DASHBOARD_URL } from "@/lib/site";
import Logo from "@/components/Logo";
import { ButtonLink, Button } from "@/components/ui/Button";
import { useElliotChat } from "@/components/chat/ElliotChatProvider";

// Sits over the top of each page (pages start with 6rem of room for it),
// clear at first and frosted navy once you scroll.
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openChat } = useElliotChat();
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const t = UI[locale];
  const links = t.nav;
  const other = locale === "en" ? "pl" : "en";

  // Keep <html lang> right on Polish pages (the root layout renders "en").
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 -mb-20 w-full transition-colors duration-300 md:-mb-24 ${
        scrolled || open ? "border-b border-white/10 bg-[#07101f]/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-content flex h-20 items-center justify-between md:h-24">
        <Link href={t.home} aria-label="Elliot" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[15px] font-medium text-white/85 transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href={twinPath(pathname, other)}
            hrefLang={other}
            aria-label={t.switchAria}
            className="text-[13px] font-semibold tracking-[0.12em] text-white/60 transition-colors hover:text-white"
          >
            {other.toUpperCase()}
          </Link>
          <a href={`${DASHBOARD_URL}/login`} className="text-[15px] font-medium text-white/90 transition-colors hover:text-white">
            {t.signIn}
          </a>
          <ButtonLink href={t.bookHref} variant="primary" size="md" arrow>
            {t.book}
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href={twinPath(pathname, other)}
            hrefLang={other}
            aria-label={t.switchAria}
            className="px-2 py-2 text-[13px] font-semibold tracking-[0.12em] text-white/70"
          >
            {other.toUpperCase()}
          </Link>
          <button
            className="glass flex h-11 w-11 items-center justify-center rounded-full transition-transform active:scale-95"
            aria-label={open ? t.menuClose : t.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 top-0 h-[1.5px] w-4 bg-white transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-[1.5px] w-4 bg-white transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 px-6 pb-6 pt-3 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/[0.06] px-1 py-4 text-[16px] font-medium text-white/90"
              >
                {l.label}
              </Link>
            ))}
            <a href={`${DASHBOARD_URL}/login`} className="px-1 py-4 text-[16px] font-medium text-white/90">
              {t.signIn}
            </a>
          </nav>
          <div className="mt-3 flex flex-col gap-3">
            <ButtonLink href={t.bookHref} variant="primary" size="lg" className="w-full" arrow onClick={() => setOpen(false)}>
              {t.book}
            </ButtonLink>
            <Button
              variant="secondary"
              size="lg"
              className="w-full"
              onClick={() => {
                setOpen(false);
                openChat();
              }}
            >
              {t.talk}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
