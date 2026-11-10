import styles from "./page.module.css";

type Props = {
  children: React.ReactNode;
  tone?: "verify" | "info";
};

export function VerificationNote({ children, tone = "verify" }: Props) {
  return (
    <aside
      className={`${styles.note} ${tone === "info" ? styles.infoNote : ""}`}
      role="note"
    >
      {tone === "verify" ? <strong>Needs MUA confirmation. </strong> : null}
      {children}
    </aside>
  );
}
