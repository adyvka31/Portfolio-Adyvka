// src/components/SEO/SEO.jsx
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://adyvka-pratama.netlify.app"; // GANTI dengan domain final Anda
const DEFAULT_OG_IMAGE = "/og-image.jpg"; // taruh file di public/
const DEFAULT_DESCRIPTION =
  "Full Stack Engineer & Mobile Developer based in West Java, Indonesia. Building production systems with React, NestJS, PostgreSQL, and Flutter.";

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_OG_IMAGE,
  path = "",
  type = "website",
  noIndex = false,
}) {
  const fullTitle = title
    ? `${title} — Rafif Sava Adyvka Pratama`
    : "Rafif Sava Adyvka Pratama — Full Stack Engineer";

  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
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

      {/* Structured Data — Person */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Rafif Sava Adyvka Pratama",
          alternateName: "Adyvka",
          jobTitle: "Full Stack Engineer",
          url: SITE_URL,
          sameAs: [
            "https://github.com/adyvka31",
            "https://www.linkedin.com/in/adyvka-pratama/",
          ],
        })}
      </script>
    </Helmet>
  );
}
