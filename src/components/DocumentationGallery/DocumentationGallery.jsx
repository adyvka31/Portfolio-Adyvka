import { memo } from "react";
import NativeReveal from "../Reveal/NativeReveal";
import SectionLabel from "../SectionLabel/SectionLabel";
import Image from "../Image/Image";
import { MaximizeIcon } from "../Icons/Icons";
import styles from "./DocumentationGallery.module.css";

function DocumentationGallery({
  items,
  number = "04",
  label = "ON-SITE DOCUMENTATION & ARCHIVES",
  title = "Championship Documentation & Records.",
  lead = "Verifiable photographic records from our project, defense, and official archives.",
  onSelectPhoto,
  ariaLabel = "Project Documentation",
}) {
  if (!items || items.length === 0) return null;

  return (
    <section className={styles.section} aria-label={ariaLabel}>
      <div className={styles.container}>
        <NativeReveal>
          <div className={styles.sectionHeader}>
            <SectionLabel number={number} label={label} />
            <h2 className={styles.sectionTitle}>{title}</h2>
            {lead && <p className={styles.sectionLead}>{lead}</p>}
          </div>
        </NativeReveal>

        <div className={styles.docGrid}>
          {items.map((doc, idx) => (
            <NativeReveal key={doc.id || idx} delay={idx * 0.08}>
              <article
                className={styles.docCard}
                onClick={() => onSelectPhoto && onSelectPhoto(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectPhoto && onSelectPhoto(idx);
                  }
                }}
                aria-label={`View photo: ${doc.title}`}
              >
                <div className={styles.docMediaWrap}>
                  <Image
                    src={doc.image}
                    alt={doc.title}
                    className={styles.docImage}
                    width={640}
                    height={400}
                  />
                  <div
                    className={styles.docExpandBtn}
                    aria-label="Expand image"
                  >
                    <MaximizeIcon size={14} />
                  </div>
                  {doc.tag && (
                    <span className={styles.docBadge}>{doc.tag}</span>
                  )}
                </div>
                <div className={styles.docInfo}>
                  <h3 className={styles.docTitle}>{doc.title}</h3>
                  <p className={styles.docDesc}>{doc.desc}</p>
                </div>
              </article>
            </NativeReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(DocumentationGallery);
