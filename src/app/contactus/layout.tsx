import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIM Africa | Contact for Website, Cybersecurity & Digital Support",
  description:
    "Contact BIM Africa for website development, cybersecurity and digital support for businesses in Mauritius, Africa and Europe. Get a fast response.",
  alternates: {
    canonical: "https://bim.africa/contactus",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
