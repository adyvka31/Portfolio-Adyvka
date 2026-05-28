import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import Reveal from "../../components/Reveal/Reveal";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import Tag from "../../components/Tag/Tag";
import { useCardSpotlight } from "../../hooks/useCardSpotlight";
import {
  experiencesList,
  recognitionData,
  extraTeachingExperiences,
  extraOtherExperiences,
} from "../../data/portfolio";
import styles from "./ExperiencePage.module.css";
import Image from "../../components/Image/Image";

function ExperienceBentoCard({ item }) {
  const spotlight = useCardSpotlight();

  return (
    <article
      className={`card glass ${styles.card}`}
      {...spotlight}
      aria-label={`Experience: ${item.title}`}
    >
      <div className={styles.imageContainer}>
        <Image
          src={item.image}
          alt={item.title}
          className={styles.cardImage}
          width={600}
          height={400}
        />
        <div className={styles.imageOverlay} aria-hidden="true" />
        <span className={styles.yearBadge} aria-label={`Year ${item.year}`}>
          {item.year}
        </span>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.head}>
          <div className={styles.institutionWrapper}>
            <span className={styles.institution}>— {item.institution}</span>
          </div>
          {item.icon && (
            <span className={styles.icon} aria-hidden="true">
              {item.icon}
            </span>
          )}
        </div>

        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.description}</p>

        {/* SENIOR FIX: Semantic list untuk tags */}
        <ul className={styles.tagWrapper} aria-label="Skills and technologies">
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

export default function ExperiencePage() {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState("All");

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      // SENIOR FIX: Menghitung lebar card secara dinamis jika diperlukan,
      // tapi 370px adalah angka fallback yang aman.
      const scrollAmount = 370;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const workExperiences = experiencesList;

  const baseTeachingExperiences = recognitionData.experience.filter(
    (exp) =>
      exp.title.toLowerCase().includes("instructor") ||
      exp.title.toLowerCase().includes("teaching"),
  );

  const teachingExperiencesRaw = [
    ...baseTeachingExperiences,
    ...extraTeachingExperiences,
  ];

  const teachingTabs = ["All", "Game Development", "Web Development", "Other"];

  const teachingExperiences = teachingExperiencesRaw.filter((item) => {
    if (activeTab === "All") return true;
    if (activeTab === "Game Development")
      return item.tags?.includes("Game Development");
    if (activeTab === "Web Development")
      return item.tags?.includes("Web Development");

    if (activeTab === "Other") {
      const isGameDev = item.tags?.includes("Game Development");
      const isWebDev = item.tags?.includes("Web Development");
      return !isGameDev && !isWebDev;
    }
    return true;
  });

  const baseOther = recognitionData.experience.filter(
    (exp) =>
      !exp.title.toLowerCase().includes("instructor") &&
      !exp.title.toLowerCase().includes("teaching"),
  );

  const otherExperiences = [...baseOther, ...extraOtherExperiences];

  return (
    <PageShell>
      <PageHero
        number="03"
        label="Experience"
        title="A timeline of things shipped."
        italicWord="things shipped"
        description="Every role, every responsibility, every system I've owned in production, alongside my journey in teaching and community building."
      />

      {/* 01 - WORK EXPERIENCE */}
      <section
        className={`${styles.section} ${styles.firstSection}`}
        aria-label="Work Experience"
      >
        <div className={styles.container}>
          <Reveal>
            <div className={`${styles.sectionHead} ${styles.headLeft}`}>
              <SectionLabel number="01" label="Work Experience" />
              <h2 className={`${styles.sectionTitle} text-fade`}>
                Professional{" "}
                <span className={`font-serif ${styles.italic} text-glow`}>
                  roles
                </span>{" "}
                & contracts.
              </h2>
            </div>
          </Reveal>

          <div className={styles.carouselContainer}>
            <button
              onClick={() => scroll("left")}
              className={`${styles.arrowBtn} ${styles.arrowLeft}`}
              aria-label="Scroll carousel left"
            >
              ←
            </button>

            <div className={styles.timelineWrapper}>
              <div className={styles.spine} aria-hidden="true" />
              <div
                className={styles.timelineInner}
                ref={scrollRef}
                role="list"
                aria-label="Timeline of work experiences"
              >
                {workExperiences.map((exp, i) => (
                  <div
                    key={exp.slug}
                    className={styles.cardWrapper}
                    role="listitem"
                  >
                    <Reveal delay={i * 0.08}>
                      {/* SENIOR FIX: Bungkus link dalam article */}
                      <article className={styles.row}>
                        <Link
                          to={`/experience/${exp.slug}`}
                          className={styles.rowLinkOverlay}
                          aria-label={`View details for ${exp.role}`}
                        />
                        <div
                          className={`${styles.dot} ${exp.current ? styles.dotCurrent : ""}`}
                          aria-hidden="true"
                        />

                        <div className={styles.rowContent}>
                          <div
                            className={`${styles.period} ${exp.current ? styles.periodCurrent : ""}`}
                          >
                            {exp.period}
                          </div>
                          <h3 className={styles.role}>{exp.role}</h3>
                          <div className={styles.company}>{exp.company}</div>
                          <p className={styles.description}>
                            {exp.description}
                          </p>
                          <span className={styles.cta} aria-hidden="true">
                            Read more →
                          </span>
                        </div>
                      </article>
                    </Reveal>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => scroll("right")}
              className={`${styles.arrowBtn} ${styles.arrowRight}`}
              aria-label="Scroll carousel right"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* 02 - TEACHING EXPERIENCE */}
      <section className={styles.section} aria-label="Teaching Experience">
        <div className={styles.container}>
          <Reveal>
            <div className={styles.headContentReverse}>
              <div className={`${styles.sectionHead} ${styles.headRight}`}>
                <SectionLabel number="02" label="Teaching Experience" />
                <h2 className={`${styles.sectionTitle} text-fade`}>
                  Sharing{" "}
                  <span className={`font-serif ${styles.italic} text-glow`}>
                    knowledge
                  </span>
                  .
                </h2>
              </div>

              {/* SENIOR FIX: A11y Tablist implementation */}
              <div
                className={styles.filterTabs}
                role="tablist"
                aria-label="Filter teaching experiences"
              >
                {teachingTabs.map((tab) => (
                  <button
                    key={tab}
                    role="tab"
                    aria-selected={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${styles.filterTab} ${activeTab === tab ? styles.filterTabActive : ""}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className={styles.bentoGrid}>
            {teachingExperiences.map((item, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06}>
                <ExperienceBentoCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 - OTHER EXPERIENCE */}
      <section className={styles.section} aria-label="Other Experience">
        <div className={styles.container}>
          <Reveal>
            <div className={`${styles.sectionHead} ${styles.headCenter}`}>
              <SectionLabel number="03" label="Other Experience" />
              <h2 className={`${styles.sectionTitle} text-fade`}>
                Leadership &{" "}
                <span className={`font-serif ${styles.italic} text-glow`}>
                  community
                </span>
                .
              </h2>
            </div>
          </Reveal>

          <div className={styles.bentoGrid}>
            {otherExperiences.map((item, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06}>
                <ExperienceBentoCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}
