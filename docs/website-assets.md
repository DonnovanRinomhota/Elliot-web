# Website images: where they come from

Every picture on getelliot.eu, where it came from, and what is deliberately
kept off the site. Update this file whenever an image is added or replaced.

## Dashboard screenshots (`public/images/elliot/`)

Real screenshots of the Elliot dashboard (app.getelliot.eu), taken from the
current code running locally against **sample data only**: a demo agency
("Demo Nieruchomości"), invented clients, `@agency.example` addresses and
sample listings. No real client, agency, email address or phone number
appears in them. They were checked by eye before being added.

| File | Screen | Used on |
| --- | --- | --- |
| `dashboard-overview.webp` | Overview | Home (showcase), Product, How it works |
| `dashboard-leads.webp` | Leads | Home (showcase), Product, Managed advertising |
| `dashboard-conversations.webp` | Conversations | Home (showcase), Product |
| `dashboard-listings.webp` | Listings | Home (showcase), Product |
| `dashboard-calendar.webp` | Calendar | Home (showcase), Product, Real estate |

All are 2000×1250 WebP (quality 82). Captions on the site say "Real Elliot
dashboard, shown with sample data." Copy for each screen lives in
`lib/content/screens.ts`.

**When the dashboard changes,** retake them the same way (sample data, same
size) rather than editing the pictures. Never take them from a real agency's
account.

### Screens kept off the website on purpose

Settings, approval rules, the internal control panel, system health,
onboarding, billing, team management and anything showing tokens, webhooks or
integration credentials. They either expose internal configuration or show
details of how the service is operated that don't belong in marketing.

## Photographs (`public/images/photos/`)

Supplied by the owner of Elliot, who confirmed they are his own or made for
him with AI tools. They show generic scenes, not a real agency, client or
property listing.

| File | Shows | Used on |
| --- | --- | --- |
| `agent-viewing.webp` | An agent showing a flat to a couple | Home ("People and Elliot") |
| `apartment-interior.webp` | A modern apartment interior | Home (real estate), Real estate page |

A third supplied image, an AI-generated mock-up of a "Property Matching"
screen, is **not used**: it imitates the product's interface without being a
real screenshot.

## Other artwork

| File | Notes |
| --- | --- |
| `public/images/hero-scene.webp` | The homepage hero (a laptop in a glass scene). Pre-dates this redesign. It shows a dashboard-like screen; confirm it was made from a real screenshot, or replace it with a framed real screenshot. |
| `public/og.png` | Social sharing image. Pre-dates this redesign. |
