import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Eye, Star, User, TrendingUp } from 'lucide-react';

import logoBg from '../../Assests/srv.svg';
import Footer from '../Components/Footer';
import WorkTogether from '../Components/WorkTogether';
import Navbar from '../Components/Navbar';
import { SITE_URL, getAllBlogs } from '@/lib/blogs';

// ISR: rendered on the server with the blog list already in the HTML.
export const revalidate = 300; // keep in sync with BLOG_REVALIDATE

export const metadata: Metadata = {
  title: 'BIM Africa Blog | Website, Cybersecurity & Digital Insights Mauritius',
  description:
    'Professional insights on website development, cybersecurity, SEO and digital support for businesses in Mauritius, Africa and Europe from the BIM Africa team.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/blog`,
    title: 'BIM Africa Blog',
    description:
      'Professional insights on website development, cybersecurity, SEO and digital support for businesses in Mauritius, Africa and Europe.',
    siteName: 'BIM Africa',
  },
};

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  // Fall back to the newest post when nothing is marked as featured
  let featured = blogs.filter((b) => b.isFeature);
  if (featured.length === 0 && blogs.length > 0) featured = [blogs[0]];
  const featuredSlugs = new Set(featured.map((b) => b.slug));
  const latest = blogs.filter((b) => !featuredSlugs.has(b.slug));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'BIM Africa Blog',
    url: `${SITE_URL}/blog`,
    blogPost: blogs.map((b) => ({
      '@type': 'BlogPosting',
      headline: b.title,
      url: `${SITE_URL}/blog/${b.slug}`,
      image: b.img || undefined,
      datePublished: b.createdAt,
      author: { '@type': 'Organization', name: b.author || 'BIM Africa' },
    })),
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Navbar />

      {/* ---------------- Hero Section ---------------- */}
      <section className="px-4 sm:px-8 pt-8 sm:pt-12 md:pt-14 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium">
          <span className="text-[#ff1f00]">Blog</span> by BIM Africa
        </h1>
        <p className="text-white mt-4 max-w-4xl mx-auto">
          Technology moves fast. Make the right moves. <br />
          Practical perspectives on websites, cybersecurity, and the technology shaping modern businesses.
        </p>
      </section>

      {/* ---------------- Featured Article ---------------- */}
      {featured.length > 0 && (
        <section className="px-4 sm:px-8 pt-10 max-w-7xl mx-auto">
          <div className="mb-4">
            <div className="flex items-center gap-2 ">
              <div className="w-9 h-9 rounded-full bg-[#ff1f00] flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl">Featured Post</h2>
            </div>
          </div>

          {featured.map((post, index) => (
            <article
              key={post.slug}
              className="group relative rounded-3xl my-4 overflow-hidden border border-white/10 bg-black/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/40 hover:shadow-[0_12px_30px_rgba(255,31,0,0.15)]"
            >
              {/* Badge */}
              <span className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-[#ff1f00] text-white">
                <TrendingUp className="w-4 h-4 text-white" />
                Trending Now
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block h-64 sm:h-80 md:h-full min-h-64 overflow-hidden"
                >
                  {post.img && (
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                      priority={index === 0}
                    />
                  )}
                  <span className="absolute top-4 left-4 text-xs font-semibold bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4" /> Featured Post
                  </span>
                </Link>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-white mb-2">
                    {post.tag && (
                      <span className="bg-[#ff1f00] px-2 py-0.5 rounded-full">{post.tag}</span>
                    )}
                    <span className="inline-flex items-center gap-1"> Read time: 
                      <Clock className="w-4 h-4" /> {post.read}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold leading-snug transition-colors duration-200 group-hover:text-[#ff1f00]">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-300 mt-3">{post.desc}</p>

                  <div className="mt-auto pt-5 flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#ff1f00] flex items-center justify-center shrink-0">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-300">
                       Posted on: {post.date}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="w-full sm:w-auto bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap text-center"
                    >
                      Read Post →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}

      {/* ---------------- Latest Articles ---------------- */}
      <section className="px-4 sm:px-8 py-10 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Latest Blog Posts</h2>

        {blogs.length === 0 ? (
          <p className="text-gray-300">New blog posts are coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latest.map((a) => (
              <article
                key={a.slug}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-black/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff1f00]"
              >
                <Link href={`/blog/${a.slug}`} className="relative block h-56 sm:h-64 overflow-hidden">
                  {a.img && (
                    <Image
                      src={a.img}
                      alt={a.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                  )}
                  {a.tag && (
                    <span className="absolute top-4 left-4 text-xs font-semibold bg-red-600 text-white px-3 py-1 rounded-full">
                      {a.tag}
                    </span>
                  )}
                </Link>

                <div className="p-6">
                  <div className="flex items-center flex-wrap gap-3 text-xs text-gray-300 mb-2">
                    <span className="inline-flex items-center gap-1"></span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" /> Read time: {a.read}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold leading-snug transition-colors duration-200 group-hover:text-[#ff1f00]">
                    <Link href={`/blog/${a.slug}`}>{a.title}</Link>
                  </h3>
                  <p className="text-gray-300 mt-2">{a.desc}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-300">
                      <Calendar className="w-4 h-4 shrink-0" />
                      <time dateTime={a.date}>
                        Posted on: {a.date}
                      </time>
                    </div>
                    <Link
                      href={`/blog/${a.slug}`}
                      className="text-[#ff1f00] hover:text-[#ff1f00] text-sm"
                      aria-label={`Read article: ${a.title}`}
                    >
                     Read →
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
