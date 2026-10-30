import { memo } from "react";
import { useParams, Navigate } from "react-router-dom";
import NarrativeDetailTemplate from "../../templates/NarrativeDetailTemplate/NarrativeDetailTemplate";
import { allTeachingExperiences, getSiblings } from "../../data/portfolio";
import { teachingDetails } from "../../data/teachingDetails";
import { SITE_URL } from "../../data/siteConfig";

function TeachingDetailPage({
  item: propItem,
  detail: propDetail,
  slug: propSlug,
}) {
  const params = useParams();
  const slug = propSlug || params.slug;

  const item =
    propItem ||
    allTeachingExperiences.find((t) => t.slug === slug) ||
    allTeachingExperiences.find((t) => t.institution.toLowerCase().includes(slug?.toLowerCase() || ""));

  const detail = propDetail || (slug ? teachingDetails[slug] : null);

  if (!item && !detail) {
    return <Navigate to="/experience" replace />;
  }

  const effectiveTitle = detail?.roleTitle || item?.title || "Teaching Experience";
  const effectiveInstitution = detail?.institution || item?.institution || "Education Outreach";
  const effectivePeriod = detail?.period || item?.year || "2025";
  const effectiveSummary = detail?.summary || item?.description || "";
  const effectiveSlug = item?.slug || slug;

  const { prev, next } = getSiblings(allTeachingExperiences, effectiveSlug);

  const teachingKeywords = [
    effectiveTitle,
    effectiveInstitution,
    `${effectiveTitle} at ${effectiveInstitution}`,
    `${effectiveInstitution} Rafif Sava Adyvka Pratama`,
    `${effectiveInstitution} Adyvka`,
    "Teaching Experience",
    "Technical Instructor",
    ...(item?.tags || []),
    ...(detail?.stackCovered || []),
  ];

  const teachingSchema = {
    "@type": "Article",
    "@id": `${SITE_URL}/experience/${effectiveSlug}#teaching`,
    headline: `${effectiveTitle} at ${effectiveInstitution}`,
    description: effectiveSummary,
    author: { "@id": `${SITE_URL}/#person` },
    publisher: {
      "@type": "Organization",
      name: effectiveInstitution,
    },
    keywords: teachingKeywords.join(", "),
  };

  return (
    <NarrativeDetailTemplate
      seo={{
        title: `${effectiveTitle} at ${effectiveInstitution} — Rafif Sava Adyvka Pratama`,
        description: effectiveSummary,
        path: `/experience/${effectiveSlug}`,
        type: "article",
        keywords: teachingKeywords,
        schema: teachingSchema,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Experience", item: "/experience" },
          {
            name: `${effectiveTitle} at ${effectiveInstitution}`,
            item: `/experience/${effectiveSlug}`,
          },
        ],
      }}
      subnav={{
        backTo: "/experience",
        backLabel: "← All Experiences",
        statusText: `${detail?.badge || "Teaching Outreach"} · ${effectivePeriod}`,
        ariaLabel: "Teaching Sub Navigation",
      }}
      hero={{
        number: detail?.badge || "Teaching",
        label: detail?.subtitle || effectiveInstitution,
        title: `${effectiveTitle}.`,
        description: effectiveSummary,
        meta: detail?.meta,
      }}
      institution={{
        label: "Host Institution",
        name: effectiveInstitution,
      }}
      tags={detail?.stack || item?.tags || []}
      links={detail?.links}
      kpis={detail?.kpis}
      story={
        detail?.story
          ? {
              sectionNumber: "01",
              sectionLabel: "THE TEACHING SPRINT & NARRATIVE",
              headline: detail.story.headline,
              lead: detail.story.lead,
              quote: detail.story.quote,
              chapters: detail.story.chapters,
              ariaLabel: "Teaching Narrative",
            }
          : null
      }
      pillars={
        detail?.curriculum && detail.curriculum.length > 0
          ? {
              sectionNumber: "02",
              sectionLabel: "WORKSHOP CURRICULUM & PILLARS",
              title: detail.curriculumTitle || "Structured Syllabus & Core Pillars.",
              lead:
                detail.curriculumLead ||
                "A pedagogical breakdown designed to deconstruct engineering concepts for secondary students.",
              items: detail.curriculum,
              isCurriculum: true,
              ariaLabel: "Workshop Curriculum",
            }
          : null
      }
      takeaways={
        detail?.takeaways && detail.takeaways.length > 0
          ? {
              sectionNumber: "03",
              sectionLabel: "PEDAGOGICAL RETROSPECTIVE",
              title: detail.takeawaysTitle || "Key Reflections & Insights.",
              lead:
                detail.takeawaysLead ||
                "Practical insights on leading junior teams, explaining code with empathy, and technical communication.",
              items: detail.takeaways,
              ariaLabel: "Pedagogical Retrospective",
            }
          : null
      }
      documentation={
        detail?.documentation && detail.documentation.length > 0
          ? {
              sectionNumber: "04",
              sectionLabel: "ON-SITE DOCUMENTATION & ARCHIVES",
              title:
                detail.documentationTitle ||
                "Classroom Records & Field Archives.",
              lead:
                detail.documentationLead ||
                "Photographic records documenting our on-site survey, computer lab sessions, instructor coordination, and student project presentations.",
              items: detail.documentation,
              ariaLabel: "On-Site Documentation",
            }
          : null
      }
      prev={prev}
      next={next}
      baseUrl="/experience"
    />
  );
}

export default memo(TeachingDetailPage);
