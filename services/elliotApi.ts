import { ChatMessage, VisitorDetails } from "@/lib/types";
import { getDemoReply } from "@/lib/demoResponses";

/**
 * Single integration point between the marketing website and the real
 * Elliot SaaS backend.
 *
 * The website must never talk to the Elliot backend, a database, or n8n
 * directly from UI components. Everything goes through this module, so
 * flipping from demo data to the live agent -- or swapping which tenant
 * powers the live demo -- is a one-file (really, one env var) change.
 *
 * Mode is controlled by NEXT_PUBLIC_ELLIOT_MODE ("demo" | "live").
 * Live mode target is controlled by NEXT_PUBLIC_ELLIOT_CHAT_WEBHOOK_URL
 * (the real n8n "Chat Webhook" production URL).
 * Which tenant the live demo talks to is controlled by
 * NEXT_PUBLIC_ELLIOT_DEMO_TENANT (a tenant_slug, e.g. "zebra-dev") --
 * deliberately NOT hardcoded, so swapping the live demo to a different
 * client or industry later needs no code changes, just an env var update
 * in Vercel.
 */

export type ElliotMode = "demo" | "live";

export const ELLIOT_MODE: ElliotMode =
  (process.env.NEXT_PUBLIC_ELLIOT_MODE as ElliotMode) || "demo";

const ELLIOT_CHAT_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_ELLIOT_CHAT_WEBHOOK_URL || "";
const ELLIOT_DEMO_TENANT = process.env.NEXT_PUBLIC_ELLIOT_DEMO_TENANT || "";

// Separate from the chat webhook -- this is the n8n "Demo Request Intake"
// production webhook URL (workflow 18). Same pattern as
// NEXT_PUBLIC_ELLIOT_CHAT_WEBHOOK_URL: a full webhook URL, not a REST API
// base + path, since n8n webhooks aren't a conventional REST API.
const ELLIOT_DEMO_REQUEST_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_ELLIOT_DEMO_REQUEST_WEBHOOK_URL || "";

/**
 * The other n8n webhooks live next to the chat webhook (same n8n, same
 * "/webhook/" base), so they need no extra env vars:
 *   GET  consultation-slots, POST book-consultation, POST demo-access (workflow 35).
 */
function webhookUrl(path: string): string {
  const base = ELLIOT_CHAT_WEBHOOK_URL.replace(/\/chat\/?$/, "");
  return base && base !== ELLIOT_CHAT_WEBHOOK_URL ? `${base}/${path}` : "";
}

/** True when the live backend is configured (bookings and the live demo need it). */
export const LIVE_BACKEND = ELLIOT_MODE === "live" && !!ELLIOT_CHAT_WEBHOOK_URL;

interface SendMessageParams {
  /** Which account answers: defaults to the site's own assistant (NEXT_PUBLIC_ELLIOT_DEMO_TENANT). */
  tenantSlug?: string;
  history: ChatMessage[];
  message: string;
  conversationId: string | null;
  /** The visitor's name + email/phone, when known. */
  contact: VisitorDetails | null;
}

interface SendMessageResult {
  text: string;
  conversationId: string | null;
  /** The backend wants the visitor's details before it answers. */
  needsContact?: boolean;
}

export async function sendChatMessage({
  tenantSlug,
  history,
  message,
  conversationId,
  contact,
}: SendMessageParams): Promise<SendMessageResult> {
  const tenant = tenantSlug || ELLIOT_DEMO_TENANT;
  if (ELLIOT_MODE === "demo" || !ELLIOT_CHAT_WEBHOOK_URL || !tenant) {
    // Demo mode: predefined, deterministic responses. No network call.
    const text = await getDemoReply(message, history);
    return { text, conversationId: null };
  }

  // Live mode: call the real Elliot agent backend (n8n Chat Webhook).
  // Contract confirmed against the actual backend workflow:
  //   request:  { tenant_slug, message, conversation_id?, contact: {name,email,phone} }
  //   response: { conversation_id, reply }, or { ..., needs_contact: true } when
  //             the backend has no name + email/phone for this chat yet
  const body: Record<string, unknown> = {
    tenant_slug: tenant,
    message,
  };
  if (contact) body.contact = contact;
  if (conversationId) {
    body.conversation_id = conversationId;
  }

  const res = await fetch(ELLIOT_CHAT_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Elliot API error: ${res.status}`);
  }

  const data = await res.json();
  return {
    text: data.reply as string,
    conversationId: (data.conversation_id as string) || conversationId,
    needsContact: data.needs_contact === true,
  };
}

interface DemoRequestPayload {
  name: string;
  company: string;
  email: string;
  website?: string;
  industry: string;
  employees: string;
  automate: string;
}

export async function submitDemoRequest(payload: DemoRequestPayload) {
  if (ELLIOT_MODE === "demo" || !ELLIOT_DEMO_REQUEST_WEBHOOK_URL) {
    // No live webhook configured yet -- log locally and resolve.
    return { ok: true as const, demo: true as const };
  }

  const res = await fetch(ELLIOT_DEMO_REQUEST_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Elliot API error: ${res.status}`);
  }

  // Workflow 18 responds { success: true, id }.
  const data = await res.json();
  if (!data.success) {
    throw new Error("Demo request submission failed");
  }

  return { ok: true as const, demo: false as const };
}

// ── Consultation booking (getelliot.eu/book) and the live demo (getelliot.eu/demo) ──

export type CallType = "intro" | "demo";

export interface Slot {
  starts_at: string;
  ends_at: string;
}

async function readJson(res: Response) {
  try {
    return await res.json();
  } catch {
    return null;
  }
}

/** Free times for a call, from the owner's Google Calendar (workflow 35 → 11). */
export async function getConsultationSlots(type: CallType): Promise<{ slots: Slot[]; timezone: string }> {
  const url = webhookUrl("consultation-slots");
  if (!LIVE_BACKEND || !url) throw new Error("not_configured");
  const res = await fetch(`${url}?type=${type}`, { cache: "no-store" });
  const data = await readJson(res);
  if (!res.ok || !data?.success) throw new Error(data?.error || `HTTP ${res.status}`);
  return { slots: data.slots || [], timezone: data.timezone || "Europe/Warsaw" };
}

export interface BookingPayload {
  type: CallType;
  starts_at: string;
  name: string;
  email: string;
  phone?: string;
  agency: string;
  agents?: string;
  listings?: string;
  crm?: string;
  message?: string;
  lang: "en" | "pl";
  /** Honeypot: always empty for people. */
  website?: string;
}

export type BookingResult =
  | { ok: true; starts_at: string; ends_at: string; meet_link: string | null; confirmation_sent_to: string | null }
  | { ok: false; taken: boolean; error: string };

/** Books the call: Google Meet, calendar event, dashboard, confirmation email (workflow 35 → 12). */
export async function bookConsultation(payload: BookingPayload): Promise<BookingResult> {
  const url = webhookUrl("book-consultation");
  if (!LIVE_BACKEND || !url) return { ok: false, taken: false, error: "not_configured" };
  let res: Response;
  try {
    res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  } catch {
    return { ok: false, taken: false, error: "network" };
  }
  const data = await readJson(res);
  if (res.ok && data?.success) {
    return { ok: true, starts_at: data.starts_at, ends_at: data.ends_at, meet_link: data.meet_link || null, confirmation_sent_to: data.confirmation_sent_to || null };
  }
  return { ok: false, taken: res.status === 409, error: data?.error || `HTTP ${res.status}` };
}

export interface DemoAccessPayload {
  name: string;
  email: string;
  phone?: string;
  agency: string;
  lang: "en" | "pl";
  website?: string;
}

/** Unlocks the live demo: saves the visitor as a lead, returns the demo agency to chat with. */
export async function requestDemoAccess(payload: DemoAccessPayload): Promise<{ ok: true; tenantSlug: string } | { ok: false; error: string }> {
  const url = webhookUrl("demo-access");
  if (!LIVE_BACKEND || !url) return { ok: false, error: "not_configured" };
  let res: Response;
  try {
    res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  } catch {
    return { ok: false, error: "network" };
  }
  const data = await readJson(res);
  if (res.ok && data?.success && data.tenant_slug) return { ok: true, tenantSlug: data.tenant_slug };
  return { ok: false, error: data?.error || `HTTP ${res.status}` };
}
