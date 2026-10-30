import { memo } from "react";
import styles from "./LogoMark.module.css";

function LogoMark({ withDot = true }) {
  return (
    <span className={styles.logoMark} aria-hidden="true">
      <img
        src="/avatar.webp?v=3"
        alt="Rafif Sava Adyvka Pratama Logo"
        className={styles.avatar}
        width={32}
        height={32}
        loading="eager"
        decoding="async"
      />
      {withDot && <span className={`${styles.dot} pulse-dot`} />}
    </span>
  );
}

export default memo(LogoMark);
