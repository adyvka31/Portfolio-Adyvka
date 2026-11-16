// src/data/certificateDetails.js
// Comprehensive, verified, and detailed credentials data for all 23 certificates
import transcriptImg from "../assets/certificates/coding-camp-2026-final-transcript.webp";
import transcriptPdf from "../assets/certificates/coding-camp-2026-final-transcript.pdf";

export const certificateDetails = {
  "cs50-introduction-to-computer-science": {
    "title": "CS50: Introduction to Computer Science",
    "issuer": "Harvard University",
    "issued": "Oct 2025",
    "track": "Computer Science & Systems",
    "effort": "120+ Hours · Verified Curriculum",
    "credentialId": "0b2f666c-4595-4203-8348-1ad6217eacda",
    "verifyUrl": "https://certificates.cs50.io/0b2f666c-4595-4203-8348-1ad6217eacda.pdf",
    "summary": "Harvard University's flagship computer science curriculum covering algorithmic problem-solving, computational thinking, low-level memory allocation, and software architecture across C, Python, SQL, and web technologies.",
    "skills": [
      "Algorithms",
      "Data Structures",
      "C",
      "Python",
      "SQL",
      "Memory Management",
      "Systems Thinking"
    ],
    "highlights": [
      "Algorithmic complexity, sorting/searching paradigms, and Big-O notation",
      "Manual pointer arithmetic, heap vs. stack memory allocation, and buffer safety in C",
      "Relational database schema modeling, queries, and ACID transactions in SQL",
      "Full-stack web application engineering with Python, Flask, and asynchronous JavaScript"
    ],
    "application": "Rebuilt fundamental mental models of runtime execution by understanding raw memory allocations and pointer mechanics in C. This low-level grounding directly elevates debugging speed and memory efficiency in modern web and mobile apps."
  },
  "coding-camp-full-stack-developer": {
    "title": "Coding Camp: Full Stack Developer",
    "issuer": "Dicoding Indonesia \u00d7 DBS Foundation",
    "issued": "May 2026",
    "track": "Full Stack Web Engineering",
    "effort": "766 Hours \u00b7 Corporate Sponsored",
    "credentialId": "CFS211D6Y054",
    "verifyUrl": "https://www.dicoding.com/certificates",
    "summary": "Intensive corporate-sponsored full-stack engineering program by DBS Foundation and Dicoding, spanning foundational programming logic, AWS cloud and generative AI, responsive frontend interfaces, React architecture, scalable backend services, and a production-grade Capstone platform (RuangTumbuh).",
    "skills": [
      "React",
      "Node.js",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "AWS Cloud & Gen AI",
      "Full Stack Architecture",
      "Child Health Tech"
    ],
    "highlights": [
      "Completed 766 curriculum hours with an overall grade of A (Average Score: 89/100)",
      "Engineered RuangTumbuh as the team capstone project (Score: 93/100, Grade A, 250 hours)",
      "Maintained 94% mandatory attendance and 90% overall cohort session attendance",
      "Mastered 8 core technical modules from programming fundamentals to cloud-native backends"
    ],
    "application": "Directly translated into architecting RuangTumbuh, an AI-augmented pediatric screening and child development monitoring platform, as well as production systems delivered for enterprise clients.",
    "transcript": {
      "cohortId": "CFS211D6Y054",
      "institution": "SMK Islamic Development Network (IDN Boarding School)",
      "nisn": "0094329760",
      "supervisor": "Dion Ahza Rabbani",
      "transcriptStatus": "Final",
      "completionStatus": "Full Graduated",
      "learningPath": "Full-Stack Web Developer",
      "totalHours": 766,
      "averageScore": 89,
      "finalGrade": "A",
      "attendance": {
        "mandatory": "94%",
        "overall": "90%"
      },
      "capstone": {
        "teamId": "CC26-PS050",
        "projectName": "RuangTumbuh",
        "projectSlug": "ruangtumbuh",
        "projectDescription": "AI-augmented pediatric screening and child development monitoring platform based on WHO growth standards",
        "hours": 250,
        "score": 93,
        "grade": "A"
      },
      "docImage": transcriptImg,
      "docPdf": transcriptPdf,
      "courses": [
        {
          "code": "CCMT01",
          "title": "Getting Started with Programming to Become a Software Developer",
          "hours": 9,
          "score": 90,
          "grade": "A",
          "certSlug": "meniti-karier-sebagai-software-developer"
        },
        {
          "code": "CCMT02",
          "title": "Introduction to Programming Logic",
          "hours": 6,
          "score": 93,
          "grade": "A",
          "certSlug": "pengenalan-ke-logika-pemrograman"
        },
        {
          "code": "CCMT03",
          "title": "AWS Cloud and Generative AI Fundamentals",
          "hours": 18,
          "score": 93,
          "grade": "A",
          "certSlug": "cloud-practitioner-essentials"
        },
        {
          "code": "CCFS01",
          "title": "Web Programming Fundamentals",
          "hours": 45,
          "score": 85,
          "grade": "A",
          "certSlug": "belajar-dasar-pemrograman-web"
        },
        {
          "code": "CCFS02",
          "title": "JavaScript Programming Fundamentals",
          "hours": 46,
          "score": 83,
          "grade": "B",
          "certSlug": "belajar-dasar-pemrograman-javascript"
        },
        {
          "code": "CCFS03",
          "title": "Building Front-End Web Applications for Beginners",
          "hours": 45,
          "score": 93,
          "grade": "A",
          "certSlug": "frontend-web-developer"
        },
        {
          "code": "CCFS04",
          "title": "Building Web Applications with React",
          "hours": 35,
          "score": 88,
          "grade": "A",
          "certSlug": "belajar-membuat-aplikasi-web-dengan-react"
        },
        {
          "code": "CCFS05",
          "title": "Building Backend Applications for Beginners with JavaScript",
          "hours": 50,
          "score": 93,
          "grade": "A",
          "certSlug": "belajar-membuat-aplikasi-back-end"
        },
        {
          "code": "CCCP01",
          "title": "Capstone / Final Project (RuangTumbuh)",
          "hours": 250,
          "score": 93,
          "grade": "A",
          "projectSlug": "ruangtumbuh"
        },
        {
          "code": "CCSS02",
          "title": "Soft Skills & Career Development",
          "hours": 262,
          "score": 83,
          "grade": "B"
        }
      ]
    }
  },
  "frontend-web-developer": {
    "title": "Frontend Web Developer",
    "issuer": "Dicoding Indonesia",
    "issued": "Feb 2026",
    "transcriptGrade": {
      "program": "DBS Foundation Coding Camp 2026",
      "courseCode": "CCFS03",
      "courseName": "Building Front-End Web Applications for Beginners",
      "hours": "45 Hours",
      "score": "93 / 100",
      "grade": "A",
      "cohortId": "CFS211D6Y054",
      "parentSlug": "coding-camp-full-stack-developer"
    },
    "track": "Modern Frontend Architecture",
    "effort": "60+ Hours · Professional Track",
    "credentialId": "JMZVOQE5RXN9",
    "verifyUrl": "https://www.dicoding.com/certificates/JMZVOQE5RXN9",
    "summary": "Professional certification validating mastery over responsive web development, modern CSS layout paradigms, DOM manipulation, client-side data binding, and web performance optimization.",
    "skills": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Accessibility (a11y)",
      "DOM Manipulation"
    ],
    "highlights": [
      "Semantic HTML5 architecture and WCAG AA accessibility compliance standards",
      "Modern layout systems leveraging Flexbox, multi-column CSS Grid, and custom properties",
      "Vanilla JavaScript DOM traversal, event delegation, and asynchronous REST streaming",
      "Fluid responsive typography and breakpoint choreographies for cross-device resilience"
    ],
    "application": "Formed the bedrock of my UI engineering precision, ensuring that all client and portfolio applications achieve sub-second load times and maintain flawless layout responsiveness across mobile and desktop."
  },
  "belajar-dasar-data-analyst": {
    "title": "Introduction to Data Analysis using Microsoft Excel",
    "issuer": "Coursera · Coursera Project Network",
    "issued": "May 2023",
    "track": "Data Analytics & Visualization",
    "effort": "Verified Hands-On Guided Project · Coursera",
    "credentialId": "LAKH7U85RKE3",
    "verifyUrl": "https://www.coursera.org/account/accomplishments/verify/LAKH7U85RKE3",
    "summary": "Comprehensive hands-on certification in spreadsheet data analysis using Microsoft Excel. Covers data cleaning, transformation formulas (VLOOKUP, INDEX/MATCH), pivot tables, statistical summaries, and dynamic interactive business dashboards.",
    "skills": [
      "Microsoft Excel",
      "Data Analysis",
      "Data Cleansing",
      "Pivot Tables",
      "VLOOKUP & Formulas",
      "Data Visualization",
      "Statistical Summaries"
    ],
    "highlights": [
      "Data wrangling, formula auditing, deduplication, and anomaly identification workflows",
      "Multi-dimensional Pivot Tables, slicers, and calculated fields for business reporting",
      "Descriptive statistics, variance analysis, and executive dashboard design",
      "Translating raw business telemetry into actionable KPIs and decision models"
    ],
    "application": "Enabled structured interpretation of business telemetry and user engagement data, allowing me to build data-informed features and track performance metrics across interactive web applications."
  },
  "belajar-membuat-aplikasi-back-end": {
    "title": "Building Backend Applications for Beginners",
    "issuer": "Dicoding Indonesia",
    "issued": "Feb 2026",
    "transcriptGrade": {
      "program": "DBS Foundation Coding Camp 2026",
      "courseCode": "CCFS05",
      "courseName": "Building Backend Applications for Beginners with JavaScript",
      "hours": "50 Hours",
      "score": "93 / 100",
      "grade": "A",
      "cohortId": "CFS211D6Y054",
      "parentSlug": "coding-camp-full-stack-developer"
    },
    "track": "Backend Engineering & REST APIs",
    "effort": "55+ Hours · Intermediate Track",
    "credentialId": "07Z67L69JPQR",
    "verifyUrl": "https://www.dicoding.com/certificates/07Z67L69JPQR",
    "summary": "Technical certification in server-side development with Node.js and Hapi framework, emphasizing RESTful API architecture, HTTP methods, payload validation, and clean architectural separation.",
    "skills": [
      "Node.js",
      "Hapi Framework",
      "RESTful API",
      "Postman",
      "Backend Architecture",
      "JSON APIs"
    ],
    "highlights": [
      "RESTful route routing, query parameters, and dynamic path parameters",
      "Payload validation with schema validators (Joi) and proper HTTP status codes",
      "In-memory caching and persistent storage integration for CRUD workflows",
      "Postman automated API testing collections and contract integration validation"
    ],
    "application": "Provided the architectural blueprint for designing predictable RESTful endpoints, used extensively during backend development for company dashboards and national competition platforms."
  },
  "belajar-dasar-git-dengan-github": {
    "title": "Git & GitHub Version Control Fundamentals",
    "issuer": "Progate",
    "issued": "Nov 2023",
    "track": "DevOps & Version Control",
    "effort": "Verified Practical Curriculum · Progate",
    "credentialId": "19dc0dd1s4gaqq",
    "verifyUrl": "https://progate.com/course_certificate/19dc0dd1s4gaqq",
    "summary": "Practical certification in distributed version control fundamentals with Git and collaborative open-source workflows on GitHub.",
    "skills": [
      "Git",
      "GitHub",
      "Branching",
      "Merge Conflicts",
      "Version Control",
      "Code Review"
    ],
    "highlights": [
      "Branching strategies (feature branches, hotfixes, and trunk-based workflows)",
      "Resolving complex merge conflicts and rebasing commits cleanly",
      "Atomic commit discipline and descriptive semantic commit messaging",
      "Pull Request workflows, peer code reviews, and remote repository synchronization"
    ],
    "application": "Instilled clean version control hygiene that eliminated code collisions and streamlined collaboration across all competition engineering teams and open-source contributions."
  },
  "graphic-design-fundamentals": {
    "title": "Graphic Design Fundamentals",
    "issuer": "Canva / Course",
    "issued": "Aug 2022",
    "track": "Visual Design & Composition",
    "effort": "25+ Hours · Creative Track",
    "credentialId": "CANVA-DESIGN-2023",
    "verifyUrl": "https://www.canva.com/designschool/",
    "summary": "Core principles of graphic design, color psychology, visual hierarchy, layout grid systems, and brand consistency for digital and print media.",
    "skills": [
      "Graphic Design",
      "Canva",
      "Color Theory",
      "Visual Hierarchy",
      "Typography",
      "Composition"
    ],
    "highlights": [
      "Color theory, harmony palettes, and contrast accessibility guidelines",
      "Grid alignment, white space balance, and focal point orchestration",
      "Typography pairings (display typefaces vs. body copy legibility)",
      "Multi-format asset exporting for cross-platform marketing collateral"
    ],
    "application": "Helped bridge the gap between engineering and visual aesthetics, leading directly to winning the Best Poster Award at the Idul Adha Festival and crafting polished portfolio visuals."
  },
  "memulai-pemrograman-dengan-c": {
    "title": "Getting Started with C Programming",
    "issuer": "Dicoding Indonesia",
    "issued": "Aug 2023",
    "track": "Low-Level Programming",
    "effort": "45+ Hours · Foundational Track",
    "credentialId": "N9ZO611N6XG5",
    "verifyUrl": "https://www.dicoding.com/certificates/N9ZO611N6XG5",
    "summary": "Foundational programming course in C covering syntax fundamentals, basic data types, memory representations, control structures, and modular function architecture.",
    "skills": [
      "C Language",
      "Control Flow",
      "Memory Basics",
      "Pointers Intro",
      "Structured Programming"
    ],
    "highlights": [
      "Primitive datatypes, memory size allocations, and explicit type casting",
      "Control flow constructs (nested conditionals, iteration loops, switch statements)",
      "Custom modular functions, pass-by-value semantics, and lexical scope boundaries",
      "Arrays, character buffers, and basic terminal input/output operations"
    ],
    "application": "Provided deep appreciation for compile-time vs runtime execution, laying an indispensable foundation before tackling CS50 and modern web runtimes."
  },
  "dasar-ui-ux-design": {
    "title": "Get Started with Figma (UI/UX Design)",
    "issuer": "Coursera · Coursera Project Network",
    "issued": "Sep 2022",
    "track": "UI/UX & Product Design",
    "effort": "Verified Hands-On Guided Project · Coursera",
    "credentialId": "KLGTMA9XEMMH",
    "verifyUrl": "https://www.coursera.org/account/accomplishments/verify/KLGTMA9XEMMH",
    "summary": "Practical design curriculum exploring user-centered design methodologies, wireframing, interactive prototyping, and scalable Figma design systems.",
    "skills": [
      "Figma",
      "UI/UX Design",
      "Auto Layout",
      "Design Systems",
      "Wireframing",
      "Prototyping"
    ],
    "highlights": [
      "Auto-layout mechanics, responsive constraints, and component variants",
      "Design tokens (color swatches, typography scales, spacing grids)",
      "Interactive micro-prototyping with smart animations and easing curves",
      "User empathy mapping, persona development, and wireframe ideation"
    ],
    "application": "Transformed my development approach into a design-first mindset, allowing me to prototype complete interactive mockups in Figma before writing a single line of React code."
  },
  "python-fundamentals": {
    "title": "Introduction to Data Science with Python",
    "issuer": "DQLab",
    "issued": "Aug 2023",
    "track": "Data Science & Scripting",
    "effort": "Verified Academy Credential · DQLab",
    "credentialId": "DQLABINTP1ADBGRQ",
    "verifyUrl": "https://academy.dqlab.id/Certificate_check/result/DQLABINTP1ADBGRQ",
    "summary": "Essential Python programming curriculum focusing on data structures, control logic, modular libraries, and basic data manipulation routines.",
    "skills": [
      "Python",
      "Data Structures",
      "Scripting",
      "Data Parsing",
      "Automation"
    ],
    "highlights": [
      "Native collections: lists, dictionaries, tuples, sets and mutation rules",
      "List comprehensions and lambda transformations for concise workflows",
      "Reading and parsing CSV, JSON, and structured data files",
      "Foundations of numerical computing and scripting automation"
    ],
    "application": "Accelerated my ability to write rapid automation scripts, test data transformations, and interact with machine learning APIs."
  },
  "belajar-dasar-pemrograman-javascript": {
    "title": "JavaScript Programming Fundamentals",
    "issuer": "Dicoding Indonesia",
    "issued": "Feb 2026",
    "transcriptGrade": {
      "program": "DBS Foundation Coding Camp 2026",
      "courseCode": "CCFS02",
      "courseName": "JavaScript Programming Fundamentals",
      "hours": "46 Hours",
      "score": "83 / 100",
      "grade": "B",
      "cohortId": "CFS211D6Y054",
      "parentSlug": "coding-camp-full-stack-developer"
    },
    "track": "Frontend & JavaScript Runtime",
    "effort": "50+ Hours · Foundational Track",
    "credentialId": "98XWO3N69ZM3",
    "verifyUrl": "https://www.dicoding.com/certificates/98XWO3N69ZM3",
    "summary": "Modern ECMAScript (ES6+) programming fundamentals, covering lexical scope, closures, event loops, promises, and functional array operations.",
    "skills": [
      "JavaScript",
      "ES6+",
      "Asynchronous JS",
      "Promises",
      "Functional Programming",
      "Event Loop"
    ],
    "highlights": [
      "ES6+ syntax: destructuring, rest/spread operators, and arrow functions",
      "Asynchronous programming: Callbacks, Promises, and async/await mechanics",
      "Object-oriented and functional programming paradigms in JavaScript",
      "Node.js environment basics and npm package management ecosystem"
    ],
    "application": "Mastered asynchronous control flows and JavaScript internals, providing the core competency needed to build production React web apps."
  },
  "cloud-practitioner-essentials": {
    "title": "Cloud Practitioner Essentials",
    "issuer": "Amazon Web Services (AWS) × Dicoding",
    "issued": "Jan 2026",
    "transcriptGrade": {
      "program": "DBS Foundation Coding Camp 2026",
      "courseCode": "CCMT03",
      "courseName": "AWS Cloud and Generative AI Fundamentals",
      "hours": "18 Hours",
      "score": "93 / 100",
      "grade": "A",
      "cohortId": "CFS211D6Y054",
      "parentSlug": "coding-camp-full-stack-developer"
    },
    "track": "Cloud Architecture & Infrastructure",
    "effort": "40+ Hours · Cloud Foundations",
    "credentialId": "L4PQ20G62ZO1",
    "verifyUrl": "https://www.dicoding.com/certificates/L4PQ20G62ZO1",
    "summary": "Official AWS curriculum introducing cloud computing concepts, AWS security models, compute services (EC2, Lambda), storage (S3), and networking fundamentals (VPC).",
    "skills": [
      "AWS",
      "Cloud Computing",
      "IAM Security",
      "S3 Storage",
      "EC2",
      "Serverless Architecture"
    ],
    "highlights": [
      "Cloud value proposition, high availability, and fault tolerance fundamentals",
      "AWS Shared Responsibility Model and IAM security access policies",
      "Compute & Storage: Elastic Compute Cloud (EC2), S3 bucket architecture",
      "Cloud cost optimization, billing models, and serverless computing overview"
    ],
    "application": "Established foundational understanding of cloud deployment architectures, allowing informed infrastructure decisions for web applications and client hosting."
  },
  "belajar-membuat-aplikasi-web-dengan-react": {
    "title": "Building Web Applications with React",
    "issuer": "Dicoding Indonesia",
    "issued": "Feb 2026",
    "transcriptGrade": {
      "program": "DBS Foundation Coding Camp 2026",
      "courseCode": "CCFS04",
      "courseName": "Building Web Applications with React",
      "hours": "35 Hours",
      "score": "88 / 100",
      "grade": "A",
      "cohortId": "CFS211D6Y054",
      "parentSlug": "coding-camp-full-stack-developer"
    },
    "track": "Frontend Component Architecture",
    "effort": "60+ Hours · Intermediate Track",
    "credentialId": "1OP8RDQVVZQK",
    "verifyUrl": "https://www.dicoding.com/certificates/1OP8RDQVVZQK",
    "summary": "Comprehensive React framework certification covering declarative UI paradigms, component composition, hooks, state isolation, and controlled forms.",
    "skills": [
      "React.js",
      "React Hooks",
      "State Management",
      "Virtual DOM",
      "Component Lifecycle",
      "SPA"
    ],
    "highlights": [
      "Component lifecycles and modern React Hooks (useState, useEffect, useMemo, useRef)",
      "Unidirectional data flow, prop drilling avoidance, and state lifting patterns",
      "Virtual DOM reconciliation, key prop semantics, and rendering optimization",
      "Client-side routing and asynchronous REST data fetching"
    ],
    "application": "Directly underpins this portfolio website, PusakaKu, and multiple national competition platforms engineered with component-driven architecture."
  },
  "memulai-pemrograman-dengan-python": {
    "title": "Getting Started with Python Programming",
    "issuer": "Dicoding Indonesia",
    "issued": "Dec 2025",
    "track": "Python Fundamentals",
    "effort": "35+ Hours · Foundational Track",
    "credentialId": "6RPNG00E9Z2M",
    "verifyUrl": "https://www.dicoding.com/certificates/6RPNG00E9Z2M",
    "summary": "Introductory course into the Python programming language, focusing on clear code formatting (PEP 8), variable handling, data structures, and conditional logic.",
    "skills": [
      "Python",
      "PEP 8",
      "Exception Handling",
      "Scripting",
      "Problem Solving"
    ],
    "highlights": [
      "Python clean code conventions and PEP 8 formatting guidelines",
      "Robust exception handling with try/except/finally blocks",
      "Function definitions, default arguments, and return types",
      "Standard library modules: math, datetime, random, and os interactions"
    ],
    "application": "Strengthened algorithmic problem solving and provided the versatility to build backend scripts and utility tools quickly."
  },
  "belajar-dasar-pemrograman-web": {
    "title": "Web Programming Fundamentals",
    "issuer": "Dicoding Indonesia",
    "issued": "Jan 2026",
    "transcriptGrade": {
      "program": "DBS Foundation Coding Camp 2026",
      "courseCode": "CCFS01",
      "courseName": "Web Programming Fundamentals",
      "hours": "45 Hours",
      "score": "85 / 100",
      "grade": "A",
      "cohortId": "CFS211D6Y054",
      "parentSlug": "coding-camp-full-stack-developer"
    },
    "track": "Web Fundamentals",
    "effort": "40+ Hours · Foundational Track",
    "credentialId": "2VX35QQE3PYQ",
    "verifyUrl": "https://www.dicoding.com/certificates/2VX35QQE3PYQ",
    "summary": "Core web standards course focused on HTML5 semantics, CSS styling principles, box model mastery, and building cross-browser responsive layouts.",
    "skills": [
      "HTML5",
      "CSS3",
      "Box Model",
      "Semantic Web",
      "Responsive Layouts"
    ],
    "highlights": [
      "Semantic HTML structure (header, main, section, article, footer, nav)",
      "CSS box model (margin, padding, border, content box dimensions)",
      "Positioning schemes (relative, absolute, fixed, sticky) and z-index contexts",
      "Media queries and fluid layouts built without heavy frameworks"
    ],
    "application": "Instilled deep respect for raw web standards, avoiding framework dependency for simple layout challenges."
  },
  "pengenalan-ke-logika-pemrograman": {
    "title": "Introduction to Programming Logic",
    "issuer": "Dicoding Indonesia",
    "issued": "Jan 2026",
    "transcriptGrade": {
      "program": "DBS Foundation Coding Camp 2026",
      "courseCode": "CCMT02",
      "courseName": "Introduction to Programming Logic",
      "hours": "6 Hours",
      "score": "93 / 100",
      "grade": "A",
      "cohortId": "CFS211D6Y054",
      "parentSlug": "coding-camp-full-stack-developer"
    },
    "track": "Computational Logic & Algorithms",
    "effort": "20+ Hours · Foundational Track",
    "credentialId": "JMZVVRMLRZN9",
    "verifyUrl": "https://www.dicoding.com/certificates/JMZVVRMLRZN9",
    "summary": "Introductory curriculum establishing computational thinking, flowchart modeling, pseudocode conventions, and boolean logic.",
    "skills": [
      "Computational Thinking",
      "Pseudocode",
      "Flowcharts",
      "Boolean Logic",
      "Algorithms"
    ],
    "highlights": [
      "Algorithmic thinking and step-by-step problem decomposition",
      "Boolean algebra, truth tables, and conditional logic operators",
      "Flowcharts, sequence diagrams, and dry-run execution traces",
      "Iteration patterns, loop termination conditions, and edge cases"
    ],
    "application": "Sharpened core problem-solving discipline, making debugging intuitive and structured rather than guess-and-check."
  },
  "pemrograman-dasar-c": {
    "title": "C Programming Fundamentals",
    "issuer": "Skilvul",
    "issued": "Aug 2023",
    "track": "C Programming",
    "effort": "25+ Hours · Foundational Track",
    "credentialId": "SKILVUL-C-2023-BASE",
    "verifyUrl": "https://skilvul.com",
    "summary": "Practical C programming course covering input/output streams, conditional branching, repetitive loops, and multi-dimensional arrays.",
    "skills": [
      "C",
      "Skilvul",
      "Loops & Arrays",
      "Functions",
      "Syntax & Logic"
    ],
    "highlights": [
      "Standard input/output streams with printf and scanf formatting",
      "Dynamic memory concepts, array indexing, and bounds safety",
      "Modular functions, header files, and standard C library utilization",
      "Structured logic implementations for arithmetic problem solving"
    ],
    "application": "Reinforced early coding skills and mathematical programming techniques in my first year of vocational high school."
  },
  "dasar-prompt-engineering": {
    "title": "Prompt Engineering Fundamentals",
    "issuer": "Dicoding Indonesia",
    "issued": "Nov 2025",
    "track": "Generative AI & LLM Systems",
    "effort": "20+ Hours · AI Specialization",
    "credentialId": "MEPJ23Q2LP3V",
    "verifyUrl": "https://www.dicoding.com/certificates/MEPJ23Q2LP3V",
    "summary": "Modern course on prompt design, few-shot prompting, chain-of-thought elicitation, system instructions, and LLM output guardrailing.",
    "skills": [
      "Prompt Engineering",
      "LLMs",
      "Generative AI",
      "Chain of Thought",
      "System Prompts",
      "AI Guardrails"
    ],
    "highlights": [
      "Zero-shot, one-shot, and few-shot contextual prompting techniques",
      "Chain-of-thought (CoT) and step-by-step reasoning prompts for complex tasks",
      "System prompts, role definitions, and strict behavioral safety boundaries",
      "Structured JSON output extraction from multimodal LLMs"
    ],
    "application": "Directly applied when integrating Google Gemini AI virtual doctors in FitSmart and cultural AI concierges in JavaIsland."
  },
  "meniti-karier-sebagai-software-developer": {
    "title": "Building a Career as a Software Developer",
    "issuer": "Dicoding Indonesia",
    "issued": "Jan 2026",
    "transcriptGrade": {
      "program": "DBS Foundation Coding Camp 2026",
      "courseCode": "CCMT01",
      "courseName": "Getting Started with Programming to Become a Software Developer",
      "hours": "9 Hours",
      "score": "90 / 100",
      "grade": "A",
      "cohortId": "CFS211D6Y054",
      "parentSlug": "coding-camp-full-stack-developer"
    },
    "track": "Software Engineering & Industry Standards",
    "effort": "15+ Hours · Professional Track",
    "credentialId": "GRX5J8VEYX0M",
    "verifyUrl": "https://www.dicoding.com/certificates/GRX5J8VEYX0M",
    "summary": "Comprehensive industry orientation covering software engineering roles, team methodologies (Agile/Scrum), code quality standards, and professional ethics.",
    "skills": [
      "Software Development",
      "Agile & Scrum",
      "SDLC",
      "Code Standards",
      "Tech Career"
    ],
    "highlights": [
      "Software development lifecycles (SDLC) and sprint planning methodologies",
      "Understanding cross-functional roles (Product, QA, DevOps, Engineering)",
      "Engineering ethics, intellectual property, and documentation standards",
      "Building professional tech portfolios and technical communication"
    ],
    "application": "Guided my team leadership style during national hackathons and prepared me to seamlessly transition into corporate internships."
  },
  "financial-literacy-fundamentals": {
    "title": "Financial Literacy Fundamentals",
    "issuer": "Dicoding Indonesia",
    "issued": "Nov 2025",
    "track": "Financial Economics & Literacy",
    "effort": "20+ Hours · Foundational Track",
    "credentialId": "FIN-LIT-2023-BASE",
    "verifyUrl": "https://www.dicoding.com/certificates",
    "summary": "Foundational course exploring budgeting principles, cash flow management, digital transaction security, and personal financial modeling.",
    "skills": [
      "Financial Literacy",
      "Budgeting",
      "Cash Flow",
      "Economics",
      "Risk Management"
    ],
    "highlights": [
      "Income vs expenditure tracking and allocation models",
      "Basic investment vehicles, risk profiles, and compound interest",
      "Digital payment gateways and security best practices",
      "Financial discipline and project budget forecasting"
    ],
    "application": "Helped develop financial discipline and commercial awareness when scoping freelance client project budgets and contract terms."
  },
  "artificial-intelligence-basics": {
    "title": "Artificial Intelligence Basics",
    "issuer": "Dicoding Indonesia",
    "issued": "Nov 2025",
    "track": "Artificial Intelligence & Machine Learning",
    "effort": "30+ Hours · Foundational Track",
    "credentialId": "ERZR2NY22PYV",
    "verifyUrl": "https://www.dicoding.com/certificates/ERZR2NY22PYV",
    "summary": "Broad exploration of artificial intelligence concepts, machine learning taxonomies (supervised, unsupervised, reinforcement), neural networks, and AI ethics.",
    "skills": [
      "Artificial Intelligence",
      "Machine Learning",
      "Neural Networks",
      "NLP",
      "Computer Vision",
      "AI Ethics"
    ],
    "highlights": [
      "Supervised vs unsupervised learning paradigms and cost functions",
      "Computer vision and natural language processing pipelines",
      "Deep learning fundamentals and neural network architectures",
      "Ethical considerations, bias mitigation, and responsible AI deployment"
    ],
    "application": "Provided the conceptual clarity necessary to evaluate when to deploy heuristic algorithms vs deep learning models in real-world applications."
  },
  "google-developer-groups-participant": {
    "title": "Google Developer Groups Participant",
    "issuer": "Google Developer Groups",
    "issued": "Jul 2024",
    "track": "Community & Technical Keynotes",
    "effort": "Industry Participation",
    "credentialId": "GDG-PARTICIPANT-2024",
    "verifyUrl": "https://developers.google.com/community/gdg",
    "summary": "Active participation in Google Developer Groups tech summits, engaging with developer advocates on modern web technologies, Android, Cloud, and Gemini APIs.",
    "skills": [
      "Google Developer Groups",
      "Tech Community",
      "Web Standards",
      "Cloud Workshops",
      "Networking"
    ],
    "highlights": [
      "Keynote sessions on modern web performance and Core Web Vitals",
      "Hands-on workshops on Google Cloud and Firebase real-time integrations",
      "Networking with senior industry engineers and open-source contributors",
      "Best practices for building scalable, accessible web products"
    ],
    "application": "Broadened technical horizons through direct interaction with community leaders, inspiring adoption of bleeding-edge web tooling and cloud patterns."
  },
  "english-proficiency-assessment": {
    "title": "IELTS Academic: English Proficiency",
    "issuer": "IDP IELTS Australia · Cambridge Assessment English",
    "issued": "Oct 2026",
    "track": "Language & International Communication",
    "effort": "Academic Band 5.5 · CEFR B2 Competent",
    "credentialId": "IELTS-ACAD-2026",
    "verifyUrl": "https://ielts.idp.com/results/check-your-result",
    "summary": "Official IELTS (International English Language Testing System) Academic test report issued by IDP Education and Cambridge Assessment English. Validates English proficiency across Listening (5.5), Reading (5.0), Writing (5.0), and Speaking (6.5), achieving an Overall Band Score of 5.5 at CEFR Level B2.",
    "skills": [
      "IELTS Academic",
      "English Proficiency",
      "Listening Comprehension",
      "Reading Analysis",
      "Academic Writing",
      "Spoken Fluency",
      "CEFR B2"
    ],
    "highlights": [
      "Overall Band Score 5.5 corresponding to CEFR B2 Competent English user level",
      "Speaking Band 6.5 demonstrating strong verbal fluency, clear pronunciation, and spontaneous topic discussion",
      "Listening Band 5.5 in academic lecture comprehension and real-time information processing",
      "Academic Writing & Reading Band 5.0 for complex text analysis and structured technical reports"
    ],
    "application": "Equipped me with fluent English communication required for consuming international technical documentation, writing clean codebases, and speaking confidently during cross-cultural initiatives and global engineering teams."
  },
  "nasa-open-science-essentials": {
    "title": "NASA Open Science Essentials",
    "issuer": "NASA Open Science",
    "issued": "Nov 2026",
    "track": "Open Science & Research Transparency",
    "effort": "Verified NASA TOPS Curriculum · Credly Digital Badge",
    "credentialId": "414bed10-39e3-485d-a42d-d503c3532561",
    "verifyUrl": "https://www.credly.com/badges/414bed10-39e3-485d-a42d-d503c3532561/public_url",
    "summary": "Official open science certification issued by NASA's Transform to Open Science (TOPS) initiative under the Science Mission Directorate. Validates core competencies in transparent scientific research, FAIR data stewardship, open-source scientific software, persistent identifiers, and collaborative reproducible workflows.",
    "skills": [
      "Open Science Principles",
      "FAIR Data Stewardship",
      "Open Source Software",
      "Persistent Identifiers (DOI & ORCID)",
      "Research Data Management",
      "Open Access Publishing",
      "Reproducible Workflows",
      "Collaborative Research"
    ],
    "highlights": [
      "Core ethos, transparency guidelines, and accessibility standards of modern open science",
      "FAIR data principles (Findable, Accessible, Interoperable, Reusable) for open datasets",
      "Open scientific computing, open-source licensing (MIT, Apache, GPL), and code repository governance",
      "Preprint architectures, open peer review methodologies, and data management plans (DMPs)",
      "Cross-institutional research equity, citizen science, and mitigating barriers in scientific collaboration"
    ],
    "application": "Directly applied to engineering transparent academic platforms (like SIM KEPK FK UMJ) and publishing open-access educational literature. Guides architectural decisions on open API schemas, FAIR dataset structures, and verifiable audit logging."
  },
  "ai-in-society-ethics-leadership-and-the-road-ahead": {
    "title": "AI in Society: Ethics, Leadership, and the Road Ahead",
    "issuer": "HP × edX",
    "issued": "Nov 2026",
    "track": "AI Ethics, Governance & Strategic Leadership",
    "effort": "Course 3 of HP AI Foundations Program · Verified edX Credential",
    "credentialId": "335ef764df4c4a19a5fbf7208be2df68",
    "verifyUrl": "https://courses.edx.org/certificates/335ef764df4c4a19a5fbf7208be2df68",
    "summary": "Advanced executive and technical curriculum by HP and edX (Course code HPAIFPL.3x.en) examining the societal, ethical, and organizational impacts of modern artificial intelligence. Covers algorithmic bias mitigation, novel AI security threats, workforce transformation, global regulatory compliance (EU AI Act), and the AI alignment problem.",
    "skills": [
      "AI Ethics & Governance",
      "Algorithmic Bias Mitigation",
      "AI Security & Threat Vectors",
      "EU AI Act & Regulations",
      "Prompt Injection Defense",
      "Workforce AI Augmentation",
      "AI Alignment & Safety",
      "Responsible AI Leadership"
    ],
    "highlights": [
      "Algorithmic fairness audits, representation bias detection, and dataset curation ethics",
      "AI security vulnerabilities: prompt injections, jailbreaks, data poisoning, and synthetic deepfake defense",
      "Socio-economic impact analysis and workforce augmentation frameworks over wholesale replacement",
      "Global AI regulatory landscape: EU AI Act risk tiers, US NIST AI RMF, and corporate governance models",
      "AI alignment problem, explainable AI (XAI) interpretability, and long-term AGI safety considerations"
    ],
    "application": "Provides the foundational ethical and security blueprint for building intelligent software products. Directly integrated into guardrail architecture, input sanitization, and bias mitigation pipelines across AI-driven applications like FitSmart and JavaIsland."
  },
  "cerdas-cermat-apbn": {
    "title": "National State Budget (APBN) Academic Competition",
    "issuer": "Kementerian Keuangan Republik Indonesia (Kemenkeu RI)",
    "issued": "Oct 2025",
    "track": "National Fiscal Literacy & Public Economics",
    "effort": "National Fiscal Competition · Kemenkeu RI",
    "credentialId": "SERT-2276/CCA.01/2025",
    "verifyUrl": "https://klc2.kemenkeu.go.id",
    "summary": "Official Certificate of Commendation from the Ministry of Finance of the Republic of Indonesia for participation and academic excellence in the National State Budget Academic Competition (Cerdas Cermat APBN 2025). Evaluates in-depth mastery of national budget formulation, macroeconomic fiscal policy, state revenue streams, ministerial expenditure allocations, regional transfers, and transparent public financial governance.",
    "skills": [
      "APBN & Fiscal Policy",
      "Macroeconomics",
      "State Budget Management",
      "Taxation Principles",
      "Public Expenditure",
      "National Economic Governance",
      "Financial Accountability"
    ],
    "highlights": [
      "Prestigious national academic competition organized directly by the Ministry of Finance of the Republic of Indonesia",
      "Comprehensive mastery over state revenue structures (taxation and non-tax revenues), ministerial allocations, and intergovernmental fiscal transfers",
      "In-depth analytical evaluation of the state budget as a macroeconomic shock absorber fostering sustainable national development",
      "Clear understanding of transparent, accountable, and impactful public financial governance"
    ],
    "application": "Broadens macroeconomic literacy and fiscal governance insights, complementing software engineering capabilities with strategic understanding of public budget allocation, public expenditure efficiency, and the digital economy."
  },
  "2nd-place-national-web-design-competition-pnbitc": {
    "title": "2nd Place: National Web Design Competition (PNBITC#18)",
    "issuer": "Politeknik Negeri Bali (PNBITC#18)",
    "issued": "Oct 2026",
    "track": "National Web Design Competition",
    "effort": "1-Month Intensive Sprint · National Grand Final",
    "credentialId": "23685/DST/PL8/PP.06/2026",
    "verifyUrl": "https://idn.sch.id/smk-dkv-terbaik-bogor-siswa-idn-tembus-final-kompetisi-it-di-bali/",
    "relatedStoryUrl": "/achievements/2nd-place-national-web-design-competition-pnbitc",
    "relatedStoryLabel": "Read Full National Achievement Story",
    "summary": "Official Certificate of Achievement No: 23685/DST/PL8/PP.06/2026 awarded by the Director of Politeknik Negeri Bali and Head of the Electrical Engineering Department, recognizing 2nd Place nationally in the Web Design Competition at the 18th PNB IT Competition (PNBITC#18).",
    "skills": [
      "Web Architecture",
      "React",
      "Tailwind CSS",
      "UI/UX Design",
      "Competitive Sprint",
      "National Defense Presentation"
    ],
    "highlights": [
      "Official Certificate of Achievement No: 23685/DST/PL8/PP.06/2026 signed by the Director of Politeknik Negeri Bali",
      "Achieved 2nd Place (National Runner-Up) outperforming hundreds of university and vocational student teams across Indonesia",
      "Engineered completely from scratch within an intensive one-month development sprint (September 2026) alongside a full-time corporate internship",
      "Underwent rigorous evaluation covering frontend systems architecture, WCAG accessibility compliance, visual hierarchy, and a live defense before a jury panel"
    ],
    "application": "Demonstrates high-velocity software engineering execution under competitive deadlines, establishing architectural design patterns and accessibility benchmarks that now serve as production standards across high-performance web applications."
  },
  "1st-place-national-web-design-competition-icomfest": {
    "title": "1st Place: National Web Design Competition (ICOMFEST)",
    "issuer": "ICOMFEST 2025",
    "issued": "Feb 2025",
    "track": "National Web Design Championship",
    "effort": "Team Batosai · Lead of Program · Collegiate Level",
    "credentialId": "ICOMFEST-2025-WIN-01",
    "verifyUrl": "https://github.com/adyvka31/Pusakaku",
    "relatedStoryUrl": "/achievements/1st-place-national-web-design-competition",
    "relatedStoryLabel": "Read Full Championship Story",
    "summary": "Official Certificate of Achievement awarded to Rafif Sava Adyvka Pratama as Lead of Program for Team Batosai for winning 1st Place in the National Web Design Competition at ICOMFEST 2025, held on 1 February in Bogor.",
    "skills": [
      "Frontend Architecture",
      "UI/UX Design",
      "Gamified Quiz Engine",
      "Cultural Archival Preservation",
      "Team Technical Leadership",
      "Client-Side State Management"
    ],
    "highlights": [
      "1st Place National Champion at ICOMFEST 2025, competing against university students and open public teams",
      "Served as Lead of Program heading the technical architecture and engineering of the 'PusakaKu' cultural heritage platform",
      "Engineered an interactive ethnographic archive of traditional Indonesian folk games with a 10-stage interactive gamified quiz engine",
      "Achieved highest evaluation marks in visual originality, runtime render performance, and intuitive user experience"
    ],
    "application": "Applied technical leadership in harmonizing interactive frontend architecture with digital cultural preservation, demonstrating software engineering excellence before a national academic jury."
  },
  "idn-student-council-event-division-leader": {
    "title": "Certificate of Appreciation: Event Organizer Student Council",
    "issuer": "SMK IDN Boarding School Student Council",
    "issued": "Aug 2026",
    "track": "Executive Leadership & Event Operations",
    "effort": "2 Consecutive Terms · 500+ Attendees Flagship Events",
    "credentialId": "015/SRT/OSIS-SMKIDN/VIII/2026",
    "verifyUrl": "https://idn.sch.id",
    "relatedStoryUrl": "/experience/idn-student-council-event-division-leader",
    "relatedStoryLabel": "Read Full Student Council Leadership Story",
    "summary": "Official Certificate of Appreciation Number: 015/SRT/OSIS-SMKIDN/VIII/2026 awarded by IDN Boarding School to Rafif Sava Adyvka Pratama as Event Organizer Student Council (OSIS) of IDN Boarding School for the 2025-2026 period.",
    "skills": [
      "Executive Leadership",
      "Event Production",
      "Crisis Triage & Operations",
      "Cross-Functional Delegation",
      "Stakeholder Communication",
      "Logistics Management"
    ],
    "highlights": [
      "Official Certificate of Appreciation No: 015/SRT/OSIS-SMKIDN/VIII/2026 signed by the Principal of SMK IDN Boarding School",
      "Led the Student Council Event Division across two consecutive executive terms (2025–2026)",
      "Served as Head Coordinator for IT FEST 2025, a nationwide technology festival and competition engaging 500+ attendees",
      "Orchestrated stage logistics, corporate sponsorships, zero-delay rundown execution, and rapid crisis management"
    ],
    "application": "Developed executive leadership resilience, calm problem resolution under pressure, and large-scale cross-functional team coordination essential for industrial software engineering."
  },
  "universitas-yarsi-muharram-poster-competition": {
    "title": "Participant Certificate: National Muharram Poster Competition",
    "issuer": "LDK KAHFI Universitas YARSI",
    "issued": "Jul 2023",
    "track": "Creative Graphic Design & Visual Communication",
    "effort": "National Poster Design Competition · Universitas YARSI",
    "credentialId": "YARSI-LDK-POSTER-2023",
    "verifyUrl": "https://yarsi.ac.id",
    "summary": "Official Certificate of Participation awarded by Lembaga Dakwah Kampus (LDK) KAHFI Universitas YARSI to Rafif Sava Adyvka Pratama for participating in the National Muharram Poster Design Competition with the theme 'Welcoming the Sacred Month of Muharram with Nobility'.",
    "skills": [
      "Poster Design",
      "Visual Hierarchy",
      "Islamic Typography",
      "Color Harmony & Balance",
      "Figma & Vector Illustration",
      "Creative Conceptualization"
    ],
    "highlights": [
      "Official participation in the National Muharram Poster Design Competition hosted by LDK KAHFI Universitas YARSI",
      "Created an impactful visual design centering on Islamic heritage and ethical nobility",
      "Explored modern typography layouts, negative space balance, and harmonious color theory",
      "Early validation of visual communication competencies, establishing the foundation for digital interface engineering (UI/UX)"
    ],
    "application": "Editorial graphic design and typography principles honed during this competition serve as key pillars for visual hierarchy and user interface aesthetics in contemporary web projects."
  }
};

// Aliases for intuitive URL routing
certificateDetails["cs50"] = certificateDetails["cs50-introduction-to-computer-science"];
certificateDetails["frontend-web"] = certificateDetails["frontend-web-developer"];
certificateDetails["coding-camp"] = certificateDetails["coding-camp-full-stack-developer"];
certificateDetails["aws-cloud"] = certificateDetails["cloud-practitioner-essentials"];
certificateDetails["react-dicoding"] = certificateDetails["belajar-membuat-aplikasi-web-dengan-react"];
certificateDetails["nasa"] = certificateDetails["nasa-open-science-essentials"];
certificateDetails["nasa-open-science"] = certificateDetails["nasa-open-science-essentials"];
certificateDetails["open-science-nasa"] = certificateDetails["nasa-open-science-essentials"];
certificateDetails["ai-in-society"] = certificateDetails["ai-in-society-ethics-leadership-and-the-road-ahead"];
certificateDetails["hp-ai"] = certificateDetails["ai-in-society-ethics-leadership-and-the-road-ahead"];
certificateDetails["hp-ai-in-society"] = certificateDetails["ai-in-society-ethics-leadership-and-the-road-ahead"];
certificateDetails["cerdas-cermat-apbn"] = certificateDetails["cerdas-cermat-apbn"];
certificateDetails["apbn"] = certificateDetails["cerdas-cermat-apbn"];
certificateDetails["kemenkeu"] = certificateDetails["cerdas-cermat-apbn"];
certificateDetails["ielts"] = certificateDetails["english-proficiency-assessment"];
certificateDetails["ielts-academic"] = certificateDetails["english-proficiency-assessment"];
certificateDetails["coursera-excel"] = certificateDetails["belajar-dasar-data-analyst"];
certificateDetails["coursera-figma"] = certificateDetails["dasar-ui-ux-design"];
certificateDetails["progate-git"] = certificateDetails["belajar-dasar-git-dengan-github"];
certificateDetails["dqlab-python"] = certificateDetails["python-fundamentals"];
certificateDetails["pnbitc"] = certificateDetails["2nd-place-national-web-design-competition-pnbitc"];
certificateDetails["pnb"] = certificateDetails["2nd-place-national-web-design-competition-pnbitc"];
certificateDetails["icomfest"] = certificateDetails["1st-place-national-web-design-competition-icomfest"];
certificateDetails["1st-place-national-web-design-competition"] = certificateDetails["1st-place-national-web-design-competition-icomfest"];
certificateDetails["osis"] = certificateDetails["idn-student-council-event-division-leader"];
certificateDetails["osis-idn"] = certificateDetails["idn-student-council-event-division-leader"];
certificateDetails["yarsi-poster"] = certificateDetails["universitas-yarsi-muharram-poster-competition"];
certificateDetails["lomba-poster-yarsi"] = certificateDetails["universitas-yarsi-muharram-poster-competition"];
