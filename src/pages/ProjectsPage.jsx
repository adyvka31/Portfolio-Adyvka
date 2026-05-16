import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell/PageShell";
import PageHero from "../components/PageHero/PageHero";
import Reveal from "../components/Reveal/Reveal";
import Tag from "../components/Tag/Tag";
import BottomCTA from "../components/BottomCTA/BottomCTA";
import { SearchIcon, ArrowUpRightIcon } from "../components/Icons/Icons";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { projectsList, projectFilters } from "../data/portfolio";
import styles from "./IndexPage.module.css";

function ProjectCard({ project }) {
  const spot = useCardSpotlight();
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`card glass ${styles.card}`}
      {...spot}
    >
      <div className={styles.cardHead}>
        <div className={styles.cardLabel}>{project.label}</div>
        {project.year && (
          <span className={styles.cardYear}>{project.year}</span>
        )}
      </div>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDescription}>{project.description}</p>
      <div className={styles.cardFooter}>
        <div className={styles.cardTags}>
          {project.tags.slice(0, 4).map((t) => (
            <Tag key={t} size="xs">
              {t}
            </Tag>
          ))}
        </div>
        <span className={styles.cardArrow}>
          <ArrowUpRightIcon size={12} />
        </span>
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projectsList.filter((p) => {
      const matchCat = filter === "all" || p.category === filter;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [filter, query]);

  return (
    <PageShell>
      <PageHero
        number="02"
        label="All Projects"
        title="Projects that shipped, not pitched."
        italicWord="shipped"
        description="A catalogue of everything I've designed, engineered, or shipped — filtered by stack or searched by name."
      />

      <section className={styles.controlsSection}>
        <div className={styles.controlsInner}>
          <Reveal className={styles.searchWrap}>
            <SearchIcon size={16} />
            <input
              type="text"
              placeholder="Search by name, stack, or keyword…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.searchInput}
            />
          </Reveal>
          <Reveal delay={0.05} className={styles.filters}>
            {projectFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`${styles.chip} ${filter === f.id ? styles.chipActive : ""}`}
              >
                {f.label}
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.gridInner}>
          {filtered.length === 0 ? (
            <p className={styles.empty}>No projects match that filter.</p>
          ) : (
            <div className={styles.grid}>
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.04}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
      <BottomCTA />
    </PageShell>
  );
}
