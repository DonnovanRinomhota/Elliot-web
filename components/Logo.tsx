type LogoProps = {
  variant?: "full" | "icon";
  /**
   * Force a specific color scheme, e.g. when placing the logo on a
   * permanently-dark panel regardless of site theme. Leave unset (the
   * default) to let the wordmark follow the site's light/dark mode
   * automatically via the `fg` token.
   */
  theme?: "dark" | "light";
  className?: string;
};

/**
 * Temporary Elliot logo.
 * The final brand mark has not been selected — this component is the single
 * place that renders the wordmark + symbol so it can be swapped later
 * without touching layout code.
   */
export default function Logo({ variant = "full", theme, className = "" }: LogoProps) {
  const forcedColor = theme === "dark" ? "#13223A" : theme === "light" ? "#F5F6F8" : undefined;
  const navy = "#13223A";

  const Symbol = (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="28" height="28" rx="8" fill={navy} />
      <path d="M9 8.5H19" stroke="#F5F6F8" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 14H16.5" stroke="#F5F6F8" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 19.5H19" stroke="#F5F6F8" strokeWidth="2" strokeLinecap="round" />
      <circle cx="22.5" cy="14" r="2" fill="#C9A55E" />
    </svg>
  );

  if (variant === "icon") {
    return <span className={className}>{Symbol}</span>;
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {Symbol}
      <span
        className={`font-display text-[19px] font-semibold tracking-tight ${forcedColor ? "" : "text-fg"}`}
        style={forcedColor ? { color: forcedColor } : undefined}
      >
        Elliot
      </span>
    </span>
  );
}
