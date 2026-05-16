import { Link } from "react-router-dom";
import PageShell from "../components/PageShell/PageShell";
import PageHero from "../components/PageHero/PageHero";
import Reveal from "../components/Reveal/Reveal";
import BottomCTA from "../components/BottomCTA/BottomCTA";
import { experiencesList } from "../data/portfolio";
import styles from "./ExperiencePage.module.css";

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageHero
        number="03"
        label="Experience"
        title="A timeline of things shipped."
        italicWord="things shipped"
        description="Every role, every responsibility, every system I've owned in production."
      />

      <section className={styles.timelineSection}>
        <div className={styles.timelineInner}>
          <div className={styles.spine} />
          {experiencesList.map((exp, i) => (
            <Reveal key={exp.slug} delay={i * 0.08}>
              <Link to={`/experience/${exp.slug}`} className={styles.row}>
                <div
                  className={`${styles.dot} ${exp.current ? styles.dotCurrent : ""}`}
                />
                <div className={styles.rowContent}>
                  <div
                    className={`${styles.period} ${exp.current ? styles.periodCurrent : ""}`}
                  >
                    {exp.period}
                  </div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <div className={styles.company}>{exp.company}</div>
                  <p className={styles.description}>{exp.description}</p>
                  <span className={styles.cta}>Read more →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}
