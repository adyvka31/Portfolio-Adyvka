import { useParams, Navigate } from "react-router-dom";
import PageShell from "../components/PageShell/PageShell";
import PageHero from "../components/PageHero/PageHero";
import CaseStudyBlock from "../components/CaseStudyBlock/CaseStudyBlock";
import PrevNextNav from "../components/PrevNextNav/PrevNextNav";
import BottomCTA from "../components/BottomCTA/BottomCTA";
import Tag from "../components/Tag/Tag";
import Reveal from "../components/Reveal/Reveal";
import { experiencesList, getSiblings } from "../data/portfolio";
import { experienceDetails } from "../data/experienceDetails";
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

export default function ExperienceDetailPage() {
  const { slug } = useParams();
  const experience = experiencesList.find((e) => e.slug === slug);
  const detail = experienceDetails[slug];

  if (!experience) return <Navigate to="/experience" replace />;

  const { prev, next } = getSiblings(experiencesList, slug);

  return (
    <PageShell>
      <PageHero
        number={experience.current ? "Now" : "—"}
        label={experience.period}
        title={`${experience.role}.`}
        description={detail?.summary || experience.description}
        meta={detail?.meta}
      />

      <section className={styles.tagsStrip}>
        <div className={styles.tagsInner}>
          <Reveal>
            <div className={styles.companyRow}>
              <span className={styles.companyLabel}>At</span>
              <span className={styles.companyName}>{experience.company}</span>
            </div>
          </Reveal>
          {detail?.stack && (
            <Reveal delay={0.05}>
              <div className={styles.tags}>
                {detail.stack.map((t) => (
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

      <PrevNextNav prev={prev} next={next} baseUrl="/experience" />
      <BottomCTA />
    </PageShell>
  );
}
