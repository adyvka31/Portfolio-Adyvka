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
    >
      {project.hasAccentBlur && <div className={styles.accentBlur} />}

      <div className={styles.contentTop}>
        <div className={styles.headRow}>
          <div className={styles.headLeft}>
            <div
              className={`${styles.label} ${project.labelAccent ? styles.labelAccent : ""}`}
            >
              {project.label}
            </div>
            <h3 className={isFlagship ? styles.titleLg : styles.titleSm}>
              {project.title}
            </h3>
            <p className={styles.description}>{project.description}</p>
          </div>
          {project.year && isFlagship && (
            <span className={styles.year}>{project.year}</span>
          )}
        </div>

        {isFlagship && <DatabankPreview />}
      </div>

      <div className={styles.footer}>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <Tag key={tag} size={isFlagship ? "sm" : "xs"}>
              {tag}
            </Tag>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewLink}
          >
            View
            <ArrowUpRightIcon size={11} />
          </a>
        )}
        {!project.link && project.year && !isFlagship && (
          <span className={styles.yearSm}>{project.year}</span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
