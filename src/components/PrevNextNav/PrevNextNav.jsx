import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../Icons/Icons";
import styles from "./PrevNextNav.module.css";

export default function PrevNextNav({ prev, next, baseUrl }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {prev ? (
          <Link to={`${baseUrl}/${prev.slug}`} className={styles.linkPrev}>
            <span className={styles.label}>← Previous</span>
            <span className={styles.title}>{prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link to={`${baseUrl}/${next.slug}`} className={styles.linkNext}>
            <span className={styles.label}>Next →</span>
            <span className={styles.title}>{next.title}</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
