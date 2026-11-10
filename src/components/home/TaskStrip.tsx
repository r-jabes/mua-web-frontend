"use client";

import { tasks } from "@/content/home";
import { useReveal } from "@/hooks/useReveal";
import styles from "./TaskStrip.module.css";

export function TaskStrip() {
  const ref = useReveal();

  return (
    <section className={styles.strip} aria-labelledby="tasks-title">
      <div className={`container reveal ${styles.intro}`} ref={ref}>
        <p className="eyebrow">Start here</p>
        <h2 id="tasks-title" className="section-title">
          What do you need to do?
        </h2>
      </div>
      <div className="container">
        <ul className={styles.list}>
          {tasks.map((task) => (
            <li className={styles.item} key={task.title}>
              <a href={task.href}>
                <p className={styles.title}>
                  {task.title} <span className={styles.arrow} aria-hidden>→</span>
                </p>
                <p className={styles.help}>{task.help}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
