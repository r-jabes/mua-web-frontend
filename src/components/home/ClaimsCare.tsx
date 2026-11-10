"use client";

import Link from "next/link";
import { claims } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/hooks/useReveal";
import styles from "./ClaimsCare.module.css";

export function ClaimsCare() {
  const ref = useReveal();

  return (
    <section id="support" className={styles.section} aria-labelledby="claims-title">
      <div className={`container ${styles.grid} reveal`} ref={ref}>
        <div>
          <p className="eyebrow">Claims</p>
          <h2 id="claims-title" className="section-title">
            {claims.title}
          </h2>
          <p className="section-lead">{claims.body}</p>
          <div className={styles.contacts}>
            <p className={styles.phone}>
              <a href={claims.phoneHref}>{claims.phone}</a>
            </p>
            <p className={styles.email}>
              <a href={claims.emailHref}>{claims.email}</a>
            </p>
          </div>
          <div className={styles.actions}>
            <Button href={claims.primaryCta.href} variant="primary">
              {claims.primaryCta.label}
            </Button>
            <Button href={claims.careHref} variant="text">
              Customer Care →
            </Button>
          </div>
        </div>
        <aside className={styles.aside}>
          <h3>Customer Care</h3>
          <p>{claims.careNote}</p>
          <p>{claims.rescueNote}</p>
          <Link href={claims.careHref}>Read Customer Care →</Link>
        </aside>
      </div>
    </section>
  );
}
