import { ChatMessage } from "@/lib/types";
import { getDemoReply } from "@/lib/demoResponses";

/**
 * Single integration point between the marketing website and the real
 * Elliot SaaS backend.
 *
 * The website must never talk to the Elliot backend, a database, or n8n
 * directly from UI components. Everything goes through this module, so
 * flipping from demo data to the live agent is a one-file change.
 *
 * Mode is controlled by NEXT_PUBLIC_ELLIOT_MODE ("demo" | "live").
 * Live mode target is controlled by NEXT_PUBLIC_ELLIOT_API_URL.
 */

export type ElliotMode = "demo" | "live";

export const ELLIOT_MODE: ElliotMode =
  (process.env.NEXT_PUBLIC_ELLIOT_MODE as ElliotMode) || "demo";

const ELLIOT_API_URL = process.env.NEXT_PUBLIC_ELLIOT_API_URL || "";

interface SendMessageParams {
  history: ChatMessage[];
  message: string;
}

interface SendMessageResult {
  text: string;
}

export async function sendChatMessage({
  history,
  message,
}: SendMessageParams): Promise<SendMessageResult> {
  if (ELLIOT_MODE === "demo" || !ELLIOT_API_URL) {
    // Demo mode: predefined, deterministic responses. No network call.
    const text = await getDemoReply(message, history);
    return { text };
  }

  // Live mode: call the real Elliot agent backend.
  // Contract is intentionally simple and stable so the SaaS team can
  // implement it independently of this website.
  const res = await fetch(`${ELLIOT_API_URL}/v1/website-chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      history: history.map((m) => ({ role: m.role, text: m.text })),
      source: "public-website",
    }),
  });

  if (!res.ok) {
    throw new Error(`Elliot API error: ${res.status}`);
  }

  const data = await res.json();
  return { text: data.reply as string };
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
