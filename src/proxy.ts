import { NextResponse, type NextRequest } from "next/server";

const canonicalRoutes = [
  "/About", "/WebsiteStrategy", "/CyberSecurity", "/DigitalSupport",
  "/CaseStudy1", "/CaseStudy2", "/CaseStudy3", "/PrivacyPolicy", "/TermsofService",
  "/service", "/contactus", "/blog", "/articles",
];
const routeByLowercase = new Map(canonicalRoutes.map(route => [route.toLowerCase(), route]));

// Keep existing published URLs stable, while recovering differently cased links.
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const lower = pathname.toLowerCase();
  const canonical = /^\/blog\//i.test(pathname) ? lower : routeByLowercase.get(lower);
  if (canonical && pathname !== canonical) {
    const url = req.nextUrl.clone();
    url.pathname = canonical;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next).*)"],
};
