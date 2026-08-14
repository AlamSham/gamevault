import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://gamevaultinfo.com"),
  title: {
    default: "GameVault APK — Safe & Free Android Game Downloads",
    template: "%s | GameVault APK",
  },
  description: "Download 100% safe, verified Android game APKs. Latest versions, fast speed, unlimited money mods, offline action & racing games.",
  keywords: ["Android games", "APK download", "GameVault", "Free Fire MAX APK", "Subway Surfers APK", "Minecraft APK", "MOD APK"],
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
        url: "https://gamevaultinfo.com/images/logo.png",
        width: 500,
        height: 500,
        alt: "GameVault APK Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GameVault APK — Safe & Free Android Game Downloads",
    description: "Download 100% safe, verified Android game APKs.",
    images: ["https://gamevaultinfo.com/images/logo.png"],
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

  return (
    <html lang="en">
      <head>
        <JsonLd data={websiteSchema} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
