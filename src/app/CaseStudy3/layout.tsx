import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIM Africa Case Study | Website Development Mauritius",
  description:
    "Explore how BIM Africa approaches website strategy and development for businesses, combining professional design, performance, responsive experiences and ongoing digital support.",
  alternates: {
    canonical: "https://www.bim.africa/CaseStudy3",
  },
};

export default function CaseStudy3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
