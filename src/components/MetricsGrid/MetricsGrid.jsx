import { memo } from "react";
import NativeReveal from "../Reveal/NativeReveal";
import Card from "../Card/Card";
import styles from "./MetricsGrid.module.css";

function MetricsGrid({ items, className = "" }) {
  if (!items || items.length === 0) return null;

  return (
    <NativeReveal delay={0.1}>
      <div className={`${styles.statGrid} ${className}`}>
        {items.map((kpi, idx) => (
          <Card key={idx} className={styles.statCard}>
            <div className={`font-serif ${styles.statValue} text-glow`}>
              {kpi.value}
            </div>
            <div className={styles.statLabel}>{kpi.label}</div>
            {kpi.note && <p className={styles.statNote}>{kpi.note}</p>}
          </Card>
        ))}
      </div>
    </NativeReveal>
  );
}

export default memo(MetricsGrid);
