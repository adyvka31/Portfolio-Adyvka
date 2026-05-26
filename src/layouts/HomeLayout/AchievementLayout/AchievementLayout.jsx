import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../../../components/Reveal/Reveal";
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

  // SENIOR FIX: Selalu tampilkan tepat 2 baris (berapapun jumlah kolomnya)
  // Mobile (1 col) = 2 item. Tablet (2 cols) = 4 item. Desktop (3 cols) = 6 item.
  // Ini menghilangkan kebutuhan CSS max-height: 62rem yang buggy!
  const displayLimit = columns * 2;
  const displayData = allData.slice(0, displayLimit);
  const hasSecondRow = allData.length > columns;

  return (
    <section className={styles.section} id="recognition">
      <div className={styles.container}>
        <div className={`${styles.centeredLabel} css-reveal`}>
          <SectionLabel number="04" label="Recognition" />
        </div>

        <div className={styles.header}>
          <div className={`${styles.filterWrapper} css-reveal`}>
            {/* SENIOR FIX: A11y Role Tablist */}
            <div
              className={styles.filters}
              role="tablist"
              aria-label="Recognition categories"
            >
              {tabs.map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${styles.chip} ${activeTab === tab ? styles.chipActive : ""}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="css-reveal">
            <h2 className={`${styles.headline} text-fade`}>
              <span className={`font-serif ${styles.italic} text-glow`}>
                Receipts
              </span>
              ,<br /> not résumé filler.
            </h2>
          </div>
        </div>

        <div className={styles.gridWrapper}>
          <div
            key={activeTab}
            className={`${styles.grid} ${hasSecondRow ? styles.gridHasOverlay : ""}`}
            role="tabpanel"
          >
            {displayData.map((item, idx) => {
              // Jika index >= jumlah kolom, berarti dia ada di baris kedua
              const isSecondRow = idx >= columns;
              return (
                <Reveal
                  key={`${activeTab}-${idx}`}
                  delay={(idx % columns) * 0.1}
                >
                  <AchievementCard item={item} faded={isSecondRow} />
                </Reveal>
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
