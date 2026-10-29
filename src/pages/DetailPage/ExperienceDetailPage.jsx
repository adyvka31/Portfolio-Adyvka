import { useState, useEffect } from "react";
import SEO from "../../components/SEO/SEO";
import { useParams, Navigate, Link } from "react-router-dom";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import NativeReveal from "../../components/Reveal/NativeReveal";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import CaseStudyBlock from "../../components/CaseStudyBlock/CaseStudyBlock";
import PrevNextNav from "../../components/PrevNextNav/PrevNextNav";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import Tag from "../../components/Tag/Tag";
import Image from "../../components/Image/Image";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  MaximizeIcon,
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../../components/Icons/Icons";
import {
  experiencesList,
  allTeachingExperiences,
  allLeadershipExperiences,
  getSiblings,
} from "../../data/portfolio";
import { experienceDetails } from "../../data/experienceDetails";
import { teachingDetails } from "../../data/teachingDetails";
import { leadershipDetails } from "../../data/leadershipDetails";
import TeachingDetailPage from "./TeachingDetailPage";
import LeadershipDetailPage from "./LeadershipDetailPage";
import styles from "./ExperienceDetailPage.module.css";

function renderBodyBlock(block, idx) {
  if (typeof block === "string") return <p key={idx}>{block}</p>;
  if (block?.type === "list") {
    return (
      <ul key={idx}>
        {block.items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    );
  }
  return null;
}

export default function ExperienceDetailPage() {
  const { slug } = useParams();
  const experience = experiencesList.find((e) => e.slug === slug);
  const detail = experienceDetails[slug];

  const teachingItem = allTeachingExperiences.find((t) => t.slug === slug);
  const teachingDetail = teachingDetails[slug];

  if (!experience && (teachingItem || teachingDetail)) {
    return <TeachingDetailPage item={teachingItem} detail={teachingDetail} slug={slug} />;
  }

  const leadershipItem =
    allLeadershipExperiences.find((l) => l.slug === slug) ||
    allLeadershipExperiences.find((l) => {
      const lowerSlug = slug?.toLowerCase() || "";
      return (
        l.slug.toLowerCase().includes(lowerSlug) ||
        (lowerSlug.includes("backpacker") && l.slug.includes("backpacker")) ||
        (lowerSlug.includes("osis") && l.slug.includes("student-council")) ||
        (lowerSlug.includes("barmus") && l.slug.includes("barmus")) ||
        (lowerSlug.includes("survival") && l.slug.includes("survival")) ||
        (lowerSlug.includes("itfest") && l.slug.includes("it-fest")) ||
        (lowerSlug.includes("live") && l.slug.includes("live-in")) ||
        (lowerSlug.includes("mission") && (l.slug.includes("live-in") || l.slug.includes("mission-impossible")))
      );
    });
  const leadershipDetail =
    (slug && leadershipDetails[slug]) ||
    (leadershipItem?.slug && leadershipDetails[leadershipItem.slug]);

  if (!experience && !teachingItem && (leadershipItem || leadershipDetail)) {
    return <LeadershipDetailPage item={leadershipItem} detail={leadershipDetail} slug={slug} />;
  }

  const [activePhotoIdx, setActivePhotoIdx] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIdx === null || !detail?.documentation) return;
      if (e.key === "Escape") setActivePhotoIdx(null);
      if (e.key === "ArrowLeft") {
        setActivePhotoIdx((prev) =>
          prev > 0 ? prev - 1 : detail.documentation.length - 1
        );
      }
      if (e.key === "ArrowRight") {
        setActivePhotoIdx((prev) =>
          prev < detail.documentation.length - 1 ? prev + 1 : 0
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIdx, detail?.documentation]);

  if (!experience) return <Navigate to="/experience" replace />;

  const { prev, next } = getSiblings(experiencesList, slug);

  const experienceKeywords = [
    experience.role,
    experience.company,
    `${experience.role} at ${experience.company}`,
    `${experience.company} Rafif Sava Adyvka Pratama`,
    `${experience.company} Adyvka`,
    "Software Engineering Experience",
    ...(experience.tags || []),
    ...(detail?.stack || []),
  ];

  const experienceSchema = {
    "@type": "Article",
    "@id": `https://adyvka-pratama.netlify.app/experience/${experience.slug}#experience`,
    headline: `${experience.role} at ${experience.company}`,
    description: detail?.summary || experience.description,
    author: { "@id": "https://adyvka-pratama.netlify.app/#person" },
    publisher: {
      "@type": "Organization",
      name: experience.company,
    },
    keywords: experienceKeywords.join(", "),
  };

  return (
    <PageShell>
      <SEO
        title={`${experience.role} at ${experience.company} — Rafif Sava Adyvka Pratama`}
        description={detail?.summary || experience.description}
        path={`/experience/${experience.slug}`}
        type="article"
        keywords={experienceKeywords}
        schema={experienceSchema}
      />

      {/* STICKY QUICK NAVIGATION BAR */}
      <nav className={styles.subnav} aria-label="Experience Sub Navigation">
        <div className={styles.subnavInner}>
          <Link to="/experience" className={styles.backBtn}>
            ← All Experiences
          </Link>

          <div className={styles.statusIndicator}>
            <span className={styles.statusPulse} aria-hidden="true" />
            <span>{detail?.period || experience.period}</span>
          </div>

          {detail?.relatedProject && (
            <Link
              to={`/projects/${detail.relatedProject}`}
              className={styles.subnavAction}
            >
              <span>View Case Study</span>
              <ArrowRightIcon size={12} />
            </Link>
          )}
        </div>
      </nav>

      {/* PAGE HERO */}
      <PageHero
        number={experience.current ? "Active" : "Contract"}
        label={detail?.subtitle || experience.company}
        title={`${experience.role}.`}
        description={detail?.summary || experience.description}
        meta={detail?.meta}
      />

      {/* TAGS & COMPANY STRIP */}
      <section className={styles.tagsStrip}>
        <div className={styles.tagsInner}>
          <NativeReveal className="css-reveal">
            <div className={styles.companyRow}>
              <span className={styles.companyLabel}>Organization</span>
              <span className={styles.companyName}>{experience.company}</span>
            </div>
          </NativeReveal>

          <NativeReveal className="css-reveal" delay={0.05}>
            <div className={styles.tags}>
              {detail?.stack?.map((t) => (
                <Tag key={t} size="sm">
                  {t}
                </Tag>
              ))}
            </div>
          </NativeReveal>
        </div>

        {/* OPTIONAL KPIS / METRIC STRIP */}
        {detail?.kpis && (
          <div className={styles.container} style={{ marginTop: "2rem" }}>
            <NativeReveal delay={0.1}>
              <div className={styles.kpiGrid}>
                {detail.kpis.map((kpi, idx) => (
                  <article key={idx} className={styles.kpiCard}>
                    <div className={styles.kpiValue}>{kpi.value}</div>
                    <div className={styles.kpiLabel}>{kpi.label}</div>
                    <p className={styles.kpiNote}>{kpi.note}</p>
                  </article>
                ))}
              </div>
            </NativeReveal>
          </div>
        )}
      </section>

      {/* ACT 1: NARRATIVE & STORY */}
      {detail?.story && (
        <section className={styles.section}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel number="01" label="NARRATIVE & MINDSET SHIFT" />
                <h2 className={styles.sectionTitle}>
                  {detail.story.headline || "The Journey & Production Breakthrough"}
                </h2>
                <p className={styles.sectionLead}>
                  {detail.story.lead ||
                    "How an unexpected initiative turned into our first enterprise-grade full-stack delivery."}
                </p>
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
                <div className={styles.storyGrid}>
                  {detail.story.chapters.map((ch, idx) => (
                    <NativeReveal key={ch.chapter || idx} delay={idx * 0.08}>
                      <article className={styles.storyCard}>
                        <div className={styles.storyCardHeader}>
                          <span className={styles.storyChapterNum}>
                            Chapter {ch.chapter}
                          </span>
                          <h3 className={styles.storyChapterTitle}>{ch.title}</h3>
                        </div>
                        <p className={styles.storyContent}>{ch.content}</p>
                      </article>
                    </NativeReveal>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ACT 2: KEY ENGINEERING CONTRIBUTIONS */}
      {detail?.contributions && (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel number="02" label="ENGINEERING DELIVERABLES" />
                <h2 className={styles.sectionTitle}>
                  {detail.contributionsTitle || "Key Architectural Contributions."}
                </h2>
                <p className={styles.sectionLead}>
                  {detail.contributionsLead ||
                    "End-to-end responsibilities, architectural systems, and production modules delivered."}
                </p>
              </div>
            </NativeReveal>

            <NativeReveal delay={0.1}>
              <div className={styles.contributionsGrid}>
                {detail.contributions.map((item, idx) => (
                  <article key={item.id || idx} className={styles.contributionCard}>
                    <div className={styles.contributionTop}>
                      <span className={styles.contributionIndex}>
                        DELIVERABLE // 0{idx + 1}
                      </span>
                      {item.tag && (
                        <span className={styles.contributionTag}>{item.tag}</span>
                      )}
                    </div>
                    <h3 className={styles.contributionTitle}>{item.title}</h3>
                    <p className={styles.contributionDesc}>{item.desc}</p>
                    {item.points && (
                      <ul className={styles.contributionList}>
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className={styles.contributionItem}>
                            <span className={styles.contributionItemIcon}>
                              <CheckIcon size={13} />
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </NativeReveal>
          </div>
        </section>
      )}

      {/* ACT 3: TAKEAWAYS & LESSONS */}
      {detail?.takeaways && (
        <section className={styles.section}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel number="03" label="GROWTH & RETROSPECTIVE" />
                <h2 className={styles.sectionTitle}>
                  {detail.takeawaysTitle || "Lessons Learned Under Pressure."}
                </h2>
                <p className={styles.sectionLead}>
                  {detail.takeawaysLead ||
                    "Practical insights gained from balancing boarding school academics with enterprise production accountability."}
                </p>
              </div>
            </NativeReveal>

            <NativeReveal delay={0.1}>
              <div className={styles.takeawaysGrid}>
                {detail.takeaways.map((item, idx) => (
                  <article key={idx} className={styles.takeawayCard}>
                    <h3 className={styles.takeawayTitle}>{item.title}</h3>
                    <p className={styles.takeawayDesc}>{item.desc}</p>
                  </article>
                ))}
              </div>
            </NativeReveal>
          </div>
        </section>
      )}

      {/* ON-SITE DOCUMENTATION & ARCHIVES */}
      {detail?.documentation && detail.documentation.length > 0 && (
        <section className={styles.section}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel number="04" label="ON-SITE DOCUMENTATION & ARCHIVES" />
                <h2 className={styles.sectionTitle}>
                  {detail.documentationTitle || "Field Records & On-Site Documentation."}
                </h2>
                <p className={styles.sectionLead}>
                  {detail.documentationLead ||
                    "Authentic glimpses into live client meetings, development sessions, team collaboration, and daily engineering environments."}
                </p>
              </div>
            </NativeReveal>

            <NativeReveal delay={0.1}>
              <div className={styles.docGrid}>
                {detail.documentation.map((item, idx) => (
                  <article
                    key={item.id || idx}
                    className={styles.docCard}
                    onClick={() => setActivePhotoIdx(idx)}
                  >
                    <div className={styles.docMediaWrap}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        className={styles.docImage}
                        width={640}
                        height={400}
                      />
                      <div className={styles.docExpandBtn} aria-label="Expand image">
                        <MaximizeIcon size={14} />
                      </div>
                      {item.tag && (
                        <span className={styles.docBadge}>{item.tag}</span>
                      )}
                    </div>
                    <div className={styles.docInfo}>
                      <h3 className={styles.docTitle}>{item.title}</h3>
                      <p className={styles.docDesc}>{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </NativeReveal>
          </div>
        </section>
      )}

      {/* FEATURED CASE STUDY BANNER */}
      {detail?.relatedProjectCard && (
        <section className={styles.section}>
          <div className={styles.container}>
            <NativeReveal>
              <article className={styles.projectBanner}>
                <div className={styles.projectBannerInner}>
                  <div className={styles.projectBannerBody}>
                    <div className={styles.projectBannerBadge}>
                      <span>Deep-Dive Project</span>
                      <ArrowUpRightIcon size={11} />
                    </div>
                    <h3 className={styles.projectBannerTitle}>
                      {detail.relatedProjectCard.title}
                    </h3>
                    <div className={styles.projectBannerSubtitle}>
                      {detail.relatedProjectCard.subtitle}
                    </div>
                    <p className={styles.projectBannerDesc}>
                      {detail.relatedProjectCard.summary}
                    </p>
                    {detail.relatedProjectCard.tags && (
                      <div className={styles.projectBannerTags}>
                        {detail.relatedProjectCard.tags.map((t) => (
                          <Tag key={t} size="xs">
                            {t}
                          </Tag>
                        ))}
                      </div>
                    )}
                    <Link
                      to={`/projects/${detail.relatedProjectCard.slug}`}
                      className={styles.projectBannerBtn}
                    >
                      <span>Explore Case Study</span>
                      <ArrowRightIcon size={14} />
                    </Link>
                  </div>
                  {detail.relatedProjectCard.image && (
                    <div className={styles.projectBannerMedia}>
                      <Image
                        src={detail.relatedProjectCard.image}
                        alt={detail.relatedProjectCard.title}
                        className={styles.projectBannerImage}
                        width={640}
                        height={400}
                      />
                    </div>
                  )}
                </div>
              </article>
            </NativeReveal>
          </div>
        </section>
      )}

      {/* ENTERPRISE PRIVACY & NDA CALLOUT */}
      {detail?.privacyBanner && (
        <section className={styles.section}>
          <div className={styles.container}>
            <NativeReveal>
              <article className={styles.privacyCard}>
                <div className={styles.privacyCardInner}>
                  <div className={styles.privacyBadge}>
                    <span className={styles.privacyDot} aria-hidden="true" />
                    <span>
                      {detail.privacyBanner.badge ||
                        "Corporate Confidentiality & NDA Standard"}
                    </span>
                  </div>
                  <h3 className={styles.privacyTitle}>
                    {detail.privacyBanner.title ||
                      "Proprietary Enterprise Infrastructure"}
                  </h3>
                  <p className={styles.privacyDesc}>
                    {detail.privacyBanner.description}
                  </p>
                  {detail.privacyBanner.tags && (
                    <div className={styles.privacyTags}>
                      {detail.privacyBanner.tags.map((t) => (
                        <Tag key={t} size="xs">
                          {t}
                        </Tag>
                      ))}
                    </div>
                  )}
                  {detail.privacyBanner.note && (
                    <div className={styles.privacyNote}>
                      <span>{detail.privacyBanner.note}</span>
                    </div>
                  )}
                </div>
              </article>
            </NativeReveal>
          </div>
        </section>
      )}

      {/* FALLBACK FOR EXPERIENCES USING TRADITIONAL SECTIONS FORMAT */}
      {!detail?.contributions &&
        detail?.sections?.map((s, i) => (
          <CaseStudyBlock
            key={i}
            number={String(i + 1).padStart(2, "0")}
            title={s.title}
            id={s.title.toLowerCase().replace(/\s+/g, "-")}
          >
            {s.body.map(renderBodyBlock)}
          </CaseStudyBlock>
        ))}

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
                  {detail.documentation[activePhotoIdx].tag || "Field Record"}
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
                        prev > 0 ? prev - 1 : detail.documentation.length - 1
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
                        prev < detail.documentation.length - 1 ? prev + 1 : 0
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
