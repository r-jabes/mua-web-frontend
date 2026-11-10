import type { Metadata } from "next";
import { PageCta } from "@/components/page/PageCta";
import { PageHero } from "@/components/page/PageHero";
import { VerificationNote } from "@/components/page/VerificationNote";
import { customerCare } from "@/content/support";
import styles from "@/components/page/page.module.css";

export const metadata: Metadata = {
  title: "Customer Care",
  description: customerCare.lead,
};

export default function CustomerCarePage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Support"
        title={customerCare.title}
        lead={customerCare.lead}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Support", href: "/contact-us" },
          { label: "Customer Care" },
        ]}
        primaryCta={{
          label: "Email Customer Care",
          href: `mailto:${customerCare.complaintEmail}`,
        }}
      />

      <section className={`${styles.section} ${styles.sectionCompact}`}>
        <div className="container">
          <div className={styles.split}>
            <article className={styles.block}>
              <h3>Feedback</h3>
              <p>
                General feedback:{" "}
                <a href={`mailto:${customerCare.feedbackEmail}`}>
                  {customerCare.feedbackEmail}
                </a>
              </p>
              <p>
                Phone: <a href={customerCare.phoneHref}>{customerCare.phone}</a>
              </p>
              <p>{customerCare.philosophy}</p>
            </article>
            <aside className={styles.rail}>
              <div>
                <h3>Complaints</h3>
                <p>
                  Email:{" "}
                  <a href={`mailto:${customerCare.complaintEmail}`}>
                    {customerCare.complaintEmail}
                  </a>
                </p>
                <p>Include the following details when you write:</p>
                <ul className={styles.list}>
                  {customerCare.checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <VerificationNote>{customerCare.note}</VerificationNote>
            </aside>
          </div>
        </div>
      </section>

      <PageCta
        title="Making a claim?"
        primary={{ label: "Make a claim", href: "/make-a-claim" }}
        secondary={{ label: "Find a branch", href: "/contact-us" }}
      />
    </main>
  );
}
