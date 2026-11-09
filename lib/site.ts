// Single source for facts that appear on several pages. Change them here.

export const SITE_URL = "https://getelliot.eu";

/** Who runs Elliot. A sole trader, so a person's name, not a company. */
export const OWNER = {
  name: "Donnovan Rinomhota",
  country: { en: "Poland", pl: "Polska" },
};

/**
 * Pricing shown on the site. Net amounts; VAT is added where it applies.
 * Final price is confirmed in writing before work starts.
 */
export const PRICING = {
  currency: "€",
  monthlyFrom: 199,
  setupFrom: 500,
};

/** Date shown on the Privacy Policy and Terms. Update when you edit them. */
export const LEGAL_UPDATED = { en: "1 November 2026", pl: "1 listopada 2026" };
