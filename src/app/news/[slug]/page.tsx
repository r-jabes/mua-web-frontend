import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { getNews, newsArticles } from "@/content/news";
import styles from "@/components/page/page.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getNews(slug);
  if (!article) return { title: "News" };
  return { title: article.title, description: article.summary };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getNews(slug);
  if (!article) notFound();

  return (
    <main id="main">
      <PageHero
        eyebrow={article.category}
        title={article.title}
        lead={article.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news/blog" },
          { label: "Article" },
        ]}
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.split}>
            <div className={styles.prose}>
              {article.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className={styles.newsMedia} style={{ minHeight: "16rem" }}>
              <Image
                src={article.image.src}
                alt={article.image.alt}
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      <PageCta
        title="More updates"
        primary={{ label: "All news", href: "/news/blog" }}
        secondary={{ label: "Contact us", href: "/contact-us" }}
      />
    </main>
  );
}
