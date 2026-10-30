// src/data/routesManifest.js
// Centralized route manifest for Vite React SSG and Sitemap generation

export const STATIC_ROUTES = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/about", priority: 0.9, changefreq: "monthly" },
  { path: "/projects", priority: 0.9, changefreq: "weekly" },
  { path: "/experience", priority: 0.9, changefreq: "monthly" },
  { path: "/achievements", priority: 0.9, changefreq: "monthly" },
  { path: "/certificates", priority: 0.8, changefreq: "monthly" },
  { path: "/contact", priority: 0.9, changefreq: "monthly" },
];

export const PROJECT_SLUGS = [
  "richobahari",
  "terastani",
  "kepk",
  "databank",
  "ruangtumbuh",
  "fitsmart",
  "javaisland",
  "pusakaku",
  "semua-bisa",
  "idncourse",
  "coffeee-shop",
  "mystyle",
  "delifood",
  "ai-ticket-manager",
  "attendance-app",
  "qr-scanner",
  "news-app",
  "quran-app",
];

export const EXPERIENCE_SLUGS = [
  // Work
  "pt-ardyanda-digital-inovasi-full-stack-developer-internship",
  "cv-richo-bahari-frontend-developer-freelance",
  "pt-intisel-prodaktifakom-full-stack-engineer-freelance",
  "universitas-muhammadiyah-jakarta-full-stack-engineer-contract",
  // Teaching
  "sma-lazuardi-gcs-web-development-instructor",
  "hajrabyadl-web-development-instructor",
  "smpn-45-app-development-instructor",
  "smp-ins-depok-app-development-instructor",
  "semut-semut-the-natural-school-game-development-instructor",
  "al-anshar-app-design-instructor",
  "mts-yasmine-design-instructor",
  "al-anshar-game-development-instructor",
  "griyya-sunnah-game-development-instructor",
  // Leadership & Community
  "singapore-malaysia-thailand-backpacker-3-country",
  "idn-student-council-event-division-leader",
  "barmus-voluntrip-volunteer-event-organizer",
  "pt-intisel-semarang-business-life-survival",
  "it-fest-2025-competition-event-coordinator",
  "idn-boarding-school-live-in-rural-immersion",
];

export const ACHIEVEMENT_SLUGS = [
  "2nd-place-national-web-design-competition-pnbitc",
  "1st-place-national-web-design-competition",
  "finalist-national-web-dev-competition",
  "dummy-new-achievement",
];

export const CERTIFICATE_SLUGS = [
  "cs50-introduction-to-computer-science",
  "coding-camp-full-stack-developer",
  "frontend-web-developer",
  "belajar-dasar-data-analyst",
  "belajar-membuat-aplikasi-back-end",
  "belajar-dasar-git-dengan-github",
  "graphic-design-fundamentals",
  "memulai-pemrograman-dengan-c",
  "dasar-ui-ux-design",
  "python-fundamentals",
  "belajar-dasar-pemrograman-javascript",
  "cloud-practitioner-essentials",
  "belajar-membuat-aplikasi-web-dengan-react",
  "memulai-pemrograman-dengan-python",
  "belajar-dasar-pemrograman-web",
  "pengenalan-ke-logika-pemrograman",
  "pemrograman-dasar-c",
  "dasar-prompt-engineering",
  "meniti-karier-sebagai-software-developer",
  "financial-literacy-fundamentals",
  "artificial-intelligence-basics",
  "google-developer-groups-participant",
  "english-proficiency-assessment",
];

export function getAllRoutes() {
  return [
    ...STATIC_ROUTES.map((r) => r.path),
    ...PROJECT_SLUGS.map((slug) => `/projects/${slug}`),
    ...EXPERIENCE_SLUGS.map((slug) => `/experience/${slug}`),
    ...ACHIEVEMENT_SLUGS.map((slug) => `/achievements/${slug}`),
    ...CERTIFICATE_SLUGS.map((slug) => `/certificates/${slug}`),
  ];
}
