import Reveal from "../../../components/Reveal/Reveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import { useCardSpotlight } from "../../../hooks/useCardSpotlight";
import { achievements } from "../../../data/portfolio";
import styles from "./AchievementLayout.module.css";

function AchievementCard({ item }) {
  const spotlight = useCardSpotlight();

  return (
    <div className={`card glass ${styles.card}`} {...spotlight}>
      <div className={styles.head}>
        <span className={styles.icon}>{item.icon}</span>
        <span className={styles.year}>{item.year}</span>
      </div>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.description}>{item.description}</p>
    </div>
  );
}

function AchievementLayout() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <SectionLabel number="05" label="Recognition" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className={`${styles.headline} text-fade`}>
            <span className={`font-serif ${styles.italic} text-glow`}>
              Receipts
            </span>
            , not résumé filler.
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {achievements.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.06}>
              <AchievementCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AchievementLayout;
