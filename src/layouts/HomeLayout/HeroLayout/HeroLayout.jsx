import { useEffect, useRef } from "react";
import Reveal from "../../../components/Reveal/Reveal";
import { ArrowRightIcon, GithubIcon } from "../../../components/Icons/Icons";
import { heroMetrics, personalInfo } from "../../../data/portfolio";
import styles from "./HeroLayout.module.css";
import profilePhoto from "../../../assets/profile.webp?w=400;800;1200&format=avif;webp&as=picture";
import Image from "../../../components/Image/Image";

function HeroLayout() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (heroRef.current) {
          if (entry.isIntersecting) {
            heroRef.current.classList.remove(styles.paused);
          } else {
            heroRef.current.classList.add(styles.paused);
          }
        }
      },
      { threshold: 0.1 },
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={`${styles.gridBg} grid-bg`} />
      <div className="aurora" />

      <div className="meteors">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="meteor"></span>
        ))}
      </div>

      <div className={`${styles.statusLeft} css-reveal`}>
        <span className={styles.statusLine} />
        <span className={`${styles.statusDot} pulse-dot`} />
        <span>Available for new opportunities · 2026</span>
      </div>

      <div className={`${styles.statusRight} css-reveal`}>
        <span>
          {personalInfo.location}
          <span className={styles.statusRightSub}>
            {" "}
            // {personalInfo.timezone}
          </span>
        </span>
        <span className={styles.statusLine} />
      </div>

      <div className={styles.content}>
        <Reveal>
          <div className={styles.badge}>
            <span className={styles.diamond}>◆</span>
            {personalInfo.currentRole}
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className={styles.headlineWrapper}>
            <h1 className={`${styles.headline} ${styles.textBack}`}>
              <div>
                <span className="text-fade">Rafif</span>
                <span className={styles.gapTop}></span>
                <span className="text-fade">Sava</span>
              </div>
              <div>
                <span
                  className={`font-serif ${styles.italic} text-glow ${styles.shiftAdyvka}`}
                >
                  Adyvka
                </span>
                <span className={styles.gapBottom}></span>
                <span className={`text-fade ${styles.shiftPratama}`}>
                  Pratama
                </span>
              </div>
            </h1>

            <div className={styles.heroBgPhotoContainer}>
              <Image
                src={profilePhoto}
                alt="Rafif Sava"
                className={styles.heroBgPhoto}
                width={800}
                height={1000}
                priority={true}
              />
            </div>

            <h1
              className={`${styles.headline} ${styles.textFront}`}
              aria-hidden="true"
            >
              <div>
                <span className={styles.textStrokeFade}>Rafif</span>
                <span className={styles.gapTop}></span>
                <span className={styles.textStrokeFade}>Sava</span>
              </div>
              <div>
                <span
                  className={`font-serif ${styles.italic} ${styles.textStrokeGlow} ${styles.shiftAdyvka}`}
                >
                  Adyvka
                </span>
                <span className={styles.gapBottom}></span>
                <span
                  className={`${styles.textStrokeFade} ${styles.shiftPratama}`}
                >
                  Pratama
                </span>
              </div>
            </h1>
          </div>
        </Reveal>

        <p className={`${styles.subhead} css-reveal`}>
          I'm Adyvka — a full-stack engineer crafting production systems with
          React, NestJS, and PostgreSQL. Currently engineering an ERP platform
          serving enterprise clients, and exploring the edge of generative AI on
          the side.
        </p>

        <div className={`${styles.actions} css-reveal`}>
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

        <div className={`${styles.metrics} css-reveal`}>
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
      </div>

      <a href="#trusted" className={`${styles.scrollCue} css-reveal`}>
        <span>Scroll</span>
        <span className={styles.scrollLine} />
      </a>
    </section>
  );
}

export default HeroLayout;
