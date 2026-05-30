import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NativeReveal from "../../../components/Reveal/NativeReveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import Tag from "../../../components/Tag/Tag";
import { useCardSpotlight } from "../../../hooks/useCardSpotlight";
import { recognitionData } from "../../../data/portfolio";
import Image from "../../../components/Image/Image";
import styles from "./AchievementLayout.module.css";

function AchievementCard({ item, faded }) {
  const spotlight = useCardSpotlight();
  return (
    <article
      className={`card glass ${styles.card} ${faded ? styles.fadedCard : ""}`}
      {...spotlight}
      aria-label={`Achievement: ${item.title}`}
    >
      <div className={styles.imageContainer}>
        <Image
          src={item.image}
          alt={`Illustration for ${item.title}`}
          className={styles.cardImage}
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
        />
        <div className={styles.imageOverlay} aria-hidden="true" />
        <span
          className={styles.yearBadge}
          aria-label={`Awarded in ${item.year}`}
        >
          {item.year}
        </span>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.head}>
          <div className={styles.institutionWrapper}>
            <span className={styles.institution}>— {item.institution}</span>
          </div>
          <span className={styles.icon} aria-hidden="true">
            {item.icon}
          </span>
        </div>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.description}</p>

        {/* SENIOR FIX: Semantic ul untuk tags */}
        <ul className={styles.tagWrapper} aria-label="Related categories">
          {item.tags?.map((tag) => (
            <li key={tag} style={{ listStyle: "none" }}>
              <Tag size="xs">{tag}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function AchievementLayout() {
  const [activeTab, setActiveTab] = useState("experience");
  const [columns, setColumns] = useState(3);
  const tabs = ["experience", "achievement", "certificate"];

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) setColumns(3);
      else if (window.innerWidth >= 768) setColumns(2);
      else setColumns(1);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns, { passive: true });
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const allData = recognitionData[activeTab] || [];

  const displayLimit = columns * 2;
  const displayData = allData.slice(0, displayLimit);
  const hasSecondRow = allData.length > columns;

  return (
    <section className={styles.section} id="recognition">
      <div className={styles.container}>
        <NativeReveal className={`${styles.centeredLabel} reveal-slide-up`}>
          <SectionLabel number="04" label="Recognition" />
        </NativeReveal>

        <div className={styles.header}>
          <NativeReveal
            delay={0.05}
            className={`${styles.filterWrapper} reveal-slide-up`}
          >
            <div
              className={styles.filters}
              role="group"
              aria-label="Filter recognition categories"
            >
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  aria-pressed={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${styles.chip} ${activeTab === tab ? styles.chipActive : ""}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </NativeReveal>

          <NativeReveal delay={0.1} className="reveal-slide-up">
            <h2 className={`${styles.headline} text-fade`}>
              <span className={`font-serif ${styles.italic} text-glow`}>
                Receipts
              </span>
              , not résumé filler.
            </h2>
          </NativeReveal>
        </div>

        <div className={styles.gridWrapper}>
          <div
            key={activeTab}
            className={`${styles.grid} ${hasSecondRow ? styles.gridHasOverlay : ""}`}
            aria-live="polite"
          >
            {displayData.map((item, idx) => {
              const isSecondRow = idx >= columns;
              return (
                <NativeReveal
                  key={`${activeTab}-${idx}`}
                  delay={(idx % columns) * 0.15}
                  className="reveal-slide-up"
                >
                  <AchievementCard item={item} faded={isSecondRow} />
                </NativeReveal>
              );
            })}
          </div>

          {hasSecondRow && (
            <div className={styles.seeMoreWrapper}>
              <Link to="/recognition" className={styles.seeMoreBtn}>
                Explore All Achievements
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AchievementLayout;
