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

  // ===============================
  // ✅ STATIC PAGES (IMPORTANT)
  // ===============================
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/About`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/service`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contactus`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/PrivacyPolicy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/TermsofService`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // ===============================
  // ✅ BLOGS (DYNAMIC)
  // ===============================
  let data: { blogs: any[] } = { blogs: [] };

  try {
    const res = await fetch(API_URL, { cache: "no-store" });
    if (res.ok) data = await res.json();
  } catch (err) {
    // fallback safe
  }

  const blogEntries: MetadataRoute.Sitemap = data.blogs
    .filter((b: any) => b?.slug)
    .map((b: any) => ({
      url: `${BASE_URL}/blog/${b.slug}`,
      lastModified: new Date(b.updatedAt || b.createdAt || Date.now()),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  // ===============================
  // ✅ FINAL RETURN
  // ===============================
  return [...staticPages, ...blogEntries];
}
