import SEO from "../components/SEO/SEO";
import PageShell from "../components/PageShell/PageShell";
import PageHero from "../components/PageHero/PageHero";
import BottomCTA from "../components/BottomCTA/BottomCTA";
import Reveal from "../components/Reveal/Reveal";
import { RevealGroup, RevealItem } from "../components/Reveal/RevealGroup";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { ArrowRightIcon } from "../components/Icons/Icons";
import { personalInfo } from "../data/portfolio";
import profilePhoto from "../assets/profile2.webp?w=400;800;1200&format=avif;webp&as=picture";
import styles from "./AboutPage.module.css";
import storyImage from "../assets/teach_teacher.webp?w=400;800;1200&format=avif;webp&as=picture";
import Image from "../components/Image/Image";

/* ====== DATA ====== */
// [DATA TETAP SAMA SEPERTI SEBELUMNYA]
const INTRO_FACTS = [
  { label: "Full name", value: "Rafif Sava Adyvka Pratama" },
  { label: "Goes by", value: "Adyvka" },
  { label: "Based in", value: "Depok, Indonesia" },
  { label: "Now", value: "Full Stack + PM at PT Intisel" },
  { label: "School", value: "SMK IDN Boarding · Year XII" },
];

const TRACKS = [
  {
    year: "2021",
    age: "13",
    grade: "SMP · Year 1",
    tech: {
      label: "TECHNICAL",
      title: "Web + Game Dev",
      detail: "First HTML, first 2D / 3D game prototypes.",
    },
    human: {
      label: "HUMAN",
      title: "Started teaching peers",
      detail: "School program: every student teaches what they learn.",
    },
  },
  {
    year: "2022",
    age: "14",
    grade: "SMP · Year 2",
    tech: {
      label: "TECHNICAL",
      title: "Design + Robotics",
      detail: "UI/UX, animation, and robotics fundamentals.",
    },
    human: {
      label: "HUMAN",
      title: "OSIS · Secretary-Treasurer",
      detail: "First leadership role, plus business survival training.",
    },
  },
  {
    year: "2023",
    age: "15",
    grade: "SMP · Year 3",
    tech: {
      label: "TECHNICAL",
      title: "App Dev + first paid client",
      detail: "Shipped baperentcar.com — still live in production.",
    },
    human: {
      label: "HUMAN",
      title: "Backpacker · SE Asia",
      detail: "Singapore, Malaysia, Thailand. One week, school program.",
    },
  },
  {
    year: "2024",
    age: "16",
    grade: "SMK · Year 1",
    tech: {
      label: "TECHNICAL",
      title: "Advanced Web Engineering",
      detail: "Systems thinking, real architecture, modern stack.",
    },
    human: {
      label: "HUMAN",
      title: "OSIS · Event Division Lead",
      detail:
        "Ran a one-week development training for faculty at SMPN 25 Depok.",
    },
  },
  {
    year: "2025",
    age: "17",
    grade: "SMK · Year 2",
    tech: {
      label: "TECHNICAL",
      title: "Advanced App Engineering + First contract",
      detail: "Full Stack at Universitas Muhammadiyah Jakarta.",
    },
    human: {
      label: "HUMAN",
      title: "Semarang · Survival week",
      detail: "Solo-dropped, manual labor, earned my own way home.",
    },
  },
  {
    year: "2026",
    age: "17 → 18",
    grade: "SMK · Year 3",
    tech: {
      label: "TECHNICAL",
      title: "PT Intisel · Full Stack + PM",
      detail: "Owning architecture and delivery for the Databank ERP.",
    },
    human: {
      label: "HUMAN",
      title: "Mentoring juniors",
      detail: "Code review, project meetings, technical onboarding.",
    },
  },
];

const TECH_STACK = [
  {
    layer: "FRONTEND",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Vite",
    ],
  },
  {
    layer: "BACKEND",
    items: ["NestJS", "Node.js", "Express", "REST APIs", "Auth", "RBAC"],
  },
  {
    layer: "DATABASE",
    items: ["PostgreSQL", "Prisma ORM", "MySQL", "Firestore"],
  },
  { layer: "MOBILE", items: ["Flutter", "Dart", "Provider", "Firebase Auth"] },
  {
    layer: "TOOLS & INFRA",
    items: ["Git", "Docker", "GitHub Actions", "Vercel", "Postman", "Figma"],
  },
];

const SOFT_SKILLS = [
  {
    skill: "Public Speaking",
    from: "Teaching since 13. Faculty training at SMPN 25 Depok at 16.",
  },
  {
    skill: "Project Management",
    from: "OSIS Event Division Lead. ERP delivery at PT Intisel.",
  },
  {
    skill: "Cross-cultural Fluency",
    from: "SE Asia backpacker. English-heavy boarding curriculum.",
  },
  {
    skill: "Survival & Resilience",
    from: "Earned my way home from a week of manual labor in Semarang.",
  },
  {
    skill: "Empathy & Community",
    from: "Volunteer work with elderly and children since SMP.",
  },
];

const STORIES = [
  {
    eyebrow: "SMK · Survival week · Semarang",
    title: "Seven days. One return ticket I had to earn.",
    body: 'My school sends students alone to a city they don\'t know — one week, no safety net, you work for your food and earn your way home. I drew Semarang. For seven days I distributed telecommunications construction equipment to contractor sites. I came home with a permanent recalibration of what "hard work" actually means.',
    image: storyImage,
  },
  {
    eyebrow: "SMK Year 1 · SMPN 25 Depok",
    title: "Teaching the teachers.",
    body: "By 16 I'd been teaching peers for three years. But teaching teachers was different — standing in front of people who'd been teaching longer than I'd been alive, explaining how to think about software. That's when I learned the difference between knowing something and being able to hand it to someone else.",
    image: storyImage,
  },
  {
    eyebrow: "SMP · Business survival training",
    title: "Aqua and ciki, twice the price.",
    body: "The exercise was simple: take your pocket money, buy at retail, resell at a markup, and don't lie about it. I stocked snacks and water, then sold them where context made them valuable. Roughly doubled my money. A product is worth what you can articulate it's worth.",
    image: storyImage,
  },
];

const CURRENTLY = [
  {
    label: "BUILDING",
    title: "Databank ERP",
    detail: "Full Stack + project lead on PT Intisel's ERP system.",
  },
  {
    label: "STUDYING",
    title: "Final year, SMK",
    detail: "Graduating June 2027. Classroom hours waived.",
  },
  {
    label: "LEARNING",
    title: "Distributed systems",
    detail: "Working through DDIA, prototyping event sourcing.",
  },
  {
    label: "PLANNING",
    title: "University abroad",
    detail: "Hybrid path: engineering work + degree overseas.",
  },
];

const NEXT_INTENT = [
  { label: "Goal", value: "Hybrid — engineering work plus university abroad" },
  {
    label: "Stack",
    value:
      "TypeScript-first product stacks (React, Next, NestJS, Postgres, Flutter)",
  },
  {
    label: "Team shape",
    value: "Small enough that one engineer can own a feature end to end",
  },
  {
    label: "Geography",
    value: "Remote-first, time-zone friendly to SE Asia or Europe",
  },
  {
    label: "Industry",
    value: "Product companies over agencies — building things people return to",
  },
  {
    label: "What I bring",
    value: "Engineer, project manager, and teacher in one role",
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
      {/* ✅ TAMBAHKAN CLASS "glass" DI SINI */}
      <div className={`glass ${styles.trackCard}`}>
        <span className={styles.trackBadge}>◆ {row.tech.label}</span>
        <h3 className={styles.trackTitle}>{row.tech.title}</h3>
        <p className={styles.trackDetail}>{row.tech.detail}</p>
      </div>
      {/* ✅ TAMBAHKAN CLASS "glass" DI SINI */}
      <div className={`glass ${styles.trackCard} ${styles.trackHuman}`}>
        <span className={styles.trackBadge}>◇ {row.human.label}</span>
        <h3 className={styles.trackTitle}>{row.human.title}</h3>
        <p className={styles.trackDetail}>{row.human.detail}</p>
      </div>
    </div>
  );
}

function StoryCard({ story }) {
  const spot = useCardSpotlight();
  return (
    // ✅ StoryCard sebenarnya SUDAH menggunakan 'glass', saya tambah 'card' agar selaras dengan HomePage
    <article
      className={`card glass ${styles.storyCard} ${story.feature ? styles.storyFeature : ""}`}
      {...spot}
    >
      <span className={styles.storyEyebrow}>{story.eyebrow}</span>
      <h3 className={styles.storyTitle}>{story.title}</h3>
      <p className={styles.storyBody}>{story.body}</p>
    </article>
  );
}

function CurrentSlot({ item }) {
  return (
    <div className={styles.currentSlot}>
      <div className={styles.currentHeader}>
        <span className={`${styles.currentDot} pulse-dot`} />
        <span className={styles.currentLabel}>{item.label}</span>
      </div>
      <h3 className={styles.currentTitle}>{item.title}</h3>
      <p className={styles.currentDetail}>{item.detail}</p>
    </div>
  );
}

/* ====== PAGE ====== */

export default function AboutPage() {
  return (
    <PageShell>
      <SEO
        title="About"
        description="Engineer by training, operator by curriculum, teacher by habit. Full Stack Engineer and Mobile Developer based in Indonesia, building since 2021."
        path="/about"
      />
      <PageHero
        number="01"
        label="About"
        title="Built early. Kept building."
        italicWord="Kept building"
        description="I'm Rafif Sava Adyvka Pratama — Full Stack Engineer, Mobile Developer, and in my final year at SMK IDN Boarding School. I started writing HTML at thirteen. Today, at seventeen, I'm leading the build of an enterprise ERP at PT Intisel. The five years between those two points are what this page is actually about."
        meta={[
          { label: "Age", value: "17" },
          { label: "Graduating", value: "Jun 2027" },
          { label: "School", value: "SMK IDN Boarding" },
          { label: "In tech since", value: "2021 · age 13" },
        ]}
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.introWrap}>
            <div className={styles.introLeft}>
              <Reveal>
                <span className={styles.sectionLabel}>— Introduction</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className={`font-serif ${styles.introQuote} text-glow`}>
                  "Engineer by training, operator by curriculum, teacher by
                  habit."
                </h2>
              </Reveal>
              <div className={styles.introBody}>
                <p>
                  I'm Rafif Sava Adyvka Pratama — everything I ship goes out as{" "}
                  <em>Adyvka</em>. Based in West Java, Indonesia, I'm a Full
                  Stack Engineer and Mobile Developer who works end-to-end
                  across the modern product stack: React and Next on the
                  frontend, NestJS and PostgreSQL on the backend, Flutter and
                  Firebase when the screen gets smaller. At PT Intisel I
                  currently lead the Databank ERP build as both Project Manager
                  and lead engineer — owning architecture, delivery cadence, and
                  code review across the team.
                </p>
                <p>
                  Three things compound in how I work, and I keep doing all
                  three because they sharpen each other: production engineering,
                  project delivery, and teaching. I've shipped code under real
                  deadlines since fifteen, led my school's student council event
                  division for two years, and taught development to peers since
                  thirteen and to faculty at SMPN 25 Depok at sixteen.
                </p>
              </div>
            </div>

            <Reveal delay={0.1}>
              {/* ✅ TAMBAHKAN CLASS "glass" UNTUK KARTU INTRO */}
              <div className={`glass ${styles.introCard}`}>
                <div className={styles.introPhotoWrap}>
                  <div className={styles.introPhotoGlow} aria-hidden="true" />
                  <Image
                    src={profilePhoto}
                    alt="Rafif Sava Adyvka Pratama"
                    className={styles.introPhoto}
                    width={500}
                    height={500}
                  />
                  <div
                    className={styles.introPhotoOverlay}
                    aria-hidden="true"
                  />

                  {/* ✅ TAMBAHKAN CLASS "glass-hi" UNTUK BADGE FOTO (lebih solid) */}
                  <div className={`glass-hi ${styles.introPhotoBadge}`}>
                    <span className={styles.introPhotoBadgeStatus}>
                      <span
                        className={`${styles.introPhotoBadgeDot} pulse-dot`}
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
                  <div className={styles.introCardList}>
                    {INTRO_FACTS.map((f) => (
                      <div key={f.label} className={styles.introCardRow}>
                        <span className={styles.introCardKey}>{f.label}</span>
                        <span className={styles.introCardValue}>{f.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className={styles.skillsIntegratedWrap}>
              <div className={styles.skillsColumn}>
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
                {/* ✅ TAMBAHKAN CLASS "glass" UNTUK PANEL SKILL KIRI */}
                <div className={`glass ${styles.skillPanel}`}>
                  {TECH_STACK.map((row) => (
                    <div key={row.layer} className={styles.skillRow}>
                      <div className={styles.skillLabel}>
                        <span className={styles.skillBadge}>◆</span>
                        <span className={styles.skillLabelText}>
                          {row.layer}
                        </span>
                      </div>
                      <div className={styles.skillTags}>
                        {row.items.map((item) => (
                          <span key={item} className={styles.skillTag}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.skillsColumn}>
                <div className={styles.skillsHeader}>
                  <span className={styles.sectionLabel}>— Soft Skills</span>
                  <h2 className={`${styles.skillsTitle} text-fade`}>
                    <span className={`font-serif ${styles.italic} text-glow`}>
                      Beyond
                    </span>{" "}
                    the code.
                  </h2>
                </div>
                {/* ✅ TAMBAHKAN CLASS "glass" UNTUK PANEL SKILL KANAN */}
                <div
                  className={`glass ${styles.skillPanel} ${styles.skillPanelSoft}`}
                >
                  {SOFT_SKILLS.map((row) => (
                    <div key={row.skill} className={styles.softCompactRow}>
                      <div className={styles.softCompactLabel}>
                        <span className={styles.softCompactBadge}>◇</span>
                        <span className={styles.softCompactName}>
                          {row.skill}
                        </span>
                      </div>
                      <span className={styles.softCompactFrom}>{row.from}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Reveal>
            <div className={`${styles.sectionHead} ${styles.headCenter}`}>
              <span className={styles.sectionLabel}>
                — Two Tracks, Five Years
              </span>
              <h2 className={`${styles.sectionTitle} text-fade`}>
                Every year, one of{" "}
                <span className={`font-serif ${styles.italic} text-glow`}>
                  each
                </span>
                .
              </h2>
              <p className={styles.sectionLead}>
                Technical on the left. Human on the right. They were never
                separate — that's the point.
              </p>
            </div>
          </Reveal>
          <RevealGroup className={styles.trackList} stagger={0.1}>
            <span className={styles.trackSpine} aria-hidden="true" />
            {TRACKS.map((row, i) => (
              <RevealItem key={row.year}>
                <TrackRow row={row} last={i === TRACKS.length - 1} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Reveal>
            <div className={`${styles.sectionHead} ${styles.headLeft}`}>
              <span className={styles.sectionLabel}>
                — Stories Worth Telling
              </span>
              <h2 className={`${styles.sectionTitle} text-fade`}>
                The moments that{" "}
                <span className={`font-serif ${styles.italic} text-glow`}>
                  recalibrated
                </span>{" "}
                me.
              </h2>
            </div>
          </Reveal>
          <RevealGroup className={styles.storyGrid} stagger={0.15}>
            {STORIES.map((s) => (
              <RevealItem key={s.title}>
                <StoryCard story={s} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Reveal>
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
          </Reveal>
          <Reveal delay={0.06}>
            {/* ✅ TAMBAHKAN CLASS "glass" DI PARENT CURRENT PANEL */}
            <RevealGroup
              className={`glass ${styles.currentPanel}`}
              stagger={0.1}
            >
              {CURRENTLY.map((item) => (
                <RevealItem key={item.label}>
                  <CurrentSlot item={item} />
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.nextWrap}>
            <Reveal>
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
                  Graduating June 2027. Starting university abroad shortly after
                  — without stepping away from engineering work. I'm looking for
                  a team where that hybrid actually fits.
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className={styles.nextCta}
                >
                  Reach out <ArrowRightIcon size={14} />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              {/* ✅ TAMBAHKAN CLASS "glass" DI NEXT PANEL KANAN */}
              <div className={`glass ${styles.nextRight}`}>
                {NEXT_INTENT.map((item) => (
                  <div key={item.label} className={styles.nextRow}>
                    <span className={styles.nextRowLabel}>{item.label}</span>
                    <span className={styles.nextRowValue}>{item.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}
