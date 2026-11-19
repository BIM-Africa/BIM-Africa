import PageSchema from "../Components/PageSchema";
import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = withSocialMetadata({
  title: "BIM Africa | Website Development & Cybersecurity Services Mauritius",
  description:
    "Professional website development, cybersecurity and digital support for businesses in Mauritius, Africa and Europe. Build, protect and support your business.",
  alternates: {
    canonical: "https://bim.africa/service",
  },
});

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <><PageSchema metadata={metadata} />{children}</>;
}
