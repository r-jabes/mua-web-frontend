"use client";

import Image from "next/image";
import Link from "next/link";
import { personalProducts } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/hooks/useReveal";
import styles from "./PersonalProtection.module.css";

function Chapter({
  product,
}: {
  product: (typeof personalProducts)[number];
}) {
  return (
    <article className={styles.chapter}>
      <div className={styles.media}>
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(max-width: 960px) 100vw, 55vw"
        />
      </div>
      <div className={styles.copy}>
        <h3>{product.title}</h3>
        <p>{product.summary}</p>
        <ul className={styles.points}>
          {product.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        {product.links.length > 1 ? (
          <ul className={styles.sublinks}>
            {product.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        ) : null}
        <div className={styles.actions}>
          <Button href={product.links[0].href} variant="secondary">
            Learn more
          </Button>
          <Button href="/#quote" variant="text">
            Get a quote →
          </Button>
        </div>
      </div>
    </article>
  );
}

export function PersonalProtection() {
  const headerRef = useReveal<HTMLElement>();

  return (
    <section id="personal" className={styles.section} aria-labelledby="personal-title">
      <div className="container">
        <header className={`${styles.header} reveal`} ref={headerRef}>
          <p className="eyebrow">Personal</p>
          <h2 id="personal-title" className="section-title">
            Protect what matters at home and on the move
          </h2>
          <p className="section-lead">
            Explore confirmed personal covers published by MUA Insurance Rwanda —
            motor, domestic package and travel.
          </p>
        </header>

        {personalProducts.map((product) => (
          <Chapter key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
