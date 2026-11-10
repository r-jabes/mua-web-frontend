import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { legal } from "@/content/support";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: legal.dataProtection.title,
  description: legal.dataProtection.lead,
  path: "/data-protection",
});

export default function DataProtectionPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Legal"
        title={legal.dataProtection.title}
        lead={legal.dataProtection.lead}
        crumbs={[{ label: "Home", href: "/" }, { label: "Data protection" }]}
      />

      <section className={`${styles.section} ${styles.sectionCompact}`}>
        <div className="container">
          <ul className={`${styles.bareGrid} ${styles.cols2}`}>
            {legal.dataProtection.rights.map((right) => (
              <li key={right} className={styles.block}>
                <h3>{right}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageCta
        title="Questions about your data?"
        primary={{ label: "Contact us", href: "/contact-us" }}
        secondary={{ label: "Cookie policy", href: "/cookie-policy" }}
      />
    </main>
  );
}
