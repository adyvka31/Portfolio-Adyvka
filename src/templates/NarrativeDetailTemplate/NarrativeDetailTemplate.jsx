import { useState, memo } from "react";
import PageShell from "../../components/PageShell/PageShell";
import SEO from "../../components/SEO/SEO";
import SubNav from "../../components/SubNav/SubNav";
import PageHero from "../../components/PageHero/PageHero";
import PrevNextNav from "../../components/PrevNextNav/PrevNextNav";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import NativeReveal from "../../components/Reveal/NativeReveal";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import Tag from "../../components/Tag/Tag";
import MetricsGrid from "../../components/MetricsGrid/MetricsGrid";
import DocumentationGallery from "../../components/DocumentationGallery/DocumentationGallery";
import Lightbox from "../../components/Lightbox/Lightbox";
import Card from "../../components/Card/Card";
import {
  ArrowUpRightIcon,
  LinkedInIcon,
  GithubIcon,
} from "../../components/Icons/Icons";
import styles from "./NarrativeDetailTemplate.module.css";

function getFeaturedChapterIndex(chapters) {
  if (!Array.isArray(chapters) || chapters.length === 0) return -1;
  if (chapters.length === 1) return 0;
  if (chapters.length !== 3) return -1;
  const ch1 = chapters.find((c) => c.chapter === "01") || chapters[0];
  const ch3 = chapters.find((c) => c.chapter === "03") || chapters[2];
  const getWeight = (c) => (c?.content?.length || 0) + (c?.title?.length || 0);
  return getWeight(ch3) > getWeight(ch1)
    ? chapters.indexOf(ch3)
    : chapters.indexOf(ch1);
}

function NarrativeDetailTemplate({
  seo,
  subnav,
  hero,
  institution,
  tags = [],
  links = [],
  kpis = [],
  story,
  pillars,
  takeaways,
  documentation,
  prev,
  next,
  baseUrl,
}) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(null);

  return (
    <PageShell>
      {seo && <SEO {...seo} />}

      {subnav && <SubNav {...subnav} />}

      {hero && (
        <PageHero
          number={hero.number}
          label={hero.label}
          title={hero.title}
          description={hero.description}
          meta={hero.meta}
        />
      )}

      {/* TAGS & INSTITUTION STRIP */}
      <section className={styles.tagsStrip}>
        <div className={styles.tagsInner}>
          {institution && (
            <NativeReveal className="css-reveal">
              <div className={styles.companyRow}>
                <span className={styles.companyLabel}>
                  {institution.label || "Organization"}
                </span>
                <span className={styles.companyName}>
                  {institution.name}
                </span>
              </div>
            </NativeReveal>
          )}

          {tags && tags.length > 0 && (
            <NativeReveal className="css-reveal" delay={0.05}>
              <div className={styles.tags}>
                {tags.map((t) => (
                  <Tag key={t} size="sm">
                    {t}
                  </Tag>
                ))}
              </div>
            </NativeReveal>
          )}

          {links && links.length > 0 && (
            <NativeReveal className="css-reveal" delay={0.08}>
              <div className={styles.linksRow}>
                {links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                  >
                    {l.url.includes("lnkd.in") || l.url.includes("linkedin") ? (
                      <LinkedInIcon size={13} />
                    ) : l.url.includes("github.com") ? (
                      <GithubIcon size={13} />
                    ) : null}
                    {l.label} <ArrowUpRightIcon size={12} />
                  </a>
                ))}
              </div>
            </NativeReveal>
          )}
        </div>

        {kpis && kpis.length > 0 && (
          <div className={styles.container}>
            <MetricsGrid items={kpis} />
          </div>
        )}
      </section>

      {/* STORY / NARRATIVE SECTION */}
      {story && (
        <section className={styles.section} aria-label={story.ariaLabel || "Narrative"}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel
                  number={story.sectionNumber || "01"}
                  label={story.sectionLabel || "THE SPRINT & NARRATIVE"}
                />
                <h2 className={styles.sectionTitle}>{story.headline}</h2>
                {story.lead && <p className={styles.sectionLead}>{story.lead}</p>}
              </div>
            </NativeReveal>

            <div className={styles.storyWrap}>
              {story.quote && (
                <NativeReveal delay={0.05}>
                  <div className={styles.storyQuoteBox}>
                    <blockquote className={styles.storyQuote}>
                      "{story.quote}"
                    </blockquote>
                  </div>
                </NativeReveal>
              )}

              {story.chapters && (() => {
                const featuredIdx = getFeaturedChapterIndex(story.chapters);
                return (
                  <div className={styles.chaptersGrid}>
                    {story.chapters.map((ch, idx) => {
                      const isFeatured = idx === featuredIdx;
                      return (
                        <NativeReveal
                          key={ch.chapter || idx}
                          delay={idx * 0.08}
                          className={`${styles.chapterReveal} ${
                            isFeatured ? styles.chapterRevealFeatured : ""
                          }`}
                        >
                          <Card
                            className={`${styles.chapterCard}${
                              isFeatured && styles.chapterCardFeatured
                                ? ` ${styles.chapterCardFeatured}`
                                : ""
                            }`}
                          >
                            <div className={styles.chapterHeader}>
                              <span className={styles.chapterNum}>
                                Chapter {ch.chapter}
                              </span>
                              <h3 className={styles.chapterTitle}>{ch.title}</h3>
                            </div>
                            <p className={styles.chapterText}>{ch.content}</p>
                          </Card>
                        </NativeReveal>
                      );
                    })}
                  </div>
                );
              })()}
            </div>
          </div>
        </section>
      )}

      {/* PILLARS / CURRICULUM SECTION */}
      {pillars && pillars.items && pillars.items.length > 0 && (
        <section className={styles.section} aria-label={pillars.ariaLabel || "Core Pillars"}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel
                  number={pillars.sectionNumber || "02"}
                  label={pillars.sectionLabel || "PLATFORM PILLARS & INNOVATION"}
                />
                <h2 className={styles.sectionTitle}>
                  {pillars.title || "Platform Pillars & Core Innovations."}
                </h2>
                {pillars.lead && (
                  <p className={styles.sectionLead}>{pillars.lead}</p>
                )}
              </div>
            </NativeReveal>

            {pillars.isCurriculum ? (
              <div className={styles.curriculumGrid}>
                {pillars.items.map((mod, idx) => (
                  <NativeReveal key={mod.module || idx} delay={idx * 0.06}>
                    <Card className={styles.curriculumCard}>
                      <div className={styles.curriculumTop}>
                        <span className={styles.moduleBadge}>Module {mod.module}</span>
                        {mod.tag && (
                          <span className={styles.curriculumTag}>{mod.tag}</span>
                        )}
                      </div>
                      <h3 className={styles.curriculumTitle}>{mod.title}</h3>
                      <p className={styles.curriculumDesc}>{mod.desc}</p>

                      {mod.topics && (
                        <ul className={styles.topicList}>
                          {mod.topics.map((top, tIdx) => (
                            <li key={tIdx} className={styles.topicItem}>
                              <span className={styles.topicBullet} aria-hidden="true" />
                              <span>{top}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Card>
                  </NativeReveal>
                ))}
              </div>
            ) : (
              <div className={styles.pillarsGrid}>
                {pillars.items.map((pillar, idx) => (
                  <NativeReveal key={idx} delay={idx * 0.06}>
                    <Card className={styles.pillarCard}>
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
                    </Card>
                  </NativeReveal>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* TAKEAWAYS / RETROSPECTIVE SECTION */}
      {takeaways && takeaways.items && takeaways.items.length > 0 && (
        <section className={styles.section} aria-label={takeaways.ariaLabel || "Retrospective"}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel
                  number={takeaways.sectionNumber || "03"}
                  label={takeaways.sectionLabel || "COMPETITION RETROSPECTIVE"}
                />
                <h2 className={styles.sectionTitle}>
                  {takeaways.title || "Key Reflections & Insights."}
                </h2>
                {takeaways.lead && (
                  <p className={styles.sectionLead}>{takeaways.lead}</p>
                )}
              </div>
            </NativeReveal>

            <div className={styles.takeawaysGrid}>
              {takeaways.items.map((item, idx) => (
                <NativeReveal key={idx} delay={idx * 0.08}>
                  <Card className={styles.takeawayCard}>
                    <h3 className={styles.takeawayTitle}>{item.title}</h3>
                    <p className={styles.takeawayDesc}>{item.desc}</p>
                  </Card>
                </NativeReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DOCUMENTATION GALLERY */}
      {documentation && documentation.items && documentation.items.length > 0 && (
        <DocumentationGallery
          items={documentation.items}
          number={documentation.sectionNumber || "04"}
          label={documentation.sectionLabel || "ON-SITE DOCUMENTATION & ARCHIVES"}
          title={documentation.title || "Championship Documentation & Records."}
          lead={documentation.lead}
          ariaLabel={documentation.ariaLabel}
          onSelectPhoto={setActivePhotoIdx}
        />
      )}

      {/* SIBLING NAVIGATION & CTA */}
      <PrevNextNav prev={prev} next={next} baseUrl={baseUrl} />
      <BottomCTA />

      {/* REUSABLE FULLSCREEN LIGHTBOX MODAL */}
      <Lightbox
        items={documentation?.items}
        activeIndex={activePhotoIdx}
        onClose={() => setActivePhotoIdx(null)}
        onNavigate={setActivePhotoIdx}
      />
    </PageShell>
  );
}

export default memo(NarrativeDetailTemplate);
