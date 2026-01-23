// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://www.bim.africa";

  const API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/api/blogs"
      : "https://bim-africa-backend2.vercel.app/api/blogs";

  let data: { blogs: any[] } = { blogs: [] };

  try {
    const res = await fetch(API_URL, { cache: "no-store" });
    if (res.ok) data = await res.json();
  } catch (err) {
    // keep fallback
  }

  const blogEntries: MetadataRoute.Sitemap = data.blogs
    .filter((b: any) => b?.slug)
    .map((b: any) => ({
      url: `${BASE_URL}/blog/${b.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogEntries,
  ];
}
