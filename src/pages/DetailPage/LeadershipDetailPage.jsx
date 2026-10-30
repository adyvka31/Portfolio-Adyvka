import { memo } from "react";
import { useParams, Navigate } from "react-router-dom";
import NarrativeDetailTemplate from "../../templates/NarrativeDetailTemplate/NarrativeDetailTemplate";
import { allLeadershipExperiences, getSiblings } from "../../data/portfolio";
import { leadershipDetails } from "../../data/leadershipDetails";
import { SITE_URL } from "../../data/siteConfig";

function LeadershipDetailPage({
  item: propItem,
  detail: propDetail,
  slug: propSlug,
}) {
  const params = useParams();
  const slug = propSlug || params.slug;

  const item =
    propItem ||
    allLeadershipExperiences.find((l) => l.slug === slug) ||
    allLeadershipExperiences.find((l) => {
      const lowerSlug = slug?.toLowerCase() || "";
      return (
        l.slug.toLowerCase().includes(lowerSlug) ||
        l.institution.toLowerCase().includes(lowerSlug) ||
        (lowerSlug.includes("backpacker") && l.slug.includes("backpacker")) ||
        (lowerSlug.includes("osis") && l.slug.includes("student-council")) ||
        (lowerSlug.includes("barmus") && l.slug.includes("barmus")) ||
        (lowerSlug.includes("survival") && l.slug.includes("survival")) ||
        (lowerSlug.includes("itfest") && l.slug.includes("it-fest")) ||
        (lowerSlug.includes("live") && l.slug.includes("live-in")) ||
        (lowerSlug.includes("mission") && (l.slug.includes("live-in") || l.slug.includes("mission-impossible")))
      );
    });

  const resolvedKey =
    slug && leadershipDetails[slug]
      ? slug
      : item?.slug && leadershipDetails[item.slug]
      ? item.slug
      : null;

  const detail = propDetail || (resolvedKey ? leadershipDetails[resolvedKey] : null);

  if (!item && !detail) {
    return <Navigate to="/experience" replace />;
  }

  const effectiveTitle = detail?.roleTitle || item?.title || "Leadership Experience";
  const effectiveInstitution =
    detail?.institution || item?.institution || "Organization";
  const effectivePeriod = detail?.period || item?.year || "2025";
  const effectiveSummary = detail?.summary || item?.description || "";
  const effectiveSlug = item?.slug || slug;

  const { prev, next } = getSiblings(allLeadershipExperiences, effectiveSlug);

  const leadershipKeywords = [
    effectiveTitle,
    effectiveInstitution,
    `${effectiveTitle} at ${effectiveInstitution}`,
    `${effectiveInstitution} Rafif Sava Adyvka Pratama`,
    `${effectiveInstitution} Adyvka`,
    "Leadership Experience",
    "Community Experience",
    ...(item?.tags || []),
    ...(detail?.competencies || []),
  ];

  const leadershipSchema = {
    "@type": "Article",
    "@id": `${SITE_URL}/experience/${effectiveSlug}#leadership`,
    headline: `${effectiveTitle} at ${effectiveInstitution}`,
    description: effectiveSummary,
    author: { "@id": `${SITE_URL}/#person` },
    publisher: {
      "@type": "Organization",
      name: effectiveInstitution,
    },
    keywords: leadershipKeywords.join(", "),
  };

  return (
    <NarrativeDetailTemplate
      seo={{
        title: `${effectiveTitle} at ${effectiveInstitution} — Rafif Sava Adyvka Pratama`,
        description: effectiveSummary,
        path: `/experience/${effectiveSlug}`,
        type: "article",
        keywords: leadershipKeywords,
        schema: leadershipSchema,
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
        statusText: `${detail?.badge || "Leadership Role"} · ${effectivePeriod}`,
        ariaLabel: "Leadership Sub Navigation",
      }}
      hero={{
        number: detail?.badge || "Leadership",
        label: detail?.subtitle || effectiveInstitution,
        title: `${effectiveTitle}.`,
        description: effectiveSummary,
        meta: detail?.meta,
      }}
      institution={{
        label: "Organization / Focus",
        name: effectiveInstitution,
      }}
      tags={detail?.stack || item?.tags || []}
      links={detail?.links}
      kpis={detail?.kpis}
      story={
        detail?.story
          ? {
              sectionNumber: "01",
              sectionLabel: "THE LEADERSHIP JOURNEY & SPRINT STORY",
              headline: detail.story.headline,
              lead: detail.story.lead,
              quote: detail.story.quote,
              chapters: detail.story.chapters,
              ariaLabel: "Leadership Narrative",
            }
          : null
      }
      pillars={
        detail?.pillars && detail.pillars.length > 0
          ? {
              sectionNumber: "02",
              sectionLabel: "KEY INITIATIVES & STRATEGIC PILLARS",
              title: detail.pillarsTitle || "Strategic Pillars & Core Mandates.",
              lead:
                detail.pillarsLead ||
                "Organizational initiatives and leadership pillars executed during my tenure.",
              items: detail.pillars,
              ariaLabel: "Leadership Pillars",
            }
          : null
      }
      takeaways={
        detail?.takeaways && detail.takeaways.length > 0
          ? {
              sectionNumber: "03",
              sectionLabel: "LEADERSHIP RETROSPECTIVE",
              title: detail.takeawaysTitle || "Key Reflections & Insights.",
              lead:
                detail.takeawaysLead ||
                "Strategic reflections on community governance, high-velocity collaboration, and leading diverse student groups.",
              items: detail.takeaways,
              ariaLabel: "Leadership Retrospective",
            }
          : null
      }
      documentation={
        detail?.documentation && detail.documentation.length > 0
          ? {
              sectionNumber: "04",
              sectionLabel: "FIELD ARCHIVES & ON-SITE DOCUMENTATION",
              title:
                detail.documentationTitle ||
                "Field Records & Organization Archives.",
              lead:
                detail.documentationLead ||
                "Verifiable photographic records documenting live operations, team coordination, logistics handling, and field activities.",
              items: detail.documentation,
              ariaLabel: "Field Documentation",
            }
          : null
      }
      prev={prev}
      next={next}
      baseUrl="/experience"
    />
  );
}

export default memo(LeadershipDetailPage);
