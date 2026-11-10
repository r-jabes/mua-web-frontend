import type { Metadata } from "next";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { legal } from "@/content/support";
import { buildPageMetadata } from "@/lib/seo";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: legal.privacy.title,
  description: legal.privacy.lead,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Legal"
        title={legal.privacy.title}
        lead={legal.privacy.lead}
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
      />

      <section className={`${styles.section} ${styles.sectionCompact}`}>
        <div className="container">
          <div className={styles.prose}>
            <p>{legal.privacy.body}</p>
          </div>
        </div>
      </section>

      <PageCta
        title="Need support?"
        primary={{ label: "Contact us", href: "/contact-us" }}
        secondary={{ label: "Data protection", href: "/data-protection" }}
      />
    </main>
  );
}
