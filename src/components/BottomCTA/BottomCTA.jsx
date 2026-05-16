import { Link } from "react-router-dom";
import Reveal from "../Reveal/Reveal";
import { ArrowRightIcon } from "../Icons/Icons";
import styles from "./BottomCTA.module.css";

export default function BottomCTA({
  eyebrow = "What's next",
  title = "Let's build something",
  italicWord = "something",
  description = "Recruiting, contracting, or just curious — the inbox is open.",
}) {
  const [before, after] = title.split(italicWord);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.eyebrow}>{eyebrow}</div>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className={`${styles.title} text-fade`}>
            {before}
            <span className={`font-serif ${styles.italic} text-glow`}>
              {italicWord}
            </span>
            {after}.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className={styles.description}>{description}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <Link to="/#contact" className={`btn-primary ${styles.btn}`}>
            Get in touch <ArrowRightIcon />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
