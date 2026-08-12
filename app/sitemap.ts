import type { MetadataRoute } from "next";
import { services, areas, articles, siteUrl } from "@/app/_data/siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/contact",
    "/about",
    "/areas-covered",
    "/plumbing-advice",
    "/videos",
    "/privacy-policy",
    "/terms",
  ];

  const areaRoutes = areas.filter((area) => area.href !== "/areas-covered").map((area) => area.href);
  const serviceRoutes = services.map((service) => service.href);
  const articleRoutes = articles.map((article) => article.href);

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...articleRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/plumbing-advice/") ? 0.64 : 0.78,
  }));
}



