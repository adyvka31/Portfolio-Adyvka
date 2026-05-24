import webDevImg from "../assets/web_dev_instructor.webp";
import osisImg from "../assets/osis.webp";
import appDevImg from "../assets/app_dev_instructor.webp";
import icomfestImg from "../assets/icomfest2025.webp";
import unilaImg from "../assets/unila2025.webp";
import cs50Img from "../assets/cs50.webp";
import frontendImg from "../assets/frontend_web.webp";
import backpackerImg from "../assets/backpackerImg.webp";
import barmusImg from "../assets/barmusImg.webp";

import cvPdfFile from "../assets/RafifSavaAdyvkaPratama_CV.pdf";

import databankImg from "../assets/databank.webp";
import ruangtumbuhImg from "../assets/ruangtumbuh.webp";
import delifoodImg from "../assets/delifood.webp";
import aigeneratorImg from "../assets/aigenerator.webp";
import newsImg from "../assets/news.webp";
import qrscannerImg from "../assets/qrscanner.webp";
import todoImg from "../assets/todo.webp";
import payrollServiceImg from "../assets/payroll-service.webp";
import javaislandImg from "../assets/javaisland.webp";
import fitsmartImg from "../assets/fitsmart.webp";
import coffeeeShopImg from "../assets/coffeee-shop.webp";
import mystyleImg from "../assets/mystyle.webp";
import pusakakuImg from "../assets/pusakaku.webp";
import semuaBisaImg from "../assets/semua-bisa.webp";
import idncourseImg from "../assets/idncourse.webp";

import alansharImg from "../assets/alanshar.webp";
import griyyasunnahImg from "../assets/griyyasunnah.webp";
import hajrabyadlImg from "../assets/hajrabyadl.webp";
import mtsyasmineImg from "../assets/mtsyasmine.webp";
import semutsemutImg from "../assets/semutsemut.webp";
import smpn45Img from "../assets/smpn45.webp";

export const personalInfo = {
  name: "Rafif Sava Adyvka Pratama",
  title: "Digital Craftsman // Fullstack Engineer",
  role: "Full Stack Engineer",
  location: "Depok, West Java, Indonesia",
  timezone: "UTC+07 — Working remotely",
  currentRole: "Full Stack Engineer & Mobile Developer",
  email: "rafifdyvka07@gmail.com",
  socials: {
    github: "https://github.com/adyvka31",
    linkedin: "https://www.linkedin.com/in/adyvka-pratama/",
    githubRepos: "https://github.com/adyvka31?tab=repositories",
  },
  cvUrl: cvPdfFile,
  portfolioUrl: "/n-rafif.pdf",
};

// ============================================
// HERO METRICS
// ============================================
export const heroMetrics = [
  { value: "3+", label: "Years as Developer" },
  { value: "5", label: "Projects Completed" },
  { value: "2", label: "Competitions Won" },
  { value: "25", label: "Certificates Earned" },
];

// ============================================
// MARQUEE TECH STACK
// ============================================
export const marqueeStack = [
  "React",
  "Next.js",
  "TypeScript",
  "NestJS",
  "PostgreSQL",
  "Tailwind",
  "Flutter",
  "Laravel",
  "Docker",
  "Firebase",
  "Node.js",
  "Figma",
];

// ============================================
// PROJECTS (Bento grid)
// ============================================
export const projects = [
  // ── FEATURED / EXISTING ──────────────────────────────────────────
  {
    id: "databank",
    category: "web",
    span: "lg",
    label: "WEBSITE · ENTERPRISE ERP",
    title: "Databank ERP",
    year: "2025 →",
    description:
      "Enterprise resource planning system at PT Intisel Prodaktifakom. Owns inventory, finance, and HR modules used daily across the org. Built on React + NestJS with a strictly typed PostgreSQL data layer.",
    tags: [
      "React",
      "Vite",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "PrismaORM",
      "Docker",
      "CI/CD",
    ],
    hasPreview: true,
    link: "#",
    thumbnail: databankImg,
  },
  {
    id: "ruangtumbuh",
    category: "web",
    span: "sm",
    label: "WEBSITE · E-LEARNING",
    title: "RuangTumbuh",
    description:
      "Course booking platform connecting students with tutors. Monorepo architecture with shared types and a real-time scheduling engine.",
    tags: [
      "React",
      "Vite",
      "Axios",
      "ExpressJS",
      "PostgreSQL",
      "PrismaORM",
      "Docker",
      "Eslint",
      "Vitest",
      "Jest",
    ],
    link: "https://github.com/adyvka31/RuangTumbuh",
    thumbnail: ruangtumbuhImg,
  },
  {
    id: "fitsmart",
    category: "web",
    span: "sm",
    label: "WEBSITE · MENTAL HEALTH",
    title: "FitSmart",
    year: "2025",
    description:
      "Serves as a centralized platform offering health education, dietary guides, fitness routines, and an innovative AI-powered consultation feature",
    tags: ["HTML", "TailwindCSS", "JavaScript"],
    link: "https://jagajiwamu.vercel.app/",
    thumbnail: fitsmartImg,
  },
  {
    id: "javaisland",
    category: "web",
    span: "md",
    label: "WEBSITE · CULTURAL",
    title: "JavaIsland",
    year: "2023",
    description:
      "Tourism and culture showcase for Java Island covering Javanese culture, traditional foods, and local events. Features an embedded AI assistant to answer visitor questions.",
    tags: ["HTML", "CSS", "JavaScript", "AI"],
    link: "https://github.com/adyvka31/JavaIsland",
    thumbnail: javaislandImg,
  },
  {
    id: "pusakaku",
    category: "web",
    span: "sm",
    label: "WEBSITE · CULTURAL",
    title: "Pusakaku",
    year: "2023",
    description:
      "Digital preservation of traditional Indonesian games — a cultural heritage site exploring the life values and history behind classic folk activities.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/adyvka31/Pusakaku",
    thumbnail: pusakakuImg,
  },
  {
    id: "semua-bisa",
    category: "web",
    span: "sm",
    label: "WEBSITE · E-LEARNING",
    title: "SemuaBisa",
    year: "2023",
    description:
      "E-learning website built with two collaborators for a competition. Empowers young people to grow in tech through accessible course content and Tailwind-styled UI.",
    tags: ["HTML", "Tailwind", "CSS"],
    link: "https://github.com/adyvka31/SemuaBisa-Web",
    thumbnail: semuaBisaImg,
  },
  {
    id: "idncourse",
    category: "web",
    span: "sm",
    label: "WEBSITE · E-LEARNING",
    title: "IDNCourse",
    year: "2023",
    description:
      "Course platform website built collaboratively with two friends for a competition, featuring course listings and a clean multi-page layout.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/adyvka31/IDNCourse-Web",
    thumbnail: idncourseImg,
  },
  {
    id: "coffeee-shop",
    category: "web",
    span: "sm",
    label: "WEBSITE · COMPANY PROFILE",
    title: "Coffeee Shop",
    year: "2023",
    description:
      "Company profile website for a coffee shop brand, designed and built with Tailwind CSS for a modern, responsive layout.",
    tags: ["HTML", "Tailwind", "CSS"],
    link: "https://github.com/adyvka31/Coffeee-Shop",
    thumbnail: coffeeeShopImg,
  },
  {
    id: "mystyle",
    category: "web",
    span: "sm",
    label: "WEBSITE · E-COMMERCE",
    title: "MyStyle",
    year: "2023",
    description:
      "Fashion e-commerce website showcasing a wide range of clothing items. Explores product listing, detail views, and a clean storefront design.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/adyvka31/MyStyle",
    thumbnail: mystyleImg,
  },
  {
    id: "flutter",
    category: "mobile",
    span: "md",
    label: "MOBILE · E-COMMERCE",
    title: "DeliFood",
    description:
      "The main goal of this application is to provide a seamless user interface (UI) connected to a real-time database, ensuring that users have the most up-to-date information on their orders, products.",
    tags: ["Flutter", "Dart", "Firebase"],
    link: "#",
    thumbnail: delifoodImg,
  },
  {
    id: "ai-ticket-manager",
    category: "ai",
    span: "md",
    label: "FLUTTER • GOOGLE AI",
    title: "AI Ticket Manager",
    year: "2025",
    description:
      "A mobile application for smart ticket management with Gemini API integration. Allows users to store real-time ticket data and receive automated AI-based analytics summaries.",
    tags: ["Flutter", "Firebase", "Gemini API", "Provider"],
    link: "#",
    thumbnail: aigeneratorImg,
  },

  {
    id: "attendance-app",
    category: "mobile",
    span: "sm",
    label: "MOBILE · PRODUCTIVITY",
    title: "Attendance App",
    year: "2024",
    description:
      "Cross-platform attendance digitization app built with Flutter. Uses real-time camera access and Firebase backend to streamline check-in flows for organizations.",
    tags: ["Flutter", "Dart", "Firebase"],
    link: "https://github.com/adyvka31/Attendance-App",
    thumbnail: todoImg,
  },
  {
    id: "qr-scanner",
    category: "mobile",
    span: "sm",
    label: "MOBILE · UTILITIES",
    title: "QR Guest Manager",
    year: "2024",
    description:
      "QR Scanner and guest registration manager built with Flutter. Integrates Firebase for secure real-time data storage, streamlining event check-in workflows.",
    tags: ["Flutter", "Dart", "Firebase"],
    link: "https://github.com/adyvka31/QR_Scanner_App",
    thumbnail: qrscannerImg,
  },
  {
    id: "news-app",
    category: "mobile",
    span: "sm",
    label: "MOBILE · NEWS",
    title: "News App",
    year: "2024",
    description:
      "Cross-platform news reader app that demonstrates real-time REST API integration, clean state management, and a well-structured business logic layer.",
    tags: ["Flutter", "Dart", "REST API"],
    link: "https://github.com/adyvka31/News-App",
    thumbnail: newsImg,
  },
  {
    id: "quran-app",
    category: "mobile",
    span: "sm",
    label: "MOBILE · LIFESTYLE",
    title: "Quran App",
    year: "2024",
    description:
      "Cross-platform Quran reader focused on clean UI, responsive performance, and structured separation of business logic — making daily reading seamless and accessible.",
    tags: ["Flutter", "Dart", "C++"],
    link: "https://github.com/adyvka31/Quran-App",
  },
];

export const projectFilters = [
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI" },
];

// ============================================
// AI STARTUP FEATURES
// ============================================
export const aiFeatures = [
  {
    title: "Semantic search",
    description:
      "Vector embeddings over enterprise docs — making years of internal knowledge instantly queryable by natural language.",
  },
  {
    title: "Agentic workflows",
    description:
      "LLM-driven automation that handles multi-step business processes — with deterministic guardrails for production safety.",
  },
  {
    title: "RAG pipelines",
    description:
      "Retrieval-augmented generation grounded in private data — answers that cite sources instead of hallucinating them.",
  },
];

// ============================================
// EXPERIENCE TIMELINE
// ============================================
export const experiences = [
  {
    period: "May 2026 - Present",
    role: "Frontend Developer - Freelance",
    company: "PT Rico Bahari",
    description:
      "Completed Harvard's CS50 — the foundational computer science curriculum covering algorithms, data structures, and systems thinking.",
    current: true,
  },
  {
    period: "Jan - May 2026",
    role: "Software Engineer - Contract",
    company: "PT Intisel Prodaktifakom",
    description:
      "Engineering the Databank ERP system. Architecting React frontends, NestJS services, and PostgreSQL schemas that handle real production load. Driving code quality through reviews, testing, and CI/CD discipline.",
  },
  {
    period: "Jul 2025 — Jan 2026",
    role: "Full Stack Engineer - Contract",
    company: "Universitas Muhammadiyah Jakarta",
    description:
      "Built and shipped e-commerce platforms, internal dashboards, and SaaS prototypes for clients under tight deadlines. Owned the entire lifecycle — from spec to deploy.",
  },
];

// ============================================
// ACHIEVEMENTS
// ============================================
export const recognitionData = {
  experience: [
    {
      title: "Web Development Instructor",
      institution: "SMA Lazuardi GCS",
      year: "Sep 2025",
      description: "Mengajar pemrograman dasar untuk siswa sekolah menengah.",
      image: webDevImg,
      tags: ["Web Development", "UI/UX Design", "25+ Students"],
    },
    {
      title: "Event Division Leader",
      institution: "IDN Student Council",
      year: "Jan 2025 - Mar 2026",
      description: "Mengajar pemrograman dasar untuk siswa sekolah menengah.",
      image: osisImg,
      tags: ["Leadership", "Event Management", "Time Management"],
    },
    {
      title: "App Development Instructor",
      institution: "SMP INS Depok",
      year: "Oct 2023",
      description: "Mengajar pemrograman dasar untuk siswa sekolah menengah.",
      image: appDevImg,
      tags: ["App Development", "25+ Students"],
    },
    {
      title: "Backpacker 3 Country",
      institution: "Singapore, Malaysia, Thailand",
      year: "Sep 2025",
      description: "Mengajar pemrograman dasar untuk siswa sekolah menengah.",
      image: backpackerImg,
      tags: ["Public Speaking", "Web Development", "UI/UX Design"],
    },
    {
      title: "Game Development Instructor",
      institution: "Semut-Semut The Natural School",
      year: "Oct 2023",
      description: "Mengajar pemrograman dasar untuk siswa sekolah menengah.",
      image: semutsemutImg,
      tags: ["Game Development", "25+ Students"],
    },
    {
      title: "Volunteer Event Organizer",
      institution: "Barmus Voluntrip",
      year: "Feb 2026",
      description: "Mengajar pemrograman dasar untuk siswa sekolah menengah.",
      image: barmusImg,
      tags: ["Leadership", "Event Management", "Time Management"],
    },
  ],
  achievement: [
    {
      title: "1st Place: National Web Design Competition",
      institution: "Icomfest 2025",
      year: "Feb 2025",
      description:
        "Juara 1 Kompetisi Desain Web Nasional di tingkat universitas.",
      image: icomfestImg,
      tags: ["Frontend Development", "UI/UX Design", "Winner"],
    },
    {
      title: "Finalist: National Web Dev Competition",
      institution: "Unila 2024",
      year: "Nov 2024",
      description:
        "Juara 1 Kompetisi Desain Web Nasional di tingkat universitas.",
      image: unilaImg,
      tags: ["Project Management", "Frontend Development"],
    },
  ],
  certificate: [
    {
      title: "Coding Camp: Full Stack Developer",
      institution: "Dicoding Indonesia × DBS Foundation",
      year: "Apr 2026",
      description:
        "Sertifikat kelulusan ilmu komputer dari Harvard University.",
      image: cs50Img,
      tags: ["Computer Science", "Harvard"],
    },
    {
      title: "CS50: Introduction to Computer Science",
      institution: "Harvard University",
      year: "Oct 2025",
      description:
        "Sertifikat kelulusan ilmu komputer dari Harvard University.",
      image: cs50Img,
      tags: ["Computer Science", "Harvard"],
    },
    {
      title: "Frontend Web",
      institution: "Dicoding Indonesia",
      year: "Mar 2026",
      description:
        "Sertifikat kelulusan ilmu komputer dari Harvard University.",
      image: frontendImg,
      tags: ["Computer Science", "Harvard"],
    },
    {
      title: "Coding Camp: Full Stack Developer",
      institution: "Dicoding Indonesia × DBS Foundation",
      year: "Apr 2026",
      description:
        "Sertifikat kelulusan ilmu komputer dari Harvard University.",
      image: cs50Img,
      tags: ["Computer Science", "Harvard"],
    },
    {
      title: "CS50: Introduction to Computer Science",
      institution: "Harvard University",
      year: "Oct 2025",
      description:
        "Sertifikat kelulusan ilmu komputer dari Harvard University.",
      image: cs50Img,
      tags: ["Computer Science", "Harvard"],
    },
    {
      title: "Frontend Web",
      institution: "Dicoding Indonesia",
      year: "Mar 2026",
      description:
        "Sertifikat kelulusan ilmu komputer dari Harvard University.",
      image: frontendImg,
      tags: ["Computer Science", "Harvard"],
    },
  ],
};

export const extraTeachingExperiences = [
  {
    title: "Web Development Instructor",
    institution: "Hajrabyadl",
    year: "May 2025",
    description:
      "Memandu siswa dalam mempelajari dasar-dasar HTML, CSS, dan desain UI/UX untuk membangun struktur halaman web interaktif.",
    image: hajrabyadlImg,
    tags: ["Web Development", "UI/UX Design", "23+ Students"],
  },
  {
    title: "App Development Instructor",
    institution: "SMPN 45",
    year: "Sep 2023",
    description:
      "Memperkenalkan konsep pembuatan aplikasi seluler dasar dan implementasi komponen interaktif kepada siswa sekolah menengah.",
    image: smpn45Img,
    tags: ["App Development", "10+ Students"],
  },
  {
    title: "Game Development Instructor",
    institution: "Al Anshar",
    year: "Nov 2022",
    description:
      "Mengajarkan dasar-dasar pengembangan game dan logika pemrograman interaktif kepada para siswa untuk mengasah kreativitas digital mereka.",
    image: alansharImg,
    tags: ["Game Development", "15+ Students"],
  },
  {
    title: "Design Instructor",
    institution: "MTs Yasmine",
    year: "Oct 2022",
    description:
      "Mengajarkan prinsip-prinsip desain antarmuka (UI/UX) dan pembuatan poster digital menggunakan perangkat lunak desain visual modern.",
    image: mtsyasmineImg,
    tags: ["UI/UX Design", "Poster Design", "25+ Students"],
  },
  {
    title: "Game Development Instructor",
    institution: "Griyya Sunnah",
    year: "Sep 2022",
    description:
      "Membimbing siswa dalam membuat game sederhana, mengenalkan alur logika, dan pemecahan masalah komputasional melalui pemrograman.",
    image: griyyasunnahImg,
    tags: ["Game Development", "15+ Students"],
  },
];

// ============================================
// NAV LINKS
// ============================================
export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const projectsList = projects.map((p) => ({
  ...p,
  slug: p.id, // already URL-safe in your data
}));

// Helper: get prev/next in a list
export function getSiblings(list, slug) {
  const i = list.findIndex((x) => x.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? list[i - 1] : null,
    next: i < list.length - 1 ? list[i + 1] : null,
  };
}

// Flatten recognition for routing
export const allAchievements = [
  ...recognitionData.experience.map((x, i) => ({
    ...x,
    slug: slugify(x.title),
    category: "experience",
  })),
  ...recognitionData.achievement.map((x, i) => ({
    ...x,
    slug: slugify(x.title),
    category: "achievement",
  })),
];

export const allCertificates = recognitionData.certificate.map((x) => ({
  ...x,
  slug: slugify(x.title),
}));

export const experiencesList = experiences.map((e) => ({
  ...e,
  slug: slugify(`${e.company}-${e.role}`),
}));

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
