import type { Metadata } from "next";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { VerificationNote } from "@/components/page/VerificationNote";
import { legal } from "@/content/support";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = {
  title: legal.privacy.title,
  description: legal.privacy.lead,
};

export default function PrivacyPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Legal"
        title={legal.privacy.title}
        lead={legal.privacy.lead}
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.prose}>
            <p>{legal.privacy.body}</p>
          </div>
          <div style={{ marginTop: "var(--space-5)" }}>
            <VerificationNote>
              Replace this placeholder with an approved Rwanda privacy notice from MUA before launch.
            </VerificationNote>
          </div>
        </div>
      </section>

      <PageCta
        title="Need support in the meantime?"
        primary={{ label: "Contact us", href: "/contact-us" }}
        secondary={{ label: "Data protection", href: "/data-protection" }}
      />
    </main>
  );
}
