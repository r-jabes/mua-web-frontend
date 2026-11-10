import type { Metadata } from "next";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { VerificationNote } from "@/components/page/VerificationNote";
import { africa } from "@/content/company";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = {
  title: "MUA in Africa",
  description: africa.lead,
};

export default function AfricaPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Company"
        title={africa.title}
        lead={africa.lead}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/about-us" },
          { label: "MUA in Africa" },
        ]}
        image={{ src: "/images/news-2.jpg", alt: "MUA across Africa" }}
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.prose}>
            <p>{africa.narrative}</p>
          </div>
          <div className={styles.grid3} style={{ marginTop: "var(--space-6)" }}>
            {africa.countries.map((country) => (
              <div className={styles.block} key={country}>
                <h3>{country}</h3>
                <p>Regional MUA presence as published on mua.rw.</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "var(--space-6)", display: "grid", gap: "var(--space-3)" }}>
            {africa.notes.map((note) => (
              <VerificationNote key={note.text}>{note.text}</VerificationNote>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Prefer Rwanda contact details?"
        primary={{ label: "Contact us", href: "/contact-us" }}
        secondary={{ label: "About MUA Rwanda", href: "/about-us" }}
      />
    </main>
  );
}
