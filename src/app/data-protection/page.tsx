import type { Metadata } from "next";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { VerificationNote } from "@/components/page/VerificationNote";
import { legal } from "@/content/support";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = {
  title: legal.dataProtection.title,
  description: legal.dataProtection.lead,
};

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
          <div className={styles.noteStack}>
            <VerificationNote>{legal.dataProtection.note}</VerificationNote>
          </div>
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
