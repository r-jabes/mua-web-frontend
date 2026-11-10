import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  image?: { src: string; alt: string };
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  image,
  primaryCta,
  secondaryCta,
}: Props) {
  return (
    <header className={`${styles.hero} ${image ? "" : styles.heroPlain}`}>
      {image ? (
        <>
          <div className={styles.heroMedia}>
            <Image src={image.src} alt={image.alt} fill priority sizes="100vw" />
          </div>
          <div className={styles.heroScrim} aria-hidden />
        </>
      ) : null}
      <div className={styles.heroInner}>
        {crumbs?.length ? (
          <ol className={styles.breadcrumb}>
            {crumbs.map((crumb, index) => (
              <li key={`${crumb.label}-${index}`}>
                {index > 0 ? (
                  <span className={styles.breadcrumbSep} aria-hidden>
                    /
                  </span>
                ) : null}
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        ) : null}
        {eyebrow ? <p className={styles.heroEyebrow}>{eyebrow}</p> : null}
        <h1 className={styles.heroTitle}>{title}</h1>
        {lead ? <p className={styles.heroLead}>{lead}</p> : null}
        {primaryCta || secondaryCta ? (
          <div className={styles.heroActions}>
            {primaryCta ? (
              <Button href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="ghost">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </header>
  );
}
