import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIM Africa | Cybersecurity & Website Security in Mauritius",
  description:
    "Professional cybersecurity, website security and malware removal for businesses in Mauritius, Africa and Europe. Protect your website, data and digital operations.",
  alternates: {
    canonical: "https://www.bim.africa/CyberSecurity",
  },
};

export default function CyberSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
