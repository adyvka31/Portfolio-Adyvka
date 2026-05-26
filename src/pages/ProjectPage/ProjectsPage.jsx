import SEO from "../../components/SEO/SEO";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import Reveal from "../../components/Reveal/Reveal";
import Tag from "../../components/Tag/Tag";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import { SearchIcon, ArrowUpRightIcon } from "../../components/Icons/Icons";
import { useCardSpotlight } from "../../hooks/useCardSpotlight";
import { projectsList, projectFilters } from "../../data/portfolio";
import styles from "./ProjectPage.module.css";
import Image from "../../components/Image/Image";

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`card glass ${styles.cardModern}`}
    >
      {/* IMAGE AREA */}
      <div className={styles.cardImageWrap}>
        <Image
          src={project.thumbnail}
          alt={project.title}
          className={styles.cardImage}
          width={600}
          height={400}
        />

        <div className={styles.cardOverlay}>
          <div className={styles.overlayGradient} />
          <div className={styles.overlayContent}>
            <span className={styles.deployText}>View Live Deploy</span>
            <div className={styles.deployButton}>
              <ArrowUpRightIcon size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardMetaRow}>
          <span>{project.label}</span>
          {project.year && <span>{project.year}</span>}
        </div>

        <h3 className={styles.cardTitleModern}>{project.title}</h3>
        <p className={styles.cardDescModern}>{project.description}</p>

        <div className={styles.cardFooterModern}>
          <div className={styles.cardTagsModern}>
            {project.tags.slice(0, 3).map((tag) => (
              <Tag key={tag} size="xs">
                {tag}
              </Tag>
            ))}
          </div>

          <div className={styles.cardActionWrap}>
            <a
              href={project.link || `/projects/${project.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardActionButton}
              onClick={(e) => {
                if (project.link) e.stopPropagation();
              }}
            >
              <span className={styles.cardActionText}>Source</span>
              <ArrowUpRightIcon size={14} />
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState("web");
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
      <SEO
        title="Project"
        description="Engineer by training, operator by curriculum, teacher by habit. Full Stack Engineer and Mobile Developer based in Indonesia, building since 2021."
        path="/projects"
        type="article"
      />
      <PageHero
        number="02"
        label="All Projects"
        title="Projects that shipped, not pitched."
        italicWord="shipped"
        description="A catalogue of everything I've designed, engineered, or shipped — filtered by stack or searched by name."
      />

      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.controlsInner}>
            {/* Animasi pencarian (delay 0) */}
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

            {/* Animasi filter (delay 0.05, menyambung secara konsisten) */}
            <Reveal delay={0.05} className={styles.filters}>
              {projectFilters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`${styles.chip} ${
                    filter === f.id ? styles.chipActive : ""
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </Reveal>
          </div>

          {/* --- GRID LIST PROJECTS --- */}
          <div className={styles.gridInner}>
            {filtered.length === 0 ? (
              <Reveal delay={0.1}>
                <p className={styles.empty}>No projects match that filter.</p>
              </Reveal>
            ) : (
              <div className={styles.grid}>
                {filtered.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 0.05}>
                    <ProjectCard project={p} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}
