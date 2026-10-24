import databank1 from "../assets/databank/databank1.png";
import databank2 from "../assets/databank/databank2.png";
import databank3 from "../assets/databank/databank3.png";
import databank4 from "../assets/databank/databank4.png";

export const projectDetails = {
  databank: {
    title: "Databank Ecosystem",
    subtitle: "Enterprise Telecom & Vendor Management System",
    summary:
      "An end-to-end enterprise platform unifying large-scale telecom field operations, purchase order tracking, implementation documents, acceptance and invoicing, automated Huawei ISDP bot scraping, outsource vendor management with 3-stage sequential digital signature approvals, and geofenced attendance integrated into payroll.",
    meta: [
      { label: "Role", value: "Lead Engineer & Project Manager" },
      { label: "Company", value: "PT Intisel Prodaktifakom" },
      { label: "Timeline", value: "Jan 2026 – Present" },
      { label: "Team", value: "4 Engineers" },
      { label: "Status", value: "In Active Development" },
      { label: "Architecture", value: "Decoupled Monorepo" },
    ],
    gallery: [
      {
        id: "dashboard",
        title: "Executive Operations Dashboard",
        route: "databank.intisel.id/dashboard",
        tag: "Analytics & Overview",
        image: databank1,
        desc: "High-level command center aggregating live telecom installation metrics, active purchase order distribution, technician team productivity, and operational alerts.",
        features: [
          "Live PO Volume & Valuation Tracking",
          "Regional Site Progress Heatmap",
          "Automated System Activity Feed",
        ],
      },
      {
        id: "user-management",
        title: "User Management & Role Governance",
        route: "databank.intisel.id/settings/users",
        tag: "Enterprise RBAC",
        image: databank2,
        desc: "Two-tier authorization matrix allowing administrators to inspect user accounts, manage High/Medium/Low roles, and toggle 65 individual permission overrides.",
        features: [
          "65 Granular Permission Overrides",
          "Role-Based Access Enforcement",
          "Audit Log & Session Activity",
        ],
      },
      {
        id: "outsource-management",
        title: "Outsource & Subcontractor System",
        route: "databank.intisel.id/outsource/po-database",
        tag: "Vendor & Approvals",
        image: databank3,
        desc: "Outsource partner management tracking delegated purchase orders, quota allocations, payment milestones (DP, Termin 1, Final), and Job Order workflows.",
        features: [
          "Subcontractor Allocation Management",
          "Automatic PO Row Locking (Approving)",
          "Sequential 3-Stage JO Approvals",
        ],
      },
      {
        id: "virtualized-table",
        title: "Virtualized Operations Databank Table",
        route: "databank.intisel.id/manage-data/databank",
        tag: "High-Performance Data",
        image: databank4,
        desc: "Core telecom operations interface built with react-virtuoso, capable of rendering 50,000+ data rows with Microsoft Excel-style column filters and instant search.",
        features: [
          "Excel-Style Multi-Select Dropdown Filters",
          "Sync PO Line Ship Synchronization",
          "Double-Click Inline Editing Protection",
        ],
      },
    ],
    kpis: [
      {
        value: "50,000+",
        label: "Data Rows Rendered",
        note: "Lag-free virtualized table rendering via React Virtuoso",
      },
      {
        value: "Active",
        label: "Build Status",
        note: "Core modules in active engineering delivery",
      },
      {
        value: "4,328",
        label: "SKUs Migrated",
        note: "Zero reconciliation error via shadow dual-write",
      },
      {
        value: "65",
        label: "Granular Permissions",
        note: "Dual-layer RBAC + Individual user overrides",
      },
      {
        value: "3-Stage",
        label: "Sequential Approval",
        note: "PS/SS → RPM → SPM with digital canvas signatures",
      },
      {
        value: "3",
        label: "Languages Supported",
        note: "ID, EN, ZH (instant runtime i18n switch)",
      },
    ],
    highlights: [
      {
        icon: "monitor",
        title: "Field Operations & Project Support",
        desc: "Installation status tracking, multi-tier Job Order (JO) approval workflows, Official Handover Certificates (BAST), and site coordinate verification.",
      },
      {
        icon: "database",
        title: "Procurement & Subcontractor Management",
        desc: "Centralized database for outsource purchase orders, phased payment terms (Down Payment, Milestone 1, Final Settlement), and task item quota validation.",
      },
      {
        icon: "terminal",
        title: "Huawei ISDP Scraping & Automation",
        desc: "Headless browser scraping pipeline intercepting and extracting real-time datasets from the Huawei ISDP portal without manual labor.",
      },
      {
        icon: "cloud",
        title: "Workforce Geolocation & Payroll",
        desc: "GPS geofenced daily attendance with cryptographically verified server-time, automated national holiday detection, and integrated overtime payroll calculation.",
      },
    ],
    architecture: {
      type: "Decoupled Client-Server (Monorepo)",
      protocol: "RESTful API (JSON with JWT)",
      layers: [
        {
          name: "Frontend SPA",
          badge: "React 19 + Vite 7",
          desc: "Single Page Application powered by React Virtuoso virtualized table engine, multi-language i18next (ID/EN/ZH), and client-side jsPDF + React-to-Print generation.",
        },
        {
          name: "Gateway & Security",
          badge: "Helmet CSP + Strict CORS",
          desc: "Hardened security perimeter with strict Content Security Policy, anti-clickjacking frameguard, Gzip compression, and Passport JWT / RBAC guards.",
        },
        {
          name: "Backend Service",
          badge: "NestJS 11 + Express",
          desc: "Enterprise modular architecture with Prisma 7.3 ORM, pgPool connection pooling, and Playwright Chromium background automation.",
        },
        {
          name: "Data & Storage",
          badge: "PostgreSQL + Local Uploads",
          desc: "Strictly typed PostgreSQL database with modular multi-file schemas and secure local storage for digital signatures and user assets.",
        },
        {
          name: "External Services",
          badge: "Huawei ISDP + Google Maps",
          desc: "Automated headless scraping pipeline for the Huawei ISDP portal paired with Google Maps Geocoding API for coordinate validation.",
        },
      ],
    },
    techStackGrouped: [
      {
        category: "Frontend Application",
        items: [
          { name: "React 19", role: "Core UI Library" },
          { name: "Vite 7", role: "High-speed Build Tool & Dev Server" },
          { name: "React Router v7", role: "Client-side Routing" },
          { name: "React Virtuoso", role: "Virtualized Table (50k+ Rows)" },
          { name: "Axios", role: "HTTP Client & Interceptors" },
          { name: "i18next", role: "Multi-Language (ID, EN, ZH)" },
          { name: "jsPDF & React-to-Print", role: "PDF Generation & Print Layouts" },
          { name: "Framer Motion", role: "Fluid UI Animations" },
          { name: "XLSX", role: "Excel Import / Export Engine" },
        ],
      },
      {
        category: "Backend Services",
        items: [
          { name: "NestJS 11", role: "Modular Enterprise Framework" },
          { name: "Express 4", role: "HTTP Engine" },
          { name: "Prisma 7.3", role: "Type-safe ORM & Migrations" },
          { name: "PostgreSQL 14+", role: "Relational Database" },
          { name: "@prisma/adapter-pg", role: "Connection Pool Adapter" },
          { name: "Passport JWT", role: "Stateless Auth Strategy" },
          { name: "Bcrypt", role: "Password Hashing" },
          { name: "Class Validator", role: "Strict DTO Validation" },
        ],
      },
      {
        category: "Automation, Storage & Tools",
        items: [
          { name: "Playwright (Chromium)", role: "Headless Browser Scraper" },
          { name: "Sharp", role: "Image & Signature Compression" },
          { name: "Multer", role: "File Upload Handling" },
          { name: "Date-Holidays", role: "Indonesian National Holidays Engine" },
          { name: "Docker Compose", role: "Containerized Orchestration" },
          { name: "GitHub Actions", role: "CI/CD Deployment Pipelines" },
          { name: "Google Maps API", role: "GPS Geolocation Verification" },
        ],
      },
    ],
    features: [
      {
        id: "databank-mgmt",
        title: "Databank Management",
        badge: "Core Operations",
        desc: "Central operational tracking engine covering end-to-end telecom workflows from initial PO issuance to final acceptance invoice.",
        points: [
          "PO Tracker: Comprehensive monitoring of PO numbers, line items, descriptions, quantities, unit prices, and total valuations.",
          "Implementation Document (Impl Doc): Real-time field documentation tracking, assigned technician PICs, and delivery progress.",
          "ESAR & Invoice Tracker: Milestone tracking for acceptance certificates and enterprise client billing invoices.",
          "Flagged Data: Automated detection filter identifying reconciliation anomalies and data discrepancies.",
          "Bulk Excel Import & Export: High-speed ingestion of .xlsx spreadsheets and multi-criteria filtered data export.",
          "Auto-Merge ISDP: Intelligent reconciliation engine matching external Huawei ISDP tasks to internal Databank records.",
        ],
      },
      {
        id: "datafab-productivity",
        title: "Datafab & Team Productivity",
        badge: "Site Monitoring",
        desc: "Granular monitoring of all telecom infrastructure sites, regional deployment progress, and daily field crew velocity.",
        points: [
          "Site List: Master repository of all telecom site locations, regions, integration statuses, and scheduled cutover dates.",
          "Team Productivity: Daily technician velocity tracking, completed site counts, and periodic target progress.",
          "Background Scraper Sync: Automated background ingestion pulling real-time status updates directly from Huawei portals.",
        ],
      },
      {
        id: "approval-workflow",
        title: "Outsource & 3-Stage Approval Workflow",
        badge: "Vendor & Approvals",
        desc: "Third-party vendor management system with sequential 3-tier Job Order (JO) approvals and digital handover documents (BAST).",
        points: [
          "Bulk Job Order Generation: Batch selection of 1 to 10 line items directly from the Outsource PO Database.",
          "Automatic PO Row Locking: Selected line items transition to 'Approving' status, preventing concurrent double-selection.",
          "Sequential 3-Stage Signoff: Strict enforcement order: Stage 1 (PS/SS) → Stage 2 (RPM/VRPM) → Stage 3 (SPM).",
          "Rejection Unlock: If rejected at any stage, status updates to 'Rejected' and locked PO line items are immediately released.",
          "HTML5 Canvas Digital Signatures: Cryptographically signed canvas inputs saved to server storage and embedded in documents.",
          "BAST Handover Certificates: Print-ready official handover forms exportable directly to PDF.",
        ],
      },
      {
        id: "bot-scraper",
        title: "Bot Scraper Automation & Huawei ISDP",
        badge: "Automation",
        desc: "Intelligent background scraping pipeline built with Playwright Chromium headless automation.",
        points: [
          "Automated authentication, menu traversal, and periodic dataset extraction from the Huawei ISDP portal.",
          "Network API response interception to capture raw JSON payloads without relying solely on fragile DOM selectors.",
          "Real-time scraper telemetry endpoint (/scraper/status) allowing users to monitor scraping progress live from the web UI.",
        ],
      },
      {
        id: "attendance-payroll",
        title: "Geofenced GPS Attendance & Payroll",
        badge: "HR & Geolocation",
        desc: "Workforce attendance tracking combining GPS geofencing, server-verified time, and automated payroll calculation.",
        points: [
          "Clock In / Clock Out with strict GPS radius validation against defined office and site coordinates.",
          "Server-Verified Timestamps (/attendance/server-time) to neutralize client-side device clock manipulation.",
          "Automated holiday calendar integration via date-holidays detecting weekends and official Indonesian public holidays.",
          "Comprehensive leave management for sick, permit, and vacation requests integrated directly into overtime and payroll calculations.",
        ],
      },
      {
        id: "security-rbac",
        title: "Enterprise Security, Dual-Layer RBAC & Cell Locking",
        badge: "Enterprise Security",
        desc: "Two-tier authorization model combining 3 base roles, 65 granular permissions, and dynamic cell-level UI protections.",
        points: [
          "Tier 1 RBAC: 3 Standard System Roles (High / Admin, Medium / Supervisor, Low / Staff & Technician).",
          "65 Granular Permissions governing menu visibility, Create, Read, Update, Delete, Import, Export, and Approval actions.",
          "Tier 2 Individual Overrides: Superadmins can grant or revoke specific rights per user without altering baseline roles.",
          "Double-Click Inline Cell Editing Lock: Table cells remain strictly non-editable if the user lacks active edit permissions.",
        ],
      },
      {
        id: "virtualized-table",
        title: "High-Performance Virtualized Table",
        badge: "Performance",
        desc: "Zero-lag data rendering engine built on top of react-virtuoso, capable of handling 50,000+ data rows.",
        points: [
          "DOM virtualization rendering only visible viewport nodes, maintaining smooth 60fps scrolling across massive datasets.",
          "Microsoft Excel-Style Column Filters: Dynamic backend search for distinct column values with multi-select checkboxes.",
          "Instant column sorting (Ascending / Descending) and batch selection across paginated datasets.",
        ],
      },
      {
        id: "multi-language",
        title: "Multi-Language Internationalization (ID, EN, ZH)",
        badge: "Global Ready",
        desc: "Seamless multi-language runtime switching without page reload across all interfaces, modal dialogs, and tables.",
        points: [
          "Indonesian (ID): Primary operational language for local engineering and field teams.",
          "English (EN): Standard international enterprise interface for management and audit reviews.",
          "Simplified Chinese (ZH - 中文): Tailored for reporting, vendor coordination, and partner handovers (Huawei / ZTE).",
        ],
      },
    ],
    approvalWorkflow: {
      stages: [
        {
          level: "Stage 01",
          role: "PS / SS",
          title: "Project Support / Site Support",
          desc: "Verifies technical field documentation, site coordinates, and item allocations against original PO quotas.",
          action: "Technical Audit & Level 1 Canvas Signature",
        },
        {
          level: "Stage 02",
          role: "RPM / VRPM",
          title: "Regional Project Manager",
          desc: "Validates regional budget allocations, delivery timelines, and subcontractor service agreements.",
          action: "Level 2 Sequential Authorization",
        },
        {
          level: "Stage 03",
          role: "SPM",
          title: "Senior Project Manager",
          desc: "Provides final executive approval before Job Order publication and transaction settlement locking.",
          action: "Final Executive Seal & Issuance",
        },
      ],
      lockMechanism: {
        title: "Automatic PO Row Locking & Rejection Unlock",
        desc: "When 1 to 10 PO lines are selected for a Job Order, their state locks to 'Approving' to prevent double-booking. If any approval stage issues a rejection, all associated PO lines are automatically released back to the active pool.",
      },
    },
    directoryStructure: [
      {
        name: "databank-backend/ (NestJS 11)",
        items: [
          "src/auth/ — JWT strategy, Passport guards, RBAC decorators",
          "src/databank/ — CRUD Databank, PO, Impl Doc, ESAR, Datafab",
          "src/outsource/ — Outsource master, PO DB, JO Approval, BAST Form",
          "src/scraper/ — Playwright headless scraper for Huawei ISDP",
          "src/attendance/ — GPS geofence clock in/out, server time, payroll",
          "prisma/schema/ — Modular schemas: databank, outsource, user, role, permission, attendance",
        ],
      },
      {
        name: "databank-frontend/ (React 19 + Vite 7)",
        items: [
          "src/features/manageData/ — Databank virtualized table & Excel filters",
          "src/features/outsource/ — JO approval with canvas signatures, BAST export",
          "src/features/attendance/ — Clock in/out with GPS radius & server time",
          "src/features/roles/ & users/ — RBAC matrix & individual permission overrides",
          "src/components/ExcelColumnFilter/ — Excel-style dropdown column filters",
          "src/locales/ — Multi-language dictionaries (ID, EN, ZH)",
        ],
      },
    ],
    prismaSchemas: [
      {
        name: "databank.prisma",
        purpose: "Telecom work items, PO tracking, site lists, crew productivity, and external ISDP datasets.",
      },
      {
        name: "outsource.prisma",
        purpose: "Subcontractor partner directories, outsource POs, payment terms, 3-stage JO approvals, and BAST handover forms.",
      },
      {
        name: "user.prisma & role.prisma & permission.prisma",
        purpose: "User identity schemas, bcrypt credentials, High/Medium/Low role matrices, and 65 granular system permissions.",
      },
      {
        name: "attendance.prisma",
        purpose: "GPS geolocation coordinates, server-verified timestamps, absence tracking, and overtime payroll calculation.",
      },
    ],
    apiEndpoints: [
      {
        group: "Authentication (/auth)",
        routes: [
          { method: "POST", path: "/auth/login", desc: "JWT login credentials verification & profile payload" },
          { method: "GET", path: "/auth/profile", desc: "Active session validation & permissions refresh" },
        ],
      },
      {
        group: "Databank (/databank)",
        routes: [
          { method: "GET", path: "/databank", desc: "Paginated records with multi-column search & Excel filters" },
          { method: "POST", path: "/databank/import", desc: "Bulk data ingestion from Microsoft Excel (.xlsx)" },
          { method: "GET", path: "/databank/sync-polineship", desc: "Batch synchronization for PO line item records" },
          { method: "GET", path: "/databank/trigger-isdp-merge", desc: "Trigger background Huawei ISDP auto-merge bot" },
        ],
      },
      {
        group: "Outsource & Approval (/outsource)",
        routes: [
          { method: "GET", path: "/outsource/jo-form", desc: "Fetch Job Orders with Stage 1, 2, and 3 approval statuses" },
          { method: "POST", path: "/outsource/jo-form", desc: "Generate new Job Order from 1-10 POs (auto-lock rows)" },
          { method: "POST", path: "/outsource/jo-form/:id/approve", desc: "Approve or Reject with digital canvas signature payload" },
          { method: "POST", path: "/outsource/bast-form/:id/approve", desc: "Digital signature verification for official BAST form" },
        ],
      },
      {
        group: "Scraper & Attendance (/scraper & /attendance)",
        routes: [
          { method: "POST", path: "/scraper/run", desc: "Trigger Playwright headless scraping automation" },
          { method: "GET", path: "/scraper/status", desc: "Real-time scraper telemetry, progress, and logs" },
          { method: "GET", path: "/attendance/server-time", desc: "Authoritative server timestamp preventing clock tampering" },
          { method: "POST", path: "/attendance/clock-in", desc: "Clock-in submission with GPS geofence radius check" },
        ],
      },
    ],
    securityStandards: [
      {
        title: "Helmet HTTP Security Headers",
        desc: "Strict Content Security Policy (CSP), anti-clickjacking frameguard, MIME-sniffing prevention, and X-Powered-By runtime concealment.",
      },
      {
        title: "Strict CORS Whitelist",
        desc: "Restricts HTTP access exclusively to verified production domains and legitimate local development environments.",
      },
      {
        title: "Data Tampering Prevention",
        desc: "NestJS Global Validation Pipe configured with whitelist: true and forbidNonWhitelisted: true to reject unmapped DTO properties.",
      },
      {
        title: "Synchronized Cell Locking",
        desc: "Client-server synchronized permission checks enforcing strict read-only lockouts on inline table cells without active edit rights.",
      },
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
          "Core modules under active engineering delivery across inventory, outsource, and HR domains.",
          "18% reduction in monthly close time during internal workflow trials.",
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
