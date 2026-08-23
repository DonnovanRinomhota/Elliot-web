import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "invert" | "invertGhost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md font-body font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-violet to-sky bg-[length:200%_auto] bg-left text-white shadow-glow hover:bg-right hover:shadow-glowLg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  secondary:
    "bg-card/60 text-fg border border-fg/15 hover:border-violet/50 hover:text-violet-700 hover:-translate-y-0.5 hover:shadow-card active:translate-y-0 active:scale-[0.98]",
  ghost: "bg-transparent text-fg hover:bg-fg/[0.04] hover:text-violet-700",
  // For use on the permanently-dark sections (e.g. final CTA on bg-ink) —
  // intentionally literal, not theme-aware, since those panels stay dark
  // regardless of site theme.
  invert:
    "bg-paper text-ink shadow-cardHover hover:bg-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  invertGhost:
    "bg-transparent text-paper border border-white/25 hover:border-white/50 hover:bg-white/[0.06] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
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

function Shine() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
    />
  );
}

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
      {variant === "primary" && <Shine />}
      <span className="relative">{children}</span>
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
      {variant === "primary" && <Shine />}
      <span className="relative">{children}</span>
    </Link>
  );
}
