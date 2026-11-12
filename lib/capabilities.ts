// The one place that says how far each part of Elliot is.
//
//   live     a client agency can use it today
//   testing  built, but not yet proven with a real agency (or waiting on
//            someone else, e.g. Meta's verification)
//   planned  not built
//
// This is our own record. Since the November 2026 redesign the website no
// longer shows these statuses to visitors (no "Available now" / "In testing"
// labels); what the site promises is decided in the page copy. Keep this
// list current anyway: it is what we check before claiming something new.
//
// Rule: "live" means a real agency could use it today. Code that exists but
// hasn't run for a real agency is "testing".

import type { Locale } from "@/lib/i18n";

export type Status = "live" | "testing" | "planned";

export const CAPABILITIES = {
  // Channels
  websiteChat: "live",
  email: "live", // forwarding or Gmail; replies in the agency's name
  emailAttachments: "testing", // reads PDFs and photos; waiting for real client emails with files
  whatsapp: "testing", // works on Meta's test number; a real agency number needs Meta business verification
  // What Elliot does
  answers: "live",
  qualification: "live",
  viewings: "live", // Google Calendar, per agent; confirm / move / cancel by message
  sellers: "live",
  leadCapture: "live",
  followUps: "live", // by email
  whatsappFollowUps: "testing", // needs WhatsApp, and Meta's approval of the template
  handover: "live",
  // Tools
  googleCalendar: "live",
  asari: "testing", // built against ASARI's API docs; not yet run with a real agency's account
  listingsImport: "live", // spreadsheet import
  crm: "live", // webhook, Zapier, Make
  outlookCalendar: "planned",
  phoneCalls: "planned",
} as const satisfies Record<string, Status>;

export type Capability = keyof typeof CAPABILITIES;

export const statusOf = (cap: Capability): Status => CAPABILITIES[cap];

export const STATUS_LABEL: Record<Locale, Record<Status, string>> = {
  en: { live: "Available now", testing: "In testing", planned: "Not yet" },
  pl: { live: "Dostępne", testing: "W testach", planned: "Jeszcze nie" },
};

/** What follows a name in running text. Empty: the site shows no statuses. */
const SUFFIX: Record<Locale, Record<Status, string>> = {
  en: { live: "", testing: "", planned: "" },
  pl: { live: "", testing: "", planned: "" },
};

/**
 * Sentences mention a capability as "WhatsApp[[whatsapp]]". This turns the
 * marker into "" while it is live and into " (in testing)" / " (w testach)"
 * while it isn't, so the wording follows CAPABILITIES by itself.
 */
export function withStatus(text: string, locale: Locale): string {
  return text.replace(/\[\[(\w+)\]\]/g, (_, name: string) => {
    if (!(name in CAPABILITIES)) throw new Error(`Unknown capability "${name}" in: ${text}`);
    return SUFFIX[locale][CAPABILITIES[name as Capability]];
  });
}

/** withStatus for every string inside an object or array. */
export function resolveStatuses<T>(value: T, locale: Locale): T {
  if (typeof value === "string") return withStatus(value, locale) as unknown as T;
  if (Array.isArray(value)) return value.map((v) => resolveStatuses(v, locale)) as unknown as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, resolveStatuses(v, locale)])) as T;
  }
  return value;
}

/**
 * English and Polish must say the same things in the same order. Called when
 * the content modules load, so a page that drifted fails the build instead of
 * reaching the site. Compares shape only: same keys, same list lengths, same
 * capability ids.
 */
export function assertSameShape(name: string, en: unknown, pl: unknown, path = name): void {
  const kind = (v: unknown) => (Array.isArray(v) ? "array" : v === null ? "null" : typeof v);
  if (kind(en) !== kind(pl)) throw new Error(`Content mismatch at ${path}: English is ${kind(en)}, Polish is ${kind(pl)}`);
  if (Array.isArray(en) && Array.isArray(pl)) {
    if (en.length !== pl.length) throw new Error(`Content mismatch at ${path}: English has ${en.length} items, Polish has ${pl.length}`);
    en.forEach((v, i) => assertSameShape(name, v, pl[i], `${path}[${i}]`));
    return;
  }
  if (en && pl && typeof en === "object" && typeof pl === "object") {
    const a = Object.keys(en).sort();
    const b = Object.keys(pl as object).sort();
    if (a.join() !== b.join()) throw new Error(`Content mismatch at ${path}: English has [${a}], Polish has [${b}]`);
    for (const k of a) {
      const ev = (en as Record<string, unknown>)[k];
      const pv = (pl as Record<string, unknown>)[k];
      // Capability ids and other identifiers must be identical, not translated.
      if (k === "cap" || k === "icon" || k === "tone") {
        if (ev !== pv) throw new Error(`Content mismatch at ${path}.${k}: "${String(ev)}" vs "${String(pv)}"`);
      } else assertSameShape(name, ev, pv, `${path}.${k}`);
    }
    return;
  }
  if (typeof en === "string" && typeof pl === "string") {
    if (!en.trim() || !pl.trim()) throw new Error(`Empty text at ${path}`);
    const marks = (s: string) => (s.match(/\[\[\w+\]\]/g) || []).sort().join();
    if (marks(en) !== marks(pl)) throw new Error(`Content mismatch at ${path}: status markers differ ("${marks(en)}" vs "${marks(pl)}")`);
  }
}
