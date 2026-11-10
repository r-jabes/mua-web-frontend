"use client";

import Link from "next/link";
import { quoteOptions } from "@/content/home";
import { useReveal } from "@/hooks/useReveal";
import styles from "./QuotePanel.module.css";

export function QuotePanel() {
  const ref = useReveal();

  return (
    <section id="quote" className={styles.section} aria-labelledby="quote-title">
      <div className="container reveal" ref={ref}>
        <p className="eyebrow">Get a quote</p>
        <h2 id="quote-title" className="section-title">
          Choose the cover you need
        </h2>
        <p className="section-lead">
          Select a product family to continue. Our team will follow up with the
          information you need to protect what matters.
        </p>
        <div className={styles.grid}>
          {quoteOptions.map((option) => (
            <Link className={styles.option} key={option.id} href={option.href}>
              {option.label}
              <span aria-hidden>→</span>
            </Link>
          ))}
        </div>
        <p className={styles.note}>
          Looking for another type of cover?{" "}
          <a href="/contact-us">Contact our team</a> and we will guide you.
        </p>
      </div>
    </section>
  );
}
