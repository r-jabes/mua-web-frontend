import type { Metadata } from "next";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { VerificationNote } from "@/components/page/VerificationNote";
import { investors } from "@/content/company";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = {
  title: "Investors",
  description: investors.lead,
};

export default function InvestorsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Investors · Group materials"
        title={investors.title}
        lead={investors.lead}
        crumbs={[{ label: "Home", href: "/" }, { label: "Investors" }]}
      />

      <section className={`${styles.section} ${styles.sectionCompact}`}>
        <div className="container">
          <div className={styles.prose}>
            <p>{investors.body}</p>
          </div>
          <div className={`${styles.hubGrid} ${styles.stackGap}`}>
            {investors.links.map((link) => (
              <a key={link.href} href={link.href} className={styles.cardLink}>
                <h3>{link.label}</h3>
                <span>Open on mua.rw →</span>
              </a>
            ))}
          </div>
          <div className={styles.noteStack}>
            <VerificationNote tone="info">{investors.note}</VerificationNote>
          </div>
        </div>
      </section>

      <PageCta
        title="Looking for Rwanda customer service?"
        primary={{ label: "Contact us", href: "/contact-us" }}
        secondary={{ label: "About MUA Rwanda", href: "/about-us" }}
      />
    </main>
  );
}
