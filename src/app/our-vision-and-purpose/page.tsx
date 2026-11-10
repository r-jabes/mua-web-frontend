import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { VerificationNote } from "@/components/page/VerificationNote";
import { values } from "@/content/company";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: "Vision, purpose and values",
  description: values.vision,
  path: "/our-vision-and-purpose",
});

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

      <section className={`${styles.section} ${styles.sectionCompact}`}>
        <div className="container">
          <div className={styles.split}>
            <article className={styles.block}>
              <h3>Purpose</h3>
              <p>{values.purpose}</p>
            </article>
            <aside className={styles.rail}>
              <div>
                <h3>Value creation pillars</h3>
                <ul className={styles.list}>
                  {values.pillars.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionMist}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Values</p>
            <h2 className="section-title">How we work</h2>
          </div>
          <ul className={styles.valueGrid}>
            {values.valueList.map((item) => (
              <li key={item} className={styles.block}>
                <h3>{item}</h3>
              </li>
            ))}
          </ul>
          <div className={styles.noteStack}>
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
