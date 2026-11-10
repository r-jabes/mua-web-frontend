import type { Metadata } from "next";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { StepsList } from "@/components/page/StepsList";
import { careers } from "@/content/company";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = {
  title: "Careers",
  description: careers.lead,
};

export default function CareersPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Careers"
        title={careers.title}
        lead={careers.lead}
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        primaryCta={{
          label: "View vacancies",
          href: careers.links[0].href,
        }}
        secondaryCta={{
          label: "Spontaneous application",
          href: careers.links[1].href,
        }}
      />

      <section className={`${styles.section} ${styles.sectionCompact}`}>
        <div className="container">
          <div className={styles.split}>
            <div>
              <div className={styles.sectionHeader}>
                <p className="eyebrow">Why MUA</p>
                <h2 className="section-title">Build a career in insurance</h2>
              </div>
              <div className={styles.prose}>
                <p>{careers.why}</p>
              </div>
            </div>
            <aside className={styles.rail}>
              <div>
                <h3>Application path</h3>
              </div>
              <StepsList steps={careers.steps} />
            </aside>
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to apply?"
        primary={{ label: "Vacancies on mua.rw", href: careers.links[0].href }}
        secondary={{
          label: "Spontaneous application",
          href: careers.links[1].href,
        }}
      />
    </main>
  );
}
