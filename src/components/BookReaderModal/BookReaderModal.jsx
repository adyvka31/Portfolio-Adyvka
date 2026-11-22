import { useEffect, useSyncExternalStore, memo } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRightIcon } from "../Icons/Icons";
import styles from "./BookReaderModal.module.css";

const emptySubscribe = () => () => {};

function BookReaderModal({ book, onClose }) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

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
  const isMobile =
    typeof window !== "undefined" &&
    (window.innerWidth <= 768 ||
      window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
      "ontouchstart" in window);

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
          {isMobile ? (
            <div className={styles.mobileReaderFallback}>
              <div className={styles.mobileDocIconWrap}>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.mobileDocIcon}
                  aria-hidden="true"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>

              <h3 className={styles.mobileBookTitle}>{book.title}</h3>
              {book.fileSize && (
                <span className={styles.mobileFileSize}>PDF · {book.fileSize}</span>
              )}

              <p className={styles.mobileReaderHint}>
                Untuk pengalaman membaca terbaik di handphone, buka dokumen langsung menggunakan penampil PDF bawaan perangkat Anda.
              </p>

              <div className={styles.mobileBtnGroup}>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-primary ${styles.mobileOpenBtn}`}
                >
                  Buka Dokumen PDF <ArrowUpRightIcon size={14} />
                </a>
                <button
                  type="button"
                  className={styles.mobileCloseBtn}
                  onClick={onClose}
                >
                  Tutup
                </button>
              </div>
            </div>
          ) : (
            <iframe
              src={`${pdfUrl}#zoom=100&toolbar=1`}
              title={`${book.title} PDF Document`}
              className={styles.pdfViewer}
            />
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalElement, document.body);
}

export default memo(BookReaderModal);
