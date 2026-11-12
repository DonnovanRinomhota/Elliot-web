import { ElliotMark, ElliotWordmark } from "@/components/ElliotLogoArt";

type LogoProps = {
  variant?: "full" | "icon";
  /**
   * Force a specific colour scheme, e.g. on a permanently dark panel
   * regardless of the site theme. Leave unset to let the wordmark follow the
   * site's light/dark mode through the `fg` token.
   */
  theme?: "dark" | "light";
  className?: string;
};

/**
 * The Elliot logo (November 2026): the gold house whose inner lines form an
 * E, and the ELLIOT wordmark. The single place the site renders it.
 * Brand files and rules: the Elliot repo's brand/ folder.
 */
export default function Logo({ variant = "full", theme, className = "" }: LogoProps) {
  // The wordmark is pale gold on the navy site, like the brand artwork.
  const forcedColor = theme === "dark" ? "#0F172A" : theme === "light" ? "#F5F6F8" : "#EBCB9E";

  if (variant === "icon") {
    return (
      <span role="img" aria-label="Elliot" className={className}>
        <ElliotMark size={30} />
      </span>
    );
  }

  return (
    <span role="img" aria-label="Elliot" className={`inline-flex items-center gap-3.5 ${className}`}>
      <ElliotMark size={34} />
      <ElliotWordmark height={14} color={forcedColor} />
    </span>
  );
}
