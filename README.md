# getelliot.eu

The public website for **Elliot**, the AI front office for estate agencies.
English at `/`, Polish at `/pl`. The product itself (dashboard, workflows,
database) is in the [Elliot](https://github.com/DonnovanRinomhota/Elliot) repo.

Next.js 14 (App Router) · TypeScript · Tailwind CSS · hosted on Vercel.

## Run it

```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
npm run build      # production build (run before merging)
```

## Pages

| English | Polish | What it is |
|---|---|---|
| `/` | `/pl` | Home: what Elliot does, how it works, tools, pricing |
| `/product` | `/pl/produkt` | Capabilities, control, integrations, data and trust |
| `/how-it-works` | `/pl/jak-to-dziala` | Set-up steps and the dashboard |
| `/industries/real-estate` | `/pl/nieruchomosci` | Elliot for estate agencies |
| `/book` | `/pl/rezerwacja` | Book a 15-minute intro call or 30-minute demo (Google Meet) |
| `/demo` | `/pl/demo` | Live demo: a sample agency to chat with |
| `/contact` | `/pl/kontakt` | Contact form |
| `/privacy`, `/terms` | `/pl/prywatnosc`, `/pl/regulamin` | Legal |

`/solutions` and `/industries` redirect to `/product` and
`/industries/real-estate` (`next.config.mjs`).

## Checks

Every pull request runs **Checks** on GitHub (`.github/workflows/checks.yml`):
a scan for keys (this repository is public), ESLint and a production build.
The build also fails if the English and Polish pages drift apart. Wait for the
green tick before merging; Vercel deploys `main` by itself.

## Where the words live

- **`lib/capabilities.ts`: how far each feature is** (`live`, `testing`,
  `planned`). This is the only place a status is written; every page in both
  languages reads it. Mark something `live` only when a real agency can use
  it today. Code that exists but hasn't run for a real agency is `testing`.
  When WhatsApp or ASARI goes live, change one word here and the tags and
  every "(in testing)" / "(w testach)" on the site follow.
- `lib/content/home.ts`: homepage copy, both languages.
- `lib/content/product.ts`: product and how-it-works copy, both languages.
- In the copy, an item names its capability (`cap: "whatsapp"`), and a
  sentence marks one as `WhatsApp[[whatsapp]]`.
- Every page exists in both languages. English and Polish must have the same
  items in the same order with the same capabilities: if they drift,
  `npm run build` fails and says where.
- `lib/content/legal.ts`: privacy policy and terms, both languages. Change
  `LEGAL_UPDATED` in `lib/site.ts` whenever you edit them.
- `lib/site.ts`: owner, pricing (`from €199 / month`, setup `from €500`) and
  other facts used on several pages.
- `lib/i18n.ts`: menus, footer and which English and Polish pages are twins.

## Connection to Elliot

`services/elliotApi.ts` is the only file that calls the backend (n8n
webhooks). Environment variables (Vercel → Settings → Environment Variables):

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_ELLIOT_MODE` | `live` (or `demo` for canned replies with no backend) |
| `NEXT_PUBLIC_ELLIOT_CHAT_WEBHOOK_URL` | Workflow 01's production URL (`…/webhook/chat`) |
| `NEXT_PUBLIC_ELLIOT_DEMO_TENANT` | The sales account's slug: the chat in the corner is Elliot selling itself |
| `NEXT_PUBLIC_ELLIOT_DEMO_REQUEST_WEBHOOK_URL` | Workflow 18's production URL (contact form) |

Call booking and demo access use webhooks next to the chat one
(`consultation-slots`, `book-consultation`, `demo-access`, workflow 35), so
they need no extra variables. What the chat assistant knows comes from
`docs/sales-knowledge/elliot-for-agencies.md` in the Elliot repo, uploaded on
the sales account's Knowledge page.
