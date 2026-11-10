"use client";

import Link from "next/link";
import { whyMua } from "@/content/home";
import { useReveal } from "@/hooks/useReveal";
import styles from "./WhyMua.module.css";

const strengthHints = [
  "Serving Rwanda’s short-term insurance market since 2006.",
  "Connected to the wider MUA presence across East Africa.",
  "Focused on digital innovation and access to insurance.",
] as const;

export function WhyMua() {
  const introRef = useReveal();
  const journeyRef = useReveal();
  const strengthsRef = useReveal<HTMLUListElement>();

  return (
    <section id="company" className={styles.section} aria-labelledby="why-title">
      <div className={`container reveal ${styles.intro}`} ref={introRef}>
        <div>
          <p className="eyebrow">Company</p>
          <h2 id="why-title" className="section-title">
            Built on East African insurance heritage
          </h2>
          <p className={styles.overview}>{whyMua.overview}</p>
          <div className={styles.links}>
            <Link href="/about-us">About us →</Link>
            <Link href="/our-vision-and-purpose">Values & purpose →</Link>
            <Link href="/leadership">Leadership →</Link>
          </div>
        </div>
      </div>

      <div className={styles.journeyBand}>
        <div className={`container reveal ${styles.journey}`} ref={journeyRef}>
          <div className={styles.journeyHeader}>
            <p className="eyebrow">Heritage</p>
            <h3 className={styles.journeyTitle}>Our journey</h3>
          </div>
          <ol className={styles.timeline}>
            {whyMua.timeline.map((item, index) => (
              <li key={item.year}>
                <span className={styles.node} aria-hidden>
                  <span className={styles.nodeDot} />
                  {index < whyMua.timeline.length - 1 ? (
                    <span className={styles.nodeLine} />
                  ) : null}
                </span>
                <div className={styles.milestone}>
                  <span className={styles.year}>{item.year}</span>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="container">
        <ul className={`${styles.strengths} reveal`} ref={strengthsRef}>
          {whyMua.strengths.map((item, index) => (
            <li key={item}>
              <span className={styles.strengthIndex}>0{index + 1}</span>
              <strong>{item}</strong>
              <p>{strengthHints[index]}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
