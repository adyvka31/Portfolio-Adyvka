import { useState, useEffect, memo } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRightIcon } from "../Icons/Icons";
import styles from "./BookReaderModal.module.css";

function BookReaderModal({ book, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Body Scroll Lock & ESC key listener
  useEffect(() => {
    if (!book) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [book, onClose]);

  if (!mounted || !book) return null;

  const pdfUrl = book.pdfUrl || book.downloadPath;

  const modalElement = (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-modal-title"
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <h2
            id="book-modal-title"
            style={{ fontSize: "inherit", margin: 0, fontWeight: "normal" }}
          >
            {book.title}
          </h2>

          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              Fully Open <ArrowUpRightIcon size={12} />
            </a>
            <button
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close Book Modal"
            >
              <span aria-hidden="true">✕</span>
            </button>
          </div>
        </div>

        <div className={styles.iframeContainer}>
          <iframe
            src={`${pdfUrl}#zoom=100&toolbar=1`}
            title={`${book.title} PDF Document`}
            className={styles.pdfViewer}
          />
        </div>
      </div>
    </div>
  );

  return createPortal(modalElement, document.body);
}

export default memo(BookReaderModal);
