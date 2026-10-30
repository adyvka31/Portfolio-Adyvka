import { useEffect } from "react";
import Image from "../Image/Image";
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from "../Icons/Icons";
import styles from "./Lightbox.module.css";

export default function Lightbox({
  items = [],
  activeIndex = null,
  onClose,
  onNavigate,
}) {
  useEffect(() => {
    if (activeIndex === null || !items.length) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((prev) => (prev > 0 ? prev - 1 : items.length - 1));
      }
      if (e.key === "ArrowRight") {
        onNavigate((prev) => (prev < items.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, items, onClose, onNavigate]);

  if (activeIndex === null || !items[activeIndex]) return null;

  const current = items[activeIndex];

  return (
    <div
      className={styles.lightbox}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo Preview"
    >
      <div
        className={styles.lightboxContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.lightboxHeader}>
          <div className={styles.lightboxMeta}>
            <span className={styles.lightboxTag}>
              {current.tag || "Field Record"}
            </span>
            <span className={styles.lightboxCounter}>
              {activeIndex + 1} / {items.length}
            </span>
          </div>
          <button
            className={styles.lightboxClose}
            onClick={onClose}
            aria-label="Close image preview"
          >
            <XIcon size={18} />
          </button>
        </div>

        <div className={styles.lightboxMedia}>
          <Image
            src={current.src || current.image}
            alt={
              current.title
                ? `${current.title} — High Resolution Documentation Preview`
                : current.caption || "High Resolution Engineering Documentation Preview"
            }
            className={styles.lightboxImage}
            priority={true}
          />

          {items.length > 1 && (
            <>
              <button
                className={`${styles.lightboxNav} ${styles.lightboxNavPrev}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((prev) =>
                    prev > 0 ? prev - 1 : items.length - 1
                  );
                }}
                aria-label="Previous photo"
              >
                <ChevronLeftIcon size={20} />
              </button>
              <button
                className={`${styles.lightboxNav} ${styles.lightboxNavNext}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((prev) =>
                    prev < items.length - 1 ? prev + 1 : 0
                  );
                }}
                aria-label="Next photo"
              >
                <ChevronRightIcon size={20} />
              </button>
            </>
          )}
        </div>

        {(current.title || current.desc) && (
          <div className={styles.lightboxFooter}>
            {current.title && (
              <h4 className={styles.lightboxTitle}>{current.title}</h4>
            )}
            {current.desc && (
              <p className={styles.lightboxDesc}>{current.desc}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
