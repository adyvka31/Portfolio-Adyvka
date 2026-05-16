import Reveal from "../../../components/Reveal/Reveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import { useRef, useEffect, useState } from "react";
import { useCardSpotlight } from "../../../hooks/useCardSpotlight"; // 1. Import Hook Spotlight
import {
  MonitorIcon,
  ServerIcon,
  DatabaseIcon,
  TerminalIcon,
  CloudIcon,
  CubeIcon,
} from "../../../components/Icons/Icons";
import styles from "./AboutLayout.module.css";

// ... (ScrollWordRevealGroup tetap sama, saya lewati agar tidak kepanjangan)
function ScrollWordRevealGroup({
  paragraphs,
  paragraphClassName = "",
  start = 0.9,
  end = 0.5,
}) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startPoint = windowHeight * start;
      const endPoint = windowHeight * end;

      let currentProgress = (startPoint - rect.top) / (startPoint - endPoint);
      setProgress(Math.max(0, Math.min(1, currentProgress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [start, end]);

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

              let opacity = 0.15;
              if (progress >= wordEnd) opacity = 1;
              else if (progress > wordStart)
                opacity = 0.15 + ((progress - wordStart) / step) * 0.85;

              const isItalic = word.includes("*");
              const cleanWord = word.replace(/\*/g, "");

              return (
                <span
                  key={wIndex}
                  style={{ opacity, transition: "opacity 0.1s ease-out" }}
                >
                  {isItalic ? (
                    <em className="font-serif">{cleanWord}</em>
                  ) : (
                    cleanWord
                  )}{" "}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

function AboutLayout() {
  const spotlight = useCardSpotlight(); // 2. Inisialisasi Hook

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
                {/* 3. Masukkan class 'card' secara global dan panggil {...spotlight} di sini */}
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
