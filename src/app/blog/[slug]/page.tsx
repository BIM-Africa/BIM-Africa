import { notFound } from "next/navigation"
import type { Metadata } from "next"
import ArticlesPage from "@/app/articles/ArticlesPage"

export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
const SITE_URL = "https://www.bim.africa"

// 🔹 server fetch (only for validation / SEO)
async function getBlog(slug: string) {
  const res = await fetch(
    `${API_URL}/api/blog/slug/${encodeURIComponent(slug)}`,
    { cache: "no-store" }
  )

  if (!res.ok) return null

  const data = await res.json()
  return data.blog ?? data
}

// 🔹 metadata (SEO)
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const { slug } = params
  const blog = await getBlog(slug)

  if (!blog) {
    return {
      title: "Article Not Found | BIM Africa",
      robots: { index: false, follow: false },
    }
  }

  const url = `${SITE_URL}/blog/${slug}`
  const title = `${blog.title} | BIM Africa`
  const description =
    (blog.desc || blog.description || blog.excerpt || "")
      .toString()
      .slice(0, 160) || "Read this article on BIM Africa."

  // Optional image if your API provides it (else it will just be undefined)
  const ogImage =
    blog.ogImage || blog.image || blog.coverImage || blog.thumbnail

  return {
    title,
    description,

    alternates: {
      canonical: url, // ✅ canonical link
    },

    openGraph: {
      title,
      description,
      url, // ✅ og:url
      type: "article",
      images: ogImage ? [{ url: ogImage }] : undefined,
    },

    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  }
}

// 🔹 PAGE
export default async function BlogSlugPage(
  { params }: { params: { slug: string } }
) {
  const { slug } = params

  const blog = await getBlog(slug)
  if (!blog) notFound()

  // 🔥 Your full UI is rendered from here
  return <ArticlesPage />
}
