import LogoMark from "../LogoMark/LogoMark";
import { ArrowUpRightIcon } from "../Icons/Icons";
import { navLinks, personalInfo } from "../../data/portfolio";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} glass`}>
        <a href="#top" className={styles.brand}>
          <LogoMark />
          <span className={styles.brandName}>{personalInfo.name}</span>
        </a>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className={`nav-link ${styles.link}`} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={`btn-primary ${styles.cta}`}>
          Get in touch
          <ArrowUpRightIcon />
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
