// src/data/achievementDetails.js
// Official award certificates & competition archive photos
import pnb1 from "../assets/pnb/pnbitc-2024-runner-up-stage-award-1.webp";
import pnb2 from "../assets/pnb/pnbitc-2024-runner-up-trophy-certificate-2.webp";
import pnb3 from "../assets/pnb/pnbitc-2024-national-competition-team-bali-3.webp";

import icomfest1 from "../assets/icomfest-2025-1st-place-web-design-national-champion.webp";
import icomfest2 from "../assets/icomfest/icomfest-2025-champion-trophy-ceremony-2.webp";
import icomfest3 from "../assets/icomfest/icomfest-2025-web-design-finalist-stage-3.webp";

import unila1 from "../assets/unila-web-development-competition-national-finalist-2025.webp";
import unila2 from "../assets/unila/unila-national-web-dev-presentation-2.webp";
import unila3 from "../assets/unila/unila-national-finalist-award-3.webp";

import poster1 from "../assets/idn-boarding-school-best-poster-award.webp";

export const achievementDetails = {
  // =========================================================================
  // 00. PNBITC#18 2026 — 2ND PLACE NATIONAL WEB DESIGN COMPETITION
  // =========================================================================
  "2nd-place-national-web-design-competition-pnbitc": {
    badge: "2nd Place",
    subtitle: "PNBITC#18 · Politeknik Negeri Bali",
    roleTitle: "2nd Place: National Web Design Competition",
    institution: "Politeknik Negeri Bali (PNBITC#18)",
    period: "Oct 2026",
    summary:
      "Awarded 2nd Place at the prestigious PNBITC#18 National Web Design Competition hosted by Politeknik Negeri Bali. Engineered and shipped a competition-grade web platform from scratch while managing a demanding 12th-grade corporate internship, competing against university undergraduates and high school teams nationwide.",
    meta: [
      { label: "Category", value: "Web Design Competition" },
      { label: "Level", value: "National (Collegiate & Public)" },
      { label: "Result", value: "2nd Place (National Runner-Up)" },
      { label: "Role", value: "Lead Full Stack Developer & UI/UX" },
      { label: "Sprint", value: "September 2026 (1 Month)" },
      { label: "Organizer", value: "Politeknik Negeri Bali" },
    ],
    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "UI/UX Design",
      "Figma",
      "Git/GitHub",
    ],
    links: [
      {
        label: "Official Article",
        url: "https://idn.sch.id/smk-dkv-terbaik-bogor-siswa-idn-tembus-final-kompetisi-it-di-bali/",
      },
    ],
    kpis: [
      {
        value: "2nd Place",
        label: "National Runner-Up",
        note: "Podium finish at PNBITC#18 against university & senior high contenders",
      },
      {
        value: "1 Month",
        label: "High-Stakes Sprint",
        note: "Architected and delivered from scratch in September 2026",
      },
      {
        value: "100+ Teams",
        label: "National Competitors",
        note: "Outperforming collegiate engineering teams across the Indonesian archipelago",
      },
      {
        value: "Grade 12",
        label: "Internship & Sprint",
        note: "Proving intense corporate work schedules cannot curb academic ambition",
      },
    ],
    story: {
      headline: "Coding at Midnight, Delivering by Day: The Road to National Runner-Up.",
      lead: "How balancing the grueling demands of a mandatory 12th-grade corporate internship with late-night competition sprints culminated in 2nd Place at PNBITC#18 Politeknik Negeri Bali.",
      quote:
        "When passion meets discipline, a crowded schedule isn't an obstacle—it becomes fuel. Standing on the national podium while still in high school proved that the midnight hours were worth every single line of code.",
      chapters: [
        {
          chapter: "01",
          title: "The Clash of Deadlines & A Spark of Ambition",
          content:
            "Entering September 2026, my life was already running at maximum capacity. As a 12th-grader undergoing a mandatory one-year corporate internship, my weekdays were consumed by production backends, client tickets, and tight corporate sprints. Yet, when the announcement for the 18th PNB Information Technology Competition (PNBITC#18) at Politeknik Negeri Bali crossed my desk, a familiar adrenaline kicked in. Some peers thought it was reckless to take on a nationwide web design competition while managing enterprise deadlines. But I couldn't let the opportunity pass. I knew that true growth doesn't happen when conditions are comfortable; it happens when you push yourself beyond what feels manageable.",
        },
        {
          chapter: "02",
          title: "Midnight Sprints & Crafting Under Pressure",
          content:
            "Throughout September, my daily routine transformed into a relentless test of endurance. By day, I operated as a dedicated corporate developer, delivering production modules well ahead of schedule. By night, when the rest of the dorms went quiet, my second shift began. Staring at the glow of my screen into the early hours of 2 AM, I meticulously designed and coded our competition web platform from absolute zero. Every component, micro-interaction, and responsive breakpoint was crafted with obsessive care. There were nights of sheer mental exhaustion where debugging CSS layouts and state management felt overwhelming, but the vision of bringing our best work to a national stage kept my fingers moving on the keyboard.",
        },
        {
          chapter: "03",
          title: "The National Podium in Bali & The Taste of Pride",
          content:
            "On October 1st, 2026, the national grand final evaluation and announcement arrived. Competing against dozens to hundreds of brilliant participants—including seasoned university undergraduates and top vocational schools from across the Indonesian archipelago—was genuinely humbling. When our name was called as the 2nd Place Winner (Juara 2 Nasional Desain Web), a wave of profound relief and emotion rushed over me. Holding that national award plaque in my hands was not just about the trophy; it was the ultimate vindication of every sleepless night, every sacrificed weekend, and every doubt cast aside. It solidified my conviction that neither age nor a grueling schedule can cap what a high schooler with relentless drive can achieve.",
        },
      ],
    },
    pillarsTitle: "Platform Pillars & Design Craftsmanship",
    pillarsLead:
      "The architectural choices, design system rigor, and performance benchmarks that earned 2nd Place at PNBITC#18.",
    pillars: [
      {
        title: "Empathetic Digital Mentorship & Learning Hub",
        tag: "Core Value Proposition",
        desc: "Engineered an interactive mentorship platform bridging ambitious youth with seasoned industry professionals, featuring dynamic search, categorized skills tracks, and seamless scheduling.",
      },
      {
        title: "Fluid Responsive Architecture & Micro-Interactions",
        tag: "Frontend Craft",
        desc: "Constructed bespoke Tailwind components with smooth micro-interactions, responsive fluid grids, and accessible color hierarchy tailored to modern web standards.",
      },
      {
        title: "Rapid Prototyping & Clean Code Discipline",
        tag: "Engineering Rigor",
        desc: "Developed the complete web application within a strict one-month timeframe, maintaining rigorous semantic HTML, reusable component architecture, and lightweight client-side assets.",
      },
      {
        title: "Accessibility & Cross-Device Resilience",
        tag: "Production Standards",
        desc: "Tested extensively across low-bandwidth connections and varying viewport sizes to guarantee flawless rendering and rapid Time-to-Interactive (TTI) benchmarks.",
      },
    ],
    takeawaysTitle: "Reflections on Competing While Working",
    takeawaysLead:
      "Key takeaways on extreme time management, dual accountability, and self-belief.",
    takeaways: [
      {
        title: "Extreme Timeboxing Over Endless Hours",
        desc: "Balancing a 9-to-5 corporate internship with national competition sprints taught me that focused two-hour deep work sessions outperform unstructured all-nighters.",
      },
      {
        title: "Corporate Experience as an Unfair Advantage",
        desc: "Applying real-world corporate code standards, architectural hygiene, and deadline discipline directly into the competition entry separated our platform from amateur prototypes.",
      },
      {
        title: "Standing Tall Against University Peers",
        desc: "Standing on the podium against university undergraduates proved that seniority is just a number; dedication, craft, and clear storytelling are what truly define a developer.",
      },
    ],
    documentationTitle: "PNBITC#18 Documentation & Verifiable Records",
    documentationLead:
      "Official award plaque, live stage announcement ceremony, and platform showcase from Politeknik Negeri Bali.",
    documentation: [
      {
        id: "pnb-award",
        title: "Official 2nd Place Award Plaque & Winner Moment",
        tag: "Official Award",
        image: pnb2,
        desc: "Holding the official 'Juara 2 Desain Web' national award plaque at PNBITC#18, commemorating our national runner-up achievement.",
      },
      {
        id: "pnb-stage",
        title: "Championship Ceremony & Stage Announcement",
        tag: "Grand Final Stage",
        image: pnb1,
        desc: "Live stage screen announcement at Politeknik Negeri Bali celebrating the national champions of PNBITC#18.",
      },
      {
        id: "pnb-demo",
        title: "Platform Showcase & Official Presentation Evaluation",
        tag: "Live Demo & Showcase",
        image: pnb3,
        desc: "Live demonstration and project evaluation of the web platform during the national final round of PNBITC#18.",
      },
    ],
  },

  // =========================================================================
  // 01. ICOMFEST 2025 — 1ST PLACE NATIONAL WEB DESIGN COMPETITION
  // =========================================================================
  "1st-place-national-web-design-competition": {
    badge: "1st Place",
    subtitle: "ICOMFEST 2025 · Universitas Ahmad Dahlan",
    roleTitle: "1st Place: National Web Design Competition",
    institution: "ICOMFEST 2025 (Informatics Festival)",
    period: "Feb 2025",
    relatedProject: "pusakaku",
    relatedProjectTitle: "PusakaKu",
    summary:
      "Led a 3-person engineering team to win 1st Place at the ICOMFEST 2025 National Web Design Competition by engineering 'PusakaKu' — an interactive cultural platform revitalizing endangered Indonesian traditional games through deep ethnography and gamified education.",
    meta: [
      { label: "Category", value: "Web Design Competition" },
      { label: "Level", value: "National (University & Public)" },
      { label: "Result", value: "1st Place (National Champion)" },
      { label: "Role", value: "Team Lead, PM & Core Developer" },
      { label: "Project", value: "PusakaKu (Heritage Platform)" },
      { label: "Team", value: "3 Students (Tim Batosai)" },
    ],
    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Gamification Engine",
      "UI/UX Design",
      "Figma",
      "Git/GitHub",
    ],
    links: [
      { label: "LinkedIn Post", url: "https://lnkd.in/p/gy-fZZqr" },
      { label: "Official Article", url: "https://idn.sch.id/juara-1-web-design-icomfest-2025/" },
    ],
    kpis: [
      {
        value: "1st Place",
        label: "National Champion",
        note: "Ranked #1 among national university and senior high competitors",
      },
      {
        value: "3 Weeks",
        label: "Boarding School Sprints",
        note: "Balancing intensive coding sessions with rigorous academic routines",
      },
      {
        value: "3-Person",
        label: "Engineering Squad",
        note: "Led project management, technical architecture, and core development",
      },
      {
        value: "Top 5",
        label: "Grand Final Defense",
        note: "Pitched live platform architecture & UX to expert judge panel",
      },
    ],
    story: {
      headline: "From a Spontaneous Holiday Spark to National First Place.",
      lead: "How an initiative brainstormed during semester break evolved through relentless three-week boarding school sprints into the national winning traditional games platform.",
      quote:
        "A spontaneous initiative sparked during a holiday rest, when driven by relentless commitment and collaborative execution, can culminate in an extraordinary achievement.",
      chapters: [
        {
          chapter: "01",
          title: "The Holiday Spark & Team Formation",
          content:
            "The journey to winning 1st Place at the ICOMFEST 2025 National Web Design Competition began with a simple moment during my semester break. Having cultivated a passion for web development since junior high school, I was immediately intrigued upon seeing the competition announcement. I proactively gathered two peers to form a team, assuming dual responsibilities as the Team Lead and Project Manager, while also serving as a core developer actively coding and building the website alongside my teammates.",
        },
        {
          chapter: "02",
          title: "Engineering PusakaKu Under Boarding School Rigor",
          content:
            "Through extensive brainstorming and technical collaboration, we conceptualized and engineered 'PusakaKu,' an interactive platform designed to revitalize traditional Indonesian games. Driven by a concern that our cultural heritage was fading in the modern era, we integrated comprehensive historical information with a captivating user interface and educational gamification. Our primary challenge was time management; we initiated the project during our last week of holiday, but had to sustain the development phase for another three weeks while navigating a highly demanding boarding school schedule. Balancing intensive coding sessions with rigorous academic duties required immense dedication. Nevertheless, through strategic delegation and relentless hands-on teamwork, we successfully advanced to the Top 5.",
        },
        {
          chapter: "03",
          title: "The Surreal Grand Final Pitch & National Victory",
          content:
            "Pitching our project to the panel of judges during the grand final felt natural, as daily practice at school had thoroughly refined my public speaking skills. Yet, despite the intense hard work we poured into developing the platform, hearing our team announced as the national champion remained a profoundly surreal and unexpected moment. It proved that a spontaneous initiative sparked during a holiday rest, when driven by relentless commitment and collaborative execution, can culminate in an extraordinary achievement.",
        },
      ],
    },
    pillarsTitle: "Platform Architecture & Cultural Innovation",
    pillarsLead:
      "Core technical and design pillars engineered to save endangered traditional folklore through digital interaction.",
    pillars: [
      {
        title: "Traditional Games Revitalization & Ethnography",
        tag: "Cultural Preservation",
        desc: "Curated comprehensive ethnographic profiles, regional origins across 10 Indonesian provinces (including Egrang, Gobak Sodor, Congklak, and Balap Karung), and cultural philosophy to rescue Indonesia's heritage from modern obscurity.",
      },
      {
        title: "10-Stage Gamified Assessment Engine",
        tag: "Gamification & State",
        desc: "Engineered a dynamic multiple-choice quiz engine with instant answer validation, real-time score tabulation, and knowledge retention testing that transformed passive reading into an engaging challenge.",
      },
      {
        title: "Heritage-Infused Modern UI/UX",
        tag: "Design System",
        desc: "Crafted a bespoke visual identity blending warm Nusantara earth tones, editorial typography inspired by Yogyakarta cultural aesthetics, smooth horizontal marquees, and responsive mobile-first navigation.",
      },
      {
        title: "Accessibility & Performance Discipline",
        tag: "Engineering Rigor",
        desc: "Implemented semantic HTML markup, keyboard-accessible navigation landmarks, WCAG-compliant color contrast, and optimized assets to guarantee swift load speeds even on low-spec hardware.",
      },
    ],
    takeawaysTitle: "Leadership & Technical Takeaways",
    takeawaysLead:
      "Key insights gained from leading a multi-disciplinary student squad to a national championship under high constraints.",
    takeaways: [
      {
        title: "Leading from the Frontlines",
        desc: "Balancing project management with active coding ensured realistic sprint estimations, quick unblocking of technical obstacles, and earned the genuine respect of my teammates by building right beside them.",
      },
      {
        title: "Ruthless Focus Under Tight Constraints",
        desc: "Balancing late-night coding with rigid boarding school routines taught us that clear scope boundaries, early feature freezing, and rigorous daily testing beat chaotic late-minute scrambles every time.",
      },
      {
        title: "The Decisive Power of Articulate Defense",
        desc: "A great technical architecture is only half the battle. Regular public speaking practice at school allowed us to defend our design choices, explain our cultural mission, and tackle judge inquiries with calm conviction.",
      },
    ],
    documentationTitle: "Championship Documentation & Verifiable Records",
    documentationLead:
      "Official winner certificate, grand final presentation defense, and commemorative milestone captures from ICOMFEST 2025.",
    documentation: [
      {
        id: "icomfest-cert",
        title: "Official 1st Place National Winner Certificate",
        tag: "Official Award",
        image: icomfest1,
        desc: "Official national certificate awarding 1st Place to our team for 'PusakaKu' in the ICOMFEST 2025 National Web Design Competition.",
      },
      {
        id: "icomfest-pitch",
        title: "Team Lead On-Site & Grand Final Defense",
        tag: "Pitch & Presentation",
        image: icomfest2,
        desc: "Defending PusakaKu live before the panel of expert judges, walking through the responsive interface, cultural ethnography, and technical gamification architecture.",
      },
      {
        id: "icomfest-stage",
        title: "PusakaKu Platform Showcase & Stage Victory",
        tag: "Platform & Milestone",
        image: icomfest3,
        desc: "Showcasing PusakaKu's interactive features and celebrating our national championship victory announcement following the rigorous final jury evaluation.",
      },
    ],
  },

  // =========================================================================
  // 02. UNILA 2024 — TOP 5 FINALIST NATIONAL WEB DEV COMPETITION
  // =========================================================================
  "finalist-national-web-dev-competition": {
    badge: "Top 5 Finalist",
    subtitle: "Universitas Lampung (Unila) 2024",
    roleTitle: "Top 5 Finalist: National Web Dev Competition",
    institution: "Universitas Lampung (Unila)",
    period: "Oct 2024",
    relatedProject: "semua-bisa",
    relatedProjectTitle: "SemuaBisa",
    summary:
      "Entrusted by school faculty to lead Team Deadliner at the UNILA National Web Development Competition. Facilitated team consensus to build 'SemuaBisa' — a functional e-learning platform bridging educational disparities in rural Indonesia. Finished in 4th place as the sole vocational high school (SMK) finalist competing against collegiate teams.",
    meta: [
      { label: "Category", value: "Web Development Competition" },
      { label: "Level", value: "National (Collegiate & Public)" },
      { label: "Result", value: "4th Place / Top 5 Grand Finalist" },
      { label: "Role", value: "Team Lead & Core Developer" },
      { label: "Project", value: "SemuaBisa (EdTech Ecosystem)" },
      { label: "Team", value: "Team Deadliner (Sole SMK Finalist)" },
    ],
    stack: [
      "HTML5 / Semantic Web",
      "Tailwind CSS",
      "Alpine.js",
      "DaisyUI",
      "JavaScript",
      "UI/UX Design",
      "Git/GitHub",
    ],
    links: [
      { label: "LinkedIn Post", url: "https://lnkd.in/p/gequTgK3" },
    ],
    kpis: [
      {
        value: "Top 5",
        label: "Grand Finalist",
        note: "The only vocational high school (SMK) squad among university finalists",
      },
      {
        value: "4th Place",
        label: "National Standing",
        note: "Proving secondary school engineering on par with university innovation",
      },
      {
        value: "100% Funded",
        label: "School Scholarship",
        note: "Selected and sponsored by school faculty based on academic excellence",
      },
      {
        value: "Bogor → Lpg",
        label: "Transit Backpacking",
        note: "Traveled independently across provinces via minivans, trains, and ferries",
      },
    ],
    story: {
      headline: "Standing Shoulder-to-Shoulder with University Teams.",
      lead: "How our vocational high school team built 'SemuaBisa', backpacked across the Sunda Strait, and proved our technical mettle on a collegiate national stage.",
      quote:
        "Holding our own against university students and proving that our web development skills were on par with college-level innovations left me with an immense, unexpected sense of pride.",
      chapters: [
        {
          chapter: "01",
          title: "Faculty Trust & The Genesis of 'SemuaBisa'",
          content:
            "Right in the middle of a packed schedule filled with school projects and student council duties, my teacher called me in. I was entrusted to lead our school's team for the UNILA National Web Development Competition, fully funded by the school based on my academic track record. It was a massive opportunity, but our first real challenge emerged immediately during brainstorming. My two teammates and I had conflicting visions—one wanted a CV generator, while another pushed for an automated note-taking app. Knowing we needed a unified direction, I facilitated an open discussion where we evaluated the real-world impact of each idea. We eventually reached a consensus to build 'SemuaBisa,' a functional e-learning platform explicitly designed to tackle educational disparities in rural Indonesia.",
        },
        {
          chapter: "02",
          title: "The Sole SMK Finalists & Transit Across the Sunda Strait",
          content:
            "The biggest shock came when the preliminary results were announced. We made it to the Top 5 Grand Finalists, but we were the only vocational high school (SMK) team on the list; the other four were university teams. Knowing we were competing against older students made our trip from Bogor to Lampung an adventure in itself. Traveling entirely via public transit—switching between minivans, trains, and a ferry—we treated the journey as a practical test of our independence. Once we arrived at our lodging, we spent our nights running through presentation simulations to ensure our delivery was as solid as our code.",
        },
        {
          chapter: "03",
          title: "Facing the Collegiate Jury & Defending Our Architecture",
          content:
            "On presentation day, facing a collegiate-level judging panel was undeniably nerve-wracking. However, trusting the technical infrastructure we had built from scratch helped us push past the anxiety. We ultimately finished in 4th place. Even though we initially hoped for a podium finish, I did not feel a single drop of disappointment. Holding our own against university students and proving that our web development skills were on par with college-level innovations left me with an immense, unexpected sense of pride.",
        },
      ],
    },
    pillarsTitle: "Platform Pillars & Social Impact: 'SemuaBisa'",
    pillarsLead:
      "Core architecture and educational pathways engineered to democratize tech education across Indonesia.",
    pillars: [
      {
        title: "Free Technical Bootcamp Hub",
        tag: "Accessible Education",
        desc: "Curated 8 comprehensive technology learning tracks covering Frontend, Backend, UI/UX, and Mobile Development, completely free of charge to remove economic barriers for rural youth.",
      },
      {
        title: "Higher Education Degree Roadmaps",
        tag: "Scholarship Pathways",
        desc: "Integrated comprehensive university guidance and scholarship databases with Alpine.js tab filtering, helping underprivileged students navigate higher education opportunities.",
      },
      {
        title: "Freelance Matchmaking & Micro-Gigs",
        tag: "Economic Empowerment",
        desc: "Built a junior digital talent marketplace allowing vocational students to showcase client-ready portfolios and bid on entry-level freelance projects.",
      },
      {
        title: "Low-Bandwidth Responsive Architecture",
        tag: "Inclusive Engineering",
        desc: "Optimized semantic markup and responsive Tailwind components to ensure instantaneous load times even over unstable rural cellular connections.",
      },
    ],
    takeawaysTitle: "Competition Retrospective & Growth",
    takeawaysLead:
      "Key takeaways from leading a secondary school squad against university competitors on a national stage.",
    takeaways: [
      {
        title: "Unifying Diverse Visions with Empathy",
        desc: "Facilitating constructive team debates rather than enforcing top-down decisions transformed divergent ideas into a shared, high-impact mission that kept everyone invested.",
      },
      {
        title: "Confidence Grounded in Deep Technical Ownership",
        desc: "Anxiety before a collegiate panel fades when you know every line of code inside out. Thorough preparation and realistic presentation dry runs turn fear into composure.",
      },
      {
        title: "Validating Vocational High School Capability",
        desc: "Ranking 4th against university undergraduates demonstrated that rigorous hands-on practice, discipline, and user-centric problem solving transcend formal academic seniority.",
      },
    ],
    documentationTitle: "Grand Final Documentation & Field Archives",
    documentationLead:
      "Photographic records from our competition pitch defense, team journey, and the live SemuaBisa platform interface at Universitas Lampung.",
    documentation: [
      {
        id: "unila-presentation",
        title: "Grand Final Presentation & Problem Defense",
        tag: "Presentation Defense",
        image: unila1,
        desc: "Defending the educational inequality problem statement and technical architecture of 'SemuaBisa' live before the collegiate judging panel during the UNILA 2024 Grand Final.",
      },
      {
        id: "unila-team",
        title: "Team Deadliner On-Site at Universitas Lampung",
        tag: "Team Milestone",
        image: unila2,
        desc: "Team Deadliner (sole vocational high school finalist) commemorating our milestone at Universitas Lampung after traveling independently from Bogor via multi-modal transit.",
      },
      {
        id: "unila-platform",
        title: "SemuaBisa.com Interactive Platform Showcase",
        tag: "Web Platform UI",
        image: unila3,
        desc: "Official desktop interface of SemuaBisa.com ('Menanam Bakat Pemuda Indonesia'), featuring 100% free tech bootcamp roadmaps, university degree pathways, and youth career matchmaking.",
      },
    ],
  },

  // =========================================================================
  // 03. IDUL ADHA FESTIVAL — BEST POSTER AWARD
  // =========================================================================
  "dummy-new-achievement": {
    badge: "Best Poster",
    subtitle: "IDN Boarding School",
    roleTitle: "Best Poster Award: Idul Adha Festival",
    institution: "IDN Boarding School",
    period: "Dec 2023",
    summary:
      "Awarded Best Visual Poster at the IDN Boarding School Idul Adha Festival, conceptualizing creative visual compositions, typography hierarchy, and spiritual cultural messaging.",
    meta: [
      { label: "Category", value: "Graphic Design" },
      { label: "Institution", value: "IDN Boarding School" },
      { label: "Result", value: "Best Poster Award" },
      { label: "Tools", value: "Figma, Adobe Illustrator" },
    ],
    stack: ["Graphic Design", "Typography", "Figma", "Visual Hierarchy"],
    kpis: [
      {
        value: "1st Place",
        label: "Best Poster Award",
        note: "Honored for best visual execution and typographic balance",
      },
      {
        value: "Editorial",
        label: "Design Style",
        note: "Harmonizing classic Islamic geometry with modern typography",
      },
      {
        value: "100%",
        label: "Original Assets",
        note: "Custom vectors, layout grid, and tailored color palette",
      },
    ],
    story: {
      headline: "Visual Storytelling Through Geometric Elegance.",
      lead: "Crafting a festival poster that fused traditional Islamic aesthetics with contemporary minimalist layout principles.",
      quote:
        "Great design is not about decorating a canvas; it is about communicating a profound message with maximum clarity and emotional resonance.",
      chapters: [
        {
          chapter: "01",
          title: "The Creative Brief",
          content:
            "Tasked with designing the visual identity for IDN's annual Idul Adha celebration, I aimed to depart from conventional clip-art posters and instead build a refined, editorial-grade visual language.",
        },
        {
          chapter: "02",
          title: "Balancing Typography and Cultural Motifs",
          content:
            "I combined high-contrast serif typography with geometric arches and subtle gold accents. The design hierarchy guided the viewer naturally from the event headline down to the schedule and location.",
        },
        {
          chapter: "03",
          title: "Award Recognition",
          content:
            "The design was selected by the jury as the Best Poster for its sophisticated restraint, balanced whitespace, and emotional warmth.",
        },
      ],
    },
    documentationTitle: "Visual Artifact & Presentation",
    documentationLead: "Official festival poster design and commemorative graphic assets.",
    documentation: [
      {
        id: "poster-main",
        title: "Official Idul Adha Festival Poster",
        tag: "Visual Design",
        image: poster1,
        desc: "High-resolution graphic presentation of the award-winning Idul Adha Festival poster.",
      },
    ],
  },
};

// Aliases for intuitive URL routing
achievementDetails["icomfest"] =
  achievementDetails["1st-place-national-web-design-competition"];
achievementDetails["icomfest-2025"] =
  achievementDetails["1st-place-national-web-design-competition"];
achievementDetails["pusakaku-achievement"] =
  achievementDetails["1st-place-national-web-design-competition"];

achievementDetails["unila"] =
  achievementDetails["finalist-national-web-dev-competition"];
achievementDetails["unila-2024"] =
  achievementDetails["finalist-national-web-dev-competition"];

achievementDetails["pnbitc"] =
  achievementDetails["2nd-place-national-web-design-competition-pnbitc"];
achievementDetails["pnbitc-18"] =
  achievementDetails["2nd-place-national-web-design-competition-pnbitc"];
achievementDetails["pnb"] =
  achievementDetails["2nd-place-national-web-design-competition-pnbitc"];
achievementDetails["politeknik-negeri-bali"] =
  achievementDetails["2nd-place-national-web-design-competition-pnbitc"];

