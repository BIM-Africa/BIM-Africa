import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // ✅ Improves Core Web Vitals
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ✅ SEO & favicon metadata
export const metadata: Metadata = {
  title:
    "BIM Africa | Professional Websites, Cybersecurity & Digital Support Mauritius",
  description:
    "BIM Africa helps businesses build, protect and support their digital presence with professional website development, cybersecurity and threat management, and digital support outsourcing from Mauritius while covering Africa and Europe.",
keywords: [
  "BIM Africa",
  "Brand Image Marketer",
  "website development Mauritius",
  "website design Mauritius",
  "website maintenance Mauritius",
  "cybersecurity Mauritius",
  "website security Mauritius",
  "digital support outsourcing Mauritius",
  "digital outsourcing Mauritius",
  "website development Luxembourg",
  "digital support outsourcing Luxembourg",
],
  openGraph: {
    title:
      "BIM Africa | Professional Websites, Cybersecurity & Digital Support Mauritius",
    description:
      "BIM Africa helps businesses build, protect and support their digital presence with professional website development, cybersecurity and threat management, and digital support outsourcing from Mauritius while covering Africa and Europe.",
    url: "https://bim.africa",
    siteName: "BIM Africa",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "BIM Africa | Professional Websites, Cybersecurity & Digital Support Mauritius",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  other: {
    "apple-mobile-web-app-title": "BIM Africa | Professional Websites, Cybersecurity & Digital Support Mauritius",
  },
  alternates: {
    canonical: "https://bim.africa",
  },
  metadataBase: new URL("https://bim.africa"),
  robots: {
    index: true,
    follow: true,
  },
};

// ✅ Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Meta essentials not covered by Metadata API */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="BIM Africa" />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
