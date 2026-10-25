import databank1 from "../assets/databank/databank1.png";
import databank2 from "../assets/databank/databank2.png";
import databank3 from "../assets/databank/databank3.png";
import databank4 from "../assets/databank/databank4.png";
import ruangtumbuhImg from "../assets/ruangtumbuh.webp";

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
    title: "RuangTumbuh",
    subtitle: "Time Banking Educational Ecosystem & Mentorship Platform",
    summary:
      "A peer-to-peer educational platform built on the Time Banking paradigm — where one hour of learning any discipline holds equal value to one hour of teaching. Powered by atomic PostgreSQL time-wallet transactions, real-time Socket.io communication, an interactive Matter.js 2D physics engine, and Google Gemini AI assistance.",
    domain: "ruang-tumbuh.vercel.app",
    meta: [
      { label: "Role", value: "Project Lead & Server Architect" },
      { label: "Cohort", value: "Bangkit Academy (CC26-PS050)" },
      { label: "Timeline", value: "2025 – 2026" },
      { label: "Team", value: "5 Engineers" },
      { label: "Status", value: "Production Ready" },
      { label: "Architecture", value: "pnpm Workspaces Monorepo" },
    ],
    galleryLabel: "PRODUCTION INTERFACES",
    galleryTitle: "The RuangTumbuh Experience",
    galleryLead:
      "Explore the core interfaces of RuangTumbuh — from the interactive 2D physics landing canvas and cashless course catalog to real-time WebSocket communication and the Gemini AI copilot.",
    gallery: [
      {
        id: "interactive-hero",
        title: "Kinetic Hero & 2D Physics Canvas",
        route: "ruang-tumbuh.vercel.app",
        tag: "Matter.js + Lenis",
        image: ruangtumbuhImg,
        desc: "Interactive landing experience featuring real-time 2D rigid-body gravity physics, smooth inertia scrolling with Lenis, and fluid multi-layer spring micro-interactions.",
        features: [
          "Interactive 2D Physics Canvas via Matter.js",
          "Smooth Inertia Scrolling with Lenis",
          "Framer Motion Spring Micro-Interactions",
        ],
      },
      {
        id: "time-wallet-catalog",
        title: "Dynamic Course Catalog & Time Wallet",
        route: "ruang-tumbuh.vercel.app/courses",
        tag: "Time Banking System",
        image: ruangtumbuhImg,
        desc: "Comprehensive course discovery across 26 disciplines. Students exchange learning time balances rather than conventional currency, backed by atomic escrow holds.",
        features: [
          "26 Curated Disciplines with Infinite Scroll",
          "Debounced Real-Time Search (250ms)",
          "Atomic Time Wallet Escrow Deduction",
        ],
      },
      {
        id: "realtime-chat",
        title: "WebSocket Community & 1-on-1 Chat",
        route: "ruang-tumbuh.vercel.app/messages",
        tag: "Socket.io Engine",
        image: ruangtumbuhImg,
        desc: "Authenticated real-time messaging pipeline enabling private 1-on-1 mentorship conversations and 5 topic-focused community channels with instant PostgreSQL persistence.",
        features: [
          "JWT Handshake Authentication via Socket.io",
          "Private 1-on-1 Mentorship Rooms",
          "5 Specialized Topic-Based Communities",
        ],
      },
      {
        id: "gemini-assistant",
        title: "AI Copilot & Unified Calendar",
        route: "ruang-tumbuh.vercel.app/dashboard",
        tag: "Google Gemini AI",
        image: ruangtumbuhImg,
        desc: "Embedded Gemini AI assistant answering platform questions and recommending mentors, paired with an integrated calendar consolidating bookings and mentoring sessions.",
        features: [
          "Google Gemini Flash Generative Model",
          "Unified WIB Timezone Calendar Aggregator",
          "Interactive Learning Analytics & Stats",
        ],
      },
    ],
    kpis: [
      {
        value: "1 : 1",
        label: "Time Value Parity",
        note: "1 hour of design = 1 hour of physics across all courses",
      },
      {
        value: "100%",
        label: "Atomic Guarantee",
        note: "Zero partial writes or balance drift via prisma.$transaction",
      },
      {
        value: "26",
        label: "Curated Disciplines",
        note: "Dynamic courses across engineering, design, and science",
      },
      {
        value: "<200ms",
        label: "p95 API Latency",
        note: "High-throughput Express 5 backend deployed on Railway",
      },
      {
        value: "30 Min",
        label: "Session Safeguard",
        note: "Automated idle logout guarding active time balances",
      },
      {
        value: "100%",
        label: "Contract Parity",
        note: "Shared Zod schemas across client forms and server parsers",
      },
    ],
    highlights: [
      {
        icon: "database",
        title: "Time Wallet Banking Engine",
        desc: "A cashless peer-to-peer knowledge exchange. Every new user receives 30 free minutes upon signup, trading learning hours instead of currency with atomic escrow and instant refunds.",
      },
      {
        icon: "monitor",
        title: "Interactive 2D Physics & Kinetic UX",
        desc: "Hero canvas powered by Matter.js rigid-body physics, Lenis smooth inertia scrolling, and Framer Motion spring micro-interactions creating a playful, engaging feel.",
      },
      {
        icon: "terminal",
        title: "Real-time Messaging & Community Hub",
        desc: "JWT-authenticated WebSocket pipeline via Socket.io, supporting low-latency 1-on-1 private mentoring chat and 5 topic-focused public community groups.",
      },
      {
        icon: "cloud",
        title: "Google Gemini AI Copilot",
        desc: "Embedded AI assistant leveraging gemini-flash-latest with custom system instructions to guide students, recommend mentors, and resolve time wallet queries.",
      },
    ],
    capabilitiesTitle: "Core Capabilities & Time Banking Workflow",
    capabilitiesLead:
      "Engineered to democratize peer education — combining transactional time banking, dynamic course syndication, unified calendar scheduling, and low-latency real-time collaboration.",
    features: [
      {
        id: "time-wallet-engine",
        title: "Time Wallet & Atomic Banking Engine",
        badge: "Core Architecture",
        desc: "Central time banking ledger governing cashless balance transactions between students and mentors with strict ACID compliance.",
        points: [
          "Initial Balance: Every newly registered account automatically receives 30 minutes of free learning credit (timeBalance: 30).",
          "Atomic Escrow Deductions: Booking requests execute inside prisma.$transaction to verify timeBalance >= durationMinutes and lock funds atomically.",
          "Automatic Mentor Remuneration: When a mentor accepts, the system issues a 6-character token and immediately credits the mentor's time wallet.",
          "Instant Automated Refunds: Rejected or cancelled requests trigger immediate balance rollbacks, returning time credits to the student with zero delay.",
          "Cryptographic Token Completion: Sesi tatap muka diselesaikan dengan memasukkan token verifikasi 6-karakter dari siswa untuk menandai sesi COMPLETED.",
          "Session Review & Ratings: Siswa dapat memberikan ulasan tertulis dan rating bintang 1–5 atas sesi yang telah selesai.",
        ],
      },
      {
        id: "course-syllabus",
        title: "Dynamic Course Catalog & Syllabus Engine",
        badge: "Curriculum & Search",
        desc: "Comprehensive learning repository featuring 26 disciplines, debounced query search, and continuous infinite scrolling.",
        points: [
          "26 Learning Categories: Spanning Frontend, Backend, AI, UI/UX, Mathematics, Physics, Foreign Languages, and Business.",
          "Hierarchical Syllabus: Structured curriculum modules stored directly within JSON fields inside the PostgreSQL Course schema.",
          "Debounced 250ms Search: Client-side debounce eliminating redundant network requests while searching across title, mentor, or tag.",
          "Infinite Scroll via TanStack Query: Powered by useInfiniteQuery with automated stale-time caching for zero-flicker browsing.",
          "Complete Mentor Lifecycle: Mentors can publish courses, update module curriculum, edit lesson objectives, or deprecate listings.",
        ],
      },
      {
        id: "calendar-aggregator",
        title: "Unified Calendar & Schedule Aggregator",
        badge: "Scheduling & Time",
        desc: "Synchronized timetable consolidating course bookings and self-directed mentoring appointments into one calendar view.",
        points: [
          "Dual Schedule Aggregator: Merges both formal Course Bookings and 1-on-1 Self-Mentoring slots into an authoritative unified schedule.",
          "Timezone Normalization (WIB): Automatic timezone alignment and real-time end-time calculation based on session duration.",
          "Tri-Color Lifecycle States: Visual indicators representing Pending Confirmation (Amber), Upcoming (Cyan), and Completed (Emerald).",
          "Double-Booking Prevention: Concurrency checks validating availability windows before confirming conflicting calendar slots.",
        ],
      },
      {
        id: "realtime-chat-hub",
        title: "Real-time Chat & Learning Communities",
        badge: "Socket.io Engine",
        desc: "Event-driven WebSocket messaging architecture facilitating private mentorship coordination and public topic channels.",
        points: [
          "JWT Handshake Guard: Socket.io middleware (io.use) verifying token validity at connection time, terminating unauthorized clients.",
          "Private 1-on-1 Mentorship Channels: On-demand secure chat rooms created between matched students and mentors (/api/chats/private).",
          "5 Community Study Channels: Public groups tailored for Frontend, Backend, UI/UX Design, Data Science, and Mobile Development.",
          "PostgreSQL Persistence: Messages sent via send_message are atomically committed to the database and broadcasted via receive_message.",
        ],
      },
      {
        id: "gemini-copilot",
        title: "Google Gemini AI Copilot Assistant",
        badge: "Artificial Intelligence",
        desc: "Intelligent conversational assistant powered by Google's generative AI, integrated directly into the top navigation.",
        points: [
          "Powered by @google/generative-ai: Running the ultra-responsive gemini-flash-latest model for contextual assistance.",
          "Custom System Instruction: Dedicated 'RuangTumbuh Bot' persona guiding users on time wallet rules, course discovery, and troubleshooting.",
          "Kinetic Drawer UI: Multi-layer spring animation drawer built with Framer Motion, featuring live typing indicator and auto-scrolling.",
        ],
      },
      {
        id: "dashboard-analytics",
        title: "Learning Dashboard & Profile Governance",
        badge: "User Experience",
        desc: "Holistic command center providing students and mentors with immediate visibility into time balances, schedules, and learning velocity.",
        points: [
          "Metrics Command Center: Real-time visual cards tracking remaining time balance, total learning minutes, and completed sessions.",
          "Profile Management & Multer Uploads: Comprehensive bio, passions JSON, institution data, and avatar image uploads saved to /uploads.",
          "30-Minute Inactivity Timeout: AuthContext listens for mouse, keyboard, and scroll activity, automatically logging out idle sessions to protect wallets.",
        ],
      },
      {
        id: "physics-kinetic-ux",
        title: "Matter.js 2D Physics & Kinetic Landing Engine",
        badge: "Interactive UI",
        desc: "Playful landing page visual engine utilizing rigid-body 2D gravity physics and smooth inertia scrolling.",
        points: [
          "Matter.js 2D Rigid Bodies: Geometric shapes drop under gravitational simulation, reacting to cursor push, bounce, and collision forces.",
          "Lenis Inertia Scrolling: Ultra-smooth momentum-based page scrolling eliminating micro-stutters during rapid wheel navigation.",
          "Framer Motion Micro-Interactions: Fluid accordion collapses, card hover physics, and sticky narrative scroll stacks.",
        ],
      },
      {
        id: "shared-zod-monorepo",
        title: "Shared Zod Contracts & Workspace Architecture",
        badge: "Contract Parity",
        desc: "Decoupled monorepo architecture leveraging @rutu/shared for synchronized cross-boundary data schemas.",
        points: [
          "Zero Code Duplication: Validation schemas (auth.schema.js) are authored once and shared across client forms and server parsers.",
          "100% Contract Parity: Guarantees frontend inputs and backend route middlewares enforce identical constraints.",
          "Type Inference & Sanitization: Automatic body stripping preventing unrecognized or unauthorized fields from reaching service logic.",
        ],
      },
    ],
    approvalWorkflow: {
      title: "Atomic Time Banking & Booking Lifecycle",
      lead: "All time-wallet deductions and transfers execute inside isolated Prisma transactions to guarantee complete financial integrity without conventional currency.",
      stages: [
        {
          level: "Stage 01",
          role: "Student Action",
          title: "Course Booking & Escrow Hold",
          desc: "Student selects a course slot. The system verifies timeBalance >= durationMinutes and executes an atomic escrow deduction.",
          action: "prisma.$transaction Balance Deduction",
        },
        {
          level: "Stage 02",
          role: "Mentor Review",
          title: "Application Acceptance & Token Issuance",
          desc: "Mentor reviews the request. Upon approval, status transitions to ACCEPTED, a 6-character token is issued, and mentor wallet increments.",
          action: "Wallet Credit & Token Generation",
        },
        {
          level: "Stage 03",
          role: "Session Completion",
          title: "Token Validation & Star Review",
          desc: "Following the session, the student inputs the 6-character token to mark the session COMPLETED, unlocking qualitative reviews and ratings.",
          action: "Final Status Lock & Review Feedback",
        },
      ],
      lockMechanism: {
        title: "Atomic Rollback & Instant Refund Guarantee",
        desc: "All wallet deductions are protected by Prisma transactions. If a mentor rejects the booking or the student cancels prior to acceptance, the system automatically rolls back the escrow, refunding the exact durationMinutes back to the student's balance instantly with zero race conditions.",
      },
    },
    architectureTitle: "Decoupled Monorepo & Modular Service Architecture",
    architectureLead:
      "Organized as a pnpm workspace monorepo separating shared validation contracts, Express 5 backend services, and a React 19 frontend SPA with strict boundary isolation.",
    architecture: {
      type: "pnpm Workspaces Monorepo",
      protocol: "RESTful JSON API + WebSocket (WSS)",
      layers: [
        {
          name: "Frontend SPA",
          badge: "React 19 + Vite 7",
          desc: "Modern Single Page Application powered by TanStack React Query v5 caching, Matter.js 2D physics canvas, Framer Motion spring animations, and Lenis smooth scrolling.",
        },
        {
          name: "Shared Contracts (@rutu/shared)",
          badge: "Zod Schema Library",
          desc: "Monorepo shared package ensuring 100% data contract parity between React Hook Form client validation and Express request body middleware without code duplication.",
        },
        {
          name: "Gateway & Security",
          badge: "Express 5 + Helmet",
          desc: "Layered security perimeter featuring dual-tier rate limiting (15 req/15min auth, 300 req/5min global), Helmet HTTP header hardening, CORS whitelisting, and JWT middleware.",
        },
        {
          name: "Core Business Services",
          badge: "Express 5 + Socket.io",
          desc: "Modular service architecture dividing domain logic: BookingService (atomic wallet), CourseService (infinite catalog), ScheduleService (WIB aggregator), and Socket.io server.",
        },
        {
          name: "Storage & AI Cloud",
          badge: "PostgreSQL + Gemini AI",
          desc: "PostgreSQL database managed by Prisma ORM with connection pooling, coupled with Google Generative AI API (gemini-flash-latest) and Multer local disk storage.",
        },
      ],
    },
    techStackGrouped: [
      {
        category: "Frontend Application",
        items: [
          { name: "React 19", role: "Core UI Library" },
          { name: "Vite 7", role: "High-speed Build Tool & Dev Server" },
          { name: "TanStack React Query v5", role: "Server State & Auto Cache Invalidation" },
          { name: "React Router v6", role: "Client-side Routing" },
          { name: "Matter.js", role: "2D Physics Rigid-Body Canvas" },
          { name: "Framer Motion 12", role: "Spring Motion & Slide-in Drawers" },
          { name: "Lenis Scroll", role: "Smooth Inertia Momentum Scrolling" },
          { name: "Bootstrap 5 & React-Bootstrap", role: "Grid System & Responsive Layout" },
          { name: "React Hook Form + Zod", role: "Type-safe Form State & Validation" },
        ],
      },
      {
        category: "Backend & Gateway",
        items: [
          { name: "Node.js 22 LTS", role: "High-performance Server Runtime" },
          { name: "Express 5", role: "Modular RESTful Web Engine" },
          { name: "Socket.io 4", role: "Authenticated Real-time WebSocket Protocol" },
          { name: "Prisma 7 ORM", role: "Type-safe ORM & Automated Migrations" },
          { name: "PostgreSQL", role: "Relational ACID-Compliant Database" },
          { name: "@google/generative-ai", role: "Gemini AI Copilot Integration" },
          { name: "Passport / JWT & Bcryptjs", role: "Stateless Auth & Password Hashing (10 rounds)" },
          { name: "Express Rate Limit & Helmet", role: "Brute-force Mitigation & HTTP Headers" },
          { name: "Winston & Daily Rotate File", role: "Structured Logging (14-day retention)" },
          { name: "Multer", role: "Multipart Avatar Upload Storage" },
        ],
      },
      {
        category: "DevOps, Container & Testing",
        items: [
          { name: "pnpm Workspaces", role: "Monorepo Workspace Orchestration" },
          { name: "Docker & Docker Compose", role: "Multi-container Orchestration (DB, API, Frontend)" },
          { name: "Multi-Stage Nginx Alpine", role: "Ultra-lightweight Production Frontend Image" },
          { name: "Vitest & React Testing Library", role: "Client-side Unit & Component Testing" },
          { name: "Jest & Supertest", role: "Backend API Integration Testing" },
          { name: "Husky & Lint-staged", role: "Automated Pre-commit Code Verification" },
          { name: "GitHub Actions", role: "CI/CD Automated Build & Verification Pipeline" },
        ],
      },
    ],
    directoryStructure: [
      {
        name: "rutu-backend/ (Express 5 + Prisma ORM)",
        items: [
          "src/controllers/ — Auth, user, booking, course, schedule, chat, and chatbot controllers",
          "src/services/ — BookingService ($transaction), CourseService, ScheduleService, Gemini AI",
          "src/middleware/ — Rate limiter (auth/global), Helmet, CORS whitelist, JWT verification, Multer",
          "src/sockets/ — Socket.io real-time chat gateway with JWT handshake authorization",
          "prisma/ — PostgreSQL schema definitions, migrations, and community seed scripts",
        ],
      },
      {
        name: "rutu-frontend/ (React 19 + TanStack Query + Vite 7)",
        items: [
          "src/pages/ — Landing (Matter.js), Courses (infinite query), Dashboard, Messages, Schedule",
          "src/hooks/ — useSearchCourses (debounce), useMatterPhysics, useSocketChat, useAuth",
          "src/components/ — ChatbotPanel (Gemini), Navigation, CourseCards, ScheduleCalendar",
          "src/context/ — AuthContext with 30-min inactivity timeout and user state",
          "src/services/ — Axios API clients with Bearer token interceptors",
        ],
      },
      {
        name: "packages/shared/ (@rutu/shared)",
        items: [
          "src/schemas/auth.schema.js — Shared Zod login & registration schemas",
          "src/schemas/course.schema.js — Shared course and module validation schemas",
          "package.json — Shared internal package consumed by frontend and backend",
        ],
      },
    ],
    prismaSchemas: [
      {
        name: "User & UserSkill",
        purpose:
          "User credentials, bcrypt password, timeBalance (Time Wallet integer), location, bio, passions JSON, and linked tutoring skills.",
      },
      {
        name: "Course & CourseBooking",
        purpose:
          "Course catalog entries with hierarchical JSON curriculum modules, linked to student bookings, 6-character verification tokens, and ratings.",
      },
      {
        name: "Booking & Review",
        purpose:
          "1-on-1 mentoring requests, scheduled times, duration in minutes, meeting links, status enums, and qualitative post-session feedback.",
      },
      {
        name: "ChatRoom, Message & Participant",
        purpose:
          "Direct 1-on-1 and topic-based community chat rooms, persistent message history, and user channel participation.",
      },
      {
        name: "Notification",
        purpose:
          "In-app activity notifications dispatching alerts for booking updates, session verification tokens, and chat mentions.",
      },
    ],
    securityTitle: "Hardened Perimeter & Security Safeguards",
    securityLead:
      "Multi-layered defense architecture protecting time-wallet balances, mitigating automated abuse, and enforcing strict data isolation.",
    apiEndpoints: [
      {
        group: "Authentication (/api/auth)",
        routes: [
          { method: "POST", path: "/api/auth/register", desc: "User registration with shared Zod validation & 30-min balance bonus" },
          { method: "POST", path: "/api/auth/login", desc: "Authenticate credentials and issue stateless JWT Bearer token" },
        ],
      },
      {
        group: "User & Dashboard (/api/users)",
        routes: [
          { method: "GET", path: "/api/users/search", desc: "Query users by name or email for collaboration" },
          { method: "GET", path: "/api/users/:id", desc: "Retrieve user profile, passions, and learning velocity" },
          { method: "GET", path: "/api/users/:id/dashboard", desc: "Fetch learning dashboard metrics, active balance, and upcoming sessions" },
          { method: "PUT", path: "/api/users/:id", desc: "Update profile metadata and upload avatar image (Multer + JWT)" },
        ],
      },
      {
        group: "Course Management (/api/courses)",
        routes: [
          { method: "GET", path: "/api/courses", desc: "Paginated course catalog with category filter and debounced search" },
          { method: "POST", path: "/api/courses", desc: "Create new course with hierarchical syllabus modules (JWT Required)" },
          { method: "GET", path: "/api/courses/:id", desc: "Retrieve comprehensive course curriculum and mentor profile" },
          { method: "PUT", path: "/api/courses/:id", desc: "Edit course details, syllabus modules, or requirements (JWT Required)" },
          { method: "DELETE", path: "/api/courses/:id", desc: "Deprecate or remove course from active catalog (JWT Required)" },
        ],
      },
      {
        group: "Time Banking & Booking (/api/bookings)",
        routes: [
          { method: "POST", path: "/api/bookings", desc: "Request course booking with atomic time wallet escrow deduction (JWT Required)" },
          { method: "GET", path: "/api/bookings/student", desc: "Retrieve student's sent booking requests and session statuses (JWT Required)" },
          { method: "GET", path: "/api/bookings/tutor", desc: "Retrieve mentor's incoming student booking requests (JWT Required)" },
          { method: "PATCH", path: "/api/bookings/:id/status", desc: "Accept, reject, or cancel booking with automated refund (JWT Required)" },
          { method: "POST", path: "/api/bookings/:id/complete", desc: "Finalize session via 6-character student verification token (JWT Required)" },
          { method: "POST", path: "/api/bookings/:id/feedback", desc: "Submit post-session 1-to-5 star rating and review (JWT Required)" },
        ],
      },
      {
        group: "Schedule & Calendar (/api/schedules)",
        routes: [
          { method: "GET", path: "/api/schedules/:id", desc: "Aggregated calendar combining course bookings and self-mentoring slots (JWT Required)" },
          { method: "POST", path: "/api/schedules", desc: "Create custom self-mentoring availability slot (JWT Required)" },
          { method: "PUT", path: "/api/schedules/:id", desc: "Update schedule timing and session duration (JWT Required)" },
          { method: "DELETE", path: "/api/schedules/:id", desc: "Remove schedule entry from calendar (JWT Required)" },
        ],
      },
      {
        group: "Real-time Chat & AI (/api/chats & /api/chatbot)",
        routes: [
          { method: "GET", path: "/api/chats/rooms", desc: "List user's active private and community conversation channels (JWT Required)" },
          { method: "GET", path: "/api/chats/:roomId/messages", desc: "Fetch historical message stream for specified chat room (JWT Required)" },
          { method: "POST", path: "/api/chats/private", desc: "Initialize or fetch private 1-on-1 mentorship chat room (JWT Required)" },
          { method: "GET", path: "/api/chats/search-groups", desc: "Search public community discussion channels (JWT Required)" },
          { method: "POST", path: "/api/chatbot", desc: "Query Google Gemini AI assistant for guidance and mentor recommendations" },
        ],
      },
    ],
    securityStandards: [
      {
        title: "Tiered Rate Limiting Protection",
        desc: "Auth limiter restricts login/registration to 15 requests per 15 minutes to thwart brute-force attacks; global limiter restricts general traffic to 300 requests per 5 minutes.",
      },
      {
        title: "Prisma ACID Transactions ($transaction)",
        desc: "All Time Wallet debits and credits execute inside isolated atomic transactions to prevent race conditions, double-spending, and partial ledger write corruption.",
      },
      {
        title: "WebSocket JWT Handshake Authorization",
        desc: "Socket.io middleware validates JWT credentials before establishing the WSS connection, blocking unauthenticated socket connections at the transport layer.",
      },
      {
        title: "Inactivity Session Safeguard",
        desc: "Client-side activity listener triggers automatic session revocation after 30 minutes of idle time to safeguard open time wallets on public or shared terminals.",
      },
    ],
    metricOutcomes: [
      {
        value: "100%",
        label: "Transactional Integrity",
        desc: "Zero double-deductions via Prisma atomic transactions",
      },
      {
        value: "<200ms",
        label: "p95 API Latency",
        desc: "Sub-200ms response under high concurrency load",
      },
      {
        value: "26",
        label: "Course Categories",
        desc: "Dynamic modules across engineering, design, and science",
      },
    ],
    sections: [
      {
        title: "The brief",
        body: [
          "Traditional tutoring platforms impose significant financial barriers, restricting access to quality education. The vision for RuangTumbuh was to democratize knowledge exchange through the Time Banking philosophy: 1 hour of learning graphic design holds the exact same value as 1 hour of learning physics.",
          "Engineering Mandate: Build a secure, cashless educational platform where users exchange skills using a decentralized Time Wallet, backed by atomic transaction safety, real-time messaging, and an engaging kinetic user experience.",
        ],
      },
      {
        title: "Architecture & Time Banking",
        body: [
          "Adopted a pnpm workspace monorepo dividing the project into @rutu/shared (Zod data validation contracts), rutu-backend (Express 5 with Prisma ORM and Socket.io), and rutu-frontend (React 19 with TanStack Query and Matter.js).",
          "The Time Wallet engine operates on strict transaction atomicity: when a student books a session, the duration is locked in escrow using prisma.$transaction. If accepted, the mentor is credited and a 6-character verification token is issued; if cancelled or rejected, an instant refund is executed.",
        ],
      },
      {
        title: "What was hard",
        body: [
          "Preventing double-spending and race conditions during concurrent booking requests. Solved by wrapping all wallet debits and escrow holds within isolated PostgreSQL transactions via prisma.$transaction, guaranteeing ACID compliance.",
          "Synchronizing WebSocket real-time chat with persistent database storage while ensuring connection security. Built an authenticated Socket.io gateway requiring JWT verification during the initial WSS handshake (io.use).",
          "Designing an interactive 2D physics hero experience that runs smoothly without degrading mobile performance. Leveraged Matter.js with constrained canvas boundaries and Lenis smooth momentum scrolling.",
        ],
      },
      {
        title: "Results",
        body: [
          "Sub-200ms p95 API response times verified under load on Railway production infrastructure.",
          "100% transactional consistency achieved across concurrent booking simulations with zero balance drift.",
          "Successfully indexed 26 diverse learning disciplines with debounced real-time search.",
        ],
      },
    ],
    stack: [
      "React 19",
      "Vite 7",
      "Express 5",
      "PostgreSQL",
      "Prisma ORM",
      "Socket.io",
      "Google Gemini AI",
      "TanStack Query",
      "Matter.js",
      "Framer Motion",
      "Lenis Scroll",
      "Zod",
      "Docker",
    ],
    links: [
      { label: "Live Demo", url: "https://ruang-tumbuh.vercel.app/" },
      { label: "Backend API", url: "https://ruangtumbuh-production.up.railway.app/" },
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
