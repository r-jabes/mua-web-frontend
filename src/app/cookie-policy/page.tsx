import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { legal } from "@/content/support";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: legal.cookies.title,
  description: legal.cookies.lead,
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Legal"
        title={legal.cookies.title}
        lead={legal.cookies.lead}
        crumbs={[{ label: "Home", href: "/" }, { label: "Cookie policy" }]}
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.prose}>
            <p>{legal.cookies.body}</p>
          </div>
        </div>
      </section>

      <PageCta
        title="Related legal information"
        primary={{ label: "Data protection", href: "/data-protection" }}
        secondary={{ label: "Privacy", href: "/privacy" }}
      />
    </main>
  );
}
