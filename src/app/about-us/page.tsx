import type { Metadata } from "next";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { VerificationNote } from "@/components/page/VerificationNote";
import { about } from "@/content/company";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = {
  title: "About us",
  description: about.lead,
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Company"
        title={about.title}
        lead={about.lead}
        crumbs={[{ label: "Home", href: "/" }, { label: "About us" }]}
        image={{ src: "/images/news-1.jpg", alt: "MUA Insurance Rwanda" }}
        primaryCta={{ label: "Meet leadership", href: "/leadership" }}
        secondaryCta={{ label: "Our values", href: "/our-vision-and-purpose" }}
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.split}>
            <div className={styles.prose}>
              <p className="eyebrow">Overview</p>
              <h2 className="section-title">Built for Rwanda, connected regionally</h2>
              <p>{about.overview}</p>
              <p>{about.partnerships}</p>
            </div>
            <div className={styles.block}>
              <h3>Strengths</h3>
              <ul className={styles.list}>
                {about.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionMist}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">History</p>
            <h2 className="section-title">Milestones</h2>
          </div>
          <ol className={styles.timeline}>
            {about.timeline.map((item) => (
              <li key={item.year}>
                <strong>{item.year}</strong>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: "var(--space-6)" }}>
            {about.glanceNotes.map((note) => (
              <VerificationNote key={note.text}>{note.text}</VerificationNote>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Explore how MUA serves Rwanda"
        primary={{ label: "Personal covers", href: "/personal" }}
        secondary={{ label: "Business covers", href: "/business" }}
      />
    </main>
  );
}
