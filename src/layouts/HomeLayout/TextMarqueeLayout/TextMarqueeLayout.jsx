import { marqueeStack } from "../../../data/portfolio";
import styles from "./TextMarqueeLayout.module.css";

function TextMarqueeLayout() {
  const renderTrack = (ariaHidden = false) => (
    <div className={styles.track} aria-hidden={ariaHidden || undefined}>
      {marqueeStack.map((item, idx) => (
        <span key={`${item}-${idx}`} className={styles.row}>
          <span>{item}</span>
          <span className={styles.bullet}>·</span>
        </span>
      ))}
    </div>
  );

  return (
    <section id="trusted" className={styles.section}>
      <div className={styles.caption}>Tools I build with daily</div>

      <div className={styles.viewport}>
        <div className={`${styles.fade} ${styles.fadeLeft}`} />
        <div className={`${styles.fade} ${styles.fadeRight}`} />

        <div className={`${styles.marquee} marquee-track`}>
          {renderTrack(false)}
          {renderTrack(true)}
        </div>
      </div>
    </section>
  );
}

export default TextMarqueeLayout;
