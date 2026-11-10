import Link from "next/link";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
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

      <section className={`${styles.section} ${styles.sectionCompact}`}>
        <div className="container">
          <div className={styles.split}>
            <div>
              {product.designedFor ? (
                <div className={styles.sectionHeader}>
                  <p className="eyebrow">Who it is for</p>
                  <h2 className="section-title">Designed for</h2>
                  <p className="section-lead">{product.designedFor}</p>
                </div>
              ) : (
                <div className={styles.sectionHeader}>
                  <p className="eyebrow">Cover detail</p>
                  <h2 className="section-title">What this cover includes</h2>
                </div>
              )}

              <div className={styles.coverStack}>
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

            <aside className={styles.rail}>
              {product.benefits?.length ? (
                <div>
                  <h3>Key benefits</h3>
                  <ul className={styles.list}>
                    {product.benefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div>
                <h3>How to obtain cover</h3>
                <ul className={styles.list}>
                  {product.howToObtain.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          {product.related?.length ? (
            <div className={styles.stackGap}>
              <p className="eyebrow">Related</p>
              <h2 className="section-title">Explore related covers</h2>
              <div className={styles.related}>
                {product.related.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
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
