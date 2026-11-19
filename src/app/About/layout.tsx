import PageSchema from "../Components/PageSchema";
import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = withSocialMetadata({
  title: "About BIM Africa | Web & Digital Services in Mauritius",
  description:
    "Meet BIM Africa, a Mauritius-based company providing website development, cybersecurity and digital support to businesses in Mauritius, Africa and Europe.",
  alternates: {
    canonical: "https://bim.africa/About",
  },
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <><PageSchema metadata={metadata} />{children}</>;
}
