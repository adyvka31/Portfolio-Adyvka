import Reveal from "../Reveal/Reveal";
import styles from "./CaseStudyBlock.module.css";

export default function CaseStudyBlock({ number, title, children, id }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <div className="css-reveal">
          <div className={styles.head}>
            <span className={styles.number}>{number}</span>
            <h2 className={styles.title}>{title}</h2>
          </div>
        </div>
        <div className="css-reveal" style={{ animationDelay: "0.06s" }}>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </section>
  );
}
