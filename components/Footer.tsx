"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { localeFromPath, UI } from "@/lib/i18n";

export default function Footer() {
  const locale = localeFromPath(usePathname());
  const t = UI[locale].footer;

  return (
    <footer className="relative border-t border-white/[0.07] bg-[#050b16]">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9a56c]/50 to-transparent" />
      <div className="container-content grid grid-cols-2 gap-10 py-16 md:grid-cols-5">
        <div className="col-span-2">
          <Logo />
          <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-slate-600">{t.tagline}</p>
        </div>

        {t.columns.map((col) => (
          <div key={col.title}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/80">{col.title}</p>
            <ul className="mt-5 flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[14px] text-slate-600 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/[0.06] py-6">
        <div className="container-content flex flex-col items-start justify-between gap-2 text-[12.5px] text-slate-400 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Elliot</span>
          <span>{t.operator}</span>
        </div>
      </div>
    </footer>
  );
}
