// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { getAllBlogs, type Blog } from "@/lib/blogs";

export const revalidate = 300; // keep in sync with BLOG_REVALIDATE

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://bim.africa";

  // =====================================================
  // ✅ FIXED LAST MOD FOR STATIC PAGES (IMPORTANT)
  // =====================================================
  // Use website launch / major update date
  const STATIC_LAST_MOD = new Date("2026-10-15");

  // =====================================================
  // ✅ STATIC PAGES (ALL ROUTES)
  // =====================================================
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/About`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/service`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contactus`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/PrivacyPolicy`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/TermsofService`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: "yearly",
      priority: 0.4,
    },

    // Blog + Articles listing
    {
      url: `${BASE_URL}/blog`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/articles`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Case Studies
    {
      url: `${BASE_URL}/CaseStudy1`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/CaseStudy2`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/CaseStudy3`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Website Strategy
    {
      url: `${BASE_URL}/WebsiteStrategy`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    
   {
      url: `${BASE_URL}/CyberSecurity`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/DigitalSupport`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.8,
    },

  ];

  // =====================================================
  // ✅ BLOGS (DYNAMIC) — every blog, not just the first API page
  // =====================================================
  let blogs: Blog[] = [];
  try {
    blogs = await getAllBlogs();
  } catch {
    // Safe fallback – sitemap still works
  }

  const blogEntries: MetadataRoute.Sitemap = blogs.map((b) => ({
    url: `${BASE_URL}/blog/${b.slug}`,
    lastModified: new Date(b.updatedAt || b.createdAt || STATIC_LAST_MOD),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // =====================================================
  // ✅ FINAL SITEMAP
  // =====================================================
  return [...staticPages, ...blogEntries];
}
