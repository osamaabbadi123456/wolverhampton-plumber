import type { MetadataRoute } from "next";

const baseUrl = "https://wolverhamptonplumber.co.uk";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },

  { path: "/contact", priority: 0.95, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },

  {
    path: "/emergency-plumber-wolverhampton",
    priority: 0.95,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/blocked-drains-wolverhampton",
    priority: 0.95,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/blocked-toilet-wolverhampton",
    priority: 0.94,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/leak-repair-wolverhampton",
    priority: 0.94,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/tap-repair-wolverhampton",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/water-pressure-plumber-wolverhampton",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/kitchen-plumber-wolverhampton",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/bathroom-plumber-wolverhampton",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/boiler-heating-plumber-wolverhampton",
    priority: 0.86,
    changeFrequency: "monthly" as const,
  },

  {
    path: "/areas-covered",
    priority: 0.84,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/plumber-bilston",
    priority: 0.82,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/plumber-wednesfield",
    priority: 0.82,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/plumber-tettenhall",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  { path: "/plumber-penn", priority: 0.8, changeFrequency: "monthly" as const },
  {
    path: "/plumber-bushbury",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },

  {
    path: "/plumbing-advice",
    priority: 0.86,
    changeFrequency: "monthly" as const,
  },

  {
    path: "/plumbing-advice/blocked-toilet-water-rising-wolverhampton",
    priority: 0.82,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/plumbing-advice/kitchen-sink-draining-slowly-wolverhampton",
    priority: 0.82,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/plumbing-advice/low-water-pressure-one-tap-wolverhampton",
    priority: 0.82,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/plumbing-advice/water-leaking-under-sink-wolverhampton",
    priority: 0.82,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/plumbing-advice/shower-drain-smells-wolverhampton",
    priority: 0.82,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/plumbing-advice/internal-stop-tap-leaking-wolverhampton",
    priority: 0.74,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/plumbing-advice/how-to-prevent-frozen-and-burst-pipes-wolverhampton",
    priority: 0.74,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/plumbing-advice/what-to-do-if-you-smell-gas-wolverhampton",
    priority: 0.72,
    changeFrequency: "monthly" as const,
  },

  { path: "/videos", priority: 0.72, changeFrequency: "monthly" as const },

  {
    path: "/privacy-policy",
    priority: 0.35,
    changeFrequency: "yearly" as const,
  },
  { path: "/terms", priority: 0.35, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
