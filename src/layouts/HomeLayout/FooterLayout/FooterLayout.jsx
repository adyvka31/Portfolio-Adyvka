import LogoMark from "../../../components/LogoMark/LogoMark";
import { personalInfo } from "../../../data/portfolio";
import styles from "./FooterLayout.module.css";

export default function FooterLayout() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <div className={styles.brand}>
            <LogoMark withDot={false} />
            <span className={styles.name}>{personalInfo.name}</span>
          </div>
          <p className={styles.copyright}>
            © 2026 · Built with care in West Java, Indonesia
          </p>
        </div>
        <div className={styles.links}>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            github
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            linkedin
          </a>
          <a href="#contact" className={styles.link}>
            contact
          </a>
          <span className={styles.status}>
            <span className={`${styles.dot} pulse-dot`}></span>
            available
          </span>
        </div>
      </div>
    </footer>
  );
}
