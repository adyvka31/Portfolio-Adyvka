import styles from "./EmptyState.module.css";

export default function EmptyState({
  title = "No results found",
  message = "Try adjusting your search or filters to find what you're looking for.",
  icon = "🔍",
}) {
  return (
    <div className={styles.emptyState} role="status">
      {icon && <div className={styles.icon} aria-hidden="true">{icon}</div>}
      {title && <h3 className={styles.title}>{title}</h3>}
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}
