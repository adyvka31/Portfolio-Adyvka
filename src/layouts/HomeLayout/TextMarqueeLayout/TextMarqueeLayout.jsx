import NativeReveal from "../../../components/Reveal/NativeReveal"; // ✅ Import NativeReveal
import { marqueeStack } from "../../../data/portfolio";
import styles from "./TextMarqueeLayout.module.css";

function TextMarqueeLayout() {
  const renderTrack = (ariaHidden = false) => (
    <div className={styles.track} aria-hidden={ariaHidden || undefined}>
      {marqueeStack.map((item, idx) => (
        <span key={`${item}-${idx}`} className={styles.row}>
          <span className={styles.itemText}>{item}</span>
          <span className={styles.bullet} aria-hidden="true">
            ◆
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <section
      id="trusted"
      className={styles.section}
      aria-label="Tools and Technologies"
    >
      <NativeReveal className="reveal-slide-up">
        <h2 className={styles.caption}>Tools I build with daily</h2>
      </NativeReveal>

      {/* ✅ Bungkus viewport dengan NativeReveal agar muncul meluncur ke atas */}
      <NativeReveal
        delay={0.2}
        className="reveal-slide-up"
        style={{ width: "100%" }}
      >
        <div className={styles.viewport}>
          {/* Fades untuk efek vignette kiri dan kanan */}
          <div
            className={`${styles.fade} ${styles.fadeLeft}`}
            aria-hidden="true"
          />
          <div
            className={`${styles.fade} ${styles.fadeRight}`}
            aria-hidden="true"
          />

          <div className={`${styles.marquee} marquee-track`}>
            {renderTrack(false)}
            {renderTrack(true)}
          </div>
        </div>
      </NativeReveal>
    </section>
  );
}

export default TextMarqueeLayout;
