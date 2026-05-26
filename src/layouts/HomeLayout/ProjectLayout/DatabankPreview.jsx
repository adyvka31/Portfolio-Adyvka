import styles from "./DatabankPreview.module.css";

/**
 * Inline dashboard mockup for the Databank ERP card.
 * Pure presentational — semantic tags added for A11y.
 */
function DatabankPreview() {
  // Bar heights for the mini chart (in %)
  const bars = [32, 48, 42, 64, 56, 78, 72, 88, 82, 95];

  return (
    <div
      className={styles.preview}
      aria-label="Databank dashboard interface preview mockup"
      role="img"
    >
      {/* Background dekoratif disembunyikan dari screen reader */}
      <div className={`${styles.gridBg} grid-bg`} aria-hidden="true" />

      {/* Browser chrome */}
      <div className={styles.chrome} aria-hidden="true">
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotYellow}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
          <span className={styles.url}>databank.intisel.id/dashboard</span>
        </div>
        <span className={styles.version}>v2.4.1</span>
      </div>

      {/* SENIOR FIX: Menggunakan Description List (<dl>) untuk key-value metrics */}
      <dl className={styles.metrics}>
        <div className={styles.metric}>
          <dt className={styles.metricLabel}>REVENUE</dt>
          <dd className={`font-serif ${styles.metricValue} text-glow`}>
            Rp 12.4B
          </dd>
          <dd className={`${styles.metricDelta} ${styles.deltaUp}`}>↑ 18.2%</dd>
        </div>

        <div className={styles.metric}>
          <dt className={styles.metricLabel}>INVENTORY</dt>
          <dd className={`font-serif ${styles.metricValue}`}>4,328</dd>
          <dd className={styles.metricDelta}>SKUs tracked</dd>
        </div>

        <div className={styles.metric}>
          <dt className={styles.metricLabel}>UPTIME</dt>
          <dd className={`font-serif ${styles.metricValue}`}>99.97%</dd>
          <dd className={`${styles.metricDelta} ${styles.deltaUp}`}>30d</dd>
        </div>
      </dl>

      {/* Mini bar chart - murni visual */}
      <div className={styles.chart} aria-hidden="true">
        {bars.map((h, i) => (
          <div key={i} className={styles.bar} style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

export default DatabankPreview;
