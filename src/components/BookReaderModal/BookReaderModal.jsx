import { useEffect, memo } from "react";
import { DownloadIcon, ArrowUpRightIcon, XIcon, BookOpenIcon } from "../Icons/Icons";
import styles from "./BookReaderModal.module.css";

function BookReaderModal({ book, onClose }) {
  // Lock body scroll and listen for ESC key
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

  if (!book) return null;

  const pdfSource = book.pdfUrl || book.downloadPath;

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-reader-title"
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Toolbar */}
        <header className={styles.modalHeader}>
          <div className={styles.headerInfo}>
            <div className={styles.titleRow}>
              <BookOpenIcon size={16} />
              <h2 id="book-reader-title" className={styles.bookTitle}>
                {book.title}
              </h2>
              <span className={styles.pageBadge}>{book.pages} Pages</span>
            </div>
            <p className={styles.authorMeta}>
              By {book.author} · {book.edition || book.publisher}
            </p>
          </div>

          <div className={styles.headerActions}>
            <a
              href={book.downloadPath || pdfSource}
              download={`${book.slug}.pdf`}
              className={styles.actionBtn}
              title="Download PDF document"
            >
              <DownloadIcon size={14} />
              <span className={styles.btnText}>Download PDF</span>
              {book.fileSize && (
                <span className={styles.sizeText}>({book.fileSize})</span>
              )}
            </a>

            <a
              href={book.downloadPath || pdfSource}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionBtn}
              title="Open PDF in a new browser tab"
            >
              <ArrowUpRightIcon size={13} />
              <span className={styles.btnText}>New Tab</span>
            </a>

            <button
              type="button"
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close book reader"
            >
              <XIcon size={18} />
            </button>
          </div>
        </header>

        {/* Iframe PDF Viewer with fallback */}
        <div className={styles.viewerContainer}>
          <iframe
            src={`${pdfSource}#view=FitH&toolbar=1`}
            title={`Document Preview: ${book.title}`}
            className={styles.pdfIframe}
          />

          <div className={styles.mobileFallback}>
            <p>
              If the inline PDF preview does not display automatically on your device,
              you can open or download the document directly below.
            </p>
            <div className={styles.fallbackActions}>
              <a
                href={book.downloadPath || pdfSource}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Open PDF in New Tab</span>
                <ArrowUpRightIcon size={14} />
              </a>
              <a
                href={book.downloadPath || pdfSource}
                download={`${book.slug}.pdf`}
                className={styles.fallbackDownload}
              >
                <DownloadIcon size={14} />
                <span>Download ({book.fileSize})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(BookReaderModal);
