// src/data/publicationDetails.js
import bookGameCover from "../assets/buku-membuat-game-tanpa-coding-cover.webp?w=400;800&quality=85&format=avif;webp&as=picture";
import bookWebCover from "../assets/buku-membuat-website-dengan-framework-cover.webp?w=400;800&quality=85&format=avif;webp&as=picture";
import bookGamePdf from "../assets/buku-membuat-game-tanpa-coding-adyvka.pdf";
import bookWebPdf from "../assets/buku-membuat-website-dengan-framework-adyvka.pdf";

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
      "A comprehensive 125-page published book engineered to demystify computer science logic for young learners and beginners. Written by Rafif Sava Adyvka Pratama, this book eliminates syntactic friction by using MIT Scratch's block-based visual canvas, teaching fundamental computational principles—event listeners, variable states, collision geometry, conditional branching, and physics loops—through five complete playable games.",
    synopsis: [
      "In standard computer science education, beginners often hit an immediate barrier: syntax errors and intimidating boilerplate code overshadow algorithmic thinking. 'Membuat Game Tanpa Coding' was authored to solve this problem by providing a structured, visual-first roadmap.",
      "The curriculum starts from foundational principles—workspace orientation, coordinate systems (X/Y axes), sprite manipulation, and event loops—before guiding students step-by-step through developing 5 full arcade and educational games from an empty canvas.",
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
        chapter: "BAB II",
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
        chapter: "BAB III",
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
        chapter: "BAB IV",
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
        chapter: "BAB V",
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
        chapter: "BAB VI",
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
        num: "BAB I",
        title: "Membuat Game di Scratch",
        pages: "Pages 1 – 20",
        summary:
          "Introduction to visual block programming paradigms, environment setup, and foundational Scratch architecture.",
        subsections: [
          "1.1 Mengenal Pemrograman Visual & MIT Scratch",
          "1.2 Download & Instalasi Scratch Desktop di Windows/Mac",
          "1.3 Menggunakan Scratch Web Editor di Browser",
          "1.4 Memahami Workspace: Stage, Sprite Area, dan Palette Block",
        ],
      },
      {
        num: "BAB II",
        title: "Catching Fruit",
        pages: "Pages 21 – 40",
        summary:
          "Designing the first interactive game: mechanics of falling items, responsive basket controls, and collision loops.",
        subsections: [
          "2.1 Konsep Game & Wireframing Alur Permainan",
          "2.2 Membuat & Mengimpor Sprite Keranjang dan Buah",
          "2.3 Mendesain Backdrop Panggung yang Menarik",
          "2.4 Script Logika Gerak Horizontal Keranjang",
          "2.5 Script Gravitasi Buah, Random Spawning, dan Sistem Skor",
        ],
      },
      {
        num: "BAB III",
        title: "Alien Invader",
        pages: "Pages 41 – 60",
        summary:
          "Building a top-down arcade space shooter with laser projectile cloning, enemy patrols, and hit detection.",
        subsections: [
          "3.1 Konsep Space Defender Arcade",
          "3.2 Mendesain Sprite Pesawat Luar Angkasa dan Musuh Alien",
          "3.3 Backdrop Kosmis & Animasi Efek Bintang Bergerak",
          "3.4 Script Mekanisme Penembakan Laser dengan Fitur Clone",
          "3.5 Deteksi Tumbukan Laser ke Alien & Sistem Pengurangan HP",
        ],
      },
      {
        num: "BAB IV",
        title: "Game Adab",
        pages: "Pages 61 – 80",
        summary:
          "Engineering an educational narrative experience with interactive question nodes, character dialogues, and scoring.",
        subsections: [
          "4.1 Konsep Game Edukasi Nilai Moral & Adab Sehari-hari",
          "4.2 Desain Karakter Ekspresif & Beragam Latar Lingkungan",
          "4.3 Script Percakapan Menggunakan Block 'Say' dan 'Broadcast'",
          "4.4 Pembuatan Pilihan Jawaban Interaktif & Cabang Skenario",
          "4.5 Rekapitulasi Skor & Evaluasi Pembelajaran Akhir",
        ],
      },
      {
        num: "BAB V",
        title: "Pacman",
        pages: "Pages 81 – 102",
        summary:
          "Constructing maze navigation logic, wall collision boundaries, autonomous patrol ghosts, and collectible item counters.",
        subsections: [
          "5.1 Mekanika Navigasi Labirin & Penataan Grid Koordinat",
          "5.2 Desain Backdrop Labirin Berbasis Warna Tembok",
          "5.3 Script Pergerakan 4-Arah Pacman & Pencegahan Tembus Dinding",
          "5.4 Script Pergerakan Patroli Hantu Secara Mandiri",
          "5.5 Koleksi Pelet Makanan, Kalkulasi Skor, & Game Over Trigger",
        ],
      },
      {
        num: "BAB VI",
        title: "Block Breaker",
        pages: "Pages 103 – 123",
        summary:
          "Implementing paddle deflection angles, ball velocity physics, brick grid destruction routines, and complete game victory loops.",
        subsections: [
          "6.1 Konsep Arcade Classic Brick Breaker",
          "6.2 Desain Sprite Pemukul (Paddle), Bola, dan Varian Balok",
          "6.3 Script Pemantulan Bola Berdasarkan Sudut Benturan Paddle",
          "6.4 Script Penghancuran Balok Menggunakan Blok Clone / Pola Grid",
          "6.5 Batas Zona Kematian Bawah, Nyawa Pemain, & Layar Kemenangan",
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
        date: "May 2023",
        impact: "Guided 25+ students through building their own complete 2D arcade games.",
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
      "A 106-page step-by-step practical engineering module authored by Rafif Sava Adyvka Pratama. Designed to guide students and junior developers from zero web knowledge to engineering responsive, modern, production-grade landing pages using HTML5 semantics, CSS3 layouts, and the industry-standard utility-first framework: Tailwind CSS.",
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
        chapter: "BAB I",
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
        chapter: "BAB II & BAB III",
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
        chapter: "BAB IV",
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
        num: "BAB I",
        title: "Pengenalan HTML Dasar",
        pages: "Pages 1 – 28",
        summary:
          "Web architectural foundations, developer tooling setup, HTML5 document structures, typography tags, media embedding, and accessible forms.",
        subsections: [
          "1.1 Memahami Cara Kerja Website, Server, dan Browser",
          "1.2 Instalasi & Konfigurasi VS Code dan Ekstensi Live Server",
          "1.3 Struktur Dokumen Dasar HTML5 (Head, Meta, Title, Body)",
          "1.4 Elemen Teks: Heading, Paragraf, Format Tebal/Miring, dan List",
          "1.5 Menambahkan Gambar, Hyperlink Internal/Eksternal, & Video",
          "1.6 Membuat Struktur Tabel Data dan Formulir Input Lengkap",
        ],
      },
      {
        num: "BAB II",
        title: "Pengenalan CSS Dasar",
        pages: "Pages 29 – 54",
        summary:
          "Styling mechanics, CSS selectors, color theory, typography, the fundamental Box Model, and introductory layout arrangements.",
        subsections: [
          "2.1 Sintaks CSS: Selektor Elemen, Class, ID, dan Universal",
          "2.2 Tiga Metode Menyisipkan CSS: Inline, Internal, dan External",
          "2.3 Membedah Box Model: Margin, Padding, Border, dan Content",
          "2.4 Pengaturan Tipografi: Font-Family, Font-Size, Line-Height, dan Warna",
          "2.5 Background Styling: Linear Gradient, Background Image, dan Opacity",
          "2.6 Dasar Layouting: Display Block, Inline-Block, dan Flexbox Pengantar",
        ],
      },
      {
        num: "BAB III",
        title: "Membuat Project HTML CSS",
        pages: "Pages 55 – 78",
        summary:
          "Hands-on architectural project synthesizing HTML5 and CSS3 into an attractive, responsive landing page with custom component sections.",
        subsections: [
          "3.1 Perancangan Konsep & Wireframe Halaman Landing Page",
          "3.2 Menyusun Struktur HTML Header dan Navigasi Menu",
          "3.3 Styling Hero Section dengan Call-to-Action (CTA) Menarik",
          "3.4 Membangun Grid Konten dan Kartu Fitur dengan Flexbox",
          "3.5 Mendesain Bagian Kontak, Footer, dan Finishing Detail",
        ],
      },
      {
        num: "BAB IV",
        title: "Menggunakan Tailwind",
        pages: "Pages 79 – 104",
        summary:
          "Comprehensive guide to modern utility-first CSS using Tailwind CSS, rapid prototyping with Tailblocks, and responsive mobile-first development.",
        subsections: [
          "4.1 Mengapa Tailwind CSS? Paradigma Utility-First vs Tradisional",
          "4.2 Setup Cepat Menggunakan Tailwind CDN dan Tailwind CLI",
          "4.3 Kelas Utilitas Esensial: Spacing, Flex, Grid, Typography, dan Colors",
          "4.4 Pemanfaatan Library Komponen Tailblocks untuk Perakitan Kilat",
          "4.5 Implementasi Responsif Mobile-First (sm, md, lg, xl)",
          "4.6 Membangun Website Responsif Siap Produksi dari Awal",
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
