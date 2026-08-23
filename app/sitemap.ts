import type { MetadataRoute } from "next";

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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.elliot.ai";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
