import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIM Africa | Digital Support & IT Outsourcing in Mauritius",
  description:
    "Professional digital support and IT outsourcing for businesses in Mauritius, Africa and Europe. Get reliable technical support, website maintenance and ongoing assistance.",
  alternates: {
    canonical: "https://www.bim.africa/DigitalSupport",
  },
};

export default function DigitalSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
