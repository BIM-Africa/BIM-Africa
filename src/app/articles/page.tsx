'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

interface Article {
  _id: string;
  title: string;
  slug: string;
  img: string;
  desc: string;
  author: string;
  date: string;
  read: string;
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch(
          "https://bim-africa-backend2.vercel.app/api/blogs",
          { cache: "no-store" }
        );
        const data = await res.json();
        setArticles(data.blogs || []);
      } catch (err) {
        console.error("Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading articles...
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">All Articles</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article._id}
              href={`/blog/${article.slug}`}
              className="group bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-red-500 transition"
            >
              <div className="relative h-48">
                <Image
                  src={article.img || "/fallback.jpg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold group-hover:text-red-400">
                  {article.title}
                </h3>
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
