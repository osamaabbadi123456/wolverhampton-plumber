import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wolverhamptonplumber.co.uk";

  const pages = [
    "",
    "/emergency-plumber-wolverhampton",
    "/blocked-drains-wolverhampton",
    "/boiler-heating-plumber-wolverhampton",
    "/areas-covered",
    "/about",
    "/plumbing-advice",
    "/contact",

    "/privacy-policy",
    "/terms",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : page === "/contact" ? 0.9 : 0.8,
  }));
}
