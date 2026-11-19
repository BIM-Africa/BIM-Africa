import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleTranslate from "./Components/GoogleTranslate";
import { organizationSchema, websiteSchema, jsonLd } from "@/lib/site";

// ✅ Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // ✅ Improves Core Web Vitals
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

// ✅ SEO & favicon metadata
export const metadata: Metadata = {
  title:
    "BIM Africa | Professional Websites, Cybersecurity & Digital Support Mauritius",
  description:
    "Professional website development, cybersecurity and digital support for businesses in Mauritius, Africa and Europe. Build, protect and support your business.",
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
      "Professional website development, cybersecurity and digital support for businesses in Mauritius, Africa and Europe. Build, protect and support your business.",
    siteName: "BIM Africa",
    locale: "en_MU",
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
    "apple-mobile-web-app-title": "BIM Africa",
  },
  metadataBase: new URL("https://bim.africa"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, websiteSchema],
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
        <meta name="author" content="BIM Africa" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
        <GoogleTranslate />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NTHX1Y2VJZ"
          strategy="lazyOnload"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NTHX1Y2VJZ');
          `}
        </Script>
      
      </body>
    </html>
  );
}
