import type { Metadata } from "next";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { VerificationNote } from "@/components/page/VerificationNote";
import { socialPurpose } from "@/content/company";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = {
  title: "Social purpose",
  description: socialPurpose.lead,
};

export default function SocialPurposePage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Company"
        title={socialPurpose.title}
        lead={socialPurpose.lead}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/about-us" },
          { label: "Social purpose" },
        ]}
      />

      <section className={`${styles.section} ${styles.sectionCompact}`}>
        <div className="container">
          <div className={styles.prose}>
            <p>{socialPurpose.body}</p>
            <p>{socialPurpose.local}</p>
          </div>
          <div className={styles.noteStack}>
            <VerificationNote>{socialPurpose.note}</VerificationNote>
          </div>
        </div>
      </section>

      <PageCta
        title="See Rwanda community updates"
        primary={{ label: "News", href: "/news/blog" }}
        secondary={{ label: "About us", href: "/about-us" }}
      />
    </main>
  );
}
