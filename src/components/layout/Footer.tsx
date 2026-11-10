import Image from "next/image";
import Link from "next/link";
import { footer, hq, site } from "@/content/home";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Image
            className={styles.brandLogo}
            src="/brand/mua-logo.svg"
            alt="MUA Insurance Rwanda"
            width={140}
            height={44}
          />
          <p>
            {site.name} — short-term insurance for individuals and businesses,
            with a focus on practical cover and accessible service.
          </p>
        </div>

        <div className={styles.col}>
          <h2>Support</h2>
          <ul>
            {footer.support.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h2>Company</h2>
          <ul>
            {footer.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h2>Legal</h2>
          <ul>
            {footer.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.col} ${styles.contact}`}>
          <h2>Head Office</h2>
          {hq.addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p>
            <a href={hq.phoneHref}>{hq.phone}</a>
          </p>
          <p>
            <a href={hq.emailHref}>{hq.email}</a>
          </p>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© 2026 {site.name}. All rights reserved.</p>
        <div className={styles.social}>
          {footer.social.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.label} (opens in a new tab)`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
