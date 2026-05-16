import { useParams, Navigate } from "react-router-dom";
import PageShell from "../components/PageShell/PageShell";
import PageHero from "../components/PageHero/PageHero";
import CaseStudyBlock from "../components/CaseStudyBlock/CaseStudyBlock";
import PrevNextNav from "../components/PrevNextNav/PrevNextNav";
import BottomCTA from "../components/BottomCTA/BottomCTA";
import MediaFrame from "../components/MediaFrame/MediaFrame";
import Tag from "../components/Tag/Tag";
import Reveal from "../components/Reveal/Reveal";
import { ArrowUpRightIcon } from "../components/Icons/Icons";
import { allCertificates, getSiblings } from "../data/portfolio";
import { certificateDetails } from "../data/certificateDetails";
import styles from "./DetailPage.module.css";

function renderBodyBlock(block, idx) {
  if (typeof block === "string") return <p key={idx}>{block}</p>;
  if (block?.type === "list") {
    return (
      <ul key={idx}>
        {block.items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    );
  }
  return null;
}

export default function CertificateDetailPage() {
  const { slug } = useParams();
  const cert = allCertificates.find((c) => c.slug === slug);
  const detail = certificateDetails[slug];

  if (!cert) return <Navigate to="/certificates" replace />;

  const { prev, next } = getSiblings(allCertificates, slug);

  return (
    <PageShell>
      <PageHero
        number={cert.year || "—"}
        label="Certificate"
        title={`${cert.title}.`}
        description={detail?.summary || cert.description}
        meta={detail?.meta}
      />

      {cert.image && (
        <section className={styles.mediaSection}>
          <div className={styles.mediaInner}>
            <Reveal>
              <MediaFrame
                src={cert.image}
                alt={cert.title}
                caption={`${cert.institution} · ${cert.year}`}
                aspect="4/3"
              />
            </Reveal>
          </div>
        </section>
      )}

      <section className={styles.tagsStrip}>
        <div className={styles.tagsInner}>
          <Reveal>
            <div className={styles.companyRow}>
              <span className={styles.companyLabel}>Issued by</span>
              <span className={styles.companyName}>{cert.institution}</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className={styles.linksRow}>
              {(detail?.skills || cert.tags || []).map((t) => (
                <Tag key={t} size="sm">{t}</Tag>
              ))}
              {detail?.verifyUrl && (
                <a
                  href={detail.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Verify <ArrowUpRightIcon size={11} />
                </a>
              )}
            </div>
          </Reveal>
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

      <PrevNextNav prev={prev} next={next} baseUrl="/certificates" />
      <BottomCTA />
    </PageShell>
  );
}