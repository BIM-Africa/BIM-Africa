// Server-side blog data access. Pages use these during SSR/ISR so the HTML
// Google receives already contains the article content.

export const SITE_URL = "https://bim.africa";

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
    isFeature: raw.isFeature === true,
    createdAt: raw.createdAt ? str(raw.createdAt) : undefined,
    updatedAt: raw.updatedAt ? str(raw.updatedAt) : undefined,
  };
}

// Throws on network/server errors so ISR keeps serving the last good page
// instead of caching an empty one.
export async function getAllBlogs(): Promise<Blog[]> {
  const res = await fetch(`${API_URL}/api/blogs?limit=1000`, fetchOptions);
  if (!res.ok) throw new Error(`Failed to fetch blogs: ${res.status}`);
  const data: unknown = await res.json();
  const list =
    data && typeof data === "object" && Array.isArray((data as { blogs?: unknown }).blogs)
      ? (data as { blogs: Record<string, unknown>[] }).blogs
      : Array.isArray(data)
        ? (data as Record<string, unknown>[])
        : [];
  return list.map(normalize).filter((b) => b.slug);
}

async function getOne(path: string): Promise<Blog | null> {
  const res = await fetch(`${API_URL}${path}`, fetchOptions);
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
