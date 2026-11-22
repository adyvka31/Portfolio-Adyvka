import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import NativeReveal from "../../../components/Reveal/NativeReveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import Card from "../../../components/Card/Card";
import { ArrowUpRightIcon, ArrowRightIcon } from "../../../components/Icons/Icons";
import {
  projectsList,
  projectFilters,
  personalInfo,
} from "../../../data/portfolio";
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

  const getCardDelay = (idx, filter) => {
    if (filter === "all") {
      // Row 1 & 2 (idx 0..3): 2 cards per row (col 0 = left, col 1 = right)
      if (idx < 4) {
        return (idx % 2) * 0.12;
      }
      // Row 3 (idx 4..6): 3 cards per row (col 0 = left, col 1 = mid, col 2 = right)
      return ((idx - 4) % 3) * 0.12;
    }
    if (filter === "web") {
      // 2 cards per row
      return (idx % 2) * 0.12;
    }
    // 3 cards per row
    return (idx % 3) * 0.12;
  };

  const getResponsiveVisibilityClass = (idx) => {
    if (idx >= 6) {
      return styles.hideOnTabletAndBelow;
    }
    if (idx >= 5) {
      return styles.hideOnMobile;
    }
    return "";
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
              delay={getCardDelay(idx, activeFilter)}
              className={`reveal-slide-up ${getColSpanClass(idx, activeFilter)} ${getResponsiveVisibilityClass(idx)}`}
            >
              <Card variant="project" item={project} />
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
