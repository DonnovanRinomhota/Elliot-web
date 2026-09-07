import { ChatMessage } from "@/lib/types";
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

// Separate from the chat webhook -- this is for a future "demo request"
// intake endpoint (CRM/leads system), which doesn't exist on the backend
// yet. Was previously referenced below as an undefined variable (a real
// bug -- would have thrown a ReferenceError/failed the build). Declared
// here now so submitDemoRequest falls back to demo mode correctly until
// a real endpoint exists.
const ELLIOT_API_URL = process.env.NEXT_PUBLIC_ELLIOT_API_URL || "";

interface SendMessageParams {
  history: ChatMessage[];
  message: string;
  conversationId: string | null;
}

interface SendMessageResult {
  text: string;
  conversationId: string | null;
}

export async function sendChatMessage({
  history,
  message,
  conversationId,
}: SendMessageParams): Promise<SendMessageResult> {
  if (ELLIOT_MODE === "demo" || !ELLIOT_CHAT_WEBHOOK_URL || !ELLIOT_DEMO_TENANT) {
    // Demo mode: predefined, deterministic responses. No network call.
    const text = await getDemoReply(message, history);
    return { text, conversationId: null };
  }

  // Live mode: call the real Elliot agent backend (n8n Chat Webhook).
  // Contract confirmed against the actual backend workflow:
  //   request:  { tenant_slug, message, conversation_id? }
  //   response: { conversation_id, reply }
  const body: Record<string, unknown> = {
    tenant_slug: ELLIOT_DEMO_TENANT,
    message,
  };
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
  if (ELLIOT_MODE === "demo" || !ELLIOT_API_URL) {
    // No live CRM/email/calendar connection yet — log locally and resolve.
    // Replace with a real integration when the backend is available.
    return { ok: true as const, demo: true as const };
  }

  const res = await fetch(`${ELLIOT_API_URL}/v1/leads/demo-request`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Elliot API error: ${res.status}`);
  }

  return { ok: true as const, demo: false as const };
}
