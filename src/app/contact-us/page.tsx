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

const pointsOfPresence = contactPage.locations.filter(
  (location) => location.name !== "Head Office",
);

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

      <section className={`${styles.section} ${styles.sectionCompact}`}>
        <div className="container">
          <div className={styles.split}>
            <div className={styles.hqFeature}>
              <p className="eyebrow">Primary contact</p>
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
            </div>
            <aside>
              <p className="eyebrow">Quick journeys</p>
              <div className={styles.quickLinks}>
                <a href="/make-a-claim">
                  Make a claim <span>→</span>
                </a>
                <a href="/customer-care">
                  Customer Care <span>→</span>
                </a>
                <a href="/agents">
                  Agents & partners <span>→</span>
                </a>
                <a href="/#quote">
                  Get a quote <span>→</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionMist}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Locations</p>
            <h2 className="section-title">Offices and points of presence</h2>
            <p className="section-lead">
              Published contacts across Kigali and regional points. Confirm branch versus outlet status
              with MUA where noted.
            </p>
          </div>
          <div className={styles.locations}>
            {pointsOfPresence.map((location) => (
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
          <div className={styles.noteStack}>
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
