import SEO from "../../components/SEO/SEO";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import NativeReveal from "../../components/Reveal/NativeReveal";
import profilePhoto from "../../assets/profile2.webp";
import styles from "./AboutPage.module.css";
import Image from "../../components/Image/Image";

/* ====== DATA ====== */
const INTRO_FACTS = [
  { label: "Full name", value: "Rafif Sava Adyvka Pratama" },
  { label: "Alias", value: "Adyvka" },
  { label: "Location", value: "Depok, West Java, Indonesia" },
  { label: "Current role", value: "Software Engineer & PM at PT Intisel" },
  { label: "Education", value: "SMK IDN Boarding School (Year XII)" },
];

const TRACKS = [
  {
    year: "2021",
    age: "13",
    grade: "SMP · Year 1",
    tech: {
      label: "TECHNICAL",
      title: "First Lines of Code",
      detail: "Learned HTML, CSS, JavaScript, and initial 2D game prototypes.",
    },
    human: {
      label: "HUMAN",
      title: "Peer Mentoring",
      detail: "Began teaching peers through school's student-to-student sharing model.",
    },
  },
  {
    year: "2022",
    age: "14",
    grade: "SMP · Year 2",
    tech: {
      label: "TECHNICAL",
      title: "UI/UX & Robotics",
      detail: "Explored visual design systems, animation logic, and robotics.",
    },
    human: {
      label: "HUMAN",
      title: "OSIS Core Team",
      detail: "First leadership experience managing student events and documentation.",
    },
  },
  {
    year: "2023",
    age: "15",
    grade: "SMP · Year 3",
    tech: {
      label: "TECHNICAL",
      title: "Production Client Web",
      detail: "Shipped baperentcar.com — live car rental production deployment.",
    },
    human: {
      label: "HUMAN",
      title: "International Backpacker",
      detail: "Self-funded and navigated 3 countries (Singapore, Malaysia, Thailand).",
    },
  },
  {
    year: "2024",
    age: "16",
    grade: "SMK · Year 1",
    tech: {
      label: "TECHNICAL",
      title: "Full Stack Systems",
      detail: "Architectural patterns with modern TypeScript, React, and backend APIs.",
    },
    human: {
      label: "HUMAN",
      title: "Faculty Training & OSIS Lead",
      detail: "Trained teachers at SMPN 25 Depok and led SMK OSIS Event Division.",
    },
  },
  {
    year: "2025",
    age: "17",
    grade: "SMK · Year 2",
    tech: {
      label: "TECHNICAL",
      title: "Full Stack & Competitions",
      detail: "Delivered systems for UMJ and national technology competitions.",
    },
    human: {
      label: "HUMAN",
      title: "Village Community Live In",
      detail: "Full week integrated with traditional farming families in rural Indonesia.",
    },
  },
  {
    year: "2026",
    age: "17 → 18",
    grade: "SMK · Year 3",
    tech: {
      label: "TECHNICAL",
      title: "Enterprise ERP Engineering",
      detail: "Architecting and shipping Databank ERP at PT Intisel as Full Stack + PM.",
    },
    human: {
      label: "HUMAN",
      title: "Team Leadership & Mentoring",
      detail: "Directing developer workflows, code reviews, and onboarding junior peers.",
    },
  },
];

const TECH_STACK = [
  {
    layer: "LANGUAGES & RUNTIMES",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Dart",
      "PHP",
      "C / C++",
      "SQL",
      "Node.js",
    ],
  },
  {
    layer: "ARCHITECTURE & DESIGN",
    items: [
      "Clean Architecture",
      "SOLID Principles",
      "System Design & Anatomy",
      "Distributed Systems",
      "Modular Monorepos",
      "RBAC & Security",
    ],
  },
  {
    layer: "BACKEND & PLATFORMS",
    items: [
      "NestJS",
      "Express.js",
      "Laravel",
      "RESTful APIs",
      "Event-Driven Patterns",
      "Microservices",
    ],
  },
  {
    layer: "FRONTEND & MOBILE",
    items: [
      "Next.js",
      "React",
      "Flutter",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],
  },
  {
    layer: "DATABASES & STORAGE",
    items: [
      "PostgreSQL",
      "Prisma ORM",
      "MySQL",
      "Firebase Firestore",
      "Query Optimization",
    ],
  },
  {
    layer: "INFRASTRUCTURE & TOOLS",
    items: [
      "Docker & Compose",
      "CI/CD Pipelines",
      "GitHub Actions",
      "AWS Cloud",
      "Linux / Bash",
      "Postman",
    ],
  },
];

const SOFT_SKILLS = [
  {
    skill: "Software & System Architecture",
    from: "Designing resilient high-availability systems, domain boundaries, and multi-tenant platforms.",
  },
  {
    skill: "Polyglot Problem Solving",
    from: "Selecting optimal languages and paradigms (OOP, Functional, Systems) tailored to each engineering constraint.",
  },
  {
    skill: "Engineering Leadership & PM",
    from: "Head of OSIS Event Division; leading architecture and Databank ERP delivery at PT Intisel.",
  },
  {
    skill: "Technical Mentoring & Pedagogy",
    from: "Teaching development since 13; trained educators at SMPN 25 Depok and guided junior developer cohorts.",
  },
  {
    skill: "Cross-cultural Adaptability",
    from: "Selected out of hundreds for 3-country IDN International Backpacker program across ASEAN.",
  },
  {
    skill: "Community & Resilience",
    from: "1-week traditional village Live In program, living and farming alongside local agricultural communities.",
  },
];

const CURRENTLY = [
  {
    label: "BUILDING",
    title: "Databank ERP",
    detail: "Full Stack & PM leading enterprise platform at PT Intisel.",
  },
  {
    label: "STUDYING",
    title: "Final Year · SMK",
    detail: "SMK IDN Boarding School, graduating June 2027.",
  },
  {
    label: "DEEPENING",
    title: "System Architecture",
    detail: "Designing resilient backend patterns, clean RBAC, and micro-APIs.",
  },
  {
    label: "EXPLORING",
    title: "Global Engineering",
    detail: "Hybrid career path: high-impact product engineering + degree overseas.",
  },
];

const NEXT_INTENT = [
  {
    label: "Role Focus",
    value: "Software Engineer / Systems Architect (End-to-End Ownership)",
  },
  {
    label: "Core Stack",
    value: "Polyglot: TypeScript, Python, Dart, PHP, C++, SQL, Cloud Infra",
  },
  {
    label: "Specialization",
    value: "Clean Architecture, Scalable Distributed Systems, Multi-Platform Engineering",
  },
  {
    label: "Environment",
    value: "High-autonomy, engineering-driven teams building mission-critical software",
  },
];

/* ====== SUBCOMPONENTS ====== */

function TrackRow({ row, last }) {
  return (
    <div className={`${styles.trackRow} ${last ? styles.trackRowLast : ""}`}>
      <div className={styles.trackYear}>
        <span className={styles.trackYearNum}>{row.year}</span>
        <span className={styles.trackYearMeta}>age {row.age}</span>
        <span className={styles.trackYearGrade}>{row.grade}</span>
      </div>
      <article className={`glass ${styles.trackCard}`}>
        <span className={styles.trackBadge} aria-hidden="true">
          ◆ {row.tech.label}
        </span>
        <h3 className={styles.trackTitle}>{row.tech.title}</h3>
        <p className={styles.trackDetail}>{row.tech.detail}</p>
      </article>
      <article className={`glass ${styles.trackCard} ${styles.trackHuman}`}>
        <span className={styles.trackBadge} aria-hidden="true">
          ◇ {row.human.label}
        </span>
        <h3 className={styles.trackTitle}>{row.human.title}</h3>
        <p className={styles.trackDetail}>{row.human.detail}</p>
      </article>
    </div>
  );
}

function CurrentSlot({ item }) {
  return (
    <article className={styles.currentSlot}>
      <div className={styles.currentHeader}>
        <span className={`${styles.currentDot} pulse-dot`} aria-hidden="true" />
        <span className={styles.currentLabel}>{item.label}</span>
      </div>
      <h3 className={styles.currentTitle}>{item.title}</h3>
      <p className={styles.currentDetail}>{item.detail}</p>
    </article>
  );
}

/* ====== PAGE ====== */

export default function AboutPage() {
  return (
    <PageShell>
      <SEO
        title="About — Rafif Sava Adyvka Pratama"
        description="Learn more about Rafif Sava Adyvka Pratama (Adyvka) — Software Engineer & Systems Architect specializing in clean architecture, polyglot development, and distributed systems."
        path="/about"
        type="profile"
        keywords={[
          "About Rafif Sava Adyvka Pratama",
          "Adyvka Biography",
          "Adyvka Background",
          "Rafif Sava Career",
          "PT Intisel Databank ERP Lead",
          "SMK IDN Boarding School",
          "Harvard CS50 Alumni",
          "Software Architect Indonesia",
        ]}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "About", item: "/about" },
        ]}
      />
      <PageHero
        number="01"
        label="About"
        title="Built early. Kept building."
        italicWord="Kept building"
        description="Software Engineer & Systems Architect crafting robust multi-platform systems. Final-year student at SMK IDN Boarding School, currently leading system architecture and ERP delivery at PT Intisel."
        meta={[
          { label: "Age", value: "17" },
          { label: "Discipline", value: "Software Engineering & Architecture" },
          { label: "Core Stack", value: "Polyglot (TS, Python, Dart, PHP, C++)" },
          { label: "Experience", value: "5+ Years · Est. 2021" },
        ]}
      />

      {/* SECTION 1: INTRODUCTION & CAPABILITIES */}
      <section className={styles.section} aria-label="Introduction">
        <div className={styles.container}>
          <div className={styles.introWrap}>
            <div className={styles.introLeft}>
              <NativeReveal>
                <span className={styles.sectionLabel}>— Profile</span>
              </NativeReveal>
              <NativeReveal delay={0.1}>
                <h2 className={`font-serif ${styles.introQuote} text-glow`}>
                  "Engineer by training, operator by curriculum, teacher by habit."
                </h2>
              </NativeReveal>
              <NativeReveal delay={0.2}>
                <div className={styles.introBody}>
                  <p>
                    I'm Rafif Sava Adyvka Pratama (known online as <em>Adyvka</em>) — a
                    Software Engineer and Systems Architect based in West Java, Indonesia.
                    I architect and build robust, high-performance systems spanning web, mobile,
                    backend microservices, and cloud infrastructure. Rather than being confined
                    to a single stack, I treat programming languages and frameworks as deliberate
                    tools selected to solve specific technical challenges.
                  </p>
                  <p>
                    Currently at PT Intisel, I lead the Databank ERP build as lead systems
                    engineer and Project Manager — establishing clean architecture, domain
                    boundaries, database schema designs, and automated delivery pipelines.
                    My engineering foundation is rooted in computational rigor (Harvard CS50,
                    algorithms in C/C++ and Python), proven in national competitions, and reinforced
                    by mentoring developers since age 13.
                  </p>
                </div>
              </NativeReveal>
            </div>

            <NativeReveal delay={0.2}>
              <div className={`glass ${styles.introCard}`}>
                <div className={styles.introPhotoWrap}>
                  <div className={styles.introPhotoGlow} aria-hidden="true" />
                  <Image
                    src={profilePhoto}
                    alt="Rafif Sava Adyvka Pratama"
                    className={styles.introPhoto}
                    width={700}
                    height={700}
                  />
                  <div
                    className={styles.introPhotoOverlay}
                    aria-hidden="true"
                  />

                  <div className={`glass-hi ${styles.introPhotoBadge}`}>
                    <span className={styles.introPhotoBadgeStatus}>
                      <span
                        className={`${styles.introPhotoBadgeDot} pulse-dot`}
                        aria-hidden="true"
                      />
                      Available 2027
                    </span>
                    <span className={styles.introPhotoBadgeMeta}>
                      EST. 2021
                    </span>
                  </div>
                </div>

                <div className={styles.introCardContent}>
                  <span className={styles.introCardLabel}>— Identity Card</span>
                  <dl className={styles.introCardList}>
                    {INTRO_FACTS.map((f) => (
                      <div key={f.label} className={styles.introCardRow}>
                        <dt className={styles.introCardKey}>{f.label}</dt>
                        <dd className={styles.introCardValue}>{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </NativeReveal>
          </div>

          <div className={styles.skillsIntegratedWrap}>
            {/* TECHNICAL STACK */}
            <div className={styles.skillsColumn}>
              <NativeReveal className="reveal-slide-up">
                <div className={styles.skillsHeader}>
                  <span className={styles.sectionLabel}>
                    — Technical Skills
                  </span>

                  <h2 className={`${styles.skillsTitle} text-fade`}>
                    The{" "}
                    <span className={`font-serif ${styles.italic} text-glow`}>
                      stack
                    </span>
                    , by layer.
                  </h2>
                </div>
              </NativeReveal>

              <div className={`glass ${styles.skillPanel}`}>
                {TECH_STACK.map((row, index) => (
                  <NativeReveal
                    key={row.layer}
                    className="reveal-slide-up"
                    delay={index * 0.08}
                  >
                    <div className={styles.skillRow}>
                      <div className={styles.skillLabel}>
                        <span className={styles.skillBadge} aria-hidden="true">
                          ◆
                        </span>

                        <span className={styles.skillLabelText}>
                          {row.layer}
                        </span>
                      </div>

                      <ul
                        className={styles.skillTags}
                        aria-label={`${row.layer} Skills`}
                      >
                        {row.items.map((item) => (
                          <li key={item} className={styles.skillTag}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NativeReveal>
                ))}
              </div>
            </div>

            {/* CORE CAPABILITIES */}
            <div className={styles.skillsColumn}>
              <NativeReveal className="reveal-slide-up" delay={0.1}>
                <div className={styles.skillsHeader}>
                  <span className={styles.sectionLabel}>— Core Capabilities</span>

                  <h2 className={`${styles.skillsTitle} text-fade`}>
                    <span className={`font-serif ${styles.italic} text-glow`}>
                      Beyond
                    </span>{" "}
                    the code.
                  </h2>
                </div>
              </NativeReveal>

              <div
                className={`glass ${styles.skillPanel} ${styles.skillPanelSoft}`}
              >
                {SOFT_SKILLS.map((row, index) => (
                  <NativeReveal
                    key={row.skill}
                    className="reveal-slide-up"
                    delay={index * 0.08}
                  >
                    <div className={styles.softCompactRow}>
                      <div className={styles.softCompactLabel}>
                        <span
                          className={styles.softCompactBadge}
                          aria-hidden="true"
                        >
                          ◇
                        </span>

                        <span className={styles.softCompactName}>
                          {row.skill}
                        </span>
                      </div>

                      <span className={styles.softCompactFrom}>{row.from}</span>
                    </div>
                  </NativeReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TIMELINE */}
      <section className={styles.section} aria-label="Timeline">
        <div className={styles.container}>
          <NativeReveal>
            <div className={`${styles.sectionHead} ${styles.headCenter}`}>
              <span className={styles.sectionLabel}>
                — Two Tracks, Six Years
              </span>
              <h2 className={`${styles.sectionTitle} text-fade`}>
                Every year, one of{" "}
                <span className={`font-serif ${styles.italic} text-glow`}>
                  each
                </span>
                .
              </h2>
              <p className={styles.sectionLead}>
                Technical progression on the left, human leadership on the right.
              </p>
            </div>
          </NativeReveal>

          <div className={styles.trackList}>
            <span className={styles.trackSpine} aria-hidden="true" />
            {TRACKS.map((row, i) => (
              <NativeReveal key={row.year} delay={0.08}>
                <TrackRow row={row} last={i === TRACKS.length - 1} />
              </NativeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CURRENT FOCUS */}
      <section className={styles.section} aria-label="Current Focus">
        <div className={styles.container}>
          <NativeReveal>
            <div className={`${styles.sectionHead} ${styles.headCenter}`}>
              <span className={styles.sectionLabel}>— Right Now</span>
              <h2 className={`${styles.sectionTitle} text-fade`}>
                What's open in the{" "}
                <span className={`font-serif ${styles.italic} text-glow`}>
                  tabs
                </span>
                .
              </h2>
            </div>
          </NativeReveal>

          <NativeReveal
            delay={0.1}
            className={`glass ${styles.currentPanel}`}
          >
            {CURRENTLY.map((item, index) => (
              <div
                key={item.label}
                className="css-stagger-item"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <CurrentSlot item={item} />
              </div>
            ))}
          </NativeReveal>
        </div>
      </section>

      {/* SECTION 4: FUTURE INTENT */}
      <section className={styles.section} aria-label="Future Intents">
        <div className={styles.container}>
          <div className={styles.nextWrap}>
            <NativeReveal>
              <div className={styles.nextLeft}>
                <span className={styles.sectionLabel}>— What's Next</span>
                <h2 className={`${styles.sectionTitle} text-fade`}>
                  The shape of the next{" "}
                  <span className={`font-serif ${styles.italic} text-glow`}>
                    chapter
                  </span>
                  .
                </h2>
                <p className={styles.nextLead}>
                  Graduating June 2027. Seeking high-autonomy teams where I can
                  take end-to-end ownership of engineering deliverables from
                  database schema to user interface.
                </p>
              </div>
            </NativeReveal>

            <NativeReveal
              delay={0.15}
              as="dl"
              className={`glass ${styles.nextRight}`}
            >
              {NEXT_INTENT.map((item) => (
                <div key={item.label} className={styles.nextRow}>
                  <dt className={styles.nextRowLabel}>{item.label}</dt>
                  <dd className={styles.nextRowValue}>{item.value}</dd>
                </div>
              ))}
            </NativeReveal>
          </div>
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}
