import { useState, memo } from "react";
import { useParams, Navigate } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import CaseStudyBlock from "../../components/CaseStudyBlock/CaseStudyBlock";
import PrevNextNav from "../../components/PrevNextNav/PrevNextNav";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import MediaFrame from "../../components/MediaFrame/MediaFrame";
import Tag from "../../components/Tag/Tag";
import SubNav from "../../components/SubNav/SubNav";
import NativeReveal from "../../components/Reveal/NativeReveal";
import Card from "../../components/Card/Card";
import { useCardSpotlight } from "../../hooks/useCardSpotlight";
import DatabankPreview from "../../layouts/HomeLayout/ProjectLayout/DatabankPreview";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery";

import {
  ArrowUpRightIcon,
  CheckIcon,
  CloudIcon,
  DatabaseIcon,
  FileCodeIcon,
  GithubIcon,
  LinkedInIcon,
  LockIcon,
  MonitorIcon,
  ServerIcon,
  ShieldCheckIcon,
  TerminalIcon,
  WorkflowIcon,
} from "../../components/Icons/Icons";

import { projectsList, getSiblings } from "../../data/portfolio";
import { projectDetails } from "../../data/projectDetails";
import { SITE_URL } from "../../data/siteConfig";
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
  return (
    <Card className={styles.kpiCard}>
      <h3 className={`font-serif ${styles.kpiValue} text-glow`}>
        {item.value}
      </h3>
      <span className={styles.kpiLabel}>{item.label}</span>
      {item.note && <p className={styles.kpiNote}>{item.note}</p>}
    </Card>
  );
}

function PillarCard({ item }) {
  return (
    <Card className={styles.pillarCard}>
      <div className={styles.pillarIconBox}>
        {renderPillarIcon(item.icon)}
      </div>
      <h3 className={styles.pillarTitle}>{item.title}</h3>
      <p className={styles.pillarDesc}>{item.desc}</p>
    </Card>
  );
}

function FeatureCard({ item, index }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <Card className={styles.featureCard}>
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
    </Card>
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

function ProjectDetailPage() {
  const { slug } = useParams();
  const normalizedSlug = slug === "flutter" ? "delifood" : slug;
  const project =
    projectsList.find((p) => p.slug === slug || p.slug === normalizedSlug) ||
    projectsList.find((p) => p.id === slug || p.id === normalizedSlug);
  const detail =
    projectDetails[slug] ||
    projectDetails[normalizedSlug] ||
    (slug === "flutter" || slug === "delifood" ? projectDetails.delifood : null);

  const [activeModule, setActiveModule] = useState(0);
  const [moduleViewMode, setModuleViewMode] = useState("focus"); // 'focus' | 'grid'
  const [activeWorkflowStage, setActiveWorkflowStage] = useState(0);
  const [activeDirTab, setActiveDirTab] = useState(0);

  if (!project) return <Navigate to="/projects" replace />;

  const { prev, next } = getSiblings(projectsList, project.slug || slug);

  // Check whether we have rich enterprise metadata (like Databank)
  const isEnterprise = Boolean(detail?.features || detail?.kpis || detail?.architecture);

  // Extract brief, what was hard, and results if available in sections
  const briefSection = detail?.sections?.find(
    (s) => s.title.toLowerCase().includes("brief") || s.title.toLowerCase().includes("challenge"),
  );
  const hardSection = detail?.sections?.find(
    (s) => s.title.toLowerCase().includes("hard") || s.title.toLowerCase().includes("problem"),
  );
  const resultsSection = detail?.sections?.find(
    (s) => s.title.toLowerCase().includes("result") || s.title.toLowerCase().includes("outcome"),
  );

  // Project status logic (Production Ready vs In Active Development)
  const statusMeta =
    detail?.status ||
    detail?.meta?.find((m) => m.label?.toLowerCase() === "status")?.value ||
    "In Active Development";

  const isProductionReady =
    statusMeta.toLowerCase().includes("production ready") ||
    statusMeta.toLowerCase() === "live" ||
    statusMeta.toLowerCase() === "in production";

  const statusLabel = isProductionReady ? "Production Ready" : "In Active Development";

  const projectTitle = detail?.title || project.title;
  const projectSummary = detail?.summary || project.description;
  const projectKeywords = [
    projectTitle,
    `${projectTitle} Rafif Sava Adyvka Pratama`,
    `${projectTitle} Adyvka`,
    "Software Engineering",
    "System Architecture",
    ...(project.tags || []),
    ...(detail?.techStack?.map((t) => (typeof t === "string" ? t : t.name)) || []),
  ];

  const projectSchema = {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/projects/${project.slug}#software`,
    name: projectTitle,
    description: projectSummary,
    applicationCategory: "BusinessApplication, DeveloperApplication",
    operatingSystem: "Web, Cross-Platform, Cloud",
    author: { "@id": `${SITE_URL}/#person` },
    creator: { "@id": `${SITE_URL}/#person` },
    keywords: projectKeywords.join(", "),
  };

  return (
    <PageShell>
      <SEO
        title={`${projectTitle} — Rafif Sava Adyvka Pratama`}
        description={projectSummary}
        path={`/projects/${project.slug}`}
        type="article"
        keywords={projectKeywords}
        schema={projectSchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Projects", item: "/projects" },
          { name: projectTitle, item: `/projects/${project.slug}` },
        ]}
      />

      {/* STICKY QUICK NAVIGATION BAR */}
      <SubNav
        backTo="/projects"
        backLabel="← All Projects"
        statusText={statusLabel}
        pulseLive={isProductionReady}
        ariaLabel="Project Sub Navigation"
      >
        {isEnterprise && (
          <div className={styles.navPills}>
            <a href="#overview" className={styles.navPill}>
              01. Overview
            </a>
            {detail?.gallery?.length > 0 && (
              <a href="#live-product" className={styles.navPill}>
                02. Live Product
              </a>
            )}
            <a href="#capabilities" className={styles.navPill}>
              03. Capabilities & Process
            </a>
            <a href="#architecture" className={styles.navPill}>
              04. System Anatomy
            </a>
            <a href="#security-impact" className={styles.navPill}>
              05. Security & Outcomes
            </a>
          </div>
        )}
      </SubNav>

      {/* =========================================================================
          ACT 1: EXECUTIVE OVERVIEW & THE PROBLEM (#overview)
          ========================================================================= */}
      <section id="overview">
        {/* PAGE HERO */}
        <PageHero
          number={project.year || "2026"}
          label={detail?.subtitle || project.label}
          title={`${detail?.title || project.title}.`}
          description={detail?.summary || project.description}
          meta={detail?.meta}
        />

        {/* TAGS & QUICK ACTIONS STRIP */}
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
        </section>

        {/* KPI METRICS & THE BRIEF */}
        <section className={styles.showcaseSection}>
          <div className={styles.showcaseInner}>
            {/* KPI GRID */}
            {detail?.kpis?.length > 0 && (
              <NativeReveal>
                <div className={styles.kpiGrid}>
                  {detail.kpis.map((kpi, idx) => (
                    <KPICard key={idx} item={kpi} />
                  ))}
                </div>
              </NativeReveal>
            )}

            {/* THE OPERATIONAL MANDATE (BRIEF) */}
            {briefSection && (
              <NativeReveal delay={0.1}>
                <Card className={styles.challengeCard}>
                  <div className={styles.challengeHead}>
                    <span className={styles.challengeBadge}>The Operational Mandate</span>
                    <h3 className={styles.challengeTitle}>Context & High-Stakes Constraints</h3>
                  </div>
                  <div className={styles.challengeBody}>
                    {briefSection.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </Card>
              </NativeReveal>
            )}

            {/* PREVIEW CARD IF NO GALLERY */}
            {!detail?.gallery && (
              <NativeReveal delay={0.15}>
                {project.id === "databank" ? (
                  <div className={styles.previewCard} style={{ marginTop: "2rem" }}>
                    <DatabankPreview />
                  </div>
                ) : project.thumbnail ? (
                  <div style={{ marginTop: "2rem" }}>
                    <MediaFrame
                      src={project.thumbnail}
                      alt={project.title}
                      chromeLabel={detail?.domain || `${project.slug}.vercel.app`}
                    />
                  </div>
                ) : null}
              </NativeReveal>
            )}
          </div>
        </section>
      </section>

      {/* =========================================================================
          ACT 2: THE PRODUCT IN ACTION — LIVE SYSTEM SCREENSHOTS (#live-product)
          ========================================================================= */}
      {detail?.gallery?.length > 0 && (
        <ProjectGallery
          items={detail.gallery}
          id="live-product"
          sectionNumber="02"
          label={detail?.galleryLabel || "PRODUCTION INTERFACES"}
          title={detail?.galleryTitle || "The Live System in Action"}
          lead={
            detail?.galleryLead ||
            "Explore high-fidelity production interfaces — from operational analytics dashboards and role governance matrices to vendor workflows and real-time collaboration tools."
          }
        />
      )}

      {/* =========================================================================
          ACT 3: CORE CAPABILITIES & APPROVAL WORKFLOW (#capabilities)
          ========================================================================= */}
      {detail?.features?.length > 0 && (
        <section id="capabilities" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel number="03" label="CAPABILITIES & WORKFLOW" />
                <h2 className={`${styles.sectionTitle} text-fade`}>
                  {detail?.capabilitiesTitle || (
                    <>
                      {detail?.highlights?.length ? `${detail.highlights.length} Architectural Pillars` : "System Pillars"} &{" "}
                      <span className="font-serif text-glow">Core Capabilities</span>
                    </>
                  )}
                </h2>
                <p className={styles.sectionLead}>
                  {detail?.capabilitiesLead ||
                    "Built to automate mission-critical operations — unifying domain workflows, core services, and interactive user experiences."}
                </p>
              </div>
            </NativeReveal>

            {/* 4 PILLARS BENTO */}
            {detail?.highlights?.length > 0 && (
              <NativeReveal delay={0.1}>
                <div className={styles.pillarGrid}>
                  {detail.highlights.map((p, idx) => (
                    <PillarCard key={idx} item={p} />
                  ))}
                </div>
              </NativeReveal>
            )}

            {/* CORE MODULES: INTERACTIVE EXPLORER */}
            <div className={styles.subSection}>
              <NativeReveal>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div>
                    <h3 className={styles.subSectionTitle}>
                      {detail?.featuresTitle ||
                        (detail?.features?.length
                          ? `${detail.features.length} Mission-Critical Modules`
                          : "Core System Modules")}
                    </h3>
                    <p className={styles.subSectionLead}>
                      {detail?.featuresLead ||
                        "Each module is engineered with robust transactional boundaries, modular isolation, and comprehensive audit trails."}
                    </p>
                  </div>

                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      type="button"
                      className={`${styles.navPill} ${
                        moduleViewMode === "focus" ? styles.navPillActive : ""
                      }`}
                      onClick={() => setModuleViewMode("focus")}
                    >
                      Interactive Focus
                    </button>
                    <button
                      type="button"
                      className={`${styles.navPill} ${
                        moduleViewMode === "grid" ? styles.navPillActive : ""
                      }`}
                      onClick={() => setModuleViewMode("grid")}
                    >
                      All in Grid
                    </button>
                  </div>
                </div>
              </NativeReveal>

              {moduleViewMode === "focus" ? (
                /* INTERACTIVE FOCUS EXPLORER */
                <NativeReveal delay={0.1}>
                  <div className={styles.moduleExplorer}>
                    {/* Left Column: Module Navigation List */}
                    <div className={styles.moduleListNav} role="tablist">
                      {detail.features.map((feat, idx) => (
                        <button
                          key={feat.id || idx}
                          type="button"
                          role="tab"
                          aria-selected={activeModule === idx}
                          className={`${styles.moduleNavItem} ${
                            activeModule === idx ? styles.moduleNavItemActive : ""
                          }`}
                          onClick={() => setActiveModule(idx)}
                        >
                          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <span className={styles.moduleNavIndex}>
                              {String(idx + 1).padStart(2, "0")}.
                            </span>
                            <span>{feat.title}</span>
                          </span>
                          <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>→</span>
                        </button>
                      ))}
                    </div>

                    {/* Right Column: Active Module Detail View */}
                    <div className={styles.moduleDetailCard}>
                      <div className={styles.featureTop}>
                        <span className={styles.featureNumber}>
                          MODULE // {String(activeModule + 1).padStart(2, "0")} OF{" "}
                          {String(detail.features.length).padStart(2, "0")}
                        </span>
                        {detail.features[activeModule]?.badge && (
                          <span className={styles.featureBadge}>
                            {detail.features[activeModule].badge}
                          </span>
                        )}
                      </div>

                      <h4 className={styles.featureTitle} style={{ fontSize: "1.5rem" }}>
                        {detail.features[activeModule]?.title}
                      </h4>
                      <p className={styles.featureDesc} style={{ fontSize: "1rem" }}>
                        {detail.features[activeModule]?.desc}
                      </p>

                      {detail.features[activeModule]?.points && detail.features[activeModule].points.length > 0 && (
                        <ul className={styles.featureList} style={{ marginTop: "0.5rem" }}>
                          {detail.features[activeModule].points.map((pt, i) => (
                            <li key={i} className={styles.featureItem} style={{ fontSize: "0.875rem" }}>
                              <span className={styles.featureItemIcon}>
                                <CheckIcon size={14} />
                              </span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </NativeReveal>
              ) : (
                /* ALL MODULES IN GRID */
                <NativeReveal delay={0.1}>
                  <div className={styles.featureGrid}>
                    {detail.features.map((feat, idx) => (
                      <FeatureCard key={feat.id || idx} item={feat} index={idx} />
                    ))}
                  </div>
                </NativeReveal>
              )}
            </div>

            {/* OPERATIONAL EXECUTION & APPROVAL WORKFLOW */}
            {detail?.approvalWorkflow && (
              <div className={styles.subSection}>
                <NativeReveal>
                  <div className={styles.subSectionHeader}>
                    <h3 className={styles.subSectionTitle}>
                      {detail.approvalWorkflow.title ||
                        (detail.approvalWorkflow.stages?.length
                          ? `Sequential ${detail.approvalWorkflow.stages.length}-Stage Execution Lifecycle`
                          : "Operational & Approval Workflow")}
                    </h3>
                    <p className={styles.subSectionLead}>
                      {detail.approvalWorkflow.lead ||
                        "Multi-tier operational workflow enforcing phased execution, role verification, and automated state safeguards to guarantee integrity."}
                    </p>
                  </div>
                </NativeReveal>

                <NativeReveal delay={0.1}>
                  <div className={styles.pipelineWrap}>
                    {detail.approvalWorkflow.stages && (
                      <div className={styles.workflowStages}>
                        {detail.approvalWorkflow.stages.map((stg, idx) => (
                          <Card
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
                            <h4 className={styles.stageTitle}>{stg.title}</h4>
                            <p className={styles.stageDesc}>{stg.desc}</p>
                            <div className={styles.stageActionBox}>
                              <WorkflowIcon size={14} />
                              <span>{stg.action}</span>
                            </div>
                          </Card>
                        ))}
                      </div>
                    )}

                    {detail.approvalWorkflow.lockMechanism && (
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
                    )}
                  </div>
                </NativeReveal>
              </div>
            )}
          </div>
        </section>
      )}

      {/* =========================================================================
          ACT 4: SYSTEM ANATOMY & CODEBASE ARCHITECTURE (#architecture)
          ========================================================================= */}
      {detail?.architecture && (
        <section id="architecture" className={styles.section}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel number="04" label="SYSTEM ANATOMY & ARCHITECTURE" />
                <h2 className={`${styles.sectionTitle} text-fade`}>
                  {detail?.architectureTitle || (
                    <>
                      System Architecture &{" "}
                      <span className="font-serif text-glow">Modular Topology</span>
                    </>
                  )}
                </h2>
                <p className={styles.sectionLead}>
                  {detail?.architectureLead ||
                    "Engineered for high availability, fault tolerance, and clear domain separation across frontend interfaces, service layers, and data stores."}
                </p>
              </div>
            </NativeReveal>

            {/* ARCHITECTURE LAYERS FLOW */}
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
                  {detail.architecture.layers?.map((layer, idx) => (
                    <Card key={idx} className={styles.archLayerCard}>
                      <div className={styles.archLayerHead}>
                        <h4 className={styles.archLayerName}>{layer.name}</h4>
                        <span className={styles.archLayerBadge}>{layer.badge}</span>
                      </div>
                      <p className={styles.archLayerDesc}>{layer.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </NativeReveal>

            {/* CURATED TECH STACK */}
            {detail?.techStackGrouped && (
              <div className={styles.subSection}>
                <NativeReveal>
                  <div className={styles.subSectionHeader}>
                    <h3 className={styles.subSectionTitle}>
                      {detail?.techStackTitle || "Curated Technology Stack"}
                    </h3>
                    <p className={styles.subSectionLead}>
                      {detail?.techStackLead ||
                        "A modern engineering stack combining high-throughput user interfaces, modular backend architecture, and resilient data layers."}
                    </p>
                  </div>
                </NativeReveal>

                <NativeReveal delay={0.1}>
                  <div className={styles.techMatrix}>
                    {detail.techStackGrouped.map((grp, idx) => (
                      <Card key={idx} className={styles.techGroupCard}>
                        <h4 className={styles.techGroupTitle}>{grp.category}</h4>
                        <div className={styles.techItemList}>
                          {grp.items?.map((item, i) => (
                            <div key={i} className={styles.techItemRow}>
                              <span className={styles.techItemName}>{item.name}</span>
                              <span className={styles.techItemRole}>{item.role}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                </NativeReveal>
              </div>
            )}

            {/* MONOREPO CODEBASE & PRISMA SCHEMAS */}
            {detail?.directoryStructure && detail?.prismaSchemas && (
              <div className={styles.subSection}>
                <NativeReveal>
                  <div className={styles.subSectionHeader}>
                    <h3 className={styles.subSectionTitle}>
                      {detail?.directoryTitle || "Codebase Structure & Data Models"}
                    </h3>
                    <p className={styles.subSectionLead}>
                      {detail?.directoryLead ||
                        "Clear boundary separation between system components, paired with modular schemas and structured repositories."}
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
                          {Array.isArray(detail.directoryStructure) &&
                            detail.directoryStructure.map((dir, i) => (
                              <button
                                key={i}
                                type="button"
                                className={`${styles.navPill} ${
                                  activeDirTab === i ? styles.navPillActive : ""
                                }`}
                                onClick={() => setActiveDirTab(i)}
                              >
                                {dir.name ? dir.name.split(" ")[0] : `Tab ${i + 1}`}
                              </button>
                            ))}
                        </div>
                      </div>
                      <div className={styles.terminalBody}>
                        {Array.isArray(detail.directoryStructure) &&
                          detail.directoryStructure[activeDirTab] && (
                            <>
                              <div style={{ color: "var(--accent-glow)", marginBottom: "0.5rem" }}>
                                📁 {detail.directoryStructure[activeDirTab].name}
                              </div>
                              {detail.directoryStructure[activeDirTab].items?.map((it, j) => (
                                <div key={j} className={styles.terminalTreeItem}>
                                  <span className={styles.terminalTreeBullet}>├──</span>
                                  <span>{it}</span>
                                </div>
                              ))}
                            </>
                          )}
                      </div>
                    </div>

                    {/* Modular Prisma Schemas */}
                    <div className={styles.schemaList}>
                      <h4
                        style={{
                          fontSize: "1.0625rem",
                          fontWeight: 500,
                          color: "#fff",
                          margin: "0 0 0.5rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <FileCodeIcon size={18} /> {detail?.schemaEngineTitle || "Database Entities & Schema Models"}
                      </h4>
                      {detail.prismaSchemas.map((sch, i) => (
                        <Card key={i} className={styles.schemaCard}>
                          <h5 className={styles.schemaName}>{sch.name || sch.title}</h5>
                          <p className={styles.schemaPurpose}>{sch.purpose || sch.desc || sch.schema}</p>
                        </Card>
                      ))}
                    </div>
                  </div>
                </NativeReveal>
              </div>
            )}
          </div>
        </section>
      )}

      {/* =========================================================================
          ACT 5: SECURITY, API & PRODUCTION IMPACT (#security-impact)
          ========================================================================= */}
      {detail?.apiEndpoints && (
        <section id="security-impact" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <SectionLabel number="05" label="SECURITY, API & PRODUCTION IMPACT" />
                <h2 className={`${styles.sectionTitle} text-fade`}>
                  {detail?.securityTitle || (
                    <>
                      Hardened Perimeter &{" "}
                      <span className="font-serif text-glow">Proven Impact</span>
                    </>
                  )}
                </h2>
                <p className={styles.sectionLead}>
                  {detail?.securityLead ||
                    "Enterprise-grade security policies, documented API contracts, and the quantifiable outcomes achieved during production deployment."}
                </p>
              </div>
            </NativeReveal>

            {/* SECURITY PILLARS & API ENDPOINTS */}
            <NativeReveal delay={0.1}>
              <div className={styles.apiSecurityGrid}>
                {/* RESTful API Endpoints */}
                <div>
                  <h3 className={styles.subSectionTitle} style={{ marginBottom: "1rem" }}>
                    {detail?.apiTitle || "API Endpoints & Routing Architecture"}
                  </h3>
                  {Array.isArray(detail.apiEndpoints) &&
                    detail.apiEndpoints.map((grp, i) => (
                      <div key={i} className={styles.endpointGroup}>
                        <h4 className={styles.endpointGroupTitle}>{grp.group || grp.category}</h4>
                        <div className={styles.endpointList}>
                          {grp.routes?.map((rt, j) => (
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

                {/* Enterprise Security Standards */}
                <div>
                  <h3 className={styles.subSectionTitle} style={{ marginBottom: "1rem" }}>
                    {detail?.securityStandardsTitle || "Enterprise Security & Governance Standards"}
                  </h3>
                  <div className={styles.securityGrid}>
                    {detail.securityStandards?.map((sec, i) => (
                      <Card key={i} className={styles.securityCard}>
                        <div className={styles.securityIconBox}>
                          <ShieldCheckIcon size={20} />
                        </div>
                        <div>
                          <h4 className={styles.securityTitle}>{sec.title}</h4>
                          <p className={styles.securityDesc}>{sec.desc}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </NativeReveal>

            {/* ENGINEERING CHALLENGES & PROVEN RESULTS */}
            {(hardSection || resultsSection) && (
              <div className={styles.subSection}>
                <NativeReveal>
                  <div className={styles.subSectionHeader}>
                    <h3 className={styles.subSectionTitle}>
                      {detail?.challengesTitle || "Engineering Challenges & Production Results"}
                    </h3>
                    <p className={styles.subSectionLead}>
                      {detail?.challengesLead ||
                        "How critical technical bottlenecks were overcome and verified under real production conditions."}
                    </p>
                  </div>
                </NativeReveal>

                {hardSection && (
                  <NativeReveal delay={0.1}>
                    <div className={styles.challengesGrid}>
                      {hardSection.body.map((text, i) => (
                        <Card key={i} className={styles.challengeItemCard}>
                          <h4 className={styles.challengeItemTitle}>
                            Challenge // 0{i + 1}
                          </h4>
                          <p className={styles.challengeItemText}>{text}</p>
                        </Card>
                      ))}
                    </div>
                  </NativeReveal>
                )}

                {/* MEASURABLE RESULTS CARDS */}
                {resultsSection && (
                  <NativeReveal delay={0.15}>
                    <div className={styles.resultsRow}>
                      {detail?.metricOutcomes ? (
                        detail.metricOutcomes.map((m, i) => (
                          <Card key={i} className={styles.resultCard}>
                            <span className={`font-serif ${styles.resultValue}`}>{m.value}</span>
                            <span className={styles.resultText}>{m.label}</span>
                          </Card>
                        ))
                      ) : (
                        <>
                          <Card className={styles.resultCard}>
                            <span className={`font-serif ${styles.resultValue}`}>
                              {isProductionReady ? "Production Live" : "Active"}
                            </span>
                            <span className={styles.resultText}>
                              {isProductionReady
                                ? "Deployed and operational in production"
                                : "Core modules under active engineering delivery"}
                            </span>
                          </Card>
                          <Card className={styles.resultCard}>
                            <span className={`font-serif ${styles.resultValue}`}>100%</span>
                            <span className={styles.resultText}>Architecture contract verified with zero regression</span>
                          </Card>
                          <Card className={styles.resultCard}>
                            <span className={`font-serif ${styles.resultValue}`}>Verified</span>
                            <span className={styles.resultText}>Production performance and security benchmarks met</span>
                          </Card>
                        </>
                      )}
                    </div>
                  </NativeReveal>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* FALLBACK FOR NON-ENTERPRISE PROJECTS WITHOUT RICH METADATA */}
      {!isEnterprise && detail?.sections?.length > 0 && (
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

export default memo(ProjectDetailPage);
