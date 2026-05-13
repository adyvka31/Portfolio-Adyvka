import Reveal from "../../../components/Reveal/Reveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import Tag from "../../../components/Tag/Tag";
import { experiences } from "../../../data/portfolio";
import styles from "./ExperienceLayout.module.css";

function TimelineItem({ item, index }) {
  // Even index → text on the left, content on the right (default)
  // Odd index → mirror it
  const isMirrored = index % 2 === 1;

  return (
    <Reveal delay={index * 0.05}>
      <div className={styles.item}>
        <div
          className={`${styles.dot} ${item.current ? styles.dotCurrent : ""}`}
        />

        <div
          className={`${styles.left} ${isMirrored ? styles.mirrorContent : ""}`}
        >
          {!isMirrored ? (
            <>
              <div
                className={`${styles.period} ${item.current ? styles.periodCurrent : ""}`}
              >
                {item.period}
              </div>
              <h3 className={styles.role}>{item.role}</h3>
              <div className={styles.company}>{item.company}</div>
            </>
          ) : (
            <p className={styles.description}>{item.description}</p>
          )}
        </div>

        <div
          className={`${styles.right} ${isMirrored ? styles.mirrorMeta : ""}`}
        >
          {!isMirrored ? (
            <>
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
            </>
          ) : (
            <>
              <div className={styles.period}>{item.period}</div>
              <h3 className={styles.role}>{item.role}</h3>
              <div className={styles.company}>{item.company}</div>
            </>
          )}
        </div>
      </div>
    </Reveal>
  );
}

function ExperienceLayout() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <SectionLabel number="04" label="Experience" />
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
