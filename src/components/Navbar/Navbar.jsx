// src/components/Navbar/Navbar.jsx
import { useState, useEffect } from "react";
import LogoMark from "../LogoMark/LogoMark";
import { ArrowUpRightIcon } from "../Icons/Icons";
import { navLinks, personalInfo } from "../../data/portfolio";
import styles from "./Navbar.module.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  // 1. State untuk mengontrol popup CV
  const [isCVOpen, setIsCVOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk membuka/tutup modal
  const toggleCV = (e) => {
    e.preventDefault();
    setIsCVOpen(!isCVOpen);
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <nav
          className={`${styles.nav} ${scrolled ? "glass" : styles.navTransparent}`}
        >
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

          <div className={styles.actions}>
            <a
              href={personalInfo.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
            >
              Portfolio <ArrowUpRightIcon />
            </a>

            <button onClick={toggleCV} className={`btn-primary ${styles.cta}`}>
              Curiculum Vitae <ArrowUpRightIcon />
            </button>
          </div>
        </nav>
      </header>

      {/* MODAL DIPINDAHKAN KE SINI (DI LUAR HEADER) */}
      {isCVOpen && (
        <div className={styles.modalOverlay} onClick={toggleCV}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <span>Curriculum Vitae</span>
              <button className={styles.closeBtn} onClick={toggleCV}>
                ✕
              </button>
            </div>

            {/* Menggunakan <object> sebagai ganti <iframe> untuk kompabilitas PDF Viewer yang lebih baik */}
            <object
              data={`${personalInfo.cvUrl}#view=FitH&toolbar=1`}
              type="application/pdf"
              className={styles.pdfViewer}
            >
              <div
                style={{ padding: "2rem", textAlign: "center", color: "#fff" }}
              >
                <p>Browser Anda tidak mendukung pratinjau PDF.</p>
                <a
                  href={personalInfo.cvUrl}
                  download="CV_Rafif_Sava_Adyvka.pdf"
                  style={{
                    color: "var(--accent-glow)",
                    textDecoration: "underline",
                  }}
                >
                  Klik di sini untuk mengunduh CV.
                </a>
              </div>
            </object>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
