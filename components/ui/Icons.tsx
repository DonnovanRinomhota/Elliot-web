type IconProps = { className?: string };

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconSupport({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M4 13a8 8 0 0116 0" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M20 19v1a3 3 0 01-3 3h-3" />
    </svg>
  );
}

export function IconTarget({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function IconCalendar({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
      <path d="M8 14.5l2 2 4-4.5" />
    </svg>
  );
}

export function IconMail({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function IconFollowup({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M4 12a8 8 0 1114.2 5" />
      <path d="M18 13v4h4" />
      <path d="M12 8v4l2.5 1.5" />
    </svg>
  );
}

export function IconKnowledge({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M4 5.5c2-1 5-1 8 .5v13c-3-1.5-6-1.5-8-.5z" />
      <path d="M20 5.5c-2-1-5-1-8 .5v13c3-1.5 6-1.5 8-.5z" />
    </svg>
  );
}

export function IconAutomation({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18 6l-1.5 1.5M7.5 16.5L6 18M18 18l-1.5-1.5M7.5 7.5L6 6" />
    </svg>
  );
}

export function IconHandoff({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <circle cx="8" cy="8" r="3" />
      <path d="M3 20c0-3 2.5-5 5-5s5 2 5 5" />
      <path d="M15.5 13l2 2 4-4.5" />
    </svg>
  );
}

export function IconDatabase({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
      <path d="M4.5 12v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6" />
    </svg>
  );
}

export function IconAnalytics({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M4 20V10M11 20V4M18 20v-7" />
      <path d="M2.5 20h19" />
    </svg>
  );
}

// Industry icons

export function IconBuilding({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <rect x="5" y="3" width="10" height="18" rx="1.2" />
      <rect x="15" y="9" width="5" height="12" rx="1" />
      <path d="M8 7h1M11 7h1M8 11h1M11 11h1M8 15h1M11 15h1" />
    </svg>
  );
}

export function IconPeople({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9.5" r="2.3" />
      <path d="M3.5 20c0-3.2 2.6-5.5 5.5-5.5s5.5 2.3 5.5 5.5" />
      <path d="M15.5 15c2.2.2 4 1.9 4 5" />
    </svg>
  );
}

export function IconBriefcase({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 012-2h3a2 2 0 012 2v1.5" />
      <path d="M3 12.5h18" />
    </svg>
  );
}

export function IconHeartPulse({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M12 20s-7.5-4.6-9.5-9.4C1 6.8 3.2 4 6.3 4c2 0 3.4 1.1 4.2 2.3M12 20s7.5-4.6 9.5-9.4C22.5 6.8 20.3 4 17.2 4c-2 0-3.4 1.1-4.2 2.3" />
      <path d="M3 12h3.5l1.5-3 2 5 1.5-3H21" />
    </svg>
  );
}

export function IconCart({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M3 4h2l2.2 11.2a2 2 0 002 1.8h7.6a2 2 0 002-1.7L21 8H6" />
      <circle cx="9.5" cy="20" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="20" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconGraduation({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M2 9l10-4.5L22 9l-10 4.5z" />
      <path d="M6 11.3V17c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5.7" />
      <path d="M22 9v6" />
    </svg>
  );
}

export function IconBank({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M3 10l9-6 9 6" />
      <path d="M4.5 10.5v8M9.5 10.5v8M14.5 10.5v8M19.5 10.5v8" />
      <path d="M2.5 20.5h19" />
    </svg>
  );
}
