import PageSchema from "../Components/PageSchema";
import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = withSocialMetadata({
  title: "BIM Africa | Case Study: Mauritius Travel & Tour Website",
  description:
    "See how BIM Africa built a high-performance Next.js website for Mauritius Travel & Tour, delivering fast loading, SEO-ready architecture and global reach.",
  alternates: {
    canonical: "https://bim.africa/CaseStudy3",
  },
});

export default function CaseStudy3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <><PageSchema metadata={metadata} />{children}</>;
}
