import NativeReveal from "../../../components/Reveal/NativeReveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import Tag from "../../../components/Tag/Tag";
import { experiences } from "../../../data/portfolio";
import styles from "./ExperienceLayout.module.css";

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    /* NativeReveal membungkus tanpa merusak struktur, karena kita pakai display: contents di CSS */
    <NativeReveal delay={index * 0.1} className="reveal-slide-up">
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
    </NativeReveal>
  );
}

function ExperienceLayout() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <NativeReveal className="reveal-slide-up">
          <div className={styles.centeredLabel}>
            <SectionLabel number="03" label="Experience" />
          </div>
        </NativeReveal>

        <NativeReveal delay={0.1} className="reveal-slide-up">
          <h2 className={`${styles.headline} text-fade`}>
            A short timeline of{" "}
            <span className={`font-serif ${styles.italic} text-glow`}>
              things shipped
            </span>
            .
          </h2>
        </NativeReveal>

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
