# Elliot — Public Website

The public-facing marketing website for **Elliot**, an AI employee platform
for businesses. This is a standalone repository — it does not contain the
Elliot SaaS application, its database, its automation logic, or its
authentication. It talks to that system (once available) through a single
integration layer.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

```
app/                     Routes (App Router)
components/
  ui/                    Design system primitives (Button, Card, Badge...)
  sections/               Marketing page sections
  chat/                   ElliotChat widget (provider, message, input, launcher)
  product/                Dashboard/timeline product visualizations
  demo/                   Interactive /demo walkthrough
lib/                      Types + demo response logic
services/
  elliotApi.ts            The ONLY place that talks to the real Elliot backend
```

## Connecting to the real Elliot backend

The site ships in **demo mode** by default — the chat widget and the demo
request form both work fully without any backend, using canned responses
defined in `lib/demoResponses.ts`.

The real backend is a set of n8n workflows (see the `Elliot` repo), not a
conventional REST API — each integration point is a single n8n webhook URL,
set directly as an env var. To connect:

1. Set `NEXT_PUBLIC_ELLIOT_MODE=live`.
2. Set `NEXT_PUBLIC_ELLIOT_CHAT_WEBHOOK_URL` to the production webhook URL
   of `01 - Main AI Agent` in n8n.
3. Set `NEXT_PUBLIC_ELLIOT_DEMO_TENANT` to the tenant slug that should power
   the live chat demo on this site (e.g. a dedicated demo tenant, not a
   real customer's).
4. Set `NEXT_PUBLIC_ELLIOT_DEMO_REQUEST_WEBHOOK_URL` to the production
   webhook URL of `18 - Demo Request Intake` in n8n.

No other file needs to change. `services/elliotApi.ts` is the single
abstraction point — nothing else in the UI calls `fetch` against the
backend directly.

## What's implemented vs. planned

The site only marks a capability "Available" if it's actually live in the
product today (see `components/sections/Integrations.tsx` and
`FeatureGrid.tsx`). Everything else is labeled "Coming soon." Update these
as the SaaS product ships new functionality — don't change the marketing
copy to imply availability ahead of the real backend.

## Scripts

```bash
npm run dev      # local development
npm run build    # production build
npm run start    # run the production build
npm run lint     # ESLint
```

## Notes

- The Elliot logo is a placeholder (`components/Logo.tsx`). Swap the SVG
  inside that one component once the final brand mark is ready — it's
  referenced everywhere else (nav, footer, favicon) through this component.
- All dashboard metrics, activity timelines, and performance numbers shown
  on the site are clearly labeled example/demo data — never real customer
  data.
