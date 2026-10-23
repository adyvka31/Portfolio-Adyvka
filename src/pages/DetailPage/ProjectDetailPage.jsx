import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import CaseStudyBlock from "../../components/CaseStudyBlock/CaseStudyBlock";
import PrevNextNav from "../../components/PrevNextNav/PrevNextNav";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import MediaFrame from "../../components/MediaFrame/MediaFrame";
import Tag from "../../components/Tag/Tag";
import NativeReveal from "../../components/Reveal/NativeReveal";
import { useCardSpotlight } from "../../hooks/useCardSpotlight";
import DatabankPreview from "../../layouts/HomeLayout/ProjectLayout/DatabankPreview";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery";

import {
  ArrowUpRightIcon,
  CheckIcon,
  CloudIcon,
  DatabaseIcon,
  FileCodeIcon,
  LockIcon,
  MonitorIcon,
  ServerIcon,
  ShieldCheckIcon,
  TerminalIcon,
  WorkflowIcon,
} from "../../components/Icons/Icons";

import { projectsList, getSiblings } from "../../data/portfolio";
import { projectDetails } from "../../data/projectDetails";
import styles from "./ProjectDetailPage.module.css";

function renderPillarIcon(name) {
  switch (name) {
    case "monitor":
      return <MonitorIcon size={20} />;
    case "database":
      return <DatabaseIcon size={20} />;
    case "terminal":
      return <TerminalIcon size={20} />;
    case "cloud":
      return <CloudIcon size={20} />;
    default:
      return <ServerIcon size={20} />;
  }
}

function MethodBadge({ method }) {
  const m = method.toUpperCase();
  let cls = styles.methodGet;
  if (m === "POST") cls = styles.methodPost;
  else if (m === "PATCH" || m === "PUT") cls = styles.methodPatch;
  else if (m === "DELETE") cls = styles.methodDelete;
  return <span className={`${styles.methodBadge} ${cls}`}>{m}</span>;
}

function KPICard({ item }) {
  const spot = useCardSpotlight();
  return (
    <article className={`glass ${styles.kpiCard}`} {...spot}>
      <h3 className={`font-serif ${styles.kpiValue} text-glow`}>
        {item.value}
      </h3>
      <span className={styles.kpiLabel}>{item.label}</span>
      {item.note && <p className={styles.kpiNote}>{item.note}</p>}
    </article>
  );
}

function PillarCard({ item }) {
  const spot = useCardSpotlight();
  return (
    <article className={`glass ${styles.pillarCard}`} {...spot}>
      <div className={styles.pillarIconBox}>
        {renderPillarIcon(item.icon)}
      </div>
      <h3 className={styles.pillarTitle}>{item.title}</h3>
      <p className={styles.pillarDesc}>{item.desc}</p>
    </article>
  );
}

function FeatureCard({ item, index }) {
  const spot = useCardSpotlight();
  const num = String(index + 1).padStart(2, "0");
  return (
    <article className={`glass ${styles.featureCard}`} {...spot}>
      <div className={styles.featureTop}>
        <span className={styles.featureNumber}>// {num}</span>
        {item.badge && <span className={styles.featureBadge}>{item.badge}</span>}
      </div>
      <h3 className={styles.featureTitle}>{item.title}</h3>
      <p className={styles.featureDesc}>{item.desc}</p>
      {item.points?.length > 0 && (
        <ul className={styles.featureList}>
          {item.points.map((pt, i) => (
            <li key={i} className={styles.featureItem}>
              <span className={styles.featureItemIcon}>
                <CheckIcon size={12} />
              </span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

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

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projectsList.find((p) => p.slug === slug);
  const detail = projectDetails[slug];

  const [activeWorkflowStage, setActiveWorkflowStage] = useState(0);
  const [activeDirTab, setActiveDirTab] = useState(0);

  if (!project) return <Navigate to="/projects" replace />;

  const { prev, next } = getSiblings(projectsList, slug);

  // Check whether we have rich enterprise metadata (like Databank)
  const isEnterprise = Boolean(detail?.features || detail?.kpis || detail?.architecture);

  return (
    <PageShell>
      <SEO
        title={`${detail?.title || project.title} — Rafif Sava Adyvka Pratama`}
        description={detail?.summary || project.description}
        path={`/projects/${project.slug}`}
        type="article"
      />

      {/* STICKY QUICK NAVIGATION BAR */}
      <nav className={styles.subnav} aria-label="Project Sub Navigation">
        <div className={styles.subnavInner}>
          <Link to="/projects" className={styles.backBtn}>
            ← All Projects
          </Link>

          {isEnterprise && (
            <div className={styles.navPills}>
              <a href="#overview" className={styles.navPill}>
                Overview
              </a>
              <a href="#architecture" className={styles.navPill}>
                Architecture
              </a>
              <a href="#features" className={styles.navPill}>
                Features ({detail?.features?.length || 8})
              </a>
              {detail?.gallery?.length > 0 && (
                <a href="#gallery" className={styles.navPill}>
                  Screenshots ({detail.gallery.length})
                </a>
              )}
              {detail?.approvalWorkflow && (
                <a href="#approval-flow" className={styles.navPill}>
                  Approval Flow
                </a>
              )}
              {detail?.techStackGrouped && (
                <a href="#tech-stack" className={styles.navPill}>
                  Tech Stack
                </a>
              )}
              {detail?.directoryStructure && (
                <a href="#directory-schema" className={styles.navPill}>
                  Structure & Schema
                </a>
              )}
              {detail?.apiEndpoints && (
                <a href="#api-security" className={styles.navPill}>
                  API & Security
                </a>
              )}
            </div>
          )}

          <div className={styles.statusIndicator}>
            <span className={styles.statusPulse} aria-hidden="true" />
            <span>Production Ready</span>
          </div>
        </div>
      </nav>

      {/* PAGE HERO */}
      <PageHero
        number={project.year || "2026"}
        label={detail?.subtitle || project.label}
        title={`${detail?.title || project.title}.`}
        description={detail?.summary || project.description}
        meta={detail?.meta}
      />

      {/* TAGS & ACTIONS STRIP */}
      <section className={styles.tagsStrip}>
        <div className={styles.tagsInner}>
          <NativeReveal className="css-reveal">
            <div className={styles.tags}>
              {project.tags?.map((t) => (
                <Tag key={t} size="sm">
                  {t}
                </Tag>
              ))}
            </div>
          </NativeReveal>

          {detail?.links?.length > 0 && (
            <NativeReveal className="css-reveal" delay={0.05}>
              <div className={styles.linksRow}>
                {detail.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                  >
                    {l.label} <ArrowUpRightIcon size={12} />
                  </a>
                ))}
              </div>
            </NativeReveal>
          )}
        </div>
      </section>

      {/* SHOWCASE & KPI METRICS */}
      <section className={styles.showcaseSection}>
        <div className={styles.showcaseInner}>
          <NativeReveal>
            {project.id === "databank" ? (
              <div className={styles.previewCard}>
                <DatabankPreview />
              </div>
            ) : project.thumbnail ? (
              <MediaFrame
                src={project.thumbnail}
                alt={project.title}
                chromeLabel={`${project.slug}.intisel.id`}
              />
            ) : null}
          </NativeReveal>

          {/* KPI GRID */}
          {detail?.kpis?.length > 0 && (
            <NativeReveal delay={0.1}>
              <div className={styles.kpiGrid}>
                {detail.kpis.map((kpi, idx) => (
                  <KPICard key={idx} item={kpi} />
                ))}
              </div>
            </NativeReveal>
          )}
        </div>
      </section>

      {/* 01 — OVERVIEW & PILLARS */}
      {detail?.highlights?.length > 0 && (
        <section id="overview" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel number="01" label="OVERVIEW" />
                <h2 className={`${styles.sectionTitle} text-fade`}>
                  Four Pillars of{" "}
                  <span className="font-serif text-glow">Ecosystem Control</span>
                </h2>
                <p className={styles.sectionLead}>
                  Databank unifies the entire telecom operational lifecycle — connecting field engineering crews, outsource vendor governance, automated scraping pipelines, and workforce management into a single source of truth.
                </p>
              </div>
            </NativeReveal>

            <NativeReveal delay={0.1}>
              <div className={styles.pillarGrid}>
                {detail.highlights.map((p, idx) => (
                  <PillarCard key={idx} item={p} />
                ))}
              </div>
            </NativeReveal>
          </div>
        </section>
      )}

      {/* 02 — SYSTEM ARCHITECTURE */}
      {detail?.architecture && (
        <section id="architecture" className={styles.section}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel number="02" label="SYSTEM ARCHITECTURE" />
                <h2 className={`${styles.sectionTitle} text-fade`}>
                  Decoupled Client-Server{" "}
                  <span className="font-serif text-glow">Monorepo</span>
                </h2>
                <p className={styles.sectionLead}>
                  Engineered for high availability, fault tolerance, and strict domain isolation. The React 19 SPA interfaces with NestJS 11 services through a strongly typed RESTful contract, protected by stateless JWT authentication and granular RBAC guards at both gateway and controller layers.
                </p>
              </div>
            </NativeReveal>

            <NativeReveal delay={0.1}>
              <div className={styles.archDiagramWrap}>
                <div className={styles.archMetaBar}>
                  <div>
                    <span>Pattern: </span>
                    <strong className={styles.archBadge}>
                      {detail.architecture.type}
                    </strong>
                  </div>
                  <div>
                    <span>Protocol: </span>
                    <strong className={styles.archBadge}>
                      {detail.architecture.protocol}
                    </strong>
                  </div>
                </div>

                <div className={styles.archLayersGrid}>
                  {detail.architecture.layers.map((layer, idx) => (
                    <article key={idx} className={`glass ${styles.archLayerCard}`}>
                      <div className={styles.archLayerHead}>
                        <h3 className={styles.archLayerName}>{layer.name}</h3>
                        <span className={styles.archLayerBadge}>{layer.badge}</span>
                      </div>
                      <p className={styles.archLayerDesc}>{layer.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </NativeReveal>
          </div>
        </section>
      )}

      {/* 03 — CORE FEATURES */}
      {detail?.features?.length > 0 && (
        <section id="features" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel number="03" label="KEY MODULES" />
                <h2 className={`${styles.sectionTitle} text-fade`}>
                  Eight Core Modules Built for{" "}
                  <span className="font-serif text-glow">Scale & Speed</span>
                </h2>
                <p className={styles.sectionLead}>
                  Each module is crafted to enterprise-grade specifications: supporting batch operations, spreadsheet-grade column filtering, geolocation verification, and precise authorization boundaries.
                </p>
              </div>
            </NativeReveal>

            <NativeReveal delay={0.1}>
              <div className={styles.featureGrid}>
                {detail.features.map((feat, idx) => (
                  <FeatureCard key={feat.id || idx} item={feat} index={idx} />
                ))}
              </div>
            </NativeReveal>
          </div>
        </section>
      )}

      {/* 04 — INTERACTIVE SYSTEM SCREENSHOTS & DOCUMENTATION GALLERY */}
      {detail?.gallery?.length > 0 && (
        <ProjectGallery items={detail.gallery} />
      )}

      {/* 05 — SEQUENTIAL APPROVAL WORKFLOW */}
      {detail?.approvalWorkflow && (
        <section id="approval-flow" className={styles.section}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel number="05" label="APPROVAL ENGINE" />
                <h2 className={`${styles.sectionTitle} text-fade`}>
                  Sequential 3-Stage{" "}
                  <span className="font-serif text-glow">Job Order & BAST Workflow</span>
                </h2>
                <p className={styles.sectionLead}>
                  A multi-tier approval workflow backed by HTML5 Canvas digital signatures and automated row locking (PO Row Lock) to guarantee transactional integrity across operational departments.
                </p>
              </div>
            </NativeReveal>

            <NativeReveal delay={0.1}>
              <div className={styles.pipelineWrap}>
                <div className={styles.workflowStages}>
                  {detail.approvalWorkflow.stages.map((stg, idx) => (
                    <article
                      key={idx}
                      className={`${styles.stageCard} ${
                        activeWorkflowStage === idx ? styles.stageCardActive : ""
                      }`}
                      onClick={() => setActiveWorkflowStage(idx)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className={styles.stageHeader}>
                        <span className={styles.stageLevel}>{stg.level}</span>
                        <span className={styles.stageRoleBadge}>{stg.role}</span>
                      </div>
                      <h3 className={styles.stageTitle}>{stg.title}</h3>
                      <p className={styles.stageDesc}>{stg.desc}</p>
                      <div className={styles.stageActionBox}>
                        <WorkflowIcon size={14} />
                        <span>{stg.action}</span>
                      </div>
                    </article>
                  ))}
                </div>

                <div className={styles.lockNoticeCard}>
                  <div className={styles.lockNoticeIcon}>
                    <LockIcon size={20} />
                  </div>
                  <div>
                    <h4 className={styles.lockNoticeTitle}>
                      {detail.approvalWorkflow.lockMechanism.title}
                    </h4>
                    <p className={styles.lockNoticeDesc}>
                      {detail.approvalWorkflow.lockMechanism.desc}
                    </p>
                  </div>
                </div>
              </div>
            </NativeReveal>
          </div>
        </section>
      )}

      {/* 06 — TECH STACK MATRIX */}
      {detail?.techStackGrouped && (
        <section id="tech-stack" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel number="06" label="TECHNOLOGY STACK" />
                <h2 className={`${styles.sectionTitle} text-fade`}>
                  Production-Proven{" "}
                  <span className="font-serif text-glow">Tools & Libraries</span>
                </h2>
                <p className={styles.sectionLead}>
                  A curated engineering stack combining high-throughput frontend rendering, modular backend architecture, headless browser automation, and banking-grade data security standards.
                </p>
              </div>
            </NativeReveal>

            <NativeReveal delay={0.1}>
              <div className={styles.techMatrix}>
                {detail.techStackGrouped.map((grp, idx) => (
                  <article key={idx} className={`glass ${styles.techGroupCard}`}>
                    <h3 className={styles.techGroupTitle}>{grp.category}</h3>
                    <div className={styles.techItemList}>
                      {grp.items.map((item, i) => (
                        <div key={i} className={styles.techItemRow}>
                          <span className={styles.techItemName}>{item.name}</span>
                          <span className={styles.techItemRole}>{item.role}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </NativeReveal>
          </div>
        </section>
      )}

      {/* 07 — DIRECTORY STRUCTURE & MODULAR SCHEMAS */}
      {detail?.directoryStructure && detail?.prismaSchemas && (
        <section id="directory-schema" className={styles.section}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel number="07" label="CODEBASE & DATABASE" />
                <h2 className={`${styles.sectionTitle} text-fade`}>
                  Monorepo Architecture &{" "}
                  <span className="font-serif text-glow">Modular Prisma Schemas</span>
                </h2>
                <p className={styles.sectionLead}>
                  Clean boundary separation between backend and frontend services, paired with a multi-file modular Prisma schema architecture to enforce domain segregation.
                </p>
              </div>
            </NativeReveal>

            <NativeReveal delay={0.1}>
              <div className={styles.dirSchemaWrap}>
                {/* Monorepo Directory Terminal */}
                <div className={styles.terminalCard}>
                  <div className={styles.terminalHead}>
                    <div className={styles.terminalDots}>
                      <span className={styles.terminalDot} />
                      <span className={styles.terminalDot} />
                      <span className={styles.terminalDot} />
                    </div>
                    <div className={styles.navPills}>
                      {detail.directoryStructure.map((dir, i) => (
                        <button
                          key={i}
                          type="button"
                          className={`${styles.navPill} ${
                            activeDirTab === i ? styles.navPillActive : ""
                          }`}
                          onClick={() => setActiveDirTab(i)}
                        >
                          {dir.name.split(" ")[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className={styles.terminalBody}>
                    <div style={{ color: "var(--accent-glow)", marginBottom: "0.5rem" }}>
                      📁 {detail.directoryStructure[activeDirTab].name}
                    </div>
                    {detail.directoryStructure[activeDirTab].items.map((it, j) => (
                      <div key={j} className={styles.terminalTreeItem}>
                        <span className={styles.terminalTreeBullet}>├──</span>
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modular Prisma Schemas */}
                <div className={styles.schemaList}>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 500,
                      color: "#fff",
                      margin: "0 0 0.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <FileCodeIcon size={18} /> Modular Prisma Schema Engine
                  </h3>
                  {detail.prismaSchemas.map((sch, i) => (
                    <article key={i} className={`glass ${styles.schemaCard}`}>
                      <h4 className={styles.schemaName}>{sch.name}</h4>
                      <p className={styles.schemaPurpose}>{sch.purpose}</p>
                    </article>
                  ))}
                </div>
              </div>
            </NativeReveal>
          </div>
        </section>
      )}

      {/* 08 — RESTFUL API & ENTERPRISE SECURITY */}
      {detail?.apiEndpoints && detail?.securityStandards && (
        <section id="api-security" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel number="08" label="INTEGRATION & DEFENSE" />
                <h2 className={`${styles.sectionTitle} text-fade`}>
                  RESTful Endpoints &{" "}
                  <span className="font-serif text-glow">Enterprise Security Standards</span>
                </h2>
                <p className={styles.sectionLead}>
                  Clean API contracts guarded by Helmet CSP headers, strict CORS whitelists, global DTO validation pipes, and synchronized client-server cell locking.
                </p>
              </div>
            </NativeReveal>

            <NativeReveal delay={0.1}>
              <div className={styles.apiSecurityGrid}>
                {/* API Endpoints */}
                <div>
                  {detail.apiEndpoints.map((grp, i) => (
                    <div key={i} className={styles.endpointGroup}>
                      <h4 className={styles.endpointGroupTitle}>{grp.group}</h4>
                      <div className={styles.endpointList}>
                        {grp.routes.map((rt, j) => (
                          <div key={j} className={styles.endpointRow}>
                            <MethodBadge method={rt.method} />
                            <span className={styles.endpointPath}>{rt.path}</span>
                            <span className={styles.endpointDesc}>{rt.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Security Standards */}
                <div className={styles.securityGrid}>
                  {detail.securityStandards.map((sec, i) => (
                    <article key={i} className={`glass ${styles.securityCard}`}>
                      <div className={styles.securityIconBox}>
                        <ShieldCheckIcon size={20} />
                      </div>
                      <div>
                        <h4 className={styles.securityTitle}>{sec.title}</h4>
                        <p className={styles.securityDesc}>{sec.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </NativeReveal>
          </div>
        </section>
      )}

      {/* CASE STUDY BLOCKS (LEGACY & NARRATIVE SECTIONS) */}
      {detail?.sections?.length > 0 && (
        <div className={styles.caseStudyWrap}>
          {detail.sections.map((s, i) => (
            <CaseStudyBlock
              key={i}
              number={String(i + 1).padStart(2, "0")}
              title={s.title}
              id={s.title.toLowerCase().replace(/\s+/g, "-")}
            >
              {s.body.map(renderBodyBlock)}
            </CaseStudyBlock>
          ))}
        </div>
      )}

      {/* SIBLING NAVIGATION & BOTTOM CTA */}
      <PrevNextNav prev={prev} next={next} baseUrl="/projects" />
      <BottomCTA />
    </PageShell>
  );
}
