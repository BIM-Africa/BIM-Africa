import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Eye,
  Star,
  User,
  Shield,
  CheckCircle,
  Globe,
  Zap,
  TrendingUp,
  BookOpen,
  MessageSquare,
} from "lucide-react";

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import BlogMarkdown from "../../Components/blog/BlogMarkdown";
import BlogCard from "../../Components/blog/BlogCard";
import SuggestedArticles from "../../Components/blog/SuggestedArticles";
import type { Blog } from "@/lib/blogs";

// Server component: the whole article is in the HTML response.
export default function ArticleView({
  article,
  suggested,
}: {
  article: Blog;
  suggested: Blog[];
}) {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: `url("/srv.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />

      {/* ===== Hero Section ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-4">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-200">{article.title}</span>
        </nav>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1 bg-red-900/40 border border-[#ff1f00] text-red-200 px-3 py-1 rounded-full">
            <Shield className="w-4 h-4" /> {article.author}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {article.createdAt ? (
              <time dateTime={article.createdAt}>{article.date}</time>
            ) : (
              article.date
            )}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {article.read}
          </span>
          <span className="inline-flex items-center gap-1">
            <Eye className="w-4 h-4" /> {article.views}
          </span>
        </div>

        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight">{article.title}</h1>
        <div className="mt-5 text-gray-200 max-w-4xl text-lg">
          <BlogMarkdown source={article.desc} />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-[#ff1f00] border border-[#ff1f00] flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div>
              <div className="font-semibold">{article.author}</div>
              {article.role && <div className="text-gray-400 text-sm">{article.role}</div>}
              <div className="text-red-400 text-xs flex items-center gap-1">
                <Star className="w-3 h-3 fill-red-400" /> Top Contributor
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Main Content + Sidebar ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ---- Main ---- */}
          <div className="lg:col-span-2">
            {article.img && (
              <div className="relative h-[360px] sm:h-[440px] rounded-3xl overflow-hidden">
                <Image
                  src={article.img}
                  alt={article.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <article className="mt-6 space-y-8 leading-relaxed">
              <div className="text-gray-200">
                <BlogMarkdown source={article.extraDesc} />
              </div>

              <h2 className="text-2xl sm:text-3xl text-white">How BIM Africa Can Help Your Business?</h2>
              <div className="rounded-2xl bg-[#ff1f00] p-5 sm:p-6">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Zap className="w-5 h-5 text-white" /> Website Strategy & Development
                </div>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 w-4 h-4 text-white" /> Build a professional website that represents your business, attracts customers and supports your long-term growth.
                  </li>
                </ul>
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Zap className="w-5 h-5 text-white" /> Cybersecurity & Threat Management
                </div>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 w-4 h-4 text-white" /> Protect your website and business from security threats with website audits, vulnerability checks, malware removal and security solutions.
                  </li>
                </ul>
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Zap className="w-5 h-5 text-white" /> Technical Support & Outsourcing
                </div>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 w-4 h-4 text-white" /> Get reliable technical expertise when you need it, from website maintenance and updates to troubleshooting and ongoing technical support.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-black/40 border border-white/10 p-5 sm:p-6">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <BookOpen className="w-5 h-5 text-[#ff1f00]" /> Build. Protect. Support.
                </div>
                <p className="mt-2">
                  Whether you are starting from scratch, improving an existing website or dealing with security and technical challenges, BIM Africa provides the expertise to build, protect and support the technology your business depends on.
                </p>
              </div>
            </article>
          </div>


          {/* ================== RIGHT SIDEBAR ================== */}
          <aside className="space-y-6">

            {/* 🔥 Consultation Box */}
            <div className="rounded-3xl bg-[#ff1f00] p-6">
              <div className="mx-auto w-16 h-16 rounded-full border border-[#ff1f00] flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>

              <h4 className="text-xl font-semibold text-center">Have a Project in Mind?</h4>
              <p className="text-gray-200 text-center mt-2">
                From website development to cybersecurity, BIM Africa helps businesses build, protect, and support the systems they rely on.
              </p>

              <a
                href="https://quotation.bim.africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4"
              >
                <button className="w-full inline-flex items-center justify-center gap-2 bg-white text-[#ff1f00] hover:bg-red-50 px-5 py-3 rounded-xl font-semibold">
                  <Globe className="w-4 h-4" /> Talk to Our Team
                </button>
              </a>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" /> Build Better
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" /> Stay Protected
                </div>
              </div>
            </div>

            {/* 🔥 Services List */}
            <div className="rounded-3xl bg-black/40 border border-white/10 p-6">
              <div className="flex items-center gap-2 text-lg font-semibold mb-3">
                <Star className="w-5 h-5 text-[#ff1f00]" /> Our Services
              </div>

              <div className="space-y-4">
                {[
                  { title: "Website Strategy & Development", desc: "High-performance websites built around your business objectives." },
                  { title: "Cybersecurity & Threat Management", desc: "Practical protection to help safeguard your business and its digital assets." },
                  { title: "Digital Support Outsourcing", desc: "Reliable digital support to help your business operate and grow." },
                ].map((srv, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 p-4">
                    <div className="font-semibold">{srv.title}</div>
                    <p className="text-sm text-gray-300">{srv.desc}</p>
                  </div>
                ))}
              </div>

              <Link href="/service" className="mt-5 block">
                <button className="w-full inline-flex items-center justify-center gap-2 bg-[#ff1f00] px-5 py-3 rounded-xl font-semibold">
                  View All Services
                </button>
              </Link>
            </div>

            {/* 🔥 Expert Advice */}
            <div className="rounded-3xl bg-black/40 border border-white/10 p-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-[#ff1f00] flex items-center justify-center mb-3">
                <MessageSquare className="w-6 h-6" />
              </div>

              <h4 className="text-lg font-semibold text-center">Let's Talk About Your Business Needs</h4>
              <p className="text-gray-300 text-center mt-1">
                Get practical advice on building, protecting, and improving the digital systems your business relies on.
              </p>

              <Link href="/contactus" className="block mt-4">
                <button className="w-full bg-white text-[#ff1f00] hover:bg-red-50 px-5 py-3 rounded-xl font-semibold">
                  Talk to Our Team
                </button>
              </Link>
            </div>

          </aside>
        </div>
      </section>

      {/* ===== Suggested Articles ===== */}
      {suggested.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-[#ff1f00]" />
            <h2 className="text-2xl sm:text-3xl font-semibold">Suggested for You</h2>
            <span className="ml-auto inline-flex items-center gap-1 text-xs bg-black/40 border border-white/10 px-3 py-1 rounded-full">
              <TrendingUp className="w-4 h-4" /> Trending
            </span>
          </div>

          <SuggestedArticles cards={suggested.map((b) => <BlogCard key={b._id} blog={b} />)} />
        </section>
      )}

      <Footer />
    </div>
  );
}
