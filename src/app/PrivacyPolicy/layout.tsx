import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIM Africa | Privacy Policy & Data Protection in Mauritius",
  description:
    "Read BIM Africa's Privacy Policy to learn how we collect, use, protect and manage personal data when you use our website and digital services.",
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
