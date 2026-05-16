import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import LogoMark from "../LogoMark/LogoMark";
import { ArrowUpRightIcon } from "../Icons/Icons";
import { personalInfo } from "../../data/portfolio";
import styles from "./Navbar.module.css";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/achievements", label: "Achievements" },
  { to: "/certificates", label: "Certificates" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <nav
          className={`${styles.nav} ${scrolled ? "glass" : styles.navTransparent}`}
        >
          <Link to="/" className={styles.brand}>
            <LogoMark />
            <span className={styles.brandName}>{personalInfo.name}</span>
          </Link>

          <ul className={styles.links}>
            {NAV.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `nav-link ${styles.link} ${isActive ? styles.linkActive : ""}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
            >
              GitHub <ArrowUpRightIcon />
            </a>
            <button
              onClick={() => setCvOpen(true)}
              className={`btn-primary ${styles.cta}`}
            >
              CV <ArrowUpRightIcon />
            </button>
            <button
              className={styles.burger}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile sheet */}
      {menuOpen && (
        <div className={styles.sheet} onClick={() => setMenuOpen(false)}>
          <div
            className={styles.sheetInner}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.sheetClose}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            <ul className={styles.sheetLinks}>
              {NAV.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} className={styles.sheetLink}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* CV modal */}
      {cvOpen && (
        <div className={styles.modalOverlay} onClick={() => setCvOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <span>Curriculum Vitae</span>
              <button
                className={styles.closeBtn}
                onClick={() => setCvOpen(false)}
              >
                ✕
              </button>
            </div>
            <object
              data={`${personalInfo.cvUrl}#view=FitH&toolbar=1`}
              type="application/pdf"
              className={styles.pdfViewer}
            />
          </div>
        </div>
      )}
    </>
  );
}
