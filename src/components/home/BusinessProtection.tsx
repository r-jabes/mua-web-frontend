"use client";

import Image from "next/image";
import Link from "next/link";
import { businessFamilies } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/hooks/useReveal";
import styles from "./BusinessProtection.module.css";

export function BusinessProtection() {
  const ref = useReveal();

  return (
    <section id="business" className={styles.section} aria-labelledby="business-title">
      <div className={`container-wide ${styles.grid} reveal`} ref={ref}>
        <div className={styles.copy}>
          <p className="eyebrow">Business</p>
          <h2 id="business-title" className="section-title">
            Cover built for enterprises and institutions
          </h2>
          <p className="section-lead">
            From liability and property to transport and special financial risks —
            explore the business families published on MUA Rwanda.
          </p>
          <ul className={styles.list}>
            {businessFamilies.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.cta}>
            <Button href="/#quote" variant="primary">
              Get a business quote
            </Button>
          </div>
        </div>
        <aside className={styles.mediaRail}>
          <div className={styles.media}>
            <Image
              src="/images/news-1.jpg"
              alt="Business and commercial insurance context"
              fill
              sizes="(max-width: 960px) 100vw, 42vw"
            />
            <div className={styles.mediaCaption}>
              <p>Business protection</p>
              <span>Liability · Property · Motor · Transport</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
