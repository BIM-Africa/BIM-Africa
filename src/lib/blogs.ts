// Server-side blog data access. Pages use these during SSR/ISR so the HTML
// Google receives already contains the article content.

export { SITE_URL } from "./site";
import { SITE_URL } from "./site";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://bim-africa-backend-six.vercel.app";

// Blog pages are regenerated in the background at most this often (seconds).
// The backend also triggers /api/revalidate on create/update/delete.
export const BLOG_REVALIDATE = 300;
export const BLOGS_TAG = "blogs";

export interface Blog {
  _id: string;
  slug: string;
  title: string;
  desc: string;
  extraDesc: string;
  img: string;
  tag: string;
  date: string;
  read: string;
  views: string;
  author: string;
  role?: string;
  keywords?: string;
  seoTitle?: string;
  seoDescription?: string;
  isFeature: boolean;
  createdAt?: string;
  updatedAt?: string;
}

const fetchOptions: RequestInit = {
  next: { revalidate: BLOG_REVALIDATE, tags: [BLOGS_TAG] },
};

function normalize(raw: Record<string, unknown>): Blog {
  const str = (v: unknown) => (typeof v === "string" ? v : v == null ? "" : String(v));
  return {
    _id: str(raw._id ?? raw.id),
    slug: str(raw.slug),
    title: str(raw.title),
    desc: str(raw.desc),
    extraDesc: str(raw.extraDesc),
    img: str(raw.img),
    tag: str(raw.tag),
    date: str(raw.date),
    read: str(raw.read),
    views: str(raw.views),
    author: str(raw.author),
    role: raw.role ? str(raw.role) : undefined,
    keywords: raw.keywords ? str(raw.keywords) : undefined,
    seoTitle: str(raw.seoTitle).trim() || undefined,
    seoDescription: str(raw.seoDescription).trim() || undefined,
    isFeature: raw.isFeature === true,
    createdAt: raw.createdAt ? str(raw.createdAt) : undefined,
    updatedAt: raw.updatedAt ? str(raw.updatedAt) : undefined,
  };
}

// Throws on network/server errors so ISR keeps serving the last good page
// instead of caching an empty one.
export async function getAllBlogs(): Promise<Blog[]> {
  const blogs = new Map<string, Blog>();
  let page = 1;
  let hasNext = true;
  while (hasNext) {
    const res = await fetch(`${API_URL}/api/blogs?limit=100&page=${page}`, { ...fetchOptions, signal: AbortSignal.timeout(10000) });
    if (!res.ok) throw new Error(`Failed to fetch blogs: ${res.status}`);
    const data: unknown = await res.json();
    if (!Array.isArray(data) && (!data || typeof data !== "object" || !Array.isArray((data as { blogs?: unknown }).blogs))) {
      throw new Error("Unexpected blog API response");
    }
    const list = Array.isArray(data)
      ? data as Record<string, unknown>[]
      : (data as { blogs: Record<string, unknown>[] }).blogs;
    const previousCount = blogs.size;
    for (const blog of list.map(normalize).filter((b) => b.slug)) blogs.set(blog.slug, blog);
    const pagination = !Array.isArray(data) ? (data as { pagination?: { hasNext?: boolean } }).pagination : undefined;
    hasNext = pagination?.hasNext === true;
    if (hasNext && list.length === 0) throw new Error("Blog pagination returned an empty page");
    if (hasNext && blogs.size === previousCount) throw new Error("Blog pagination did not advance");
    page++;
  }
  return [...blogs.values()];
}

async function getOne(path: string): Promise<Blog | null> {
  const res = await fetch(`${API_URL}${path}`, { ...fetchOptions, signal: AbortSignal.timeout(10000) });
  if (res.status === 404 || res.status === 400) return null;
  if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status}`);
  const data = (await res.json()) as Record<string, unknown>;
  const payload = (data.blog ?? data) as Record<string, unknown>;
  return payload && payload._id ? normalize(payload) : null;
}

export function getBlogBySlug(slug: string) {
  return getOne(`/api/blog/slug/${encodeURIComponent(slug)}`);
}

// Used to redirect legacy /blog/<mongoId> URLs to the slug URL
export function getBlogById(id: string) {
  return getOne(`/api/blog/${encodeURIComponent(id)}`);
}

export function blogUrl(slug: string) {
  return `${SITE_URL}/blog/${slug}`;
}

// Plain-text excerpt for meta descriptions (strips markdown syntax)
export function excerpt(text: string, max = 160) {
  const plain = text
    .replace(/<[^>]*>/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/:?-{3,}:?/g, " ")
    .replace(/[#>*_`|~]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= max) return plain;
  return plain.slice(0, max - 1).replace(/\s+\S*$/, "") + "…";
}
