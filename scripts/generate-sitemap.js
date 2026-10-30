import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  STATIC_ROUTES,
  PROJECT_SLUGS,
  EXPERIENCE_SLUGS,
  ACHIEVEMENT_SLUGS,
  CERTIFICATE_SLUGS,
} from "../src/data/routesManifest.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://adyvkapratama.my.id";
const TODAY = new Date().toISOString().split("T")[0];

const urls = [];

// Static routes
STATIC_ROUTES.forEach((route) => {
  urls.push({
    loc: `${BASE_URL}${route.path === "/" ? "" : route.path}`,
    lastmod: TODAY,
    changefreq: route.changefreq || "monthly",
    priority: route.priority ? route.priority.toFixed(1) : "0.8",
  });
});

// Projects
PROJECT_SLUGS.forEach((slug) => {
  urls.push({
    loc: `${BASE_URL}/projects/${slug}`,
    lastmod: TODAY,
    changefreq: "monthly",
    priority: "0.8",
  });
});

// Experience
EXPERIENCE_SLUGS.forEach((slug) => {
  urls.push({
    loc: `${BASE_URL}/experience/${slug}`,
    lastmod: TODAY,
    changefreq: "monthly",
    priority: "0.8",
  });
});

// Achievements (exclude dummy items)
ACHIEVEMENT_SLUGS.filter((slug) => !slug.includes("dummy")).forEach((slug) => {
  urls.push({
    loc: `${BASE_URL}/achievements/${slug}`,
    lastmod: TODAY,
    changefreq: "monthly",
    priority: "0.8",
  });
});

// Certificates
CERTIFICATE_SLUGS.forEach((slug) => {
  urls.push({
    loc: `${BASE_URL}/certificates/${slug}`,
    lastmod: TODAY,
    changefreq: "monthly",
    priority: "0.7",
  });
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const outputPath = path.resolve(__dirname, "../public/sitemap.xml");
fs.writeFileSync(outputPath, xml, "utf-8");
console.log(`Successfully generated ${urls.length} URLs in ${outputPath}`);
