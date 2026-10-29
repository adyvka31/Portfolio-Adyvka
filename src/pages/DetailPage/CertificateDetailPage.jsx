import { useState, useEffect } from "react";
import SEO from "../../components/SEO/SEO";
import { useParams, Navigate, Link } from "react-router-dom";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import PrevNextNav from "../../components/PrevNextNav/PrevNextNav";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import NativeReveal from "../../components/Reveal/NativeReveal";
import Tag from "../../components/Tag/Tag";
import Image from "../../components/Image/Image";
import { ArrowUpRightIcon, MaximizeIcon, XIcon } from "../../components/Icons/Icons";
import { allCertificates, getSiblings } from "../../data/portfolio";
import { certificateDetails } from "../../data/certificateDetails";
import { SITE_URL } from "../../data/siteConfig";
import local from "./CertificateDetailPage.module.css";

export default function CertificateDetailPage() {
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

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

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
  ];

  const certificateSchema = {
    "@type": "EducationalOccupationalCredential",
    "@id": `${SITE_URL}/certificates/${effectiveSlug}#credential`,
    name: effectiveTitle,
    description: effectiveSummary,
    credentialCategory: "Professional Certification",
    recognizedBy: {
      "@type": "Organization",
      name: effectiveIssuer,
    },
    about: { "@id": `${SITE_URL}/#person` },
    keywords: certificateKeywords.join(", "),
  };

  return (
    <PageShell>
      <SEO
        title={`${effectiveTitle} — Rafif Sava Adyvka Pratama`}
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
      <nav className={local.subnav} aria-label="Certificate Sub Navigation">
        <div className={local.subnavInner}>
          <Link to="/certificates" className={local.backBtn}>
            ← All Certificates
          </Link>

          <div className={local.statusIndicator}>
            <span className={local.statusPulse} aria-hidden="true" />
            <span>
              Verified Credential · {effectiveIssuer}
            </span>
          </div>

          {detail?.verifyUrl ? (
            <a
              href={detail.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={local.subnavAction}
              aria-label={`Verify ${effectiveTitle} on official website`}
            >
              <span>Verify Official Credential</span>
              <ArrowUpRightIcon size={12} />
            </a>
          ) : (
            <span className={local.subnavAction}>
              Issued in {effectiveYear}
            </span>
          )}
        </div>
      </nav>

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
              <article
                className={local.fullWidthCertCard}
                onClick={() => setIsLightboxOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsLightboxOpen(true);
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
                    {effectiveIssuer} — Official Credential Verification
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
              </article>
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
              <aside className={`glass ${local.specCard}`}>
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
              </aside>
            </NativeReveal>

            {/* CURRICULUM HIGHLIGHTS & PRACTICAL IMPACT */}
            <div className={local.rightCol}>
              {detail?.highlights && detail.highlights.length > 0 && (
                <NativeReveal delay={0.08} className="reveal-slide-up">
                  <article className={`glass ${local.panelCard}`}>
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
                  </article>
                </NativeReveal>
              )}

              {detail?.application && (
                <NativeReveal delay={0.12} className="reveal-slide-up">
                  <article className={`glass ${local.panelCard}`}>
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
                  </article>
                </NativeReveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SIBLING NAV & BOTTOM CTA */}
      <PrevNextNav prev={prev} next={next} baseUrl="/certificates" />
      <BottomCTA />

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && cert?.image && (
        <div
          className={local.lightboxBackdrop}
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={local.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={local.lightboxHeader}>
              <h3 className={local.lightboxTitle}>
                {effectiveTitle} · {effectiveIssuer}
              </h3>
              <button
                className={local.lightboxCloseBtn}
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close certificate modal"
              >
                <XIcon size={18} />
              </button>
            </div>
            <div className={local.lightboxImageWrap}>
              <img
                src={
                  typeof cert.image === "object"
                    ? cert.image.img?.src || cert.image
                    : cert.image
                }
                alt={effectiveTitle}
                className={local.lightboxImg}
              />
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
