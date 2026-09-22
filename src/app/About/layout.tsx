import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BIM Africa | Web Development & Digital Solutions Mauritius",
  description:
    "BIM Africa is a Mauritius-based digital technology partner helping businesses build, protect and support their digital presence through website development, cybersecurity and digital support outsourcing.",
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
