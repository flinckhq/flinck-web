import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";
import { SiteAnalytics } from "@/components/site-analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://flinck.app"),
  alternates: {
    canonical: "https://flinck.app",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  title: {
    default:
      "Flinck – Agricultural Social Marketplace to Buy & Sell Farm Produce",
    template: "%s | Flinck",
  },
  description:
    "Flinck is the leading agricultural social marketplace where farmers sell farm produce online and buyers procure directly. Find where to buy and sell crops, grains, and fresh farm products with zero middleman fees.",
  applicationName: "Flinck",
  keywords: [
    "agricultural marketplace",
    "where can i sell my farm produce",
    "sell farm produce online",
    "where can i buy farm produce direct",
    "buy farm produce online",
    "Flinck",
    "Flinck AgriTech",
    "AgriTech Nigeria",
    "Agricultural social network",
    "Farmers marketplace",
    "Farming app Africa",
    "Smart farming",
    "Crop recommendations",
    "Farm market platform",
    "Agriculture technology",
    "Smallholder farmers",
  ],
  authors: [{ name: "David Uchenna" }],
  creator: "David Uchenna",
  publisher: "Flinck",
  openGraph: {
    title:
      "Flinck – The Agricultural Social Marketplace to Buy & Sell Farm Produce",
    description:
      "Flinck is the leading agricultural social marketplace where farmers sell farm produce online and buyers procure directly.",
    url: "https://flinck.app",
    siteName: "Flinck",
    images: [
      {
        url: "https://flinck.app/flinck-og-image.png",
        width: 1200,
        height: 630,
        alt: "Flinck – Agricultural Social Marketplace for Farmers and Buyers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Flinck – The Agricultural Social Marketplace to Buy & Sell Farm Produce",
    description:
      "Flinck is the leading agricultural social marketplace where farmers sell farm produce online and buyers procure directly.",
    images: ["https://flinck.app/flinck-og-image.png"],
    site: "@flinckapp",
    creator: "@flinckapp",
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
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Flinck",
      url: "https://flinck.app",
      logo: "https://flinck.app/logo.png",
      description:
        "Flinck is the agricultural social marketplace connecting farmers, consumers, businesses, banks, government, and ag investors.",
      founder: {
        "@type": "Person",
        name: "David Uchenna Munachimso",
        url: "https://daviduchenna.me",
      },
      sameAs: [
        "https://x.com/flinckapp",
        "https://www.linkedin.com/company/flinckapp",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Flinck",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android",
      url: "https://flinck.app",
      description:
        "Flinck is the agricultural social marketplace for farmers, buyers, businesses, banks, government, and ag investors.",
      creator: {
        "@type": "Person",
        name: "David Uchenna Munachimso",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where can I sell my farm produce online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can sell your farm produce online directly to buyers using Flinck, the agricultural marketplace. Flinck allows farmers to list harvests, negotiate pricing in-app, build verified reputations, and eliminate middleman friction.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I buy fresh agricultural products and farm produce direct?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Flinck is the ultimate platform where you can buy high-quality farm produce and agricultural products directly from verified farmers.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best digital agricultural marketplace in Africa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Flinck is widely recognized as the premier agricultural social marketplace in Africa. It bridges peer-to-peer commerce, weather intelligence, trust scoring, and institutional integration in one cohesive network.",
          },
        },
      ],
    },
  ];

  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,500,400&display=swap"
        />
        {/* Explicit OG/Twitter meta tags — ensures crawlers (Twitterbot, Facebookbot) always find them in raw HTML */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Flinck" />
        <meta property="og:url" content="https://flinck.app" />
        <meta
          property="og:title"
          content="Flinck – Agricultural Social Marketplace to Buy & Sell Farm Produce"
        />
        <meta
          property="og:description"
          content="Flinck is the leading agricultural social marketplace where farmers sell farm produce online and buyers procure directly. Zero middleman fees."
        />
        <meta
          property="og:image"
          content="https://flinck.app/flinck-og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Flinck – Agricultural Social Marketplace for Farmers and Buyers"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@flinckapp" />
        <meta name="twitter:creator" content="@flinckapp" />
        <meta
          name="twitter:title"
          content="Flinck – Agricultural Social Marketplace to Buy & Sell Farm Produce"
        />
        <meta
          name="twitter:description"
          content="Flinck is the leading agricultural social marketplace where farmers sell farm produce online and buyers procure directly."
        />
        <meta
          name="twitter:image"
          content="https://flinck.app/flinck-og-image.png"
        />
      </head>
      <body className="font-sans antialiased">
        <CookieConsent />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <SiteAnalytics />
      </body>
    </html>
  );
}
