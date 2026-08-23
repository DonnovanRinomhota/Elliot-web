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

To connect the real Elliot agent once it's ready:

1. Set `NEXT_PUBLIC_ELLIOT_MODE=live` in your environment.
2. Set `NEXT_PUBLIC_ELLIOT_API_URL` to the SaaS API's base URL.
3. Implement two endpoints on the SaaS side:
   - `POST {url}/v1/website-chat` — `{ message, history, source }` → `{ reply }`
   - `POST {url}/v1/leads/demo-request` — lead capture payload

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
