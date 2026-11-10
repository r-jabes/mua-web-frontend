import type { Metadata } from "next";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested could not be found on MUA Insurance Rwanda.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Error 404"
        title="Page not found"
        lead="The page you requested is unavailable or the link may be out of date. Use the journeys below to continue."
        crumbs={[{ label: "Home", href: "/" }, { label: "Not found" }]}
        primaryCta={{ label: "Back to home", href: "/" }}
        secondaryCta={{ label: "Contact us", href: "/contact-us" }}
      />

      <section className={`${styles.section} ${styles.sectionCompact}`}>
        <div className="container">
          <div className={styles.quickLinks}>
            <a href="/personal">
              Personal insurance <span>→</span>
            </a>
            <a href="/business">
              Business insurance <span>→</span>
            </a>
            <a href="/make-a-claim">
              Make a claim <span>→</span>
            </a>
            <a href="/contact-us">
              Find a branch <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <PageCta
        title="Need help from our team?"
        primary={{ label: "Call Head Office", href: "tel:+250788125024" }}
        secondary={{ label: "Customer Care", href: "/customer-care" }}
      />
    </main>
  );
}
