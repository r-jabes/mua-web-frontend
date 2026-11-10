import styles from "./page.module.css";

type Step = { title: string; body: string };

export function StepsList({ steps }: { steps: readonly Step[] }) {
  return (
    <ol className={styles.steps}>
      {steps.map((step, index) => (
        <li className={styles.step} key={step.title}>
          <span className={styles.stepIndex} aria-hidden>
            {index + 1}
          </span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
