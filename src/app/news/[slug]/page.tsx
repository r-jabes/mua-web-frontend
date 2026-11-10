import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { getNews, newsArticles } from "@/content/news";
import { articleJsonLd, buildPageMetadata } from "@/lib/seo";
import styles from "@/components/page/page.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getNews(slug);
  if (!article) return { title: "News" };
  return buildPageMetadata({
    title: article.title,
    description: article.summary,
    path: `/news/${article.slug}`,
    image: article.image.src,
    type: "article",
  });
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getNews(slug);
  if (!article) notFound();

  return (
    <main id="main">
      <JsonLd
        data={articleJsonLd({
          title: article.title,
          description: article.summary,
          path: `/news/${article.slug}`,
          image: article.image.src,
          category: article.category,
        })}
      />
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

      <section className={`${styles.section} ${styles.sectionCompact}`}>
        <div className="container">
          <div className={styles.articleMedia}>
            <Image
              src={article.image.src}
              alt={article.image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 72rem"
              priority
            />
          </div>
          <article className={styles.prose}>
            {article.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
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
