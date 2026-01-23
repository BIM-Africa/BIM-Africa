import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const BASE_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://www.bim.africa";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
