import type { Metadata } from "next";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { VerificationNote } from "@/components/page/VerificationNote";
import { leadership } from "@/content/company";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = {
  title: "Leadership",
  description: leadership.lead,
};

export default function LeadershipPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Company"
        title={leadership.title}
        lead={leadership.lead}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/about-us" },
          { label: "Leadership" },
        ]}
      />

      <section className={`${styles.section} ${styles.sectionCompact}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Board</p>
            <h2 className="section-title">Board of Directors</h2>
          </div>
          <div className={styles.people}>
            {leadership.board.map((person) => (
              <article className={styles.person} key={person.name}>
                <h3>{person.name}</h3>
                <p className={styles.role}>{person.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionMist}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">ExCo</p>
            <h2 className="section-title">Executive Committee</h2>
          </div>
          <div className={styles.people}>
            {leadership.exco.map((person) => (
              <article className={styles.person} key={person.name}>
                <h3>{person.name}</h3>
                <p className={styles.role}>{person.role}</p>
                {"note" in person && person.note ? <p>{person.note}</p> : null}
              </article>
            ))}
          </div>
          <div className={styles.noteStack}>
            <VerificationNote>{leadership.note}</VerificationNote>
          </div>
        </div>
      </section>

      <PageCta
        title="Learn more about MUA Rwanda"
        primary={{ label: "About us", href: "/about-us" }}
        secondary={{ label: "MUA in Africa", href: "/mua-in-africa" }}
      />
    </main>
  );
}
