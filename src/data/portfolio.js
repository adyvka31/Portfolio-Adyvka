// ============================================
// PERSONAL INFO
// ============================================
export const personalInfo = {
  name: "Adyvka Pratama",
  fullName: "Rafif Sava Adyvka Pratama",
  role: "Full Stack Engineer",
  location: "Cikarang, West Java",
  timezone: "UTC+07 — Working remotely",
  currentRole: "Engineering at PT Intisel Prodaktifakom — Databank ERP",
  email: "adyvka@example.com",
  socials: {
    github: "https://github.com/adyvka31",
    linkedin: "https://www.linkedin.com/in/adyvka-pratama/",
    githubRepos: "https://github.com/adyvka31?tab=repositories",
  },
};

// ============================================
// HERO METRICS
// ============================================
export const heroMetrics = [
  { value: "3+", label: "Years shipping" },
  { value: "25", label: "Repositories" },
  { value: "1st", label: "Icomfest 2025" },
  { value: "CS50", label: "Harvard graduate" },
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
  {
    id: "databank",
    category: "web",
    span: "lg", // 4 cols × 2 rows
    label: "FLAGSHIP · ENTERPRISE ERP",
    title: "Databank ERP",
    year: "2025 →",
    description:
      "Enterprise resource planning system at PT Intisel Prodaktifakom. Owns inventory, finance, and HR modules used daily across the org. Built on React + NestJS with a strictly typed PostgreSQL data layer.",
    tags: ["React", "NestJS", "PostgreSQL", "TypeScript", "Docker"],
    hasPreview: true,
  },
  {
    id: "ruangtumbuh",
    category: "web",
    span: "sm",
    label: "MONOREPO · FULL-STACK",
    title: "RuangTumbuh",
    description:
      "Course booking platform connecting students with tutors. Monorepo architecture with shared types and a real-time scheduling engine.",
    tags: ["JS", "Monorepo"],
    link: "https://github.com/adyvka31/RuangTumbuh",
  },
  {
    id: "icomfest",
    category: "web",
    span: "sm",
    label: "🏆 1ST PLACE · NATIONAL",
    labelAccent: true,
    title: "Icomfest 2025",
    year: "2025",
    description:
      "Award-winning entry at the National Web Design Competition. Judged on architecture, UX, and code quality.",
    tags: ["Competition"],
  },
  {
    id: "flutter",
    category: "mobile",
    span: "md",
    label: "MOBILE · CROSS-PLATFORM",
    title: "Flutter Productivity Suite",
    description:
      "Native-feeling iOS & Android applications with offline-first sync, Firebase auth, and a custom design system in Dart.",
    tags: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: "llm",
    category: "ai",
    span: "md",
    label: "RESEARCH · GENAI",
    title: "LLM Workflow Experiments",
    description:
      "Exploring retrieval-augmented pipelines, agentic loops, and embedding-based search over private enterprise documentation.",
    tags: ["OpenAI", "RAG", "Vector DB"],
    hasAccentBlur: true,
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI" },
];

// ============================================
// TECH STACK (3-column grid)
// ============================================
export const techStack = [
  {
    title: "Frontend",
    items: [
      { name: "React", years: "3y" },
      { name: "Next.js", years: "2y" },
      { name: "TypeScript", years: "2y" },
      { name: "Tailwind CSS", years: "3y" },
      { name: "Flutter", years: "1y" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "NestJS", years: "2y" },
      { name: "Node.js", years: "3y" },
      { name: "Laravel", years: "2y" },
      { name: "PostgreSQL", years: "2y" },
      { name: "Firebase", years: "2y" },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { name: "Docker", years: "2y" },
      { name: "Git / GitHub", years: "3y" },
      { name: "CI/CD", years: "2y" },
      { name: "Jest", years: "2y" },
      { name: "Figma", years: "3y" },
    ],
  },
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
    period: "2025 — Present",
    role: "Software Engineer",
    company: "PT Intisel Prodaktifakom",
    description:
      "Engineering the Databank ERP system. Architecting React frontends, NestJS services, and PostgreSQL schemas that handle real production load. Driving code quality through reviews, testing, and CI/CD discipline.",
    tags: ["React", "NestJS", "PostgreSQL"],
    current: true,
  },
  {
    period: "2024 — 2025",
    role: "Freelance Full Stack Engineer",
    company: "Independent / Contract",
    description:
      "Built and shipped e-commerce platforms, internal dashboards, and SaaS prototypes for clients under tight deadlines. Owned the entire lifecycle — from spec to deploy.",
  },
  {
    period: "2024",
    role: "CS50 Graduate",
    company: "Harvard University",
    description:
      "Completed Harvard's CS50 — the foundational computer science curriculum covering algorithms, data structures, and systems thinking.",
  },
  {
    period: "Ongoing",
    role: "Student",
    company: "SMK IDN Boarding School",
    description:
      "Balancing formal education with professional engineering work — proving that craft and credentials aren't mutually exclusive.",
  },
];

// ============================================
// ACHIEVEMENTS
// ============================================
export const achievements = [
  {
    icon: "🏆",
    year: "2025",
    title: "1st Place — Icomfest 2025",
    description:
      "National Web Design Competition. Judged on technical execution, design, and user experience.",
  },
  {
    icon: "🎓",
    year: "2024",
    title: "CS50 Graduate",
    description:
      "Harvard University's introduction to computer science — completed with full coursework and final project.",
  },
  {
    icon: "🐙",
    year: "GitHub",
    title: "Open-source contributor",
    description:
      "Pull Shark (×2), Quickdraw, and YOLO achievements — 25 repositories shipped publicly.",
  },
  {
    icon: "🎯",
    year: "Ongoing",
    title: "Volunteer tech instructor",
    description:
      "Teaching foundational programming to students who'd otherwise lack access — turning skill into multiplier.",
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
