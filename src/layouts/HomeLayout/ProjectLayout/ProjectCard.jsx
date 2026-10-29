import { Link } from "react-router-dom";
import Tag from "../../../components/Tag/Tag";
import Image from "../../../components/Image/Image";
import { ArrowUpRightIcon, ArrowRightIcon } from "../../../components/Icons/Icons";
import { useCardSpotlight } from "../../../hooks/useCardSpotlight";
import styles from "./ProjectCard.module.css";

/**
 * Authentic production project card showcasing genuine thumbnails and real metadata.
 */
function ProjectCard({ project }) {
  const spotlight = useCardSpotlight();
  const slug = project.slug || project.id;
  const isFlagship = project.span === "lg";

  return (
    <article
      data-cat={project.category}
      className={`card glass ${styles.card} ${isFlagship ? styles.flagshipCard : ""}`}
      {...spotlight}
      aria-label={`Project: ${project.title}`}
    >
      {/* Real Project Image Wrap */}
      <Link
        to={`/projects/${slug}`}
        className={styles.mediaWrap}
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          className={styles.thumbnail}
          width={640}
          height={380}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
        />
        <div className={styles.mediaOverlay} />
        <div className={styles.mediaHoverBadge}>
          <span>View Details</span>
          <ArrowRightIcon size={12} />
        </div>
      </Link>

      <div className={styles.content}>
        <div className={styles.metaRow}>
          <span className={styles.label}>{project.label}</span>
          {project.year && <span className={styles.year}>{project.year}</span>}
        </div>

        <h3 className={isFlagship ? styles.titleLg : styles.titleSm}>
          <Link to={`/projects/${slug}`} className={styles.titleLink}>
            {project.title}
          </Link>
        </h3>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.footer}>
          <ul className={styles.tags} aria-label="Technologies used">
            {project.tags.slice(0, isFlagship ? 5 : 3).map((tag) => (
              <li key={tag} style={{ listStyle: "none" }}>
                <Tag size="xs">{tag}</Tag>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Link
              to={`/projects/${slug}`}
              className={styles.viewLink}
              aria-label={`View ${project.title} project details`}
            >
              <span>Details</span>
              <ArrowRightIcon size={11} />
            </Link>
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sourceLink}
                aria-label={`View ${project.title} source code`}
              >
                <span>Source</span>
                <ArrowUpRightIcon size={11} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
