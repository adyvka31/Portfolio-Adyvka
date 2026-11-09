import SEO from "../../components/SEO/SEO";
import { useState, useMemo, useDeferredValue, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import NativeReveal from "../../components/Reveal/NativeReveal";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import Card from "../../components/Card/Card";
import BookCard from "../../components/BookCard/BookCard";
import BookReaderModal from "../../components/BookReaderModal/BookReaderModal";
import EmptyState from "../../components/EmptyState/EmptyState";
import { SearchIcon } from "../../components/Icons/Icons";
import { projectsList, projectFilters } from "../../data/portfolio";
import styles from "./ProjectPage.module.css";

const PROJECT_KEYWORDS = [
  "Projects Rafif Sava Adyvka Pratama",
  "Adyvka Projects",
  "Buku Membuat Game Tanpa Coding",
  "Buku Membuat Website Menggunakan Framework",
  "Buku Pemrograman Scratch Adyvka",
  "Modul Belajar HTML CSS Tailwind CSS",
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
  url: p.category === "publications" ? `/projects?filter=publications` : `/projects/${p.slug}`,
}));

export default function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get("filter") || "web";

  const [filter, setFilter] = useState(
    projectFilters.some((f) => f.id === initialFilter) ? initialFilter : "web"
  );
  const [query, setQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const deferredQuery = useDeferredValue(query);

  // Sync state if URL query param changes
  useEffect(() => {
    const urlFilter = searchParams.get("filter");
    if (urlFilter && projectFilters.some((f) => f.id === urlFilter)) {
      setFilter(urlFilter);
    }
  }, [searchParams]);

  const handleQueryChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const handleFilterClick = useCallback(
    (id) => {
      setFilter(id);
      if (id === "web") {
        setSearchParams({}, { replace: true });
      } else {
        setSearchParams({ filter: id }, { replace: true });
      }
    },
    [setSearchParams]
  );

  const handleReadBook = useCallback((bookItem) => {
    setSelectedBook(bookItem);
  }, []);

  // Calculate count for each category
  const categoryCounts = useMemo(() => {
    const counts = {};
    projectsList.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return projectsList.filter((p) => {
      const matchCat = filter === "all" || p.category === filter;
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        (p.subtitle && p.subtitle.toLowerCase().includes(q)) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [filter, deferredQuery]);

  return (
    <PageShell>
      <SEO
        title="Projects & Publications — Rafif Sava Adyvka Pratama"
        description="Comprehensive portfolio of enterprise systems, software platforms, mobile apps, and published technical learning modules & books authored by Rafif Sava Adyvka Pratama (Adyvka)."
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
        label="Projects & Publications"
        title="Works that shipped, not pitched."
        italicWord="shipped"
        description="A catalogue of everything I've engineered, authored, or shipped — filter by software platforms or explore published technical learning modules & books."
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
                  {f.label}{" "}
                  <span style={{ opacity: 0.65, fontSize: "0.7rem" }}>
                    ({categoryCounts[f.id] || 0})
                  </span>
                </button>
              ))}
            </NativeReveal>
          </div>

          {/* --- GRID LIST PROJECTS & BOOKS --- */}
          <div className={styles.gridInner}>
            {filtered.length === 0 ? (
              <NativeReveal delay={0.1} className="reveal-slide-up">
                <EmptyState
                  title="No projects or books found"
                  message="No items match the selected filter or search query."
                />
              </NativeReveal>
            ) : (
              <div className={styles.grid}>
                {filtered.map((item, i) => {
                  const isBook = item.category === "publications" || item.type === "book";

                  if (isBook) {
                    return (
                      <div key={item.slug} className={styles.bookCardWrapper}>
                        <NativeReveal
                          delay={i * 0.1}
                          className="reveal-slide-up"
                        >
                          <BookCard item={item} onRead={handleReadBook} />
                        </NativeReveal>
                      </div>
                    );
                  }

                  return (
                    <NativeReveal
                      key={item.slug}
                      delay={i * 0.1}
                      className="reveal-slide-up"
                    >
                      <Card variant="project" item={item} />
                    </NativeReveal>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Book PDF Reader Modal */}
      {selectedBook && (
        <BookReaderModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}

      <BottomCTA />
    </PageShell>
  );
}
