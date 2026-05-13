import { useState } from "react";
import Reveal from "../../../components/Reveal/Reveal";
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

  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <div>
            <SectionLabel number="02" label="Selected Work" />
            <h2 className={`${styles.headline} text-fade`}>
              Projects that{" "}
              <span className={`font-serif ${styles.italic} text-glow`}>
                shipped
              </span>
              , not pitched.
            </h2>
          </div>

          <div className={styles.filters}>
            {projectFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`${styles.chip} ${
                  activeFilter === f.id ? styles.chipActive : ""
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              visible={
                activeFilter === "all" || project.category === activeFilter
              }
            />
          ))}
        </div>

        <Reveal className={styles.allRepos}>
          <a
            href={personalInfo.socials.githubRepos}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.allReposLink}
          >
            See all 25 repositories on GitHub
            <ArrowUpRightIcon size={13} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default ProjectLayout;
