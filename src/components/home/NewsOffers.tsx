"use client";

import Image from "next/image";
import Link from "next/link";
import { news } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/hooks/useReveal";
import styles from "./NewsOffers.module.css";

export function NewsOffers() {
  const ref = useReveal();

  return (
    <section className={styles.section} aria-labelledby="news-title">
      <div className="container reveal" ref={ref}>
        <header className={styles.header}>
          <div>
            <p className="eyebrow">News</p>
            <h2 id="news-title" className="section-title">
              Community, partners and company updates
            </h2>
          </div>
          <Link href="/news/blog">View all news →</Link>
        </header>
        <ul className={styles.list}>
          {news.map((item) => (
            <li className={styles.item} key={item.href}>
              <Link href={item.href}>
                <div className={styles.media}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <h3>{item.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.offers}>
          <Button href="/news/blog?tags=promotions" variant="text">
            Browse client offers →
          </Button>
        </div>
      </div>
    </section>
  );
}
