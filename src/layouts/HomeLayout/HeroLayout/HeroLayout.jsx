import Reveal from "../../../components/Reveal/Reveal";
import { ArrowRightIcon, GithubIcon } from "../../../components/Icons/Icons";
import { heroMetrics, personalInfo } from "../../../data/portfolio";
import styles from "./HeroLayout.module.css";

function HeroLayout() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.gridBg} grid-bg`} />
      <div className="aurora" />

      {/* Floating top-left status */}
      <div className={styles.statusLeft}>
        <span className={`${styles.statusDot} pulse-dot`} />
        Available for new opportunities · 2026
      </div>

      {/* Floating top-right meta */}
      <div className={styles.statusRight}>
        <div>{personalInfo.location}</div>
        <div className={styles.statusRightSub}>{personalInfo.timezone}</div>
      </div>

      <div className={styles.content}>
        <Reveal>
          <div className={styles.badge}>
            <span className={styles.diamond}>◆</span>
            {personalInfo.currentRole}
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className={styles.headline}>
            <span className="text-fade">Building</span>{" "}
            <span className={`font-serif ${styles.italic} text-glow`}>
              scalable
            </span>
            <br />
            <span className="text-fade">software</span>{" "}
            <span className="text-fade">that</span>{" "}
            <span className={`font-serif ${styles.italic} text-fade`}>
              ships.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className={styles.subhead}>
            I'm Adyvka — a full-stack engineer crafting production systems with
            React, NestJS, and PostgreSQL. Currently engineering an ERP platform
            serving enterprise clients, and exploring the edge of generative AI
            on the side.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className={styles.actions}>
            <a href="#work" className={`btn-primary ${styles.primaryBtn}`}>
              View selected work
              <ArrowRightIcon />
            </a>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.secondaryBtn} glass-hi`}
            >
              <GithubIcon />
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className={styles.metrics}>
            {heroMetrics.map((metric) => (
              <div key={metric.label} className={styles.metric}>
                <div className={`font-serif ${styles.metricValue} text-glow`}>
                  {metric.value === "1st" ? (
                    <>
                      1<span className={styles.metricSup}>st</span>
                    </>
                  ) : (
                    metric.value
                  )}
                </div>
                <div className={styles.metricLabel}>{metric.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <a href="#trusted" className={styles.scrollCue}>
        <span>Scroll</span>
        <span className={styles.scrollLine} />
      </a>
    </section>
  );
}

export default HeroLayout;
