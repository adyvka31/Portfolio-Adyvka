import { memo } from "react";
import { useParams, Navigate } from "react-router-dom";
import NarrativeDetailTemplate from "../../templates/NarrativeDetailTemplate/NarrativeDetailTemplate";
import { allAchievements, getSiblings } from "../../data/portfolio";
import { achievementDetails } from "../../data/achievementDetails";
import { SITE_URL } from "../../data/siteConfig";

function AchievementDetailPage({
  item: propItem,
  detail: propDetail,
  slug: propSlug,
}) {
  const params = useParams();
  const slug = propSlug || params.slug;

  // Flexible slug matching (exact match, alias match, or substring)
  const item =
    propItem ||
    allAchievements.find((a) => a.slug === slug) ||
    allAchievements.find((a) => {
      const lowerSlug = slug?.toLowerCase() || "";
      return (
        a.slug.toLowerCase().includes(lowerSlug) ||
        a.institution.toLowerCase().includes(lowerSlug) ||
        (lowerSlug.includes("icomfest") && a.slug.includes("icomfest")) ||
        (lowerSlug.includes("unila") && a.slug.includes("unila")) ||
        ((lowerSlug.includes("pnb") || lowerSlug.includes("pnbitc")) && a.slug.includes("pnb"))
      );
    });

  const resolvedKey =
    slug && achievementDetails[slug]
      ? slug
      : item?.slug && achievementDetails[item.slug]
      ? item.slug
      : null;

  const detail = propDetail || (resolvedKey ? achievementDetails[resolvedKey] : null);

  if (!item && !detail) {
    return <Navigate to="/achievements" replace />;
  }

  const effectiveTitle = detail?.roleTitle || item?.title || "Achievement";
  const effectiveInstitution =
    detail?.institution || item?.institution || "National Competition";
  const effectivePeriod = detail?.period || item?.year || "2025";
  const effectiveSummary = detail?.summary || item?.description || "";
  const effectiveSlug = item?.slug || slug;

  const { prev, next } = getSiblings(allAchievements, effectiveSlug);

  const achievementKeywords = [
    effectiveTitle,
    `${effectiveTitle} Rafif Sava Adyvka Pratama`,
    `${effectiveTitle} Adyvka`,
    effectiveInstitution,
    `${effectiveInstitution} Rafif Sava`,
    "National Competition",
    "Award Winner",
    ...(item?.tags || []),
  ];

  const achievementSchema = {
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/achievements/${effectiveSlug}#award`,
    name: effectiveTitle,
    headline: effectiveTitle,
    description: effectiveSummary,
    award: detail?.badge || "National Recognition",
    provider: {
      "@type": "Organization",
      name: effectiveInstitution,
    },
    creator: { "@id": `${SITE_URL}/#person` },
    keywords: achievementKeywords.join(", "),
  };

  return (
    <NarrativeDetailTemplate
      seo={{
        title: `${effectiveTitle} — Rafif Sava Adyvka Pratama`,
        description: effectiveSummary,
        path: `/achievements/${effectiveSlug}`,
        type: "article",
        keywords: achievementKeywords,
        schema: achievementSchema,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Achievements", item: "/achievements" },
          { name: effectiveTitle, item: `/achievements/${effectiveSlug}` },
        ],
      }}
      subnav={{
        backTo: "/achievements",
        backLabel: "← All Achievements",
        statusText: `${detail?.badge || "National Recognition"} · ${effectivePeriod}`,
        action: detail?.relatedProject
          ? {
              to: `/projects/${detail.relatedProject}`,
              label: `View ${detail.relatedProjectTitle ? `"${detail.relatedProjectTitle}"` : "Project"} Case Study`,
              ariaLabel: `View ${detail.relatedProject} case study`,
            }
          : null,
        ariaLabel: "Achievement Sub Navigation",
      }}
      hero={{
        number: detail?.badge || item?.year || "Winner",
        label: detail?.subtitle || effectiveInstitution,
        title: `${effectiveTitle}.`,
        description: effectiveSummary,
        meta: detail?.meta,
      }}
      institution={{
        label: "Organized By",
        name: effectiveInstitution,
      }}
      tags={detail?.stack || item?.tags || []}
      links={detail?.links}
      kpis={detail?.kpis}
      story={
        detail?.story
          ? {
              sectionNumber: "01",
              sectionLabel: "THE COMPETITION SPRINT & NARRATIVE",
              headline: detail.story.headline,
              lead: detail.story.lead,
              quote: detail.story.quote,
              chapters: detail.story.chapters,
              ariaLabel: "Competition Narrative",
            }
          : null
      }
      pillars={
        detail?.pillars && detail.pillars.length > 0
          ? {
              sectionNumber: "02",
              sectionLabel: "PLATFORM PILLARS & INNOVATION",
              title: detail.pillarsTitle || "Platform Pillars & Core Innovations.",
              lead:
                detail.pillarsLead ||
                "Technical and architectural highlights that distinguished our project during judging.",
              items: detail.pillars,
              ariaLabel: "Platform Pillars",
            }
          : null
      }
      takeaways={
        detail?.takeaways && detail.takeaways.length > 0
          ? {
              sectionNumber: "03",
              sectionLabel: "COMPETITION RETROSPECTIVE",
              title: detail.takeawaysTitle || "Key Reflections & Insights.",
              lead:
                detail.takeawaysLead ||
                "Strategic reflections on leading high-velocity student teams and pitching under pressure.",
              items: detail.takeaways,
              ariaLabel: "Competition Retrospective",
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
                "Championship Documentation & Records.",
              lead:
                detail.documentationLead ||
                "Verifiable photographic records from our competition run, live presentation defense, and official winner certificates.",
              items: detail.documentation,
              ariaLabel: "Competition Documentation",
            }
          : null
      }
      prev={prev}
      next={next}
      baseUrl="/achievements"
    />
  );
}

export default memo(AchievementDetailPage);
