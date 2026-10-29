const SITE_URL = "https://adyvka-pratama.netlify.app";
const DEFAULT_OG_IMAGE = "/og-image.jpg";
const DEFAULT_DESCRIPTION =
  "Software Engineer & Systems Architect based in West Java, Indonesia. Polyglot developer specializing in clean architecture, enterprise platforms, and distributed systems across web, mobile, and cloud.";
const SITE_NAME = "Rafif Sava Adyvka Pratama";

const CORE_KEYWORDS = [
  "Rafif Sava Adyvka Pratama",
  "Rafif Sava",
  "Adyvka",
  "Adyvka Pratama",
  "Rafif Dyvka",
  "adyvka31",
  "Software Engineer",
  "Systems Architect",
  "Polyglot Developer",
  "Full Stack Engineer",
  "Clean Architecture",
  "SOLID Principles",
  "System Design",
  "Distributed Systems",
  "TypeScript",
  "Python",
  "Dart",
  "PHP",
  "C++",
  "NestJS",
  "React",
  "Next.js",
  "PostgreSQL",
  "Flutter",
  "Docker",
  "PT Intisel",
  "SMK IDN Boarding School",
  "Harvard CS50",
];

/**
 * Enhanced React 19 native SEO component.
 * Hoists meta, link, script, and title elements directly to <head>.
 * Supports deep Schema.org JSON-LD @graph for Google Knowledge Graph,
 * Bing, and AI Search Engines (Perplexity, SGE, ChatGPT Search).
 */
export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_OG_IMAGE,
  path = "",
  type = "website",
  noIndex = false,
  keywords = [],
  schema = null,
  publishedTime,
  modifiedTime,
}) {
  const fullTitle = title
    ? title.includes(SITE_NAME) || title.includes("Adyvka")
      ? title
      : `${title} — ${SITE_NAME}`
    : `${SITE_NAME} — Software Engineer & Systems Architect`;

  const url = `${SITE_URL}${path}`;
  const imageUrl = image?.startsWith("http")
    ? image
    : `${SITE_URL}${image?.startsWith("/") ? image : `/${image}`}`;

  // Process keywords
  const extraKeywords = Array.isArray(keywords)
    ? keywords
    : typeof keywords === "string"
      ? keywords.split(",").map((k) => k.trim())
      : [];
  const mergedKeywords = Array.from(
    new Set([...extraKeywords, ...CORE_KEYWORDS]),
  ).join(", ");

  // Schema.org connected @graph
  const personEntity = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: SITE_NAME,
    alternateName: [
      "Adyvka",
      "Rafif Dyvka",
      "Adyvka Pratama",
      "Rafif Sava",
      "adyvka31",
    ],
    jobTitle: "Software Engineer & Systems Architect",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    sameAs: [
      "https://github.com/adyvka31",
      "https://www.linkedin.com/in/adyvka-pratama/",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "SMK IDN Boarding School",
      },
      {
        "@type": "EducationalOrganization",
        name: "Harvard University CS50",
      },
    ],
    knowsAbout: [
      "Software Engineering",
      "Systems Architecture",
      "Clean Architecture",
      "SOLID Principles",
      "Distributed Systems",
      "TypeScript",
      "JavaScript",
      "Python",
      "Dart",
      "PHP",
      "C++",
      "NestJS",
      "React",
      "Next.js",
      "PostgreSQL",
      "Flutter",
      "Docker",
      "Database Design",
      "ERP Systems",
      "RESTful APIs",
    ],
  };

  const websiteEntity = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Rafif Sava Adyvka Pratama — Official Portfolio",
    alternateName: ["Adyvka Portfolio", "Rafif Sava", "Adyvka Pratama"],
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en-US",
  };

  const webPageEntity = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url: url,
    name: fullTitle,
    description: description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en-US",
  };

  const graph = [personEntity, websiteEntity, webPageEntity];

  // Incorporate custom page-specific schema if provided
  if (schema) {
    if (Array.isArray(schema)) {
      schema.forEach((s) => {
        graph.push({
          ...s,
          author: s.author || { "@id": `${SITE_URL}/#person` },
          isPartOf: { "@id": `${url}#webpage` },
        });
      });
    } else if (typeof schema === "object") {
      graph.push({
        ...schema,
        author: schema.author || { "@id": `${SITE_URL}/#person` },
        isPartOf: { "@id": `${url}#webpage` },
      });
    }
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  const robotsContent = noIndex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={mergedKeywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="creator" content={SITE_NAME} />
      <meta name="publisher" content={SITE_NAME} />
      <link rel="canonical" href={url} />

      {/* Search Engine Robots Directives */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />

      {/* OpenGraph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Rafif Sava Adyvka Pratama — Portfolio" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && (
        <meta property="article:author" content={SITE_NAME} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@adyvka31" />
      <meta name="twitter:creator" content="@adyvka31" />

      {/* Structured Data (JSON-LD @graph) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
