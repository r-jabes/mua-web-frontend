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

export function HubCards({ items, columns = 3 }: Props) {
  return (
    <div className={columns === 2 ? styles.grid2 : styles.grid3}>
      {items.map((item) => (
        <Link key={item.href} href={item.href} className={styles.cardLink}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <span>Learn more →</span>
        </Link>
      ))}
    </div>
  );
}
