import styles from "./DatabankPreview.module.css";

/**
 * Inline dashboard mockup for the Databank ERP card.
 * Pure presentational — no live data.
 */
function DatabankPreview() {
  // Bar heights for the mini chart (in %)
  const bars = [32, 48, 42, 64, 56, 78, 72, 88, 82, 95];

  return (
    <div className={styles.preview}>
      <div className={`${styles.gridBg} grid-bg`} />

      {/* Browser chrome */}
      <div className={styles.chrome}>
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotYellow}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
          <span className={styles.url}>databank.intisel.id/dashboard</span>
        </div>
        <span className={styles.version}>v2.4.1</span>
      </div>

      {/* Metric cards */}
      <div className={styles.metrics}>
        <div className={styles.metric}>
          <div className={styles.metricLabel}>REVENUE</div>
          <div className={`font-serif ${styles.metricValue} text-glow`}>
            Rp 12.4B
          </div>
          <div className={`${styles.metricDelta} ${styles.deltaUp}`}>
            ↑ 18.2%
          </div>
        </div>
        <div className={styles.metric}>
          <div className={styles.metricLabel}>INVENTORY</div>
          <div className={`font-serif ${styles.metricValue}`}>4,328</div>
          <div className={styles.metricDelta}>SKUs tracked</div>
        </div>
        <div className={styles.metric}>
          <div className={styles.metricLabel}>UPTIME</div>
          <div className={`font-serif ${styles.metricValue}`}>99.97%</div>
          <div className={`${styles.metricDelta} ${styles.deltaUp}`}>30d</div>
        </div>
      </div>

      {/* Mini bar chart */}
      <div className={styles.chart}>
        {bars.map((h, i) => (
          <div key={i} className={styles.bar} style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

export default DatabankPreview;
