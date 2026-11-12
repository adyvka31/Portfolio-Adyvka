import { useState, memo } from "react";
import SEO from "../../components/SEO/SEO";
import { useParams, Navigate, Link } from "react-router-dom";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import PrevNextNav from "../../components/PrevNextNav/PrevNextNav";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import NativeReveal from "../../components/Reveal/NativeReveal";
import Tag from "../../components/Tag/Tag";
import Image from "../../components/Image/Image";
import Lightbox from "../../components/Lightbox/Lightbox";
import SubNav from "../../components/SubNav/SubNav";
import Card from "../../components/Card/Card";
import { ArrowUpRightIcon, MaximizeIcon } from "../../components/Icons/Icons";
import { allCertificates, getSiblings } from "../../data/portfolio";
import { certificateDetails } from "../../data/certificateDetails";
import { SITE_URL } from "../../data/siteConfig";
import local from "./CertificateDetailPage.module.css";

function CertificateDetailPage() {
  const { slug } = useParams();

  // Find matching certificate item
  const cert =
    allCertificates.find((c) => c.slug === slug) ||
    allCertificates.find((c) => {
      const lowerSlug = slug?.toLowerCase() || "";
      return (
        c.slug.toLowerCase().includes(lowerSlug) ||
        c.title.toLowerCase().includes(lowerSlug)
      );
    });

  // Resolve detail record with fallback aliases
  const resolvedKey =
    slug && certificateDetails[slug]
      ? slug
      : cert?.slug && certificateDetails[cert.slug]
      ? cert.slug
      : null;

  const detail = resolvedKey ? certificateDetails[resolvedKey] : null;

  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  if (!cert && !detail) return <Navigate to="/certificates" replace />;

  const effectiveTitle = cert?.title || detail?.title || "Certificate";
  const effectiveIssuer = detail?.issuer || cert?.institution || "Verified Issuer";
  const effectiveYear = detail?.issued || cert?.year || "2024";
  const effectiveSummary =
    detail?.summary ||
    cert?.description ||
    "Verified professional credential demonstrating technical competencies and software engineering standards.";
  const effectiveSlug = cert?.slug || slug;

  const { prev, next } = getSiblings(allCertificates, effectiveSlug);

  const heroMeta = [
    { label: "Issuer", value: effectiveIssuer },
    { label: "Completed", value: effectiveYear },
    { label: "Track", value: detail?.track || "Technical Certification" },
    { label: "Credential Status", value: "Verified & Active" },
  ];

  const certificateKeywords = [
    effectiveTitle,
    `${effectiveTitle} Rafif Sava Adyvka Pratama`,
    `${effectiveTitle} Adyvka`,
    effectiveIssuer,
    `${effectiveIssuer} Rafif Sava`,
    "Verified Credential",
    "Professional Certification",
    ...(cert?.skills || []),
    ...(detail?.skillsCovered || []),
    ...(detail?.transcript
      ? [
          "DBS Foundation Coding Camp 2026",
          "Academic Transcript",
          "Transkrip Nilai Dicoding DBS",
          `Cohort ${detail.transcript.cohortId}`,
          "RuangTumbuh Capstone Project",
          "Full-Stack Web Developer",
        ]
      : []),
    ...(detail?.transcriptGrade
      ? [
          detail.transcriptGrade.program,
          `Course ${detail.transcriptGrade.courseCode}`,
          `Grade ${detail.transcriptGrade.grade}`,
        ]
      : []),
  ];

  const certificateSchema = {
    "@type": "EducationalOccupationalCredential",
    "@id": `${SITE_URL}/certificates/${effectiveSlug}#credential`,
    name: effectiveTitle,
    description: effectiveSummary,
    credentialCategory: detail?.transcript
      ? "Academic Transcript & Professional Credential"
      : "Professional Certification",
    recognizedBy: detail?.transcript
      ? [
          { "@type": "Organization", name: "DBS Foundation" },
          { "@type": "Organization", name: "Dicoding Indonesia" },
        ]
      : {
          "@type": "Organization",
          name: effectiveIssuer,
        },
    about: { "@id": `${SITE_URL}/#person` },
    keywords: certificateKeywords.join(", "),
    ...(detail?.transcript
      ? {
          identifier: detail.transcript.cohortId,
          educationalLevel: detail.transcript.learningPath,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: String(detail.transcript.averageScore),
            bestRating: "100",
            worstRating: "0",
            ratingCount: detail.transcript.courses.length,
          },
        }
      : {}),
    ...(detail?.transcriptGrade
      ? {
          isPartOf: {
            "@type": "EducationalOccupationalCredential",
            name: detail.transcriptGrade.program,
            url: `${SITE_URL}/certificates/${detail.transcriptGrade.parentSlug}`,
          },
        }
      : {}),
  };

  return (
    <PageShell>
      <SEO
        title={`${effectiveTitle} · Rafif Sava Adyvka Pratama`}
        description={effectiveSummary}
        path={`/certificates/${effectiveSlug}`}
        type="article"
        keywords={certificateKeywords}
        schema={certificateSchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Certificates", item: "/certificates" },
          { name: effectiveTitle, item: `/certificates/${effectiveSlug}` },
        ]}
      />

      {/* STICKY QUICK NAVIGATION BAR */}
      <SubNav
        backTo="/certificates"
        backLabel="← All Certificates"
        statusText={`Verified Credential · ${effectiveIssuer}`}
        action={
          detail?.verifyUrl
            ? {
                href: detail.verifyUrl,
                label: "Verify Official Credential",
                ariaLabel: `Verify ${effectiveTitle} on official website`,
              }
            : {
                text: `Issued in ${effectiveYear}`,
              }
        }
        ariaLabel="Certificate Sub Navigation"
      />

      {/* COMPACT PAGE HERO */}
      <PageHero
        number={effectiveYear}
        label={`Credential · ${effectiveIssuer}`}
        title={`${effectiveTitle}.`}
        description={effectiveSummary}
        meta={heroMeta}
      />

      {/* SECTION 01: FULL-WIDTH CERTIFICATE SHOWCASE */}
      {cert?.image && (
        <section
          className={local.certificateSection}
          aria-label="Certificate Document"
        >
          <div className={local.container}>
            <NativeReveal className="reveal-slide-up">
              <Card
                className={local.fullWidthCertCard}
                onClick={() => setActiveLightboxIndex(0)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveLightboxIndex(0);
                  }
                }}
                aria-label={`Expand certificate credential for ${effectiveTitle}`}
              >
                {/* macOS / Browser Header Chrome Bar */}
                <div className={local.certChrome}>
                  <div className={local.chromeDots}>
                    <span className={`${local.dot} ${local.dotRed}`} />
                    <span className={`${local.dot} ${local.dotYellow}`} />
                    <span className={`${local.dot} ${local.dotGreen}`} />
                  </div>
                  <div className={local.chromeTitle}>
                    {effectiveIssuer}: Official Credential Verification
                  </div>
                  <div className={local.chromeRight}>
                    <span className={local.verifiedPill}>
                      <span className={local.statusPulse} aria-hidden="true" />
                      Verified
                    </span>
                  </div>
                </div>

                {/* Full-width Image Wrap */}
                <div className={local.certImageWrap}>
                  <Image
                    src={cert.image}
                    alt={`Official certificate for ${effectiveTitle}`}
                    className={local.certFullImage}
                    width={1400}
                    height={850}
                  />
                  <div className={local.imageOverlay} aria-hidden="true" />
                  <div className={local.expandBadge}>
                    <MaximizeIcon size={12} />
                    <span>Click to view full resolution</span>
                  </div>
                </div>

                {/* Footer metadata strip */}
                <div className={local.certFooterStrip}>
                  <div className={local.footerItem}>
                    <span className={local.footerLabel}>Recipient</span>
                    <span className={local.footerVal}>
                      Rafif Sava Adyvka Pratama
                    </span>
                  </div>
                  <div className={local.footerItem}>
                    <span className={local.footerLabel}>Issuer</span>
                    <span className={local.footerVal}>{effectiveIssuer}</span>
                  </div>
                  <div className={local.footerItem}>
                    <span className={local.footerLabel}>Issued Date</span>
                    <span className={local.footerVal}>{effectiveYear}</span>
                  </div>
                  <div className={local.footerItem}>
                    <span className={local.footerLabel}>Credential ID</span>
                    <span className={local.footerVal}>
                      {detail?.credentialId ||
                        `CRED-${effectiveYear}-${effectiveSlug.slice(0, 8).toUpperCase()}`}
                    </span>
                  </div>
                </div>
              </Card>
            </NativeReveal>
          </div>
        </section>
      )}

      {/* SECTION 02: DETAILS SPECIFICATION & KNOWLEDGE IMPACT */}
      <section
        className={local.detailsSection}
        aria-label="Certificate Specifications"
      >
        <div className={local.container}>
          <div className={local.detailsGrid}>
            {/* SPECIFICATION CARD */}
            <NativeReveal delay={0.06} className="reveal-slide-up">
              <Card as="aside" className={local.specCard}>
                <div className={local.specRow}>
                  <span className={local.specLabel}>Credential ID</span>
                  <span className={local.specValue}>
                    {detail?.credentialId ||
                      `CRED-${effectiveYear}-${effectiveSlug.slice(0, 8).toUpperCase()}`}
                  </span>
                </div>
                <div className={local.specRow}>
                  <span className={local.specLabel}>Category Track</span>
                  <span className={local.specValue}>
                    {detail?.track || "Software Development"}
                  </span>
                </div>
                <div className={local.specRow}>
                  <span className={local.specLabel}>Effort / Depth</span>
                  <span className={local.specValue}>
                    {detail?.effort || "Verified Curriculum"}
                  </span>
                </div>

                <div className={local.skillsGroup}>
                  <span className={local.skillsLabel}>
                    Verified Competencies
                  </span>
                  <div className={local.skillsWrap}>
                    {(detail?.skills || cert?.tags || []).map((skill) => (
                      <Tag key={skill} size="sm">
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </div>

                {detail?.verifyUrl && (
                  <a
                    href={detail.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={local.verifyBtn}
                  >
                    <span>Verify on Official Portal</span>
                    <ArrowUpRightIcon size={13} />
                  </a>
                )}

                {/* VERIFIED CODING CAMP TRANSCRIPT GRADE */}
                {detail?.transcriptGrade && (
                  <div className={local.transcriptGradeCard}>
                    <div className={local.transcriptGradeHeader}>
                      <span className={local.transcriptBadge}>
                        Coding Camp 2026
                      </span>
                    </div>
                    <div className={local.transcriptGradeBody}>
                      <div className={local.transcriptScorePill}>
                        Score {detail.transcriptGrade.score} · Grade {detail.transcriptGrade.grade}
                      </div>
                      <p className={local.transcriptCourseName}>
                        {detail.transcriptGrade.courseCode} · {detail.transcriptGrade.courseName}
                      </p>
                      <div className={local.transcriptMetaRow}>
                        <span>Effort: {detail.transcriptGrade.hours}</span>
                        <span>Cohort: {detail.transcriptGrade.cohortId}</span>
                      </div>
                      <Link
                        to={`/certificates/${detail.transcriptGrade.parentSlug}`}
                        className={local.viewTranscriptLink}
                      >
                        <span>View Full Program Transcript</span>
                        <ArrowUpRightIcon size={12} />
                      </Link>
                    </div>
                  </div>
                )}
              </Card>
            </NativeReveal>

            {/* CURRICULUM HIGHLIGHTS & PRACTICAL IMPACT */}
            <div className={local.rightCol}>
              {detail?.highlights && detail.highlights.length > 0 && (
                <NativeReveal delay={0.08} className="reveal-slide-up">
                  <Card className={local.panelCard}>
                    <header className={local.panelHeader}>
                      <div className={local.panelIcon}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <h2 className={local.panelTitle}>
                        Curriculum & Core Competencies
                      </h2>
                    </header>

                    <ul className={local.highlightList}>
                      {detail.highlights.map((point, idx) => (
                        <li key={idx} className={local.highlightItem}>
                          <svg
                            className={local.checkIcon}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              d="M5 13L9 17L19 7"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </NativeReveal>
              )}

              {detail?.application && (
                <NativeReveal delay={0.12} className="reveal-slide-up">
                  <Card className={local.panelCard}>
                    <header className={local.panelHeader}>
                      <div className={local.panelIcon}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M16 18L22 12L16 6M8 6L2 12L8 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <h2 className={local.panelTitle}>
                        Applied Knowledge & Engineering Impact
                      </h2>
                    </header>

                    <p className={local.applicationText}>
                      {detail.application}
                    </p>
                  </Card>
                </NativeReveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: OFFICIAL ACADEMIC TRANSCRIPT (FOR CODING CAMP) */}
      {detail?.transcript && (
        <section
          className={local.transcriptSection}
          aria-label="Official Academic Transcript"
        >
          <div className={local.container}>
            <NativeReveal className="reveal-slide-up">
              <header className={local.transcriptHeader}>
                <span className={local.sectionTag}>Official Evaluation</span>
                <h2 className={local.sectionTitle}>
                  Academic Transcript & Final Evaluation.
                </h2>
                <p className={local.sectionLead}>
                  Verified course-by-course performance, curriculum hours, and team capstone evaluation issued by DBS Foundation and Dicoding Indonesia for Cohort {detail.transcript.cohortId}.
                </p>
              </header>

              {/* METRICS GRID */}
              <div className={local.transcriptMetricsGrid}>
                <div className={local.metricCard}>
                  <span className={local.metricVal}>{detail.transcript.cohortId}</span>
                  <span className={local.metricLabel}>Cohort ID</span>
                  <span className={local.metricSub}>{detail.transcript.completionStatus}</span>
                </div>
                <div className={local.metricCard}>
                  <span className={local.metricVal}>{detail.transcript.averageScore} / 100</span>
                  <span className={local.metricLabel}>Cumulative Average</span>
                  <span className={local.metricSub}>Final Grade: {detail.transcript.finalGrade} (Distinction)</span>
                </div>
                <div className={local.metricCard}>
                  <span className={local.metricVal}>{detail.transcript.totalHours} Hours</span>
                  <span className={local.metricLabel}>Curriculum Hours</span>
                  <span className={local.metricSub}>10 Assessed Modules</span>
                </div>
                <div className={local.metricCard}>
                  <span className={local.metricVal}>{detail.transcript.attendance.mandatory}</span>
                  <span className={local.metricLabel}>Mandatory Attendance</span>
                  <span className={local.metricSub}>{detail.transcript.attendance.overall} Overall Sessions</span>
                </div>
              </div>

              {/* CAPSTONE SPOTLIGHT */}
              {detail.transcript.capstone && (
                <div className={local.capstoneCard}>
                  <div className={local.capstoneHeaderRow}>
                    <span className={local.capstoneBadge}>
                      Team Capstone · {detail.transcript.capstone.teamId}
                    </span>
                    <div className={local.capstoneScoreBadge}>
                      <span>Score: {detail.transcript.capstone.score} / 100</span>
                      <span className={local.gradePillA}>Grade {detail.transcript.capstone.grade}</span>
                    </div>
                  </div>
                  <div className={local.capstoneBody}>
                    <h3 className={local.capstoneTitle}>
                      Capstone Project: {detail.transcript.capstone.projectName}
                    </h3>
                    <p className={local.capstoneDesc}>
                      {detail.transcript.capstone.projectDescription}. Dedicated 250 curriculum hours leading architecture, frontend-backend integration, and delivery.
                    </p>
                  </div>
                  <Link
                    to={`/projects/${detail.transcript.capstone.projectSlug}`}
                    className={local.capstoneBtn}
                  >
                    <span>Explore RuangTumbuh Project</span>
                    <ArrowUpRightIcon size={14} />
                  </Link>
                </div>
              )}

              {/* COURSES EVALUATION TABLE */}
              <h3 className={local.tableSectionTitle}>
                Course Curriculum & Performance Breakdown
              </h3>
              <div className={local.coursesTableWrap}>
                <table className={local.coursesTable}>
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Courses / Specialization / Activities</th>
                      <th>Hours</th>
                      <th>Score (0-100)</th>
                      <th>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.transcript.courses.map((course, idx) => (
                      <tr key={idx}>
                        <td className={local.codeCell}>{course.code}</td>
                        <td>
                          {course.certSlug ? (
                            <Link
                              to={`/certificates/${course.certSlug}`}
                              className={local.courseLink}
                              title={`View ${course.title} certificate`}
                            >
                              <span>{course.title}</span>
                              <ArrowUpRightIcon size={11} />
                            </Link>
                          ) : course.projectSlug ? (
                            <Link
                              to={`/projects/${course.projectSlug}`}
                              className={local.courseLink}
                              title={`View ${course.title} project`}
                            >
                              <span>{course.title}</span>
                              <ArrowUpRightIcon size={11} />
                            </Link>
                          ) : (
                            <span>{course.title}</span>
                          )}
                        </td>
                        <td className={local.numCell}>{course.hours} hrs</td>
                        <td className={local.numCell}>{course.score}</td>
                        <td>
                          <span
                            className={
                              course.grade === "A"
                                ? local.gradePillA
                                : local.gradePillB
                            }
                          >
                            Grade {course.grade}
                          </span>
                        </td>
                      </tr>
                    ))}
                    <tr className={local.totalRow}>
                      <td colSpan={2}>Total (Hours) / Average (Score)</td>
                      <td className={local.numCell}>{detail.transcript.totalHours} hrs</td>
                      <td className={local.numCell}>{detail.transcript.averageScore}</td>
                      <td>
                        <span className={local.gradePillA}>
                          Grade {detail.transcript.finalGrade}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* OFFICIAL TRANSCRIPT DOCUMENT PREVIEW */}
              {detail.transcript.docImage && (
                <div className={local.transcriptDocCard}>
                  <div className={local.certChrome}>
                    <div className={local.chromeDots}>
                      <span className={`${local.dot} ${local.dotRed}`} />
                      <span className={`${local.dot} ${local.dotYellow}`} />
                      <span className={`${local.dot} ${local.dotGreen}`} />
                    </div>
                    <div className={local.chromeTitle}>
                      DBS Foundation × Dicoding: Official Final Academic Transcript
                    </div>
                    <div className={local.chromeRight}>
                      <span className={local.verifiedPill}>
                        <span className={local.statusPulse} aria-hidden="true" />
                        Verified
                      </span>
                    </div>
                  </div>

                  <div
                    className={local.certImageWrap}
                    onClick={() => setActiveLightboxIndex(1)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveLightboxIndex(1);
                      }
                    }}
                    aria-label="Expand transcript document"
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      src={detail.transcript.docImage}
                      alt="DBS Foundation Coding Camp 2026 Final Transcript for Rafif Sava Adyvka Pratama"
                      className={local.certFullImage}
                      width={1400}
                      height={990}
                    />
                    <div className={local.imageOverlay} aria-hidden="true" />
                    <div className={local.expandBadge}>
                      <MaximizeIcon size={12} />
                      <span>Click to view full transcript resolution</span>
                    </div>
                  </div>

                  <div className={local.transcriptDocFooter}>
                    <div className={local.docInfo}>
                      <span>Official Academic Document · Cohort {detail.transcript.cohortId} · Final Status: Full Graduated</span>
                    </div>
                    {detail.transcript.docPdf && (
                      <a
                        href={detail.transcript.docPdf}
                        download="Rafif-Sava-Adyvka-Pratama-Coding-Camp-2026-Transcript.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={local.downloadPdfBtn}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        <span>Download Official PDF Transcript</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </NativeReveal>
          </div>
        </section>
      )}

      {/* SIBLING NAV & BOTTOM CTA */}
      <PrevNextNav prev={prev} next={next} baseUrl="/certificates" />
      <BottomCTA />

      {/* REUSABLE FULLSCREEN LIGHTBOX MODAL */}
      <Lightbox
        items={[
          ...(cert?.image
            ? [
                {
                  image: cert.image,
                  title: effectiveTitle,
                  desc: effectiveIssuer,
                  tag: "Verified Credential",
                },
              ]
            : []),
          ...(detail?.transcript?.docImage
            ? [
                {
                  image: detail.transcript.docImage,
                  title: "DBS Foundation Coding Camp 2026 Final Transcript",
                  desc: `Official Academic Transcript for Rafif Sava Adyvka Pratama (${detail.transcript.cohortId})`,
                  tag: "Academic Transcript",
                },
              ]
            : []),
        ]}
        activeIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(idx) => setActiveLightboxIndex(idx)}
      />
    </PageShell>
  );
}

export default memo(CertificateDetailPage);
