import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Strategy & Development Mauritius | BIM Africa",
  description:
    "Build a stronger digital presence with BIM Africa's website strategy and development services in Mauritius, from strategic planning and UX to professional website development and ongoing support.",
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
