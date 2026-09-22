import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Support Outsourcing Mauritius | BIM Africa",
  description:
    "BIM Africa provides digital support outsourcing for businesses in Mauritius, including web designers, developers, technical support and managed digital assistance.",
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
