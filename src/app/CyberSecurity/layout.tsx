import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity & Threat Management Mauritius | BIM Africa",
  description:
    "BIM Africa provides cybersecurity and threat management services in Mauritius, including security audits, malware removal, website monitoring and proactive protection for businesses.",
  alternates: {
    canonical: "https://www.bim.africa/CyberSecurity",
  },
};

export default function CyberSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
