"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { nav } from "@/content/home";
import { Button } from "@/components/ui/Button";
import styles from "./Header.module.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="MUA Insurance Rwanda home">
          <Image
            src="/brand/mua-logo.svg"
            alt="MUA Insurance Rwanda"
            width={140}
            height={44}
            priority
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {nav.primary.map((item) => {
            const hasChildren = "children" in item && item.children;
            if (!hasChildren) {
              return (
                <div className={styles.item} key={item.label}>
                  <Link className={styles.link} href={item.href}>
                    {item.label}
                  </Link>
                </div>
              );
            }

            const expanded = openMenu === item.label;
            return (
              <div
                className={styles.item}
                key={item.label}
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
                onFocusCapture={() => setOpenMenu(item.label)}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                    setOpenMenu(null);
                  }
                }}
              >
                <button
                  type="button"
                  className={styles.trigger}
                  aria-expanded={expanded}
                  aria-haspopup="true"
                  aria-controls={`${menuId}-${item.label}`}
                  onClick={() =>
                    setOpenMenu((current) =>
                      current === item.label ? null : item.label,
                    )
                  }
                >
                  {item.label}
                  <span className={styles.chevron} aria-hidden />
                </button>
                {expanded ? (
                  <div
                    className={styles.panel}
                    id={`${menuId}-${item.label}`}
                    role="menu"
                    aria-label={`${item.label} menu`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className={styles.utility}>
          <Button href={nav.utility.contact.href} variant="text">
            {nav.utility.contact.label}
          </Button>
          <Button href={nav.utility.quote.href} variant="primary">
            {nav.utility.quote.label}
          </Button>
        </div>

        <div className={styles.menuSlot}>
          <button
            type="button"
            className={styles.menuBtn}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <span />
          </button>
        </div>
      </div>

    </header>
      {mounted && mobileOpen
        ? createPortal(
            <div
              className={`${styles.drawer} ${styles.drawerOpen}`}
              onClick={(e) => {
                if (e.target === e.currentTarget) setMobileOpen(false);
              }}
            >
              <div className={styles.drawerPanel}>
                <div
                  className={styles.sheet}
                  role="dialog"
                  aria-modal="true"
                  aria-label="Mobile menu"
                >
                  <div className={styles.sheetTop}>
                    <Image
                      src="/brand/mua-logo.svg"
                      alt=""
                      width={120}
                      height={38}
                    />
                    <button
                      type="button"
                      className={styles.close}
                      aria-label="Close menu"
                      onClick={() => setMobileOpen(false)}
                    >
                      ×
                    </button>
                  </div>

                  <div className={styles.mobileNav}>
                    {nav.primary.map((item) => {
                      const hasChildren = "children" in item && item.children;
                      if (!hasChildren) {
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        );
                      }
                      return (
                        <details key={item.label}>
                          <summary>
                            {item.label}
                            <span className={styles.mobileChevron} aria-hidden />
                          </summary>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </details>
                      );
                    })}
                  </div>

                  <div className={styles.mobilePins}>
                    <Button
                      href={nav.utility.quote.href}
                      variant="primary"
                      fullWidth
                      onClick={() => setMobileOpen(false)}
                    >
                      Get a quote
                    </Button>
                    <Button
                      href="/make-a-claim"
                      variant="secondary"
                      fullWidth
                      onClick={() => setMobileOpen(false)}
                    >
                      Make a claim
                    </Button>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
