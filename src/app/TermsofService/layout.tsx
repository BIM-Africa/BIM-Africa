import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | BIM Africa",
  description:
    "Read the BIM Africa Terms of Service governing the use of our website, digital services and business engagements.",
  alternates: {
    canonical: "https://www.bim.africa/TermsofService",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
