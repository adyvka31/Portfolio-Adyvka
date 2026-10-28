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
} from "../../components/Icons/Icons";
import { experiencesList, getSiblings } from "../../data/portfolio";
import { experienceDetails } from "../../data/experienceDetails";
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

  if (!experience) return <Navigate to="/experience" replace />;

  const { prev, next } = getSiblings(experiencesList, slug);

  return (
    <PageShell>
      <SEO
        title={`${experience.role} at ${experience.company} — Rafif Sava Adyvka Pratama`}
        description={detail?.summary || experience.description}
        path={`/experience/${experience.slug}`}
        type="article"
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

            {detail.story.quote && (
              <NativeReveal delay={0.05}>
                <blockquote className={styles.quoteCard}>
                  <p className={styles.quoteText}>"{detail.story.quote}"</p>
                  <footer className={styles.quoteAuthor}>
                    — Rafif Sava Adyvka Pratama
                  </footer>
                </blockquote>
              </NativeReveal>
            )}

            {detail.story.chapters && (
              <NativeReveal delay={0.1}>
                <div className={styles.storyGrid}>
                  {detail.story.chapters.map((ch, idx) => (
                    <article key={idx} className={styles.storyCard}>
                      <div className={styles.storyCardHeader}>
                        <span className={styles.storyChapterNum}>{ch.chapter}</span>
                        <h3 className={styles.storyChapterTitle}>{ch.title}</h3>
                      </div>
                      <p className={styles.storyContent}>{ch.content}</p>
                    </article>
                  ))}
                </div>
              </NativeReveal>
            )}
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

      {/* ACT 4: CREDITS & MENTORSHIP */}
      {detail?.credits && (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel number="04" label="COLLABORATION & MENTORSHIP" />
                <h2 className={styles.sectionTitle}>
                  {detail.creditsTitle || "Team & Project Partners."}
                </h2>
                <p className={styles.sectionLead}>
                  {detail.creditsLead ||
                    "Grateful for the guidance, partnership, and institutional trust that made this milestone possible."}
                </p>
              </div>
            </NativeReveal>

            <NativeReveal delay={0.1}>
              <div className={styles.creditsGrid}>
                {detail.credits.map((c, idx) => (
                  <article key={idx} className={styles.creditCard}>
                    <div className={styles.creditRole}>{c.role}</div>
                    <h3 className={styles.creditName}>{c.name}</h3>
                    <p className={styles.creditDesc}>{c.desc}</p>
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
    </PageShell>
  );
}
