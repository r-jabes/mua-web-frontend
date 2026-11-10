import type { Metadata } from "next";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { VerificationNote } from "@/components/page/VerificationNote";
import { values } from "@/content/company";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = {
  title: "Vision, purpose and values",
  description: values.vision,
};

export default function ValuesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Company"
        title={values.title}
        lead={values.vision}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/about-us" },
          { label: "Values & purpose" },
        ]}
        primaryCta={{ label: "About MUA Rwanda", href: "/about-us" }}
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid2}>
            <article className={styles.block}>
              <h3>Purpose</h3>
              <p>{values.purpose}</p>
            </article>
            <article className={styles.block}>
              <h3>Value creation pillars</h3>
              <ul className={styles.list}>
                {values.pillars.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionMist}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Values</p>
            <h2 className="section-title">How we work</h2>
          </div>
          <ul className={styles.grid3} style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {values.valueList.map((item) => (
              <li key={item} className={styles.block}>
                <h3>{item}</h3>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "var(--space-6)" }}>
            <VerificationNote tone="info">{values.note}</VerificationNote>
          </div>
        </div>
      </section>

      <PageCta
        title="Meet the people leading MUA Rwanda"
        primary={{ label: "Leadership", href: "/leadership" }}
        secondary={{ label: "Careers", href: "/career" }}
      />
    </main>
  );
}
