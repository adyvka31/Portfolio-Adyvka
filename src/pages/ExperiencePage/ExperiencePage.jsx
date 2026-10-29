import SEO from "../../components/SEO/SEO";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import NativeReveal from "../../components/Reveal/NativeReveal";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import Card from "../../components/Card/Card";
import {
  experiencesList,
  allTeachingExperiences,
  allLeadershipExperiences,
} from "../../data/portfolio";
import styles from "./ExperiencePage.module.css";

function ExperienceBentoCard({ item }) {
  return <Card variant="bento" item={item} />;
}

export default function ExperiencePage() {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState("All");

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 370;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const workExperiences = experiencesList;
  const teachingExperiencesRaw = allTeachingExperiences;

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

  const otherExperiences = allLeadershipExperiences;

  const experienceCollectionKeywords = [
    "Experience Rafif Sava Adyvka Pratama",
    "Adyvka Work Experience",
    "PT Intisel Prodaktifakom",
    "Universitas Muhammadiyah Jakarta",
    "PT Ardyanda Digital Inovasi",
    "CV Richo Bahari",
    "SMA Lazuardi GCS",
    "SMPN 45 Depok",
    "Hajrabyadl",
    "Al Anshar",
    "Live In Rural Immersion",
    "International Backpacker",
    "IDN Student Council",
    "Barisan Muda Voluntrip",
    "IT Fest 2025",
    "Tech Educator",
    "Software Engineer Career",
  ];

  const experienceItems = [
    ...experiencesList.map((e) => ({
      name: `${e.role} at ${e.company}`,
      description: e.description,
      url: `/experience/${e.slug}`,
    })),
    ...allTeachingExperiences.map((t) => ({
      name: `${t.title} at ${t.institution}`,
      description: t.description,
      url: `/experience/${t.slug}`,
    })),
    ...allLeadershipExperiences.map((l) => ({
      name: `${l.title} at ${l.institution}`,
      description: l.description,
      url: `/experience/${l.slug}`,
    })),
  ];

  return (
    <PageShell>
      <SEO
        title="Experiences — Rafif Sava Adyvka Pratama"
        description="Professional engineering timeline, corporate roles, technical educator outreach, and leadership experiences of Rafif Sava Adyvka Pratama (Adyvka)."
        path="/experience"
        keywords={experienceCollectionKeywords}
        itemList={experienceItems}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Experience", item: "/experience" },
        ]}
      />
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
          {/* ✅ Terapkan NativeReveal di Header */}
          <NativeReveal className="reveal-slide-up">
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
          </NativeReveal>

          <div className={styles.carouselContainer}>
            <button
              onClick={() => scroll("left")}
              className={`${styles.arrowBtn} ${styles.arrowLeft}`}
              aria-label="Scroll to previous experience"
            >
              <span aria-hidden="true">←</span>
            </button>

            <div className={styles.timelineWrapper}>
              <div className={styles.spine} aria-hidden="true" />
              <ul
                className={styles.timelineInner}
                ref={scrollRef}
                aria-label="Timeline of work experiences"
              >
                {workExperiences.map((exp, i) => (
                  <li key={exp.slug} className={styles.cardWrapper}>
                    <NativeReveal delay={i * 0.1} className="reveal-slide-up">
                      <article className={styles.row}>
                        <Link
                          to={`/experience/${exp.slug}`}
                          className={styles.rowLinkOverlay}
                          aria-label={`View details for ${exp.role} at ${exp.company}`}
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
                    </NativeReveal>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => scroll("right")}
              className={`${styles.arrowBtn} ${styles.arrowRight}`}
              aria-label="Scroll to next experience"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* 02 - TEACHING EXPERIENCE */}
      <section className={styles.section} aria-label="Teaching Experience">
        <div className={styles.container}>
          {/* ✅ Terapkan NativeReveal di Header */}
          <NativeReveal className="reveal-slide-up">
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

              <div
                className={styles.filterTabs}
                role="group"
                aria-label="Filter teaching experiences"
              >
                {teachingTabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    aria-pressed={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${styles.filterTab} ${activeTab === tab ? styles.filterTabActive : ""}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </NativeReveal>

          <div className={styles.bentoGrid}>
            {teachingExperiences.map((item, i) => (
              /* ✅ Terapkan NativeReveal pada setiap Bento Card */
              <NativeReveal
                key={i}
                delay={(i % 3) * 0.1}
                className="reveal-slide-up"
              >
                <ExperienceBentoCard item={item} />
              </NativeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 - OTHER EXPERIENCE */}
      <section className={styles.section} aria-label="Other Experience">
        <div className={styles.container}>
          {/* ✅ Terapkan NativeReveal di Header */}
          <NativeReveal className="reveal-slide-up">
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
          </NativeReveal>

          <div className={styles.bentoGrid}>
            {otherExperiences.map((item, i) => (
              /* ✅ Terapkan NativeReveal pada setiap Bento Card */
              <NativeReveal
                key={i}
                delay={(i % 3) * 0.1}
                className="reveal-slide-up"
              >
                <ExperienceBentoCard item={item} />
              </NativeReveal>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}
