/** Verified site identity for SEO, sitemap, and structured data. */

export const SITE_URL = "https://www.mua.rw";

export const siteIdentity = {
  name: "MUA Insurance Rwanda",
  legalName: "MUA Insurance Rwanda Ltd",
  tagline: "Insurance that moves you forward",
  description:
    "MUA Insurance Rwanda — short-term insurance for individuals and businesses. Get a quote, make a claim, or find a branch across Rwanda.",
  locale: "en_RW",
  logoPath: "/brand/mua-logo.svg",
  ogImagePath: "/images/hero-motor.jpg",
  phone: "+250 788 125 024",
  email: "info@mua.rw",
  sameAs: [
    "https://www.facebook.com/muarwanda/",
    "https://www.linkedin.com/company/mua-mauritius-east-africa/",
    "https://mobile.twitter.com/MUARwanda",
  ],
  address: {
    streetAddress: "Avenue de la Paix, Grand Pension Plaza, Ground & 8th Floor, KN 4th Avenue",
    addressLocality: "Kigali",
    addressCountry: "RW",
  },
} as const;

/** Indexable public routes (no admin/dev paths). Privacy is included but noindexed separately. */
export const publicRoutes = [
  "/",
  "/personal",
  "/personal/motor/private-vehicle",
  "/personal/motor/commercial-vehicle",
  "/personal/motor/motorcycle",
  "/personal/domestic-package",
  "/leisure",
  "/business",
  "/business/liability",
  "/business/property",
  "/business/property/additional-covers",
  "/business/commercial-vehicle",
  "/business/private-vehicle",
  "/business/motorcycle",
  "/business/transport",
  "/business/more",
  "/business/more/special-financial-risks",
  "/business/corporate-health-insurance",
  "/make-a-claim",
  "/customer-care",
  "/contact-us",
  "/agents",
  "/about-us",
  "/our-vision-and-purpose",
  "/leadership",
  "/mua-in-africa",
  "/social-purpose",
  "/career",
  "/investors",
  "/news/blog",
  "/data-protection",
  "/cookie-policy",
  "/privacy",
] as const;
