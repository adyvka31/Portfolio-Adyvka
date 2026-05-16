export const projectDetails = {
  databank: {
    summary:
      "Enterprise ERP system serving daily operations at PT Intisel — inventory, finance, and HR modules built on a strictly typed PostgreSQL data layer.",
    meta: [
      { label: "Role", value: "Lead Engineer" },
      { label: "Timeline", value: "Jan 2026 – Present" },
      { label: "Team", value: "4 engineers" },
      { label: "Status", value: "In production" },
    ],
    sections: [
      {
        title: "The brief",
        body: [
          "PT Intisel's operations ran on a patchwork of spreadsheets and a legacy PHP tool that nobody wanted to touch. The mandate: rebuild it as a single source of truth with proper audit trails, role-based access, and the ability to scale across departments.",
          "Constraints: zero downtime during migration, full data integrity guarantees, and the system had to be operable by non-technical staff.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "React + Vite on the frontend for fast cold starts; NestJS modular monolith on the backend with Prisma ORM over PostgreSQL. Domain boundaries enforced at the module level — inventory cannot import from finance, only through a shared events module.",
          "Auth uses JWT with refresh-token rotation; RBAC is policy-based with deny-by-default. Every write goes through a use-case layer that emits domain events for the audit log.",
        ],
      },
      {
        title: "What was hard",
        body: [
          "Migrating live financial data without a maintenance window. Solved with a dual-write pattern: new system shadows the old for 30 days while reconciliation runs nightly.",
          "Permission UX. RBAC matrices are usually a nightmare for end users — we built a 'show me what this role can do' inspector that renders the policy in plain English.",
        ],
      },
      {
        title: "Results",
        body: [
          "99.97% uptime over the first 30 days.",
          "18% reduction in monthly close time (finance module).",
          "4,328 SKUs migrated with zero reconciliation errors.",
        ],
      },
    ],
    stack: [
      "React",
      "Vite",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "Docker",
      "GitHub Actions",
    ],
    links: [
      // { label: "Live", url: "#" },
      // { label: "Case study PDF", url: "#" },
    ],
  },

  ruangtumbuh: {
    summary:
      "Course-booking platform connecting students with tutors. Monorepo with shared types and a real-time scheduling engine.",
    meta: [
      { label: "Role", value: "Full Stack" },
      { label: "Timeline", value: "2025" },
      { label: "Stack", value: "Express + React" },
      { label: "Status", value: "Open source" },
    ],
    sections: [
      {
        title: "The brief",
        body: [
          "Students needed a way to find verified tutors and book lessons without phone tag. Tutors needed a calendar that respected their other commitments.",
        ],
      },
      {
        title: "Approach",
        body: [
          "Pnpm workspaces with shared Zod schemas between client and server. Scheduling uses optimistic concurrency on a single PostgreSQL transaction to prevent double-bookings.",
        ],
      },
      {
        title: "Results",
        body: [
          "Test coverage at 78% (Jest + Vitest). Sub-200ms p95 API response under load.",
        ],
      },
    ],
    stack: [
      "React",
      "Vite",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Vitest",
      "Jest",
      "Docker",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/adyvka31/RuangTumbuh" },
    ],
  },
  jagajiwa: {
    summary:
      "AI-powered digital mental health platform for Indonesia's Golden Generation — mood tracking, an empathetic chatbot, and interactive exercises.",
    meta: [
      { label: "Role", value: "Solo build" },
      { label: "Timeline", value: "2025" },
      { label: "Stack", value: "React + Gemini" },
      { label: "Status", value: "Live" },
    ],
    sections: [
      {
        title: "The brief",
        body: [
          "Indonesia's elderly population has limited access to mental health care — and even less to anything digital. The goal was a low-friction tool a 65-year-old could actually use.",
        ],
      },
      {
        title: "Design constraints",
        body: [
          "Large type, calm motion, no jargon. The chatbot was tuned via system prompt to avoid clinical language and favour grounding, validating responses.",
          "Every interaction had to work without onboarding. No tutorials, no tooltips.",
        ],
      },
      {
        title: "Results",
        body: [
          "Early testers (across two age groups) completed core flows on first try.",
          "Project deployed live with full Gemini API integration and mood-tracking history.",
        ],
      },
    ],
    stack: ["React", "Tailwind", "Gemini API", "TypeScript"],
    links: [{ label: "Live site", url: "https://jagajiwamu.vercel.app/" }],
  },

  flutter: {
    summary:
      "DeliFood — a Flutter e-commerce app with a real-time database backbone, delivering up-to-the-second order and product info.",
    meta: [
      { label: "Role", value: "Mobile dev" },
      { label: "Stack", value: "Flutter + Firebase" },
      { label: "Platforms", value: "iOS / Android" },
    ],
    sections: [
      {
        title: "Goals",
        body: [
          "Deliver a smooth, on-brand mobile shopping experience tied to a real-time data layer. Orders, stock, and pricing all stay in sync without manual refresh.",
        ],
      },
      {
        title: "Implementation",
        body: [
          "Flutter for the UI, Firestore for real-time data, Firebase Auth for sessions. UI states subscribe directly to Firestore streams so the screen reflects backend changes instantly.",
        ],
      },
    ],
    stack: ["Flutter", "Dart", "Firebase", "Firestore"],
  },

  "ai-ticket-manager": {
    summary:
      "Mobile ticket-management app with Gemini integration — stores ticket data in real time and produces AI-generated analytics summaries.",
    meta: [
      { label: "Role", value: "Mobile dev" },
      { label: "Stack", value: "Flutter + Gemini" },
      { label: "Year", value: "2025" },
    ],
    sections: [
      {
        title: "The pitch",
        body: [
          "Support teams generate piles of ticket data but rarely have time to summarise it. The app stores ticket activity and uses Gemini to produce daily / weekly summaries automatically.",
        ],
      },
      {
        title: "Architecture",
        body: [
          "Flutter with Provider for state. Firestore for ticket storage. A scheduled function bundles recent activity and calls Gemini for the digest.",
        ],
      },
    ],
    stack: ["Flutter", "Firebase", "Gemini API", "Provider"],
  },
};
