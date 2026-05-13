import styles from "./Tag.module.css";

function Tag({ children, size = "sm" }) {
  return <span className={`${styles.tag} ${styles[size]}`}>{children}</span>;
}

export default Tag;
