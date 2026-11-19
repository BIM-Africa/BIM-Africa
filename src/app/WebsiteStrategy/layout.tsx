import PageSchema from "../Components/PageSchema";
import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = withSocialMetadata({
  title: "Website Design & Web Development Mauritius | BIM Africa",
  description:
    "Professional website development and web design for businesses in Mauritius, Africa and Europe. Build a fast, secure and effective website that grows with your business.",
  alternates: {
    canonical: "https://bim.africa/WebsiteStrategy",
  },
});

export default function WebsiteStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <><PageSchema metadata={metadata} />{children}</>;
}
