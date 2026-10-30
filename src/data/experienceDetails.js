import kepkImg from "../assets/kepk.webp";
import databankImg from "../assets/databank.webp";
import richobahariImg from "../assets/richobahari.webp";

// Field & on-site documentation archives
import ptardyanda1 from "../assets/ptardyanda/ptardyanda1.webp";
import ptardyanda2 from "../assets/ptardyanda/ptardyanda2.webp";
import ptardyanda3 from "../assets/ptardyanda/ptardyanda3.webp";

import ptintisel1 from "../assets/ptintisel/ptintisel1.webp";
import ptintisel2 from "../assets/ptintisel/ptintisel2.webp";
import ptintisel3 from "../assets/ptintisel/ptintisel3.webp";

import umj1 from "../assets/umj/umj1.webp";
import umj2 from "../assets/umj/umj2.webp";
import umj3 from "../assets/umj/umj3.webp";

// Indexed by the slug generated in portfolio.js (slugify(`${company}-${role}`))
export const experienceDetails = {
  "pt-ardyanda-digital-inovasi-full-stack-developer-internship": {
    subtitle: "PT Ardyanda Digital Inovasi (Software Engineering & Digital Solutions)",
    roleTitle: "Full Stack Developer Intern",
    statusBadge: "Active Corporate Internship",
    period: "Jul 2026 — Jan 2027 · Present",
    summary:
      "Selected through a competitive 5-round interview process for the mandatory 12th-grade vocational internship. Originally brought on as a Backend Developer, rapidly expanded into a Full Stack Developer handling both internal enterprise financial systems (payroll, employee cash advance engines) and multi-industry client platforms (healthcare, mosque ERP, CMS). Represented the engineering team in client stakeholder meetings and served as company Master of Ceremonies (MC) for corporate events.",
    meta: [
      { label: "Role", value: "Full Stack Developer Intern (Orig. Backend Intern)" },
      { label: "Organization", value: "PT Ardyanda Digital Inovasi" },
      { label: "Program", value: "12th Grade Mandatory 1-Year Vocational Internship" },
      { label: "Period", value: "Jul 2026 — Jan 2027 · Present (Active)" },
      { label: "Selection", value: "Competitive Hiring (Mass Applications, 5 Interview Rounds)" },
      { label: "Tech Stack", value: "RESTful APIs, Full Stack Architecture, SQL Schemas, Agile" },
    ],
    kpis: [
      {
        value: "5 Rounds",
        label: "Interview Rigor",
        note: "Earned internship placement after a month of nationwide mass applications and 5 rigorous interviews",
      },
      {
        value: "Backend → Full Stack",
        label: "Role Expansion",
        note: "Elevated from backend tasks to full-stack feature delivery, client syncs, and stakeholder representation",
      },
      {
        value: "Multi-Domain",
        label: "Production Systems",
        note: "Engineered internal payroll & loan ledgers, plus client platforms across healthcare, mosque ERP, and CMS",
      },
      {
        value: "Company MC",
        label: "Cultural Leadership",
        note: "Appointed Master of Ceremonies and core committee for corporate Independence Day celebrations",
      },
    ],
    story: {
      headline: "From the Anxiety of Mass Applications to the Company Stage",
      lead: "How proactive preparation, relentless adaptability, and stepping onto the stage shattered the boundaries of a high school internship.",
      quote:
        "The leap from a high schooler nervously submitting resumes to a trusted full-stack engineer representing our team in client meetings and commanding the stage as company MC taught me a lasting truth: relentless curiosity and a proactive mindset will always shatter the typical expectations of an intern.",
      chapters: [
        {
          chapter: "01",
          title: "The Waiting Game: 5 Rounds and a Month of Hustle",
          content:
            "At our vocational boarding school, the entire 12th grade is dedicated to a mandatory one-year internship. Knowing the competition from students across the country would be ruthless, I refused to leave my fate to chance. By the end of 11th grade, I was already grinding: building my personal portfolio website from scratch, refining my resume, and polishing my LinkedIn presence. What followed was a grueling month of mass-applying across job boards, waking up to the constant anxiety of silence and waiting. Five intense interview rounds tested every facet of my foundational engineering and mental fortitude. When the formal offer for a Backend Developer Internship arrived from PT Ardyanda Digital Inovasi for the July 2026 – January 2027 cycle, the relief was overwhelming. But I knew the real test was just beginning.",
        },
        {
          chapter: "02",
          title: "Unfamiliar Stacks, Zero Excuses, Ahead of Schedule",
          content:
            "Walking into a fast-paced corporate software house on day one was humbling. The company's production systems ran on programming languages, frameworks, and architectural patterns I was barely familiar with. I had a choice: lean on my 'intern' status as an excuse to move slowly, or treat it as an accelerated masterclass. I dove in headfirst—spending evenings dissecting codebases, reading documentation, and setting a non-negotiable personal standard: every task assigned to me had to be completed cleanly and well ahead of the deadline. That velocity didn't go unnoticed. Within weeks, engineering management expanded my remit from backend APIs to full-stack feature development. Soon, I wasn't just fixing minor bugs; I was building core modules for internal financial platforms, delivering client solutions, and sitting in client stakeholder meetings representing our development team.",
        },
        {
          chapter: "03",
          title: "Beyond the Terminal: The Master of Ceremonies",
          content:
            "Technical skill might get you in the door, but genuine human connection defines how far you grow. Throughout the internship, I made it a point to listen, collaborate, and build authentic friendships across departments—from UI/UX designers and QA testers to project managers and corporate executives. That proactive camaraderie led to an unexpected honor: the company appointed me as a core committee member and the Master of Ceremonies (MC) for internal company events, including our official Indonesian Independence Day celebration. Standing on stage with a microphone in front of senior engineers, department heads, and C-level executives was exhilarating. It transformed my public speaking, shattered my fear of executive communication, and proved that being an engineer never means hiding behind a screen.",
        },
      ],
    },
    contributionsTitle: "Production Modules & Engineering Responsibilities",
    contributionsLead:
      "Key internal business systems, multi-industry client solutions, and cross-functional responsibilities delivered under Agile standards.",
    contributions: [
      {
        id: "internal-financial-suite",
        title: "Internal Business, Payroll & Employee Loan Engine",
        tag: "Internal Enterprise Systems",
        desc: "Engineered and maintained mission-critical internal business applications managing company payroll calculations, financial workflows, and employee cash advance (loan) disbursements.",
        points: [
          "Automated monthly payroll calculations factoring in attendance records, variable allowances, and tax adjustments",
          "Architected employee cash advance (kasbon) workflow with multi-level approval hierarchies and automated balance deductions",
          "Implemented atomic financial transaction ledgers preventing double-entry discrepancies and calculation errors",
        ],
      },
      {
        id: "restful-apis-db",
        title: "RESTful APIs, Database Design & Business Logic",
        tag: "Backend Engineering",
        desc: "Designed and implemented robust backend features, RESTful API contracts, and relational database schemas supporting complex enterprise workflows.",
        points: [
          "Designed normalized database schemas with foreign key integrity and optimized indexes for fast query retrieval",
          "Authored well-documented RESTful endpoints consumed by multi-platform frontend clients",
          "Engineered validation middleware and input sanitization guards securing internal endpoints against malformed data",
        ],
      },
      {
        id: "client-solutions-cms",
        title: "Multi-Industry Client Solutions: Healthcare, Mosque & CMS",
        tag: "Client Projects",
        desc: "Participated in high-impact client engagements across diverse sectors, engineering custom administration dashboards, Content Management Systems (CMS), and domain platforms.",
        points: [
          "Contributed to specialized Mosque Management Systems digitizing operational schedules, endowments, and community finances",
          "Developed healthcare and hospital management modules streamlining patient administration and service logging",
          "Engineered modular CMS dashboards enabling client non-technical staff to control public web assets safely",
        ],
      },
      {
        id: "fullstack-stakeholder",
        title: "Full Stack Expansion & Stakeholder Representation",
        tag: "Frontend & Client Liaison",
        desc: "Supported frontend development across corporate websites, company profiles, and e-commerce platforms, representing the engineering team in client requirement syncs.",
        points: [
          "Developed responsive, accessible user interfaces following Figma component guidelines and brand design systems",
          "Represented the development team in client stakeholder meetings to translate business requirements into technical specs",
          "Collaborated closely with designers and project managers to ensure zero misalignment between design and code",
        ],
      },
      {
        id: "agile-code-quality",
        title: "Agile Cadence, Code Reviews & Performance Tuning",
        tag: "Engineering Culture",
        desc: "Thrived within an Agile development environment utilizing Git version control, participating in sprint rituals, peer code reviews, and performance optimization.",
        points: [
          "Actively participated in daily standups, sprint planning, and collaborative PR reviews maintaining codebase health",
          "Assisted in profiling bottlenecks, squashing production bugs, and refactoring legacy routines for maintainability",
          "Embraced continuous feedback from senior developers to adopt production-level clean code standards",
        ],
      },
    ],
    takeawaysTitle: "Personal Growth & Professional Retrospective",
    takeawaysLead:
      "Core lessons on outworking expectations, conquering unfamiliar territory, and cultivating executive communication as a high school intern.",
    takeaways: [
      {
        title: "Never Let an 'Intern' Title Limit Your Ambition",
        desc: "An internship is only as small as your own mindset. When you step into a room, refuse to treat yourself as a temporary bystander. By delivering ahead of time and taking initiative on unassigned problems, the team quickly stops treating you as an intern and starts trusting you as a core peer.",
      },
      {
        title: "Rapid Learning is a Superpower",
        desc: "Entering an office with completely unfamiliar languages and frameworks was terrifying at first. But pushing through the discomfort proved that programming languages are just tools—what matters most is foundational system thinking, mental agility, and the discipline to learn on the fly.",
      },
      {
        title: "Engineers Who Can Speak Compound Their Value",
        desc: "Serving as the company MC and representing our team in client stakeholder meetings taught me that technical excellence is amplified tenfold by emotional intelligence and clear verbal communication. The ability to command a room is just as vital as writing clean code.",
      },
    ],
    creditsTitle: "Mentorship & Corporate Family",
    creditsLead:
      "Profoundly grateful to the mentors, colleagues, and leadership at PT Ardyanda Digital Inovasi who believed in a high schooler's potential.",
    credits: [
      {
        name: "Engineering & Management Leadership",
        role: "PT Ardyanda Digital Inovasi",
        desc: "The senior engineers, project managers, and directors who took a chance on a vocational student, mentored me through steep technical curves, and entrusted me with client-facing responsibilities.",
      },
      {
        name: "Cross-Functional Colleagues & Event Committee",
        role: "Internal Workplace Family",
        desc: "Designers, QA engineers, and department peers whose warm welcome and camaraderie made it possible to step out of the code terminal and onto the company stage as Master of Ceremonies.",
      },
      {
        name: "SMK IDN Boarding School Internship Program",
        role: "Academic & Vocational Foundation",
        desc: "Designed a rigorous curriculum dedicating the final year to full-time enterprise immersion, pushing students to compete and excel in the real tech industry.",
      },
    ],
    documentationTitle: "Corporate Life & Engineering Records",
    documentationLead:
      "A look into our daily engineering sprints, all-hands cultural celebrations, and the office environment at PT Ardyanda Digital Inovasi.",
    documentation: [
      {
        id: "ardyanda-all-hands",
        image: ptardyanda1,
        tag: "All-Hands Culture",
        title: "Company Batik Day & Department Gathering",
        desc: "All-hands gathering with the entire engineering, design, and management family at the PT Ardyanda Digital Inovasi office.",
      },
      {
        id: "ardyanda-workstation",
        image: ptardyanda2,
        tag: "Engineering Sprint",
        title: "Local Development & Infrastructure Workstation",
        desc: "Active development workstation running local builds, REST APIs, and enterprise cloud infrastructure for client systems.",
      },
      {
        id: "ardyanda-independence-day-mc",
        image: ptardyanda3,
        tag: "17 Agustus & Company MC",
        title: "Indonesian Independence Day & Master of Ceremonies",
        desc: "Serving as Master of Ceremonies (MC) and core event committee during PT Ardyanda's Indonesian Independence Day celebration—leading festivities, engaging senior leadership and colleagues, and proving that an engineer's impact goes far beyond the terminal.",
      },
    ],
    privacyBanner: {
      badge: "Enterprise Confidentiality & NDA Standard",
      title: "Proprietary Enterprise & Client Infrastructure",
      description:
        "To honor client non-disclosure agreements (NDAs) and corporate security protocols at PT Ardyanda Digital Inovasi, specific client brand names, internal financial repositories, live healthcare databases, and proprietary schemas are kept confidential. The technical methodologies, domain architectures, and leadership responsibilities described above reflect real-world production execution delivered under strict enterprise discretion.",
      tags: [
        "Corporate NDA Protected",
        "Proprietary Financial Engines",
        "Healthcare Data Governance",
        "Mosque Management ERP",
        "Agile Software House",
      ],
      note: "Internal payroll algorithms, hospital workflows, and client management databases are the exclusive intellectual property of PT Ardyanda Digital Inovasi and its enterprise clients.",
    },
    stack: [
      "Backend REST APIs",
      "Database Schemas",
      "Full Stack Development",
      "Agile & Scrum",
      "Git & Code Review",
      "Payroll & Financial Systems",
      "CMS Architecture",
      "Enterprise Security",
    ],
  },

  // Aliases for PT Ardyanda Digital Inovasi
  get "pt-ardyanda-digital-inovasi-backend-developer-intern"() {
    return this["pt-ardyanda-digital-inovasi-full-stack-developer-internship"];
  },
  get "pt-ardyanda-digital-inovasi-full-stack-developer-intern"() {
    return this["pt-ardyanda-digital-inovasi-full-stack-developer-internship"];
  },
  get "pt-ardyanda-digital-inovasi-full-stack-developer"() {
    return this["pt-ardyanda-digital-inovasi-full-stack-developer-internship"];
  },
  get "pt-ardyanda-digital-inovasi"() {
    return this["pt-ardyanda-digital-inovasi-full-stack-developer-internship"];
  },
  get "ardyanda"() {
    return this["pt-ardyanda-digital-inovasi-full-stack-developer-internship"];
  },

  "cv-richo-bahari-frontend-developer-freelance": {
    subtitle: "CV. Richo Bahari (General Contractor & Industrial Engineering)",
    roleTitle: "Lead Frontend Engineer & UI/UX Architect",
    statusBadge: "Production Live (Freelance)",
    period: "May 2026 — Aug 2026",
    summary:
      "Commissioned by CentraDev to lead the frontend engineering and UI/UX architecture for CV. Richo Bahari, an established industrial general contractor operating across West Java and Jabodetabek. Transformed scattered PDF brochures and unorganized worksite photo archives into an enterprise-grade digital flagship built on Next.js 16, React 19, and Tailwind CSS v4—dignifying years of real physical labor, heavy steel fabrication, and strict K3 Zero Accident safety standards.",
    meta: [
      { label: "Role", value: "Lead Frontend Engineer & UI/UX Architect" },
      { label: "Client / Entity", value: "CV. Richo Bahari (Industrial General Contractor)" },
      { label: "Agency / Team", value: "CentraDev Team" },
      { label: "Engagement", value: "Freelance (Production Live)" },
      { label: "Period", value: "May 2026 — Aug 2026" },
      { label: "Tech Stack", value: "Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript" },
    ],
    kpis: [
      {
        value: "Zero Acc.",
        label: "K3 Safety Record",
        note: "Digitized and highlighted certified workplace safety standards essential for tier-1 factory tender bids",
      },
      {
        value: "5 Pillars",
        label: "Engineering Capabilities",
        note: "Unified Civil, MEP, Steel Fabrication, Storage Racking, and Logistics into a structured interactive catalog",
      },
      {
        value: "< 1.2s",
        label: "Sub-Second LCP",
        note: "Optimized heavy high-resolution worksite galleries for fast loading on throttled factory floor connections",
      },
      {
        value: "100%",
        label: "Modern Architecture",
        note: "Next.js 16 App Router, React 19, React Compiler, and Tailwind CSS v4 with zero legacy bloat",
      },
    ],
    story: {
      headline: "Giving Hard-Working Builders the Digital Dignity They Deserved",
      lead: "How modern web engineering bridged the divide between grueling physical craftsmanship and corporate procurement trust.",
      quote:
        "Seeing the pride in the client's eyes when their years of sweat, steel fabrication, and zero-accident field safety were finally presented with world-class digital elegance reminded me why I write code: software at its best doesn't replace human labor, it dignifies and champions it.",
      chapters: [
        {
          chapter: "01",
          title: "The Invisible Builders Behind Modern Industry",
          content:
            "Every single day across the industrial corridors of Sukabumi, Cikarang, and greater West Java, the field crews of CV. Richo Bahari perform grueling, indispensable physical work. They pour rigid concrete pavement under punishing heat, weld heavy-duty structural steel jigs, and assemble multi-tiered warehouse pallet racking inside giant manufacturing facilities for clients like NGK Ceramics and PT Selatan Jaya. Yet outside those factory walls, their reputation was essentially invisible. When competing against multi-billion rupiah contractors for high-value factory tenders, they were stuck sending fragmented, low-resolution PDF brochures and raw WhatsApp photos. Their physical craftsmanship was exceptional, but their digital presence didn't do them justice. When CentraDev brought me in as Lead Frontend Engineer, I didn't see it as merely building another corporate website; I felt an immediate personal responsibility to give these hard-working builders the digital dignity they had earned with their own hands.",
        },
        {
          chapter: "02",
          title: "Architectural Empathy: Designing for Two Disparate Worlds",
          content:
            "Engineering this platform required deep empathy for two completely opposing user personas. On one side stood the corporate procurement committee in an air-conditioned Jakarta boardroom, inspecting K3 Zero Accident safety protocols and ISO compliance on retina displays. On the other side stood the rugged plant supervisor in Sukabumi, attempting to pull up civil engineering specs on a dust-covered phone over a fragile 3G connection in the middle of a noisy fabrication workshop. To serve both without compromise, I rejected bloated templates and built an ultra-lean foundation on Next.js 16 App Router, React 19, and Tailwind CSS v4. By leveraging React Server Components, responsive AVIF image compression pipelines, and automatic memoization via the React Compiler, we achieved sub-1.2s page loads. We paired this speed with a tactile, blueprint-inspired design system that translates complex industrial machinery into an intuitive, respectful visual experience.",
        },
        {
          chapter: "03",
          title: "From Scattered PDFs to Corporate Pride",
          content:
            "The most fulfilling moment of any project isn't when the code compiles without errors; it's the human reaction during handover. When the leadership and project coordinators of CV. Richo Bahari first explored the live platform—seeing their 5 core service pillars clearly articulated, their verified client case studies documented with measurable results, and their safety record given the prestige it deserved—the atmosphere completely changed. They weren't just looking at web design; they saw their life's work respected and validated. The platform immediately became their primary digital credential for bidding on factory expansions and manufacturing tenders, with direct consultation requests flowing straight into their communication pipeline. As a vocational high school student balancing late-night development sprints with dormitory life, this experience grounded me: technology isn't about Silicon Valley buzzwords; it's about amplifying the dignity of real human effort.",
        },
      ],
    },
    contributionsTitle: "Key Architectural Contributions & UI/UX Engineering",
    contributionsLead:
      "Modernizing industrial contractor presentation through bleeding-edge frontend architecture, tactile design systems, and responsive edge performance.",
    contributions: [
      {
        id: "modern-stack-architecture",
        title: "Bleeding-Edge Next.js 16 & React 19 Foundation",
        tag: "Core Architecture",
        desc: "Architected the corporate web platform using Next.js 16 App Router, React 19, React Compiler, and Tailwind CSS v4, achieving uncompromising performance and optimal search crawler visibility.",
        points: [
          "React Server Components delivering instant First Contentful Paint (FCP) and rich metadata SEO for factory search queries",
          "React Compiler automatic memoization eliminating unnecessary re-renders across dynamic interactive elements",
          "Strongly-typed TypeScript data repositories cleanly decoupling industrial project models from layout presentation",
        ],
      },
      {
        id: "tactile-industrial-ui",
        title: "Tactile Industrial Design System & Bento Showcase",
        tag: "UI/UX Engineering",
        desc: "Crafted a bespoke visual identity featuring technical blueprint grid lines, monospace typography tokens, and interactive bento cards reflecting heavy engineering precision.",
        points: [
          "Technical blueprint aesthetic pairing Plus Jakarta Sans with Space Grotesk accents for an authentic engineering look",
          "Interactive bento masonry showcasing Civil, MEP, Steel Fabrication, Storage Racking, and Logistics capabilities",
          "Subtle kinetic micro-interactions and smooth Framer Motion transitions designed to feel solid, deliberate, and industrial",
        ],
      },
      {
        id: "responsive-field-optimization",
        title: "Field-Ready Performance & Edge Media Pipeline",
        tag: "Performance & Mobile",
        desc: "Engineered responsive image processing and mobile-first layouts so plant managers and field supervisors can inspect worksite proofs on weak factory cellular connections.",
        points: [
          "Automated AVIF and WebP responsive picture formatting reducing heavy industrial gallery bandwidth by up to 75%",
          "Sub-1.2s Largest Contentful Paint (LCP) benchmarked across real-world 4G networks and factory Wi-Fi environments",
          "Mobile-first navigation with tactile bottom-sheet drawers and single-tap direct engineering consultation links",
        ],
      },
      {
        id: "case-studies-k3",
        title: "Structured Industrial Case Studies & K3 Safety Standards",
        tag: "Enterprise Credibility",
        desc: "Transformed unstructured worksite histories into verified, structured corporate case studies emphasizing measurable outcomes and strict zero-accident safety records.",
        points: [
          "Challenge-Solution-Result framework detailing projects for PT Selatan Jaya, NGK Ceramics, and Sanwa Musen",
          "Prominent K3 Zero Accident safety protocol matrix reassuring tier-1 factory tender audit committees",
          "Integrated downloadable executive marketing collateral and 4:5 executive overview flyers",
        ],
      },
      {
        id: "conversion-pipeline",
        title: "Streamlined Commercial Inquiry & Consultation Funnel",
        tag: "Business Impact",
        desc: "Engineered frictionless contact funnels routing corporate inquiries directly to executive estimators and field directors.",
        points: [
          "Contextual WhatsApp consultation triggers pre-populating specific industrial service inquiries",
          "Server-side sanitized contact form pipeline preventing spam submissions while maintaining zero data loss",
          "Edge-cached static deployment on Vercel with zero server overhead and 99.99% uptime",
        ],
      },
    ],
    takeawaysTitle: "Personal Growth & Human Retrospective",
    takeawaysLead:
      "Reflections on craftsmanship, empathy in engineering, and the profound responsibility of representing real human effort.",
    takeaways: [
      {
        title: "Software Should Dignify Physical Craft",
        desc: "We often celebrate pure tech startups, but traditional physical industries—welding, civil paving, warehouse racking—are the literal backbone of modern life. Helping these craftsmen present their work with digital excellence made me realize that code has the power to uplift and honor honest physical labor.",
      },
      {
        title: "Performance is an Act of Empathy",
        desc: "When you know a field supervisor might need to open your site under direct sunlight on a dusty factory floor with two bars of cellular signal, optimizing web vitals stops being an abstract Lighthouse score—it becomes a direct gesture of respect for the user's time and conditions.",
      },
      {
        title: "Balancing Commitments Sharpens Shipping Discipline",
        desc: "Leading frontend engineering for an enterprise corporate client while managing vocational boarding school academics and existing project responsibilities taught me ruthless prioritization, clean component boundaries, and shipping discipline without cutting corners.",
      },
    ],
    creditsTitle: "Collaboration & Acknowledgments",
    creditsLead:
      "Deeply thankful for the team synergy, client openness, and shared dedication that brought this corporate flagship to life.",
    credits: [
      {
        name: "CentraDev Team",
        role: "Agency & Engineering Collective",
        desc: "The forward-thinking engineering collective that brought this opportunity together and facilitated seamless client collaboration.",
      },
      {
        name: "CV. Richo Bahari Leadership & Field Crew",
        role: "Client & Industrial Craftsmen",
        desc: "The dedicated team of contractors, engineers, and welders across West Java who trusted us with their corporate identity and shared their inspiring field stories.",
      },
      {
        name: "SMK IDN Boarding School Ecosystem",
        role: "Academic & Vocational Foundation",
        desc: "The environment that fostered the technical discipline and work ethic necessary to deliver production-grade software alongside rigorous daily studies.",
      },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "TypeScript",
      "React Compiler",
      "Vercel",
      "Framer Motion",
      "Industrial EPC",
    ],
    relatedProject: "richobahari",
    relatedProjectCard: {
      slug: "richobahari",
      title: "CV. Richo Bahari",
      subtitle: "Corporate Profile & Industrial Engineering Project Catalog",
      summary:
        "Deep-dive case study exploring the Next.js 16 App Router architecture, tactile blueprint design system, bento masonry, and edge performance optimizations built for CV. Richo Bahari.",
      image: richobahariImg,
      tags: ["Next.js 16", "React 19", "Tailwind CSS v4", "TypeScript", "Industrial EPC"],
    },
  },

  // Aliases for Richo Bahari backward compatibility
  get "pt-rico-bahari-frontend-developer-freelance"() {
    return this["cv-richo-bahari-frontend-developer-freelance"];
  },
  get "cv-richo-bahari-lead-frontend-engineer-freelance"() {
    return this["cv-richo-bahari-frontend-developer-freelance"];
  },
  get "richobahari"() {
    return this["cv-richo-bahari-frontend-developer-freelance"];
  },

  "pt-intisel-prodaktifakom-full-stack-engineer-freelance": {
    subtitle: "PT Intisel Prodaktifakom (National Telecom Contractor)",
    roleTitle: "Full Stack Engineer & Project Manager",
    statusBadge: "Freelance Contract Extended (Active)",
    period: "Feb 2026 — Present · 9 mos",
    summary:
      "Pitched, architected, and shipped 'Databank', an enterprise-grade ERP system for PT Intisel Prodaktifakom, a national telecom contractor. What originated as a bold 3-month school competency exam (UJIKOM) initiative evolved into an extended 9-month professional freelance engagement, managing everything from Purchase Orders and automated payroll to enterprise data synchronization with Huawei.",
    meta: [
      { label: "Role", value: "Full Stack Engineer & Project Manager" },
      { label: "Organization", value: "PT Intisel Prodaktifakom (Telecom Contractor)" },
      { label: "Engagement", value: "Freelance (Extended from 3-Month UJIKOM to 9 Mos)" },
      { label: "Period", value: "Feb 2026 — Present · 9 mos (Active)" },
      { label: "Team", value: "Rafif Sava Adyvka (Full Stack), Moreno Ibrahim (Frontend)" },
      { label: "Tech Stack", value: "React, CSS Native, NestJS, Prisma ORM, PostgreSQL" },
    ],
    kpis: [
      {
        value: "9 Mos",
        label: "Contract Extension",
        note: "Client extended freelance contract through end of 2026 immediately following UJIKOM handover",
      },
      {
        value: "100%",
        label: "Production Deployment",
        note: "Actively powers national telecom contractor daily operations across departments and field teams",
      },
      {
        value: "2-Person",
        label: "High School Dev Team",
        note: "Built an enterprise-grade ERP from scratch with zero senior developers or pre-built templates",
      },
      {
        value: "Huawei",
        label: "Enterprise Integration",
        note: "Engineered automated data synchronization bot bridging Databank with Huawei ISDP workflows",
      },
    ],
    story: {
      headline: "From High School Dorm Initiative to National Telecom Operations",
      lead: "How pitching an ambitious enterprise ERP for our vocational competency exam turned into a multi-quarter professional engagement.",
      quote:
        "Knowing that the system I engineered from my high school dorm is actively driving a national company's daily operations gives me an incredible sense of pride. It proved to me that taking bold initiatives and embracing heavy responsibilities can lead to unimaginably rewarding outcomes.",
      chapters: [
        {
          chapter: "01",
          title: "The Bold Pitch: Beyond a Basic Website",
          content:
            "Our school's competency exam (UJIKOM) required us to deliver a tech project for a real-world client. Rather than settling for a basic website or an academic simulation, I took a bold initiative: pitching a full-scale ERP system to several established companies. After multiple attempts, PT Intisel Prodaktifakom, a national telecom contractor handling mission-critical network infrastructure, accepted my proposal. Partnering with my teammate Moreno Ibrahim, I took on the dual role of Project Manager and Full Stack Developer to engineer 'Databank' — a comprehensive internal management system designed to streamline everything from Purchase Orders (PO) to employee attendance and automated payroll.",
        },
        {
          chapter: "02",
          title: "No Seniors, No Shortcuts: Engineering on the Fly",
          content:
            "Building an enterprise-grade system from scratch was intensely demanding. Utilizing React and NestJS, we architected the database, implemented secure Role-Based Access Control, and designed a highly responsive interface. Honestly, the hardest part wasn't the coding itself; it was project management. We had to define the scope and make critical architectural decisions entirely on our own, without any senior developers to guide us. We figured things out on the fly, balancing this heavy workload with our regular boarding school schedule to meet a strict three-month deadline.",
        },
        {
          chapter: "03",
          title: "Production Handover & Extended 2026 Freelance Contract",
          content:
            "We successfully delivered a fully functional system right on schedule. But the biggest surprise came immediately after the handover: the client was so impressed by the platform's utility that they offered to extend my freelance contract through the end of 2026. What started as a three-month school assignment evolved into a nine-month professional engagement to build advanced features, including data synchronization with Huawei. Knowing that the system I engineered from my high school dorm is actively driving a national company's daily operations proved to me that taking bold initiatives and embracing heavy responsibilities leads to unimaginably rewarding outcomes.",
        },
      ],
    },
    contributionsTitle: "Key Responsibilities & Architectural Deliverables",
    contributionsLead:
      "Core modules, security systems, and infrastructure engineered from the ground up to power PT Intisel's daily operations.",
    contributions: [
      {
        id: "po-management",
        title: "Purchase Order (PO) & Billing Engine",
        tag: "Procurement Lifecycle",
        desc: "Developed an end-to-end Purchase Order module to streamline internal procurement submissions, multi-stage approval hierarchies, and billing/invoicing processes.",
        points: [
          "End-to-end PO lifecycle handling: submission, tiered managerial approval, and invoicing generation",
          "Relational tracking for thousands of telecom equipment line items and subcontractor billings",
          "Audit-trailed stage gates preventing payment releases without verified delivery milestones",
        ],
      },
      {
        id: "rbac-security",
        title: "Security & Dynamic Access Control (RBAC)",
        tag: "Security Architecture",
        desc: "Implemented a robust authentication system with Dynamic Role-Based Access Control (RBAC) to ensure secure data handling and tiered user permissions.",
        points: [
          "Tiered access control across multiple user roles (Field Technicians, Procurement, HR, Executives)",
          "Secure JWT authentication with password hashing, session tokens, and route protection guards",
          "Strict API-level security isolating sensitive procurement and payroll records from unauthorized access",
        ],
      },
      {
        id: "core-management-hr",
        title: "Core Management Suite: Attendance & Automated Payroll",
        tag: "HR & Financial Operations",
        desc: "Engineered a multi-functional management module integrating employee attendance tracking, automated payroll calculations, and comprehensive data CRUD operations.",
        points: [
          "Automated salary computations factoring in daily attendance records, allowances, and tax deductions",
          "Attendance management module tracking technician check-ins and operational staff logs",
          "Comprehensive employee master data directory with full lifecycle CRUD capabilities",
        ],
      },
      {
        id: "dynamic-ui-ux",
        title: "Dynamic UI/UX & Real-time Operations Dashboard",
        tag: "Frontend Architecture",
        desc: "Architected a highly responsive, interactive, and dynamic user interface using React and Native CSS, featuring a unified command center and full Light & Dark Mode support.",
        points: [
          "Real-time operational dashboard consolidating procurement status, attendance health, and payroll data",
          "Full Light & Dark Mode support engineered with native CSS tokens for optimized accessibility and zero UI flicker",
          "High-density responsive data tables with instant multi-column search, filtering, and pagination",
        ],
      },
      {
        id: "scalable-backend",
        title: "Scalable NestJS Backend & PostgreSQL Architecture",
        tag: "Backend & Database",
        desc: "Built a robust, scalable backend using NestJS and Prisma ORM, utilizing PostgreSQL as the primary relational database for high-performance data storage.",
        points: [
          "Strict modular architecture decoupling core domain services (databank, outsource, attendance, user auth)",
          "Atomic database transactions wrapping complex multi-entity mutations to prevent data corruption",
          "Engineered RESTful APIs from scratch with clean architectural boundaries and zero shortcuts",
        ],
      },
      {
        id: "huawei-sync",
        title: "Huawei ISDP Enterprise Data Synchronization",
        tag: "Extended Scope & Telecom Sync",
        desc: "Engineered automated data synchronization mechanisms bridging Databank with Huawei's ISDP ecosystem as part of the extended contract scope.",
        points: [
          "Automated background data pipeline synchronizing telecom line items and status tracking with Huawei ISDP",
          "Trigger-based synchronization reducing manual re-entry of project progress across field operations",
          "Strict data reconciliation and validation rules ensuring data consistency across enterprise boundaries",
        ],
      },
    ],
    takeawaysTitle: "Lessons Learned Under Pressure",
    takeawaysLead:
      "Key insights gained from taking bold initiatives, managing enterprise scope with no seniors, and balancing production code with boarding school life.",
    takeaways: [
      {
        title: "Bold Initiatives Create Real Opportunities",
        desc: "Refusing to settle for a basic website or simulation and boldly pitching real companies turned a mandatory school exam into a 9-month professional engagement running production software.",
      },
      {
        title: "Project Management Over Syntax",
        desc: "Without senior developers to guide us, the hardest part wasn't writing NestJS or React code—it was managing scope, defining boundaries, and making high-stakes decisions under a strict 3-month deadline while balancing boarding school life.",
      },
      {
        title: "Pride in Real Production Responsibility",
        desc: "Knowing that code written in a high school dorm powers the daily operations of a national telecommunications contractor proved that young engineers can deliver enterprise-grade impact when they take complete ownership.",
      },
    ],
    creditsTitle: "Team & Project Partners",
    creditsLead:
      "Grateful for the incredible collaboration, client partnership, and academic framework that enabled this achievement.",
    credits: [
      {
        name: "Moreno Ibrahim",
        role: "Project Partner & Frontend Engineer",
        desc: "Handled the entire frontend side with excellence—building responsive React interfaces with Native CSS, Light/Dark mode styling, and seamless user experiences. Could not have done this without him.",
      },
      {
        name: "PT Intisel Prodaktifakom",
        role: "Client & National Telecom Contractor",
        desc: "Accepted our bold proposal for their internal ERP, entrusted high school engineers with mission-critical systems, and extended our freelance contract through 2026 to continue driving internal innovation.",
      },
      {
        name: "SMK IDN Boarding School (UJIKOM)",
        role: "Academic Examination Framework",
        desc: "Challenged students to solve real-world problems for real industry clients rather than submitting theoretical toy assignments.",
      },
    ],
    documentationTitle: "Field Coordination & Live Engineering",
    documentationLead:
      "Photographic archives documenting offline stakeholder progress meetings and live backend development for Databank ERP.",
    documentation: [
      {
        id: "intisel-stakeholder-sync-1",
        image: ptintisel1,
        tag: "Stakeholder Coordination",
        title: "Offline Client Meeting & Progress Review",
        desc: "Progress alignment and sprint review session with PT Intisel's client representative alongside co-engineer Moreno Ibrahim.",
      },
      {
        id: "intisel-huawei-sync",
        image: ptintisel2,
        tag: "Telecom Pipeline",
        title: "Huawei ISDP Auto-Merge Bot Development",
        desc: "Live development environment and terminal output running background synchronization of 58 telecom site records into PostgreSQL.",
      },
      {
        id: "intisel-stakeholder-sync-2",
        image: ptintisel3,
        tag: "System Walkthrough",
        title: "PO & Outsource Workflow Demonstration",
        desc: "Direct walkthrough showcasing sequential Purchase Order approvals, billing reconciliation, and field vendor management directly to the client.",
      },
    ],
    stack: [
      "React",
      "CSS Native",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "TypeScript",
      "Docker",
      "Huawei ISDP",
    ],
    links: [
      { label: "LinkedIn Post", url: "https://lnkd.in/p/gpEHsZsu" },
    ],
    relatedProject: "databank",
    relatedProjectCard: {
      slug: "databank",
      title: "Databank ERP Platform",
      subtitle: "Enterprise Telecom Infrastructure & PO Lifecycle Engine",
      summary:
        "Deep-dive case study exploring the modular monolith architecture, sequential approval workflows, HR suite, and Huawei ISDP data sync powering Databank ERP.",
      image: databankImg,
      tags: ["React", "NestJS", "PostgreSQL", "Prisma ORM", "CSS Native", "Telecom ERP"],
    },
  },

  // Aliases for backward-compatibility
  get "pt-intisel-prodaktifakom-software-engineer-contract"() {
    return this["pt-intisel-prodaktifakom-full-stack-engineer-freelance"];
  },
  get "pt-intisel-prodaktifakom-full-stack-engineer-erp-system-development"() {
    return this["pt-intisel-prodaktifakom-full-stack-engineer-freelance"];
  },

  "universitas-muhammadiyah-jakarta-full-stack-engineer-contract": {
    subtitle: "Faculty of Medicine, Universitas Muhammadiyah Jakarta",
    roleTitle: "Full Stack Engineer & Server Architect",
    statusBadge: "Enterprise Contract Completed",
    period: "Jul 2025 — Jan 2026",
    summary:
      "Commissioned in 11th grade to build a full-stack Academic Research Management System from scratch for the Faculty of Medicine at Universitas Muhammadiyah Jakarta. Re-engineered legacy architecture into an enterprise-grade platform standardizing the complete WHO/CIOMS ethical clearance lifecycle.",
    meta: [
      { label: "Role", value: "Full Stack Engineer & Server Architect" },
      { label: "Client / Institution", value: "Faculty of Medicine, Universitas Muhammadiyah Jakarta" },
      { label: "Contract Period", value: "Jul 2025 — Jan 2026 (4-Month Contract)" },
      { label: "Selection", value: "Handpicked (Top 2 of 25 Students in 11th Grade)" },
      { label: "Team", value: "Athallah Muhammad (Partner), Haidar Miqdad (Mentor & PM)" },
      { label: "Tech Stack", value: "Tailwind CSS, JavaScript, Laravel 12, MySQL, AWS" },
    ],
    kpis: [
      {
        value: "Top 2 / 25",
        label: "Cohort Selection",
        note: "Handpicked by the school principal to represent vocational students on our first professional contract",
      },
      {
        value: "4 Months",
        label: "Contract Timeline",
        note: "From greenfield architecture re-design to live production rollout for the medical faculty",
      },
      {
        value: "6 Roles",
        label: "RBAC Governance",
        note: "Segregated portals for Students, Lecturers, Secretariat, Reviewers, and Committee Leadership",
      },
      {
        value: "100%",
        label: "Workflow Digitized",
        note: "Replaced vulnerable legacy systems with paperless WHO/CIOMS 2016 ethical clearance",
      },
    ],
    story: {
      headline: "From Boarding School Routine to an Enterprise Medical Contract",
      lead: "How an unexpected 11th-grade summons turned into our first enterprise-grade full-stack delivery.",
      quote:
        "Beyond dramatically increasing the medical faculty's efficiency, this breakthrough reshaped my mindset. It proved to me that when you have the courage to shoulder massive responsibilities, you unlock potential you never knew you had.",
      chapters: [
        {
          chapter: "01",
          title: "The Unexpected Summon & The Dilemma",
          content:
            "At the beginning of my 11th grade, my school principal unexpectedly summoned me to the office. Out of 25 students, I was handpicked alongside one peer to take on our very first professional contract: developing a full-scale web system for Universitas Muhammadiyah Jakarta (UMJ). Initially, I hesitated. Balancing a rigorous boarding school schedule with a hybrid professional commitment for a major higher-education client felt daunting. However, I chose to silence my doubts and embrace the challenge, recognizing this trust as a rare opportunity to test my practical limits in the real world.",
        },
        {
          chapter: "02",
          title: "The Reality Check & Architectural Shift",
          content:
            "Our initial mission seemed straightforward: modernize an existing repository with UI enhancements. However, inspecting the legacy source code revealed severe security flaws, broken relational integrity, and unmaintainable technical debt. Making a critical architectural call, our 2-person team pitched a complete rebuild from scratch using Laravel 12, MySQL, and Tailwind CSS. We designed a normalized relational database schema from the ground up, built secure authentication with granular Spatie RBAC, and implemented structured state transitions.",
        },
        {
          chapter: "03",
          title: "Production Deployment & Measurable Impact",
          content:
            "After four months of rigorous development, testing, and continuous feedback loops with university administrators, we successfully deployed the production platform on AWS infrastructure. The medical faculty achieved a 100% paperless workflow for WHO/CIOMS 2016 ethical clearance, reducing certificate issuance turnaround from weeks to days. Beyond dramatically increasing the faculty's operational efficiency, this breakthrough proved that when you have the courage to shoulder massive responsibilities, you unlock potential you never knew you had.",
        },
      ],
    },
    contributionsTitle: "Key Architectural Deliverables & Production Modules",
    contributionsLead:
      "Core features and engineering systems engineered from scratch to digitize the medical research ethics lifecycle.",
    contributions: [
      {
        id: "multi-role-clearance",
        title: "Multi-Role Ethical Clearance Lifecycle Workflow",
        tag: "Core Workflow",
        desc: "Architected a sequential ethical clearance submission pipeline supporting dynamic protocol routing between initial submission, administrative screening, expedited/full-board reviewer evaluation, and final ethical clearance certification.",
        points: [
          "Complete WHO/CIOMS 2016 7-standard protocol evaluation form with autosave and live validation",
          "Automated reviewer assignment algorithm routing protocols based on department and expertise",
          "Sequential multi-role state machine managing transitions between 6 user roles",
        ],
      },
      {
        id: "decision-support",
        title: "Ethics Committee Decision Support & Certification",
        tag: "Executive Leadership",
        desc: "Supported multi-level governance hierarchies involving ethics committee leadership (Chair and Secretary) for final decision authorization and automated certificate generation.",
        points: [
          "Automated official A4 DomPDF Ethical Clearance Certificate generation with verification QR codes",
          "Audit logs capturing review history, timestamps, reviewer verdicts, and leadership sign-offs",
          "Post-approval governance module managing protocol amendments, annual extensions, and SAE alerts",
        ],
      },
      {
        id: "system-optimization",
        title: "System Optimization & Security Hardening",
        tag: "Core Engineering",
        desc: "Eliminated legacy bottlenecks and vulnerabilities through atomic database transactions, strict NIK-based authentication, and granular Role-Based Access Control.",
        points: [
          "Atomic DB transactions wrapping multi-step form submissions to guarantee zero partial data corruption",
          "Laravel Fortify integration enforcing 16-digit NIK verification and optional Two-Factor Auth (2FA)",
          "Parameterized Eloquent ORM queries eliminating SQL injection risks across all 24 medical backed enums",
        ],
      },
      {
        id: "role-based-ux",
        title: "Tailored Multi-Role User Experience (UX)",
        tag: "Frontend Architecture",
        desc: "Designed an intuitive, clean interface adapted to the distinct cognitive workflows of students, faculty reviewers, secretariat staff, and committee leaders.",
        points: [
          "Tailwind CSS responsive design optimized for desktop document review and mobile status checks",
          "Interactive SweetAlert2 confirmation dialogs and instant Axios AJAX submission states",
          "RoleComposer view injection providing role-tailored navigation without controller overhead",
        ],
      },
    ],
    takeawaysTitle: "Lessons Learned Under Pressure.",
    takeawaysLead:
      "Practical insights gained from balancing boarding school academics with enterprise production accountability.",
    takeaways: [
      {
        title: "Shouldering Real-World Responsibility",
        desc: "Stepping outside classroom assignments to handle real production data for medical faculty leadership pushed my engineering discipline, maturity, and communication skills years ahead.",
      },
      {
        title: "Strategic Division of Labor",
        desc: "Clear demarcation of frontend workflows and backend services between two developers, combined with unified RBAC standards, allowed our 2-person team to outpace contract milestones.",
      },
      {
        title: "Architectural Integrity First",
        desc: "Taking the initiative to rebuild rather than patch a broken legacy system paid off: zero data loss incidents, sub-second query responses, and a codebase ready for long-term university use.",
      },
    ],
    creditsTitle: "Team & Project Partners.",
    creditsLead:
      "Grateful for the guidance, partnership, and institutional trust that made this milestone possible.",
    credits: [
      {
        name: "Athallah Muhammad Ghiyast Qinthara",
        role: "Project Partner & Co-Engineer",
        desc: "Collaborated on core architecture, database migrations, and joint secretariat workflow modules throughout the 4-month development cycle.",
      },
      {
        name: "Haidar Miqdad",
        role: "Mentor & Project Manager",
        desc: "Provided technical architectural guidance, client milestone coordination, and executive project management.",
      },
      {
        name: "Faculty of Medicine, UMJ",
        role: "Institutional Client & Ethics Committee",
        desc: "Entrusted two 11th-grade vocational students with modernizing the digital infrastructure for their Research Ethics Committee.",
      },
    ],
    documentationTitle: "On-Site Presentations & Secretariat Sprints",
    documentationLead:
      "Capturing our ethics committee system presentation, on-site blade template coding, and database architecture sessions at the Faculty of Medicine.",
    documentation: [
      {
        id: "umj-executive-presentation",
        image: umj1,
        tag: "Stakeholder Presentation",
        title: "Executive Ethics Committee Platform Presentation",
        desc: "Presenting the live SIM KEPK platform to medical faculty leadership, ethics committee members, and mentors in the official meeting room.",
      },
      {
        id: "umj-secretariat-coding",
        image: umj2,
        tag: "On-Site Sprint",
        title: "Secretariat Office View & Blade Template Engineering",
        desc: "Live coding session inside the Research Ethics Committee secretariat office, surrounded by years of paper archives being digitized.",
      },
      {
        id: "umj-database-architecture",
        image: umj3,
        tag: "Core Engineering",
        title: "Database Migration & Permission Schema Architecture",
        desc: "Architecting granular Spatie RBAC permission tables and migrations on MacBook during an on-site stakeholder synchronization meeting.",
      },
    ],
    stack: [
      "Tailwind CSS",
      "JavaScript",
      "Laravel 12",
      "MySQL",
      "AWS",
      "Laravel Fortify",
      "Spatie RBAC",
      "DomPDF",
      "Axios",
    ],
    links: [
      { label: "LinkedIn Post", url: "https://lnkd.in/p/gDXiQQxX" },
    ],
    relatedProject: "kepk",
    relatedProjectCard: {
      slug: "kepk",
      title: "SIM KEPK FK UMJ",
      subtitle: "Academic Research Ethics Management & WHO/CIOMS Clearance Platform",
      summary:
        "Deep-dive case study covering the technical architecture, 24 medical backed enums, 3-tier risk classification, and chapter-by-chapter AJAX review workflows of this platform.",
      image: kepkImg,
      tags: ["Laravel 12", "Tailwind CSS", "MySQL", "AWS", "Fortify", "RBAC"],
    },
  },
};
