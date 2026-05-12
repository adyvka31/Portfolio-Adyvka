import styles from "./BannerLayout.module.css";

const BannerLayout = () => {
  return (
    <div className={styles.bannerSection}>
      <h1 className={styles.bannerTitle}>
        WEBSITE & <br /> APPLICATION <br /> DEVELOPER
      </h1>
      <div className={styles.bannerDivider}>
        {/* Bintang SVG di sini */}
        <span style={{ color: "var(--accent-yellow)", fontSize: "40px" }}>
          ★★★
        </span>
      </div>
      <p className={styles.bannerDesc}>
        Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang
        ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual
        seperti font, tipografi, dan tata letak.
      </p>
    </div>
  );
};

export default BannerLayout;
