import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";

type Props = {
  title: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function PageCta({ title, primary, secondary }: Props) {
  return (
    <section className={styles.cta} aria-label={title}>
      <div className={styles.ctaInner}>
        <h2>{title}</h2>
        <div className={styles.ctaActions}>
          <Button href={primary.href} variant="primary">
            {primary.label}
          </Button>
          {secondary ? (
            <Button href={secondary.href} variant="ghost">
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
