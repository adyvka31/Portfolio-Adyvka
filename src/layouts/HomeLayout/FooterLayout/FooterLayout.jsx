import styles from "./FooterLayout.module.css";

const FooterLayout = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContent}>
        <div className={styles.FooterTop}>
          <div className={styles.footerName}>
            <h1>Rafif Sava</h1>
            <span className={styles.icon}>✦</span>
            <span className={styles.icon}>✦</span>
          </div>
          <div className={styles.footerName}>
            <h1>Adyvka Pratama</h1>
            <span className={styles.icon}>✦</span>
            <span className={styles.icon}>✦</span>
          </div>
        </div>

        <div className={styles.footerDivider}></div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            Copyright © 2025{" "}
            <span className={styles.bold}>Rafif Sava Adyvka Pratama</span>
          </p>
          <nav>
            <ul className={styles.footerNav}>
              <li>Project</li>
              <li>Experience</li>
              <li>Achievement</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Floating Card & Buttons */}
      <div className={styles.floatingCard}>
        <img
          src="/Image/erasebg-transformed 3.png"
          alt="Rafif"
          className={styles.footerImg}
        />

        <div className={styles.floatingButtons}>
          <button className={styles.btnWork}>Let's Work Together</button>
          <button className={styles.btnAbout}>Know More About Me</button>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
