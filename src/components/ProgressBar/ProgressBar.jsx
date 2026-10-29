import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ProgressBar.module.css";

export default function ProgressBar() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);
  const finishRef = useRef(null);

  useEffect(() => {
    // Reset any previous timers
    clearTimeout(timerRef.current);
    clearTimeout(finishRef.current);

    // Start progress asynchronously to prevent cascading renders
    timerRef.current = setTimeout(() => {
      setVisible(true);
      setProgress(25);

      timerRef.current = setTimeout(() => {
        setProgress(60);

        timerRef.current = setTimeout(() => {
          setProgress(85);

          // Complete progress
          finishRef.current = setTimeout(() => {
            setProgress(100);
            finishRef.current = setTimeout(() => {
              setVisible(false);
              setProgress(0);
            }, 300);
          }, 150);
        }, 120);
      }, 100);
    }, 10);

    return () => {
      clearTimeout(timerRef.current);
      clearTimeout(finishRef.current);
    };
  }, [location.pathname, location.search]);

  if (!visible && progress === 0) return null;

  return (
    <div className={styles.container} aria-hidden="true">
      <div
        className={styles.bar}
        style={{
          width: `${progress}%`,
          opacity: visible ? 1 : 0,
        }}
      >
        <div className={styles.peg} />
      </div>
    </div>
  );
}
