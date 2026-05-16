import { useParams, Navigate, Link } from "react-router-dom";
import PageShell from "../components/PageShell/PageShell";
import PageHero from "../components/PageHero/PageHero";
import CaseStudyBlock from "../components/CaseStudyBlock/CaseStudyBlock";
import PrevNextNav from "../components/PrevNextNav/PrevNextNav";
import BottomCTA from "../components/BottomCTA/BottomCTA";
import Tag from "../components/Tag/Tag";
import Reveal from "../components/Reveal/Reveal";
import { ArrowUpRightIcon } from "../components/Icons/Icons";
import { projectsList, getSiblings } from "../data/portfolio";
import { projectDetails } from "../data/projectDetails";
import styles from "./DetailPage.module.css";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projectsList.find((p) => p.slug === slug);
  const detail = projectDetails[slug];

  if (!project) return <Navigate to="/projects" replace />;

  const { prev, next } = getSiblings(projectsList, slug);

  return (
    <PageShell>
      <PageHero
        number={project.year || "—"}
        label={project.label}
        title={`${project.title}.`}
        description={detail?.summary || project.description}
        meta={detail?.meta}
      />

      <section className={styles.tagsStrip}>
        <div className={styles.tagsInner}>
          <Reveal>
            <div className={styles.tags}>
              {project.tags.map((t) => (
                <Tag key={t} size="sm">
                  {t}
                </Tag>
              ))}
            </div>
          </Reveal>
          {detail?.links?.length > 0 && (
            <Reveal delay={0.05}>
              <div className={styles.linksRow}>
                {detail.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {l.label} <ArrowUpRightIcon size={11} />
                  </a>
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
          {s.body.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
        </CaseStudyBlock>
      ))}

      <PrevNextNav prev={prev} next={next} baseUrl="/projects" />
      <BottomCTA />
    </PageShell>
  );
}
