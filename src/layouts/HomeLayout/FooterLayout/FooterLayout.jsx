import { Link } from "react-router-dom";
import LogoMark from "../../../components/LogoMark/LogoMark";
import { personalInfo } from "../../../data/portfolio";
import styles from "./FooterLayout.module.css";

export default function FooterLayout() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandWrapper}>
          <div className={styles.brand}>
            <LogoMark withDot={false} />
            <span className={styles.name}>{personalInfo.name}</span>
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} · Built with care in West Java,
            Indonesia
          </p>
        </div>

        {/* SENIOR FIX: Semantic Navigation Section */}
        <nav aria-label="Footer Navigation" className={styles.nav}>
          <ul className={styles.links}>
            <li>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="GitHub Profile"
              >
                github
              </a>
            </li>
            <li>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="LinkedIn Profile"
              >
                linkedin
              </a>
            </li>
            <li>
              <a
                href={personalInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="YouTube Channel"
              >
                youtube
              </a>
            </li>
            <li>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="Instagram Profile"
              >
                instagram
              </a>
            </li>
            <li>
              <a
                href={personalInfo.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="TikTok Profile"
              >
                tiktok
              </a>
            </li>
            <li>
              <Link to="/contact" className={styles.link}>
                contact
              </Link>
            </li>

            {/* SENIOR FIX: Pisahkan status agar secara hierarki setara */}
            <li
              className={styles.status}
              aria-label="Current status: Available for work"
            >
              <span className={`${styles.dot} pulse-dot`} aria-hidden="true" />
              available
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
