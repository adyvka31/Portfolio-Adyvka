import styles from "./LogoMark.module.css";

function LogoMark({ withDot = true }) {
  return (
    <span className={styles.logoMark}>
      <span className={styles.letter}>a</span>
      {withDot && <span className={`${styles.dot} pulse-dot`} />}
    </span>
  );
}

export default LogoMark;
