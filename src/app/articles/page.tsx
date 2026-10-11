import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { SITE_URL, getAllBlogs } from "@/lib/blogs";

// ISR: article list is rendered on the server, no client-side loading state.
export const revalidate = 300; // keep in sync with BLOG_REVALIDATE

export const metadata: Metadata = {
  title: "All Articles | BIM Africa",
  description:
    "Browse all BIM Africa articles on website development, cybersecurity, SEO and digital support for businesses in Mauritius, Africa and Europe.",
  alternates: { canonical: `${SITE_URL}/articles` },
};

export default async function ArticlesPage() {
  const articles = await getAllBlogs();

  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">All Articles</h1>

        {articles.length === 0 && <p className="text-gray-300">New articles are coming soon.</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-red-500 transition"
            >
              <div className="relative h-48">
                {article.img && (
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                )}
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold group-hover:text-red-400">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                  {article.desc}
                </p>

                <div className="mt-4 text-xs text-gray-400 flex justify-between">
                  <span>{article.author}</span>
                  <span>{article.read}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
