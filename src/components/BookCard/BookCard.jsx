import { memo, useState } from "react";
import { Link } from "react-router-dom";
import Image from "../Image/Image";
import Tag from "../Tag/Tag";
import {
  BookOpenIcon,
  DownloadIcon,
  ArrowUpRightIcon,
  FileTextIcon,
} from "../Icons/Icons";
import { useCardSpotlight } from "../../hooks/useCardSpotlight";
import styles from "./BookCard.module.css";

function BookCard({ item, onRead, className = "" }) {
  const [showChapters, setShowChapters] = useState(false);
  const spotlight = useCardSpotlight();

  if (!item) return null;

  return (
    <article
      className={`card glass ${styles.card} ${className}`}
      {...spotlight}
      aria-label={`Buku: ${item.title}`}
    >
      {/* ── LEFT: 3D BOOK COVER DISPLAY ─────────────────── */}
      <div className={styles.coverColumn}>
        <div className={styles.bookWrapper}>
          <div
            className={styles.book3D}
            onClick={() => onRead && onRead(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onRead && onRead(item);
              }
            }}
            aria-label={`Read ${item.title}`}
          >
            {/* Spine & Pages visual depth */}
            <div className={styles.bookSpine} aria-hidden="true" />
            <div className={styles.bookPages} aria-hidden="true" />

            <div className={styles.coverFrame}>
              <Image
                src={item.cover || item.thumbnail}
                alt={`Cover of ${item.title} by ${item.author}`}
                className={styles.coverImage}
                width={360}
                height={510}
              />
              <div className={styles.coverOverlay} />

              <div className={styles.coverHoverBadge}>
                <BookOpenIcon size={16} />
                <span>Read E-Book</span>
              </div>
            </div>

            {/* Corner Page Badge */}
            <span className={styles.pageBadge}>
              {item.pages} Pages
            </span>
          </div>
        </div>
      </div>

      {/* ── RIGHT: METADATA & CONTENT ───────────────────── */}
      <div className={styles.contentColumn}>
        <div className={styles.metaTop}>
          <span className={styles.label}>{item.label || "PUBLICATION & MODULE"}</span>
          <span className={styles.year}>{item.year}</span>
        </div>

        <h3 className={styles.title}>
          <Link to={`/publications/${item.slug}`} className={styles.titleLink}>
            {item.title}
          </Link>
        </h3>

        {item.subtitle && (
          <p className={styles.subtitle}>{item.subtitle}</p>
        )}

        <p className={styles.description}>{item.description}</p>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <ul className={styles.tags} aria-label="Topics and skills">
            {item.tags.map((tag) => (
              <li key={tag} style={{ listStyle: "none" }}>
                <Tag size="xs">{tag}</Tag>
              </li>
            ))}
          </ul>
        )}

        {/* Expandable Chapters / Syllabus */}
        {item.chapters && item.chapters.length > 0 && (
          <div className={styles.chaptersAccordion}>
            <button
              type="button"
              className={styles.chaptersToggle}
              onClick={() => setShowChapters((prev) => !prev)}
              aria-expanded={showChapters}
            >
              <FileTextIcon size={14} />
              <span>
                {showChapters
                  ? "Hide Table of Contents"
                  : `View Table of Contents (${item.chapters.length} Chapters)`}
              </span>
              <span className={`${styles.chevron} ${showChapters ? styles.chevronOpen : ""}`}>
                ▾
              </span>
            </button>

            {showChapters && (
              <ol className={styles.chaptersList}>
                {item.chapters.map((chap) => (
                  <li key={chap.num} className={styles.chapterItem}>
                    <div className={styles.chapterHeader}>
                      <span className={styles.chapterNum}>{chap.num}</span>
                      <strong className={styles.chapterTitle}>{chap.title}</strong>
                    </div>
                    {chap.desc && (
                      <p className={styles.chapterDesc}>{chap.desc}</p>
                    )}
                  </li>
                ))}
              </ol>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className={styles.actionsRow}>
          <Link
            to={`/publications/${item.slug}`}
            className={`btn-primary ${styles.detailBtn}`}
            aria-label={`View overview and syllabus for ${item.title}`}
          >
            <span>Overview & Syllabus</span>
            <ArrowUpRightIcon size={13} />
          </Link>

          <button
            type="button"
            className={styles.readBtn}
            onClick={() => onRead && onRead(item)}
            aria-label={`Read ${item.title} online`}
          >
            <BookOpenIcon size={14} />
            <span>Read PDF</span>
          </button>

          <a
            href={item.downloadPath || item.pdfUrl}
            download={`${item.slug}.pdf`}
            className={styles.downloadBtn}
            aria-label={`Download PDF of ${item.title}`}
          >
            <DownloadIcon size={14} />
            <span>Download</span>
            {item.fileSize && (
              <span className={styles.fileSize}>({item.fileSize})</span>
            )}
          </a>

          <a
            href={item.downloadPath || item.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.externalBtn}
            title="Open PDF directly in a new browser tab"
            aria-label={`Open ${item.title} PDF in a new tab`}
          >
            <span>New Tab</span>
            <ArrowUpRightIcon size={12} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default memo(BookCard);
