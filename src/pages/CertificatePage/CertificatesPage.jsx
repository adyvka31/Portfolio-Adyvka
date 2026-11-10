import SEO from "../../components/SEO/SEO";
import { useState, useMemo, useDeferredValue, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import NativeReveal from "../../components/Reveal/NativeReveal";
import Card from "../../components/Card/Card";
import EmptyState from "../../components/EmptyState/EmptyState";
import { SearchIcon } from "../../components/Icons/Icons";
import { allCertificates, certificateFilters } from "../../data/portfolio";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import styles from "./CertificatesPage.module.css";

const CERTIFICATE_KEYWORDS = [
  "Certificates Rafif Sava Adyvka Pratama",
  "Adyvka Certificates",
  "Harvard CS50 Certificate",
  "Dicoding Certificates",
  "DQLab Data Analyst",
  "Skillvul C++",
  "AWS Cloud Practitioner",
  "Verified Developer Credentials",
];

const CERTIFICATE_ITEMS = (allCertificates || []).map((c) => ({
  name: c.title,
  description: c.description || `Issued by ${c.institution || c.issuer}`,
  url: `/certificates/${c.slug}`,
}));

export default function CertificatesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get("filter") || "all";

  const [filter, setFilter] = useState(
    certificateFilters.some((f) => f.id === initialFilter) ? initialFilter : "all"
  );
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  // Sync state if URL query param changes
  useEffect(() => {
    const urlFilter = searchParams.get("filter");
    if (urlFilter && certificateFilters.some((f) => f.id === urlFilter)) {
      setFilter(urlFilter);
    }
  }, [searchParams]);

  const handleQueryChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const handleFilterClick = useCallback(
    (id) => {
      setFilter(id);
      if (id === "all") {
        setSearchParams({}, { replace: true });
      } else {
        setSearchParams({ filter: id }, { replace: true });
      }
    },
    [setSearchParams]
  );

  // Calculate count for each category
  const categoryCounts = useMemo(() => {
    const counts = { all: (allCertificates || []).length };
    (allCertificates || []).forEach((c) => {
      if (c.category) {
        counts[c.category] = (counts[c.category] || 0) + 1;
      }
    });
    return counts;
  }, []);

  // Filter certificates based on selected category and search query
  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return (allCertificates || []).filter((c) => {
      const matchCat = filter === "all" || c.category === filter;
      const matchQ =
        !q ||
        c.title.toLowerCase().includes(q) ||
        (c.institution && c.institution.toLowerCase().includes(q)) ||
        (c.description && c.description.toLowerCase().includes(q)) ||
        (c.year && c.year.toLowerCase().includes(q)) ||
        (c.tags && c.tags.some((t) => t.toLowerCase().includes(q)));
      return matchCat && matchQ;
    });
  }, [filter, deferredQuery]);

  return (
    <PageShell>
      <SEO
        title="Certificates · Rafif Sava Adyvka Pratama"
        description="Verified credentials and engineering certifications earned by Rafif Sava Adyvka Pratama (Adyvka) from Harvard CS50, Dicoding, AWS, and DQLab."
        path="/certificates"
        keywords={CERTIFICATE_KEYWORDS}
        itemList={CERTIFICATE_ITEMS}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Certificates", item: "/certificates" },
        ]}
      />
      <PageHero
        number="05"
        label="Certificates"
        title="Verified knowledge."
        italicWord="Verified"
        description="A verified record of self-directed computational study, spanning Harvard CS50 fundamentals, AWS cloud architecture, backend systems, and artificial intelligence."
        meta={[
          { label: "Total Credentials", value: "23 Verified Certificates" },
          { label: "Core Foundation", value: "Harvard CS50x Graduate" },
          { label: "Architecture & Cloud", value: "AWS, Dicoding & DQLab" },
          { label: "Domains Covered", value: "Web, Cloud, Data & AI" },
        ]}
      />

      <section className={styles.gridSection} aria-label="Certificate Gallery">
        <div className={styles.gridInner}>
          {/* Controls: Search Bar & Filter Tabs */}
          <div className={styles.controlsSection}>
            <div className={styles.controlsInner}>
              <NativeReveal className={`${styles.searchWrap} reveal-slide-up`}>
                <SearchIcon size={16} />
                <input
                  type="text"
                  placeholder="Search credentials by title, skill, or issuer…"
                  value={query}
                  onChange={handleQueryChange}
                  className={styles.searchInput}
                  aria-label="Search certificates"
                />
              </NativeReveal>

              <NativeReveal
                delay={0.1}
                className={`${styles.filters} reveal-slide-up`}
              >
                {certificateFilters.map((f) => (
                  <button
                    key={f.id}
                    type="button"
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
          </div>

          {/* Grid or Empty State */}
          {filtered.length === 0 ? (
            <NativeReveal delay={0.1} className="reveal-slide-up">
              <EmptyState
                title="No certificates found"
                message="No credentials match the selected filter or search query."
              />
            </NativeReveal>
          ) : (
            <div className={styles.grid}>
              {filtered.map((item, i) => (
                <NativeReveal
                  key={item.slug}
                  delay={(i % 3) * 0.1}
                  className="reveal-slide-up"
                >
                  <Card variant="certificate" item={item} />
                </NativeReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}
