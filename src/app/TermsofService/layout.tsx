import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIM Africa | Terms of Service & Website Use in Mauritius",
  description:
    "Read BIM Africa's Terms of Service covering website development, cybersecurity, digital support, payments, service use and your responsibilities as a client.",
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
