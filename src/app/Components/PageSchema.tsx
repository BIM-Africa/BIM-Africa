import type { Metadata } from "next";
import { SITE_URL, ORGANIZATION_ID, WEBSITE_ID, services, jsonLd } from "@/lib/site";

const pageNames: Record<string, string> = {
  "/About": "About BIM Africa",
  "/contactus": "Contact Us",
  "/service": "Services",
  "/blog": "Blog",
  "/articles": "All Articles",
  "/CaseStudy1": "NouMarmite Website Case Study",
  "/CaseStudy2": "Mauritius Health Travel Website Case Study",
  "/CaseStudy3": "Mauritius Travel & Tour Website Case Study",
  "/PrivacyPolicy": "Privacy Policy",
  "/TermsofService": "Terms of Service",
};

export default function PageSchema({ metadata }: { metadata: Metadata }) {
  const canonical = metadata.alternates?.canonical;
  if (typeof canonical !== "string") return null;
  const url = new URL(canonical, SITE_URL);
  const path = url.pathname;
  const title = typeof metadata.title === "string" ? metadata.title : "BIM Africa";
  const service = services.find(service => service.path === path);
  const type = path === "/About" ? "AboutPage" : path === "/contactus" ? "ContactPage"
    : ["/blog", "/articles", "/service"].includes(path) ? "CollectionPage" : "WebPage";
  const nodes: Record<string, unknown>[] = [{
    "@type": type,
    "@id": `${url.href}#webpage`,
    url: url.href,
    name: title,
    description: metadata.description || undefined,
    inLanguage: "en-MU",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    ...(service ? { mainEntity: { "@id": `${url.href}#service` } } : {}),
    ...(path === "/" ? {} : { breadcrumb: { "@id": `${url.href}#breadcrumb` } }),
  }];
  if (path !== "/") {
    const items = [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }];
    if (service) items.push({ "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/service` });
    items.push({ "@type": "ListItem", position: items.length + 1, name: service?.name || pageNames[path] || title, item: url.href });
    nodes.push({ "@type": "BreadcrumbList", "@id": `${url.href}#breadcrumb`, itemListElement: items });
  }
  if (service) nodes.push({
    "@type": "Service",
    "@id": `${url.href}#service`,
    name: service.name,
    description: service.description,
    url: url.href,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "Mauritius" },
    mainEntityOfPage: { "@id": `${url.href}#webpage` },
  });
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", "@graph": nodes }) }} />;
}
