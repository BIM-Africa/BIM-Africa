import Link from "next/link";
import Image from "next/image";
import { Clock, Eye, User } from "lucide-react";
import type { Blog } from "@/lib/blogs";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group rounded-3xl overflow-hidden bg-black/40 border border-white/10 hover:-translate-y-0.5 hover:border-red-500/40 hover:shadow-[0_10px_28px_rgba(255,31,0,0.15)] transition-all block"
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={blog.img || "/logo.png"}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {blog.tag && (
          <span className="absolute top-3 left-3 text-xs font-semibold bg-red-600 text-white px-3 py-1 rounded-full">
            {blog.tag}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-gray-300 mb-2">
          <span className="inline-flex items-center gap-1">
          <Calendar className="w-4 h-4" /> Posted on: 
            {article.createdAt ? (
              <time dateTime={article.createdAt}>{article.date}  </time>
            ) : (
              article.date
            )}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-4 h-4" /> {blog.read}
          </span>
        </div>
        <h3 className="text-lg font-semibold leading-snug group-hover:text-[#ff1f00] transition-colors">
          {blog.title}
        </h3>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
          <span className="inline-flex items-center gap-2">
            <User className="w-4 h-4" /> {blog.author}
          </span>
          <span className="text-red-400 group-hover:text-[#ff1f00] text-lg">→</span>
        </div>
      </div>
    </Link>
  );
}
