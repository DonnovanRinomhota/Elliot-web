"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { ButtonLink, Button } from "@/components/ui/Button";
import { useElliotChat } from "@/components/chat/ElliotChatProvider";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/product", label: "Product" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openChat } = useElliotChat();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-surface-line bg-surface/85 backdrop-blur-md"
          : "border-transparent bg-surface/0"
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between">
        <Link href="/" aria-label="Elliot home" className="group">
          <Logo className="transition-transform duration-300 group-hover:scale-[1.03]" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-underline text-sm font-medium text-slate-700 transition-colors hover:text-violet-600"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button variant="ghost" size="md" onClick={openChat}>
            Talk to Elliot
          </Button>
          <ButtonLink href="/demo" variant="primary" size="md">
            Book a Demo
          </ButtonLink>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            className="flex h-11 w-11 items-center justify-center rounded-md border border-fg/10 active:scale-95 transition-transform"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-4 bg-fg transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 bottom-0 h-[1.5px] w-4 bg-fg transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-fadeUp border-t border-surface-line bg-surface px-6 py-4 md:hidden [animation-duration:250ms]">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3.5 text-[15px] font-medium text-slate-700 active:bg-fg/[0.05]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-surface-line pt-4">
            <Button
              variant="secondary"
              size="lg"
              className="w-full"
              onClick={() => {
                setOpen(false);
                openChat();
              }}
            >
              Talk to Elliot
            </Button>
            <ButtonLink href="/demo" variant="primary" size="lg" className="w-full">
              Book a Demo
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
