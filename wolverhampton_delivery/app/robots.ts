import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you"],
      },
    ],
    sitemap: "https://wolverhamptonplumber.co.uk/sitemap.xml",
    host: "https://wolverhamptonplumber.co.uk",
  };
}
