import Link from "next/link";
import Logo from "@/components/Logo";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/product", label: "Overview" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/solutions", label: "Solutions" },
      { href: "/industries", label: "Industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/demo", label: "Book a Demo" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface-line bg-surface">
      <div className="container-content grid grid-cols-2 gap-10 py-16 md:grid-cols-5">
        <div className="col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
            An AI employee for your business — handling conversations, leads,
            appointments and follow-ups, 24/7.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-mono uppercase tracking-[0.1em] text-slate-400">
              {col.title}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline text-sm text-slate-600 transition-colors hover:text-violet-600"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-surface-line py-6">
        <div className="container-content flex flex-col items-start justify-between gap-2 text-xs text-slate-400 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Elliot. All rights reserved.</span>
          <span className="inline-flex items-center gap-1.5 font-mono">
            <span className="presence-dot" />
            Elliot is online, 24/7.
          </span>
        </div>
      </div>
    </footer>
  );
}
