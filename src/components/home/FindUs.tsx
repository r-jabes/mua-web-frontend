"use client";

import { hq } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/hooks/useReveal";
import styles from "./FindUs.module.css";

export function FindUs() {
  const ref = useReveal();

  return (
    <section className={styles.section} aria-labelledby="find-title">
      <div className={`container ${styles.grid} reveal`} ref={ref}>
        <div>
          <p className="eyebrow">Locations</p>
          <h2 id="find-title" className="section-title">
            Find MUA across Rwanda
          </h2>
          <p className="section-lead">
            Whether you want to enquire about a product, update your details, make
            a claim or ask a question, there are many ways to reach our team.
          </p>
          <div className={styles.meta}>
            <p>
              <strong>{hq.name}</strong>
            </p>
            {hq.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>
              <a href={hq.phoneHref}>{hq.phone}</a>
            </p>
            <p>
              <a href={hq.emailHref}>{hq.email}</a>
            </p>
          </div>
          <p className={styles.note}>{hq.otherLocationsNote}</p>
          <div className={styles.actions}>
            <Button href="/contact-us" variant="secondary">
              View all locations
            </Button>
            <Button href={hq.phoneHref} variant="text">
              Call head office →
            </Button>
          </div>
        </div>
        <div className={styles.map} aria-label="Map placeholder for Kigali head office">
          <div>
            <strong>Grand Pension Plaza</strong>
            Interactive map loads on the Contact page to keep this homepage fast.
          </div>
        </div>
      </div>
    </section>
  );
}
