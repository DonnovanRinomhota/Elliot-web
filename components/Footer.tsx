"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { localeFromPath, UI } from "@/lib/i18n";

export default function Footer() {
  const locale = localeFromPath(usePathname());
  const t = UI[locale].footer;

  return (
    <footer className="border-t border-surface-line bg-surface">
      <div className="container-content grid grid-cols-2 gap-10 py-14 md:grid-cols-5">
        <div className="col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">{t.tagline}</p>
        </div>

        {t.columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold text-fg">{col.title}</p>
            <ul className="mt-4 flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-600 transition-colors hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-surface-line py-6">
        <div className="container-content flex flex-col items-start justify-between gap-2 text-xs text-slate-600 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Elliot</span>
          <span>{t.operator}</span>
        </div>
      </div>
    </footer>
  );
}
