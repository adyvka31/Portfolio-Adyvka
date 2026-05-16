import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Reveal from "../../../components/Reveal/Reveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import Tag from "../../../components/Tag/Tag";

import { useCardSpotlight } from "../../../hooks/useCardSpotlight";
import { recognitionData } from "../../../data/portfolio";

import styles from "./AchievementLayout.module.css";

function AchievementCard({ item, faded }) {
  const spotlight = useCardSpotlight();

  return (
    <div
      className={`
        card glass
        ${styles.card}
        ${faded ? styles.fadedCard : ""}
      `}
      {...spotlight}
    >
      <div className={styles.imageContainer}>
        <img src={item.image} alt={item.title} className={styles.cardImage} />

        <div className={styles.imageOverlay} />

        <span className={styles.yearBadge}>{item.year}</span>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.head}>
          <div className={styles.institutionWrapper}>
            <span className={styles.institution}>— {item.institution}</span>
          </div>

          <span className={styles.icon}>{item.icon}</span>
        </div>

        <h3 className={styles.title}>{item.title}</h3>

        <p className={styles.description}>{item.description}</p>

        <div className={styles.tagWrapper}>
          {item.tags?.map((tag) => (
            <Tag key={tag} size="xs">
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

function AchievementLayout() {
  const [activeTab, setActiveTab] = useState("experience");
  const [columns, setColumns] = useState(3);

  const tabs = ["experience", "achievement", "certificate"];

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setColumns(3);
      } else if (window.innerWidth >= 768) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    updateColumns();

    window.addEventListener("resize", updateColumns);

    return () => {
      window.removeEventListener("resize", updateColumns);
    };
  }, []);

  const allData = recognitionData[activeTab] || [];

  const displayData = allData.slice(0, 6);

  const hasSecondRow = displayData.length > columns;

  return (
    <section className={styles.section} id="recognition">
      <div className={styles.container}>
        <Reveal className={styles.centeredLabel}>
          <SectionLabel number="04" label="Recognition" />
        </Reveal>

        <div className={styles.header}>
          <Reveal delay={0.1} className={styles.filterWrapper}>
            <div className={styles.filters}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    ${styles.chip}
                    ${activeTab === tab ? styles.chipActive : ""}
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2
              className={`
                ${styles.headline}
                text-fade
              `}
            >
              <span
                className={`
                  font-serif
                  ${styles.italic}
                  text-glow
                `}
              >
                Receipts
              </span>
              , not résumé filler.
            </h2>
          </Reveal>
        </div>

        <div className={styles.gridWrapper}>
          <div
            key={activeTab}
            className={`
              ${styles.grid}
              ${hasSecondRow ? styles.gridLimit : ""}
            `}
          >
            {displayData.map((item, idx) => {
              const isSecondRow = idx >= columns;

              return (
                <Reveal key={`${activeTab}-${idx}`} delay={idx * 0.06}>
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
