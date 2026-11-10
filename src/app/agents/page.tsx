import type { Metadata } from "next";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { StepsList } from "@/components/page/StepsList";
import { VerificationNote } from "@/components/page/VerificationNote";
import { agentsPage } from "@/content/company";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = {
  title: "Agents and partners",
  description: agentsPage.lead,
};

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

      <section className={styles.section}>
        <div className="container">
          <div className={styles.split}>
            <div className={styles.prose}>
              <p>{agentsPage.body}</p>
              <ul className={styles.list}>
                {agentsPage.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <StepsList steps={agentsPage.how} />
          </div>
          <div style={{ marginTop: "var(--space-6)" }}>
            <VerificationNote tone="info">
              This page does not introduce an agent-management portal or proposed digital services that are
              not already published by MUA.
            </VerificationNote>
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
