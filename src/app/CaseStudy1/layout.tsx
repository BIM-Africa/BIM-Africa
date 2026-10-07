import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIM Africa | Case Study: NouMarmite's Creole Website in Mauritius",
  description:
    "Discover how BIM Africa created NouMarmite's first Mauritian Creole website in 2019, combining local culture, mobile-first design and digital innovation.",
  alternates: {
    canonical: "https://bim.africa/CaseStudy1",
  },
};

export default function CaseStudy1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
