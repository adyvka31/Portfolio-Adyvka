import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import NativeReveal from "../../../components/Reveal/NativeReveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import { ArrowUpRightIcon, ArrowRightIcon } from "../../../components/Icons/Icons";
import {
  projectsList,
  projectFilters,
  personalInfo,
} from "../../../data/portfolio";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectLayout.module.css";

function ProjectLayout() {
  const [activeFilter, setActiveFilter] = useState("all");

  const displayedProjects = useMemo(() => {
    if (activeFilter === "all") {
      // Curated flagship selection demonstrating full-stack, enterprise, and mobile capabilities
      const flagshipIds = [
        "richobahari",
        "terastani",
        "kepk",
        "databank",
        "ruangtumbuh",
        "fitsmart",
        "delifood",
      ];
      const selected = flagshipIds
        .map((id) => projectsList.find((p) => p.id === id))
        .filter(Boolean);
      return selected.length > 0 ? selected : projectsList.slice(0, 7);
    }
    return projectsList.filter((p) => p.category === activeFilter).slice(0, 6);
  }, [activeFilter]);

  const getColSpanClass = (idx, filter) => {
    if (filter === "all") {
      // First 4 flagship items take half width (span 3 of 6), last 3 take 1/3 width (span 2 of 6)
      return idx < 4 ? styles.gridColSpan3 : styles.gridColSpan2;
    }
    if (filter === "web") {
      return styles.gridColSpan3;
    }
    return styles.gridColSpan2;
  };

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
          {displayedProjects.map((project, idx) => (
            <NativeReveal
              key={`${activeFilter}-${project.id}`}
              delay={(idx % 3) * 0.12}
              className={`reveal-slide-up ${getColSpanClass(idx, activeFilter)}`}
            >
              <ProjectCard project={project} />
            </NativeReveal>
          ))}
        </div>

        <NativeReveal className={styles.footerActions}>
          <Link
            to="/projects"
            className={styles.allProjectsBtn}
            aria-label="Explore all shipped projects on the dedicated projects page"
          >
            <span>Explore All {projectsList.length} Shipped Projects</span>
            <ArrowRightIcon size={14} />
          </Link>

          <a
            href={personalInfo.socials.githubRepos}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
            aria-label="View all repositories on GitHub"
          >
            <span>GitHub Repositories</span>
            <ArrowUpRightIcon size={13} />
          </a>
        </NativeReveal>
      </div>
    </section>
  );
}

export default ProjectLayout;
