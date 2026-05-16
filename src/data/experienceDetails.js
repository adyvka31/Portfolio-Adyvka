// Indexed by the slug generated in portfolio.js (slugify(`${company}-${role}`))
export const experienceDetails = {
  "pt-rico-bahari-frontend-developer-freelance": {
    summary:
      "Building marketing pages and an internal client dashboard for a logistics company moving fleet ops from spreadsheets to a real product.",
    meta: [
      { label: "Type", value: "Freelance" },
      { label: "Period", value: "May 2026 — Present" },
      { label: "Stack", value: "Next.js + Tailwind" },
      { label: "Status", value: "Active" },
    ],
    sections: [
      {
        title: "The mandate",
        body: [
          "PT Rico Bahari needed to project a more modern image to win larger logistics contracts. Beyond the marketing site, dispatchers still tracked everything in Excel — a daily bottleneck.",
          "I was brought in to ship a public marketing site and prototype an internal fleet dashboard that could later evolve into a full ops tool.",
        ],
      },
      {
        title: "Responsibilities",
        body: [
          { type: "list", items: [
            "Designed and built the marketing site (Next.js, Tailwind, Framer Motion)",
            "Set up a typed API contract between marketing pages and a CMS",
            "Prototyped a fleet dashboard with real-time vehicle status",
            "Owned design tokens, animations, and the responsive system end-to-end",
          ]},
        ],
      },
      {
        title: "Outcomes",
        body: [
          "Marketing pages shipped in 3 weeks with sub-1.5s LCP on 4G.",
          "Internal dashboard moved 4 dispatch teams off Excel for daily operations.",
        ],
      },
    ],
    stack: ["Next.js", "Tailwind", "Framer Motion", "TypeScript", "Vercel"],
  },

  "pt-intisel-prodaktifakom-software-engineer-contract": {
    summary:
      "Lead engineer on the Databank ERP — owning architecture, code review, and shipping discipline for the system that runs the company's daily ops.",
    meta: [
      { label: "Type", value: "Contract" },
      { label: "Period", value: "Jan 2026 — May 2026" },
      { label: "Team", value: "4 engineers" },
      { label: "Status", value: "Shipped to prod" },
    ],
    sections: [
      {
        title: "The role",
        body: [
          "Brought in as the third engineer on a team rebuilding a legacy PHP ERP into a modern React + NestJS system. My remit grew to architecture decisions, code review standards, and CI/CD setup within the first month.",
        ],
      },
      {
        title: "Responsibilities",
        body: [
          { type: "list", items: [
            "Architected the modular monolith (NestJS) with strict domain boundaries",
            "Owned the Prisma schema and database migration strategy",
            "Wrote and enforced code review guidelines across the team",
            "Set up GitHub Actions CI with type-check, lint, test, and deploy stages",
            "Mentored two junior devs through their first NestJS modules",
          ]},
        ],
      },
      {
        title: "What I learned",
        body: [
          "Migrating live financial data taught me to distrust 'just one more sync' — eventually consistent never is, and every dual-write needs a reconciliation pass.",
          "RBAC matrices break end users more than they break engineers. A 'show me what this role can do' inspector cut support tickets by half.",
        ],
      },
    ],
    stack: ["React", "Vite", "NestJS", "PostgreSQL", "Prisma", "TypeScript", "Docker", "GitHub Actions"],
    relatedProjects: ["databank"],
  },

  "universitas-muhammadiyah-jakarta-full-stack-engineer-contract": {
    summary:
      "Shipped e-commerce platforms, internal dashboards, and SaaS prototypes for a series of clients under tight deadlines.",
    meta: [
      { label: "Type", value: "Contract" },
      { label: "Period", value: "Jul 2025 — Jan 2026" },
      { label: "Clients", value: "5+" },
      { label: "Status", value: "Complete" },
    ],
    sections: [
      {
        title: "The work",
        body: [
          "Six months of consecutive client work — most projects were 2 to 4 weeks from kickoff to launch. Owned every layer: requirements call, design, frontend, API, deployment, post-launch fixes.",
        ],
      },
      {
        title: "What I shipped",
        body: [
          { type: "list", items: [
            "Two e-commerce platforms (React + Express + PostgreSQL)",
            "Internal admin dashboard for a healthcare clinic",
            "Booking app for a local services business",
            "Two SaaS prototypes that were later pitched to investors",
          ]},
        ],
      },
      {
        title: "Lessons",
        body: [
          "Short timelines reward boring tech choices. Every time I reached for something novel, I paid for it on launch night.",
          "Scope creep is a documentation problem, not a client problem.",
        ],
      },
    ],
    stack: ["React", "Express", "PostgreSQL", "Tailwind", "Vercel", "Railway"],
  },
};