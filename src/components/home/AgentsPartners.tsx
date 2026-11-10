"use client";

import { agentsPartners } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/hooks/useReveal";
import styles from "./AgentsPartners.module.css";

export function AgentsPartners() {
  const ref = useReveal();

  return (
    <section className={styles.section} aria-labelledby="agents-title">
      <div className={`container ${styles.inner} reveal`} ref={ref}>
        <div>
          <p className="eyebrow">Partners</p>
          <h2 id="agents-title" className="section-title">
            {agentsPartners.title}
          </h2>
          <p className="section-lead">{agentsPartners.body}</p>
          <ul className={styles.points}>
            {agentsPartners.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className={styles.actions}>
            <Button href={agentsPartners.primaryCta.href} variant="secondary">
              {agentsPartners.primaryCta.label}
            </Button>
            <Button href={agentsPartners.secondaryCta.href} variant="text">
              {agentsPartners.secondaryCta.label} →
            </Button>
          </div>
        </div>
        <div className={styles.panel}>
          <h3>Grow with MUA Rwanda</h3>
          <p>
            Whether you are an agent or franchisee, our team can help you support
            customers with motor, household, travel and business covers.
          </p>
        </div>
      </div>
    </section>
  );
}
