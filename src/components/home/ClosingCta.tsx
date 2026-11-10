"use client";

import { Button } from "@/components/ui/Button";
import { useReveal } from "@/hooks/useReveal";
import styles from "./ClosingCta.module.css";

export function ClosingCta() {
  const ref = useReveal();

  return (
    <section className={styles.section} aria-labelledby="close-title">
      <div className={`container ${styles.inner} reveal`} ref={ref}>
        <h2 id="close-title" className={styles.title}>
          Ready when you are — get a quote or start a claim
        </h2>
        <div className={styles.actions}>
          <Button href="/#quote" variant="primary">
            Get a quote
          </Button>
          <Button href="/make-a-claim" variant="ghost">
            Make a claim
          </Button>
        </div>
      </div>
    </section>
  );
}
