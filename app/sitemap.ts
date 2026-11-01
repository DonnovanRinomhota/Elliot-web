import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes = [
  "",
  "/product",
  "/how-it-works",
  "/solutions",
  "/industries",
  "/industries/real-estate",
  "/demo",
  "/contact",
  "/privacy",
  "/terms",
  "/pl",
  "/pl/nieruchomosci",
  "/pl/kontakt",
  "/pl/prywatnosc",
  "/pl/regulamin",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" || route === "/pl" ? 1 : 0.7,
  }));
}
