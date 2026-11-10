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

      <section className={styles.section}>
        <div className="container">
          <div className={styles.split}>
            <div className={styles.prose}>
              <p className="eyebrow">Why MUA</p>
              <h2 className="section-title">Build a career in insurance</h2>
              <p>{careers.why}</p>
            </div>
            <StepsList steps={careers.steps} />
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
