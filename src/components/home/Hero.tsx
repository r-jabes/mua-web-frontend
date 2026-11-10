import Image from "next/image";
import { hero } from "@/content/home";
import { Button } from "@/components/ui/Button";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media}>
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.scrim} aria-hidden />
      <div className={styles.content}>
        <p className={styles.brandMark}>MUA Insurance Rwanda</p>
        <h1 id="hero-title" className={styles.title}>
          {hero.headline}
        </h1>
        <p className={styles.support}>{hero.support}</p>
        <div className={styles.rule} aria-hidden />
        <div className={styles.actions}>
          <Button href={hero.primaryCta.href} variant="primary">
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="ghost">
            {hero.secondaryCta.label}
          </Button>
        </div>
      </div>
      <div className={styles.edge} aria-hidden />
    </section>
  );
}
