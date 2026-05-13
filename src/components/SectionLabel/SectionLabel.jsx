import styles from "./SectionLabel.module.css";

/**
 * The numbered section eyebrow ("01 — ABOUT").
 */
function SectionLabel({ number, label }) {
  return (
    <div className={styles.label}>
      <span className={styles.number}>{number}</span>
      <span className={styles.divider} />
      <span className={styles.text}>{label}</span>
    </div>
  );
}

export default SectionLabel;
