import type { Metadata } from "next";
import { Manrope, Nunito_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MUA Insurance Rwanda",
    template: "%s | MUA Insurance Rwanda",
  },
  description:
    "MUA Insurance Rwanda — short-term insurance for individuals and businesses. Get a quote, make a claim, or find a branch across Rwanda.",
  metadataBase: new URL("https://www.mua.rw"),
  openGraph: {
    title: "MUA Insurance Rwanda",
    description:
      "Insurance that moves you forward. Personal and business short-term insurance in Rwanda.",
    locale: "en_RW",
    type: "website",
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
