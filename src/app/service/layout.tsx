import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development, Cybersecurity & IT Support Services Mauritius | BIM Africa",
  description:
    "Explore BIM Africa's digital services in Mauritius, including website strategy and development, cybersecurity and threat management, and digital support outsourcing for growing businesses.",
  alternates: {
    canonical: "https://www.bim.africa/service",
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
