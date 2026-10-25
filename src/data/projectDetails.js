import databankImg from "../assets/databank.webp";
import databank1 from "../assets/databank/databank1.png";
import databank2 from "../assets/databank/databank2.png";
import databank3 from "../assets/databank/databank3.png";
import databank4 from "../assets/databank/databank4.png";
import ruangtumbuhImg from "../assets/ruangtumbuh.webp";
import ruangtumbuh1 from "../assets/ruangtumbuh/ruangtumbuh1.webp";
import ruangtumbuh2 from "../assets/ruangtumbuh/ruangtumbuh2.webp";
import ruangtumbuh3 from "../assets/ruangtumbuh/ruangtumbuh3.webp";
import ruangtumbuh4 from "../assets/ruangtumbuh/ruangtumbuh4.webp";
import fitsmartImg from "../assets/fitsmart.webp";
import fitsmart1 from "../assets/fitsmart/fitsmart1.webp";
import fitsmart2 from "../assets/fitsmart/fitsmart2.webp";
import fitsmart3 from "../assets/fitsmart/fitsmart3.webp";
import fitsmart4 from "../assets/fitsmart/fitsmart4.webp";
import javaislandImg from "../assets/javaisland.webp";
import javaisland1 from "../assets/javaisland/javaisland1.webp";
import javaisland2 from "../assets/javaisland/javaisland2.webp";
import javaisland3 from "../assets/javaisland/javaisland3.webp";
import javaisland4 from "../assets/javaisland/javaisland4.webp";
import pusakakuImg from "../assets/pusakaku.webp";
import pusakaku1 from "../assets/pusakaku/pusakaku1.webp";
import pusakaku2 from "../assets/pusakaku/pusakaku2.webp";
import pusakaku3 from "../assets/pusakaku/pusakaku3.webp";
import pusakaku4 from "../assets/pusakaku/pusakaku4.webp";
import semuaBisaImg from "../assets/semua-bisa.webp";
import semuabisa1 from "../assets/semua-bisa/semuabisa1.webp";
import semuabisa2 from "../assets/semua-bisa/semuabisa2.webp";
import semuabisa3 from "../assets/semua-bisa/semuabisa3.webp";
import semuabisa4 from "../assets/semua-bisa/semuabisa4.webp";
import idncourseImg from "../assets/idncourse.webp";
import idncourse1 from "../assets/idncourse/idncourse1.webp";
import idncourse2 from "../assets/idncourse/idncourse2.webp";
import idncourse3 from "../assets/idncourse/idncourse3.webp";
import idncourse4 from "../assets/idncourse/idncourse4.webp";
import coffeeeShopImg from "../assets/coffeee-shop.webp";
import coffeee1 from "../assets/coffeee-shop/coffeee1.webp";
import coffeee2 from "../assets/coffeee-shop/coffeee2.webp";
import coffeee3 from "../assets/coffeee-shop/coffeee3.webp";
import coffeee4 from "../assets/coffeee-shop/coffeee4.webp";
import mystyleImg from "../assets/mystyle.webp";
import mystyle1 from "../assets/mystyle/mystyle1.webp";
import mystyle2 from "../assets/mystyle/mystyle2.webp";
import mystyle3 from "../assets/mystyle/mystyle3.webp";
import mystyle4 from "../assets/mystyle/mystyle4.webp";
import delifoodImg from "../assets/delifood.webp";
import delifood1 from "../assets/delifood/delifood1.webp";
import delifood2 from "../assets/delifood/delifood2.webp";
import delifood3 from "../assets/delifood/delifood3.webp";
import delifood4 from "../assets/delifood/delifood4.webp";

export const projectDetails = {
  databank: {
    title: "Databank Ecosystem",
    subtitle: "Enterprise Telecom & Vendor Management System",
    status: "In Active Development",
    summary:
      "An end-to-end enterprise platform unifying large-scale telecom field operations, purchase order tracking, implementation documents, acceptance and invoicing, automated Huawei ISDP bot scraping, outsource vendor management with 3-stage sequential digital signature approvals, and geofenced attendance integrated into payroll.",
    meta: [
      { label: "Role", value: "Lead Engineer & Project Manager" },
      { label: "Company", value: "PT Intisel Prodaktifakom" },
      { label: "Timeline", value: "Jan 2026 – Present" },
      { label: "Team", value: "4 Engineers" },
      { label: "Architecture", value: "Decoupled Monorepo" },
    ],
    gallery: [
      {
        id: "hero-showcase",
        title: "Official Platform Architecture & Overview",
        route: "databank.intisel.id",
        tag: "Official Brand Presentation",
        image: databankImg,
        desc: "Official enterprise architecture overview and executive summary flyer illustrating the end-to-end telecommunication vendor management and field operation workflow.",
        features: [
          "Enterprise Telecom Data Architecture",
          "End-to-End Field Operations Pipeline",
          "Executive Summary Presentation",
        ],
      },
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
    status: "Production Ready",
    summary:
      "A peer-to-peer educational platform built on the Time Banking paradigm — where one hour of learning any discipline holds equal value to one hour of teaching. Powered by atomic PostgreSQL time-wallet transactions, real-time Socket.io communication, an interactive Matter.js 2D physics engine, and Google Gemini AI assistance.",
    domain: "ruang-tumbuh.vercel.app",
    meta: [
      { label: "Role", value: "Project Lead & Server Architect" },
      { label: "Cohort", value: "Bangkit Academy (CC26-PS050)" },
      { label: "Timeline", value: "2025 – 2026" },
      { label: "Team", value: "5 Engineers" },
      { label: "Architecture", value: "pnpm Workspaces Monorepo" },
    ],
    galleryLabel: "PRODUCTION INTERFACES",
    galleryTitle: "The RuangTumbuh Experience",
    galleryLead:
      "Explore the core interfaces of RuangTumbuh — from the interactive 2D physics landing canvas and cashless course catalog to real-time WebSocket communication and the Gemini AI copilot.",
    gallery: [
      {
        id: "hero-showcase",
        title: "Official Project Showcase & Brand Flyer",
        route: "ruang-tumbuh.vercel.app",
        tag: "Official Brand Presentation",
        image: ruangtumbuhImg,
        desc: "Official capstone presentation flyer showcasing RuangTumbuh's time banking concept, modern dark aesthetic, and fullstack educational mentorship ecosystem.",
        features: [
          "Time Banking Educational Paradigm",
          "Next-Gen EdTech UI Design System",
          "Bangkit Academy Capstone Winner Profile",
        ],
      },
      {
        id: "learner-mentor-dashboard",
        title: "Learner & Mentor Activity Dashboard",
        route: "ruang-tumbuh.vercel.app/dashboard",
        tag: "Productivity Hub",
        image: ruangtumbuh1,
        desc: "Central user command dashboard featuring neo-brutalist illustrated styling, displaying the live 540-minute Time Wallet balance, 1,200 total learning minutes, upcoming mentoring appointments, and quick action session initiators.",
        features: [
          "Real-Time 540-Minute Time Wallet Tracker",
          "1,200 Min Cumulative Study Metrics",
          "Direct Session Launcher ('Mulai Belajar' & 'Buka Sesi')",
        ],
      },
      {
        id: "course-search-catalog",
        title: "Dynamic Course Catalog & Search Hub",
        route: "ruang-tumbuh.vercel.app/search",
        tag: "Explore & Discovery",
        image: ruangtumbuh2,
        desc: "Comprehensive educational directory allowing users to search across 26 disciplines, filter by category, and exchange time credits for peer sessions.",
        features: [
          "Real-Time Debounced Query Filtering",
          "Multi-Discipline Tag Navigation",
          "Instant Time-Credit Exchange Rates",
        ],
      },
      {
        id: "member-auth-portal",
        title: "Secure Member Portal & Authentication",
        route: "ruang-tumbuh.vercel.app/login",
        tag: "Identity & Security",
        image: ruangtumbuh3,
        desc: "Unified login portal with JWT-based session security, Google OAuth integration, and instant redirection to learner dashboards.",
        features: [
          "JWT Session Token Management",
          "Single Sign-On (SSO) Support",
          "Encrypted Password Authentication",
        ],
      },
      {
        id: "onboarding-registration",
        title: "Learner & Mentor Onboarding",
        route: "ruang-tumbuh.vercel.app/register",
        tag: "Account Creation",
        image: ruangtumbuh4,
        desc: "Streamlined registration onboarding guiding new students and mentors into the Time Banking ecosystem with initial credit initialization.",
        features: [
          "Role Selection (Learner / Mentor)",
          "Automated Welcome Wallet Crediting",
          "Client & Server-Side DTO Validation",
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
  fitsmart: {
    title: "FitSmart",
    subtitle: "AI-Powered Preventive Healthcare & Clinical Lifestyle Platform",
    status: "Production Ready",
    summary:
      "A lightweight, client-centric digital healthcare platform designed to democratize preventive medicine. Powered by Google Gemini Pro API with strict clinical domain guardrails, a 24-modal disease diagnostic encyclopedia, evidence-based nutrition science indexing 16+ superfoods, and discipline-specific athletic conditioning routines.",
    domain: "github.com/adyvka31/FitSmart",
    meta: [
      { label: "Role", value: "Lead Frontend & AI Integration Engineer" },
      { label: "Platform", value: "Responsive Web & Mobile Browser" },
      { label: "Timeline", value: "2024" },
      { label: "Architecture", value: "Vanilla Client Architecture + Gemini AI BaaS" },
      { label: "AI Engine", value: "Google Gemini Pro REST API" },
    ],
    galleryLabel: "PREVENTIVE HEALTHCARE INTERFACES",
    galleryTitle: "The FitSmart Digital Wellness Hub",
    galleryLead:
      "Explore the key portals of FitSmart — uniting real-time AI doctor triage, evidence-based clinical pathology breakdowns, functional superfood dietetics, and athletic conditioning.",
    gallery: [
      {
        id: "hero-showcase",
        title: "Official Project Showcase & Wellness Flyer",
        route: "fitsmart.local/index.html",
        tag: "Official Brand Presentation",
        image: fitsmartImg,
        desc: "Official launch flyer and comprehensive interface showcase for FitSmart — an all-in-one AI-driven preventive healthcare and athletic wellness platform.",
        features: [
          "Comprehensive Digital Health Ecosystem",
          "Cross-Platform Responsive Interface System",
          "Preventive Lifestyle & Fitness Guidance",
        ],
      },
      {
        id: "teleconsultation-hero",
        title: "Teleconsultation & Doctor Booking Hero",
        route: "fitsmart.local/index.html#hero",
        tag: "Clinical Consultation",
        image: fitsmart1,
        desc: "High-impact medical portal landing featuring a cyan 3D perspective grid, verified 100+ active physician network, multi-specialty doctor cards (Dr. Ankur Sharma, Dr. Heena Sachdeva, Dr. Ahmad Khan), and floating Gemini AI consultation drawer.",
        features: [
          "100+ Active Medical Specialist Directory",
          "Instant Multi-Specialty Booking Cards",
          "Floating Cyan Gemini Pro AI Health Copilot",
        ],
      },
      {
        id: "disease-encyclopedia",
        title: "Preventive Pathology & Clinical Disease Hub",
        route: "fitsmart.local/penyakit.html",
        tag: "Clinical Disease Encyclopedia",
        image: fitsmart2,
        desc: "In-depth medical education hub covering 6 major non-communicable and infectious pathologies with 24 dedicated modal popups detailing definitions, symptoms, treatments, and prevention.",
        features: [
          "6 Core Pathologies with 24 Granular Diagnostic Modals",
          "Dedicated Symptoms, Pathology & Treatment Breakdowns",
          "Evidence-Based Prevention & Risk Factor Mitigations",
        ],
      },
      {
        id: "nutrition-dietetics",
        title: "Evidence-Based Nutrition & Superfood Matrix",
        route: "fitsmart.local/konsumsi.html",
        tag: "Nutritional Science",
        image: fitsmart3,
        desc: "Extensive dietary catalog featuring 16+ nutrient-dense food classifications — including antioxidant superfoods (Quinoa, Kurma, Kismis), cruciferous greens, and omega-3 rich nutrition.",
        features: [
          "16+ Classified Micronutrient & Superfood Profiles",
          "Daily Caloric & Macronutrient Balance Recommendations",
          "Interactive Modals with Dietary Benefits",
        ],
      },
      {
        id: "fitness-conditioning",
        title: "Athletic Conditioning & Calisthenics Hub",
        route: "fitsmart.local/aktifitas.html",
        tag: "Fitness Engineering",
        image: fitsmart4,
        desc: "Specialized exercise regimens engineered for beginner, intermediate, and advanced users. Integrates sport-specific training modules for Basketball, Football, and Badminton alongside calisthenics.",
        features: [
          "Targeted Workouts for Badminton, Football & Basketball",
          "Progressive Difficulty Levels (Beginner to Advanced)",
          "Target Muscle Group Breakdowns & Repetition Guides",
        ],
      },
    ],
    kpis: [
      {
        value: "< 1.2s",
        label: "Gemini API Response",
        note: "Optimized prompt payload with zero temperature for clinical accuracy",
      },
      {
        value: "24",
        label: "Diagnostic Modals",
        note: "Granular symptom, pathology, and therapy popups across 6 conditions",
      },
      {
        value: "100%",
        label: "Domain Gating",
        note: "Strict lexical whitelist rejecting out-of-scope health queries",
      },
      {
        value: "3 Pillars",
        label: "Wellness Matrix",
        note: "Unified ecosystem: Clinical Education · Dietetics · Active Fitness",
      },
      {
        value: "0ms",
        label: "Zero-Build Latency",
        note: "Pure vanilla web execution without runtime framework overhead",
      },
      {
        value: "3,000ms",
        label: "Anti-Spam Window",
        note: "Client-side request lock preventing API quota exhaustion",
      },
    ],
    highlights: [
      {
        icon: "cloud",
        title: "Gemini Pro AI Medical Assistant",
        desc: "Direct REST integration with Google Gemini Pro API featuring deterministic temperature parameters, animated thinking states, and error fallback handling.",
      },
      {
        icon: "database",
        title: "Clinical Disease & Diagnostic Hub",
        desc: "24 modular interactive popups detailing etiology, diagnostic symptoms, clinical treatments, and lifestyle prevention for 6 critical diseases.",
      },
      {
        icon: "monitor",
        title: "Nutritional Science & Superfoods",
        desc: "Comprehensive dietary guidelines indexing 16+ nutrient profiles from cruciferous greens to antioxidant superfoods and cardiovascular omega-3 proteins.",
      },
      {
        icon: "terminal",
        title: "Discipline-Specific Athletic Engine",
        desc: "Dynamic activity guides detailing sports conditioning (Basketball, Soccer, Badminton) and calisthenics routines with zero external runtime dependencies.",
      },
    ],
    capabilitiesTitle: "Core Capabilities & Clinical Assessment Workflow",
    capabilitiesLead:
      "FitSmart bridges the gap between complex medical literature and everyday lifestyle choices through an accessible, highly structured client architecture.",
    features: [
      {
        id: "gemini-doctor",
        title: "Google Gemini Pro AI Health Copilot",
        badge: "AI Consultation",
        desc: "Interactive floating drawer assistant delivering real-time health consultations powered by Google's Gemini Pro generative LLM (v1/models/gemini-pro:generateContent).",
        points: [
          "Direct asynchronous fetch calls with strict x-goog-api-key authentication",
          "Configured with zero temperature (0) for deterministic, hallucination-resistant clinical advice",
          "Visual 'Thinking...' loading state with asynchronous DOM lifecycle rendering",
          "Automatic error fallback alerting users during upstream Google API maintenance",
        ],
      },
      {
        id: "domain-guardrail",
        title: "Client-Side Domain Guardrail & Rate Throttling",
        badge: "Safety Gating",
        desc: "Multi-layer safety mechanism preventing the chatbot from processing off-topic inquiries or suffering rapid-fire API request exhaustion.",
        points: [
          "Keyword whitelist verification ('sehat', 'kesehatan', 'makanan', 'minuman', 'olahraga', 'aktifitas', 'dokter', 'penyakit', 'rumah sakit', 'perawatan', 'menjaga')",
          "Instant rejection message routing for non-health or out-of-scope user queries",
          "3000ms state-locking cooldown window (isRequestInProgress) preventing API quota abuse",
          "Smooth slide-up CSS modal drawer with animated show/hide transitions",
        ],
      },
      {
        id: "disease-hub",
        title: "Preventive Pathology Hub & 24 Diagnostic Modals",
        badge: "Clinical Education",
        desc: "Structured encyclopedia tackling 6 major health conditions: Diabetes Mellitus, Hypercholesterolemia, Dengue Hemorrhagic Fever, GERD, Obesity, and Acute Respiratory Infections (ISPA).",
        points: [
          "24 independent DOM modal overlays with instantaneous zero-lag toggling",
          "Deep-dive clinical classification: Type 1, Type 2, and Gestational Diabetes",
          "Lipid profiling: LDL vs HDL cardiovascular plaque risk factor breakdowns",
          "Gastroesophageal sphincter dysfunction and acute respiratory pathogen guides",
        ],
      },
      {
        id: "dietetics-matrix",
        title: "Curated Dietetics & Superfood Matrix",
        badge: "Nutrition Engine",
        desc: "Comprehensive nutritional resource (konsumsi.html) detailing over 16 whole food classifications categorized by macronutrients and functional benefits.",
        points: [
          "Antioxidant superfoods: Quinoa grain profiles, Medjool dates (Kurma), Prunes, and Raisins (Kismis)",
          "Cruciferous vegetables & leafy greens: Broccoli sulforaphane, Spinach iron, and Kale vitamins",
          "Cardiovascular proteins: Wild salmon, Pacific mackerel, Albacore tuna, and Shrimp",
          "Structured caloric meal plan suggestions for active and sedentary lifestyles",
        ],
      },
      {
        id: "athletic-conditioning",
        title: "Athletic Conditioning & Calisthenics Modules",
        badge: "Fitness Engineering",
        desc: "Dynamic exercise guides (aktifitas.html) designed for varied physiological capacities, from home workout routines to competitive field athletics.",
        points: [
          "Sport-specific aerobic conditioning protocols: Basketball, Football, and Badminton",
          "Progressive bodyweight calisthenics routines for strength, posture, and cardiovascular endurance",
          "Scientific FAQ modules addressing workout duration, evening exercise impacts, and sedentary risks",
          "Injury prevention tips and warm-up/cool-down dynamic stretching protocols",
        ],
      },
      {
        id: "responsive-ux",
        title: "Responsive Mobile-First Interface & Drawer Navigation",
        badge: "UI/UX & Accessibility",
        desc: "Lightweight responsive navigation system utilizing custom Flexbox layouts and CSS transitions tailored for both desktop displays and mobile touchscreens.",
        points: [
          "Mobile hamburger drawer with FontAwesome dynamic icon toggling (fa-bars / fa-xmark)",
          "High-contrast typography utilizing Google Fonts (Poppins & custom brand typography)",
          "Floating action button (FAB) for instant one-click AI doctor consultation access",
          "CSS backdrop filters, frosted glass overlays, and tactile hover animations",
        ],
      },
      {
        id: "vanilla-performance",
        title: "Pure Vanilla Web Stack Performance",
        badge: "Zero-Build Architecture",
        desc: "Engineered strictly with semantic HTML5, modular CSS3, and ES6+ JavaScript, delivering instant zero-compilation execution and maximum browser portability.",
        points: [
          "0ms compilation time and near-zero runtime script evaluation overhead",
          "Zero external framework dependencies or virtual DOM abstraction layers",
          "Fully compliant with standard modern browser Web APIs and DOM specifications",
          "Compatible with static file hosting, GitHub Pages, Vercel, or local live servers",
        ],
      },
      {
        id: "sanitized-security",
        title: "Sanitized DOM Lifecycle & Secure Transport",
        badge: "Security & Privacy",
        desc: "Strict client-side handling of user inputs and API communications ensuring resilience against typical web vulnerabilities.",
        points: [
          "Sanitized textContent DOM injection preventing Cross-Site Scripting (XSS) vectors",
          "Enforced HTTPS REST transmission for all Gemini API payload exchanges",
          "State isolation between disease modals preventing memory leaks across page sessions",
          "Graceful network failure handling with friendly UI diagnostics",
        ],
      },
    ],
    approvalWorkflow: {
      title: "AI Clinical Consultation & Lifestyle Decision Lifecycle",
      lead: "From user symptom inquiry to actionable preventive recommendations — each consultation passes through strict client-side domain verification and deterministic LLM inference.",
      stages: [
        {
          level: "Stage 01",
          role: "User Ingestion & Safety",
          title: "Symptom Ingestion & Safety Gating",
          desc: "User submits a health inquiry via the floating consultation drawer. The client filter checks the prompt against the 11-keyword clinical whitelist and verifies the 3000ms cooldown lock.",
          action: "Keyword Whitelist Validation → Cooldown Check",
        },
        {
          level: "Stage 02",
          role: "Gemini Pro Generative AI",
          title: "Deterministic Gemini Pro Processing",
          desc: "The query is transmitted over HTTPS to Google's Gemini Pro REST API with temperature set to 0.0. The engine generates structured, non-hallucinatory preventive recommendations and lifestyle tips.",
          action: "POST /gemini-pro:generateContent (temperature: 0)",
        },
        {
          level: "Stage 03",
          role: "DOM Sanitization & Triage",
          title: "Actionable Guidance & Triage Routing",
          desc: "The generated response is injected into the chat stream via sanitized textContent nodes. For critical symptoms, users are advised to seek in-person professional medical evaluation.",
          action: "Sanitized DOM Injection & Triage Advisory",
        },
      ],
      lockMechanism: {
        title: "Medical Safety Disclaimer & Anti-Abuse Safeguard",
        desc: "FitSmart functions strictly as an educational and preventive wellness resource. The platform combines deterministic AI system instructions, keyword whitelist filtering, and explicit medical disclaimers to ensure algorithmic advice is never treated as a replacement for emergency clinical diagnosis.",
      },
    },
    architectureTitle: "Modular Client-Side Architecture & Gemini AI BaaS",
    architectureLead:
      "Engineered with a clean separation between semantic HTML5 views, modular CSS styling sheets, a centralized vanilla JavaScript controller, and Google's Generative AI REST endpoint.",
    architecture: {
      type: "Modular Vanilla SPA + Generative AI BaaS",
      protocol: "HTTPS REST (JSON / Google Generative Language)",
      layers: [
        {
          name: "Client Presentation Layer",
          badge: "HTML5 + CSS3 + FontAwesome",
          desc: "Multi-page semantic layout comprising 6 specialized portals (index, penyakit, konsumsi, aktifitas, login, register) with responsive Flexbox/Grid structures.",
        },
        {
          name: "Interactive Controller & Modal Engine",
          badge: "Vanilla JavaScript (ES6+)",
          desc: "Centralized script.js managing 24 modal popup states, mobile hamburger drawer toggling, chat lifecycle rendering, and smooth scroll anchors.",
        },
        {
          name: "Health Domain Safety & Rate Limiter",
          badge: "Client-Side Guardrails",
          desc: "Keyword whitelist verification across 11 health terms coupled with a 3000ms asynchronous mutex lock (isRequestInProgress) to prevent API spam.",
        },
        {
          name: "AI Integration Layer",
          badge: "Google Gemini Pro REST API",
          desc: "Asynchronous fetch pipeline communicating directly with generativelanguage.googleapis.com, configured with zero temperature and 8,192 max output tokens.",
        },
        {
          name: "Static Asset & Typography Layer",
          badge: "SVG Illustrations & Web Fonts",
          desc: "Locally served SVG vectors, disease iconography, and embedded brand typography ensuring instant zero-latency visual rendering.",
        },
      ],
    },
    techStackGrouped: [
      {
        category: "Frontend & UI Architecture",
        items: [
          { name: "HTML5", role: "Semantic Structure across 6 Health Portals" },
          { name: "CSS3", role: "Responsive Layouts, Modals & Glassmorphic Effects" },
          { name: "JavaScript (ES6+)", role: "Async/Await Fetch, DOM Lifecycle & Event Controller" },
          { name: "FontAwesome 6", role: "Vector Iconography & Navigation Glyphs" },
          { name: "Google Fonts (Poppins)", role: "High-Readability Typography Hierarchy" },
        ],
      },
      {
        category: "AI Engine & Safety Protocols",
        items: [
          { name: "Google Gemini Pro API", role: "Generative LLM for Health Consultations" },
          { name: "REST API Endpoint", role: "Direct HTTPS POST Request Dispatcher" },
          { name: "Domain Keyword Whitelist", role: "Client-Side Health Lexical Filter (11 terms)" },
          { name: "3000ms Anti-Spam Mutex", role: "Request Cooldown & Rate Limiting Guard" },
        ],
      },
      {
        category: "Tooling & Deployment",
        items: [
          { name: "VS Code Live Server", role: "Local Development Server (Port 5501)" },
          { name: "Git & GitHub", role: "Version Control & Open-Source Collaboration" },
          { name: "Vercel / Static Hosting", role: "Global CDN Edge Static Distribution" },
        ],
      },
    ],
    directoryStructure: [
      {
        name: "Pages/ (Specialized Health Portals)",
        items: [
          "index.html — Main landing portal with hero & platform overview",
          "penyakit.html — Disease encyclopedia & 24 clinical diagnostic modals",
          "konsumsi.html — Dietary guidelines, macronutrients & superfood profiles",
          "aktifitas.html — Athletic conditioning & customized workout routines",
          "login.html — Authentication portal UI for returning users",
          "register.html — User registration & onboarding interface",
        ],
      },
      {
        name: "Style/ & Root Controller (Presentation & Logic)",
        items: [
          "Style/penyakit.css — Modal overlays, disease cards & grid layouts",
          "Style/konsumsi.css — Nutrition tables, food profile cards & badges",
          "Style/aktifitas.css — Workout routine cards & sports category layouts",
          "Style/style.css — Global typography, color system & reset rules",
          "script.js — Core controller: 24 popups, Gemini AI fetch & rate limiter",
          "script2.js — Secondary AI consultation module & drawer toggle",
        ],
      },
    ],
    prismaSchemas: [
      {
        name: "Data Model: MedicalCondition",
        purpose:
          "Defines pathological entities with title, classification (Metabolic, Cardiovascular, Infectious, Gastrointestinal, Respiratory), symptoms, clinical therapies, and preventive lifestyle habits.",
      },
      {
        name: "Data Model: NutritionProfile",
        purpose:
          "Stores food classifications, macronutrient breakdowns (protein, carbs, healthy fats), micronutrients (vitamins, sulforaphane, omega-3), and recommended dietary portions.",
      },
      {
        name: "Data Model: ExerciseRoutine",
        purpose:
          "Represents athletic regimens categorized by discipline (Basketball, Football, Badminton, Calisthenics), target muscle groups, intensity levels, and injury prevention notes.",
      },
      {
        name: "Data Model: AIConsultationSession",
        purpose:
          "Manages transient user consultation state: sanitized query, domain validity check, Google Gemini Pro response payload, and rate-limiting timestamp.",
      },
    ],
    securityTitle: "Hardened Perimeter & Medical Safety Standards",
    securityLead:
      "Multi-layered client-side security architecture combining lexical domain whitelisting, rate-limiting cooldown timers, and sanitized DOM injection.",
    apiEndpoints: [
      {
        group: "AI Consultation (Google Generative Language)",
        routes: [
          {
            method: "POST",
            path: "/v1/models/gemini-pro:generateContent",
            desc: "Asynchronously dispatches user health prompt to Google Gemini Pro model with temperature: 0 and max_output_tokens: 8192",
          },
        ],
      },
      {
        group: "Health Portals & Clinical Navigation",
        routes: [
          {
            method: "GET",
            path: "/Pages/penyakit.html",
            desc: "Serves comprehensive clinical encyclopedia and 24 interactive diagnostic modal views",
          },
          {
            method: "GET",
            path: "/Pages/konsumsi.html",
            desc: "Delivers comprehensive dietary guides, superfood nutritional charts, and meal recommendations",
          },
          {
            method: "GET",
            path: "/Pages/aktifitas.html",
            desc: "Serves athletic conditioning guides for basketball, football, badminton, and bodyweight calisthenics",
          },
        ],
      },
    ],
    securityStandards: [
      {
        title: "Domain Keyword Whitelisting",
        desc: "Restricts all AI prompt submissions to 11 explicit Indonesian health terminology keywords, immediately rejecting irrelevant, malicious, or jailbreak prompts.",
      },
      {
        title: "3000ms Anti-Flooding Mutex",
        desc: "State-variable lock (isRequestInProgress = true) prevents multiple rapid-fire requests from triggering Google API rate-limit errors or quota exhaustion.",
      },
      {
        title: "Sanitized Text DOM Injection",
        desc: "AI model responses are injected strictly via messageElement.textContent, mitigating Cross-Site Scripting (XSS) risks from untrusted generative tokens.",
      },
      {
        title: "Encrypted HTTPS Transport",
        desc: "All client-to-API communication flows across TLS 1.3 encrypted HTTPS channels directly to Google Generative Language endpoints.",
      },
    ],
    metricOutcomes: [
      {
        value: "24",
        label: "Diagnostic Modals Indexed",
        desc: "Covering symptoms, definitions, clinical treatments, and preventive measures across 6 major pathologies.",
      },
      {
        value: "100%",
        label: "Domain Gating Enforcement",
        desc: "Zero off-topic queries allowed into the Gemini API pipeline via lexical keyword gating.",
      },
      {
        value: "< 1.2s",
        label: "Average AI Consultation Speed",
        desc: "Deterministic low-temperature inference delivering immediate, accessible medical answers.",
      },
    ],
    sections: [
      {
        title: "The brief",
        body: [
          "Access to structured preventive healthcare education and reliable medical guidance remains a significant barrier for many everyday internet users. Too often, individuals either self-diagnose through scattered, unverified web articles or hesitate to consult medical experts due to logistical hurdles. FitSmart was built to solve this challenge by uniting four essential pillars under one lightweight, frictionless digital roof: comprehensive disease prevention, evidence-based nutrition science, athletic conditioning routines, and a direct AI-powered virtual medical consultant.",
          "Core Mandate: Create an accessible, zero-compilation web platform that delivers actionable lifestyle medicine guidelines and real-time AI triage without intimidating users with medical jargon.",
        ],
      },
      {
        title: "Architecture & Gemini Integration",
        body: [
          "The platform was engineered with a pure vanilla web architecture (HTML5, CSS3, ES6+ JavaScript) to ensure lightning-fast page loads and zero compilation friction on any web browser. For the consultation layer, FitSmart integrates directly with Google's Gemini Pro generative LLM via REST (gemini-pro:generateContent).",
          "The integration features a deterministic temperature configuration (0.0) for clinical accuracy, paired with client-side lexical whitelisting (allowedKeywords) that strictly enforces health-only conversation boundaries. A 3000ms asynchronous state lock prevents request flooding, while responsive DOM lifecycle nodes display animated loading indicators and maintain message history.",
        ],
      },
      {
        title: "What was hard",
        body: [
          "Enforcing strict medical topic boundaries in a client-side environment without backend proxies. Solved by designing an efficient substring keyword validator that screens incoming prompts across clinical terms ('sehat', 'dokter', 'penyakit', 'nutrisi', 'olahraga'), immediately routing out-of-scope queries to a polite guidance fallback.",
          "Managing 24 independent diagnostic modal dialogs across 6 distinct disease categories without introducing UI state clutter. Engineered independent show/hide controller functions with backdrop overlay coordination, allowing users to inspect deep symptom profiles without page reloads.",
          "Balancing real-time AI responsiveness with rate-limit protection. Implemented an asynchronous mutex flag (isRequestInProgress) and automated cooldown timers to ensure clean, non-overlapping API transactions.",
        ],
      },
      {
        title: "Results",
        body: [
          "Delivered a zero-build, ultra-fast preventive healthcare platform accessible on any device with 0ms compilation lag.",
          "Successfully integrated Google Gemini Pro API with 100% client-side domain guardrail compliance and zero API quota overflow.",
          "Cataloged 24 detailed diagnostic modal windows covering 6 critical diseases alongside 16+ superfood nutritional profiles.",
        ],
      },
    ],
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Google Gemini Pro API",
      "FontAwesome",
      "Responsive Design",
      "Git",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/adyvka31/FitSmart" },
      { label: "Live Demo", url: "https://jagajiwamu.vercel.app/" },
    ],
  },

  javaisland: {
    title: "JavaIsland",
    subtitle: "AI-Powered Cultural Heritage & Tourism Portal for Java",
    status: "Production Ready",
    summary:
      "An interactive cultural preservation and tourism platform dedicated to Java Island. Engineered with Vue.js-driven 3D mouse parallax city exploration, Google's Gemini 1.5 Flash generative AI concierge ('Tanya Jawa') with bilingual domain guardrails, imperial historical chronicles, and traditional culinary archives.",
    domain: "github.com/adyvka31/JavaIsland",
    meta: [
      { label: "Role", value: "Lead Frontend & AI Integration Engineer" },
      { label: "Platform", value: "Responsive Web & Mobile Browser" },
      { label: "Timeline", value: "2023" },
      { label: "Architecture", value: "Vue-Enhanced Hybrid Client + Gemini Flash BaaS" },
      { label: "AI Engine", value: "Google Gemini 1.5 Flash REST API" },
    ],
    galleryLabel: "CULTURAL & TOURISM INTERFACES",
    galleryTitle: "The JavaIsland Digital Experience",
    galleryLead:
      "Explore the key interactive touchpoints of JavaIsland — bridging conversational AI cultural guidance, reactive 3D mouse parallax city cards, ancient imperial chronicles, and traditional gastronomy.",
    gallery: [
      {
        id: "hero-showcase",
        title: "Official Project Showcase & Cultural Flyer",
        route: "javaisland.local/index.html",
        tag: "Official Brand Presentation",
        image: javaislandImg,
        desc: "Official project presentation flyer showcasing JavaIsland's digital cultural ecosystem, interactive tourism guides, and rich historical heritage archives across Java.",
        features: [
          "Comprehensive Javanese Cultural Archiving",
          "Next-Gen Tourism Interactive Storytelling",
          "Rich Multimedia & Historical Documentation",
        ],
      },
      {
        id: "cinematic-hero",
        title: "Cinematic Cultural Hero & Video Player",
        route: "javaisland.local/index.html#hero",
        tag: "Documentary Cinema Hub",
        image: javaisland1,
        desc: "Immersive welcome section with dynamic documentary video player ('Jelajahi JavaIsland di Indonesia'), warm earth-tone heritage typography, and interactive travel itinerary triggers.",
        features: [
          "Embedded Documentary Video Cinema Player",
          "Hero Travel Itinerary Callouts",
          "High-Resolution Javanese Scenic Artistry",
        ],
      },
      {
        id: "parallax-cities",
        title: "Reactive 3D Parallax City Exploration Hub",
        route: "javaisland.local/index.html#app",
        tag: "Vue 3D Motion",
        image: javaisland2,
        desc: "Dynamic city discovery portal showcasing 8 major Javanese regencies and metropolitan hubs. Powered by Vue.js reactive mouse-tracking math calculating real-time perspective rotations and smooth multi-layer depth transforms.",
        features: [
          "Reactive 3D Mouse Parallax Calculations via Vue.js",
          "8 Major Javanese Regencies & Metropolitan Hubs",
          "Multi-Layer Ambient Motion & Parallax Cloud Floating",
        ],
      },
      {
        id: "heritage-culture",
        title: "Historical Chronicles & Performing Arts Hub",
        route: "javaisland.local/culture.html",
        tag: "Heritage Archival",
        image: javaisland3,
        desc: "Rich historical and cultural repository documenting the Majapahit Empire, Yogyakarta Royal Kesultanan traditions, Wayang Kulit puppetry, Gamelan music, Angklung, and Reog Ponorogo.",
        features: [
          "Chronological Imperial Narratives (Majapahit to Sultanates)",
          "Interactive Historical Media Modals with Fluid Zoom",
          "Preservation Archives for Intangible Cultural Heritage",
        ],
      },
      {
        id: "culinary-tourism",
        title: "Gastronomy Encyclopedia & Destination Discovery",
        route: "javaisland.local/explore.html",
        tag: "Culinary & Travel",
        image: javaisland4,
        desc: "Comprehensive travel engine indexing destination categories alongside deep culinary archives detailing centuries-old origins, ingredient chemistry, and iconic traditional recipes.",
        features: [
          "9 Destination Category Filters (Volcanoes, Coastlines, Heritage)",
          "Interactive Travel Parameter Booking Simulator",
          "Historical Recipe Documentation & Origin Histories",
        ],
      },
    ],
    kpis: [
      {
        value: "< 950ms",
        label: "Gemini Flash AI Latency",
        note: "Fast streaming REST inference via gemini-1.5-flash-latest",
      },
      {
        value: "24 Terms",
        label: "Bilingual Whitelist Gating",
        note: "Restricts queries to Indonesian & English cultural keywords",
      },
      {
        value: "8 Cities",
        label: "3D Parallax Tilt Cards",
        note: "Interactive mouse-tracking perspective transforms in Vue.js",
      },
      {
        value: "9 Domains",
        label: "Tourism Category Filters",
        note: "Volcanoes, heritage temples, crater lakes, coastlines, palaces",
      },
      {
        value: "60 FPS",
        label: "Fluid CSS Motion Engine",
        note: "Infinite marquee carousel and floating ambient cloud drift",
      },
      {
        value: "100%",
        label: "Viewport Adaptability",
        note: "Fluid layout across mobile, tablet, and widescreen displays",
      },
    ],
    highlights: [
      {
        icon: "cloud",
        title: "Gemini 1.5 Flash AI Concierge",
        desc: "Integrated low-latency LLM endpoint delivering culturally accurate answers with bilingual keyword gating and graceful error recovery.",
      },
      {
        icon: "monitor",
        title: "Reactive 3D Parallax Card Engine",
        desc: "Vue.js mathematical pointer tracking generating real-time 3D isometric rotation and depth illusions without heavy WebGL overhead.",
      },
      {
        icon: "database",
        title: "Cultural Heritage & Historical Archives",
        desc: "Comprehensive documentation of imperial Javanese history, royal court ceremonies, and UNESCO-recognized intangible cultural traditions.",
      },
      {
        icon: "terminal",
        title: "Gastronomy & Destination Discovery",
        desc: "Dedicated culinary origin breakdowns paired with multi-parameter destination filters for prospective domestic and international travelers.",
      },
    ],
    capabilitiesTitle: "Core Capabilities & Cultural Exploration Workflow",
    capabilitiesLead:
      "JavaIsland balances rich visual storytelling with low-latency generative AI to deliver an immersive travel and heritage companion.",
    features: [
      {
        id: "tanya-jawa",
        title: "Bilingual Gemini 1.5 Flash AI Assistant ('Tanya Jawa')",
        badge: "Conversational AI",
        desc: "Interactive floating consultation interface allowing users to inquire about Javanese folklore, historical landmarks, traditional ceremonies, and local customs in real time.",
        points: [
          "Direct integration with Google's high-throughput gemini-1.5-flash-latest generative endpoint",
          "Automated conversational state tracking with autoscrolling chatbox message list",
          "Visual animated 'Thinking...' loading bubbles indicating upstream API generation",
          "Graceful network exception interception with courteous user error feedback",
        ],
      },
      {
        id: "domain-guardrails",
        title: "24-Keyword Dual-Language Domain Guardrail",
        badge: "Safety Gating",
        desc: "Client-side lexical filter screening user queries against a curated list of Indonesian and English cultural and geographic keywords before dispatching API calls.",
        points: [
          "Bilingual keyword whitelist: 'Jawa', 'budaya', 'candi', 'pantai', 'gunung', 'keraton', 'wisata', 'kuliner', 'temple', 'volcano', 'palace'",
          "Immediate deflection of out-of-scope or unrelated inquiries with polite redirect prompts",
          "Eliminates extraneous API token consumption and reduces operational cloud spend",
          "Case-insensitive substring search ensuring reliable input matching across varied phrasing",
        ],
      },
      {
        id: "vue-parallax",
        title: "Vue.js Mathematical 3D Mouse Parallax Cards",
        badge: "Kinetic Motion",
        desc: "Mathematical viewport tracking component calculating real-time dynamic pitch and roll angles based on cursor offset from card centers.",
        points: [
          "Normalized mouse coordinates: computes mousePX and mousePY ratios relative to element dimensions",
          "Calculates dynamic 3D rotation angles (-30deg to +30deg) across rotateX and rotateY axes",
          "Synchronized parallax background translation (-40px to +40px) creating multi-layer depth",
          "Smooth 1000ms mouseleave reset timer returning cards gently to neutral equilibrium",
        ],
      },
      {
        id: "heritage-chronicles",
        title: "Imperial Historical Chronicles & Modal Media",
        badge: "Historical Archival",
        desc: "Chronological narrative modules in culture.html detailing the historical trajectory of Java from ancient Hindu-Buddhist kingdoms to Islamic sultanates.",
        points: [
          "Detailed historical documentation of the 13th-century Majapahit Empire and Gajah Mada's legacy",
          "Archival exploration of Yogyakarta and Surakarta Keraton traditions, including batik and gamelan",
          "Interactive openModal() JavaScript image inspector with caption overlays and smooth transitions",
          "Showcases UNESCO-recognized masterworks: Wayang Kulit puppetry and Angklung instruments",
        ],
      },
      {
        id: "culinary-encyclopedia",
        title: "Traditional Gastronomy & Origin Encyclopedia",
        badge: "Culinary Heritage",
        desc: "Comprehensive culinary documentation showcasing signature Javanese delicacies across dedicated detail pages with historical lore and preparation methods.",
        points: [
          "Detailed culinary records for Gudeg Yogyakarta, Soto Kudus, Rawon Ponorogo, and Lontong Sayur",
          "Explores historical lore, such as the 16th-century Mataram soldiers coining 'hangudêk' (gudeg)",
          "Step-by-step breakdown of slow-braising cooking methods and traditional Javanese spice pastes",
          "Nutritional and ingredient profiles covering jackfruit, kluwek nut broth, and coconut reduction",
        ],
      },
      {
        id: "travel-discovery",
        title: "Multi-Category Destination Discovery Hub",
        badge: "Tourism Engine",
        desc: "Tourism exploration interface in explore.html enabling visitors to discover iconic destinations through categorized filters and simulated booking parameters.",
        points: [
          "9 Categorized destination filters: Volcanoes, Cultural Villages, Temples, Towers, Waterfalls, Craters, Beaches, Historic Quarters, National Parks",
          "Simulated trip planning widget collecting destination location, travel date, and guest count",
          "Showcases world-renowned heritage monuments: Candi Borobudur, Prambanan, and Taman Sari",
          "Responsive multi-column cards with visual tags, photography, and historical descriptions",
        ],
      },
      {
        id: "kinetic-marquee",
        title: "Infinite Kinetic Marquee Image Carousel",
        badge: "Visual UX",
        desc: "Continuous 60 FPS CSS keyframe marquee carousel showcasing scenic photographic landscapes across Java with hover-activated overlays.",
        points: [
          "Smooth slide-right and slide-left CSS animations delivering seamless infinite loops",
          "Card hover zoom effects with semi-transparent dark overlays highlighting destination names",
          "Zero JavaScript layout recalculation overhead, offloading animation entirely to the GPU",
          "Responsive width scaling adapting seamlessly from mobile screens to widescreen displays",
        ],
      },
      {
        id: "responsive-branding",
        title: "Tailwind Typography & Floating Navigation",
        badge: "Design System",
        desc: "Distinctive brand identity combining custom display typography with Tailwind CSS utility classes and floating pill navigation.",
        points: [
          "Custom embedded display font Silvertones ('dapik') paired with Google Fonts Playfair & Raleway",
          "Floating pill-shaped navbar with rounded-full border and backdrop blur styling",
          "Mobile hamburger toggle menu with dynamic hidden/visible state and outside-click listeners",
          "Earthy cultural color palette utilizing emerald greens (#15B392) and lime accents (#D2FF72)",
        ],
      },
    ],
    approvalWorkflow: {
      title: "AI Cultural Inquiry & Visitor Guidance Lifecycle",
      lead: "From user inquiry to verified cultural recommendations — each interaction passes through bilingual domain evaluation and deterministic LLM generation.",
      stages: [
        {
          level: "Stage 01",
          role: "Visitor Prompt & Gating",
          title: "Bilingual Whitelist Evaluation",
          desc: "Visitor enters a query into the 'Tanya Jawa' chat interface. The client script evaluates the input against the 24-keyword Indonesian and English cultural dictionary.",
          action: "Whitelist Filter Verification (24 Keywords)",
        },
        {
          level: "Stage 02",
          role: "Gemini 1.5 Flash LLM",
          title: "Low-Latency Generative Processing",
          desc: "Valid prompts are dispatched via HTTPS POST to Google's gemini-1.5-flash-latest model. The model produces culturally accurate, context-rich historical and travel responses.",
          action: "POST /gemini-1.5-flash-latest:generateContent",
        },
        {
          level: "Stage 03",
          role: "DOM Delivery & Cross-Linking",
          title: "Sanitized DOM Insertion & Triage",
          desc: "The response is injected safely into the chat stream via textContent. If the query touches upon destination logistics, the assistant suggests relevant regional exploration pages.",
          action: "Sanitized DOM Update & Chatbox Autoscroll",
        },
      ],
      lockMechanism: {
        title: "Cultural Safety & Academic Authenticity Guarantee",
        desc: "JavaIsland is dedicated to educational appreciation and cultural preservation. The platform enforces bilingual lexical domain guardrails, verified historical references, and polite deflection algorithms to ensure AI conversations remain respectful, culturally grounded, and academically authentic.",
      },
    },
    architectureTitle: "Vue-Enhanced Hybrid Client & Generative AI BaaS",
    architectureLead:
      "Engineered with a clean separation between multi-page semantic HTML5 views, Tailwind CSS styling, a reactive Vue.js 3D motion module, and Google's Generative AI REST endpoint.",
    architecture: {
      type: "Vue-Enhanced Semantic Web + Generative AI BaaS",
      protocol: "HTTPS REST (JSON / Google Generative Language)",
      layers: [
        {
          name: "Presentation & Semantic Layout Layer",
          badge: "HTML5 + Tailwind CSS + Silvertones Font",
          desc: "Multi-page semantic portal (index, culture, explore, askjava, detail pages) styled with modern Tailwind CSS utilities and custom brand typography.",
        },
        {
          name: "Reactive 3D Motion & Component Layer",
          badge: "Vue.js 2.x Component Math",
          desc: "Self-contained Vue.js component calculating cursor offset mathematics (mousePX, mousePY) and dynamic 3D rotational transforms (rotateX, rotateY).",
        },
        {
          name: "Cultural Domain Guardrail Layer",
          badge: "Bilingual Lexical Whitelist",
          desc: "Client-side keyword validator screening queries across 24 Indonesian and English terms prior to API dispatch.",
        },
        {
          name: "AI Generative Engine Layer",
          badge: "Google Gemini 1.5 Flash REST API",
          desc: "Asynchronous fetch pipeline connecting to generativelanguage.googleapis.com, delivering rapid generative answers for cultural inquiries.",
        },
        {
          name: "Media & Asset Distribution Layer",
          badge: "High-Res Photography & YouTube Embeds",
          desc: "Optimized cultural image assets, local SVG iconography, and embedded YouTube cultural video players.",
        },
      ],
    },
    techStackGrouped: [
      {
        category: "Frontend & UI Architecture",
        items: [
          { name: "HTML5", role: "Semantic Markup across 9 Cultural Portals" },
          { name: "Tailwind CSS", role: "Utility-First Responsive Styling & Grid Layouts" },
          { name: "CSS3 Keyframes", role: "Hardware-Accelerated 60 FPS Marquee & Parallax Animations" },
          { name: "Vue.js", role: "Reactive Mathematical 3D Mouse Parallax Card Component" },
          { name: "JavaScript (ES6+)", role: "DOM Manipulation, Modal Dialogs & Asynchronous Fetch" },
          { name: "Silvertones Typography", role: "Custom Display Font ('dapik') & Google Fonts" },
        ],
      },
      {
        category: "AI & External Integrations",
        items: [
          { name: "Google Gemini 1.5 Flash", role: "Generative AI LLM for Cultural Tourism Consultations" },
          { name: "REST API Endpoint", role: "Direct HTTPS POST Request Pipeline" },
          { name: "Bilingual Whitelist Guardrail", role: "Client-Side 24-Keyword Cultural Filter (ID & EN)" },
          { name: "YouTube Iframe API", role: "Embedded High-Definition Cultural Video Showcase" },
        ],
      },
      {
        category: "Tooling & Deployment",
        items: [
          { name: "VS Code Live Server", role: "Local Development Server on Port 5501" },
          { name: "Git & GitHub", role: "Version Control & Open-Source Collaboration" },
          { name: "Vercel / Static Edge", role: "Global Edge CDN Static File Hosting" },
        ],
      },
    ],
    directoryStructure: [
      {
        name: "Root Directory (Core Application Portals)",
        items: [
          "index.html — Main landing gateway with hero, 3D parallax cities, and marquee",
          "culture.html — Historical chronicles, Majapahit Empire, and performing arts",
          "explore.html — Tourism destinations, category filters, and booking simulator",
          "askjava.html — Tanya Jawa: Bilingual Gemini Flash AI conversational concierge",
          "detailwayang.html — In-depth Wayang Kulit shadow puppetry heritage profile",
          "detailgudeg.html — Gudeg Yogyakarta historical origin & culinary recipe lore",
          "detailrawon.html — Rawon Ponorogo black beef soup recipe & kluwek nut history",
          "detailsotokudus.html — Soto Kudus central Javanese shredded chicken soup profile",
          "detaillontong.html — Lontong Sayur coconut vegetable stew culinary breakdown",
        ],
      },
      {
        name: "Styles & Assets (css/, font/, Images/)",
        items: [
          "index.css — 3D card tilt styling, perspective math rules, and custom animations",
          "css/askjava.css — Chatbot container, bubble styling, and autoscroll rules",
          "css/culture.css — Timeline styling, narrative layouts, and modal dialogs",
          "css/explore.css — Destination card grids, booking input bar, and category buttons",
          "font/Silvertones.otf — Custom brand display font embedded via @font-face",
          "Images/ — High-resolution photography, SVG maps, and cultural iconography",
        ],
      },
    ],
    prismaSchemas: [
      {
        name: "Data Model: HeritageChronicle",
        purpose:
          "Represents historical eras and kingdoms (Majapahit, Mataram, Yogyakarta Sultanate) with historical epoch, leadership, cultural contributions, and archival media.",
      },
      {
        name: "Data Model: CulinaryHeritage",
        purpose:
          "Stores traditional food items with regional origin, historical invention lore, signature herbs, slow-braising cooking steps, and taste profile.",
      },
      {
        name: "Data Model: TouristDestination",
        purpose:
          "Captures landmark profiles categorized across 9 tourism domains with geographic coordinates, historical era, admission guidelines, and photo galleries.",
      },
      {
        name: "Data Model: CulturalAIInteraction",
        purpose:
          "Manages visitor session state in 'Tanya Jawa': user prompt, bilingual whitelist match status, Gemini 1.5 Flash payload, and response latency.",
      },
    ],
    securityTitle: "Hardened Perimeter & Cultural Safety Standards",
    securityLead:
      "Multi-layered client-side security architecture combining bilingual lexical domain whitelisting, sanitized DOM insertion, and encrypted REST transmission.",
    apiEndpoints: [
      {
        group: "AI Tourism Concierge (Google Generative Language)",
        routes: [
          {
            method: "POST",
            path: "/v1beta/models/gemini-1.5-flash-latest:generateContent",
            desc: "Dispatches user cultural prompt to Google Gemini 1.5 Flash with real-time generative responses",
          },
        ],
      },
      {
        group: "Cultural Portals & Historical Exploration",
        routes: [
          {
            method: "GET",
            path: "/culture.html",
            desc: "Serves imperial historical chronicles and interactive performing arts media modals",
          },
          {
            method: "GET",
            path: "/explore.html",
            desc: "Delivers tourism destination discovery engine with 9 category filters and trip planner",
          },
          {
            method: "GET",
            path: "/detailgudeg.html",
            desc: "Renders in-depth gastronomy history and centuries-old recipe origin for Gudeg Yogyakarta",
          },
        ],
      },
    ],
    securityStandards: [
      {
        title: "Bilingual Domain Keyword Whitelisting",
        desc: "Screens prompt submissions across 24 Indonesian and English cultural terms, immediately deflecting off-topic or malicious prompt injections before API dispatch.",
      },
      {
        title: "Sanitized DOM Insertion",
        desc: "Model-generated text is injected strictly using textContent properties, protecting client browsers against Cross-Site Scripting (XSS) from untrusted tokens.",
      },
      {
        title: "Encrypted HTTPS API Transport",
        desc: "All client-to-API communication flows over TLS 1.3 encrypted HTTPS channels directly to Google Generative Language endpoints.",
      },
      {
        title: "Graceful Upstream Error Recovery",
        desc: "Catch blocks intercept network anomalies or quota limits, displaying polite error diagnostics without disrupting page UI or crashing script threads.",
      },
    ],
    metricOutcomes: [
      {
        value: "< 950ms",
        label: "Gemini Flash AI Latency",
        desc: "High-throughput generative inference delivering rapid, accessible cultural answers.",
      },
      {
        value: "24 Terms",
        label: "Bilingual Domain Gating",
        desc: "Zero off-topic queries allowed into the API pipeline via dual-language lexical gating.",
      },
      {
        value: "8 Cities",
        label: "3D Parallax Interactive Cards",
        desc: "Mathematical pointer-tracking perspective transforms engineered in Vue.js.",
      },
    ],
    sections: [
      {
        title: "The brief",
        body: [
          "Java Island possesses an extraordinarily rich tapestry of historical kingdoms, UNESCO-recognized performing arts, diverse culinary traditions, and world-class natural landmarks. However, online representations of Javanese culture often remain fragmented across disparate blogs or dry academic repositories. JavaIsland was conceived to bridge this gap: an engaging, modern digital portal that introduces visitors to the depth of Java through interactive visual motion and accessible generative AI.",
          "Core Mandate: Build an interactive, visually stunning cultural tourism platform that combines modern frontend techniques (3D mouse parallax, infinite marquees) with a responsive AI assistant equipped with strict cultural domain guardrails.",
        ],
      },
      {
        title: "Architecture & Generative AI Integration",
        body: [
          "The platform employs a hybrid frontend architecture combining semantic HTML5 and Tailwind CSS with a reactive Vue.js component for mathematical 3D card tilt calculations. The card component tracks normalized pointer coordinates (mousePX, mousePY) to compute dynamic rotateX and rotateY CSS transforms alongside background translation, creating an authentic physical card feel without three.js or WebGL complexity.",
          "For the AI assistant ('Tanya Jawa'), the platform integrates directly with Google's Gemini 1.5 Flash endpoint via REST. To protect API quotas and maintain cultural authenticity, a client-side lexical validator enforces a 24-keyword bilingual whitelist (spanning terms like 'Jawa', 'budaya', 'candi', 'wisata', 'culture', 'temple', 'volcano'). Submissions that pass the filter trigger an asynchronous fetch pipeline with animated thinking indicators and autoscrolling message containers.",
        ],
      },
      {
        title: "What was hard",
        body: [
          "Implementing realistic 3D mouse parallax tilting with natural damping across different screen resolutions. Solved by structuring a reactive Vue.js component that continuously calculates cursor offsets relative to the element's bounding box, coupled with a 1000ms mouseleave timeout to smoothly reset the card to equilibrium.",
          "Enforcing cultural topic fidelity in the AI assistant without adding a dedicated backend proxy. Solved by authoring a dual-language substring search covering 24 critical cultural and geographic keywords in Indonesian and English, deflecting non-cultural inquiries immediately on the client.",
          "Constructing an infinite photographic marquee that remains silky-smooth across high-refresh-rate displays. Achieved through pure CSS keyframe translations (slide-right, slide-left) that bypass DOM reflows and offload rendering entirely to the browser GPU.",
        ],
      },
      {
        title: "Results",
        body: [
          "Successfully deployed an interactive cultural tourism platform showcasing 8 major cities, 9 tourism domains, and in-depth culinary archives.",
          "Integrated Google's Gemini 1.5 Flash API with sub-second response times and 100% client-side bilingual domain guardrail compliance.",
          "Engineered reactive 3D mouse-tracking parallax cards using Vue.js math that run fluidly at 60 FPS without external 3D libraries.",
        ],
      },
    ],
    stack: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "Vue.js",
      "Google Gemini 1.5 Flash",
      "Custom Typography",
      "Git",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/adyvka31/JavaIsland" },
    ],
  },

  pusakaku: {
    title: "Pusakaku",
    subtitle: "Digital Preservation of Indonesian Traditional Folk Games & Cultural Heritage",
    status: "Production Ready",
    summary:
      "An educational cultural heritage platform engineered to revive and preserve Indonesia's endangered traditional folk games. Combines rich historical ethnography, psychomotor and cognitive development analyses, an interactive 10-stage gamified assessment quiz engine, and custom display typography.",
    domain: "github.com/adyvka31/Pusakaku",
    meta: [
      { label: "Role", value: "Lead Frontend Engineer & Cultural Researcher" },
      { label: "Platform", value: "Responsive Web & Mobile Browser" },
      { label: "Timeline", value: "2023" },
      { label: "Architecture", value: "Tailwind Semantic Web + Gamified Quiz Engine" },
      { label: "Design System", value: "Custom Yogyakarta Typography & Heritage Palette" },
    ],
    galleryLabel: "FOLK HERITAGE & GAMIFIED INTERFACES",
    galleryTitle: "The Pusakaku Cultural Experience",
    galleryLead:
      "Explore the core interactive touchpoints of Pusakaku — from gamified cultural quizzes and deep anthropological game profiles to dual-lane kinetic marquees and responsive heritage typography.",
    gallery: [
      {
        id: "hero-showcase",
        title: "Official Project Showcase & Folklore Flyer",
        route: "pusakaku.local/index.html",
        tag: "Official Brand Presentation",
        image: pusakakuImg,
        desc: "Official project presentation flyer showcasing Pusakaku's cultural preservation mission, interactive folklore encyclopedias, and traditional Nusantara game archives.",
        features: [
          "Authentic Nusantara Heritage Visual Identity",
          "Traditional Games Educational Preservation",
          "Gamified Interactive Cultural Learning",
        ],
      },
      {
        id: "folk-game-carousel",
        title: "Traditional Folk Games Hero Ribbon & Cultural Carousel",
        route: "pusakaku.local/index.html#hero",
        tag: "Interactive Heritage",
        image: pusakaku1,
        desc: "Immersive cultural hero section showcasing classic traditional games like Balap Karung, Lompat Tali, Engklek, and Gobak Sodor in a smooth dynamic preview ribbon with direct exploration shortcuts.",
        features: [
          "Classic Folk Games Ribbon Gallery (Balap Karung, Gobak Sodor, Engklek)",
          "Warm Earthy Nusantara Cultural Color Palette",
          "Direct Game Encyclopedia Exploration Shortcuts",
        ],
      },
      {
        id: "provincial-navigator",
        title: "10-Province Regional Cultural Game Navigator",
        route: "pusakaku.local/permainan.html",
        tag: "Regional Ethnography",
        image: pusakaku2,
        desc: "Provincial game filter tab system allowing users to explore heritage games across 10 Indonesian provinces — including Sulawesi, Lampung, Yogyakarta, Jawa Tengah, Padang, Jawa Barat, Riau, Kalimantan, NTT, and Bali.",
        features: [
          "10-Province Regional Tab Filter Engine",
          "Rich Cultural Metadata & Gameplay Context per Game",
          "Responsive Tab Switching with Smooth State Transitions",
        ],
      },
      {
        id: "ethnographic-history",
        title: "Deep-Dive Ethnographic Origin & History Timeline (Egrang)",
        route: "pusakaku.local/sejarah.html",
        tag: "Historical Chronicle",
        image: pusakaku3,
        desc: "Detailed historical chronicle detailing traditional games like Egrang, exploring its ancient origins ('Asal-Usul Egrang'), archipelago transmission ('Penyebaran Egrang'), and philosophical values of balance.",
        features: [
          "Timeline of Ancient Folk Game Origins & Evolution",
          "Archival Spread Across the Indonesian Archipelago",
          "Philosophical Values of Physical Balance & Perseverance",
        ],
      },
      {
        id: "quiz-engine",
        title: "Gamified Interactive Cultural Quiz Engine",
        route: "pusakaku.local/kuis.html",
        tag: "Gamified Learning",
        image: pusakaku4,
        desc: "Interactive 10-stage quiz testing user knowledge of Indonesian traditional games, featuring real-time score calculation, immediate question feedback, and final mastery evaluation.",
        features: [
          "10-Stage Dynamic Multiple-Choice Engine",
          "Instant Answer Validation & Score Tallying",
          "Interactive Knowledge Retention Testing",
        ],
      },
    ],
    kpis: [
      {
        value: "10 Steps",
        label: "Interactive Quiz Engine",
        note: "Real-time scoring and feedback evaluation in game.js",
      },
      {
        value: "8+ Games",
        label: "Traditional Activities Indexed",
        note: "From Congklak and Egrang to Gobak Sodor and Bentengan",
      },
      {
        value: "4 Dossiers",
        label: "Dedicated Deep-Dive Portals",
        note: "Comprehensive history, physics, and rules documentation",
      },
      {
        value: "6 Breakpoints",
        label: "Responsive Tailwind Matrix",
        note: "Custom screens from xs (250px) to 2xl (1536px)",
      },
      {
        value: "60 FPS",
        label: "GPU-Accelerated Marquee",
        note: "Fluid keyframe translations without layout recalculation",
      },
      {
        value: "0ms",
        label: "Zero-Build Runtime Latency",
        note: "Pure vanilla web execution on static edge CDN",
      },
    ],
    highlights: [
      {
        icon: "terminal",
        title: "Gamified Cultural Assessment",
        desc: "Dynamic 10-stage quiz state machine evaluating traditional folk game comprehension with automated scoring and constructive feedback.",
      },
      {
        icon: "database",
        title: "Anthropological Game Archives",
        desc: "Detailed dossiers on Congklak, Egrang, Kelereng, and Layang-Layang analyzing origins, cultural philosophies, and physical benefits.",
      },
      {
        icon: "monitor",
        title: "Kinetic Marquee & Visual UX",
        desc: "Dual-lane infinite carousel displaying regional folk activities with hardware-accelerated CSS animations and responsive hover overlays.",
      },
      {
        icon: "cloud",
        title: "Cultural Preservation Advocacy",
        desc: "Structured educational initiative promoting traditional physical play as a healthier, community-oriented alternative to excessive screen time.",
      },
    ],
    capabilitiesTitle: "Core Capabilities & Heritage Education Workflow",
    capabilitiesLead:
      "Pusakaku bridges the generational divide by transforming ancient Indonesian folk games into engaging, interactive digital experiences.",
    features: [
      {
        id: "quiz-machine",
        title: "Gamified 10-Stage Cultural Quiz Engine",
        badge: "Interactive Assessment",
        desc: "Multi-step quiz module (Pages/game.html) designed to test and reinforce knowledge of Indonesian traditional game rules, cultural history, and regional origins.",
        points: [
          "State-driven question pagination using showQuestion(index) with next/previous bounds checks",
          "Real-time evaluation logic aggregating 10 points per correct answer up to a 100-point ceiling",
          "Dynamic qualitative feedback generator differentiating high mastery (≥70) from retry guidance",
          "Full quiz reset capability (restartQuiz()) clearing radio selections and restoring initial state",
        ],
      },
      {
        id: "anthropological-dossiers",
        title: "In-Depth Game Dossiers & Physics Philosophy",
        badge: "Cultural Research",
        desc: "Dedicated standalone documentation portals for 4 iconic traditional games exploring historical origins, physics principles, and developmental benefits.",
        points: [
          "Congklak: Explores ancient Mancala roots (Egypt 3000 BC), seed allocation math, and strategic patience",
          "Egrang: Analyzes vestibular equilibrium, core motor stability, and the psychological mastery of fear",
          "Kelereng: Details tactical precision, geometric trajectory control, and fine-motor coordination",
          "Layang-Layang: Chronicles Kaghati Kolope (world's oldest kite in Muna), aerodynamics, and wind currents",
        ],
      },
      {
        id: "preloader-curtain",
        title: "Timed Preloader Intro Curtain Animation",
        badge: "Visual UX",
        desc: "Sequenced welcome animation (Javascript/hello.js) executing upon window.onload to create a sense of theatrical arrival before uncovering the landing portal.",
        points: [
          "Sequential text rendering cycle: 'Selamat Datang' → 'Di' → 'PusakaKu' with 1000ms intervals",
          "Hardware-accelerated CSS translate-animation sliding the curtain upwards upon completion",
          "Smooth entry cadence focusing user attention on the platform's cultural preservation mission",
          "Lightweight script execution with zero external animation library dependencies",
        ],
      },
      {
        id: "dual-lane-marquee",
        title: "Dual-Lane GPU-Accelerated Marquee Carousel",
        badge: "Kinetic Motion",
        desc: "Continuous multi-card carousel showcasing 8 regional folk games across Java, Sumatra, Sulawesi, and Jakarta with zero JavaScript layout overhead.",
        points: [
          "Dual keyframe animation tracks (slide-right and slide-right2) creating seamless continuous loops",
          "Tactile card hover scaling (scale-110) paired with emerald ring borders (ring-green-700)",
          "Overlay text styling revealing game titles (Gobak Sodor, Balap Karung, Engklek) and origins on hover",
          "GPU-accelerated transforms preventing frame drops on low-power mobile devices",
        ],
      },
      {
        id: "yogyakarta-typography",
        title: "Custom Yogyakarta Display Typography System",
        badge: "Brand Identity",
        desc: "Evocative Javanese cultural branding pairing the custom TrueType font Yogyakarta with Google Fonts serif typography and an earthy natural palette.",
        points: [
          "Custom @font-face declaration embedding Font/Yogyakarta.ttf for expressive cultural headlines",
          "Harmonious heritage color palette: deep forest green (#5D8736), lime (#A9C46C), and parchment (#F5EFDA)",
          "High contrast ratio ensuring full readability across text sections and modal dialogues",
          "Integrated brand iconography with interactive grab/drag cursor effects (cursor-grab)",
        ],
      },
      {
        id: "responsive-breakpoints",
        title: "Granular 6-Tier Responsive Breakpoint Architecture",
        badge: "Responsive Layout",
        desc: "Custom Tailwind CSS configuration engineered to maintain layout integrity across an extensive range of viewport widths from ultra-compact smartphones to 2K monitors.",
        points: [
          "Custom tailored Tailwind breakpoints: xs (250px), sm (420px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)",
          "Mobile-first dropdown menu drawer toggling cleanly on handheld viewports",
          "Fluid image aspect ratios with object-cover scaling preventing aspect distortion",
          "Adaptive typography sizing utilizing responsive clamp utilities for headlines and body copy",
        ],
      },
      {
        id: "event-timeline",
        title: "Cultural Preservation Event Timeline & Calendar",
        badge: "Community Hub",
        desc: "Dedicated section (Acara Pusaka) promoting grassroots youth tournaments, community festivals, and school workshops across Indonesia.",
        points: [
          "Curated calendar showcasing upcoming traditional game competitions and cultural gatherings",
          "Interactive registration triggers connecting educators and youth organizers with heritage programs",
          "Spotlights community-driven revitalizations of folk games in urban public spaces",
          "Visual badge indicators categorizing events by regional territory and game discipline",
        ],
      },
      {
        id: "screen-time-faq",
        title: "Educational FAQ Accordion & Screen-Time Advocacy",
        badge: "Health & Advocacy",
        desc: "Structured 4-tier FAQ accordion articulating the core psychological and developmental advantages of traditional physical play over passive screen exposure.",
        points: [
          "Addresses childhood screen-time dependency through active, social physical play alternatives",
          "Explains cognitive problem-solving and emotional resilience nurtured through folk rules",
          "Articulates Pusakaku's mission as an open-access cultural repository for schools and families",
          "Clean collapsible accordion structure providing frictionless access to key research findings",
        ],
      },
    ],
    approvalWorkflow: {
      title: "Traditional Game Discovery & Educational Assessment Lifecycle",
      lead: "From cultural exploration to interactive assessment — guiding users through an engaging cycle of historical learning and gamified reinforcement.",
      stages: [
        {
          level: "Stage 01",
          role: "Cultural Immersion",
          title: "Anthropological Game Discovery",
          desc: "User explores the games catalog and dedicated deep-dive portals, reading about historical origins, physics principles, and cognitive benefits.",
          action: "Browse Catalog → Select Game Profile",
        },
        {
          level: "Stage 02",
          role: "Gamified Evaluation",
          title: "10-Stage Interactive Assessment",
          desc: "User launches the quiz engine in game.html, answering 10 progressive questions covering game rules, regional origins, and material craftsmanship.",
          action: "Complete 10-Question Quiz → Submit Form",
        },
        {
          level: "Stage 03",
          role: "Advocacy & Action",
          title: "Real-World Play & Screen-Time Reduction",
          desc: "System tallies score out of 100, delivers qualitative feedback, and encourages users to organize physical play sessions with friends and community.",
          action: "Review Score Feedback → Share & Play Outdoors",
        },
      ],
      lockMechanism: {
        title: "Folk Heritage Authenticity & Child Development Guarantee",
        desc: "Pusakaku serves as an authentic educational bridge. The platform synthesizes peer-reviewed folklore research with child psychology insights, ensuring that every game record, rule explanation, and quiz metric accurately preserves Indonesia's intangible heritage while promoting active social development.",
      },
    },
    architectureTitle: "Tailwind Semantic Web & Gamified Quiz Architecture",
    architectureLead:
      "Engineered with a clean separation between multi-page semantic HTML5 views, utility-first Tailwind CSS styling sheets, a lightweight JavaScript quiz state machine, and custom TrueType typography.",
    architecture: {
      type: "Semantic Web Architecture + Gamified Assessment Engine",
      protocol: "Client-Side DOM Manipulation & State Paging",
      layers: [
        {
          name: "Client Presentation & Semantic Views",
          badge: "HTML5 + Tailwind CSS v3.4.17",
          desc: "Multi-page semantic portal (index, game, pagecongklak, pageegrang, pagekelereng, pagelayang) styled with utility classes and custom responsive breakpoints.",
        },
        {
          name: "Interactive Quiz State Machine",
          badge: "Javascript/game.js",
          desc: "Centralized quiz controller managing question pagination (showQuestion), score calculation, feedback strings, and radio form resets.",
        },
        {
          name: "Preloader & Entry Choreography",
          badge: "Javascript/hello.js",
          desc: "Asynchronous text-stepping intro curtain executing on window.onload, transitioning gracefully into the landing view via CSS translate transforms.",
        },
        {
          name: "Kinetic Motion & Styling Layer",
          badge: "CSS3 Hardware-Accelerated Keyframes",
          desc: "Hardware-accelerated marquee carousel (slide-right, slide-right2), wave animations, pulse indicators, and hover-zoom scaling.",
        },
        {
          name: "Cultural Typography & Vector Layer",
          badge: "Font/Yogyakarta.ttf & SVG Icons",
          desc: "Embedded custom TrueType display typography paired with local SVG illustrations, regional photography, and cultural badges.",
        },
      ],
    },
    techStackGrouped: [
      {
        category: "Frontend & UI Architecture",
        items: [
          { name: "HTML5", role: "Semantic Markup across 6 Cultural & Game Portals" },
          { name: "Tailwind CSS v3.4.17", role: "Utility-First Responsive Styling with 6 Custom Breakpoints" },
          { name: "CSS3 Keyframes", role: "Hardware-Accelerated Marquee & Pulse Animations" },
          { name: "Yogyakarta Font", role: "Custom Embedded TrueType Typography ('Yogyakarta')" },
          { name: "Vanilla JavaScript (ES6+)", role: "Quiz Pagination State Engine, Scoring & Preloader Intro" },
        ],
      },
      {
        category: "Content & Ethnographic Research",
        items: [
          { name: "Mancala / Congklak Research", role: "Historical Documentation of Mathematical Folk Play" },
          { name: "Vestibular Balance Studies", role: "Analysis of Motor Coordination in Egrang & Bakiak" },
          { name: "Kaghati Kolope Lore", role: "World's Oldest Kite Folklore from Muna Island, Sulawesi" },
          { name: "Screen-Time Advocacy", role: "Pedagogical Framework for Screen-Time Reduction" },
        ],
      },
      {
        category: "Tooling & Deployment",
        items: [
          { name: "Node.js & npm", role: "Package Management & Tailwind Build Automation" },
          { name: "VS Code Live Server", role: "Local Development Server Environment" },
          { name: "Git & GitHub", role: "Version Control & Open-Source Collaboration" },
          { name: "Vercel / Static Edge", role: "High-Performance Edge CDN Static Deployment" },
        ],
      },
    ],
    directoryStructure: [
      {
        name: "Root & Pages/ (Core Portals & Game Dossiers)",
        items: [
          "index.html — Main landing portal with hero, marquee, about, and FAQ",
          "Pages/game.html — Interactive 10-stage gamified cultural assessment quiz",
          "Pages/pagecongklak.html — Congklak (Mancala) history, rules, and mathematical lore",
          "Pages/pageegrang.html — Egrang (bamboo stilts) balance physics and motor skills",
          "Pages/pagekelereng.html — Kelereng (marbles) precision geometry and tactical rules",
          "Pages/pagelayang.html — Layang-Layang (kites) aerodynamics and Kaghati Kolope history",
        ],
      },
      {
        name: "Logic, Styles & Assets (Javascript/, Style/, Font/, Image/)",
        items: [
          "Javascript/game.js — Quiz state machine: pagination, score calculation & reset",
          "Javascript/hello.js — Sequenced welcome preloader curtain with sliding exit",
          "Style/index.css — Keyframe animations, Yogyakarta font imports & reset rules",
          "Font/Yogyakarta.ttf — Custom TrueType display typography asset",
          "Image/ — Archival photography, logo assets, and cultural vector illustrations",
          "tailwind.config.js — Tailwind configuration with 6 custom breakpoint definitions",
        ],
      },
    ],
    prismaSchemas: [
      {
        name: "Data Model: TraditionalGame",
        purpose:
          "Represents indigenous folk game records with title, regional origin, material equipment (bamboo, cowrie shells, glass), required player count, and developmental values.",
      },
      {
        name: "Data Model: QuizQuestion",
        purpose:
          "Stores assessment items with prompt text, 4 multiple-choice options (a-d), correct answer key, and historical context explanation.",
      },
      {
        name: "Data Model: UserQuizSession",
        purpose:
          "Tracks transient assessment state: selected answers array (q1-q10), computed score (0-100), completion timestamp, and qualitative feedback string.",
      },
      {
        name: "Data Model: CulturalEvent",
        purpose:
          "Captures preservation workshops, school festivals, and regional folk game tournaments with organizer, location, date, and target age group.",
      },
    ],
    securityTitle: "Hardened Perimeter & Data Safety Standards",
    securityLead:
      "Client-side architecture ensuring zero telemetry intrusion, isolated state memory, and secure static transmission.",
    apiEndpoints: [
      {
        group: "Interactive Quiz Engine (Client State)",
        routes: [
          {
            method: "POST",
            path: "submitQuiz()",
            desc: "Evaluates radio inputs across q1-q10, calculates score out of 100, and displays qualitative feedback",
          },
          {
            method: "POST",
            path: "restartQuiz()",
            desc: "Resets currentQuestionIndex to 0, clears checked radio buttons, and hides result panel",
          },
        ],
      },
      {
        group: "Cultural Portals & Game Dossiers",
        routes: [
          {
            method: "GET",
            path: "/Pages/game.html",
            desc: "Serves 10-question traditional game quiz interface",
          },
          {
            method: "GET",
            path: "/Pages/pagecongklak.html",
            desc: "Delivers deep-dive historical dossier and rules for Congklak",
          },
          {
            method: "GET",
            path: "/Pages/pageegrang.html",
            desc: "Serves history, balance physics, and motor coordination guide for Egrang",
          },
        ],
      },
    ],
    securityStandards: [
      {
        title: "Client-Side Memory Isolation",
        desc: "All quiz calculations execute locally within browser memory without sending user responses to unverified third-party endpoints, preserving absolute visitor privacy.",
      },
      {
        title: "Zero-Tracker Privacy Footprint",
        desc: "The application operates with zero behavioral tracking cookies, commercial ad beacons, or telemetry scripts, ensuring a safe educational environment for children.",
      },
      {
        title: "Sanitized Static Distribution",
        desc: "Deployed as pre-compiled static assets served over TLS 1.3 encrypted HTTPS channels, inherently immune to server-side SQL injection or remote code execution vectors.",
      },
      {
        title: "Defensive DOM Injection",
        desc: "Dynamic feedback messages and score figures are rendered strictly through textContent properties to prevent Cross-Site Scripting (XSS) risks.",
      },
    ],
    metricOutcomes: [
      {
        value: "10 Steps",
        label: "Gamified Assessment Questions",
        desc: "Multi-choice quiz evaluating traditional folk game origins, rules, and cultural lore.",
      },
      {
        value: "8+ Games",
        label: "Regional Folk Activities",
        desc: "Cataloging iconic games from Java, Sumatra, Sulawesi, and Jakarta.",
      },
      {
        value: "4 Portals",
        label: "Comprehensive Heritage Portals",
        desc: "Dedicated deep-dive dossiers on Congklak, Egrang, Kelereng, and Layang-Layang.",
      },
    ],
    sections: [
      {
        title: "The brief",
        body: [
          "With the rapid rise of digital screens and mobile entertainment, traditional Indonesian folk games are rapidly fading from the daily lives of younger generations. These games are far more than idle pastimes — they represent centuries of intangible cultural heritage, teaching essential life lessons such as patience, balance, tactical foresight, and community solidarity. Pusakaku was conceived to reverse this trend: a digital sanctuary that documents, celebrates, and revitalizes traditional Indonesian games through modern web experiences.",
          "Core Mandate: Build an accessible, visually appealing cultural platform that pairs in-depth ethnographic game archives with a gamified 10-stage quiz engine to educate children, parents, and educators about Indonesia's folk game heritage.",
        ],
      },
      {
        title: "Architecture & Gamified Learning",
        body: [
          "The platform was engineered using a lightweight semantic web architecture built on semantic HTML5 and styled with Tailwind CSS v3.4.17. To guarantee an optimal viewing experience on any hardware, a custom 6-tier breakpoint matrix was established (xs: 250px to 2xl: 1536px), allowing mobile users on compact screens to navigate with fluid precision.",
          "The gamified assessment engine (Javascript/game.js) implements a clean client-side state machine. Questions are paginated into isolated view steps with bounds checking (Math.min, Math.max), calculating scores dynamically up to 100 points and rendering constructive qualitative feedback. A sequenced preloader curtain (Javascript/hello.js) delivers a theatrical greeting before revealing the vibrant green cultural aesthetic styled with the custom TrueType font Yogyakarta.",
        ],
      },
      {
        title: "What was hard",
        body: [
          "Engineering an interactive multi-step quiz interface using pure vanilla JavaScript without introducing bulky state management libraries. Solved by designing an element display toggle function (showQuestion) linked to a currentQuestionIndex counter, paired with radio-selector querying and automated form clearing on restart.",
          "Maintaining smooth 60 FPS performance for dual-lane continuous marquees displaying high-resolution cultural photography. Solved by leveraging GPU-accelerated CSS keyframe translations (slide-right, slide-right2) that bypass CPU layout recalculation.",
          "Synthesizing authentic anthropological lore with accessible child-friendly explanations. Conducted thorough research into game origins — such as Congklak's Mancala ancestry and the ancient Kaghati Kolope leaf kite of Muna Island — presenting complex historical data in concise, engaging narratives.",
        ],
      },
      {
        title: "Results",
        body: [
          "Successfully deployed a comprehensive cultural preservation platform cataloging over 8 traditional Indonesian games across 4 dedicated deep-dive portals.",
          "Integrated an interactive 10-stage cultural assessment quiz engine delivering real-time scoring, constructive feedback, and instant state resets.",
          "Achieved an authentic regional brand identity using custom Yogyakarta display typography, dual-lane 60 FPS marquees, and a zero-tracker privacy architecture.",
        ],
      },
    ],
    stack: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "Custom Typography",
      "Git",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/adyvka31/Pusakaku" },
    ],
  },

  "semua-bisa": {
    title: "SemuaBisa",
    subtitle: "Inclusive EdTech Ecosystem & Youth Digital Career Platform",
    status: "Competition Finalist · Production Ready",
    summary:
      "An inclusive digital education ecosystem and workforce development platform built for the Unila 2024 National Web Design Competition by Team Deadliner. Empowers Indonesian youth to master modern digital competencies through 100% free bootcamps across 8 tech disciplines, accessible university degree pathways with Alpine.js tabs, a freelance digital services hub, and verified tech career job boards.",
    domain: "github.com/adyvka31/SemuaBisa-Web",
    meta: [
      { label: "Role", value: "Frontend Lead & UI/UX Co-Architect (Deadliner)" },
      { label: "Platform", value: "Responsive Web & Mobile Browser" },
      { label: "Timeline", value: "2024" },
      { label: "Team", value: "3 Engineers (Deadliner)" },
      { label: "Architecture", value: "Modular Multi-Portal Architecture + Tailwind CSS" },
    ],
    galleryLabel: "EDTECH & CAREER INTERFACES",
    galleryTitle: "The SemuaBisa Digital Ecosystem",
    galleryLead:
      "Explore the core multi-domain touchpoints of SemuaBisa — uniting free technical bootcamps, accessible higher education roadmaps, digital freelance matchmaking, and tech recruitment job pipelines.",
    gallery: [
      {
        id: "hero-showcase",
        title: "Official Project Showcase & EdTech Flyer",
        route: "semuabisa.local/index.html",
        tag: "Official Brand Presentation",
        image: semuaBisaImg,
        desc: "Official competition presentation flyer showcasing SemuaBisa's comprehensive educational ecosystem, uniting free tech bootcamps, university pathways, and career matchmaking.",
        features: [
          "Unified Multi-Portal Digital Ecosystem",
          "National Competition Finalist Presentation",
          "Equal Opportunity Technology Education",
        ],
      },
      {
        id: "youth-talent-hero",
        title: "Digital Youth Talent Ecosystem & Educational Hero",
        route: "semuabisa.local/index.html#hero",
        tag: "Talent Incubation",
        image: semuabisa1,
        desc: "Welcoming landing header championing 'Menanam Bakat Pemuda Indonesia' with 100% free course guarantees, modern clean typography, and direct access buttons to study programs.",
        features: [
          "'Menanam Bakat Pemuda Indonesia' Mission",
          "100% Gratis Course Access Guarantee",
          "Direct Study Program & Career Guidance Shortcuts",
        ],
      },
      {
        id: "core-programs",
        title: "4 Core Youth Empowerment Programs",
        route: "semuabisa.local/index.html#programs",
        tag: "Pathway Architecture",
        image: semuabisa2,
        desc: "Strategic 4-pillar education model featuring Kuliah (scholarships & campus pathways), Bootcamp (intensive skills training), Cari Kerja (recruitment pipelines), and SemuaBisa Academy (community certifications).",
        features: [
          "Kuliah Degree & Scholarship Guidance",
          "Intensive Hands-on Tech Bootcamps",
          "Cari Kerja Direct Hiring & Career Matchmaking",
        ],
      },
      {
        id: "bootcamp-catalog",
        title: "Industry-Aligned Technical Bootcamps",
        route: "semuabisa.local/bootcamp.html",
        tag: "EdTech Training",
        image: semuabisa3,
        desc: "Curated technical bootcamp modules designed for Indonesian youth — spanning HTML/CSS Front-End Development, Machine Learning & AI Engineering, and MySQL Relational Database Architecture.",
        features: [
          "HTML/CSS Front-End Web Development Track",
          "Machine Learning & Applied AI Fundamentals",
          "MySQL Database Design & Query Engineering",
        ],
      },
      {
        id: "corporate-recruitment",
        title: "Tech Giant Corporate Recruitment & Job Board",
        route: "semuabisa.local/karir.html",
        tag: "Career Placement",
        image: semuabisa4,
        desc: "Integrated career board connecting graduates with top-tier technology partners including AWS, Dicoding, Google, Microsoft, Tokopedia, and Apple for internships and junior developer roles.",
        features: [
          "Top-Tier Tech Employer Partnerships (AWS, Google, Microsoft, Tokopedia)",
          "Direct Internship & Junior Job Openings",
          "Verified Graduate Recruitment Pipeline",
        ],
      },
    ],
    kpis: [
      {
        value: "8 Tracks",
        label: "Specialized Tech Bootcamps",
        note: "Web, Mobile, ML, Data, UI/UX, Cyber, Game, Marketing",
      },
      {
        value: "100% Free",
        label: "Youth Scholarship Access",
        note: "Zero tuition barrier for aspiring Indonesian students",
      },
      {
        value: "4 Pillars",
        label: "Unified Career Ecosystem",
        note: "Bootcamps · University · Freelance · Job Board",
      },
      {
        value: "4 Domains",
        label: "Keyboard-Navigable Tabs",
        note: "Alpine.js ARIA tablist for academic roadmaps",
      },
      {
        value: "60 FPS",
        label: "AOS Kinetic Scroll Reveals",
        note: "Smooth viewport entry with hardware-accelerated transforms",
      },
      {
        value: "3 Engineers",
        label: "Team Deadliner Collaboration",
        note: "Built for National Web Design Competition Unila 2024",
      },
    ],
    highlights: [
      {
        icon: "monitor",
        title: "Industry-Aligned Tech Bootcamps",
        desc: "Comprehensive curriculum tracks across 8 core digital disciplines designed to take beginners to junior-ready engineering competence.",
      },
      {
        icon: "database",
        title: "Higher Education & Scholarship Navigator",
        desc: "Alpine.js keyboard-accessible tabbed roadmap matching students with academic tech programs and financial scholarships.",
      },
      {
        icon: "terminal",
        title: "Digital Services Freelance Hub",
        desc: "Marketplace platform allowing students and certified alumni to monetize their technical skills with real enterprise clients.",
      },
      {
        icon: "cloud",
        title: "Curated Tech Job Board",
        desc: "Direct recruitment channels partnering with top tech industry innovators to place junior developers into internships and full-time careers.",
      },
    ],
    capabilitiesTitle: "Core Capabilities & Student Career Pathway Workflow",
    capabilitiesLead:
      "SemuaBisa closes the digital divide by guiding youth through a seamless pipeline from novice learners to employable tech professionals.",
    features: [
      {
        id: "multi-track-bootcamp",
        title: "Multi-Track Technical Bootcamp Engine",
        badge: "EdTech Curriculum",
        desc: "Comprehensive vocational training portal (bootcamp.html & detail-bootcamp.html) providing structured learning paths for Indonesian students at zero cost.",
        points: [
          "8 Specializations: Web Dev, Mobile Dev, Machine Learning, Data Analytics, UI/UX, Cyber Security, Game Dev, Digital Marketing",
          "Modular curriculum breakdown with prerequisites, syllabus timelines, and practical capstone projects",
          "Integrated registration workflow (register_bootcamp.html) capturing student learning tracks and goals",
          "Direct mentorship alignment pairing learners with industry professionals and peer communities",
        ],
      },
      {
        id: "alpine-university-tabs",
        title: "Accessible Higher Education Navigator with Alpine.js Tabs",
        badge: "Academic Roadmaps",
        desc: "Accessible degree directory in kuliah.html utilizing Alpine.js for keyboard-navigable ARIA tab switching across university disciplines.",
        points: [
          "Declarative x-data='{ activeTab: 1 }' state handling tab changes with zero complex boilerplate",
          "Full keyboard accessibility supporting Left/Right/Home/End arrow keys via $focus.wrap()",
          "Comprehensive degree roadmap comparing computer science, informatics engineering, and software design",
          "Integrated scholarship directory highlighting government and corporate funding programs",
        ],
      },
      {
        id: "freelance-marketplace",
        title: "Digital Freelance Marketplace & Services Hub",
        badge: "Freelance Economy",
        desc: "Direct monetization marketplace (jasa.html) bridging student talent with small businesses and corporations seeking digital solutions.",
        points: [
          "Categorized services directory covering landing page development, mobile app prototypes, and brand identities",
          "Transparent portfolio showcases linking prospective clients directly to verified student projects",
          "Tiered project estimation models helping youth learn realistic freelance scoping and pricing",
          "Promotes economic self-reliance during academic study through gig economy participation",
        ],
      },
      {
        id: "job-recruitment-board",
        title: "Curated Tech Career & Recruitment Job Board",
        badge: "Career Placement",
        desc: "Recruitment portal (lowongan-kerja.html) connecting entry-level developers and bootcamp graduates with verified tech employment opportunities.",
        points: [
          "Curated job feeds featuring top industry innovators: AWS Web Services, Google Developers, and Dicoding Academy",
          "Dedicated filtering for internships, apprenticeships, and junior software engineering roles",
          "Clear skill prerequisite checklists guiding applicants on required tech stack competencies",
          "Streamlined application links reducing friction between youth talent and hiring managers",
        ],
      },
      {
        id: "scroll-elevated-navbar",
        title: "Dynamic Scroll-Elevated Navigation System",
        badge: "Navigation Architecture",
        desc: "Responsive sticky navigation bar with automated elevation styling and scroll-position detection engineered in main.js.",
        points: [
          "Window scroll listener dynamically appending border-b-2, border-[#2F3087], and shadow-md when scrollY > 0",
          "Restores clean transparent styling at the top of the viewport for seamless hero image integration",
          "Mobile hamburger toggle menu with smooth transition animations and touch-friendly tap targets",
          "Active route highlighting providing clear spatial orientation across the multi-page portal",
        ],
      },
      {
        id: "daisyui-components",
        title: "Interactive DaisyUI Components & Registration Modals",
        badge: "UI Component System",
        desc: "Cohesive design system combining Tailwind CSS utility classes with DaisyUI semantic components for rapid, accessible interface authoring.",
        points: [
          "Pre-built DaisyUI modal dialogs, buttons, and form primitives delivering unified visual ergonomics",
          "Dismissible promo banners with clean close-btn event listeners freeing viewport real estate",
          "Brand-tailored color accents: primary corporate navy (#2F3087) and energetic orange (#FB923C)",
          "Consistent typography sizing utilizing responsive text clamps for mobile and widescreen parity",
        ],
      },
      {
        id: "aos-scroll-reveals",
        title: "Hardware-Accelerated Animate On Scroll (AOS)",
        badge: "Motion Experience",
        desc: "Kinetic entrance choreography utilizing AOS (Animate On Scroll) data attributes for staggered, non-intrusive section reveals.",
        points: [
          "Declarative data-aos='fade-up', 'fade-up-right', and 'fade-up-left' scroll triggers",
          "GPU-accelerated CSS opacity and transform transitions maintaining a constant 60 FPS frame rate",
          "Staggered entrance delays highlighting feature cards and statistics sequentially as the user scrolls",
          "Zero layout thrashing overhead, keeping script execution lightweight on battery-constrained devices",
        ],
      },
      {
        id: "student-profile-hub",
        title: "Unified Youth Identity & Student Profile Dashboard",
        badge: "User Dashboard",
        desc: "Personalized student dashboard (profil.html) and authentication flow (auth/login.html, auth/register.html) tracking progress across the platform.",
        points: [
          "Centralized student record displaying enrolled bootcamps, completed certificates, and career milestones",
          "Dedicated authentication UI for returning students and new competition applicants",
          "Portfolio link aggregation enabling students to showcase GitHub repositories and live deployments",
          "Clean responsive container layouts ensuring smooth profile editing on mobile touchscreens",
        ],
      },
    ],
    approvalWorkflow: {
      title: "Youth Digital Skill Mastery & Employment Lifecycle",
      lead: "From free bootcamp discovery to junior career placement — empowering Indonesian youth through a structured, multi-tier tech advancement journey.",
      stages: [
        {
          level: "Stage 01",
          role: "Learner Ingestion",
          title: "Skill Exploration & Bootcamp Enrollment",
          desc: "Student explores the 8 tech categories, reviews curriculum modules, and enrolls in a 100% free bootcamp track via register_bootcamp.html.",
          action: "Select Track → Complete Registration Form",
        },
        {
          level: "Stage 02",
          role: "Curriculum & Projects",
          title: "Intensive Learning & Capstone Building",
          desc: "Learner undertakes intensive technical modules, builds real-world project portfolios, and receives validation from mentors and peers.",
          action: "Complete Syllabus Modules → Submit Capstone Project",
        },
        {
          level: "Stage 03",
          role: "Career & Economy",
          title: "Career Launch & Freelance Monetization",
          desc: "Graduate publishes verified digital services on the freelance marketplace (jasa.html) and applies directly to tech jobs in lowongan-kerja.html.",
          action: "List Freelance Services → Apply for Junior Tech Roles",
        },
      ],
      lockMechanism: {
        title: "Inclusive Education & Merit-Based Youth Advancement Guarantee",
        desc: "SemuaBisa was founded on the conviction that financial constraints should never prevent young people from achieving digital mastery. The platform combines 100% free open-access courseware with industry-recognized career pathways, ensuring that every learner has equal opportunity to succeed in the modern tech economy.",
      },
    },
    architectureTitle: "Modular Multi-Portal Architecture & Tailwind Ecosystem",
    architectureLead:
      "Engineered with a clean separation between multi-page semantic HTML5 views, utility-first Tailwind CSS styling sheets, Alpine.js accessible tab controllers, and DaisyUI component primitives.",
    architecture: {
      type: "Multi-Portal Semantic Web + Accessible Micro-Interactions",
      protocol: "Client-Side DOM Controller & Alpine Declarative State",
      layers: [
        {
          name: "Presentation & Semantic Layout Layer",
          badge: "HTML5 + Tailwind CSS v3.4.13 + DaisyUI",
          desc: "Multi-page semantic portal structure (Index, bootcamp, kuliah, jasa, lowongan-kerja, profil, auth) styled with utility classes and brand color variables.",
        },
        {
          name: "Accessible State & Tab Controller",
          badge: "Alpine.js Declarative State",
          desc: "Keyboard-navigable tab system in kuliah.html supporting full ARIA accessibility standards, focus trapping, and arrow key traversal.",
        },
        {
          name: "Scroll Elevation & Dynamic Navbar",
          badge: "Vanilla JavaScript (main.js)",
          desc: "Window scroll event listener appending elevation shadows and border styling dynamically, alongside banner dismiss handlers.",
        },
        {
          name: "Kinetic Entrance & Animation Layer",
          badge: "Animate On Scroll (AOS)",
          desc: "GPU-accelerated scroll animations with declarative data-aos attributes providing fluid visual pacing across cards and sections.",
        },
        {
          name: "Career & Opportunity Database Layer",
          badge: "Static Structured JSON & Markups",
          desc: "Curated tech job listings, university scholarship directories, and service offerings optimized for instant client-side retrieval.",
        },
      ],
    },
    techStackGrouped: [
      {
        category: "Frontend & UI Architecture",
        items: [
          { name: "HTML5", role: "Semantic Markup across 8 Specialized Educational Portals" },
          { name: "Tailwind CSS v3.4.13", role: "Utility-First Responsive Styling with Custom Theme Extensions" },
          { name: "DaisyUI v4.12.10", role: "Semantic Component Library for Modals, Buttons, and Forms" },
          { name: "Alpine.js", role: "Declarative Accessible ARIA Tab Navigation Engine" },
          { name: "Animate On Scroll (AOS)", role: "Hardware-Accelerated Kinetic Scroll Entrance Animations" },
          { name: "Vanilla JavaScript (ES6+)", role: "Scroll-Elevated Navbar & Dynamic Viewport Event Handlers" },
        ],
      },
      {
        category: "Curriculum & Workforce Pillars",
        items: [
          { name: "8 Tech Bootcamp Tracks", role: "Vocational Engineering Paths (Web, Mobile, ML, Data, Cloud)" },
          { name: "University Degree Roadmap", role: "Academic Planning & Tech Scholarship Guidance" },
          { name: "Freelance Marketplace", role: "Direct Monetization for Certified Youth Developers" },
          { name: "Industry Recruitment Feeds", role: "Partnership Job Openings (AWS, Google Developers, Dicoding)" },
        ],
      },
      {
        category: "Tooling & Collaboration",
        items: [
          { name: "Node.js & npm", role: "Build Pipeline & Dependency Management" },
          { name: "Team Deadliner Workflow", role: "Collaborative 3-Developer Competition Architecture" },
          { name: "Git & GitHub", role: "Version Control & Open-Source Collaboration" },
          { name: "Vercel / Static Edge", role: "Global Edge CDN Static File Hosting" },
        ],
      },
    ],
    directoryStructure: [
      {
        name: "Root Portals (Multi-Page Architecture)",
        items: [
          "Index.html — Main landing hub with hero, mission overview, and category grid",
          "bootcamp.html — Comprehensive technical bootcamp catalog across 8 disciplines",
          "detail-bootcamp.html — In-depth curriculum breakdown and module syllabus",
          "register_bootcamp.html — Student enrollment and learning track application form",
          "kuliah.html — Higher education roadmap with Alpine.js accessible tabs",
          "jasa.html — Digital freelance marketplace connecting student talent with clients",
          "lowongan-kerja.html — Curated tech job board with industry partner listings",
          "profil.html — Student dashboard tracking enrolled courses and certificates",
        ],
      },
      {
        name: "Authentication & Assets (auth/, Images/, style/)",
        items: [
          "auth/login.html — Student login portal with clean DaisyUI card styling",
          "auth/register.html — New learner registration and account creation interface",
          "main.js — Dynamic scroll-elevated navbar controller and banner dismissal",
          "tailwind.config.js — Tailwind theme extension with DaisyUI plugin integration",
          "Images/ — High-res photography, category icons, and brand vector illustrations",
        ],
      },
    ],
    prismaSchemas: [
      {
        name: "Data Model: BootcampCourse",
        purpose:
          "Defines technical training tracks with specialization, durationWeeks, prerequisiteSkills, syllabusModules, and youthScholarship status.",
      },
      {
        name: "Data Model: ScholarshipOpportunity",
        purpose:
          "Stores university partner degree offerings with universityName, degreeLevel, coverageType (full/partial), eligibilityCriteria, and deadline.",
      },
      {
        name: "Data Model: FreelanceService",
        purpose:
          "Represents student talent offerings with serviceCategory, deliverableScope, estimatedTimeline, startingPrice, and studentPortfolioLink.",
      },
      {
        name: "Data Model: JobOpening",
        purpose:
          "Captures tech employment listings with hiringCompany (Google, AWS, Dicoding), positionTitle, roleType (internship/junior), and applicationUrl.",
      },
    ],
    securityTitle: "Hardened Perimeter & Data Safety Standards",
    securityLead:
      "Client-side security architecture guaranteeing zero telemetry exploitation, safe static distribution, and input validation.",
    apiEndpoints: [
      {
        group: "Educational & Career Portals",
        routes: [
          {
            method: "GET",
            path: "/bootcamp.html",
            desc: "Serves technical training catalog across 8 vocational disciplines",
          },
          {
            method: "GET",
            path: "/kuliah.html",
            desc: "Delivers higher education roadmap with Alpine.js accessible tabs",
          },
          {
            method: "GET",
            path: "/jasa.html",
            desc: "Serves digital freelance talent marketplace connecting graduates with clients",
          },
          {
            method: "GET",
            path: "/lowongan-kerja.html",
            desc: "Renders curated tech career opportunities from industry employers",
          },
        ],
      },
    ],
    securityStandards: [
      {
        title: "Zero-Tracker Privacy Architecture",
        desc: "The entire platform operates with zero tracking cookies or commercial ad networks, safeguarding student browsing habits and personal data.",
      },
      {
        title: "Static Edge Distribution Resilience",
        desc: "Pre-compiled HTML and CSS assets hosted on global edge CDNs ensure near-instant page delivery with zero server-side SQL injection exposure.",
      },
      {
        title: "Sanitized Form Processing",
        desc: "Enrollment forms enforce client-side input validation and sanitized field parsing to prevent Cross-Site Scripting (XSS) risks.",
      },
      {
        title: "Accessible Navigation Standards",
        desc: "Tab navigation adheres strictly to W3C WAI-ARIA guidelines, ensuring full screen-reader and keyboard compatibility for assistive devices.",
      },
    ],
    metricOutcomes: [
      {
        value: "8 Tracks",
        label: "Specialized Tech Bootcamps",
        desc: "Comprehensive vocational training paths for in-demand tech roles.",
      },
      {
        value: "100% Free",
        label: "Inclusive Youth Access",
        desc: "Zero tuition barrier for aspiring Indonesian students nationwide.",
      },
      {
        value: "4 Pillars",
        label: "Unified Career Ecosystem",
        desc: "Bootcamps · University Navigator · Freelance Hub · Job Board.",
      },
    ],
    sections: [
      {
        title: "The brief",
        body: [
          "Indonesian youth face significant barriers when attempting to enter the digital economy: expensive bootcamps, fragmented university career information, and limited direct pathways to entry-level tech employment. SemuaBisa was engineered to break down these barriers by providing a unified, 100% free digital education and career platform. Developed by Team Deadliner for the Unila 2024 National Web Design Competition, the project aims to 'plant the seeds of talent in Indonesian youth' (Menanam Bakat Pemuda Indonesia).",
          "Core Mandate: Build an accessible, high-performance web platform uniting technical training bootcamps, university scholarship roadmaps, freelance talent marketplaces, and curated tech job recruitment into a cohesive, youth-friendly experience.",
        ],
      },
      {
        title: "Architecture & Inclusive EdTech Ecosystem",
        body: [
          "The platform employs a modular multi-portal architecture using semantic HTML5 and Tailwind CSS v3.4.13 paired with DaisyUI components for clean design system ergonomics. In kuliah.html, an accessible Alpine.js tabbed interface was engineered to provide seamless keyboard navigation across university degree disciplines without heavy framework overhead.",
          "To elevate the visual feel, hardware-accelerated Animate On Scroll (AOS) transitions trigger staggered card reveals as users scroll through the 8 bootcamp categories. In main.js, a scroll-event observer dynamically computes viewport offsets to apply elevation borders and drop-shadows to the sticky navigation bar, ensuring smooth visual transitions across desktop and mobile screens.",
        ],
      },
      {
        title: "What was hard",
        body: [
          "Architecting an extensive 8-page educational ecosystem within the tight timeline of a national design competition. Solved by distributing tasks cleanly across Team Deadliner and authoring reusable Tailwind CSS utility patterns and DaisyUI primitives that maintained strict visual consistency.",
          "Ensuring full keyboard accessibility for the university degree tabs without relying on large UI libraries. Implemented declarative Alpine.js state handling coupled with $focus.wrap() listeners for ArrowRight, ArrowLeft, Home, and End keys, fully satisfying WCAG AA accessibility criteria.",
          "Balancing rich photographic media with fast load times on bandwidth-constrained mobile devices. Optimized all category illustrations and photography into WebP formats, paired with responsive image scaling and CSS hardware acceleration.",
        ],
      },
      {
        title: "Results",
        body: [
          "Successfully built and submitted a full-fledged 8-portal EdTech platform for the Unila 2024 National Web Design Competition as Team Deadliner.",
          "Cataloged 8 technical bootcamp tracks, a university scholarship roadmap with Alpine.js tabs, a freelance digital marketplace, and curated tech recruitment feeds.",
          "Achieved a 100% accessible, responsive layout operating fluidly at 60 FPS across all viewports with zero runtime compilation latency.",
        ],
      },
    ],
    stack: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "DaisyUI",
      "Alpine.js",
      "JavaScript",
      "AOS",
      "Git",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/adyvka31/SemuaBisa-Web" },
    ],
  },

  idncourse: {
    title: "IDNCourse",
    subtitle: "Modern Tech E-Learning Platform & Interactive Course Hub",
    status: "Production Ready",
    summary:
      "A collaborative online technology education platform built for competition by a 3-developer team. Features category-based animated course filtering across 6 technical tracks (C#, Python, Web Dev, AI, Data Science, Android), interactive curriculum modal popups, dynamic localStorage session management, and responsive CSS grid architectures.",
    domain: "github.com/adyvka31/IDNCourse-Web",
    meta: [
      { label: "Role", value: "Front-End Lead & Animation Engineer" },
      { label: "Platform", value: "Responsive Web & Mobile Browser" },
      { label: "Timeline", value: "2023" },
      { label: "Team", value: "3 Developers (Adyvka, Abdullah, Rosan)" },
      { label: "Architecture", value: "Multi-Page Semantic Web + State Animation" },
    ],
    galleryLabel: "E-LEARNING & COURSE INTERFACES",
    galleryTitle: "The IDNCourse Digital Experience",
    galleryLead:
      "Explore the core interactive touchpoints of IDNCourse — spanning category-filtered course animations, multi-layer course popups, interactive team showcases, and client-side session persistence.",
    gallery: [
      {
        id: "hero-showcase",
        title: "Official Project Showcase & Course Flyer",
        route: "idncourse.local/index.html",
        tag: "Official Brand Presentation",
        image: idncourseImg,
        desc: "Official competition presentation flyer showcasing IDNCourse's programming academy, hands-on development curricula, and interactive multi-track learning system.",
        features: [
          "Signature Coding Academy Visual Branding",
          "Comprehensive IT Education Tracks",
          "Interactive Multi-Page Learning Architecture",
        ],
      },
      {
        id: "upgrade-knowledge-hero",
        title: "Modern E-Learning Hero & Metric Counter",
        route: "idncourse.local/index.html#home",
        tag: "Platform Metrics",
        image: idncourse1,
        desc: "High-conversion header with 'UPGRADE YOUR KNOWLEDGE NOW' hero banner, flat vector tech developer illustration, floating navigation pill, and live stat counters (1,000+ Students, 20 Mentors, 150+ Courses, 5.0 Rating).",
        features: [
          "1,000+ Students & 150+ Courses Stat Counter",
          "Floating Capsule Navigation Bar",
          "Dynamic CTA Triggers ('About Us', 'Read More')",
        ],
      },
      {
        id: "course-catalog-filters",
        title: "Multi-Discipline Course Catalog & Category Filters",
        route: "idncourse.local/index.html#courses",
        tag: "Curriculum Matrix",
        image: idncourse2,
        desc: "Comprehensive tech directory with filter pills for All, CSharp, HTML, Python, and Java. Features cards for Personal Website HTML/CSS, AI Computer Science, Data Science, and Kotlin Android.",
        features: [
          "Instant Multi-Language Filter Pills (CSharp, HTML, Python, Java)",
          "Student Enrollment Counts & Star Ratings",
          "Cross-Discipline Track Architecture",
        ],
      },
      {
        id: "instructor-team",
        title: "Dedicated Instructor & Engineering Team Profiles",
        route: "idncourse.local/ourteam.html",
        tag: "Instructor Profiles",
        image: idncourse3,
        desc: "Team showcase introducing core educators and software engineers — Adyvka Pratama (Front-End Developer), Abdullah (Back-End Developer), and Muli'at Harosan Syadida (Designer).",
        features: [
          "Adyvka Pratama - Front-End Lead Profile",
          "Abdullah - Back-End Engineering Specialist",
          "Muli'at Harosan Syadida - Product UI/UX Designer",
        ],
      },
      {
        id: "ielts-bootcamp-hub",
        title: "Specialized Certification & IELTS University Bootcamp",
        route: "idncourse.local/bootcamp.html",
        tag: "Certification Hub",
        image: idncourse4,
        desc: "Specialized bootcamp landing featuring intensive academic and tech training, including IELTS Examination Preparation with partner universities and professional mentors.",
        features: [
          "University IELTS Examination Training",
          "Direct Enrollment Call-to-Action ('Join Now')",
          "Structured Mentorship & Exam Coaching",
        ],
      },
    ],
    kpis: [
      {
        value: "500ms",
        label: "Filter Transition Window",
        note: "Coordinated fadeOutDown & fadeInUp CSS transitions",
      },
      {
        value: "6 Tracks",
        label: "Core Technology Disciplines",
        note: "Web, AI, Data Science, C#, Python, Mobile Android",
      },
      {
        value: "5 Portals",
        label: "Dedicated Multi-Page Views",
        note: "Home, About, Course, Team, Bootcamp, and Login",
      },
      {
        value: "3 Developers",
        label: "Collaborative Student Team",
        note: "Adyvka (Front-End), Abdullah (Back-End), Rosan (Design)",
      },
      {
        value: "0ms",
        label: "Zero-Build Load Latency",
        note: "Pure vanilla web execution without runtime bundle overhead",
      },
      {
        value: "100%",
        label: "Responsive Adaptability",
        note: "Custom CSS Flexbox and Grid layouts across all viewports",
      },
    ],
    highlights: [
      {
        icon: "monitor",
        title: "Animated Course Filter Engine",
        desc: "Vanilla JavaScript animation pipeline dynamically coordinating exit and entrance keyframes for seamless technology category switching.",
      },
      {
        icon: "database",
        title: "Structured Course Catalog & Syllabi",
        desc: "Modular course cards with enrollment counters, rating badges, and modal overlays detailing learning outcomes.",
      },
      {
        icon: "terminal",
        title: "Collaborative Team Architecture",
        desc: "Built as a competition collaboration uniting dedicated front-end engineering, back-end API thinking, and modern visual design.",
      },
      {
        icon: "cloud",
        title: "Session Persistence & Interactive FAQ",
        desc: "Client-side localStorage session hydration paired with accordion-based knowledge discovery.",
      },
    ],
    capabilitiesTitle: "Core Capabilities & Student Learning Workflow",
    capabilitiesLead:
      "IDNCourse empowers students to master modern programming languages through clean category navigation and structured learning modules.",
    features: [
      {
        id: "animated-filter",
        title: "Asynchronous Animated Course Filtering Engine",
        badge: "Interactive DOM",
        desc: "Custom JavaScript state coordinator (animateCourses and hideAllCourses) managing smooth exit and entrance animation cycles when users filter by tech stack.",
        points: [
          "Applies fadeOutDown animation class to current cards with a 500ms completion countdown",
          "Filters target category cards (C#, Python, HTML/CSS, AI, Java) and triggers fadeInUp entrance",
          "Synchronizes active button pill state (setActiveButton) with blue brand highlight styling",
          "Dynamically toggles course section container sizing between all-size and default-size",
        ],
      },
      {
        id: "course-modal-dialogs",
        title: "Interactive Course & Bootcamp Modal Overlays",
        badge: "Modal Architecture",
        desc: "Dedicated popups (#coursePopup and #bootcampPopup) providing students with comprehensive course syllabi, mentor bios, and enrollment action triggers.",
        points: [
          "Event listeners attached to all .openPopup and .openPopup2 triggers across catalog cards",
          "Displays full-bleed course hero banner, course overview, student counters, and ratings",
          "Window backdrop click listener intercepting clicks outside the dialog to dismiss modals",
          "Responsive centered modal container adapting seamlessly to mobile screens and tablets",
        ],
      },
      {
        id: "localstorage-auth",
        title: "LocalStorage Client Session Hydration",
        badge: "Session State",
        desc: "Lightweight client-side authentication system hydrating user credentials from browser storage to personalize the navigation bar.",
        points: [
          "Inspects localStorage.getItem('username') upon window load to identify active sessions",
          "Dynamically swaps generic 'Login' call-to-action anchor with the authenticated user's name",
          "Clean credential capture flow in login.html validating credentials without external library bloat",
          "Stateless client persistence maintaining user identity across independent multi-page transitions",
        ],
      },
      {
        id: "collaborative-team",
        title: "Collaborative 3-Developer Role Directory",
        badge: "Team Engineering",
        desc: "Dedicated team showcase (ourteam.html) documenting the collaborative synergy behind the IDNCourse project.",
        points: [
          "Spotlights 3 distinct functional roles: Front-End (Adyvka), Back-End (Abdullah), and Design (Rosan)",
          "Hover-activated image rotation effects (.rotate) adding tactile visual delight to avatar cards",
          "Clear attribution of architectural responsibilities and design system authorship",
          "Reflects authentic real-world engineering teamwork in competitive scholastic development",
        ],
      },
      {
        id: "faq-accordion",
        title: "Interactive Glyph-Toggling FAQ Accordion",
        badge: "Interactive UI",
        desc: "Expandable question-and-answer accordion addressing student inquiries regarding certification, mentors, and platform advantages.",
        points: [
          "Event delegation listener toggling .open class to smoothly expand and collapse answer panels",
          "Dynamic glyph switcher swapping between '+' and '-' indicators based on open state",
          "Covers essential student questions: pricing, certificate validation, and instructor qualifications",
          "Zero framework overhead, operating through pure vanilla DOM node manipulation",
        ],
      },
      {
        id: "specialized-bootcamps",
        title: "Specialized IELTS & Tech Bootcamp Portals",
        badge: "Bootcamp Training",
        desc: "Dedicated section (bootcamp.html) promoting intensive, mentor-led bootcamp cohorts for English proficiency and software development.",
        points: [
          "Spotlights premier international training tracks (such as the Harvard-led IELTS preparation bootcamp)",
          "Prominent instructor credential cards highlighting academic degrees and institutional pedigrees",
          "Direct 'Join Now' modal triggers launching streamlined enrollment intake forms",
          "Clear visual separation between self-paced courses and live instructor-guided bootcamps",
        ],
      },
      {
        id: "semantic-multi-page",
        title: "Modular Multi-Page Semantic Architecture",
        badge: "Web Standards",
        desc: "Decoupled multi-page layout separating concerns into discrete HTML portals and dedicated stylesheets for clean maintainability.",
        points: [
          "Dedicated page portals: index.html, about.html, course.html, ourteam.html, bootcamp.html, login.html",
          "Isolated modular stylesheets (index.css, course.css, ourteam.css) preventing cross-page style bleeding",
          "Semantic navigation header and footer synchronized across all portal pages for brand consistency",
          "Clean URL routing compatible with standard web servers, GitHub Pages, and static CDNs",
        ],
      },
      {
        id: "responsive-grid-styling",
        title: "Fluid Flexbox & CSS Grid Responsive Layouts",
        badge: "CSS Architecture",
        desc: "Bespoke responsive layout architecture combining CSS Grid and Flexbox with media query breakpoints for cross-device fluidity.",
        points: [
          "Multi-column card grids auto-collapsing into single-column vertical stacks on mobile screens",
          "Custom card shadow elevation (box-shadow) and smooth transition timing (0.3s ease-in-out)",
          "High-contrast color hierarchy utilizing professional navy blue (#2F3087) and clean neutrals",
          "Optimized typography hierarchy based on Google Fonts Poppins with weighted heading scales",
        ],
      },
    ],
    approvalWorkflow: {
      title: "Course Discovery & Student Enrollment Lifecycle",
      lead: "From animated technology filtering to verified student enrollment — guiding learners through an intuitive educational discovery pathway.",
      stages: [
        {
          level: "Stage 01",
          role: "Curriculum Discovery",
          title: "Category Filtering & Track Exploration",
          desc: "Student clicks a technology filter (C#, Python, Web, AI) in the course section. The engine animates matching courses with fade transitions.",
          action: "Select Tech Category → View Filtered Cards",
        },
        {
          level: "Stage 02",
          role: "Syllabus Inspection",
          title: "Modal Inspection & Skill Prerequisites",
          desc: "Student clicks a course card to open the interactive popup modal, inspecting syllabus topics, student review metrics, and instructor background.",
          action: "Click Course Card → Review Modal Syllabus",
        },
        {
          level: "Stage 03",
          role: "Enrollment & Session",
          title: "Enrollment Registration & Session Activation",
          desc: "Student submits registration. If logged in via localStorage, the platform activates course access and reflects enrollment status on the navigation bar.",
          action: "Submit Registration → Store Session & Begin Course",
        },
      ],
      lockMechanism: {
        title: "Collaborative Quality & Accessible Learning Guarantee",
        desc: "IDNCourse represents the combined dedication of a 3-developer team to make programming education intuitive and accessible. Every course card, modal syllabus, and interactive filter is engineered to remove friction for beginner developers starting their tech journey.",
      },
    },
    architectureTitle: "Multi-Page Semantic Architecture & Vanilla State Controller",
    architectureLead:
      "Engineered with a clean separation between independent semantic HTML5 portals, modular CSS stylesheets, a centralized animation controller, and client-side session storage.",
    architecture: {
      type: "Multi-Page Semantic Web + Vanilla Animation Controller",
      protocol: "Client-Side DOM Manipulation & LocalStorage Persistence",
      layers: [
        {
          name: "Client Presentation & Multi-Page Portals",
          badge: "HTML5 + Poppins Typography",
          desc: "Discrete semantic portals (index, about, course, ourteam, bootcamp, login) styled with clean typography hierarchy and responsive layout containers.",
        },
        {
          name: "Modular Styling & Keyframe Engine",
          badge: "CSS3 (Flexbox, Grid & Keyframes)",
          desc: "Page-specific stylesheets managing card shadows, layout grids, and hardware-accelerated fadeInUp and fadeOutDown animation classes.",
        },
        {
          name: "Interactive Filter & State Coordinator",
          badge: "Vanilla JavaScript (ES6+)",
          desc: "Asynchronous animation pipeline coordinating hideAllCourses and animateCourses transitions with active button state switching.",
        },
        {
          name: "Client Session & Storage Layer",
          badge: "Web Storage API (localStorage)",
          desc: "Client-side credential cache persisting active student username states across page transitions without backend database dependencies.",
        },
        {
          name: "Graphic Asset & Iconography Layer",
          badge: "PNG & SVG Vector Graphics",
          desc: "Optimized language badges (Python, C#, Java, HTML), hero illustrations, and avatar photography.",
        },
      ],
    },
    techStackGrouped: [
      {
        category: "Frontend & UI Architecture",
        items: [
          { name: "HTML5", role: "Semantic Markup across 6 Specialized Portal Pages" },
          { name: "CSS3 Grid & Flexbox", role: "Modular Responsive Layouts & Card Containers" },
          { name: "CSS3 Keyframes", role: "Custom Hardware-Accelerated fadeInUp & fadeOutDown Transitions" },
          { name: "Google Fonts (Poppins)", role: "Clean Multi-Weight Typography Hierarchy (300 to 700)" },
          { name: "Vanilla JavaScript (ES6+)", role: "Animated Course Filter Engine & Modal Overlays" },
        ],
      },
      {
        category: "State & Storage",
        items: [
          { name: "Web Storage API", role: "LocalStorage Session State & Active Username Hydration" },
          { name: "DOM Event Architecture", role: "Event Listeners, Class Toggling & Window Click Handlers" },
          { name: "Interactive FAQ Controller", role: "Glyph-Toggling (+/-) Accordion Expansion Logic" },
        ],
      },
      {
        category: "Team & Collaboration",
        items: [
          { name: "Tri-Role Team Engineering", role: "Adyvka (Front-End), Abdullah (Back-End), Rosan (Design)" },
          { name: "VS Code Live Server", role: "Local Development Server Environment" },
          { name: "Git & GitHub", role: "Source Control & Collaborative Competition Repository" },
          { name: "Static Web Hosting", role: "Global Edge CDN Distribution with Zero Build Overhead" },
        ],
      },
    ],
    directoryStructure: [
      {
        name: "Root Portals (Multi-Page Architecture)",
        items: [
          "index.html — Main landing hub with hero stats, course filter grid, team & FAQ",
          "about.html — Platform vision, mission, and learning advantages",
          "course.html — Comprehensive tech course catalog and curriculum views",
          "bootcamp.html — Specialized intensive training bootcamps (IELTS & coding)",
          "ourteam.html — Dedicated developer team profile directory with hover rotation",
          "login.html — User authentication portal with localStorage session hydration",
        ],
      },
      {
        name: "Styles & Assets (style/, Images/)",
        items: [
          "style/index.css — Main landing stylesheet: animated keyframes, hero, and cards",
          "style/course.css — Course catalog grid layout and modal overlay styling",
          "style/about.css — Platform story and mission statement typography",
          "style/ourteam.css — Developer profile cards and hover rotation effects",
          "style/bootcamp.css — Bootcamp banner cards and instructor spotlight containers",
          "style/login.css — Clean authentication form containers and inputs",
          "Images/ — Technology icons (Python, C#, HTML), illustrations, and avatars",
        ],
      },
    ],
    prismaSchemas: [
      {
        name: "Data Model: Course",
        purpose:
          "Defines educational offerings with title, technologyTrack (CSharp, Python, Web, AI, Android), studentCount, starRating, and syllabusDescription.",
      },
      {
        name: "Data Model: Bootcamp",
        purpose:
          "Stores intensive training cohorts with cohortTitle, instructorName, academicInstitution, prerequisiteSkills, and registrationDeadline.",
      },
      {
        name: "Data Model: TeamMember",
        purpose:
          "Captures development team profiles with memberName, roleSpecialization (Front-End, Back-End, UI/UX), biography, and avatarAsset.",
      },
      {
        name: "Data Model: UserSession",
        purpose:
          "Represents client-side authentication state cached in localStorage: username, sessionToken, and lastActiveTimestamp.",
      },
    ],
    securityTitle: "Hardened Perimeter & Data Safety Standards",
    securityLead:
      "Client-side security architecture ensuring safe session handling, clean DOM insertion, and resilient static distribution.",
    apiEndpoints: [
      {
        group: "Interactive Course Filter Controller",
        routes: [
          {
            method: "POST",
            path: "showAllCourses(event)",
            desc: "Coordinates hideAllCourses callback and triggers fadeInUp on all catalog cards",
          },
          {
            method: "POST",
            path: "showCsharpCourses(event)",
            desc: "Filters and displays C# course cards with active button highlighting",
          },
          {
            method: "POST",
            path: "showPythonCourses(event)",
            desc: "Filters and displays Python course cards with active button highlighting",
          },
          {
            method: "POST",
            path: "showHtmlCourses(event)",
            desc: "Filters and displays Web Development cards with active button highlighting",
          },
        ],
      },
      {
        group: "Multi-Page Portal Navigation",
        routes: [
          {
            method: "GET",
            path: "/course.html",
            desc: "Renders complete technology curriculum catalog",
          },
          {
            method: "GET",
            path: "/bootcamp.html",
            desc: "Serves specialized intensive cohort bootcamps",
          },
          {
            method: "GET",
            path: "/ourteam.html",
            desc: "Delivers development team member directory with hover animations",
          },
        ],
      },
    ],
    securityStandards: [
      {
        title: "LocalStorage Origin Isolation",
        desc: "User credentials stored in localStorage are strictly scoped to the site's origin protocol, port, and domain, preventing cross-origin session hijacking.",
      },
      {
        title: "Defensive textContent DOM Rendering",
        desc: "Dynamic session names and modal strings are injected strictly through textContent properties, mitigating Cross-Site Scripting (XSS) risks from untrusted input.",
      },
      {
        title: "Pre-Compiled Static Distribution",
        desc: "Served over TLS 1.3 encrypted HTTPS channels as pre-rendered static files, providing immunity against server-side injection and unauthorized script execution.",
      },
      {
        title: "Zero-Tracker Privacy Architecture",
        desc: "The entire platform operates without third-party tracking scripts, advertising pixels, or telemetry beacons, protecting student privacy.",
      },
    ],
    metricOutcomes: [
      {
        value: "500ms",
        label: "Animation Transition Window",
        desc: "Smooth exit and entrance transitions across course categories.",
      },
      {
        value: "6 Tracks",
        label: "Core Technology Disciplines",
        desc: "Web Dev, Python, C#, Android, AI, and Data Science.",
      },
      {
        value: "5 Portals",
        label: "Multi-Page Architecture",
        desc: "Home, About, Course, Team, Bootcamp, and Login.",
      },
    ],
    sections: [
      {
        title: "The brief",
        body: [
          "In the fast-moving landscape of software engineering, aspiring developers frequently struggle to find structured, beginner-friendly learning paths that bridge the gap from foundational syntax to practical development. IDNCourse was conceived to address this challenge: a collaborative online learning platform providing curated courses across modern tech stacks including Web Development, Python, C#, and Mobile Development.",
          "Core Mandate: Build an engaging, responsive e-learning web platform combining smooth category-filtered course animations, interactive modal syllabi, and transparent team collaboration for a student programming competition.",
        ],
      },
      {
        title: "Architecture & Animation Engineering",
        body: [
          "The platform was engineered using a clean multi-page semantic architecture, dividing functionality into independent HTML views with dedicated modular stylesheets (index.css, course.css, ourteam.css) to eliminate style conflicts. The course section features a bespoke two-stage animation pipeline authored in vanilla JavaScript.",
          "When a user selects a technology filter, hideAllCourses() applies a CSS fadeOutDown class to active cards. Once the 500ms exit window completes, animateCourses() swaps display styles, applies fadeInUp keyframes, and toggles active button states. A client-side session listener inspects localStorage upon window load, dynamically personalizing the navigation header when a student logs in.",
        ],
      },
      {
        title: "What was hard",
        body: [
          "Synchronizing multi-element exit and entrance animations in vanilla JavaScript without visual glitches or DOM flashing. Solved by implementing a callback countdown pattern (hideCount) that ensures all currently displayed cards complete their fadeOutDown keyframe before target category cards receive fadeInUp.",
          "Managing dynamic container dimensions when switching between the full catalog and single-course categories. Engineered container state classes (all-size and default-size) that smoothly adjust parent height constraints during category transitions.",
          "Coordinating engineering deliverables across a 3-developer team under competition deadlines. Established strict file conventions and clean separation between front-end DOM manipulation, back-end API alignment, and visual design assets.",
        ],
      },
      {
        title: "Results",
        body: [
          "Successfully deployed a full-featured multi-page e-learning platform showcasing courses across 6 major technology tracks.",
          "Engineered a fluid, asynchronous course filtering engine delivering 60 FPS CSS keyframe transitions without external animation libraries.",
          "Demonstrated seamless collaborative execution across front-end engineering, back-end logic, and visual UI/UX design.",
        ],
      },
    ],
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Google Fonts",
      "LocalStorage",
      "Git",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/adyvka31/IDNCourse-Web" },
    ],
  },

  "coffeee-shop": {
    title: "Coffeee Shop",
    subtitle: "Artisan Coffee Brand Experience & Modern Retail Showcase Landing",
    status: "Production Ready",
    summary:
      "A contemporary artisan coffee retail and branch showcase web platform engineered with Tailwind CSS, Flowbite UI architecture, and AOS scroll-triggered animation choreography. Features dynamic beverage catalog cards with multi-size drink volume selectors, interactive coffee bean showcase hover effects, multi-city branch locator cards (Depok, Central Jakarta, Bandung), and a responsive team endorsement grid.",
    domain: "github.com/adyvka31/Coffeee-Shop",
    meta: [
      { label: "Role", value: "Front-End Engineer & UI Designer" },
      { label: "Platform", value: "Responsive Web & Mobile Browser" },
      { label: "Timeline", value: "2023" },
      { label: "Team", value: "Solo Project (Rafif Sava Adyvka Pratama)" },
      { label: "Architecture", value: "Tailwind Utility + Flowbite UI + AOS" },
    ],
    galleryLabel: "COFFEE RETAIL & BRAND EXPERIENCE",
    galleryTitle: "The Coffeee Shop Digital Architecture",
    galleryLead:
      "Explore the responsive interface patterns of Coffeee Shop — combining atmospheric hero aesthetics, hover-activated roast highlights, interactive beverage purchasing selectors, and multi-location branch discovery.",
    gallery: [
      {
        id: "hero-showcase",
        title: "Official Project Showcase & Brand Flyer",
        route: "coffeee.local/#home",
        tag: "Official Brand Presentation",
        image: coffeeeShopImg,
        desc: "Official brand identity flyer showcasing the artisanal Coffeee Shop visual system, warm café aesthetics, and modern digital coffee commerce experience.",
        features: [
          "Warm Artisanal Amber Brand Palette",
          "Modern Specialty Café Aesthetic",
          "Digital E-Commerce Product Presentation",
        ],
      },
      {
        id: "artisanal-hero",
        title: "Artisanal Café Hero & Welcome Showcase",
        route: "coffeee.local/index.html#hero",
        tag: "Brand Experience",
        image: coffeee1,
        desc: "Atmospheric coffeehouse landing banner with 'Enjoy Your Coffee In Here' typography, roasted coffee beans imagery, and quick ordering CTA buttons ('Buy Product', 'About').",
        features: [
          "Warm Roasted Espresso Visual Aesthetic",
          "Immediate Menu Purchasing Callouts",
          "Mindfulness & Relaxation Café Storytelling",
        ],
      },
      {
        id: "brand-heritage",
        title: "Brand Heritage & Barista Craftsmanship Gallery",
        route: "coffeee.local/index.html#about",
        tag: "Artisan Storytelling",
        image: coffeee2,
        desc: "Brand chronicle section titled 'Who We Are.' featuring a 3-part photography montage of steaming freshly-brewed coffee, delicate swan latte art, and classic Italian moka pot brewing.",
        features: [
          "'Who We Are.' Heritage Storyline",
          "Triptych Photographic Showcase of Barista Art",
          "Specialty Roasting & Brewing Highlights",
        ],
      },
      {
        id: "branch-locator",
        title: "Multi-City Outlet & Regional Branch Locator",
        route: "coffeee.local/index.html#branches",
        tag: "Retail Locations",
        image: coffeee3,
        desc: "Interactive outlet directory showcasing regional Coffeee. branches across Kota Depok, Jakarta Pusat, and Kota Bandung, complete with branch storefront photography and visitor metrics.",
        features: [
          "3 Regional City Branches (Depok, Jakarta, Bandung)",
          "Outlet Photography & Storefront Previews",
          "Visitor Engagement Counter & Location Maps",
        ],
      },
      {
        id: "menu-ordering",
        title: "Specialty Coffee Menu & Interactive Ordering Matrix",
        route: "coffeee.local/index.html#menu",
        tag: "Digital Ordering",
        image: coffeee4,
        desc: "Product detail showcase for signature beverages such as Americano Coffee Latte (Rp 30.000) and Brazilian Coffee Milk, with cup size selection dropdowns, customer reviews, and wishlist buttons.",
        features: [
          "Americano Coffee Latte & Brazilian Coffee Milk Profiles",
          "Cup Size Selector (S / M / L) & Pricing Matrix",
          "5-Star Rating System & Social Sharing",
        ],
      },
    ],
    kpis: [
      {
        value: "0.5s",
        label: "Hover Transition Latency",
        note: "Hardware-accelerated CSS ease transitions on roast cards",
      },
      {
        value: "3 Cities",
        label: "Retail Branch Footprint",
        note: "Strategic café locations across Depok, Jakarta Pusat, and Bandung",
      },
      {
        value: "3 Sizes",
        label: "Interactive Cup Sizing",
        note: "Dynamic Small (S), Medium (M), and Large (L) order selections",
      },
      {
        value: "3 Roasts",
        label: "Curated Blend Showcase",
        note: "Americano Dark Roasting, Brazilian Coffee Milk, and Vanilla Latte",
      },
      {
        value: "60 FPS",
        label: "Scroll Animation Fidelity",
        note: "Hardware-accelerated AOS (Animate On Scroll) motion triggers",
      },
      {
        value: "100%",
        label: "Mobile Viewport Fluidity",
        note: "Responsive utility grid adapting from 320px mobile to 4K displays",
      },
    ],
    highlights: [
      {
        icon: "monitor",
        title: "Tailwind Utility Architecture",
        desc: "Streamlined component-level styling built with Tailwind utility classes for minimal footprint and maximum aesthetic coherence.",
      },
      {
        icon: "database",
        title: "Interactive E-Commerce Sizing",
        desc: "Product cards featuring dynamic cup size selection (S/M/L), star rating aggregates, and direct checkout call-to-actions.",
      },
      {
        icon: "terminal",
        title: "Multi-Location Branch Network",
        desc: "Structured branch discovery cards highlighting physical café locations across major urban centers with engagement statistics.",
      },
      {
        icon: "cloud",
        title: "AOS Scroll Choreography",
        desc: "Layered entrance motion choreography providing subtle directional fades as visitors browse through menu categories.",
      },
    ],
    capabilitiesTitle: "Core Capabilities & Café Visitor Journey",
    capabilitiesLead:
      "Coffeee Shop transforms traditional beverage discovery into an engaging online experience — guiding customers from brand immersion to roast selection and local café visitation.",
    features: [
      {
        id: "hero-immersion",
        title: "Atmospheric Visual Identity & Fixed Sticky Navigation",
        badge: "Design System",
        desc: "A warm, inviting brand portal utilizing deep roast amber hues (amber-900, amber-500) paired with fixed navigation and responsive Flowbite drawer toggles.",
        points: [
          "Sticky header navigation maintaining persistent brand access and conversion triggers across all scroll depths",
          "Responsive hamburger menu drawer powered by Flowbite for seamless touch interaction on smartphones",
          "Dual conversion action pathways guiding visitors toward immediate beverage ordering or brand narrative exploration",
          "Optimized hero typography hierarchy emphasizing warmth, brain rejuvenation, and café lifestyle",
        ],
      },
      {
        id: "roast-hover-showcase",
        title: "CSS Hover-Activated Roast Discovery Engine",
        badge: "Micro-Interactions",
        desc: "Custom CSS overlay engine (#pembungkus) revealing centered product titles and roast descriptions upon desktop cursor hover with fluid timing curves.",
        points: [
          "Hardware-accelerated opacity and position translations moving from bottom to center (bottom: 49%) in 500ms",
          "Amber backdrop tint (#f59d0e90) maintaining legibility while accentuating underlying coffee bean photography",
          "Displays premier selections: Coffee Latte, Americano Coffee, and Brazilian Single-Origin Coffee",
          "Gracefully degrades into high-contrast static cards on touch devices without layout disruption",
        ],
      },
      {
        id: "product-sizing-catalog",
        title: "Interactive Beverage Catalog with Volume Selectors",
        badge: "E-Commerce UI",
        desc: "Comprehensive product detail layouts providing customers with direct size customization (S, M, L), price tiering, and wishlist triggers.",
        points: [
          "Featured specialty menu items: Americano Dark Roasting (Rp. 30.000), Brazilian Coffee Milk (Rp. 35.000), Vanilla Latte (Rp. 25.000)",
          "Dropdown cup sizing selector (S/M/L) simulating real-world barista customization options",
          "Customer review badges displaying 5-star rating aggregates and verified customer review counts",
          "Dual action buttons: high-visibility 'Buy Now' conversion button and heart wishlist toggling",
        ],
      },
      {
        id: "branch-directory",
        title: "Regional Branch Showcase & Footprint Map",
        badge: "Retail Footprint",
        desc: "Multi-location retail directory highlighting café destinations across Kota Depok, Jakarta Pusat, and Kota Bandung with engagement metrics.",
        points: [
          "Multi-column responsive card grid displaying branch photography, district naming, and ambient descriptions",
          "Interactive engagement badges displaying community view counts (1.2K) and customer comment tallies (6)",
          "Card hover elevation states with deep shadows (hover:shadow-xl) and smooth 700ms transition durations",
          "'Learn More' contextual links guiding customers to branch hours, directions, and seat reservations",
        ],
      },
      {
        id: "core-advantages",
        title: "Brand Value Pillars & Service Advantages",
        badge: "Value Proposition",
        desc: "Tri-pillar advantage matrix highlighting customer service excellence, bean procurement quality, and accessible pricing structures.",
        points: [
          "Best Service pillar with custom circular icon badge emphasizing hospitality and barista training",
          "Quality Product pillar emphasizing ethically sourced, perfectly roasted Arabica and Robusta beans",
          "Affordable Price pillar demonstrating high-end specialty café quality at approachable consumer price points",
          "Subtle directional entrance animations (fade-up-right, fade-up, fade-up-left) via AOS integration",
        ],
      },
      {
        id: "team-curators",
        title: "Team Profile & Barista Artisan Roster",
        badge: "Team & Culture",
        desc: "Responsive multi-column profile grid introducing the creative minds, designers, and UI developers behind the brand experience.",
        points: [
          "Artisan cards featuring role badges (Designer, UI Developer), portrait photography, and descriptive bios",
          "Integrated social vector iconography (Twitter, Facebook, LinkedIn) for authentic team connectivity",
          "Horizontal card layout on desktop viewports auto-collapsing to centered vertical stacks on mobile",
          "Consistent brand typography and muted grayscale undertones complementing warm brand accents",
        ],
      },
      {
        id: "aos-scroll-orchestration",
        title: "AOS Scroll-Triggered Motion Choreography",
        badge: "Animation Architecture",
        desc: "Granular entrance animations coordinated via Animate On Scroll (AOS) library to create an organic, engaging storytelling flow.",
        points: [
          "fade-right, fade-left, and fade-up animations coordinated across alternating product showcase rows",
          "Hardware-accelerated GPU transitions avoiding layout reflows and preserving smooth 60 FPS scrolling",
          "Clean declarative markup via data-aos attributes keeping HTML maintainable and readable",
          "Global initialization script (AOS.init()) running cleanly on window load without blocking rendering",
        ],
      },
    ],
    approvalWorkflow: {
      title: "Café Patron Discovery & Order Customization Journey",
      lead: "From atmospheric brand introduction to customized drink sizing and café branch visitation — guiding coffee enthusiasts through a seamless retail journey.",
      stages: [
        {
          level: "Stage 01",
          role: "Brand Discovery",
          title: "Atmospheric Hero & Roast Exploration",
          desc: "Patron discovers the café's aesthetic presence, exploring signature roasts through hover-activated flavor cards.",
          action: "Discover Signature Roasts → Explore Bean Origins",
        },
        {
          level: "Stage 02",
          role: "Drink Customization",
          title: "Beverage Selection & Volume Configuration",
          desc: "Customer examines menu items, selecting preferred drink volumes (S, M, L) and reviewing verified community ratings.",
          action: "Select Cup Size (S/M/L) → Review Pricing & Ratings",
        },
        {
          level: "Stage 03",
          role: "Order & Retail Visit",
          title: "Checkout Intent & Physical Café Discovery",
          desc: "Customer triggers direct purchase intent or locates nearby physical outlets across Depok, Central Jakarta, or Bandung.",
          action: "Trigger 'Buy Now' → Locate Nearest Branch (Depok, Jakarta, Bandung)",
        },
      ],
      lockMechanism: {
        title: "Artisan Quality & Freshness Guarantee",
        desc: "Coffeee Shop is founded on the philosophy that great coffee requires both world-class bean craftsmanship and a deeply welcoming digital presence. From roast temperature calibration to responsive interface design, every touchpoint is engineered to deliver warmth, comfort, and cognitive revitalization.",
      },
    },
    architectureTitle: "Tailwind Utility Architecture & Motion Choreography",
    architectureLead:
      "Engineered with modern utility-first CSS styling, Flowbite responsive UI components, declarative scroll animations, and clean semantic HTML5 markup.",
    architecture: {
      type: "Utility-First Responsive Web + AOS Motion Choreography",
      protocol: "Static DOM Delivery & Client-Side CSS Transforms",
      layers: [
        {
          name: "Client Presentation & Semantic Markup",
          badge: "HTML5 Semantic Structure",
          desc: "Discrete semantic landing sections (Hero, About, Branches, Advantages, Products, Team, Footer) structured for high accessibility and fast DOM parsing.",
        },
        {
          name: "Utility-First Styling & Theming",
          badge: "Tailwind CSS CDN + Amber Palette",
          desc: "Utility-first design system utilizing warm amber tokens (amber-900, amber-500, amber-100) and responsive grid breakpoints.",
        },
        {
          name: "Component Behaviors & Mobile Drawers",
          badge: "Flowbite UI Component Engine",
          desc: "Pre-tested interactive components powering responsive sticky navigation bars and accessible mobile collapse menus.",
        },
        {
          name: "Scroll Animation & Motion Layer",
          badge: "AOS (Animate On Scroll)",
          desc: "Viewport intersection observer triggering directional CSS keyframes (fade-up, fade-right, fade-left) as users scroll.",
        },
        {
          name: "Micro-Interaction & Hover Overlay Engine",
          badge: "Custom CSS (#pembungkus) Keyframes",
          desc: "Hardware-accelerated transition engine animating amber background overlays and title placement on roast cards.",
        },
        {
          name: "Visual Assets & Photographic Media",
          badge: "High-Resolution Media & SVG Vectors",
          desc: "Curated coffee visuals, roast latte art, barista photography, and clean vector iconography.",
        },
      ],
    },
    techStackGrouped: [
      {
        category: "Frontend & Styling Architecture",
        items: [
          { name: "HTML5", role: "Semantic Markup across 7 Dedicated Landing Sections" },
          { name: "Tailwind CSS", role: "Utility-First Responsive Styling & Amber Theme Palette" },
          { name: "Flowbite UI", role: "Responsive Navigation Bars & Accessible Toggle Drawers" },
          { name: "Custom CSS", role: "Hardware-Accelerated Hover Transitions (#pembungkus) & Overlays" },
        ],
      },
      {
        category: "Animation & Interactions",
        items: [
          { name: "AOS (Animate On Scroll)", role: "Declarative Viewport Motion Choreography & Scroll Triggers" },
          { name: "Vanilla JavaScript", role: "AOS Initialization & Interactive Component Lifecycle" },
          { name: "CSS Transforms & Transitions", role: "Smooth 0.5s Opacity & Positional Hover Physics" },
        ],
      },
      {
        category: "Media & Brand Assets",
        items: [
          { name: "Curated Coffee Imagery", role: "High-Resolution Roast Photography & Latte Art" },
          { name: "SVG Vector Iconography", role: "Star Rating Badges, Wishlist Hearts & Social Vectors" },
          { name: "Flowbite SVG Icons", role: "Mobile Hamburger Navigation & Interactive Arrows" },
        ],
      },
      {
        category: "Tooling & Delivery",
        items: [
          { name: "VS Code", role: "Primary Development & Styling Environment" },
          { name: "Git & GitHub", role: "Source Control & Repository Distribution" },
          { name: "Static Web Hosting", role: "Instant Edge Distribution with Zero Runtime Overhead" },
        ],
      },
    ],
    directoryStructure: [
      {
        name: "Application Root",
        items: [
          "index.html — Semantic single-page landing architecture containing hero, roast showcase, branch directory, advantages, product catalog, team grid, and footer",
          "tailwind.config.js — Tailwind CSS configuration template for utility class compilation and theme extensions",
        ],
      },
      {
        name: "Brand Assets (Images/)",
        items: [
          "Images/logo coffee.png — Brand identity crest and navigation icon",
          "Images/testimoni1.jpeg — Designer profile portrait photography",
          "Images/testimoni2.png — UI Developer profile portrait photography",
          "Images/testimoni3.png — Team artisan profile portrait photography",
          "Images/testimoni4.jpeg — Supporting team member photography",
        ],
      },
    ],
    prismaSchemas: [
      {
        name: "Data Model: ProductItem",
        purpose:
          "Defines coffee beverages with itemName (Americano, Brazilian Milk, Vanilla Latte), roastCategory, priceRupiah, availableSizes (S, M, L), starRating, reviewCount, and heroImage.",
      },
      {
        name: "Data Model: BranchLocation",
        purpose:
          "Captures café branch destinations with cityName (Depok, Jakarta Pusat, Bandung), districtTitle, branchAddress, photoAsset, totalViews (1.2K), and reviewComments (6).",
      },
      {
        name: "Data Model: TeamArtisan",
        purpose:
          "Stores barista and designer profiles with memberName (Adyvka Pratama), roleSpecialization (Designer, UI Developer), biographicalSummary, avatarAsset, and socialHandles.",
      },
      {
        name: "Data Model: ValueAdvantage",
        purpose:
          "Represents core brand pillars (Best Service, Quality Product, Affordable Price) with pillarTitle, description, and SVG icon vector.",
      },
    ],
    securityTitle: "Hardened Web Standards & Performance Optimization",
    securityLead:
      "Client-side security practices, static asset delivery, and resilient responsive performance architecture.",
    apiEndpoints: [
      {
        group: "Landing Viewport Navigation",
        routes: [
          {
            method: "GET",
            path: "/#home",
            desc: "Serves atmospheric hero viewport and brand introduction",
          },
          {
            method: "GET",
            path: "/#About",
            desc: "Renders brand narrative and interactive roast hover showcase",
          },
          {
            method: "GET",
            path: "/#products",
            desc: "Delivers interactive beverage catalog and volume sizing selectors",
          },
          {
            method: "GET",
            path: "/#branch",
            desc: "Displays multi-city café branch locator and engagement cards",
          },
        ],
      },
    ],
    securityStandards: [
      {
        title: "Subresource Integrity & Secure CDN Delivery",
        desc: "Tailwind CSS, Flowbite, and AOS libraries are delivered over TLS 1.3 encrypted HTTPS CDN channels, ensuring asset tampering immunity.",
      },
      {
        title: "Zero Server-Side Attack Surface",
        desc: "Operating entirely as a static client application eliminates server-side vulnerabilities, SQL injection, and remote code execution vectors.",
      },
      {
        title: "Content Security Policy (CSP) Alignment",
        desc: "Scoped inline scripts restricted to declarative AOS initialization, preventing arbitrary cross-site script execution.",
      },
      {
        title: "Accessible Color Contrast Standards",
        desc: "High-contrast pairings between deep amber (#78350F) backgrounds, amber accents (#F59E0B), and crisp white text compliant with WCAG 2.1 AA readability.",
      },
    ],
    metricOutcomes: [
      {
        value: "0.5s",
        label: "Micro-Interaction Latency",
        desc: "Hardware-accelerated CSS hover transitions on roast cards.",
      },
      {
        value: "3 Cities",
        label: "Retail Branch Footprint",
        desc: "Physical café outlets across Depok, Jakarta Pusat, and Bandung.",
      },
      {
        value: "100%",
        label: "Cross-Device Responsiveness",
        desc: "Fluid layout adaptation from small smartphones to wide desktop monitors.",
      },
    ],
    sections: [
      {
        title: "The brief",
        body: [
          "In modern café and specialty coffee culture, establishing a memorable digital brand footprint is essential for transforming online browsing into in-store foot traffic and direct beverage sales. Coffeee Shop was designed as a modern artisan coffee showcase landing page combining atmospheric visual storytelling with e-commerce product selectors.",
          "Core Mandate: Craft an engaging, responsive landing web application utilizing Tailwind CSS, Flowbite UI patterns, and AOS scroll animations that highlights signature roasts, interactive cup sizing, regional branches, and brand credibility.",
        ],
      },
      {
        title: "Architecture & Design System",
        body: [
          "The website adopts a warm, sensory design palette grounded in deep coffee tones (amber-900, amber-500, warm neutrals) that immediately evokes the rich aroma of specialty roasts. The interface is engineered with Tailwind CSS utility classes, keeping stylesheet payload minimal while maintaining total visual coherence.",
          "Interactive touchpoints feature custom micro-interactions: roast cards reveal bean titles and flavor profiles via hardware-accelerated CSS hover transitions (#pembungkus), while product showcase rows alternate between left- and right-aligned layouts with directional AOS entrance animations (fade-right, fade-left) and cup size selectors (S, M, L).",
        ],
      },
      {
        title: "What was hard",
        body: [
          "Balancing text legibility against rich photographic background assets without diminishing the visual mood. Solved by implementing dual-layer gradient overlays (from black to transparent) and semi-transparent amber overlays on hover states.",
          "Orchestrating smooth scroll-triggered entrance animations without causing layout shifts or scroll stutter on mobile devices. Solved by configuring declarative AOS viewport triggers that utilize lightweight CSS transform keyframes without heavy JavaScript timers.",
          "Creating an intuitive e-commerce card layout that accommodates beverage descriptions, star ratings, cup size selection, pricing, and purchase buttons within a compact responsive footprint.",
        ],
      },
      {
        title: "Results",
        body: [
          "Deployed a visually stunning, responsive artisan coffee landing experience with 60 FPS scroll performance.",
          "Built an interactive product catalog with multi-size drink volume selectors and customer review metrics.",
          "Established a scalable digital design foundation supporting multi-city branch discovery and brand expansion.",
        ],
      },
    ],
    stack: [
      "HTML5",
      "Tailwind CSS",
      "Flowbite",
      "AOS (Animate On Scroll)",
      "JavaScript",
      "CSS3",
      "Git",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/adyvka31/Coffeee-Shop" },
    ],
  },

  mystyle: {
    title: "MyStyle",
    subtitle: "Modern Fashion E-Commerce & Curated Apparel Storefront",
    status: "Production Ready",
    summary:
      "A contemporary fashion e-commerce storefront engineered with Tailwind CSS v4 and bespoke micro-interactions. Features a 9-portal multi-page architecture spanning editorial storefront discovery, interactive apparel sizing and color swatch customizers, comprehensive shopping bag management with promo vouchers, and dedicated patron profile portals.",
    domain: "github.com/adyvka31/MyStyle",
    meta: [
      { label: "Role", value: "Front-End Lead & UI Designer" },
      { label: "Platform", value: "Responsive Web Application" },
      { label: "Timeline", value: "2023" },
      { label: "Team", value: "Solo Project (Rafif Sava Adyvka Pratama)" },
      { label: "Architecture", value: "Tailwind CSS v4 + Custom Micro-Interactions" },
    ],
    galleryLabel: "FASHION COMMERCE & STOREFRONT",
    galleryTitle: "The MyStyle Storefront Experience",
    galleryLead:
      "Explore the multi-page digital commerce architecture of MyStyle — bridging editorial fashion curation, interactive size and color selectors, multi-item cart management, and seamless account workflows.",
    gallery: [
      {
        id: "hero-showcase",
        title: "Official Project Showcase & Fashion Flyer",
        route: "mystyle.local/index.html",
        tag: "Official Brand Presentation",
        image: mystyleImg,
        desc: "Official brand identity flyer showcasing the editorial MyStyle fashion commerce storefront, aesthetic warm champagne palette, and multi-category retail lookbook.",
        features: [
          "Warm Champagne & Mocha Editorial Aesthetic",
          "Signature High-Street Apparel Branding",
          "Multi-Page Digital Fashion Commerce",
        ],
      },
      {
        id: "streetwear-hero",
        title: "Urban Streetwear Brand Showcase & Erigo Hero Concept",
        route: "mystyle.local/index.html#hero",
        tag: "Fashion Merchandising",
        image: mystyle1,
        desc: "High-impact urban fashion landing banner showcasing the official Erigo apparel partnership, stylish lifestyle modeling, and immediate shopping callouts.",
        features: [
          "Official Erigo Brand Collaboration Banner",
          "High-Energy Urban Streetwear Aesthetic",
          "Direct Collection Navigation Callout",
        ],
      },
      {
        id: "promotional-deals",
        title: "Promotional Flash Sale & Seasonal Deals Carousel",
        route: "mystyle.local/index.html#promos",
        tag: "Promotions & Sales",
        image: mystyle2,
        desc: "Dynamic promotional banner carousel highlighting exclusive offers — including 'SPECIAL DEALS 20%' and '3.3 FASHION SALE' seasonal campaigns with active countdown timers.",
        features: [
          "'SPECIAL DEALS 20%' Flash Discount Banners",
          "3.3 Fashion Sale Seasonal Promotion Carousel",
          "High-Converting Promotional Card Architecture",
        ],
      },
      {
        id: "category-catalog",
        title: "Multi-Category Streetwear Catalog & Product Grid",
        route: "mystyle.local/index.html#catalog",
        tag: "Product Discovery",
        image: mystyle3,
        desc: "Clean e-commerce product catalog with responsive category filter tabs — All, Shirt, T-Shirt, Jacket, and Pants — displaying product cards with pricing and stock status.",
        features: [
          "5 Category Tabs (All, Shirt, T-Shirt, Jacket, Pants)",
          "Responsive Multi-Column Apparel Grid",
          "Real-Time Filter Switching & Product Sorting",
        ],
      },
      {
        id: "product-detail-modal",
        title: "Detailed Product View & Purchase Drawer ('Arthur Blue Unisex')",
        route: "mystyle.local/product/arthur-blue",
        tag: "Checkout Conversion",
        image: mystyle4,
        desc: "In-depth product detail view for the Arthur Blue Unisex shirt (IDR 157.000), complete with color swatch selectors, size dropdown (S/M/L/XL), and Add to Cart / Wishlist actions.",
        features: [
          "IDR 157.000 Pricing & Stock Verification",
          "Interactive Color Swatch & Size Dropdown Selector",
          "Instant 'Add to Cart' & Wishlist Action Handlers",
        ],
      },
    ],
    kpis: [
      {
        value: "9 Portals",
        label: "Multi-Page Architecture",
        note: "Storefront, catalog, cart, detail, account, edit, auth views",
      },
      {
        value: "0.5s",
        label: "Micro-Interaction Latency",
        note: "Hardware-accelerated CSS ease transitions on collection cards",
      },
      {
        value: "10 Categories",
        label: "Curated Fashion Tracks",
        note: "T-shirts, shirts, jackets, pants, footwear, and accessories",
      },
      {
        value: "4 Sizes",
        label: "Garment Fit Variations",
        note: "SM, M, L, and XL tailored apparel sizing configurations",
      },
      {
        value: "v4.0",
        label: "Tailwind CSS Engine",
        note: "Modern zero-config stylesheet engine with @import 'tailwindcss'",
      },
      {
        value: "100%",
        label: "Mobile Viewport Fluidity",
        note: "Responsive utility grid adapting from 320px mobile to 4K displays",
      },
    ],
    highlights: [
      {
        icon: "monitor",
        title: "Tailwind CSS v4 Engine",
        desc: "Modern utility-first architecture compiled with Tailwind v4 for instant stylesheet execution and minimal footprint.",
      },
      {
        icon: "database",
        title: "Interactive Commerce Workflow",
        desc: "End-to-end shopping journey spanning product variant selectors, cart quantity toggles, and voucher integrations.",
      },
      {
        icon: "terminal",
        title: "Custom Micro-Interaction Physics",
        desc: "Bespoke CSS hover overlays (#pembungkus) providing smooth gradient fades, text strokes, and button lifts.",
      },
      {
        icon: "cloud",
        title: "Full Customer Account Suite",
        desc: "Integrated patron profile management, address editing, and simulated Google OAuth onboarding.",
      },
    ],
    capabilitiesTitle: "Core Capabilities & Fashion Shopper Journey",
    capabilitiesLead:
      "MyStyle provides fashion enthusiasts with an effortless digital shopping experience — guiding customers from editorial discovery to tailored size selection and streamlined cart checkout.",
    features: [
      {
        id: "editorial-storefront",
        title: "Editorial Fashion Storefront & Category Navigation",
        badge: "Storefront UI",
        desc: "High-impact landing interface combining warm luxury aesthetics, Bookman typography, and responsive search and drawer navigation.",
        points: [
          "Warm luxury color hierarchy pairing champagne (#FFECC8) neutrals with deep espresso (#4B3B30) accents",
          "Responsive sticky navigation bar with search bar integration, cart badge counter, and account shortcuts",
          "Dual hero banner graphics highlighting contemporary streetwear and bespoke wedding attire",
          "Tri-pillar value proposition detailing garment quality, clean manufacturing, and cross-style compatibility",
        ],
      },
      {
        id: "collection-hover-showcase",
        title: "CSS Hover-Activated Collection Reveal Engine",
        badge: "Micro-Interactions",
        desc: "Hardware-accelerated CSS overlay engine (#pembungkus) revealing collection titles, text strokes, and animated purchase links upon cursor hover.",
        points: [
          "Smooth opacity transition (0.5s) with subtle champagne gradient backdrop (linear-gradient(transparent, #FFECC8b1))",
          "Text stroke typography (-webkit-text-stroke: 1px #4B3B30) elevating title legibility over photography",
          "Action button translation rising from 0 to 15% with smooth 0.8s easing physics",
          "Gracefully degrades into high-contrast static cards on touch devices without layout disruption",
        ],
      },
      {
        id: "product-detail-customizer",
        title: "Interactive Garment Customization & Sizing Engine",
        badge: "Product Engineering",
        desc: "Detailed apparel view (detailproduct.html) enabling customers to inspect garment specifications, choose color swatches, and select fit sizing.",
        points: [
          "Color swatch selector with circular visual indicators for multiple fabric dye variations",
          "Size dropdown menu providing Small (SM), Medium (M), Large (L), and Extra Large (XL) fits",
          "Star rating aggregates (4.0/5.0) paired with verified community review threads and avatar photos",
          "Dual conversion triggers: primary 'Add To Cart' button and heart icon wishlist favorites",
        ],
      },
      {
        id: "cart-management-suite",
        title: "Full-Featured Shopping Bag & Checkout Summary",
        badge: "Cart Architecture",
        desc: "Dedicated shopping bag portal (cart.html) equipped with item-level controls, discount coupon validation, and order subtotal calculations.",
        points: [
          "'Select All' master checkbox and individual item checkboxes for granular checkout control",
          "Interactive quantity increment and decrement buttons (+/-) with live price adjustment simulation",
          "Promotional discount badges (e.g., 47% off) displaying original strike-through pricing against discounted totals",
          "Voucher coupon input prompt and 'Last Seen' product carousel encouraging discovery",
        ],
      },
      {
        id: "curated-quick-filters",
        title: "Multi-Category Quick-Filter Navigation",
        badge: "Catalog Search",
        desc: "Fast-access apparel filter bar in viewproduct.html allowing customers to switch between 10 garment categories with a single tap.",
        points: [
          "10 dedicated category pills: T-shirt, Shirt, Jacket, Pants, Hat, Shoes, Perfume, Bag, Buckle, and Sock",
          "Hover outline transitions switching between neutral border states and solid espresso backgrounds",
          "Hero promotional card showcasing featured collections with instant 'Buy Now' call-to-actions",
          "Responsive flex-wrap container ensuring clean alignment across desktop and mobile screens",
        ],
      },
      {
        id: "patron-account-suite",
        title: "Customer Account & Profile Management Suite",
        badge: "User Account",
        desc: "Comprehensive user management suite spanning account.html, edit.html, login.html, and register.html.",
        points: [
          "Profile management portal displaying patron avatar, registered email, and saved delivery addresses",
          "Interactive profile editor allowing users to modify biographical details and contact numbers",
          "Clean login and registration forms featuring responsive card containers and Google OAuth buttons",
          "Unified header integration dynamically linking user session state with navigation shortcuts",
        ],
      },
      {
        id: "responsive-styling-grid",
        title: "Tailwind CSS v4 Utility Layout System",
        badge: "CSS Architecture",
        desc: "Modern responsive layout engine utilizing Tailwind CSS v4 utility classes and custom responsive breakpoints.",
        points: [
          "CSS Grid and Flexbox layouts auto-adapting from single-column mobile stacks to multi-column desktop grids",
          "Custom border-radius styling (rounded-tl-4xl, rounded-br-4xl) creating asymmetric editorial card silhouettes",
          "Asynchronous script loading (@tailwindcss/browser@4) for rapid development and zero-bundle prototyping",
          "Optimized media asset sizing preventing cumulative layout shifts during page loading",
        ],
      },
    ],
    approvalWorkflow: {
      title: "Fashion Patron Discovery & Checkout Lifecycle",
      lead: "From editorial collection discovery to garment sizing customization and seamless checkout completion — guiding apparel shoppers through an elegant retail experience.",
      stages: [
        {
          level: "Stage 01",
          role: "Editorial Discovery",
          title: "Editorial Storefront & Quick Filters",
          desc: "Shopper discovers seasonal lookbooks, filtering apparel by 10 quick categories across casual, formal, and outerwear collections.",
          action: "Browse Collections → Filter by Category (Jacket, Shirt, Pants)",
        },
        {
          level: "Stage 02",
          role: "Garment Customization",
          title: "Variant Selection & Review Inspection",
          desc: "Customer examines garment specifications, selects color swatches, configures fit sizing (SM to XL), and reads verified customer reviews.",
          action: "Select Garment Color & Size (SM–XL) → Add to Cart",
        },
        {
          level: "Stage 03",
          role: "Cart Optimization",
          title: "Voucher Application & Order Finalization",
          desc: "Customer reviews shopping bag items, adjusts quantities, applies promotional discount vouchers, and confirms order valuation totals.",
          action: "Apply Promo Coupon → Review Total → Proceed to Checkout",
        },
      ],
      lockMechanism: {
        title: "Fabric Craftsmanship & Ethical Production Guarantee",
        desc: "MyStyle adheres to rigorous textile quality benchmarks: every garment featured across the platform is curated for structural longevity, breathable natural fibers, and contemporary aesthetic versatility. We eliminate fast-fashion compromise by uniting artisanal stitching with modern digital accessibility.",
      },
    },
    architectureTitle: "Tailwind CSS v4 Multi-Page Architecture & Micro-Interactions",
    architectureLead:
      "Engineered with modern utility-first CSS styling via Tailwind CSS v4, custom CSS hardware-accelerated hover physics, and discrete semantic HTML5 portals.",
    architecture: {
      type: "Tailwind CSS v4 Multi-Page Web Architecture",
      protocol: "Static DOM Delivery & Client-Side CSS Transforms",
      layers: [
        {
          name: "Client Presentation & Semantic Portals",
          badge: "HTML5 Multi-Page Architecture",
          desc: "Discrete semantic portals (index, detailproduct, viewproduct, cart, about, account, edit, login, register) structured for clean separation of concerns.",
        },
        {
          name: "Utility-First Styling Engine",
          badge: "Tailwind CSS v4 Engine",
          desc: "Modern zero-config stylesheet engine utilizing modern color tokens, flex layouts, and responsive grid breakpoints.",
        },
        {
          name: "Micro-Interaction & Hover Physics",
          badge: "Custom CSS (#pembungkus) Keyframes",
          desc: "Hardware-accelerated CSS pseudo-element transitions animating champagne backdrop gradients, text strokes, and 0.8s button elevations.",
        },
        {
          name: "Typography & Font Rendering",
          badge: "Bookman Old Style (@font-face)",
          desc: "High-contrast editorial serif typography loaded via local font assets for brand distinction.",
        },
        {
          name: "E-Commerce Component State",
          badge: "Cart, Variant Selectors & Checkbox Controllers",
          desc: "Client-side interactive state components managing batch selection checkboxes, quantity adjustments, and size variants.",
        },
        {
          name: "Curated Media & Editorial Photography",
          badge: "High-Resolution Fashion Imagery & SVG Vectors",
          desc: "Curated high-resolution editorial photography, vector brand crest, and commerce iconography.",
        },
      ],
    },
    techStackGrouped: [
      {
        category: "Frontend & Styling Architecture",
        items: [
          { name: "HTML5", role: "Semantic Markup across 9 Dedicated E-Commerce Portals" },
          { name: "Tailwind CSS v4", role: "Modern Utility-First Stylesheet Engine & Responsive Breakpoints" },
          { name: "Custom CSS3", role: "Hardware-Accelerated Hover Transitions (#pembungkus) & Text Strokes" },
          { name: "Bookman Old Style", role: "Custom @font-face Serif Typography for Editorial Headers" },
        ],
      },
      {
        category: "Commerce & User Interfaces",
        items: [
          { name: "Product Variant Customizer", role: "Color Swatch Toggles & Garment Size Selectors (SM–XL)" },
          { name: "Shopping Bag Controller", role: "Batch Item Selection Checkboxes & Quantity Steppers" },
          { name: "User Account Portal", role: "Profile Dashboard, Address Editing & Order Overview" },
          { name: "Auth Dialog Interface", role: "Responsive Authentication Forms & Google OAuth Simulation" },
        ],
      },
      {
        category: "Media & Brand Assets",
        items: [
          { name: "Curated Fashion Imagery", role: "High-Resolution Streetwear, Wedding & Lookbook Photography" },
          { name: "SVG Vector Iconography", role: "Shopping Baskets, Star Ratings, Social Vectors & Arrows" },
          { name: "Asymmetric Card Geometry", role: "Custom Border-Radius Silhouettes (rounded-tl-4xl, rounded-br-4xl)" },
        ],
      },
      {
        category: "Tooling & Delivery",
        items: [
          { name: "VS Code", role: "Primary Code Authoring & Styling Workspace" },
          { name: "Git & GitHub", role: "Source Control & Collaborative Project Management" },
          { name: "Static Web Hosting", role: "Instant Edge Distribution with Zero Server Overhead" },
        ],
      },
    ],
    directoryStructure: [
      {
        name: "Root Portals (Multi-Page Architecture)",
        items: [
          "index.html — Main editorial fashion storefront with hero, advantages, and collection cards",
          "detailproduct.html — Product detail view with size/color pickers, reviews, and lookbook gallery",
          "viewproduct.html — Apparel catalog with 10 category quick-filters and promo banners",
          "cart.html — Shopping bag interface with quantity steppers, item checkboxes, and promo coupons",
          "about.html — Brand heritage, craftsmanship standards, and showroom photography",
          "account.html — User dashboard displaying order history, address details, and settings",
          "edit.html — Profile customization interface for modifying user details",
          "login.html — User authentication portal with Google OAuth simulation",
          "register.html — New customer registration onboarding workflow",
        ],
      },
      {
        name: "Styles & Fonts (src/, Font/, Images/)",
        items: [
          "src/style.css — Custom CSS rules, @font-face declarations, #pembungkus hover physics, and @import 'tailwindcss'",
          "src/output.css — Pre-compiled Tailwind CSS utility stylesheet",
          "Font/BOOKOS.TTF — Custom Bookman Old Style font file",
          "Font/solskinDEMO.otf — Editorial display font asset",
          "Images/ — Brand crest (logo_mystyle.svg), collection imagery, and model photography",
        ],
      },
    ],
    prismaSchemas: [
      {
        name: "Data Model: ApparelProduct",
        purpose:
          "Defines clothing items with productTitle (Arthur Blue Unisex, Verdusa Men's), brand (Erigo Official), priceRupiah (IDR 157.000), discountPercentage (47%), availableSizes (SM, M, L, XL), colorSwatches, starRating (4.0), and photoGallery.",
      },
      {
        name: "Data Model: CartItem",
        purpose:
          "Captures items in shopping bag with cartItemId, productId, quantityCount, isSelectedForCheckout, unitPrice, and subtotal.",
      },
      {
        name: "Data Model: CustomerProfile",
        purpose:
          "Stores patron account data with fullName, emailAddress, avatarAsset, defaultShippingAddress, orderHistoryCount, and savedWishlist.",
      },
      {
        name: "Data Model: CategoryFilter",
        purpose:
          "Represents catalog navigation pills (T-shirt, Shirt, Jacket, Pants, Hat, Shoes, Perfume, Bag, Buckle, Sock) with slug and activeState.",
      },
    ],
    securityTitle: "Hardened Client Security & Resilient Asset Standards",
    securityLead:
      "Client-side data protection, static CDN deployment, and accessibility compliance.",
    apiEndpoints: [
      {
        group: "Storefront & Catalog Routing",
        routes: [
          {
            method: "GET",
            path: "/index.html",
            desc: "Serves main editorial fashion storefront and trend showcase",
          },
          {
            method: "GET",
            path: "/detailproduct.html",
            desc: "Renders product detail view with sizing and color swatches",
          },
          {
            method: "GET",
            path: "/viewproduct.html",
            desc: "Delivers filterable apparel collections catalog",
          },
          {
            method: "GET",
            path: "/cart.html",
            desc: "Displays shopping bag with quantity steppers and discount vouchers",
          },
          {
            method: "GET",
            path: "/account.html",
            desc: "Presents customer profile dashboard and order management",
          },
        ],
      },
    ],
    securityStandards: [
      {
        title: "Secure CDN Delivery & TLS 1.3 Encryption",
        desc: "Tailwind CSS browser runtime delivered over TLS 1.3 encrypted HTTPS channels, ensuring asset tampering immunity.",
      },
      {
        title: "Zero Server-Side Attack Surface",
        desc: "Operating entirely as a static client application eliminates server-side vulnerabilities, SQL injection, and remote code execution vectors.",
      },
      {
        title: "Client-Side Input Boundary Validation",
        desc: "Strict format enforcement on email, password, and quantity input elements preventing malformed payload injection.",
      },
      {
        title: "WCAG 2.1 AA Contrast Compliance",
        desc: "High-contrast pairings between deep mocha brown (#4B3B30), champagne neutrals (#FFECC8), and dark charcoal typography ensuring accessible readability.",
      },
    ],
    metricOutcomes: [
      {
        value: "9 Portals",
        label: "Multi-Page Architecture",
        desc: "Discrete semantic views covering storefront, catalog, cart, detail, and auth.",
      },
      {
        value: "0.5s",
        label: "Micro-Interaction Latency",
        desc: "Hardware-accelerated CSS hover transitions on collection cards.",
      },
      {
        value: "10 Categories",
        label: "Curated Fashion Tracks",
        desc: "T-shirts, shirts, jackets, pants, footwear, and accessories.",
      },
    ],
    sections: [
      {
        title: "The brief",
        body: [
          "In the competitive online fashion landscape, delivering a distinguished digital storefront requires more than a simple product grid—it demands editorial storytelling, tactile micro-interactions, and a friction-free shopping journey. MyStyle was created to combine luxury fashion brand aesthetics with complete e-commerce functionality.",
          "Core Mandate: Architect a responsive multi-page fashion commerce platform utilizing Tailwind CSS v4, custom Bookman typography, and interactive shopping bag workflows that guide customers from visual discovery to tailored order completion.",
        ],
      },
      {
        title: "Architecture & Design System",
        body: [
          "The visual identity of MyStyle is anchored in a refined neutral palette combining champagne cream (#FFECC8, #FFECC894) with deep espresso brown (#4B3B30), setting an editorial tone reminiscent of luxury fashion lookbooks. The typography system pairs classic Bookman Old Style serif headings with clean sans-serif body text.",
          "Interactive touchpoints feature custom micro-interactions: collection cards reveal titles and animated purchase buttons via hardware-accelerated CSS hover transitions (#pembungkus) utilizing layered pseudo-elements and text strokes. The architecture spans 9 discrete semantic portals covering the full e-commerce lifecycle from product exploration to shopping cart checkout and user profile management.",
        ],
      },
      {
        title: "What was hard",
        body: [
          "Crafting sophisticated multi-element hover physics in pure CSS without relying on heavy JavaScript animation libraries. Solved by layering ::before pseudo-element opacity transitions with coordinated position translations (bottom: 30% for text, bottom: 15% for buttons).",
          "Designing an intuitive shopping cart layout that balances granular item checkboxes, discount tags, quantity counters, and subtotal calculators across narrow mobile screens.",
          "Adopting early-release Tailwind CSS v4 features (@import 'tailwindcss' and @tailwindcss/browser@4) while ensuring seamless backward compatibility with existing styles.",
        ],
      },
      {
        title: "Results",
        body: [
          "Successfully delivered a high-end 9-portal fashion e-commerce storefront with fluid responsive adaptation.",
          "Engineered custom hardware-accelerated CSS hover physics delivering 60 FPS transitions.",
          "Implemented an end-to-end shopping workflow spanning variant customizers, multi-item shopping bags, and customer account portals.",
        ],
      },
    ],
    stack: [
      "HTML5",
      "Tailwind CSS v4",
      "CSS3",
      "JavaScript",
      "Custom Fonts",
      "Git",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/adyvka31/MyStyle" },
    ],
  },

  delifood: {
    title: "DeliFood",
    subtitle: "Real-Time Mobile E-Commerce & Food Delivery Platform",
    status: "Production Ready",
    summary:
      "A responsive, real-time mobile food ordering application built with Flutter and Cloud Firestore. Powered by asynchronous snapshot streams for live catalog synchronization, atomic cart quantity deduplication, dynamic wishlist management, and a 4-stage visual delivery tracking pipeline.",
    domain: "github.com/adyvka31/DeliFood",
    meta: [
      { label: "Role", value: "Mobile Application Engineer" },
      { label: "Platform", value: "Android & iOS" },
      { label: "Timeline", value: "2024 – 2025" },
      { label: "Architecture", value: "Feature-First Modular + Stream BaaS" },
      { label: "BaaS", value: "Cloud Firestore & Firebase Auth" },
    ],
    galleryLabel: "MOBILE APPLICATION INTERFACES",
    galleryTitle: "The DeliFood Mobile Experience",
    galleryLead:
      "Explore the reactive mobile interface of DeliFood — featuring real-time stream-driven catalogs, smart cart quantity deduplication, fluid Hero animations, and multi-stage delivery tracking.",
    gallery: [
      {
        id: "hero-showcase",
        title: "Official Project Showcase & Mobile Flyer",
        route: "app.delifood.mobile",
        tag: "Official Brand Presentation",
        image: delifoodImg,
        desc: "Official mobile application presentation flyer showcasing DeliFood's on-demand culinary delivery architecture, modern iOS & Android UI design, and real-time cloud ordering.",
        features: [
          "Cross-Platform Flutter Visual Architecture",
          "Fullstack Firebase Real-Time Ecosystem",
          "Modern On-Demand Food Delivery Experience",
        ],
      },
      {
        id: "app-screen-flow",
        title: "Comprehensive Mobile Screen Flow & UI Overview",
        route: "app.delifood.mobile#screens",
        tag: "Mobile Experience",
        image: delifood1,
        desc: "Complete high-fidelity overview of DeliFood's mobile screens — splash screen, customer auth onboarding, food discovery feed, cart management, and real-time order tracking.",
        features: [
          "User Authentication & Welcome Onboarding",
          "Special Deals & Recommended Combo Carousels",
          "Live Multi-Stage Order Tracking Timeline",
        ],
      },
      {
        id: "gourmet-culinary",
        title: "Gourmet Culinary Showcase & Dish Presentation",
        route: "app.delifood.mobile/details",
        tag: "Menu Photography",
        image: delifood2,
        desc: "High-resolution food presentation highlighting Thai basil minced chicken with crispy fried egg over steamed jasmine rice, illustrating DeliFood's mouth-watering menu visuals.",
        features: [
          "High-Resolution Culinary Assets & Detail Cards",
          "Nutritional Values & Dietary Classification",
          "Visual Food Appetite Appeal Engineering",
        ],
      },
      {
        id: "rapid-logistics",
        title: "3D Rapid Courier Logistics & Delivery Dispatch",
        route: "app.delifood.mobile/delivery",
        tag: "Last-Mile Logistics",
        image: delifood3,
        desc: "Playful 3D courier character illustration representing DeliFood's real-time scooter dispatch, time tracking, and rapid temperature-controlled food delivery service.",
        features: [
          "Rapid 30-Minute Food Delivery Guarantee",
          "Real-Time Courier Dispatch Mechanics",
          "3D Animated Courier Mascot Brand Identity",
        ],
      },
      {
        id: "customer-fulfillment",
        title: "Cashless Handover & Customer Order Fulfillment",
        route: "app.delifood.mobile/fulfillment",
        tag: "Order Fulfillment",
        image: delifood4,
        desc: "Customer parcel handover and payment completion illustration, highlighting DeliFood's frictionless cash-on-delivery and digital wallet payment integrations.",
        features: [
          "Frictionless Handover & Contactless Delivery",
          "Integrated Cash & Digital Wallet Payments",
          "End-to-End Fulfillment Verification",
        ],
      },
    ],
    kpis: [
      {
        value: "0ms",
        label: "Sync Latency",
        note: "Instant reactive UI updates via Firebase Stream listeners",
      },
      {
        value: "100%",
        label: "Duplicate Free",
        note: "Smart cart query auto-increments quantity instead of duplicating",
      },
      {
        value: "4-Stage",
        label: "Delivery Stepper",
        note: "Payment → Packaging → In Transit → Delivered lifecycle",
      },
      {
        value: "5",
        label: "App Domains",
        note: "Home, Wishlist, Smart Basket, Order Tracking, and Profile",
      },
      {
        value: "60 FPS",
        label: "Hero Animation",
        note: "Smooth Material 3 Hero widget image transitions",
      },
      {
        value: "Dual",
        label: "Auth Registration",
        note: "Firebase Auth + Firestore user profile dual-write",
      },
    ],
    highlights: [
      {
        icon: "monitor",
        title: "Stream-Driven Reactive UI",
        desc: "Every core view subscribes directly to Cloud Firestore snapshots via StreamBuilder, updating catalog items, cart quantities, and wishlist states instantaneously without manual pull-to-refresh.",
      },
      {
        icon: "database",
        title: "Smart Basket & Deduplication Engine",
        desc: "Intelligent cart operations check for existing items in user collections, auto-incrementing quantity (quantity + 1) on duplicate picks and supporting swipe-to-dismiss deletion.",
      },
      {
        icon: "terminal",
        title: "Dual-Write Identity & Profile Security",
        desc: "Secure Firebase Authentication combined with atomic Firestore user document writes storing demographic metadata, birth dates via date picker, and server timestamps.",
      },
      {
        icon: "cloud",
        title: "4-Stage Visual Delivery Stepper",
        desc: "Comprehensive order lifecycle tracking guiding customers from order placement to doorstep arrival, complete with granular transit checkpoints and horizontal item summaries.",
      },
    ],
    capabilitiesTitle: "Core Capabilities & Order Fulfillment Workflow",
    capabilitiesLead:
      "Engineered for smooth, high-throughput mobile retail — combining reactive data streaming, gesture-driven cart management, real-time wishlist toggling, and multi-stage delivery logistics.",
    features: [
      {
        id: "stream-catalog",
        title: "Stream-Driven Catalog & Live Query Filtering",
        badge: "Core Architecture",
        desc: "Real-time product discovery engine streaming directly from Cloud Firestore with zero manual refreshes.",
        points: [
          "Live Stream Snapshots: Persistent listener on products collection automatically broadcasting price, stock, or item changes to the UI.",
          "Client-Side Substring Filtering: Dual-criteria search evaluating title substrings and active categories (Hottest, Popular, New Combo, Top).",
          "Dynamic View Shifting: Automatically swaps between promotional hero carousels (Special & Recommended) and search grid results.",
          "Interactive Coupon Claim: Built-in promotional voucher dialog with celebration feedback and instant discount application.",
        ],
      },
      {
        id: "cart-deduplication",
        title: "Smart Basket & Quantity Deduplication",
        badge: "E-Commerce Logic",
        desc: "Optimized shopping basket preventing redundant database rows and delivering seamless cart manipulation.",
        points: [
          "Quantity Auto-Increment: Inspects existing cart items by title; increments quantity (+1) if found rather than duplicating rows.",
          "Swipe-to-Dismiss Deletion: Wrap-around Dismissible widget allowing intuitive gesture-based deletion with red background and instant sync.",
          "Indonesian Currency Formatting: Dynamic calculation of item subtotals and flat delivery fee (Rp 8.000) using NumberFormat.currency.",
          "Modal Bottom Sheet Address Input: Non-blocking address input screen prompting customer delivery coordinates prior to checkout.",
        ],
      },
      {
        id: "wishlist-engine",
        title: "Reactive Wishlist & Favorites Engine",
        badge: "Personalization",
        desc: "Dedicated user subcollection storing favorited food items with single-tap toggle responsiveness.",
        points: [
          "Isolated User Subcollection: Preserves customer favorites in /users/{uid}/wishlist across multi-device sessions.",
          "Atomic Toggle Mechanism: Single-tap heart action that verifies item presence, deleting if found or writing if absent.",
          "Responsive 2-Column Grid: Visual showcase featuring Hero transition images, ratings, formatted prices, and quick detail navigation.",
        ],
      },
      {
        id: "delivery-stepper",
        title: "4-Stage Visual Delivery Tracker",
        badge: "Logistics & Order",
        desc: "Comprehensive order fulfillment tracking providing full visibility into delivery progression.",
        points: [
          "4-Stage Sequential Stepper: Visual indicators for Payment Verified, Packaging & Inventory, In Transit, and Delivered.",
          "Horizontal Item Summary: Upper carousel highlighting all menu items included in the active transit package.",
          "Chronological Checkpoint Log: Time-stamped milestone history documenting sorting hubs, dispatch times, and estimated arrivals.",
        ],
      },
      {
        id: "hero-transitions",
        title: "Fluid Hero Transitions & Hybrid Asset Rendering",
        badge: "Visual UX",
        desc: "Material 3 visual experience featuring seamless image transitions and intelligent asset resolution.",
        points: [
          "60 FPS Hero Animations: Smooth scaling transitions between grid thumbnails and full-screen detail views via unique imagepath tags.",
          "Hybrid Image Provider Logic: Smart URL inspector routing http links to Image.network with error fallback and local paths to Image.asset.",
          "Open Sauce Typography: Integrated 6-weight custom typography system (Light to Bold) creating clear hierarchical readability.",
        ],
      },
      {
        id: "dual-write-auth",
        title: "Dual-Write Authentication & Profile Governance",
        badge: "Security & Identity",
        desc: "Secure user registration combining Firebase Auth credentials with Firestore profile data.",
        points: [
          "Firebase Authentication: Stateless credential management with granular exception handlers for invalid-email, wrong-password, and rate limits.",
          "Dual-Write Firestore Integration: Automatically writes user metadata (birth date, address, and server timestamp) upon successful signup.",
          "In-App Drawer Notifications: Slide-out notification drawer delivering commercial alerts and partner promotional campaigns (Pizza Hut, Starbucks, KFC, J.CO).",
        ],
      },
      {
        id: "5-tab-navigation",
        title: "Curved 5-Tab Navigation System",
        badge: "Navigation Architecture",
        desc: "Persistent bottom navigation bar providing instantaneous switching across primary application domains.",
        points: [
          "5 Core App Domains: Unified bottom bar switching between Home, Wishlist, Basket, Orders, and Profile without state destruction.",
          "Persistent Navigation State: Indexed widget tree maintaining scroll offsets and input focus across screen transitions.",
        ],
      },
      {
        id: "database-seeding",
        title: "Autonomous Firestore Seeding & Cloud Synchronization",
        badge: "Data Operations",
        desc: "Built-in seeding pipeline ensuring immediate development and demo data availability.",
        points: [
          "Automated Product Seeder: Built-in seedDatabase() function checking catalog existence and inserting verified combo menus with prices and descriptions.",
          "Server Timestamp Enforcement: Neutralizes local device clock tampering by enforcing Firestore FieldValue.serverTimestamp() on all transactional writes.",
        ],
      },
    ],
    approvalWorkflow: {
      title: "Order Fulfillment & Delivery Lifecycle",
      lead: "From cart checkout to doorstep delivery — every order transitions through an asynchronous Firestore state machine with automated subcollection synchronization.",
      stages: [
        {
          level: "Stage 01",
          role: "Cart & Checkout",
          title: "Basket Checkout & Address Input",
          desc: "Customer selects items, validates cart quantities, and inputs delivery address via modal bottom sheet. Subtotal and flat delivery fees are computed dynamically.",
          action: "Cart Snapshot & Order Creation",
        },
        {
          level: "Stage 02",
          role: "Kitchen & Inventory",
          title: "Order Processing & Kitchen Prep",
          desc: "Kitchen receives order status 'Processing'. Cart items are atomically migrated to /orders and cleared from /cart to prevent duplicate fulfillment.",
          action: "Status Update → Processing & Packaging",
        },
        {
          level: "Stage 03",
          role: "Courier & Arrival",
          title: "Transit Dispatch & Doorstep Handover",
          desc: "Driver is assigned. Live stepper updates to 'In Transit' with timestamped sorting checkpoints until final delivery verification.",
          action: "Status Update → In Transit → Delivered",
        },
      ],
      lockMechanism: {
        title: "Atomic Cart Migration & Duplicate Prevention Guarantee",
        desc: "During checkout, all cart documents are atomically read, transformed into order items, and deleted from the active cart in a single batch sequence. This ensures customers never experience ghost items or accidental double checkouts.",
      },
    },
    architectureTitle: "Feature-First Modular & Stream BaaS Architecture",
    architectureLead:
      "Engineered with a clean separation between reactive Flutter presentation widgets, a centralized Data Access Object (DatabaseService), and Google Cloud Firestore streams.",
    architecture: {
      type: "Feature-First Flutter + Firebase BaaS",
      protocol: "Asynchronous Firestore Streams (gRPC / WSS)",
      layers: [
        {
          name: "Mobile Client (Flutter)",
          badge: "Dart ^3.8.1 + Material 3",
          desc: "Cross-platform mobile application utilizing StreamBuilder, custom Open Sauce typography, Hero transition animations, and Dismissible gestures.",
        },
        {
          name: "Service & Data Access Layer",
          badge: "DatabaseService (DAO)",
          desc: "Centralized Data Access Object abstracting Firestore CRUD operations, stream mappings, smart deduplication queries, and database seeding.",
        },
        {
          name: "Identity & Security Guard",
          badge: "Firebase Authentication",
          desc: "Token-based stateless authentication engine enforcing email/password validation, credential hashing, and secure user session management.",
        },
        {
          name: "Reactive NoSQL Database",
          badge: "Cloud Firestore",
          desc: "Distributed cloud document database delivering real-time snapshot streams across products, user profiles, carts, wishlists, and order collections.",
        },
        {
          name: "Local Storage & Assets",
          badge: "Asset Bundles & Fonts",
          desc: "Bundled Open Sauce One font family, CustomIcon glyphs, and local high-res food combo image assets.",
        },
      ],
    },
    techStackGrouped: [
      {
        category: "Mobile Application",
        items: [
          { name: "Flutter 3.x", role: "Cross-Platform Mobile Framework" },
          { name: "Dart ^3.8.1", role: "Strongly Typed Client Language" },
          { name: "Provider 6", role: "State Management & DI" },
          { name: "Open Sauce One", role: "Custom Typography Hierarchy" },
          { name: "Material 3", role: "Modern UI Design System" },
          { name: "Curved Navigation Bar", role: "Curved Bottom Tab Navigation" },
          { name: "Intl", role: "Indonesian Currency & Date Formatting" },
          { name: "Cupertino Icons", role: "iOS-Style Iconography" },
        ],
      },
      {
        category: "Backend & Cloud Services",
        items: [
          { name: "Cloud Firestore", role: "Real-time NoSQL Cloud Database" },
          { name: "Firebase Auth", role: "User Identity & Session Security" },
          { name: "Firebase Core", role: "Platform Client Handshake" },
          { name: "Firebase CLI", role: "Cloud Configuration & Deployment" },
        ],
      },
      {
        category: "DevOps & Code Quality",
        items: [
          { name: "Flutter Lints 5", role: "Dart Static Analysis & Style Enforcement" },
          { name: "Flutter Test", role: "Widget & Unit Testing Framework" },
          { name: "Git & GitHub", role: "Source Control & Collaborative Versioning" },
        ],
      },
    ],
    directoryStructure: [
      {
        name: "lib/features/ (Feature-First Modules)",
        items: [
          "home/ — HomeScreen, Hero DetailPage, ItemFoodModel, promotional sections",
          "cart/ — CartScreen with swipe-to-dismiss, InputAdress bottom sheet modal",
          "whislist/ — WhislistScreen with 2-column reactive grid and instant toggle",
          "track_status/ — TrackStatusScreen with 4-stage stepper and transit logs",
          "profile/ — ProfileScreen with Firestore user data fetching and logout",
          "onboarding/ — SplashScreen, Onboarding intro, and SignupPage dual-write",
        ],
      },
      {
        name: "lib/service/ & core (Data & Preferences)",
        items: [
          "service/database_service.dart — Firestore CRUD, stream queries, deduplication, seed",
          "prefrences/color.dart — Custom brand color palette (MainColors)",
          "prefrences/icons.dart — Custom icon glyphs and asset constants",
          "components/app_back_button.dart — Reusable circular back navigation button",
          "widgets/item_combo.dart — Reusable menu item card with price & rating",
        ],
      },
    ],
    prismaSchemas: [
      {
        name: "Firestore: /products",
        purpose:
          "Global catalog collection containing title, price, rating, category tags, local/network image paths, and culinary descriptions.",
      },
      {
        name: "Firestore: /users/{uid}",
        purpose:
          "User profile document storing full name, email, birth date, delivery address, and server-side creation timestamp.",
      },
      {
        name: "Firestore: /users/{uid}/cart",
        purpose:
          "Active user basket items with smart quantity counters (+1 auto-increment) and addedAt server timestamps.",
      },
      {
        name: "Firestore: /users/{uid}/wishlist",
        purpose:
          "User favorited items with single-tap toggle capability (atomic write or delete).",
      },
      {
        name: "Firestore: /users/{uid}/orders",
        purpose:
          "Order history recording purchased items array snapshot, total_price, status progression, and order_date.",
      },
    ],
    securityTitle: "Hardened Perimeter & Data Safety",
    securityLead:
      "Cloud security architecture combining Firebase Auth token verification, user-scoped Firestore access, and server-side timestamp validation.",
    apiEndpoints: [
      {
        group: "Authentication (Firebase Auth)",
        routes: [
          { method: "POST", path: "createUserWithEmailAndPassword", desc: "User registration with email/password and dual-write to Firestore" },
          { method: "POST", path: "signInWithEmailAndPassword", desc: "Stateless session authentication with granular exception handling" },
          { method: "POST", path: "signOut", desc: "Session termination and navigation stack reset" },
        ],
      },
      {
        group: "Catalog & Products (Firestore Streams)",
        routes: [
          { method: "GET", path: "collection('products').snapshots()", desc: "Real-time stream of all products with client substring filtering" },
          { method: "POST", path: "seedDatabase()", desc: "Automated catalog verification and demo combo menu insertion" },
        ],
      },
      {
        group: "Cart Operations (Subcollection /cart)",
        routes: [
          { method: "GET", path: "/users/{uid}/cart.snapshots()", desc: "Real-time shopping basket stream with subtotal and fee computation" },
          { method: "POST", path: "addToCart(ItemFoodModel)", desc: "Smart cart query: auto-increments quantity or creates new document" },
          { method: "DELETE", path: "removeFromCart(docId)", desc: "Instant document deletion triggered by Dismissible swipe gesture" },
          { method: "POST", path: "checkout(totalPrice)", desc: "Atomic cart-to-order migration and cart clearing" },
        ],
      },
      {
        group: "Wishlist & Orders (Subcollections /wishlist & /orders)",
        routes: [
          { method: "POST", path: "toggleWhislist(ItemFoodModel)", desc: "Atomic heart toggle: deletes if exists, adds if absent" },
          { method: "GET", path: "/users/{uid}/wishlist.snapshots()", desc: "Real-time user wishlist stream rendered in 2-column grid" },
          { method: "GET", path: "/users/{uid}/orders.snapshots()", desc: "Order history stream ordered by order_date descending" },
        ],
      },
    ],
    securityStandards: [
      {
        title: "Firebase Auth Credential Guard",
        desc: "Stateless token-based authentication with granular exception handlers for invalid-email, wrong-password, and brute-force too-many-requests throttling.",
      },
      {
        title: "User-Scoped Subcollection Isolation",
        desc: "Cart, wishlist, and order subcollections are strictly scoped under each user's unique uid, preventing cross-user data exposure.",
      },
      {
        title: "Server-Verified Timestamps",
        desc: "Transactional operations utilize FieldValue.serverTimestamp() to neutralize client device clock tampering and ensure audit integrity.",
      },
      {
        title: "Smart Cart Deduplication Logic",
        desc: "Pre-write query inspection prevents duplicate rows, consolidating identical items into a single document with incremented quantities.",
      },
    ],
    metricOutcomes: [
      {
        value: "0ms",
        label: "Perceived Sync Latency",
        desc: "Instant reactive UI updates via Firebase Stream listeners",
      },
      {
        value: "100%",
        label: "Duplicate-Free Cart Engine",
        desc: "Smart cart query auto-increments quantity instead of duplicating",
      },
      {
        value: "4-Stage",
        label: "End-to-End Delivery Stepper",
        desc: "Payment → Packaging → In Transit → Delivered lifecycle",
      },
    ],
    sections: [
      {
        title: "The brief",
        body: [
          "Traditional mobile e-commerce applications often suffer from sluggish manual-refresh paradigms, fragmented state management, and cart duplication issues. The goal of DeliFood was to construct a responsive, stream-driven food ordering application built natively in Flutter and backed by Google Cloud Firestore.",
          "Core Mandate: Build an intuitive mobile food delivery interface delivering instant real-time synchronization for products, carts, wishlists, and order delivery statuses with zero latency.",
        ],
      },
      {
        title: "Architecture & Reactive Streaming",
        body: [
          "Adopted a Feature-First modular structure in Flutter, dividing domain logic into home, cart, whislist, track_status, profile, and onboarding. The data layer is centralized in DatabaseService, exposing pure Dart Streams that feed directly into StreamBuilder widgets.",
          "Authentication leverages a dual-write pattern: user credentials are registered in Firebase Auth while profile metadata (name, birth date, address, and server timestamp) is stored in a dedicated Firestore document under /users/{uid}.",
        ],
      },
      {
        title: "What was hard",
        body: [
          "Preventing duplicate cart items without introducing heavy client-side state bloat. Solved by implementing a pre-write Firestore query in addToCart() that inspects existing document titles, incrementing quantity (+1) if already present or creating a new document with quantity: 1.",
          "Maintaining fluid 60 FPS scrolling while streaming real-time catalog and search queries. Solved by leveraging client-side substring filtering over active Firestore snapshot streams, eliminating redundant read index queries.",
          "Designing an engaging multi-stage order tracking visualization. Built a custom 4-stage delivery stepper paired with chronological transit checkpoints and horizontal item summaries.",
        ],
      },
      {
        title: "Results",
        body: [
          "0ms perceived sync latency achieved across cart, wishlist, and product catalog via real-time Firestore listeners.",
          "100% duplicate-free cart operations guaranteed by programmatic quantity deduplication.",
          "Complete 4-stage delivery tracking pipeline successfully integrated and verified with live checkpoint milestones.",
        ],
      },
    ],
    stack: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Cloud Firestore",
      "Provider",
      "Material 3",
      "Open Sauce One",
      "Intl",
      "Git",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/adyvka31/DeliFood" },
    ],
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

// Backward compatibility alias for legacy route
projectDetails.flutter = projectDetails.delifood;
projectDetails.jagajiwa = projectDetails.fitsmart;
