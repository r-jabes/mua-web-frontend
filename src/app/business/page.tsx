import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { HubCards } from "@/components/page/HubCards";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { businessHub } from "@/content/products";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: "Business Insurance",
  description: "Liability, property, motor, transport and special financial risks for enterprises and institutions in Rwanda.",
  path: "/business",
  image: "/images/hero-alt.jpg",
});

export default function BusinessHubPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Business"
        title="Cover built for enterprises and institutions"
        lead="From liability and property to transport and special financial risks — explore the business families published on MUA Rwanda."
        crumbs={[{ label: "Home", href: "/" }, { label: "Business" }]}
        image={{
          src: "/images/hero-alt.jpg",
          alt: "Business insurance for enterprises",
        }}
        primaryCta={{ label: "Get a business quote", href: "/#quote" }}
        secondaryCta={{ label: "Contact us", href: "/contact-us" }}
      />

      <section className={`${styles.section} ${styles.sectionMist}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Catalogue</p>
            <h2 className="section-title">Business families</h2>
          </div>
          <HubCards items={businessHub} columns={2} />
        </div>
      </section>

      <PageCta
        title="Discuss your business risks with MUA"
        primary={{ label: "Contact Head Office", href: "/contact-us" }}
        secondary={{ label: "Make a claim", href: "/make-a-claim" }}
      />
    </main>
  );
}
