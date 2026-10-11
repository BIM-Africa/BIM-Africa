import { NextResponse, type NextRequest } from "next/server";

// Blog slugs are lowercase. Permanently redirect mixed-case blog URLs so
// Google only ever sees one URL per article (no duplicate content).
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const lower = pathname.toLowerCase();
  if (pathname !== lower) {
    const url = req.nextUrl.clone();
    url.pathname = lower;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/:path*"],
};
