import styles from "./MediaFrame.module.css";

/**
 * Image frame styled like a browser/macOS window — for case-study screenshots,
 * certificate scans, achievement photos. Reuses your existing chrome aesthetic.
 *
 * @param {string} src        Image source
 * @param {string} alt        Alt text
 * @param {string} [caption]  Optional caption below the image
 * @param {string} [chromeLabel]  Optional URL-style label in the chrome bar
 * @param {string} [aspect]   CSS aspect-ratio value (e.g. "16/10")
 */
export default function MediaFrame({
  src,
  alt,
  caption,
  chromeLabel,
  aspect = "16/10",
}) {
  return (
    <figure className={styles.figure}>
      <div className={`glass ${styles.frame}`}>
        <div className={styles.chrome}>
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotYellow}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
          {chromeLabel && (
            <span className={styles.chromeLabel}>{chromeLabel}</span>
          )}
        </div>
        <div className={styles.imageWrap} style={{ aspectRatio: aspect }}>
          <img src={src} alt={alt} className={styles.image} loading="lazy" />
        </div>
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
