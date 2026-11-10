import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { newsArticles } from "@/content/news";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: "News",
  description: "Community, partners and company updates from MUA Insurance Rwanda.",
  path: "/news/blog",
});

export default function NewsIndexPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="News"
        title="Community, partners and company updates"
        lead="Community, partner and company updates from MUA Insurance Rwanda."
        crumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.newsList}>
            {newsArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className={styles.newsCard}
              >
                <div className={styles.newsMedia}>
                  <Image
                    src={article.image.src}
                    alt={article.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="eyebrow">{article.category}</p>
                <h3>{article.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Looking for product help?"
        primary={{ label: "Get a quote", href: "/#quote" }}
        secondary={{ label: "Contact us", href: "/contact-us" }}
      />
    </main>
  );
}
