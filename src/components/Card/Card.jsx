import { Link } from "react-router-dom";
import Tag from "../Tag/Tag";
import Image from "../Image/Image";
import { ArrowUpRightIcon, ArrowRightIcon } from "../Icons/Icons";
import { useCardSpotlight } from "../../hooks/useCardSpotlight";
import styles from "./Card.module.css";

export default function Card({
  variant = "project", // "project" | "bento" | "certificate" | "story" | "custom"
  item,
  isFlagship = false,
  faded = false,
  className = "",
  children,
  ...rest
}) {
  const spotlight = useCardSpotlight();

  if (variant === "custom" || children) {
    return (
      <article
        className={`card glass ${styles.card} ${className}`}
        {...spotlight}
        {...rest}
      >
        {children}
      </article>
    );
  }

  if (variant === "project") {
    const slug = item?.slug || item?.id;
    const flagship = isFlagship || item?.span === "lg";
    return (
      <article
        data-cat={item?.category}
        className={`card glass ${styles.card} ${styles.projectCard} ${flagship ? styles.flagshipCard : ""} ${className}`}
        {...spotlight}
        aria-label={`Project: ${item?.title}`}
        {...rest}
      >
        <Link
          to={`/projects/${slug}`}
          className={styles.mediaWrap}
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={item?.thumbnail || item?.image}
            alt={item?.title || "Project Thumbnail"}
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
            <span className={styles.label}>{item?.label || item?.category}</span>
            {item?.year && <span className={styles.year}>{item.year}</span>}
          </div>

          <h3 className={flagship ? styles.titleLg : styles.titleSm}>
            <Link to={`/projects/${slug}`} className={styles.titleLink}>
              {item?.title}
            </Link>
          </h3>

          <p className={styles.description}>{item?.description}</p>

          <div className={styles.footer}>
            <ul className={styles.tags} aria-label="Technologies used">
              {item?.tags?.slice(0, flagship ? 5 : 3).map((tag) => (
                <li key={tag} style={{ listStyle: "none" }}>
                  <Tag size="xs">{tag}</Tag>
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <Link
                to={`/projects/${slug}`}
                className={styles.viewLink}
                aria-label={`View ${item?.title} project details`}
              >
                <span>Details</span>
                <ArrowRightIcon size={11} />
              </Link>
              {item?.link && item.link !== "#" && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sourceLink}
                  aria-label={`View ${item?.title} source code`}
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

  if (variant === "certificate") {
    const slug = item?.slug;
    return (
      <article
        className={`card glass ${styles.card} ${styles.certCard} ${className}`}
        {...spotlight}
        aria-label={`Certificate: ${item?.title}`}
        {...rest}
      >
        <Link
          to={`/certificates/${slug}`}
          className={styles.cardLinkOverlay}
          aria-label={`View details for ${item?.title}`}
        />

        <div className={styles.verifiedBadge} aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Verified
        </div>

        <div className={styles.certImageFrame}>
          <Image
            src={item?.image}
            alt={`Certificate credential for ${item?.title}`}
            className={styles.cardImage}
            width={600}
            height={450}
          />
          <div className={styles.imageOverlay} aria-hidden="true" />
          {item?.year && (
            <div className={styles.dateTag} aria-label={`Issued in ${item.year}`}>
              {item.year}
            </div>
          )}
        </div>

        <div className={styles.cardBody}>
          <div className={styles.institution}>— {item?.institution || item?.issuer}</div>
          <h3 className={styles.title}>{item?.title}</h3>

          <ul className={styles.tagWrapper} aria-label="Skills acquired">
            {item?.tags?.slice(0, 3).map((t) => (
              <li key={t} style={{ listStyle: "none" }}>
                <Tag size="xs">{t}</Tag>
              </li>
            ))}
          </ul>

          <div className={styles.certActionBtn} aria-hidden="true">
            <span>View Credential</span>
            <ArrowRightIcon size={14} />
          </div>
        </div>
      </article>
    );
  }

  if (variant === "story") {
    return (
      <article
        className={`card glass ${styles.card} ${styles.storyCard} ${className}`}
        {...spotlight}
        aria-label={`Achievement: ${item?.title}`}
        {...rest}
      >
        <header className={styles.storyHeader}>
          <span className={styles.year}>{item?.year}</span>
          <span className={styles.separator}>•</span>
          <span className={styles.institution}>{item?.institution}</span>
        </header>

        <h3 className={styles.storyTitle}>{item?.title}</h3>

        <p className={styles.description}>
          {item?.description ||
            "A tangible testament to precise technical execution, complex problem solving, and an uncompromising commitment to engineering excellence."}
        </p>

        <ul className={styles.tags} aria-label="Skills and topics">
          {item?.tags?.slice(0, 4).map((t) => (
            <li key={t} style={{ listStyle: "none" }}>
              <Tag size="sm">{t}</Tag>
            </li>
          ))}
        </ul>

        <footer className={styles.storyFooter}>
          <Link
            to={`/achievements/${item?.slug}`}
            className={styles.readMore}
            aria-label={`Read the full story about ${item?.title}`}
          >
            <span>Read the full story</span>
            <ArrowRightIcon size={16} />
          </Link>
        </footer>
      </article>
    );
  }

  // Default: "bento" (used for Experience, Teaching, Community, Home Achievements)
  const linkHref = item?.slug
    ? (item?.type === "achievement" ? `/achievements/${item.slug}` : `/experience/${item.slug}`)
    : null;

  return (
    <article
      className={`card glass ${styles.card} ${styles.bentoCard} ${faded ? styles.fadedCard : ""} ${linkHref ? styles.cardClickable : ""} ${className}`}
      {...spotlight}
      aria-label={`${item?.role || item?.title}: ${item?.institution || item?.company}`}
      {...rest}
    >
      {linkHref && (
        <Link
          to={linkHref}
          className={styles.cardLinkOverlay}
          aria-label={`View details for ${item?.title || item?.role}`}
        />
      )}
      <div className={styles.imageContainer}>
        <Image
          src={item?.image || item?.thumbnail}
          alt={item?.title || item?.role || "Preview"}
          className={styles.cardImage}
          width={600}
          height={400}
        />
        <div className={styles.imageOverlay} aria-hidden="true" />
        {item?.year && (
          <span className={styles.yearBadge} aria-label={`Year ${item.year}`}>
            {item.year}
          </span>
        )}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.head}>
          <div className={styles.institutionWrapper}>
            <span className={styles.institution}>— {item?.institution || item?.company}</span>
          </div>
          {item?.icon && (
            <span className={styles.icon} aria-hidden="true">
              {item.icon}
            </span>
          )}
        </div>

        <h3 className={styles.title}>{item?.title || item?.role}</h3>
        {item?.description && (
          <p className={styles.description}>{item.description}</p>
        )}

        <div className={styles.cardBottomRow}>
          <ul className={styles.tagWrapper} aria-label="Skills and technologies">
            {item?.tags?.map((tag) => (
              <li key={tag} style={{ listStyle: "none" }}>
                <Tag size="xs">{tag}</Tag>
              </li>
            ))}
          </ul>

          {linkHref && (
            <div className={styles.detailArrow} aria-hidden="true">
              <ArrowRightIcon size={14} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
