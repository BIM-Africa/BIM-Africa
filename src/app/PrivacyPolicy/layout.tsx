import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BIM Africa",
  description:
    "Read the BIM Africa Privacy Policy covering how we collect, use and protect personal information when you use our website and services.",
  alternates: {
    canonical: "https://www.bim.africa/PrivacyPolicy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
