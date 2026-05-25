import Reveal from "../../../components/Reveal/Reveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import { useRef } from "react"; // Hapus useEffect dan useState
import { motion, useScroll, useTransform } from "framer-motion"; // ✅ 1. Import Framer Motion
import { useCardSpotlight } from "../../../hooks/useCardSpotlight";
import {
  MonitorIcon,
  ServerIcon,
  DatabaseIcon,
  TerminalIcon,
  CloudIcon,
  CubeIcon,
} from "../../../components/Icons/Icons";
import styles from "./AboutLayout.module.css";

// ✅ 2. Buat Komponen Kecil <Word /> untuk masing-masing kata
function Word({ children, progress, start, end }) {
  // useTransform akan memetakan nilai scroll (progress) ke opacity (0.15 -> 1)
  // Ini berjalan murni di Framer Motion, TIDAK memicu React re-render!
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return <motion.span style={{ opacity }}>{children} </motion.span>;
}

function ScrollWordRevealGroup({
  paragraphs,
  paragraphClassName = "",
  start = 0.9,
  end = 0.5,
}) {
  const ref = useRef(null);

  // ✅ 3. Gunakan useScroll dari Framer Motion
  // Offset secara otomatis melacak target. "start 70%" artinya animasi mulai saat target ada di 70% layar.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${start * 100}%`, `start ${end * 100}%`],
  });

  const totalWords = paragraphs.reduce(
    (acc, text) => acc + text.split(" ").length,
    0,
  );

  let globalWordIndex = 0;

  return (
    <div ref={ref}>
      {paragraphs.map((text, pIndex) => {
        const words = text.split(" ");
        return (
          <p key={pIndex} className={paragraphClassName}>
            {words.map((word, wIndex) => {
              const step = 1 / totalWords;
              const wordStart = globalWordIndex * step;
              const wordEnd = wordStart + step;

              globalWordIndex++;

              const isItalic = word.includes("*");
              const cleanWord = word.replace(/\*/g, "");

              return (
                // ✅ 4. Gunakan komponen Word dan berikan range progress-nya
                <Word
                  key={wIndex}
                  progress={scrollYProgress}
                  start={wordStart}
                  end={wordEnd}
                >
                  {isItalic ? (
                    <em className="font-serif">{cleanWord}</em>
                  ) : (
                    cleanWord
                  )}
                </Word>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

function AboutLayout() {
  const spotlight = useCardSpotlight();

  const aboutParagraphs = [
    "I'm Rafif Sava Adyvka Pratama — a full-stack engineer based in West Java, Indonesia. I've spent the last few years shipping web and mobile products under tight deadlines, from ERP modules used internally by enterprise teams to e-commerce platforms with real revenue on the line.",
    "My approach is opinionated: Clean Architecture, SOLID, type-safe boundaries, and relentless attention to the developer experience for whoever comes next. I care about *how* things are built almost as much as *what* gets built.",
    "Outside of work, I graduated from Harvard's CS50, took first place at the national Icomfest 2025 web design competition, and volunteer teaching tech to students who'd otherwise never touch a keyboard.",
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Frontend":
        return <MonitorIcon size={24} />;
      case "Backend":
        return <ServerIcon size={24} />;
      case "Database":
        return <DatabaseIcon size={24} />;
      case "Tools & Testing":
        return <TerminalIcon size={24} />;
      case "Cloud & DevOps":
        return <CloudIcon size={24} />;
      case "Software Engineering":
        return <CubeIcon size={24} />;
      default:
        return <CubeIcon size={24} />;
    }
  };

  const skillsData = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "Angular",
        "Tailwind CSS",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Backend",
      items: [
        "NestJS",
        "Node.js",
        "Express.js",
        "Laravel",
        "REST API",
        "Authentication",
        "RBAC",
      ],
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MySQL", "Firebase Firestore", "Prisma ORM"],
    },
    {
      category: "Tools & Testing",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "Figma",
        "Jest",
        "Cypress",
        "Unit Testing",
        "Integration Testing",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "Docker Compose",
        "OWASP",
        "JWT",
        "AWS",
        "CI/CD",
        "Cloud Deployment",
        "Biznet Cloud",
      ],
    },
    {
      category: "Software Engineering",
      items: [
        "Clean Architecture",
        "SOLID Principles",
        "OOP",
        "System Design",
        "Agile (Scrum)",
      ],
    },
  ];

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <SectionLabel number="01" label="About" />
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.headlineCol}>
            <h2 className={`${styles.headline} text-fade`}>
              An engineer who treats{" "}
              <span className={`font-serif ${styles.italic} text-glow`}>
                craft
              </span>{" "}
              like a contract — every commit a quiet promise that the next
              person reading this code will understand it.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className={styles.copyCol}>
            <ScrollWordRevealGroup
              paragraphs={aboutParagraphs}
              paragraphClassName={styles.paragraph}
              start={0.7}
              end={0.13}
            />
          </Reveal>
        </div>

        <div className={styles.skillsWrapper}>
          <Reveal delay={0.2}>
            <h3 className={styles.skillsTitle}>Technical Arsenal</h3>
          </Reveal>

          <div className={styles.skillsGrid}>
            {skillsData.map((skillGroup, idx) => (
              <Reveal key={idx} delay={0.2 + idx * 0.05}>
                <div
                  className={`card glass ${styles.skillCard}`}
                  {...spotlight}
                >
                  <div className={styles.cardIcon}>
                    {getCategoryIcon(skillGroup.category)}
                  </div>

                  <h4 className={styles.skillCategory}>
                    {skillGroup.category}
                  </h4>
                  <div className={styles.skillItems}>
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className={styles.skillTag}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutLayout;
