'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  X, Instagram, Facebook, Linkedin as LinkedinIcon,
  Calendar, Clock, Eye, Star, Users, BookOpen, Mail, User, TrendingUp
} from 'lucide-react';

import logoBg from '../../Assests/srv.svg';
import Footer from '../Components/Footer';
import WorkTogether from '../Components/WorkTogether';
import Navbar from '../Components/Navbar';

// ✅ Blog Interface
interface Blog {
  id: number;
  img: string;
  tag: string;
  date: string;
  read: string;
  views: string;
  title: string;
  slug: string;
  desc: string;
  extraDesc?: string;
  author: string;
  isFeature: boolean;
  role?: string;
  _id: string;
}

export default function BlogPage() {
  const [latest, setLatest] = useState<Blog[]>([]);
  const [allFeatured, setAllFeatured] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true); // ✅ New loading state

  // ✅ Fetch blogs
  const getBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://bim-africa-backend-six.vercel.app/api/blogs');
      const data = await res.json();

      const blogs = data.blogs.filter((blog: Blog) => blog.isFeature === false);
      setLatest(blogs);

      const featured = data.blogs.filter((blog: Blog) => blog.isFeature === true);
      setAllFeatured(featured);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: `url(${logoBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar />

      <style>{`
        @media (max-width: 640px) {
          .bg-hero { background-repeat: repeat-y !important; background-size: 100% auto !important; background-position: top center !important; }
        }
      `}</style>

      {/* ---------------- Hero Section ---------------- */}
      <section className="px-4 sm:px-8 pt-8 sm:pt-12 md:pt-14 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium">
          BIM Africa <span className="text-[#ff1f00]">Blog</span>
        </h1>
        <p className="text-white mt-4 max-w-4xl mx-auto">
          Professional insights on technology and digital innovations
        </p>
      </section>

      {/* ---------------- Featured Article ---------------- */}
      <section className="px-4 sm:px-8 pt-10 max-w-7xl mx-auto">
        <div className="mb-4">
          <div className="flex items-center gap-2 ">
            <div className="w-9 h-9 rounded-full bg-[#ff1f00] flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl">Featured Article</h2>
          </div>
          <p className="text-sm text-gray-300">Most Popular this week</p>
        </div>

        {/* ✅ Loading Skeleton for Featured */}
        {loading ? (
          <div className="w-full h-72 sm:h-96 rounded-3xl bg-white/10 animate-pulse flex items-center justify-center text-gray-400">
            Loading featured article...
          </div>
        ) : (
          allFeatured?.map((featured, index) => (
            <article
              key={index}
              className="group relative rounded-3xl my-4 overflow-hidden border border-white/10 bg-black/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/40 hover:shadow-[0_12px_30px_rgba(255,31,0,0.15)]"
            >
              {/* Badge */}
              <span className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-[#ff1f00] text-white">
                <TrendingUp className="w-4 h-4 text-white" />
                Trending Now
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 sm:h-80 md:h-full overflow-hidden">
                  <Image
                    src={featured?.img}
                    alt="Featured"
                    fill
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                    priority
                  />
                  <span className="absolute top-4 left-4 text-xs font-semibold bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4" /> Featured Article
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-white mb-2">
                    <span className="bg-[#ff1f00] px-2 py-0.5 rounded-full">
                      {featured?.tag}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {featured?.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {featured?.read}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Eye className="w-4 h-4" /> {featured?.views}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold leading-snug transition-colors duration-200 group-hover:text-[#ff1f00]">
                    {featured?.title}
                  </h3>
                  <p className="text-gray-300 mt-3">{featured?.desc}</p>

                  <div className="mt-auto pt-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#ff1f00] flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>

                      <div className="text-sm">
                        <div className="font-medium">{featured?.author}</div>
                        <div className="text-gray-400">{featured?.role}</div>
                      </div>
                    </div>
                    <Link
                        href={`/blog/${encodeURIComponent(String(featured.slug))}`}
                      className="w-full sm:w-auto bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap"
                    >
                      📚 Read Article →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))
        )}
      </section>

      {/* ---------------- Latest Articles ---------------- */}
      <section className="px-4 sm:px-8 py-10 max-w-7xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Latest Articles</h3>

        {/* ✅ Loading Skeleton for Latest */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-72 rounded-2xl bg-white/10 animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latest.map((a, i) => (
              <article
                key={i}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-black/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff1f00]"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 text-xs font-semibold bg-red-600 text-white px-3 py-1 rounded-full">
                    {a.tag}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center flex-wrap gap-3 text-xs text-gray-300 mb-2">
                    <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" /> {a.date}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" /> {a.read}</span>
                    <span className="inline-flex items-center gap-1"><Eye className="w-4 h-4" /> {a.views}</span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-semibold leading-snug transition-colors duration-200 group-hover:text-[#ff1f00]">
                    {a.title}
                  </h4>
                  <p className="text-gray-300 mt-2">{a.desc}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-8 h-8 rounded-full bg-[#ff1f00] flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      {a.author}
                    </div>
                    <Link
                      href={`/blog/${encodeURIComponent(String(a.slug))}`}
                      className="text-[#ff1f00] hover:text-[#ff1f00] text-lg"
                      aria-label="Read article"
                    >
                      →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <WorkTogether />
      <Footer />
    </div>
  );
}
