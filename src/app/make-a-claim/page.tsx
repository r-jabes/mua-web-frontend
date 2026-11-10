import type { Metadata } from "next";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { StepsList } from "@/components/page/StepsList";
import { VerificationNote } from "@/components/page/VerificationNote";
import { claimsPage } from "@/content/support";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = {
  title: "Make a claim",
  description: claimsPage.lead,
};

export default function ClaimsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Claims"
        title={claimsPage.title}
        lead={claimsPage.lead}
        crumbs={[{ label: "Home", href: "/" }, { label: "Claims" }]}
        primaryCta={{ label: "Open claim form on mua.rw", href: claimsPage.formHref }}
        secondaryCta={{ label: "Call claims", href: claimsPage.phoneHref }}
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.split}>
            <div>
              <div className={styles.sectionHeader}>
                <p className="eyebrow">Process</p>
                <h2 className="section-title">How claiming works</h2>
                <p className="section-lead">
                  A practical journey based on published claims contacts and form guidance. This is not a fake
                  submission backend.
                </p>
              </div>
              <StepsList steps={claimsPage.steps} />
            </div>
            <aside className={styles.grid2} style={{ gridTemplateColumns: "1fr" }}>
              <div className={styles.block}>
                <h3>Claims contacts</h3>
                <p>
                  Phone:{" "}
                  <a href={claimsPage.phoneHref}>{claimsPage.phone}</a>
                </p>
                <p>
                  Email:{" "}
                  <a href={claimsPage.emailHref}>{claimsPage.email}</a>
                </p>
              </div>
              <div className={styles.block}>
                <h3>Uploads</h3>
                <p>{claimsPage.uploadNote}</p>
              </div>
              <VerificationNote>{claimsPage.note}</VerificationNote>
            </aside>
          </div>
        </div>
      </section>

      <PageCta
        title="Need customer care instead?"
        primary={{ label: "Customer Care", href: "/customer-care" }}
        secondary={{ label: "Contact locations", href: "/contact-us" }}
      />
    </main>
  );
}
