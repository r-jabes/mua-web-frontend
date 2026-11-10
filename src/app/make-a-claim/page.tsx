import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { StepsList } from "@/components/page/StepsList";
import { claimsPage } from "@/content/support";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: "Make a claim",
  description: claimsPage.lead,
  path: "/make-a-claim",
});

export default function ClaimsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Claims"
        title={claimsPage.title}
        lead={claimsPage.lead}
        crumbs={[{ label: "Home", href: "/" }, { label: "Claims" }]}
        primaryCta={{ label: "Open claim form", href: claimsPage.formHref }}
        secondaryCta={{ label: "Call claims", href: claimsPage.phoneHref }}
      />

      <section className={`${styles.section} ${styles.sectionCompact}`}>
        <div className="container">
          <div className={styles.split}>
            <div>
              <div className={styles.sectionHeader}>
                <p className="eyebrow">Process</p>
                <h2 className="section-title">How claiming works</h2>
                <p className="section-lead">
                  Follow these steps to prepare your claim, then submit online or speak with our
                  claims team.
                </p>
              </div>
              <StepsList steps={claimsPage.steps} />
            </div>
            <aside className={styles.rail}>
              <div>
                <h3>Claims contacts</h3>
                <p>
                  Phone: <a href={claimsPage.phoneHref}>{claimsPage.phone}</a>
                </p>
                <p>
                  Email: <a href={claimsPage.emailHref}>{claimsPage.email}</a>
                </p>
              </div>
              <div>
                <h3>Uploads</h3>
                <p>{claimsPage.uploadNote}</p>
              </div>
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
