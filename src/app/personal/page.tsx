import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { HubCards } from "@/components/page/HubCards";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { VerificationNote } from "@/components/page/VerificationNote";
import { personalHub } from "@/content/products";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: "Personal Insurance",
  description: "Explore verified personal covers from MUA Insurance Rwanda — motor, domestic package and travel.",
  path: "/personal",
  image: "/images/hero-motor.jpg",
});

export default function PersonalHubPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Personal"
        title="Protect what matters at home and on the move"
        lead="Confirmed personal covers published by MUA Insurance Rwanda — motor, domestic package and travel."
        crumbs={[{ label: "Home", href: "/" }, { label: "Personal" }]}
        image={{
          src: "/images/hero-motor.jpg",
          alt: "Personal insurance for life on the move",
        }}
        primaryCta={{ label: "Get a quote", href: "/#quote" }}
        secondaryCta={{ label: "Contact us", href: "/contact-us" }}
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Catalogue</p>
            <h2 className="section-title">Personal covers</h2>
            <p className="section-lead">
              Choose a product family to review what is covered and how to request further information.
            </p>
          </div>
          <HubCards items={personalHub} />
          <div className={styles.noteStack}>
            <VerificationNote>
              Individual Personal Accident, Tulizo Bora Health and Life product pages are not published
              with sufficient verified Rwanda wording yet, so they are intentionally omitted from this hub.
            </VerificationNote>
          </div>
        </div>
      </section>

      <PageCta
        title="Need help choosing cover?"
        primary={{ label: "Get a quote", href: "/#quote" }}
        secondary={{ label: "Talk to us", href: "/contact-us" }}
      />
    </main>
  );
}
