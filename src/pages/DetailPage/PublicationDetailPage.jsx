// src/pages/DetailPage/PublicationDetailPage.jsx
import { useState, memo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import PageShell from "../../components/PageShell/PageShell";
import SubNav from "../../components/SubNav/SubNav";
import PageHero from "../../components/PageHero/PageHero";
import PrevNextNav from "../../components/PrevNextNav/PrevNextNav";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import NativeReveal from "../../components/Reveal/NativeReveal";
import Tag from "../../components/Tag/Tag";
import Image from "../../components/Image/Image";
import Card from "../../components/Card/Card";
import BookReaderModal from "../../components/BookReaderModal/BookReaderModal";
import {
  BookOpenIcon,
  DownloadIcon,
  ArrowUpRightIcon,
  CheckIcon,
  MonitorIcon,
  TerminalIcon,
  DatabaseIcon,
  WorkflowIcon,
  CloudIcon,
  ChevronRightIcon,
  FileTextIcon,
} from "../../components/Icons/Icons";
import { publicationsList, getSiblings } from "../../data/portfolio";
import { publicationDetails } from "../../data/publicationDetails";
import { SITE_URL } from "../../data/siteConfig";
import styles from "./PublicationDetailPage.module.css";

function renderPillarIcon(iconName) {
  switch (iconName) {
    case "terminal":
      return <TerminalIcon size={22} />;
    case "monitor":
      return <MonitorIcon size={22} />;
    case "database":
      return <DatabaseIcon size={22} />;
    case "cloud":
      return <CloudIcon size={22} />;
    case "workflow":
    default:
      return <WorkflowIcon size={22} />;
  }
}

function PublicationDetailPage() {
  const { slug } = useParams();

  // Find matching publication from lists
  const baseItem = publicationsList.find(
    (p) => p.slug === slug || p.id === slug,
  );
  const detail = publicationDetails[slug] || publicationDetails[baseItem?.slug];

  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [openChapterIdx, setOpenChapterIdx] = useState(0);

  if (!baseItem && !detail) {
    return <Navigate to="/projects?filter=publications" replace />;
  }

  const effectiveTitle = detail?.title || baseItem?.title || "Publication & Book";
  const effectiveSubtitle =
    detail?.subtitle || baseItem?.subtitle || "A Technical Guide by Adyvka";
  const effectiveSlug = detail?.slug || baseItem?.slug || slug;
  const effectiveAuthor = detail?.author || baseItem?.author || "Rafif Sava Adyvka Pratama";
  const effectivePublisher = detail?.publisher || baseItem?.publisher || "SMK IDN Boarding School";
  const effectiveYear = detail?.year || baseItem?.year || "2024";
  const effectivePages = detail?.pages || baseItem?.pages || 100;
  const effectiveFileSize = detail?.fileSize || baseItem?.fileSize || "8 MB";
  const effectivePdfUrl = detail?.pdfUrl || baseItem?.pdfUrl;
  const effectiveDownload = detail?.downloadPath || baseItem?.downloadPath || effectivePdfUrl;
  const effectiveCover = detail?.cover || baseItem?.cover;
  const effectiveTags = detail?.tags || baseItem?.tags || [];

  const { prev, next } = getSiblings(publicationsList, effectiveSlug);

  const heroMeta = [
    { label: "Author", value: effectiveAuthor },
    { label: "Publisher", value: effectivePublisher },
    { label: "Published", value: detail?.publishedDate || effectiveYear },
    { label: "Length", value: `${effectivePages} Pages` },
    { label: "File Size", value: effectiveFileSize },
    { label: "Format", value: "Interactive PDF" },
  ];

  const bookSchema = {
    "@type": "Book",
    "@id": `${SITE_URL}/publications/${effectiveSlug}#book`,
    name: effectiveTitle,
    headline: effectiveTitle,
    alternativeHeadline: effectiveSubtitle,
    author: {
      "@type": "Person",
      name: effectiveAuthor,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: effectivePublisher,
    },
    datePublished: detail?.publishedDate || effectiveYear,
    numberOfPages: effectivePages,
    inLanguage: "id",
    bookFormat: "https://schema.org/EBook",
    description: detail?.overview || baseItem?.description,
    image: `${SITE_URL}${effectiveCover?.src || effectiveCover || ""}`,
    url: `${SITE_URL}/publications/${effectiveSlug}`,
    downloadUrl: `${SITE_URL}${effectiveDownload}`,
    keywords: effectiveTags.join(", "),
    about: { "@id": `${SITE_URL}/#person` },
  };

  const toggleChapter = (index) => {
    setOpenChapterIdx((current) => (current === index ? -1 : index));
  };

  return (
    <PageShell>
      <SEO
        title={`${effectiveTitle} · Book & Module by ${effectiveAuthor}`}
        description={detail?.overview || baseItem?.description}
        path={`/publications/${effectiveSlug}`}
        type="book"
        keywords={[
          effectiveTitle,
          effectiveSubtitle,
          `${effectiveTitle} Adyvka`,
          `${effectiveTitle} Rafif Sava Adyvka Pratama`,
          "Published Book",
          "Technical Curriculum",
          ...effectiveTags,
        ]}
        schema={bookSchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Projects", item: "/projects" },
          { name: "Publications", item: "/projects?filter=publications" },
          { name: effectiveTitle, item: `/publications/${effectiveSlug}` },
        ]}
      />

      <SubNav
        backTo="/projects?filter=publications"
        backLabel="← All Projects & Publications"
        statusText={`Published Edition · ${effectiveYear}`}
        pulseLive={true}
        action={{
          href: effectiveDownload,
          label: `Download PDF (${effectiveFileSize})`,
        }}
      />

      <PageHero
        number="01"
        label={detail?.badge || "PUBLICATION & CURRICULUM MODULE"}
        title={effectiveTitle}
        description={effectiveSubtitle}
        meta={heroMeta}
      />

      {/* ── ACTION BAR (READ / DOWNLOAD / TAB) ────────────── */}
      <section className={styles.actionStrip}>
        <div className={styles.actionInner}>
          <div className={styles.actionGroup}>
            <button
              type="button"
              className={`btn-primary ${styles.readBtn}`}
              onClick={() => setIsReaderOpen(true)}
              aria-label={`Read ${effectiveTitle} online in PDF viewer`}
            >
              <BookOpenIcon size={16} />
              <span>Read Online (Full PDF Viewer)</span>
            </button>

            <a
              href={effectiveDownload}
              download={`${effectiveSlug}.pdf`}
              className={styles.downloadBtn}
              aria-label={`Download full PDF of ${effectiveTitle}`}
            >
              <DownloadIcon size={16} />
              <span>Download PDF ({effectiveFileSize})</span>
            </a>

            <a
              href={effectiveDownload}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalBtn}
              title="Open direct PDF file in a new tab"
              aria-label={`Open direct PDF file in a new tab`}
            >
              <span>Open in New Tab</span>
              <ArrowUpRightIcon size={13} />
            </a>
          </div>

          <div className={styles.statusChip}>
            <span className={styles.pulseDot} />
            <span>Interactive Digital Release</span>
          </div>
        </div>
      </section>

      {/* ── 3D COVER & SYNOPSIS OVERVIEW ──────────────────── */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            {/* Left: 3D Perspective Cover */}
            <div className={styles.coverWrapper}>
              <NativeReveal className="reveal-slide-up">
                <div
                  className={styles.book3D}
                  onClick={() => setIsReaderOpen(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setIsReaderOpen(true);
                    }
                  }}
                  aria-label={`Open reader for ${effectiveTitle}`}
                >
                  <div className={styles.bookSpine} aria-hidden="true" />
                  <div className={styles.bookPages} aria-hidden="true" />

                  <div className={styles.coverFrame}>
                    <Image
                      src={effectiveCover}
                      alt={`Front cover of ${effectiveTitle} by ${effectiveAuthor}`}
                      className={styles.coverImage}
                      width={380}
                      height={538}
                    />
                    <div className={styles.coverOverlay} />

                    <div className={styles.hoverPrompt}>
                      <BookOpenIcon size={20} />
                      <span>Click to Read E-Book</span>
                    </div>
                  </div>
                </div>

                <p className={styles.coverCaption}>
                  {effectivePages} Pages · {effectivePublisher} ({effectiveYear})
                </p>
              </NativeReveal>

              {/* Quick Specs Box */}
              {detail?.metadataSpecs && (
                <NativeReveal delay={0.1} className="reveal-slide-up" style={{ width: "100%" }}>
                  <Card variant="custom" className={styles.specsCard}>
                    <h3 className={styles.specsTitle}>Publication Details</h3>
                    <ul className={styles.specsList}>
                      {detail.metadataSpecs.map((spec, i) => (
                        <li key={i} className={styles.specItem}>
                          <span className={styles.specLabel}>{spec.label}</span>
                          <strong className={styles.specValue}>{spec.value}</strong>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </NativeReveal>
              )}
            </div>

            {/* Right: Narrative Synopsis & Topic Tags */}
            <div className={styles.narrativeCol}>
              <NativeReveal className="reveal-slide-up">
                <p className={styles.leadText}>
                  {detail?.overview || baseItem?.description}
                </p>
              </NativeReveal>

              {detail?.synopsis?.map((paragraph, idx) => (
                <NativeReveal key={idx} delay={idx * 0.05} className="reveal-slide-up">
                  <p className={styles.paragraph}>{paragraph}</p>
                </NativeReveal>
              ))}

              {effectiveTags.length > 0 && (
                <NativeReveal delay={0.2} className="reveal-slide-up">
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
                    {effectiveTags.map((tag) => (
                      <Tag key={tag} size="sm">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </NativeReveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY PERFORMANCE INDICATORS / METRICS ──────────── */}
      {detail?.kpis && detail.kpis.length > 0 && (
        <section className={styles.kpiSection}>
          <div className={styles.container}>
            <div className={styles.kpiGrid}>
              {detail.kpis.map((kpi, idx) => (
                <NativeReveal key={idx} delay={idx * 0.08} className="reveal-slide-up">
                  <Card variant="custom" className={styles.kpiCard}>
                    <span className={styles.kpiVal}>{kpi.value}</span>
                    <span className={styles.kpiLbl}>{kpi.label}</span>
                    {kpi.note && <span className={styles.kpiSub}>{kpi.note}</span>}
                  </Card>
                </NativeReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CORE LEARNING PILLARS ─────────────────────────── */}
      {detail?.learningPillars && detail.learningPillars.length > 0 && (
        <section className={styles.sectionBlock}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className="font-mono text-xs uppercase" style={{ color: "var(--accent-glow)" }}>
                Core Competencies
              </span>
              <h2 className={styles.sectionTitle}>What Learners Master</h2>
              <p className={styles.sectionDesc}>
                Fundamental engineering and design principles reinforced through practical exercises.
              </p>
            </div>

            <div className={styles.pillarsGrid}>
              {detail.learningPillars.map((pillar, idx) => (
                <NativeReveal key={idx} delay={idx * 0.08} className="reveal-slide-up">
                  <Card variant="custom" className={styles.pillarCard}>
                    <div className={styles.pillarIconBox}>
                      {renderPillarIcon(pillar.icon)}
                    </div>
                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                    <p className={styles.pillarDesc}>{pillar.desc}</p>
                  </Card>
                </NativeReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FEATURED HANDS-ON PROJECTS BUILT IN BOOK ──────── */}
      {detail?.projectsBuilt && detail.projectsBuilt.length > 0 && (
        <section className={styles.sectionBlock}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className="font-mono text-xs uppercase" style={{ color: "var(--accent-glow)" }}>
                Hands-On Portfolio
              </span>
              <h2 className={styles.sectionTitle}>Projects Built Step-by-Step</h2>
              <p className={styles.sectionDesc}>
                Every project in this book is built from an empty canvas into a fully functional product.
              </p>
            </div>

            <div className={styles.projectsGrid}>
              {detail.projectsBuilt.map((proj, idx) => (
                <NativeReveal key={idx} delay={idx * 0.08} className="reveal-slide-up">
                  <Card variant="custom" className={styles.projectCard}>
                    <div className={styles.projectTop}>
                      <span className={styles.chapterBadge}>{proj.chapter}</span>
                      <span className={styles.genreLabel}>{proj.genre}</span>
                    </div>

                    <h3 className={styles.projName}>{proj.name}</h3>
                    <p className={styles.projSummary}>{proj.summary}</p>

                    {proj.mechanics && proj.mechanics.length > 0 && (
                      <ul className={styles.mechanicsList}>
                        {proj.mechanics.map((mech, mIdx) => (
                          <li key={mIdx} className={styles.mechanicItem}>
                            <span className={styles.checkIcon}>
                              <CheckIcon size={13} />
                            </span>
                            <span>{mech}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </NativeReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FULL TABLE OF CONTENTS CURRICULUM ─────────────── */}
      {detail?.chapters && detail.chapters.length > 0 && (
        <section className={styles.sectionBlock}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className="font-mono text-xs uppercase" style={{ color: "var(--accent-glow)" }}>
                Authentic Syllabus
              </span>
              <h2 className={styles.sectionTitle}>Full Table of Contents</h2>
              <p className={styles.sectionDesc}>
                Detailed chapter progression reflecting the complete published manuscript.
              </p>
            </div>

            <div className={styles.curriculumList}>
              {detail.chapters.map((chap, idx) => {
                const isOpen = openChapterIdx === idx;
                return (
                  <NativeReveal key={chap.num} delay={idx * 0.05} className="reveal-slide-up">
                    <Card variant="custom" className={styles.chapterCard}>
                      <button
                        type="button"
                        className={styles.chapterHeaderBtn}
                        onClick={() => toggleChapter(idx)}
                        aria-expanded={isOpen}
                      >
                        <div className={styles.chapterHeaderLeft}>
                          <span className={styles.chapNum}>{chap.num}</span>
                          <span className={styles.chapTitle}>{chap.title}</span>
                          {chap.pages && (
                            <span className={styles.chapPages}>({chap.pages})</span>
                          )}
                        </div>
                        <span
                          className={`${styles.chevronIcon} ${
                            isOpen ? styles.chevronOpen : ""
                          }`}
                        >
                          <ChevronRightIcon size={16} />
                        </span>
                      </button>

                      {isOpen && (
                        <div className={styles.chapterBody}>
                          {chap.summary && (
                            <p className={styles.chapSummary}>{chap.summary}</p>
                          )}
                          {chap.subsections && chap.subsections.length > 0 && (
                            <ul className={styles.subsectionsList}>
                              {chap.subsections.map((sub, sIdx) => (
                                <li key={sIdx} className={styles.subItem}>
                                  <span className={styles.subDot} />
                                  <span>{sub}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </Card>
                  </NativeReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── TARGET AUDIENCE & FIELD TEACHING DEPLOYMENTS ─── */}
      <section className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.splitGrid}>
            {/* Target Audience */}
            {detail?.targetAudience && (
              <NativeReveal className="reveal-slide-up">
                <Card variant="custom" className={styles.audienceCard}>
                  <h3 className={styles.cardHeading}>Designed For</h3>
                  <ul className={styles.bulletList}>
                    {detail.targetAudience.map((aud, i) => (
                      <li key={i} className={styles.bulletItem}>
                        <span style={{ color: "var(--accent-glow)" }}>▸</span>
                        <span>{aud}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </NativeReveal>
            )}

            {/* Teaching Deployments */}
            {detail?.workshopDeployments && (
              <NativeReveal delay={0.1} className="reveal-slide-up">
                <Card variant="custom" className={styles.deploymentCard}>
                  <h3 className={styles.cardHeading}>Classroom Deployments</h3>
                  <ul className={styles.deploymentsList}>
                    {detail.workshopDeployments.map((dep, i) => (
                      <li key={i} className={styles.deployItem}>
                        <div className={styles.deployTop}>
                          <strong className={styles.deploySchool}>
                            {dep.school}
                          </strong>
                          <span className={styles.deployDate}>{dep.date}</span>
                        </div>
                        <div className={styles.deployRole}>{dep.role}</div>
                        <p className={styles.deployImpact}>{dep.impact}</p>
                      </li>
                    ))}
                  </ul>
                </Card>
              </NativeReveal>
            )}
          </div>
        </div>
      </section>

      {/* ── SIBLING NAVIGATION (PREV / NEXT BOOK) ─────────── */}
      <PrevNextNav prev={prev} next={next} baseUrl="/publications" />

      {/* ── EMBEDDED MODAL READER ────────────────────────── */}
      {isReaderOpen && (
        <BookReaderModal
          book={{
            title: effectiveTitle,
            pdfUrl: effectivePdfUrl,
            downloadPath: effectiveDownload,
            fileSize: effectiveFileSize,
            slug: effectiveSlug,
          }}
          onClose={() => setIsReaderOpen(false)}
        />
      )}

      <BottomCTA
        eyebrow="Curriculum & Collaboration"
        title="Looking for technical instruction or modules?"
        italicWord="modules"
        description="I design structured programming curricula, conduct hands-on developer workshops, and author practical guides."
        buttonText="Get in Touch"
        buttonTo="/contact"
      />
    </PageShell>
  );
}

export default memo(PublicationDetailPage);
