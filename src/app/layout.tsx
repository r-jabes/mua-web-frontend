import type { Metadata, Viewport } from "next";
import { Manrope, Nunito_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { SITE_URL, siteIdentity } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#0033A1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteIdentity.name,
    template: `%s | ${siteIdentity.name}`,
  },
  description: siteIdentity.description,
  applicationName: siteIdentity.name,
  authors: [{ name: siteIdentity.name, url: SITE_URL }],
  creator: siteIdentity.name,
  publisher: siteIdentity.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteIdentity.name,
    description: siteIdentity.description,
    url: SITE_URL,
    siteName: siteIdentity.name,
    locale: siteIdentity.locale,
    type: "website",
    images: [
      {
        url: siteIdentity.ogImagePath,
        alt: "MUA Insurance Rwanda — motor and short-term insurance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteIdentity.name,
    description: siteIdentity.description,
    images: [siteIdentity.ogImagePath],
  },
  icons: {
    icon: [{ url: "/brand/mua-icon.svg", type: "image/svg+xml" }],
    shortcut: "/brand/mua-icon.svg",
    apple: "/brand/mua-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${nunito.variable}`}>
      <body>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
