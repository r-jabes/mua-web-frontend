import type { Metadata } from "next";
import type { ProductPage } from "@/content/products";
import { SITE_URL, siteIdentity } from "@/lib/site";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function productMetadata(product: ProductPage, options?: { noIndex?: boolean }): Metadata {
  return buildPageMetadata({
    title: product.title,
    description: product.summary,
    path: product.path,
    image: product.image?.src,
    noIndex: options?.noIndex,
  });
}

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalised === "/" ? "" : normalised}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = siteIdentity.ogImagePath,
  type = "website",
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title: `${title} | ${siteIdentity.name}`,
      description,
      url,
      siteName: siteIdentity.name,
      locale: siteIdentity.locale,
      type,
      images: [{ url: imageUrl, alt: siteIdentity.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteIdentity.name}`,
      description,
      images: [imageUrl],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "InsuranceAgency"],
    name: siteIdentity.name,
    legalName: siteIdentity.legalName,
    url: SITE_URL,
    logo: absoluteUrl(siteIdentity.logoPath),
    email: siteIdentity.email,
    telephone: siteIdentity.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteIdentity.address.streetAddress,
      addressLocality: siteIdentity.address.addressLocality,
      addressCountry: siteIdentity.address.addressCountry,
    },
    sameAs: [...siteIdentity.sameAs],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteIdentity.name,
    url: SITE_URL,
    description: siteIdentity.description,
    publisher: {
      "@type": "Organization",
      name: siteIdentity.name,
      logo: absoluteUrl(siteIdentity.logoPath),
    },
  };
}

export function breadcrumbJsonLd(
  crumbs: { label: string; href?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      ...(crumb.href ? { item: absoluteUrl(crumb.href) } : {}),
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  image: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    image: [absoluteUrl(input.image)],
    mainEntityOfPage: absoluteUrl(input.path),
    author: {
      "@type": "Organization",
      name: siteIdentity.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteIdentity.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteIdentity.logoPath),
      },
    },
    ...(input.category ? { articleSection: input.category } : {}),
  };
}
