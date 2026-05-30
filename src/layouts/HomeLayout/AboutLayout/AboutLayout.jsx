import NativeReveal from "../../../components/Reveal/NativeReveal"; 
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion"; 
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

// Komponen Word: Fluid Opacity Mapping via GPU (Tetap menggunakan Framer Motion)
function Word({ children, progress, start, end }) {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <m.span style={{ opacity, display: "inline-block", marginRight: "0.24em" }}>
      {children}
    </m.span>
  );
}

// Komponen ScrollWordRevealGroup: Logic tetap utuh, performa sudah bagus
function ScrollWordRevealGroup({
  paragraphs,
  paragraphClassName = "",
  start = 0.85,
  end = 0.4,
}) {
  const ref = useRef(null);

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
          <p
            key={pIndex}
            className={paragraphClassName}
            style={{ marginBottom: "1.5rem" }}
          >
            {words.map((word, wIndex) => {
              const step = 1 / totalWords;
              const wordStart = globalWordIndex * step;
              const wordEnd = wordStart + step;

              globalWordIndex++;

              const isItalic = word.includes("*");
              const cleanWord = word.replace(/\*/g, "");

              return (
                <Word
                  key={wIndex}
                  progress={scrollYProgress}
                  start={wordStart}
                  end={wordEnd}
                >
                  {isItalic ? (
                    <em className="font-serif text-glow">{cleanWord}</em>
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
        {/* ✅ Ganti css-reveal dengan NativeReveal */}
        <NativeReveal className="reveal-slide-up">
          <SectionLabel number="01" label="About" />
        </NativeReveal>

        <div className={styles.grid}>
          {/* ✅ Ganti css-reveal dengan NativeReveal */}
          <NativeReveal className={`${styles.headlineCol} reveal-slide-up`}>
            <h2 className={`${styles.headline} text-fade`}>
              An engineer who treats{" "}
              <span className={`font-serif ${styles.italic} text-glow`}>
                craft
              </span>{" "}
              like a contract — every commit a quiet promise that the next
              person reading this code will understand it.
            </h2>
          </NativeReveal>

          {/* ✅ Ganti Reveal lama dengan NativeReveal */}
          <NativeReveal
            delay={0.1}
            className={`${styles.copyCol} reveal-slide-up`}
          >
            <ScrollWordRevealGroup
              paragraphs={aboutParagraphs}
              paragraphClassName={styles.paragraph}
              start={0.75}
              end={0.2}
            />
          </NativeReveal>
        </div>

        <div className={styles.skillsWrapper}>
          {/* ✅ Ganti css-reveal dengan NativeReveal */}
          <NativeReveal delay={0.2} className="reveal-slide-up">
            <h3 className={styles.skillsTitle}>Technical Arsenal</h3>
          </NativeReveal>

          <div className={styles.skillsGrid}>
            {skillsData.map((skillGroup, idx) => (
              /* ✅ Terapkan rumus stagger Grid (idx % 3) * 0.15 */
              <NativeReveal
                key={idx}
                delay={(idx % 3) * 0.15}
                className="reveal-slide-up"
              >
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

                  <ul
                    className={styles.skillItems}
                    aria-label={`${skillGroup.category} skills`}
                  >
                    {skillGroup.items.map((item, i) => (
                      <li key={i} className={styles.skillTag}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </NativeReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutLayout;
