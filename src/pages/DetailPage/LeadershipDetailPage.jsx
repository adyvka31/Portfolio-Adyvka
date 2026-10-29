import { useState, useEffect } from "react";
import SEO from "../../components/SEO/SEO";
import { useParams, Navigate, Link } from "react-router-dom";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import PrevNextNav from "../../components/PrevNextNav/PrevNextNav";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import NativeReveal from "../../components/Reveal/NativeReveal";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import Tag from "../../components/Tag/Tag";
import Image from "../../components/Image/Image";
import {
  MaximizeIcon,
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../../components/Icons/Icons";
import { allLeadershipExperiences, getSiblings } from "../../data/portfolio";
import { leadershipDetails } from "../../data/leadershipDetails";
import styles from "./LeadershipDetailPage.module.css";

export default function LeadershipDetailPage({
  item: propItem,
  detail: propDetail,
  slug: propSlug,
}) {
  const params = useParams();
  const slug = propSlug || params.slug;

  const item =
    propItem ||
    allLeadershipExperiences.find((l) => l.slug === slug) ||
    allLeadershipExperiences.find((l) => {
      const lowerSlug = slug?.toLowerCase() || "";
      return (
        l.slug.toLowerCase().includes(lowerSlug) ||
        l.institution.toLowerCase().includes(lowerSlug) ||
        (lowerSlug.includes("backpacker") && l.slug.includes("backpacker")) ||
        (lowerSlug.includes("osis") && l.slug.includes("student-council")) ||
        (lowerSlug.includes("barmus") && l.slug.includes("barmus")) ||
        (lowerSlug.includes("survival") && l.slug.includes("survival")) ||
        (lowerSlug.includes("itfest") && l.slug.includes("it-fest")) ||
        (lowerSlug.includes("live") && l.slug.includes("live-in")) ||
        (lowerSlug.includes("mission") && (l.slug.includes("live-in") || l.slug.includes("mission-impossible")))
      );
    });

  const resolvedKey =
    slug && leadershipDetails[slug]
      ? slug
      : item?.slug && leadershipDetails[item.slug]
      ? item.slug
      : null;

  const detail = propDetail || (resolvedKey ? leadershipDetails[resolvedKey] : null);

  const [activePhotoIdx, setActivePhotoIdx] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIdx === null || !detail?.documentation) return;
      if (e.key === "Escape") setActivePhotoIdx(null);
      if (e.key === "ArrowLeft") {
        setActivePhotoIdx((prev) =>
          prev > 0 ? prev - 1 : detail.documentation.length - 1,
        );
      }
      if (e.key === "ArrowRight") {
        setActivePhotoIdx((prev) =>
          prev < detail.documentation.length - 1 ? prev + 1 : 0,
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIdx, detail?.documentation]);

  if (!item && !detail) {
    return <Navigate to="/experience" replace />;
  }

  const effectiveTitle = detail?.roleTitle || item?.title || "Leadership Experience";
  const effectiveInstitution =
    detail?.institution || item?.institution || "Organization";
  const effectivePeriod = detail?.period || item?.year || "2025";
  const effectiveSummary = detail?.summary || item?.description || "";
  const effectiveSlug = item?.slug || slug;

  const { prev, next } = getSiblings(allLeadershipExperiences, effectiveSlug);

  const leadershipKeywords = [
    effectiveTitle,
    effectiveInstitution,
    `${effectiveTitle} at ${effectiveInstitution}`,
    `${effectiveInstitution} Rafif Sava Adyvka Pratama`,
    `${effectiveInstitution} Adyvka`,
    "Leadership Experience",
    "Community Experience",
    ...(item?.tags || []),
    ...(detail?.competencies || []),
  ];

  const leadershipSchema = {
    "@type": "Article",
    "@id": `https://adyvka-pratama.netlify.app/experience/${effectiveSlug}#leadership`,
    headline: `${effectiveTitle} at ${effectiveInstitution}`,
    description: effectiveSummary,
    author: { "@id": "https://adyvka-pratama.netlify.app/#person" },
    publisher: {
      "@type": "Organization",
      name: effectiveInstitution,
    },
    keywords: leadershipKeywords.join(", "),
  };

  return (
    <PageShell>
      <SEO
        title={`${effectiveTitle} at ${effectiveInstitution} — Rafif Sava Adyvka Pratama`}
        description={effectiveSummary}
        path={`/experience/${effectiveSlug}`}
        type="article"
        keywords={leadershipKeywords}
        schema={leadershipSchema}
      />

      {/* STICKY QUICK NAVIGATION BAR */}
      <nav className={styles.subnav} aria-label="Leadership Sub Navigation">
        <div className={styles.subnavInner}>
          <Link to="/experience" className={styles.backBtn}>
            ← All Experiences
          </Link>

          <div className={styles.statusIndicator}>
            <span className={styles.statusPulse} aria-hidden="true" />
            <span>
              {detail?.badge || "Leadership Role"} · {effectivePeriod}
            </span>
          </div>
        </div>
      </nav>

      {/* PAGE HERO */}
      <PageHero
        number={detail?.badge || "Leadership"}
        label={detail?.subtitle || effectiveInstitution}
        title={`${effectiveTitle}.`}
        description={effectiveSummary}
        meta={detail?.meta}
      />

      {/* TAGS & INSTITUTION STRIP */}
      <section className={styles.tagsStrip}>
        <div className={styles.tagsInner}>
          <NativeReveal className="css-reveal">
            <div className={styles.companyRow}>
              <span className={styles.companyLabel}>Organization / Focus</span>
              <span className={styles.companyName}>{effectiveInstitution}</span>
            </div>
          </NativeReveal>

          <NativeReveal className="css-reveal" delay={0.05}>
            <div className={styles.tags}>
              {(detail?.stack || item?.tags || []).map((t) => (
                <Tag key={t} size="sm">
                  {t}
                </Tag>
              ))}
            </div>
          </NativeReveal>
        </div>

        {/* METRICS / STATS STRIP */}
        {detail?.kpis && detail.kpis.length > 0 && (
          <div className={styles.container}>
            <NativeReveal delay={0.1}>
              <div className={styles.statGrid}>
                {detail.kpis.map((kpi, idx) => (
                  <article key={idx} className={styles.statCard}>
                    <div className={`font-serif ${styles.statValue} text-glow`}>
                      {kpi.value}
                    </div>
                    <div className={styles.statLabel}>{kpi.label}</div>
                    <p className={styles.statNote}>{kpi.note}</p>
                  </article>
                ))}
              </div>
            </NativeReveal>
          </div>
        )}
      </section>

      {/* SECTION 01: THE LEADERSHIP SPRINT & NARRATIVE */}
      {detail?.story && (
        <section className={styles.section} aria-label="Leadership Narrative">
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel
                  number="01"
                  label="THE LEADERSHIP SPRINT & NARRATIVE"
                />
                <h2 className={styles.sectionTitle}>{detail.story.headline}</h2>
                <p className={styles.sectionLead}>{detail.story.lead}</p>
              </div>
            </NativeReveal>

            <div className={styles.storyWrap}>
              {detail.story.quote && (
                <NativeReveal delay={0.05}>
                  <div className={styles.storyQuoteBox}>
                    <blockquote className={styles.storyQuote}>
                      "{detail.story.quote}"
                    </blockquote>
                  </div>
                </NativeReveal>
              )}

              {detail.story.chapters && (
                <div className={styles.chaptersGrid}>
                  {detail.story.chapters.map((ch, idx) => (
                    <NativeReveal key={ch.chapter || idx} delay={idx * 0.08}>
                      <article className={styles.chapterCard}>
                        <div className={styles.chapterHeader}>
                          <span className={styles.chapterNum}>
                            Chapter {ch.chapter}
                          </span>
                          <h3 className={styles.chapterTitle}>{ch.title}</h3>
                        </div>
                        <p className={styles.chapterText}>{ch.content}</p>
                      </article>
                    </NativeReveal>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 02: CORE INITIATIVES & STRATEGIC PILLARS */}
      {detail?.pillars && detail.pillars.length > 0 && (
        <section className={styles.section} aria-label="Strategic Pillars">
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel
                  number="02"
                  label="CORE INITIATIVES & STRATEGIC PILLARS"
                />
                <h2 className={styles.sectionTitle}>
                  {detail.pillarsTitle || "Core Pillars & Strategic Initiatives."}
                </h2>
                <p className={styles.sectionLead}>
                  {detail.pillarsLead ||
                    "Key frameworks and operational disciplines that defined our execution."}
                </p>
              </div>
            </NativeReveal>

            <div className={styles.pillarsGrid}>
              {detail.pillars.map((pillar, idx) => (
                <NativeReveal key={idx} delay={idx * 0.06}>
                  <article className={styles.pillarCard}>
                    <div className={styles.pillarTop}>
                      <span className={styles.pillarBadge}>
                        Pillar 0{idx + 1}
                      </span>
                      {pillar.tag && (
                        <span className={styles.pillarTag}>{pillar.tag}</span>
                      )}
                    </div>
                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                    <p className={styles.pillarDesc}>{pillar.desc}</p>
                  </article>
                </NativeReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 03: LEADERSHIP RETROSPECTIVE & TAKEAWAYS */}
      {detail?.takeaways && detail.takeaways.length > 0 && (
        <section className={styles.section} aria-label="Leadership Retrospective">
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel number="03" label="LEADERSHIP RETROSPECTIVE" />
                <h2 className={styles.sectionTitle}>
                  {detail.takeawaysTitle || "Key Reflections & Insights."}
                </h2>
                <p className={styles.sectionLead}>
                  {detail.takeawaysLead ||
                    "Strategic reflections on ownership, team empathy, and resilience under pressure."}
                </p>
              </div>
            </NativeReveal>

            <div className={styles.takeawaysGrid}>
              {detail.takeaways.map((item, idx) => (
                <NativeReveal key={idx} delay={idx * 0.08}>
                  <article className={styles.takeawayCard}>
                    <h3 className={styles.takeawayTitle}>{item.title}</h3>
                    <p className={styles.takeawayDesc}>{item.desc}</p>
                  </article>
                </NativeReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 04: ON-SITE DOCUMENTATION & ARCHIVES */}
      {detail?.documentation && detail.documentation.length > 0 && (
        <section className={styles.section} aria-label="Program Documentation">
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel
                  number="04"
                  label="ON-SITE DOCUMENTATION & ARCHIVES"
                />
                <h2 className={styles.sectionTitle}>
                  {detail.documentationTitle ||
                    "Program Documentation & Photographic Records."}
                </h2>
                <p className={styles.sectionLead}>
                  {detail.documentationLead ||
                    "Verifiable photographic records from field expeditions, committee operations, and community service."}
                </p>
              </div>
            </NativeReveal>

            <div className={styles.docGrid}>
              {detail.documentation.map((doc, idx) => (
                <NativeReveal key={doc.id || idx} delay={idx * 0.08}>
                  <article
                    className={styles.docCard}
                    onClick={() => setActivePhotoIdx(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActivePhotoIdx(idx);
                      }
                    }}
                    aria-label={`View photo: ${doc.title}`}
                  >
                    <div className={styles.docMediaWrap}>
                      <Image
                        src={doc.image}
                        alt={doc.title}
                        className={styles.docImage}
                        width={640}
                        height={400}
                      />
                      <div
                        className={styles.docExpandBtn}
                        aria-label="Expand image"
                      >
                        <MaximizeIcon size={14} />
                      </div>
                      {doc.tag && (
                        <span className={styles.docBadge}>{doc.tag}</span>
                      )}
                    </div>
                    <div className={styles.docInfo}>
                      <h3 className={styles.docTitle}>{doc.title}</h3>
                      <p className={styles.docDesc}>{doc.desc}</p>
                    </div>
                  </article>
                </NativeReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SIBLING NAVIGATION & CTA */}
      <PrevNextNav prev={prev} next={next} baseUrl="/experience" />
      <BottomCTA />

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activePhotoIdx !== null && detail?.documentation?.[activePhotoIdx] && (
        <div
          className={styles.lightboxBackdrop}
          onClick={() => setActivePhotoIdx(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.lightboxHeader}>
              <div className={styles.lightboxMeta}>
                <span className={styles.lightboxTag}>
                  {detail.documentation[activePhotoIdx].tag ||
                    "Archival Record"}
                </span>
                <span className={styles.lightboxCounter}>
                  {activePhotoIdx + 1} / {detail.documentation.length}
                </span>
              </div>
              <button
                className={styles.lightboxCloseBtn}
                onClick={() => setActivePhotoIdx(null)}
                aria-label="Close image modal"
              >
                <XIcon size={18} />
              </button>
            </div>

            <div className={styles.lightboxImageWrap}>
              <img
                src={
                  typeof detail.documentation[activePhotoIdx].image === "object"
                    ? detail.documentation[activePhotoIdx].image.img?.src ||
                      detail.documentation[activePhotoIdx].image
                    : detail.documentation[activePhotoIdx].image
                }
                alt={detail.documentation[activePhotoIdx].title}
                className={styles.lightboxImage}
              />
              {detail.documentation.length > 1 && (
                <>
                  <button
                    className={`${styles.lightboxNavBtn} ${styles.lightboxNavPrev}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePhotoIdx((prev) =>
                        prev > 0 ? prev - 1 : detail.documentation.length - 1,
                      );
                    }}
                    aria-label="Previous image"
                  >
                    <ChevronLeftIcon size={20} />
                  </button>
                  <button
                    className={`${styles.lightboxNavBtn} ${styles.lightboxNavNext}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePhotoIdx((prev) =>
                        prev < detail.documentation.length - 1 ? prev + 1 : 0,
                      );
                    }}
                    aria-label="Next image"
                  >
                    <ChevronRightIcon size={20} />
                  </button>
                </>
              )}
            </div>

            <div className={styles.lightboxFooter}>
              <h4 className={styles.lightboxTitle}>
                {detail.documentation[activePhotoIdx].title}
              </h4>
              <p className={styles.lightboxDesc}>
                {detail.documentation[activePhotoIdx].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
