import { useState } from "react";
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
        <div className={`${styles.header} css-reveal`}>
          <div className={styles.headerText}>
            <SectionLabel number="02" label="Selected Work" />
            <h2 className={`${styles.headline} text-fade`}>
              Projects that{" "}
              <span className={`font-serif ${styles.italic} text-glow`}>
                shipped
              </span>
              ,<br /> not pitched.
            </h2>
          </div>

          {/* SENIOR FIX: Tambahkan aksesibilitas agar screen reader mengenali area filter */}
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
                // SENIOR FIX: Identifikasi state aktif untuk Screen Reader
                aria-pressed={activeFilter === f.id}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              visible={
                activeFilter === "all" || project.category === activeFilter
              }
            />
          ))}
        </div>

        <div className={`${styles.allRepos} css-reveal`}>
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
        </div>
      </div>
    </section>
  );
}

export default ProjectLayout;
