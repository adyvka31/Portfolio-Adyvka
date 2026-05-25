import { Link } from "react-router-dom";
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
        <div className="css-reveal">
          <div className={styles.eyebrow}>{eyebrow}</div>
        </div>

        <div className="css-reveal">
          <h2 className={`${styles.title} text-fade`}>
            {before}
            <span className={`font-serif ${styles.italic} text-glow`}>
              {italicWord}
            </span>
            {after}.
          </h2>
        </div>

        <div className="css-reveal">
          <p className={styles.description}>{description}</p>
        </div>

        <div className="css-reveal">
          <Link to="/#contact" className={`btn-primary ${styles.btn}`}>
            Get in touch <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
