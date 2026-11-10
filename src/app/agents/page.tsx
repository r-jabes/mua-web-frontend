import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { StepsList } from "@/components/page/StepsList";
import { agentsPage } from "@/content/company";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: "Agents and partners",
  description: agentsPage.lead,
  path: "/agents",
});

export default function AgentsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Distribution"
        title={agentsPage.title}
        lead={agentsPage.lead}
        crumbs={[{ label: "Home", href: "/" }, { label: "Agents & partners" }]}
        image={{ src: "/images/news-1.jpg", alt: "MUA agents and partners" }}
        primaryCta={{ label: "Contact MUA", href: "/contact-us" }}
        secondaryCta={{
          label: "Loyalty scheme news",
          href: "/news/mua-agents-and-franchisee-loyalty-scheme-program",
        }}
      />

      <section className={`${styles.section} ${styles.sectionCompact}`}>
        <div className="container">
          <div className={styles.split}>
            <div>
              <div className={styles.sectionHeader}>
                <p className="eyebrow">Opportunity</p>
                <h2 className="section-title">Grow with MUA Rwanda</h2>
              </div>
              <div className={styles.prose}>
                <p>{agentsPage.body}</p>
              </div>
              <ul className={styles.list}>
                {agentsPage.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <aside className={styles.rail}>
              <div>
                <h3>How to get started</h3>
              </div>
              <StepsList steps={agentsPage.how} />
            </aside>
          </div>
        </div>
      </section>

      <PageCta
        title="Become an agent or franchisee"
        primary={{ label: "Contact Head Office", href: "/contact-us" }}
        secondary={{ label: "Browse products", href: "/personal" }}
      />
    </main>
  );
}
