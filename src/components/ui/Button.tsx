import Link from "next/link";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost" | "text";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
};

function isExternal(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  fullWidth,
  onClick,
}: Props) {
  const classes = [
    styles.btn,
    styles[variant],
    fullWidth ? styles.full : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const hashOrExternal =
    href.startsWith("#") || href.startsWith("/#") || isExternal(href);

  if (hashOrExternal) {
    const externalHttp = href.startsWith("http://") || href.startsWith("https://");
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(externalHttp
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
