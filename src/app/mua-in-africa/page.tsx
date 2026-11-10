import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { africa } from "@/content/company";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: "MUA in Africa",
  description: africa.lead,
  path: "/mua-in-africa",
});

export default function AfricaPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Company"
        title={africa.title}
        lead={africa.lead}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/about-us" },
          { label: "MUA in Africa" },
        ]}
        image={{ src: "/images/news-2.jpg", alt: "MUA across Africa" }}
      />

      <section className={`${styles.section} ${styles.sectionCompact}`}>
        <div className="container">
          <div className={styles.prose}>
            <p>{africa.narrative}</p>
          </div>
          <div className={`${styles.grid3} ${styles.stackGap}`}>
            {africa.countries.map((country) => (
              <div className={styles.block} key={country}>
                <h3>{country}</h3>
                <p>Part of MUA’s regional presence.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Prefer Rwanda contact details?"
        primary={{ label: "Contact us", href: "/contact-us" }}
        secondary={{ label: "About MUA Rwanda", href: "/about-us" }}
      />
    </main>
  );
}
