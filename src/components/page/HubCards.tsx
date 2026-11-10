import Link from "next/link";
import styles from "./page.module.css";

export type HubItem = {
  title: string;
  description: string;
  href: string;
};

type Props = {
  items: readonly HubItem[];
  columns?: 2 | 3;
};

export function HubCards({ items }: Props) {
  return (
    <div className={styles.hubGrid}>
      {items.map((item) => (
        <Link key={item.href} href={item.href} className={styles.cardLink}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <span>Explore {item.title} →</span>
        </Link>
      ))}
    </div>
  );
}
