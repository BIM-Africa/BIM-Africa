import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact BIM Africa | Web Development & IT Solutions Mauritius",
  description:
    "Contact BIM Africa for professional website development, cybersecurity and digital support outsourcing services for businesses in Mauritius and beyond.",
  alternates: {
    canonical: "https://www.bim.africa/contactus",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
