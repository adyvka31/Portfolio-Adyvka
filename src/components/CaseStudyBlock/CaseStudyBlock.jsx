import Reveal from "../Reveal/Reveal";
import styles from "./CaseStudyBlock.module.css";

export default function CaseStudyBlock({ number, title, children, id }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.head}>
            <span className={styles.number}>{number}</span>
            <h2 className={styles.title}>{title}</h2>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className={styles.body}>{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
