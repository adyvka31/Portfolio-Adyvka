import Tag from "../../../components/Tag/Tag";
import { ArrowUpRightIcon } from "../../../components/Icons/Icons";
import { useCardSpotlight } from "../../../hooks/useCardSpotlight";
import DatabankPreview from "./DatabankPreview";
import styles from "./ProjectCard.module.css";

/**
 * One bento card. Layout shape switches based on project.span and project.id.
 */
function ProjectCard({ project, visible }) {
  const spotlight = useCardSpotlight();

  const spanClass =
    project.span === "lg"
      ? styles.spanLg
      : project.span === "md"
        ? styles.spanMd
        : styles.spanSm;

  const isFlagship = project.id === "databank";

  return (
    <article
      data-cat={project.category}
      className={`card glass ${styles.card} ${spanClass} ${visible ? styles.visible : styles.hidden}`}
      {...spotlight}
      // Tambahkan aria-label agar screen reader dapat membaca judul project saat fokus
      aria-label={`Project: ${project.title}`}
    >
      {project.hasAccentBlur && (
        <div className={styles.accentBlur} aria-hidden="true" />
      )}

      <div className={styles.contentTop}>
        <div className={styles.headRow}>
          <div className={styles.headLeft}>
            <div
              className={`${styles.label} ${project.labelAccent ? styles.labelAccent : ""}`}
              aria-hidden="true"
            >
              {project.label}
            </div>
            <h3 className={isFlagship ? styles.titleLg : styles.titleSm}>
              {project.title}
            </h3>
            <p className={styles.description}>{project.description}</p>
          </div>
          {project.year && isFlagship && (
            <span
              className={styles.year}
              aria-label={`Completed in ${project.year}`}
            >
              {project.year}
            </span>
          )}
        </div>

        {isFlagship && <DatabankPreview />}
      </div>

      <div className={styles.footer}>
        {/* SENIOR FIX: Ubah div menjadi ul untuk list teknologi */}
        <ul className={styles.tags} aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag} style={{ listStyle: "none" }}>
              <Tag size={isFlagship ? "sm" : "xs"}>{tag}</Tag>
            </li>
          ))}
        </ul>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewLink}
            aria-label={`View ${project.title} project live`}
          >
            View
            <ArrowUpRightIcon size={11} />
          </a>
        )}
        {!project.link && project.year && !isFlagship && (
          <span
            className={styles.yearSm}
            aria-label={`Completed in ${project.year}`}
          >
            {project.year}
          </span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
