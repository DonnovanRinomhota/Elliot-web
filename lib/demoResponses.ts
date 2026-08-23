import { ChatMessage } from "@/lib/types";

/**
 * Demo-mode response logic for the website chat.
 * Isolated from the live integration path in services/elliotApi.ts so the
 * two are never accidentally mixed.
 */

const RULES: { match: RegExp; reply: string }[] = [
  {
    match: /what is elliot|who are you|what are you/i,
    reply:
      "I'm Elliot — an AI employee for businesses. I handle customer conversations, qualify leads, book appointments, follow up with prospects and take care of repetitive admin work, around the clock. Think of me less as a chatbot and more as a team member who never clocks out.",
  },
  {
    match: /automat/i,
    reply:
      "I can automate answering customer questions, qualifying and scoring leads, booking or rescheduling appointments, following up with prospects, updating your CRM, and escalating anything important to a human. What part of that sounds most useful for your business?",
  },
  {
    match: /real estate|propert(y|ies)|apartment|listing/i,
    reply:
      "For real estate, I handle property enquiries end to end — understanding what a buyer wants, matching listings, qualifying and scoring the lead, offering viewing times, booking the appointment, and updating the CRM. Want to see that flow in action?",
  },
  {
    match: /cost|price|pricing|how much/i,
    reply:
      "Pricing depends on your business size and what you'd like me to handle — I don't have a public price list here yet. The fastest way to get real numbers is to book a demo and walk through your use case with the team.",
  },
  {
    match: /demo/i,
    reply:
      "I'd be glad to show you. You can try the interactive real estate walkthrough on the Demo page, or book time with the team for something tailored to your business.",
  },
  {
    match: /how would elliot work for my business|my business|my company/i,
    reply:
      "Tell me a bit about your business — what industry you're in and roughly how many customer enquiries you handle a month — and I can point you to what I'd typically automate first.",
  },
  {
    match: /human|escalat|handoff|takeover/i,
    reply:
      "I resolve what I can confidently handle myself, and I hand off to a human whenever a situation is sensitive, high-value, or outside what I've been configured to do — along with full context so nothing gets repeated.",
  },
];

const FALLBACK =
  "I can help with that. Could you tell me a little more — for example, your industry, or what you'd like automated? In the meantime, you're welcome to book a demo and walk through it with the team.";

export async function getDemoReply(
  message: string,
  _history: ChatMessage[]
): Promise<string> {
  // Small artificial delay so the UI's typing indicator reads naturally.
  await new Promise((resolve) => setTimeout(resolve, 550 + Math.random() * 500));

  const rule = RULES.find((r) => r.match.test(message));
  return rule ? rule.reply : FALLBACK;
}

export const SUGGESTED_PROMPTS = [
  "What is Elliot?",
  "What can Elliot automate?",
  "How would Elliot work for my business?",
  "Show me a demo",
  "How much does Elliot cost?",
];

export const GREETING =
  "Hi there! I'm Elliot. What would you like help with today?";
