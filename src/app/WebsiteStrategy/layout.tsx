import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIM Africa | Website Development & Web Design & Strategy in Mauritius",
  description:
    "Professional website development and web design for businesses in Mauritius, Africa and Europe. Build a fast, secure and effective website that grows with your business.",
  alternates: {
    canonical: "https://www.bim.africa/WebsiteStrategy",
  },
};

export default function WebsiteStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
