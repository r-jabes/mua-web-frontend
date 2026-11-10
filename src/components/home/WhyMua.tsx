"use client";

import Link from "next/link";
import { whyMua } from "@/content/home";
import { useReveal } from "@/hooks/useReveal";
import styles from "./WhyMua.module.css";

export function WhyMua() {
  const ref = useReveal();

  return (
    <section id="company" className={styles.section} aria-labelledby="why-title">
      <div className={`container reveal ${styles.grid}`} ref={ref}>
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
        <ol className={styles.timeline}>
          {whyMua.timeline.map((item) => (
            <li key={item.year}>
              <span className={styles.year}>{item.year}</span>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="container">
        <ul className={styles.strengths}>
          {whyMua.strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
