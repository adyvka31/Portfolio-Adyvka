import { useParams, Navigate } from "react-router-dom";
import PageShell from "../components/PageShell/PageShell";
import PageHero from "../components/PageHero/PageHero";
import CaseStudyBlock from "../components/CaseStudyBlock/CaseStudyBlock";
import PrevNextNav from "../components/PrevNextNav/PrevNextNav";
import BottomCTA from "../components/BottomCTA/BottomCTA";
import MediaFrame from "../components/MediaFrame/MediaFrame";
import Tag from "../components/Tag/Tag";
import Reveal from "../components/Reveal/Reveal";
import { allAchievements, getSiblings } from "../data/portfolio";
import { achievementDetails } from "../data/achievementDetails";
import styles from "./DetailPage.module.css";

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

export default function AchievementDetailPage() {
  const { slug } = useParams();
  const item = allAchievements.find((a) => a.slug === slug);
  const detail = achievementDetails[slug];

  if (!item) return <Navigate to="/achievements" replace />;

  const { prev, next } = getSiblings(allAchievements, slug);

  return (
    <PageShell>
      <PageHero
        number={item.year || "—"}
        label={item.category === "achievement" ? "Achievement" : "Experience"}
        title={`${item.title}.`}
        description={detail?.summary || item.description}
        meta={detail?.meta}
      />

      {item.image && (
        <section className={styles.mediaSection}>
          <div className={styles.mediaInner}>
            <Reveal>
              <MediaFrame
                src={item.image}
                alt={item.title}
                caption={`${item.institution} · ${item.year}`}
              />
            </Reveal>
          </div>
        </section>
      )}

      <section className={styles.tagsStrip}>
        <div className={styles.tagsInner}>
          <Reveal>
            <div className={styles.companyRow}>
              <span className={styles.companyLabel}>By</span>
              <span className={styles.companyName}>{item.institution}</span>
            </div>
          </Reveal>
          {(detail?.stack || item.tags) && (
            <Reveal delay={0.05}>
              <div className={styles.tags}>
                {(detail?.stack || item.tags || []).map((t) => (
                  <Tag key={t} size="sm">
                    {t}
                  </Tag>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {detail?.sections?.map((s, i) => (
        <CaseStudyBlock
          key={i}
          number={String(i + 1).padStart(2, "0")}
          title={s.title}
          id={s.title.toLowerCase().replace(/\s+/g, "-")}
        >
          {s.body.map(renderBodyBlock)}
        </CaseStudyBlock>
      ))}

      <PrevNextNav prev={prev} next={next} baseUrl="/achievements" />
      <BottomCTA />
    </PageShell>
  );
}
