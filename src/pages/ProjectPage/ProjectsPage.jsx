import SEO from "../../components/SEO/SEO";
import { useState, useMemo, useDeferredValue, useCallback } from "react";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import NativeReveal from "../../components/Reveal/NativeReveal";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import Card from "../../components/Card/Card";
import EmptyState from "../../components/EmptyState/EmptyState";
import { SearchIcon } from "../../components/Icons/Icons";
import { projectsList, projectFilters } from "../../data/portfolio";
import styles from "./ProjectPage.module.css";

const PROJECT_KEYWORDS = [
  "Projects Rafif Sava Adyvka Pratama",
  "Adyvka Projects",
  "Databank ERP",
  "Terastani",
  "KEPK UMJ",
  "Ruang Tumbuh",
  "Richo Bahari",
  "FitSmart",
  "JavaIsland",
  "Pusakaku",
  "Semua Bisa",
  "IDN Course",
  "Coffee Shop",
  "MyStyle",
  "DeliFood",
  "AI Ticket Manager",
  "Attendance App",
  "QR Scanner",
  "News App",
  "Quran App",
  "Software Engineering Portfolio",
  "Clean Architecture Projects",
];

const PROJECT_ITEMS = projectsList.map((p) => ({
  name: p.title,
  description: p.description,
  url: `/projects/${p.slug}`,
}));

export default function ProjectsPage() {
  const [filter, setFilter] = useState("web");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const handleQueryChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const handleFilterClick = useCallback((id) => {
    setFilter(id);
  }, []);

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return projectsList.filter((p) => {
      const matchCat = filter === "all" || p.category === filter;
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [filter, deferredQuery]);

  return (
    <PageShell>
      <SEO
        title="Projects — Rafif Sava Adyvka Pratama"
        description="Comprehensive portfolio of enterprise systems, software platforms, and mobile apps engineered and shipped by Rafif Sava Adyvka Pratama (Adyvka)."
        path="/projects"
        keywords={PROJECT_KEYWORDS}
        itemList={PROJECT_ITEMS}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Projects", item: "/projects" },
        ]}
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
            <NativeReveal className={`${styles.searchWrap} reveal-slide-up`}>
              <SearchIcon size={16} />
              <input
                type="text"
                placeholder="Search by name, stack, or keyword…"
                value={query}
                onChange={handleQueryChange}
                className={styles.searchInput}
              />
            </NativeReveal>

            <NativeReveal
              delay={0.1}
              className={`${styles.filters} reveal-slide-up`}
            >
              {projectFilters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => handleFilterClick(f.id)}
                  className={`${styles.chip} ${
                    filter === f.id ? styles.chipActive : ""
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </NativeReveal>
          </div>

          {/* --- GRID LIST PROJECTS --- */}
          <div className={styles.gridInner}>
            {filtered.length === 0 ? (
              <NativeReveal delay={0.1} className="reveal-slide-up">
                <EmptyState
                  title="No projects found"
                  message="No projects match the selected filter or search query."
                />
              </NativeReveal>
            ) : (
              <div className={styles.grid}>
                {filtered.map((p, i) => (
                  <NativeReveal
                    key={p.slug}
                    delay={i * 0.1}
                    className="reveal-slide-up"
                  >
                    <Card variant="project" item={p} />
                  </NativeReveal>
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
