import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "invert" | "invertGhost";
type Size = "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-md font-body font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

// Solid navy primary, outlined secondary. No gradients, shine or lift.
const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-ink-soft dark:bg-brass-light dark:text-ink dark:hover:bg-brass-soft",
  secondary:
    "bg-card text-fg border border-surface-line hover:border-slate-400",
  ghost: "bg-transparent text-fg hover:bg-fg/[0.05]",
  // For the permanently-dark sections (e.g. final CTA on bg-ink).
  invert: "bg-white text-ink hover:bg-paper-dim",
  invertGhost:
    "bg-transparent text-white border border-white/30 hover:border-white/60 hover:bg-white/[0.06]",
};

const sizes: Record<Size, string> = {
  md: "text-sm px-4 py-2.5",
  lg: "text-[15px] px-5 py-3.5",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  href,
  children,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
