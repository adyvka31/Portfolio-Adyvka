import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import LogoMark from "../LogoMark/LogoMark";
import { ArrowUpRightIcon, GithubIcon } from "../Icons/Icons"; // Pastikan GithubIcon tersedia
import { personalInfo } from "../../data/portfolio";
import styles from "./Navbar.module.css";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/achievements", label: "Achievements" },
  { to: "/certificates", label: "Certificates" },
];

const handlePrefetch = (path) => {
  switch (path) {
    case "/about":
      import("../../pages/AboutPage/AboutPage");
      break;
    case "/projects":
      import("../../pages/ProjectPage/ProjectsPage");
      break;
    case "/experience":
      import("../../pages/ExperiencePage/ExperiencePage");
      break;
    case "/achievements":
      import("../../pages/AchievementPage/AchievementsPage");
      break;
    case "/certificates":
      import("../../pages/CertificatePage/CertificatesPage");
      break;
    default:
      break;
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const location = useLocation();

  // Handle Scroll Transparency
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Body Scroll Lock ketika Modal / Menu terbuka
  useEffect(() => {
    if (menuOpen || cvOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen, cvOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <nav
          className={`${styles.nav} ${scrolled ? "glass" : styles.navTransparent}`}
        >
          <Link to="/" className={styles.brand} aria-label="Go to homepage">
            <LogoMark />
            <span className={styles.brandName}>{personalInfo.name}</span>
          </Link>

          <ul className={styles.links}>
            {NAV.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onMouseEnter={() => handlePrefetch(l.to)}
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
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
              aria-label="LinkedIn Profile"
            >
              LinkedIn <ArrowUpRightIcon />
            </a>
            <button
              onClick={() => setCvOpen(true)}
              className={`btn-primary ${styles.cta}`}
              aria-haspopup="dialog"
            >
              CV <ArrowUpRightIcon />
            </button>
            <button
              className={styles.burger}
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sheet */}
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
                  <NavLink
                    to={l.to}
                    className={styles.sheetLink}
                    onTouchStart={() => handlePrefetch(l.to)}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className={styles.sheetDivider}></li>

              {/* ✅ TAMBAHAN: LinkedIn Profile di atas GitHub Profile */}
              <li>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sheetLink}
                >
                  LinkedIn Profile <ArrowUpRightIcon size={16} />
                </a>
              </li>

              <li>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sheetLink}
                >
                  GitHub Profile <ArrowUpRightIcon size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* CV Modal */}
      {cvOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setCvOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <span>Curriculum Vitae</span>
              <div
                style={{ display: "flex", gap: "16px", alignItems: "center" }}
              >
                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.externalLink}
                >
                  Buka Penuh <ArrowUpRightIcon size={12} />
                </a>
                <button
                  className={styles.closeBtn}
                  onClick={() => setCvOpen(false)}
                  aria-label="Close CV Modal"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className={styles.iframeContainer}>
              <iframe
                src={`${personalInfo.cvUrl}#view=FitH&toolbar=1`}
                title="Curriculum Vitae"
                className={styles.pdfViewer}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
