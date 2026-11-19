import type { MetadataRoute } from "next";
import { SITE_URL, blogUrl, getAllBlogs } from "@/lib/blogs";

export const revalidate = 300;

const routes = [
  "", "/About", "/service", "/contactus", "/PrivacyPolicy", "/TermsofService",
  "/blog", "/articles", "/CaseStudy1", "/CaseStudy2", "/CaseStudy3",
  "/WebsiteStrategy", "/CyberSecurity", "/DigitalSupport",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Throw on API failure so ISR retains the last successful sitemap.
  const blogs = await getAllBlogs();
  return [
    // Don't invent modification dates for static pages.
    ...routes.map((route) => ({ url: `${SITE_URL}${route || "/"}` })),
    ...blogs.map((blog) => {
      const timestamp = blog.updatedAt || blog.createdAt;
      const date = timestamp ? new Date(timestamp) : undefined;
      const lastModified = date && Number.isFinite(date.getTime()) && date.getTime() <= Date.now()
        ? date : undefined;
      return { url: blogUrl(blog.slug), ...(lastModified ? { lastModified } : {}) };
    }),
  ];
}
