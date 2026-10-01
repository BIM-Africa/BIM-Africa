import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIM Africa | Website Development, Cybersecurity & Digital Support in Mauritius",
  description:
    "Meet BIM Africa, a Mauritius-based company providing website development, cybersecurity and digital support to businesses in Mauritius, Africa and Europe.",
  alternates: {
    canonical: "https://www.bim.africa/About",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
