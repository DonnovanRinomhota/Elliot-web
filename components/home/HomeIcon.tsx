import { BRANDS, type BrandName } from "@/lib/brands";
import type { IconName } from "@/lib/content/home";

// Line icons (gold on navy) for what Elliot does, and the real product logos
// (lib/brands.ts) wherever an item is a product: WhatsApp, Gmail, Google
// Calendar and so on.

const LINE: Partial<Record<IconName, JSX.Element>> = {
  chat: (
    <>
      <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v6a2.5 2.5 0 0 1-2.5 2.5H11l-4 3.5V15h0a2 2 0 0 1-2-2Z" />
      <path d="M9 9.75h.01M12 9.75h.01M15 9.75h.01" strokeWidth="2.2" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19c.6-3 2.8-4.8 5.5-4.8s4.9 1.8 5.5 4.8" />
      <circle cx="16.5" cy="9.5" r="2.4" />
      <path d="M15.6 14.4c2.4.1 4.3 1.7 4.9 4.1" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5.5" width="16" height="14.5" rx="2.5" />
      <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
      <path d="m9.5 15 1.8 1.8 3.4-3.6" />
    </>
  ),
  home: (
    <>
      <path d="M4 11 12 4.5l8 6.5" />
      <path d="M6 9.5V19.5h12V9.5" />
      <path d="M10 19.5v-5h4v5" />
    </>
  ),
  inbox: (
    <>
      <path d="M4 13.5 6.5 5.5h11l2.5 8v5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5Z" />
      <path d="M4 13.5h4.5l1.2 2.2h4.6l1.2-2.2H20" />
    </>
  ),
  repeat: (
    <>
      <path d="M5 11a6.5 6.5 0 0 1 11.3-4.3L18.5 9" />
      <path d="M18.5 4.5V9H14" />
      <path d="M19 13a6.5 6.5 0 0 1-11.3 4.3L5.5 15" />
      <path d="M5.5 19.5V15H10" />
    </>
  ),
  handover: (
    <>
      <circle cx="12" cy="7.5" r="3" />
      <path d="M6 19.5c.7-3.2 3.1-5 6-5s5.3 1.8 6 5" />
      <path d="m16.5 11 2 2 3.5-3.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </>
  ),
  web: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4c2.2 2.3 3.3 5 3.3 8s-1.1 5.7-3.3 8c-2.2-2.3-3.3-5-3.3-8S9.8 6.3 12 4Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 19 6v5.5c0 4.4-2.9 7.6-7 9-4.1-1.4-7-4.6-7-9V6Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </>
  ),
  bolt: <path d="M13.5 3 5.5 13.5H12L10.5 21l8-10.5H12Z" />,
  chart: (
    <>
      <path d="M5 20V13M10 20V9M15 20v-6M20 20V5" />
      <path d="M4 20h17" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.9" />
    </>
  ),
  eye: (
    <>
      <path d="M3 12s3.3-6 9-6 9 6 9 6-3.3 6-9 6-9-6-9-6Z" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ),
  book: (
    <>
      <path d="M5 5.5A1.5 1.5 0 0 1 6.5 4H19v14H6.5A1.5 1.5 0 0 0 5 19.5Z" />
      <path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19v-3" />
      <path d="M9 8h6" />
    </>
  ),
};

const BRAND_OF: Partial<Record<IconName, BrandName>> = {
  whatsapp: "whatsapp",
  gmail: "gmail",
  googleCalendar: "googleCalendar",
  googleDrive: "googleDrive",
  zapier: "zapier",
  make: "make",
};

export function isBrand(name: IconName): boolean {
  return name in BRAND_OF || name === "asari";
}

/** A line icon (inherits the text colour) or a product logo in its own colour. */
export function HomeIcon({ name, className = "h-6 w-6", mono }: { name: IconName; className?: string; mono?: boolean }) {
  const brand = BRAND_OF[name];
  if (brand) {
    const b = BRANDS[brand];
    return (
      <svg viewBox="0 0 24 24" className={className} role="img" aria-label={b.title} fill={mono ? "currentColor" : b.hex}>
        <path d={b.path} />
      </svg>
    );
  }
  if (name === "asari") {
    // ASARI has no public logo file: its name as a small wordmark tile.
    return (
      <svg viewBox="0 0 24 24" className={className} role="img" aria-label="ASARI">
        <rect x="1" y="5" width="22" height="14" rx="3" fill={mono ? "currentColor" : "#E4002B"} />
        <text x="12" y="15.2" textAnchor="middle" fontSize="7.4" fontWeight="700" fontFamily="system-ui, sans-serif" fill="#fff" letterSpacing="0.3">
          ASARI
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {LINE[name]}
    </svg>
  );
}

/** A product logo on a small white tile, like an app icon. Line icons get a glass tile. */
export function IconTile({ name, size = "md" }: { name: IconName; size?: "sm" | "md" | "lg" }) {
  const box = size === "lg" ? "h-14 w-14 rounded-2xl" : size === "sm" ? "h-9 w-9 rounded-xl" : "h-11 w-11 rounded-xl";
  const icon = size === "lg" ? "h-7 w-7" : size === "sm" ? "h-[18px] w-[18px]" : "h-[22px] w-[22px]";
  if (isBrand(name)) {
    return (
      <span className={`inline-flex shrink-0 items-center justify-center bg-white shadow-[0_6px_18px_-8px_rgba(0,0,0,0.6)] ${box}`}>
        <HomeIcon name={name} className={icon} />
      </span>
    );
  }
  return (
    <span className={`inline-flex shrink-0 items-center justify-center gold-tile border border-[#d9a56c]/25 bg-[#d9a56c]/[0.08] text-[#e8c08e] ${box}`}>
      <HomeIcon name={name} className={icon} />
    </span>
  );
}
