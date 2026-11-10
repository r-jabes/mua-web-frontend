import type { Metadata } from "next";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { VerificationNote } from "@/components/page/VerificationNote";
import { contactPage } from "@/content/support";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = {
  title: "Contact us",
  description: contactPage.lead,
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Support"
        title={contactPage.title}
        lead={contactPage.lead}
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        primaryCta={{ label: "Call Head Office", href: contactPage.hq.phoneHref }}
        secondaryCta={{ label: "Email us", href: contactPage.hq.emailHref }}
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.split}>
            <article className={styles.block}>
              <h3>{contactPage.hq.name}</h3>
              {contactPage.hq.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                <a href={contactPage.hq.phoneHref}>{contactPage.hq.phone}</a>
              </p>
              <p>
                <a href={contactPage.hq.emailHref}>{contactPage.hq.email}</a>
              </p>
            </article>
            <div className={styles.block}>
              <h3>Quick journeys</h3>
              <ul className={styles.list}>
                <li>
                  <a href="/make-a-claim">Make a claim</a>
                </li>
                <li>
                  <a href="/customer-care">Customer Care</a>
                </li>
                <li>
                  <a href="/agents">Agents & partners</a>
                </li>
                <li>
                  <a href="/#quote">Get a quote</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionMist}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Locations</p>
            <h2 className="section-title">Offices and points of presence</h2>
          </div>
          <div className={styles.locations}>
            {contactPage.locations.map((location) => (
              <article className={styles.location} key={location.name}>
                <h3>{location.name}</h3>
                <p>{location.address}</p>
                <p>{location.phone}</p>
                <p>
                  <a href="mailto:info@mua.rw">info@mua.rw</a>
                </p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "var(--space-6)" }}>
            <VerificationNote>{contactPage.note}</VerificationNote>
          </div>
        </div>
      </section>

      <PageCta
        title="Prefer to start a claim now?"
        primary={{ label: "Make a claim", href: "/make-a-claim" }}
        secondary={{ label: "Customer Care", href: "/customer-care" }}
      />
    </main>
  );
}
