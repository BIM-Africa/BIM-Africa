import { Suspense } from "react";
import ArticlesPage from "../../app/articles/ArticlesPage";

// --- Types ---
interface BlogType {
  title?: string;
  desc?: string;
  img?: string;
  author?: string;
  date?: string;
}

// Fetch article for SEO (server-side)
async function getBlog(id: string | null): Promise<BlogType | null> {
  if (!id) return null;

  try {
    const res = await fetch(
      `https://bim-africa-backend2.vercel.app/api/blog/${id}`,
      {
        cache: "no-store",
        next: { revalidate: 60 }, // revalidate for faster crawling
      }
    );

    const data = await res.json();
    return (data.blog || data) as BlogType;
  } catch {
    return null;
  }
}

// Auto-generate SEO keywords
function generateKeywords(blog: BlogType | null): string[] {
  if (!blog) return ["Cybersecurity", "Technology", "BIM Africa"];

  const text = `${blog.title ?? ""} ${blog.desc ?? ""}`.toLowerCase();
  const common = ["the", "and", "with", "from", "this", "that", "your"];

  return Array.from(new Set(text.split(/\W+/)))
    .filter((w) => w.length > 3 && !common.includes(w))
    .slice(0, 12);
}

// ⭐ FIXED — Next.js 15 requires searchParams as Promise
export async function generateMetadata(props: {
  searchParams: Promise<Record<string, string>>;
}) {
  const searchParams = await props.searchParams;
  const id = searchParams?.id ?? null;

  const blog = await getBlog(id);

  if (!blog) {
    return {
      title: "Article Not Found – BIM Africa",
      description: "This article could not be found.",
      robots: "index, follow",
    };
  }

  const shortDesc =
    blog.desc?.slice(0, 160) || "Read this article on BIM Africa.";
  const pageUrl = `https://bim.africa/articles?id=${id}`;
  const keywords = generateKeywords(blog);

  return {
    title: `${blog.title} | BIM Africa`,
    description: shortDesc,
    keywords,
    alternates: {
      canonical: pageUrl,
    },

    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },

    openGraph: {
      title: blog.title,
      description: shortDesc,
      url: pageUrl,
      type: "article",
      images: [
        {
          url: blog.img || "https://bim.africa/default-og.jpg",
          width: 1200,
          height: 630,
        },
      ],
      siteName: "BIM Africa",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: shortDesc,
      images: [blog.img],
      creator: "@bim_africa",
    },

    // ⭐⭐ Google Structured Data (Schema.org)
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: blog.title,
        description: shortDesc,
        image: blog.img,
        author: {
          "@type": "Person",
          name: blog.author || "BIM Africa",
        },
        publisher: {
          "@type": "Organization",
          name: "BIM Africa",
          logo: "https://bim.africa/logo.png",
        },
        datePublished: blog.date || "",
        mainEntityOfPage: pageUrl,
      }),
    },
  };
}

// Client Render
export default function Page() {
  return (
    <Suspense fallback={<div className="text-white p-10">Loading article...</div>}>
      <ArticlesPage />
    </Suspense>
  );
}
