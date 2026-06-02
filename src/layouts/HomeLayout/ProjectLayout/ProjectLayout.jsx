import { useState } from "react";
import NativeReveal from "../../../components/Reveal/NativeReveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import { ArrowUpRightIcon } from "../../../components/Icons/Icons";
import {
  projects,
  projectFilters,
  personalInfo,
} from "../../../data/portfolio";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectLayout.module.css";

function ProjectLayout() {
  const [activeFilter, setActiveFilter] = useState("all");

  const FEATURED_IDS = [
    "databank",
    "ruangtumbuh",
    "fitsmart",
    "flutter",
    "ai-ticket-manager",
  ];

  const featuredProjects = FEATURED_IDS.map((id) =>
    projects.find((project) => project.id === id),
  ).filter(Boolean);

  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        <NativeReveal className={styles.header}>
          <div className={styles.headerText}>
            <SectionLabel number="02" label="Selected Work" />
            <h2 className={`${styles.headline} text-fade`}>
              Projects that{" "}
              <span className={`font-serif ${styles.italic} text-glow`}>
                shipped
              </span>
              , not pitched.
            </h2>
          </div>

          <div
            className={styles.filters}
            role="group"
            aria-label="Filter projects by category"
          >
            {projectFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`${styles.chip} ${
                  activeFilter === f.id ? styles.chipActive : ""
                }`}
                aria-pressed={activeFilter === f.id}
              >
                {f.label}
              </button>
            ))}
          </div>
        </NativeReveal>

        <div className={styles.grid}>
          {featuredProjects.map((project, idx) => (
            <NativeReveal
              key={project.id}
              delay={(idx % 3) * 0.15}
              className="reveal-slide-up"
              style={
                project.span === "lg"
                  ? {
                      gridColumn: "span 4 / span 4",
                      gridRow: "span 2 / span 2",
                    }
                  : project.span === "md"
                    ? { gridColumn: "span 3 / span 3" }
                    : { gridColumn: "span 2 / span 2" }
              }
            >
              <ProjectCard
                project={project}
                visible={
                  activeFilter === "all" || project.category === activeFilter
                }
              />
            </NativeReveal>
          ))}
        </div>

        <NativeReveal className={styles.allRepos}>
          <a
            href={personalInfo.socials.githubRepos}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.allReposLink}
            aria-label="View all repositories on GitHub"
          >
            See all 25 repositories on GitHub
            <ArrowUpRightIcon size={13} />
          </a>
        </NativeReveal>
      </div>
    </section>
  );
}

export default ProjectLayout;
