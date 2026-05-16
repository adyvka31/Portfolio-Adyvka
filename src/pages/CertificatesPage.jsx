import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell/PageShell";
import PageHero from "../components/PageHero/PageHero";
import Reveal from "../components/Reveal/Reveal";
import Tag from "../components/Tag/Tag";
import BottomCTA from "../components/BottomCTA/BottomCTA";
import { SearchIcon, ArrowUpRightIcon } from "../components/Icons/Icons";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { allCertificates } from "../data/portfolio";
import styles from "./IndexPage.module.css";
import local from "./CertificatesPage.module.css";

function CertCard({ cert }) {
  const spot = useCardSpotlight();
  return (
    <Link
      to={`/certificates/${cert.slug}`}
      className={`card glass ${local.card}`}
      {...spot}
    >
      <div className={local.thumb}>
        <img src={cert.image} alt={cert.title} className={local.thumbImg} />
        <div className={local.thumbOverlay} />
      </div>
      <div className={local.body}>
        <div className={local.headRow}>
          <span className={local.issuer}>{cert.institution}</span>
          <span className={local.year}>{cert.year}</span>
        </div>
        <h3 className={local.title}>{cert.title}</h3>
        <div className={local.tags}>
          {cert.tags?.slice(0, 2).map((t) => (
            <Tag key={t} size="xs">
              {t}
            </Tag>
          ))}
        </div>
        <div className={local.footer}>
          <span className={local.viewLabel}>View certificate</span>
          <ArrowUpRightIcon size={12} />
        </div>
      </div>
    </Link>
  );
}

export default function CertificatesPage() {
  const [query, setQuery] = useState("");

  const issuers = useMemo(() => {
    const set = new Set(allCertificates.map((c) => c.institution));
    return ["all", ...Array.from(set)];
  }, []);
  const [issuer, setIssuer] = useState("all");

  const filtered = useMemo(() => {
    return allCertificates.filter((c) => {
      const matchIssuer = issuer === "all" || c.institution === issuer;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.institution.toLowerCase().includes(q) ||
        c.tags?.some((t) => t.toLowerCase().includes(q));
      return matchIssuer && matchQ;
    });
  }, [issuer, query]);

  return (
    <PageShell>
      <PageHero
        number="05"
        label="Certificates"
        title="Verified, not vibes."
        italicWord="Verified"
        description="Every certification I've earned — from Harvard's CS50 to industry bootcamps — with links to the issuing organisation."
        meta={[
          { label: "Total", value: allCertificates.length.toString() },
          { label: "Issuers", value: (issuers.length - 1).toString() },
          { label: "Latest", value: allCertificates[0]?.year || "—" },
          { label: "Verified", value: "All" },
        ]}
      />

      <section className={styles.controlsSection}>
        <div className={styles.controlsInner}>
          <Reveal className={styles.searchWrap}>
            <SearchIcon size={16} />
            <input
              type="text"
              placeholder="Search certificates…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.searchInput}
            />
          </Reveal>
          <Reveal delay={0.05} className={styles.filters}>
            {issuers.map((iss) => (
              <button
                key={iss}
                onClick={() => setIssuer(iss)}
                className={`${styles.chip} ${issuer === iss ? styles.chipActive : ""}`}
              >
                {iss === "all" ? "All issuers" : iss}
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.gridInner}>
          {filtered.length === 0 ? (
            <p className={styles.empty}>No certificates match.</p>
          ) : (
            <div className={local.grid}>
              {filtered.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.04}>
                  <CertCard cert={c} />
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
