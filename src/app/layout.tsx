import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gamevaultinfo.com"),
  title: {
    default: "GameVault APK — Safe & Free Android Game Downloads",
    template: "%s | GameVault APK",
  },
  alternates: { canonical: "/" },
  description: "Download 100% safe and verified Android game APKs. Latest versions, fast direct downloads, offline action, racing & puzzle games.",
  keywords: ["Android games", "APK download", "GameVault", "Free Fire MAX APK", "Subway Surfers APK", "Minecraft APK"],
  authors: [{ name: "GameVault Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gamevaultinfo.com",
    siteName: "GameVault APK",
    title: "GameVault APK — Safe & Free Android Game Downloads",
    description: "Download 100% safe, verified Android game APKs. Latest versions, fast speed, offline games.",
    images: [
      {
        url: "https://gamevaultinfo.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GameVault APK — Safe & Free Android Game Downloads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GameVault APK — Safe & Free Android Game Downloads",
    description: "Download 100% safe and verified Android game APKs.",
    images: ["https://gamevaultinfo.com/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GameVault APK",
    url: "https://gamevaultinfo.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://gamevaultinfo.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GameVault APK",
    url: "https://gamevaultinfo.com",
    logo: "https://gamevaultinfo.com/images/logo.png",
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        {/* Google Search Console Verification — Replace with your actual verification code */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <JsonLd data={websiteSchema} />
        <JsonLd data={organizationSchema} />
        {/* Google Analytics (GA4) — Replace GA_MEASUREMENT_ID with your actual ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
