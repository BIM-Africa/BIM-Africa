import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { cache } from "react";
import ArticleView from "./ArticleView";
import {
  SITE_URL,
  blogUrl,
  excerpt,
  getAllBlogs,
  getBlogById,
  getBlogBySlug,
  type Blog,
} from "@/lib/blogs";

// ISR: pre-render every known slug at build time, regenerate in the background,
// and render new slugs on first request (then cache them).
export const revalidate = 300; // keep in sync with BLOG_REVALIDATE
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  try {
    const blogs = await getAllBlogs();
    return blogs.map((b) => ({ slug: b.slug }));
  } catch {
    // Backend unreachable at build time: pages are rendered on first request instead.
    return [];
  }
}

function decodeSlug(raw: string) {
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

// Resolves the requested slug. Returns the blog plus whether the URL is
// non-canonical (legacy id URL or different casing) and should redirect.
const resolveBlog = cache(async (rawSlug: string): Promise<{ blog: Blog | null; redirect: boolean }> => {
  const slug = decodeSlug(rawSlug).trim();

  let blog = await getBlogBySlug(slug);
  if (!blog && slug !== slug.toLowerCase()) blog = await getBlogBySlug(slug.toLowerCase());
  // Old links used the Mongo id: /blog/692fe67a07488c01f66b1cbf
  if (!blog && /^[a-f0-9]{24}$/i.test(slug)) blog = await getBlogById(slug);

  return { blog, redirect: !!blog && !!blog.slug && blog.slug !== slug };
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { blog } = await resolveBlog(slug);

  if (!blog) {
    return { title: "Article Not Found | BIM Africa", robots: { index: false } };
  }

  const description = excerpt(blog.desc || blog.extraDesc);
  const url = blogUrl(blog.slug);
  const keywords = blog.keywords
    ?.split(",")
    .map((k) => k.trim())
    .filter(Boolean);

  return {
    title: `${blog.title} | BIM Africa`,
    description,
    keywords: keywords?.length ? keywords : undefined,
    authors: [{ name: blog.author || "BIM Africa" }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: blog.title,
      description,
      siteName: "BIM Africa",
      locale: "en_US",
      publishedTime: blog.createdAt,
      modifiedTime: blog.updatedAt,
      authors: [blog.author || "BIM Africa"],
      section: blog.tag || undefined,
      images: blog.img ? [{ url: blog.img, alt: blog.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description,
      images: blog.img ? [blog.img] : undefined,
    },
  };
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params;
  const { blog, redirect } = await resolveBlog(slug);

  if (!blog) notFound();
  if (redirect) permanentRedirect(`/blog/${blog.slug}`);

  let suggested: Blog[] = [];
  try {
    suggested = (await getAllBlogs()).filter((b) => b.slug !== blog.slug);
  } catch {
    // Suggestions are optional; the article itself still renders.
  }

  const url = blogUrl(blog.slug);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blog.title,
      description: excerpt(blog.desc || blog.extraDesc),
      image: blog.img ? [blog.img] : undefined,
      datePublished: blog.createdAt,
      dateModified: blog.updatedAt || blog.createdAt,
      author: { "@type": "Organization", name: blog.author || "BIM Africa", url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "BIM Africa",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/web-app-manifest-512x512.png` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      keywords: blog.keywords || undefined,
      articleSection: blog.tag || undefined,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: blog.title, item: url },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ArticleView article={blog} suggested={suggested} />
    </>
  );
}
