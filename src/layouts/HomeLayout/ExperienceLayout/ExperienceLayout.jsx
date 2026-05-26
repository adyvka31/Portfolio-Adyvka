import Reveal from "../../../components/Reveal/Reveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import Tag from "../../../components/Tag/Tag";
import { experiences } from "../../../data/portfolio";
import styles from "./ExperienceLayout.module.css";

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <Reveal
      delay={index * 0.1}
      className={index > 0 ? styles.revealWrapper : ""}
    >
      <article
        className={`${styles.item} ${isLeft ? styles.leftSide : styles.rightSide}`}
        aria-label={`Experience at ${item.company}`}
      >
        <div
          className={`${styles.dot} ${item.current ? styles.dotCurrent : ""}`}
          aria-hidden="true"
        />

        <div className={styles.itemCard}>
          <header className={styles.itemHeader}>
            <div
              className={`${styles.period} ${item.current ? styles.periodCurrent : ""}`}
              aria-label="Employment Period"
            >
              {item.period}
            </div>
            <h3 className={styles.role}>{item.role}</h3>
            <div className={styles.company}>{item.company}</div>
          </header>

          <div className={styles.itemBody}>
            <p className={styles.description}>{item.description}</p>

            {item.tags && (
              /* SENIOR FIX: Semantic ul untuk list of technologies */
              <ul className={styles.tags} aria-label="Skills used">
                {item.tags.map((tag) => (
                  <li key={tag} style={{ listStyle: "none" }}>
                    <Tag size="xs">{tag}</Tag>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Spacer untuk mengisi kolom Grid yang kosong */}
        <div className={styles.spacer} aria-hidden="true" />
      </article>
    </Reveal>
  );
}

function ExperienceLayout() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.centeredLabel} css-reveal`}>
          <SectionLabel number="03" label="Experience" />
        </div>

        <div className="css-reveal">
          <h2 className={`${styles.headline} text-fade`}>
            A short timeline of{" "}
            <span className={`font-serif ${styles.italic} text-glow`}>
              things shipped
            </span>
            .
          </h2>
        </div>

        {/* SENIOR FIX: Jadikan timeline sebagai role="list" untuk Screen Reader */}
        <div className={styles.timeline} role="list">
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
