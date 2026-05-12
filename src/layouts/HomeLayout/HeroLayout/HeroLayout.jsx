import styles from "./HeroLayout.module.css";

const HeroLayout = () => {
  return (
    <header className={styles.heroSection}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li>
            <a className={styles.navItem + " " + styles.active} href="/">
              HOME
            </a>
          </li>
          <li>
            <a className={styles.navItem} href="#project">
              PROJECT
            </a>
          </li>
          <li>
            <a className={styles.navItem} href="#experience">
              EXPERIENCE
            </a>
          </li>
          <li>
            <a className={styles.navItem} href="#achievement">
              ACHIEVEMENT
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.heroMarqueeBg}>
        <div className={styles.marqueeSlide}>
          <h1>ADYVKA PRATAMA</h1>
          <h1>ADYVKA PRATAMA</h1>
          <h1>ADYVKA PRATAMA</h1>
        </div>
      </div>

      <div className={styles.heroMainContent}>
        <img
          src="/assets/erasebg-transformed (1).png"
          alt="Hero Background"
          className={styles.heroImg}
        />
        <h1 className={styles.heroTitle}>
          <span className={styles.textLine}>RAFIF</span>
          <br />
          <span className={styles.textLine + " " + styles.indent1}>
            SAVA
          </span>
          <br />
          <span className={styles.textLine + " " + styles.indent2}>
            ADYVKA
          </span>
          <br />
          <span
            className={
              styles.textLine +
              " " +
              styles.indent1 +
              " " +
              styles.mobileHide
            }
          >
            PRATAMA
          </span>
        </h1>
      </div>
    </header>
  );
};

export default HeroLayout;
