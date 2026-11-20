// src/data/publicationDetails.js
import bookGameCover from "../assets/publications/buku-membuat-game-tanpa-coding-cover.webp?w=400;800&quality=85&format=avif;webp&as=picture";
import bookWebCover from "../assets/publications/buku-membuat-website-dengan-framework-cover.webp?w=400;800&quality=85&format=avif;webp&as=picture";
import bookGamePdf from "../assets/publications/buku-membuat-game-tanpa-coding-adyvka.pdf";
import bookWebPdf from "../assets/publications/buku-membuat-website-dengan-framework-adyvka.pdf";

export const publicationDetails = {
  "buku-membuat-game-tanpa-coding": {
    slug: "buku-membuat-game-tanpa-coding",
    title: "Membuat Game Tanpa Coding",
    subtitle: "A Beginner's Guide to Visual Programming with MIT Scratch",
    badge: "Official Curriculum Book",
    author: "Rafif Sava Adyvka Pratama",
    authorRole: "Author & Curriculum Developer",
    publisher: "SMK IDN Boarding School",
    publishedDate: "January 2023",
    year: "2023",
    edition: "First Edition",
    pages: 125,
    fileSize: "7.9 MB",
    language: "Bahasa Indonesia",
    format: "Interactive Digital E-Book (PDF)",
    pdfUrl: bookGamePdf,
    downloadPath: "/publications/buku-membuat-game-tanpa-coding-adyvka.pdf",
    cover: bookGameCover,
    tags: [
      "Scratch",
      "Game Development",
      "Visual Programming",
      "Game Logic",
      "125 Pages",
      "E-Book",
    ],
    overview:
      "A comprehensive 125-page published book authored by Rafif Sava Adyvka Pratama to demystify computer science logic for young learners and beginners. Written from the conviction that algorithmic thinking and creative joy should come before cryptic syntax errors, this book uses MIT Scratch's visual block canvas to teach core computational principles through five complete, playable games.",
    synopsis: [
      "In standard computer science education, beginners often hit an immediate barrier: syntax errors and intimidating boilerplate code overshadow algorithmic thinking. 'Membuat Game Tanpa Coding' was authored to solve this problem by providing a structured, visual-first roadmap.",
      "The curriculum starts from foundational principles, including workspace orientation, coordinate systems (X/Y axes), sprite manipulation, and event loops, before guiding students step-by-step through developing 5 full arcade and educational games from an empty canvas.",
      "Beyond technical mechanics, each chapter emphasizes game design thinking: defining clear win/loss states, balancing player difficulty curves, generating sound cues, and creating engaging visual backdrops.",
      "Adopted as a core learning guide at SMK IDN Boarding School and deployed in practical weekend workshops across schools in Depok and Jakarta, this book has empowered over 300 middle and high school students to build and publish their very first games.",
    ],
    kpis: [
      { value: "125", label: "Pages", note: "Fully illustrated step-by-step curriculum" },
      { value: "5", label: "Playable Games", note: "Engineered from scratch to completion" },
      { value: "6", label: "Chapters", note: "Structured pedagogical progression" },
      { value: "300+", label: "Students", note: "Trained across community workshops" },
    ],
    metadataSpecs: [
      { label: "Author", value: "Rafif Sava Adyvka Pratama" },
      { label: "Publisher", value: "SMK IDN Boarding School" },
      { label: "First Published", value: "January 2023" },
      { label: "Edition", value: "First Edition (Digital PDF)" },
      { label: "Length", value: "125 Pages (Full Color)" },
      { label: "File Size", value: "7.9 MB (Optimized PDF)" },
      { label: "Language", value: "Bahasa Indonesia" },
      { label: "Primary Platform", value: "MIT Scratch 3.0 (Web & Desktop)" },
    ],
    learningPillars: [
      {
        icon: "terminal",
        title: "Visual Computational Thinking",
        desc: "Mastering sequence logic, conditional execution (if/else), iterative loops (repeat/forever), and variable scope without cryptic syntax errors.",
      },
      {
        icon: "monitor",
        title: "2D Arcade Physics & Mechanics",
        desc: "Simulating gravitational acceleration, velocity inertia, boundary bounce angles, paddle reflections, and multi-layer projectile trajectories.",
      },
      {
        icon: "database",
        title: "State Management & Game Loops",
        desc: "Tracking player lives, persistent high scores, random spawn timers, difficulty escalations, and multi-screen state transitions (Start, Play, Game Over).",
      },
      {
        icon: "workflow",
        title: "Sprite Animation & Stage Art",
        desc: "Structuring custom costume sequences, vector stage illustrations, parallax backdrops, and procedural sound effect triggers.",
      },
    ],
    projectsBuilt: [
      {
        name: "Catching Fruit",
        chapter: "Chapter II",
        genre: "Arcade Reflex & Falling Object",
        summary:
          "Players control a basket moving horizontally across the stage to catch randomized falling fruits while dodging penalties.",
        mechanics: [
          "X-axis horizontal player movement via Arrow keys",
          "Randomized X spawn coordinates and continuous downward Y velocity",
          "Color-based & sprite boundary collision detection",
          "Real-time score tallying and speed multipliers",
        ],
      },
      {
        name: "Alien Invader",
        chapter: "Chapter III",
        genre: "Classic Space Shooter",
        summary:
          "An action space defender featuring projectile shooting, enemy squadron wave movements, and health point tracking.",
        mechanics: [
          "Continuous laser cloning and upward projectile velocity",
          "Synchronized enemy patrol movement with bounce bounds",
          "Instant laser-to-alien collision despawn routines",
          "Player HP bar and victory state trigger conditions",
        ],
      },
      {
        name: "Game Adab",
        chapter: "Chapter IV",
        genre: "Interactive Narrative & Social Values",
        summary:
          "A value-oriented interactive story game presenting daily behavioral scenarios, decision branches, and educational feedback.",
        mechanics: [
          "Branching interactive dialogue trees with button inputs",
          "Conditional score assessments based on ethical choices",
          "Custom illustrated character costumes with emotional expressions",
          "Educational summary screen with contextual rewards",
        ],
      },
      {
        name: "Pacman",
        chapter: "Chapter V",
        genre: "Labyrinth Grid Survival",
        summary:
          "A faithful visual recreation of the classic arcade maze navigation with ghost patrol AI and collectible pellets.",
        mechanics: [
          "Grid-constrained 4-way direction movement (Up, Down, Left, Right)",
          "Backdrop wall color sensing to prevent barrier clipping",
          "Autonomous patrol ghost sprites with randomized turn logic",
          "Dot consumption counter and maze clear conditions",
        ],
      },
      {
        name: "Block Breaker",
        chapter: "Chapter VI",
        genre: "Brick Breaker Physics Arcade",
        summary:
          "High-speed arcade paddle game testing geometric rebound calculations and multi-element grid destruction.",
        mechanics: [
          "Paddle follow cursor / directional controls",
          "Ball angle reflection physics on paddle hit vs wall hit",
          "Multi-row brick clone generation with destruction checks",
          "Life deduction when ball hits the bottom death boundary",
        ],
      },
    ],
    chapters: [
      {
        num: "Chapter I",
        title: "Introduction to Game Development with Scratch",
        pages: "Pages 1 – 20",
        summary:
          "Introduction to visual block programming paradigms, environment setup, and foundational Scratch architecture.",
        subsections: [
          "1.1 Understanding Visual Block Programming & MIT Scratch",
          "1.2 Downloading & Installing Scratch Desktop on Windows/Mac",
          "1.3 Using Scratch Web Editor in Modern Browsers",
          "1.4 Navigating the Workspace: Stage, Sprite Area, and Block Palette",
        ],
      },
      {
        num: "Chapter II",
        title: "Catching Fruit",
        pages: "Pages 21 – 40",
        summary:
          "Designing the first interactive game: mechanics of falling items, responsive basket controls, and collision loops.",
        subsections: [
          "2.1 Game Concepts & Gameplay Flow Wireframing",
          "2.2 Designing & Importing Basket and Fruit Sprites",
          "2.3 Crafting Engaging Visual Stage Backdrops",
          "2.4 Horizontal Basket Movement Control Logic",
          "2.5 Fruit Gravity, Random Spawning, and Real-time Score Systems",
        ],
      },
      {
        num: "Chapter III",
        title: "Alien Invader",
        pages: "Pages 41 – 60",
        summary:
          "Building a top-down arcade space shooter with laser projectile cloning, enemy patrols, and hit detection.",
        subsections: [
          "3.1 Arcade Space Defender Gameplay Concept",
          "3.2 Designing Spaceship and Alien Squadron Sprites",
          "3.3 Cosmic Backdrops & Starfield Motion Animation",
          "3.4 Laser Projectile Shooting Mechanics with Sprite Cloning",
          "3.5 Projectile-to-Alien Collision Detection & HP Reduction Systems",
        ],
      },
      {
        num: "Chapter IV",
        title: "Game Adab (Character Ethics)",
        pages: "Pages 61 – 80",
        summary:
          "Engineering an educational narrative experience with interactive question nodes, character dialogues, and scoring.",
        subsections: [
          "4.1 Educational Game Design: Daily Ethics & Moral Values",
          "4.2 Expressive Character Design & Environmental Backdrops",
          "4.3 Dialogue Scripts Using 'Say' and 'Broadcast' Message Blocks",
          "4.4 Interactive Choice Nodes & Decision Branching Scenarios",
          "4.5 Cumulative Scoring & Final Learning Evaluation",
        ],
      },
      {
        num: "Chapter V",
        title: "Pacman",
        pages: "Pages 81 – 102",
        summary:
          "Constructing maze navigation logic, wall collision boundaries, autonomous patrol ghosts, and collectible item counters.",
        subsections: [
          "5.1 Maze Navigation Mechanics & Coordinate Grid Systems",
          "5.2 Wall-Color Sensing Backdrop Architecture",
          "5.3 4-Way Directional Movement & Wall Clipping Prevention",
          "5.4 Autonomous Ghost Patrol AI Scripting",
          "5.5 Pellet Consumption, Score Calculation, & Game Over Triggers",
        ],
      },
      {
        num: "Chapter VI",
        title: "Block Breaker",
        pages: "Pages 103 – 123",
        summary:
          "Implementing paddle deflection angles, ball velocity physics, brick grid destruction routines, and complete game victory loops.",
        subsections: [
          "6.1 Classic Arcade Brick Breaker Game Architecture",
          "6.2 Designing Paddle, Ball, and Multi-Hit Brick Sprites",
          "6.3 Ball Angle Deflection Physics on Paddle Collision",
          "6.4 Grid Brick Destruction Routines Using Sprite Clones",
          "6.5 Bottom Death Boundary, Player Lives, & Victory Screen Triggers",
        ],
      },
    ],
    targetAudience: [
      "Middle and High School Students starting their coding journey without intimidation.",
      "Computer Science & STEM Educators looking for a proven, classroom-tested curriculum.",
      "Parents & Mentors guiding young learners into computational thinking.",
      "Self-taught beginners seeking a solid conceptual bridge to traditional programming languages.",
    ],
    workshopDeployments: [
      {
        school: "Semut-Semut The Natural School",
        role: "Game Development & Computational Logic Instructor",
        date: "October 2023",
        impact: "Implemented to teach Cartesian coordinates, 2D physics, velocity variables, and arcade game loops to 25+ creative students.",
      },
      {
        school: "SMP INS Depok",
        role: "Lead Mobile & Game Logic Instructor",
        date: "October 2024",
        impact: "Used as the core visual logic reference for 30+ middle school students.",
      },
      {
        school: "Griyya Sunnah",
        role: "Lead Game Development Instructor",
        date: "September 2023",
        impact: "Taught block programming and game loops to elementary and junior high cohorts.",
      },
      {
        school: "Al-Anshar Boarding School",
        role: "Game Development Instructor",
        date: "November 2022",
        impact: "Guided 15+ students through building their own complete 2D arcade games.",
      },
    ],
  },

  "buku-membuat-website-dengan-framework": {
    slug: "buku-membuat-website-dengan-framework",
    title: "Membuat Website Dengan Mudah Menggunakan Framework",
    subtitle: "Foundations of HTML5, CSS3, and Modern Utility-First Tailwind CSS",
    badge: "Practical Engineering Module",
    author: "Rafif Sava Adyvka Pratama",
    authorRole: "Author & Frontend Curriculum Developer",
    publisher: "SMK IDN Boarding School",
    publishedDate: "May 2024",
    year: "2024",
    edition: "Student & Community Learning Edition",
    pages: 106,
    fileSize: "9.4 MB",
    language: "Bahasa Indonesia",
    format: "Interactive Digital E-Book (PDF)",
    pdfUrl: bookWebPdf,
    downloadPath: "/publications/buku-membuat-website-dengan-framework-adyvka.pdf",
    cover: bookWebCover,
    tags: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Web Development",
      "Responsive Layout",
      "106 Pages",
      "Practical Module",
    ],
    overview:
      "A 106-page step-by-step practical engineering module authored by Rafif Sava Adyvka Pratama to bridge the gap between foundational web basics and production frontend development. Written from practical teaching experience, it guides vocational students from raw HTML/CSS into building responsive, production-ready landing pages with Tailwind CSS.",
    synopsis: [
      "Modern web engineering has shifted rapidly: writing monolithic CSS stylesheets from scratch often leads to specificity wars, bloated bundles, and sluggish development cycles. Yet, jumping directly into heavy JavaScript frameworks without mastering foundational HTML/CSS creates fragile developer habits.",
      "'Membuat Website Dengan Mudah Menggunakan Framework' bridges this exact gap. It provides a balanced, progressive curriculum structured in four pragmatic phases: core HTML5 markup, essential CSS3 Box Model concepts, hands-on landing page construction, and full migration to utility-first Tailwind CSS.",
      "The guide demystifies responsive design principles (mobile-first breakpoints), flexbox alignment, modern web components, typography hierarchy, and rapid UI prototyping with Tailblocks and Tailwind CLI/CDN tooling.",
      "Authored during Adyvka's tenure at SMK IDN Boarding School, this manual has been utilized as the official instructional syllabus for vocational high school cohorts and frontend training bootcamps across the school network.",
    ],
    kpis: [
      { value: "106", label: "Pages", note: "Dense, illustrated practical chapters" },
      { value: "4", label: "Core Modules", note: "HTML5, CSS3, Project, and Tailwind CSS" },
      { value: "100%", label: "Practical", note: "Hands-on coding with Live Server workflow" },
      { value: "Mobile-First", label: "Responsive", note: "Modern flexbox, grid, and breakpoints" },
    ],
    metadataSpecs: [
      { label: "Author", value: "Rafif Sava Adyvka Pratama" },
      { label: "Publisher", value: "SMK IDN Boarding School" },
      { label: "First Published", value: "May 2024" },
      { label: "Edition", value: "Student & Community Learning Edition" },
      { label: "Length", value: "106 Pages (Full Color)" },
      { label: "File Size", value: "9.4 MB (Optimized PDF)" },
      { label: "Language", value: "Bahasa Indonesia" },
      { label: "Core Stack", value: "HTML5, CSS3, Tailwind CSS, VS Code, Tailblocks" },
    ],
    learningPillars: [
      {
        icon: "monitor",
        title: "Semantic HTML5 Architecture",
        desc: "Structuring clean, accessible DOM trees using semantic tags (<header>, <main>, <section>, <article>, <footer>) for peak SEO and accessibility standards.",
      },
      {
        icon: "workflow",
        title: "The CSS3 Box Model & Layout Systems",
        desc: "Mastering margin collapsing, padding geometry, border-box sizing, Flexbox axis alignment, and CSS Grid layout algorithms.",
      },
      {
        icon: "terminal",
        title: "Utility-First Tailwind CSS Workflow",
        desc: "Replacing cumbersome separate style files with high-velocity inline utility classes, pseudo-class states (hover, focus), and responsive viewport prefixes.",
      },
      {
        icon: "cloud",
        title: "Component Prototyping & Production Layout",
        desc: "Rapidly assembling cohesive modern websites with navigation bars, hero headers, feature matrices, testifier carousels, and responsive footers.",
      },
    ],
    projectsBuilt: [
      {
        name: "Semantic HTML5 Personal Portfolio",
        chapter: "Chapter I",
        genre: "Web Document Structure & Form Design",
        summary:
          "Constructing an accessible, multi-section personal profile page focusing strictly on structural semantics, hyperlinks, media embeds, and table layouts.",
        mechanics: [
          "Document hierarchy: <!DOCTYPE html>, <html>, <head>, and <body>",
          "Rich content markup: <h1>-<h6>, <p>, <ul>/<ol>, <table>, and <img>",
          "Interactive input controls: text inputs, email validators, radio buttons, and submit handlers",
          "Absolute vs relative file paths and hyperlinks",
        ],
      },
      {
        name: "Styled CSS3 Modern Landing Page",
        chapter: "Chapter II & Chapter III",
        genre: "Visual Design & Box Model Layout",
        summary:
          "Transforming unstyled HTML markup into a vibrant, polished landing page with custom color palettes, Google Fonts typography, and Flexbox cards.",
        mechanics: [
          "Class and ID selector scoping and CSS cascading rules",
          "Box-sizing: border-box calibration across all DOM nodes",
          "Flexbox display modes: justify-content, align-items, and flex-wrap",
          "Interactive button hover transitions, drop-shadows, and border-radius pill styling",
        ],
      },
      {
        name: "Responsive Production Site with Tailwind CSS",
        chapter: "Chapter IV",
        genre: "Utility-First Web Engineering",
        summary:
          "Developing a complete, mobile-responsive production web interface using Tailwind CSS utility classes and Tailblocks component patterns.",
        mechanics: [
          "Tailwind CDN integration and Tailwind CLI configuration setup",
          "Responsive breakpoint modifiers: sm:, md:, lg:, and xl:",
          "Assembling cohesive sections: Navbar, Hero CTA, Statistics grid, Feature matrix, and Footer",
          "Theme color palette mapping and utility typography scaling",
        ],
      },
    ],
    chapters: [
      {
        num: "Chapter I",
        title: "Foundations of HTML5",
        pages: "Pages 1 – 28",
        summary:
          "Web architectural foundations, developer tooling setup, HTML5 document structures, typography tags, media embedding, and accessible forms.",
        subsections: [
          "1.1 Understanding How the Web, Web Servers, and Browsers Work",
          "1.2 Installing & Configuring VS Code and Live Server Extension",
          "1.3 Core HTML5 Document Architecture (Head, Meta, Title, Body)",
          "1.4 Text Typography: Headings, Paragraphs, Inline Formatting, and Lists",
          "1.5 Embedding Images, Internal/External Hyperlinks, and Video Media",
          "1.6 Structuring Accessible Data Tables and Interactive Input Forms",
        ],
      },
      {
        num: "Chapter II",
        title: "Foundations of CSS3 & Box Model",
        pages: "Pages 29 – 54",
        summary:
          "Styling mechanics, CSS selectors, color theory, typography, the fundamental Box Model, and introductory layout arrangements.",
        subsections: [
          "2.1 CSS Syntax: Element, Class, ID, and Universal Selectors",
          "2.2 Three Styling Approaches: Inline, Internal, and External Stylesheets",
          "2.3 Mastering the Box Model: Margin, Padding, Border, and Content",
          "2.4 Typography Controls: Font Family, Sizing, Line Height, and Color",
          "2.5 Background Aesthetics: Linear Gradients, Images, and Opacity",
          "2.6 Layout Foundations: Block, Inline-Block, and Flexbox Introduction",
        ],
      },
      {
        num: "Chapter III",
        title: "Engineering HTML5 & CSS3 Projects",
        pages: "Pages 55 – 78",
        summary:
          "Hands-on architectural project synthesizing HTML5 and CSS3 into an attractive, responsive landing page with custom component sections.",
        subsections: [
          "3.1 Concept Ideation & Wireframing a Modern Landing Page",
          "3.2 Assembling Semantic HTML Header and Navigation Components",
          "3.3 Styling Hero Sections with Compelling Call-to-Action (CTA) Elements",
          "3.4 Constructing Content Grids and Feature Cards with Flexbox",
          "3.5 Designing Contact Sections, Footers, and Visual Polish",
        ],
      },
      {
        num: "Chapter IV",
        title: "Mastering Tailwind CSS",
        pages: "Pages 79 – 104",
        summary:
          "Comprehensive guide to modern utility-first CSS using Tailwind CSS, rapid prototyping with Tailblocks, and responsive mobile-first development.",
        subsections: [
          "4.1 Why Tailwind CSS? Utility-First Paradigm vs Traditional CSS",
          "4.2 Rapid Setup with Tailwind CDN and Production Tailwind CLI",
          "4.3 Essential Utility Classes: Spacing, Flex, Grid, Typography, and Colors",
          "4.4 Leveraging Tailblocks Component Libraries for High-Speed Prototyping",
          "4.5 Implementing Mobile-First Responsive Breakpoints (sm, md, lg, xl)",
          "4.6 Building a Production-Ready Responsive Website from Scratch",
        ],
      },
    ],
    targetAudience: [
      "Vocational High School Students (SMK RPL / TKJ) beginning web engineering.",
      "Junior Frontend Developers seeking to master utility-first Tailwind workflows.",
      "Self-taught learners and bootcamp students desiring an organized, zero-to-one guide.",
      "Instructors and teachers looking for a structured 4-phase classroom teaching syllabus.",
    ],
    workshopDeployments: [
      {
        school: "SMK IDN Boarding School",
        role: "Frontend Teaching Syllabus & Internal Module",
        date: "May 2024",
        impact: "Integrated as standard coursework material for 10th & 11th grade software engineering majors.",
      },
      {
        school: "SMA Lazuardi GCS",
        role: "Web Development Instructor",
        date: "September 2024",
        impact: "Utilized for hands-on web training introducing modern frontend architecture.",
      },
      {
        school: "Hajra By Adl",
        role: "Web Development Instructor",
        date: "August 2024",
        impact: "Guided students through HTML/CSS responsive web landing page workshops.",
      },
    ],
  },
};
