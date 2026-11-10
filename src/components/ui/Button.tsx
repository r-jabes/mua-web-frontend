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

  const isHash = href.startsWith("#") || href.startsWith("/#");

  if (isHash) {
    return (
      <a href={href} className={classes} onClick={onClick}>
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
