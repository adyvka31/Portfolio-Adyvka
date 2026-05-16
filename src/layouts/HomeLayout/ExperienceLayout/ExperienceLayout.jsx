// src/layouts/HomeLayout/ExperienceLayout/ExperienceLayout.jsx
import Reveal from "../../../components/Reveal/Reveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import Tag from "../../../components/Tag/Tag";
import { experiences } from "../../../data/portfolio";
import styles from "./ExperienceLayout.module.css";

function TimelineItem({ item, index }) {
  // Indeks genap di kiri, ganjil di kanan
  const isLeft = index % 2 === 0;

  return (
    <Reveal
      delay={index * 0.1}
      className={index > 0 ? styles.revealWrapper : ""}
    >
      <div
        className={`${styles.item} ${isLeft ? styles.leftSide : styles.rightSide}`}
      >
        <div
          className={`${styles.dot} ${item.current ? styles.dotCurrent : ""}`}
        />

        <div className={styles.itemCard}>
          <div className={styles.itemHeader}>
            <div
              className={`${styles.period} ${item.current ? styles.periodCurrent : ""}`}
            >
              {item.period}
            </div>
            <h3 className={styles.role}>{item.role}</h3>
            <div className={styles.company}>{item.company}</div>
          </div>

          <div className={styles.itemBody}>
            <p className={styles.description}>{item.description}</p>
            {item.tags && (
              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <Tag key={tag} size="xs">
                    {tag}
                  </Tag>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.spacer} aria-hidden="true" />
      </div>
    </Reveal>
  );
}

function ExperienceLayout() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        {/* Label di tengah */}
        <Reveal className={styles.centeredLabel}>
          <SectionLabel number="03" label="Experience" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className={`${styles.headline} text-fade`}>
            A short timeline of{" "}
            <span className={`font-serif ${styles.italic} text-glow`}>
              things shipped
            </span>
            .
          </h2>
        </Reveal>

        <div className={styles.timeline}>
          <div className={styles.spine} aria-hidden="true" />
          {experiences.map((item, idx) => (
            <TimelineItem
              key={item.period + item.role}
              item={item}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceLayout;
