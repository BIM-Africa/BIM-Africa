import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIM Africa | Case Study: Mauritius Health Travel Website",
  description:
    "Discover how BIM Africa built a secure, high-performance website for Mauritius Health Travel, connecting patients with leading medical providers in India.",
  alternates: {
    canonical: "https://www.bim.africa/CaseStudy2",
  },
};

export default function CaseStudy2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
