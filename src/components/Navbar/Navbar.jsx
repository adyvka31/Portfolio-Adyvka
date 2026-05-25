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

// ✅ 1. Buat fungsi helper untuk memanggil import() secara dinamis
const handlePrefetch = (path) => {
  switch (path) {
    case "/about":
      import("../../pages/AboutPage");
      break;
    case "/projects":
      import("../../pages/ProjectsPage");
      break;
    case "/experience":
      import("../../pages/ExperiencePage");
      break;
    case "/achievements":
      import("../../pages/AchievementsPage");
      break;
    case "/certificates":
      import("../../pages/CertificatesPage");
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    // ✅ 2. Tambahkan { passive: true } untuk performa scroll yang lebih mulus (Issue P1)
    window.addEventListener("scroll", onScroll, { passive: true });
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
                  // ✅ 3. Panggil handlePrefetch saat mouse hover ke link
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
                  <NavLink
                    to={l.to}
                    className={styles.sheetLink}
                    // ✅ (Opsional) Tambahkan juga di mobile, prefetch bisa tertrigger saat user menekan/menyentuh sebentar sebelum lepas
                    onTouchStart={() => handlePrefetch(l.to)}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* CV modal */}
      {/* CV modal */}
      {cvOpen && (
        <div className={styles.modalOverlay} onClick={() => setCvOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <span>Curriculum Vitae</span>

              {/* Kontainer Aksi di Kanan Header Modal */}
              <div
                style={{ display: "flex", gap: "16px", alignItems: "center" }}
              >
                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(255, 255, 255, 0.5)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255, 255, 255, 0.5)")
                  }
                >
                  Buka Penuh <ArrowUpRightIcon size={12} />
                </a>

                <button
                  className={styles.closeBtn}
                  onClick={() => setCvOpen(false)}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* ✅ Menggunakan <iframe> untuk menampilkan PDF langsung di dalam popup */}
            <iframe
              src={`${personalInfo.cvUrl}#view=FitH&toolbar=1`}
              title="Curriculum Vitae"
              className={styles.pdfViewer}
              style={{
                width: "100%",
                height: "65vh", // Mengunci tinggi agar pas di dalam frame modal dan responsif
                border: "none",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
