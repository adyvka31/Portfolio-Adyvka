const SITE_URL = "https://adyvka-pratama.netlify.app";
const DEFAULT_OG_IMAGE = "/og-image.jpg";
const DEFAULT_DESCRIPTION =
  "Full Stack Engineer & Mobile Developer based in West Java, Indonesia. Building production systems with React, NestJS, PostgreSQL, and Flutter.";
const SITE_NAME = "Rafif Sava Adyvka Pratama";

/**
 * React 19 native metadata — no external library needed.
 * React hoists <title>, <meta>, <link> to <head> automatically.
 * @see https://react.dev/reference/react-dom/components/meta
 */
export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_OG_IMAGE,
  path = "",
  type = "website",
  noIndex = false,
}) {
  const fullTitle = title
    ? title.includes(SITE_NAME)
      ? title
      : `${title} — ${SITE_NAME}`
    : `${SITE_NAME} — Full Stack Engineer`;

  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    alternateName: "Adyvka",
    jobTitle: "Full Stack Engineer",
    url: SITE_URL,
    sameAs: [
      "https://github.com/adyvka31",
      "https://www.linkedin.com/in/adyvka-pratama/",
    ],
  };

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* OpenGraph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Adyvka Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
