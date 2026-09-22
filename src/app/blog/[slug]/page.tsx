import { notFound } from "next/navigation";
import ArticlesPage from "@/app/articles/ArticlesPage";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://bim-africa-backend-six.vercel.app";

// 🔹 server fetch (only for validation / SEO)
async function getBlog(slug: string) {
  const res = await fetch(
    `${API_URL}/api/blog/slug/${encodeURIComponent(slug)}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.blog ?? data;
}

// 🔹 metadata (SEO)
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const blog = await getBlog(slug);

  if (!blog) {
    return { title: "Article Not Found | BIM Africa" };
  }

  return {
  title: `${blog.title} | BIM Africa`,
  description: blog.desc?.slice(0, 160),
  alternates: {
    canonical: `https://www.bim.africa/blog/${slug}`,
  },
};
  
}

// 🔹 PAGE
export default async function BlogSlugPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params; // ✅ VERY IMPORTANT

  const blog = await getBlog(slug);

  if (!blog) notFound();

  // 🔥 FULL UI yahan se aa rahi hai
  return <ArticlesPage />;
}
