import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { BLOGS_TAG } from "@/lib/blogs";

// Called by the backend after a blog is created, updated or deleted so the
// static blog pages and sitemap refresh immediately instead of waiting for ISR.
//   POST /api/revalidate   header: x-revalidate-secret: <REVALIDATE_SECRET>
//   body (optional): { "slugs": ["my-post"] }
export async function POST(req: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret || req.headers.get("x-revalidate-secret") !== secret) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  let slugs: string[] = [];
  try {
    const body = await req.json();
    if (Array.isArray(body?.slugs)) slugs = body.slugs.filter((s: unknown) => typeof s === "string");
  } catch {
    // no body is fine
  }

  revalidateTag(BLOGS_TAG, { expire: 0 });
  revalidatePath("/blog");
  revalidatePath("/articles");
  revalidatePath("/sitemap.xml");
  revalidatePath("/blog/[slug]", "page");
  for (const slug of slugs) revalidatePath(`/blog/${slug}`);

  return NextResponse.json({ revalidated: true, slugs, now: Date.now() });
}
