'use client';
export const dynamic = 'force-dynamic';

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../Components/Navbar';
import { useSearchParams } from 'next/navigation';
import Footer from '../Components/Footer';
import NextDynamic from "next/dynamic";

const MarkdownPreview = NextDynamic(
  () => import("@uiw/react-markdown-preview"),
  { ssr: false }
);

// ⭐ ADD THIS FUNCTION HERE
function autoParagraph(text: string = "") {
  return text
    .split(/\.(\s+|$)/)
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => t + ".")
    .join("\n\n");
}


import {
  X,
  Instagram,
  Facebook,
  Linkedin as LinkedinIcon,
  Calendar,
  Clock,
  Eye,
  Star,
  MessageSquare,
  Share2,
  User,
  Shield,
  Code,
  Smartphone,
  Target,
  CheckCircle,
  Globe,
  Zap,
  TrendingUp,
  BookOpen,
} from 'lucide-react';

import logo from '../../Assests/srv.svg';

// ---- Types ----
interface Article {
  id: string | number;
  img: string;
  tag: string;
  date: string;
  read: string;
  views: string;
  title: string;
  desc: string;
  author: string;
  role?: string;
  extraDesc?: string;
}

type BackendBlog = Partial<Article> & { _id?: string | number; id?: string | number };

function isRecord(val: unknown): val is Record<string, unknown> {
  return typeof val === 'object' && val !== null;
}
function isBackendBlogArray(val: unknown): val is BackendBlog[] {
  return Array.isArray(val) && val.every((v) => isRecord(v));
}
function extractBlogs(input: unknown): BackendBlog[] {
  if (isRecord(input) && Array.isArray(input.blogs)) {
    const arr = input.blogs;
    return isBackendBlogArray(arr) ? arr : [];
  }
  if (isBackendBlogArray(input)) return input;
  return [];
}

export default function ArticlePage(): React.JSX.Element {
  const searchParams = useSearchParams();
  const [id, setId] = useState<string | null>(null);
  const [currentArticle, setCurrrentArticle] = useState<Article | null>(null);
  const [allSuggested, setAllSuggested] = useState<Article[]>([]);
  const [suggested, setSuggested] = useState<Article[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);

  const [loading, setLoading] = useState(true); // ✅ NEW

  // --- keep id in sync with URL query ---
  useEffect(() => {
    try {
      const q = searchParams?.get('id') ?? null;
      setId(q);
    } catch {
      setId(null);
    }
  }, [searchParams]);

  // --- Fetch all blogs ---
  const getBlogs = async () => {
    try {
      const res = await fetch('https://bim-africa-backend2.vercel.app/api/blogs');
      const data: unknown = await res.json();
      const raw = extractBlogs(data);

      const normalized: Article[] = raw.map((b: BackendBlog) => ({
        id: (b._id ?? b.id ?? '').toString(),
        img: (b.img ?? '') as string,
        tag: (b.tag ?? '') as string,
        date: (b.date ?? '') as string,
        read: (b.read ?? '') as string,
        views: (b.views ?? '') as string,
        title: (b.title ?? '') as string,
        desc: (b.desc ?? '') as string,
        author: (b.author ?? '') as string,
        role: (b.role ?? undefined) as string | undefined,
        extraDesc: (b.extraDesc ?? undefined) as string | undefined,
      }));

      setAllSuggested(normalized);
      setSuggested(normalized.slice(0, 3));
    } catch (error) {
      console.log('getBlogs error:', error);
      setAllSuggested([]);
      setSuggested([]);
    }
  };

  // --- Fetch single blog ---
  const getBlog = async (currentId: string | null) => {
    if (!currentId) return;
    try {
      setLoading(true); // ⬅️ START LOADING

      const res = await fetch(`https://bim-africa-backend2.vercel.app/api/blog/${currentId}`);
      const data: unknown = await res.json();

      let payload: unknown;
      if (isRecord(data) && 'blog' in data) {
        payload = (data as Record<string, unknown>).blog;
      } else {
        payload = data;
      }

      if (isRecord(payload)) {
        setCurrrentArticle({
          id: (payload._id ?? payload.id ?? currentId).toString(),
          img: (payload.img ?? '') as string,
          tag: (payload.tag ?? '') as string,
          date: (payload.date ?? '') as string,
          read: (payload.read ?? '') as string,
          views: (payload.views ?? '') as string,
          title: (payload.title ?? '') as string,
          desc: (payload.desc ?? '') as string,
          author: (payload.author ?? '') as string,
          role: (payload.role ?? undefined) as string | undefined,
          extraDesc: (payload.extraDesc ?? undefined) as string | undefined,
        });
      } else {
        setCurrrentArticle(null);
      }
    } catch (err) {
      console.log('getBlog error:', err);
    } finally {
      setLoading(false); // ⬅️ STOP LOADING
    }
  };

  useEffect(() => {
    getBlog(id);
    getBlogs();
  }, [id]);

  // ----------------------------------------------------
  // ✅ LOADING SKELETON (Sidebar loads instantly, as requested)
  // ----------------------------------------------------
  if (loading) {
    return (
      <div
        className="min-h-screen text-white"
        style={{
          backgroundImage: `url("/srv.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="space-y-6">
            <div className="h-8 w-2/3 bg-white/10 animate-pulse rounded-xl"></div>
            <div className="h-5 w-1/3 bg-white/10 animate-pulse rounded-xl"></div>

            <div className="h-80 w-full bg-white/10 rounded-3xl animate-pulse"></div>

            <div className="h-5 w-full bg-white/10 animate-pulse rounded-xl"></div>
            <div className="h-5 w-5/6 bg-white/10 animate-pulse rounded-xl"></div>
            <div className="h-5 w-3/6 bg-white/10 animate-pulse rounded-xl"></div>
          </div>
        </section>
      {/* deploymrn test */}

        <Footer />
      </div>
    );
  }

  // ----------------------------------------------------
  // ✅ NORMAL PAGE (when loaded)
  // ----------------------------------------------------
  return (
    <Suspense fallback={<div>Loading article...</div>}>
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
          <div className="flex items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1 bg-red-900/40 border border-[#ff1f00] text-red-200 px-3 py-1 rounded-full">
              <Shield className="w-4 h-4" /> {currentArticle?.author}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {currentArticle?.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {currentArticle?.read}
            </span>
            <span className="inline-flex items-center gap-1">
              <Eye className="w-4 h-4" /> {currentArticle?.views}
            </span>
          </div>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight">{currentArticle?.title}</h1>
          <div className="mt-5 text-gray-200 max-w-4xl text-lg">
  <MarkdownPreview source={autoParagraph(currentArticle?.desc || "")} />
</div>


          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-[#ff1f00] border border-[#ff1f00] flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">{currentArticle?.author}</div>
                <div className="text-gray-400 text-sm">{currentArticle?.role}</div>
                <div className="text-red-400 text-xs flex items-center gap-1">
                  <Star className="w-3 h-3 fill-red-400" /> Top Contributor
                </div>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 border border-white/10 hover:border-white/25">
                <MessageSquare className="w-4 h-4" /> Comment
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 border border-white/10 hover:border-white/25">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>
        </section>

        {/* ===== Main Content + Sidebar ===== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* ---- Main ---- */}
            <div className="lg:col-span-2">
              <div className="relative h-[360px] sm:h-[440px] rounded-3xl overflow-hidden">
                <Image
                  src={currentArticle?.img || '/fallback.jpg'}
                  alt="Article image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <article className="mt-6 space-y-8 leading-relaxed">
                <div className="text-gray-200">
  <MarkdownPreview source={autoParagraph(currentArticle?.extraDesc || "")} />
</div>

                <h3 className="text-2xl sm:text-3xl text-white">Key Technologies Driving Change</h3>
                <div className="rounded-2xl bg-[#ff1f00] p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-lg font-semibold">
                    <Zap className="w-5 h-5 text-white" /> Machine Learning Algorithms
                  </div>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 w-4 h-4 text-white" /> Supervised learning for known threat classification
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 w-4 h-4 text-white" /> Unsupervised learning for anomaly detection
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 w-4 h-4 text-white" /> Deep learning for complex pattern recognition
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-black/40 border border-white/10 p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-lg font-semibold">
                    <BookOpen className="w-5 h-5 text-[#ff1f00]" /> Natural Language Processing (NLP)
                  </div>
                  <p className="mt-2">
                    NLP lets AI analyze threat-intel feeds, security reports, and even dark-web chatter to surface emerging threats
                    and attack vectors.
                  </p>
                </div>
              </article>
            </div>

            {/* ---- Sidebar (loads instantly, no skeleton) ---- */}
            <aside className="space-y-6">
              {/* Consultation */}
              <div className="rounded-3xl bg-[#ff1f00] p-6">
                <div className="mx-auto w-16 h-16 rounded-full border border-[#ff1f00] flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-center">Ready to Secure Your Business?</h4>
                <p className="text-gray-200 text-center mt-2">Get expert cybersecurity consultation tailored to your needs</p>

                <a
                  href="https://quotation.bim.africa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4"
                >
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-white text-[#ff1f00] hover:bg-red-50 px-5 py-3 rounded-xl font-semibold">
                    <Globe className="w-4 h-4" /> Get Free Consultation
                  </button>
                </a>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-white" /> Free Assessment
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-white" /> Expert Team
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="rounded-3xl bg-black/40 border border-white/10 p-6">
                <div className="flex items-center gap-2 text-lg font-semibold mb-3">
                  <Star className="w-5 h-5 text-[#ff1f00]" /> Our Services
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Website Strategy & Development',
                      desc: 'We craft bespoke websites that combine design excellence with technical precision',
                    },
                    {
                      title: 'Cybersecurity & Threat Management',
                      desc: 'Your business deserves uncompromising protection',
                    },
                    {
                      title: 'Digital Support Outsourcing',
                      desc: 'Scale your business with our dedicated digital experts.',
                    },
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

              {/* Advice */}
              <div className="rounded-3xl bg-black/40 border border-white/10 p-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#ff1f00] flex items-center justify-center mb-3">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-center">Need Expert Advice?</h4>
                <p className="text-gray-300 text-center mt-1">
                  Talk to our cybersecurity experts about your specific challenges
                </p>
                <Link href="/contactus" className="block mt-4">
                  <button className="w-full bg-white text-[#ff1f00] hover:bg-red-50 px-5 py-3 rounded-xl font-semibold">
                    Contact Us
                  </button>
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* ===== Suggested Articles ===== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-[#ff1f00]" />
            <h3 className="text-2xl sm:text-3xl font-semibold">Suggested for You</h3>
            <span className="ml-auto inline-flex items-center gap-1 text-xs bg-black/40 border border-white/10 px-3 py-1 rounded-full">
              <TrendingUp className="w-4 h-4" /> Trending
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {suggested.map((c: Article & { _id?: string | number }) => {
              const rawId = c.id ?? c._id ?? '';
              const targetId = encodeURIComponent(String(rawId));

              return (
                <Link
                  key={targetId}
                  href={`/articles?id=${targetId}`}
                  className="group rounded-3xl overflow-hidden bg-black/40 border border-white/10 hover:-translate-y-0.5 hover:border-red-500/40 hover:shadow-[0_10px_28px_rgba(255,31,0,0.15)] transition-all block"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={c.img || '/fallback.jpg'}
                      alt={c.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="absolute top-3 left-3 text-xs font-semibold bg-red-600 text-white px-3 py-1 rounded-full">
                      {c.tag}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-300 mb-2">
                      <span className="inline-flex items-center gap-1">
                        <Eye className="w-4 h-4" /> {c.views}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {c.read}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold leading-snug group-hover:text-[#ff1f00] transition-colors">
                      {c.title}
                    </h4>
                    <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
                      <span className="inline-flex items-center gap-2">
                        <User className="w-4 h-4" /> {c.author}
                      </span>
                      <span className="text-red-400 group-hover:text-[#ff1f00] text-lg">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-8">
            <button
              onClick={() => {
                if (showAll) {
                  setSuggested(allSuggested.slice(0, 3));
                  setShowAll(false);
                } else {
                  setSuggested(allSuggested);
                  setShowAll(true);
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 border border-white/10 hover:border-white/25"
            >
              <BookOpen className="w-4 h-4" /> {showAll ? 'Show Less' : 'View More Articles'}
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </Suspense>
  );
}
