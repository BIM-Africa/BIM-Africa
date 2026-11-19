export const SITE_URL = "https://bim.africa";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const services = [
  { path: "/WebsiteStrategy", name: "Website Design & Development", description: "Website design, development, e-commerce, upgrades and maintenance for businesses in Mauritius." },
  { path: "/CyberSecurity", name: "Cybersecurity & Website Security", description: "Website security audits, vulnerability checks, malware removal and ongoing protection." },
  { path: "/DigitalSupport", name: "Digital Support Outsourcing", description: "IT help desk, customer support, data entry and application administration." },
] as const;

export const organizationSchema = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "BIM Africa",
  alternateName: "Brand Image Marketer",
  url: `${SITE_URL}/`,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/web-app-manifest-512x512.png` },
  email: "info@bim.africa",
  telephone: "+23058010730",
  identifier: { "@type": "PropertyValue", propertyID: "Mauritius Company Number", value: "C190360" },
  sameAs: ["https://www.instagram.com/bimafrica/", "https://www.linkedin.com/company/bimafrica/"],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "BIM Africa",
  alternateName: "Brand Image Marketer",
  url: `${SITE_URL}/`,
  inLanguage: "en-MU",
  publisher: { "@id": ORGANIZATION_ID },
};

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
