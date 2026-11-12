import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "invert" | "invertGhost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-body font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

// Gold pill (the main action), frosted glass pill, plain text.
const variants: Record<Variant, string> = {
  primary: "bg-gold text-[#0b1426] shadow-gold hover:brightness-[1.06] hover:shadow-[0_14px_36px_-10px_rgba(217,165,108,0.7)]",
  secondary: "glass text-white hover:bg-white/[0.08]",
  ghost: "bg-transparent text-white/90 hover:text-white",
  invert: "bg-gold text-[#0b1426] shadow-gold hover:brightness-[1.06]",
  invertGhost: "bg-transparent text-white border border-white/25 hover:border-white/50 hover:bg-white/[0.06]",
};

const sizes: Record<Size, string> = {
  md: "text-[14.5px] px-5 py-2.5",
  lg: "text-[16px] px-7 py-4",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  /** A small arrow after the label, as on the main actions. */
  arrow?: boolean;
};

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5">
      <path d="M4 10h11M11 5.5 15.5 10 11 14.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  arrow,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  arrow,
  href,
  children,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}
