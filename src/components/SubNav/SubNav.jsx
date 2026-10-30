import { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, ArrowUpRightIcon } from "../Icons/Icons";
import styles from "./SubNav.module.css";

function SubNav({
  backTo,
  backLabel,
  statusText,
  pulseLive = false,
  action,
  actions,
  children,
  ariaLabel = "Sub Navigation",
}) {
  return (
    <nav className={styles.subnav} aria-label={ariaLabel}>
      <div className={styles.subnavInner}>
        {backTo && (
          <Link to={backTo} className={styles.backBtn}>
            {backLabel}
          </Link>
        )}

        {statusText && (
          <div className={styles.statusIndicator}>
            <span
              className={`${styles.statusPulse} ${pulseLive ? styles.statusPulseLive : ""}`}
              aria-hidden="true"
            />
            <span>{statusText}</span>
          </div>
        )}

        {children}

        {actions && <div className={styles.subnavActions}>{actions}</div>}

        {!children && !actions && action && (
          action.href ? (
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.subnavAction}
              aria-label={action.ariaLabel || action.label}
            >
              <span>{action.label}</span>
              {action.icon || <ArrowUpRightIcon size={12} />}
            </a>
          ) : action.to ? (
            <Link
              to={action.to}
              className={styles.subnavAction}
              aria-label={action.ariaLabel || action.label}
            >
              <span>{action.label}</span>
              {action.icon || <ArrowRightIcon size={12} />}
            </Link>
          ) : action.text ? (
            <span className={styles.subnavAction}>{action.text}</span>
          ) : null
        )}
      </div>
    </nav>
  );
}

export default memo(SubNav);
