import Link from "next/link";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { VerificationNote } from "@/components/page/VerificationNote";
import type { ProductPage } from "@/content/products";
import styles from "./page.module.css";

export function ProductView({ product }: { product: ProductPage }) {
  return (
    <main id="main">
      <PageHero
        eyebrow={product.eyebrow}
        title={product.title}
        lead={product.summary}
        crumbs={product.crumbs}
        image={product.image}
        primaryCta={{ label: "Get a quote", href: "/#quote" }}
        secondaryCta={{ label: "Make a claim", href: "/make-a-claim" }}
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.split}>
            <div>
              {product.designedFor ? (
                <div className={styles.sectionHeader}>
                  <p className="eyebrow">Who it is for</p>
                  <h2 className="section-title">Designed for</h2>
                  <p className="section-lead">{product.designedFor}</p>
                </div>
              ) : null}

              <div className={styles.grid2}>
                {product.covers.map((cover) => (
                  <article className={styles.block} key={cover.title}>
                    <h3>{cover.title}</h3>
                    {cover.body ? <p>{cover.body}</p> : null}
                    {cover.items?.length ? (
                      <ul className={styles.list}>
                        {cover.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>

            <aside className={styles.grid2} style={{ gridTemplateColumns: "1fr" }}>
              {product.benefits?.length ? (
                <div className={styles.block}>
                  <h3>Key benefits</h3>
                  <ul className={styles.list}>
                    {product.benefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className={styles.block}>
                <h3>How to obtain cover</h3>
                <ul className={styles.list}>
                  {product.howToObtain.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {product.notes?.map((note) => (
                <VerificationNote key={note.text} tone={note.kind}>
                  {note.text}
                </VerificationNote>
              ))}
            </aside>
          </div>

          {product.related?.length ? (
            <div style={{ marginTop: "var(--space-7)" }}>
              <p className="eyebrow">Related</p>
              <h2 className="section-title" style={{ marginBottom: "var(--space-4)" }}>
                Explore related covers
              </h2>
              <div className={styles.related}>
                {product.related.map((item) => (
                  <Link key={item.href} href={item.href} className={styles.cardLink}>
                    <h3>{item.label}</h3>
                    <span>View →</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <PageCta
        title="Ready to protect what matters?"
        primary={{ label: "Get a quote", href: "/#quote" }}
        secondary={{ label: "Contact us", href: "/contact-us" }}
      />
    </main>
  );
}
