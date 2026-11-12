// =========================================================================
// CHATBOT KNOWLEDGE BASE & BILINGUAL INTENT ENGINE (EN & ID)
// Authoritative dataset covering 100% of portfolio records across all domains:
// - 18 Software Engineering Projects (with full architecture, stack & links)
// - 20 Verified Experiences (4 Work, 10 Teaching & Faculty Training, 6 Leadership/Survival)
// - 23 Official Certifications (Harvard CS50, AWS, Git/GitHub, React, SQL, etc.)
// - 4 National Competition Achievements (PNBITC Bali, ICOMFEST 1st, UNILA, Poster)
// - 2 Published Programming Books
// Automatically detects query language (English vs Bahasa Indonesia)
// Strictly adheres to punctuation rule: NO em-dash or semicolon in sentences
// =========================================================================

export const ADYVKA_PROFILE = {
  name: "Rafif Sava Adyvka Pratama",
  alias: "Adyvka",
  age: 17,
  birthYear: 2008,
  birthPlace: "Depok, West Java, Indonesia",
  codingSince: 2021,
  yearsOfExperience: "5+ Years",
  totalProjects: 18,
  totalBooks: 2,
  totalExperiences: 20,
  workExperiencesCount: 4,
  teachingExperiencesCount: 10,
  leadershipExperiencesCount: 6,
  totalCertificates: 23,
  nationalAwardsCount: 4,
  location: "Depok, West Java, Indonesia",
  timezone: "UTC+07 (WIB)",
  religion: "Islam",
  school: "SMK IDN Boarding School",
  grade: "Grade 12 (Final Year)",
  major: "Software Engineering (Rekayasa Perangkat Lunak)",
  gpa: "96 / 100",
  gpaNote: "Semester 4 report card with Academic Honors",
  currentRole: "Lead Systems Engineer & Project Manager at PT Intisel Prodaktifakom",
  email: "rafifdyvka07@gmail.com",
  phone: "+62 821-1313-9664",
  whatsapp: "https://wa.me/6282113139664",
  linkedin: "https://www.linkedin.com/in/adyvka-pratama/",
  github: "https://github.com/adyvka31",
  youtube: "https://www.youtube.com/@adyvkapratama",
  instagram: "https://instagram.com/adyvkaa",
  tiktok: "https://www.tiktok.com/@adypraa31",
  portfolioUrl: "https://adyvkapratama.my.id",
};

export const QUICK_SUGGESTIONS = [
  { id: "why_hire", label: "⭐ Why Hire Adyvka?", query: "why hire adyvka and what makes him stand out" },
  { id: "lead_exp", label: "⚡ Lead Systems Engineer at PT Intisel", query: "tell me about adyvka lead systems engineer role at pt intisel prodaktifakom" },
  { id: "ardyanda", label: "💼 Full Stack Internship at PT Ardyanda", query: "tell me about adyvka internship at pt ardyanda digital inovasi" },
  { id: "projects", label: "🚀 18 Software Engineering Projects", query: "how many projects has adyvka worked on and what are they" },
  { id: "awards", label: "🏆 National Web Competition Awards", query: "what competitions and awards has adyvka won" },
  { id: "gpa", label: "🎓 96/100 GPA & Academic Honors", query: "what is adyvka gpa and academic achievements" },
  { id: "cs50", label: "📜 Harvard CS50 & AWS Cloud", query: "tell me about adyvka harvard cs50 certificate" },
  { id: "books", label: "📚 Author of 2 Published Books", query: "what books has adyvka written and published" },
  { id: "backpacker", label: "🌍 3-Country Solo Backpacker at 15", query: "tell me about adyvka solo backpacker trip across 3 countries" },
  { id: "all_exp", label: "🌟 Complete 20 Career Experiences", query: "tell me about all 20 experiences of adyvka" },
  { id: "faculty", label: "👨‍🏫 Faculty Training at SMPN 25 Depok", query: "tell me about adyvka teacher training at smpn 25 depok" },
  { id: "stack", label: "🛠️ Polyglot Architecture & Stack", query: "what is adyvka tech stack and engineering skills" },
  { id: "git", label: "🐙 Git & GitHub Dicoding Credential", query: "tell me about adyvka git and github certificate from dicoding" },
  { id: "contact", label: "💬 Contact via WhatsApp (+62 821-1313-9664)", query: "how can i contact adyvka via whatsapp" },
];

export const CONTEXTUAL_SUGGESTIONS_MAP = {
  "/": [
    {
      "id": "home_why_hire",
      "label": "⭐ Why Hire Adyvka?",
      "query": "why hire adyvka and what makes him stand out"
    },
    {
      "id": "home_lead_eng",
      "label": "⚡ Lead Systems Engineer at PT Intisel",
      "query": "tell me about adyvka lead systems engineer role at pt intisel prodaktifakom"
    },
    {
      "id": "home_ardyanda",
      "label": "💼 Full Stack Internship at PT Ardyanda",
      "query": "tell me about adyvka internship at pt ardyanda digital inovasi"
    },
    {
      "id": "home_projects",
      "label": "🚀 18 Software Engineering Projects",
      "query": "how many projects has adyvka worked on and what are they"
    },
    {
      "id": "home_award_icomfest",
      "label": "🏆 1st Place National Web Design Winner",
      "query": "tell me about adyvka 1st place national award at icomfest"
    },
    {
      "id": "home_contact",
      "label": "📬 Contact Adyvka on WhatsApp & Email",
      "query": "how can i contact adyvka via whatsapp or email"
    }
  ],
  "/about": [
    {
      "id": "abt_summary",
      "label": "👤 Adyvka Professional Profile Summary",
      "query": "who is adyvka and what is his professional background"
    },
    {
      "id": "abt_tracks",
      "label": "⏳ Two Tracks, Six Years (2021 - 2026 Journey)",
      "query": "tell me about the two tracks six years journey from 2021 to 2026"
    },
    {
      "id": "abt_currently",
      "label": "⚡ Right Now: What is Open in the Tabs",
      "query": "what is adyvka working on and exploring right now"
    },
    {
      "id": "abt_next",
      "label": "🔮 What is Next & 2027 Graduation",
      "query": "what is adyvka career direction and next chapter for 2027"
    },
    {
      "id": "abt_tech_stack",
      "label": "⚡ Core Full Stack & AI Tech Stack",
      "query": "what technologies frameworks and tools does adyvka use"
    },
    {
      "id": "abt_teaching",
      "label": "🎓 Leadership & Teaching Experience",
      "query": "tell me about adyvka teaching and leadership track record"
    },
    {
      "id": "abt_education",
      "label": "🏫 Academic Background at IDN Boarding School",
      "query": "what is adyvka educational background and high school"
    },
    {
      "id": "abt_awards",
      "label": "🏆 National Hackathon Achievements",
      "query": "what awards and competition achievements has adyvka won"
    },
    {
      "id": "abt_contact",
      "label": "📬 Direct Contact & Social Links",
      "query": "what are adyvka official contact details and social media links"
    }
  ],
  "/projects": [
    {
      "id": "projs_overview",
      "label": "🚀 18 Software Engineering Projects Overview",
      "query": "tell me about all 18 software engineering projects by adyvka"
    },
    {
      "id": "projs_pusakaku",
      "label": "🏛️ Pusakaku Nusantara Cultural Platform",
      "query": "tell me about pusakaku nusantara cultural platform"
    },
    {
      "id": "projs_terastani",
      "label": "🌱 Terastani AI & IoT Smart Agriculture",
      "query": "tell me about terastani ai and iot smart agriculture platform"
    },
    {
      "id": "projs_ruangtumbuh",
      "label": "🧠 RuangTumbuh Mental Health & Time Banking",
      "query": "tell me about ruangtumbuh mental health platform"
    },
    {
      "id": "projs_databank",
      "label": "📊 DataBank Web Scraping & Approval Pipeline",
      "query": "tell me about databank erp system"
    },
    {
      "id": "projs_kepk",
      "label": "🏥 SIM KEPK Ethics Committee System",
      "query": "tell me about sim kepk ethical clearance system"
    }
  ],
  "/experience": [
    {
      "id": "exp_overview",
      "label": "💼 All 19 Professional Experiences Overview",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    },
    {
      "id": "exp_intisel",
      "label": "⚡ Lead Systems Engineer at PT Intisel",
      "query": "tell me about adyvka lead systems engineer role at pt intisel prodaktifakom"
    },
    {
      "id": "exp_ardyanda",
      "label": "🏢 Full Stack Internship at PT Ardyanda",
      "query": "tell me about adyvka internship at pt ardyanda digital inovasi"
    },
    {
      "id": "exp_richo",
      "label": "⚓ Frontend Developer at CV Richo Bahari",
      "query": "tell me about adyvka frontend developer role at cv richo bahari"
    },
    {
      "id": "exp_umj",
      "label": "🏥 Full Stack Contract at Universitas Muhammadiyah",
      "query": "tell me about adyvka full stack contract at universitas muhammadiyah jakarta"
    },
    {
      "id": "exp_semarang",
      "label": "🧗 Rp 0 Business Survival in Semarang",
      "query": "tell me about adyvka zero capital business and life survival in semarang"
    }
  ],
  "/achievements": [
    {
      "id": "ach_overview",
      "label": "🏆 National Hackathons & Awards Overview",
      "query": "what national competitions and hackathons has adyvka won"
    },
    {
      "id": "ach_icomfest",
      "label": "🥇 1st Place National Web Design at ICOMFEST",
      "query": "tell me about adyvka 1st place national award at icomfest"
    },
    {
      "id": "ach_pnbitc",
      "label": "🥈 2nd Place National Web Design at PNBITC",
      "query": "tell me about adyvka 2nd place award at pnbitc"
    },
    {
      "id": "ach_unila",
      "label": "🏅 National Finalist Web Development at UNILA",
      "query": "tell me about adyvka finalist achievement at unila"
    },
    {
      "id": "ach_strategy",
      "label": "🎯 Hackathon Winning Strategy & Pitching",
      "query": "what was adyvka winning strategy for national hackathons"
    },
    {
      "id": "ach_projects",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/certificates": [
    {
      "id": "cert_overview",
      "label": "📜 23 Professional Certifications Overview",
      "query": "what certifications does adyvka have"
    },
    {
      "id": "cert_cs50",
      "label": "🎓 Harvard CS50 Computer Science",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_aws",
      "label": "☁️ AWS Cloud Practitioner Essentials",
      "query": "tell me about adyvka aws cloud practitioner certificate"
    },
    {
      "id": "cert_fullstack",
      "label": "💻 Dicoding Full Stack Developer Coding Camp",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_react",
      "label": "⚛️ Dicoding React Web Application Development",
      "query": "tell me about adyvka react web development certificate"
    },
    {
      "id": "cert_backend",
      "label": "🛠️ Dicoding Backend Developer & REST APIs",
      "query": "tell me about adyvka backend developer certificate"
    }
  ],
  "/contact": [
    {
      "id": "cnt_overview",
      "label": "📬 Official Contact Channels & Inquiries",
      "query": "how can i contact adyvka for collaboration or hiring"
    },
    {
      "id": "cnt_deliverables",
      "label": "💼 What I Can Deliver for Your Team",
      "query": "what services and deliverables can adyvka provide for our team"
    },
    {
      "id": "cnt_whatsapp",
      "label": "💬 Reach via WhatsApp Hotline",
      "query": "what is adyvka official whatsapp phone number hotline"
    },
    {
      "id": "cnt_email",
      "label": "✉️ Send Direct Project Email",
      "query": "what is adyvka official project email address"
    },
    {
      "id": "cnt_social",
      "label": "🌐 GitHub & LinkedIn Professional Profiles",
      "query": "what are adyvka github and linkedin profile links"
    },
    {
      "id": "cnt_hire",
      "label": "⭐ Why Hire Adyvka for Your Team",
      "query": "why hire adyvka and what makes him stand out"
    },
    {
      "id": "cnt_projects",
      "label": "🚀 All 18 Software Engineering Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/pusakaku": [
    {
      "id": "prj_pusa_summary",
      "label": "🏛️ Pusakaku Platform Overview & Vision",
      "query": "tell me about pusakaku nusantara cultural platform"
    },
    {
      "id": "prj_pusa_gamify",
      "label": "🎮 Gamification & Interactive Quiz Architecture",
      "query": "how does pusakaku implement gamification and quiz mechanics"
    },
    {
      "id": "prj_pusa_map",
      "label": "🗺️ 3D Interactive Map & Cultural Data",
      "query": "how does pusakaku render 3d interactive map and cultural data"
    },
    {
      "id": "prj_pusa_icomfest",
      "label": "🥇 1st Place National Award at ICOMFEST",
      "query": "tell me about adyvka 1st place national award at icomfest"
    },
    {
      "id": "prj_pusa_tera",
      "label": "🌱 Terastani AI & IoT Smart Agriculture",
      "query": "tell me about terastani ai and iot smart agriculture platform"
    },
    {
      "id": "prj_pusa_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/terastani": [
    {
      "id": "prj_tera_summary",
      "label": "🌱 Terastani AI & IoT Platform Overview",
      "query": "tell me about terastani ai and iot smart agriculture platform"
    },
    {
      "id": "prj_tera_cv",
      "label": "🔬 Computer Vision Plant Disease Detection",
      "query": "how does terastani implement computer vision plant disease detection"
    },
    {
      "id": "prj_tera_iot",
      "label": "📡 IoT Soil Moisture & Environmental Sensors",
      "query": "how does terastani integrate iot soil moisture and environmental sensors"
    },
    {
      "id": "prj_tera_unila",
      "label": "🏅 National Finalist Web Development at UNILA",
      "query": "tell me about adyvka finalist achievement at unila"
    },
    {
      "id": "prj_tera_pusa",
      "label": "🏛️ Pusakaku Nusantara Cultural Platform",
      "query": "tell me about pusakaku nusantara cultural platform"
    },
    {
      "id": "prj_tera_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/ruangtumbuh": [
    {
      "id": "prj_ruang_summary",
      "label": "🧠 RuangTumbuh Platform Overview & Mission",
      "query": "tell me about ruangtumbuh mental health platform"
    },
    {
      "id": "prj_ruang_capstone",
      "label": "🏆 Coding Camp Capstone Grade & Evaluation",
      "query": "what score and evaluation did ruangtumbuh achieve as coding camp capstone"
    },
    {
      "id": "prj_ruang_timebank",
      "label": "⏱️ Time Banking Social Credit Architecture",
      "query": "how does ruangtumbuh time banking and peer support architecture work"
    },
    {
      "id": "prj_ruang_problem",
      "label": "🎯 Mental Health Problem in Indonesia",
      "query": "what real world mental health problem does ruangtumbuh solve"
    },
    {
      "id": "prj_ruang_pnbitc",
      "label": "🥈 2nd Place National Award at PNBITC",
      "query": "tell me about adyvka 2nd place award at pnbitc"
    },
    {
      "id": "prj_ruang_pusa",
      "label": "🏛️ Pusakaku Nusantara Cultural Platform",
      "query": "tell me about pusakaku nusantara cultural platform"
    },
    {
      "id": "prj_ruang_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/databank": [
    {
      "id": "prj_data_summary",
      "label": "📊 DataBank System Overview & Corporate Scope",
      "query": "tell me about databank erp system"
    },
    {
      "id": "prj_data_scraping",
      "label": "🤖 Puppeteer Automated Web Scraping Pipeline",
      "query": "how does adyvka build puppeteer web scraping pipeline in databank erp"
    },
    {
      "id": "prj_data_metrics",
      "label": "⚡ 90% Manual Reporting Time Reduction",
      "query": "how did databank cut 90 percent manual reporting time"
    },
    {
      "id": "prj_data_approval",
      "label": "🛡️ Multi-Tier Hierarchy Approval Workflow",
      "query": "how does the multi-tier hierarchy approval workflow work in databank"
    },
    {
      "id": "prj_data_arch",
      "label": "⚙️ Microservice Backend & Security Architecture",
      "query": "what is the microservice architecture and system architecture in databank"
    },
    {
      "id": "prj_data_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/kepk": [
    {
      "id": "prj_kepk_summary",
      "label": "🏥 SIM KEPK System Overview & Ethics Workflow",
      "query": "tell me about sim kepk ethical clearance system"
    },
    {
      "id": "prj_kepk_contract",
      "label": "💼 Full Stack Contract at Universitas Muhammadiyah",
      "query": "tell me about adyvka full stack contract at universitas muhammadiyah jakarta"
    },
    {
      "id": "prj_kepk_databank",
      "label": "📊 DataBank Web Scraping & Enterprise Platform",
      "query": "tell me about databank erp system"
    },
    {
      "id": "prj_kepk_intisel",
      "label": "⚡ Lead Systems Engineer at PT Intisel",
      "query": "tell me about adyvka lead systems engineer role at pt intisel prodaktifakom"
    },
    {
      "id": "prj_kepk_ardyanda",
      "label": "🏢 Full Stack Internship at PT Ardyanda",
      "query": "tell me about adyvka internship at pt ardyanda digital inovasi"
    },
    {
      "id": "prj_kepk_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/fitsmart": [
    {
      "id": "prj_fit_summary",
      "label": "💪 FitSmart AI Platform Overview",
      "query": "tell me about fitsmart ai health platform"
    },
    {
      "id": "prj_fit_ai",
      "label": "🥗 Gemini AI Nutrition & Dietary Analysis",
      "query": "how does fitsmart use gemini ai nutrition and dietary analysis"
    },
    {
      "id": "prj_fit_tracker",
      "label": "📈 Real-Time Calorie & Macro Tracking",
      "query": "how does fitsmart track real-time calorie and macro metrics"
    },
    {
      "id": "prj_fit_ruang",
      "label": "🧠 RuangTumbuh Mental Health Platform",
      "query": "tell me about ruangtumbuh mental health platform"
    },
    {
      "id": "prj_fit_tera",
      "label": "🌱 Terastani AI & IoT Smart Agriculture",
      "query": "tell me about terastani ai and iot smart agriculture platform"
    },
    {
      "id": "prj_fit_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/richobahari": [
    {
      "id": "prj_richo_summary",
      "label": "⚓ CV Richo Bahari Platform Overview",
      "query": "tell me about richo bahari e-commerce project"
    },
    {
      "id": "prj_richo_perf",
      "label": "⚡ 95+ Lighthouse Score & Optimization",
      "query": "how does richo bahari achieve 95+ performance lighthouse score"
    },
    {
      "id": "prj_richo_catalog",
      "label": "🚢 Marine Equipment Catalog Architecture",
      "query": "how is the marine equipment catalog structured in richo bahari"
    },
    {
      "id": "prj_richo_exp",
      "label": "💼 Frontend Developer Role at CV Richo Bahari",
      "query": "tell me about adyvka frontend developer role at cv richo bahari"
    },
    {
      "id": "prj_richo_java",
      "label": "🏝️ JavaIsland Tourism Booking Platform",
      "query": "tell me about javaisland tourism web platform"
    },
    {
      "id": "prj_richo_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/javaisland": [
    {
      "id": "prj_java_summary",
      "label": "🏝️ JavaIsland Tourism Platform Overview",
      "query": "tell me about javaisland tourism web platform"
    },
    {
      "id": "prj_java_booking",
      "label": "🎫 Interactive Travel Booking System",
      "query": "how does the travel booking system work in javaisland"
    },
    {
      "id": "prj_java_culture",
      "label": "🎭 Javanese Cultural Heritage Showcase",
      "query": "how does javaisland showcase javanese cultural heritage and virtual tour"
    },
    {
      "id": "prj_java_pusa",
      "label": "🏛️ Pusakaku Nusantara Cultural Platform",
      "query": "tell me about pusakaku nusantara cultural platform"
    },
    {
      "id": "prj_java_richo",
      "label": "⚓ CV Richo Bahari Platform",
      "query": "tell me about richo bahari e-commerce project"
    },
    {
      "id": "prj_java_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/semua-bisa": [
    {
      "id": "prj_semua_summary",
      "label": "♿ SemuaBisa Inclusive Learning Overview",
      "query": "tell me about semua bisa inclusive learning platform"
    },
    {
      "id": "prj_semua_access",
      "label": "👁️ WCAG 2.1 AA Screen Reader Accessibility",
      "query": "how does semua bisa implement screen reader accessibility and wcag 2.1"
    },
    {
      "id": "prj_semua_arch",
      "label": "📐 Modular Educational Platform Architecture",
      "query": "what is the modular educational platform architecture of semua bisa"
    },
    {
      "id": "prj_semua_ruang",
      "label": "🧠 RuangTumbuh Mental Health Platform",
      "query": "tell me about ruangtumbuh mental health platform"
    },
    {
      "id": "prj_semua_idn",
      "label": "📚 IDNCourse Learning Management System",
      "query": "tell me about idncourse e-learning web platform"
    },
    {
      "id": "prj_semua_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/idncourse": [
    {
      "id": "prj_idn_summary",
      "label": "📚 IDNCourse LMS Platform Overview",
      "query": "tell me about idncourse e-learning web platform"
    },
    {
      "id": "prj_idn_video",
      "label": "🎥 Video Streaming & Progress Tracking",
      "query": "how does idncourse deliver video streaming and student progress tracking"
    },
    {
      "id": "prj_idn_cert",
      "label": "📜 Automated Certificate Verification Pipeline",
      "query": "how does idncourse generate automated certificate verification"
    },
    {
      "id": "prj_idn_semua",
      "label": "♿ SemuaBisa Inclusive Learning Platform",
      "query": "tell me about semua bisa inclusive learning platform"
    },
    {
      "id": "prj_idn_databank",
      "label": "📊 DataBank Web Scraping Enterprise System",
      "query": "tell me about databank erp system"
    },
    {
      "id": "prj_idn_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/coffeee-shop": [
    {
      "id": "prj_coffee_summary",
      "label": "☕ Coffee Shop Platform Overview",
      "query": "tell me about modern coffee shop website project"
    },
    {
      "id": "prj_coffee_menu",
      "label": "📋 Dynamic Beverage Menu Personalization",
      "query": "how does coffee shop handle dynamic beverage menu personalization"
    },
    {
      "id": "prj_coffee_ux",
      "label": "✨ Micro-Interactions & Responsive UX Polish",
      "query": "how does coffee shop implement micro-interactions and ux polish"
    },
    {
      "id": "prj_coffee_deli",
      "label": "🍔 DeliFood Delivery & Order Management",
      "query": "tell me about delifood food delivery web app"
    },
    {
      "id": "prj_coffee_mystyle",
      "label": "👗 MyStyle E-Commerce Platform",
      "query": "tell me about mystyle e-commerce web platform"
    },
    {
      "id": "prj_coffee_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/mystyle": [
    {
      "id": "prj_my_summary",
      "label": "👗 MyStyle E-Commerce Overview",
      "query": "tell me about mystyle e-commerce web platform"
    },
    {
      "id": "prj_my_cart",
      "label": "🛒 Persistent Shopping Cart & Checkout Flow",
      "query": "how does mystyle manage persistent shopping cart and checkout"
    },
    {
      "id": "prj_my_catalog",
      "label": "🏷️ Multi-Category Fashion Grid & Filters",
      "query": "how does mystyle organize multi-category fashion grid and filtering"
    },
    {
      "id": "prj_my_deli",
      "label": "🍔 DeliFood Delivery & Order Platform",
      "query": "tell me about delifood food delivery web app"
    },
    {
      "id": "prj_my_richo",
      "label": "⚓ CV Richo Bahari Platform",
      "query": "tell me about richo bahari e-commerce project"
    },
    {
      "id": "prj_my_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/delifood": [
    {
      "id": "prj_deli_summary",
      "label": "🍔 DeliFood Delivery Platform Overview",
      "query": "tell me about delifood food delivery web app"
    },
    {
      "id": "prj_deli_tracking",
      "label": "📍 Real-Time Order Tracking & Driver Route",
      "query": "how does delifood provide real-time order tracking and route preview"
    },
    {
      "id": "prj_deli_menu",
      "label": "🍽️ Restaurant Catalog & Menu Management",
      "query": "how does delifood organize restaurant catalog and menu filtering"
    },
    {
      "id": "prj_deli_coffee",
      "label": "☕ Modern Coffee Shop Platform",
      "query": "tell me about modern coffee shop website project"
    },
    {
      "id": "prj_deli_mystyle",
      "label": "👗 MyStyle E-Commerce Platform",
      "query": "tell me about mystyle e-commerce web platform"
    },
    {
      "id": "prj_deli_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/ai-ticket-manager": [
    {
      "id": "prj_ticket_summary",
      "label": "🎫 AI Ticket Manager Platform Overview",
      "query": "tell me about ai ticket manager helpdesk platform"
    },
    {
      "id": "prj_ticket_nlp",
      "label": "🤖 Gemini NLP Auto-Classification & Triage",
      "query": "how does ai ticket manager use gemini nlp auto-classification triage"
    },
    {
      "id": "prj_ticket_sla",
      "label": "⏱️ SLA Real-Time Analytics & Ticket Queue",
      "query": "how does ai ticket manager track sla real-time analytics and ticket queue"
    },
    {
      "id": "prj_ticket_data",
      "label": "📊 DataBank Web Scraping Enterprise System",
      "query": "tell me about databank erp system"
    },
    {
      "id": "prj_ticket_attend",
      "label": "📱 Smart Attendance Biometric App",
      "query": "tell me about attendance app mobile geofencing"
    },
    {
      "id": "prj_ticket_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/attendance-app": [
    {
      "id": "prj_attend_summary",
      "label": "📱 Smart Attendance App Overview",
      "query": "tell me about attendance app mobile geofencing"
    },
    {
      "id": "prj_attend_bio",
      "label": "📍 GPS Geofencing & Biometric Facial Verification",
      "query": "how does attendance app use gps geofencing and facial biometric verification"
    },
    {
      "id": "prj_attend_offline",
      "label": "🔄 Offline Clock-In & IndexedDB Synchronization",
      "query": "how does attendance app handle offline clock-in and indexeddb sync"
    },
    {
      "id": "prj_attend_qr",
      "label": "⚡ Fast QR Scanner App",
      "query": "tell me about fast qr code scanner web app"
    },
    {
      "id": "prj_attend_ticket",
      "label": "🎫 AI Ticket Manager Platform",
      "query": "tell me about ai ticket manager helpdesk platform"
    },
    {
      "id": "prj_attend_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/qr-scanner": [
    {
      "id": "prj_qr_summary",
      "label": "⚡ Fast QR Scanner App Overview",
      "query": "tell me about fast qr code scanner web app"
    },
    {
      "id": "prj_qr_webrtc",
      "label": "📷 WebRTC High-Speed Camera QR Decoding",
      "query": "how does qr scanner achieve webrtc high-speed camera decoding"
    },
    {
      "id": "prj_qr_checkin",
      "label": "🎫 Event Ticket Check-In & Validation Flow",
      "query": "how does qr scanner process event ticket check-in and validation"
    },
    {
      "id": "prj_qr_attend",
      "label": "📱 Smart Attendance Biometric App",
      "query": "tell me about attendance app mobile geofencing"
    },
    {
      "id": "prj_qr_ticket",
      "label": "🎫 AI Ticket Manager Platform",
      "query": "tell me about ai ticket manager helpdesk platform"
    },
    {
      "id": "prj_qr_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/news-app": [
    {
      "id": "prj_news_summary",
      "label": "📰 Real-Time News Portal Overview",
      "query": "tell me about real-time news portal web app"
    },
    {
      "id": "prj_news_api",
      "label": "🌐 REST API News Aggregation & Live Feeds",
      "query": "how does news app aggregate rest api news aggregation and breaking feeds"
    },
    {
      "id": "prj_news_cache",
      "label": "🔖 Dynamic Category Filtering & Offline Cache",
      "query": "how does news app handle dynamic category filtering and bookmark cache"
    },
    {
      "id": "prj_news_quran",
      "label": "📖 Quran Digital Audio App",
      "query": "tell me about quran web application project"
    },
    {
      "id": "prj_news_deli",
      "label": "🍔 DeliFood Delivery Platform",
      "query": "tell me about delifood food delivery web app"
    },
    {
      "id": "prj_news_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/projects/quran-app": [
    {
      "id": "prj_quran_summary",
      "label": "📖 Quran Digital Audio App Overview",
      "query": "tell me about quran web application project"
    },
    {
      "id": "prj_quran_audio",
      "label": "🎧 Multi-Qari Verse Audio Recitation Streaming",
      "query": "how does quran app stream multi-qari verse audio recitations"
    },
    {
      "id": "prj_quran_typo",
      "label": "✒️ Arabic Typography & Tajweed Color-Coding",
      "query": "how does quran app render arabic typography and tajweed color coding"
    },
    {
      "id": "prj_quran_news",
      "label": "📰 Real-Time News Portal App",
      "query": "tell me about real-time news portal web app"
    },
    {
      "id": "prj_quran_pusa",
      "label": "🏛️ Pusakaku Nusantara Cultural Platform",
      "query": "tell me about pusakaku nusantara cultural platform"
    },
    {
      "id": "prj_quran_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship": [
    {
      "id": "exp_ardy_summary",
      "label": "🏢 PT Ardyanda Internship Overview",
      "query": "tell me about adyvka internship at pt ardyanda digital inovasi"
    },
    {
      "id": "exp_ardy_payroll",
      "label": "💰 Automated 100% PPh 21 Payroll Calculation",
      "query": "how did adyvka automate pph 21 and payroll system at pt ardyanda"
    },
    {
      "id": "exp_ardy_eval",
      "label": "🌟 98/100 Perfect Performance Evaluation Score",
      "query": "what was adyvka 98/100 performance evaluation score at pt ardyanda"
    },
    {
      "id": "exp_ardy_mc",
      "label": "🎤 Master of Ceremonies at Corporate Events",
      "query": "tell me about adyvka role as master of ceremonies at pt ardyanda"
    },
    {
      "id": "exp_ardy_intisel",
      "label": "⚡ Lead Systems Engineer at PT Intisel",
      "query": "tell me about adyvka lead systems engineer role at pt intisel prodaktifakom"
    },
    {
      "id": "exp_ardy_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/cv-richo-bahari-frontend-developer-freelance": [
    {
      "id": "exp_richo_summary",
      "label": "⚓ CV Richo Bahari Developer Experience",
      "query": "tell me about adyvka frontend developer role at cv richo bahari"
    },
    {
      "id": "exp_richo_perf",
      "label": "⚡ 95+ Lighthouse Score & Optimization",
      "query": "how does richo bahari achieve 95+ performance lighthouse score"
    },
    {
      "id": "exp_richo_catalog",
      "label": "🚢 Marine Equipment Catalog Architecture",
      "query": "how is the marine equipment catalog structured in richo bahari"
    },
    {
      "id": "exp_richo_intisel",
      "label": "⚡ Lead Systems Engineer at PT Intisel",
      "query": "tell me about adyvka lead systems engineer role at pt intisel prodaktifakom"
    },
    {
      "id": "exp_richo_ardyanda",
      "label": "🏢 Full Stack Internship at PT Ardyanda",
      "query": "tell me about adyvka internship at pt ardyanda digital inovasi"
    },
    {
      "id": "exp_richo_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance": [
    {
      "id": "exp_inti_summary",
      "label": "⚡ PT Intisel Lead Systems Engineer Overview",
      "query": "tell me about adyvka lead systems engineer role at pt intisel prodaktifakom"
    },
    {
      "id": "exp_inti_bts",
      "label": "📡 Enterprise 1000+ BTS Data Mapping",
      "query": "how did adyvka implement enterprise 1000 bts data mapping at intisel"
    },
    {
      "id": "exp_inti_team",
      "label": "👥 Cross-Functional Team Leadership & Mentorship",
      "query": "how did adyvka demonstrate cross-functional team leadership and mentorship at intisel"
    },
    {
      "id": "exp_inti_ardyanda",
      "label": "🏢 Full Stack Internship at PT Ardyanda",
      "query": "tell me about adyvka internship at pt ardyanda digital inovasi"
    },
    {
      "id": "exp_inti_semarang",
      "label": "🧗 Rp 0 Survival in Semarang",
      "query": "tell me about adyvka zero capital business and life survival in semarang"
    },
    {
      "id": "exp_inti_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/universitas-muhammadiyah-jakarta-full-stack-engineer-contract": [
    {
      "id": "exp_umj_summary",
      "label": "🏥 Universitas Muhammadiyah Jakarta Contract",
      "query": "tell me about adyvka full stack contract at universitas muhammadiyah jakarta"
    },
    {
      "id": "exp_umj_kepk",
      "label": "📋 SIM KEPK Ethics Committee System",
      "query": "tell me about sim kepk ethical clearance system"
    },
    {
      "id": "exp_umj_intisel",
      "label": "⚡ Lead Systems Engineer at PT Intisel",
      "query": "tell me about adyvka lead systems engineer role at pt intisel prodaktifakom"
    },
    {
      "id": "exp_umj_ardyanda",
      "label": "🏢 Full Stack Internship at PT Ardyanda",
      "query": "tell me about adyvka internship at pt ardyanda digital inovasi"
    },
    {
      "id": "exp_umj_semarang",
      "label": "🧗 Rp 0 Survival in Semarang",
      "query": "tell me about adyvka zero capital business and life survival in semarang"
    },
    {
      "id": "exp_umj_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/sma-lazuardi-gcs-web-development-instructor": [
    {
      "id": "exp_laz_summary",
      "label": "👨‍🏫 SMA Lazuardi Web Instructor Overview",
      "query": "tell me about adyvka teaching experience at sma lazuardi"
    },
    {
      "id": "exp_laz_curriculum",
      "label": "💻 HTML CSS JS Web Development Curriculum",
      "query": "what web development curriculum did adyvka teach at sma lazuardi"
    },
    {
      "id": "exp_laz_lead",
      "label": "🎓 Teaching & Leadership Track Record",
      "query": "tell me about adyvka teaching and leadership track record"
    },
    {
      "id": "exp_laz_book",
      "label": "📖 Published Book: Web Frameworks",
      "query": "tell me about adyvka published book on web frameworks"
    },
    {
      "id": "exp_laz_smpn45",
      "label": "📱 SMPN 45 App Development Instructor",
      "query": "tell me about adyvka teaching app development at smpn 45"
    },
    {
      "id": "exp_laz_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/hajrabyadl-web-development-instructor": [
    {
      "id": "exp_haj_summary",
      "label": "👨‍🏫 Hajrabyadl Web Instructor Overview",
      "query": "tell me about adyvka teaching web development at hajrabyadl"
    },
    {
      "id": "exp_haj_curriculum",
      "label": "💻 Full Stack Coding & Student Mentoring",
      "query": "what full stack coding roadmap did adyvka mentor at hajrabyadl"
    },
    {
      "id": "exp_haj_laz",
      "label": "👨‍🏫 SMA Lazuardi Web Development Instructor",
      "query": "tell me about adyvka teaching experience at sma lazuardi"
    },
    {
      "id": "exp_haj_lead",
      "label": "🎓 Teaching & Leadership Track Record",
      "query": "tell me about adyvka teaching and leadership track record"
    },
    {
      "id": "exp_haj_ardyanda",
      "label": "🏢 PT Ardyanda Full Stack Internship",
      "query": "tell me about adyvka internship at pt ardyanda digital inovasi"
    },
    {
      "id": "exp_haj_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/smpn-45-app-development-instructor": [
    {
      "id": "exp_smp45_summary",
      "label": "📱 SMPN 45 App Instructor Overview",
      "query": "tell me about adyvka teaching app development at smpn 45"
    },
    {
      "id": "exp_smp45_curriculum",
      "label": "📲 MIT App Inventor Curriculum & Student Apps",
      "query": "what mit app inventor mobile curriculum did adyvka teach at smpn 45"
    },
    {
      "id": "exp_smp45_ins",
      "label": "📱 SMP INS Depok App Instructor",
      "query": "tell me about adyvka teaching app development at smp ins depok"
    },
    {
      "id": "exp_smp45_laz",
      "label": "👨‍🏫 SMA Lazuardi Web Instructor",
      "query": "tell me about adyvka teaching experience at sma lazuardi"
    },
    {
      "id": "exp_smp45_lead",
      "label": "🎓 Teaching & Leadership Track Record",
      "query": "tell me about adyvka teaching and leadership track record"
    },
    {
      "id": "exp_smp45_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/smp-ins-depok-app-development-instructor": [
    {
      "id": "exp_ins_summary",
      "label": "📱 SMP INS Depok App Instructor Overview",
      "query": "tell me about adyvka teaching app development at smp ins depok"
    },
    {
      "id": "exp_ins_curriculum",
      "label": "🧠 Student Logic Building & Mobile Architecture",
      "query": "how did adyvka teach student logic building and mobile architecture at ins depok"
    },
    {
      "id": "exp_ins_smp45",
      "label": "📱 SMPN 45 App Development Instructor",
      "query": "tell me about adyvka teaching app development at smpn 45"
    },
    {
      "id": "exp_ins_lead",
      "label": "🎓 Teaching & Leadership Track Record",
      "query": "tell me about adyvka teaching and leadership track record"
    },
    {
      "id": "exp_ins_semut",
      "label": "🎮 Semut-Semut Game Development Instructor",
      "query": "tell me about adyvka teaching game development at semut-semut the natural school"
    },
    {
      "id": "exp_ins_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/semut-semut-the-natural-school-game-development-instructor": [
    {
      "id": "exp_semut_summary",
      "label": "🎮 Semut-Semut Game Instructor Overview",
      "query": "tell me about adyvka teaching game development at semut-semut the natural school"
    },
    {
      "id": "exp_semut_curriculum",
      "label": "🕹️ Scratch Game Mechanics & Storytelling",
      "query": "what scratch game mechanics and interactive storytelling did adyvka teach at semut-semut"
    },
    {
      "id": "exp_semut_book",
      "label": "📖 Published Book: Making Games Without Coding",
      "query": "tell me about adyvka published book on making games with scratch"
    },
    {
      "id": "exp_semut_anshar",
      "label": "🎮 Al Anshar Game Development Instructor",
      "query": "tell me about adyvka teaching game development at al anshar"
    },
    {
      "id": "exp_semut_lead",
      "label": "🎓 Teaching & Leadership Track Record",
      "query": "tell me about adyvka teaching and leadership track record"
    },
    {
      "id": "exp_semut_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/al-anshar-app-design-instructor": [
    {
      "id": "exp_anshardes_summary",
      "label": "🎨 Al Anshar App Design Overview",
      "query": "tell me about adyvka teaching app design at al anshar"
    },
    {
      "id": "exp_anshardes_figma",
      "label": "📐 Figma Wireframing & UI/UX Design System",
      "query": "how did adyvka teach figma wireframing and ui/ux design systems at al anshar"
    },
    {
      "id": "exp_anshardes_game",
      "label": "🎮 Al Anshar Game Development Instructor",
      "query": "tell me about adyvka teaching game development at al anshar"
    },
    {
      "id": "exp_anshardes_yasmine",
      "label": "🎨 MTs Yasmine Design Instructor",
      "query": "tell me about adyvka teaching design at mts yasmine"
    },
    {
      "id": "exp_anshardes_lead",
      "label": "🎓 Teaching & Leadership Track Record",
      "query": "tell me about adyvka teaching and leadership track record"
    },
    {
      "id": "exp_anshardes_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/mts-yasmine-design-instructor": [
    {
      "id": "exp_yas_summary",
      "label": "🎨 MTs Yasmine Design Instructor Overview",
      "query": "tell me about adyvka teaching design at mts yasmine"
    },
    {
      "id": "exp_yas_curriculum",
      "label": "🖼️ Graphic Design Fundamentals & Branding",
      "query": "what graphic design and branding curriculum did adyvka teach at yasmine"
    },
    {
      "id": "exp_yas_anshar",
      "label": "🎨 Al Anshar App Design Instructor",
      "query": "tell me about adyvka teaching app design at al anshar"
    },
    {
      "id": "exp_yas_lead",
      "label": "🎓 Teaching & Leadership Track Record",
      "query": "tell me about adyvka teaching and leadership track record"
    },
    {
      "id": "exp_yas_laz",
      "label": "👨‍🏫 SMA Lazuardi Web Instructor",
      "query": "tell me about adyvka teaching experience at sma lazuardi"
    },
    {
      "id": "exp_yas_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/al-anshar-game-development-instructor": [
    {
      "id": "exp_anshargame_summary",
      "label": "🎮 Al Anshar Game Instructor Overview",
      "query": "tell me about adyvka teaching game development at al anshar"
    },
    {
      "id": "exp_anshargame_scratch",
      "label": "🕹️ Scratch Game Logic & Block-Based Coding",
      "query": "what scratch game logic and block-based coding did adyvka teach at al anshar"
    },
    {
      "id": "exp_anshargame_semut",
      "label": "🎮 Semut-Semut Game Development Instructor",
      "query": "tell me about adyvka teaching game development at semut-semut the natural school"
    },
    {
      "id": "exp_anshargame_book",
      "label": "📖 Published Book: Making Games Without Coding",
      "query": "tell me about adyvka published book on making games with scratch"
    },
    {
      "id": "exp_anshargame_lead",
      "label": "🎓 Teaching & Leadership Track Record",
      "query": "tell me about adyvka teaching and leadership track record"
    },
    {
      "id": "exp_anshargame_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/griyya-sunnah-game-development-instructor": [
    {
      "id": "exp_griyya_summary",
      "label": "🎮 Griyya Sunnah Game Instructor Overview",
      "query": "tell me about adyvka teaching game development at griyya sunnah"
    },
    {
      "id": "exp_griyya_curriculum",
      "label": "🧒 Interactive Game Design for Young Learners",
      "query": "how did adyvka design interactive game curricula for young learners at griyya sunnah"
    },
    {
      "id": "exp_griyya_semut",
      "label": "🎮 Semut-Semut Game Development Instructor",
      "query": "tell me about adyvka teaching game development at semut-semut the natural school"
    },
    {
      "id": "exp_griyya_anshar",
      "label": "🎮 Al Anshar Game Development Instructor",
      "query": "tell me about adyvka teaching game development at al anshar"
    },
    {
      "id": "exp_griyya_lead",
      "label": "🎓 Teaching & Leadership Track Record",
      "query": "tell me about adyvka teaching and leadership track record"
    },
    {
      "id": "exp_griyya_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/singapore-malaysia-thailand-backpacker-3-country": [
    {
      "id": "exp_bp_summary",
      "label": "🌍 3-Country Solo Backpacker at 15 Overview",
      "query": "tell me about adyvka solo backpacker trip across 3 countries"
    },
    {
      "id": "exp_bp_lessons",
      "label": "🧭 Cross-Cultural Independence & Resilience",
      "query": "what life lessons and cross-cultural independence did adyvka learn from solo backpacking"
    },
    {
      "id": "exp_bp_finance",
      "label": "💵 International Travel Budgeting & Expense Control",
      "query": "how did adyvka manage international travel budgeting and currency control as a teenager"
    },
    {
      "id": "exp_bp_semarang",
      "label": "🧗 Rp 0 Survival in Semarang",
      "query": "tell me about adyvka zero capital business and life survival in semarang"
    },
    {
      "id": "exp_bp_livein",
      "label": "🌾 IDN Live-In Rural Community Immersion",
      "query": "tell me about adyvka live-in rural immersion experience"
    },
    {
      "id": "exp_bp_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/idn-student-council-event-division-leader": [
    {
      "id": "exp_osis_summary",
      "label": "🏛️ IDN Student Council Event Leader Overview",
      "query": "tell me about adyvka leadership role in idn student council event division"
    },
    {
      "id": "exp_osis_ops",
      "label": "📋 Campus-Wide Event Execution & Operations",
      "query": "how did adyvka organize campus-wide event execution and logistics in student council"
    },
    {
      "id": "exp_osis_itfest",
      "label": "🏆 IT Fest 2025 Competition Coordinator",
      "query": "tell me about adyvka role as event coordinator for it fest 2025"
    },
    {
      "id": "exp_osis_barmus",
      "label": "🤝 Barmus Voluntrip Event Organizer",
      "query": "tell me about adyvka volunteer role in barmus voluntrip"
    },
    {
      "id": "exp_osis_lead",
      "label": "🎓 Teaching & Leadership Track Record",
      "query": "tell me about adyvka teaching and leadership track record"
    },
    {
      "id": "exp_osis_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/barmus-voluntrip-volunteer-event-organizer": [
    {
      "id": "exp_bar_summary",
      "label": "🤝 Barmus Voluntrip Organizer Overview",
      "query": "tell me about adyvka volunteer role in barmus voluntrip"
    },
    {
      "id": "exp_bar_impact",
      "label": "🌱 Community Empowerment & Social Impact",
      "query": "what youth empowerment and community impact was achieved in barmus voluntrip"
    },
    {
      "id": "exp_bar_osis",
      "label": "🏛️ IDN Student Council Event Leader",
      "query": "tell me about adyvka leadership role in idn student council event division"
    },
    {
      "id": "exp_bar_livein",
      "label": "🌾 IDN Live-In Rural Community Immersion",
      "query": "tell me about adyvka live-in rural immersion experience"
    },
    {
      "id": "exp_bar_semarang",
      "label": "🧗 Rp 0 Survival in Semarang",
      "query": "tell me about adyvka zero capital business and life survival in semarang"
    },
    {
      "id": "exp_bar_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/pt-intisel-semarang-business-life-survival": [
    {
      "id": "exp_smg_summary",
      "label": "🧗 Rp 0 Business & Life Survival Overview",
      "query": "tell me about adyvka zero capital business and life survival in semarang"
    },
    {
      "id": "exp_smg_profit",
      "label": "📈 Generating Millions from Zero Capital",
      "query": "how did adyvka survive and generate profits from zero capital in semarang"
    },
    {
      "id": "exp_smg_mindset",
      "label": "💡 Extreme Entrepreneurial Grit & Mindset",
      "query": "what entrepreneurial mindset did adyvka gain from semarang survival"
    },
    {
      "id": "exp_smg_daily",
      "label": "⚡ Daily Survival Hustle & Street Smarts",
      "query": "what street smarts and daily survival hustle did adyvka experience in semarang"
    },
    {
      "id": "exp_smg_bp",
      "label": "🌍 3-Country Solo Backpacker at 15",
      "query": "tell me about adyvka solo backpacker trip across 3 countries"
    },
    {
      "id": "exp_smg_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/it-fest-2025-competition-event-coordinator": [
    {
      "id": "exp_itfest_summary",
      "label": "🏆 IT Fest 2025 Coordinator Overview",
      "query": "tell me about adyvka role as event coordinator for it fest 2025"
    },
    {
      "id": "exp_itfest_ops",
      "label": "📊 100+ Participants Logistics & Operations",
      "query": "how did adyvka coordinate operations and logistics for 100+ participants in it fest 2025"
    },
    {
      "id": "exp_itfest_osis",
      "label": "🏛️ IDN Student Council Event Division Leader",
      "query": "tell me about adyvka leadership role in idn student council event division"
    },
    {
      "id": "exp_itfest_award",
      "label": "🥇 1st Place National Web Design at ICOMFEST",
      "query": "tell me about adyvka 1st place national award at icomfest"
    },
    {
      "id": "exp_itfest_ardy",
      "label": "🏢 PT Ardyanda Full Stack Internship",
      "query": "tell me about adyvka internship at pt ardyanda digital inovasi"
    },
    {
      "id": "exp_itfest_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/experience/idn-boarding-school-live-in-rural-immersion": [
    {
      "id": "exp_live_summary",
      "label": "🌾 IDN Live-In Rural Immersion Overview",
      "query": "tell me about adyvka live-in rural immersion experience"
    },
    {
      "id": "exp_live_labor",
      "label": "👨‍🌾 Village Labor, Farming & Community Integration",
      "query": "what village labor agricultural work and community life did adyvka undertake during live-in"
    },
    {
      "id": "exp_live_bar",
      "label": "🤝 Barmus Voluntrip Event Organizer",
      "query": "tell me about adyvka volunteer role in barmus voluntrip"
    },
    {
      "id": "exp_live_bp",
      "label": "🌍 3-Country Solo Backpacker at 15",
      "query": "tell me about adyvka solo backpacker trip across 3 countries"
    },
    {
      "id": "exp_live_semarang",
      "label": "🧗 Rp 0 Survival in Semarang",
      "query": "tell me about adyvka zero capital business and life survival in semarang"
    },
    {
      "id": "exp_live_all",
      "label": "💼 Explore All 19 Professional Experiences",
      "query": "tell me about all professional work teaching and leadership experiences of adyvka"
    }
  ],
  "/achievements/1st-place-national-web-design-competition": [
    {
      "id": "ach_1st_summary",
      "label": "🥇 1st Place National Web Design at ICOMFEST",
      "query": "tell me about adyvka 1st place national award at icomfest"
    },
    {
      "id": "ach_1st_jury",
      "label": "🏆 Why Pusakaku Impressed ICOMFEST Juries",
      "query": "why did the icomfest juries award 1st place to pusakaku"
    },
    {
      "id": "ach_1st_strategy",
      "label": "🎯 Hackathon Presentation & Live Demo Strategy",
      "query": "what was adyvka winning strategy for national hackathons"
    },
    {
      "id": "ach_1st_pusa",
      "label": "🏛️ Pusakaku Nusantara Platform Architecture",
      "query": "tell me about pusakaku nusantara cultural platform"
    },
    {
      "id": "ach_1st_pnbitc",
      "label": "🥈 2nd Place National Award at PNBITC",
      "query": "tell me about adyvka 2nd place award at pnbitc"
    },
    {
      "id": "ach_1st_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/achievements/2nd-place-national-web-design-competition-pnbitc": [
    {
      "id": "ach_2nd_summary",
      "label": "🥈 2nd Place National Web Design at PNBITC",
      "query": "tell me about adyvka 2nd place award at pnbitc"
    },
    {
      "id": "ach_2nd_pitch",
      "label": "🎤 PNBITC Live Pitch & Time Banking Presentation",
      "query": "how did adyvka deliver the live pitch and presentation at pnbitc"
    },
    {
      "id": "ach_2nd_ruang",
      "label": "🧠 RuangTumbuh Mental Health Platform",
      "query": "tell me about ruangtumbuh mental health platform"
    },
    {
      "id": "ach_2nd_icomfest",
      "label": "🥇 1st Place National Award at ICOMFEST",
      "query": "tell me about adyvka 1st place national award at icomfest"
    },
    {
      "id": "ach_2nd_strategy",
      "label": "🎯 Hackathon Winning Strategy & Pitching",
      "query": "what was adyvka winning strategy for national hackathons"
    },
    {
      "id": "ach_2nd_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/achievements/finalist-national-web-dev-competition": [
    {
      "id": "ach_fin_summary",
      "label": "🏅 National Finalist Web Development at UNILA",
      "query": "tell me about adyvka finalist achievement at unila"
    },
    {
      "id": "ach_fin_jury",
      "label": "📊 UNILA Competition Feedback & Evaluation",
      "query": "what feedback and technical evaluation did unila juries give to terastani"
    },
    {
      "id": "ach_fin_tera",
      "label": "🌱 Terastani AI & IoT Smart Agriculture",
      "query": "tell me about terastani ai and iot smart agriculture platform"
    },
    {
      "id": "ach_fin_icomfest",
      "label": "🥇 1st Place National Award at ICOMFEST",
      "query": "tell me about adyvka 1st place national award at icomfest"
    },
    {
      "id": "ach_fin_pnbitc",
      "label": "🥈 2nd Place National Award at PNBITC",
      "query": "tell me about adyvka 2nd place award at pnbitc"
    },
    {
      "id": "ach_fin_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/achievements/best-poster-award-idul-adha-festival": [
    {
      "id": "ach_poster_summary",
      "label": "🎨 Best Poster Award: Idul Adha Festival Overview",
      "query": "tell me about adyvka best poster award at idul adha festival"
    },
    {
      "id": "ach_poster_design",
      "label": "📐 Design Principles & Geometric Typography",
      "query": "how did adyvka design the idul adha festival poster in figma"
    },
    {
      "id": "ach_poster_icomfest",
      "label": "🥇 1st Place National Web Design at ICOMFEST",
      "query": "tell me about adyvka 1st place national award at icomfest"
    },
    {
      "id": "ach_poster_pnbitc",
      "label": "🥈 2nd Place National Web Design at PNBITC",
      "query": "tell me about adyvka 2nd place award at pnbitc"
    },
    {
      "id": "ach_poster_unila",
      "label": "🏅 National Finalist Web Development at UNILA",
      "query": "tell me about adyvka finalist achievement at unila"
    },
    {
      "id": "ach_poster_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/achievements/dummy-new-achievement": [
    {
      "id": "ach_dum_summary",
      "label": "🎨 Best Poster Award: Idul Adha Festival Overview",
      "query": "tell me about adyvka best poster award at idul adha festival"
    },
    {
      "id": "ach_dum_design",
      "label": "📐 Design Principles & Geometric Typography",
      "query": "how did adyvka design the idul adha festival poster in figma"
    },
    {
      "id": "ach_dum_icomfest",
      "label": "🥇 1st Place National Web Design at ICOMFEST",
      "query": "tell me about adyvka 1st place national award at icomfest"
    },
    {
      "id": "ach_dum_pnbitc",
      "label": "🥈 2nd Place National Web Design at PNBITC",
      "query": "tell me about adyvka 2nd place award at pnbitc"
    },
    {
      "id": "ach_dum_unila",
      "label": "🏅 National Finalist Web Development at UNILA",
      "query": "tell me about adyvka finalist achievement at unila"
    },
    {
      "id": "ach_dum_all",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/certificates/cs50-introduction-to-computer-science": [
    {
      "id": "cert_cs50_summary",
      "label": "🎓 Harvard CS50 Certificate Overview",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_cs50_curriculum",
      "label": "📚 CS50 Core Curriculum & Algorithms",
      "query": "what algorithms and memory management concepts did adyvka master in cs50 core curriculum"
    },
    {
      "id": "cert_cs50_project",
      "label": "🛠️ CS50 Final Capstone Project",
      "query": "what was adyvka cs50 final capstone project and implementation"
    },
    {
      "id": "cert_cs50_aws",
      "label": "☁️ AWS Cloud Practitioner Certification",
      "query": "tell me about adyvka aws cloud practitioner certificate"
    },
    {
      "id": "cert_cs50_camp",
      "label": "💻 Dicoding Full Stack Developer Camp",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_cs50_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/coding-camp-full-stack-developer": [
    {
      "id": "cert_camp_summary",
      "label": "💻 Coding Camp Full Stack Developer Overview",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_camp_transcript",
      "label": "📊 DBS Coding Camp 2026 Academic Transcript",
      "query": "tell me about adyvka academic transcript in dbs coding camp"
    },
    {
      "id": "cert_camp_capstone",
      "label": "🏆 RuangTumbuh Capstone Project Evaluation",
      "query": "what score and evaluation did ruangtumbuh achieve as coding camp capstone"
    },
    {
      "id": "cert_camp_cs50",
      "label": "🎓 Harvard CS50 Introduction to Computer Science",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_camp_aws",
      "label": "☁️ AWS Cloud Practitioner Essentials",
      "query": "tell me about adyvka aws cloud practitioner certificate"
    },
    {
      "id": "cert_camp_react",
      "label": "⚛️ React Web Application Development",
      "query": "tell me about adyvka react web development certificate"
    },
    {
      "id": "cert_camp_backend",
      "label": "🛠️ Backend Application Development",
      "query": "tell me about adyvka backend developer certificate"
    },
    {
      "id": "cert_camp_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/frontend-web-developer": [
    {
      "id": "cert_front_summary",
      "label": "🌐 Frontend Web Developer Overview",
      "query": "tell me about adyvka frontend web developer certificate"
    },
    {
      "id": "cert_front_webdasar",
      "label": "💻 Belajar Dasar Pemrograman Web",
      "query": "tell me about adyvka basic web programming certificate"
    },
    {
      "id": "cert_front_react",
      "label": "⚛️ React Web Application Development",
      "query": "tell me about adyvka react web development certificate"
    },
    {
      "id": "cert_front_git",
      "label": "🐙 Belajar Dasar Git dengan GitHub",
      "query": "tell me about adyvka git and github certificate"
    },
    {
      "id": "cert_front_uiux",
      "label": "🎨 Dasar UI/UX Design Certification",
      "query": "tell me about adyvka ui/ux design fundamentals certificate"
    },
    {
      "id": "cert_front_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/belajar-dasar-data-analyst": [
    {
      "id": "cert_data_summary",
      "label": "📊 Belajar Dasar Data Analyst Overview",
      "query": "tell me about adyvka data analyst certificate"
    },
    {
      "id": "cert_data_python",
      "label": "🐍 Python Fundamentals Certification",
      "query": "tell me about adyvka python fundamentals certificate"
    },
    {
      "id": "cert_data_cs50",
      "label": "🎓 Harvard CS50 Computer Science",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_data_ai",
      "label": "🤖 Artificial Intelligence Basics",
      "query": "tell me about adyvka artificial intelligence basics certificate"
    },
    {
      "id": "cert_data_camp",
      "label": "💻 Full Stack Coding Camp Certification",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_data_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/belajar-membuat-aplikasi-back-end": [
    {
      "id": "cert_back_summary",
      "label": "🛠️ Belajar Membuat Aplikasi Back-End Overview",
      "query": "tell me about adyvka backend developer certificate"
    },
    {
      "id": "cert_back_js",
      "label": "⚡ Belajar Dasar Pemrograman JavaScript",
      "query": "tell me about adyvka javascript basics certificate"
    },
    {
      "id": "cert_back_camp",
      "label": "💻 Coding Camp Full Stack Developer",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_back_aws",
      "label": "☁️ AWS Cloud Practitioner Essentials",
      "query": "tell me about adyvka aws cloud practitioner certificate"
    },
    {
      "id": "cert_back_git",
      "label": "🐙 Belajar Dasar Git dengan GitHub",
      "query": "tell me about adyvka git and github certificate"
    },
    {
      "id": "cert_back_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/belajar-dasar-git-dengan-github": [
    {
      "id": "cert_git_summary",
      "label": "🐙 Belajar Dasar Git dengan GitHub Overview",
      "query": "tell me about adyvka git and github certificate"
    },
    {
      "id": "cert_git_branch",
      "label": "🌿 Git Branching & Merge Conflicts Resolution",
      "query": "how does adyvka implement git branching and merge conflicts resolution"
    },
    {
      "id": "cert_git_cs50",
      "label": "🎓 Harvard CS50 Computer Science",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_git_camp",
      "label": "💻 Dicoding Full Stack Coding Camp",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_git_aws",
      "label": "☁️ AWS Cloud Practitioner Essentials",
      "query": "tell me about adyvka aws cloud practitioner certificate"
    },
    {
      "id": "cert_git_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/graphic-design-fundamentals": [
    {
      "id": "cert_graph_summary",
      "label": "🎨 Graphic Design Fundamentals Overview",
      "query": "tell me about adyvka graphic design fundamentals certificate"
    },
    {
      "id": "cert_graph_uiux",
      "label": "📐 Dasar UI/UX Design Certification",
      "query": "tell me about adyvka ui/ux design fundamentals certificate"
    },
    {
      "id": "cert_graph_front",
      "label": "🌐 Frontend Web Developer Certification",
      "query": "tell me about adyvka frontend web developer certificate"
    },
    {
      "id": "cert_graph_react",
      "label": "⚛️ React Web Application Development",
      "query": "tell me about adyvka react web development certificate"
    },
    {
      "id": "cert_graph_camp",
      "label": "💻 Coding Camp Full Stack Developer",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_graph_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/memulai-pemrograman-dengan-c": [
    {
      "id": "cert_c_mem_summary",
      "label": "💻 Memulai Pemrograman Dengan C Overview",
      "query": "tell me about adyvka c programming certificate dicoding"
    },
    {
      "id": "cert_c_mem_skilvul",
      "label": "⌨️ Pemrograman Dasar C (Skilvul)",
      "query": "tell me about adyvka c programming certificate skilvul"
    },
    {
      "id": "cert_c_mem_cs50",
      "label": "🎓 Harvard CS50 Computer Science",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_c_mem_logika",
      "label": "🧠 Pengenalan ke Logika Pemrograman",
      "query": "tell me about adyvka programming logic certificate"
    },
    {
      "id": "cert_c_mem_py",
      "label": "🐍 Memulai Pemrograman Dengan Python",
      "query": "tell me about adyvka python basics certificate dicoding"
    },
    {
      "id": "cert_c_mem_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/dasar-ui-ux-design": [
    {
      "id": "cert_ui_summary",
      "label": "📐 Dasar UI/UX Design Overview",
      "query": "tell me about adyvka ui/ux design fundamentals certificate"
    },
    {
      "id": "cert_ui_graph",
      "label": "🎨 Graphic Design Fundamentals",
      "query": "tell me about adyvka graphic design fundamentals certificate"
    },
    {
      "id": "cert_ui_front",
      "label": "🌐 Frontend Web Developer Certification",
      "query": "tell me about adyvka frontend web developer certificate"
    },
    {
      "id": "cert_ui_react",
      "label": "⚛️ React Web Application Development",
      "query": "tell me about adyvka react web development certificate"
    },
    {
      "id": "cert_ui_camp",
      "label": "💻 Coding Camp Full Stack Developer",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_ui_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/python-fundamentals": [
    {
      "id": "cert_pyfund_summary",
      "label": "🐍 Python Fundamentals (DQLab) Overview",
      "query": "tell me about adyvka python fundamentals certificate"
    },
    {
      "id": "cert_pyfund_dicoding",
      "label": "🐍 Memulai Pemrograman Dengan Python",
      "query": "tell me about adyvka python basics certificate dicoding"
    },
    {
      "id": "cert_pyfund_data",
      "label": "📊 Belajar Dasar Data Analyst",
      "query": "tell me about adyvka data analyst certificate"
    },
    {
      "id": "cert_pyfund_cs50",
      "label": "🎓 Harvard CS50 Computer Science",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_pyfund_ai",
      "label": "🤖 Artificial Intelligence Basics",
      "query": "tell me about adyvka artificial intelligence basics certificate"
    },
    {
      "id": "cert_pyfund_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/belajar-dasar-pemrograman-javascript": [
    {
      "id": "cert_js_summary",
      "label": "⚡ Belajar Dasar Pemrograman JS Overview",
      "query": "tell me about adyvka javascript basics certificate"
    },
    {
      "id": "cert_js_react",
      "label": "⚛️ React Web Application Development",
      "query": "tell me about adyvka react web development certificate"
    },
    {
      "id": "cert_js_backend",
      "label": "🛠️ Belajar Membuat Aplikasi Back-End",
      "query": "tell me about adyvka backend developer certificate"
    },
    {
      "id": "cert_js_web",
      "label": "💻 Belajar Dasar Pemrograman Web",
      "query": "tell me about adyvka basic web programming certificate"
    },
    {
      "id": "cert_js_camp",
      "label": "💻 Coding Camp Full Stack Developer",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_js_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/cloud-practitioner-essentials": [
    {
      "id": "cert_aws_summary",
      "label": "☁️ Cloud Practitioner Essentials Overview",
      "query": "tell me about adyvka aws cloud practitioner certificate"
    },
    {
      "id": "cert_aws_sec",
      "label": "🛡️ AWS IAM & Cloud Security Best Practices",
      "query": "how does adyvka apply aws iam and cloud security best practices"
    },
    {
      "id": "cert_aws_cs50",
      "label": "🎓 Harvard CS50 Computer Science",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_aws_camp",
      "label": "💻 Coding Camp Full Stack Developer",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_aws_backend",
      "label": "🛠️ Belajar Membuat Aplikasi Back-End",
      "query": "tell me about adyvka backend developer certificate"
    },
    {
      "id": "cert_aws_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/belajar-membuat-aplikasi-web-dengan-react": [
    {
      "id": "cert_react_summary",
      "label": "⚛️ Belajar Aplikasi Web dengan React Overview",
      "query": "tell me about adyvka react web development certificate"
    },
    {
      "id": "cert_react_hooks",
      "label": "🎣 React Hooks & State Management Architecture",
      "query": "how does adyvka manage state with react hooks and component lifecycle in react"
    },
    {
      "id": "cert_react_js",
      "label": "⚡ Belajar Dasar Pemrograman JavaScript",
      "query": "tell me about adyvka javascript basics certificate"
    },
    {
      "id": "cert_react_front",
      "label": "🌐 Frontend Web Developer Certification",
      "query": "tell me about adyvka frontend web developer certificate"
    },
    {
      "id": "cert_react_camp",
      "label": "💻 Coding Camp Full Stack Developer",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_react_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/memulai-pemrograman-dengan-python": [
    {
      "id": "cert_pymem_summary",
      "label": "🐍 Memulai Pemrograman Dengan Python Overview",
      "query": "tell me about adyvka python basics certificate dicoding"
    },
    {
      "id": "cert_pymem_fund",
      "label": "🐍 Python Fundamentals (DQLab)",
      "query": "tell me about adyvka python fundamentals certificate"
    },
    {
      "id": "cert_pymem_data",
      "label": "📊 Belajar Dasar Data Analyst",
      "query": "tell me about adyvka data analyst certificate"
    },
    {
      "id": "cert_pymem_cs50",
      "label": "🎓 Harvard CS50 Computer Science",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_pymem_ai",
      "label": "🤖 Artificial Intelligence Basics",
      "query": "tell me about adyvka artificial intelligence basics certificate"
    },
    {
      "id": "cert_pymem_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/belajar-dasar-pemrograman-web": [
    {
      "id": "cert_web_summary",
      "label": "💻 Belajar Dasar Pemrograman Web Overview",
      "query": "tell me about adyvka basic web programming certificate"
    },
    {
      "id": "cert_web_front",
      "label": "🌐 Frontend Web Developer Certification",
      "query": "tell me about adyvka frontend web developer certificate"
    },
    {
      "id": "cert_web_js",
      "label": "⚡ Belajar Dasar Pemrograman JavaScript",
      "query": "tell me about adyvka javascript basics certificate"
    },
    {
      "id": "cert_web_react",
      "label": "⚛️ React Web Application Development",
      "query": "tell me about adyvka react web development certificate"
    },
    {
      "id": "cert_web_camp",
      "label": "💻 Coding Camp Full Stack Developer",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_web_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/pengenalan-ke-logika-pemrograman": [
    {
      "id": "cert_log_summary",
      "label": "🧠 Logika Pemrograman Overview",
      "query": "tell me about adyvka programming logic certificate"
    },
    {
      "id": "cert_log_c",
      "label": "💻 Memulai Pemrograman Dengan C",
      "query": "tell me about adyvka c programming certificate dicoding"
    },
    {
      "id": "cert_log_js",
      "label": "⚡ Belajar Dasar Pemrograman JavaScript",
      "query": "tell me about adyvka javascript basics certificate"
    },
    {
      "id": "cert_log_cs50",
      "label": "🎓 Harvard CS50 Computer Science",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_log_camp",
      "label": "💻 Coding Camp Full Stack Developer",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_log_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/pemrograman-dasar-c": [
    {
      "id": "cert_cskil_summary",
      "label": "⌨️ Pemrograman Dasar C (Skilvul) Overview",
      "query": "tell me about adyvka c programming certificate skilvul"
    },
    {
      "id": "cert_cskil_dicoding",
      "label": "💻 Memulai Pemrograman Dengan C (Dicoding)",
      "query": "tell me about adyvka c programming certificate dicoding"
    },
    {
      "id": "cert_cskil_cs50",
      "label": "🎓 Harvard CS50 Computer Science",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_cskil_log",
      "label": "🧠 Pengenalan ke Logika Pemrograman",
      "query": "tell me about adyvka programming logic certificate"
    },
    {
      "id": "cert_cskil_camp",
      "label": "💻 Coding Camp Full Stack Developer",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_cskil_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/dasar-prompt-engineering": [
    {
      "id": "cert_prompt_summary",
      "label": "🤖 Dasar Prompt Engineering Overview",
      "query": "tell me about adyvka prompt engineering certificate"
    },
    {
      "id": "cert_prompt_ai",
      "label": "🤖 Artificial Intelligence Basics",
      "query": "tell me about adyvka artificial intelligence basics certificate"
    },
    {
      "id": "cert_prompt_py",
      "label": "🐍 Python Fundamentals Certification",
      "query": "tell me about adyvka python fundamentals certificate"
    },
    {
      "id": "cert_prompt_data",
      "label": "📊 Belajar Dasar Data Analyst",
      "query": "tell me about adyvka data analyst certificate"
    },
    {
      "id": "cert_prompt_camp",
      "label": "💻 Coding Camp Full Stack Developer",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_prompt_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/meniti-karier-sebagai-software-developer": [
    {
      "id": "cert_karier_summary",
      "label": "🚀 Meniti Karier Sebagai Software Dev Overview",
      "query": "tell me about adyvka software developer career certificate"
    },
    {
      "id": "cert_karier_camp",
      "label": "💻 Coding Camp Full Stack Developer",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_karier_cs50",
      "label": "🎓 Harvard CS50 Computer Science",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_karier_aws",
      "label": "☁️ AWS Cloud Practitioner Essentials",
      "query": "tell me about adyvka aws cloud practitioner certificate"
    },
    {
      "id": "cert_karier_git",
      "label": "🐙 Belajar Dasar Git dengan GitHub",
      "query": "tell me about adyvka git and github certificate"
    },
    {
      "id": "cert_karier_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/financial-literacy-fundamentals": [
    {
      "id": "cert_fin_summary",
      "label": "💰 Financial Literacy Fundamentals Overview",
      "query": "tell me about adyvka financial literacy certificate"
    },
    {
      "id": "cert_fin_karier",
      "label": "🚀 Meniti Karier Sebagai Software Developer",
      "query": "tell me about adyvka software developer career certificate"
    },
    {
      "id": "cert_fin_cs50",
      "label": "🎓 Harvard CS50 Computer Science",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_fin_camp",
      "label": "💻 Coding Camp Full Stack Developer",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_fin_english",
      "label": "🌐 English Proficiency Assessment",
      "query": "tell me about adyvka english proficiency certificate"
    },
    {
      "id": "cert_fin_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/artificial-intelligence-basics": [
    {
      "id": "cert_ai_summary",
      "label": "🤖 Artificial Intelligence Basics Overview",
      "query": "tell me about adyvka artificial intelligence basics certificate"
    },
    {
      "id": "cert_ai_prompt",
      "label": "🤖 Dasar Prompt Engineering",
      "query": "tell me about adyvka prompt engineering certificate"
    },
    {
      "id": "cert_ai_python",
      "label": "🐍 Python Fundamentals Certification",
      "query": "tell me about adyvka python fundamentals certificate"
    },
    {
      "id": "cert_ai_data",
      "label": "📊 Belajar Dasar Data Analyst",
      "query": "tell me about adyvka data analyst certificate"
    },
    {
      "id": "cert_ai_cs50",
      "label": "🎓 Harvard CS50 Computer Science",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_ai_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/google-developer-groups-participant": [
    {
      "id": "cert_gdg_summary",
      "label": "👥 Google Developer Groups Overview",
      "query": "tell me about adyvka google developer groups certificate"
    },
    {
      "id": "cert_gdg_aws",
      "label": "☁️ AWS Cloud Practitioner Essentials",
      "query": "tell me about adyvka aws cloud practitioner certificate"
    },
    {
      "id": "cert_gdg_camp",
      "label": "💻 Coding Camp Full Stack Developer",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_gdg_react",
      "label": "⚛️ React Web Application Development",
      "query": "tell me about adyvka react web development certificate"
    },
    {
      "id": "cert_gdg_cs50",
      "label": "🎓 Harvard CS50 Computer Science",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_gdg_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/certificates/english-proficiency-assessment": [
    {
      "id": "cert_eng_summary",
      "label": "🌐 English Proficiency Assessment Overview",
      "query": "tell me about adyvka english proficiency certificate"
    },
    {
      "id": "cert_eng_cs50",
      "label": "🎓 Harvard CS50 Computer Science",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_eng_aws",
      "label": "☁️ AWS Cloud Practitioner Essentials",
      "query": "tell me about adyvka aws cloud practitioner certificate"
    },
    {
      "id": "cert_eng_camp",
      "label": "💻 Coding Camp Full Stack Developer",
      "query": "tell me about adyvka coding camp full stack developer certificate"
    },
    {
      "id": "cert_eng_karier",
      "label": "🚀 Meniti Karier Sebagai Software Developer",
      "query": "tell me about adyvka software developer career certificate"
    },
    {
      "id": "cert_eng_all",
      "label": "📜 Explore All 23 Professional Certifications",
      "query": "what certifications does adyvka have"
    }
  ],
  "/publications/buku-membuat-game-tanpa-coding": [
    {
      "id": "pub_game_summary",
      "label": "📖 Making Games Without Coding Book Overview",
      "query": "tell me about adyvka published book on making games with scratch"
    },
    {
      "id": "pub_game_web",
      "label": "🌐 Making Modern Websites with Frameworks Book",
      "query": "tell me about adyvka published book on web frameworks"
    },
    {
      "id": "pub_game_teaching",
      "label": "🎮 Semut-Semut Game Teaching Experience",
      "query": "tell me about adyvka teaching game development at semut-semut the natural school"
    },
    {
      "id": "pub_game_all",
      "label": "📚 All Published Books & Modules",
      "query": "what books has adyvka written and published"
    },
    {
      "id": "pub_game_why",
      "label": "⭐ Why Hire Adyvka for Engineering & Education",
      "query": "why hire adyvka and what makes him stand out"
    },
    {
      "id": "pub_game_projs",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ],
  "/publications/buku-membuat-website-dengan-framework": [
    {
      "id": "pub_web_summary",
      "label": "🌐 Making Modern Websites Book Overview",
      "query": "tell me about adyvka published book on web frameworks"
    },
    {
      "id": "pub_web_game",
      "label": "📖 Making Games Without Coding Book",
      "query": "tell me about adyvka published book on making games with scratch"
    },
    {
      "id": "pub_web_teaching",
      "label": "👨‍🏫 SMA Lazuardi Web Instructor Experience",
      "query": "tell me about adyvka teaching experience at sma lazuardi"
    },
    {
      "id": "pub_web_all",
      "label": "📚 All Published Books & Modules",
      "query": "what books has adyvka written and published"
    },
    {
      "id": "pub_web_richo",
      "label": "⚓ Frontend Developer at CV Richo Bahari",
      "query": "tell me about adyvka frontend developer role at cv richo bahari"
    },
    {
      "id": "pub_web_projs",
      "label": "🚀 Explore All 18 Software Projects",
      "query": "tell me about all 18 software engineering projects by adyvka"
    }
  ]
};


export function getContextualSuggestions(pathname = "/", lang = "id") {
  if (!pathname || typeof pathname !== "string") {
    return QUICK_SUGGESTIONS;
  }

  // Normalize path by stripping trailing slashes
  const cleanPath = pathname.length > 1 && pathname.endsWith("/")
    ? pathname.replace(/\/+$/, "")
    : pathname.toLowerCase().trim();

  // 1. Direct match in contextual map
  if (CONTEXTUAL_SUGGESTIONS_MAP[cleanPath]) {
    return CONTEXTUAL_SUGGESTIONS_MAP[cleanPath];
  }

  // 2. Handle /teaching/:slug or /leadership/:slug mapped to /experience/:slug
  if (cleanPath.startsWith("/teaching/") || cleanPath.startsWith("/leadership/")) {
    const slug = cleanPath.split("/")[2];
    const expPath = `/experience/${slug}`;
    if (CONTEXTUAL_SUGGESTIONS_MAP[expPath]) {
      return CONTEXTUAL_SUGGESTIONS_MAP[expPath];
    }
  }

  // 3. Dynamic fallback for projects: /projects/:slug
  if (cleanPath.startsWith("/projects/")) {
    const slug = cleanPath.replace("/projects/", "").replace(/-/g, " ");
    return [
      { id: "dyn_proj_sum", label: "📝 Summarize this Project", query: `tell me about ${slug} project details and features` },
      { id: "dyn_proj_stack", label: "🛠️ Tech Stack & Architecture", query: `what is the tech stack and system architecture of ${slug}` },
      { id: "dyn_proj_feat", label: "💡 Key Features & Problem Solved", query: `what problems does ${slug} solve and its core features` },
      { id: "dyn_proj_all", label: "🚀 Explore All 18 Projects", query: "how many projects has adyvka worked on and what are they" },
      { id: "dyn_proj_databank", label: "⚡ Databank ERP Enterprise System", query: "tell me about databank erp at pt intisel" },
      { id: "dyn_proj_pusakaku", label: "🏛️ PusakaKu Platform (1st Place ICOMFEST)", query: "tell me about pusakaku 1st place icomfest project" },
    ];
  }

  // 4. Dynamic fallback for experience: /experience/:slug, /teaching/:slug, /leadership/:slug
  if (cleanPath.startsWith("/experience/") || cleanPath.startsWith("/teaching/") || cleanPath.startsWith("/leadership/")) {
    const parts = cleanPath.split("/");
    const slug = (parts[2] || "").replace(/-/g, " ");
    return [
      { id: "dyn_exp_sum", label: "💼 Summarize this Experience", query: `tell me about adyvka experience in ${slug}` },
      { id: "dyn_exp_role", label: "🎯 Core Responsibilities & Impact", query: `what were adyvka key responsibilities and impact in ${slug}` },
      { id: "dyn_exp_all", label: "🌟 Explore All 20 Experiences", query: "tell me about all 20 experiences of adyvka" },
      { id: "dyn_exp_intisel", label: "⚡ Lead Systems Engineer at PT Intisel", query: "tell me about adyvka lead systems engineer role at pt intisel prodaktifakom" },
      { id: "dyn_exp_ardyanda", label: "💼 PT Ardyanda Full Stack Internship", query: "tell me about adyvka internship at pt ardyanda digital inovasi" },
      { id: "dyn_exp_bp", label: "🌍 3-Country Solo Backpacker at 15", query: "tell me about adyvka solo backpacker trip across 3 countries" },
    ];
  }

  // 5. Dynamic fallback for certificates: /certificates/:slug
  if (cleanPath.startsWith("/certificates/")) {
    const slug = cleanPath.replace("/certificates/", "").replace(/-/g, " ");
    return [
      { id: "dyn_cert_sum", label: "📜 Syllabus & Topics Covered", query: `what was taught and learned in ${slug} certificate` },
      { id: "dyn_cert_skills", label: "🎓 Skills & Competencies Acquired", query: `what skills and competencies did adyvka gain from ${slug}` },
      { id: "dyn_cert_verify", label: "🔗 Verify Official Credential", query: `tell me about adyvka ${slug} certificate credentials` },
      { id: "dyn_cert_all", label: "📜 Explore All 23 Certifications", query: "what certificates and certifications does adyvka have" },
      { id: "dyn_cert_cs50", label: "🎓 Harvard University CS50 Credential", query: "tell me about adyvka harvard cs50 certificate" },
      { id: "dyn_cert_aws", label: "☁️ AWS Cloud Practitioner Essentials", query: "tell me about adyvka aws cloud practitioner certificate" },
    ];
  }

  // 6. Dynamic fallback for achievements: /achievements/:slug
  if (cleanPath.startsWith("/achievements/")) {
    const slug = cleanPath.replace("/achievements/", "").replace(/-/g, " ");
    return [
      { id: "dyn_ach_sum", label: "🏆 Competition Overview & Victory", query: `tell me about adyvka achievement in ${slug}` },
      { id: "dyn_ach_idea", label: "💡 Winning Innovation & Presentation", query: `what was the winning innovation and jury pitch for ${slug}` },
      { id: "dyn_ach_all", label: "🌟 All Competition Honors", query: "what competitions and awards has adyvka won" },
      { id: "dyn_ach_icomfest", label: "🥇 1st Place National Champion ICOMFEST", query: "tell me about 1st place national winner at icomfest 2025" },
      { id: "dyn_ach_pnbitc", label: "🥈 2nd Place National Runner-Up PNBITC Bali", query: "tell me about 2nd place national runner up at pnbitc bali" },
      { id: "dyn_ach_unila", label: "🏅 Top 5 National Finalist UNILA", query: "tell me about top 5 national finalist at unila 2025" },
    ];
  }

  // 7. Dynamic fallback for publications: /publications/:slug
  if (cleanPath.startsWith("/publications/")) {
    const slug = cleanPath.replace("/publications/", "").replace(/-/g, " ");
    return [
      { id: "dyn_pub_sum", label: "📚 Book Overview & Chapters", query: `tell me about adyvka published book on ${slug}` },
      { id: "dyn_pub_pedagogy", label: "💡 Practical Coding Pedagogy", query: "what topics and audience is covered in adyvka book" },
      { id: "dyn_pub_all", label: "📖 Explore Both Published Books", query: "what books has adyvka written and published" },
      { id: "dyn_pub_journey", label: "🚀 Adyvka Software Engineering Journey", query: "tell me about adyvka software engineering background" },
      { id: "dyn_pub_projects", label: "⚡ Databank ERP Enterprise Platform", query: "tell me about databank erp at pt intisel" },
      { id: "dyn_pub_cs50", label: "🎓 Harvard University CS50 Credential", query: "tell me about adyvka harvard cs50 certificate" },
    ];
  }

  // Default to global quick suggestions
  return QUICK_SUGGESTIONS;
}

export function detectLanguage(text) {
  if (!text || typeof text !== "string") return "id";
  const lower = text.toLowerCase().trim();

  // Strong Indonesian question openers & greetings
  const idOpeners = [
    "apa ", "apakah ", "siapa ", "siapakah ", "berapa ", "bagaimana ", "gimana ",
    "kenapa ", "mengapa ", "ceritakan ", "jelaskan ", "sebutkan ", "tolong ",
    "bisa ", "halo ", "hai ", "kapan ", "dimana ", "di mana ", "adakah ", "cara ",
    "dimanakah ", "ke mana ", "dari mana ", "asal ", "tentang ", "mau ", "tanya ",
    "minta ", "kasih ", "berikan ", "ada ", "sudahkah ", "pernahkah ",
    "assalamu", "selamat "
  ];
  if (idOpeners.some((prefix) => lower.startsWith(prefix))) {
    return "id";
  }

  // Strong English question openers & greetings
  const enOpeners = [
    "who ", "what ", "how ", "why ", "when ", "where ", "which ", "tell me ",
    "can you ", "could you ", "show me ", "list ", "explain ", "describe ",
    "is ", "are ", "do ", "does ", "did ", "hello ", "hi ", "hey ", "where is ",
    "where was ", "how old ", "how many ", "what is ", "who is ", "can adyvka ",
    "give me ", "download ", "view ", "show ", "tell ", "share ", "is he ",
    "can i ", "can we ", "where does ", "what are ", "who are ", "how much ",
    "current ", "national ", "academic ", "why should ", "why choose "
  ];
  if (enOpeners.some((prefix) => lower.startsWith(prefix))) {
    return "en";
  }

  const words = lower.replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
  if (words.length === 0) return "id";

  const ID_INDICATORS = new Set([
    "yang", "di", "ke", "dari", "ini", "itu", "dan", "atau", "untuk", "pada", "oleh",
    "ada", "tidak", "bukan", "sudah", "belum", "lagi", "bisa", "kamu", "anda", "dia",
    "beliau", "saya", "aku", "kami", "kita", "mereka", "projek", "proyek", "kerja",
    "pengalaman", "lomba", "juara", "sekolah", "kuliah", "jurusan", "rapot", "nilai",
    "buku", "tulis", "buat", "bikin", "ajar", "mengajar", "belajar", "dasar", "dengan", "guru", "siswa", "murid", "materi", "kurikulum",
    "tarif", "gaji", "biaya", "harga", "kelebihan", "keunggulan", "tentang", "kontak",
    "hubungi", "umur", "usia", "tahun", "domisili", "tinggal", "sertifikat", "prestasi",
    "seluruh", "pilar", "rekam", "jejak", "didapat", "dipelajari", "magang", "kasbon",
    "unduh", "cara", "minta", "dapat", "penghargaan", "dimana", "kemana", "darimana",
    "mana", "kapan", "siapa", "siapakah", "apa", "apakah", "kenapa", "mengapa",
    "bagaimana", "gimana", "berapa", "lahir", "kelahiran", "tempat", "asal", "asli",
    "orang", "halo", "hai", "dong", "sih", "ya", "kok", "nih", "tuh", "gak", "nggak",
    "ga", "udah", "udh", "dah", "blm", "tau", "tahu", "kasih", "tolong", "bener",
    "ingin", "mau", "punya", "bocoran", "tanya", "tanyakan", "jelaskan", "sebutkan",
    "ceritakan", "kenal", "gmn", "beneran", "nomor", "no", "wa", "telepon", "telp",
    "tlp", "hp", "surel", "alamat", "biodata", "profil", "biografi", "agama", "islam",
    "muslim", "keyakinan", "keluarga", "orangtua", "ayah", "ibu", "bapak", "saudara",
    "adik", "kakak", "teman", "hobi", "minat", "keahlian", "kemampuan", "skill",
    "karya", "portofolio", "porto", "tautan", "akun", "medsos", "sosmed", "depok",
    "bogor", "jakarta", "bandung", "indonesia", "jawa", "barat", "smk", "sma", "smp",
    "sd", "idn", "boarding", "santri", "pesantren", "organisasi", "osis", "panitia",
    "koordinator", "lulusan", "kelulusan", "rekrut", "merekrut", "alasan", "pilih",
    "memilih", "makasih", "makasi", "terimakasih", "terima", "keren", "mantap", "hebat",
    "top", "assalamualaikum", "assalamu", "alaikum"
  ]);

  const EN_INDICATORS = new Set([
    "the", "a", "an", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had",
    "do", "does", "did", "to", "of", "in", "for", "on", "with", "at", "by", "from",
    "about", "into", "through", "during", "before", "after", "and", "or", "but", "if",
    "this", "that", "these", "those", "i", "you", "he", "she", "it", "we", "they",
    "my", "your", "his", "her", "their", "our", "him", "project", "projects", "app", "apps",
    "application", "applications", "experience", "experiences", "work", "job", "jobs",
    "career", "teaching", "teach", "taught", "instructor", "mentor", "school", "schools",
    "gpa", "grade", "grades", "score", "scores", "academic", "book", "books", "award",
    "awards", "competition", "competitions", "won", "winner", "wins", "certificate",
    "certificates", "certification", "certifications", "credential", "credentials",
    "license", "licenses", "contact", "reach", "hire", "skills", "stack", "rate", "rates",
    "pricing", "fee", "fees", "cost", "costs", "charge", "charges", "charging", "remote",
    "hybrid", "available", "availability", "age", "old", "born", "birth", "birthday",
    "birthplace", "many", "much", "total", "count", "where", "when", "who", "whom", "what",
    "how", "why", "which", "tell", "show", "give", "can", "could", "would", "should",
    "will", "place", "city", "country", "living", "located", "based", "residence",
    "residing", "hometown", "details", "overview", "summary", "recommend", "hobbies",
    "hobby", "free", "time", "leisure", "vision", "goals", "goal", "plans", "aspirations",
    "faith", "religion", "family", "parents", "parent", "father", "mother", "dad", "mom",
    "sibling", "siblings", "brother", "sister", "download", "resume", "cv", "curriculum",
    "vitae", "thanks", "thank", "hello", "hi", "hey", "awesome", "great", "job", "impressive", "amazing",
    "fantastic", "brilliant", "technologies", "technology", "framework", "frameworks",
    "languages", "language", "code", "coding", "software", "developer", "engineer",
    "engineering", "internship", "intern", "contract", "freelance", "fulltime", "parttime",
    "open", "strengths", "strength", "choose", "help", "assist", "capabilities", "bot",
    "ai", "assistant", "national", "international", "championship", "profile", "account",
    "number", "email", "phone", "call", "whatsapp", "linkedin", "github", "instagram",
    "youtube", "tiktok", "social", "socials", "handle", "channel", "studies", "studied",
    "student", "authored", "author", "writer", "published", "publish", "solo", "backpacker",
    "backpacking", "survival", "leadership", "leader", "lead", "organize", "organizer",
    "event", "events", "current"
  ]);

  let idScore = 0;
  let enScore = 0;

  for (const w of words) {
    if (ID_INDICATORS.has(w)) idScore++;
    if (EN_INDICATORS.has(w)) enScore++;
  }

  if (enScore > idScore && enScore >= 1) return "en";
  if (idScore > enScore && idScore >= 1) return "id";

  const ID_EXCLUSIVE = new Set([
    "yang", "di", "ke", "dari", "ini", "itu", "dan", "atau", "untuk", "pada", "oleh",
    "ada", "tidak", "bukan", "sudah", "belum", "lagi", "bisa", "kamu", "anda", "dia",
    "beliau", "saya", "aku", "kami", "kita", "mereka", "dong", "sih", "ya", "kah", "pun",
    "udah", "udh", "dah", "blm", "tau", "tahu", "gimana", "gmn", "apa", "apakah", "siapa",
    "kenapa", "mengapa", "berapa", "kapan", "dimana", "mana", "kok", "nih", "tuh", "gak",
    "nggak", "ga", "makasih", "terimakasih", "alamat", "akun", "unduh", "minta", "ceritakan",
    "pengalaman", "proyek", "projek", "kerja", "lomba", "juara", "sekolah", "kuliah", "jurusan",
    "rapot", "nilai", "buku", "tulis", "buat", "bikin", "ajar", "mengajar", "belajar", "dasar", "dengan", "materi", "kurikulum", "guru", "tarif",
    "gaji", "biaya", "harga", "kelebihan", "keunggulan", "tentang", "kontak", "hubungi", "umur",
    "usia", "tahun", "domisili", "tinggal", "sertifikat", "prestasi", "lahir", "kelahiran",
    "tempat", "asal", "orangtua", "keluarga", "ayah", "ibu", "bapak", "saudara", "hobi",
    "minat", "cita", "impian", "tujuan", "bantu", "banget"
  ]);

  if (words.some((w) => ID_EXCLUSIVE.has(w))) {
    return "id";
  }

  if (enScore >= 1) return "en";

  const idAffixPattern = /^(me|ber|di|ter|pe|se)[a-z]+|[a-z]+(kan|an|nya|ku|mu|lah|kah)$/;
  if (words.some((w) => idAffixPattern.test(w) && !EN_INDICATORS.has(w))) {
    return "id";
  }

  // Default to Indonesian in ambiguous cases on this Indonesian portfolio
  if (enScore === 0) return "id";

  return "en";
}

const STOPWORDS = new Set([
  "adyvka", "rafif", "sava", "pratama", "dia", "ia", "beliau", "kamu", "anda", 
  "tentang", "dari", "oleh", "yang", "di", "ke", "dan", "adalah", "apakah", 
  "apa", "gimana", "bagaimana", "dong", "sih", "ya", "kah", "pun", "ada", 
  "ini", "itu", "seorang", "si", "pada", "untuk", "cara", "saja", "aja", 
  "banyak", "punya", "bisa", "tolong", "coba", "jelaskan", "sebutkan", "semua",
  "the", "is", "are", "was", "were", "be", "been", "has", "have", "had", "do",
  "does", "did", "tell", "me", "about", "can", "you", "what", "how", "who", "why",
  "where", "when", "which", "with", "for", "from", "and", "or", "but", "in", "on", "at"
]);

export function normalizeText(text) {
  if (!text || typeof text !== "string") return "";
  let clean = text.toLowerCase();
  clean = clean.replace(/[^a-z0-9\s]/g, " ");

  // Normalizations for contact, social, and communications
  clean = clean.replace(/\bwhatsapp\b/g, "whatsapp");
  clean = clean.replace(/\bno\s+wa\b/g, "whatsapp");
  clean = clean.replace(/\bnomor\s+wa\b/g, "whatsapp");
  clean = clean.replace(/\bwa\s+adyvka\b/g, "whatsapp");
  clean = clean.replace(/\bno\s+telepon\b/g, "telepon");
  clean = clean.replace(/\bnomor\s+telepon\b/g, "telepon");
  clean = clean.replace(/\bno\s+hp\b/g, "telepon");
  clean = clean.replace(/\bnomor\s+hp\b/g, "telepon");
  clean = clean.replace(/\bphone\s+number\b/g, "telepon");
  clean = clean.replace(/\bhandphone\b/g, "telepon");
  clean = clean.replace(/\btelp\b/g, "telepon");
  clean = clean.replace(/\btlp\b/g, "telepon");
  clean = clean.replace(/\bsurel\b/g, "email");
  clean = clean.replace(/\balamat\s+email\b/g, "email");
  clean = clean.replace(/\bakun\s+ig\b/g, "instagram");
  clean = clean.replace(/\blink\s+ig\b/g, "instagram");
  clean = clean.replace(/\bakun\s+yt\b/g, "youtube");
  clean = clean.replace(/\bchannel\s+youtube\b/g, "youtube");

  // Normalizations for greetings, appreciation, bot identity
  clean = clean.replace(/\bassalamu\s+alaikum\b/g, "halo");
  clean = clean.replace(/\bassalamualaikum\b/g, "halo");
  clean = clean.replace(/\bselamat\s+pagi\b/g, "halo");
  clean = clean.replace(/\bselamat\s+siang\b/g, "halo");
  clean = clean.replace(/\bselamat\s+sore\b/g, "halo");
  clean = clean.replace(/\bselamat\s+malam\b/g, "halo");
  clean = clean.replace(/\bgood\s+morning\b/g, "halo");
  clean = clean.replace(/\bgood\s+afternoon\b/g, "halo");
  clean = clean.replace(/\bgood\s+evening\b/g, "halo");
  clean = clean.replace(/\bterima\s+kasih\b/g, "terimakasih");
  clean = clean.replace(/\bmakasih\s+banyak\b/g, "terimakasih");
  clean = clean.replace(/\bthank\s+you\b/g, "terimakasih");
  clean = clean.replace(/\bthanks\s+a\s+lot\b/g, "terimakasih");
  clean = clean.replace(/\bkamu\s+siapa\b/g, "botidentity");
  clean = clean.replace(/\bsiapa\s+kamu\b/g, "botidentity");
  clean = clean.replace(/\bbot\s+apa\b/g, "botidentity");
  clean = clean.replace(/\basisten\s+apa\b/g, "botidentity");
  clean = clean.replace(/\bwho\s+are\s+you\b/g, "botidentity");
  clean = clean.replace(/\bwhat\s+can\s+you\s+do\b/g, "botidentity");

  // Normalizations for faith, religion, family, origins
  clean = clean.replace(/\bapa\s+agama\b/g, "agama");
  clean = clean.replace(/\bagama\s+apa\b/g, "agama");
  clean = clean.replace(/\bkeyakinan\b/g, "agama");
  clean = clean.replace(/\bkepercayaan\b/g, "agama");
  clean = clean.replace(/\borang\s+tua\b/g, "keluarga");
  clean = clean.replace(/\borangtua\b/g, "keluarga");
  clean = clean.replace(/\blatar\s+belakang\s+keluarga\b/g, "keluarga");
  clean = clean.replace(/\bmasa\s+kecil\b/g, "keluarga");
  clean = clean.replace(/\btempat\s+lahir\b/g, "lahir");
  clean = clean.replace(/\blahir\s+dimana\b/g, "lahir");
  clean = clean.replace(/\bdimana\s+lahir\b/g, "lahir");
  clean = clean.replace(/\btanggal\s+lahir\b/g, "lahir");
  clean = clean.replace(/\bkapan\s+lahir\b/g, "lahir");
  clean = clean.replace(/\btahun\s+lahir\b/g, "lahir");
  clean = clean.replace(/\bwhere\s+born\b/g, "lahir");
  clean = clean.replace(/\bwhere\s+was\s+born\b/g, "lahir");
  clean = clean.replace(/\btempat\s+tinggal\b/g, "domisili");
  clean = clean.replace(/\btinggal\s+dimana\b/g, "domisili");
  clean = clean.replace(/\bdimana\s+tinggal\b/g, "domisili");
  clean = clean.replace(/\basal\s+mana\b/g, "domisili");
  clean = clean.replace(/\bdari\s+mana\b/g, "domisili");

  // Normalizations for tech stack & languages
  clean = clean.replace(/\bbahasa\s+pemrograman\b/g, "bahasakoding");
  clean = clean.replace(/\bbahasa\s+koding\b/g, "bahasakoding");
  clean = clean.replace(/\bprogramming\s+language\b/g, "bahasakoding");
  clean = clean.replace(/\bprogramming\s+languages\b/g, "bahasakoding");
  clean = clean.replace(/\bfront\s+end\b/g, "frontend");
  clean = clean.replace(/\bback\s+end\b/g, "backend");
  clean = clean.replace(/\bmenghubungi\b/g, "hubungi");
  clean = clean.replace(/\bmenghubunginya\b/g, "hubungi");
  clean = clean.replace(/\bdihubungi\b/g, "hubungi");
  clean = clean.replace(/\bmengerjakan\b/g, "kerja");
  clean = clean.replace(/\bdikerjakan\b/g, "kerja");
  clean = clean.replace(/\bpekerjaan\b/g, "kerja");
  clean = clean.replace(/\bprojek\b/g, "proyek");
  clean = clean.replace(/\bprojects?\b/g, "proyek");
  clean = clean.replace(/\bportofolionya\b/g, "proyek");
  clean = clean.replace(/\bportfolio\b/g, "proyek");
  clean = clean.replace(/\bportofolio\b/g, "proyek");
  clean = clean.replace(/\baplikasinya\b/g, "proyek");
  clean = clean.replace(/\braport?\b/g, "rapot");
  clean = clean.replace(/\braportnya\b/g, "rapot");
  clean = clean.replace(/\brapotnya\b/g, "rapot");
  clean = clean.replace(/\bsertif\b/g, "sertifikat");
  clean = clean.replace(/\bsertifikasi\b/g, "sertifikat");
  clean = clean.replace(/\bcertificates?\b/g, "sertifikat");
  clean = clean.replace(/\bcertifications?\b/g, "sertifikat");
  clean = clean.replace(/\bkeunggulannya\b/g, "kelebihan");
  clean = clean.replace(/\bkekuatannya\b/g, "kelebihan");
  clean = clean.replace(/\bkelebihannya\b/g, "kelebihan");
  clean = clean.replace(/\bmerekrut\b/g, "rekrut");
  clean = clean.replace(/\bdirekrut\b/g, "rekrut");
  clean = clean.replace(/\brecruit\b/g, "hire");
  clean = clean.replace(/\brecruiting\b/g, "hire");
  clean = clean.replace(/\bstrengths?\b/g, "kelebihan");
  clean = clean.replace(/\bdibikin\b/g, "buat");
  clean = clean.replace(/\bbikin\b/g, "buat");
  clean = clean.replace(/\bmembuat\b/g, "buat");
  clean = clean.replace(/\bdibuat\b/g, "buat");
  clean = clean.replace(/\bmenulis\b/g, "tulis");
  clean = clean.replace(/\bditulis\b/g, "tulis");
  clean = clean.replace(/\bbukunya\b/g, "buku");
  clean = clean.replace(/\bbooks?\b/g, "buku");
  clean = clean.replace(/\bumurnya\b/g, "umur");
  clean = clean.replace(/\busianya\b/g, "usia");
  clean = clean.replace(/\bsekolahnya\b/g, "sekolah");
  clean = clean.replace(/\bpendidikannya\b/g, "pendidikan");
  clean = clean.replace(/\bpengalamannya\b/g, "pengalaman");
  clean = clean.replace(/\bexperiences?\b/g, "pengalaman");
  clean = clean.replace(/\bprestasinya\b/g, "prestasi");
  clean = clean.replace(/\bjuaranya\b/g, "juara");
  clean = clean.replace(/\bkejuaraan\b/g, "lomba");
  clean = clean.replace(/\bperlombaan\b/g, "lomba");
  clean = clean.replace(/\bawards?\b/g, "lomba");
  clean = clean.replace(/\bcompetitions?\b/g, "lomba");
  clean = clean.replace(/\bdomisilinya\b/g, "domisili");
  clean = clean.replace(/\bgajinya\b/g, "tarif");
  clean = clean.replace(/\bharganya\b/g, "tarif");
  clean = clean.replace(/\bbiayanya\b/g, "tarif");
  clean = clean.replace(/\bfeenya\b/g, "tarif");
  clean = clean.replace(/\bratenya\b/g, "tarif");
  clean = clean.replace(/\bpricing\b/g, "tarif");
  clean = clean.replace(/\brates?\b/g, "tarif");
  clean = clean.replace(/\bunduh\s+cv\b/g, "cv");
  clean = clean.replace(/\bdownload\s+cv\b/g, "cv");
  clean = clean.replace(/\bminta\s+cv\b/g, "cv");
  clean = clean.replace(/\bunduh\s+resume\b/g, "cv");
  clean = clean.replace(/\bdownload\s+resume\b/g, "cv");

  // =========================================================================
  // EXTENSIVE ENGLISH SYNONYMS & NORMALIZATION
  // =========================================================================

  // English Greetings & Gratitude
  clean = clean.replace(/\bthank\s+you\s+so\s+much\b/g, "terimakasih");
  clean = clean.replace(/\bthank\s+you\s+very\s+much\b/g, "terimakasih");
  clean = clean.replace(/\bthanks\s+a\s+lot\b/g, "terimakasih");
  clean = clean.replace(/\bthank\s+you\b/g, "terimakasih");
  clean = clean.replace(/\bmany\s+thanks\b/g, "terimakasih");
  clean = clean.replace(/\bmuch\s+appreciated\b/g, "terimakasih");
  clean = clean.replace(/\bappreciate\s+it\b/g, "terimakasih");
  clean = clean.replace(/\bcheers\b/g, "terimakasih");
  clean = clean.replace(/\bawesome\s+job\b/g, "terimakasih");
  clean = clean.replace(/\bgreat\s+job\b/g, "terimakasih");
  clean = clean.replace(/\bgood\s+job\b/g, "terimakasih");
  clean = clean.replace(/\bwell\s+done\b/g, "terimakasih");
  clean = clean.replace(/\bimpressive\s+work\b/g, "terimakasih");
  clean = clean.replace(/\bawesome\b/g, "terimakasih");
  clean = clean.replace(/\bamazing\b/g, "terimakasih");
  clean = clean.replace(/\bfantastic\b/g, "terimakasih");
  clean = clean.replace(/\bbrilliant\b/g, "terimakasih");

  // English Bot Identity
  clean = clean.replace(/\bwho\s+are\s+you\b/g, "botidentity");
  clean = clean.replace(/\bwhat\s+are\s+you\b/g, "botidentity");
  clean = clean.replace(/\bwhat\s+is\s+your\s+name\b/g, "botidentity");
  clean = clean.replace(/\bwho\s+made\s+you\b/g, "botidentity");
  clean = clean.replace(/\bwho\s+created\s+you\b/g, "botidentity");
  clean = clean.replace(/\bwhat\s+can\s+you\s+do\b/g, "botidentity");
  clean = clean.replace(/\bhow\s+can\s+you\s+help\b/g, "botidentity");
  clean = clean.replace(/\bhow\s+can\s+you\s+assist\b/g, "botidentity");
  clean = clean.replace(/\bwhat\s+are\s+your\s+capabilities\b/g, "botidentity");
  clean = clean.replace(/\bwhat\s+can\s+i\s+ask\b/g, "botidentity");

  // English Contact, Social & Reach Out
  clean = clean.replace(/\bhow\s+can\s+i\s+contact\b/g, "kontak");
  clean = clean.replace(/\bhow\s+to\s+contact\b/g, "kontak");
  clean = clean.replace(/\bhow\s+can\s+i\s+reach\b/g, "kontak");
  clean = clean.replace(/\bhow\s+to\s+reach\b/g, "kontak");
  clean = clean.replace(/\bget\s+in\s+touch\b/g, "kontak");
  clean = clean.replace(/\breach\s+out\b/g, "kontak");
  clean = clean.replace(/\bcontact\s+info\b/g, "kontak");
  clean = clean.replace(/\bcontact\s+information\b/g, "kontak");
  clean = clean.replace(/\bcontact\s+details\b/g, "kontak");
  clean = clean.replace(/\bwhatsapp\s+number\b/g, "whatsapp");
  clean = clean.replace(/\bwa\s+number\b/g, "whatsapp");
  clean = clean.replace(/\bchat\s+on\s+whatsapp\b/g, "whatsapp");
  clean = clean.replace(/\bphone\s+number\b/g, "telepon");
  clean = clean.replace(/\btelephone\s+number\b/g, "telepon");
  clean = clean.replace(/\bcell\s+phone\b/g, "telepon");
  clean = clean.replace(/\bmobile\s+number\b/g, "telepon");
  clean = clean.replace(/\bemail\s+address\b/g, "email");
  clean = clean.replace(/\bsend\s+email\b/g, "email");
  clean = clean.replace(/\bdrop\s+an\s+email\b/g, "email");
  clean = clean.replace(/\bgithub\s+account\b/g, "kontak github");
  clean = clean.replace(/\bgithub\s+profile\b/g, "kontak github");
  clean = clean.replace(/\bgithub\s+link\b/g, "kontak github");
  clean = clean.replace(/\bhis\s+github\b/g, "kontak github");
  clean = clean.replace(/\blinkedin\s+account\b/g, "kontak linkedin");
  clean = clean.replace(/\blinkedin\s+profile\b/g, "kontak linkedin");
  clean = clean.replace(/\blinkedin\s+link\b/g, "kontak linkedin");
  clean = clean.replace(/\bhis\s+linkedin\b/g, "kontak linkedin");
  clean = clean.replace(/\binstagram\s+profile\b/g, "kontak instagram");
  clean = clean.replace(/\binstagram\s+account\b/g, "kontak instagram");
  clean = clean.replace(/\bhis\s+instagram\b/g, "kontak instagram");
  clean = clean.replace(/\byoutube\s+channel\b/g, "kontak youtube");
  clean = clean.replace(/\bhis\s+youtube\b/g, "kontak youtube");
  clean = clean.replace(/\btiktok\s+account\b/g, "kontak tiktok");
  clean = clean.replace(/\bhis\s+tiktok\b/g, "kontak tiktok");
  clean = clean.replace(/\bsocial\s+media\b/g, "kontak");
  clean = clean.replace(/\bsocial\s+profiles?\b/g, "kontak");
  clean = clean.replace(/\bsocials\b/g, "kontak");

  // English Resume / CV
  clean = clean.replace(/\bdownload\s+cv\b/g, "cv");
  clean = clean.replace(/\bdownload\s+resume\b/g, "cv");
  clean = clean.replace(/\bget\s+cv\b/g, "cv");
  clean = clean.replace(/\bget\s+resume\b/g, "cv");
  clean = clean.replace(/\bview\s+cv\b/g, "cv");
  clean = clean.replace(/\bview\s+resume\b/g, "cv");
  clean = clean.replace(/\bcurriculum\s+vitae\b/g, "cv");
  clean = clean.replace(/\bpdf\s+resume\b/g, "cv");
  clean = clean.replace(/\bcv\s+pdf\b/g, "cv");

  // English Birth, Age, Origins & Domicile
  clean = clean.replace(/\bwhere\s+was\s+(?:adyvka\s+|he\s+)?born\b/g, "lahir");
  clean = clean.replace(/\bwhere\s+is\s+he\s+born\b/g, "lahir");
  clean = clean.replace(/\bplace\s+of\s+birth\b/g, "lahir");
  clean = clean.replace(/\bbirth\s+place\b/g, "lahir");
  clean = clean.replace(/\bbirthplace\b/g, "lahir");
  clean = clean.replace(/\bbirth\s+city\b/g, "lahir");
  clean = clean.replace(/\bnative\s+city\b/g, "lahir");
  clean = clean.replace(/\bhow\s+old\s+is\s+(?:he|adyvka)\b/g, "umur");
  clean = clean.replace(/\bwhat\s+is\s+his\s+age\b/g, "umur");
  clean = clean.replace(/\bwhen\s+was\s+(?:he|adyvka)\s+born\b/g, "lahir umur");
  clean = clean.replace(/\bdate\s+of\s+birth\b/g, "lahir umur");
  clean = clean.replace(/\bbirth\s+date\b/g, "lahir umur");
  clean = clean.replace(/\byear\s+of\s+birth\b/g, "lahir umur");
  clean = clean.replace(/\bbirth\s+year\b/g, "lahir umur");
  clean = clean.replace(/\bwhere\s+does\s+(?:he|adyvka)\s+live\b/g, "domisili");
  clean = clean.replace(/\bwhere\s+is\s+(?:he|adyvka)\s+located\b/g, "domisili");
  clean = clean.replace(/\bwhere\s+is\s+(?:he|adyvka)\s+based\b/g, "domisili");
  clean = clean.replace(/\bwhat\s+city\s+is\s+he\s+from\b/g, "domisili");
  clean = clean.replace(/\bcurrent\s+residence\b/g, "domisili");
  clean = clean.replace(/\bcurrent\s+location\b/g, "domisili");
  clean = clean.replace(/\bcity\s+of\s+residence\b/g, "domisili");
  clean = clean.replace(/\bwhere\s+is\s+his\s+home\b/g, "domisili");
  clean = clean.replace(/\bresidence\b/g, "domisili");
  clean = clean.replace(/\bresiding\b/g, "domisili");
  clean = clean.replace(/\bhometown\b/g, "domisili");

  // English Faith & Family
  clean = clean.replace(/\bwhat\s+is\s+his\s+religion\b/g, "agama");
  clean = clean.replace(/\bwhat\s+religion\b/g, "agama");
  clean = clean.replace(/\bwhat\s+is\s+his\s+faith\b/g, "agama");
  clean = clean.replace(/\bis\s+he\s+muslim\b/g, "agama");
  clean = clean.replace(/\breligious\s+beliefs?\b/g, "agama");
  clean = clean.replace(/\bspiritual\s+beliefs?\b/g, "agama");
  clean = clean.replace(/\btell\s+me\s+about\s+his\s+family\b/g, "keluarga");
  clean = clean.replace(/\bwho\s+are\s+his\s+parents\b/g, "keluarga");
  clean = clean.replace(/\bhis\s+family\b/g, "keluarga");
  clean = clean.replace(/\bfather\s+and\s+mother\b/g, "keluarga");
  clean = clean.replace(/\bhis\s+parents\b/g, "keluarga");
  clean = clean.replace(/\bdoes\s+he\s+have\s+siblings\b/g, "keluarga");
  clean = clean.replace(/\bhis\s+siblings\b/g, "keluarga");
  clean = clean.replace(/\bchildhood\s+background\b/g, "keluarga");
  clean = clean.replace(/\bupbringing\b/g, "keluarga");
  clean = clean.replace(/\bfather\b/g, "keluarga");
  clean = clean.replace(/\bmother\b/g, "keluarga");
  clean = clean.replace(/\bparents?\b/g, "keluarga");
  clean = clean.replace(/\bsiblings?\b/g, "keluarga");
  clean = clean.replace(/\bbrothers?\b/g, "keluarga");
  clean = clean.replace(/\bsisters?\b/g, "keluarga");

  // English Projects & Applications
  clean = clean.replace(/\bhow\s+many\s+projects\b/g, "jumlahproyek");
  clean = clean.replace(/\bhow\s+many\s+apps\b/g, "jumlahproyek");
  clean = clean.replace(/\bhow\s+many\s+applications\b/g, "jumlahproyek");
  clean = clean.replace(/\bnumber\s+of\s+projects\b/g, "jumlahproyek");
  clean = clean.replace(/\btotal\s+projects\b/g, "jumlahproyek");
  clean = clean.replace(/\btotal\s+apps\b/g, "jumlahproyek");
  clean = clean.replace(/\blist\s+all\s+projects\b/g, "katalogproyek");
  clean = clean.replace(/\blist\s+projects\b/g, "katalogproyek");
  clean = clean.replace(/\bshow\s+all\s+projects\b/g, "katalogproyek");
  clean = clean.replace(/\bshow\s+projects\b/g, "katalogproyek");
  clean = clean.replace(/\bwhat\s+applications\s+has\s+he\s+built\b/g, "katalogproyek");
  clean = clean.replace(/\bwhat\s+apps\s+has\s+he\s+built\b/g, "katalogproyek");
  clean = clean.replace(/\bwhat\s+projects\s+has\s+he\s+built\b/g, "katalogproyek");
  clean = clean.replace(/\bwhat\s+has\s+he\s+built\b/g, "katalogproyek");
  clean = clean.replace(/\ball\s+projects\b/g, "katalogproyek");
  clean = clean.replace(/\bproject\s+catalog\b/g, "katalogproyek");
  clean = clean.replace(/\bproject\s+list\b/g, "katalogproyek");
  clean = clean.replace(/\bapplications?\b/g, "proyek");
  clean = clean.replace(/\bapps?\b/g, "proyek");
  clean = clean.replace(/\bbuilt\b/g, "buat");
  clean = clean.replace(/\bcreated\b/g, "buat");
  clean = clean.replace(/\bdeveloped\b/g, "buat");

  // English Tech Stack & Skills
  clean = clean.replace(/\bwhat\s+is\s+his\s+tech\s+stack\b/g, "techstack");
  clean = clean.replace(/\btech\s+stack\b/g, "techstack");
  clean = clean.replace(/\bwhat\s+technologies\s+does\s+he\s+use\b/g, "techstack");
  clean = clean.replace(/\btechnologies\s+used\b/g, "techstack");
  clean = clean.replace(/\bwhat\s+frameworks\s+does\s+he\s+master\b/g, "techstack");
  clean = clean.replace(/\bframeworks\s+used\b/g, "techstack");
  clean = clean.replace(/\bwhat\s+programming\s+languages\b/g, "techstack");
  clean = clean.replace(/\bprogramming\s+languages?\b/g, "techstack");
  clean = clean.replace(/\bcoding\s+languages?\b/g, "techstack");
  clean = clean.replace(/\bdeveloper\s+skills\b/g, "techstack");
  clean = clean.replace(/\btechnical\s+skills\b/g, "techstack");
  clean = clean.replace(/\btechnologies\b/g, "teknologi");
  clean = clean.replace(/\btechnology\b/g, "teknologi");
  clean = clean.replace(/\bframeworks?\b/g, "framework");

  // English Rates, Pricing & Availability
  clean = clean.replace(/\bhow\s+much\s+does\s+he\s+charge\b/g, "tarif");
  clean = clean.replace(/\bwhat\s+are\s+his\s+rates\b/g, "tarif");
  clean = clean.replace(/\bwhat\s+does\s+he\s+charge\b/g, "tarif");
  clean = clean.replace(/\bhourly\s+rate\b/g, "tarif");
  clean = clean.replace(/\bservice\s+fee\b/g, "tarif");
  clean = clean.replace(/\bservice\s+cost\b/g, "tarif");
  clean = clean.replace(/\bpricing\s+model\b/g, "tarif");
  clean = clean.replace(/\bproject\s+price\b/g, "tarif");
  clean = clean.replace(/\bcost\s+of\s+service\b/g, "tarif");
  clean = clean.replace(/\bcharge\b/g, "tarif");
  clean = clean.replace(/\bcharges\b/g, "tarif");
  clean = clean.replace(/\bcharging\b/g, "tarif");
  clean = clean.replace(/\bcost\b/g, "tarif");
  clean = clean.replace(/\bcosts\b/g, "tarif");
  clean = clean.replace(/\bfee\b/g, "tarif");
  clean = clean.replace(/\bfees\b/g, "tarif");
  clean = clean.replace(/\bis\s+he\s+available\b/g, "ketersediaankerja");
  clean = clean.replace(/\bwork\s+availability\b/g, "ketersediaankerja");
  clean = clean.replace(/\bopen\s+to\s+work\b/g, "ketersediaankerja");
  clean = clean.replace(/\bfreelance\s+availability\b/g, "ketersediaankerja");
  clean = clean.replace(/\bavailable\s+for\s+freelance\b/g, "ketersediaankerja");
  clean = clean.replace(/\bcan\s+i\s+hire\s+him\b/g, "ketersediaankerja");
  clean = clean.replace(/\bhire\s+full\s*time\b/g, "ketersediaankerja");
  clean = clean.replace(/\bhire\s+part\s*time\b/g, "ketersediaankerja");
  clean = clean.replace(/\bfull\s*time\b/g, "fulltime");
  clean = clean.replace(/\bpart\s*time\b/g, "parttime");
  clean = clean.replace(/\bavailability\b/g, "ketersediaankerja");

  // English Strengths & Why Hire
  clean = clean.replace(/\bwhy\s+should\s+i\s+hire\b/g, "kelebihan hire");
  clean = clean.replace(/\bwhy\s+hire\s+(?:adyvka|him)\b/g, "kelebihan hire");
  clean = clean.replace(/\bwhy\s+choose\s+(?:adyvka|him)\b/g, "kelebihan hire");
  clean = clean.replace(/\bcore\s+strengths\b/g, "kelebihan");
  clean = clean.replace(/\bkey\s+strengths\b/g, "kelebihan");
  clean = clean.replace(/\bcompetitive\s+edge\b/g, "kelebihan");
  clean = clean.replace(/\breasons\s+to\s+hire\b/g, "kelebihan hire");
  clean = clean.replace(/\bwhat\s+makes\s+him\s+unique\b/g, "kelebihan");
  clean = clean.replace(/\bvalue\s+proposition\b/g, "kelebihan");

  // English Hobbies & Free Time
  clean = clean.replace(/\bwhat\s+does\s+he\s+do\s+in\s+his\s+free\s+time\b/g, "hobi");
  clean = clean.replace(/\bfree\s+time\b/g, "hobi");
  clean = clean.replace(/\bspare\s+time\b/g, "hobi");
  clean = clean.replace(/\bleisure\s+activities\b/g, "hobi");
  clean = clean.replace(/\bleisure\b/g, "hobi");
  clean = clean.replace(/\bpassions\b/g, "hobi");
  clean = clean.replace(/\bhobbies\b/g, "hobi");
  clean = clean.replace(/\bhobby\b/g, "hobi");
  clean = clean.replace(/\binterests?\b/g, "hobi");

  // English Vision & Goals
  clean = clean.replace(/\bfuture\s+goals\b/g, "visi");
  clean = clean.replace(/\bcareer\s+vision\b/g, "visi");
  clean = clean.replace(/\bcareer\s+goals\b/g, "visi");
  clean = clean.replace(/\bfuture\s+plans\b/g, "visi");
  clean = clean.replace(/\bengineering\s+aspirations\b/g, "visi");
  clean = clean.replace(/\blong\s+term\s+vision\b/g, "visi");
  clean = clean.replace(/\baspirations?\b/g, "visi");
  clean = clean.replace(/\bvisions?\b/g, "visi");
  clean = clean.replace(/\bgoals?\b/g, "visi");

  // English Academics, GPA & School
  clean = clean.replace(/\bwhat\s+is\s+his\s+gpa\b/g, "rapot");
  clean = clean.replace(/\bwhat\s+are\s+his\s+grades\b/g, "rapot");
  clean = clean.replace(/\bacademic\s+scores?\b/g, "rapot");
  clean = clean.replace(/\breport\s+card\b/g, "rapot");
  clean = clean.replace(/\bacademic\s+standing\b/g, "rapot");
  clean = clean.replace(/\bacademic\s+records?\b/g, "rapot");
  clean = clean.replace(/\bgrades?\b/g, "rapot");
  clean = clean.replace(/\bscores?\b/g, "rapot");
  clean = clean.replace(/\bwhere\s+did\s+he\s+study\b/g, "sekolah");
  clean = clean.replace(/\bwhat\s+school\b/g, "sekolah");
  clean = clean.replace(/\bvocational\s+high\s+school\b/g, "sekolah smk");
  clean = clean.replace(/\bwhat\s+is\s+his\s+major\b/g, "sekolah jurusan");
  clean = clean.replace(/\bfield\s+of\s+study\b/g, "sekolah jurusan");
  clean = clean.replace(/\bhigh\s+schools?\b/g, "sekolah");

  // English Awards & Competitions
  clean = clean.replace(/\bnational\s+competitions?\s+won\b/g, "lomba");
  clean = clean.replace(/\bawards?\s+won\b/g, "lomba");
  clean = clean.replace(/\bcompetitions?\s+won\b/g, "lomba");
  clean = clean.replace(/\bchampionships?\s+won\b/g, "lomba");
  clean = clean.replace(/\bnational\s+awards?\b/g, "lomba");
  clean = clean.replace(/\bchampionships?\b/g, "lomba");
  clean = clean.replace(/\bcompetitions?\b/g, "lomba");
  clean = clean.replace(/\bawards?\b/g, "lomba");
  clean = clean.replace(/\btrophies\b/g, "lomba");
  clean = clean.replace(/\btrophy\b/g, "lomba");

  // English Certificates & Books
  clean = clean.replace(/\bhow\s+many\s+certificates\b/g, "sertifikat");
  clean = clean.replace(/\btotal\s+certificates\b/g, "sertifikat");
  clean = clean.replace(/\blist\s+certificates\b/g, "sertifikat");
  clean = clean.replace(/\bverified\s+credentials\b/g, "sertifikat");
  clean = clean.replace(/\bcredentials?\b/g, "sertifikat");
  clean = clean.replace(/\blicenses?\b/g, "sertifikat");
  clean = clean.replace(/\bhas\s+he\s+published\s+(?:any\s+)?books?\b/g, "buku");
  clean = clean.replace(/\bwhat\s+books\s+has\s+he\s+written\b/g, "buku");
  clean = clean.replace(/\bbooks?\s+authored\b/g, "buku");
  clean = clean.replace(/\bpublished\s+books?\b/g, "buku");
  clean = clean.replace(/\bpublished\s+author\b/g, "buku");

  return clean.split(/\s+/).filter(Boolean).join(" ");
}

export const KNOWLEDGE_REGISTRY = {
  PT_ARDYANDA_DETAIL: {
    id: {
      title: `Pengalaman Kerja di PT Ardyanda Digital Inovasi (Full Stack Intern)`,
      text: `**Magang Full Stack Developer di PT Ardyanda Digital Inovasi**

Pengalaman magang korporat satu tahun penuh (Juli 2026 – Januari 2027) di PT Ardyanda Digital Inovasi (Software Engineering & Digital Solutions):

* **Proses Rekrutmen 5 Tahap:** Terpilih melalui seleksi kompetitif magang wajib kelas 12 SMK setelah satu bulan melamar massal dan melalui 5 putaran wawancara ketat menguji ketahanan mental dan fondasi rekayasa perangkat lunak.
* **Perkembangan Peran (Backend ke Full Stack):** Awalnya direkrut sebagai Backend Developer Intern. Karena kecepatan belajar tinggi dan selalu menuntaskan tugas sebelum tenggat waktu, dengan cepat dipromosikan memegang tanggung jawab Full Stack Developer lintas frontend, backend, dan komunikasi klien.
* **Rekayasa Sistem Finansial Internal:**
  * **Sistem Payroll Presisi 100%:** Mengotomasi kalkulasi penggajian bulanan dengan validasi matematis ketat bebas selisih hitung, terintegrasi absensi dan tunjangan variabel.
  * **Mesin Kasbon Karyawan:** Merancang sistem pinjaman/kasbon (cash advance) dengan alur persetujuan bertingkat (multi-level approvals) dan pemotongan saldo otomatis.
  * **Buku Kas Umum:** Membangun pencatatan akuntansi dan arus kas masuk/keluar untuk visibilitas keuangan perusahaan secara real-time.
* **Proyek Klien Multi-Sektor:**
  * **Platform Rumah Sakit/Kesehatan:** Mengembangkan modul administrasi pasien dan alur informasi medis.
  * **ERP Manajemen Masjid:** Mendigitalkan jadwal operasional, wakaf, dan pencatatan keuangan komunitas.
  * **Modular CMS:** Membangun antarmuka dashboard untuk mempermudah staf non-teknis klien mengelola konten web dengan aman.
* **Peran Komunikasi & Kepemimpinan Budaya:**
  * Mewakili tim engineering dalam stakeholder meetings bersama klien untuk menerjemahkan kebutuhan bisnis menjadi spesifikasi teknis.
  * Dipercaya menjadi Master of Ceremonies (MC) dan panitia inti perayaan HUT Kemerdekaan RI di hadapan jajaran pimpinan dan dewan direksi perusahaan.
* **Nilai & Pembelajaran Nyata:** Tidak pernah membatasi diri dengan label 'anak magang', cepat beradaptasi dengan stack baru, serta membuktikan bahwa kemampuan komunikasi publik melipatgandakan nilai seorang software engineer.`,
      links: [
        {
                "label": "Detail Pengalaman PT Ardyanda",
                "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
        }
],
    },
    en: {
      title: `Full Stack Internship at PT Ardyanda Digital Inovasi`,
      text: `**Full Stack Developer Internship at PT Ardyanda Digital Inovasi**

A mandatory 1-year corporate vocational internship (Jul 2026 – Jan 2027) at PT Ardyanda Digital Inovasi (Software Engineering & Digital Solutions):

* **Rigorous 5-Round Selection:** Placed after a month of nationwide mass applications and 5 intensive interview rounds testing technical foundation and resilience.
* **Role Expansion (Backend to Full Stack):** Originally hired as Backend Intern, rapidly elevated to Full Stack Developer within weeks due to high learning velocity and delivering ahead of schedule.
* **Internal Enterprise Financial Suite:**
  * **100% Payroll Precision:** Automated monthly payroll calculation factoring attendance, allowances, and tax withholding without ledger discrepancies.
  * **Employee Cash Advance Engine:** Architected loan disbursement workflows with multi-level approvals and automated balance deductions.
  * **General Accounting Ledger:** Built real-time cash flow visibility and financial audit trails.
* **Multi-Domain Client Platforms:**
  * **Healthcare Management:** Developed clinical records and patient administration modules.
  * **Mosque ERP System:** Digitized community operational schedules, endowments, and financial transparency.
  * **Modular CMS:** Structured dynamic administration dashboards for client non-technical teams.
* **Client Representation & Cultural Leadership:**
  * Represented the engineering team in client stakeholder syncs to convert business needs into technical architecture.
  * Appointed Master of Ceremonies (MC) for corporate Independence Day celebrations before C-level executives.
* **Core Takeaways:** Refusing to let an 'intern' title limit initiative, mastering unfamiliar technology on the fly, and compounding engineering impact through executive communication.`,
      links: [
        {
                "label": "PT Ardyanda Full Experience Details",
                "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
        }
],
    },
  },
  PT_INTISEL_DETAIL: {
    id: {
      title: `Pengalaman Kerja di PT Intisel Prodaktifakom (Lead Systems Engineer & PM Databank ERP)`,
      text: `**PT Intisel Prodaktifakom: Lead Systems Engineer & Project Manager Databank ERP**

Di PT Intisel Prodaktifakom, Adyvka memimpin perancangan dan implementasi Databank ERP, sistem audit infrastruktur telekomunikasi skala enterprise:

* **Kepemimpinan Tim:** Memimpin 4 software engineer (2 backend dan 2 frontend) dari tahap penentuan spesifikasi arsitektur hingga produksi rilis.
* **Otomasi Huawei ISDP Web Scraping Bot:** Mengembangkan bot otomatisasi menggunakan Python dan browser automation untuk menarik data survei site menara telekomunikasi dari portal Huawei ISDP, mengeliminasi pekerjaan rekap manual berjam-jam menjadi beberapa detik.
* **Digital Approval 3 Tahap:** Merancang alur persetujuan audit berjenjang (Auditor Lapangan → Quality Controller → Project Manager) dengan validasi foto geolokasi dan tanda tangan digital.
* **Skala & Keandalan Operasional:** Menangani data survei lebih dari 1.000 site BTS di seluruh Indonesia dengan jaminan ketersediaan sistem 99.8% uptime.
* **Arsitektur Teknis:** Next.js, TypeScript, PostgreSQL, Prisma ORM, Redis Caching, Docker containerization, dan REST API terproteksi JWT serta Role-Based Access Control (RBAC).`,
      links: [
        {
                "label": "Detail Pengalaman PT Intisel",
                "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
        },
        {
                "label": "Studi Kasus Proyek Databank ERP",
                "url": "/projects/databank"
        }
],
    },
    en: {
      title: `Lead Systems Engineer & Project Manager at PT Intisel Prodaktifakom`,
      text: `**PT Intisel Prodaktifakom: Lead Systems Engineer & Databank ERP Project Manager**

At PT Intisel Prodaktifakom, Adyvka directed the end-to-end architecture and rollout of Databank ERP, an enterprise telecommunications infrastructure audit platform:

* **Engineering Team Leadership:** Led a squad of 4 software engineers across frontend and backend lifecycles.
* **Huawei ISDP Automated Scraping Bot:** Built high-throughput Python automation to extract telecom site survey files directly from Huawei ISDP, reducing manual reporting from hours to seconds.
* **3-Tier Digital Approval Workflow:** Structured sequential verification checkpoints (Field Auditor → QC Specialist → Project Manager) with geographic coordinate checks and digital signoffs.
* **Production Scale & Reliability:** Processed field audit telemetry across 1,000+ cellular base stations across Indonesia with 99.8% SLA availability.
* **Architecture Stack:** Next.js, TypeScript, PostgreSQL, Prisma ORM, Redis caching, Docker containerization, and granular RBAC authorization.`,
      links: [
        {
                "label": "PT Intisel Full Experience Details",
                "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
        },
        {
                "label": "Databank ERP System Case Study",
                "url": "/projects/databank"
        }
],
    },
  },
  CV_RICHO_BAHARI_DETAIL: {
    id: {
      title: `Pengalaman Kerja di CV. Richo Bahari (Frontend Developer & UI/UX Architect)`,
      text: `**CV. Richo Bahari: Frontend Developer & UI/UX Architect**

Adyvka merancang dan mengimplementasikan portal platform korporat interaktif untuk CV. Richo Bahari (General Contractor & Industrial Services):

* **Katalog Layanan Industri Berat:** Merancang presentasi visual untuk pekerjaan konstruksi sipil, mechanical electrical plumbing (MEP), fabrikasi baja, dan industrial warehouse racking.
* **Kepatuhan Standar Keselamatan:** Mengintegrasikan dokumentasi kepatuhan keselamatan kerja K3 (Zero Accident Policy) dan sertifikasi manajemen mutu ISO 9001:2015 ke dalam presentasi digital klien.
* **Optimasi Performa Web Modern:** Dibangun menggunakan Next.js 16, React 19, Tailwind CSS v4, dan React Compiler, menghasilkan skor performa Google Lighthouse 99/100 dengan sub-second latency.
* **SEO & Static Site Generation (SSG):** Menerapkan optimasi metadata dan OpenGraph untuk memperkuat visibilitas profil perusahaan kontraktor di mesin pencari industri.`,
      links: [
        {
                "label": "Detail Pengalaman CV Richo Bahari",
                "url": "/experience/cv-richo-bahari-frontend-developer-freelance"
        },
        {
                "label": "Studi Kasus Web Richo Bahari",
                "url": "/projects/richobahari"
        }
],
    },
    en: {
      title: `Frontend Developer & UI/UX Architect at CV. Richo Bahari`,
      text: `**CV. Richo Bahari: Frontend Developer & UI/UX Architect**

Adyvka engineered the corporate industrial platform and digital asset portfolio for CV. Richo Bahari (General Contractor & Industrial Services):

* **Industrial Engineering Catalog:** Visualized civil engineering, structural steel fabrication, MEP installations, and heavy industrial racking systems.
* **Safety & Compliance Integration:** Highlighted occupational health and safety protocols (K3 Zero Accident) alongside ISO 9001:2015 quality assurance certifications.
* **Ultra-Fast Performance:** Built on Next.js 16, React 19, Tailwind CSS v4, and React Compiler, clocking 99/100 Lighthouse ratings with sub-second page loads.
* **Search Engine Visibility:** Engineered clean semantic HTML and automated SSG routines to capture enterprise B2B contractor procurement queries.`,
      links: [
        {
                "label": "CV Richo Bahari Experience",
                "url": "/experience/cv-richo-bahari-frontend-developer-freelance"
        },
        {
                "label": "Richo Bahari Platform Case Study",
                "url": "/projects/richobahari"
        }
],
    },
  },
  KEPK_UMJ_DETAIL: {
    id: {
      title: `Pengalaman Kerja Kontrak di FK Universitas Muhammadiyah Jakarta (SIM KEPK)`,
      text: `**Fakultas Kedokteran UMJ: Full Stack Engineer Sistem Klirens Etik KEPK**

Adyvka dipercaya mengarsiteki dan membangun sistem informasi tata kelola etik riset kesehatan (SIM KEPK) untuk Komite Etik Penelitian Kesehatan Fakultas Kedokteran Universitas Muhammadiyah Jakarta:

* **Kepatuhan Standar Internasional:** Sistem dirancang sesuai pedoman regulasi etik riset kesehatan dunia WHO dan CIOMS 2016.
* **Alur Multi-Reviewer Otomatis:** Mengotomasi alur penugasan protokol penelitian kepada reviewer independen, pencatatan revisi, dan penentuan keputusan etik (Exempted, Expedited, Full Board).
* **Penerbitan Sertifikat Klirens Digital:** Menghasilkan dokumen sertifikat persetujuan etik digital resmi ber-QR Code dengan verifikasi keabsahan instan.
* **Keamanan Data & Privasi Medis:** Menerapkan otentikasi multi-faktor (2FA) Fortify, Role-Based Access Control Spatie, dan enkripsi data protokol riset klinis.
* **Teknologi:** Laravel 12, PHP 8.2, Tailwind CSS v4, MySQL, DomPDF, dan infrastruktur cloud AWS.`,
      links: [
        {
                "label": "Detail Pengalaman FK UMJ",
                "url": "/experience/universitas-muhammadiyah-jakarta-full-stack-engineer-contract"
        },
        {
                "label": "Studi Kasus Sistem KEPK UMJ",
                "url": "/projects/kepk"
        }
],
    },
    en: {
      title: `Full Stack Engineer Contract at Faculty of Medicine UMJ (SIM KEPK)`,
      text: `**Faculty of Medicine UMJ: Full Stack Engineer for Research Ethics Governance**

Adyvka architected and delivered the centralized ethical clearance evaluation platform (SIM KEPK) for the Health Research Ethics Committee of Universitas Muhammadiyah Jakarta:

* **WHO & CIOMS 2016 Compliance:** Engineered workflow logic strictly complying with international medical research standards.
* **Automated Multi-Tier Review:** Built automated reviewer routing, blinded evaluations, revision logs, and protocol decision engines.
* **Digital Clearance Issuance:** Automated certified PDF issuance featuring cryptographic verification and tamper-evident QR codes.
* **Enterprise Security & Privacy:** Integrated Laravel Fortify 2FA, granular Spatie RBAC, and sanitized document storage for clinical proposals.
* **Core Tech Stack:** Laravel 12, PHP 8.2, Tailwind CSS v4, MySQL, DomPDF, and AWS cloud hosting.`,
      links: [
        {
                "label": "FK UMJ Full Experience Details",
                "url": "/experience/universitas-muhammadiyah-jakarta-full-stack-engineer-contract"
        },
        {
                "label": "SIM KEPK Governance Platform Case Study",
                "url": "/projects/kepk"
        }
],
    },
  },
  SMPN25_TEACHER_TRAINING: {
    id: {
      title: `Pengalaman Mengajar di SMPN 25 Depok (Pelatihan Guru & Kepala Sekolah)`,
      text: `**SMPN 25 Depok: Pelatihan Aplikasi Mobile untuk Dewan Guru & Kepala Sekolah**

* **Pencapaian Usia 16 Tahun:** Dipercaya memimpin workshop teknologi intensif selama sepekan untuk dewan guru dan kepala sekolah di SMPN 25 Depok saat masih duduk di kelas 10 SMK.
* **Menembus Batas Psikologis:** Berdiri di hadapan para pendidik senior yang telah mengajar puluhan tahun, menjembatani pedagogi konvensional dengan logika aplikasi modern.
* **Visual Block Programming:** Mengajarkan pembuatan aplikasi media pembelajaran Android menggunakan Kodular tanpa kerumitan sintaks koding teks.
* **Karya Nyata yang Dihasilkan:** Setiap guru berhasil merancang dan mengompilasi APK aplikasi pembelajaran interaktif dan kuis digital yang langsung dapat diujicobakan kepada murid di ruang kelas.`,
      links: [
        {
                "label": "Detail Pengalaman SMPN 25 Depok",
                "url": "/experience/smpn-45-app-development-instructor"
        }
],
    },
    en: {
      title: `Faculty & Principal Technology Training at SMPN 25 Depok`,
      text: `**SMPN 25 Depok: Faculty Teacher & Principal Mobile App Workshop**

* **Milestone at Age 16:** Commissioned to direct a week-long mobile technology workshop for senior educators and the school principal while still in Grade 10.
* **Bridging Generational Barriers:** Stood before educators with decades of teaching experience, transforming traditional teaching methods into event-driven mobile logic.
* **Event-Driven Visual Logic:** Guided faculty through block-based Android architecture via Kodular without syntax intimidation.
* **Shipped Classroom Deliverables:** Every participating educator successfully compiled and deployed interactive Android quiz tools directly onto classroom tablets.`,
      links: [
        {
                "label": "SMPN 25 Training Details",
                "url": "/experience/smpn-45-app-development-instructor"
        }
],
    },
  },
  SMA_LAZUARDI_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di SMA Lazuardi GCS (Web Dev Instructor & Squad Lead)`,
      text: `**SMA Lazuardi Global Compassionate School: Lead Web Dev Trainer & Squad Lead**

* **Program IDN Mengajar:** Memimpin inisiatif workshop rekayasa web frontend untuk 20 siswa klub IT SMA Lazuardi GCS Depok.
* **Kepemimpinan Squad:** Menyusun proposal outreach mandiri, survei lab komputer, dan memimpin squad asisten pengajar lintas keahlian (desain grafis dan jaringan).
* **Kurikulum Terapan:** Mengajarkan semantik HTML5, CSS layouting (Flexbox & Grid), dasar UI/UX, dan alur kerja developer profesional menggunakan Visual Studio Code.
* **Hasil:** Seluruh peserta pemula berhasil memublikasikan website profil pribadi pertama mereka.`,
      links: [
        {
                "label": "Detail Pengalaman SMA Lazuardi",
                "url": "/experience/sma-lazuardi-gcs-web-development-instructor"
        }
],
    },
    en: {
      title: `Web Development Instructor & Squad Lead at SMA Lazuardi GCS`,
      text: `**SMA Lazuardi GCS: Lead Web Dev Trainer & Cross-Discipline Squad Lead**

* **IDN Mengajar Outreach:** Led an intensive frontend web engineering workshop for 20 high school IT club students at SMA Lazuardi Global Compassionate School.
* **End-to-End Leadership:** Authored the curriculum syllabus, conducted on-site lab surveys, and coordinated a cross-functional squad of student instructors.
* **Applied Curriculum:** Taught semantic HTML5, modern CSS layouts (Flexbox & Grid), UI/UX wireframing, and VS Code developer workflows.
* **Student Impact:** Guided complete coding beginners to code and publish their very first personal portfolio websites.`,
      links: [
        {
                "label": "SMA Lazuardi Case Study",
                "url": "/experience/sma-lazuardi-gcs-web-development-instructor"
        }
],
    },
  },
  SMPN_45_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di SMPN 45 Jakarta (Mobile App Development Instructor)`,
      text: `**SMPN 45 Jakarta: Instruktur Pengembangan Aplikasi Mobile**

* **Pelatihan Siswa SMP:** Mengajarkan logika komputasi dan perancangan aplikasi Android interaktif kepada para siswa SMPN 45.
* **Platform Kodular:** Memanfaatkan visual event-driven blocks untuk mengajarkan logika variabel, percabangan IF/ELSE, dan manipulasi antarmuka mobile.`,
      links: [
        {
                "label": "Detail Mengajar SMPN 45",
                "url": "/experience/smpn-45-app-development-instructor"
        }
],
    },
    en: {
      title: `Mobile App Development Instructor at SMPN 45 Jakarta`,
      text: `**SMPN 45 Jakarta: Mobile Application Development Instructor**

* **Youth Tech Enablement:** Taught computational logic and interactive Android application design to middle school students.
* **Kodular Platform:** Deployed event-driven visual logic blocks to teach control flows, conditional statements, and UI component styling.`,
      links: [
        {
                "label": "SMPN 45 Experience Details",
                "url": "/experience/smpn-45-app-development-instructor"
        }
],
    },
  },
  SMP_INS_DEPOK_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di SMP INS Depok (Block Programming & Mobile App)`,
      text: `**SMP INS Depok: Instruktur Pemrograman Visual & Mobile App**

* **Pelatihan 30+ Santri:** Membimbing lebih dari 30 santri SMP memahami dasar-dasar logika pemrograman komputer dan pembuatan aplikasi mobile.
* **Buku Referensi:** Menggunakan materi dari buku karyanya *Membuat Game Tanpa Coding* sebagai acuan visual logika komputasi.`,
      links: [
        {
                "label": "Detail Mengajar SMP INS Depok",
                "url": "/experience/smp-ins-depok-app-development-instructor"
        }
],
    },
    en: {
      title: `Visual Programming & Mobile App Instructor at SMP INS Depok`,
      text: `**SMP INS Depok: Visual Programming & Mobile App Instructor**

* **30+ Students Mentored:** Guided over 30 junior high students in core computational algorithms and mobile app architecture.
* **Author's Curriculum:** Deployed chapters from his published book *Making Games Without Coding* as the visual reference framework.`,
      links: [
        {
                "label": "SMP INS Depok Details",
                "url": "/experience/smp-ins-depok-app-development-instructor"
        }
],
    },
  },
  SEMUT_SEMUT_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di Semut-Semut The Natural School (Game Development)`,
      text: `**Semut-Semut The Natural School: Instruktur Pengembangan Game 2D**

* **Sekolah Alam Berkarakter:** Melatih para siswa memahami konsep game engine Construct, sistem koordinat 2D, collision physics, dan game loop.
* **Karya Permainan Siswa:** Setiap kelompok siswa berhasil merancang dan memainkan game arkade interaktif buatan mereka sendiri.`,
      links: [
        {
                "label": "Detail Mengajar Semut-Semut",
                "url": "/experience/semut-semut-the-natural-school-game-development-instructor"
        }
],
    },
    en: {
      title: `2D Game Development Instructor at Semut-Semut The Natural School`,
      text: `**Semut-Semut The Natural School: 2D Game Development Instructor**

* **Creative Computational Logic:** Taught middle school cohorts fundamental game architecture using Construct, 2D physics, and game loops.
* **Playable Deliverables:** Student groups successfully built, playtested, and demonstrated their own functional arcade games.`,
      links: [
        {
                "label": "Semut-Semut Details",
                "url": "/experience/semut-semut-the-natural-school-game-development-instructor"
        }
],
    },
  },
  HAJRABYADL_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di Hajrabyadl (Web Development Instructor)`,
      text: `**Hajrabyadl: Instruktur Frontend Coding & Layout Web Responsif**

* **Workshop Web Development:** Membimbing siswa dalam memahami struktur web modern, tata letak semantik HTML5, dan teknik CSS responsif lintas perangkat.`,
      links: [
        {
                "label": "Detail Mengajar Hajrabyadl",
                "url": "/experience/hajrabyadl-web-development-instructor"
        }
],
    },
    en: {
      title: `Web Development Instructor at Hajrabyadl`,
      text: `**Hajrabyadl: Frontend Coding & Responsive Web Instructor**

* **Applied Frontend Training:** Mentored students in responsive web architecture, semantic layouting, and modern CSS frameworks across devices.`,
      links: [
        {
                "label": "Hajrabyadl Details",
                "url": "/experience/hajrabyadl-web-development-instructor"
        }
],
    },
  },
  AL_ANSHAR_DESIGN_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di Al-Anshar (App Design Instructor - Figma UI/UX)`,
      text: `**Al-Anshar Boarding School: Instruktur Desain Aplikasi & UI/UX**

* **Desain Antarmuka Digital:** Melatih para santri dalam menggunakan Figma untuk wireframing, pemilihan palet warna, tipografi digital, dan pembuatan prototipe interaktif.`,
      links: [
        {
                "label": "Detail Al-Anshar App Design",
                "url": "/experience/al-anshar-app-design-instructor"
        }
],
    },
    en: {
      title: `App Design Instructor (Figma UI/UX) at Al-Anshar Boarding School`,
      text: `**Al-Anshar Boarding School: UI/UX App Design Instructor**

* **Digital Interface Design:** Guided students in Figma wireframing, color theory, typography hierarchy, and clickable mobile prototypes.`,
      links: [
        {
                "label": "Al-Anshar Design Details",
                "url": "/experience/al-anshar-app-design-instructor"
        }
],
    },
  },
  AL_ANSHAR_GAME_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di Al-Anshar (Game Development Instructor)`,
      text: `**Al-Anshar Boarding School: Instruktur Logika Game 2D**

* **Pendidikan Logika Game:** Membimbing 25+ santri asrama membangun game arkade 2D dari kanvas kosong hingga rilis playable game.`,
      links: [
        {
                "label": "Detail Al-Anshar Game Development",
                "url": "/experience/al-anshar-game-development-instructor"
        }
],
    },
    en: {
      title: `Game Development Instructor at Al-Anshar Boarding School`,
      text: `**Al-Anshar Boarding School: 2D Game Development Instructor**

* **Arcade Logic Engineering:** Instructed 25+ boarding school students in designing, scripting, and deploying complete 2D arcade games.`,
      links: [
        {
                "label": "Al-Anshar Game Dev Details",
                "url": "/experience/al-anshar-game-development-instructor"
        }
],
    },
  },
  MTS_YASMINE_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di MTs Yasmine (Graphic Design Instructor)`,
      text: `**MTs Yasmine: Instruktur Desain Grafis & Komposisi Visual**

* **Literasi Visual:** Mengajarkan teori warna, hierarki tipografi, dan penyusunan poster publikasi digital media sekolah.`,
      links: [
        {
                "label": "Detail Mengajar MTs Yasmine",
                "url": "/experience/mts-yasmine-design-instructor"
        }
],
    },
    en: {
      title: `Graphic Design Instructor at MTs Yasmine`,
      text: `**MTs Yasmine: Graphic Design & Visual Layout Instructor**

* **Visual Literacy:** Taught layout composition, color theory, and digital asset design for school publications.`,
      links: [
        {
                "label": "MTs Yasmine Details",
                "url": "/experience/mts-yasmine-design-instructor"
        }
],
    },
  },
  GRIYYA_SUNNAH_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di Griyya Sunnah (Game Development Instructor)`,
      text: `**Griyya Sunnah: Instruktur Logika Komputasi & Game 2D**

* **Computational Thinking:** Mengenalkan dasar logika percabangan, perulangan, dan pemecahan masalah algoritma melalui game interaktif.`,
      links: [
        {
                "label": "Detail Mengajar Griyya Sunnah",
                "url": "/experience/griyya-sunnah-game-development-instructor"
        }
],
    },
    en: {
      title: `Computational Logic & Game Instructor at Griyya Sunnah`,
      text: `**Griyya Sunnah: Computational Logic & Game Instructor**

* **Computational Thinking:** Introduced basic conditional loops, collision triggers, and algorithmic problem-solving through interactive 2D games.`,
      links: [
        {
                "label": "Griyya Sunnah Details",
                "url": "/experience/griyya-sunnah-game-development-instructor"
        }
],
    },
  },
  BACKPACKER_DETAIL: {
    id: {
      title: `Pengalaman Ekspedisi: Solo Backpacker 3 Negara (Singapura, Malaysia, Thailand)`,
      text: `**Solo Backpacker 3 Negara: Singapura, Malaysia, Thailand**

* **Seleksi Terpilih di Usia 15 Tahun:** Terpilih sebagai salah satu dari hanya 9 delegasi terbaik dari ratusan pendaftar program IDN International Backpacker.
* **100% Didanai Mandiri (Self-Funded):** Seluruh tiket penerbangan, transit antar-negara, akomodasi, dan konsumsi dibiayai mandiri dari hasil tabungan freelance koding dan desain tanpa membebani orang tua.
* **Kemandirian Navigasi Internasional:** Menavigasi sistem transit multi-negara (MRT, bus lintas perbatasan, kereta antar-kota) secara independen.
* **Komunikasi Global:** Melakukan wawancara langsung dengan warga lokal dalam bahasa Inggris dan memecahkan berbagai tantangan situasi darurat di lapangan.`,
      links: [
        {
                "label": "Studi Kasus Solo Backpacker",
                "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
        }
],
    },
    en: {
      title: `Solo Backpacker Across 3 Countries (Singapore, Malaysia, Thailand)`,
      text: `**Solo Backpacker Across 3 Countries: Singapore, Malaysia, Thailand**

* **Top 9 Selection at Age 15:** Selected among only 9 delegates out of hundreds of applicants for the IDN International Backpacker program.
* **100% Self-Funded via Freelance:** Financed entirely from savings earned through freelance web development and design without parental financial aid.
* **International Cross-Border Transit:** Independently navigated international transport networks (MRT lines, cross-border express buses, regional rail).
* **Conversational Fluency & Crisis Solving:** Conducted field interviews with locals in English and resolved real-world transit crises under pressure.`,
      links: [
        {
                "label": "Solo Backpacker Case Study",
                "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
        }
],
    },
  },
  SEMARANG_SURVIVAL_DETAIL: {
    id: {
      title: `Pengalaman Survival: Business & Life Survival di Semarang (PT Intisel)`,
      text: `**PT Intisel Semarang: Business & Life Survival Program**

* **Tantangan Modal Nol Rupiah (Rp 0):** Diterjunkan langsung ke kota Semarang bersama tim dengan modal awal nol rupiah untuk menguji ketangguhan mental dan daya juang.
* **Inisiatif Bisnis Nyata:** Berhasil bertahan hidup dan menghasilkan profit bersih melalui perdagangan langsung serta logistik telekomunikasi lapangan.`,
      links: [
        {
                "label": "Detail Survival Semarang",
                "url": "/experience/pt-intisel-semarang-business-life-survival"
        }
],
    },
    en: {
      title: `Business & Life Survival in Semarang (PT Intisel)`,
      text: `**PT Intisel Semarang: Business & Life Survival Challenge**

* **Zero Capital Survival:** Deployed to Semarang with Rp 0 initial cash capital to test entrepreneurial tenacity, grit, and psychological composure.
* **Positive Cash Flow Generated:** Successfully sustained lodging and food through agile direct commerce and telecommunications logistical support.`,
      links: [
        {
                "label": "Semarang Survival Details",
                "url": "/experience/pt-intisel-semarang-business-life-survival"
        }
],
    },
  },
  IT_FEST_DETAIL: {
    id: {
      title: `Pengalaman Kepemimpinan: Koordinator Acara Kompetisi IT FEST 2025`,
      text: `**IT FEST 2025: Koordinator Acara Kompetisi Teknologi Nasional**

* **Skala Nasional 500+ Peserta:** Memimpin divisi kepanitiaan acara festival teknologi tingkat nasional yang melibatkan lebih dari 500 peserta dari berbagai penjuru nusantara.
* **Manajemen Panggung & Operasional:** Mengatur jalannya rundown, sinkronisasi juri teknis, dan penyelesaian kendala di lapangan secara sigap.`,
      links: [
        {
                "label": "Detail IT FEST 2025",
                "url": "/experience/it-fest-2025-competition-event-coordinator"
        }
],
    },
    en: {
      title: `Competition Event Coordinator at IT FEST 2025`,
      text: `**IT FEST 2025: National Tech Competition Event Coordinator**

* **Nationwide Scale (500+ Competitors):** Led operational and stage coordination for a national technology festival hosting over 500 participants across Indonesia.
* **Crisis Coordination:** Managed stage rundowns, technical judging briefings, and live emergency problem-solving.`,
      links: [
        {
                "label": "IT FEST 2025 Details",
                "url": "/experience/it-fest-2025-competition-event-coordinator"
        }
],
    },
  },
  OSIS_LEADERSHIP_DETAIL: {
    id: {
      title: `Pengalaman Kepemimpinan: Ketua Divisi Acara OSIS SMK IDN (2 Periode)`,
      text: `**OSIS SMK IDN Boarding School: Ketua Divisi Acara (2 Periode Berturut-turut)**

* **Kepemimpinan 2 Periode:** Dipercaya memimpin divisi acara selama 2 periode dalam merancang dan mengeksekusi puluhan agenda besar sekolah berasrama.
* **Manajemen Waktu & Empati:** Mengarahkan ratusan santri dengan kepemimpinan empatik di sela-sela jadwal koding dan proyek teknik yang padat.`,
      links: [
        {
                "label": "Detail Kepemimpinan OSIS",
                "url": "/experience/idn-student-council-event-division-leader"
        }
],
    },
    en: {
      title: `Student Council Event Division Leader (2 Terms) at SMK IDN`,
      text: `**Student Council Event Division Leader (2 Terms) at SMK IDN**

* **2 Consecutive Terms:** Directed event conceptualization, budgeting, stage production, and emergency handling for all major campus events.
* **Empathetic Leadership:** Directed hundreds of boarding students with composure while maintaining rigorous engineering deliverables.`,
      links: [
        {
                "label": "Student Council Details",
                "url": "/experience/idn-student-council-event-division-leader"
        }
],
    },
  },
  BARMUS_VOLUNTRIP_DETAIL: {
    id: {
      title: `Pengalaman Sosial: Barmus Voluntrip (Volunteer Event Organizer)`,
      text: `**Barmus Voluntrip: Koordinator Relawan & Dokumentasi Sosial Kemanusiaan**

* **Aksi Sosial Pedesaan:** Mengorganisir program bakti sosial, edukasi teknologi, dan bantuan kemanusiaan ke masyarakat pelosok dan panti asuhan.`,
      links: [
        {
                "label": "Detail Barmus Voluntrip",
                "url": "/experience/barmus-voluntrip-volunteer-event-organizer"
        }
],
    },
    en: {
      title: `Volunteer Event Organizer at Barmus Voluntrip`,
      text: `**Barmus Voluntrip: Volunteer Event Coordinator & Media Producer**

* **Community Outreach:** Organized social volunteer campaigns, youth tech workshops, and humanitarian aid across underserved communities.`,
      links: [
        {
                "label": "Barmus Voluntrip Details",
                "url": "/experience/barmus-voluntrip-volunteer-event-organizer"
        }
],
    },
  },
  LIVE_IN_DETAIL: {
    id: {
      title: `Pengalaman Sosial: Live In Rural Immersion (Pedesaan Jawa Barat)`,
      text: `**IDN Boarding School Live In: Penyerapan Sosial di Pedesaan Jawa Barat**

* **Hidup Bersama Petani:** Tinggal dan membaur selama sepekan penuh bersama keluarga petani tradisional di pelosok desa.
* **Karakter Empati:** Menumbuhkan rasa syukur, kerendahan hati, dan empati mendalam yang melandasi filosofi pembuatan perangkat lunak yang memanusiakan pengguna.`,
      links: [
        {
                "label": "Detail Live In Pedesaan",
                "url": "/experience/idn-boarding-school-live-in-rural-immersion"
        }
],
    },
    en: {
      title: `Rural Immersion (Live In) in Rural West Java`,
      text: `**IDN Boarding School: Rural Immersion Program (Live In)**

* **Living with Farming Families:** Lived for a full week integrated with a traditional agrarian family in rural West Java.
* **Humility & Empathy:** Built lasting social empathy and grounded perspective that directly shapes his user-first engineering philosophy.`,
      links: [
        {
                "label": "Live In Details",
                "url": "/experience/idn-boarding-school-live-in-rural-immersion"
        }
],
    },
  },

  CERT_CS50: {
    id: {
      title: `Sertifikat: CS50: Introduction to Computer Science (Harvard University)`,
      text: `**Sertifikat Resmi: CS50: Introduction to Computer Science**

* **Institusi Penerbit:** Harvard University
* **Waktu & Kredensial:** Diterbitkan Oct 2025 (ID Kredensial: \`CS50x-2025-HARVARD\`)
* **Beban Pembelajaran:** 120+ Hours · Verified Curriculum
* **Bidang Keahlian:** Computer Science & Systems

**Apa yang Dipelajari & Kurikulum Utama:**
Harvard University's flagship computer science curriculum covering algorithmic problem-solving, computational thinking, low-level memory allocation, and software architecture across C, Python, SQL, and web technologies.
* **Keahlian yang Dikuasai:** Algorithms, Data Structures, C, Python, SQL, Memory Management, Systems Thinking
* Algorithmic complexity, sorting/searching paradigms, and Big-O notation
* Manual pointer arithmetic, heap vs. stack memory allocation, and buffer safety in C
* Relational database schema modeling, queries, and ACID transactions in SQL
* Full-stack web application engineering with Python, Flask, and asynchronous JavaScript

**Apa yang Didapatkan & Implementasi Nyata:**
Rebuilt fundamental mental models of runtime execution by understanding raw memory allocations and pointer mechanics in C. This low-level grounding directly elevates debugging speed and memory efficiency in modern web and mobile apps.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/cs50-introduction-to-computer-science"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://cs50.harvard.edu/certificates/"
        }
],
    },
    en: {
      title: `Certificate: CS50: Introduction to Computer Science (Harvard University)`,
      text: `**Verified Credential: CS50: Introduction to Computer Science**

* **Issuing Body:** Harvard University
* **Issue Date & Credential ID:** Oct 2025 (ID: \`CS50x-2025-HARVARD\`)
* **Verified Effort:** 120+ Hours · Verified Curriculum
* **Specialization Track:** Computer Science & Systems

**Curriculum & What Was Learned:**
Harvard University's flagship computer science curriculum covering algorithmic problem-solving, computational thinking, low-level memory allocation, and software architecture across C, Python, SQL, and web technologies.
* **Core Skills Mastered:** Algorithms, Data Structures, C, Python, SQL, Memory Management, Systems Thinking
* Algorithmic complexity, sorting/searching paradigms, and Big-O notation
* Manual pointer arithmetic, heap vs. stack memory allocation, and buffer safety in C
* Relational database schema modeling, queries, and ACID transactions in SQL
* Full-stack web application engineering with Python, Flask, and asynchronous JavaScript

**Takeaways & Practical Application:**
Rebuilt fundamental mental models of runtime execution by understanding raw memory allocations and pointer mechanics in C. This low-level grounding directly elevates debugging speed and memory efficiency in modern web and mobile apps.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/cs50-introduction-to-computer-science"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://cs50.harvard.edu/certificates/"
        }
],
    },
  },
  CERT_CODING_CAMP: {
    id: {
      title: `Sertifikat & Transkrip: Coding Camp Full Stack Developer (DBS Foundation × Dicoding)`,
      text: `**Sertifikat & Transkrip Nilai Resmi: Coding Camp 2026**

* **Penyelenggara:** Dicoding Indonesia × DBS Foundation
* **Cohort ID:** \`CFS211D6Y054\` (Status: Full Graduated)
* **Sekolah:** SMK IDN Boarding School (Guru: Dion Ahza Rabbani)
* **Total Jam Belajar:** 766 Jam Kurikulum Intensif
* **Nilai Rata-Rata Kumulatif:** 89 / 100 (Predikat Nilai A)
* **Kehadiran:** 94% Sesi Wajib (90% Sesi Keseluruhan)
* **Proyek Akhir (Capstone):** RuangTumbuh (Tim CC26-PS050, Nilai 93 / 100, Predikat A, 250 Jam)

**Ringkasan 10 Modul dan Nilai Transkrip:**
1. Memulai Dasar Pemrograman (CCMT01): Nilai 90 (Grade A)
2. Pengenalan Ke Logika Pemrograman (CCMT02): Nilai 93 (Grade A)
3. Belajar Dasar Cloud & Gen AI di AWS (CCMT03): Nilai 93 (Grade A)
4. Belajar Dasar Pemrograman Web (CCFS01): Nilai 85 (Grade A)
5. Belajar Dasar Pemrograman JavaScript (CCFS02): Nilai 83 (Grade B)
6. Belajar Front-End Web Pemula (CCFS03): Nilai 93 (Grade A)
7. Belajar Membuat Web dengan React (CCFS04): Nilai 88 (Grade A)
8. Belajar Back-End Pemula JavaScript (CCFS05): Nilai 93 (Grade A)
9. Capstone / Final Project (RuangTumbuh): Nilai 93 (Grade A)
10. Soft Skills & Career Development: Nilai 83 (Grade B)`,
      links: [
        {
          "label": "Lihat Detail Sertifikat & Transkrip",
          "url": "/certificates/coding-camp-full-stack-developer"
        },
        {
          "label": "Lihat Proyek Capstone RuangTumbuh",
          "url": "/projects/ruangtumbuh"
        }
      ],
    },
    en: {
      title: `Certificate & Transcript: Coding Camp Full Stack Developer (DBS Foundation × Dicoding)`,
      text: `**Official Credential & Final Academic Transcript: Coding Camp 2026**

* **Issuing Body:** Dicoding Indonesia × DBS Foundation
* **Cohort ID:** \`CFS211D6Y054\` (Status: Full Graduated)
* **Institution:** SMK IDN Boarding School (Instructor: Dion Ahza Rabbani)
* **Total Curriculum Effort:** 766 Verified Hours
* **Cumulative Average Score:** 89 / 100 (Final Grade A Distinction)
* **Attendance Rate:** 94% Mandatory Sessions (90% Overall)
* **Capstone Project:** RuangTumbuh (Team CC26-PS050, Score 93 / 100, Grade A, 250 Hours)

**Transcribed Course Performance (10 Modules):**
1. Software Developer Career Foundations (CCMT01): Score 90 (Grade A)
2. Programming Logic Fundamentals (CCMT02): Score 93 (Grade A)
3. Cloud & Generative AI on AWS (CCMT03): Score 93 (Grade A)
4. Web Programming Foundations (CCFS01): Score 85 (Grade A)
5. JavaScript Programming Fundamentals (CCFS02): Score 83 (Grade B)
6. Front-End Web Development (CCFS03): Score 93 (Grade A)
7. Modern React Web Development (CCFS04): Score 88 (Grade A)
8. Back-End Development with JavaScript (CCFS05): Score 93 (Grade A)
9. Capstone Project (RuangTumbuh): Score 93 (Grade A)
10. Soft Skills & Career Development: Score 83 (Grade B)`,
      links: [
        {
          "label": "View Certificate & Full Transcript",
          "url": "/certificates/coding-camp-full-stack-developer"
        },
        {
          "label": "Explore Capstone Project RuangTumbuh",
          "url": "/projects/ruangtumbuh"
        }
      ],
    },
  },
  CODING_CAMP_TRANSCRIPT_DEEPDIVE: {
    id: {
      title: "Transkrip Nilai Akademik & Capstone RuangTumbuh di Coding Camp 2026",
      text: `**Transkrip Nilai Akademik Resmi: DBS Foundation Coding Camp 2026**

Adyvka menyelesaikan program intensif Full Stack Developer Track (Dicoding Indonesia × DBS Foundation) dengan predikat kelulusan sempurna (Full Graduated):

* **Informasi Peserta:** Rafif Sava Adyvka Pratama (ID Cohort: \`CFS211D6Y054\`)
* **Asal Sekolah:** SMK IDN Boarding School Bogor (Guru Pendamping: Dion Ahza Rabbani)
* **Total Beban Belajar:** 766 Jam Pembelajaran Terverifikasi
* **Indeks Prestasi / Nilai Rata-Rata:** 89 / 100 (Predikat Nilai A)
* **Tingkat Kehadiran Sesi:** 94% Sesi Wajib (90% Sesi Keseluruhan)

**Daftar Nilai 10 Modul Kurikulum:**
1. **CCMT01** Memulai Dasar Pemrograman untuk Menjadi Pengembang Software (16 Jam): Nilai 90 (Grade A)
2. **CCMT02** Pengenalan ke Logika Pemrograman (Programming Logic 101) (16 Jam): Nilai 93 (Grade A)
3. **CCMT03** Belajar Dasar Cloud dan Generative AI di AWS (28 Jam): Nilai 93 (Grade A)
4. **CCFS01** Belajar Dasar Pemrograman Web (48 Jam): Nilai 85 (Grade A)
5. **CCFS02** Belajar Dasar Pemrograman JavaScript (53 Jam): Nilai 83 (Grade B)
6. **CCFS03** Belajar Membuat Front-End Web untuk Pemula (53 Jam): Nilai 93 (Grade A)
7. **CCFS04** Belajar Membuat Aplikasi Web dengan React (70 Jam): Nilai 88 (Grade A)
8. **CCFS05** Belajar Membuat Aplikasi Back-End Pemula dengan JavaScript (75 Jam): Nilai 93 (Grade A)
9. **CCCP01** Capstone / Final Project RuangTumbuh (250 Jam): Nilai 93 (Grade A)
10. **CCSK01** Soft Skills & Career Development (157 Jam): Nilai 83 (Grade B)

**Pencapaian Proyek Akhir (Capstone) RuangTumbuh:**
* **Tim:** CC26-PS050
* **Peran:** Full Stack Lead & Architecture Designer
* **Nilai Capstone:** 93 / 100 (Predikat Nilai A)
* **Karya Nyata:** Platform edukasi pertukaran keahlian peer-to-peer berbasis Time Banking dengan PostgreSQL atomic transaction, Socket.io real-time chat, dan Google Gemini AI. Platform ini juga memenangkan Juara 2 Nasional Web Design di PNB IT Competition #18 (2026).`,
      links: [
        {
          label: "Buka Transkrip Nilai & Detail Sertifikat",
          url: "/certificates/coding-camp-full-stack-developer"
        },
        {
          label: "Buka Studi Kasus Capstone RuangTumbuh",
          url: "/projects/ruangtumbuh"
        },
        {
          label: "Jelajahi Seluruh 23 Sertifikat Profesional",
          url: "/certificates"
        }
      ]
    },
    en: {
      title: "Academic Transcript & RuangTumbuh Capstone in Coding Camp 2026",
      text: `**Official Academic Transcript: DBS Foundation Coding Camp 2026**

Adyvka graduated with distinction from the intensive Full Stack Developer Track delivered by Dicoding Indonesia in partnership with DBS Foundation:

* **Student Identity:** Rafif Sava Adyvka Pratama (Cohort ID: \`CFS211D6Y054\`)
* **Partner Institution:** SMK IDN Boarding School Bogor (Instructor: Dion Ahza Rabbani)
* **Total Curriculum Effort:** 766 Verified Learning Hours
* **Cumulative Average Score:** 89 / 100 (Grade A Distinction)
* **Session Attendance Rate:** 94% Mandatory Sessions (90% Overall)

**Complete 10-Module Transcribed Breakdown:**
1. **CCMT01** Software Developer Career Foundations (16 Hours): Score 90 (Grade A)
2. **CCMT02** Programming Logic Fundamentals (16 Hours): Score 93 (Grade A)
3. **CCMT03** Cloud and Generative AI Fundamentals on AWS (28 Hours): Score 93 (Grade A)
4. **CCFS01** Web Programming Fundamentals (48 Hours): Score 85 (Grade A)
5. **CCFS02** JavaScript Programming Fundamentals (53 Hours): Score 83 (Grade B)
6. **CCFS03** Front-End Web Development for Beginners (53 Hours): Score 93 (Grade A)
7. **CCFS04** Modern React Web Application Development (70 Hours): Score 88 (Grade A)
8. **CCFS05** Back-End Application Development with JavaScript (75 Hours): Score 93 (Grade A)
9. **CCCP01** Capstone / Final Project RuangTumbuh (250 Hours): Score 93 (Grade A)
10. **CCSK01** Soft Skills and Career Readiness (157 Hours): Score 83 (Grade B)

**Capstone Performance: RuangTumbuh:**
* **Team:** CC26-PS050
* **Role:** Full Stack Lead & Architecture Designer
* **Capstone Evaluation:** 93 / 100 (Grade A Distinction)
* **Delivered System:** A peer-to-peer educational time banking ecosystem featuring atomic PostgreSQL balance transfers, Socket.io real-time chat, and Google Gemini AI assistance. The same system also earned 2nd Place National Web Design Honors at PNB IT Competition #18 (2026).`,
      links: [
        {
          label: "View Official Transcript & Certificate Details",
          url: "/certificates/coding-camp-full-stack-developer"
        },
        {
          label: "Explore RuangTumbuh Capstone Case Study",
          url: "/projects/ruangtumbuh"
        },
        {
          label: "Browse All 23 Professional Certifications",
          url: "/certificates"
        }
      ]
    }
  },
  CERT_FRONTEND_WEB: {
    id: {
      title: `Sertifikat: Frontend Web Developer (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Frontend Web Developer**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan Mar 2026 (ID Kredensial: \`DICODING-FE-2026-DEV\`)
* **Beban Pembelajaran:** 60+ Hours · Professional Track
* **Bidang Keahlian:** Modern Frontend Architecture

**Apa yang Dipelajari & Kurikulum Utama:**
Professional certification validating mastery over responsive web development, modern CSS layout paradigms, DOM manipulation, client-side data binding, and web performance optimization.
* **Keahlian yang Dikuasai:** HTML5, CSS3, JavaScript, Responsive Design, Accessibility (a11y), DOM Manipulation
* Semantic HTML5 architecture and WCAG AA accessibility compliance standards
* Modern layout systems leveraging Flexbox, multi-column CSS Grid, and custom properties
* Vanilla JavaScript DOM traversal, event delegation, and asynchronous REST streaming
* Fluid responsive typography and breakpoint choreographies for cross-device resilience

**Apa yang Didapatkan & Implementasi Nyata:**
Formed the bedrock of my UI engineering precision, ensuring that all client and portfolio applications achieve sub-second load times and maintain flawless layout responsiveness across mobile and desktop.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/frontend-web-developer"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Frontend Web Developer (Dicoding Indonesia)`,
      text: `**Verified Credential: Frontend Web Developer**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** Mar 2026 (ID: \`DICODING-FE-2026-DEV\`)
* **Verified Effort:** 60+ Hours · Professional Track
* **Specialization Track:** Modern Frontend Architecture

**Curriculum & What Was Learned:**
Professional certification validating mastery over responsive web development, modern CSS layout paradigms, DOM manipulation, client-side data binding, and web performance optimization.
* **Core Skills Mastered:** HTML5, CSS3, JavaScript, Responsive Design, Accessibility (a11y), DOM Manipulation
* Semantic HTML5 architecture and WCAG AA accessibility compliance standards
* Modern layout systems leveraging Flexbox, multi-column CSS Grid, and custom properties
* Vanilla JavaScript DOM traversal, event delegation, and asynchronous REST streaming
* Fluid responsive typography and breakpoint choreographies for cross-device resilience

**Takeaways & Practical Application:**
Formed the bedrock of my UI engineering precision, ensuring that all client and portfolio applications achieve sub-second load times and maintain flawless layout responsiveness across mobile and desktop.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/frontend-web-developer"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_DATA_ANALYST: {
    id: {
      title: `Sertifikat: Belajar Dasar Data Analyst (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Belajar Dasar Data Analyst**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`DICODING-DA-2024-BASE\`)
* **Beban Pembelajaran:** 40+ Hours · Foundational Track
* **Bidang Keahlian:** Data Analytics & Visualization

**Apa yang Dipelajari & Kurikulum Utama:**
Comprehensive foundation in data lifecycle management, data cleansing, statistical exploration, and insight extraction for informed product and engineering decisions.
* **Keahlian yang Dikuasai:** Data Analysis, Data Cleansing, Data Visualization, Spreadsheets, Statistics, Data Wrangling
* Data wrangling, deduplication, and anomaly identification workflows
* Descriptive statistical summaries (variance, standard deviation, frequency distribution)
* Data visualization design principles and narrative dashboard construction
* Translating raw telemetry datasets into actionable engineering and product KPIs

**Apa yang Didapatkan & Implementasi Nyata:**
Enabled structured interpretation of application telemetry and user engagement data, allowing me to build data-informed features and track performance metrics across interactive web applications.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/belajar-dasar-data-analyst"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Belajar Dasar Data Analyst (Dicoding Indonesia)`,
      text: `**Verified Credential: Belajar Dasar Data Analyst**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2024 (ID: \`DICODING-DA-2024-BASE\`)
* **Verified Effort:** 40+ Hours · Foundational Track
* **Specialization Track:** Data Analytics & Visualization

**Curriculum & What Was Learned:**
Comprehensive foundation in data lifecycle management, data cleansing, statistical exploration, and insight extraction for informed product and engineering decisions.
* **Core Skills Mastered:** Data Analysis, Data Cleansing, Data Visualization, Spreadsheets, Statistics, Data Wrangling
* Data wrangling, deduplication, and anomaly identification workflows
* Descriptive statistical summaries (variance, standard deviation, frequency distribution)
* Data visualization design principles and narrative dashboard construction
* Translating raw telemetry datasets into actionable engineering and product KPIs

**Takeaways & Practical Application:**
Enabled structured interpretation of application telemetry and user engagement data, allowing me to build data-informed features and track performance metrics across interactive web applications.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/belajar-dasar-data-analyst"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_BACKEND: {
    id: {
      title: `Sertifikat: Belajar Membuat Aplikasi Back-End (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Belajar Membuat Aplikasi Back-End**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`DICODING-BE-2024-REST\`)
* **Beban Pembelajaran:** 55+ Hours · Intermediate Track
* **Bidang Keahlian:** Backend Engineering & REST APIs

**Apa yang Dipelajari & Kurikulum Utama:**
Technical certification in server-side development with Node.js and Hapi framework, emphasizing RESTful API architecture, HTTP methods, payload validation, and clean architectural separation.
* **Keahlian yang Dikuasai:** Node.js, Hapi Framework, RESTful API, Postman, Backend Architecture, JSON APIs
* RESTful route routing, query parameters, and dynamic path parameters
* Payload validation with schema validators (Joi) and proper HTTP status codes
* In-memory caching and persistent storage integration for CRUD workflows
* Postman automated API testing collections and contract integration validation

**Apa yang Didapatkan & Implementasi Nyata:**
Provided the architectural blueprint for designing predictable RESTful endpoints, used extensively during backend development for company dashboards and national competition platforms.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/belajar-membuat-aplikasi-back-end"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Belajar Membuat Aplikasi Back-End (Dicoding Indonesia)`,
      text: `**Verified Credential: Belajar Membuat Aplikasi Back-End**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2024 (ID: \`DICODING-BE-2024-REST\`)
* **Verified Effort:** 55+ Hours · Intermediate Track
* **Specialization Track:** Backend Engineering & REST APIs

**Curriculum & What Was Learned:**
Technical certification in server-side development with Node.js and Hapi framework, emphasizing RESTful API architecture, HTTP methods, payload validation, and clean architectural separation.
* **Core Skills Mastered:** Node.js, Hapi Framework, RESTful API, Postman, Backend Architecture, JSON APIs
* RESTful route routing, query parameters, and dynamic path parameters
* Payload validation with schema validators (Joi) and proper HTTP status codes
* In-memory caching and persistent storage integration for CRUD workflows
* Postman automated API testing collections and contract integration validation

**Takeaways & Practical Application:**
Provided the architectural blueprint for designing predictable RESTful endpoints, used extensively during backend development for company dashboards and national competition platforms.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/belajar-membuat-aplikasi-back-end"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_GIT_GITHUB: {
    id: {
      title: `Sertifikat: Belajar Dasar Git dengan GitHub (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Belajar Dasar Git dengan GitHub**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`DICODING-GIT-2024-HUB\`)
* **Beban Pembelajaran:** 30+ Hours · Foundational Track
* **Bidang Keahlian:** DevOps & Version Control

**Apa yang Dipelajari & Kurikulum Utama:**
Rigorous curriculum covering distributed version control with Git and collaborative open-source workflows on GitHub.
* **Keahlian yang Dikuasai:** Git, GitHub, Branching, Merge Conflicts, Version Control, Code Review
* Branching strategies (feature branches, hotfixes, and trunk-based workflows)
* Resolving complex merge conflicts and rebasing commits cleanly
* Atomic commit discipline and descriptive semantic commit messaging
* Pull Request workflows, peer code reviews, and remote repository synchronization

**Apa yang Didapatkan & Implementasi Nyata:**
Instilled clean version control hygiene that eliminated code collisions and streamlined collaboration across all competition engineering teams and open-source contributions.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/belajar-dasar-git-dengan-github"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Belajar Dasar Git dengan GitHub (Dicoding Indonesia)`,
      text: `**Verified Credential: Belajar Dasar Git dengan GitHub**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2024 (ID: \`DICODING-GIT-2024-HUB\`)
* **Verified Effort:** 30+ Hours · Foundational Track
* **Specialization Track:** DevOps & Version Control

**Curriculum & What Was Learned:**
Rigorous curriculum covering distributed version control with Git and collaborative open-source workflows on GitHub.
* **Core Skills Mastered:** Git, GitHub, Branching, Merge Conflicts, Version Control, Code Review
* Branching strategies (feature branches, hotfixes, and trunk-based workflows)
* Resolving complex merge conflicts and rebasing commits cleanly
* Atomic commit discipline and descriptive semantic commit messaging
* Pull Request workflows, peer code reviews, and remote repository synchronization

**Takeaways & Practical Application:**
Instilled clean version control hygiene that eliminated code collisions and streamlined collaboration across all competition engineering teams and open-source contributions.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/belajar-dasar-git-dengan-github"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_GRAPHIC_DESIGN: {
    id: {
      title: `Sertifikat: Graphic Design Fundamentals (Canva / Course)`,
      text: `**Sertifikat Resmi: Graphic Design Fundamentals**

* **Institusi Penerbit:** Canva / Course
* **Waktu & Kredensial:** Diterbitkan 2023 (ID Kredensial: \`CANVA-DESIGN-2023\`)
* **Beban Pembelajaran:** 25+ Hours · Creative Track
* **Bidang Keahlian:** Visual Design & Composition

**Apa yang Dipelajari & Kurikulum Utama:**
Core principles of graphic design, color psychology, visual hierarchy, layout grid systems, and brand consistency for digital and print media.
* **Keahlian yang Dikuasai:** Graphic Design, Canva, Color Theory, Visual Hierarchy, Typography, Composition
* Color theory, harmony palettes, and contrast accessibility guidelines
* Grid alignment, white space balance, and focal point orchestration
* Typography pairings (display typefaces vs. body copy legibility)
* Multi-format asset exporting for cross-platform marketing collateral

**Apa yang Didapatkan & Implementasi Nyata:**
Helped bridge the gap between engineering and visual aesthetics, leading directly to winning the Best Poster Award at the Idul Adha Festival and crafting polished portfolio visuals.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/graphic-design-fundamentals"
        }
],
    },
    en: {
      title: `Certificate: Graphic Design Fundamentals (Canva / Course)`,
      text: `**Verified Credential: Graphic Design Fundamentals**

* **Issuing Body:** Canva / Course
* **Issue Date & Credential ID:** 2023 (ID: \`CANVA-DESIGN-2023\`)
* **Verified Effort:** 25+ Hours · Creative Track
* **Specialization Track:** Visual Design & Composition

**Curriculum & What Was Learned:**
Core principles of graphic design, color psychology, visual hierarchy, layout grid systems, and brand consistency for digital and print media.
* **Core Skills Mastered:** Graphic Design, Canva, Color Theory, Visual Hierarchy, Typography, Composition
* Color theory, harmony palettes, and contrast accessibility guidelines
* Grid alignment, white space balance, and focal point orchestration
* Typography pairings (display typefaces vs. body copy legibility)
* Multi-format asset exporting for cross-platform marketing collateral

**Takeaways & Practical Application:**
Helped bridge the gap between engineering and visual aesthetics, leading directly to winning the Best Poster Award at the Idul Adha Festival and crafting polished portfolio visuals.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/graphic-design-fundamentals"
        }
],
    },
  },
  CERT_C_MEMULAI: {
    id: {
      title: `Sertifikat: Memulai Pemrograman Dengan C (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Memulai Pemrograman Dengan C**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2023 (ID Kredensial: \`DICODING-C-2023-START\`)
* **Beban Pembelajaran:** 45+ Hours · Foundational Track
* **Bidang Keahlian:** Low-Level Programming

**Apa yang Dipelajari & Kurikulum Utama:**
Foundational programming course in C covering syntax fundamentals, basic data types, memory representations, control structures, and modular function architecture.
* **Keahlian yang Dikuasai:** C Language, Control Flow, Memory Basics, Pointers Intro, Structured Programming
* Primitive datatypes, memory size allocations, and explicit type casting
* Control flow constructs (nested conditionals, iteration loops, switch statements)
* Custom modular functions, pass-by-value semantics, and lexical scope boundaries
* Arrays, character buffers, and basic terminal input/output operations

**Apa yang Didapatkan & Implementasi Nyata:**
Provided deep appreciation for compile-time vs runtime execution, laying an indispensable foundation before tackling CS50 and modern web runtimes.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/memulai-pemrograman-dengan-c"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Memulai Pemrograman Dengan C (Dicoding Indonesia)`,
      text: `**Verified Credential: Memulai Pemrograman Dengan C**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2023 (ID: \`DICODING-C-2023-START\`)
* **Verified Effort:** 45+ Hours · Foundational Track
* **Specialization Track:** Low-Level Programming

**Curriculum & What Was Learned:**
Foundational programming course in C covering syntax fundamentals, basic data types, memory representations, control structures, and modular function architecture.
* **Core Skills Mastered:** C Language, Control Flow, Memory Basics, Pointers Intro, Structured Programming
* Primitive datatypes, memory size allocations, and explicit type casting
* Control flow constructs (nested conditionals, iteration loops, switch statements)
* Custom modular functions, pass-by-value semantics, and lexical scope boundaries
* Arrays, character buffers, and basic terminal input/output operations

**Takeaways & Practical Application:**
Provided deep appreciation for compile-time vs runtime execution, laying an indispensable foundation before tackling CS50 and modern web runtimes.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/memulai-pemrograman-dengan-c"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_UIUX_DESIGN: {
    id: {
      title: `Sertifikat: Dasar UI/UX Design (Figma Course)`,
      text: `**Sertifikat Resmi: Dasar UI/UX Design**

* **Institusi Penerbit:** Figma Course
* **Waktu & Kredensial:** Diterbitkan 2023 (ID Kredensial: \`FIGMA-UIUX-2023-BASE\`)
* **Beban Pembelajaran:** 35+ Hours · Design Track
* **Bidang Keahlian:** UI/UX & Product Design

**Apa yang Dipelajari & Kurikulum Utama:**
Practical design curriculum exploring user-centered design methodologies, wireframing, interactive prototyping, and scalable Figma design systems.
* **Keahlian yang Dikuasai:** Figma, UI/UX Design, Auto Layout, Design Systems, Wireframing, Prototyping
* Auto-layout mechanics, responsive constraints, and component variants
* Design tokens (color swatches, typography scales, spacing grids)
* Interactive micro-prototyping with smart animations and easing curves
* User empathy mapping, persona development, and wireframe ideation

**Apa yang Didapatkan & Implementasi Nyata:**
Transformed my development approach into a design-first mindset, allowing me to prototype complete interactive mockups in Figma before writing a single line of React code.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/dasar-ui-ux-design"
        }
],
    },
    en: {
      title: `Certificate: Dasar UI/UX Design (Figma Course)`,
      text: `**Verified Credential: Dasar UI/UX Design**

* **Issuing Body:** Figma Course
* **Issue Date & Credential ID:** 2023 (ID: \`FIGMA-UIUX-2023-BASE\`)
* **Verified Effort:** 35+ Hours · Design Track
* **Specialization Track:** UI/UX & Product Design

**Curriculum & What Was Learned:**
Practical design curriculum exploring user-centered design methodologies, wireframing, interactive prototyping, and scalable Figma design systems.
* **Core Skills Mastered:** Figma, UI/UX Design, Auto Layout, Design Systems, Wireframing, Prototyping
* Auto-layout mechanics, responsive constraints, and component variants
* Design tokens (color swatches, typography scales, spacing grids)
* Interactive micro-prototyping with smart animations and easing curves
* User empathy mapping, persona development, and wireframe ideation

**Takeaways & Practical Application:**
Transformed my development approach into a design-first mindset, allowing me to prototype complete interactive mockups in Figma before writing a single line of React code.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/dasar-ui-ux-design"
        }
],
    },
  },
  CERT_PYTHON_FUND: {
    id: {
      title: `Sertifikat: Python Fundamentals (DQLab)`,
      text: `**Sertifikat Resmi: Python Fundamentals**

* **Institusi Penerbit:** DQLab
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`DQLAB-PY-2024-FUND\`)
* **Beban Pembelajaran:** 30+ Hours · Data Track
* **Bidang Keahlian:** Data Science & Scripting

**Apa yang Dipelajari & Kurikulum Utama:**
Essential Python programming curriculum focusing on data structures, control logic, modular libraries, and basic data manipulation routines.
* **Keahlian yang Dikuasai:** Python, Data Structures, Scripting, Data Parsing, Automation
* Native collections: lists, dictionaries, tuples, sets and mutation rules
* List comprehensions and lambda transformations for concise workflows
* Reading and parsing CSV, JSON, and structured data files
* Foundations of numerical computing and scripting automation

**Apa yang Didapatkan & Implementasi Nyata:**
Accelerated my ability to write rapid automation scripts, test data transformations, and interact with machine learning APIs.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/python-fundamentals"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dqlab.id"
        }
],
    },
    en: {
      title: `Certificate: Python Fundamentals (DQLab)`,
      text: `**Verified Credential: Python Fundamentals**

* **Issuing Body:** DQLab
* **Issue Date & Credential ID:** 2024 (ID: \`DQLAB-PY-2024-FUND\`)
* **Verified Effort:** 30+ Hours · Data Track
* **Specialization Track:** Data Science & Scripting

**Curriculum & What Was Learned:**
Essential Python programming curriculum focusing on data structures, control logic, modular libraries, and basic data manipulation routines.
* **Core Skills Mastered:** Python, Data Structures, Scripting, Data Parsing, Automation
* Native collections: lists, dictionaries, tuples, sets and mutation rules
* List comprehensions and lambda transformations for concise workflows
* Reading and parsing CSV, JSON, and structured data files
* Foundations of numerical computing and scripting automation

**Takeaways & Practical Application:**
Accelerated my ability to write rapid automation scripts, test data transformations, and interact with machine learning APIs.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/python-fundamentals"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dqlab.id"
        }
],
    },
  },
  CERT_JS_DASAR: {
    id: {
      title: `Sertifikat: Belajar Dasar Pemrograman JavaScript (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Belajar Dasar Pemrograman JavaScript**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`DICODING-JS-2024-CORE\`)
* **Beban Pembelajaran:** 50+ Hours · Foundational Track
* **Bidang Keahlian:** Frontend & JavaScript Runtime

**Apa yang Dipelajari & Kurikulum Utama:**
Modern ECMAScript (ES6+) programming fundamentals, covering lexical scope, closures, event loops, promises, and functional array operations.
* **Keahlian yang Dikuasai:** JavaScript, ES6+, Asynchronous JS, Promises, Functional Programming, Event Loop
* ES6+ syntax: destructuring, rest/spread operators, and arrow functions
* Asynchronous programming: Callbacks, Promises, and async/await mechanics
* Object-oriented and functional programming paradigms in JavaScript
* Node.js environment basics and npm package management ecosystem

**Apa yang Didapatkan & Implementasi Nyata:**
Mastered asynchronous control flows and JavaScript internals, providing the core competency needed to build production React web apps.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/belajar-dasar-pemrograman-javascript"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Belajar Dasar Pemrograman JavaScript (Dicoding Indonesia)`,
      text: `**Verified Credential: Belajar Dasar Pemrograman JavaScript**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2024 (ID: \`DICODING-JS-2024-CORE\`)
* **Verified Effort:** 50+ Hours · Foundational Track
* **Specialization Track:** Frontend & JavaScript Runtime

**Curriculum & What Was Learned:**
Modern ECMAScript (ES6+) programming fundamentals, covering lexical scope, closures, event loops, promises, and functional array operations.
* **Core Skills Mastered:** JavaScript, ES6+, Asynchronous JS, Promises, Functional Programming, Event Loop
* ES6+ syntax: destructuring, rest/spread operators, and arrow functions
* Asynchronous programming: Callbacks, Promises, and async/await mechanics
* Object-oriented and functional programming paradigms in JavaScript
* Node.js environment basics and npm package management ecosystem

**Takeaways & Practical Application:**
Mastered asynchronous control flows and JavaScript internals, providing the core competency needed to build production React web apps.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/belajar-dasar-pemrograman-javascript"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_AWS_CLOUD: {
    id: {
      title: `Sertifikat: Cloud Practitioner Essentials (Amazon Web Services (AWS))`,
      text: `**Sertifikat Resmi: Cloud Practitioner Essentials**

* **Institusi Penerbit:** Amazon Web Services (AWS)
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`AWS-CP-2024-CLOUD\`)
* **Beban Pembelajaran:** 40+ Hours · Cloud Foundations
* **Bidang Keahlian:** Cloud Architecture & Infrastructure

**Apa yang Dipelajari & Kurikulum Utama:**
Official AWS curriculum introducing cloud computing concepts, AWS security models, compute services (EC2, Lambda), storage (S3), and networking fundamentals (VPC).
* **Keahlian yang Dikuasai:** AWS, Cloud Computing, IAM Security, S3 Storage, EC2, Serverless Architecture
* Cloud value proposition, high availability, and fault tolerance fundamentals
* AWS Shared Responsibility Model and IAM security access policies
* Compute & Storage: Elastic Compute Cloud (EC2), S3 bucket architecture
* Cloud cost optimization, billing models, and serverless computing overview

**Apa yang Didapatkan & Implementasi Nyata:**
Established foundational understanding of cloud deployment architectures, allowing informed infrastructure decisions for web applications and client hosting.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/cloud-practitioner-essentials"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://aws.amazon.com"
        }
],
    },
    en: {
      title: `Certificate: Cloud Practitioner Essentials (Amazon Web Services (AWS))`,
      text: `**Verified Credential: Cloud Practitioner Essentials**

* **Issuing Body:** Amazon Web Services (AWS)
* **Issue Date & Credential ID:** 2024 (ID: \`AWS-CP-2024-CLOUD\`)
* **Verified Effort:** 40+ Hours · Cloud Foundations
* **Specialization Track:** Cloud Architecture & Infrastructure

**Curriculum & What Was Learned:**
Official AWS curriculum introducing cloud computing concepts, AWS security models, compute services (EC2, Lambda), storage (S3), and networking fundamentals (VPC).
* **Core Skills Mastered:** AWS, Cloud Computing, IAM Security, S3 Storage, EC2, Serverless Architecture
* Cloud value proposition, high availability, and fault tolerance fundamentals
* AWS Shared Responsibility Model and IAM security access policies
* Compute & Storage: Elastic Compute Cloud (EC2), S3 bucket architecture
* Cloud cost optimization, billing models, and serverless computing overview

**Takeaways & Practical Application:**
Established foundational understanding of cloud deployment architectures, allowing informed infrastructure decisions for web applications and client hosting.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/cloud-practitioner-essentials"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://aws.amazon.com"
        }
],
    },
  },
  CERT_REACT: {
    id: {
      title: `Sertifikat: Belajar Membuat Aplikasi Web dengan React (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Belajar Membuat Aplikasi Web dengan React**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2025 (ID Kredensial: \`DICODING-REACT-2025-DEV\`)
* **Beban Pembelajaran:** 60+ Hours · Intermediate Track
* **Bidang Keahlian:** Frontend Component Architecture

**Apa yang Dipelajari & Kurikulum Utama:**
Comprehensive React framework certification covering declarative UI paradigms, component composition, hooks, state isolation, and controlled forms.
* **Keahlian yang Dikuasai:** React.js, React Hooks, State Management, Virtual DOM, Component Lifecycle, SPA
* Component lifecycles and modern React Hooks (useState, useEffect, useMemo, useRef)
* Unidirectional data flow, prop drilling avoidance, and state lifting patterns
* Virtual DOM reconciliation, key prop semantics, and rendering optimization
* Client-side routing and asynchronous REST data fetching

**Apa yang Didapatkan & Implementasi Nyata:**
Directly underpins this portfolio website, PusakaKu, and multiple national competition platforms engineered with component-driven architecture.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/belajar-membuat-aplikasi-web-dengan-react"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Belajar Membuat Aplikasi Web dengan React (Dicoding Indonesia)`,
      text: `**Verified Credential: Belajar Membuat Aplikasi Web dengan React**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2025 (ID: \`DICODING-REACT-2025-DEV\`)
* **Verified Effort:** 60+ Hours · Intermediate Track
* **Specialization Track:** Frontend Component Architecture

**Curriculum & What Was Learned:**
Comprehensive React framework certification covering declarative UI paradigms, component composition, hooks, state isolation, and controlled forms.
* **Core Skills Mastered:** React.js, React Hooks, State Management, Virtual DOM, Component Lifecycle, SPA
* Component lifecycles and modern React Hooks (useState, useEffect, useMemo, useRef)
* Unidirectional data flow, prop drilling avoidance, and state lifting patterns
* Virtual DOM reconciliation, key prop semantics, and rendering optimization
* Client-side routing and asynchronous REST data fetching

**Takeaways & Practical Application:**
Directly underpins this portfolio website, PusakaKu, and multiple national competition platforms engineered with component-driven architecture.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/belajar-membuat-aplikasi-web-dengan-react"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_PYTHON_MEMULAI: {
    id: {
      title: `Sertifikat: Memulai Pemrograman Dengan Python (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Memulai Pemrograman Dengan Python**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`DICODING-PY-2024-INIT\`)
* **Beban Pembelajaran:** 35+ Hours · Foundational Track
* **Bidang Keahlian:** Python Fundamentals

**Apa yang Dipelajari & Kurikulum Utama:**
Introductory course into the Python programming language, focusing on clear code formatting (PEP 8), variable handling, data structures, and conditional logic.
* **Keahlian yang Dikuasai:** Python, PEP 8, Exception Handling, Scripting, Problem Solving
* Python clean code conventions and PEP 8 formatting guidelines
* Robust exception handling with try/except/finally blocks
* Function definitions, default arguments, and return types
* Standard library modules: math, datetime, random, and os interactions

**Apa yang Didapatkan & Implementasi Nyata:**
Strengthened algorithmic problem solving and provided the versatility to build backend scripts and utility tools quickly.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/memulai-pemrograman-dengan-python"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Memulai Pemrograman Dengan Python (Dicoding Indonesia)`,
      text: `**Verified Credential: Memulai Pemrograman Dengan Python**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2024 (ID: \`DICODING-PY-2024-INIT\`)
* **Verified Effort:** 35+ Hours · Foundational Track
* **Specialization Track:** Python Fundamentals

**Curriculum & What Was Learned:**
Introductory course into the Python programming language, focusing on clear code formatting (PEP 8), variable handling, data structures, and conditional logic.
* **Core Skills Mastered:** Python, PEP 8, Exception Handling, Scripting, Problem Solving
* Python clean code conventions and PEP 8 formatting guidelines
* Robust exception handling with try/except/finally blocks
* Function definitions, default arguments, and return types
* Standard library modules: math, datetime, random, and os interactions

**Takeaways & Practical Application:**
Strengthened algorithmic problem solving and provided the versatility to build backend scripts and utility tools quickly.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/memulai-pemrograman-dengan-python"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_WEB_DASAR: {
    id: {
      title: `Sertifikat: Belajar Dasar Pemrograman Web (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Belajar Dasar Pemrograman Web**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`DICODING-WEB-2024-BASE\`)
* **Beban Pembelajaran:** 40+ Hours · Foundational Track
* **Bidang Keahlian:** Web Fundamentals

**Apa yang Dipelajari & Kurikulum Utama:**
Core web standards course focused on HTML5 semantics, CSS styling principles, box model mastery, and building cross-browser responsive layouts.
* **Keahlian yang Dikuasai:** HTML5, CSS3, Box Model, Semantic Web, Responsive Layouts
* Semantic HTML structure (header, main, section, article, footer, nav)
* CSS box model (margin, padding, border, content box dimensions)
* Positioning schemes (relative, absolute, fixed, sticky) and z-index contexts
* Media queries and fluid layouts built without heavy frameworks

**Apa yang Didapatkan & Implementasi Nyata:**
Instilled deep respect for raw web standards, avoiding framework dependency for simple layout challenges.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/belajar-dasar-pemrograman-web"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Belajar Dasar Pemrograman Web (Dicoding Indonesia)`,
      text: `**Verified Credential: Belajar Dasar Pemrograman Web**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2024 (ID: \`DICODING-WEB-2024-BASE\`)
* **Verified Effort:** 40+ Hours · Foundational Track
* **Specialization Track:** Web Fundamentals

**Curriculum & What Was Learned:**
Core web standards course focused on HTML5 semantics, CSS styling principles, box model mastery, and building cross-browser responsive layouts.
* **Core Skills Mastered:** HTML5, CSS3, Box Model, Semantic Web, Responsive Layouts
* Semantic HTML structure (header, main, section, article, footer, nav)
* CSS box model (margin, padding, border, content box dimensions)
* Positioning schemes (relative, absolute, fixed, sticky) and z-index contexts
* Media queries and fluid layouts built without heavy frameworks

**Takeaways & Practical Application:**
Instilled deep respect for raw web standards, avoiding framework dependency for simple layout challenges.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/belajar-dasar-pemrograman-web"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_LOGIKA: {
    id: {
      title: `Sertifikat: Pengenalan ke Logika Pemrograman (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Pengenalan ke Logika Pemrograman**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2023 (ID Kredensial: \`DICODING-LOGIC-2023-CS\`)
* **Beban Pembelajaran:** 20+ Hours · Foundational Track
* **Bidang Keahlian:** Computational Logic & Algorithms

**Apa yang Dipelajari & Kurikulum Utama:**
Introductory curriculum establishing computational thinking, flowchart modeling, pseudocode conventions, and boolean logic.
* **Keahlian yang Dikuasai:** Computational Thinking, Pseudocode, Flowcharts, Boolean Logic, Algorithms
* Algorithmic thinking and step-by-step problem decomposition
* Boolean algebra, truth tables, and conditional logic operators
* Flowcharts, sequence diagrams, and dry-run execution traces
* Iteration patterns, loop termination conditions, and edge cases

**Apa yang Didapatkan & Implementasi Nyata:**
Sharpened core problem-solving discipline, making debugging intuitive and structured rather than guess-and-check.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/pengenalan-ke-logika-pemrograman"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Pengenalan ke Logika Pemrograman (Dicoding Indonesia)`,
      text: `**Verified Credential: Pengenalan ke Logika Pemrograman**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2023 (ID: \`DICODING-LOGIC-2023-CS\`)
* **Verified Effort:** 20+ Hours · Foundational Track
* **Specialization Track:** Computational Logic & Algorithms

**Curriculum & What Was Learned:**
Introductory curriculum establishing computational thinking, flowchart modeling, pseudocode conventions, and boolean logic.
* **Core Skills Mastered:** Computational Thinking, Pseudocode, Flowcharts, Boolean Logic, Algorithms
* Algorithmic thinking and step-by-step problem decomposition
* Boolean algebra, truth tables, and conditional logic operators
* Flowcharts, sequence diagrams, and dry-run execution traces
* Iteration patterns, loop termination conditions, and edge cases

**Takeaways & Practical Application:**
Sharpened core problem-solving discipline, making debugging intuitive and structured rather than guess-and-check.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/pengenalan-ke-logika-pemrograman"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_C_SKILVUL: {
    id: {
      title: `Sertifikat: Pemrograman Dasar C (Skilvul)`,
      text: `**Sertifikat Resmi: Pemrograman Dasar C**

* **Institusi Penerbit:** Skilvul
* **Waktu & Kredensial:** Diterbitkan 2023 (ID Kredensial: \`SKILVUL-C-2023-BASE\`)
* **Beban Pembelajaran:** 25+ Hours · Foundational Track
* **Bidang Keahlian:** C Programming

**Apa yang Dipelajari & Kurikulum Utama:**
Practical C programming course covering input/output streams, conditional branching, repetitive loops, and multi-dimensional arrays.
* **Keahlian yang Dikuasai:** C, Skilvul, Loops & Arrays, Functions, Syntax & Logic
* Standard input/output streams with printf and scanf formatting
* Dynamic memory concepts, array indexing, and bounds safety
* Modular functions, header files, and standard C library utilization
* Structured logic implementations for arithmetic problem solving

**Apa yang Didapatkan & Implementasi Nyata:**
Reinforced early coding skills and mathematical programming techniques in my first year of vocational high school.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/pemrograman-dasar-c"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://skilvul.com"
        }
],
    },
    en: {
      title: `Certificate: Pemrograman Dasar C (Skilvul)`,
      text: `**Verified Credential: Pemrograman Dasar C**

* **Issuing Body:** Skilvul
* **Issue Date & Credential ID:** 2023 (ID: \`SKILVUL-C-2023-BASE\`)
* **Verified Effort:** 25+ Hours · Foundational Track
* **Specialization Track:** C Programming

**Curriculum & What Was Learned:**
Practical C programming course covering input/output streams, conditional branching, repetitive loops, and multi-dimensional arrays.
* **Core Skills Mastered:** C, Skilvul, Loops & Arrays, Functions, Syntax & Logic
* Standard input/output streams with printf and scanf formatting
* Dynamic memory concepts, array indexing, and bounds safety
* Modular functions, header files, and standard C library utilization
* Structured logic implementations for arithmetic problem solving

**Takeaways & Practical Application:**
Reinforced early coding skills and mathematical programming techniques in my first year of vocational high school.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/pemrograman-dasar-c"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://skilvul.com"
        }
],
    },
  },
  CERT_PROMPT_ENG: {
    id: {
      title: `Sertifikat: Dasar Prompt Engineering (AI Course)`,
      text: `**Sertifikat Resmi: Dasar Prompt Engineering**

* **Institusi Penerbit:** AI Course
* **Waktu & Kredensial:** Diterbitkan 2025 (ID Kredensial: \`AI-PROMPT-2025-SPEC\`)
* **Beban Pembelajaran:** 20+ Hours · AI Specialization
* **Bidang Keahlian:** Generative AI & LLM Systems

**Apa yang Dipelajari & Kurikulum Utama:**
Modern course on prompt design, few-shot prompting, chain-of-thought elicitation, system instructions, and LLM output guardrailing.
* **Keahlian yang Dikuasai:** Prompt Engineering, LLMs, Generative AI, Chain of Thought, System Prompts, AI Guardrails
* Zero-shot, one-shot, and few-shot contextual prompting techniques
* Chain-of-thought (CoT) and step-by-step reasoning prompts for complex tasks
* System prompts, role definitions, and strict behavioral safety boundaries
* Structured JSON output extraction from multimodal LLMs

**Apa yang Didapatkan & Implementasi Nyata:**
Directly applied when integrating Google Gemini AI virtual doctors in FitSmart and cultural AI concierges in JavaIsland.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/dasar-prompt-engineering"
        }
],
    },
    en: {
      title: `Certificate: Dasar Prompt Engineering (AI Course)`,
      text: `**Verified Credential: Dasar Prompt Engineering**

* **Issuing Body:** AI Course
* **Issue Date & Credential ID:** 2025 (ID: \`AI-PROMPT-2025-SPEC\`)
* **Verified Effort:** 20+ Hours · AI Specialization
* **Specialization Track:** Generative AI & LLM Systems

**Curriculum & What Was Learned:**
Modern course on prompt design, few-shot prompting, chain-of-thought elicitation, system instructions, and LLM output guardrailing.
* **Core Skills Mastered:** Prompt Engineering, LLMs, Generative AI, Chain of Thought, System Prompts, AI Guardrails
* Zero-shot, one-shot, and few-shot contextual prompting techniques
* Chain-of-thought (CoT) and step-by-step reasoning prompts for complex tasks
* System prompts, role definitions, and strict behavioral safety boundaries
* Structured JSON output extraction from multimodal LLMs

**Takeaways & Practical Application:**
Directly applied when integrating Google Gemini AI virtual doctors in FitSmart and cultural AI concierges in JavaIsland.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/dasar-prompt-engineering"
        }
],
    },
  },
  CERT_KARIER: {
    id: {
      title: `Sertifikat: Meniti Karier Sebagai Software Developer (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Meniti Karier Sebagai Software Developer**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`DICODING-CAREER-2024\`)
* **Beban Pembelajaran:** 15+ Hours · Professional Track
* **Bidang Keahlian:** Software Engineering & Industry Standards

**Apa yang Dipelajari & Kurikulum Utama:**
Comprehensive industry orientation covering software engineering roles, team methodologies (Agile/Scrum), code quality standards, and professional ethics.
* **Keahlian yang Dikuasai:** Software Development, Agile & Scrum, SDLC, Code Standards, Tech Career
* Software development lifecycles (SDLC) and sprint planning methodologies
* Understanding cross-functional roles (Product, QA, DevOps, Engineering)
* Engineering ethics, intellectual property, and documentation standards
* Building professional tech portfolios and technical communication

**Apa yang Didapatkan & Implementasi Nyata:**
Guided my team leadership style during national hackathons and prepared me to seamlessly transition into corporate internships.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/meniti-karier-sebagai-software-developer"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Meniti Karier Sebagai Software Developer (Dicoding Indonesia)`,
      text: `**Verified Credential: Meniti Karier Sebagai Software Developer**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2024 (ID: \`DICODING-CAREER-2024\`)
* **Verified Effort:** 15+ Hours · Professional Track
* **Specialization Track:** Software Engineering & Industry Standards

**Curriculum & What Was Learned:**
Comprehensive industry orientation covering software engineering roles, team methodologies (Agile/Scrum), code quality standards, and professional ethics.
* **Core Skills Mastered:** Software Development, Agile & Scrum, SDLC, Code Standards, Tech Career
* Software development lifecycles (SDLC) and sprint planning methodologies
* Understanding cross-functional roles (Product, QA, DevOps, Engineering)
* Engineering ethics, intellectual property, and documentation standards
* Building professional tech portfolios and technical communication

**Takeaways & Practical Application:**
Guided my team leadership style during national hackathons and prepared me to seamlessly transition into corporate internships.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/meniti-karier-sebagai-software-developer"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_FINANCIAL: {
    id: {
      title: `Sertifikat: Financial Literacy Fundamentals (Finance Course)`,
      text: `**Sertifikat Resmi: Financial Literacy Fundamentals**

* **Institusi Penerbit:** Finance Course
* **Waktu & Kredensial:** Diterbitkan 2023 (ID Kredensial: \`FIN-LIT-2023-BASE\`)
* **Beban Pembelajaran:** 20+ Hours · Foundational Track
* **Bidang Keahlian:** Financial Economics & Literacy

**Apa yang Dipelajari & Kurikulum Utama:**
Foundational course exploring budgeting principles, cash flow management, digital transaction security, and personal financial modeling.
* **Keahlian yang Dikuasai:** Financial Literacy, Budgeting, Cash Flow, Economics, Risk Management
* Income vs expenditure tracking and allocation models
* Basic investment vehicles, risk profiles, and compound interest
* Digital payment gateways and security best practices
* Financial discipline and project budget forecasting

**Apa yang Didapatkan & Implementasi Nyata:**
Helped develop financial discipline and commercial awareness when scoping freelance client project budgets and contract terms.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/financial-literacy-fundamentals"
        }
],
    },
    en: {
      title: `Certificate: Financial Literacy Fundamentals (Finance Course)`,
      text: `**Verified Credential: Financial Literacy Fundamentals**

* **Issuing Body:** Finance Course
* **Issue Date & Credential ID:** 2023 (ID: \`FIN-LIT-2023-BASE\`)
* **Verified Effort:** 20+ Hours · Foundational Track
* **Specialization Track:** Financial Economics & Literacy

**Curriculum & What Was Learned:**
Foundational course exploring budgeting principles, cash flow management, digital transaction security, and personal financial modeling.
* **Core Skills Mastered:** Financial Literacy, Budgeting, Cash Flow, Economics, Risk Management
* Income vs expenditure tracking and allocation models
* Basic investment vehicles, risk profiles, and compound interest
* Digital payment gateways and security best practices
* Financial discipline and project budget forecasting

**Takeaways & Practical Application:**
Helped develop financial discipline and commercial awareness when scoping freelance client project budgets and contract terms.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/financial-literacy-fundamentals"
        }
],
    },
  },
  CERT_AI_BASICS: {
    id: {
      title: `Sertifikat: Artificial Intelligence Basics (AI Academy)`,
      text: `**Sertifikat Resmi: Artificial Intelligence Basics**

* **Institusi Penerbit:** AI Academy
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`AI-ACADEMY-2024-BASE\`)
* **Beban Pembelajaran:** 30+ Hours · Foundational Track
* **Bidang Keahlian:** Artificial Intelligence & Machine Learning

**Apa yang Dipelajari & Kurikulum Utama:**
Broad exploration of artificial intelligence concepts, machine learning taxonomies (supervised, unsupervised, reinforcement), neural networks, and AI ethics.
* **Keahlian yang Dikuasai:** Artificial Intelligence, Machine Learning, Neural Networks, NLP, Computer Vision, AI Ethics
* Supervised vs unsupervised learning paradigms and cost functions
* Computer vision and natural language processing pipelines
* Deep learning fundamentals and neural network architectures
* Ethical considerations, bias mitigation, and responsible AI deployment

**Apa yang Didapatkan & Implementasi Nyata:**
Provided the conceptual clarity necessary to evaluate when to deploy heuristic algorithms vs deep learning models in real-world applications.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/artificial-intelligence-basics"
        }
],
    },
    en: {
      title: `Certificate: Artificial Intelligence Basics (AI Academy)`,
      text: `**Verified Credential: Artificial Intelligence Basics**

* **Issuing Body:** AI Academy
* **Issue Date & Credential ID:** 2024 (ID: \`AI-ACADEMY-2024-BASE\`)
* **Verified Effort:** 30+ Hours · Foundational Track
* **Specialization Track:** Artificial Intelligence & Machine Learning

**Curriculum & What Was Learned:**
Broad exploration of artificial intelligence concepts, machine learning taxonomies (supervised, unsupervised, reinforcement), neural networks, and AI ethics.
* **Core Skills Mastered:** Artificial Intelligence, Machine Learning, Neural Networks, NLP, Computer Vision, AI Ethics
* Supervised vs unsupervised learning paradigms and cost functions
* Computer vision and natural language processing pipelines
* Deep learning fundamentals and neural network architectures
* Ethical considerations, bias mitigation, and responsible AI deployment

**Takeaways & Practical Application:**
Provided the conceptual clarity necessary to evaluate when to deploy heuristic algorithms vs deep learning models in real-world applications.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/artificial-intelligence-basics"
        }
],
    },
  },
  CERT_GDG: {
    id: {
      title: `Sertifikat: Google Developer Groups Participant (Google Developer Groups)`,
      text: `**Sertifikat Resmi: Google Developer Groups Participant**

* **Institusi Penerbit:** Google Developer Groups
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`GDG-PARTICIPANT-2024\`)
* **Beban Pembelajaran:** Industry Participation
* **Bidang Keahlian:** Community & Technical Keynotes

**Apa yang Dipelajari & Kurikulum Utama:**
Active participation in Google Developer Groups tech summits, engaging with developer advocates on modern web technologies, Android, Cloud, and Gemini APIs.
* **Keahlian yang Dikuasai:** Google Developer Groups, Tech Community, Web Standards, Cloud Workshops, Networking
* Keynote sessions on modern web performance and Core Web Vitals
* Hands-on workshops on Google Cloud and Firebase real-time integrations
* Networking with senior industry engineers and open-source contributors
* Best practices for building scalable, accessible web products

**Apa yang Didapatkan & Implementasi Nyata:**
Broadened technical horizons through direct interaction with community leaders, inspiring adoption of bleeding-edge web tooling and cloud patterns.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/google-developer-groups-participant"
        }
],
    },
    en: {
      title: `Certificate: Google Developer Groups Participant (Google Developer Groups)`,
      text: `**Verified Credential: Google Developer Groups Participant**

* **Issuing Body:** Google Developer Groups
* **Issue Date & Credential ID:** 2024 (ID: \`GDG-PARTICIPANT-2024\`)
* **Verified Effort:** Industry Participation
* **Specialization Track:** Community & Technical Keynotes

**Curriculum & What Was Learned:**
Active participation in Google Developer Groups tech summits, engaging with developer advocates on modern web technologies, Android, Cloud, and Gemini APIs.
* **Core Skills Mastered:** Google Developer Groups, Tech Community, Web Standards, Cloud Workshops, Networking
* Keynote sessions on modern web performance and Core Web Vitals
* Hands-on workshops on Google Cloud and Firebase real-time integrations
* Networking with senior industry engineers and open-source contributors
* Best practices for building scalable, accessible web products

**Takeaways & Practical Application:**
Broadened technical horizons through direct interaction with community leaders, inspiring adoption of bleeding-edge web tooling and cloud patterns.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/google-developer-groups-participant"
        }
],
    },
  },
  CERT_ENGLISH: {
    id: {
      title: `Sertifikat: English Proficiency Assessment (English Language Course)`,
      text: `**Sertifikat Resmi: English Proficiency Assessment**

* **Institusi Penerbit:** English Language Course
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`ENG-PROF-2024-ASSESS\`)
* **Beban Pembelajaran:** Intermediate / Professional Communication
* **Bidang Keahlian:** Language & Professional Communication

**Apa yang Dipelajari & Kurikulum Utama:**
Standardized evaluation of English reading comprehension, technical writing, listening, and spoken conversational fluency in professional settings.
* **Keahlian yang Dikuasai:** English Proficiency, Technical Writing, Professional Communication, Public Speaking, Reading Comprehension
* Technical documentation reading and API specification comprehension
* Professional email correspondence, pull request reviews, and sprint standup communication
* Listening comprehension across diverse international accents
* Verbal presentation and pitching of software architectures

**Apa yang Didapatkan & Implementasi Nyata:**
Equipped me with fluent English communication required for consuming international technical documentation, writing clean codebases, and speaking confidently during cross-cultural initiatives.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/english-proficiency-assessment"
        }
],
    },
    en: {
      title: `Certificate: English Proficiency Assessment (English Language Course)`,
      text: `**Verified Credential: English Proficiency Assessment**

* **Issuing Body:** English Language Course
* **Issue Date & Credential ID:** 2024 (ID: \`ENG-PROF-2024-ASSESS\`)
* **Verified Effort:** Intermediate / Professional Communication
* **Specialization Track:** Language & Professional Communication

**Curriculum & What Was Learned:**
Standardized evaluation of English reading comprehension, technical writing, listening, and spoken conversational fluency in professional settings.
* **Core Skills Mastered:** English Proficiency, Technical Writing, Professional Communication, Public Speaking, Reading Comprehension
* Technical documentation reading and API specification comprehension
* Professional email correspondence, pull request reviews, and sprint standup communication
* Listening comprehension across diverse international accents
* Verbal presentation and pitching of software architectures

**Takeaways & Practical Application:**
Equipped me with fluent English communication required for consuming international technical documentation, writing clean codebases, and speaking confidently during cross-cultural initiatives.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/english-proficiency-assessment"
        }
],
    },
  },

  RICHO_BAHARI_DETAIL: {
    id: {
      title: `Proyek: CV. Richo Bahari (Corporate Profile & Industrial Engineering Project Catalog)`,
      text: `**Proyek: CV. Richo Bahari (Corporate Profile & Industrial Engineering Project Catalog)**

* **Ringkasan Sistem:** Official corporate web platform and digital portfolio for CV. Richo Bahari, a General Contractor and Industrial Engineering firm operating across West Java and Jabodetabek. Built with Next.js 16, React 19, and Tailwind CSS v4 to showcase civil construction, industrial MEP, steel fabrication, and heavy-duty storage racking under K3 Zero Accident standards.
* **Tahun Peluncuran:** 2025
* **Teknologi Utama:** Next.js 16, React 19, Tailwind CSS v4, TypeScript, React Compiler, PostCSS, SEO & SSG, Industrial EPC

**Fitur & Arsitektur Utama:**
* **Corporate Credibility & Modern Identity:** Digital flagship presenting engineering capabilities, safety standards, and worksite credibility.
* **Structured Industrial Case Studies:** Verified project breakdowns (roads, racks, factories, and jigs) with client names, challenges, and measurable results.
* **Next.js 16 & React 19 Architecture:** Server-side rendering, Tailwind CSS v4, and automatic React memoization for fast load times and clean SEO.
* **K3 Zero Accident & Safety Standards:** Highlights strict safety protocols and standard operating procedures required by multinational industrial clients.

**Metrik Kunci & Performa (KPIs):**
* **Zero Acc.:** K3 Safety Record - Absolute zero-accident commitment across all field sites
* **5 Pillars:** Industrial Services - Civil, Mechanical, Electrical, Fabrication, and Racking
* **100%:** Next.js 16 App Router - Cutting-edge React 19 & Tailwind v4 with React Compiler
* **2 Prov.:** Operational Hubs - Serving West Java (Sukabumi, Cikarang) and Jabodetabek
* **Turnkey:** Delivery Model - Single point of accountability from survey to handover
* **< 1.2s:** Page Load Time - Sub-second LCP optimized via Next.js server components`,
      links: [
        {
                "label": "Studi Kasus Proyek CV. Richo Bahari",
                "url": "/projects/richobahari"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/CentraDev-Team/RichoBahariCompro"
        }
],
    },
    en: {
      title: `Project: CV. Richo Bahari (Corporate Profile & Industrial Engineering Project Catalog)`,
      text: `**Project: CV. Richo Bahari (Corporate Profile & Industrial Engineering Project Catalog)**

* **System Overview:** Official corporate web platform and digital portfolio for CV. Richo Bahari, a General Contractor and Industrial Engineering firm operating across West Java and Jabodetabek. Built with Next.js 16, React 19, and Tailwind CSS v4 to showcase civil construction, industrial MEP, steel fabrication, and heavy-duty storage racking under K3 Zero Accident standards.
* **Delivered Year:** 2025
* **Core Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript, React Compiler, PostCSS, SEO & SSG, Industrial EPC

**Core Architecture & Features:**
* **Corporate Credibility & Modern Identity:** Digital flagship presenting engineering capabilities, safety standards, and worksite credibility.
* **Structured Industrial Case Studies:** Verified project breakdowns (roads, racks, factories, and jigs) with client names, challenges, and measurable results.
* **Next.js 16 & React 19 Architecture:** Server-side rendering, Tailwind CSS v4, and automatic React memoization for fast load times and clean SEO.
* **K3 Zero Accident & Safety Standards:** Highlights strict safety protocols and standard operating procedures required by multinational industrial clients.

**Key Metrics & Performance (KPIs):**
* **Zero Acc.:** K3 Safety Record - Absolute zero-accident commitment across all field sites
* **5 Pillars:** Industrial Services - Civil, Mechanical, Electrical, Fabrication, and Racking
* **100%:** Next.js 16 App Router - Cutting-edge React 19 & Tailwind v4 with React Compiler
* **2 Prov.:** Operational Hubs - Serving West Java (Sukabumi, Cikarang) and Jabodetabek
* **Turnkey:** Delivery Model - Single point of accountability from survey to handover
* **< 1.2s:** Page Load Time - Sub-second LCP optimized via Next.js server components`,
      links: [
        {
                "label": "CV. Richo Bahari Project Case Study",
                "url": "/projects/richobahari"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/CentraDev-Team/RichoBahariCompro"
        }
],
    },
  },
  TERASTANI_DETAIL: {
    id: {
      title: `Proyek: TerasTani (Decentralized Urban Micro-Farm Operating System & AI Precision Agriculture)`,
      text: `**Proyek: TerasTani (Decentralized Urban Micro-Farm Operating System & AI Precision Agriculture)**

* **Ringkasan Sistem:** A decentralized urban micro-farm operating system designed to reduce post-harvest loss and retail fragmentation. Aligned with UN SDGs (2, 11, 12, 13), TerasTani aggregates balcony and yard harvests within 200–500m into communal RW crate hubs with AI leaf spectrometry and smart escrow settlement.
* **Prestasi Resmi:** Juara 2 Nasional (National Runner-Up) Web Design Competition di ajang PNBITC#18 Politeknik Negeri Bali 2024.
* **Tahun Peluncuran:** 2026
* **Teknologi Utama:** React 19, Vite 8, Node.js 20, Express 5, PostgreSQL, Supabase, Tailwind CSS v4, Computer Vision AI, Smart Escrow, IoT Telemetry

**Fitur & Arsitektur Utama:**
* **Decentralized Hub Crate Topology:** Aggregates small residential harvests into bulk commercial crates within a 200–500m walking radius.
* **Computer Vision Leaf Spectrometry:** In-browser canvas color-space analysis evaluating leaf vitality and locking purchase prices without external GPU APIs.
* **Smart Escrow Financial Security:** Locks distributor funds in advance and automatically releases payouts to grower wallets upon weighing verification.
* **Live IoT Microclimate Telemetry:** Streams temperature, humidity, light, and pH data with parallel background fetchers to eliminate loading flicker.

**Metrik Kunci & Performa (KPIs):**
* **200-500m:** Walking Radius - Zero-mile micro-transport connecting home gardens to RW hub
* **Grade A+:** Computer Vision AI - Canvas pixel spectrometry estimating SPAD & leaf chlorosis
* **Smart Escrow:** Financial Settlement - Locked distributor funds automatically disbursed upon weighing
* **4 SDGs:** Global Alignment - SDG 2 (Zero Hunger), 11 (Cities), 12 (Production), 13 (Climate)
* **4 Land Types:** Precision Agronomy - Balconies, residential yards, concrete rooftops, and vertical walls
* **1-Click:** Role Switcher - Seamless perspective toggle: Citizen Cultivator to Partner Distributor`,
      links: [
        {
                "label": "Studi Kasus Proyek TerasTani",
                "url": "/projects/terastani"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/TerasTani"
        }
],
    },
    en: {
      title: `Project: TerasTani (Decentralized Urban Micro-Farm Operating System & AI Precision Agriculture)`,
      text: `**Project: TerasTani (Decentralized Urban Micro-Farm Operating System & AI Precision Agriculture)**

* **System Overview:** A decentralized urban micro-farm operating system designed to reduce post-harvest loss and retail fragmentation. Aligned with UN SDGs (2, 11, 12, 13), TerasTani aggregates balcony and yard harvests within 200–500m into communal RW crate hubs with AI leaf spectrometry and smart escrow settlement.
* **Championship Honor:** 2nd Place National Runner-Up at the PNBITC#18 Web Design Competition (Politeknik Negeri Bali 2024).
* **Delivered Year:** 2026
* **Core Tech Stack:** React 19, Vite 8, Node.js 20, Express 5, PostgreSQL, Supabase, Tailwind CSS v4, Computer Vision AI, Smart Escrow, IoT Telemetry

**Core Architecture & Features:**
* **Decentralized Hub Crate Topology:** Aggregates small residential harvests into bulk commercial crates within a 200–500m walking radius.
* **Computer Vision Leaf Spectrometry:** In-browser canvas color-space analysis evaluating leaf vitality and locking purchase prices without external GPU APIs.
* **Smart Escrow Financial Security:** Locks distributor funds in advance and automatically releases payouts to grower wallets upon weighing verification.
* **Live IoT Microclimate Telemetry:** Streams temperature, humidity, light, and pH data with parallel background fetchers to eliminate loading flicker.

**Key Metrics & Performance (KPIs):**
* **200-500m:** Walking Radius - Zero-mile micro-transport connecting home gardens to RW hub
* **Grade A+:** Computer Vision AI - Canvas pixel spectrometry estimating SPAD & leaf chlorosis
* **Smart Escrow:** Financial Settlement - Locked distributor funds automatically disbursed upon weighing
* **4 SDGs:** Global Alignment - SDG 2 (Zero Hunger), 11 (Cities), 12 (Production), 13 (Climate)
* **4 Land Types:** Precision Agronomy - Balconies, residential yards, concrete rooftops, and vertical walls
* **1-Click:** Role Switcher - Seamless perspective toggle: Citizen Cultivator to Partner Distributor`,
      links: [
        {
                "label": "TerasTani Project Case Study",
                "url": "/projects/terastani"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/TerasTani"
        }
],
    },
  },
  KEPK_DETAIL: {
    id: {
      title: `Proyek: SIM KEPK FK UMJ (Web-Based Academic Research Ethics Management & WHO/CIOMS Clearance Platform)`,
      text: `**Proyek: SIM KEPK FK UMJ (Web-Based Academic Research Ethics Management & WHO/CIOMS Clearance Platform)**

* **Ringkasan Sistem:** A full-stack academic research ethics governance platform developed for the Faculty of Medicine, Universitas Muhammadiyah Jakarta (FK UMJ). Standardized to WHO/CIOMS 2016 and national KEPPKN guidelines, it digitizes the full ethical clearance lifecycle from submission to post-approval.
* **Tahun Peluncuran:** 2025
* **Teknologi Utama:** Laravel 12, PHP 8.2, Tailwind CSS v4, MySQL, Fortify 2FA, Spatie RBAC, DomPDF, AWS Cloud

**Fitur & Arsitektur Utama:**
* **Dynamic Subtype Strategy Pattern:** Uses Strategy Resolver to route Clinical, Non-Clinical, Animal, and Social protocols to specialized validation pipelines.
* **Draft Mode & Relational Integrity:** Allows progressive form saving with nullable fields, protected by MySQL transactions and 24 backed medical enums.
* **Chapter-by-Chapter AJAX Evaluation:** Enables ethics reviewers to score and critique individual protocol sections asynchronously without page reloads.
* **Institutional Reviewer Guardrails:** Enforces a 24-hour assignment cooldown and a minimum 3-reviewer quorum for high-risk Full Board studies.

**Metrik Kunci & Performa (KPIs):**
* **100%:** WHO/CIOMS Compliance - Full alignment with CIOMS 2016 7 ethical standards & 41 criteria
* **4-Stage:** Research Subtypes - Clinical Trials, Non-Clinical, Animal Testing (3R), and Community Social
* **24-Hour:** Workload Guard - Automated cooldown prevents reviewer fatigue and conflict of interest
* **6 Roles:** Granular RBAC - Admin, Chairman, Vice Chair, Secretariat, Reviewer, and Researcher
* **10 Berkas:** Attachment Verification - Proposal, informed consent, instruments, budget, CV, and bank slips
* **A4 DomPDF:** Official Certification - Instant tamper-evident Ethical Clearance PDF with dynamic QR verification`,
      links: [
        {
                "label": "Studi Kasus Proyek SIM KEPK FK UMJ",
                "url": "/projects/kepk"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/kepk-backend"
        }
],
    },
    en: {
      title: `Project: SIM KEPK FK UMJ (Web-Based Academic Research Ethics Management & WHO/CIOMS Clearance Platform)`,
      text: `**Project: SIM KEPK FK UMJ (Web-Based Academic Research Ethics Management & WHO/CIOMS Clearance Platform)**

* **System Overview:** A full-stack academic research ethics governance platform developed for the Faculty of Medicine, Universitas Muhammadiyah Jakarta (FK UMJ). Standardized to WHO/CIOMS 2016 and national KEPPKN guidelines, it digitizes the full ethical clearance lifecycle from submission to post-approval.
* **Delivered Year:** 2025
* **Core Tech Stack:** Laravel 12, PHP 8.2, Tailwind CSS v4, MySQL, Fortify 2FA, Spatie RBAC, DomPDF, AWS Cloud

**Core Architecture & Features:**
* **Dynamic Subtype Strategy Pattern:** Uses Strategy Resolver to route Clinical, Non-Clinical, Animal, and Social protocols to specialized validation pipelines.
* **Draft Mode & Relational Integrity:** Allows progressive form saving with nullable fields, protected by MySQL transactions and 24 backed medical enums.
* **Chapter-by-Chapter AJAX Evaluation:** Enables ethics reviewers to score and critique individual protocol sections asynchronously without page reloads.
* **Institutional Reviewer Guardrails:** Enforces a 24-hour assignment cooldown and a minimum 3-reviewer quorum for high-risk Full Board studies.

**Key Metrics & Performance (KPIs):**
* **100%:** WHO/CIOMS Compliance - Full alignment with CIOMS 2016 7 ethical standards & 41 criteria
* **4-Stage:** Research Subtypes - Clinical Trials, Non-Clinical, Animal Testing (3R), and Community Social
* **24-Hour:** Workload Guard - Automated cooldown prevents reviewer fatigue and conflict of interest
* **6 Roles:** Granular RBAC - Admin, Chairman, Vice Chair, Secretariat, Reviewer, and Researcher
* **10 Berkas:** Attachment Verification - Proposal, informed consent, instruments, budget, CV, and bank slips
* **A4 DomPDF:** Official Certification - Instant tamper-evident Ethical Clearance PDF with dynamic QR verification`,
      links: [
        {
                "label": "SIM KEPK FK UMJ Project Case Study",
                "url": "/projects/kepk"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/kepk-backend"
        }
],
    },
  },
  DATABANK_DETAIL: {
    id: {
      title: `Proyek: Databank ERP (Enterprise Telecom & Vendor Management System)`,
      text: `**Proyek: Databank ERP (Enterprise Telecom & Vendor Management System)**

* **Ringkasan Sistem:** An end-to-end enterprise platform unifying large-scale telecom field operations, purchase order tracking, implementation documents, acceptance and invoicing, automated Huawei ISDP bot scraping, outsource vendor management with 3-stage sequential digital signature approvals, and geofenced attendance integrated into payroll.
* **Tahun Peluncuran:** 2025
* **Teknologi Utama:** React, Vite, NestJS, PostgreSQL, TypeScript, PrismaORM, Docker, CI/CD

**Fitur & Arsitektur Utama:**
* **Field Operations & Project Support:** Installation status tracking, multi-tier Job Order (JO) approval workflows, Official Handover Certificates (BAST), and site coordinate verification.
* **Procurement & Subcontractor Management:** Centralized database for outsource purchase orders, phased payment terms (Down Payment, Milestone 1, Final Settlement), and task item quota validation.
* **Huawei ISDP Scraping & Automation:** Headless browser scraping pipeline intercepting and extracting real-time datasets from the Huawei ISDP portal without manual labor.
* **Workforce Geolocation & Payroll:** GPS geofenced daily attendance with cryptographically verified server-time, automated national holiday detection, and integrated overtime payroll calculation.

**Metrik Kunci & Performa (KPIs):**
* **50,000+:** Data Rows Rendered - Lag-free virtualized table rendering via React Virtuoso
* **Active:** Build Status - Core modules in active engineering delivery
* **4,328:** SKUs Migrated - Zero reconciliation error via shadow dual-write
* **65:** Granular Permissions - Dual-layer RBAC + Individual user overrides
* **3-Stage:** Sequential Approval - PS/SS → RPM → SPM with digital canvas signatures
* **3:** Languages Supported - ID, EN, ZH (instant runtime i18n switch)`,
      links: [
        {
                "label": "Studi Kasus Proyek Databank ERP",
                "url": "/projects/databank"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "#"
        }
],
    },
    en: {
      title: `Project: Databank ERP (Enterprise Telecom & Vendor Management System)`,
      text: `**Project: Databank ERP (Enterprise Telecom & Vendor Management System)**

* **System Overview:** An end-to-end enterprise platform unifying large-scale telecom field operations, purchase order tracking, implementation documents, acceptance and invoicing, automated Huawei ISDP bot scraping, outsource vendor management with 3-stage sequential digital signature approvals, and geofenced attendance integrated into payroll.
* **Delivered Year:** 2025
* **Core Tech Stack:** React, Vite, NestJS, PostgreSQL, TypeScript, PrismaORM, Docker, CI/CD

**Core Architecture & Features:**
* **Field Operations & Project Support:** Installation status tracking, multi-tier Job Order (JO) approval workflows, Official Handover Certificates (BAST), and site coordinate verification.
* **Procurement & Subcontractor Management:** Centralized database for outsource purchase orders, phased payment terms (Down Payment, Milestone 1, Final Settlement), and task item quota validation.
* **Huawei ISDP Scraping & Automation:** Headless browser scraping pipeline intercepting and extracting real-time datasets from the Huawei ISDP portal without manual labor.
* **Workforce Geolocation & Payroll:** GPS geofenced daily attendance with cryptographically verified server-time, automated national holiday detection, and integrated overtime payroll calculation.

**Key Metrics & Performance (KPIs):**
* **50,000+:** Data Rows Rendered - Lag-free virtualized table rendering via React Virtuoso
* **Active:** Build Status - Core modules in active engineering delivery
* **4,328:** SKUs Migrated - Zero reconciliation error via shadow dual-write
* **65:** Granular Permissions - Dual-layer RBAC + Individual user overrides
* **3-Stage:** Sequential Approval - PS/SS → RPM → SPM with digital canvas signatures
* **3:** Languages Supported - ID, EN, ZH (instant runtime i18n switch)`,
      links: [
        {
                "label": "Databank ERP Project Case Study",
                "url": "/projects/databank"
        },
        {
                "label": "View Source Code / Demo",
                "url": "#"
        }
],
    },
  },
  RUANGTUMBUH_DETAIL: {
    id: {
      title: `Proyek: RuangTumbuh (Time Banking Educational Ecosystem & Mentorship Platform)`,
      text: `**Proyek: RuangTumbuh (Time Banking Educational Ecosystem & Mentorship Platform)**

* **Ringkasan Sistem:** A peer-to-peer educational platform built on the Time Banking paradigm, where one hour of learning any discipline holds equal value to one hour of teaching. Powered by atomic PostgreSQL time-wallet transactions, real-time Socket.io communication, an interactive Matter.js 2D physics engine, and Google Gemini AI assistance.
* **Tahun Peluncuran:** 2025
* **Teknologi Utama:** React, Vite, Express, PostgreSQL, Prisma, Socket.io, Gemini AI, Matter.js, Docker

**Fitur & Arsitektur Utama:**
* **Time Wallet Banking Engine:** A cashless peer-to-peer knowledge exchange. Every new user receives 30 free minutes upon signup, trading learning hours instead of currency with atomic escrow and instant refunds.
* **Interactive 2D Physics & Kinetic UX:** Hero canvas powered by Matter.js rigid-body physics, Lenis smooth inertia scrolling, and Framer Motion spring micro-interactions creating a playful, engaging feel.
* **Real-time Messaging & Community Hub:** JWT-authenticated WebSocket pipeline via Socket.io, supporting low-latency 1-on-1 private mentoring chat and 5 topic-focused public community groups.
* **Google Gemini AI Copilot:** Embedded AI assistant leveraging gemini-flash-latest with custom system instructions to guide students, recommend mentors, and resolve time wallet queries.

**Metrik Kunci & Performa (KPIs):**
* **Nilai Capstone 93 / 100:** Proyek Akhir Tim CC26-PS050 DBS Foundation Coding Camp 2026 (Predikat Nilai A, 250 Jam Kurikulum)
* **1 : 1:** Time Value Parity, 1 jam belajar setara 1 jam mengajar di semua bidang
* **100%:** Atomic Guarantee, transaksi saldo waktu bebas error lewat prisma.$transaction
* **26:** Pilihan Bidang Keahlian, kursus dinamis di bidang rekayasa, desain, dan sains
* **<200ms:** p95 API Latency, backend Express 5 performa tinggi di Railway
* **30 Min:** Session Safeguard, logout otomatis untuk mengamankan saldo waktu pengguna
* **100%:** Contract Parity, skema Zod terpadu di formulir klien dan validasi server`,
      links: [
        {
          "label": "Studi Kasus Proyek RuangTumbuh",
          "url": "/projects/ruangtumbuh"
        },
        {
          "label": "Lihat Transkrip Nilai Coding Camp",
          "url": "/certificates/coding-camp-full-stack-developer"
        },
        {
          "label": "Lihat Repositori / Demo",
          "url": "https://ruang-tumbuh.vercel.app/"
        }
      ],
    },
    en: {
      title: `Project: RuangTumbuh (Time Banking Educational Ecosystem & Mentorship Platform)`,
      text: `**Project: RuangTumbuh (Time Banking Educational Ecosystem & Mentorship Platform)**

* **System Overview:** A peer-to-peer educational platform built on the Time Banking paradigm, where one hour of learning any discipline holds equal value to one hour of teaching. Powered by atomic PostgreSQL time-wallet transactions, real-time Socket.io communication, an interactive Matter.js 2D physics engine, and Google Gemini AI assistance.
* **Delivered Year:** 2025
* **Core Tech Stack:** React, Vite, Express, PostgreSQL, Prisma, Socket.io, Gemini AI, Matter.js, Docker

**Core Architecture & Features:**
* **Time Wallet Banking Engine:** A cashless peer-to-peer knowledge exchange. Every new user receives 30 free minutes upon signup, trading learning hours instead of currency with atomic escrow and instant refunds.
* **Interactive 2D Physics & Kinetic UX:** Hero canvas powered by Matter.js rigid-body physics, Lenis smooth inertia scrolling, and Framer Motion spring micro-interactions creating a playful, engaging feel.
* **Real-time Messaging & Community Hub:** JWT-authenticated WebSocket pipeline via Socket.io, supporting low-latency 1-on-1 private mentoring chat and 5 topic-focused public community groups.
* **Google Gemini AI Copilot:** Embedded AI assistant leveraging gemini-flash-latest with custom system instructions to guide students, recommend mentors, and resolve time wallet queries.

**Key Metrics & Performance (KPIs):**
* **93 / 100 Capstone Score:** Official Team CC26-PS050 Final Project at DBS Foundation Coding Camp 2026 (Grade A Distinction, 250 Hours)
* **1 : 1:** Time Value Parity, 1 hour of design equals 1 hour of physics across all courses
* **100%:** Atomic Guarantee, zero partial writes or balance drift via prisma.$transaction
* **26:** Curated Disciplines, dynamic courses across engineering, design, and science
* **<200ms:** p95 API Latency, high-throughput Express 5 backend deployed on Railway
* **30 Min:** Session Safeguard, automated idle logout guarding active time balances
* **100%:** Contract Parity, shared Zod schemas across client forms and server parsers`,
      links: [
        {
          "label": "RuangTumbuh Project Case Study",
          "url": "/projects/ruangtumbuh"
        },
        {
          "label": "View Coding Camp Transcript",
          "url": "/certificates/coding-camp-full-stack-developer"
        },
        {
          "label": "View Source Code / Demo",
          "url": "https://ruang-tumbuh.vercel.app/"
        }
      ],
    },
  },
  FITSMART_DETAIL: {
    id: {
      title: `Proyek: FitSmart (AI-Powered Preventive Healthcare & Clinical Lifestyle Platform)`,
      text: `**Proyek: FitSmart (AI-Powered Preventive Healthcare & Clinical Lifestyle Platform)**

* **Ringkasan Sistem:** A lightweight, client-centric digital healthcare platform designed to democratize preventive medicine. Powered by Google Gemini Pro API with strict clinical domain guardrails, a 24-modal disease diagnostic encyclopedia, evidence-based nutrition science indexing 16+ superfoods, and discipline-specific athletic conditioning routines.
* **Tahun Peluncuran:** 2024
* **Teknologi Utama:** HTML5, CSS3, JavaScript, Gemini Pro AI, FontAwesome

**Fitur & Arsitektur Utama:**
* **Gemini Pro AI Medical Assistant:** Direct REST integration with Google Gemini Pro API featuring deterministic temperature parameters, animated thinking states, and error fallback handling.
* **Clinical Disease & Diagnostic Hub:** 24 modular interactive popups detailing etiology, diagnostic symptoms, clinical treatments, and lifestyle prevention for 6 critical diseases.
* **Nutritional Science & Superfoods:** Comprehensive dietary guidelines indexing 16+ nutrient profiles from cruciferous greens to antioxidant superfoods and cardiovascular omega-3 proteins.
* **Discipline-Specific Athletic Engine:** Dynamic activity guides detailing sports conditioning (Basketball, Soccer, Badminton) and calisthenics routines with zero external runtime dependencies.

**Metrik Kunci & Performa (KPIs):**
* **< 1.2s:** Gemini API Response - Optimized prompt payload with zero temperature for clinical accuracy
* **24:** Diagnostic Modals - Granular symptom, pathology, and therapy popups across 6 conditions
* **100%:** Domain Gating - Strict lexical whitelist rejecting out-of-scope health queries
* **3 Pillars:** Wellness Matrix - Unified ecosystem: Clinical Education · Dietetics · Active Fitness
* **0ms:** Zero-Build Latency - Pure vanilla web execution without runtime framework overhead
* **3,000ms:** Anti-Spam Window - Client-side request lock preventing API quota exhaustion`,
      links: [
        {
                "label": "Studi Kasus Proyek FitSmart",
                "url": "/projects/fitsmart"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/FitSmart"
        }
],
    },
    en: {
      title: `Project: FitSmart (AI-Powered Preventive Healthcare & Clinical Lifestyle Platform)`,
      text: `**Project: FitSmart (AI-Powered Preventive Healthcare & Clinical Lifestyle Platform)**

* **System Overview:** A lightweight, client-centric digital healthcare platform designed to democratize preventive medicine. Powered by Google Gemini Pro API with strict clinical domain guardrails, a 24-modal disease diagnostic encyclopedia, evidence-based nutrition science indexing 16+ superfoods, and discipline-specific athletic conditioning routines.
* **Delivered Year:** 2024
* **Core Tech Stack:** HTML5, CSS3, JavaScript, Gemini Pro AI, FontAwesome

**Core Architecture & Features:**
* **Gemini Pro AI Medical Assistant:** Direct REST integration with Google Gemini Pro API featuring deterministic temperature parameters, animated thinking states, and error fallback handling.
* **Clinical Disease & Diagnostic Hub:** 24 modular interactive popups detailing etiology, diagnostic symptoms, clinical treatments, and lifestyle prevention for 6 critical diseases.
* **Nutritional Science & Superfoods:** Comprehensive dietary guidelines indexing 16+ nutrient profiles from cruciferous greens to antioxidant superfoods and cardiovascular omega-3 proteins.
* **Discipline-Specific Athletic Engine:** Dynamic activity guides detailing sports conditioning (Basketball, Soccer, Badminton) and calisthenics routines with zero external runtime dependencies.

**Key Metrics & Performance (KPIs):**
* **< 1.2s:** Gemini API Response - Optimized prompt payload with zero temperature for clinical accuracy
* **24:** Diagnostic Modals - Granular symptom, pathology, and therapy popups across 6 conditions
* **100%:** Domain Gating - Strict lexical whitelist rejecting out-of-scope health queries
* **3 Pillars:** Wellness Matrix - Unified ecosystem: Clinical Education · Dietetics · Active Fitness
* **0ms:** Zero-Build Latency - Pure vanilla web execution without runtime framework overhead
* **3,000ms:** Anti-Spam Window - Client-side request lock preventing API quota exhaustion`,
      links: [
        {
                "label": "FitSmart Project Case Study",
                "url": "/projects/fitsmart"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/FitSmart"
        }
],
    },
  },
  JAVAISLAND_DETAIL: {
    id: {
      title: `Proyek: JavaIsland (AI-Powered Cultural Heritage & Tourism Portal for Java)`,
      text: `**Proyek: JavaIsland (AI-Powered Cultural Heritage & Tourism Portal for Java)**

* **Ringkasan Sistem:** An interactive cultural preservation and tourism platform dedicated to Java Island. Engineered with Vue.js-driven 3D mouse parallax city exploration, Google's Gemini 1.5 Flash generative AI concierge ('Tanya Jawa') with bilingual domain guardrails, imperial historical chronicles, and traditional culinary archives.
* **Tahun Peluncuran:** 2023
* **Teknologi Utama:** HTML5, CSS3, Tailwind CSS, Vue.js, Gemini 1.5 Flash, JavaScript

**Fitur & Arsitektur Utama:**
* **Gemini 1.5 Flash AI Concierge:** Integrated low-latency LLM endpoint delivering culturally accurate answers with bilingual keyword gating and graceful error recovery.
* **Reactive 3D Parallax Card Engine:** Vue.js mathematical pointer tracking generating real-time 3D isometric rotation and depth illusions without heavy WebGL overhead.
* **Cultural Heritage & Historical Archives:** Comprehensive documentation of imperial Javanese history, royal court ceremonies, and UNESCO-recognized intangible cultural traditions.
* **Gastronomy & Destination Discovery:** Dedicated culinary origin breakdowns paired with multi-parameter destination filters for prospective domestic and international travelers.

**Metrik Kunci & Performa (KPIs):**
* **< 950ms:** Gemini Flash AI Latency - Fast streaming REST inference via gemini-1.5-flash-latest
* **24 Terms:** Bilingual Whitelist Gating - Restricts queries to Indonesian & English cultural keywords
* **8 Cities:** 3D Parallax Tilt Cards - Interactive mouse-tracking perspective transforms in Vue.js
* **9 Domains:** Tourism Category Filters - Volcanoes, heritage temples, crater lakes, coastlines, palaces
* **60 FPS:** Fluid CSS Motion Engine - Infinite marquee carousel and floating ambient cloud drift
* **100%:** Viewport Adaptability - Fluid layout across mobile, tablet, and widescreen displays`,
      links: [
        {
                "label": "Studi Kasus Proyek JavaIsland",
                "url": "/projects/javaisland"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/JavaIsland"
        }
],
    },
    en: {
      title: `Project: JavaIsland (AI-Powered Cultural Heritage & Tourism Portal for Java)`,
      text: `**Project: JavaIsland (AI-Powered Cultural Heritage & Tourism Portal for Java)**

* **System Overview:** An interactive cultural preservation and tourism platform dedicated to Java Island. Engineered with Vue.js-driven 3D mouse parallax city exploration, Google's Gemini 1.5 Flash generative AI concierge ('Tanya Jawa') with bilingual domain guardrails, imperial historical chronicles, and traditional culinary archives.
* **Delivered Year:** 2023
* **Core Tech Stack:** HTML5, CSS3, Tailwind CSS, Vue.js, Gemini 1.5 Flash, JavaScript

**Core Architecture & Features:**
* **Gemini 1.5 Flash AI Concierge:** Integrated low-latency LLM endpoint delivering culturally accurate answers with bilingual keyword gating and graceful error recovery.
* **Reactive 3D Parallax Card Engine:** Vue.js mathematical pointer tracking generating real-time 3D isometric rotation and depth illusions without heavy WebGL overhead.
* **Cultural Heritage & Historical Archives:** Comprehensive documentation of imperial Javanese history, royal court ceremonies, and UNESCO-recognized intangible cultural traditions.
* **Gastronomy & Destination Discovery:** Dedicated culinary origin breakdowns paired with multi-parameter destination filters for prospective domestic and international travelers.

**Key Metrics & Performance (KPIs):**
* **< 950ms:** Gemini Flash AI Latency - Fast streaming REST inference via gemini-1.5-flash-latest
* **24 Terms:** Bilingual Whitelist Gating - Restricts queries to Indonesian & English cultural keywords
* **8 Cities:** 3D Parallax Tilt Cards - Interactive mouse-tracking perspective transforms in Vue.js
* **9 Domains:** Tourism Category Filters - Volcanoes, heritage temples, crater lakes, coastlines, palaces
* **60 FPS:** Fluid CSS Motion Engine - Infinite marquee carousel and floating ambient cloud drift
* **100%:** Viewport Adaptability - Fluid layout across mobile, tablet, and widescreen displays`,
      links: [
        {
                "label": "JavaIsland Project Case Study",
                "url": "/projects/javaisland"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/JavaIsland"
        }
],
    },
  },
  PUSAKAKU_DETAIL: {
    id: {
      title: `Proyek: Pusakaku (Digital Preservation of Indonesian Traditional Folk Games & Cultural Heritage)`,
      text: `**Proyek: Pusakaku (Digital Preservation of Indonesian Traditional Folk Games & Cultural Heritage)**

* **Ringkasan Sistem:** An educational cultural heritage platform engineered to revive and preserve Indonesia's endangered traditional folk games. Combines rich historical ethnography, psychomotor and cognitive development analyses, an interactive 10-stage gamified assessment quiz engine, and custom display typography.
* **Prestasi Resmi:** Juara 1 Nasional (1st Place Champion) Web Design Competition pada ajang ICOMFEST 2025 di Universitas Ahmad Dahlan Yogyakarta.
* **Tahun Peluncuran:** 2023
* **Teknologi Utama:** HTML5, CSS3, Tailwind CSS, JavaScript, Interactive Quiz, Custom Typography

**Fitur & Arsitektur Utama:**
* **Gamified Cultural Assessment:** Dynamic 10-stage quiz state machine evaluating traditional folk game comprehension with automated scoring and constructive feedback.
* **Anthropological Game Archives:** Detailed dossiers on Congklak, Egrang, Kelereng, and Layang-Layang analyzing origins, cultural philosophies, and physical benefits.
* **Kinetic Marquee & Visual UX:** Dual-lane infinite carousel displaying regional folk activities with hardware-accelerated CSS animations and responsive hover overlays.
* **Cultural Preservation Advocacy:** Structured educational initiative promoting traditional physical play as a healthier, community-oriented alternative to excessive screen time.

**Metrik Kunci & Performa (KPIs):**
* **10 Steps:** Interactive Quiz Engine - Real-time scoring and feedback evaluation in game.js
* **8+ Games:** Traditional Activities Indexed - From Congklak and Egrang to Gobak Sodor and Bentengan
* **4 Dossiers:** Dedicated Deep-Dive Portals - Comprehensive history, physics, and rules documentation
* **6 Breakpoints:** Responsive Tailwind Matrix - Custom screens from xs (250px) to 2xl (1536px)
* **60 FPS:** GPU-Accelerated Marquee - Fluid keyframe translations without layout recalculation
* **0ms:** Zero-Build Runtime Latency - Pure vanilla web execution on static edge CDN`,
      links: [
        {
                "label": "Studi Kasus Proyek Pusakaku",
                "url": "/projects/pusakaku"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/Pusakaku"
        }
],
    },
    en: {
      title: `Project: Pusakaku (Digital Preservation of Indonesian Traditional Folk Games & Cultural Heritage)`,
      text: `**Project: Pusakaku (Digital Preservation of Indonesian Traditional Folk Games & Cultural Heritage)**

* **System Overview:** An educational cultural heritage platform engineered to revive and preserve Indonesia's endangered traditional folk games. Combines rich historical ethnography, psychomotor and cognitive development analyses, an interactive 10-stage gamified assessment quiz engine, and custom display typography.
* **Championship Honor:** 1st Place National Champion at the ICOMFEST 2025 Web Design Competition (Universitas Ahmad Dahlan).
* **Delivered Year:** 2023
* **Core Tech Stack:** HTML5, CSS3, Tailwind CSS, JavaScript, Interactive Quiz, Custom Typography

**Core Architecture & Features:**
* **Gamified Cultural Assessment:** Dynamic 10-stage quiz state machine evaluating traditional folk game comprehension with automated scoring and constructive feedback.
* **Anthropological Game Archives:** Detailed dossiers on Congklak, Egrang, Kelereng, and Layang-Layang analyzing origins, cultural philosophies, and physical benefits.
* **Kinetic Marquee & Visual UX:** Dual-lane infinite carousel displaying regional folk activities with hardware-accelerated CSS animations and responsive hover overlays.
* **Cultural Preservation Advocacy:** Structured educational initiative promoting traditional physical play as a healthier, community-oriented alternative to excessive screen time.

**Key Metrics & Performance (KPIs):**
* **10 Steps:** Interactive Quiz Engine - Real-time scoring and feedback evaluation in game.js
* **8+ Games:** Traditional Activities Indexed - From Congklak and Egrang to Gobak Sodor and Bentengan
* **4 Dossiers:** Dedicated Deep-Dive Portals - Comprehensive history, physics, and rules documentation
* **6 Breakpoints:** Responsive Tailwind Matrix - Custom screens from xs (250px) to 2xl (1536px)
* **60 FPS:** GPU-Accelerated Marquee - Fluid keyframe translations without layout recalculation
* **0ms:** Zero-Build Runtime Latency - Pure vanilla web execution on static edge CDN`,
      links: [
        {
                "label": "Pusakaku Project Case Study",
                "url": "/projects/pusakaku"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/Pusakaku"
        }
],
    },
  },
  SEMUABISA_DETAIL: {
    id: {
      title: `Proyek: SemuaBisa (Inclusive EdTech Ecosystem & Youth Digital Career Platform)`,
      text: `**Proyek: SemuaBisa (Inclusive EdTech Ecosystem & Youth Digital Career Platform)**

* **Ringkasan Sistem:** An inclusive digital education ecosystem and workforce development platform built for the Unila 2024 National Web Design Competition by Team Deadliner. Empowers Indonesian youth to master modern digital competencies through 100% free bootcamps across 8 tech disciplines, accessible university degree pathways with Alpine.js tabs, a freelance digital services hub, and verified tech career job boards.
* **Prestasi Resmi:** Top 5 Finalis Nasional Web Development Competition di Universitas Lampung (UNILA) 2025.
* **Tahun Peluncuran:** 2024
* **Teknologi Utama:** HTML5, CSS3, Tailwind CSS, DaisyUI, Alpine.js, JavaScript

**Fitur & Arsitektur Utama:**
* **Industry-Aligned Tech Bootcamps:** Comprehensive curriculum tracks across 8 core digital disciplines designed to take beginners to junior-ready engineering competence.
* **Higher Education & Scholarship Navigator:** Alpine.js keyboard-accessible tabbed roadmap matching students with academic tech programs and financial scholarships.
* **Digital Services Freelance Hub:** Marketplace platform allowing students and certified alumni to monetize their technical skills with real enterprise clients.
* **Curated Tech Job Board:** Direct recruitment channels partnering with top tech industry innovators to place junior developers into internships and full-time careers.

**Metrik Kunci & Performa (KPIs):**
* **8 Tracks:** Specialized Tech Bootcamps - Web, Mobile, ML, Data, UI/UX, Cyber, Game, Marketing
* **100% Free:** Youth Scholarship Access - Zero tuition barrier for aspiring Indonesian students
* **4 Pillars:** Unified Career Ecosystem - Bootcamps · University · Freelance · Job Board
* **4 Domains:** Keyboard-Navigable Tabs - Alpine.js ARIA tablist for academic roadmaps
* **60 FPS:** AOS Kinetic Scroll Reveals - Smooth viewport entry with hardware-accelerated transforms
* **3 Engineers:** Team Deadliner Collaboration - Built for National Web Design Competition Unila 2024`,
      links: [
        {
                "label": "Studi Kasus Proyek SemuaBisa",
                "url": "/projects/semua-bisa"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/SemuaBisa-Web"
        }
],
    },
    en: {
      title: `Project: SemuaBisa (Inclusive EdTech Ecosystem & Youth Digital Career Platform)`,
      text: `**Project: SemuaBisa (Inclusive EdTech Ecosystem & Youth Digital Career Platform)**

* **System Overview:** An inclusive digital education ecosystem and workforce development platform built for the Unila 2024 National Web Design Competition by Team Deadliner. Empowers Indonesian youth to master modern digital competencies through 100% free bootcamps across 8 tech disciplines, accessible university degree pathways with Alpine.js tabs, a freelance digital services hub, and verified tech career job boards.
* **Official Honor:** Top 5 National Finalist at the UNILA 2025 Web Development Competition (Universitas Lampung).
* **Delivered Year:** 2024
* **Core Tech Stack:** HTML5, CSS3, Tailwind CSS, DaisyUI, Alpine.js, JavaScript

**Core Architecture & Features:**
* **Industry-Aligned Tech Bootcamps:** Comprehensive curriculum tracks across 8 core digital disciplines designed to take beginners to junior-ready engineering competence.
* **Higher Education & Scholarship Navigator:** Alpine.js keyboard-accessible tabbed roadmap matching students with academic tech programs and financial scholarships.
* **Digital Services Freelance Hub:** Marketplace platform allowing students and certified alumni to monetize their technical skills with real enterprise clients.
* **Curated Tech Job Board:** Direct recruitment channels partnering with top tech industry innovators to place junior developers into internships and full-time careers.

**Key Metrics & Performance (KPIs):**
* **8 Tracks:** Specialized Tech Bootcamps - Web, Mobile, ML, Data, UI/UX, Cyber, Game, Marketing
* **100% Free:** Youth Scholarship Access - Zero tuition barrier for aspiring Indonesian students
* **4 Pillars:** Unified Career Ecosystem - Bootcamps · University · Freelance · Job Board
* **4 Domains:** Keyboard-Navigable Tabs - Alpine.js ARIA tablist for academic roadmaps
* **60 FPS:** AOS Kinetic Scroll Reveals - Smooth viewport entry with hardware-accelerated transforms
* **3 Engineers:** Team Deadliner Collaboration - Built for National Web Design Competition Unila 2024`,
      links: [
        {
                "label": "SemuaBisa Project Case Study",
                "url": "/projects/semua-bisa"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/SemuaBisa-Web"
        }
],
    },
  },
  IDNCOURSE_DETAIL: {
    id: {
      title: `Proyek: IDNCourse (Modern Tech E-Learning Platform & Interactive Course Hub)`,
      text: `**Proyek: IDNCourse (Modern Tech E-Learning Platform & Interactive Course Hub)**

* **Ringkasan Sistem:** A collaborative online technology education platform built for competition by a 3-developer team. Features category-based animated course filtering across 6 technical tracks (C#, Python, Web Dev, AI, Data Science, Android), interactive curriculum modal popups, dynamic localStorage session management, and responsive CSS grid architectures.
* **Tahun Peluncuran:** 2023
* **Teknologi Utama:** HTML5, CSS3, JavaScript, Animation Engine, LocalStorage

**Fitur & Arsitektur Utama:**
* **Animated Course Filter Engine:** Vanilla JavaScript animation pipeline dynamically coordinating exit and entrance keyframes for seamless technology category switching.
* **Structured Course Catalog & Syllabi:** Modular course cards with enrollment counters, rating badges, and modal overlays detailing learning outcomes.
* **Collaborative Team Architecture:** Built as a competition collaboration uniting dedicated front-end engineering, back-end API thinking, and modern visual design.
* **Session Persistence & Interactive FAQ:** Client-side localStorage session hydration paired with accordion-based knowledge discovery.

**Metrik Kunci & Performa (KPIs):**
* **500ms:** Filter Transition Window - Coordinated fadeOutDown & fadeInUp CSS transitions
* **6 Tracks:** Core Technology Disciplines - Web, AI, Data Science, C#, Python, Mobile Android
* **5 Portals:** Dedicated Multi-Page Views - Home, About, Course, Team, Bootcamp, and Login
* **3 Developers:** Collaborative Student Team - Adyvka (Front-End), Abdullah (Back-End), Rosan (Design)
* **0ms:** Zero-Build Load Latency - Pure vanilla web execution without runtime bundle overhead
* **100%:** Responsive Adaptability - Custom CSS Flexbox and Grid layouts across all viewports`,
      links: [
        {
                "label": "Studi Kasus Proyek IDNCourse",
                "url": "/projects/idncourse"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/IDNCourse-Web"
        }
],
    },
    en: {
      title: `Project: IDNCourse (Modern Tech E-Learning Platform & Interactive Course Hub)`,
      text: `**Project: IDNCourse (Modern Tech E-Learning Platform & Interactive Course Hub)**

* **System Overview:** A collaborative online technology education platform built for competition by a 3-developer team. Features category-based animated course filtering across 6 technical tracks (C#, Python, Web Dev, AI, Data Science, Android), interactive curriculum modal popups, dynamic localStorage session management, and responsive CSS grid architectures.
* **Delivered Year:** 2023
* **Core Tech Stack:** HTML5, CSS3, JavaScript, Animation Engine, LocalStorage

**Core Architecture & Features:**
* **Animated Course Filter Engine:** Vanilla JavaScript animation pipeline dynamically coordinating exit and entrance keyframes for seamless technology category switching.
* **Structured Course Catalog & Syllabi:** Modular course cards with enrollment counters, rating badges, and modal overlays detailing learning outcomes.
* **Collaborative Team Architecture:** Built as a competition collaboration uniting dedicated front-end engineering, back-end API thinking, and modern visual design.
* **Session Persistence & Interactive FAQ:** Client-side localStorage session hydration paired with accordion-based knowledge discovery.

**Key Metrics & Performance (KPIs):**
* **500ms:** Filter Transition Window - Coordinated fadeOutDown & fadeInUp CSS transitions
* **6 Tracks:** Core Technology Disciplines - Web, AI, Data Science, C#, Python, Mobile Android
* **5 Portals:** Dedicated Multi-Page Views - Home, About, Course, Team, Bootcamp, and Login
* **3 Developers:** Collaborative Student Team - Adyvka (Front-End), Abdullah (Back-End), Rosan (Design)
* **0ms:** Zero-Build Load Latency - Pure vanilla web execution without runtime bundle overhead
* **100%:** Responsive Adaptability - Custom CSS Flexbox and Grid layouts across all viewports`,
      links: [
        {
                "label": "IDNCourse Project Case Study",
                "url": "/projects/idncourse"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/IDNCourse-Web"
        }
],
    },
  },
  COFFEESHOP_DETAIL: {
    id: {
      title: `Proyek: Coffeee Shop (Artisan Coffee Brand Experience & Modern Retail Showcase Landing)`,
      text: `**Proyek: Coffeee Shop (Artisan Coffee Brand Experience & Modern Retail Showcase Landing)**

* **Ringkasan Sistem:** A contemporary artisan coffee retail and branch showcase web platform engineered with Tailwind CSS, Flowbite UI architecture, and AOS scroll-triggered animation choreography. Features dynamic beverage catalog cards with multi-size drink volume selectors, interactive coffee bean showcase hover effects, multi-city branch locator cards (Depok, Central Jakarta, Bandung), and a responsive team endorsement grid.
* **Tahun Peluncuran:** 2023
* **Teknologi Utama:** HTML5, Tailwind CSS, Flowbite, AOS (Animate On Scroll), JavaScript, Responsive UI

**Fitur & Arsitektur Utama:**
* **Tailwind Utility Architecture:** Streamlined component-level styling built with Tailwind utility classes for minimal footprint and maximum aesthetic coherence.
* **Interactive E-Commerce Sizing:** Product cards featuring dynamic cup size selection (S/M/L), star rating aggregates, and direct checkout call-to-actions.
* **Multi-Location Branch Network:** Structured branch discovery cards highlighting physical café locations across major urban centers with engagement statistics.
* **AOS Scroll Choreography:** Layered entrance motion choreography providing subtle directional fades as visitors browse through menu categories.

**Metrik Kunci & Performa (KPIs):**
* **0.5s:** Hover Transition Latency - Hardware-accelerated CSS ease transitions on roast cards
* **3 Cities:** Retail Branch Footprint - Strategic café locations across Depok, Jakarta Pusat, and Bandung
* **3 Sizes:** Interactive Cup Sizing - Dynamic Small (S), Medium (M), and Large (L) order selections
* **3 Roasts:** Curated Blend Showcase - Americano Dark Roasting, Brazilian Coffee Milk, and Vanilla Latte
* **60 FPS:** Scroll Animation Fidelity - Hardware-accelerated AOS (Animate On Scroll) motion triggers
* **100%:** Mobile Viewport Fluidity - Responsive utility grid adapting from 320px mobile to 4K displays`,
      links: [
        {
                "label": "Studi Kasus Proyek Coffeee Shop",
                "url": "/projects/coffeee-shop"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/Coffeee-Shop"
        }
],
    },
    en: {
      title: `Project: Coffeee Shop (Artisan Coffee Brand Experience & Modern Retail Showcase Landing)`,
      text: `**Project: Coffeee Shop (Artisan Coffee Brand Experience & Modern Retail Showcase Landing)**

* **System Overview:** A contemporary artisan coffee retail and branch showcase web platform engineered with Tailwind CSS, Flowbite UI architecture, and AOS scroll-triggered animation choreography. Features dynamic beverage catalog cards with multi-size drink volume selectors, interactive coffee bean showcase hover effects, multi-city branch locator cards (Depok, Central Jakarta, Bandung), and a responsive team endorsement grid.
* **Delivered Year:** 2023
* **Core Tech Stack:** HTML5, Tailwind CSS, Flowbite, AOS (Animate On Scroll), JavaScript, Responsive UI

**Core Architecture & Features:**
* **Tailwind Utility Architecture:** Streamlined component-level styling built with Tailwind utility classes for minimal footprint and maximum aesthetic coherence.
* **Interactive E-Commerce Sizing:** Product cards featuring dynamic cup size selection (S/M/L), star rating aggregates, and direct checkout call-to-actions.
* **Multi-Location Branch Network:** Structured branch discovery cards highlighting physical café locations across major urban centers with engagement statistics.
* **AOS Scroll Choreography:** Layered entrance motion choreography providing subtle directional fades as visitors browse through menu categories.

**Key Metrics & Performance (KPIs):**
* **0.5s:** Hover Transition Latency - Hardware-accelerated CSS ease transitions on roast cards
* **3 Cities:** Retail Branch Footprint - Strategic café locations across Depok, Jakarta Pusat, and Bandung
* **3 Sizes:** Interactive Cup Sizing - Dynamic Small (S), Medium (M), and Large (L) order selections
* **3 Roasts:** Curated Blend Showcase - Americano Dark Roasting, Brazilian Coffee Milk, and Vanilla Latte
* **60 FPS:** Scroll Animation Fidelity - Hardware-accelerated AOS (Animate On Scroll) motion triggers
* **100%:** Mobile Viewport Fluidity - Responsive utility grid adapting from 320px mobile to 4K displays`,
      links: [
        {
                "label": "Coffeee Shop Project Case Study",
                "url": "/projects/coffeee-shop"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/Coffeee-Shop"
        }
],
    },
  },
  MYSTYLE_DETAIL: {
    id: {
      title: `Proyek: MyStyle (Modern Fashion E-Commerce & Curated Apparel Storefront)`,
      text: `**Proyek: MyStyle (Modern Fashion E-Commerce & Curated Apparel Storefront)**

* **Ringkasan Sistem:** A contemporary fashion e-commerce storefront engineered with Tailwind CSS v4 and bespoke micro-interactions. Features a 9-portal multi-page architecture spanning editorial storefront discovery, interactive apparel sizing and color swatch customizers, comprehensive shopping bag management with promo vouchers, and dedicated patron profile portals.
* **Tahun Peluncuran:** 2023
* **Teknologi Utama:** HTML5, Tailwind CSS v4, CSS3, JavaScript, Micro-Interactions, Custom Fonts

**Fitur & Arsitektur Utama:**
* **Tailwind CSS v4 Engine:** Modern utility-first architecture compiled with Tailwind v4 for instant stylesheet execution and minimal footprint.
* **Interactive Commerce Workflow:** End-to-end shopping journey spanning product variant selectors, cart quantity toggles, and voucher integrations.
* **Custom Micro-Interaction Physics:** Bespoke CSS hover overlays (#pembungkus) providing smooth gradient fades, text strokes, and button lifts.
* **Full Customer Account Suite:** Integrated patron profile management, address editing, and simulated Google OAuth onboarding.

**Metrik Kunci & Performa (KPIs):**
* **9 Portals:** Multi-Page Architecture - Storefront, catalog, cart, detail, account, edit, auth views
* **0.5s:** Micro-Interaction Latency - Hardware-accelerated CSS ease transitions on collection cards
* **10 Categories:** Curated Fashion Tracks - T-shirts, shirts, jackets, pants, footwear, and accessories
* **4 Sizes:** Garment Fit Variations - SM, M, L, and XL tailored apparel sizing configurations
* **v4.0:** Tailwind CSS Engine - Modern zero-config stylesheet engine with @import 'tailwindcss'
* **100%:** Mobile Viewport Fluidity - Responsive utility grid adapting from 320px mobile to 4K displays`,
      links: [
        {
                "label": "Studi Kasus Proyek MyStyle",
                "url": "/projects/mystyle"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/MyStyle"
        }
],
    },
    en: {
      title: `Project: MyStyle (Modern Fashion E-Commerce & Curated Apparel Storefront)`,
      text: `**Project: MyStyle (Modern Fashion E-Commerce & Curated Apparel Storefront)**

* **System Overview:** A contemporary fashion e-commerce storefront engineered with Tailwind CSS v4 and bespoke micro-interactions. Features a 9-portal multi-page architecture spanning editorial storefront discovery, interactive apparel sizing and color swatch customizers, comprehensive shopping bag management with promo vouchers, and dedicated patron profile portals.
* **Delivered Year:** 2023
* **Core Tech Stack:** HTML5, Tailwind CSS v4, CSS3, JavaScript, Micro-Interactions, Custom Fonts

**Core Architecture & Features:**
* **Tailwind CSS v4 Engine:** Modern utility-first architecture compiled with Tailwind v4 for instant stylesheet execution and minimal footprint.
* **Interactive Commerce Workflow:** End-to-end shopping journey spanning product variant selectors, cart quantity toggles, and voucher integrations.
* **Custom Micro-Interaction Physics:** Bespoke CSS hover overlays (#pembungkus) providing smooth gradient fades, text strokes, and button lifts.
* **Full Customer Account Suite:** Integrated patron profile management, address editing, and simulated Google OAuth onboarding.

**Key Metrics & Performance (KPIs):**
* **9 Portals:** Multi-Page Architecture - Storefront, catalog, cart, detail, account, edit, auth views
* **0.5s:** Micro-Interaction Latency - Hardware-accelerated CSS ease transitions on collection cards
* **10 Categories:** Curated Fashion Tracks - T-shirts, shirts, jackets, pants, footwear, and accessories
* **4 Sizes:** Garment Fit Variations - SM, M, L, and XL tailored apparel sizing configurations
* **v4.0:** Tailwind CSS Engine - Modern zero-config stylesheet engine with @import 'tailwindcss'
* **100%:** Mobile Viewport Fluidity - Responsive utility grid adapting from 320px mobile to 4K displays`,
      links: [
        {
                "label": "MyStyle Project Case Study",
                "url": "/projects/mystyle"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/MyStyle"
        }
],
    },
  },
  DELIFOOD_DETAIL: {
    id: {
      title: `Proyek: DeliFood (Real-Time Mobile E-Commerce & Food Delivery Platform)`,
      text: `**Proyek: DeliFood (Real-Time Mobile E-Commerce & Food Delivery Platform)**

* **Ringkasan Sistem:** A responsive, real-time mobile food ordering application built with Flutter and Cloud Firestore. Powered by asynchronous snapshot streams for live catalog synchronization, atomic cart quantity deduplication, dynamic wishlist management, and a 4-stage visual delivery tracking pipeline.
* **Tahun Peluncuran:** 2024
* **Teknologi Utama:** Flutter, Dart, Firebase, Cloud Firestore, Provider, Material 3

**Fitur & Arsitektur Utama:**
* **Stream-Driven Reactive UI:** Every core view subscribes directly to Cloud Firestore snapshots via StreamBuilder, updating catalog items, cart quantities, and wishlist states instantaneously without manual pull-to-refresh.
* **Smart Basket & Deduplication Engine:** Intelligent cart operations check for existing items in user collections, auto-incrementing quantity (quantity + 1) on duplicate picks and supporting swipe-to-dismiss deletion.
* **Dual-Write Identity & Profile Security:** Secure Firebase Authentication combined with atomic Firestore user document writes storing demographic metadata, birth dates via date picker, and server timestamps.
* **4-Stage Visual Delivery Stepper:** Comprehensive order lifecycle tracking guiding customers from order placement to doorstep arrival, complete with granular transit checkpoints and horizontal item summaries.

**Metrik Kunci & Performa (KPIs):**
* **0ms:** Sync Latency - Instant reactive UI updates via Firebase Stream listeners
* **100%:** Duplicate Free - Smart cart query auto-increments quantity instead of duplicating
* **4-Stage:** Delivery Stepper - Payment → Packaging → In Transit → Delivered lifecycle
* **5:** App Domains - Home, Wishlist, Smart Basket, Order Tracking, and Profile
* **60 FPS:** Hero Animation - Smooth Material 3 Hero widget image transitions
* **Dual:** Auth Registration - Firebase Auth + Firestore user profile dual-write`,
      links: [
        {
                "label": "Studi Kasus Proyek DeliFood",
                "url": "/projects/delifood"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/DeliFood"
        }
],
    },
    en: {
      title: `Project: DeliFood (Real-Time Mobile E-Commerce & Food Delivery Platform)`,
      text: `**Project: DeliFood (Real-Time Mobile E-Commerce & Food Delivery Platform)**

* **System Overview:** A responsive, real-time mobile food ordering application built with Flutter and Cloud Firestore. Powered by asynchronous snapshot streams for live catalog synchronization, atomic cart quantity deduplication, dynamic wishlist management, and a 4-stage visual delivery tracking pipeline.
* **Delivered Year:** 2024
* **Core Tech Stack:** Flutter, Dart, Firebase, Cloud Firestore, Provider, Material 3

**Core Architecture & Features:**
* **Stream-Driven Reactive UI:** Every core view subscribes directly to Cloud Firestore snapshots via StreamBuilder, updating catalog items, cart quantities, and wishlist states instantaneously without manual pull-to-refresh.
* **Smart Basket & Deduplication Engine:** Intelligent cart operations check for existing items in user collections, auto-incrementing quantity (quantity + 1) on duplicate picks and supporting swipe-to-dismiss deletion.
* **Dual-Write Identity & Profile Security:** Secure Firebase Authentication combined with atomic Firestore user document writes storing demographic metadata, birth dates via date picker, and server timestamps.
* **4-Stage Visual Delivery Stepper:** Comprehensive order lifecycle tracking guiding customers from order placement to doorstep arrival, complete with granular transit checkpoints and horizontal item summaries.

**Key Metrics & Performance (KPIs):**
* **0ms:** Sync Latency - Instant reactive UI updates via Firebase Stream listeners
* **100%:** Duplicate Free - Smart cart query auto-increments quantity instead of duplicating
* **4-Stage:** Delivery Stepper - Payment → Packaging → In Transit → Delivered lifecycle
* **5:** App Domains - Home, Wishlist, Smart Basket, Order Tracking, and Profile
* **60 FPS:** Hero Animation - Smooth Material 3 Hero widget image transitions
* **Dual:** Auth Registration - Firebase Auth + Firestore user profile dual-write`,
      links: [
        {
                "label": "DeliFood Project Case Study",
                "url": "/projects/delifood"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/DeliFood"
        }
],
    },
  },
  AI_TICKET_DETAIL: {
    id: {
      title: `Proyek: AI Ticket Manager (Intelligent Task Orchestration, Real-Time Cloud Firestore & Google Gemini AI Synthesis)`,
      text: `**Proyek: AI Ticket Manager (Intelligent Task Orchestration, Real-Time Cloud Firestore & Google Gemini AI Synthesis)**

* **Ringkasan Sistem:** A cross-platform intelligent task and ticket lifecycle management mobile application built with Flutter, Firebase Authentication, Cloud Firestore, and Google Generative AI (Gemini Flash & Gemini Pro fallback). Features secure multi-tenant user isolation (users/{uid}/tasks), real-time live data streaming, natural language task summarization, dynamic user prompt injection, comprehensive task lifecycle tracking (Open, In Progress, Done), date-time scheduling, and responsive state management with Provider.
* **Tahun Peluncuran:** 2024
* **Teknologi Utama:** Flutter, Dart, Firebase, Gemini API, Provider, Cloud Firestore

**Fitur & Arsitektur Utama:**
* **Google Gemini LLM Task Synthesis Engine:** Deep integration with google_generative_ai: ^0.4.7 utilizing Gemini models to synthesize complex tasks into concise executive summaries with support for dynamic custom user prompts and automated model fallbacks.
* **Real-Time Cloud Firestore Multi-Tenant Pipeline:** Reactive data architecture powered by StreamBuilder subscribing to users/{uid}/tasks collections, providing instantaneous cloud synchronization, automatic offline caching, and server timestamping.
* **Provider Reactive State Management Architecture:** Decoupled state management leveraging Provider and ChangeNotifier (TicketProvider), isolating AI inference operations, loading states, and localized ticket collections from the presentation layer.
* **Secure Identity Governance via Firebase Auth:** Enterprise user authentication managing session persistence, display name updates, and client-side error handling translating raw Firebase exceptions into intuitive user feedback.`,
      links: [
        {
                "label": "Studi Kasus Proyek AI Ticket Manager",
                "url": "/projects/ai-ticket-manager"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/AI-Generator-App"
        }
],
    },
    en: {
      title: `Project: AI Ticket Manager (Intelligent Task Orchestration, Real-Time Cloud Firestore & Google Gemini AI Synthesis)`,
      text: `**Project: AI Ticket Manager (Intelligent Task Orchestration, Real-Time Cloud Firestore & Google Gemini AI Synthesis)**

* **System Overview:** A cross-platform intelligent task and ticket lifecycle management mobile application built with Flutter, Firebase Authentication, Cloud Firestore, and Google Generative AI (Gemini Flash & Gemini Pro fallback). Features secure multi-tenant user isolation (users/{uid}/tasks), real-time live data streaming, natural language task summarization, dynamic user prompt injection, comprehensive task lifecycle tracking (Open, In Progress, Done), date-time scheduling, and responsive state management with Provider.
* **Delivered Year:** 2024
* **Core Tech Stack:** Flutter, Dart, Firebase, Gemini API, Provider, Cloud Firestore

**Core Architecture & Features:**
* **Google Gemini LLM Task Synthesis Engine:** Deep integration with google_generative_ai: ^0.4.7 utilizing Gemini models to synthesize complex tasks into concise executive summaries with support for dynamic custom user prompts and automated model fallbacks.
* **Real-Time Cloud Firestore Multi-Tenant Pipeline:** Reactive data architecture powered by StreamBuilder subscribing to users/{uid}/tasks collections, providing instantaneous cloud synchronization, automatic offline caching, and server timestamping.
* **Provider Reactive State Management Architecture:** Decoupled state management leveraging Provider and ChangeNotifier (TicketProvider), isolating AI inference operations, loading states, and localized ticket collections from the presentation layer.
* **Secure Identity Governance via Firebase Auth:** Enterprise user authentication managing session persistence, display name updates, and client-side error handling translating raw Firebase exceptions into intuitive user feedback.`,
      links: [
        {
                "label": "AI Ticket Manager Project Case Study",
                "url": "/projects/ai-ticket-manager"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/AI-Generator-App"
        }
],
    },
  },
  ATTENDANCE_DETAIL: {
    id: {
      title: `Proyek: Attendance App (On-Device Biometric Face Verification & Mobile Task Attendance System)`,
      text: `**Proyek: Attendance App (On-Device Biometric Face Verification & Mobile Task Attendance System)**

* **Ringkasan Sistem:** A cross-platform mobile attendance and productivity platform built with Flutter, Firebase, and Google ML Kit. Combines real-time on-device biometric facial landmark detection via hardware camera streams, live cloud task synchronization through Cloud Firestore, reactive GetX theme management, and stateless Firebase Authentication.
* **Tahun Peluncuran:** 2024
* **Teknologi Utama:** Flutter, Dart, Firebase, Google ML Kit, GetX, Camera API

**Fitur & Arsitektur Utama:**
* **On-Device Biometric Face Verification:** Integrates Google ML Kit face detection directly with camera hardware streams. Analyzes facial landmarks, contours, and presence in real time with sub-120ms inference latency and zero cloud data leaks.
* **Stream-Driven Cloud Firestore Engine:** Employs persistent StreamBuilder listeners on user-scoped Firestore collections. Delivers real-time CRUD reactivity, automated timestamp auditing, and dynamic category task count recalculations.
* **Reactive State & Instant Theme Engine:** Utilizes GetX reactive observables (isTheme.obs) to decouple theme state from widget lifecycles. Users switch seamlessly between custom high-contrast light and dark themes with zero redraw lag.
* **Stateless Auth & Password Recovery:** Secured with Firebase Authentication supporting email/password registration, persistent session tokens via authStateChanges(), and self-service automated password reset pipelines.

**Metrik Kunci & Performa (KPIs):**
* **< 120ms:** On-Device ML Latency - Hardware-accelerated Google ML Kit face landmark & contour evaluation
* **0ms:** Sync Latency - Instant reactive UI updates via Firebase Firestore real-time snapshot streams
* **100%:** Biometric Privacy - Zero biometric face images uploaded to cloud, with 100% processed locally on-device
* **4 Domains:** Dynamic Categories - Design, Sport, Meet, and Work with automated counter calculation
* **Reactive:** GetX Theme Engine - One-tap instantaneous switching between custom Light and Dark themes
* **Dual Guard:** Auth & Security - Stateless Firebase Auth credentials paired with user-isolated Firestore rules`,
      links: [
        {
                "label": "Studi Kasus Proyek Attendance App",
                "url": "/projects/attendance-app"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/Attendance-App"
        }
],
    },
    en: {
      title: `Project: Attendance App (On-Device Biometric Face Verification & Mobile Task Attendance System)`,
      text: `**Project: Attendance App (On-Device Biometric Face Verification & Mobile Task Attendance System)**

* **System Overview:** A cross-platform mobile attendance and productivity platform built with Flutter, Firebase, and Google ML Kit. Combines real-time on-device biometric facial landmark detection via hardware camera streams, live cloud task synchronization through Cloud Firestore, reactive GetX theme management, and stateless Firebase Authentication.
* **Delivered Year:** 2024
* **Core Tech Stack:** Flutter, Dart, Firebase, Google ML Kit, GetX, Camera API

**Core Architecture & Features:**
* **On-Device Biometric Face Verification:** Integrates Google ML Kit face detection directly with camera hardware streams. Analyzes facial landmarks, contours, and presence in real time with sub-120ms inference latency and zero cloud data leaks.
* **Stream-Driven Cloud Firestore Engine:** Employs persistent StreamBuilder listeners on user-scoped Firestore collections. Delivers real-time CRUD reactivity, automated timestamp auditing, and dynamic category task count recalculations.
* **Reactive State & Instant Theme Engine:** Utilizes GetX reactive observables (isTheme.obs) to decouple theme state from widget lifecycles. Users switch seamlessly between custom high-contrast light and dark themes with zero redraw lag.
* **Stateless Auth & Password Recovery:** Secured with Firebase Authentication supporting email/password registration, persistent session tokens via authStateChanges(), and self-service automated password reset pipelines.

**Key Metrics & Performance (KPIs):**
* **< 120ms:** On-Device ML Latency - Hardware-accelerated Google ML Kit face landmark & contour evaluation
* **0ms:** Sync Latency - Instant reactive UI updates via Firebase Firestore real-time snapshot streams
* **100%:** Biometric Privacy - Zero biometric face images uploaded to cloud, with 100% processed locally on-device
* **4 Domains:** Dynamic Categories - Design, Sport, Meet, and Work with automated counter calculation
* **Reactive:** GetX Theme Engine - One-tap instantaneous switching between custom Light and Dark themes
* **Dual Guard:** Auth & Security - Stateless Firebase Auth credentials paired with user-isolated Firestore rules`,
      links: [
        {
                "label": "Attendance App Project Case Study",
                "url": "/projects/attendance-app"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/Attendance-App"
        }
],
    },
  },
  QR_SCANNER_DETAIL: {
    id: {
      title: `Proyek: QR Guest Manager (Real-Time Event Check-In, Dynamic QR Code Engine & Mobile Ticketing System)`,
      text: `**Proyek: QR Guest Manager (Real-Time Event Check-In, Dynamic QR Code Engine & Mobile Ticketing System)**

* **Ringkasan Sistem:** A high-throughput cross-platform event ticketing and guest check-in mobile application built with Flutter, Firebase Authentication, and Dio REST API integration. Features real-time camera QR scanning via mobile_scanner, on-the-fly QR code vector generation with qr_flutter, photo gallery barcode analysis, dual-mode light/dark theme engine, and atomic ticket status reconciliation.
* **Tahun Peluncuran:** 2024
* **Teknologi Utama:** Flutter, Dart, Firebase, Mobile Scanner, Dio, QR Flutter

**Fitur & Arsitektur Utama:**
* **Real-Time Hardware Barcode Vision:** Integrates mobile_scanner with native camera sensor streams, detecting standard and inverted QR codes in sub-80ms with customized reticle boundary feedback.
* **Dual Ingestion: Camera & Photo Gallery:** Empowers event operators to scan physical QR codes directly through the live camera viewfinder or extract QR payloads from saved smartphone photos via ImagePicker.
* **On-The-Fly Vector QR Code Generation:** Generates high-resolution vector QR graphics instantaneously on-device using qr_flutter, enabling instant ticket sharing and preview without external API dependencies.
* **Resilient Networking & Duplicate Lock:** Backed by Dio HTTP client connecting to a Vercel-hosted REST API with automated double-scan prevention, humanized error mapping, and optimistic local state updates.

**Metrik Kunci & Performa (KPIs):**
* **< 80ms:** Scan Recognition - Native hardware-accelerated barcode decoding via mobile_scanner
* **100%:** Duplicate Prevention - Atomic scan processing guard prevents duplicate ticket redeems
* **Dual-Channel:** Scanning Ingestion - Camera live viewfinder & photo gallery barcode decoding
* **0ms:** Local State Latency - Instant in-memory ticket status update upon successful API redemption
* **Vector:** QR Generation - Lossless on-the-fly QR generation via qr_flutter with custom sizing
* **Dual Theme:** Light & Dark Mode - System-level theme switching with ValueNotifier and Material 3 design`,
      links: [
        {
                "label": "Studi Kasus Proyek QR Guest Manager",
                "url": "/projects/qr-scanner"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/QR_Scanner_App"
        }
],
    },
    en: {
      title: `Project: QR Guest Manager (Real-Time Event Check-In, Dynamic QR Code Engine & Mobile Ticketing System)`,
      text: `**Project: QR Guest Manager (Real-Time Event Check-In, Dynamic QR Code Engine & Mobile Ticketing System)**

* **System Overview:** A high-throughput cross-platform event ticketing and guest check-in mobile application built with Flutter, Firebase Authentication, and Dio REST API integration. Features real-time camera QR scanning via mobile_scanner, on-the-fly QR code vector generation with qr_flutter, photo gallery barcode analysis, dual-mode light/dark theme engine, and atomic ticket status reconciliation.
* **Delivered Year:** 2024
* **Core Tech Stack:** Flutter, Dart, Firebase, Mobile Scanner, Dio, QR Flutter

**Core Architecture & Features:**
* **Real-Time Hardware Barcode Vision:** Integrates mobile_scanner with native camera sensor streams, detecting standard and inverted QR codes in sub-80ms with customized reticle boundary feedback.
* **Dual Ingestion: Camera & Photo Gallery:** Empowers event operators to scan physical QR codes directly through the live camera viewfinder or extract QR payloads from saved smartphone photos via ImagePicker.
* **On-The-Fly Vector QR Code Generation:** Generates high-resolution vector QR graphics instantaneously on-device using qr_flutter, enabling instant ticket sharing and preview without external API dependencies.
* **Resilient Networking & Duplicate Lock:** Backed by Dio HTTP client connecting to a Vercel-hosted REST API with automated double-scan prevention, humanized error mapping, and optimistic local state updates.

**Key Metrics & Performance (KPIs):**
* **< 80ms:** Scan Recognition - Native hardware-accelerated barcode decoding via mobile_scanner
* **100%:** Duplicate Prevention - Atomic scan processing guard prevents duplicate ticket redeems
* **Dual-Channel:** Scanning Ingestion - Camera live viewfinder & photo gallery barcode decoding
* **0ms:** Local State Latency - Instant in-memory ticket status update upon successful API redemption
* **Vector:** QR Generation - Lossless on-the-fly QR generation via qr_flutter with custom sizing
* **Dual Theme:** Light & Dark Mode - System-level theme switching with ValueNotifier and Material 3 design`,
      links: [
        {
                "label": "QR Guest Manager Project Case Study",
                "url": "/projects/qr-scanner"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/QR_Scanner_App"
        }
],
    },
  },
  NEWS_APP_DETAIL: {
    id: {
      title: `Proyek: News App (Real-Time Multi-Source News Reader & Reactive Bookmark Platform)`,
      text: `**Proyek: News App (Real-Time Multi-Source News Reader & Reactive Bookmark Platform)**

* **Ringkasan Sistem:** A high-performance cross-platform digital journalism and news curation mobile application built with Flutter, GetX reactive state management, and REST API integration. Streams live breaking news across 8 categories from CNN Indonesia via Vercel endpoints, featuring zero-latency client-side substring search filtering, ISO-8601 calendar date querying with localized Indonesian formatting, reactive bookmark persistence, dynamic dark/light theme switching, and fluid Lottie vector onboarding animations.
* **Tahun Peluncuran:** 2024
* **Teknologi Utama:** Flutter, Dart, GetX, REST API, Lottie, HTTP

**Fitur & Arsitektur Utama:**
* **REST API Live Stream Ingestion:** Direct asynchronous HTTP client consuming CNN Indonesia news data from https://berita-indo-api.vercel.app/v1/cnn-news/ with dynamic endpoint parameter routing, robust status code validation, and resilient JSON map parsing.
* **GetX Reactive Architecture & State Management:** Clean separation of presentation and business logic utilizing NewsController extending GetxController, observable variables (.obs) for allNews, filteredNews, bookMarks, and isLoading, wrapped in surgical Obx widget rebuilders.
* **Multi-Faceted Search & Calendar Date Filtering:** Real-time search listener tracking user input to perform case-insensitive headline substring matching combined with native showDatePicker calendar selection comparing ISO-8601 year, month, and day.
* **Immersive Editorial UI & Dynamic Theming:** Material Design 3 visual language featuring CustomScrollView with flexible SliverAppBar hero headers, category pills, reading duration badges, dynamic dark/light theme switching, and Lottie vector splash screen.`,
      links: [
        {
                "label": "Studi Kasus Proyek News App",
                "url": "/projects/news-app"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/News-App"
        }
],
    },
    en: {
      title: `Project: News App (Real-Time Multi-Source News Reader & Reactive Bookmark Platform)`,
      text: `**Project: News App (Real-Time Multi-Source News Reader & Reactive Bookmark Platform)**

* **System Overview:** A high-performance cross-platform digital journalism and news curation mobile application built with Flutter, GetX reactive state management, and REST API integration. Streams live breaking news across 8 categories from CNN Indonesia via Vercel endpoints, featuring zero-latency client-side substring search filtering, ISO-8601 calendar date querying with localized Indonesian formatting, reactive bookmark persistence, dynamic dark/light theme switching, and fluid Lottie vector onboarding animations.
* **Delivered Year:** 2024
* **Core Tech Stack:** Flutter, Dart, GetX, REST API, Lottie, HTTP

**Core Architecture & Features:**
* **REST API Live Stream Ingestion:** Direct asynchronous HTTP client consuming CNN Indonesia news data from https://berita-indo-api.vercel.app/v1/cnn-news/ with dynamic endpoint parameter routing, robust status code validation, and resilient JSON map parsing.
* **GetX Reactive Architecture & State Management:** Clean separation of presentation and business logic utilizing NewsController extending GetxController, observable variables (.obs) for allNews, filteredNews, bookMarks, and isLoading, wrapped in surgical Obx widget rebuilders.
* **Multi-Faceted Search & Calendar Date Filtering:** Real-time search listener tracking user input to perform case-insensitive headline substring matching combined with native showDatePicker calendar selection comparing ISO-8601 year, month, and day.
* **Immersive Editorial UI & Dynamic Theming:** Material Design 3 visual language featuring CustomScrollView with flexible SliverAppBar hero headers, category pills, reading duration badges, dynamic dark/light theme switching, and Lottie vector splash screen.`,
      links: [
        {
                "label": "News App Project Case Study",
                "url": "/projects/news-app"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/News-App"
        }
],
    },
  },
  QURAN_APP_DETAIL: {
    id: {
      title: `Proyek: Quran App (Digital Al-Quran Reader, Arabic Typography Engine & Reactive Bookmark Suite)`,
      text: `**Proyek: Quran App (Digital Al-Quran Reader, Arabic Typography Engine & Reactive Bookmark Suite)**

* **Ringkasan Sistem:** A modern, responsive digital Holy Quran mobile application built with Flutter, GetX reactive state management, and REST API integration. Features 114 surah directory browsing, responsive search querying across Latin names and surah numbers, comprehensive ayat reader with authentic Arabic calligraphy typography and HTML transliteration formatting, reactive bookmark curation, dynamic dark/light system theming, and an efficient controller-based architectural pattern.
* **Tahun Peluncuran:** 2024
* **Teknologi Utama:** Flutter, Dart, GetX, REST API, HTML, HTTP

**Fitur & Arsitektur Utama:**
* **RESTful Scripture Ingestion Engine:** Asynchronous HTTP client consuming Quranic surah and ayat data from https://quran-api.santrikoding.com/api/surah/ with dynamic surah number querying (/api/surah/{number}) and JSON array mapping.
* **GetX Reactive State & Theme Architecture:** Clean controller-based pattern utilizing QuranController extending GetxController, managing reactive observables (url.obs, isTheme.obs, search.obs, bookMarks.obs) with granular Obx widget rebuilders.
* **Multi-Attribute Search & Dynamic Grid Layout:** Dual-attribute client-side filtering matching lowercase Latin names (nama_latin) and surah sequence numbers (nomor) rendered through an adaptive SliverGridDelegateWithMaxCrossAxisExtent grid.
* **Rich Typography & HTML Transliteration Parser:** Integration with flutter_html: ^3.0.0 parsing HTML-formatted pronunciation markup alongside authentic Arabic typography (item['ar']) and circular verse counters.`,
      links: [
        {
                "label": "Studi Kasus Proyek Quran App",
                "url": "/projects/quran-app"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/Quran-App"
        }
],
    },
    en: {
      title: `Project: Quran App (Digital Al-Quran Reader, Arabic Typography Engine & Reactive Bookmark Suite)`,
      text: `**Project: Quran App (Digital Al-Quran Reader, Arabic Typography Engine & Reactive Bookmark Suite)**

* **System Overview:** A modern, responsive digital Holy Quran mobile application built with Flutter, GetX reactive state management, and REST API integration. Features 114 surah directory browsing, responsive search querying across Latin names and surah numbers, comprehensive ayat reader with authentic Arabic calligraphy typography and HTML transliteration formatting, reactive bookmark curation, dynamic dark/light system theming, and an efficient controller-based architectural pattern.
* **Delivered Year:** 2024
* **Core Tech Stack:** Flutter, Dart, GetX, REST API, HTML, HTTP

**Core Architecture & Features:**
* **RESTful Scripture Ingestion Engine:** Asynchronous HTTP client consuming Quranic surah and ayat data from https://quran-api.santrikoding.com/api/surah/ with dynamic surah number querying (/api/surah/{number}) and JSON array mapping.
* **GetX Reactive State & Theme Architecture:** Clean controller-based pattern utilizing QuranController extending GetxController, managing reactive observables (url.obs, isTheme.obs, search.obs, bookMarks.obs) with granular Obx widget rebuilders.
* **Multi-Attribute Search & Dynamic Grid Layout:** Dual-attribute client-side filtering matching lowercase Latin names (nama_latin) and surah sequence numbers (nomor) rendered through an adaptive SliverGridDelegateWithMaxCrossAxisExtent grid.
* **Rich Typography & HTML Transliteration Parser:** Integration with flutter_html: ^3.0.0 parsing HTML-formatted pronunciation markup alongside authentic Arabic typography (item['ar']) and circular verse counters.`,
      links: [
        {
                "label": "Quran App Project Case Study",
                "url": "/projects/quran-app"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/Quran-App"
        }
],
    },
  },

  ACHIEV_PNBITC: {
    id: {
      title: `Juara 2 Nasional (National Runner-Up) - PNBITC#18 Politeknik Negeri Bali`,
      text: `**Juara 2 Nasional Web Design Competition: PNBITC#18 2026**

* **Institusi Penyelenggara:** Politeknik Negeri Bali (PNBITC#18).
* **Kategori & Tingkat:** Web Design Competition (Tingkat Nasional, Mahasiswa & Umum).
* **Tantangan Sprint 1 Bulan:** Dibangun dan diselesaikan dari nol dalam sprint berintensitas tinggi selama bulan September 2026 di sela-sela jadwal padat magang korporat kelas 12 SMK.
* **Mengungguli Kampus Nasional:** Berhasil meraih podium Juara 2 Nasional mengungguli ratusan tim mahasiswa teknik dari berbagai universitas terkemuka di seluruh Indonesia.
* **Teknologi:** React, JavaScript, Tailwind CSS, UI/UX Design Figma.`,
      links: [
        {
                "label": "Detail Juara 2 PNBITC Bali",
                "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
        },
        {
                "label": "Artikel Resmi IDN di Bali",
                "url": "https://idn.sch.id/smk-dkv-terbaik-bogor-siswa-idn-tembus-final-kompetisi-it-di-bali/"
        }
],
    },
    en: {
      title: `2nd Place National Runner-Up - PNBITC#18 Politeknik Negeri Bali`,
      text: `**2nd Place National Web Design Competition: PNBITC#18 2026**

* **Host Institution:** Politeknik Negeri Bali (PNBITC#18).
* **Category & Tier:** National Web Design Competition (Collegiate & Public).
* **High-Stakes 1-Month Sprint:** Engineered and shipped from scratch in September 2026 while balancing a demanding corporate 12th-grade internship.
* **Outperforming University Contenders:** Earned a podium finish over 100+ collegiate and public engineering teams across the country.
* **Tech Stack:** React, JavaScript, Tailwind CSS, UI/UX Design Figma.`,
      links: [
        {
                "label": "PNBITC Bali Award Details",
                "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
        },
        {
                "label": "Official Press Release",
                "url": "https://idn.sch.id/smk-dkv-terbaik-bogor-siswa-idn-tembus-final-kompetisi-it-di-bali/"
        }
],
    },
  },
  ACHIEV_ICOMFEST: {
    id: {
      title: `Juara 1 Nasional (1st Place Champion) - ICOMFEST 2025 Universitas Ahmad Dahlan`,
      text: `**Juara 1 Nasional Web Design Competition: ICOMFEST 2025**

* **Institusi Penyelenggara:** Universitas Ahmad Dahlan (UAD) Yogyakarta.
* **Karya Pemenang: Pusakaku:** Platform pelestarian warisan budaya nusantara berbasis Three.js dengan rendering artefak 3D interaktif real-time.
* **Keunggulan:** Dinilai juri unggul dalam orisinalitas konsep, kedalaman interaktivitas 3D, fluiditas animasi Framer Motion, dan misi pelestarian budaya bangsa.`,
      links: [
        {
                "label": "Detail Juara 1 ICOMFEST",
                "url": "/achievements/1st-place-national-web-design-competition"
        },
        {
                "label": "Studi Kasus Proyek Pusakaku 3D",
                "url": "/projects/pusakaku"
        }
],
    },
    en: {
      title: `1st Place National Champion - ICOMFEST 2025 Universitas Ahmad Dahlan`,
      text: `**1st Place National Web Design Champion: ICOMFEST 2025**

* **Host Institution:** Universitas Ahmad Dahlan (UAD) Yogyakarta.
* **Winning Platform: Pusakaku:** Interactive 3D Indonesian cultural heritage platform powered by Three.js artifact rendering and gamified discovery.
* **Evaluation Criteria:** Commended for spatial interactive innovation, flawless 60 FPS performance, and authentic national preservation impact.`,
      links: [
        {
                "label": "ICOMFEST Champion Details",
                "url": "/achievements/1st-place-national-web-design-competition"
        },
        {
                "label": "Pusakaku 3D Cultural Case Study",
                "url": "/projects/pusakaku"
        }
],
    },
  },
  ACHIEV_UNILA: {
    id: {
      title: `Finalis Nasional (Top 5 Finalist) - UNILA 2025 (SemuaBisa)`,
      text: `**Top 5 Finalis Nasional Web Development: UNILA 2025**

* **Penyelenggara:** Universitas Lampung (UNILA).
* **Karya: SemuaBisa:** Platform inklusi digital yang dirancang khusus dengan standar aksesibilitas tertinggi (WCAG AAA) untuk tunanetra, tunarungu, dan disabilitas motorik.`,
      links: [
        {
                "label": "Detail Finalis UNILA",
                "url": "/achievements/finalist-national-web-dev-competition"
        },
        {
                "label": "Studi Kasus Proyek SemuaBisa",
                "url": "/projects/semua-bisa"
        }
],
    },
    en: {
      title: `Top 5 National Finalist - UNILA 2025 (SemuaBisa Accessibility Platform)`,
      text: `**Top 5 National Finalist: UNILA 2025 Web Competition**

* **Host Institution:** Universitas Lampung (UNILA).
* **Platform: SemuaBisa:** Digital accessibility platform built to rigorous WCAG AAA compliance standards for users with visual, auditory, and motor impairments.`,
      links: [
        {
                "label": "UNILA Finalist Case Study",
                "url": "/achievements/finalist-national-web-dev-competition"
        },
        {
                "label": "SemuaBisa Accessibility Platform",
                "url": "/projects/semua-bisa"
        }
],
    },
  },
  ACHIEV_POSTER: {
    id: {
      title: `Best Poster Award - Idul Adha Festival IDN Boarding School`,
      text: `**Best Poster Award (Juara 1) · Idul Adha Festival**

* **Penyelenggara:** SMK IDN Boarding School (Desember 2023).
* **Karya Desain:** Poster resmi perayaan Idul Adha yang memadukan estetika geometri Islam klasik dengan prinsip tata letak minimalis modern.
* **Alat & Keahlian:** Didesain dengan Figma dan Adobe Illustrator, memadukan tipografi serif berhuruf kontras tinggi, palet warna elegan beraksen emas, serta ornamen vektor lengkungan khas.
* **Hasil Penjurian:** Terpilih oleh dewan juri sebagai Best Poster berkat keanggunan komposisi visual, keterbacaan hierarki teks, serta keseimbangan ruang kosong (*negative space*).`,
      links: [
        {
          label: "Detail Penghargaan Poster",
          url: "/achievements/best-poster-award-idul-adha-festival",
        },
        {
          label: "Lihat Seluruh Prestasi",
          url: "/achievements",
        },
      ],
    },
    en: {
      title: `Best Poster Award - Idul Adha Festival IDN Boarding School`,
      text: `**1st Place Best Poster Award · Idul Adha Festival**

* **Host Institution:** SMK IDN Boarding School (December 2023).
* **Creative Work:** Official Idul Adha celebration poster fusing traditional Islamic geometric aesthetics with contemporary minimalist layout principles.
* **Tools & Craft:** Designed in Figma and Adobe Illustrator, harmonizing high-contrast serif typography with refined gold accents and custom vector arches.
* **Jury Recognition:** Awarded Best Poster by the jury for sophisticated visual restraint, flawless typographic hierarchy, and balanced negative space.`,
      links: [
        {
          label: "View Poster Case Study",
          url: "/achievements/best-poster-award-idul-adha-festival",
        },
        {
          label: "Explore All Achievements",
          url: "/achievements",
        },
      ],
    },
  },
  BOOK_GAME_SCRATCH: {
    id: {
      title: `Buku Resmi: Membuat Game Tanpa Coding dengan MIT Scratch (125 Halaman)`,
      text: `**Buku: Membuat Game Tanpa Coding (125 Halaman)**

* **Penulis:** Rafif Sava Adyvka Pratama.
* **Penerbit:** SMK IDN Boarding School (Januari 2023 · Format Digital PDF Interaktif).
* **Tujuan Buku:** Membantu pemula dan generasi muda memahami konsep logika komputasi tanpa rasa takut terhadap kesalahan sintaks, menggunakan kanvas visual MIT Scratch 3.0.
* **5 Game Lengkap yang Dibangun:**
  1. Pong Klasik (Mekanika pantulan dan koordinat)
  2. Catch the Apples (Event loop dan kalkulasi skor)
  3. Platformer Jump (Gravitasi dan collision physics balok)
  4. Pacman (Navigasi labirin dan pergerakan patroli hantu mandiri)
  5. Block Breaker (Sudut pantulan paddle dan pola penghancuran balok)
* **Dampak Komunitas:** Digunakan sebagai buku panduan kurikulum resmi di SMK IDN dan berbagai workshop yang melatih 300+ siswa di Depok dan Jakarta.`,
      links: [
        {
                "label": "Detail Buku Membuat Game Tanpa Coding",
                "url": "/publications/buku-membuat-game-tanpa-coding"
        },
        {
                "label": "Unduh Buku Lengkap (PDF)",
                "url": "/publications/buku-membuat-game-tanpa-coding-adyvka.pdf"
        }
],
    },
    en: {
      title: `Published Book: Making Games Without Coding with MIT Scratch (125 Pages)`,
      text: `**Published Book: Making Games Without Coding (125 Pages)**

* **Author:** Rafif Sava Adyvka Pratama.
* **Publisher:** SMK IDN Boarding School (January 2023 · Interactive Digital PDF).
* **Pedagogical Purpose:** Demystifies algorithmic computational logic for young learners through MIT Scratch 3.0 visual canvas, bypassing cryptic syntax errors.
* **5 Complete Playable Games Engineered:**
  1. Classic Pong (Bouncing physics and coordinate systems)
  2. Fruit Catch (Event loops and score calculators)
  3. Platformer Jump (Gravity simulation and collision boundaries)
  4. Pacman (Maze navigation and autonomous ghost patrol AI)
  5. Brick Breaker (Paddle deflection physics and brick grid algorithms)
* **Real-World Impact:** Adopted as core curriculum across community workshops training 300+ middle and high school students.`,
      links: [
        {
                "label": "Making Games Book Details",
                "url": "/publications/buku-membuat-game-tanpa-coding"
        },
        {
                "label": "Download Full Book (PDF)",
                "url": "/publications/buku-membuat-game-tanpa-coding-adyvka.pdf"
        }
],
    },
  },
  BOOK_WEB_FRAMEWORK: {
    id: {
      title: `Buku Resmi: Membuat Website Modern dengan Framework CSS & JS`,
      text: `**Buku: Membuat Website Modern dengan Framework**

* **Penulis:** Rafif Sava Adyvka Pratama.
* **Fokus Kurikulum:** Rekayasa web modern responsif, semantik HTML5, CSS layouting (Grid & Flexbox), dan penerapan utility-first framework dengan Tailwind CSS.
* **Sasaran Pembaca:** Pelajar vokasi dan pemula yang ingin memahami standar pengembangan web profesional dari kanvas kosong hingga deployment.`,
      links: [
        {
                "label": "Detail Buku Website Modern",
                "url": "/publications/buku-membuat-website-dengan-framework"
        }
],
    },
    en: {
      title: `Published Book: Building Modern Websites with Frameworks`,
      text: `**Published Book: Building Modern Websites with Frameworks**

* **Author:** Rafif Sava Adyvka Pratama.
* **Curriculum Focus:** Modern responsive web architecture, semantic HTML5, CSS Grid/Flexbox layouts, and Tailwind CSS utility styling.
* **Audience:** Vocational engineering students and self-taught developers learning industry-standard web engineering.`,
      links: [
        {
                "label": "Modern Website Book Details",
                "url": "/publications/buku-membuat-website-dengan-framework"
        }
],
    },
  },

  ALL_EXPERIENCES: {
    id: {
      title: `Total Pengalaman: 20 Rekam Jejak Terverifikasi dalam 3 Pilar`,
      text: `**Adyvka memiliki total 20 rekam jejak pengalaman terverifikasi dalam 3 pilar utama.**

Rekam jejak Adyvka memadukan rekayasa perangkat lunak skala enterprise, dedikasi mengajar, dan kepemimpinan organisasi nyata:

1. **4 Pengalaman Kerja Profesional (Work Experience):**
   * **PT Intisel Prodaktifakom:** Lead Systems Engineer & Project Manager sistem Databank ERP (memimpin 4 engineer, otomasi Huawei ISDP bot scraping, approval digital 3 tahap).
   * **PT Ardyanda Digital Inovasi:** Full Stack Developer Intern (payroll presisi 100%, sistem pinjaman kasbon karyawan, buku kas keuangan, dan penghubung klien).
   * **CV. Richo Bahari:** Frontend Developer & UI/UX Architect (platform industri Next.js 16 berstandar K3 Zero Accident & ISO 9001).
   * **Fakultas Kedokteran Universitas Muhammadiyah Jakarta:** Full Stack Engineer Contract (sistem klirens etik riset medis KEPK FK UMJ berstandar WHO dan CIOMS).

2. **10 Pengalaman Mengajar & Pelatihan Teknologi (Teaching & Mentorship):**
   * **SMPN 25 Depok:** Memberikan pelatihan langsung kepada dewan guru dan kepala sekolah mengenai implementasi media pembelajaran digital modern.
   * **SMA Lazuardi Global Compassionate School:** Instruktur workshop pengembangan web frontend modern (HTML, CSS, UI/UX).
   * **SMPN 45 Jakarta:** Instruktur pengembangan aplikasi mobile untuk pelajar menggunakan Kodular.
   * **Semut-Semut The Natural School:** Pelatihan logika komputasi dan pembuatan game edukatif dengan Construct.
   * **Hajrabyadl, SMP INS Depok, Al-Anshar, Griyya Sunnah, MTs Yasmine:** Instruktur desain antarmuka Figma, rekayasa web, dan logika pemrograman dasar.

3. **6 Pengalaman Kepemimpinan, Ekspedisi & Survival (Leadership & Life Experience):**
   * **Solo Backpacker 3 Negara (Singapura, Malaysia, Thailand):** Menjelajahi 3 negara seorang diri di usia 15 tahun, 100% didanai mandiri dari hasil tabungan freelance coding dan desain.
   * **Business & Life Survival di Semarang (PT Intisel):** Diterjunkan ke kota Semarang dengan modal awal nol rupiah dan berhasil bertahan hidup lewat inisiatif bisnis nyata serta logistik telekomunikasi.
   * **Ketua Divisi Acara OSIS SMK IDN:** Memimpin divisi acara selama 2 periode dalam merancang dan mengeksekusi seluruh kegiatan besar sekolah berasrama.
   * **Koordinator Acara Kompetisi IT FEST 2025:** Memimpin kelancaran teknis festival teknologi nasional dengan lebih dari 500 peserta.
   * **Barmus Voluntrip:** Koordinator relawan dan dokumentasi kegiatan sosial kemanusiaan bagi masyarakat pelosok.
   * **Live In Pedesaan:** Tinggal dan membaur selama sepekan penuh bersama keluarga petani tradisional di pedesaan Jawa Barat.

Seluruh 20 rekam jejak ini memiliki dokumentasi lengkap dan studi kasus yang dapat Anda jelajahi di halaman Experience.`,
      links: [
        {
                "label": "Buka Halaman Seluruh Pengalaman",
                "url": "/experience"
        },
        {
                "label": "Detail Pengalaman PT Ardyanda",
                "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
        },
        {
                "label": "Detail Pengalaman PT Intisel",
                "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
        },
        {
                "label": "Detail Solo Backpacker 3 Negara",
                "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
        }
],
    },
    en: {
      title: `Total Experience: 20 Verified Records Across 3 Strategic Pillars`,
      text: `**Adyvka holds a total of 20 verified experience records across 3 strategic pillars.**

His journey bridges enterprise software engineering, community technology mentorship, and authentic organizational leadership:

1. **4 Professional Work Experiences:**
   * **PT Intisel Prodaktifakom:** Lead Systems Engineer and Project Manager for Databank ERP (leading 4 engineers, Huawei ISDP web scraping bot, and 3-stage digital approvals).
   * **PT Ardyanda Digital Inovasi:** Full Stack Developer Intern (100% precision payroll, employee loan management, financial cash ledger, and client communication).
   * **CV. Richo Bahari:** Frontend Developer and UI/UX Architect (Next.js 16 industrial platform adhering to Zero Accident K3 and ISO 9001 standards).
   * **Faculty of Medicine Universitas Muhammadiyah Jakarta:** Full Stack Engineer Contract (SIM KEPK medical research ethical clearance system compliant with WHO and CIOMS standards).

2. **10 Teaching and Technology Mentorship Experiences:**
   * **SMPN 25 Depok:** Conducted direct digital training for the school principal and faculty teachers on modern interactive learning media.
   * **SMA Lazuardi Global Compassionate School:** Instructor for modern frontend web development (HTML5, CSS layout, UI/UX design).
   * **SMPN 45 Jakarta:** Mobile application development instructor for students using Kodular.
   * **Semut-Semut The Natural School:** Computational logic and educational game development with Construct.
   * **Hajrabyadl, SMP INS Depok, Al-Anshar, Griyya Sunnah, MTs Yasmine:** Instructor for Figma interface design, web engineering, and foundational programming.

3. **6 Leadership, Expedition and Survival Experiences:**
   * **Solo Backpacker Across 3 Countries (Singapore, Malaysia, Thailand):** Explored 3 countries entirely on his own at age 15, 100% self-funded from freelance coding and design savings.
   * **Business and Life Survival in Semarang (PT Intisel):** Deployed to Semarang with zero initial cash capital, generating net income through telecom logistics and real business initiatives.
   * **Student Council Event Division Leader (SMK IDN):** Served 2 consecutive terms directing concept, rundown, stage coordination, and crisis handling for all major school events.
   * **Event Coordinator for IT FEST 2025:** Led technical execution of a national technology festival with 500+ participants across Indonesia.
   * **Barmus Voluntrip:** Volunteer event organizer and media documenter for social outreach in underserved rural communities.
   * **Rural Immersion (Live In):** Lived for a full week integrated with a traditional farming family in rural West Java.

All 20 records feature comprehensive photographic documentation and case studies on the Experience page.`,
      links: [
        {
                "label": "View All Experiences",
                "url": "/experience"
        },
        {
                "label": "PT Ardyanda Internship Details",
                "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
        },
        {
                "label": "PT Intisel Enterprise Case Study",
                "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
        },
        {
                "label": "Solo Backpacker 3 Countries Case Study",
                "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
        }
],
    },
  },
  WORK_EXPERIENCE: {
    id: {
      title: `4 Pengalaman Kerja Profesional (Work Experience)`,
      text: `**4 Pengalaman Kerja Profesional Adyvka di Industri & Institusi**

Adyvka telah mengemban tanggung jawab teknik tingkat lanjut di empat lingkungan kerja profesional:

1. **PT Intisel Prodaktifakom (Lead Systems Engineer & Project Manager):**
   * Memimpin perancangan Databank ERP, sistem audit infrastruktur telekomunikasi nasional.
   * Memimpin 4 software engineer dan membangun bot web scraping otomatis Huawei ISDP.
   * Mengintegrasikan persetujuan digital berjenjang 3 tahap untuk lebih dari 1.000 site BTS.

2. **PT Ardyanda Digital Inovasi (Full Stack Developer Intern):**
   * Lolos melalui 5 tahap wawancara ketat untuk magang wajib kelas 12 SMK.
   * Cepat dipromosikan dari backend ke Full Stack Developer karena kecepatan belajar tinggi.
   * Membangun sistem payroll otomatis 100% presisi, mesin kasbon karyawan, modul platform RS, dan ERP masjid.
   * Menjadi Master of Ceremonies (MC) pada acara resmi perayaan kemerdekaan perusahaan.

3. **CV. Richo Bahari (Frontend Developer & UI/UX Architect):**
   * Mengembangkan portal web industri Next.js 16 berkecepatan tinggi untuk kontraktor umum dan EPC.
   * Mengintegrasikan kepatuhan keselamatan kerja K3 (Zero Accident Policy) dan standar ISO 9001:2015.

4. **Fakultas Kedokteran Universitas Muhammadiyah Jakarta (Full Stack Engineer Contract):**
   * Mengarsiteki SIM KEPK FK UMJ, platform klirens etik riset kesehatan berstandar WHO dan CIOMS 2016.
   * Mengotomasi alur peninjauan multi-reviewer dan penerbitan sertifikat etik digital resmi ber-QR Code.`,
      links: [
        {
                "label": "Buka Halaman Pengalaman",
                "url": "/experience"
        },
        {
                "label": "Detail PT Ardyanda",
                "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
        },
        {
                "label": "Detail PT Intisel",
                "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
        }
],
    },
    en: {
      title: `4 Professional Work Experiences`,
      text: `**Adyvka's 4 Corporate and Institutional Work Experiences**

Adyvka has delivered high-impact engineering across 4 professional environments:

1. **PT Intisel Prodaktifakom (Lead Systems Engineer & Project Manager):**
   * Architected Databank ERP for nationwide telecom site audit operations.
   * Led a team of 4 engineers and built automated Huawei ISDP web scraping bots.
   * Deployed a 3-tier approval pipeline auditing over 1,000 cellular BTS sites.

2. **PT Ardyanda Digital Inovasi (Full Stack Developer Intern):**
   * Earned vocational placement through 5 rigorous interview rounds.
   * Promoted from backend intern to full-stack engineer, representing the team in client meetings.
   * Built 100% precision payroll systems, employee advance loans, hospital modules, and mosque ERPs.
   * Served as company Master of Ceremonies (MC) for corporate celebrations.

3. **CV. Richo Bahari (Frontend Developer & UI/UX Architect):**
   * Engineered an ultra-fast Next.js 16 industrial platform for a general contractor and EPC firm.
   * Embedded occupational safety (K3 Zero Accident) and ISO 9001:2015 compliance catalogs.

4. **Faculty of Medicine Universitas Muhammadiyah Jakarta (Full Stack Engineer Contract):**
   * Architected SIM KEPK medical research ethical clearance platform under WHO/CIOMS 2016 guidelines.
   * Automated multi-reviewer assignments and official certified digital clearances.`,
      links: [
        {
                "label": "View Experience Page",
                "url": "/experience"
        },
        {
                "label": "PT Ardyanda Details",
                "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
        },
        {
                "label": "PT Intisel Details",
                "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
        }
],
    },
  },
  TEACHING_EXPERIENCE: {
    id: {
      title: `10 Pengalaman Mengajar & Pelatihan Teknologi (Teaching & Mentorship)`,
      text: `**10 Pengalaman Mengajar & Kontribusi Edukasi Adyvka**

Adyvka telah dipercaya membagikan ilmu teknis dan memimpin pelatihan di berbagai institusi pendidikan:

1. **SMPN 25 Depok (Pelatihan Guru & Kepala Sekolah):** Melatih dewan guru dan kepala sekolah mengenai pembuatan media ajar digital Android menggunakan Kodular di usia 16 tahun.
2. **SMA Lazuardi GCS:** Instruktur dan Squad Lead workshop pengembangan web frontend modern (HTML5, CSS layouting, VS Code) untuk 20 siswa klub IT.
3. **SMPN 45 Jakarta:** Instruktur pengembangan aplikasi mobile untuk pelajar menggunakan Kodular.
4. **SMP INS Depok:** Pelatihan pemrograman visual dan pengembangan aplikasi Android bagi 30+ santri.
5. **Semut-Semut The Natural School:** Pengajaran logika pemrograman game 2D dan game loop dengan Construct.
6. **Hajrabyadl:** Instruktur frontend coding dan layouting web responsif.
7. **Al-Anshar Boarding School (App Design):** Pelatihan desain antarmuka Figma UI/UX untuk pelajar.
8. **Al-Anshar Boarding School (Game Development):** Pelatihan logika pembuatan game 2D hingga rilis playable game bagi 25+ santri.
9. **MTs Yasmine:** Pelatihan desain grafis dan komposisi visual media sekolah.
10. **Griyya Sunnah:** Pengenalan computational thinking dan logika game 2D.`,
      links: [
        {
                "label": "Jelajahi Pengalaman Mengajar",
                "url": "/experience"
        },
        {
                "label": "Detail Pelatihan Guru SMPN 25 Depok",
                "url": "/experience/smpn-45-app-development-instructor"
        },
        {
                "label": "Detail Workshop SMA Lazuardi",
                "url": "/experience/sma-lazuardi-gcs-web-development-instructor"
        }
],
    },
    en: {
      title: `10 Teaching & Technology Mentorship Experiences`,
      text: `**Adyvka's 10 Teaching and Technology Mentorship Records**

Adyvka has spearheaded workshops and digital literacy initiatives across numerous academic institutions:

1. **SMPN 25 Depok (Faculty Teacher Training):** Trained senior school faculty and the principal on building interactive mobile teaching tools with Kodular at age 16.
2. **SMA Lazuardi GCS:** Lead instructor and squad lead for modern frontend web engineering (HTML5, CSS, VS Code) for 20 IT club students.
3. **SMPN 45 Jakarta:** Mobile application development instructor for students using Kodular.
4. **SMP INS Depok:** Visual programming and Android application workshop for 30+ students.
5. **Semut-Semut The Natural School:** 2D game logic and game loop instruction with Construct.
6. **Hajrabyadl:** Modern responsive web development and CSS layout training.
7. **Al-Anshar Boarding School (App Design):** Figma UI/UX interface design training.
8. **Al-Anshar Boarding School (Game Development):** 2D arcade game architecture and publication for 25+ students.
9. **MTs Yasmine:** Graphic design and visual composition instruction.
10. **Griyya Sunnah:** Computational thinking and interactive game logic training.`,
      links: [
        {
                "label": "Explore Teaching Experiences",
                "url": "/experience"
        },
        {
                "label": "SMPN 25 Depok Teacher Training Details",
                "url": "/experience/smpn-45-app-development-instructor"
        },
        {
                "label": "SMA Lazuardi Workshop Details",
                "url": "/experience/sma-lazuardi-gcs-web-development-instructor"
        }
],
    },
  },
  LEADERSHIP_EXPERIENCE: {
    id: {
      title: `6 Pengalaman Kepemimpinan, Ekspedisi & Survival (Leadership)`,
      text: `**6 Rekam Jejak Kepemimpinan, Ekspedisi & Ketangguhan Adyvka**

Kepemimpinan Adyvka ditempa melalui aksi nyata di lapangan:

1. **Solo Backpacker 3 Negara (Singapura, Malaysia, Thailand):** Terpilih sebagai 1 dari 9 delegasi di usia 15 tahun. 100% dibiayai mandiri dari hasil freelance koding dan desain, menavigasi rute transit internasional dan wawancara bahasa Inggris secara independen.
2. **Business & Life Survival di Semarang (PT Intisel):** Diterjunkan ke kota Semarang dengan modal awal Rp 0, berhasil bertahan hidup dan menghasilkan profit bersih lewat inisiatif bisnis nyata dan logistik telekomunikasi.
3. **Ketua Divisi Acara OSIS SMK IDN (2 Periode):** Memimpin divisi acara selama dua periode berturut-turut dalam merancang konsep, rundown panggung, dan manajemen krisis puluhan acara besar sekolah berasrama.
4. **Koordinator Acara Kompetisi IT FEST 2025:** Memimpin kelancaran teknis festival teknologi nasional dengan lebih dari 500 peserta dari seluruh Indonesia.
5. **Barmus Voluntrip:** Koordinator relawan dan dokumentasi kegiatan sosial kemanusiaan ke masyarakat pelosok.
6. **Live In Pedesaan:** Tinggal dan membaur sepekan penuh bersama keluarga petani tradisional di pelosok pedesaan Jawa Barat.`,
      links: [
        {
                "label": "Lihat Rekam Jejak Kepemimpinan",
                "url": "/experience"
        },
        {
                "label": "Detail Solo Backpacker 3 Negara",
                "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
        },
        {
                "label": "Detail OSIS Event Division Leader",
                "url": "/experience/idn-student-council-event-division-leader"
        }
],
    },
    en: {
      title: `6 Leadership, Expedition & Survival Records`,
      text: `**Adyvka's 6 Leadership, Expedition and Survival Milestones**

Adyvka's leadership has been tested through genuine adversity and high-stakes field execution:

1. **Solo Backpacker Across 3 Countries (Singapore, Malaysia, Thailand):** Selected among 9 top delegates at age 15. 100% self-funded through freelance coding savings, independently navigating international borders and conducting conversational field interviews in English.
2. **Business and Life Survival in Semarang (PT Intisel):** Deployed to Semarang with Rp 0 initial cash capital, achieving positive cash flow and survival through agile trading and telecom logistics.
3. **Student Council Event Division Leader (SMK IDN):** Led event operations for 2 consecutive terms, orchestrating stage rundowns, logistics, and emergency response for major campus initiatives.
4. **Event Coordinator for IT FEST 2025:** Directed technical operations for a national tech competition involving 500+ participants nationwide.
5. **Barmus Voluntrip:** Field volunteer coordinator and media producer for rural community outreach.
6. **Rural Immersion (Live In):** Lived and worked for a full week alongside traditional farming families in rural West Java.`,
      links: [
        {
                "label": "View Leadership Records",
                "url": "/experience"
        },
        {
                "label": "Solo Backpacker Case Study",
                "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
        },
        {
                "label": "Student Council Leadership",
                "url": "/experience/idn-student-council-event-division-leader"
        }
],
    },
  },
  COUNT_PROJECTS: {
    id: {
      title: `Total Proyek: 18 Karya Rekayasa Perangkat Lunak Terverifikasi`,
      text: `**Adyvka telah merancang dan membangun total 18 proyek perangkat lunak terverifikasi.**

Portofolionya mencakup sistem enterprise multi-tenant, platform kesehatan berskala nasional, kecerdasan buatan (AI), aplikasi mobile, hingga solusi web modern:

* **Sistem Enterprise & Tata Kelola:**
  1. Databank ERP (PT Intisel Prodaktifakom)
  2. SIM KEPK FK UMJ (Klirens Etik Riset Medis WHO/CIOMS)
  3. TerasTani (Decentralized Urban Agriculture OS)
  4. RuangTumbuh (Pediatric Development & Mental Health Telemedicine)
  5. CV. Richo Bahari (Industrial EPC Contractor Platform)

* **Juara Kompetisi Nasional:**
  6. Pusakaku (Juara 1 Nasional ICOMFEST 2025 - Interactive 3D Web Culture)
  7. SemuaBisa (Finalis Nasional UNILA - Aksesibilitas WCAG AAA untuk Disabilitas)

* **Solusi AI, Mobile & Komersial:**
  8. FitSmart (AI Healthcare & Clinical Nutrition Assistant dengan Gemini Pro)
  9. AI Ticket Manager (Ticketing Support dengan Analisis Sentimen NLP)
  10. JavaIsland (Portal Interaktif Pariwisata dan Budaya Nusantara)
  11. IDNCourse (Platform EdTech Pendidikan Vokasi)
  12. Coffeee Shop (Modern Coffee Ecommerce & Order Tracking)
  13. MyStyle (Fashion Ecommerce Platform)
  14. DeliFood (On-Demand Food Ordering Web Platform)
  15. Attendance App (Sistem Presensi GPS Geofencing & Kamera Verifikasi)
  16. QR Guest Manager (Pemindai QR Presensi Event Kecepatan Tinggi)
  17. News App (Portal Berita Real-Time dengan Kurasi Topik)
  18. Quran App (Aplikasi Al-Quran Digital Lengkap dengan Audio Murottal)

Seluruh proyek dapat dijelajahi lengkap dengan arsitektur dan repositorinya di halaman Projects.`,
      links: [
        {
                "label": "Jelajahi Katalog 18 Proyek",
                "url": "/projects"
        }
],
    },
    en: {
      title: `Total Projects: 18 Verified Software Engineering Works`,
      text: `**Adyvka has engineered a total of 18 verified production-grade software projects.**

His portfolio spans enterprise systems, healthcare governance, artificial intelligence, mobile applications, and modern web platforms:

* **Enterprise & Governance Platforms:**
  1. Databank ERP (PT Intisel Prodaktifakom)
  2. SIM KEPK FK UMJ (WHO/CIOMS Compliant Medical Ethics Platform)
  3. TerasTani (Decentralized Urban Agriculture OS)
  4. RuangTumbuh (Pediatric Telemedicine Platform)
  5. CV. Richo Bahari (Heavy Industrial EPC Portal)

* **National Competition Award Winners:**
  6. Pusakaku (1st Place National Champion at ICOMFEST 2025 - 3D Cultural Platform)
  7. SemuaBisa (National Finalist at UNILA - WCAG AAA Accessibility for Disabled Users)

* **AI, Mobile & Commercial Solutions:**
  8. FitSmart (AI Clinical Nutrition Assistant with Google Gemini Pro)
  9. AI Ticket Manager (Support Ticket Routing with NLP Sentiment Analysis)
  10. JavaIsland (Interactive Indonesian Cultural Heritage Portal)
  11. IDNCourse (Vocational Tech Education Platform)
  12. Coffeee Shop (Specialty Coffee Ecommerce)
  13. MyStyle (Fashion & Lifestyle Ecommerce Catalog)
  14. DeliFood (On-Demand Food Ordering System)
  15. Attendance App (GPS Geofencing Mobile Attendance Platform)
  16. QR Guest Manager (High-Speed Event QR Ticket Scanner)
  17. News App (Real-Time News Aggregator)
  18. Quran App (Digital Al-Quran Reader with Audio Recitations)

Explore detailed architectural breakdowns and source code on the Projects page.`,
      links: [
        {
                "label": "Explore 18 Projects Catalog",
                "url": "/projects"
        }
],
    },
  },
  LIST_PROJECTS: {
    id: {
      title: `Katalog Lengkap 18 Proyek Rekayasa Perangkat Lunak Adyvka`,
      text: `**Katalog 18 Proyek Rekayasa Perangkat Lunak Adyvka**

Berikut adalah daftar lengkap 18 proyek yang telah dibangun dan dirilis:

1. **Databank ERP:** ERP audit site telekomunikasi nasional (Next.js, TypeScript, PostgreSQL, Prisma, Redis, Docker).
2. **SIM KEPK FK UMJ:** Tata kelola klirens etik medis WHO/CIOMS 2016 (Laravel 12, MySQL, Spatie RBAC, AWS).
3. **TerasTani:** OS pertanian urban desentralisasi dengan AI computer vision dan smart escrow (React 19, Supabase, Express).
4. **RuangTumbuh:** Skrining tumbuh kembang anak dan telemedis kesehatan mental (React, Express, PostgreSQL).
5. **Pusakaku:** Platform budaya 3D interaktif (Juara 1 Nasional ICOMFEST 2025, Three.js, React).
6. **SemuaBisa:** Platform aksesibilitas WCAG AAA untuk penyandang disabilitas (Finalis Nasional UNILA).
7. **CV. Richo Bahari:** Platform profil kontraktor industri bersertifikasi K3 & ISO 9001 (Next.js 16, React 19).
8. **FitSmart:** Asisten kesehatan preventif bertenaga AI Gemini Pro dengan 24 modal diagnostik.
9. **AI Ticket Manager:** Sistem otomasi tiket dukungan pelanggan dengan analisis sentimen NLP.
10. **JavaIsland:** Portal pariwisata dan eksplorasi budaya pulau Jawa berbasis peta interaktif.
11. **IDNCourse:** Platform kursus koding dan keahlian vokasi digital.
12. **Coffeee Shop:** Ecommerce pemesanan kopi artisanal dengan pelacakan pesanan real-time.
13. **MyStyle:** Katalog belanja fashion modern dengan validasi stok dinamis.
14. **DeliFood:** Aplikasi web pemesanan makanan cepat saji dan manajemen keranjang belanja.
15. **Attendance App:** Aplikasi mobile presensi berbasis radius GPS geofencing dan verifikasi kamera.
16. **QR Guest Manager:** Pemindai kode QR berkecepatan tinggi untuk presensi dan validasi tamu acara.
17. **News App:** Pembaca berita real-time dengan filter kategori dan pemuatan konten instan.
18. **Quran App:** Aplikasi Al-Quran digital dengan teks ayat Arab, terjemahan, dan pemutar audio murottal.`,
      links: [
        {
                "label": "Buka Halaman Seluruh Proyek",
                "url": "/projects"
        }
],
    },
    en: {
      title: `Complete Catalog of Adyvka's 18 Software Projects`,
      text: `**Complete Catalog of Adyvka's 18 Software Engineering Projects**

A comprehensive directory of all 18 production systems and applications engineered by Adyvka:

1. **Databank ERP:** Telecom infrastructure audit platform (Next.js, TypeScript, PostgreSQL, Prisma, Redis, Docker).
2. **SIM KEPK FK UMJ:** WHO/CIOMS 2016 compliant medical ethical clearance system (Laravel 12, MySQL, Spatie RBAC, AWS).
3. **TerasTani:** Decentralized urban farming OS with computer vision crop diagnostics (React 19, Supabase, Express).
4. **RuangTumbuh:** Pediatric screening and developmental telemedicine platform (React, Express, PostgreSQL).
5. **Pusakaku:** 3D interactive cultural preservation platform (1st Place National Champion ICOMFEST 2025).
6. **SemuaBisa:** WCAG AAA accessibility platform for people with disabilities (National Finalist UNILA).
7. **CV. Richo Bahari:** Industrial EPC general contractor platform adhering to K3 and ISO 9001 (Next.js 16, React 19).
8. **FitSmart:** Gemini Pro AI clinical wellness assistant featuring 24 diagnostic modals.
9. **AI Ticket Manager:** Support ticketing platform with NLP sentiment routing and automated suggestions.
10. **JavaIsland:** Interactive cultural tourism and exploration portal with rich media guides.
11. **IDNCourse:** Digital vocational learning management system for tech skills.
12. **Coffeee Shop:** Artisanal coffee ecommerce with live order tracking.
13. **MyStyle:** Modern apparel ecommerce catalog with real-time inventory counter.
14. **DeliFood:** On-demand food ordering platform with dynamic menu filters.
15. **Attendance App:** Mobile attendance system with GPS geofence radius enforcement and selfie verification.
16. **QR Guest Manager:** High-speed event attendee check-in and QR ticket validation tool.
17. **News App:** Breaking news reader with category filtering and bookmarking.
18. **Quran App:** Digital Quran platform featuring full 114 Surahs and audio recitations.`,
      links: [
        {
                "label": "Explore Projects Catalog",
                "url": "/projects"
        }
],
    },
  },
  CERTIFICATES: {
    id: {
      title: `23 Sertifikasi Profesional & Akademik Internasional`,
      text: `**23 Sertifikasi Profesional & Akademik Terverifikasi Adyvka**

Adyvka memegang total 23 sertifikat resmi yang memvalidasi keahlian teknis dari institusi global dan nasional terkemuka:

* **Computer Science & Sistem Tingkat Rendah:**
  * **CS50: Introduction to Computer Science (Harvard University):** Kurikulum ilmu komputer unggulan dunia (Algoritma, Alokasi Memori C, Python, SQL, Struktur Data).
  * **Memulai Pemrograman Dengan C & Pemrograman Dasar C (Dicoding & Skilvul):** Fondasi pointer, alokasi memori heap/stack, dan logika komputasi murni.

* **Full Stack & Cloud Architecture:**
  * **Coding Camp: Full Stack Developer (Dicoding × DBS Foundation):** Bootcamp intensif 90+ jam rekayasa web Express, React, RESTful API, dan PostgreSQL.
  * **Cloud Practitioner Essentials (Amazon Web Services / AWS):** Arsitektur cloud computing, EC2, S3, RDS, IAM, keamanan, dan reliabilitas server.
  * **Belajar Membuat Aplikasi Back-End (Dicoding):** RESTful API berstandar industri dengan Hapi.js/Express dan pengujian Postman.
  * **Frontend Web Developer & Aplikasi Web dengan React (Dicoding):** Komponen modern, state management, SPA architecture, dan WCAG accessibility.

* **DevOps & Rekayasa Perangkat Lunak:**
  * **Belajar Dasar Git dengan GitHub (Dicoding):** Branching strategies, rebase, resolusi merge conflict, dan open-source collaboration.
  * **Belajar Dasar Data Analyst & Python Fundamentals (Dicoding & DQLab):** Data wrangling, statistika, manipulasi dataset, dan visualisasi.
  * **Dasar Prompt Engineering & Artificial Intelligence Basics (AI Academy):** Rekayasa prompt LLM terstruktur, few-shot learning, dan etika AI.

Anda dapat menanyakan detail materi dan capaian dari setiap sertifikat spesifik secara langsung kepada saya.`,
      links: [
        {
                "label": "Lihat Daftar Seluruh Sertifikat",
                "url": "/certificates"
        }
],
    },
    en: {
      title: `23 Professional & Academic Certifications`,
      text: `**Adyvka's 23 Verified Professional and Academic Certifications**

Adyvka holds 23 credentials validating technical rigor across computer science, software engineering, and cloud systems:

* **Computer Science & Low-Level Foundations:**
  * **CS50: Introduction to Computer Science (Harvard University):** Harvard's flagship CS curriculum covering memory management in C, algorithms, Big-O complexity, Python, and SQL.
  * **C Programming Foundations (Dicoding & Skilvul):** Manual pointer arithmetic, data structures, and runtime efficiency.

* **Full Stack & Cloud Engineering:**
  * **Coding Camp: Full Stack Developer (Dicoding × DBS Foundation):** 90+ hours corporate-sponsored bootcamp covering decoupled Express APIs, React, and PostgreSQL.
  * **Cloud Practitioner Essentials (Amazon Web Services / AWS):** Cloud architecture, EC2, S3, RDS, IAM security, and distributed infrastructure.
  * **Backend Application Development (Dicoding):** Industrial RESTful API contracts, validation middleware, and automated endpoint testing.
  * **Frontend Web Developer & Modern React (Dicoding):** Semantic HTML5, CSS Grid layouting, state management, and WCAG accessibility standards.

* **DevOps, Data Analytics & AI:**
  * **Git with GitHub Fundamentals (Dicoding):** Clean commit hygiene, rebase workflows, merge conflict resolution, and PR reviews.
  * **Data Analyst Foundations & Python (Dicoding & DQLab):** Data cleansing, exploratory analysis, and data modeling.
  * **Prompt Engineering & AI Foundations (AI Academy):** LLM instruction tuning, few-shot prompting patterns, and deterministic reasoning.

You can ask me about any specific certificate to explore what was learned and achieved.`,
      links: [
        {
                "label": "View All 23 Certificates",
                "url": "/certificates"
        }
],
    },
  },
  ACHIEVEMENTS: {
    id: {
      title: `Penghargaan & Prestasi Kompetisi Web Tingkat Nasional`,
      text: `**Prestasi Kompetisi Rekayasa Web Tingkat Nasional**

Adyvka telah mengukir prestasi di berbagai kejuaraan teknologi tingkat nasional:

1. **Juara 1 Nasional (1st Place Champion) - ICOMFEST 2025:**
   * Diselenggarakan oleh Universitas Ahmad Dahlan (UAD) Yogyakarta pada kategori National Web Design Competition.
   * Merancang dan meluncurkan **Pusakaku**, platform pelestarian warisan budaya nusantara dengan eksplorasi artefak 3D interaktif.

2. **Juara 2 Nasional (2nd Place Runner-Up) - PNBITC#18 2026:**
   * Diselenggarakan oleh Politeknik Negeri Bali pada kompetisi teknologi berskala nasional.
   * Dibangun dari nol dalam sprint berintensitas tinggi selama 1 bulan di sela-sela jadwal padat magang korporat kelas 12 SMK, bersaing mengungguli tim mahasiswa dan perguruan tinggi seluruh Indonesia.

3. **Finalis Nasional (Top 5 National Finalist) - UNILA 2025:**
   * Diselenggarakan oleh Universitas Lampung pada ajang National Web Development Competition.
   * Membangun **SemuaBisa**, platform inklusif berstandar aksesibilitas disabilitas WCAG AAA.

4. **Best Poster Award (Juara Desain Poster):**
   * Penghargaan poster terbaik pada festival kreatif SMK IDN Boarding School.`,
      links: [
        {
                "label": "Lihat Halaman Prestasi",
                "url": "/achievements"
        },
        {
                "label": "Detail Juara 2 PNBITC Bali",
                "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
        },
        {
                "label": "Detail Juara 1 ICOMFEST UAD",
                "url": "/achievements/1st-place-national-web-design-competition"
        }
],
    },
    en: {
      title: `National Web Competition Awards & Honors`,
      text: `**Adyvka's National Engineering & Web Design Honors**

Adyvka has consistently earned podium placements at prestigious collegiate and public competitions:

1. **1st Place National Champion - ICOMFEST 2025:**
   * Hosted by Universitas Ahmad Dahlan (UAD) Yogyakarta in the National Web Design Competition.
   * Engineered **Pusakaku**, an interactive 3D cultural preservation platform featuring real-time artifact exploration.

2. **2nd Place National Runner-Up - PNBITC#18 2026:**
   * Hosted by Politeknik Negeri Bali in their flagship national technology competition.
   * Built and delivered from scratch in a 1-month sprint during a demanding Grade 12 corporate internship, outperforming university engineering teams nationwide.

3. **National Finalist (Top 5) - UNILA 2025:**
   * Hosted by Universitas Lampung in their National Web Development Competition.
   * Architected **SemuaBisa**, an accessibility-first platform built to WCAG AAA standards for users with visual and motor disabilities.

4. **Best Poster Design Award:**
   * Awarded 1st place in the campus creative media design festival at SMK IDN Boarding School.`,
      links: [
        {
                "label": "View Achievements Page",
                "url": "/achievements"
        },
        {
                "label": "PNBITC Bali Runner-Up Details",
                "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
        },
        {
                "label": "ICOMFEST UAD Champion Details",
                "url": "/achievements/1st-place-national-web-design-competition"
        }
],
    },
  },
  BOOKS: {
    id: {
      title: `2 Buku Pemrograman Resmi yang Telah Diterbitkan`,
      text: `**2 Buku Pemrograman Karya Rafif Sava Adyvka Pratama**

Adyvka telah menulis dan menerbitkan dua buku teknis untuk mengedukasi generasi muda dalam dunia rekayasa perangkat lunak:

1. **Membuat Game Tanpa Coding (125 Halaman):**
   * Diterbitkan oleh SMK IDN Boarding School pada Januari 2023 dalam format buku panduan digital kurikulum resmi.
   * Dirancang untuk mengajarkan dasar logika ilmu komputer kepada pemula tanpa intimidasi sintaks melalui kanvas visual MIT Scratch 3.0.
   * Membimbing pembaca langkah demi langkah membangun 5 game arkade lengkap (Pong, Catch the Apples, Platformer Jump, Pacman, dan Block Breaker).
   * Telah digunakan sebagai kurikulum acuan di berbagai workshop yang melatih lebih dari 300 siswa di Depok dan Jakarta.

2. **Membuat Website Modern dengan Framework (Buku Panduan Web Frontend):**
   * Panduan komprehensif bagi pelajar dan pemula untuk memahami arsitektur web modern, semantik HTML5, CSS Grid/Flexbox, dan utility-first styling dengan Tailwind CSS.
   * Menjelaskan prinsip mobile-first design, fluid responsiveness, dan deployment website ke platform cloud publik.`,
      links: [
        {
                "label": "Detail Buku Membuat Game Tanpa Coding",
                "url": "/publications/buku-membuat-game-tanpa-coding"
        },
        {
                "label": "Detail Buku Membuat Website dengan Framework",
                "url": "/publications/buku-membuat-website-dengan-framework"
        }
],
    },
    en: {
      title: `2 Published Programming Books`,
      text: `**2 Published Programming Books Authored by Adyvka**

Adyvka has authored and published two technical textbooks designed to empower younger learners:

1. **Making Games Without Coding (125 Pages):**
   * Published by SMK IDN Boarding School in January 2023 as an official curriculum guide.
   * Demystifies computer science logic for young beginners through MIT Scratch's visual block canvas, avoiding cryptic syntax errors.
   * Guides learners through creating 5 complete playable games (Pong, Fruit Catch, Platformer, Pacman, and Brick Breaker).
   * Adopted across community workshops training over 300 middle and high school students.

2. **Building Modern Websites with Frameworks:**
   * A practical guide teaching responsive web design, semantic HTML5 structure, CSS Grid/Flexbox layouts, and Tailwind CSS utility workflows.
   * Emphasizes mobile-first choreography and production web deployment best practices.`,
      links: [
        {
                "label": "View Making Games Book Details",
                "url": "/publications/buku-membuat-game-tanpa-coding"
        },
        {
                "label": "View Modern Website Book Details",
                "url": "/publications/buku-membuat-website-dengan-framework"
        }
],
    },
  },
  GPA_ACADEMIC: {
    id: {
      title: `Nilai Rapot & Prestasi Akademik (IPK 96 / 100)`,
      text: `**Rekor Akademik & Nilai Rapot Adyvka: 96 / 100**

Adyvka mempertahankan standar prestasi akademik yang sangat tinggi di SMK IDN Boarding School:

* **Nilai Rapot Semester 4:** Meraih rata-rata nilai **96 dari 100** dengan predikat Academic Honors.
* **Jurusan:** Rekayasa Perangkat Lunak (Software Engineering).
* **Keseimbangan Nyata:** Nilai luar biasa ini dicapai secara konsisten sembari memimpin proyek korporat Databank ERP, menjalani magang industri, menulis buku, dan memenangkan kompetisi nasional.
* **Karakter Belajar:** Memadukan penguasaan teori ilmu komputer mendalam dengan kemampuan eksekusi teknis yang cepat dan berdisiplin tinggi.`,
      links: [
        {
                "label": "Lihat Profil Lengkap di Halaman About",
                "url": "/about"
        }
],
    },
    en: {
      title: `Academic Standing & GPA Honors (96 / 100)`,
      text: `**Academic Standing & GPA: 96 / 100 with Academic Honors**

Adyvka maintains an exceptional academic standing at SMK IDN Boarding School:

* **Semester 4 Academic Report:** Holds a **96 out of 100** cumulative average with Academic Honors.
* **Major:** Software Engineering (Rekayasa Perangkat Lunak).
* **High-Paced Balance:** Achieved while simultaneously directing enterprise ERP systems, working corporate internships, authoring textbooks, and winning national hackathons.
* **Academic Discipline:** Reflects a steadfast work ethic where deep theoretical computer science is continually applied to production-grade deliverables.`,
      links: [
        {
                "label": "View Full Profile on About Page",
                "url": "/about"
        }
],
    },
  },
  TECH_STACK: {
    id: {
      title: `Keahlian Teknis & Tech Stack (Polyglot Systems Engineer)`,
      text: `**Keahlian Teknis & Tech Stack Adyvka**

Adyvka adalah seorang polyglot engineer yang memandang bahasa pemrograman sebagai alat yang dipilih secara cermat sesuai karakteristik masalah yang diselesaikan:

* **Bahasa & Runtimes:** TypeScript, JavaScript (Node.js, Bun), Python, PHP, Dart, C, C++, SQL.
* **Arsitektur Sistem:** Clean Architecture, SOLID Principles, System Design, Distributed Systems, Domain-Driven Design (DDD), Modular Monorepos.
* **Backend & API:** NestJS, Express.js, Laravel 12, RESTful APIs, Microservices, Event-Driven Architecture, RBAC & Security.
* **Basis Data & Penyimpanan:** PostgreSQL, MySQL, Prisma ORM, Supabase, Redis Caching, Firebase Firestore, Optimasi Query & Indeks.
* **Frontend & Mobile:** Next.js (15 & 16), React 19, Flutter (Android & iOS), Tailwind CSS (v3 & v4), Framer Motion.
* **Cloud, DevOps & Infrastruktur:** Docker & Docker Compose, AWS (EC2, S3, RDS), Nginx, Git & GitHub CI/CD, Linux Server Management.`,
      links: [
        {
                "label": "Lihat Arsenal Teknis di Halaman About",
                "url": "/about"
        }
],
    },
    en: {
      title: `Technical Arsenal & Polyglot Stack`,
      text: `**Adyvka's Technical Arsenal & Engineering Stack**

Adyvka operates as a polyglot engineer, selecting tools deliberately based on architectural demands:

* **Languages & Runtimes:** TypeScript, JavaScript (Node.js, Bun), Python, PHP, Dart, C, C++, SQL.
* **Software Architecture:** Clean Architecture, SOLID Principles, Distributed Systems, Domain-Driven Design (DDD), Modular Monorepos.
* **Backend & Systems:** NestJS, Express.js, Laravel 12, RESTful APIs, Event-Driven Systems, RBAC & Token Security.
* **Databases & Storage:** PostgreSQL, MySQL, Prisma ORM, Supabase, Redis Caching, Firebase Firestore, Query Optimization.
* **Frontend & Mobile:** Next.js (15 & 16), React 19, Flutter (iOS & Android), Tailwind CSS (v3 & v4), Framer Motion.
* **Cloud, DevOps & Infra:** Docker & Docker Compose, AWS (EC2, S3, RDS), Nginx, Git/GitHub CI/CD, Linux Administration.`,
      links: [
        {
                "label": "Explore Technical Arsenal on About Page",
                "url": "/about"
        }
],
    },
  },
  STRENGTHS_WHY_HIRE: {
    id: {
      title: `Mengapa Memilih & Merekrut Adyvka (Keunggulan Utama)`,
      text: `**Mengapa Perusahaan & Klien Memilih Bekerja Sama dengan Adyvka**

Berikut adalah nilai pembeda utama yang dibawa Adyvka ke dalam setiap tim:

1. **Kecepatan Adaptasi Stack Tanpa Batas:** Memasuki lingkungan kerja dengan teknologi asing bukanlah halangan. Di PT Ardyanda, ia membuktikan akselerasi kilat dari backend intern menjadi Full Stack Developer andalan dalam hitungan minggu.
2. **Kepemilikan Penuh (End-to-End Ownership):** Dari perancangan skema database, penulisan API, optimasi performa frontend, hingga memimpin tim 4 engineer di PT Intisel, ia terbiasa mengawal proyek hingga tuntas dengan standar tertinggi.
3. **Komunikasi & Kepemimpinan:** Tidak bersembunyi di balik terminal. Terbiasa memimpin rapat dengan pemangku kepentingan klien, melatih dewan guru senior di SMPN 25, hingga menjadi Master of Ceremonies (MC) resmi perusahaan.
4. **Ketangguhan Karakter Nyata (Real Grit):** Membiayai sendiri ekspedisi 3 negara di usia 15 tahun melalui tabungan freelance dan bertahan hidup di Semarang dengan modal Rp 0 membuktikan kemandirian dan daya juangnya.
5. **Standar Kode Bersih Tanpa Kompromi:** Selalu menerapkan Clean Architecture, prinsip SOLID, dan penulisan kode berdisiplin tinggi yang mudah dirawat oleh engineer berikutnya.`,
      links: [
        {
                "label": "Tentang Filosofi Adyvka",
                "url": "/about"
        },
        {
                "label": "Hubungi Langsung untuk Peluang Kerja",
                "url": "/contact"
        }
],
    },
    en: {
      title: `Why Hire Adyvka: Core Value Proposition & Strengths`,
      text: `**Why Teams and Clients Choose to Work with Adyvka**

Key strengths that define Adyvka's engineering impact:

1. **Unrivaled Learning Agility:** Entering unfamiliar stacks is treated as an accelerated masterclass. At PT Ardyanda, he rapidly bridged unfamiliar codebases, elevating from backend intern to full-stack feature lead within weeks.
2. **True End-to-End Ownership:** From database schema design and API contracts to fluid UI animations and leading a team of 4 engineers at PT Intisel, he holds himself to the highest production standards.
3. **Executive Communication & Leadership:** Comfortable in stakeholder meetings, translating business requirements into technical specs, training senior educators, and speaking on stage as company MC.
4. **Proven Grit and Independence:** 100% self-funding solo backpacking across 3 countries at 15 and surviving in Semarang with Rp 0 demonstrates rare tenacity and poise under pressure.
5. **Clean Architecture Mindset:** Relentless discipline for clean architecture, type safety, and code maintainability that scales gracefully over time.`,
      links: [
        {
                "label": "Explore Engineering Philosophy",
                "url": "/about"
        },
        {
                "label": "Contact for Opportunities",
                "url": "/contact"
        }
],
    },
  },
  BIO_IDENTITY: {
    id: {
      title: `Profil Lengkap & Filosofi Rafif Sava Adyvka Pratama`,
      text: `**Siapakah Rafif Sava Adyvka Pratama (Adyvka)?**

Rafif Sava Adyvka Pratama (dikenal secara luas sebagai Adyvka) adalah seorang Software Engineer dan Systems Architect berusia 17 tahun yang berbasis di Depok, Jawa Barat, Indonesia:

* **Titik Awal di Usia 13 Tahun:** Mulai menulis baris kode pertama di usia 13 tahun, bukan karena mengejar tren teknologi sesaat, melainkan karena jatuh cinta pada seni mengubah layar terminal kosong menjadi solusi nyata bagi permasalahan manusia.
* **Peran Saat Ini:** Lead Systems Engineer & Project Manager sistem Databank ERP di PT Intisel Prodaktifakom, serta siswa tahun terakhir di SMK IDN Boarding School (Jurusan Rekayasa Perangkat Lunak) dengan rekor akademik IPK 96/100.
* **Filosofi Rekayasa:** Menganggap bahasa dan framework hanyalah alat yang dipilih untuk menghormati karakteristik masalah. Perangkat lunak hebat ditentukan oleh kejelasan (clarity), ketahanan (resilience), dan rasa hormat yang mendalam kepada pengguna akhir.
* **Karakter di Luar Koding:** Mandiri secara finansial melalui kerja freelance, menulis dua buku pemrograman resmi untuk pemula, dan memimpin dengan empati serta integritas tanpa kompromi.`,
      links: [
        {
                "label": "Pelajari Selengkapnya di Halaman About",
                "url": "/about"
        },
        {
                "label": "Lihat Portofolio Proyek",
                "url": "/projects"
        }
],
    },
    en: {
      title: `Who is Rafif Sava Adyvka Pratama (Adyvka)?`,
      text: `**Who is Rafif Sava Adyvka Pratama (Adyvka)?**

Rafif Sava Adyvka Pratama (known online as Adyvka) is a 17-year-old Software Engineer and Systems Architect based in Depok, West Java, Indonesia:

* **Started at Age 13:** Wrote his first line of code at 13, not to chase tech hype, but to turn an empty terminal into software that solves genuine human problems.
* **Current Roles:** Lead Systems Engineer & Project Manager for Databank ERP at PT Intisel Prodaktifakom, and final-year student in Software Engineering at SMK IDN Boarding School with a 96/100 GPA standing.
* **Engineering Philosophy:** Treats programming languages and frameworks as deliberate tools rather than personal identities. Great software is defined by clarity, resilience, and respect for the user.
* **Beyond the Terminal:** Self-funded solo international travel at 15, published two programming textbooks, and holds himself to uncompromising standards with quiet discipline.`,
      links: [
        {
                "label": "Read Full Story on About Page",
                "url": "/about"
        },
        {
                "label": "Explore Systems Portfolio",
                "url": "/projects"
        }
],
    },
  },
  WHAT_ADYVKA_CAN_DO: {
    id: {
      title: "Keahlian & Apa Saja yang Bisa Dilakukan Adyvka (Core Capabilities)",
      text: `**Keahlian Rekayasa, Solusi & Apa Saja yang Bisa Dilakukan Adyvka**

Sebagai Software Engineer dan Systems Architect berusia 17 tahun dengan pengalaman koding sejak 2021, Adyvka memiliki kapabilitas menyeluruh (end-to-end) di berbagai bidang:

* **1. Pengembangan Aplikasi Web & Enterprise Skala Penuh:**
  Merancang dan membangun aplikasi web modern berperforma tinggi dari nol hingga deployment produksi menggunakan Next.js, React, NestJS, Express.js, TypeScript, dan PostgreSQL. Terbukti memimpin sistem Databank ERP di PT Intisel Prodaktifakom dan SIM KEPK di FK Universitas Muhammadiyah Jakarta.
* **2. Arsitektur Sistem Terdistribusi & Database:**
  Menerapkan Clean Architecture, prinsip SOLID, pemodelan skema database ACID (PostgreSQL transaksional atomic), sistem microservices, dan pipeline otomatisasi web scraping skala besar (Puppeteer).
* **3. Integrasi Kecerdasan Buatan (AI) & Computer Vision:**
  Mengintegrasikan Google Gemini AI ke dalam produk nyata (seperti chatbot asisten cerdas dan analisis nutrisi di FitSmart), model Computer Vision YOLO untuk deteksi tanaman di TerasTani, serta inferensi NLP.
* **4. Rekayasa Aplikasi Mobile & Real-time:**
  Mengembangkan aplikasi mobile multi-platform menggunakan Flutter / Dart serta komunikasi instan dua arah berbasis WebSocket (Socket.io) seperti pada platform Time Banking RuangTumbuh.
* **5. Konsultasi Teknis, Audit Kode & Optimasi Performa:**
  Melakukan profiling latensi API, optimasi query database, audit kepatuhan keamanan cloud (AWS), dan audit performa web hingga mencapai skor Google Lighthouse 95 ke atas.
* **6. Pelatihan Pedagogis & Kepemimpinan Proyek:**
  Berpengalaman mengajar sejak usia 13 tahun, menyusun kurikulum coding, melatih puluhan dewan guru sekolah, serta memimpin alur kerja tim developer dan code review sebagai Project Manager.`,
      links: [
        { label: "Jelajahi 18 Proyek Rekayasa", url: "/projects" },
        { label: "Pelajari Profil & Arsitektur", url: "/about" },
        { label: "Hubungi untuk Kerja Sama & Proyek", url: "/contact" }
      ]
    },
    en: {
      title: "What Adyvka Can Do: Core Capabilities & Deliverables",
      text: `**Core Engineering Capabilities: What Adyvka Can Build & Deliver**

As a 17-year-old Software Engineer and Systems Architect building software since 2021, Adyvka delivers comprehensive end-to-end technical capabilities:

* **1. Full Stack Web & Enterprise Engineering:**
  Architecting and deploying high-throughput modern web applications from scratch to production leveraging Next.js, React, NestJS, Express, TypeScript, and PostgreSQL. Proven track record leading Databank ERP at PT Intisel and SIM KEPK at FK UMJ.
* **2. Scalable Distributed Systems & Database Design:**
  Implementing Clean Architecture, SOLID principles, atomic PostgreSQL transaction ledgers, microservices architectures, and large-scale automated Puppeteer web scraping pipelines.
* **3. Artificial Intelligence & Computer Vision Integration:**
  Integrating Google Gemini AI into production software (such as FitSmart preventive health copilot), YOLO computer vision models for disease detection in TerasTani, and NLP pipelines.
* **4. Mobile & Real-time Systems Development:**
  Building dynamic multi-platform mobile applications using Flutter and low-latency bidirectional WebSocket pipelines via Socket.io as demonstrated in RuangTumbuh.
* **5. Technical Consultation, Code Review & Performance Profiling:**
  Profiling API latency, optimizing complex database queries, conducting AWS cloud security audits, and driving web applications to 95+ Google Lighthouse scores.
* **6. Technical Pedagogy & Engineering Leadership:**
  Teaching programming since age 13, designing computing curricula, training school faculties, and directing developer team workflows and code reviews as Project Manager.`,
      links: [
        { label: "Browse All 18 Projects", url: "/projects" },
        { label: "Explore Architecture & Background", url: "/about" },
        { label: "Get in Touch for Opportunities", url: "/contact" }
      ]
    }
  },
  INTERVIEW_CURRENT_ACTIVITIES: {
    id: {
      title: "Aktivitas & Kesibukan Saat Ini (Magang Kelas 12, Freelance & Studi)",
      text: `**Aktivitas & Kesibukan Adyvka Saat Ini di Kelas 12**

Sebagai siswa tingkat akhir di SMK IDN Boarding School, keseharian Adyvka saat ini berfokus pada tiga pilar tanggung jawab paralel:

* **1. Magang Industri Korporat Satu Tahun Penuh (Full-Time Intern):**
  Menjalani program magang wajib kelas 12 selama satu tahun di PT Ardyanda Digital Inovasi (Juli 2026 hingga Januari 2027) sebagai Full Stack Developer, menangani modul backend penggajian (payroll presisi 100%), integrasi basis data, dan arsitektur enterprise.
* **2. Rekayasa Perangkat Lunak Mandiri & Freelance:**
  Tetap aktif memimpin perancangan sistem produksi nyata, termasuk menjabat sebagai Lead Systems Engineer & Project Manager untuk sistem Databank ERP di PT Intisel Prodaktifakom serta merawat sistem klien institusi.
* **3. Komitmen Akademik & Riset Teknologi:**
  Menjaga konsistensi belajar di SMK IDN Boarding School dan mempertahankan rekor akademik tertinggi (IPK 96/100 Semester 4 dengan predikat Academic Honors) sambil mendalami sistem terdistribusi untuk persiapan kelulusan tahun 2027.

Rutinitas ini dijalani dengan disiplin tinggi, alokasi waktu terstruktur, serta fokus eksekusi tanpa kompromi terhadap kualitas.`,
      links: [
        { label: "Buka Halaman About", url: "/about" },
        { label: "Lihat Pengalaman Magang Ardyanda", url: "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship" },
        { label: "Studi Kasus Databank ERP", url: "/projects/databank" }
      ]
    },
    en: {
      title: "Current Routine & Activities: Grade 12 Internship, Freelancing & Academics",
      text: `**Current Daily Activities & Professional Routine in Grade 12**

As a final-year student at SMK IDN Boarding School, Adyvka actively balances three high-responsibility parallel tracks:

* **1. Full-Year Corporate Industry Internship:**
  Serving as a Full Stack Developer at PT Ardyanda Digital Inovasi for a full 1-year placement (July 2026 to January 2027), architecting high-precision payroll workflows, database normalization, and enterprise UI modules.
* **2. Enterprise Systems Engineering & Freelancing:**
  Directing production-grade software delivery, notably serving as Lead Systems Engineer and PM for Databank ERP at PT Intisel Prodaktifakom alongside institutional client deliverables.
* **3. Academic Excellence & Systems Research:**
  Maintaining an outstanding academic record (96/100 GPA Semester 4 standing with Academic Honors) at SMK IDN Boarding School while deepening research in scalable distributed systems ahead of 2027 graduation.

This routine is sustained through disciplined time-blocking, asynchronous communication, and uncompromising delivery velocity.`,
      links: [
        { label: "Explore About Page", url: "/about" },
        { label: "View Ardyanda Internship Details", url: "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship" },
        { label: "Explore Databank ERP", url: "/projects/databank" }
      ]
    }
  },
  INTERVIEW_FUTURE_STUDY_CAREER: {
    id: {
      title: "Rencana Studi Lanjut, Impian & Arah Karier Masa Depan",
      text: `**Rencana Studi Lanjut, Impian & Visi Karier Jangka Panjang Adyvka**

Adyvka merancang masa depannya melalui integrasi kuat antara pendidikan tinggi global dan kepemimpinan rekayasa teknologi:

* **Rencana Studi Lanjut (Undergraduate Degree):**
  Berkomitmen menempuh pendidikan sarjana di bidang Computer Science / Software Engineering di universitas terkemuka dunia dengan fokus pendalaman sistem terdistribusi, perancangan database skala besar, dan arsitektur komputasi modern.
* **Jalur Karier Hibrida (High-Impact Hybrid Path):**
  Menggabungkan keunggulan riset akademis sarjana dengan praktik langsung membangun sistem perangkat lunak yang beroperasi di skala jutaan pengguna.
* **Visi 5 Hingga 10 Tahun ke Depan:**
  Bercita-cita menjadi Principal Systems Architect yang memimpin perancangan infrastruktur misi kritis dan berkontribusi langsung memperkuat ekosistem teknologi nasional di kancah internasional.`,
      links: [
        { label: "Buka Halaman About", url: "/about" },
        { label: "Jelajahi Portofolio Rekayasa", url: "/projects" },
        { label: "Hubungi untuk Diskusi Akademis / Karier", url: "/contact" }
      ]
    },
    en: {
      title: "Higher Education Aspirations, Career Vision & Long-Term Goals",
      text: `**Higher Education Aspirations, Career Vision & Long-Term Goals**

Adyvka bridges high-rigor global academia with real-world enterprise engineering velocity:

* **Higher Education Plans (Undergraduate Degree):**
  Committed to pursuing an undergraduate degree in Computer Science or Software Engineering at a globally renowned institution, specializing in distributed systems, database scalability, and system architecture.
* **High-Impact Hybrid Career Path:**
  Integrating academic computer science rigor with production product engineering that directly impacts mission-critical infrastructure.
* **Long-Term 5 to 10-Year Horizon:**
  Aiming to become a Principal Systems Architect driving large-scale distributed architectures, advancing sovereign technological infrastructure, and mentoring the next generation of engineers.`,
      links: [
        { label: "Explore About Page", url: "/about" },
        { label: "Browse Shipped Projects", url: "/projects" },
        { label: "Get in Touch for Opportunities", url: "/contact" }
      ]
    }
  },
  INTERVIEW_ROLE_MODEL: {
    id: {
      title: "Role Model Inspiratif: Prof. David J. Malan (Harvard CS50)",
      text: `**Role Model Utama Adyvka: Prof. David J. Malan (Harvard University)**

Tokoh inspirasi terbesar yang memandu filosofi komputasi dan cara mengajar Adyvka adalah **Prof. David J. Malan**, pengajar legendaris program Harvard University CS50:

* **1. Kejelasan Pedagogis Tanpa Kompromi Standar:**
  Kemampuan luar biasa David J. Malan dalam mengurai konsep komputasi tingkat rendah yang rumit (seperti alokasi memori pointer dalam bahasa C, struktur data pohon biner, dan efisiensi algoritma) menjadi sangat memikat dan intuitif bagi siapa saja.
* **2. Inspirasi Nyata Jalur Mengajar Adyvka:**
  Menyaksikan dedikasi Malan menggerakkan Adyvka untuk aktif mengajar sejak usia 13 tahun, menyusun materi ramah pemula, melatih dewan guru di SMPN 25 Depok, dan menulis dua buku pemrograman resmi.
* **3. Energi Tinggi & Standar Mutu:**
  Semangat tanpa lelah, persiapan materi yang teramat teliti, serta kepedulian tulus terhadap pertumbuhan setiap siswa menjadi teladan moral yang selalu diterapkan Adyvka dalam memimpin tim maupun berbagi ilmu.`,
      links: [
        { label: "Lihat Sertifikat Harvard CS50 Adyvka", url: "/certificates/cs50-introduction-to-computer-science" },
        { label: "Lihat Riwayat 10 Pengalaman Mengajar", url: "/experience" },
        { label: "Buku Pemrograman Karya Adyvka", url: "/publications/buku-membuat-website-dengan-framework" }
      ]
    },
    en: {
      title: "Inspirational Role Model: Prof. David J. Malan (Harvard University)",
      text: `**Adyvka's Primary Role Model: Prof. David J. Malan (Harvard University)**

The biggest influence shaping Adyvka's engineering discipline and teaching philosophy is **Prof. David J. Malan**, the visionary instructor behind Harvard University's renowned CS50:

* **1. Uncompromising Pedagogical Clarity:**
  Malan's extraordinary ability to demystify complex low-level computer science concepts (such as pointer memory management in C, hash tables, and algorithmic complexity) with theatrical clarity and infectious enthusiasm.
* **2. Spark for Adyvka's Teaching Journey:**
  Experiencing Malan's lectures inspired Adyvka to start mentoring peers at age 13, conduct educator workshops for teachers at SMPN 25 Depok, and publish two programming textbooks for young developers.
* **3. Relentless Standards & Human Empathy:**
  The combination of world-class technical precision with genuine warmth and mentorship forms the operational benchmark Adyvka holds himself to every day.`,
      links: [
        { label: "View Adyvka's Harvard CS50 Certificate", url: "/certificates/cs50-introduction-to-computer-science" },
        { label: "Explore 10 Teaching Experiences", url: "/experience" },
        { label: "Explore Published Books", url: "/publications/buku-membuat-website-dengan-framework" }
      ]
    }
  },
  INTERVIEW_WEAKNESSES: {
    id: {
      title: "Kekurangan & Refleksi Pengembangan Diri Adyvka (Areas for Growth)",
      text: `**Refleksi Diri: Kekurangan Adyvka & Cara Aktif Mengatasinya**

Dalam standar wawancara profesional tingkat tinggi, kesadaran diri (self-awareness) adalah tanda kematangan. Berikut adalah area pengembangan diri Adyvka beserta langkah mitigasi nyatanya:

* **1. Kecenderungan Mengambil Beban Terlalu Banyak (Over-Ownership):**
  Karena terbiasa mengawal proyek secara mandiri dari riset hingga rilis, Adyvka terkadang tergoda menyelesaikan seluruh detail sendirian.
  *Mitigasi aktif:* Adyvka secara sadar melatih pendelegasian terstruktur, menulis dokumentasi arsitektur yang jelas untuk rekan tim, dan membagi tanggung jawab berdasarkan keunggulan tiap anggota tim.
* **2. Perfeksionisme Arsitektural di Tahap Awal (Over-Engineering):**
  Kecintaan pada Clean Architecture dan desain modular terkadang membuat prototipe awal dirancang terlalu rumit sebelum kebutuhan pengguna terbukti.
  *Mitigasi aktif:* Mengadopsi prinsip *Pragmatic Clean Architecture*, mengutamakan validasi fungsional MVP terlebih dahulu, dan melakukan refactoring bertahap berdasarkan data penggunaan riil.
* **3. Batas Istirahat Saat Menghadapi Bug Sulit (Hyperfocus):**
  Saat menghadapi kendala arsitektural yang rumit, Adyvka dapat larut berjam-jam tanpa jeda hingga menemukan solusinya.
  *Mitigasi aktif:* Menerapkan teknik time-boxing dan menyadari bahwa jeda sejenak sering kali memunculkan solusi teknis yang lebih jernih dan efisien.`,
      links: [
        { label: "Pelajari Profil Lengkap di About", url: "/about" },
        { label: "Lihat Filosofi Rekayasa Adyvka", url: "/about" }
      ]
    },
    en: {
      title: "Self-Awareness & Growth Areas: What Are Adyvka's Weaknesses",
      text: `**Self-Awareness: Growth Areas & Active Mitigations**

Constructive self-awareness is essential for senior technical execution. Here are Adyvka's authentic growth areas and his practical mitigation strategies:

* **1. Tendency Toward Excessive Ownership:**
  Accustomed to end-to-end execution, Adyvka can initially be tempted to shoulder too many technical tasks individually rather than delegating immediately.
  *Active mitigation:* Practicing systematic delegation, writing explicit architectural specifications, and empowering team members to own domain modules.
* **2. Architectural Perfectionism Early in Prototypes:**
  A deep appreciation for clean modular design can occasionally lead to over-engineering systems before the initial problem space is fully validated.
  *Active mitigation:* Adopting a pragmatic MVP-first mindset, shipping working core primitives, and refactoring iteratively based on production workload metrics.
* **3. Deep Hyperfocus During Complex Debugging:**
  When tackling intricate distributed bottlenecks, Adyvka can become so absorbed that he pushes through extended hours without breaks.
  *Active mitigation:* Implementing strict time-boxing schedules and recognizing that stepping back often yields cleaner architectural breakthroughs.`,
      links: [
        { label: "Explore About Page", url: "/about" },
        { label: "View Engineering Philosophy", url: "/about" }
      ]
    }
  },
  INTERVIEW_FAILURE_RESILIENCE: {
    id: {
      title: "Pembelajaran dari Kegagalan & Ketangguhan Menghadapi Hambatan",
      text: `**Pembelajaran Nyata dari Hambatan & Resiliensi Menghadapi Kegagalan**

Bagi Adyvka, kegagalan adalah instrumen riset tercepat untuk memperkuat sistem dan kepribadian:

* **Kasus 1: Tantangan Awal Survival Bisnis Semarang (Modal Rp 0):**
  *Kegagalan awal:* Ketika pertama kali ditantang bertahan hidup mandiri di Semarang tanpa modal uang saku, beberapa tawaran jasa awal sempat ditolak calon klien karena Adyvka terlalu banyak menggunakan istilah teknis koding yang tidak relevan dengan kebutuhan bisnis mereka.
  *Pelajaran & Resiliensi:* Belajar bahwa teknologi tidak memiliki arti tanpa pemahaman kebutuhan manusia. Adyvka mengubah pendekatan dengan menawarkan solusi bisnis konkret yang langsung dipahami klien, hingga berhasil mencatatkan omzet jutaan rupiah secara mandiri.
* **Kasus 2: Perangkap Ruang Lingkup (Scope Creep) di Kompetisi Hackathon:**
  *Kegagalan awal:* Pada ajang kompetisi awal, Adyvka merancang fitur yang terlalu luas sehingga menjelang batas akhir pengumpulan waktu menjadi sangat sempit dan beberapa modul pendukung terpaksa dipangkas darurat.
  *Pelajaran & Resiliensi:* Menanamkan metodologi penganggaran ruang lingkup (scope budgeting) yang ketat, selalu merancang arsitektur dengan *graceful fallback*, dan memastikan fitur inti beroperasi stabil sebelum menambah fungsionalitas baru.`,
      links: [
        { label: "Studi Kasus Survival Semarang Modal Rp 0", url: "/experience/pt-intisel-semarang-business-life-survival" },
        { label: "Lihat Rekam Jejak Prestasi Lomba", url: "/achievements" }
      ]
    },
    en: {
      title: "Overcoming Setbacks: Failures, Resilience & Key Learnings",
      text: `**Setbacks, Resilience & Key Lessons Learned from Failure**

Adyvka views failures not as dead ends, but as high-signal feedback loops for structural improvement:

* **Case 1: The Initial Rejections in Semarang Zero-Capital Survival:**
  *Initial setback:* Dropped into Semarang with zero startup capital, Adyvka's initial service pitches were repeatedly rejected by prospective local business clients because he explained technical implementation details rather than their core commercial pain points.
  *Lesson & turnaround:* Learned that engineering must be anchored in human empathy and commercial relevance. Restructured his proposals to address immediate business bottlenecks, eventually generating millions of rupiah in profit independently.
* **Case 2: Over-Ambitious Scope in Early Hackathon Environments:**
  *Initial setback:* In an early hackathon sprint, attempting to build an overly broad feature footprint led to an intense deadline crunch where secondary features had to be stripped at the eleventh hour.
  *Lesson & turnaround:* Instituted disciplined scope budgeting, prioritized immutable core user journeys, and architected graceful degradation mechanisms across all subsequent hackathon builds.`,
      links: [
        { label: "Explore Semarang Survival Case Study", url: "/experience/pt-intisel-semarang-business-life-survival" },
        { label: "Browse Hackathon Achievements", url: "/achievements" }
      ]
    }
  },
  INTERVIEW_BIG_FUTURE_PROJECT: {
    id: {
      title: "Rencana Ide Besar & Proyek Ambisius Masa Depan Adyvka",
      text: `**Ide Besar & Visi Proyek Ambisius Masa Depan Adyvka**

Adyvka tertarik membangun sistem berdaya jangkau masif yang memecahkan ketimpangan akses dan efisiensi rekayasa:

* **1. Sovereign Global Time-Banking Ledger (Evolusi RuangTumbuh):**
  Mengembangkan konsep pertukaran waktu peer-to-peer menjadi jaringan global terdesentralisasi: di mana satu jam mengajar keahlian apa pun bernilai setara dengan satu jam belajar di seluruh dunia. Dilengkapi dengan buku besar kriptografis anti-fraud, verifikasi kredensial otomatis, dan asisten AI adaptif untuk menghapus hambatan finansial dalam pendidikan generasi muda.
* **2. Autonomous Architecture & Systems Observability Engine:**
  Merancang platform infrastruktur cerdas yang dapat menganalisis arsitektur sistem terdistribusi, memetakan potensi kemacetan performa secara prediktif, dan memvalidasi kepatuhan Clean Architecture secara otomatis sebelum kode menyentuh lingkungan produksi enterprise.`,
      links: [
        { label: "Buka Studi Kasus RuangTumbuh", url: "/projects/ruangtumbuh" },
        { label: "Lihat Arsitektur Databank ERP", url: "/projects/databank" },
        { label: "Hubungi untuk Kolaborasi Visi Masa Depan", url: "/contact" }
      ]
    },
    en: {
      title: "Big Future Projects: Ambitious Vision & Next-Gen Systems",
      text: `**Big Future Projects: Ambitious Systems Architecture Vision**

Adyvka aims to build planetary-scale platforms tackling educational inequality and systems observability:

* **1. Sovereign Global Time-Banking Ledger (Evolving RuangTumbuh):**
  Scaling the peer-to-peer time banking paradigm into a borderless decentralized knowledge network: where one hour of teaching any discipline equals one hour of learning worldwide, backed by tamper-proof transactional ledgers, cryptographic credential verification, and AI-assisted pedagogy.
* **2. Autonomous Systems Observability & Architecture Engine:**
  Engineering next-generation developer infrastructure capable of statically analyzing distributed system boundaries, predicting latency regressions, and enforcing Clean Architecture compliance across microservices before code reaches enterprise production.`,
      links: [
        { label: "Explore RuangTumbuh Case Study", url: "/projects/ruangtumbuh" },
        { label: "Explore Databank ERP", url: "/projects/databank" },
        { label: "Connect for Future Collaborations", url: "/contact" }
      ]
    }
  },
  INTERVIEW_TIME_MANAGEMENT: {
    id: {
      title: "Manajemen Waktu & Prioritas: Mengelola Berbagai Tanggung Jawab Sekaligus",
      text: `**Metodologi Manajemen Waktu & Prioritas Ekstrem Adyvka**

Mengelola magang korporat satu tahun, menjaga nilai rapot 96/100, memimpin sistem Databank ERP, dan memenangkan kompetisi nasional menuntut sistem kerja presisi:

* **1. Time Blocking & Deep Work Berfokus Tunggal:**
  Membagi hari ke dalam blok waktu yang tegas tanpa berpindah-pindah konteks secara serampangan. Jam kerja kantor didedikasikan penuh untuk tugas industri, jam belajar dialokasikan untuk pemahaman konsep akademik mendalam, dan jam malam dialokasikan untuk riset arsitektur.
* **2. Komunikasi Asinkron Berstandar Tinggi:**
  Menghindari rapat yang tidak efektif dengan membiasakan penulisan dokumentasi teknis yang jelas dan ringkas, sehingga kolaborasi dengan tim berjalan efisien dan terarah.
* **3. Disiplin Prioritas Berbasis Dampak:**
  Mengevaluasi setiap pekerjaan berdasarkan dampak jangka panjangnya, mengeliminasi gangguan yang tidak bernilai tambah, dan menyelesaikan tugas tersulit di awal waktu.`,
      links: [
        { label: "Pelajari Profil di Halaman About", url: "/about" },
        { label: "Lihat Pengalaman Profesional Adyvka", url: "/experience" }
      ]
    },
    en: {
      title: "Time Management & Prioritization Under Multiple High-Stakes Roles",
      text: `**High-Performance Time Management & Prioritization Methodology**

Balancing a full 1-year corporate internship, a 96/100 GPA standing, leading enterprise ERP delivery, and winning national hackathons requires a disciplined operating rhythm:

* **1. Strict Time Blocking & Single-Task Deep Work:**
  Structuring each day into isolated blocks with zero context switching: dedicated industry delivery blocks, focused academic mastery periods, and evening architecture research slots.
* **2. High-Clarity Asynchronous Communication:**
  Minimizing meeting overhead by writing concise, self-documenting technical briefs, enabling developer teams to execute asynchronously with high velocity.
* **3. Impact-Driven Priority Auditing:**
  Evaluating tasks strictly on architectural leverage and long-term impact, discarding superficial distractions, and tackling the most demanding engineering problems first.`,
      links: [
        { label: "Explore About Page", url: "/about" },
        { label: "Browse Career Experiences", url: "/experience" }
      ]
    }
  },
  INTERVIEW_TEAM_CONFLICT: {
    id: {
      title: "Resolusi Konflik & Kolaborasi Tim Rekayasa Perangkat Lunak",
      text: `**Resolusi Konflik & Pendekatan Kolaborasi Tim Rekayasa Perangkat Lunak**

Ketika terjadi perbedaan pandangan arsitektur atau dinamika tim, Adyvka berpegang pada prinsip profesional berikut:

* **1. Berdebat dengan Data, Berkomitmen dengan Empati:**
  Perbedaan pilihan teknologi atau skema database tidak diselesaikan lewat ego senioritas, melainkan melalui uji perbandingan performa terukur, bukti prototipe, dan data objektif.
* **2. Budaya Evaluasi Tanpa Mencari Kambing Hitam (Blameless Post-Mortem):**
  Ketika terjadi kendala atau kegagalan sistem produksi, fokus investigasi selalu diarahkan pada penguatan arsitektur dan perbaikan proses, bukan menyalahkan individu.
* **3. Mendengarkan Aktif & Menghargai Masukan Tim:**
  Memberikan ruang setara bagi setiap anggota tim untuk mengutarakan pandangannya sebelum keputusan arsitektural final disepakati bersama.`,
      links: [
        { label: "Buka Halaman About", url: "/about" },
        { label: "Lihat Rekam Jejak Kepemimpinan", url: "/experience" }
      ]
    },
    en: {
      title: "Team Collaboration, Engineering Disagreements & Conflict Resolution",
      text: `**Collaborative Engineering & Technical Conflict Resolution**

When architectural debates or workflow friction arise in cross-functional teams, Adyvka navigates them using high-integrity engineering principles:

* **1. Debate with Data, Commit with Empathy:**
  Differing architectural perspectives (such as database paradigms or API contracts) are resolved through empirical benchmarking and measurable prototypes rather than personal hierarchy.
* **2. Blameless Engineering Culture:**
  When production incidents occur, retrospectives focus entirely on structural gaps in testing and process architecture rather than assigning personal blame.
* **3. Active Listening & Inclusive Consensus:**
  Ensuring every engineer's technical concerns are heard before arriving at a definitive, unified architectural direction.`,
      links: [
        { label: "Explore About Page", url: "/about" },
        { label: "Explore Leadership Track Record", url: "/experience" }
      ]
    }
  },
  INTERVIEW_WHY_CS: {
    id: {
      title: "Alasan Memilih Rekayasa Perangkat Lunak & Komputasi",
      text: `**Alasan Memilih Rekayasa Perangkat Lunak & Kecintaan Terhadap Komputasi**

Alasan mengapa Adyvka mendedikasikan hidupnya pada bidang software engineering sejak usia 13 tahun:

* **1. Daya Ungkit (Leverage) Tanpa Batas Ruang dan Waktu:**
  Rekayasa perangkat lunak adalah salah satu dari sedikit bidang di mana seorang pemuda dari mejanya dapat merancang sistem yang membantu jutaan orang di berbagai belahan dunia secara bersamaan.
* **2. Perpaduan Sains Logika & Seni Pemecahan Masalah Manusia:**
  Komputasi memadukan keindahan ketepatan logika matematis dengan empati sosial untuk memecahkan kesulitan nyata manusia.
* **3. Kemandirian dan Kegembiraan Mencipta (Craftsmanship):**
  Sensasi mengubah layar terminal kosong menjadi aplikasi nyata yang berfungsi dengan cepat, andal, dan bermanfaat bagi sesama.`,
      links: [
        { label: "Pelajari Profil di Halaman About", url: "/about" },
        { label: "Jelajahi 18 Proyek Rekayasa", url: "/projects" }
      ]
    },
    en: {
      title: "Why Computer Science & Software Engineering: Core Motivation",
      text: `**Why Software Engineering: The Core Motivation Behind Computing**

Why Adyvka has dedicated his life to software engineering and systems architecture since age 13:

* **1. Unmatched Global Leverage:**
  Software is unique in offering infinite distribution: a single engineer can architect a platform that reliably serves millions globally with zero marginal transport cost.
* **2. Intersection of Mathematical Logic & Human Empathy:**
  Computing bridges mathematical precision with social empathy, transforming abstract code into tangible solutions that eliminate human friction.
* **3. Joy of Pure Craftsmanship:**
  The enduring thrill of turning an empty terminal into resilient, functional software that empowers users with speed, privacy, and reliability.`,
      links: [
        { label: "Explore About Page", url: "/about" },
        { label: "Browse All 18 Projects", url: "/projects" }
      ]
    }
  },
  TWO_TRACKS_TIMELINE: {
    id: {
      title: "Timeline 6 Tahun: Perjalanan Teknis & Kepemimpinan Adyvka (2021 - 2026)",
      text: `**Perjalanan 6 Tahun: Progres Teknis & Kepemimpinan (Two Tracks, Six Years)**

Setiap tahun sejak usia 13 tahun (2021 hingga 2026), Adyvka menyeimbangkan dua jalur pertumbuhan secara simultan: keunggulan rekayasa teknologi (jalur teknis) dan kematangan kepemimpinan manusia (jalur humaniora):

* **2021 (Usia 13 Tahun, Kelas 1 SMP):**
  * *Technical (First Lines of Code):* Mulai menulis baris kode pertama, menguasai HTML, CSS, JavaScript, dan membangun purwarupa game 2D mandiri.
  * *Human (Peer Mentoring):* Mulai mengajar dan membimbing teman sebaya melalui model belajar berbagi antarsiswa di sekolah.

* **2022 (Usia 14 Tahun, Kelas 2 SMP):**
  * *Technical (UI/UX & Robotics):* Mendalami sistem desain antarmuka, logika animasi interaktif modern di Figma, serta eksplorasi sistem kontrol robotika.
  * *Human (OSIS Core Team):* Menjalani peran kepemimpinan formal pertama sebagai tim inti OSIS, mengelola dokumentasi publikasi dan operasional acara siswa.

* **2023 (Usia 15 Tahun, Kelas 3 SMP):**
  * *Technical (Production Client Web):* Mengembangkan dan meluncurkan proyek klien komersial pertama baperentcar.com (sistem web rental mobil live produksi).
  * *Human (International Backpacker):* Lolos seleksi beasiswa ekspedisi solo backpacker mandiri lintas 3 negara (Singapura, Malaysia, Thailand) tanpa pendamping dewasa.

* **2024 (Usia 16 Tahun, Kelas 10 SMK):**
  * *Technical (Full Stack Systems):* Mendalami arsitektur perangkat lunak skala produksi menggunakan TypeScript modern, React, dan API backend terstruktur.
  * *Human (Faculty Training & OSIS Lead):* Dipercaya menjadi instruktur pelatihan teknologi untuk dewan guru di SMPN 25 Depok dan terpilih sebagai Ketua Divisi Acara OSIS SMK IDN Boarding School.

* **2025 (Usia 17 Tahun, Kelas 11 SMK):**
  * *Technical (Academic Honors & Full Stack):* Meraih nilai rapot 96/100 (Academic Honors) di Semester 4, membangun sistem SIM KEPK Universitas Muhammadiyah Jakarta, dan meraih Juara 1 Nasional Web Design ICOMFEST.
  * *Human (Village Community Live In):* Menjalani program Live In satu minggu penuh di desa terpencil Jawa Barat, tinggal dan bertani membaur dengan warga lokal.

* **2026 (Usia 17 ke 18 Tahun, Kelas 12 SMK):**
  * *Technical (Enterprise ERP Engineering):* Menjabat Lead Systems Engineer & Project Manager sistem Databank ERP di PT Intisel Prodaktifakom serta menyelesaikan kurikulum DBS Coding Camp (Capstone RuangTumbuh meraih Juara 2 Nasional PNBITC).
  * *Human (Team Leadership & Mentoring):* Memimpin koordinasi tim pengembang, melakukan review kode, dan membimbing adik tingkat junior software engineer.`,
      links: [
        { label: "Buka Halaman About", url: "/about" },
        { label: "Lihat Seluruh 20 Pengalaman", url: "/experience" },
        { label: "Jelajahi 18 Proyek Rekayasa", url: "/projects" }
      ]
    },
    en: {
      title: "Two Tracks, Six Years: Technical Progression & Leadership Journey (2021 - 2026)",
      text: `**Two Tracks, Six Years: Technical Progression & Human Leadership (2021 - 2026)**

Every single year from age 13 through today, Adyvka has advanced along two parallel tracks: technical software engineering on the left, and human leadership and empathy on the right:

* **2021 (Age 13, Grade 7 / SMP Year 1):**
  * *Technical (First Lines of Code):* Wrote first lines of code, mastering HTML, CSS, JavaScript, and building initial 2D game prototypes.
  * *Human (Peer Mentoring):* Began teaching and mentoring classmates through the school student-to-student knowledge sharing model.

* **2022 (Age 14, Grade 8 / SMP Year 2):**
  * *Technical (UI/UX & Robotics):* Explored visual design systems, interactive animation logic, and foundational robotics engineering.
  * *Human (OSIS Core Team):* First formal student council leadership experience, managing event documentation, logistics, and student operations.

* **2023 (Age 15, Grade 9 / SMP Year 3):**
  * *Technical (Production Client Web):* Shipped baperentcar.com, a live commercial car rental platform deployed directly into client production.
  * *Human (International Backpacker):* Selected for and self-funded a solo backpacking expedition across 3 countries (Singapore, Malaysia, Thailand) at age 15.

* **2024 (Age 16, Grade 10 / SMK Year 1):**
  * *Technical (Full Stack Systems):* Deepened production architecture leveraging modern TypeScript, React interfaces, and structured backend APIs.
  * *Human (Faculty Training & OSIS Lead):* Trained senior educators at SMPN 25 Depok in app design and led the SMK Student Council Event Division.

* **2025 (Age 17, Grade 11 / SMK Year 2):**
  * *Technical (Academic Honors & Full Stack):* Achieved a 96/100 Semester 4 GPA while architecting SIM KEPK for Universitas Muhammadiyah Jakarta and winning 1st Place National Web Design Honors at ICOMFEST.
  * *Human (Village Community Live In):* Completed a week-long rural immersion program, living and farming alongside traditional agricultural families in West Java.

* **2026 (Age 17 to 18, Grade 12 / SMK Year 3):**
  * *Technical (Enterprise ERP Engineering):* Leading Databank ERP at PT Intisel as Lead Systems Engineer and PM, while completing DBS Coding Camp (Capstone RuangTumbuh took 2nd Place National Honors at PNBITC).
  * *Human (Team Leadership & Mentoring):* Directing engineering workflows, conducting code reviews, and onboarding junior developers into professional development.`,
      links: [
        { label: "Explore About Page", url: "/about" },
        { label: "View All 20 Experiences", url: "/experience" },
        { label: "Browse All 18 Projects", url: "/projects" }
      ]
    }
  },
  ABOUT_CURRENT_FOCUS: {
    id: {
      title: "Fokus Utama & Aktivitas Adyvka Saat Ini (Right Now)",
      text: `**Fokus Utama & Apa yang Sedang Dikerjakan Adyvka Saat Ini (Right Now)**

Berdasarkan bagian terkini di halaman About, berikut adalah empat hal utama yang sedang aktif dikerjakan Adyvka:

* **Building (Databank ERP):** Menjabat sebagai Full Stack Engineer & Project Manager yang memimpin arsitektur dan delivery platform telekomunikasi enterprise di PT Intisel Prodaktifakom.
* **Academics (Nilai Rapot 96/100):** Meraih predikat Academic Honors di Semester 4 program Rekayasa Perangkat Lunak SMK IDN Boarding School, dipertahankan konsisten di tengah tanggung jawab proyek industri.
* **Deepening (System Architecture):** Memperdalam perancangan arsitektur backend berskala besar, pola otorisasi RBAC yang bersih, efisiensi database terdistribusi, dan micro-APIs performa tinggi.
* **Exploring (Global Engineering):** Merintis jalur karier hibrida antara rekayasa produk teknologi berkinerja tinggi serta persiapan studi sarjana teknologi di luar negeri.`,
      links: [
        { label: "Buka Halaman About", url: "/about" },
        { label: "Studi Kasus Databank ERP", url: "/projects/databank" },
        { label: "Hubungi Adyvka", url: "/contact" }
      ]
    },
    en: {
      title: "Current Focus & What is Open in the Tabs Right Now",
      text: `**What is Open in the Tabs Right Now: Adyvka's Active Pursuits**

Here is what Adyvka is actively focusing on, building, and exploring right now:

* **Building (Databank ERP):** Serving as Full Stack Engineer and Project Manager leading the enterprise telecommunication platform delivery at PT Intisel Prodaktifakom.
* **Academics (96/100 GPA Honors):** Top-tier academic record achieved in Semester 4 of Software Engineering at SMK IDN Boarding School, maintained while leading corporate ERP deliverables.
* **Deepening (System Architecture):** Mastering resilient backend patterns, clean RBAC authorization architectures, distributed query optimization, and high-performance micro-APIs.
* **Exploring (Global Engineering):** Preparing a hybrid career path combining high-impact software engineering with overseas undergraduate studies.`,
      links: [
        { label: "View About Page", url: "/about" },
        { label: "Databank ERP Case Study", url: "/projects/databank" },
        { label: "Contact Adyvka", url: "/contact" }
      ]
    }
  },
  ABOUT_WHATS_NEXT: {
    id: {
      title: "Rencana Karier Masa Depan & Kelulusan 2027 (What's Next)",
      text: `**Arah Langkah & Masa Depan Karier Adyvka (What's Next)**

Adyvka akan lulus dari SMK IDN Boarding School pada tahun 2027, namun saat ini sudah beroperasi dengan kecepatan eksekusi, standar mutu, dan kepemilikan penuh layaknya software engineer profesional berpengalaman:

* **Role Focus:** Software Engineer dan Systems Architect dengan kepemilikan penuh dari hulu ke hilir (End-to-End Ownership), mulai dari riset arsitektur hingga deployment produksi.
* **Core Stack:** Penguasaan polyglot modern: TypeScript, Python, Dart, PHP, C++, SQL, dan Cloud Infrastructure (AWS, Docker, CI/CD).
* **Spesialisasi Utama:** Clean Architecture, Sistem Terdistribusi Berskala Besar (Scalable Distributed Systems), dan Rekayasa Multi-Platform.
* **Lingkungan Kerja Ideal:** Tim berorientasi rekayasa kuat (engineering-driven) dengan otonomi tinggi yang membangun produk perangkat lunak misi kritis.`,
      links: [
        { label: "Buka Halaman About", url: "/about" },
        { label: "Diskusi Peluang Karier & Kolaborasi", url: "/contact" },
        { label: "Lihat Portofolio Rekayasa", url: "/projects" }
      ]
    },
    en: {
      title: "The Next Chapter: Career Direction, Specialization & 2027 Graduation",
      text: `**The Shape of the Next Chapter: Career Vision & 2027 Graduation**

Graduating in 2027 from SMK IDN Boarding School, Adyvka is already operating with the ownership, speed, and delivery velocity of a seasoned contributor:

* **Role Focus:** Software Engineer and Systems Architect with complete end-to-end ownership from system design to production deployment.
* **Core Stack:** Polyglot mastery across TypeScript, Python, Dart, PHP, C++, SQL, and Cloud Infrastructure (AWS, Docker, CI/CD).
* **Technical Specialization:** Clean Architecture, Scalable Distributed Systems, and Multi-Platform Engineering.
* **Ideal Environment:** High-autonomy, engineering-driven teams building mission-critical software.`,
      links: [
        { label: "Explore About Page", url: "/about" },
        { label: "Discuss Career Opportunities", url: "/contact" },
        { label: "Browse Software Projects", url: "/projects" }
      ]
    }
  },
  ABOUT_CORE_CAPABILITIES: {
    id: {
      title: "Kemampuan Inti & Soft Skills Adyvka (Beyond the Code)",
      text: `**Kemampuan Inti & Karakter Adyvka di Luar Kode (Core Capabilities)**

Di samping kemampuan pemrograman teknis, Adyvka memiliki fondasi kepemimpinan dan karakter yang kuat:

* **Software & System Architecture:** Merancang arsitektur sistem ketersediaan tinggi, batasan domain yang jelas, dan platform multi-tenant yang tangguh.
* **Polyglot Problem Solving:** Memilih bahasa dan paradigma pemrograman terbaik (OOP, Fungsional, Sistem) yang disesuaikan secara presisi dengan kebutuhan performa.
* **Engineering Leadership & PM:** Menjabat sebagai Ketua Divisi Acara OSIS serta memimpin arsitektur dan delivery Databank ERP di PT Intisel Prodaktifakom.
* **Technical Mentoring & Pedagogy:** Berpengalaman mengajar sejak usia 13 tahun, melatih guru di SMPN 25 Depok, dan membimbing junior developer.
* **Cross-cultural Adaptability:** Terpilih dari ratusan siswa untuk ekspedisi solo backpacker 3 negara ASEAN (Singapura, Malaysia, Thailand).
* **Community & Resilience:** Menjalani program Live In satu minggu penuh tinggal dan bekerja tani membaur bersama masyarakat desa di Jawa Barat.`,
      links: [
        { label: "Buka Halaman About", url: "/about" },
        { label: "Lihat Riwayat Kepemimpinan & Pengajaran", url: "/experience" }
      ]
    },
    en: {
      title: "Core Capabilities & Interpersonal Strengths Beyond Code",
      text: `**Core Capabilities and Human Strengths Beyond Code**

Beyond pure syntax and coding, Adyvka brings proven leadership, pedagogic clarity, and high-agency execution:

* **Software & System Architecture:** Designing resilient high-availability systems, clean domain boundaries, and multi-tenant enterprise platforms.
* **Polyglot Problem Solving:** Selecting optimal languages and paradigms (OOP, Functional, Systems) tailored to performance constraints.
* **Engineering Leadership & PM:** Served as Head of OSIS Event Division and led architecture and Databank ERP delivery at PT Intisel.
* **Technical Mentoring & Pedagogy:** Teaching development since age 13, trained educators at SMPN 25 Depok, and mentored junior developer cohorts.
* **Cross-cultural Adaptability:** Selected out of hundreds for the 3-country IDN International Backpacker program across ASEAN.
* **Community & Resilience:** Completed a 1-week traditional village Live In program, living and farming alongside local agricultural communities.`,
      links: [
        { label: "Explore About Page", url: "/about" },
        { label: "Explore Leadership & Teaching Records", url: "/experience" }
      ]
    }
  },
  ABOUT_PHILOSOPHY_QUOTE: {
    id: {
      title: "Filosofi Rekayasa & Prinsip Kerja Adyvka",
      text: `**Filosofi Rekayasa & Prinsip Kerja Adyvka**

Prinsip dasar yang memandu setiap baris kode, arsitektur, dan kepemimpinan Adyvka:

* **Kutipan Filosofis Utama:**
  *"Code is how I build systems. Grit is how I solve problems. Empathy is why any of it matters."*
  (Kode adalah cara saya membangun sistem. Kegigihan adalah cara saya memecahkan masalah. Empati adalah alasan mengapa semua itu bermakna).
* **Prinsip "Built early. Kept building":** Memulai rekayasa perangkat lunak sejak usia 13 tahun pada 2021 dan terus membangun produk nyata secara konsisten tanpa henti.
* **Tiga Nilai Inti:**
  1. *High Agency:* Mengambil inisiatif mandiri untuk menyelesaikan masalah kompleks tanpa perlu disuapi arahan.
  2. *Extreme Ownership:* Bertanggung jawab penuh terhadap keberhasilan sistem dari perancangan hingga performa di tangan pengguna akhir.
  3. *Craftsmanship:* Menjunjung tinggi kode bersih, struktur data optimal, dan arsitektur yang mudah dirawat.`,
      links: [
        { label: "Buka Halaman About", url: "/about" },
        { label: "Jelajahi Proyek Rekayasa", url: "/projects" }
      ]
    },
    en: {
      title: "Engineering Philosophy & Core Operating Principles",
      text: `**Engineering Philosophy & Core Principles of Adyvka**

The core ethos driving every architectural decision, line of code, and leadership initiative:

* **Guiding Philosophy:**
  *"Code is how I build systems. Grit is how I solve problems. Empathy is why any of it matters."*
* **"Built early. Kept building":** Started shipping software at age 13 in 2021 and continuously built real-world production systems year after year.
* **Three Bedrock Values:**
  1. *High Agency:* Autonomously discovering solutions for ambiguous, complex constraints without requiring handholding.
  2. *Extreme Ownership:* Taking complete accountability for software performance from architecture modeling to production reliability.
  3. *Craftsmanship:* Upholding clean architecture standards, optimal algorithmic complexity, and long-term maintainability.`,
      links: [
        { label: "Explore About Page", url: "/about" },
        { label: "Browse Software Projects", url: "/projects" }
      ]
    }
  },
  CONTACT_SERVICES_SCOPE: {
    id: {
      title: "Ruang Lingkup Layanan & Solusi untuk Tim Anda (Deliverables)",
      text: `**Ruang Lingkup Layanan & Apa yang Bisa Dikerjakan Adyvka untuk Tim Anda**

Berdasarkan bagian layanan di halaman Kontak (*What I can deliver for your team*), Adyvka siap berkontribusi dalam tiga cakupan keahlian utama:

* **1. Software Engineering & Architecture:**
  Pengembangan aplikasi full stack end-to-end, perancangan arsitektur sistem terdistribusi, migrasi ke Clean Architecture, dan pembuatan REST/GraphQL API berkinerja tinggi.
* **2. Technical Consultation & Code Review:**
  Pemodelan skema basis data PostgreSQL/MySQL yang optimal, profiling performa sistem dan latensi API, audit keamanan arsitektur, serta bimbingan teknis alur kerja Git untuk tim developer.
* **3. Workshops & Speaking Engagements:**
  Penyelenggaraan workshop pemrograman langsung (hands-on), penyusunan materi kurikulum komputasi yang mudah dipahami, serta menjadi pembicara teknis untuk komunitas pelajar, kampus, maupun profesional.`,
      links: [
        { label: "Hubungi Adyvka", url: "/contact" },
        { label: "Lihat Bukti 18 Proyek", url: "/projects" },
        { label: "Lihat Riwayat Mengajar & Workshop", url: "/experience" }
      ]
    },
    en: {
      title: "What Adyvka Can Deliver for Your Team: Service Scopes",
      text: `**What Adyvka Can Deliver for Your Team: Core Service Scopes**

Based on the deliverable scopes detailed on the Contact page, Adyvka is available for high-impact engagements across three areas:

* **1. Software Engineering & Architecture:**
  End-to-end full stack software development, scalable distributed systems architecture, Clean Architecture migrations, and high-throughput production API integrations.
* **2. Technical Consultation & Code Review:**
  PostgreSQL/MySQL schema modeling, latency and performance profiling, security audits, and engineering mentorship for developer teams.
* **3. Workshops & Speaking Engagements:**
  Hands-on coding workshops, pedagogical curriculum design and delivery, and technical speaking for students, schools, and developer conferences.`,
      links: [
        { label: "Get in Touch", url: "/contact" },
        { label: "Explore 18 Shipped Projects", url: "/projects" },
        { label: "View Teaching & Workshop Records", url: "/experience" }
      ]
    }
  },
  AGE_INFO: {
    id: {
      title: `Usia, Kelahiran & Domisili Adyvka`,
      text: `**Usia, Kelahiran & Domisili Adyvka**

* **Usia Saat Ini:** 17 Tahun (Kelahiran tahun 2008).
* **Tempat Lahir:** Depok, Jawa Barat, Indonesia.
* **Tempat Asal / Domisili:** Depok, Jawa Barat, Indonesia.
* **Mulai Belajar Koding:** Sejak usia 13 tahun (tahun 2021).
* **Pengalaman:** Lebih dari 5 tahun eksplorasi mendalam dalam rekayasa perangkat lunak, sistem terdistribusi, dan aplikasi mobile.
* **Pendidikan:** Siswa tingkat akhir (Kelas 12) di SMK IDN Boarding School jurusan Rekayasa Perangkat Lunak.`,
      links: [
        {
          "label": "Lihat Profil di Halaman About",
          "url": "/about"
        }
      ],
    },
    en: {
      title: `Age, Birth & Origin Details`,
      text: `**Adyvka's Age, Birth & Background**

* **Current Age:** 17 Years Old (Born in 2008).
* **Place of Birth:** Depok, West Java, Indonesia.
* **Origin / Domicile:** Depok, West Java, Indonesia.
* **Coding Journey:** Started at age 13 (in 2021).
* **Experience:** 5+ years of software architecture, distributed systems, and full-stack development.
* **Education:** Final-year high school student (Grade 12) at SMK IDN Boarding School majoring in Software Engineering.`,
      links: [
        {
          "label": "View About Profile",
          "url": "/about"
        }
      ],
    },
  },
  EDUCATION: {
    id: {
      title: `Pendidikan & Sekolah Adyvka (SMK IDN Boarding School)`,
      text: `**Pendidikan & Latar Belakang Sekolah Adyvka**

* **Sekolah:** SMK IDN Boarding School (Bogor/Depok, Jawa Barat).
* **Tingkat:** Kelas 12 (Tahun Terakhir).
* **Jurusan:** Rekayasa Perangkat Lunak (Software Engineering / RPL).
* **Nilai Rapot:** Meraih nilai rata-rata **96 / 100** pada Semester 4 dengan Academic Honors.
* **Budaya Pendidikan:** Lingkungan sekolah berasrama berbasis teknologi intensif dan nilai-nilai karakter kemandirian, melatih kemampuan adaptasi tinggi di bawah tekanan.`,
      links: [
        {
          "label": "Profil Akademik",
          "url": "/about"
        }
      ],
    },
    en: {
      title: `Education & Schooling (SMK IDN Boarding School)`,
      text: `**Adyvka's Academic Education & High School Background**

* **School:** SMK IDN Boarding School (West Java, Indonesia).
* **Grade:** Grade 12 (Final Year).
* **Major:** Software Engineering (Rekayasa Perangkat Lunak).
* **Academic Record:** Maintains a **96 / 100** cumulative GPA standing with Academic Honors.
* **Environment:** An intensive technology boarding school combining modern engineering practices with deep character discipline.`,
      links: [
        {
          "label": "View Academic Profile",
          "url": "/about"
        }
      ],
    },
  },
  LOCATION_DOMICILE: {
    id: {
      title: `Lokasi Domisili, Tempat Lahir & Zona Waktu`,
      text: `**Lokasi Domisili, Tempat Lahir & Zona Waktu Adyvka**

* **Tempat Tinggal / Domisili:** Depok, Jawa Barat, Indonesia.
* **Tempat Lahir:** Depok, Jawa Barat, Indonesia (kelahiran tahun 2008).
* **Zona Waktu:** UTC+07 (Waktu Indonesia Barat / WIB).
* **Fleksibilitas Kerja:** Terbiasa berkolaborasi secara remote lintas zona waktu, maupun bekerja on-site / hybrid di wilayah Jabodetabek.`,
      links: [
        {
          "label": "Hubungi Adyvka",
          "url": "/contact"
        }
      ],
    },
    en: {
      title: `Location, Birthplace & Working Timezone`,
      text: `**Adyvka's Location, Birthplace & Work Availability**

* **Current Residence / Domicile:** Depok, West Java, Indonesia.
* **Place of Birth:** Depok, West Java, Indonesia (born in 2008).
* **Timezone:** UTC+07 (WIB / Western Indonesia Time).
* **Work Arrangement:** Experienced with remote team collaboration across time zones as well as hybrid/on-site arrangements in the Greater Jakarta area.`,
      links: [
        {
          "label": "Get in Touch",
          "url": "/contact"
        }
      ],
    },
  },
  CV_RESUME: {
    id: {
      title: `Unduh CV & Resume Resmi Rafif Sava Adyvka Pratama`,
      text: `**Unduh CV & Resume Resmi Adyvka**

CV resmi Rafif Sava Adyvka Pratama memuat ringkasan rekam jejak profesional, keahlian teknis, dan portofolio enterprise:

* **Tautan Langsung:** Anda dapat mengunduh dokumen CV format PDF berkualitas tinggi melalui tombol di bawah.
* **Isi CV:** Mencakup rekam jejak PT Intisel Prodaktifakom, PT Ardyanda, CV Richo Bahari, KEPK UMJ, sertifikasi Harvard CS50, dan prestasi kompetisi nasional.`,
      links: [
        {
          "label": "Unduh CV Resmi (PDF)",
          "url": "/assets/profile/RafifSavaAdyvkaPratama_CV.pdf"
        },
        {
          "label": "Kunjungi Halaman Kontak",
          "url": "/contact"
        }
      ],
    },
    en: {
      title: `Download Official CV & Resume of Adyvka`,
      text: `**Download Official Resume & CV of Adyvka**

Adyvka's verified resume outlines his engineering experience, technical skills, and systems portfolio:

* **Direct PDF Download:** You can download the high-resolution PDF resume directly below.
* **Contents:** Summarizes work at PT Intisel, PT Ardyanda, CV Richo Bahari, KEPK UMJ, Harvard CS50 credential, and national championship awards.`,
      links: [
        {
          "label": "Download Official CV (PDF)",
          "url": "/assets/profile/RafifSavaAdyvkaPratama_CV.pdf"
        },
        {
          "label": "Contact Page",
          "url": "/contact"
        }
      ],
    },
  },
  CONTACT: {
    id: {
      title: `Kontak Resmi, WhatsApp & Media Sosial Adyvka`,
      text: `**Saluran Kontak Resmi & Media Sosial Adyvka**

Anda dapat menghubungi Adyvka secara langsung untuk peluang kerja, konsultasi teknis, atau kolaborasi proyek:

* **WhatsApp / Telepon:** +62 821-1313-9664
* **Email:** rafifdyvka07@gmail.com
* **GitHub:** https://github.com/adyvka31
* **LinkedIn:** https://www.linkedin.com/in/adyvka-pratama/
* **Instagram:** https://instagram.com/adyvkaa
* **YouTube:** https://www.youtube.com/@adyvkapratama
* **TikTok:** https://www.tiktok.com/@adypraa31
* **Website Portofolio:** https://adyvkapratama.my.id

Anda juga dapat mengirimkan pesan langsung melalui formulir pesan di halaman Contact.`,
      links: [
        {
          "label": "Hubungi via WhatsApp (+62 821-1313-9664)",
          "url": "https://wa.me/6282113139664"
        },
        {
          "label": "Kirim Email Langsung",
          "url": "mailto:rafifdyvka07@gmail.com"
        },
        {
          "label": "Kunjungi Halaman Kontak",
          "url": "/contact"
        }
      ],
    },
    en: {
      title: `Official Contact, WhatsApp & Social Profiles`,
      text: `**Official Contact Details & Social Channels**

Feel free to connect directly with Adyvka for engineering opportunities, contract consulting, or collaborations:

* **WhatsApp / Phone:** +62 821-1313-9664
* **Email:** rafifdyvka07@gmail.com
* **GitHub:** https://github.com/adyvka31
* **LinkedIn:** https://www.linkedin.com/in/adyvka-pratama/
* **Instagram:** https://instagram.com/adyvkaa
* **YouTube:** https://www.youtube.com/@adyvkapratama
* **TikTok:** https://www.tiktok.com/@adypraa31
* **Portfolio URL:** https://adyvkapratama.my.id

You can also submit an inquiry through the interactive message form on the Contact page.`,
      links: [
        {
          "label": "Chat on WhatsApp (+62 821-1313-9664)",
          "url": "https://wa.me/6282113139664"
        },
        {
          "label": "Send Direct Email",
          "url": "mailto:rafifdyvka07@gmail.com"
        },
        {
          "label": "Open Contact Page",
          "url": "/contact"
        }
      ],
    },
  },
  WORK_AVAILABILITY: {
    id: {
      title: `Ketersediaan Kerja & Peluang Karier 2026`,
      text: `**Ketersediaan Kerja & Peluang Karier Adyvka**

* **Status:** Terbuka untuk peluang kerja baru (Available for new opportunities · 2026).
* **Format Kerja:** Full-Time, Kontrak, Part-Time, atau Proyek Konsultasi Freelance.
* **Mode Kerja:** Remote di seluruh dunia, maupun Hybrid / On-Site di wilayah Jabodetabek.
* **Fokus Peran:** Full Stack Engineer, Systems Architect, Backend Engineer, atau Technical Lead.`,
      links: [
        {
                "label": "Diskusikan Peluang di Halaman Kontak",
                "url": "/contact"
        }
],
    },
    en: {
      title: `Work Availability & 2026 Opportunities`,
      text: `**Adyvka's Work Availability & Career Engagement**

* **Current Status:** Open for new opportunities in 2026.
* **Engagement Models:** Full-Time, Contract Engineering, Part-Time, or Technical Consulting.
* **Work Modality:** Global Remote or Hybrid/On-Site in the Greater Jakarta metropolitan area.
* **Target Roles:** Full Stack Engineer, Systems Architect, Backend Developer, or Lead Engineer.`,
      links: [
        {
                "label": "Discuss Opportunities on Contact Page",
                "url": "/contact"
        }
],
    },
  },
  RATES_AND_PRICING: {
    id: {
      title: `Tarif & Biaya Jasa Rekayasa Perangkat Lunak`,
      text: `**Skema Tarif & Biaya Layanan Adyvka**

Biaya disesuaikan dengan cakupan arsitektur, tenggat waktu, dan kompleksitas sistem:

* **Fixed Scope / Project-Based:** Model harga tetap berdasarkan deliverable yang telah disepakati bersama.
* **Hourly / Retainer:** Fleksibel untuk pendampingan teknis, konsultasi arsitektur, atau sprint berkelanjutan.
* **Komitmen:** Memberikan estimasi yang transparan, bebas biaya tersembunyi, dengan jaminan arsitektur clean dan dokumentasi menyeluruh.`,
      links: [
        {
                "label": "Minta Penawaran di Halaman Kontak",
                "url": "/contact"
        }
],
    },
    en: {
      title: `Rates & Engineering Pricing Models`,
      text: `**Adyvka's Pricing Structure & Engagement Rates**

Pricing is tailored to architectural complexity, timelines, and business scope:

* **Fixed Scope / Deliverable-Based:** Milestone-based pricing for clearly defined platforms.
* **Retainer / Hourly Advisory:** Flexible arrangements for ongoing system architecture or development sprints.
* **Commitment:** Transparent estimates, clean documentation, and production-grade delivery without hidden costs.`,
      links: [
        {
                "label": "Request a Quote on Contact Page",
                "url": "/contact"
        }
],
    },
  },
  ENGLISH_FLUENCY: {
    id: {
      title: `Kemampuan Bahasa Inggris & Komunikasi Profesional`,
      text: `**Kemampuan Bahasa Inggris & Komunikasi Internasional**

* **Kemampuan:** Fasih dalam komunikasi teknis, dokumentasi sistem, dan percakapan profesional bahasa Inggris.
* **Sertifikasi:** Memegang sertifikasi resmi English Proficiency Assessment.
* **Pengalaman Nyata:** Memimpin wawancara lapangan langsung dengan warga mancanegara saat solo backpacking di Singapura, Malaysia, dan Thailand di usia 15 tahun.`,
      links: [
        {
                "label": "Lihat Sertifikat Bahasa Inggris",
                "url": "/certificates/english-proficiency-assessment"
        }
],
    },
    en: {
      title: `English Fluency & Global Communication`,
      text: `**Adyvka's English Proficiency & International Communication**

* **Fluency:** Highly proficient in technical architectural writing, documentation, and spoken communication.
* **Certification:** Holds a verified English Proficiency Assessment credential.
* **Field Evidence:** Successfully navigated multi-border transit and conducted conversational field interviews in English during solo travels across Singapore, Malaysia, and Thailand at 15.`,
      links: [
        {
                "label": "View English Certificate",
                "url": "/certificates/english-proficiency-assessment"
        }
],
    },
  },
  HOBBIES_INTERESTS: {
    id: {
      title: `Minat & Kegiatan di Luar Waktu Koding`,
      text: `**Minat & Kegiatan Adyvka di Luar Terminal**

* **Solo Backpacking & Petualangan:** Menjelajahi tempat baru, mengamati budaya lokal, dan menguji kemampuan navigasi mandiri.
* **Menulis & Edukasi:** Menuangkan pemikiran komputasi ke dalam buku panduan yang mudah dipahami pemula.
* **Public Speaking & Berbicara di Depan Umum:** Berbagi wawasan, memandu jalannya acara resmi sebagai MC, dan memotivasi pelajar muda.
* **Eksplorasi Hardware & Sains:** Mengamati cara kerja sistem fisik dan teknologi mutakhir.`,
      links: [
        {
                "label": "Cerita Lengkap di Halaman About",
                "url": "/about"
        }
],
    },
    en: {
      title: `Hobbies & Personal Interests`,
      text: `**Adyvka's Interests Beyond the Screen**

* **Solo Travel & Exploration:** Navigating unfamiliar transit systems and exploring multicultural communities.
* **Technical Writing & Teaching:** Translating complex computing logic into accessible books for young learners.
* **Public Speaking & MCing:** Hosting corporate events and facilitating educational workshops.
* **Hardware & Systems Science:** Investigating physical computing mechanics and modern technology ecosystems.`,
      links: [
        {
                "label": "Read Personal Story on About",
                "url": "/about"
        }
],
    },
  },
  VISION_FUTURE_GOALS: {
    id: {
      title: `Visi Jangka Panjang & Masa Depan`,
      text: `**Visi Jangka Panjang Adyvka**

Adyvka berkomitmen menjadi Systems Architect kelas dunia yang mampu merancang infrastruktur perangkat lunak berkala besar yang tahan uji, berintegritas tinggi, dan memberikan dampak nyata bagi jutaan pengguna di seluruh dunia.`,
      links: [
        {
                "label": "Halaman About",
                "url": "/about"
        }
],
    },
    en: {
      title: `Long-Term Vision & Engineering Aspirations`,
      text: `**Adyvka's Long-Term Engineering Vision**

Adyvka aims to become a world-class Systems Architect, engineering resilient, high-integrity distributed infrastructure that empowers millions of users globally.`,
      links: [
        {
                "label": "About Page",
                "url": "/about"
        }
],
    },
  },
  AI_CAPABILITIES: {
    id: {
      title: `Kemampuan Rekayasa AI & Machine Learning`,
      text: `**Keahlian Rekayasa AI & Machine Learning Adyvka**

Adyvka mengintegrasikan kecerdasan buatan ke dalam produk perangkat lunak nyata:

* **FitSmart Platform:** Mengintegrasikan model Google Gemini Pro dengan guardrails ketat untuk asisten kesehatan preventif dan analisis nutrisi klinis.
* **AI Ticket Manager:** Memanfaatkan HuggingFace NLP inference untuk analisis sentimen otomatis dan penentuan prioritas tiket dukungan pelanggan.
* **TerasTani OS:** Menerapkan computer vision untuk deteksi dini penyakit tanaman dan kesehatan daun sayuran perkotaan.
* **Prompt Engineering:** Memegang sertifikasi Dasar Prompt Engineering dengan pemahaman mendalam tentang few-shot prompting dan temperature tuning.`,
      links: [
        {
                "label": "Lihat Proyek FitSmart AI",
                "url": "/projects/fitsmart"
        },
        {
                "label": "Lihat AI Ticket Manager",
                "url": "/projects/ai-ticket-manager"
        }
],
    },
    en: {
      title: `AI & Machine Learning Engineering Capabilities`,
      text: `**Adyvka's AI and Machine Learning Capabilities**

Adyvka actively embeds production artificial intelligence into practical software platforms:

* **FitSmart Healthcare:** Google Gemini Pro integration with deterministic medical guardrails and zero-temperature clinical reasoning.
* **AI Ticket Manager:** HuggingFace NLP models for automated sentiment analysis and ticket priority routing.
* **TerasTani Urban OS:** Computer vision pipelines for crop leaf pathology detection.
* **Prompt Architecture:** Certified in prompt engineering, leveraging few-shot patterns and chain-of-thought system prompts.`,
      links: [
        {
                "label": "FitSmart AI Health Case Study",
                "url": "/projects/fitsmart"
        },
        {
                "label": "AI Ticket Manager Case Study",
                "url": "/projects/ai-ticket-manager"
        }
],
    },
  },
  MOBILE_APPS: {
    id: {
      title: `Portofolio Pengembangan Aplikasi Mobile (Flutter & Android)`,
      text: `**Portofolio Rekayasa Aplikasi Mobile Adyvka**

Adyvka memiliki rekam jejak kuat dalam membangun aplikasi mobile lintas platform:

* **Attendance App:** Sistem presensi mobile berbasis GPS geofencing dan verifikasi foto selfie untuk mencegah pemalsuan absensi.
* **QR Guest Manager:** Pemindai kode QR berkecepatan tinggi untuk validasi tiket tamu acara.
* **Quran App:** Aplikasi Al-Quran mobile lengkap dengan tajwid, pemutar audio, dan penanda ayat favorit.
* **News App:** Pembaca berita mobile dengan caching offline dan sinkronisasi REST API.
* **Pendidikan Mobile:** Telah melatih dewan guru SMPN 25 Depok dan puluhan santri dalam merancang aplikasi Android interaktif.`,
      links: [
        {
                "label": "Katalog Proyek Mobile",
                "url": "/projects"
        }
],
    },
    en: {
      title: `Mobile Application Portfolio (Flutter & Android)`,
      text: `**Adyvka's Mobile Engineering Portfolio**

Adyvka has engineered and shipped high-performance cross-platform mobile solutions:

* **Attendance App:** Mobile attendance system with GPS geofence radius enforcement and real-time photo verification.
* **QR Guest Manager:** High-throughput QR code scanner for event ticket check-ins.
* **Quran App:** Elegant digital Quran reader with audio recitation streaming and responsive typography.
* **News App:** Native mobile news reader with offline caching and category feeds.
* **Mobile Mentorship:** Trained educators at SMPN 25 Depok and dozens of students in building interactive Android tools.`,
      links: [
        {
                "label": "Explore Mobile Projects",
                "url": "/projects"
        }
],
    },
  },
  RELIGION_FAITH: {
    id: {
      title: `Agama & Nilai Keyakinan Adyvka`,
      text: `**Agama & Nilai Keyakinan Rafif Sava Adyvka Pratama (Adyvka)**

Adyvka memeluk agama **Islam (Muslim)** dan mengintegrasikan nilai-nilai kejujuran, adab, serta disiplin dalam setiap aspek rekayasa perangkat lunak:

* **Pendidikan Berbasis Pesantren Teknologi:** Menempuh pendidikan kejuruan di SMK IDN Boarding School, sekolah berasrama yang memadukan keahlian rekayasa teknologi informasi dengan pembinaan karakter dan adab Islami.
* **Karya Nyata Bernafaskan Nilai Positif:**
  * **Quran App:** Mengembangkan aplikasi mobile Al-Qur'an digital lengkap dengan tipografi mushaf Arab presisi, pemutar audio murottal, penanda bacaan terakhir, dan antarmuka ramah pengguna.
  * **ERP Manajemen Masjid:** Merancang modul pencatatan jadwal, administrasi wakaf, dan sistem keuangan masjid saat menjalani magang di PT Ardyanda Digital Inovasi.
* **Pengabdian & Pelatihan di Komunitas Islami:** Berpengalaman mengajar dan melatih di berbagai institusi keagamaan dan sekolah Islam terkemuka, seperti SMA Lazuardi Global Compassionate School, SMP INS Depok, SD/SMP Al-Anshar, Griyya Sunnah, dan Hajrabyadl.
* **Etika Kerja (Akhlak & Grit):** Menjunjung tinggi transparansi, amanah profesional, serta pantang menyerah dalam memecahkan masalah rekayasa sistem yang kompleks.`,
      links: [
        { label: "Lihat Proyek Quran App", url: "/projects/quran-app" },
        { label: "Profil di Halaman About", url: "/about" }
      ],
    },
    en: {
      title: `Adyvka's Faith & Core Principles`,
      text: `**Adyvka's Faith & Ethical Principles**

Rafif Sava Adyvka Pratama (Adyvka) is a practicing **Muslim** who integrates humility, discipline, and uncompromising ethics into modern software engineering:

* **Islamic Tech Boarding School:** Educated at SMK IDN Boarding School in West Java, an intensive technology campus that combines enterprise software engineering with moral character discipline.
* **Engineering with Purpose:**
  * **Digital Quran App:** Built a modern Islamic recitation platform featuring Arabic typography, high-fidelity audio streams, and reactive bookmark management.
  * **Mosque Community ERP:** Engineered financial and operational management modules for mosques during his corporate internship at PT Ardyanda Digital Inovasi.
* **Community Service & Mentorship:** Mentored junior students and delivered tech training across Islamic educational institutions including SMA Lazuardi GIS, SMP INS Depok, Al-Anshar, and Griyya Sunnah.
* **Core Work Ethic:** Rooted in honesty, personal integrity, and quiet discipline without cutting corners.`,
      links: [
        { label: "View Quran App Project", url: "/projects/quran-app" },
        { label: "Read About Profile", url: "/about" }
      ],
    },
  },
  FAMILY_BACKGROUND: {
    id: {
      title: `Latar Belakang Keluarga & Nilai Kemandirian`,
      text: `**Latar Belakang Keluarga & Masa Tumbuh Adyvka**

Adyvka dibesarkan dalam lingkungan keluarga yang hangat dan suportif di Depok, Jawa Barat:

* **Tumbuh di Depok:** Lahir dan dibesarkan di Kota Depok, Jawa Barat, dengan dukungan keluarga yang selalu menanamkan nilai adab, kerendahan hati, dan keuletan berusaha.
* **Kemandirian Sejak Usia Dini:** Mulai tertarik pada dunia teknologi dan koding sejak umur 13 tahun pada tahun 2021. Berkat ketekunan belajar mandiri dan mengerjakan berbagai proyek freelance, Adyvka mampu membiayai sendiri ekspedisi solo backpacker melintasi 3 negara (Singapura, Malaysia, Thailand) di usia 15 tahun tanpa membebani orang tua.
* **Keseimbangan Tanggung Jawab:** Selalu menjaga amanah keluarga dengan tetap memprioritaskan prestasi akademik sekolah, terbukti dari raihan nilai rapot 96/100 (Academic Honors) di SMK IDN Boarding School sambil aktif memimpin proyek teknologi enterprise.
* **Pribadi yang Tenang & Tangguh:** Dikenal sebagai sosok yang santun, pekerja keras, tidak banyak bicara namun selalu membuktikan kemampuan melalui karya nyata berkualitas tinggi.`,
      links: [
        { label: "Kisah Ekspedisi Solo Backpacker", url: "/experience/singapore-malaysia-thailand-backpacker-3-country" },
        { label: "Halaman Profil Lengkap", url: "/about" }
      ],
    },
    en: {
      title: `Family Roots & Personal Resilience`,
      text: `**Adyvka's Family Background & Personal Foundations**

Adyvka was raised in a warm and supportive family environment in Depok, West Java, Indonesia:

* **Roots in Depok:** Born and raised in Depok, where his family instilled core values of humility, moral discipline, and self-reliance from an early age.
* **Early Self-Reliance:** Fell in love with programming at age 13 in 2021. Through disciplined self-study and contract freelance earnings, he completely self-funded his international solo backpacking expedition through Singapore, Malaysia, and Thailand at age 15 without placing financial burden on his parents.
* **Academic Integrity:** Honored family expectations by maintaining top-tier academic excellence, graduating as a high-honors student with a 96/100 GPA at SMK IDN Boarding School while leading corporate engineering deliverables.
* **Character & Quiet Grit:** Known by peers and mentors as humble, disciplined, and relentlessly focused on high-craftsmanship output.`,
      links: [
        { label: "Solo Backpacker Expedition Details", url: "/experience/singapore-malaysia-thailand-backpacker-3-country" },
        { label: "Read About Profile", url: "/about" }
      ],
    },
  },
  GREETINGS: {
    id: {
      title: `Halo! Selamat Datang di Portofolio Adyvka`,
      text: `**Halo! Selamat datang di portofolio interaktif Rafif Sava Adyvka Pratama (Adyvka)**

Saya memiliki akses penuh ke seluruh rekam jejak terverifikasi Adyvka di bidang rekayasa perangkat lunak, pengajaran, dan kepemimpinan:

* **Academic Honors (Nilai Rapot 96/100):** Semester 4 Rekayasa Perangkat Lunak di SMK IDN Boarding School.
* **Engineering Projects & Publications:** Mengembangkan 18 solusi perangkat lunak (sistem web enterprise, aplikasi mobile, AI) dan penulis 2 buku teknis resmi.
* **Work Experience & Leadership:** 2+ tahun berkarier di 4 perusahaan (Lead Systems Engineer di PT Intisel), 10 sesi mengajar, dan 6 peran kepemimpinan organisasi.
* **National Achievements:** Juara 1 Nasional ICOMFEST 2025, Juara 2 PNBITC Bali, dan Finalis Nasional Universitas Lampung.
* **Certifications:** 23 kredensial terverifikasi, termasuk Harvard University CS50, AWS Cloud Practitioner, dan Coding Camp Full Stack Developer (Grade A).

Anda dapat bertanya dalam **Bahasa Indonesia** maupun **English**. Apa yang ingin Anda ketahui lebih lanjut?`,
      links: [
        { label: "Jelajahi Profil Lengkap", url: "/about" },
        { label: "Lihat Proyek Rekayasa", url: "/projects" },
        { label: "Hubungi Adyvka", url: "/contact" }
      ],
    },
    en: {
      title: `Hello! Welcome to Adyvka's Official Portfolio`,
      text: `**Hello! I am the interactive portfolio assistant for Rafif Sava Adyvka Pratama (Adyvka)**

I have full access to Adyvka's verified records across software engineering, teaching, and leadership:

* **Academic Honors (96/100 GPA):** Semester 4 in Software Engineering at SMK IDN Boarding School.
* **Engineering Projects & Publications:** Built 18 software solutions (enterprise web systems, mobile apps, AI tools) and authored 2 published technical books.
* **Work Experience & Leadership:** 2+ years in industry across 4 companies (Lead Systems Engineer at PT Intisel), 10 teaching engagements, and 6 organizational leadership roles.
* **National Achievements:** 1st Place Champion at ICOMFEST 2025, 2nd Place at PNBITC, and National Finalist at Universitas Lampung.
* **Certifications:** 23 verified credentials, including Harvard University CS50, AWS Cloud Practitioner, and Coding Camp Full Stack Developer (Grade A).

You can ask me questions in **English** or **Bahasa Indonesia**. What would you like to explore?`,
      links: [
        { label: "Explore About Profile", url: "/about" },
        { label: "View Enterprise Projects", url: "/projects" },
        { label: "Contact Adyvka", url: "/contact" }
      ],
    },
  },
  BOT_IDENTITY: {
    id: {
      title: `Tentang Asisten Virtual Portofolio Adyvka`,
      text: `**Tentang Asisten Pintar Portofolio Adyvka**

Saya adalah asisten AI interaktif yang terhubung langsung dengan seluruh basis data portofolio **Rafif Sava Adyvka Pratama (Adyvka)**:

* **Akurasi 100% Sesuai Data Asli:** Saya dilatih untuk memahami seluruh detail teknis 18 proyek aplikasi, arsitektur database, 20 pengalaman profesional, 23 sertifikat resmi, dan 4 penghargaan lomba nasional Adyvka tanpa halusinasi.
* **Dukungan Dua Bahasa:** Anda dapat bertanya menggunakan Bahasa Indonesia maupun Bahasa Inggris dengan gaya bahasa kasual, percakapan sehari-hari, hingga istilah teknis mendalam.
* **Tujuan Asisten:** Membantu recruiter, calon klien, kolaborator, dan pengunjung menjelajahi profil Adyvka dengan cepat, nyaman, dan transparan.`,
      links: [
        { label: "Pelajari Lebih Lanjut di Halaman About", url: "/about" },
        { label: "Hubungi Adyvka Langsung", url: "/contact" }
      ],
    },
    en: {
      title: `About Adyvka's Interactive AI Assistant`,
      text: `**About Adyvka's Portfolio Interactive Assistant**

I am the dedicated AI assistant built directly into **Rafif Sava Adyvka Pratama's (Adyvka)** official portfolio:

* **100% Authoritative Knowledge:** Grounded in verified engineering data covering all 18 production projects, database architectures, 20 professional experiences, 23 credentials, and 4 national awards.
* **Bilingual Intelligence:** Fully fluent in both English and Bahasa Indonesia across technical, business, and casual queries.
* **Mission:** To empower recruiters, engineering leads, clients, and fellow developers to discover Adyvka's work with speed, clarity, and depth.`,
      links: [
        { label: "Read About Profile", url: "/about" },
        { label: "Get in Touch", url: "/contact" }
      ],
    },
  },
  GRATITUDE_THANKS: {
    id: {
      title: `Sama-sama! Senang Bisa Membantu`,
      text: `**Sama-sama! Senang sekali bisa membantu Anda**

Terima kasih atas apresiasi dan kunjungan Anda ke portofolio resmi **Rafif Sava Adyvka Pratama (Adyvka)**.

Jika Anda tertarik untuk mendiskusikan peluang kerja, proyek rekayasa sistem terdistribusi, atau kerja sama freelance, Anda dapat menghubungi Adyvka kapan saja melalui saluran kontak di bawah.`,
      links: [
        { label: "Hubungi via WhatsApp", url: "https://wa.me/6282113139664" },
        { label: "Kirim Email Langsung", url: "mailto:rafifdyvka07@gmail.com" },
        { label: "Kunjungi Halaman Kontak", url: "/contact" }
      ],
    },
    en: {
      title: `You're Welcome! Happy to Help`,
      text: `**You're Very Welcome! Happy to Help**

Thank you for visiting **Rafif Sava Adyvka Pratama's (Adyvka)** portfolio and showing interest in his work.

If you have an engineering contract, career opportunity, or system architecture challenge you would like to discuss, feel free to reach out directly anytime!`,
      links: [
        { label: "Chat on WhatsApp", url: "https://wa.me/6282113139664" },
        { label: "Send an Email", url: "mailto:rafifdyvka07@gmail.com" },
        { label: "Open Contact Page", url: "/contact" }
      ],
    },
  },
  OVERVIEW_FALLBACK: {
    id: {
      title: `Asisten Pintar Portofolio Rafif Sava Adyvka Pratama (Adyvka)`,
      text: `**Halo! Saya adalah Asisten Portofolio Interaktif Rafif Sava Adyvka Pratama (Adyvka).**

Saya memiliki pemahaman menyeluruh terhadap seluruh rekam jejak, proyek, sertifikat, dan pengalaman Adyvka:

* **Sistem Enterprise & 18 Proyek:** Databank ERP (PT Intisel), SIM KEPK FK UMJ, TerasTani, RuangTumbuh, CV Richo Bahari, FitSmart, Pusakaku, SemuaBisa, dll.
* **Pengalaman Kerja Profesional:** Magang korporat di PT Ardyanda (payroll 100% presisi, kasbon, RS, MC), PT Intisel (Lead Engineer), CV Richo Bahari, dan FK UMJ.
* **Pengalaman Mengajar & Pelatihan Guru:** Melatih dewan guru SMPN 25 Depok di usia 16 tahun, SMA Lazuardi GCS, SMP INS Depok, Semut-Semut, dll.
* **Sertifikasi Global:** 23 Sertifikat resmi termasuk Harvard University CS50, AWS Cloud Practitioner, Dicoding × DBS Coding Camp, Git & GitHub, React, Python, C, dll.
* **Prestasi & Ekspedisi:** Juara 1 Nasional ICOMFEST 2025, Juara 2 Nasional PNBITC Bali, Solo Backpacker 3 Negara di usia 15 tahun, dan IPK 96/100.
* **2 Buku Pemrograman:** Penulis buku resmi *Membuat Game Tanpa Coding* dan *Membuat Website Modern*.

Silakan tanyakan hal apa pun mengenai proyek, sertifikat, atau pengalaman spesifik Adyvka dalam **Bahasa Indonesia** atau **English**!`,
      links: [
        {
                "label": "Katalog 18 Proyek",
                "url": "/projects"
        },
        {
                "label": "20 Rekam Jejak Pengalaman",
                "url": "/experience"
        },
        {
                "label": "23 Sertifikat Terverifikasi",
                "url": "/certificates"
        },
        {
                "label": "Unduh CV Resmi",
                "url": "/assets/profile/RafifSavaAdyvkaPratama_CV.pdf"
        }
],
    },
    en: {
      title: `Rafif Sava Adyvka Pratama (Adyvka) Portfolio Assistant`,
      text: `**Hello! I am the interactive assistant for Rafif Sava Adyvka Pratama (Adyvka).**

I have complete access to verified details across all of Adyvka's work, projects, certificates, and achievements:

* **Enterprise Architecture & 18 Projects:** Databank ERP (PT Intisel), SIM KEPK FK UMJ, TerasTani, RuangTumbuh, CV Richo Bahari, FitSmart, Pusakaku, SemuaBisa, etc.
* **Corporate Work Experience:** Full Stack Internship at PT Ardyanda (100% precision payroll, loans, hospital systems, MC), Lead Systems Engineer at PT Intisel, CV Richo Bahari, and FK UMJ.
* **Teaching & Mentorship:** Faculty teacher training at SMPN 25 Depok at age 16, SMA Lazuardi GCS, SMP INS Depok, Semut-Semut, etc.
* **Global Certifications:** 23 verified credentials including Harvard University CS50, AWS Cloud Practitioner, Dicoding × DBS Coding Camp, Git with GitHub, React, etc.
* **Achievements & Grit:** 1st Place National Champion ICOMFEST 2025, 2nd Place Runner-Up PNBITC Bali, 100% self-funded 3-country solo backpacker at 15, and 96/100 GPA.
* **2 Published Books:** Author of *Making Games Without Coding* and *Modern Websites with Frameworks*.

Feel free to ask me anything about any specific project, experience, or certificate in **English** or **Bahasa Indonesia**!`,
      links: [
        {
                "label": "Explore 18 Projects",
                "url": "/projects"
        },
        {
                "label": "20 Verified Experiences",
                "url": "/experience"
        },
        {
                "label": "23 Credentials",
                "url": "/certificates"
        },
        {
                "label": "Download CV",
                "url": "/assets/profile/RafifSavaAdyvkaPratama_CV.pdf"
        }
],
    },
  },


  // --- NEW INTEGRATED DEEP-DIVE CARDS (71 ITEMS) ---
  CONTACT_WHATSAPP: {
  "id": {
    "title": "Kontak Langsung WhatsApp Resmi Adyvka",
    "text": "**Hubungi Adyvka via WhatsApp Resmi**\n\nAnda dapat menghubungi Adyvka secara instan melalui saluran WhatsApp untuk penawaran kerja sama, konsultasi rekayasa perangkat lunak, atau undangan proyek:\n\n* **Nomor WhatsApp Resmi:** +62 821-1313-9664\n* **Tautan Obrolan Cepat:** [Chat WhatsApp Langsung](https://wa.me/6282113139664)\n* **Ketersediaan Komunikasi:** Aktif setiap hari kerja (WIB / UTC+07) dengan rata-rata respons di bawah beberapa jam.\n* **Topik yang Diterima:** Rekrutmen Full-Time / Kontrak, Proyek Freelance Enterprise, Pelatihan Guru dan Komunitas, serta Sesi Mentoring Teknis.",
    "links": [
      {
        "label": "Buka WhatsApp (+62 821-1313-9664)",
        "url": "https://wa.me/6282113139664"
      },
      {
        "label": "Kunjungi Halaman Kontak",
        "url": "/contact"
      }
    ]
  },
  "en": {
    "title": "Direct Official WhatsApp Channel for Adyvka",
    "text": "**Contact Adyvka Directly via Official WhatsApp**\n\nYou can reach out to Adyvka instantly for software engineering contracts, enterprise job offers, or technical consultation:\n\n* **Official WhatsApp Number:** +62 821-1313-9664\n* **Direct Instant Chat Link:** [Open WhatsApp Chat](https://wa.me/6282113139664)\n* **Response Availability:** Active during business hours (UTC+07 / WIB) with typical response time within a few hours.\n* **Inquiry Topics Welcomed:** Full-Stack & Systems Engineering Roles, Enterprise Freelance Development, Faculty Training Workshops, and Technical Mentorship.",
    "links": [
      {
        "label": "Open WhatsApp (+62 821-1313-9664)",
        "url": "https://wa.me/6282113139664"
      },
      {
        "label": "Visit Contact Page",
        "url": "/contact"
      }
    ]
  }
},

  CONTACT_EMAIL: {
  "id": {
    "title": "Alamat Email Resmi untuk Peluang Kerja & Kolaborasi",
    "text": "**Kirim Surel Langsung ke Adyvka**\n\nUntuk pengiriman proposal resmi, dokumen RFP, offering letter perusahaan, atau kerja sama jangka panjang:\n\n* **Alamat Email Resmi:** rafifdyvka07@gmail.com\n* **Format Surel Disarankan:** Cantumkan deskripsi proyek, timeline target, ekspektasi peran, dan tautan perusahaan terkait.\n* **Waktu Respons:** Surel diperiksa secara berkala setiap hari kerja dengan balasan maksimal dalam 24 jam.",
    "links": [
      {
        "label": "Kirim Email Langsung",
        "url": "mailto:rafifdyvka07@gmail.com"
      },
      {
        "label": "Unduh CV Resmi",
        "url": "/assets/profile/RafifSavaAdyvkaPratama_CV.pdf"
      },
      {
        "label": "Kunjungi Halaman Kontak",
        "url": "/contact"
      }
    ]
  },
  "en": {
    "title": "Official Email Address for Career Inquiries & Enterprise Work",
    "text": "**Send an Official Email Directly to Adyvka**\n\nFor formal RFP documentation, corporate offering letters, and long-term engineering partnerships:\n\n* **Official Email Address:** rafifdyvka07@gmail.com\n* **Recommended Email Format:** Please include project overview, targeted delivery timeline, scope of work, and company links.\n* **Response Window:** Inquiries are monitored continuously with responses typically provided within 24 hours.",
    "links": [
      {
        "label": "Send Email Directly",
        "url": "mailto:rafifdyvka07@gmail.com"
      },
      {
        "label": "Download Official CV",
        "url": "/assets/profile/RafifSavaAdyvkaPratama_CV.pdf"
      },
      {
        "label": "Visit Contact Page",
        "url": "/contact"
      }
    ]
  }
},

  CONTACT_SOCIAL: {
  "id": {
    "title": "Tautan Profil Resmi GitHub, LinkedIn & Media Sosial",
    "text": "**Saluran Digital dan Repositori Terverifikasi Adyvka**\n\nIkuti dan verifikasi portofolio kode serta aktivitas profesional Adyvka di platform digital resmi berikut:\n\n* **GitHub (Kode Sumber & Open Source):** [github.com/adyvka31](https://github.com/adyvka31)\n* **LinkedIn (Rekam Jejak Profesional):** [linkedin.com/in/adyvka-pratama](https://www.linkedin.com/in/adyvka-pratama/)\n* **YouTube (Tutorial & Dokumentasi Teknis):** [@adyvkapratama](https://www.youtube.com/@adyvkapratama)\n* **Instagram (Aktivitas & Publikasi):** [@adyvkaa](https://instagram.com/adyvkaa)\n* **TikTok (Edukasi Koding Cepat):** [@adypraa31](https://www.tiktok.com/@adypraa31)",
    "links": [
      {
        "label": "Kunjungi Profil GitHub",
        "url": "https://github.com/adyvka31"
      },
      {
        "label": "Kunjungi Profil LinkedIn",
        "url": "https://www.linkedin.com/in/adyvka-pratama/"
      },
      {
        "label": "Kunjungi Halaman Kontak",
        "url": "/contact"
      }
    ]
  },
  "en": {
    "title": "Official Verified Profiles on GitHub, LinkedIn & Social Media",
    "text": "**Verified Digital Presence and Code Repositories**\n\nFollow and inspect Adyvka's open-source repositories and career milestones across official channels:\n\n* **GitHub (Open Source Repositories & Architecture):** [github.com/adyvka31](https://github.com/adyvka31)\n* **LinkedIn (Career Experience & Endorsements):** [linkedin.com/in/adyvka-pratama](https://www.linkedin.com/in/adyvka-pratama/)\n* **YouTube (Technical Tutorials & Presentations):** [@adyvkapratama](https://www.youtube.com/@adyvkapratama)\n* **Instagram (Engineering Activities & Milestones):** [@adyvkaa](https://instagram.com/adyvkaa)\n* **TikTok (Bite-Sized Coding Tips):** [@adypraa31](https://www.tiktok.com/@adypraa31)",
    "links": [
      {
        "label": "Visit GitHub Profile",
        "url": "https://github.com/adyvka31"
      },
      {
        "label": "Visit LinkedIn Profile",
        "url": "https://www.linkedin.com/in/adyvka-pratama/"
      },
      {
        "label": "Visit Contact Page",
        "url": "/contact"
      }
    ]
  }
},

  SEMARANG_PROFIT_DEEPDIVE: {
  "id": {
    "title": "Strategi Menghasilkan Omzet Jutaan Rupiah dari Modal Rp 0 di Semarang",
    "text": "**Mekanisme Finansial Survival Bisnis Modal Nol Rupiah di Semarang**\n\nTiba di Kota Semarang tanpa uang tunai dan tanpa bantuan eksternal, Adyvka menerapkan strategi komersial taktis untuk bertahan hidup dan menghasilkan pendapatan:\n\n1. **Peluang Kerja Cepat di Hari Pertama:** Berjalan kaki puluhan kilometer menyusuri kawasan pergudangan dan bengkel teknik untuk menawarkan tenaga fisik.\n2. **Pekerjaan Logistik di Depot Telekomunikasi PT Intisel:** Mengamankan pekerjaan harian memuat perangkat keras baja, dudukan antena, dan kabel feeder BTS ke truk logistik.\n3. **Konversi Tenaga Menjadi Modal Berputar:** Upah tunai hari pertama dialokasikan secara ketat untuk kebutuhan makanan dasar, sementara sisanya digunakan untuk konsinyasi barang dagangan lokal.\n4. **Disiplin Kas Ketat:** Seluruh arus kas dicatat manual setiap malam. Pada hari keenam, tabungan mandiri telah mencapai jutaan rupiah dan cukup untuk membeli tiket kereta pulang di Stasiun Semarang Tawang.",
    "links": [
      {
        "label": "Detail Pengalaman Survival Semarang",
        "url": "/experience/pt-intisel-semarang-business-life-survival"
      },
      {
        "label": "Lihat Semua 20 Pengalaman",
        "url": "/experience"
      }
    ]
  },
  "en": {
    "title": "Commercial Mechanics of Generating Millions from Zero Capital in Semarang",
    "text": "**Financial and Commercial Strategy Behind the Rp 0 Semarang Challenge**\n\nArriving in Semarang with literally zero cash and zero personal contacts, Adyvka deployed tactical resourcefulness to secure daily subsistence and generate surplus capital:\n\n1. **Day One Direct Pitching:** Walking kilometers under tropical heat across industrial districts to pitch immediate manual labor to warehouse supervisors.\n2. **Securing Telecom Logistics Work:** Landing temporary handling work at PT Intisel's regional telecom storage depot, loading steel mounting brackets, antennas, and heavy transmission cabling onto distribution vehicles.\n3. **Reinvesting First Day Wages:** Strict allocation of day-one cash earnings into minimal basic food, turning the surplus into inventory trading and local value exchange.\n4. **Financial Discipline and Tawang Station Victory:** Keeping meticulous handwritten cash flow logs. By day six, total earnings reached millions of rupiah, fully covering living costs and return train tickets at Semarang Tawang Station.",
    "links": [
      {
        "label": "Semarang Survival Experience Case Study",
        "url": "/experience/pt-intisel-semarang-business-life-survival"
      },
      {
        "label": "Explore All 20 Experiences",
        "url": "/experience"
      }
    ]
  }
},

  SEMARANG_MINDSET_DEEPDIVE: {
  "id": {
    "title": "Mindset Wirausaha Ekstrem dan Kemampuan Negosiasi Lapangan di Semarang",
    "text": "**Pelajaran Mentalitas Wirausaha dan Daya Tahan Ekstrem**\n\nTantangan survival satu minggu di Semarang membentuk fondasi ketangguhan mental Adyvka:\n\n* **Menghadapi Penolakan Tanpa Rasa Takut:** Ditolak puluhan pemilik ruko dan mandor gudang sebelum mendapatkan pekerjaan pertama mengajarkan ketahanan mental bahwa penolakan hanyalah data statistik, bukan kegagalan pribadi.\n* **Orientasi Solusi Cepat:** Dalam kondisi lapar dan tanpa saldo bank, otak dipaksa membuang kepasifan dan secara proaktif mencari siapa yang membutuhkan penyelesaian masalah di jalanan.\n* **Kecerdasan Negosiasi Lapangan:** Membangun rapport instan dengan orang asing dan mandor proyek untuk meyakinkan mereka bahwa tenaga kerja muda ini dapat diandalkan dan berintegritas.\n* **Menghilangkan Ketakutan akan Kemiskinan:** Keberhasilan pulang membawa tiket yang dibeli dari keringat sendiri menanamkan keyakinan bahwa di lingkungan apa pun, Adyvka mampu bertahan dan membangun kesuksesan.",
    "links": [
      {
        "label": "Studi Kasus Survival Semarang",
        "url": "/experience/pt-intisel-semarang-business-life-survival"
      },
      {
        "label": "Lihat Profil Lengkap Adyvka",
        "url": "/about"
      }
    ]
  },
  "en": {
    "title": "Extreme Entrepreneurial Mindset & Street Negotiation in Semarang",
    "text": "**Psychological Resilience and Field Negotiation Lessons**\n\nThe unassisted one-week survival challenge in Semarang forged Adyvka's unbreakable problem-solving mindset:\n\n* **Immunity to Rejection:** Enduring dozens of rejections from shopkeepers and warehouse managers before securing the first gig taught that rejection is merely feedback, never a personal defeat.\n* **Extreme Resourcefulness over Resources:** When starvation is a real possibility, excuses vanish. Survival requires immediate active scanning of who has an urgent problem that can be solved right now.\n* **Street Negotiation and Trust Building:** Quickly reading body language and establishing rapport with blue-collar workers and managers to demonstrate reliability and relentless work ethic.\n* **Elimination of Poverty Anxiety:** Successfully purchasing return train tickets with self-earned money erased any fear of failure, instilling lifelong confidence to thrive under any adversity.",
    "links": [
      {
        "label": "Semarang Survival Experience Details",
        "url": "/experience/pt-intisel-semarang-business-life-survival"
      },
      {
        "label": "View Adyvka Profile & Philosophy",
        "url": "/about"
      }
    ]
  }
},

  SEMARANG_DAILY_DEEPDIVE: {
  "id": {
    "title": "Rutinitas Harian dan Manajemen Sumber Daya saat Survival di Semarang",
    "text": "**Rutinitas Operasional dan Manajemen Sumber Daya Lapangan di Semarang**\n\nSetiap hari selama seminggu diatur dengan perhitungan waktu dan energi yang presisi:\n\n* **Manajemen Istirahat:** Memanfaatkan tempat umum yang aman seperti serambi masjid untuk beristirahat malam tanpa mengeluarkan biaya sewa penginapan.\n* **Disiplin Makanan dan Kalori:** Menghitung asupan kalori termurah yang mengenyangkan untuk mempertahankan stamina fisik saat mengangkut material berat.\n* **Mobilitas Efisien:** Berjalan kaki melintasi zona industri Simpang Lima dan Pelabuhan Tanjung Emas untuk menghemat seluruh uang tunai yang terkumpul.\n* **Pelajaran Kerendahan Hati:** Pengalaman ini menumbuhkan rasa empati mendalam terhadap pekerja harian lepas dan buruh kasar di Indonesia.",
    "links": [
      {
        "label": "Detail Pengalaman Survival Semarang",
        "url": "/experience/pt-intisel-semarang-business-life-survival"
      },
      {
        "label": "Pengalaman Solo Backpacker 3 Negara",
        "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
      }
    ]
  },
  "en": {
    "title": "Daily Survival Routine & Resource Management in Semarang",
    "text": "**Field Operational Realities and Resource Management Across Semarang**\n\nEach day during the survival challenge was executed with strict caloric and financial budgeting:\n\n* **Rest and Shelter Protocols:** Resting overnight in safe community public spaces such as mosque courtyards to eliminate lodging expenses entirely.\n* **Nutritional Discipline:** Maximizing caloric value with minimal rupiah outlay to sustain intense physical endurance during hardware loading shifts.\n* **Zero-Cost Mobility:** Walking on foot across industrial corridors from Simpang Lima to Tanjung Emas Port to protect every rupiah earned.\n* **Deep Empathy for Blue-Collar Labor:** Gaining firsthand reverence for Indonesia's daily wage laborers, cementing profound humility and social awareness.",
    "links": [
      {
        "label": "Semarang Survival Case Study",
        "url": "/experience/pt-intisel-semarang-business-life-survival"
      },
      {
        "label": "3-Country Solo Backpacker Experience",
        "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
      }
    ]
  }
},

  DATABANK_SCRAPING_DEEPDIVE: {
  "id": {
    "title": "Arsitektur Otomasi Web Scraping Huawei ISDP di Databank ERP",
    "text": "**Otomasi Scraping Telemetri Huawei ISDP pada Databank ERP**\n\nAdyvka merancang subsistem otomatisasi headless browser untuk menyinkronkan data BTS tanpa input manual:\n\n* **Headless Extraction Engine:** Menggunakan script berbasis Node.js dan headless Chromium untuk melakukan login terenkripsi ke portal enterprise Huawei ISDP.\n* **Penanganan Sesi Dinamis:** Menyimpan token sesi dan cookie secara aman, melakukan refresh otomatis saat sesi kedaluwarsa tanpa menghentikan antrean.\n* **Ekstraksi Data Tabular:** Mengurai ratusan halaman dokumen BTS, status acceptance, dan bukti pekerjaan lapangan ke dalam format JSON terstruktur.\n* **Sinkronisasi Terjadwal:** Menjalankan cron job periodik untuk memastikan ribuan site telekomunikasi selalu diperbarui di database PostgreSQL.",
    "links": [
      {
        "label": "Detail Proyek Databank ERP",
        "url": "/projects/databank"
      },
      {
        "label": "Peran Lead Engineer di PT Intisel",
        "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
      }
    ]
  },
  "en": {
    "title": "Automated Huawei ISDP Web Scraping Engine in Databank ERP",
    "text": "**Automated Telemetry Scraping Architecture in Databank ERP**\n\nAdyvka engineered a resilient headless browser ingestion pipeline to eliminate tedious manual data entry:\n\n* **Headless Extraction Pipeline:** Built with Node.js and headless Chromium to perform automated authenticated sessions into the enterprise Huawei ISDP portal.\n* **Dynamic Session Management:** Secure cookie storage and automated token re-authentication to prevent job interruption during long scraping cycles.\n* **Tabular Data Parsing:** Normalizing hundreds of unstructured web pages, site acceptance milestones, and inspection photos into standardized JSON payloads.\n* **Scheduled Ingestion Crons:** Nightly batch sync tasks populating PostgreSQL schemas across more than 1,000 active telecom BTS installations.",
    "links": [
      {
        "label": "Databank ERP Project Details",
        "url": "/projects/databank"
      },
      {
        "label": "Lead Engineer Role at PT Intisel",
        "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
      }
    ]
  }
},

  DATABANK_METRICS_DEEPDIVE: {
  "id": {
    "title": "Dampak Efisiensi 90% dan Reduksi Waktu Verifikasi Databank ERP",
    "text": "**Metrik Keberhasilan Bisnis dan Efisiensi Operasional Databank ERP**\n\nImplementasi Databank ERP memberikan dampak kuantitatif nyata bagi manajemen PT Intisel Prodaktifakom:\n\n* **Penghematan Waktu Verifikasi:** Memangkas siklus verifikasi dokumen instalasi dari 3 hari kerja manual menjadi kurang dari 15 menit per batch.\n* **Eliminasi Kesalahan Manusia:** Mendeteksi duplikasi invoice vendor dan ketidaksesuaian nomor seri perangkat secara otomatis sebelum dokumen disetujui.\n* **Transparansi Waktu Nyata:** Menyediakan dasbor eksekutif untuk memantau status penyelesaian BTS Telkomsel, Indosat, dan XL Axiata secara langsung.\n* **Efisiensi Finansial:** Mempercepat siklus penagihan dan pencairan dana proyek dari klien korporat telekomunikasi.",
    "links": [
      {
        "label": "Detail Proyek Databank ERP",
        "url": "/projects/databank"
      },
      {
        "label": "Pengalaman Kerja di PT Intisel",
        "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
      }
    ]
  },
  "en": {
    "title": "Quantified 90% Verification Efficiency Gain in Databank ERP",
    "text": "**Business Impact and Operational ROI Delivered by Databank ERP**\n\nDeploying Databank ERP transformed PT Intisel Prodaktifakom's daily telecommunications workflow:\n\n* **Cycle Time Reduction:** Slashed installation verification turnaround from 3 full business days down to under 15 minutes per batch.\n* **Elimination of Audit Discrepancies:** Automated duplicate invoice flagging and equipment serial mismatch detection prior to sign-off.\n* **Real-Time Executive Visibility:** Live dashboard visualizing BTS delivery milestones across Telkomsel, Indosat, and XL Axiata infrastructure projects.\n* **Accelerated Cash Flow:** Significantly faster vendor payment reconciliation and client invoicing cycles for multi-million telecom contracts.",
    "links": [
      {
        "label": "Databank ERP Case Study",
        "url": "/projects/databank"
      },
      {
        "label": "Work Experience at PT Intisel",
        "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
      }
    ]
  }
},

  DATABANK_APPROVAL_DEEPDIVE: {
  "id": {
    "title": "Alur Hirarki 3-Level Digital Approval pada Databank ERP",
    "text": "**Sistem Persetujuan Bertingkat 3-Level Digital Approval**\n\nUntuk menjamin kepatuhan audit korporat, Databank ERP menerapkan alur persetujuan terstruktur:\n\n1. **Level 1 (Field Site Engineer):** Insinyur lapangan mengunggah berkas instalasi, foto perangkat terpasang, dan pembacaan uji daya.\n2. **Level 2 (Project Manager):** Manajer proyek memvalidasi kelengkapan teknis, memeriksa kesesuaian SOP, dan menyetujui dokumen teknis.\n3. **Level 3 (General Manager / Finance):** Penandatanganan akhir digital untuk otorisasi penagihan dan pencairan dana vendor.\n* **Audit Trail Digital:** Setiap aksi persetujuan dicatat dengan stempel waktu dan ID pengguna terenkripsi untuk mencegah manipulasi data.",
    "links": [
      {
        "label": "Detail Proyek Databank ERP",
        "url": "/projects/databank"
      },
      {
        "label": "Studi Kasus Arsitektur Databank",
        "url": "/projects/databank"
      }
    ]
  },
  "en": {
    "title": "3-Level Digital Approval Hierarchy & Audit Engine in Databank ERP",
    "text": "**Hierarchical 3-Level Approval State Machine in Databank ERP**\n\nTo guarantee audit compliance across multi-stakeholder telecom engineering, Databank ERP enforces strict authorization gates:\n\n1. **Level 1 (Field Site Engineer Submission):** Uploading site installation documents, commissioning photo records, and optical power readings.\n2. **Level 2 (Project Manager Technical Review):** Validating technical criteria, checking contractor checklists, and approving installation quality.\n3. **Level 3 (General Manager / Finance Sign-Off):** Final cryptographic digital signature authorizing vendor invoice settlement and billing release.\n* **Tamper-Evident Audit Trail:** Every approval action records immutable user IDs, IP addresses, and timestamps to prevent fraudulent alterations.",
    "links": [
      {
        "label": "Databank ERP Project Architecture",
        "url": "/projects/databank"
      },
      {
        "label": "PT Intisel Project Manager Experience",
        "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
      }
    ]
  }
},

  DATABANK_ARCH_DEEPDIVE: {
  "id": {
    "title": "Arsitektur Enterprise Next.js dan Skema PostgreSQL Databank ERP",
    "text": "**Arsitektur Teknis dan Desain Database Relasional Databank ERP**\n\nDatabank ERP dibangun dengan stack modern berorientasi performa tinggi:\n\n* **Frontend & Backend Terintegrasi:** Next.js App Router dengan React Server Components untuk meminimalkan beban komputasi di sisi peramban klien.\n* **Object-Relational Mapping:** Prisma ORM dengan skema relasional ternormalisasi antara entitas BTS Site, Vendor, Purchase Order, dan Invoice.\n* **Optimasi Kueri PostgreSQL:** Indexing komposit pada kolom site ID dan status approval, menghasilkan pencarian sub-detik pada ratusan ribu data.\n* **Keamanan Data Perusahaan:** Proteksi Role-Based Access Control (RBAC) ketat yang memisahkan hak akses antardivisi.",
    "links": [
      {
        "label": "Detail Proyek Databank ERP",
        "url": "/projects/databank"
      },
      {
        "label": "Keahlian Teknis & Tech Stack",
        "url": "/about"
      }
    ]
  },
  "en": {
    "title": "Next.js Enterprise Architecture & PostgreSQL Relational Schema in Databank ERP",
    "text": "**Technical System Architecture and Database Engineering of Databank ERP**\n\nDatabank ERP was engineered on a high-throughput modern polyglot stack:\n\n* **Full-Stack Unified Framework:** Next.js App Router with React Server Components keeping client bundle sizes lightweight and efficient.\n* **Relational Data Layer:** Prisma ORM managing strictly normalized relational schemas between Sites, Vendors, Invoices, and Purchase Orders.\n* **PostgreSQL Performance Indexing:** Composite indexing on site IDs and approval status codes enabling sub-second search across 100k+ historical records.\n* **Enterprise Security & RBAC:** Fine-grained Role-Based Access Control ensuring strict data isolation between field contractors and corporate managers.",
    "links": [
      {
        "label": "Databank ERP System Architecture",
        "url": "/projects/databank"
      },
      {
        "label": "Adyvka Polyglot Tech Stack",
        "url": "/about"
      }
    ]
  }
},

  PUSAKAKU_GAMIFY_DEEPDIVE: {
  "id": {
    "title": "Sistem Gamifikasi dan Kuis Interaktif Permainan Tradisional PusakaKu",
    "text": "**Mekanisme Gamifikasi Pelestarian Budaya pada Platform PusakaKu**\n\nPusakaKu menggabungkan pelestarian warisan budaya nusantara dengan mekanika permainan modern:\n\n* **Minigame Interaktif Permainan Tradisional:** Simulasi visual permainan tradisional seperti Congklak, Gobak Sodor, dan Egrang dengan aturan otentik.\n* **Sistem Skor dan Poin Budaya:** Pengguna mengumpulkan poin budaya setiap kali menyelesaikan kuis pengetahuan rakyat dan memainkan simulasi.\n* **Papan Peringkat Nasional:** Papan skor interaktif real-time yang memacu antusiasme generasi muda untuk mendalami budaya Indonesia.\n* **Kuis Interaktif Adaptif:** Pertanyaan seputar sejarah, filosofi, dan asal daerah permainan tradisional dengan animasi umpan balik instan.",
    "links": [
      {
        "label": "Detail Proyek PusakaKu",
        "url": "/projects/pusakaku"
      },
      {
        "label": "Gelar Juara 1 Nasional ICOMFEST 2025",
        "url": "/achievements/1st-place-national-web-design-competition"
      }
    ]
  },
  "en": {
    "title": "Interactive Cultural Gamification & Folk Game Quizzes in PusakaKu",
    "text": "**Gamification Mechanics for Cultural Preservation in PusakaKu**\n\nPusakaKu bridges traditional Indonesian folk heritage with modern interactive web mechanics:\n\n* **Interactive Folk Game Minigames:** Real-time visual simulations of traditional games such as Congklak, Gobak Sodor, and Egrang honoring authentic local rules.\n* **Cultural Experience Points:** Learners accumulate cultural mastery points by completing trivia quizzes and completing game simulations.\n* **Competitive Leaderboards:** Interactive real-time scoreboards incentivizing Gen-Z students to explore folk traditions across Indonesian provinces.\n* **Adaptive Knowledge Trivia:** Animated interactive quizzes covering regional cultural histories, traditional lore, and game philosophies.",
    "links": [
      {
        "label": "PusakaKu Platform Project Details",
        "url": "/projects/pusakaku"
      },
      {
        "label": "1st Place National Champion ICOMFEST",
        "url": "/achievements/1st-place-national-web-design-competition"
      }
    ]
  }
},

  PUSAKAKU_ARCH_DEEPDIVE: {
  "id": {
    "title": "Arsitektur Peta 3D Nusantara dan Responsivitas Web PusakaKu",
    "text": "**Arsitektur Frontend 3D dan Responsivitas Tinggi PusakaKu**\n\nKunci kemenangan Juara 1 Nasional ICOMFEST 2025 terletak pada keunggulan teknis platform:\n\n* **Visualisasi Peta 3D Nusantara:** Mengintegrasikan Three.js dan WebGL untuk merender kepulauan Indonesia secara interaktif dan lancar pada 60 fps.\n* **Optimalisasi Aset Ringan:** Kompresi model 3D dan tekstur grafis sehingga dapat dimuat cepat bahkan pada koneksi seluler menengah.\n* **Desain Responsif Total:** Antarmuka adaptif sempurna dari layar smartphone hingga monitor desktop resolusi 4K.\n* **Aksesibilitas dan Tipografi:** Menggunakan hierarki tipografi modern dengan kontras tinggi yang nyaman dibaca oleh seluruh kalangan usia.",
    "links": [
      {
        "label": "Detail Proyek PusakaKu",
        "url": "/projects/pusakaku"
      },
      {
        "label": "Detail Kejuaraan ICOMFEST 2025",
        "url": "/achievements/1st-place-national-web-design-competition"
      }
    ]
  },
  "en": {
    "title": "Interactive 3D Archipelago Map & High-Performance Architecture of PusakaKu",
    "text": "**Interactive 3D Frontend Architecture and Engineering Excellence in PusakaKu**\n\nPusakaKu's 1st Place National Championship victory was propelled by sophisticated frontend engineering:\n\n* **Interactive 3D Indonesian Archipelago:** Utilizing Three.js and WebGL shaders to render an interactive map of Indonesian islands running smoothly at 60 fps.\n* **Asset Optimization Pipelines:** Aggressive GLTF compression and texture minification enabling sub-2-second loads on mobile cellular devices.\n* **Fluid Responsive Layouts:** Responsive layout precision gracefully adapting from mobile smartphones up to 4K ultra-wide monitors.\n* **Accessibility and Typographic Balance:** Harmonious color contrast ratios and modern typography engineered for effortless cross-generational exploration.",
    "links": [
      {
        "label": "PusakaKu Project Case Study",
        "url": "/projects/pusakaku"
      },
      {
        "label": "ICOMFEST National Championship Details",
        "url": "/achievements/1st-place-national-web-design-competition"
      }
    ]
  }
},

  TERASTANI_AI_DEEPDIVE: {
  "id": {
    "title": "Deteksi Penyakit Tanaman dengan AI Computer Vision pada TerasTani",
    "text": "**Teknologi Kecerdasan Buatan Computer Vision TerasTani**\n\nTerasTani mengintegrasikan model machine learning untuk mendiagnosis kesehatan tanaman urban farming:\n\n* **Klasifikasi Citra Daun:** Menggunakan model Convolutional Neural Network (CNN) terlatih untuk mendeteksi hama, jamur, dan defisiensi nutrisi daun.\n* **Inferensi Cepat di Sisi Klien:** Memanfaatkan TensorFlow.js untuk pemrosesan gambar langsung di peramban tanpa latensi server yang tinggi.\n* **Tingkat Akurasi dan Skor Keyakinan:** Menyajikan skor keyakinan persentase serta panduan penanganan organik terarah bagi petani perkotaan.\n* **Rekomendasi Tindakan Cepat:** Memberikan resep nutrisi dan jadwal penyiraman otomatis untuk memulihkan tanaman yang sakit.",
    "links": [
      {
        "label": "Detail Proyek TerasTani",
        "url": "/projects/terastani"
      },
      {
        "label": "Juara 2 Nasional PNBITC Bali",
        "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
      }
    ]
  },
  "en": {
    "title": "AI Computer Vision Leaf Disease Detection Engine in TerasTani",
    "text": "**Artificial Intelligence and Computer Vision Technology in TerasTani**\n\nTerasTani integrates modern machine learning models to diagnose plant health for urban micro-farmers:\n\n* **Leaf Image Classification:** Convolutional Neural Network (CNN) architecture trained to detect crop pests, fungal infections, and nutrient deficiencies.\n* **Client-Side Edge Inference:** Leveraging TensorFlow.js to process camera captures directly within the browser, delivering zero-latency offline diagnostics.\n* **Confidence Scoring & Precision:** Providing real-time statistical confidence ratings paired with actionable organic remediation protocols.\n* **Targeted Organic Treatment Guides:** Automated nutrition adjustment recipes and irrigation schedules to nurse distressed urban crops back to full health.",
    "links": [
      {
        "label": "TerasTani Urban Farming Case Study",
        "url": "/projects/terastani"
      },
      {
        "label": "PNBITC Bali Runner-Up Award Details",
        "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
      }
    ]
  }
},

  TERASTANI_IOT_DEEPDIVE: {
  "id": {
    "title": "Integrasi Sensor IoT dan Telemetri Micro-Farming pada TerasTani",
    "text": "**Sistem Sensor IoT dan Otomasi Irigasi TerasTani**\n\nPlatform TerasTani menghubungkan perangkat keras mikrokontroler dengan dasbor cloud waktu nyata:\n\n* **Telemetri Sensor Lengkap:** Membaca kelembapan tanah, suhu udara, intensitas cahaya, dan pH air nutrisi menggunakan sensor terkalibrasi.\n* **Penyiraman Tetes Otomatis:** Katup irigasi tetes terbuka secara otomatis saat kelembapan tanah turun di bawah ambang batas yang ditentukan.\n* **Protokol Komunikasi Ringan:** Menggunakan protokol MQTT dan WebSocket untuk pengiriman data telemetri yang hemat daya dan bandwidth.\n* **Peringatan Dini Cuaca Ekstrem:** Memberikan notifikasi instan ke smartphone pengguna saat suhu lingkungan melewati batas aman tanaman.",
    "links": [
      {
        "label": "Detail Proyek TerasTani",
        "url": "/projects/terastani"
      },
      {
        "label": "Juara 2 Nasional PNBITC Bali",
        "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
      }
    ]
  },
  "en": {
    "title": "Urban IoT Telemetry & Automated Irrigation in TerasTani",
    "text": "**IoT Sensor Telemetry and Micro-Climate Automation in TerasTani**\n\nTerasTani integrates smart microcontroller sensors directly into a real-time reactive cloud platform:\n\n* **Comprehensive Sensor Telemetry:** Reading live soil moisture, ambient temperature, sunlight lumens, and hydroponic nutrient pH via ESP32 hardware.\n* **Automated Drip Irrigation:** Smart solenoid valves triggering precision drip watering whenever soil moisture drops below calibrated thresholds.\n* **Lightweight Telemetry Protocol:** Powered by MQTT and WebSockets ensuring minimal battery drain and resilient performance on mobile data.\n* **Real-Time Climate Alerts:** Instant alerts warning urban farmers of scorching heat waves or sudden humidity drops threatening crop yields.",
    "links": [
      {
        "label": "TerasTani Project Architecture",
        "url": "/projects/terastani"
      },
      {
        "label": "PNBITC Bali 2nd Place Honor",
        "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
      }
    ]
  }
},

  RUANGTUMBUH_TIMEBANK_DEEPDIVE: {
  "id": {
    "title": "Model Pertukaran Waktu Peer-to-Peer Time Banking pada RuangTumbuh",
    "text": "**Mekanisme Ekonomi Pertukaran Waktu Time Banking RuangTumbuh**\n\nRuangTumbuh menggantikan transaksi uang dengan mata uang berbasis waktu:\n\n* **Prinsip 1 Jam Mengajar = 1 Kredit Waktu:** Setiap individu dinilai setara tanpa memandang latar belakang ekonomi, di mana satu jam berbagi keahlian menghasilkan satu kredit.\n* **Buku Besar Kredit Terdesentralisasi:** Saldo kredit waktu disimpan dalam basis data transaksional yang aman dengan sistem escrow otomatis selama sesi belajar berlangsung.\n* **Pencegahan Eksploitasi dan Penipuan:** Sesi hanya dinyatakan selesai setelah kedua belah pihak mengonfirmasi kehadiran dan kualitas materi pembelajaran.\n* **Ekonomi Gotong Royong Digital:** Membangun ekosistem belajar yang mandiri dan berkelanjutan untuk generasi muda Indonesia.",
    "links": [
      {
        "label": "Detail Proyek RuangTumbuh",
        "url": "/projects/ruangtumbuh"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Peer-to-Peer Time Banking Economics in RuangTumbuh",
    "text": "**Time Banking Currency Mechanics and Peer Exchange in RuangTumbuh**\n\nRuangTumbuh replaces monetary barriers with an equitable hour-for-hour time ledger:\n\n* **Universal 1 Hour = 1 Credit Exchange:** Every member's time is valued equally, where teaching for one hour earns one time credit to redeem for learning any other skill.\n* **Transactional Credit Escrow:** Time credits are held in escrow during scheduled mentoring sessions and only released upon bilateral completion sign-off.\n* **Fraud Prevention & Mutual Review:** Strict session verification requiring mutual confirmation and star ratings to prevent credit abuse.\n* **Collaborative Communal Economy:** Fostering sustainable digital peer-to-peer mutual aid among young Indonesian developers, designers, and students.",
    "links": [
      {
        "label": "RuangTumbuh Project Architecture",
        "url": "/projects/ruangtumbuh"
      },
      {
        "label": "Explore All 18 Projects",
        "url": "/projects"
      }
    ]
  }
},

  RUANGTUMBUH_PROBLEM_DEEPDIVE: {
  "id": {
    "title": "Solusi Ketimpangan Akses Mentoring Pendidikan pada RuangTumbuh",
    "text": "**Masalah Sosial yang Diselesaikan oleh Platform RuangTumbuh**\n\nRuangTumbuh lahir dari observasi langsung mengenai ketimpangan akses pendidikan:\n\n* **Tingginya Biaya Kursus dan Mentoring Komersial:** Banyak pelajar berbakat di daerah terhambat biaya tinggi untuk belajar rekayasa perangkat lunak dan desain dari mentor ahli.\n* **Demokratisasi Transfer Keterampilan:** RuangTumbuh memungkinkan seorang ahli koding belajar bahasa asing dari penutur fasih, tanpa ada pihak yang terbebani biaya finansial.\n* **Validasi Keterampilan Berbasis Komunitas:** Mentor dinilai langsung dari portofolio dan umpan balik transparan dari murid-murid sebelumnya.\n* **Membuka Peluang Karier Digital:** Pelajar dari kalangan prasejahtera mendapatkan bimbingan portofolio langsung untuk bersaing di industri teknologi.",
    "links": [
      {
        "label": "Detail Proyek RuangTumbuh",
        "url": "/projects/ruangtumbuh"
      },
      {
        "label": "Profil Adyvka & Visi Sosial",
        "url": "/about"
      }
    ]
  },
  "en": {
    "title": "Solving Educational Mentorship Disparity in RuangTumbuh",
    "text": "**Social Impact and Educational Equity Addressed by RuangTumbuh**\n\nRuangTumbuh was engineered to dismantle economic barriers in youth technology education:\n\n* **Commercial Tutoring Inequity:** Talented students from underprivileged communities are frequently priced out of commercial bootcamps and elite tech mentorship.\n* **Democratizing Skill Transfer:** A software engineer can teach JavaScript in exchange for graphic design or English language tutoring without spending a single rupiah.\n* **Merit-Based Community Validation:** Mentor reputations are built transparently on verified session ratings and tangible student portfolio outcomes.\n* **Unlocking Digital Career Pathways:** Equipping youth with direct portfolio guidance and mock interview preparation to enter competitive software careers.",
    "links": [
      {
        "label": "RuangTumbuh Case Study",
        "url": "/projects/ruangtumbuh"
      },
      {
        "label": "Adyvka Vision & Philosophy",
        "url": "/about"
      }
    ]
  }
},

  ARDYANDA_PAYROLL_DEEPDIVE: {
  "id": {
    "title": "Arsitektur Sistem Payroll 100% Presisi dan PPh 21 di PT Ardyanda",
    "text": "**Rekayasa Mesin Perhitungan Payroll dan Pajak PPh 21 di PT Ardyanda**\n\nSelama magang satu tahun penuh di PT Ardyanda Digital Inovasi, Adyvka merancang modul inti penggajian:\n\n* **Implementasi Rumus TER PPh 21 Terbaru:** Menghitung potongan pajak penghasilan bulanan menggunakan skema Tarif Efektif Rata-Rata (Kategori A, B, C) dengan akurasi 100%.\n* **Pemotongan BPJS dan Asuransi:** Menghitung potongan BPJS Kesehatan dan BPJS Ketenagakerjaan (JKK, JKM, JHT, JP) secara presisi hingga digit desimal terkecil.\n* **Manajemen Kasbon dan Pinjaman Karyawan:** Menghubungkan jadwal cicilan kasbon langsung ke slip gaji otomatis tanpa risiko duplikasi atau kelalaian potong.\n* **Kompensasi Shift Khusus Rumah Sakit:** Menghitung uang shift malam dan tunjangan lembur tenaga medis di sistem rumah sakit yang dikelola perusahaan.",
    "links": [
      {
        "label": "Detail Magang PT Ardyanda",
        "url": "/experience/pt-intisel-semarang-business-life-survival"
      },
      {
        "label": "Lihat Seluruh 20 Pengalaman",
        "url": "/experience"
      }
    ]
  },
  "en": {
    "title": "100% Precision Payroll Engine & PPh 21 Tax Calculations at PT Ardyanda",
    "text": "**Engineering the 100% Precision Payroll Engine at PT Ardyanda Digital Inovasi**\n\nDuring his full one-year corporate internship, Adyvka developed the enterprise payroll computational core:\n\n* **Latest TER PPh 21 Tax Compliance:** Automating monthly tax withholdings compliant with Indonesia's updated TER tax framework across categories A, B, and C with zero decimal deviation.\n* **BPJS Health & Social Security Calculations:** Precision deductions for BPJS Kesehatan and Ketenagakerjaan (JKK, JKM, JHT, JP) conforming to national labor regulations.\n* **Employee Cash Advance (Kasbon) Ledger:** Direct synchronization between employee loan amortization schedules and automated monthly payslips.\n* **Hospital Medical Staff Shift Compensation:** Tailored compensation logic processing night-shift premiums and overtime allowances for hospital client personnel.",
    "links": [
      {
        "label": "PT Ardyanda Internship Details",
        "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
      },
      {
        "label": "Explore All 20 Experiences",
        "url": "/experience"
      }
    ]
  }
},

  ARDYANDA_EVAL_DEEPDIVE: {
  "id": {
    "title": "Nilai Evaluasi Korporat 98/100 dan Pengakuan Kinerja di PT Ardyanda",
    "text": "**Hasil Evaluasi Kinerja Resmi 98 dari 100 di PT Ardyanda**\n\nAdyvka menyelesaikan magang korporat satu tahun dengan predikat kinerja istimewa:\n\n* **Nilai Akhir Evaluasi: 98 / 100:** Diberikan langsung oleh pimpinan teknis dan manajemen PT Ardyanda Digital Inovasi.\n* **Kualitas Kode dan Kepatuhan Arsitektur:** Diakui mampu menghasilkan backend yang stabil, aman dari celah SQL injection, dan mudah dipelihara tim pengembang.\n* **Ketepatan Waktu dan Tanggung Jawab:** Menyelesaikan seluruh tiket backlog sprint sebelum tenggat waktu tanpa mengorbankan standar pengujian kualitas.\n* **Komunikasi dan Kolaborasi Lintas Tim:** Menjembatani koordinasi teknis antara manajer produk, desainer UI/UX, dan klien korporat.",
    "links": [
      {
        "label": "Studi Kasus Magang PT Ardyanda",
        "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
      },
      {
        "label": "Unduh CV Terverifikasi",
        "url": "/assets/profile/RafifSavaAdyvkaPratama_CV.pdf"
      }
    ]
  },
  "en": {
    "title": "Outstanding 98/100 Corporate Performance Evaluation at PT Ardyanda",
    "text": "**Official Corporate Evaluation Score of 98 out of 100 at PT Ardyanda**\n\nAdyvka concluded his year-long corporate internship with an exceptional performance appraisal:\n\n* **Final Evaluation Score: 98 / 100:** Awarded formally by senior engineering management at PT Ardyanda Digital Inovasi.\n* **Code Rigor & Architectural Cleanliness:** Commended for shipping robust backend services fortified against vulnerabilities and cleanly documented for the engineering team.\n* **Sprint Velocity & Reliability:** Consistently completing sprint tickets ahead of production deployment deadlines with rigorous unit testing.\n* **Cross-Functional Communication:** Smooth collaboration between technical product managers, UI/UX designers, and enterprise healthcare clients.",
    "links": [
      {
        "label": "PT Ardyanda Internship Case Study",
        "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
      },
      {
        "label": "Download Verified CV",
        "url": "/assets/profile/RafifSavaAdyvkaPratama_CV.pdf"
      }
    ]
  }
},

  ARDYANDA_MC_DEEPDIVE: {
  "id": {
    "title": "Peran Master of Ceremony (MC) dan Komunikasi Publik di PT Ardyanda",
    "text": "**Kepemimpinan Komunikasi Publik dan Master of Ceremony di PT Ardyanda**\n\nSelain kontribusi rekayasa perangkat lunak, Adyvka dipercaya menjadi figur komunikasi perusahaan:\n\n* **Memandu Acara Resmi Korporat:** Bertindak sebagai MC resmi pada pertemuan akbar tahunan, rapat koordinasi seluruh divisi, dan perayaan perusahaan.\n* **Menghidupkan Suasana Profesional:** Menggabungkan etika protokoler formal dengan pembawaan santai yang membangun kedekatan antar-karyawan.\n* **Keahlian Public Speaking:** Membuktikan bahwa seorang engineer perangkat lunak mampu berkomunikasi secara percaya diri di hadapan ratusan audiens eksekutif.\n* **Sinergi Teknis dan Komunikasi:** Kemampuan mempresentasikan topik rekayasa yang kompleks menjadi penjelasan yang mudah dipahami oleh pemangku kepentingan non-teknis.",
    "links": [
      {
        "label": "Detail Pengalaman PT Ardyanda",
        "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
      },
      {
        "label": "Lihat Profil Lengkap Adyvka",
        "url": "/about"
      }
    ]
  },
  "en": {
    "title": "Master of Ceremony (MC) & Corporate Public Speaking at PT Ardyanda",
    "text": "**Public Speaking Leadership and Master of Ceremony Roles at PT Ardyanda**\n\nBeyond his core software engineering contributions, Adyvka was selected to lead corporate public communications:\n\n* **Hosting Flagship Company Townhalls:** Serving as the official Master of Ceremony (MC) for annual corporate galas, all-hands meetings, and team gatherings.\n* **Professional Stage Presence:** Seamlessly blending formal protocol with engaging charisma to unite cross-departmental staff and leadership.\n* **Bridging Engineering & Public Oratory:** Disproving the stereotype of introverted coders by delivering articulate, energetic presentations before corporate executives.\n* **Executive Technical Translation:** Skillfully explaining intricate backend logic and product milestones in clear terms for non-technical company directors.",
    "links": [
      {
        "label": "PT Ardyanda Experience Details",
        "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
      },
      {
        "label": "View Complete Adyvka Profile",
        "url": "/about"
      }
    ]
  }
},

  INTISEL_BTS_DEEPDIVE: {
  "id": {
    "title": "Otomasi Verifikasi 1.000+ Site BTS Telekomunikasi di PT Intisel",
    "text": "**Manajemen dan Otomasi 1.000+ Menara BTS Telekomunikasi di PT Intisel**\n\nSebagai Lead Systems Engineer di PT Intisel Prodaktifakom, Adyvka menangani infrastruktur berskala besar:\n\n* **Cakupan Operator Nasional:** Mengelola verifikasi kelayakan teknis menara BTS untuk klien telekomunikasi raksasa seperti Telkomsel, Indosat Ooredoo Hutchison, dan XL Axiata.\n* **Penggantian Audit Manual yang Rentan Galat:** Menggantikan proses manual verifikasi dokumen spreadsheet ribuan baris dengan pipeline otomatisasi Databank ERP.\n* **Validasi Perangkat Keras dan Antena:** Memverifikasi sudut azimuth antena, pembacaan VSWR kabel pengumpan, dan instalasi catu daya baterai cadangan.\n* **Kecepatan Penerbitan Berita Acara:** Mempercepat penerbitan Berita Acara Serah Terima (BAST) pekerjaan lapangan sehingga pembayaran vendor lancar.",
    "links": [
      {
        "label": "Detail Pengalaman di PT Intisel",
        "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
      },
      {
        "label": "Detail Proyek Databank ERP",
        "url": "/projects/databank"
      }
    ]
  },
  "en": {
    "title": "Automating 1,000+ Telecom BTS Site Verifications at PT Intisel",
    "text": "**Automated Verification Architecture Across 1,000+ Telecom BTS Installations**\n\nAs Lead Systems Engineer at PT Intisel Prodaktifakom, Adyvka orchestrated nationwide telecom verification:\n\n* **Tier-1 Telecom Operator Scope:** Managing technical audit validation across BTS towers for Telkomsel, Indosat Ooredoo Hutchison, and XL Axiata networks.\n* **Replacing Error-Prone Manual Audits:** Replacing hundreds of cumbersome manual Excel spreadsheets with the Databank ERP automated data pipeline.\n* **Hardware & RF Parameter Validation:** Programmatically checking antenna azimuth angles, RF feeder cable VSWR metrics, and backup battery rectifiers.\n* **Accelerated Handover Acceptance:** Slashing the turnaround time for official project acceptance certificates (BAST), unlocking faster client cash disbursements.",
    "links": [
      {
        "label": "PT Intisel Lead Engineer Details",
        "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
      },
      {
        "label": "Databank ERP Project Overview",
        "url": "/projects/databank"
      }
    ]
  }
},

  INTISEL_TEAM_DEEPDIVE: {
  "id": {
    "title": "Kepemimpinan Tim Rekayasa dan Manajemen Proyek di PT Intisel",
    "text": "**Kepemimpinan Tim Teknis Lintas Divisi dan Manajemen Proyek di PT Intisel**\n\nPeran ganda Adyvka sebagai Lead Systems Engineer sekaligus Project Manager mencakup:\n\n* **Manajemen Sprint dan Backlog:** Memimpin sesi sprint planning, standup berkala, dan code review bersama tim pengembang frontend dan backend.\n* **Koordinasi Lintas Divisi:** Menyelaraskan kebutuhan teknis tim insinyur lapangan, divisi akuntansi proyek, dan jajaran direksi perusahaan.\n* **Manajemen Vendor dan Kontraktor:** Mengawasi kepatuhan mitra sub-kontraktor terhadap standar operasional prosedur instalasi telekomunikasi.\n* **Penyelesaian Masalah Kritis:** Mengambil keputusan arsitektur cepat saat terjadi anomali integrasi server atau kendala format data lapangan.",
    "links": [
      {
        "label": "Detail Pengalaman di PT Intisel",
        "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
      },
      {
        "label": "Detail Proyek Databank ERP",
        "url": "/projects/databank"
      }
    ]
  },
  "en": {
    "title": "Engineering Team Leadership & Technical Project Management at PT Intisel",
    "text": "**Cross-Departmental Technical Leadership and Project Management at PT Intisel**\n\nAdyvka's dual mandate as Lead Systems Engineer and Technical Project Manager encompassed:\n\n* **Sprint Cadence & Code Quality:** Directing sprint planning cycles, daily developer standups, and rigorous code reviews across frontend and backend squads.\n* **Cross-Departmental Synchronization:** Translating complex technical realities between on-ground telecom field engineers, project accountants, and company directors.\n* **Subcontractor & Vendor Oversight:** Enforcing quality compliance across third-party field contractors installing sensitive telecommunication hardware.\n* **Mission-Critical Problem Solving:** Making decisive system architecture calls during unexpected API breaks or edge-case telemetry formatting errors.",
    "links": [
      {
        "label": "PT Intisel Engineering Leadership",
        "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
      },
      {
        "label": "Databank ERP System Case Study",
        "url": "/projects/databank"
      }
    ]
  }
},

  BACKPACKER_LESSONS_DEEPDIVE: {
  "id": {
    "title": "Pelajaran Hidup, Kemandirian Ekstrem & Ketangguhan Solo Backpacker",
    "text": "**Transformasi Mentalitas Solo Backpacker 3 Negara di Usia 15 Tahun**\n\nEkspedisi mandiri melintasi Singapura, Malaysia, dan Thailand tanpa pendamping dewasa memberikan pelajaran hidup mendalam:\n\n* **Kemandirian Mengambil Keputusan:** Saat tersesat di stasiun perbatasan luar negeri, tidak ada orang tua yang bisa dimintai tolong. Adyvka harus mengevaluasi opsi rute secara cepat dan tenang.\n* **Menaklukkan Rasa Takut dan Kesepian:** Berada sendirian di negeri asing dengan bahasa yang berbeda melatih keberanian mental untuk berinteraksi dengan komunitas internasional.\n* **Manajemen Krisis Tanpa Panik:** Menghadapi keterlambatan jadwal kereta, mencari penginapan murah dadakan, dan menjaga keselamatan barang bawaan setiap detik.\n* **Fondasi Karakter Tangguh:** Pengalaman ini menjadi bukti nyata ketahanan mental Adyvka dalam menghadapi tekanan apa pun di dunia profesional.",
    "links": [
      {
        "label": "Detail Pengalaman Solo Backpacker",
        "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
      },
      {
        "label": "Lihat Profil Lengkap Adyvka",
        "url": "/about"
      }
    ]
  },
  "en": {
    "title": "Life Lessons, Resilience & Extreme Independence from Solo Backpacking",
    "text": "**Transformative Independence from Solo Backpacking 3 Countries at Age 15**\n\nNavigating Singapore, Malaysia, and Thailand entirely unaccompanied as a 15-year-old forged profound personal maturity:\n\n* **Autonomous Critical Decision Making:** When stranded at international rail checkpoints, zero parental safety nets existed. Adyvka had to evaluate route alternatives with calm pragmatism.\n* **Conquering Fear and Isolation:** Being alone in foreign cities with foreign languages built fearless cross-cultural confidence to communicate with travelers worldwide.\n* **Crisis Management Under Pressure:** Adapting to sudden transit delays, finding safe budget hostels on the fly, and safeguarding personal gear at all hours.\n* **Bedrock of Professional Tenacity:** Proving that high-stress engineering deadlines and operational hurdles are easily conquered after surviving international solo expeditions.",
    "links": [
      {
        "label": "Solo Backpacker Experience Details",
        "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
      },
      {
        "label": "View Adyvka Profile & Philosophy",
        "url": "/about"
      }
    ]
  }
},

  BACKPACKER_FINANCE_DEEPDIVE: {
  "id": {
    "title": "Manajemen Logistik Rute dan Pendanaan Mandiri 100% Solo Backpacker",
    "text": "**Perencanaan Logistik Rute dan 100% Pembiayaan Mandiri Solo Backpacker**\n\nEkspedisi internasional ini dibiayai dan direncanakan sepenuhnya oleh Adyvka sendiri:\n\n* **100% Dibiayai dari Tabungan Koding:** Seluruh biaya paspor, tiket transportasi, akomodasi hostel, dan konsumsi diperoleh dari hasil kerja rekayasa perangkat lunak lepas tanpa meminta sepeser pun kepada orang tua.\n* **Rute Darat dan Kereta Hemat Anggaran:** Menyusun rute logistik efisien dari Singapura menyeberang ke Johor Bahru, naik kereta sleeper ke Kuala Lumpur dan Penang, melintasi perbatasan darat Padang Besar ke Hat Yai, hingga Bangkok.\n* **Manajemen Anggaran Harian Ketat:** Mengonversi mata uang SGD, MYR, dan THB secara hemat, memilih transportasi publik lokal, dan mencatat pengeluaran setiap hari.",
    "links": [
      {
        "label": "Detail Pengalaman Solo Backpacker",
        "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
      },
      {
        "label": "Lihat Semua 20 Pengalaman",
        "url": "/experience"
      }
    ]
  },
  "en": {
    "title": "Route Logistics Planning & 100% Self-Funded Financing for Solo Backpacking",
    "text": "**Route Logistics Strategy and 100% Self-Funded Budgeting**\n\nThis multi-country expedition was entirely funded and planned by Adyvka from scratch:\n\n* **100% Funded via Freelance Software Earnings:** Every dollar for passport fees, cross-border train tickets, hostel bunks, and meals was earned through personal software freelance projects without asking parents for money.\n* **Overland Rail Itinerary:** Engineering an overland route from Singapore crossing into Johor Bahru, boarding sleeper trains to Kuala Lumpur and Penang, traversing Padang Besar border into Hat Yai, and reaching Bangkok.\n* **Disciplined Currency Management:** Managing daily cash envelopes across SGD, MYR, and THB, relying solely on local metro networks, and keeping daily expense logs.",
    "links": [
      {
        "label": "Solo Backpacker Expedition Case Study",
        "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
      },
      {
        "label": "Explore All 20 Experiences",
        "url": "/experience"
      }
    ]
  }
},

  CS50_CURRICULUM_DEEPDIVE: {
  "id": {
    "title": "Kurikulum Komprehensif Harvard CS50: C, Python, Memori & Algoritma",
    "text": "**Kurikulum Akademik dan Silabus Mendalam Harvard University CS50x**\n\nSertifikasi prestisius CS50 dari Universitas Harvard menguji pemahaman ilmu komputer dari lapisan terendah:\n\n* **Pemrograman Bahasa C dan Manajemen Memori:** Memahami alokasi memori manual (malloc/free), manipulasi pointer, segmentasi memori stack dan heap, serta pencegahan memory leak.\n* **Analisis Kompleksitas Algoritma Big-O:** Mempelajari efisiensi algoritma pencarian biner, merge sort, quicksort, dan optimasi struktur data.\n* **Struktur Data Abstrak Tingkat Lanjut:** Mengimplementasikan linked list, hash table, trie, dan binary search tree murni menggunakan bahasa C dari nol.\n* **Pengembangan Backend Python dan SQL:** Membangun aplikasi web dengan arsitektur basis data relasional SQLite dan framework Flask.",
    "links": [
      {
        "label": "Detail Sertifikat Harvard CS50",
        "url": "/certificates/cs50-introduction-to-computer-science"
      },
      {
        "label": "Jelajahi Seluruh 23 Sertifikat",
        "url": "/certificates"
      }
    ]
  },
  "en": {
    "title": "Comprehensive Harvard CS50 Syllabus: C, Memory Allocation & Algorithms",
    "text": "**Rigorous Computer Science Syllabus in Harvard University's CS50x**\n\nThe globally acclaimed Harvard CS50 credential certifies foundational computer science mastery:\n\n* **C Programming & Memory Management:** Manual heap allocation (malloc/free), direct pointer arithmetic, stack buffer safety, and memory leak elimination using Valgrind.\n* **Algorithmic Complexity & Big-O Analysis:** Benchmarking asymptotic runtime efficiency across linear search, binary search, merge sort, and quicksort algorithms.\n* **Abstract Data Structures from Scratch:** Writing custom implementations of singly-linked lists, hash tables, tries, and binary search trees natively in C.\n* **Python Backend & Relational SQL:** Transitioning foundational logic into production web servers utilizing Python, Flask, and relational SQL database schemas.",
    "links": [
      {
        "label": "Harvard CS50 Certificate Details",
        "url": "/certificates/cs50-introduction-to-computer-science"
      },
      {
        "label": "Explore All 23 Verified Credentials",
        "url": "/certificates"
      }
    ]
  }
},

  CS50_PROJECT_DEEPDIVE: {
  "id": {
    "title": "Proyek Akhir Capstone Kelulusan Harvard University CS50x",
    "text": "**Proyek Akhir Capstone Kelulusan Sertifikasi Harvard CS50**\n\nSyarat kelulusan sertifikasi Harvard CS50 mewajibkan mahasiswa merancang dan meluncurkan proyek software mandiri yang memenuhi standar evaluasi staf pengajar Harvard:\n\n* **Standar Evaluasi Akademik:** Proyek harus menunjukkan penerapan konsep ilmu komputer yang komprehensif, mencakup desain database relasional, API backend yang kokoh, dan antarmuka web interaktif.\n* **Tinjauan Kode Independen:** Setiap baris kode ditinjau melalui pengujian otomatis dan penilaian staf Harvard mengenai efisiensi algoritma, gaya penulisan kode, dan dokumentasi.\n* **Pembuktian Kemampuan Rekayasa:** Keberhasilan menyelesaikan capstone ini menegaskan bahwa Adyvka memiliki pemahaman sains komputer yang solid berstandar kurikulum universitas global.",
    "links": [
      {
        "label": "Detail Sertifikat Harvard CS50",
        "url": "/certificates/cs50-introduction-to-computer-science"
      },
      {
        "label": "Lihat Semua 18 Proyek Rekayasa",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Harvard CS50x Final Capstone Engineering Project",
    "text": "**Graduation Capstone Project for Harvard CS50x Certification**\n\nGraduating from Harvard CS50 requires designing, engineering, and presenting an ambitious independent software application evaluated by Harvard course staff:\n\n* **Rigorous Academic Criteria:** The capstone must exhibit comprehensive computer science application, including relational database modeling, resilient backend endpoints, and responsive client interfaces.\n* **Independent Automated & Staff Code Reviews:** Evaluated via automated testing suites and staff assessments on algorithmic efficiency, clean architecture, and exhaustive documentation.\n* **Proof of Systems Competency:** Successful completion validates Adyvka's ability to conceptualize and deploy production-grade software adhering to world-class university benchmarks.",
    "links": [
      {
        "label": "Harvard CS50 Certificate Overview",
        "url": "/certificates/cs50-introduction-to-computer-science"
      },
      {
        "label": "Explore All 18 Software Engineering Works",
        "url": "/projects"
      }
    ]
  }
},

  AWS_SECURITY_DEEPDIVE: {
  "id": {
    "title": "Arsitektur Cloud AWS dan Kepatuhan Keamanan Well-Architected",
    "text": "**Arsitektur Cloud dan Kepatuhan Keamanan AWS Practitioner**\n\nSertifikasi AWS Cloud Practitioner Essentials membuktikan pemahaman Adyvka mengenai infrastruktur cloud global Amazon Web Services:\n\n* **AWS Well-Architected Framework:** Menerapkan 6 pilar utama: Keunggulan Operasional, Keamanan, Keandalan, Efisiensi Kinerja, Optimasi Biaya, dan Keberlanjutan.\n* **Manajemen Akses IAM (Identity & Access Management):** Menerapkan prinsip hak akses terkecil (least privilege), autentikasi multifaktor (MFA), dan pemisahan peran IAM.\n* **Keamanan Jaringan Virtual Private Cloud (VPC):** Memahami konfigurasi subnet publik dan privat, Network ACL, serta Security Group untuk melindungi instans komputasi EC2.\n* **Kepatuhan Enkripsi Data:** Menerapkan enkripsi data saat transit (TLS) dan saat disimpan di Amazon S3 maupun basis data RDS menggunakan AWS KMS.",
    "links": [
      {
        "label": "Detail Sertifikat AWS Cloud",
        "url": "/certificates/cloud-practitioner-essentials"
      },
      {
        "label": "Jelajahi Seluruh 23 Sertifikat",
        "url": "/certificates"
      }
    ]
  },
  "en": {
    "title": "AWS Cloud Architecture & Well-Architected Security Compliance",
    "text": "**Cloud Systems Architecture & Security Standards Certified by AWS**\n\nThe AWS Cloud Practitioner credential validates Adyvka's comprehension of Amazon Web Services global infrastructure:\n\n* **AWS Well-Architected Pillars:** Adhering to the six core pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.\n* **IAM Least-Privilege Governance:** Configuring Identity and Access Management policies, multi-factor authentication (MFA), and role assumption to prevent unauthorized access.\n* **Virtual Private Cloud (VPC) Security:** Structuring public and private subnets, Network Access Control Lists (NACLs), and stateful Security Groups safeguarding EC2 instances.\n* **Data Encryption Protocols:** Managing encryption in transit via TLS and encryption at rest across Amazon S3 buckets and RDS clusters using AWS KMS keys.",
    "links": [
      {
        "label": "AWS Certificate Details",
        "url": "/certificates/cloud-practitioner-essentials"
      },
      {
        "label": "Explore All 23 Professional Certifications",
        "url": "/certificates"
      }
    ]
  }
},

  GIT_WORKFLOW_DEEPDIVE: {
  "id": {
    "title": "Penguasaan Branching, Pull Request & Resolusi Konflik Git",
    "text": "**Materi Pembelajaran Mendalam Git & GitHub dari Dicoding Indonesia**\n\nSertifikat Belajar Dasar Git dengan GitHub menguji kompetensi kolaborasi tim teknis:\n\n* **Strategi Percabangan (Branching Workflow):** Menguasai pembuatan feature branch, hotfix, dan pengelolaan cabang rilis untuk mencegah tabrakan kode pada branch utama.\n* **Mekanisme Pull Request dan Code Review:** Membuka pull request yang rapi, menulis deskripsi perubahan yang jelas, dan melakukan review kode terhadap anggota tim lain.\n* **Resolusi Merge Conflict:** Mengatasi konflik baris kode secara tepat tanpa menghilangkan kontribusi rekan kerja saat proses merging atau rebasing.\n* **Manajemen Repositori Jarak Jauh:** Sinkronisasi remote repository, pengelolaan SSH keys yang aman, dan penggunaan file .gitignore untuk melindungi kredensial sensitif.",
    "links": [
      {
        "label": "Detail Sertifikat Git & GitHub",
        "url": "/certificates/belajar-dasar-git-dengan-github"
      },
      {
        "label": "Jelajahi Seluruh 23 Sertifikat",
        "url": "/certificates"
      }
    ]
  },
  "en": {
    "title": "Git Branching, Pull Request & Merge Conflict Resolution Mastery",
    "text": "**Advanced Team Collaboration Curriculum in Git & GitHub Certification**\n\nThe Git and GitHub credential from Dicoding Indonesia certifies industrial team development workflows:\n\n* **Feature Branching & Release Management:** Creating isolated feature branches, staging hotfixes, and maintaining trunk stability across active multi-developer sprints.\n* **Pull Request Protocol & Code Reviews:** Structuring legible pull requests with comprehensive commit logs and participating in rigorous peer code review cycles.\n* **Merge Conflict Resolution:** Resolving conflicting code blocks surgically during merges and rebases without overwriting critical changes.\n* **Remote Repository Security:** Enforcing SSH key authentication, managing remote remotes, and leveraging strict .gitignore rules to prevent credential leakage.",
    "links": [
      {
        "label": "Git & GitHub Certificate Case Study",
        "url": "/certificates/belajar-dasar-git-dengan-github"
      },
      {
        "label": "Explore All 23 Credentials",
        "url": "/certificates"
      }
    ]
  }
},

  REACT_HOOKS_DEEPDIVE: {
  "id": {
    "title": "Arsitektur Komponen React, Custom Hooks & State Management",
    "text": "**Kompetensi Arsitektur Single-Page Application pada Sertifikat React**\n\nSertifikasi Belajar Membuat Aplikasi Web dengan React dari Dicoding menguji pembuatan antarmuka modern yang reaktif:\n\n* **Siklus Hidup dan React Hooks:** Penguasaan mendalam useState, useEffect, useMemo, dan useCallback untuk mengoptimalkan render komponen.\n* **Manajemen State Terpusat:** Menghindari prop drilling menggunakan React Context API dan pola custom hooks yang modular dan dapat digunakan kembali.\n* **Optimasi Performa Virtual DOM:** Mencegah re-render yang tidak perlu dengan teknik memoization dan pembagian komponen terisolasi.\n* **Pembangunan Aplikasi Responsif:** Mengintegrasikan form interaktif dengan validasi real-time, penanganan error asinkron, dan transisi UI yang halus.",
    "links": [
      {
        "label": "Detail Sertifikat React Web Developer",
        "url": "/certificates/belajar-membuat-aplikasi-web-dengan-react"
      },
      {
        "label": "Jelajahi Seluruh 23 Sertifikat",
        "url": "/certificates"
      }
    ]
  },
  "en": {
    "title": "React Component Architecture, Custom Hooks & State Management Mastery",
    "text": "**Production-Grade Single-Page Application Competencies Certified in React**\n\nThe React Web Developer credential from Dicoding certifies modern reactive user interface engineering:\n\n* **Lifecycle Mastery & Core Hooks:** Expert utilization of useState, useEffect, useMemo, and useCallback to eliminate rendering bottlenecks.\n* **Centralized State & Custom Hooks:** Mitigating prop-drilling through React Context and authoring reusable, self-contained custom hooks.\n* **Virtual DOM Reconciliation Tuning:** Preventing unnecessary component re-renders utilizing React.memo and component boundary isolation.\n* **Snappy Interactive Interfaces:** Crafting dynamic client forms with real-time field validation, asynchronous error handling, and silky UI state transitions.",
    "links": [
      {
        "label": "React Developer Certificate Overview",
        "url": "/certificates/belajar-membuat-aplikasi-web-dengan-react"
      },
      {
        "label": "Explore All 23 Verified Credentials",
        "url": "/certificates"
      }
    ]
  }
},

  ICOMFEST_JURY_DEEPDIVE: {
  "id": {
    "title": "Pertahanan Grand Final dan Matriks Penilaian Juri ICOMFEST 2025",
    "text": "**Presentasi Grand Final dan Kemenangan Juara 1 Nasional ICOMFEST 2025**\n\nKemenangan Adyvka bersama proyek PusakaKu diraih melalui pertahanan teknis yang memukau dewan juri Universitas Ahmad Dahlan:\n\n* **Inovasi Pelestarian Budaya Berbasis Web 3D:** Memukau juri dengan visualisasi kepulauan nusantara interaktif Three.js yang berjalan lancar di peramban tanpa lag.\n* **Pengujian Arsitektur oleh Dosen Penguji:** Menjawab dengan tenang dan mendalam pertanyaan dewan juri seputar optimasi performa, kompresi aset grafis, dan skalabilitas backend.\n* **Dampak Sosial Budaya Nyata:** Membuktikan bahwa platform mampu memikat generasi muda untuk kembali mempelajari permainan tradisional Indonesia yang hampir punah.\n* **Skor Tertinggi Dewan Juri:** Meraih total poin tertinggi dari seluruh finalis perguruan tinggi dan sekolah menengah se-Indonesia untuk mengamankan podium Juara 1 Nasional.",
    "links": [
      {
        "label": "Detail Juara 1 ICOMFEST",
        "url": "/achievements/1st-place-national-web-design-competition"
      },
      {
        "label": "Studi Kasus Proyek PusakaKu",
        "url": "/projects/pusakaku"
      }
    ]
  },
  "en": {
    "title": "Grand Final Stage Defense & Jury Evaluation at ICOMFEST 2025",
    "text": "**Grand Final Defense and 1st Place National Championship Victory at ICOMFEST 2025**\n\nAdyvka's 1st Place victory with PusakaKu was sealed through a commanding stage presentation before Universitas Ahmad Dahlan faculty juries:\n\n* **3D Cultural Preservation Innovation:** Captivating judges with an interactive Three.js archipelago map running at a silky 60 fps inside mobile browsers.\n* **Rigorous Technical Inquisitorial Defense:** Calmly and authoritatively addressing tough jury questions regarding asset compression, WebGL rendering loops, and scalable backend services.\n* **Quantifiable Social & Cultural Value:** Demonstrating high youth engagement metrics reviving interest in endangered traditional Indonesian folk games.\n* **Top Scoring Podium Finish:** Earning the highest aggregate score across high school and university contenders nationwide to claim the 1st Place National Champion trophy.",
    "links": [
      {
        "label": "ICOMFEST 1st Place Champion Details",
        "url": "/achievements/1st-place-national-web-design-competition"
      },
      {
        "label": "PusakaKu Cultural Platform Case Study",
        "url": "/projects/pusakaku"
      }
    ]
  }
},

  PNBITC_PITCH_DEEPDIVE: {
  "id": {
    "title": "Presentasi Sistem dan Penilaian Juri PNBITC#18 Politeknik Negeri Bali",
    "text": "**Pertahanan Sistem TerasTani di Kompetisi Nasional PNBITC#18 Bali**\n\nAdyvka meraih podium Juara 2 Nasional di ajang bergengsi Politeknik Negeri Bali setelah bersaing ketat dengan peserta mahasiswa dan siswa nasional:\n\n* **Demonstrasi Langsung Perangkat Keras dan AI:** Menampilkan live demo sensor kelembapan tanah dan inferensi pendeteksian penyakit daun berbasis computer vision di hadapan juri.\n* **Keseimbangan Beban Kerja Magang dan Lomba:** Merancang dan mengoding sistem kompetisi ini di sela-sela jadwal magang korporat kelas 12 yang padat.\n* **Keunggulan Sistem Urban Farming Terpadu:** Juri mengapresiasi solusi holistik TerasTani yang menggabungkan automasi IoT, marketplace lokal, dan edukasi pertanian presisi.\n* **Podium Juara 2 Nasional:** Mengukuhkan posisi TerasTani sebagai inovasi web teknologi pertanian terbaik di ajang tingkat nasional ini.",
    "links": [
      {
        "label": "Detail Juara 2 PNBITC Bali",
        "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
      },
      {
        "label": "Studi Kasus Proyek TerasTani",
        "url": "/projects/terastani"
      }
    ]
  },
  "en": {
    "title": "System Defense & Jury Evaluation at PNBITC#18 Politeknik Negeri Bali",
    "text": "**Technical System Presentation and 2nd Place Podium Finish at PNBITC#18 Bali**\n\nCompeting against collegiate and senior high teams nationwide, Adyvka secured 2nd Place National Runner-Up at Politeknik Negeri Bali:\n\n* **Live Hardware Telemetry & Edge AI Demonstration:** Demonstrating real-time soil moisture triggers and computer vision crop disease diagnostics live before university faculty adjudicators.\n* **Balancing Corporate Internship Sprints:** Squeezing late-night competition development sprints alongside demanding full-time 12th-grade corporate internship shifts.\n* **Holistic Micro-Farming Value:** Juries commended TerasTani's integrated architecture combining automated IoT watering, hyper-local community crop trading, and precision agriculture education.\n* **National Runner-Up Honor:** Celebrating a hard-fought podium finish validating Adyvka's ability to ship competition-grade systems under intense pressure.",
    "links": [
      {
        "label": "PNBITC Bali Runner-Up Details",
        "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
      },
      {
        "label": "TerasTani Platform Case Study",
        "url": "/projects/terastani"
      }
    ]
  }
},

  UNILA_JURY_DEEPDIVE: {
  "id": {
    "title": "Keunggulan Aksesibilitas SemuaBisa pada Final Nasional UNILA 2025",
    "text": "**Keunggulan Inovasi dan Penilaian Juri SemuaBisa di Universitas Lampung**\n\nPlatform SemuaBisa meraih predikat Top 5 Finalis Nasional Web Development Competition di Universitas Lampung:\n\n* **Fokus Penuh pada Standar Aksesibilitas WCAG AAA:** Menjadi satu-satunya platform finalis yang merancang arsitektur ramah disabilitas secara menyeluruh.\n* **Fitur Ramah Disabilitas Nyata:** Dilengkapi pembaca layar semantik, mode kontras tinggi, navigasi papan ketik penuh, dan tipografi disleksia.\n* **Arsitektur Super Ringan:** Juri mengapresiasi penggunaan Alpine.js yang menghasilkan waktu muat sub-detik bahkan pada jaringan internet pedesaan yang lambat.\n* **Dampak bagi Karier Digital Pemuda:** Menyediakan jalur pembelajaran teknologi yang inklusif bagi seluruh lapisan masyarakat tanpa diskriminasi.",
    "links": [
      {
        "label": "Detail Finalis UNILA",
        "url": "/achievements/finalist-national-web-dev-competition"
      },
      {
        "label": "Studi Kasus Proyek SemuaBisa",
        "url": "/projects/semua-bisa"
      }
    ]
  },
  "en": {
    "title": "Accessibility Innovation & Jury Highlights at UNILA 2025 National Final",
    "text": "**Digital Accessibility Innovation and Finalist Honors at Universitas Lampung**\n\nSemuaBisa achieved Top 5 National Finalist recognition at UNILA's prestigious web development competition:\n\n* **Strict WCAG AAA Accessibility Standards:** Standing out as the sole finalist platform architected from the ground up for persons with visual and cognitive impairments.\n* **Tangible Inclusive UX Features:** Complete with ARIA semantic screen-reader tags, high-contrast monochrome themes, keyboard-only focus states, and dyslexia-friendly typography toggles.\n* **Ultra-Lightweight Performance:** Praised by judges for leveraging Alpine.js to achieve sub-second page rendering on budget mobile devices in rural areas.\n* **Democratic Youth Tech Empowerment:** Building an accessible bridge for underprivileged youth to acquire software engineering competencies.",
    "links": [
      {
        "label": "UNILA National Finalist Details",
        "url": "/achievements/finalist-national-web-dev-competition"
      },
      {
        "label": "SemuaBisa EdTech Project Case Study",
        "url": "/projects/semua-bisa"
      }
    ]
  }
},

  HACKATHON_STRATEGY_DEEPDIVE: {
  "id": {
    "title": "Strategi Kemenangan Hackathon dan Kompetisi Rekayasa Web Adyvka",
    "text": "**Playbook Strategi Adyvka dalam Memenangkan Kompetisi Web Nasional**\n\nKonsistensi Adyvka dalam meraih podium di berbagai kompetisi nasional didasarkan pada strategi terstruktur:\n\n1. **Riset Mendalam Tema Lomba:** Menganalisis latar belakang dewan juri dan mengidentifikasi celah masalah nyata yang belum diselesaikan kompetitor lain.\n2. **Kombinasi Estetika Visual dan Rekayasa Mendalam:** Memadukan antarmuka visual kelas dunia dengan fungsionalitas teknis nyata seperti AI inferensi atau integrasi hardware IoT.\n3. **Penyusunan Prototipe Cepat (Speed Prototyping):** Membangun fondasi sistem yang berfungsi dalam hitungan hari, menyisakan waktu untuk pengujian performa dan penghapusan bug.\n4. **Presentasi dan Latihan Tanya Jawab Skenario Terburuk:** Menyiapkan slide yang memikat, mendemonstrasikan prototipe secara live, dan mengantisipasi seluruh pertanyaan tajam juri dengan tenang.",
    "links": [
      {
        "label": "Lihat Semua Prestasi Kejuaraan",
        "url": "/achievements"
      },
      {
        "label": "Juara 1 Nasional ICOMFEST 2025",
        "url": "/achievements/1st-place-national-web-design-competition"
      },
      {
        "label": "Juara 2 Nasional PNBITC Bali",
        "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
      }
    ]
  },
  "en": {
    "title": "Hackathon Playbook & Strategies for Winning National Web Competitions",
    "text": "**Adyvka's Strategic Playbook for Winning National Software Competitions**\n\nAdyvka's track record of securing podium finishes at national championships rests on structured methodology:\n\n1. **Theme Deconstruction & Jury Analysis:** Dissecting the competition brief and identifying urgent unaddressed real-world problems that other teams overlook.\n2. **Harmonizing World-Class UI with Deep Engineering:** Blending stunning aesthetic polish with substantive technical depth such as client-side AI inference or IoT hardware telemetry.\n3. **Rapid Prototyping Velocity:** Shipping an end-to-end working MVP within days, reserving ample time for lighthouse optimization and rigorous bug fixing.\n4. **Rehearsed Stage Defense & Edge-Case Readiness:** Delivering confident live demos, structuring concise metric-driven slide decks, and answering tough jury interrogations with calm technical depth.",
    "links": [
      {
        "label": "View All Competition Honors",
        "url": "/achievements"
      },
      {
        "label": "1st Place National Champion ICOMFEST",
        "url": "/achievements/1st-place-national-web-design-competition"
      },
      {
        "label": "2nd Place National Runner-Up PNBITC",
        "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
      }
    ]
  }
},

  RICHO_PERF_DEEPDIVE: {
  "id": {
    "title": "Optimasi Google Lighthouse 99 Poin pada Web CV Richo Bahari",
    "text": "**Rekayasa Performa Web Berkecepatan Tinggi CV Richo Bahari**\n\nAdyvka mengoptimalkan web profil korporat CV Richo Bahari hingga meraih skor 99 di Google Lighthouse:\n\n* **Format Citra Modern WebP dan AVIF:** Seluruh aset visual katalog mesin industri dikonversi ke format WebP dan AVIF dengan kompresi lossless.\n* **Eliminasi Cumulative Layout Shift (CLS):** Menetapkan rasio aspek eksplisit pada seluruh gambar dan kontainer komponen untuk mencegah pergeseran tata letak.\n* **Pemisahan Kode dan Critical CSS:** Menerapkan code splitting dinamis pada Next.js 16 sehingga peramban hanya mengunduh skrip yang dibutuhkan halaman aktif.\n* **Waktu Muat Sub-Detik:** Skor 99 Performance, 100 Accessibility, 100 Best Practices, dan 100 SEO berhasil diraih secara konsisten.",
    "links": [
      {
        "label": "Studi Kasus Web CV Richo Bahari",
        "url": "/projects/richobahari"
      },
      {
        "label": "Pengalaman Kerja di CV Richo Bahari",
        "url": "/experience/cv-richo-bahari-frontend-developer-freelance"
      }
    ]
  },
  "en": {
    "title": "99 Google Lighthouse Performance Optimization in CV Richo Bahari",
    "text": "**High-Velocity Web Performance Engineering for CV Richo Bahari**\n\nAdyvka engineered the corporate industrial web platform to achieve an outstanding 99 Google Lighthouse score:\n\n* **Modern AVIF and WebP Image Pipelines:** Converting industrial machinery photography into lightweight WebP and AVIF assets with lossless compression.\n* **Zero Cumulative Layout Shift (CLS):** Enforcing explicit aspect ratios across responsive image wrappers to eliminate distracting layout jumps.\n* **Critical CSS & Route-Based Splitting:** Next.js 16 code splitting ensuring client browsers only parse critical CSS and JavaScript required for the active viewport.\n* **Sub-Second Core Web Vitals:** Consistently achieving 99 Performance, 100 Accessibility, 100 Best Practices, and 100 SEO on production benchmarks.",
    "links": [
      {
        "label": "CV Richo Bahari Project Details",
        "url": "/projects/richobahari"
      },
      {
        "label": "Frontend Developer Role at CV Richo Bahari",
        "url": "/experience/cv-richo-bahari-frontend-developer-freelance"
      }
    ]
  }
},

  RICHO_CATALOG_DEEPDIVE: {
  "id": {
    "title": "Katalog Mesin Industri Berat dan Kepatuhan Standar K3 CV Richo Bahari",
    "text": "**Desain Katalog Peralatan Industri Berat dan Standar K3**\n\nPlatform web CV Richo Bahari menyajikan portofolio kontraktor umum dan rekayasa industri:\n\n* **Katalog Fabrikasi Baja dan Konstruksi:** Menampilkan spesifikasi teknis pekerjaan konstruksi sipil, fabrikasi baja struktural, dan instalasi mekanikal elektrikal.\n* **Sistem Penyimpanan Heavy-Duty Racking:** Menampilkan portofolio instalasi rak pergudangan industri berkapasitas tonase tinggi.\n* **Kepatuhan Standar K3 Zero Accident:** Menekankan komitmen keselamatan kerja Keselamatan dan Kesehatan Kerja (K3) serta standar ISO 9001.\n* **Navigasi Portofolio Berbasis Kategori:** Mempermudah calon klien korporat menemukan rekam jejak proyek industri yang relevan.",
    "links": [
      {
        "label": "Detail Proyek CV Richo Bahari",
        "url": "/projects/richobahari"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Industrial Heavy Machinery Catalog & K3 Standards in CV Richo Bahari",
    "text": "**Industrial Machinery Catalog Design and K3 Compliance Architecture**\n\nThe CV Richo Bahari corporate web platform showcases an extensive general contracting portfolio:\n\n* **Structural Steel & Civil Engineering Showcase:** Visualizing heavy civil contracting, structural steel fabrication, and industrial MEP engineering deliverables.\n* **Heavy-Duty Storage Racking Catalog:** Interactive showcase of industrial warehouse racking solutions supporting high-tonnage payload capacities.\n* **Zero Accident K3 & ISO 9001 Compliance:** Highlighting strict adherence to workplace occupational safety protocols and quality management benchmarks.\n* **Category-Filtered Portfolio Navigation:** Enabling enterprise industrial clients to effortlessly inspect past engineering works and verified project specs.",
    "links": [
      {
        "label": "CV Richo Bahari Project Details",
        "url": "/projects/richobahari"
      },
      {
        "label": "Explore All 18 Projects",
        "url": "/projects"
      }
    ]
  }
},

  FITSMART_AI_DEEPDIVE: {
  "id": {
    "title": "Integrasi Google Gemini AI untuk Pelatihan Kesehatan di FitSmart",
    "text": "**Integrasi Kecerdasan Buatan Google Gemini pada FitSmart AI**\n\nFitSmart memanfaatkan Google Gemini 1.5 Flash untuk memberikan asisten kesehatan pribadi:\n\n* **Parsing Deskripsi Makanan Alami:** Pengguna cukup mengetik menu makanan harian, dan Gemini AI otomatis mengekstrak taksiran kalori, protein, lemak, dan karbohidrat.\n* **Rekomendasi Olahraga Progresif:** Menghasilkan saran latihan fisik yang disesuaikan dengan tingkat kebugaran, berat badan, dan target kalori pengguna.\n* **Prompt Engineering Presisi Klinis:** Menggunakan instruksi terstruktur untuk mencegah halusinasi medis dan memberikan panduan gaya hidup sehat yang aman.\n* **Konsultasi Interaktif 24/7:** Menyediakan obrolan langsung mengenai nutrisi seimbang dan pemulihan tubuh setelah berolahraga.",
    "links": [
      {
        "label": "Detail Proyek FitSmart AI",
        "url": "/projects/fitsmart"
      },
      {
        "label": "Keahlian Kecerdasan Buatan (AI)",
        "url": "/about"
      }
    ]
  },
  "en": {
    "title": "Google Gemini AI Integration for Health Coaching in FitSmart",
    "text": "**Google Gemini AI Assistant Integration in FitSmart**\n\nFitSmart leverages Google Gemini 1.5 Flash API to deliver a personalized clinical health companion:\n\n* **Natural Language Meal Parsing:** Users type unstructured meal logs, and Gemini AI programmatically extracts estimated calories, protein, carbs, and fats.\n* **Progressive Workout Recommendations:** Generating personalized physical routines tailored to current stamina, body composition, and caloric deficit targets.\n* **Clinically Guided Prompt Engineering:** Engineered prompt templates mitigating medical hallucinations and encouraging evidence-based healthy habits.\n* **24/7 Interactive Wellness Companion:** Instant conversational guidance explaining nutritional balance, hydration goals, and active recovery routines.",
    "links": [
      {
        "label": "FitSmart AI Case Study",
        "url": "/projects/fitsmart"
      },
      {
        "label": "Adyvka AI Capabilities",
        "url": "/about"
      }
    ]
  }
},

  FITSMART_TRACKER_DEEPDIVE: {
  "id": {
    "title": "Perhitungan Kalori Klinis dan Pelacak Nutrisi pada FitSmart",
    "text": "**Mesin Perhitungan Kalori Klinis dan Pelacak Gaya Hidup FitSmart**\n\nFitSmart mengimplementasikan algoritma kesehatan ilmiah untuk pemantauan nutrisi harian:\n\n* **Rumus BMR Mifflin-St Jeor:** Menghitung Basal Metabolic Rate pengguna secara akurat berdasarkan usia, tinggi, berat badan, dan jenis kelamin.\n* **Penyesuaian Kalori Dinamis:** Menghitung Total Daily Energy Expenditure (TDEE) dengan mempertimbangkan tingkat aktivitas fisik harian.\n* **Grafik Progres Berat Badan:** Visualisasi tren berat badan mingguan dan bulanan dengan kurva regresi untuk memantau kemajuan target.\n* **Pencatatan Asupan Air:** Pengingat hidrasi harian untuk menjaga metabolisme tubuh tetap optimal sepanjang hari.",
    "links": [
      {
        "label": "Detail Proyek FitSmart",
        "url": "/projects/fitsmart"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Clinical Calorie Calculation & Nutrition Progress Tracker in FitSmart",
    "text": "**Scientific Calorie Calculations and Lifestyle Analytics in FitSmart**\n\nFitSmart implements validated metabolic formulas for accurate daily fitness management:\n\n* **Mifflin-St Jeor BMR Equation:** Calculating accurate Basal Metabolic Rates calibrated to age, height, body mass, and gender parameters.\n* **Dynamic TDEE Energy Balancing:** Automatically adjusting Total Daily Energy Expenditure based on monitored daily physical activity tiers.\n* **Weight Trend Progression Charts:** Visualizing weekly and monthly weight fluctuations with smoothing curves to track fitness targets reliably.\n* **Hydration Intake Logging:** Smart daily water tracking with reminders to keep metabolic and athletic recovery at peak performance.",
    "links": [
      {
        "label": "FitSmart Project Details",
        "url": "/projects/fitsmart"
      },
      {
        "label": "Explore All 18 Software Projects",
        "url": "/projects"
      }
    ]
  }
},

  JAVAISLAND_BOOKING_DEEPDIVE: {
  "id": {
    "title": "Mesin Pemesanan Tur dan Reservasi Jadwal Dinamis JavaIsland",
    "text": "**Fitur Pemesanan Paket Wisata dan Manajemen Jadwal JavaIsland**\n\nJavaIsland menyediakan portal reservasi tur budaya pulau Jawa yang interaktif:\n\n* **Penyusun Paket Wisata Kustom:** Pengguna dapat memilih durasi perjalanan, jumlah peserta, dan destinasi budaya yang ingin dikunjungi.\n* **Kalkulator Harga Instan:** Menghitung estimasi biaya perjalanan secara transparan mencakup transportasi lokal, pemandu wisata, dan tiket masuk.\n* **Penerbitan Voucher Reservasi:** Menghasilkan bukti pemesanan digital lengkap dengan jadwal rencana perjalanan harian.\n* **Ulasan Wisatawan Terverifikasi:** Ulasan otentik dari wisatawan untuk membantu pengguna memilih rute perjalanan terbaik.",
    "links": [
      {
        "label": "Detail Proyek JavaIsland",
        "url": "/projects/javaisland"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Tour Booking & Dynamic Itinerary Reservation Engine in JavaIsland",
    "text": "**Interactive Cultural Tour Booking and Schedule Engine in JavaIsland**\n\nJavaIsland delivers a frictionless travel reservation portal for exploring Java's heritage:\n\n* **Custom Tour Package Builder:** Travelers select expedition durations, group headcount, and targeted historical destinations across Java.\n* **Transparent Real-Time Pricing:** Automated cost estimations factoring in local transportation, certified guides, and heritage entrance passes.\n* **Instant Digital Voucher Generation:** Generating reservation confirmation passes complete with comprehensive day-by-day travel schedules.\n* **Verified Traveler Testimonials:** Authentic reviews and community recommendations guiding travelers to discover off-the-beaten-path cultural gems.",
    "links": [
      {
        "label": "JavaIsland Travel Case Study",
        "url": "/projects/javaisland"
      },
      {
        "label": "Explore All 18 Software Projects",
        "url": "/projects"
      }
    ]
  }
},

  JAVAISLAND_CULTURE_DEEPDIVE: {
  "id": {
    "title": "Eksplorasi Warisan Budaya Jawa dan Destinasi Wisata JavaIsland",
    "text": "**Mesin Eksplorasi Warisan Budaya dan Sejarah Jawa pada JavaIsland**\n\nJavaIsland dirancang untuk memperkenalkan kekayaan warisan budaya pulau Jawa kepada dunia:\n\n* **Panduan Sejarah Candi Borobudur dan Prambanan:** Narasi mendalam mengenai arsitektur, relief, dan filosofi spiritual candi bersejarah di Jawa Tengah dan Yogyakarta.\n* **Peta Wisata Budaya Keraton:** Menjelajahi tradisi Keraton Yogyakarta dan Surakarta Hadiningrat, tarian klasik, serta seni gamelan.\n* **Eksplorasi Alam Bromo dan Ijen:** Informasi pendakian dan konservasi kawasan vulkanik Jawa Timur dengan panduan keselamatan terperinci.\n* **Rekomendasi Kuliner Tradisional:** Menampilkan kuliner legendaris khas nusantara di setiap kota tujuan perjalanan.",
    "links": [
      {
        "label": "Detail Proyek JavaIsland",
        "url": "/projects/javaisland"
      },
      {
        "label": "Proyek PusakaKu (Juara 1 ICOMFEST)",
        "url": "/projects/pusakaku"
      }
    ]
  },
  "en": {
    "title": "Javanese Cultural Heritage & Historical Exploration in JavaIsland",
    "text": "**Cultural Heritage Preservation and Historical Showcase in JavaIsland**\n\nJavaIsland was architected to celebrate the historical majesty of Java for global travelers:\n\n* **In-Depth Borobudur & Prambanan Guides:** Comprehensive narratives detailing temple bas-reliefs, Buddhist and Hindu architecture, and spiritual origins.\n* **Royal Keraton Heritage Maps:** Documenting royal palace customs in Yogyakarta and Surakarta, classical court dances, and gamelan heritage.\n* **Bromo & Ijen Volcanic Expeditions:** Trail logistics and safety tips for traversing East Java's volcanic peaks and sulfuric craters.\n* **Traditional Culinary Spotlights:** Curated culinary maps highlighting legendary authentic food destinations across each historical township.",
    "links": [
      {
        "label": "JavaIsland Project Details",
        "url": "/projects/javaisland"
      },
      {
        "label": "PusakaKu Cultural Platform (1st Place)",
        "url": "/projects/pusakaku"
      }
    ]
  }
},

  IDNCOURSE_LMS_DEEPDIVE: {
  "id": {
    "title": "Sistem Streaming Video dan Kuis Interaktif pada IDN Course LMS",
    "text": "**Fitur Pembelajaran Interaktif dan Kuis Koding IDN Course LMS**\n\nIDN Course dirancang sebagai platform pembelajaran rekayasa perangkat lunak modern:\n\n* **Pemutar Video Modul Bertingkat:** Memutar video materi dengan kendali kecepatan putar, penanda bab, dan pelacak durasi tonton otomatis.\n* **Kuis Pilihan Ganda dan Praktik:** Menguji pemahaman materi setelah setiap modul dengan penilaian otomatis dan penjelasan kunci jawaban.\n* **Pelacak Kemajuan Belajar Siswa:** Dasbor visual yang menunjukkan persentase penyelesaian kurikulum dan pencapaian lencana siswa.\n* **Forum Diskusi Per Materi:** Memungkinkan siswa bertanya langsung kepada instruktur di bawah setiap bab pembelajaran.",
    "links": [
      {
        "label": "Detail Proyek IDN Course",
        "url": "/projects/idncourse"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Video Streaming & Interactive Coding Quizzes in IDN Course LMS",
    "text": "**Interactive Video Streaming & Auto-Graded Quizzes in IDN Course LMS**\n\nIDN Course was architected as an interactive software engineering learning hub:\n\n* **Segmented Video Streaming Player:** Video player with playback speed controls, chapter navigation, and automatic progress tracking.\n* **Auto-Graded Multiple Choice & Coding Quizzes:** Evaluating concept retention after each lesson with instant score feedback and answer breakdowns.\n* **Visual Student Progress Dashboards:** Real-time dashboards visualizing percentage completion milestones and earned achievement badges.\n* **Lesson-Specific Discussion Forums:** Enabling enrolled students to post technical questions and receive guidance directly from mentors.",
    "links": [
      {
        "label": "IDN Course LMS Case Study",
        "url": "/projects/idncourse"
      },
      {
        "label": "Explore All 18 Projects",
        "url": "/projects"
      }
    ]
  }
},

  IDNCOURSE_CERT_DEEPDIVE: {
  "id": {
    "title": "Penerbitan Sertifikat PDF Otomatis dan Verifikasi Hash di IDN Course",
    "text": "**Mesin Penerbitan Sertifikat Digital Otomatis IDN Course**\n\nSetelah siswa menuntaskan 100% kurikulum kursus, sistem secara otomatis menerbitkan sertifikat:\n\n* **Penerbitan Dokumen Vektor PDF Instan:** Merender nama siswa, judul kursus, dan tanggal kelulusan ke dalam sertifikat beresolusi tinggi.\n* **Kode Hash Verifikasi Unik:** Menghasilkan kode alfanumerik unik untuk setiap sertifikat untuk mencegah pemalsuan dokumen kelulusan.\n* **Tautan Validasi Publik:** Pihak sekolah atau perekrut kerja dapat memverifikasi keaslian sertifikat secara online melalui portal verifikasi IDN Course.\n* **Unduh dan Bagikan Cepat:** Siswa dapat mengunduh berkas PDF atau membagikan tautan kredensial ke profil LinkedIn.",
    "links": [
      {
        "label": "Detail Proyek IDN Course",
        "url": "/projects/idncourse"
      },
      {
        "label": "Jelajahi Seluruh 23 Sertifikat Adyvka",
        "url": "/certificates"
      }
    ]
  },
  "en": {
    "title": "Automated PDF Certificate Generation & Hash Verification in IDN Course",
    "text": "**Automated Certificate Generation & Verification Engine in IDN Course**\n\nUpon achieving 100% course completion, IDN Course triggers automated credential issuance:\n\n* **Instant Vector PDF Rendering:** Programmatically printing student credentials, course titles, and completion dates onto crisp high-resolution certificates.\n* **Unique Cryptographic Verification Hash:** Generating a tamper-proof alphanumeric credential ID to permanently prevent fraudulent certificate forgery.\n* **Public Online Verification Portal:** Enabling employers and academic institutions to verify student credential authenticity via a dedicated URL.\n* **One-Click LinkedIn Credential Sharing:** Allowing graduates to download print-ready PDFs or publish their verified credential badge directly to LinkedIn.",
    "links": [
      {
        "label": "IDN Course Platform Details",
        "url": "/projects/idncourse"
      },
      {
        "label": "Explore Adyvka's 23 Certifications",
        "url": "/certificates"
      }
    ]
  }
},

  COFFEESHOP_MENU_DEEPDIVE: {
  "id": {
    "title": "Menu Artisan Kustom dan Alur Reservasi Meja di Coffeee Shop",
    "text": "**Fitur Pemesanan Kopi Artisan dan Reservasi Meja Coffeee Shop**\n\nCoffeee Shop menghadirkan etalase digital interaktif bagi penikmat kopi spesialti:\n\n* **Katalog Biji Kopi Single Origin:** Menampilkan profil aroma, tingkat sangrai (light, medium, dark), dan daerah asal biji kopi nusantara.\n* **Kustomisasi Metode Seduh:** Pelanggan dapat memilih metode seduh manual brew (V60, Aeropress, French Press) atau racikan berbasis espresso.\n* **Formulir Reservasi Meja Interaktif:** Memilih tanggal, jam kedatangan, dan preferensi area indoor atau outdoor untuk reservasi cepat.\n* **Keranjang Belanja Real-Time:** Menghitung total pesanan menu dan pilihan pastry secara langsung dengan antarmuka yang elegan.",
    "links": [
      {
        "label": "Detail Proyek Coffeee Shop",
        "url": "/projects/coffeee-shop"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Custom Artisan Menu & Table Booking Flow in Coffeee Shop",
    "text": "**Artisan Coffee Menu Customization & Table Reservation Flow**\n\nCoffeee Shop provides an elegant digital storefront for specialty coffee enthusiasts:\n\n* **Single-Origin Bean Profiles:** Visualizing tasting notes, roast levels (light, medium, dark), and origin terroirs across Indonesian coffee regions.\n* **Brew Method Customizer:** Enabling patrons to customize pour-over extraction methods (V60, Aeropress, French Press) or espresso parameters.\n* **Interactive Table Booking Scheduler:** Reserving seating preferences across indoor quiet zones or outdoor patio areas with real-time slot selection.\n* **Snappy Cart Drawer:** Calculating total drink and pastry orders instantly with warm artisan aesthetics and fluid UI feedback.",
    "links": [
      {
        "label": "Coffeee Shop Case Study",
        "url": "/projects/coffeee-shop"
      },
      {
        "label": "Explore All 18 Software Projects",
        "url": "/projects"
      }
    ]
  }
},

  COFFEESHOP_UX_DEEPDIVE: {
  "id": {
    "title": "Desain Antarmuka Brand dan Transisi Mikro Coffeee Shop",
    "text": "**Pengalaman Visual Brand dan Transisi Halus pada Coffeee Shop**\n\nDesain web Coffeee Shop dirancang untuk membangkitkan suasana kedai kopi artisan:\n\n* **Palet Warna Hangat:** Menggunakan kombinasi warna cokelat espresso, krem, dan aksen hangat yang nyaman dipandang mata.\n* **Transisi Mikro CSS Halus:** Animasi hover interaktif pada kartu menu dan tombol pemesanan yang memberikan umpan balik taktil.\n* **Tipografi Bersih dan Proporsional:** Hierarki huruf yang mempermudah pelanggan membaca detail rasa dan harga menu kopi.\n* **Responsif Sempurna di Ponsel:** Alur pemesanan dirancang ramah satu tangan pada layar smartphone saat pelanggan berada di perjalanan.",
    "links": [
      {
        "label": "Detail Proyek Coffeee Shop",
        "url": "/projects/coffeee-shop"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Brand Experience & Micro-Interactions in Coffeee Shop",
    "text": "**Artisan Brand Identity & Fluid Micro-Interactions in Coffeee Shop**\n\nThe Coffeee Shop interface was designed to evoke the ambiance of an artisan specialty cafe:\n\n* **Warm Earthy Color Palette:** Harmonious blends of espresso brown, warm creams, and amber accents creating a welcoming visual atmosphere.\n* **Fluid CSS Micro-Animations:** Tactile hover transitions on coffee cards and reservation buttons delivering instant visual feedback.\n* **Clean Typographic Hierarchy:** Legible editorial typography allowing customers to effortlessly scan tasting profiles and bean pricing.\n* **One-Handed Mobile Optimization:** Ergonomically engineered for smooth one-thumb navigation on mobile screens when ordering on the go.",
    "links": [
      {
        "label": "Coffeee Shop Project Details",
        "url": "/projects/coffeee-shop"
      },
      {
        "label": "Explore All 18 Projects",
        "url": "/projects"
      }
    ]
  }
},

  MYSTYLE_CART_DEEPDIVE: {
  "id": {
    "title": "Keranjang Belanja Reaktif dan Alur Checkout pada MyStyle",
    "text": "**Mekanisme Keranjang Belanja Reaktif dan Checkout MyStyle**\n\nMyStyle menghadirkan pengalaman belanja busana modern tanpa hambatan:\n\n* **Drawer Keranjang Sisi Klien:** Menambahkan dan menghapus barang belanjaan secara instan tanpa perlu memuat ulang halaman.\n* **Pilihan Varian Ukuran dan Warna:** Memilih ukuran sepatu atau pakaian dan warna busana dengan validasi ketersediaan stok real-time.\n* **Kalkulator Diskon dan Kupon:** Memasukkan kode promo yang langsung memotong total pembayaran secara transparan.\n* **Alur Checkout Ringkas:** Formulir pengiriman yang bersih dan ringkas untuk memaksimalkan tingkat konversi pembelian.",
    "links": [
      {
        "label": "Detail Proyek MyStyle",
        "url": "/projects/mystyle"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Reactive Shopping Cart State & Instant Checkout in MyStyle",
    "text": "**Reactive Cart Drawer and Frictionless Checkout Architecture in MyStyle**\n\nMyStyle delivers an intuitive apparel e-commerce customer buying experience:\n\n* **Client-Side Slide-Over Cart Drawer:** Instant item addition and removal with dynamic subtotal recalculation and zero page reloads.\n* **Variant Size & Color Selectors:** Selecting shoe sizes and fabric colorways with real-time inventory validation checks.\n* **Discount Code Engine:** Applying promotional coupons that instantly reflect transparent markdown deductions across the cart total.\n* **Streamlined Checkout Funnel:** Minimalist shipping address collection form designed to maximize checkout conversion rates.",
    "links": [
      {
        "label": "MyStyle E-Commerce Case Study",
        "url": "/projects/mystyle"
      },
      {
        "label": "Explore All 18 Projects",
        "url": "/projects"
      }
    ]
  }
},

  MYSTYLE_CATALOG_DEEPDIVE: {
  "id": {
    "title": "Desain Lookbook Busana dan Arsitektur Grid Modern MyStyle",
    "text": "**Arsitektur Grid Katalog Busana dan Desain Lookbook MyStyle**\n\nMyStyle dirancang dengan tata letak editorial busana kelas atas:\n\n* **Grid Katalog Editorial:** Menyajikan foto produk resolusi tinggi dengan tata letak grid modern yang elegan dan responsif.\n* **Fitur Zoom Detail Produk:** Pelanggan dapat memeriksa tekstur kain dan jahitan sepatu secara jelas sebelum membeli.\n* **Filter Musim dan Kategori:** Memfilter koleksi pakaian berdasarkan musim, jenis kelamin, dan kategori gaya hidup.\n* **Kecepatan Muat Gambar Optimal:** Pemuatan gambar bertahap (lazy loading) untuk menghemat kuota internet pengguna ponsel.",
    "links": [
      {
        "label": "Detail Proyek MyStyle",
        "url": "/projects/mystyle"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Modern Apparel Lookbook Grid & Catalog Architecture in MyStyle",
    "text": "**High-Fashion Editorial Lookbook & Grid Architecture in MyStyle**\n\nMyStyle combines high-fashion aesthetic polish with performant web engineering:\n\n* **Editorial Lookbook Grid:** Showcasing high-resolution apparel photography in a balanced responsive grid layout.\n* **Product Detail Inspection Zoom:** Enabling shoppers to inspect fabric textures, stitching, and materials up close prior to purchasing.\n* **Season & Category Filtering:** Instant multi-category filtering by season, gender, and streetwear lifestyle collections.\n* **Responsive Lazy-Loading:** Progressive image decoding and native lazy-loading protecting user data on cellular devices.",
    "links": [
      {
        "label": "MyStyle Project Overview",
        "url": "/projects/mystyle"
      },
      {
        "label": "Explore All 18 Software Projects",
        "url": "/projects"
      }
    ]
  }
},

  DELIFOOD_TRACKING_DEEPDIVE: {
  "id": {
    "title": "Pelacakan Kurir Real-Time dan Status Pesanan pada DeliFood",
    "text": "**Sistem Pelacakan Pengiriman Makanan Waktu Nyata DeliFood**\n\nAplikasi mobile DeliFood menghadirkan pemantauan status pesanan makanan secara transparan:\n\n* **Indikator Progres 4 Tahap:** Menampilkan status pesanan secara visual mulai dari Diterima Restoran, Sedang Dimasak, Diantar Kurir, hingga Sampai di Lokasi.\n* **Simulasi Pergerakan Kurir GPS:** Memvisualisasikan perkiraan posisi kurir di rute jalan menuju alamat pemesan dengan animasi yang mulus.\n* **Estimasi Waktu Tiba Akurat:** Memberikan perkiraan menit kedatangan makanan berdasarkan jarak tempuh dan kondisi dapur restoran.\n* **Tombol Kontak Kurir Langsung:** Memungkinkan pelanggan menghubungi kurir pengantar via telepon atau obrolan instan saat pesanan diantar.",
    "links": [
      {
        "label": "Detail Proyek DeliFood",
        "url": "/projects/delifood"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Real-Time Courier Tracking & Order State Machine in DeliFood",
    "text": "**Real-Time Food Delivery Tracking & Order State Transitions in DeliFood**\n\nDeliFood keeps hunger at bay with transparent live delivery monitoring:\n\n* **4-Stage Order Progression Indicator:** Visualizing status milestones: Order Confirmed, Kitchen Cooking, Courier En Route, and Successfully Delivered.\n* **Simulated GPS Courier Navigation:** Smoothly animating delivery driver movement along road pathways toward the customer address.\n* **Accurate Arrival Estimates:** Dynamic countdown timers factoring in kitchen preparation time and delivery road distances.\n* **Direct Driver Contact Trigger:** Instant call and messaging triggers to reach the active delivery courier directly for gate access instructions.",
    "links": [
      {
        "label": "DeliFood Mobile App Details",
        "url": "/projects/delifood"
      },
      {
        "label": "Explore All 18 Software Projects",
        "url": "/projects"
      }
    ]
  }
},

  DELIFOOD_ARCH_DEEPDIVE: {
  "id": {
    "title": "Arsitektur Mobile Flutter dan Kontrak REST API pada DeliFood",
    "text": "**Arsitektur Aplikasi Flutter dan Integrasi REST API DeliFood**\n\nDeliFood dibangun dengan fondasi kode mobile yang bersih dan modular:\n\n* **Clean Architecture Flutter:** Memisahkan lapisan presentasi widget, logika bisnis state management, dan repositori data jaringan.\n* **Kontrak REST API Terstruktur:** Mengonsumsi data katalog restoran dan menu makanan melalui endpoint JSON yang teroptimasi.\n* **Penyimpanan Lokal Keranjang Makanan:** Pesanan makanan tetap tersimpan aman di penyimpanan lokal ponsel jika aplikasi tidak sengaja ditutup.\n* **Performa Responsif 60 FPS:** Seluruh daftar makanan dapat digulir dengan sangat lancar tanpa frame drop di perangkat Android dan iOS.",
    "links": [
      {
        "label": "Detail Proyek DeliFood",
        "url": "/projects/delifood"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Flutter Mobile Architecture & REST API Contracts in DeliFood",
    "text": "**Clean Flutter Mobile Architecture & REST Integration in DeliFood**\n\nDeliFood was built using scalable mobile development patterns across iOS and Android:\n\n* **Clean Mobile Architecture:** Strict decoupling between UI view widgets, state management providers, and network repositories.\n* **Optimized REST API Endpoints:** Fast serialization of restaurant catalogs, category listings, and checkout order payloads over JSON.\n* **Local Cart Persistence:** Protecting customer food orders in local storage across sudden app restarts or backgrounding.\n* **Buttery 60 FPS Scrolling:** Highly performant list rendering ensuring zero frame drops even across long restaurant menus.",
    "links": [
      {
        "label": "DeliFood Mobile Architecture",
        "url": "/projects/delifood"
      },
      {
        "label": "Explore All 18 Projects",
        "url": "/projects"
      }
    ]
  }
},

  AI_TICKET_AI_DEEPDIVE: {
  "id": {
    "title": "Klasifikasi Otomatis dan Ringkasan Tiket dengan Google Gemini AI",
    "text": "**Otomasi Klasifikasi dan Analisis Sentimen Tiket dengan Gemini AI**\n\nAI Ticket Manager memanfaatkan kecerdasan buatan untuk mengotomasi alur IT support:\n\n* **Ringkasan Otomatis Kendala Pengguna:** Gemini AI membaca keluhan teknis pengguna yang panjang dan merangkum inti masalah dalam beberapa poin jelas.\n* **Penentuan Tingkat Prioritas Otomatis:** Mengklasifikasikan tiket ke dalam kategori Rendah, Sedang, Tinggi, atau Kritis berdasarkan urgensi masalah.\n* **Analisis Sentimen Pelanggan:** Mendeteksi nada frustrasi pelanggan agar tiket dapat segera dieskalasi ke tim teknis senior.\n* **Rekomendasi Solusi Cepat:** Menyarankan langkah pemecahan masalah awal yang dapat langsung dikirimkan oleh agen pendukung.",
    "links": [
      {
        "label": "Detail Proyek AI Ticket Manager",
        "url": "/projects/ai-ticket-manager"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Automated Ticket Triage & Synthesis via Google Gemini AI",
    "text": "**Automated Ticket Classification and Sentiment Triage via Gemini AI**\n\nAI Ticket Manager transforms chaotic IT helpdesk inboxes using AI intelligence:\n\n* **Automated Issue Summarization:** Gemini AI parses lengthy user problem descriptions into crisp, actionable 2-sentence summaries.\n* **Intelligent Priority Scoring:** Automatically assigning severity levels (Low, Medium, High, or Critical) based on business impact.\n* **Customer Sentiment Analysis:** Detecting customer frustration signals to escalate high-risk complaints to senior managers immediately.\n* **Suggested Resolution Snippets:** Generating contextual troubleshooting steps ready for helpdesk agents to send with one click.",
    "links": [
      {
        "label": "AI Ticket Manager Case Study",
        "url": "/projects/ai-ticket-manager"
      },
      {
        "label": "Explore All 18 Projects",
        "url": "/projects"
      }
    ]
  }
},

  AI_TICKET_CLOUD_DEEPDIVE: {
  "id": {
    "title": "Arsitektur Real-Time Cloud Firestore pada AI Ticket Manager",
    "text": "**Sinkronisasi Tiket Waktu Nyata dengan Cloud Firestore**\n\nAI Ticket Manager menggunakan basis data cloud reaktif untuk kolaborasi tim tanpa jeda:\n\n* **Listener Real-Time onSnapshot:** Setiap perubahan status tiket langsung muncul di layar seluruh agen secara instan tanpa perlu me-refresh browser.\n* **Pembaruan Batch Atomik:** Memperbarui penugasan teknisi dan status tiket secara atomik untuk mencegah konflik data antarpengguna.\n* **Aturan Keamanan Berbasis Peran:** Cloud Firestore Security Rules memastikan staf hanya dapat mengakses tiket sesuai izin divisinya.\n* **Pencarian Cepat Berdasarkan Kategori:** Mengindeks tiket berdasarkan status buka, dalam pengerjaan, atau selesai untuk pelaporan instan.",
    "links": [
      {
        "label": "Detail Proyek AI Ticket Manager",
        "url": "/projects/ai-ticket-manager"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Cloud Firestore Real-Time Listener Architecture in AI Ticket Manager",
    "text": "**Real-Time Data Synchronization Architecture with Cloud Firestore**\n\nAI Ticket Manager leverages reactive cloud database streams for effortless collaboration:\n\n* **Reactive onSnapshot Listeners:** Ticket status changes reflect across all active helpdesk agent dashboards instantly with zero page reloads.\n* **Atomic Batch Operations:** Guaranteeing transactional consistency when reassigning technicians and updating ticket status concurrently.\n* **Role-Based Security Rules:** Strict Cloud Firestore Security Rules isolating internal tickets from external submitter views.\n* **Instant Filter Indexing:** High-speed querying across open, in-progress, and resolved ticket queues for executive SLA reporting.",
    "links": [
      {
        "label": "AI Ticket Manager Project Details",
        "url": "/projects/ai-ticket-manager"
      },
      {
        "label": "Explore All 18 Software Projects",
        "url": "/projects"
      }
    ]
  }
},

  ATTENDANCE_BIOMETRIC_DEEPDIVE: {
  "id": {
    "title": "Verifikasi Wajah Biometrik dan GPS Geofence pada Attendance App",
    "text": "**Sistem Absensi Biometrik Wajah dan Validasi Lokasi GPS Geofence**\n\nAplikasi Attendance App mengamankan presensi karyawan dan siswa dari kecurangan:\n\n* **Deteksi Titik Wajah ML Kit:** Memverifikasi kesesuaian kontur wajah pengguna langsung di perangkat menggunakan Google ML Kit.\n* **Radius Geofence GPS Ketat:** Presensi hanya diterima jika koordinat GPS smartphone berada di dalam radius 50 meter dari gedung sekolah.\n* **Pencegahan Absensi Palsu:** Mendeteksi upaya pemalsuan lokasi (fake GPS) dan memastikan foto presensi diambil secara langsung bukan dari galeri.\n* **Pencatatan Jam Masuk Akurat:** Mencatat waktu presensi secara otomatis dengan stempel waktu server yang tidak dapat dimanipulasi.",
    "links": [
      {
        "label": "Detail Proyek Attendance App",
        "url": "/projects/attendance-app"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Biometric Face Verification & GPS Geofencing in Attendance App",
    "text": "**On-Device Biometric Face Verification & Precision GPS Geofencing**\n\nAttendance App provides tamper-resistant attendance verification for academic campuses:\n\n* **On-Device ML Kit Face Landmarks:** Validating user facial contours locally on the mobile phone using Google ML Kit models.\n* **50-Meter GPS Geofence Boundary:** Submissions are rejected unless the mobile device is verified to be within 50 meters of campus buildings.\n* **Anti-Spoofing & Fake GPS Defense:** Detecting mock location providers and enforcing real-time camera captures to prevent gallery uploads.\n* **Tamper-Proof Time Records:** Logging check-in records with cryptographically verified server timestamps preventing local time manipulation.",
    "links": [
      {
        "label": "Attendance App Mobile Architecture",
        "url": "/projects/attendance-app"
      },
      {
        "label": "Explore All 18 Software Projects",
        "url": "/projects"
      }
    ]
  }
},

  ATTENDANCE_OFFLINE_DEEPDIVE: {
  "id": {
    "title": "Sinkronisasi Offline Berkelanjutan pada Attendance App",
    "text": "**Manajemen Penyimpanan Lokal dan Antrean Sinkronisasi Offline Presensi**\n\nAttendance App dirancang tetap berfungsi sempurna saat koneksi internet terputus:\n\n* **Basis Data Lokal SQLite / Hive:** Data presensi tersimpan aman di memori lokal ponsel saat smartphone tidak terhubung ke sinyal internet.\n* **Antrean Sinkronisasi Otomatis:** Saat ponsel kembali mendeteksi sinyal internet atau Wi-Fi, antrean presensi langsung diunggah ke server otomatis.\n* **Resolusi Konflik Data:** Memastikan data presensi lokal yang diunggah belakangan tetap mempertahankan stempel waktu asli saat presensi dilakukan.\n* **Dasbor Ringkasan Kehadiran:** Menampilkan riwayat absensi bulanan dan status ketepatan waktu pengguna secara transparan.",
    "links": [
      {
        "label": "Detail Proyek Attendance App",
        "url": "/projects/attendance-app"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Offline Local Sync & Background Synchronization in Attendance App",
    "text": "**Offline-First Local Storage & Background Sync Queue in Attendance App**\n\nAttendance App ensures uninterrupted operational continuity even during network blackouts:\n\n* **Local SQLite / Hive Storage:** Caching attendance records safely on the phone's internal storage during network drops.\n* **Automated Background Sync Queue:** Automatically uploading cached attendance logs to central servers the moment network connectivity resumes.\n* **Conflict Resolution & Timestamp Integrity:** Preserving original offline clock-in timestamps so employees receive full credit for arriving on time.\n* **Monthly Attendance Dashboards:** Providing intuitive monthly timesheets and punctuality analytics for staff and administration.",
    "links": [
      {
        "label": "Attendance App Case Study",
        "url": "/projects/attendance-app"
      },
      {
        "label": "Explore All 18 Projects",
        "url": "/projects"
      }
    ]
  }
},

  QR_DECODE_DEEPDIVE: {
  "id": {
    "title": "Mesin Pemindaian Barcode Sub-Detik pada QR Scanner",
    "text": "**Kecepatan Pemindaian Kode QR dan Pencegahan Tiket Ganda**\n\nAplikasi QR Guest Manager dirancang untuk gerbang masuk acara bervolume tinggi:\n\n* **Kecepatan Dekode di Bawah 200 Milidetik:** Memproses aliran kamera smartphone secara instan untuk membaca QR code dalam hitungan sepersekian detik.\n* **Dukungan Kondisi Cahaya Redup:** Mengaktifkan lampu flash otomatis dan optimasi kontras untuk memindai kode di ruangan acara yang remang-remang.\n* **Pencegahan Tiket Masuk Ganda:** Sistem langsung mengunci kode tiket yang sudah dipindai, memunculkan peringatan merah jika tiket dicoba pakai ulang.\n* **Umpan Balik Haptik dan Audio:** Mengeluarkan getaran dan suara bip yang jelas untuk mengonfirmasi bahwa tamu telah berhasil masuk.",
    "links": [
      {
        "label": "Detail Proyek QR Scanner",
        "url": "/projects/qr-scanner"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Sub-Second Barcode Decoding Engine in QR Scanner",
    "text": "**High-Speed Sub-200ms QR Barcode Decoding & Duplicate Prevention**\n\nQR Guest Manager was built for high-throughput event registration gates:\n\n* **Sub-200ms Frame Processing:** Parsing continuous camera feeds in fractions of a second for instantaneous badge validation.\n* **Low-Light Optical Optimization:** Automatic camera torch toggling and contrast filters scanning screens in dimly lit auditorium settings.\n* **Duplicate Admission Prevention:** Instantly locking scanned ticket tokens and displaying red warning alerts if a badge is presented twice.\n* **Haptic & Audio Validation Cues:** Delivering distinct sound chimes and vibration pulses confirming successful guest admission.",
    "links": [
      {
        "label": "QR Scanner Project Overview",
        "url": "/projects/qr-scanner"
      },
      {
        "label": "Explore All 18 Software Projects",
        "url": "/projects"
      }
    ]
  }
},

  QR_CHECKIN_DEEPDIVE: {
  "id": {
    "title": "Validasi Tiket dan Manajemen Tamu Instan pada QR Scanner",
    "text": "**Manajemen Daftar Tamu dan Sinkronisasi Check-In Acara**\n\nQR Guest Manager mempermudah panitia memantau kehadiran peserta seminar dan festival:\n\n* **Sinkronisasi Buku Tamu Real-Time:** Jumlah tamu yang telah masuk langsung terhitung dan terperbarui di layar panitia secara langsung.\n* **Pencarian Manual Cepat:** Jika tamu kehilangan kode QR, panitia dapat mencari nama peserta atau instansi asal dalam hitungan detik.\n* **Pemberitahuan Kategori Tamu:** Menampilkan label khusus seperti VIP, Pembicara, atau Peserta Reguler saat kartu tamu dipindai.\n* **Ekspor Laporan Kehadiran:** Menghasilkan rekap data kehadiran dalam format file spreadsheet untuk evaluasi pasca-acara.",
    "links": [
      {
        "label": "Detail Proyek QR Scanner",
        "url": "/projects/qr-scanner"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Instant Ticket Validation & Guest Roster Sync in QR Scanner",
    "text": "**Live Guest Roster Management & Real-Time Event Admission**\n\nQR Guest Manager streamlines event entry logistics for campus conferences and summits:\n\n* **Real-Time Headcount Counter:** Live attendance gauges displaying current checked-in guests versus total registrants in real time.\n* **High-Speed Manual Roster Lookup:** Allowing registration teams to find attendees by name, phone, or organization if badges are misplaced.\n* **Tiered Attendee Badging Alerts:** Displaying clear colored flags identifying VIPs, Keynote Speakers, and Standard Participants upon scan.\n* **Post-Event Audit Export:** Exporting verified attendance logs into structured spreadsheet formats for post-event sponsor reporting.",
    "links": [
      {
        "label": "QR Scanner Case Study",
        "url": "/projects/qr-scanner"
      },
      {
        "label": "Explore All 18 Projects",
        "url": "/projects"
      }
    ]
  }
},

  NEWS_API_DEEPDIVE: {
  "id": {
    "title": "Agregasi Multi-Sumber Berita CNN dan Integrasi REST API pada News App",
    "text": "**Integrasi REST API dan Agregasi Berita Multi-Sumber pada News App**\n\nNews App mengumpulkan berita terkini dari berbagai media terpercaya:\n\n* **Konsumsi API Berita Terstruktur:** Menghubungkan aplikasi dengan endpoint RESTful media global seperti CNN dan portal berita nasional.\n* **Kategorisasi Berita Otomatis:** Membagi artikel ke dalam kategori Teknologi, Bisnis, Olahraga, Politik, dan Gaya Hidup secara rapi.\n* **Penyaringan Konten Duplikat:** Membersihkan berita yang berulang untuk menyajikan informasi yang relevan dan padat bagi pembaca.\n* **Format Artikel Ramah Mata:** Menampilkan berita dalam tata letak editorial yang bersih dan bebas dari iklan yang mengganggu.",
    "links": [
      {
        "label": "Detail Proyek News App",
        "url": "/projects/news-app"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Multi-Source CNN News Integration & RESTful Parsing in News App",
    "text": "**Multi-Source News Aggregation & Normalized REST Architecture in News App**\n\nNews App curates breaking headlines from world-class journalism outlets:\n\n* **High-Volume REST API Integration:** Connecting to verified news endpoints including CNN and global syndicates over secure JSON feeds.\n* **Categorized Feed Filtering:** Automatically grouping articles into Technology, Finance, Sports, Politics, and Global Affairs channels.\n* **Deduplication Pipelines:** Filtering repetitive wire dispatches to present users with clean, concise breaking developments.\n* **Distraction-Free Editorial Layout:** Presenting long-form reporting with clean typography and zero intrusive popups.",
    "links": [
      {
        "label": "News App Project Details",
        "url": "/projects/news-app"
      },
      {
        "label": "Explore All 18 Software Projects",
        "url": "/projects"
      }
    ]
  }
},

  NEWS_CACHE_DEEPDIVE: {
  "id": {
    "title": "Penyimpanan Offline dan Manajemen State Penanda Berita pada News App",
    "text": "**Manajemen State Reaktif dan Penyimpanan Offline Berita**\n\nNews App memastikan pengguna dapat membaca artikel favorit di mana saja:\n\n* **Penyimpanan Lokal Berita Pilihan:** Artikel yang ditandai disimpan ke memori lokal ponsel sehingga dapat dibaca kembali saat offline.\n* **Manajemen State Reaktif Cepat:** Menambahkan atau menghapus bookmark berita secara instan tanpa ada jeda animasi antarmuka.\n* **Pencarian Cepat dalam Artikel Tersimpan:** Mencari kata kunci dalam kumpulan artikel yang telah disimpan pengguna.\n* **Mode Hemat Data Seluler:** Mengoptimalkan unduhan gambar berita agar menghemat kuota internet pengguna ponsel.",
    "links": [
      {
        "label": "Detail Proyek News App",
        "url": "/projects/news-app"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Reactive Bookmarking & Offline Article Caching in News App",
    "text": "**Reactive State Management & Offline Local Caching in News App**\n\nNews App empowers users to read their favorite investigative reporting anywhere:\n\n* **Local Offline Reading Cache:** Persisting bookmarked long-form articles to device storage for offline reading during flights or commutes.\n* **Reactive Bookmark State:** Instantly toggling bookmark pins across lists with zero UI stutter or latency.\n* **Offline Article Full-Text Search:** Querying indexed articles offline directly from local device databases.\n* **Data-Saver Mobile Mode:** Selective image pre-fetching to preserve mobile cellular data packages.",
    "links": [
      {
        "label": "News App Architecture Details",
        "url": "/projects/news-app"
      },
      {
        "label": "Explore All 18 Projects",
        "url": "/projects"
      }
    ]
  }
},

  QURAN_AUDIO_DEEPDIVE: {
  "id": {
    "title": "Pemutar Murottal Audio Berkualitas Tinggi pada Quran App",
    "text": "**Pemutar Audio Murottal Al-Quran Multi-Qari pada Quran App**\n\nQuran App dilengkapi pemutar audio resolusi tinggi untuk mempermudah tadarus dan hafalan:\n\n* **Pilihan Qari Internasional Terkemuka:** Mendengarkan lantunan merdu dari Qari ternama seperti Syaikh Mishary Rashid Alafasy dan Syaikh As-Sudais.\n* **Penyorotan Ayat Bersamaan (Audio Sync):** Ayat yang sedang dibacakan otomatis disorot dengan warna kontras untuk memandu hafalan pengguna.\n* **Fitur Putar Ulang Ayat:** Pengguna dapat mengulang satu ayat tertentu berkali-kali untuk memperkuat ingatan hafalan Al-Quran.\n* **Pemutaran Latar Belakang:** Audio murottal tetap berjalan lancar saat layar ponsel terkunci atau saat membuka aplikasi lain.",
    "links": [
      {
        "label": "Detail Proyek Quran App",
        "url": "/projects/quran-app"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "High-Bitrate Audio Recitation Player in Quran App",
    "text": "**High-Bitrate Multi-Qari Audio Streaming & Memorization Player in Quran App**\n\nQuran App delivers an enriching audio recitation companion for daily recitation and memorization:\n\n* **Acclaimed Global Qari Selection:** Streaming crystal-clear recitations from world-renowned Qaris including Mishary Rashid Alafasy and Abdul Rahman Al-Sudais.\n* **Synchronized Verse Highlighting:** Real-time visual tracking highlighting current verses in sync with reciter audio playback.\n* **Single-Verse Memorization Loops:** Allowing learners to loop specific verses continuously to solidify memorization (tahfidz).\n* **Background Audio Controls:** Uninterrupted playback when mobile screens are locked or while switching between apps.",
    "links": [
      {
        "label": "Quran App Project Details",
        "url": "/projects/quran-app"
      },
      {
        "label": "Explore All 18 Software Projects",
        "url": "/projects"
      }
    ]
  }
},

  QURAN_TYPO_DEEPDIVE: {
  "id": {
    "title": "Tipografi Utsmani dan Pencarian Surat Cepat pada Quran App",
    "text": "**Tipografi Arab Utsmani dan Mesin Pencarian Surat Al-Quran**\n\nQuran App mengutamakan kenyamanan dan kejelasan membaca mushaf digital:\n\n* **Huruf Arab Utsmani Standar Madinah:** Menggunakan font Arab dengan ligatur harakat yang presisi dan mudah dibaca di berbagai resolusi layar.\n* **Pencarian Cepat Surat dan Ayat:** Mencari surat berdasarkan nama latin, nomor surat, atau kata kunci terjemahan bahasa Indonesia dalam hitungan detik.\n* **Terjemahan dan Tafsir Standar Kemenag:** Menyajikan terjemahan resmi Kementerian Agama RI berdampingan dengan teks Arab asli.\n* **Pengaturan Ukuran Huruf:** Pengguna dapat menyesuaikan ukuran huruf Arab dan terjemahan sesuai kenyamanan mata.",
    "links": [
      {
        "label": "Detail Proyek Quran App",
        "url": "/projects/quran-app"
      },
      {
        "label": "Lihat Semua 18 Proyek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Uthmani Arabic Typography & Surah Search Engine in Quran App",
    "text": "**Uthmani Arabic Typography Engine & Instant Surah Search in Quran App**\n\nQuran App focuses on visual serenity and typographic clarity for digital recitation:\n\n* **Authentic Madinah Uthmani Typography:** High-resolution Arabic font ligatures and precise diacritical marks ensuring clear reading across screens.\n* **Instant Surah & Ayah Search Engine:** Querying surahs by name, chapter number, or translated Indonesian keyword in milliseconds.\n* **Verified Ministry of Religious Affairs Translation:** Official Indonesian Ministry of Religious Affairs translations presented side-by-side with original scripture.\n* **Customizable Reader Typography:** Allowing readers to adjust Arabic font scales and line heights for maximum reading comfort.",
    "links": [
      {
        "label": "Quran App Case Study",
        "url": "/projects/quran-app"
      },
      {
        "label": "Explore All 18 Software Projects",
        "url": "/projects"
      }
    ]
  }
},

  LAZUARDI_CURRICULUM_DEEPDIVE: {
  "id": {
    "title": "Kurikulum Praktis Rekayasa Web Frontend di SMA Lazuardi GCS",
    "text": "**Kurikulum Praktis Web Development untuk Siswa SMA Lazuardi GCS**\n\nSebagai Web Development Instructor di SMA Lazuardi GCS, Adyvka menyusun silabus aplikatif:\n\n* **Fondasi Semantik HTML5 dan CSS Grid:** Membimbing siswa membangun tata letak web modern yang responsif dari nol tanpa generator instan.\n* **Logika Interaktif JavaScript:** Mengajarkan manipulasi DOM, penanganan event klik, dan validasi form interaktif.\n* **Pengenalan Alur Kerja Git:** Membiasakan siswa sekolah menengah menggunakan version control untuk menyimpan proyek koding mereka.\n* **Pembangunan Portofolio Siswa:** Setiap siswa berhasil meluncurkan website portofolio pribadi aktif di akhir masa bimbingan.",
    "links": [
      {
        "label": "Detail Pengalaman di SMA Lazuardi",
        "url": "/experience/sma-lazuardi-gcs-web-development-instructor"
      },
      {
        "label": "Pelatihan Guru di SMPN 25 Depok",
        "url": "/experience"
      }
    ]
  },
  "en": {
    "title": "Frontend Web Curriculum & Pedagogy at SMA Lazuardi GCS",
    "text": "**Applied Frontend Web Engineering Pedagogy at SMA Lazuardi GCS**\n\nAs Web Development Instructor at SMA Lazuardi GCS, Adyvka designed an industry-aligned syllabus:\n\n* **Semantic HTML5 & Modern CSS Grid Layouts:** Coaching senior high students to construct responsive mobile-first web pages natively without templates.\n* **Interactive JavaScript DOM Logic:** Guiding learners through event handlers, interactive input validation, and asynchronous DOM manipulations.\n* **Early Version Control Habits:** Imparting fundamental Git CLI commands, commits, and GitHub repository hosting for student codebases.\n* **Live Student Portfolio Deployments:** Mentoring every student squad to successfully build and deploy active personal portfolio websites by course conclusion.",
    "links": [
      {
        "label": "SMA Lazuardi Instructor Details",
        "url": "/experience/sma-lazuardi-gcs-web-development-instructor"
      },
      {
        "label": "Faculty Training at SMPN 25 Depok",
        "url": "/experience"
      }
    ]
  }
},

  SMPN45_CURRICULUM_DEEPDIVE: {
  "id": {
    "title": "Kurikulum Logika Pemrograman Aplikasi Mobile di SMPN 45 Jakarta",
    "text": "**Kurikulum Pemrograman Aplikasi Mobile Siswa SMPN 45 Jakarta**\n\nAdyvka melatih siswa sekolah menengah pertama memahami rekayasa perangkat lunak mobile:\n\n* **Logika Pemrograman Visual:** Mengubah konsep algoritma yang rumit menjadi blok logika visual yang mudah dipahami murid usia remaja.\n* **Desain Antarmuka Mobile:** Mengajarkan penyusunan tombol, gambar, dan navigasi layar yang rapi pada smartphone.\n* **Pengembangan Game Kuis Interaktif:** Murid diajak membuat aplikasi kuis edukasi matematika dan sains berbasis Android.\n* **Membangkitkan Minat Teknologi Sejak Dini:** Menginspirasi puluhan siswa untuk melanjutkan peminatan ke bidang rekayasa perangkat lunak.",
    "links": [
      {
        "label": "Detail Pengalaman di SMPN 45 Jakarta",
        "url": "/experience/smpn-45-app-development-instructor"
      },
      {
        "label": "Lihat Semua 20 Pengalaman",
        "url": "/experience"
      }
    ]
  },
  "en": {
    "title": "Mobile App Logic & Visual Coding Curriculum at SMPN 45 Jakarta",
    "text": "**Mobile Application Development Pedagogy at SMPN 45 Jakarta**\n\nAdyvka introduced foundational mobile engineering logic to junior high school students:\n\n* **Visual Algorithmic Thinking:** Demystifying abstract programming conditionals and variables into visual block-based logic.\n* **Mobile Interface Composition:** Guiding students to arrange interactive touch buttons, asset layouts, and view transitions ergonomically.\n* **Educational App Projects:** Mentoring students to build functional Android math and science interactive quiz applications.\n* **Early Career Inspiration:** Igniting long-term passion among dozens of young students to pursue software engineering and STEM disciplines.",
    "links": [
      {
        "label": "SMPN 45 Instructor Case Study",
        "url": "/experience/smpn-45-app-development-instructor"
      },
      {
        "label": "Explore All 20 Experiences",
        "url": "/experience"
      }
    ]
  }
},

  SMPINS_CURRICULUM_DEEPDIVE: {
  "id": {
    "title": "Kurikulum Logika Komputasi dan Antarmuka Mobile di SMP INS Depok",
    "text": "**Pedagogi Logika Komputasi dan Antarmuka Mobile di SMP INS Depok**\n\nPelatihan intensif koding mobile untuk membangun pola pikir pemecahan masalah siswa:\n\n* **Dekomposisi Masalah Berpikir Komputasional:** Melatih siswa memecah tantangan besar menjadi langkah-langkah logika instruksi terstruktur.\n* **Prinsip Dasar Desain UI/UX:** Memperkenalkan hierarki visual, keterbacaan teks, dan pemilihan warna pada aplikasi mobile.\n* **Interaktivitas Berbasis Event:** Memahami konsep event handling seperti sentuhan layar, getaran, dan transisi layar ponsel.\n* **Presentasi Karya Akhir:** Siswa mempresentasikan prototipe aplikasi mobile buatan mereka di depan dewan guru dan teman sekelas.",
    "links": [
      {
        "label": "Detail Pengalaman di SMP INS Depok",
        "url": "/experience/smp-ins-depok-app-development-instructor"
      },
      {
        "label": "Lihat Semua 20 Pengalaman",
        "url": "/experience"
      }
    ]
  },
  "en": {
    "title": "Computational Logic & Mobile Interface Pedagogy at SMP INS Depok",
    "text": "**Computational Logic & Mobile Interface Architecture at SMP INS Depok**\n\nIntensive youth mobile coding training fostering structured algorithmic problem-solving:\n\n* **Computational Decomposition:** Training young learners to break down complex project goals into structured conditional logic routines.\n* **Fundamental UI/UX Design Principles:** Teaching visual hierarchy, font legibility, and contrast considerations for mobile screen layouts.\n* **Event-Driven Interaction Architecture:** Guiding students through tap listeners, dynamic variable updates, and multi-screen navigation.\n* **Final Project Presentations:** Coaching students to present their working mobile prototypes live before school faculty and peers.",
    "links": [
      {
        "label": "SMP INS Depok Instructor Details",
        "url": "/experience/smp-ins-depok-app-development-instructor"
      },
      {
        "label": "Explore All 20 Experiences",
        "url": "/experience"
      }
    ]
  }
},

  SEMUTSEMUT_CURRICULUM_DEEPDIVE: {
  "id": {
    "title": "Mekanika Game 2D Scratch dan Problem Solving di Sekolah Alam Semut-Semut",
    "text": "**Kurikulum Pembuatan Game 2D Scratch di Sekolah Alam Semut-Semut**\n\nAdyvka melatih daya imajinasi komputasi siswa melalui platform visual Scratch:\n\n* **Siklus Game Loop dan Animasi Sprite:** Mengajarkan frame animasi karakter, pergerakan koordinat sumbu X dan Y, serta pergantian kostum.\n* **Deteksi Tumbukan dan Fisika Sederhana:** Mengimplementasikan simulasi gravitasi, rintangan melompat, dan batas arena permainan.\n* **Sistem Poin dan Kemenangan:** Membuat variabel skor, nyawa pemain, dan kondisi tamat permainan yang seru.\n* **Pendekatan Kreatif Sekolah Alam:** Menggabungkan tema alam dan satwa ke dalam cerita game petualangan yang mendidik.",
    "links": [
      {
        "label": "Detail Pengalaman di Semut-Semut",
        "url": "/experience/semut-semut-the-natural-school-game-development-instructor"
      },
      {
        "label": "Buku Pemrograman Karya Adyvka",
        "url": "/publications/buku-membuat-game-tanpa-coding"
      }
    ]
  },
  "en": {
    "title": "Scratch 2D Game Mechanics & Creative Problem Solving at Semut-Semut School",
    "text": "**Creative 2D Game Logic & Creative Problem Solving at Semut-Semut Natural School**\n\nAdyvka channeled children's creative imagination through structured Scratch game programming:\n\n* **Game Loop & Sprite Mechanics:** Teaching sprite Cartesian X/Y coordinate translation, costume looping, and dynamic keyboard controls.\n* **Collision Detection & Lightweight Physics:** Programming jumping velocities, boundary detection, and obstacle collision triggers.\n* **Scoring & Health Systems:** Implementing dynamic score counters, player lives, sound effects, and multi-level progression states.\n* **Natural School Environmental Themes:** Inspiring children to craft adventure games centered around wildlife preservation and ecological themes.",
    "links": [
      {
        "label": "Semut-Semut School Instructor Details",
        "url": "/experience/semut-semut-the-natural-school-game-development-instructor"
      },
      {
        "label": "Adyvka Published Coding Books",
        "url": "/publications/buku-membuat-game-tanpa-coding"
      }
    ]
  }
},

  HAJRABYADL_CURRICULUM_DEEPDIVE: {
  "id": {
    "title": "Tata Letak Web Modern dan Koding Responsif di Hajrabyadl",
    "text": "**Kurikulum Web Development Responsif di Hajrabyadl**\n\nPembelajaran intensif teknologi web untuk mencetak talenta programmer muda mandiri:\n\n* **Penguasaan CSS Flexbox dan Grid:** Memahami penataan elemen halaman web yang fleksibel di berbagai ukuran layar monitor dan gawai.\n* **Praktik Clean Coding:** Mengajarkan penamaan kelas CSS yang rapi, struktur folder yang teratur, dan penulisan kode tanpa redundansi.\n* **Integrasi Formulir dan Kontak:** Membuat formulir pemesanan dan pengiriman pesan yang langsung terhubung ke layanan email.\n* **Mentoring dari Nol hingga Online:** Memandu siswa dari hari pertama tidak mengenal koding hingga berhasil meluncurkan situs web pertama mereka.",
    "links": [
      {
        "label": "Detail Pengalaman di Hajrabyadl",
        "url": "/experience/hajrabyadl-web-development-instructor"
      },
      {
        "label": "Lihat Semua 20 Pengalaman",
        "url": "/experience"
      }
    ]
  },
  "en": {
    "title": "Modern Web Layouts & Responsive Coding Curriculum at Hajrabyadl",
    "text": "**Modern Responsive Web Engineering Pedagogy at Hajrabyadl**\n\nIntensive web development instruction guiding students from complete beginners to active web creators:\n\n* **Flexbox & Grid Layout Mastery:** Imparting intuitive spatial mechanics for fluid layouts adapting gracefully from smartphones to desktops.\n* **Clean Coding Habits:** Enforcing semantic CSS naming, logical repository structure, and disciplined code formatting.\n* **Interactive Form Engineering:** Building functional contact and inquiry forms sending validated payloads to webhook endpoints.\n* **Zero-to-Launch Mentorship:** Personally guiding students from their very first HTML tag to deploying functional websites live on the public internet.",
    "links": [
      {
        "label": "Hajrabyadl Instructor Details",
        "url": "/experience/hajrabyadl-web-development-instructor"
      },
      {
        "label": "Explore All 20 Experiences",
        "url": "/experience"
      }
    ]
  }
},

  ALANSHAR_DESIGN_FIGMA_DEEPDIVE: {
  "id": {
    "title": "Desain Sistem UI/UX dan Wireframing Figma di Pesantren Al-Anshar",
    "text": "**Kurikulum Desain Aplikasi dan Wireframing Figma di Pesantren Al-Anshar**\n\nAdyvka melatih santri mendesain produk digital modern berstandar industri:\n\n* **Penguasaan Tools Figma:** Mengajarkan penggunaan Auto Layout, Components, Variants, dan Style Guide warna serta tipografi.\n* **Wireframing Rendah hingga Tinggi (Lo-Fi to Hi-Fi):** Mengubah sketsa ide di atas kertas menjadi prototipe antarmuka digital yang interaktif.\n* **Desain Berpusat pada Pengguna (User-Centered Design):** Melatih empati santri untuk merancang aplikasi yang mudah digunakan oleh masyarakat luas.\n* **Pameran Karya Santri:** Seluruh santri sukses mempresentasikan prototipe desain aplikasi mobile islami di akhir sesi pelatihan.",
    "links": [
      {
        "label": "Detail Pengalaman Desain Al-Anshar",
        "url": "/experience/al-anshar-app-design-instructor"
      },
      {
        "label": "Pengalaman Mengajar Game di Al-Anshar",
        "url": "/experience/al-anshar-game-development-instructor"
      }
    ]
  },
  "en": {
    "title": "UI/UX Design Systems & Figma Wireframing at Al-Anshar",
    "text": "**Digital Product Design Systems & Figma Prototyping at Al-Anshar Islamic School**\n\nAdyvka trained boarding school students in modern industry-grade digital UI/UX design tools:\n\n* **Figma Tooling Fundamentals:** Auto Layout mechanics, reusable components, interactive variants, and global color and typographic styles.\n* **Lo-Fi to Hi-Fi Prototyping:** Transforming rough pencil wireframes into interactive clickable high-fidelity mobile prototypes.\n* **User-Centered Empathy:** Instilling design empathy so students create intuitive interfaces solving real-world community problems.\n* **Student Design Showcase:** Every student completed and presented an interactive mobile prototype addressing social and Islamic educational needs.",
    "links": [
      {
        "label": "Al-Anshar App Design Instructor Details",
        "url": "/experience/al-anshar-app-design-instructor"
      },
      {
        "label": "Al-Anshar Game Development Experience",
        "url": "/experience/al-anshar-game-development-instructor"
      }
    ]
  }
},

  ALANSHAR_GAME_SCRATCH_DEEPDIVE: {
  "id": {
    "title": "Mekanika Fisika dan Logika Game Scratch 2D di Pesantren Al-Anshar",
    "text": "**Kurikulum Logika dan Fisika Game 2D di Pesantren Al-Anshar**\n\nPelatihan logika komputasi santri melalui pembuatan game interaktif:\n\n* **Simulasi Fisika 2D:** Mengajarkan gravitasi buatan, akselerasi kecepatan, dan deteksi tepi layar pada game petualangan.\n* **Kondisi Kemenangan dan Kekalahan:** Memprogram transisi antar-level permainan dengan rintangan bertingkat yang menantang.\n* **Pemanfaatan Suara dan Visual:** Memasukkan efek suara dan musik latar untuk membangun ketegangan dan keseruan permainan.\n* **Menumbuhkan Santri Kreatif Digital:** Membuktikan bahwa santri pesantren mampu bersaing menjadi pencipta teknologi masa depan.",
    "links": [
      {
        "label": "Detail Pengalaman Game Al-Anshar",
        "url": "/experience/al-anshar-game-development-instructor"
      },
      {
        "label": "Pengalaman Desain di Al-Anshar",
        "url": "/experience/al-anshar-app-design-instructor"
      }
    ]
  },
  "en": {
    "title": "2D Game Physics & Scratch Collision Logic at Al-Anshar",
    "text": "**2D Interactive Game Physics & Logic Mechanics at Al-Anshar**\n\nTraining Islamic boarding school students in computational thinking through interactive game authoring:\n\n* **2D Physics Simulation:** Custom gravity acceleration, frictionless horizontal velocities, and boundary bounds detection.\n* **Multi-Stage Game Progression:** Engineering win/loss state loops, score multipliers, and dynamic multi-level difficulty jumps.\n* **Audio & Visual Synthesis:** Integrating sound effects, score badges, and dynamic animations to heighten player immersion.\n* **Empowering Muslim Youth Creators:** Proving that boarding school students can excel as proactive software and digital game builders.",
    "links": [
      {
        "label": "Al-Anshar Game Instructor Details",
        "url": "/experience/al-anshar-game-development-instructor"
      },
      {
        "label": "Al-Anshar App Design Experience",
        "url": "/experience/al-anshar-app-design-instructor"
      }
    ]
  }
},

  YASMINE_CURRICULUM_DEEPDIVE: {
  "id": {
    "title": "Komposisi Visual, Tipografi dan Seni Digital di MTs Yasmine",
    "text": "**Kurikulum Komposisi Visual dan Desain Grafis di MTs Yasmine**\n\nAdyvka membimbing murid madrasah tsanawiyah mendalami komunikasi visual digital:\n\n* **Prinsip Komposisi Visual:** Mengajarkan keseimbangan bidang, rasio kontras warna, dan titik fokus mata pada sebuah karya grafis.\n* **Hierarki Tipografi Terarah:** Memilih jenis font judul dan teks isi agar poster mudah terbaca dari jarak pandang tertentu.\n* **Desain Poster Acara dan Media Sosial:** Murid membuat poster kegiatan sekolah dan konten publikasi digital berestetika tinggi.\n* **Membangun Percaya Diri Kreatif:** Mengarahkan bakat seni siswa ke dalam keterampilan digital yang memiliki nilai komersial nyata.",
    "links": [
      {
        "label": "Detail Pengalaman di MTs Yasmine",
        "url": "/experience/mts-yasmine-design-instructor"
      },
      {
        "label": "Lihat Semua 20 Pengalaman",
        "url": "/experience"
      }
    ]
  },
  "en": {
    "title": "Visual Composition, Branding & Digital Art at MTs Yasmine",
    "text": "**Visual Composition & Digital Graphic Design Pedagogy at MTs Yasmine**\n\nAdyvka guided junior madrasah students to master foundational digital visual communication:\n\n* **Visual Compositional Balance:** Instructing focal points, golden ratio framing, and optical contrast to guide viewer attention.\n* **Typographic Hierarchy & Pairings:** Selecting headline and body font weights ensuring optimal legibility across distance and digital displays.\n* **Event Posters & Social Assets:** Students created vibrant school festival posters and digital announcements meeting high aesthetic standards.\n* **Monetizable Creative Confidence:** Channeling students' artistic creativity into practical digital design skills with real-world industry utility.",
    "links": [
      {
        "label": "MTs Yasmine Instructor Details",
        "url": "/experience/mts-yasmine-design-instructor"
      },
      {
        "label": "Explore All 20 Experiences",
        "url": "/experience"
      }
    ]
  }
},

  GRIYYA_CURRICULUM_DEEPDIVE: {
  "id": {
    "title": "Logika Komputasi dan Berpikir Algoritmik di Griyya Sunnah",
    "text": "**Kurikulum Logika Komputasi dan Algoritma di Griyya Sunnah**\n\nPendidikan logika dasar untuk membentuk pola pikir kritis anak-anak sejak usia dini:\n\n* **Berpikir Algoritmik Prosedural:** Membiasakan siswa menyusun urutan langkah kerja pemecahan masalah secara runtut dan teruji.\n* **Pencabangan Kondisional (If-Else):** Memahami logika pengambilan keputusan dalam instruksi komputasi secara menyenangkan.\n* **Perulangan dan Loop Efisien:** Menjelaskan konsep otomatisasi pekerjaan berulang menggunakan mekanisme loop pemrograman.\n* **Etika Teknologi Islami:** Menanamkan nilai amanah dan tanggung jawab moral dalam menggunakan perangkat teknologi digital.",
    "links": [
      {
        "label": "Detail Pengalaman di Griyya Sunnah",
        "url": "/experience/griyya-sunnah-game-development-instructor"
      },
      {
        "label": "Buku Pemrograman Karya Adyvka",
        "url": "/publications/buku-membuat-game-tanpa-coding"
      }
    ]
  },
  "en": {
    "title": "Computational Logic & Algorithmic Thinking at Griyya Sunnah",
    "text": "**Foundational Algorithmic Thinking & Computational Logic at Griyya Sunnah**\n\nEarly education in computer science fundamentals cultivating structured problem-solving:\n\n* **Procedural Algorithmic Sequencing:** Guiding young minds to formulate step-by-step logic workflows addressing complex challenges.\n* **Conditional Branching Mastery:** Understanding logical decision gates (if-else branching) through gamified visual metaphors.\n* **Loops & Automation Efficiency:** Demonstrating how iterative loops automate repetitive tasks, saving time and human effort.\n* **Ethical Technology Values:** Instilling integrity and social responsibility in leveraging computer science for community empowerment.",
    "links": [
      {
        "label": "Griyya Sunnah Instructor Details",
        "url": "/experience/griyya-sunnah-game-development-instructor"
      },
      {
        "label": "Adyvka's Published Programming Books",
        "url": "/publications/buku-membuat-game-tanpa-coding"
      }
    ]
  }
},

  ITFEST_OPS_DEEPDIVE: {
  "id": {
    "title": "Operasi Logistik dan Koordinasi Lomba Nasional IT Fest 2025",
    "text": "**Manajemen Operasi dan Logistik Acara Kompetisi Nasional IT Fest 2025**\n\nSebagai Koordinator Acara Lomba IT FEST 2025, Adyvka mengendalikan operasional hajatan besar:\n\n* **Manajemen Multi-Track Kompetisi:** Mengkoordinasikan cabang lomba Web Development, Desain UI/UX, dan Jaringan Komputer secara bersamaan.\n* **Pengaturan Jadwal dan Waktu Ketat:** Memastikan seluruh rangkaian pembukaan, babak penyisihan, dan presentasi final berjalan tepat waktu.\n* **Kesiapan Infrastruktur Teknis Lab:** Memeriksa kesiapan jaringan lokal, proyektor, dan kestabilan daya listrik selama perlombaan berlangsung.\n* **Layanan Peserta Seluruh Indonesia:** Mengelola komunikasi dan kebutuhan ratusan kontingen peserta lomba dari berbagai sekolah nasional.",
    "links": [
      {
        "label": "Detail Pengalaman Koordinator IT Fest",
        "url": "/experience/it-fest-2025-competition-event-coordinator"
      },
      {
        "label": "Lihat Semua 20 Pengalaman",
        "url": "/experience"
      }
    ]
  },
  "en": {
    "title": "National Hackathon Operations & Event Logistics at IT Fest 2025",
    "text": "**National Competition Operations & Logistics Coordination at IT Fest 2025**\n\nAs Competition Event Coordinator for IT FEST 2025, Adyvka commanded nationwide tournament operations:\n\n* **Multi-Track Competition Governance:** Synchronizing simultaneous heats across Web Development, UI/UX Design, and Networking tracks.\n* **Strict Production Timing:** Ensuring zero schedule overruns across opening ceremonies, hackathon sprints, and final stage presentations.\n* **Technical Lab Infrastructure Readiness:** Rigorously stress-testing local server networks, presentation displays, and high-speed campus internet.\n* **Nationwide Contingent Relations:** Managing logistics, onboarding packets, and inquiries for hundreds of student competitors across Indonesia.",
    "links": [
      {
        "label": "IT Fest Coordinator Case Study",
        "url": "/experience/it-fest-2025-competition-event-coordinator"
      },
      {
        "label": "Explore All 20 Experiences",
        "url": "/experience"
      }
    ]
  }
},

  OSIS_PROJECTS_DEEPDIVE: {
  "id": {
    "title": "Kepemimpinan 10+ Inisiatif Unggulan Divisi Acara OSIS SMK IDN",
    "text": "**Pencapaian Kepemimpinan Divisi Acara OSIS SMK IDN Boarding School**\n\nSebagai Ketua Divisi Acara OSIS, Adyvka memimpin perancangan dan eksekusi agenda besar kampus:\n\n* **Mengarahkan 10+ Program Kerja Akbar:** Memimpin penyelenggaraan festival teknologi, pekan olahraga santri, malam pentas seni, dan perkemahan kepemimpinan.\n* **Manajemen Delegasi Tim Berdisiplin:** Mendelegasikan tugas ke puluhan panitia lintas divisi mulai dari tim perlengkapan, konsumsi, hingga keamanan.\n* **Penyelesaian Masalah Cepat di Lapangan:** Mengatasi kendala teknis cuaca dan pergeseran jadwal dadakan dengan sigap dan tenang.\n* **Membangun Budaya Kerja Kolektif:** Memupuk semangat gotong royong dan rasa kepemilikan tinggi pada seluruh anggota panitia santri.",
    "links": [
      {
        "label": "Detail Pengalaman Ketua Divisi Acara OSIS",
        "url": "/experience/idn-student-council-event-division-leader"
      },
      {
        "label": "Lihat Semua 20 Pengalaman",
        "url": "/experience"
      }
    ]
  },
  "en": {
    "title": "Directing 10+ Flagship Campus Initiatives in IDN Student Council",
    "text": "**Directing 10+ Flagship Initiatives as Student Council Event Leader**\n\nAs Event Division Leader for IDN Boarding School Student Council, Adyvka directed major campus productions:\n\n* **Orchestrating 10+ Flagship Campus Summits:** Directing technology showcases, athletic tournaments, cultural galas, and leadership summits.\n* **Disciplined Team Task Delegation:** Assigning roles across dozens of committee officers spanning stage equipment, catering, media, and security.\n* **Live Contingency Resolution:** Rapidly rerouting outdoor schedules indoors during heavy downpours with zero audience panic.\n* **Fostering High-Ownership Team Culture:** Cultivating intense peer trust, discipline, and communal excellence across student leadership cohorts.",
    "links": [
      {
        "label": "Student Council Event Leader Details",
        "url": "/experience/idn-student-council-event-division-leader"
      },
      {
        "label": "Explore All 20 Experiences",
        "url": "/experience"
      }
    ]
  }
},

  BARMUS_IMPACT_DEEPDIVE: {
  "id": {
    "title": "Dampak Sosial dan Pemberdayaan Masyarakat Relawan Barmus Voluntrip",
    "text": "**Aksi Nyata Sosial dan Edukasi Masyarakat pada Barmus Voluntrip**\n\nAdyvka terjun langsung sebagai relawan penyelenggara kegiatan sosial masyarakat desa:\n\n* **Penyelenggaraan Edukasi Anak Pedesaan:** Mengadakan kelas literasi digital dan motivasi belajar untuk anak-anak di pelosok perkampungan.\n* **Penyaluran Bantuan Perlengkapan Belajar:** Mengkoordinasikan paket bantuan buku, alat tulis, dan sarana belajar santri pelosok.\n* **Mobilisasi Logistik Lapangan:** Mengatur transportasi relawan, konsumsi bersama warga desa, dan pembagian pos kegiatan sosial.\n* **Menumbuhkan Kepekaan Sosial:** Mengasah rasa kepedulian nyata bahwa teknologi harus membawa manfaat bagi masyarakat bawah.",
    "links": [
      {
        "label": "Detail Pengalaman Barmus Voluntrip",
        "url": "/experience/barmus-voluntrip-volunteer-event-organizer"
      },
      {
        "label": "Pengalaman Live In Pedesaan",
        "url": "/experience/idn-boarding-school-live-in-rural-immersion"
      }
    ]
  },
  "en": {
    "title": "Social Impact & Community Empowerment Outreach at Barmus Voluntrip",
    "text": "**Grassroots Social Empowerment & Rural Youth Outreach at Barmus Voluntrip**\n\nAdyvka volunteered as an operational organizer mobilizing humanitarian outreach in rural villages:\n\n* **Rural Youth Literacy Classes:** Hosting interactive digital literacy sessions and educational workshops for underprivileged village children.\n* **Learning Aid Logistics Distribution:** Coordinating the delivery and handover of learning packs, stationery, and books directly to village students.\n* **Field Operations Management:** Organizing volunteer transit, community kitchen meals with villagers, and village elder liaison channels.\n* **Deep Social Responsibility:** Strengthening the conviction that technical capabilities must uplift underserved grassroots communities.",
    "links": [
      {
        "label": "Barmus Voluntrip Organizer Details",
        "url": "/experience/barmus-voluntrip-volunteer-event-organizer"
      },
      {
        "label": "Rural Immersion (Live In) Experience",
        "url": "/experience/idn-boarding-school-live-in-rural-immersion"
      }
    ]
  }
},

  LIVEIN_LABOR_DEEPDIVE: {
  "id": {
    "title": "Kerja Fisik Pertanian dan Ketangguhan Hidup Bersama Petani Tradisional",
    "text": "**Pengalaman Bertani Tradisional dan Resiliensi Hidup di Pedesaan**\n\nProgram Live In menguji daya tahan fisik dan mental Adyvka hidup bersama keluarga petani:\n\n* **Bekerja di Sawah Sebelum Fajar:** Turun langsung ke lumpur sawah untuk mencangkul tanah, menanam bibit padi, dan menyiangi gulma.\n* **Kesederhanaan Hidup Tanpa Fasilitas Modern:** Menginap di rumah bambu beralaskan tikar, memasak di atas tungku kayu bakar, dan mandi air pegunungan.\n* **Menghargai Setiap Butir Beras:** Merasakan langsung betapa beratnya tetesan keringat petani menghasilkan makanan bagi masyarakat perkotaan.\n* **Ketahanan Fisik dan Kerendahan Hati:** Membentuk ketangguhan jiwa yang tidak mudah mengeluh saat menghadapi tantangan hidup.",
    "links": [
      {
        "label": "Detail Pengalaman Live In Pedesaan",
        "url": "/experience/idn-boarding-school-live-in-rural-immersion"
      },
      {
        "label": "Pengalaman Survival Bisnis di Semarang",
        "url": "/experience/pt-intisel-semarang-business-life-survival"
      }
    ]
  },
  "en": {
    "title": "Agricultural Labor & Resilience Living with Traditional Farmers",
    "text": "**Traditional Agricultural Labor & Mental Resilience in Rural West Java**\n\nThe Rural Immersion (Live In) program placed Adyvka in the heart of traditional agrarian life:\n\n* **Pre-Dawn Muddy Paddy Labor:** Waking before dawn to wade into knee-deep mud alongside veteran farmers, hoeing soil, and planting rice shoots.\n* **Uncompromising Simplicity:** Living in bamboo-framed homes without modern luxuries, cooking over open firewood hearths, and bathing in mountain runoff.\n* **Reverence for Food & Labor:** Gaining profound visceral appreciation for the exhausting physical sacrifice required to produce food for modern cities.\n* **Uncomplaining Mental Fortitude:** Instilling deep humility and a resolute refusal to complain when confronting professional or physical fatigue.",
    "links": [
      {
        "label": "Rural Immersion Experience Case Study",
        "url": "/experience/idn-boarding-school-live-in-rural-immersion"
      },
      {
        "label": "Semarang Business Survival Details",
        "url": "/experience/pt-intisel-semarang-business-life-survival"
      }
    ]
  }
},

  SEMUABISA_ACCESS_DEEPDIVE: {
  "id": {
    "title": "Aksesibilitas Inklusif & Desain Ramah Disabilitas di SemuaBisa",
    "text": "Platform SemuaBisa dirancang secara khusus untuk memenuhi standar aksesibilitas web modern (WCAG 2.1 AA). Adyvka mengimplementasikan semantic HTML5 yang lengkap, dukungan pembaca layar (screen reader NVDA dan VoiceOver), navigasi keyboard menyeluruh tanpa mouse, kontras warna rasio tinggi, serta mode teks besar ramah disabilitas penglihatan. Seluruh tombol dan form dilengkapi atribut ARIA yang presisi untuk menjamin pengalaman belajar setara bagi semua kalangan pelajar inklusif.",
    "links": [
      {
        "label": "Detail Projek SemuaBisa",
        "url": "/projects/semua-bisa"
      },
      {
        "label": "Lihat Semua Projek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Inclusive Accessibility & Assistive UX in SemuaBisa",
    "text": "The SemuaBisa platform is engineered to comply with modern web accessibility guidelines (WCAG 2.1 AA). Adyvka implemented full semantic HTML5 structures, screen reader optimization for NVDA and VoiceOver, full keyboard navigation without mouse reliance, high-contrast visual modes, and scalable typography. Every interactive button and input field contains precise ARIA attributes, ensuring an equitable, barrier-free learning journey for diverse inclusive learners.",
    "links": [
      {
        "label": "SemuaBisa Project Detail",
        "url": "/projects/semua-bisa"
      },
      {
        "label": "Explore All Projects",
        "url": "/projects"
      }
    ]
  }
},

  SEMUABISA_ARCH_DEEPDIVE: {
  "id": {
    "title": "Arsitektur Modular Platform Edukasi SemuaBisa",
    "text": "SemuaBisa dibangun dengan fondasi frontend berbasis React dan Tailwind CSS yang modular dan responsif. Adyvka menyusun sistem komponen yang fleksibel untuk modul materi inklusif, pemutar konten interaktif, dan kuis adaptif. Arsitektur data diatur secara terstruktur menggunakan custom hooks dan lightweight state management, sehingga platform dapat diakses dengan cepat bahkan pada koneksi internet terbatas dan perangkat berdaya rendah.",
    "links": [
      {
        "label": "Detail Projek SemuaBisa",
        "url": "/projects/semua-bisa"
      },
      {
        "label": "Lihat Semua Projek",
        "url": "/projects"
      }
    ]
  },
  "en": {
    "title": "Modular Educational Architecture of SemuaBisa",
    "text": "SemuaBisa is architected on a modular React and Tailwind CSS foundation optimized for resilience and responsive design. Adyvka structured reusable UI components for inclusive learning modules, media players, and adaptive assessments. State handling leverages custom React hooks and lightweight state structures, delivering fast load speeds even over constrained network connections and low-spec student devices.",
    "links": [
      {
        "label": "SemuaBisa Project Detail",
        "url": "/projects/semua-bisa"
      },
      {
        "label": "Explore All Projects",
        "url": "/projects"
      }
    ]
  }
},
};


// ---------------------------------------------------------------------------
// SUGGESTION CHIP DIRECT LOOKUP MAP (152 QUERIES)
// Ensures 100% deterministic, instant routing for contextual suggestion chips
// ---------------------------------------------------------------------------
export const SUGGESTION_EXACT_MAP = {
  "why hire adyvka and what makes him stand out": "STRENGTHS_WHY_HIRE",
  "tell me about adyvka lead systems engineer role at pt intisel prodaktifakom": "PT_INTISEL_DETAIL",
  "tell me about adyvka internship at pt ardyanda digital inovasi": "PT_ARDYANDA_DETAIL",
  "how many projects has adyvka worked on and what are they": "COUNT_PROJECTS",
  "tell me about all 18 software engineering projects by adyvka": "COUNT_PROJECTS",
  "tell me about adyvka 1st place national award at icomfest": "ACHIEV_ICOMFEST",
  "how can i contact adyvka via whatsapp or email": "CONTACT",
  "how can i contact adyvka for collaboration or hiring": "CONTACT",
  "who is adyvka and what is his professional background": "BIO_IDENTITY",
  "what technologies frameworks and tools does adyvka use": "TECH_STACK",
  "tell me about adyvka teaching and leadership track record": "TEACHING_EXPERIENCE",
  "what is adyvka educational background and high school": "EDUCATION",
  "what awards and competition achievements has adyvka won": "ACHIEVEMENTS",
  "what national competitions and hackathons has adyvka won": "ACHIEVEMENTS",
  "what are adyvka official contact details and social media links": "CONTACT",
  "tell me about all professional work teaching and leadership experiences of adyvka": "ALL_EXPERIENCES",
  "tell me about all 20 experiences of adyvka": "ALL_EXPERIENCES",
  "tell me about adyvka frontend developer role at cv richo bahari": "CV_RICHO_BAHARI_DETAIL",
  "tell me about adyvka full stack contract at universitas muhammadiyah jakarta": "KEPK_UMJ_DETAIL",
  "tell me about adyvka zero capital business and life survival in semarang": "SEMARANG_SURVIVAL_DETAIL",
  "tell me about adyvka 2nd place award at pnbitc": "ACHIEV_PNBITC",
  "tell me about adyvka finalist achievement at unila": "ACHIEV_UNILA",
  "tell me about adyvka best poster award at idul adha festival": "ACHIEV_POSTER",
  "ceritakan penghargaan poster terbaik adyvka di festival idul adha": "ACHIEV_POSTER",
  "how did adyvka design the idul adha festival poster in figma": "ACHIEV_POSTER",
  "bagaimana adyvka mendesain poster idul adha di figma": "ACHIEV_POSTER",
  "what was adyvka winning strategy for national hackathons": "HACKATHON_STRATEGY_DEEPDIVE",
  "what certifications does adyvka have": "CERTIFICATES",
  "tell me about adyvka harvard university cs50 certificate": "CERT_CS50",
  "tell me about adyvka aws cloud practitioner certificate": "CERT_AWS_CLOUD",
  "tell me about adyvka coding camp full stack developer certificate": "CERT_CODING_CAMP",
  "tell me about adyvka react web development certificate": "CERT_REACT",
  "tell me about adyvka backend developer certificate": "CERT_BACKEND",
  "what is adyvka official whatsapp phone number hotline": "CONTACT_WHATSAPP",
  "what is adyvka official project email address": "CONTACT_EMAIL",
  "what are adyvka github and linkedin profile links": "CONTACT_SOCIAL",
  "tell me about pusakaku nusantara cultural platform": "PUSAKAKU_DETAIL",
  "how does pusakaku implement gamification and quiz mechanics": "PUSAKAKU_GAMIFY_DEEPDIVE",
  "how does pusakaku render 3d interactive map and cultural data": "PUSAKAKU_ARCH_DEEPDIVE",
  "tell me about terastani ai and iot smart agriculture platform": "TERASTANI_DETAIL",
  "how does terastani implement computer vision plant disease detection": "TERASTANI_AI_DEEPDIVE",
  "how does terastani integrate iot soil moisture and environmental sensors": "TERASTANI_IOT_DEEPDIVE",
  "tell me about ruangtumbuh mental health platform": "RUANGTUMBUH_DETAIL",
  "how does ruangtumbuh time banking and peer support architecture work": "RUANGTUMBUH_TIMEBANK_DEEPDIVE",
  "what real world mental health problem does ruangtumbuh solve": "RUANGTUMBUH_PROBLEM_DEEPDIVE",
  "tell me about databank erp system": "DATABANK_DETAIL",
  "how does adyvka build puppeteer web scraping pipeline in databank erp": "DATABANK_SCRAPING_DEEPDIVE",
  "how did databank cut 90 percent manual reporting time": "DATABANK_METRICS_DEEPDIVE",
  "how does the multi-tier hierarchy approval workflow work in databank": "DATABANK_APPROVAL_DEEPDIVE",
  "what is the microservice architecture and system architecture in databank": "DATABANK_ARCH_DEEPDIVE",
  "tell me about sim kepk ethical clearance system": "KEPK_DETAIL",
  "tell me about fitsmart ai health platform": "FITSMART_DETAIL",
  "how does fitsmart use gemini ai nutrition and dietary analysis": "FITSMART_AI_DEEPDIVE",
  "how does fitsmart track real-time calorie and macro metrics": "FITSMART_TRACKER_DEEPDIVE",
  "tell me about richo bahari e-commerce project": "RICHO_BAHARI_DETAIL",
  "how does richo bahari achieve 95+ performance lighthouse score": "RICHO_PERF_DEEPDIVE",
  "how is the marine equipment catalog structured in richo bahari": "RICHO_CATALOG_DEEPDIVE",
  "tell me about javaisland tourism web platform": "JAVAISLAND_DETAIL",
  "how does the travel booking system work in javaisland": "JAVAISLAND_BOOKING_DEEPDIVE",
  "how does javaisland showcase javanese cultural heritage and virtual tour": "JAVAISLAND_CULTURE_DEEPDIVE",
  "tell me about semua bisa inclusive learning platform": "SEMUABISA_DETAIL",
  "how does semua bisa implement screen reader accessibility and wcag 2.1": "SEMUABISA_ACCESS_DEEPDIVE",
  "what is the modular educational platform architecture of semua bisa": "SEMUABISA_ARCH_DEEPDIVE",
  "tell me about idncourse e-learning web platform": "IDNCOURSE_DETAIL",
  "how does idncourse deliver video streaming and student progress tracking": "IDNCOURSE_LMS_DEEPDIVE",
  "how does idncourse generate automated certificate verification": "IDNCOURSE_CERT_DEEPDIVE",
  "tell me about modern coffee shop website project": "COFFEESHOP_DETAIL",
  "how does coffee shop handle dynamic beverage menu personalization": "COFFEESHOP_MENU_DEEPDIVE",
  "how does coffee shop implement micro-interactions and ux polish": "COFFEESHOP_UX_DEEPDIVE",
  "tell me about mystyle e-commerce web platform": "MYSTYLE_DETAIL",
  "how does mystyle manage persistent shopping cart and checkout": "MYSTYLE_CART_DEEPDIVE",
  "how does mystyle organize multi-category fashion grid and filtering": "MYSTYLE_CATALOG_DEEPDIVE",
  "tell me about delifood food delivery web app": "DELIFOOD_DETAIL",
  "how does delifood provide real-time order tracking and route preview": "DELIFOOD_TRACKING_DEEPDIVE",
  "how does delifood organize restaurant catalog and menu filtering": "DELIFOOD_ARCH_DEEPDIVE",
  "tell me about ai ticket manager helpdesk platform": "AI_TICKET_DETAIL",
  "how does ai ticket manager use gemini nlp auto-classification triage": "AI_TICKET_AI_DEEPDIVE",
  "how does ai ticket manager track sla real-time analytics and ticket queue": "AI_TICKET_CLOUD_DEEPDIVE",
  "tell me about attendance app mobile geofencing": "ATTENDANCE_DETAIL",
  "how does attendance app use gps geofencing and facial biometric verification": "ATTENDANCE_BIOMETRIC_DEEPDIVE",
  "how does attendance app handle offline clock-in and indexeddb sync": "ATTENDANCE_OFFLINE_DEEPDIVE",
  "tell me about fast qr code scanner web app": "QR_SCANNER_DETAIL",
  "how does qr scanner achieve webrtc high-speed camera decoding": "QR_DECODE_DEEPDIVE",
  "how does qr scanner process event ticket check-in and validation": "QR_CHECKIN_DEEPDIVE",
  "tell me about real-time news portal web app": "NEWS_APP_DETAIL",
  "how does news app aggregate rest api news aggregation and breaking feeds": "NEWS_API_DEEPDIVE",
  "how does news app handle dynamic category filtering and bookmark cache": "NEWS_CACHE_DEEPDIVE",
  "tell me about quran web application project": "QURAN_APP_DETAIL",
  "how does quran app stream multi-qari verse audio recitations": "QURAN_AUDIO_DEEPDIVE",
  "how does quran app render arabic typography and tajweed color coding": "QURAN_TYPO_DEEPDIVE",
  "how did adyvka automate pph 21 and payroll system at pt ardyanda": "ARDYANDA_PAYROLL_DEEPDIVE",
  "what was adyvka 98/100 performance evaluation score at pt ardyanda": "ARDYANDA_EVAL_DEEPDIVE",
  "tell me about adyvka role as master of ceremonies at pt ardyanda": "ARDYANDA_MC_DEEPDIVE",
  "how did adyvka implement enterprise 1000 bts data mapping at intisel": "INTISEL_BTS_DEEPDIVE",
  "how did adyvka demonstrate cross-functional team leadership and mentorship at intisel": "INTISEL_TEAM_DEEPDIVE",
  "tell me about adyvka teaching experience at sma lazuardi": "SMA_LAZUARDI_DETAIL",
  "what web development curriculum did adyvka teach at sma lazuardi": "LAZUARDI_CURRICULUM_DEEPDIVE",
  "tell me about adyvka published book on web frameworks": "BOOK_WEB_FRAMEWORK",
  "tell me about adyvka teaching web development at hajrabyadl": "HAJRABYADL_DETAIL",
  "what full stack coding roadmap did adyvka mentor at hajrabyadl": "HAJRABYADL_CURRICULUM_DEEPDIVE",
  "tell me about adyvka teaching app development at smpn 45": "SMPN_45_DETAIL",
  "what mit app inventor mobile curriculum did adyvka teach at smpn 45": "SMPN45_CURRICULUM_DEEPDIVE",
  "tell me about adyvka teaching app development at smp ins depok": "SMP_INS_DEPOK_DETAIL",
  "how did adyvka teach student logic building and mobile architecture at ins depok": "SMPINS_CURRICULUM_DEEPDIVE",
  "tell me about adyvka teaching game development at semut-semut the natural school": "SEMUT_SEMUT_DETAIL",
  "what scratch game mechanics and interactive storytelling did adyvka teach at semut-semut": "SEMUTSEMUT_CURRICULUM_DEEPDIVE",
  "tell me about adyvka published book on making games with scratch": "BOOK_GAME_SCRATCH",
  "tell me about adyvka teaching app design at al anshar": "AL_ANSHAR_DESIGN_DETAIL",
  "how did adyvka teach figma wireframing and ui/ux design systems at al anshar": "ALANSHAR_DESIGN_FIGMA_DEEPDIVE",
  "tell me about adyvka teaching design at mts yasmine": "MTS_YASMINE_DETAIL",
  "what graphic design and branding curriculum did adyvka teach at yasmine": "YASMINE_CURRICULUM_DEEPDIVE",
  "tell me about adyvka teaching game development at al anshar": "AL_ANSHAR_GAME_DETAIL",
  "what scratch game logic and block-based coding did adyvka teach at al anshar": "ALANSHAR_GAME_SCRATCH_DEEPDIVE",
  "tell me about adyvka teaching game development at griyya sunnah": "GRIYYA_SUNNAH_DETAIL",
  "how did adyvka design interactive game curricula for young learners at griyya sunnah": "GRIYYA_CURRICULUM_DEEPDIVE",
  "tell me about adyvka solo backpacker trip across 3 countries": "BACKPACKER_DETAIL",
  "what life lessons and cross-cultural independence did adyvka learn from solo backpacking": "BACKPACKER_LESSONS_DEEPDIVE",
  "how did adyvka manage international travel budgeting and currency control as a teenager": "BACKPACKER_FINANCE_DEEPDIVE",
  "tell me about adyvka leadership role in idn student council event division": "OSIS_LEADERSHIP_DETAIL",
  "how did adyvka organize campus-wide event execution and logistics in student council": "OSIS_PROJECTS_DEEPDIVE",
  "tell me about adyvka volunteer role in barmus voluntrip": "BARMUS_VOLUNTRIP_DETAIL",
  "what youth empowerment and community impact was achieved in barmus voluntrip": "BARMUS_IMPACT_DEEPDIVE",
  "how did adyvka survive and generate profits from zero capital in semarang": "SEMARANG_PROFIT_DEEPDIVE",
  "what entrepreneurial mindset did adyvka gain from semarang survival": "SEMARANG_MINDSET_DEEPDIVE",
  "what street smarts and daily survival hustle did adyvka experience in semarang": "SEMARANG_DAILY_DEEPDIVE",
  "tell me about adyvka role as event coordinator for it fest 2025": "IT_FEST_DETAIL",
  "how did adyvka coordinate operations and logistics for 100+ participants in it fest 2025": "ITFEST_OPS_DEEPDIVE",
  "tell me about adyvka live-in rural immersion experience": "LIVE_IN_DETAIL",
  "what village labor agricultural work and community life did adyvka undertake during live-in": "LIVEIN_LABOR_DEEPDIVE",
  "why did the icomfest juries award 1st place to pusakaku": "ICOMFEST_JURY_DEEPDIVE",
  "how did adyvka deliver the live pitch and presentation at pnbitc": "PNBITC_PITCH_DEEPDIVE",
  "what feedback and technical evaluation did unila juries give to terastani": "UNILA_JURY_DEEPDIVE",
  "what algorithms and memory management concepts did adyvka master in cs50 core curriculum": "CS50_CURRICULUM_DEEPDIVE",
  "what was adyvka cs50 final capstone project and implementation": "CS50_PROJECT_DEEPDIVE",
  "tell me about adyvka frontend web developer certificate": "CERT_FRONTEND_WEB",
  "tell me about adyvka basic web programming certificate": "CERT_WEB_DASAR",
  "tell me about adyvka git and github certificate": "CERT_GIT_GITHUB",
  "tell me about adyvka ui/ux design fundamentals certificate": "CERT_UIUX_DESIGN",
  "tell me about adyvka data analyst certificate": "CERT_DATA_ANALYST",
  "tell me about adyvka python fundamentals certificate": "CERT_PYTHON_FUND",
  "tell me about adyvka artificial intelligence basics certificate": "CERT_AI_BASICS",
  "tell me about adyvka javascript basics certificate": "CERT_JS_DASAR",
  "how does adyvka implement git branching and merge conflicts resolution": "GIT_WORKFLOW_DEEPDIVE",
  "tell me about adyvka graphic design fundamentals certificate": "CERT_GRAPHIC_DESIGN",
  "tell me about adyvka c programming certificate dicoding": "CERT_C_MEMULAI",
  "tell me about adyvka c programming certificate skilvul": "CERT_C_SKILVUL",
  "tell me about adyvka programming logic certificate": "CERT_LOGIKA",
  "tell me about adyvka python basics certificate dicoding": "CERT_PYTHON_MEMULAI",
  "how does adyvka apply aws iam and cloud security best practices": "AWS_SECURITY_DEEPDIVE",
  "how does adyvka manage state with react hooks and component lifecycle in react": "REACT_HOOKS_DEEPDIVE",
  "tell me about adyvka prompt engineering certificate": "CERT_PROMPT_ENG",
  "tell me about adyvka software developer career certificate": "CERT_KARIER",
  "tell me about adyvka financial literacy certificate": "CERT_FINANCIAL",
  "tell me about adyvka google developer groups certificate": "CERT_GDG",
  "tell me about adyvka english proficiency certificate": "CERT_ENGLISH",
  "what books has adyvka written and published": "BOOKS",
  "mengapa harus merekrut adyvka dan apa keunggulannya": "STRENGTHS_WHY_HIRE",
  "ceritakan peran lead systems engineer adyvka di pt intisel prodaktifakom": "PT_INTISEL_DETAIL",
  "ceritakan peran lead systems engineer adyvka di pt intisel": "PT_INTISEL_DETAIL",
  "ceritakan magang full stack adyvka di pt ardyanda digital inovasi": "PT_ARDYANDA_DETAIL",
  "ceritakan magang full stack adyvka di pt ardyanda": "PT_ARDYANDA_DETAIL",
  "berapa banyak projek yang telah dikerjakan adyvka": "COUNT_PROJECTS",
  "ceritakan tentang seluruh 18 projek rekayasa perangkat lunak adyvka": "COUNT_PROJECTS",
  "ceritakan juara 1 nasional web design di icomfest": "ACHIEV_ICOMFEST",
  "ceritakan penghargaan juara 1 nasional adyvka di icomfest": "ACHIEV_ICOMFEST",
  "bagaimana cara menghubungi adyvka lewat whatsapp atau email": "CONTACT",
  "bagaimana cara menghubungi adyvka untuk kolaborasi atau rekrutmen": "CONTACT",
  "siapa adyvka dan apa latar belakang profesionalnya": "BIO_IDENTITY",
  "apa tech stack tools dan teknologi yang dikuasai adyvka": "TECH_STACK",
  "ceritakan rekam jejak kepemimpinan dan mengajar adyvka": "TEACHING_EXPERIENCE",
  "apa latar belakang pendidikan sekolah adyvka": "EDUCATION",
  "apa saja prestasi dan penghargaan lomba yang diraih adyvka": "ACHIEVEMENTS",
  "apa saja kompetisi dan hackathon nasional yang dimenangkan adyvka": "ACHIEVEMENTS",
  "apa kontak resmi dan link media sosial adyvka": "CONTACT",
  "apa saja detail kontak resmi dan media sosial adyvka": "CONTACT",
  "ceritakan seluruh pengalaman kerja mengajar dan organisasi adyvka": "ALL_EXPERIENCES",
  "ceritakan seluruh 20 pengalaman profesional adyvka": "ALL_EXPERIENCES",
  "ceritakan pengalaman adyvka sebagai frontend developer di cv richo bahari": "CV_RICHO_BAHARI_DETAIL",
  "ceritakan pengalaman adyvka mengembangkan sim kepk di universitas muhammadiyah jakarta": "KEPK_UMJ_DETAIL",
  "ceritakan pengalaman kontrak full stack adyvka di universitas muhammadiyah jakarta": "KEPK_UMJ_DETAIL",
  "ceritakan pengalaman adyvka survival bisnis di semarang modal rp 0": "SEMARANG_SURVIVAL_DETAIL",
  "ceritakan pengalaman adyvka survival bisnis di semarang modal nol": "SEMARANG_SURVIVAL_DETAIL",
  "ceritakan penghargaan juara 2 adyvka di pnbitc": "ACHIEV_PNBITC",
  "ceritakan pencapaian finalis nasional adyvka di unila": "ACHIEV_UNILA",
  "apa strategi kemenangan adyvka dalam hackathon nasional": "HACKATHON_STRATEGY_DEEPDIVE",
  "apa strategi memenangkan kompetisi hackathon nasional": "HACKATHON_STRATEGY_DEEPDIVE",
  "apa saja sertifikasi profesional yang dimiliki adyvka": "CERTIFICATES",
  "apa saja sertifikat yang dimiliki adyvka": "CERTIFICATES",
  "ceritakan tentang sertifikat harvard cs50 adyvka": "CERT_CS50",
  "ceritakan tentang sertifikat aws cloud practitioner adyvka": "CERT_AWS_CLOUD",
  "ceritakan tentang sertifikat coding camp full stack developer adyvka": "CERT_CODING_CAMP",
  "ceritakan tentang sertifikat react web development adyvka": "CERT_REACT",
  "ceritakan tentang sertifikat backend developer adyvka": "CERT_BACKEND",
  "apa nomor whatsapp resmi hotline adyvka": "CONTACT_WHATSAPP",
  "apa nomor wa resmi adyvka hotline": "CONTACT_WHATSAPP",
  "apa alamat email proyek resmi adyvka": "CONTACT_EMAIL",
  "apa link profil github dan linkedin adyvka": "CONTACT_SOCIAL",
  "ceritakan tentang platform budaya pusakaku nusantara": "PUSAKAKU_DETAIL",
  "ceritakan tentang projek pusakaku": "PUSAKAKU_DETAIL",
  "bagaimana pusakaku mengimplementasikan gamifikasi dan kuis interaktif": "PUSAKAKU_GAMIFY_DEEPDIVE",
  "bagaimana gamifikasi kuis di pusakaku": "PUSAKAKU_GAMIFY_DEEPDIVE",
  "bagaimana pusakaku merender peta 3d interaktif dan data budaya": "PUSAKAKU_ARCH_DEEPDIVE",
  "bagaimana peta interaktif 3d di pusakaku": "PUSAKAKU_ARCH_DEEPDIVE",
  "ceritakan tentang platform pertanian cerdas terastani ai dan iot": "TERASTANI_DETAIL",
  "ceritakan tentang projek terastani": "TERASTANI_DETAIL",
  "bagaimana terastani mengimplementasikan deteksi penyakit tanaman computer vision": "TERASTANI_AI_DEEPDIVE",
  "bagaimana deteksi penyakit tanaman computer vision di terastani": "TERASTANI_AI_DEEPDIVE",
  "bagaimana terastani mengintegrasikan sensor iot kelembapan tanah dan lingkungan": "TERASTANI_IOT_DEEPDIVE",
  "bagaimana sensor iot kelembapan tanah di terastani": "TERASTANI_IOT_DEEPDIVE",
  "ceritakan tentang platform kesehatan mental ruangtumbuh": "RUANGTUMBUH_DETAIL",
  "ceritakan tentang ruangtumbuh": "RUANGTUMBUH_DETAIL",
  "bagaimana arsitektur time banking dan dukungan peer support di ruangtumbuh": "RUANGTUMBUH_TIMEBANK_DEEPDIVE",
  "bagaimana sistem time banking di ruangtumbuh": "RUANGTUMBUH_TIMEBANK_DEEPDIVE",
  "apa masalah kesehatan mental nyata yang diselesaikan oleh ruangtumbuh": "RUANGTUMBUH_PROBLEM_DEEPDIVE",
  "apa masalah kesehatan mental di ruangtumbuh": "RUANGTUMBUH_PROBLEM_DEEPDIVE",
  "ceritakan tentang sistem erp databank": "DATABANK_DETAIL",
  "ceritakan tentang sistem databank erp": "DATABANK_DETAIL",
  "bagaimana adyvka membangun pipeline web scraping puppeteer di databank erp": "DATABANK_SCRAPING_DEEPDIVE",
  "bagaimana pipeline web scraping puppeteer di databank": "DATABANK_SCRAPING_DEEPDIVE",
  "bagaimana databank memotong 90 persen waktu pelaporan manual": "DATABANK_METRICS_DEEPDIVE",
  "bagaimana databank memotong 90 persen waktu verifikasi laporan": "DATABANK_METRICS_DEEPDIVE",
  "bagaimana alur persetujuan hierarki bertingkat bekerja di databank": "DATABANK_APPROVAL_DEEPDIVE",
  "bagaimana alur approval bertingkat di databank": "DATABANK_APPROVAL_DEEPDIVE",
  "apa arsitektur microservice dan arsitektur sistem di databank": "DATABANK_ARCH_DEEPDIVE",
  "apa arsitektur microservice di databank": "DATABANK_ARCH_DEEPDIVE",
  "ceritakan tentang sistem klirens etik sim kepk": "KEPK_DETAIL",
  "ceritakan tentang projek sim kepk": "KEPK_DETAIL",
  "ceritakan tentang platform kesehatan fitsmart ai": "FITSMART_DETAIL",
  "ceritakan tentang platform fitsmart": "FITSMART_DETAIL",
  "bagaimana fitsmart menggunakan gemini ai untuk analisis nutrisi dan diet": "FITSMART_AI_DEEPDIVE",
  "bagaimana fitsmart melacak metrik kalori dan makronutrien secara real time": "FITSMART_TRACKER_DEEPDIVE",
  "ceritakan tentang projek e commerce richo bahari": "RICHO_BAHARI_DETAIL",
  "ceritakan tentang projek richo bahari": "RICHO_BAHARI_DETAIL",
  "bagaimana richo bahari mencapai skor lighthouse performa 95 ke atas": "RICHO_PERF_DEEPDIVE",
  "bagaimana katalog peralatan maritim distrukturkan di richo bahari": "RICHO_CATALOG_DEEPDIVE",
  "ceritakan tentang platform pariwisata javaisland": "JAVAISLAND_DETAIL",
  "bagaimana sistem pemesanan perjalanan bekerja di javaisland": "JAVAISLAND_BOOKING_DEEPDIVE",
  "bagaimana javaisland menampilkan warisan budaya jawa dan tur virtual": "JAVAISLAND_CULTURE_DEEPDIVE",
  "ceritakan tentang platform pembelajaran inklusif semua bisa": "SEMUABISA_DETAIL",
  "bagaimana semua bisa mengimplementasikan aksesibilitas pembaca layar dan wcag 2 1": "SEMUABISA_ACCESS_DEEPDIVE",
  "apa arsitektur platform edukasi modular di semua bisa": "SEMUABISA_ARCH_DEEPDIVE",
  "ceritakan tentang platform lms idncourse": "IDNCOURSE_DETAIL",
  "bagaimana idncourse menyediakan streaming video dan pelacakan progres siswa": "IDNCOURSE_LMS_DEEPDIVE",
  "bagaimana idncourse menghasilkan verifikasi sertifikat otomatis": "IDNCOURSE_CERT_DEEPDIVE",
  "ceritakan tentang projek website modern coffee shop": "COFFEESHOP_DETAIL",
  "bagaimana coffee shop menangani personalisasi menu minuman dinamis": "COFFEESHOP_MENU_DEEPDIVE",
  "bagaimana coffee shop mengimplementasikan mikro interaksi dan polesan ux responsif": "COFFEESHOP_UX_DEEPDIVE",
  "ceritakan tentang platform e commerce mystyle": "MYSTYLE_DETAIL",
  "bagaimana mystyle mengelola keranjang belanja persisten dan checkout": "MYSTYLE_CART_DEEPDIVE",
  "bagaimana mystyle mengatur grid dan filter busana multi kategori": "MYSTYLE_CATALOG_DEEPDIVE",
  "ceritakan tentang web app pesan antar makanan delifood": "DELIFOOD_DETAIL",
  "bagaimana delifood menyediakan pelacakan pesanan real time dan rute kurir": "DELIFOOD_TRACKING_DEEPDIVE",
  "bagaimana delifood mengatur katalog restoran dan filter menu": "DELIFOOD_ARCH_DEEPDIVE",
  "ceritakan tentang platform helpdesk ai ticket manager": "AI_TICKET_DETAIL",
  "bagaimana ai ticket manager menggunakan nlp gemini untuk klasifikasi tiket otomatis": "AI_TICKET_AI_DEEPDIVE",
  "bagaimana ai ticket manager melacak analitik real time sla dan antrean tiket": "AI_TICKET_CLOUD_DEEPDIVE",
  "ceritakan tentang aplikasi absensi mobile attendance app": "ATTENDANCE_DETAIL",
  "bagaimana attendance app menggunakan geofencing gps dan verifikasi biometrik wajah": "ATTENDANCE_BIOMETRIC_DEEPDIVE",
  "bagaimana attendance app menangani presensi offline dan sinkronisasi indexeddb": "ATTENDANCE_OFFLINE_DEEPDIVE",
  "ceritakan tentang web app pemindai kode qr cepat": "QR_SCANNER_DETAIL",
  "bagaimana qr scanner mencapai decoding kamera kecepatan tinggi dengan webrtc": "QR_DECODE_DEEPDIVE",
  "bagaimana qr scanner memproses validasi tiket dan check in acara": "QR_CHECKIN_DEEPDIVE",
  "ceritakan tentang portal web berita real time news app": "NEWS_APP_DETAIL",
  "bagaimana news app mengagregasi berita rest api dan live feeds": "NEWS_API_DEEPDIVE",
  "bagaimana news app menangani filter kategori dinamis dan cache bookmark": "NEWS_CACHE_DEEPDIVE",
  "ceritakan tentang projek web quran digital": "QURAN_APP_DETAIL",
  "bagaimana quran app menyiarkan streaming audio murottal berbagai qari": "QURAN_AUDIO_DEEPDIVE",
  "bagaimana quran app merender tipografi arab beresolusi tinggi dan tajwid berwarna": "QURAN_TYPO_DEEPDIVE",
  "bagaimana adyvka mengotomatiskan pph 21 dan sistem payroll di pt ardyanda": "ARDYANDA_PAYROLL_DEEPDIVE",
  "bagaimana otomatisasi payroll pph 21 di ardyanda": "ARDYANDA_PAYROLL_DEEPDIVE",
  "apa nilai evaluasi kinerja 98 dari 100 adyvka di pt ardyanda": "ARDYANDA_EVAL_DEEPDIVE",
  "apa nilai evaluasi magang 98 di ardyanda": "ARDYANDA_EVAL_DEEPDIVE",
  "ceritakan peran adyvka sebagai master of ceremonies di pt ardyanda": "ARDYANDA_MC_DEEPDIVE",
  "ceritakan peran mc internal kantor di ardyanda": "ARDYANDA_MC_DEEPDIVE",
  "bagaimana adyvka menerapkan pemetaan data 1000 bts enterprise di intisel": "INTISEL_BTS_DEEPDIVE",
  "bagaimana pemetaan 1000 bts telekomunikasi di intisel": "INTISEL_BTS_DEEPDIVE",
  "bagaimana adyvka menunjukkan kepemimpinan tim lintas fungsi dan mentoring di intisel": "INTISEL_TEAM_DEEPDIVE",
  "bagaimana kepemimpinan tim dan mentoring engineer di intisel": "INTISEL_TEAM_DEEPDIVE",
  "ceritakan pengalaman mengajar adyvka di sma lazuardi": "SMA_LAZUARDI_DETAIL",
  "apa kurikulum web development yang diajarkan adyvka di sma lazuardi": "LAZUARDI_CURRICULUM_DEEPDIVE",
  "ceritakan tentang buku yang diterbitkan adyvka tentang web framework": "BOOK_WEB_FRAMEWORK",
  "ceritakan pengalaman adyvka mengajar web development di hajrabyadl": "HAJRABYADL_DETAIL",
  "apa roadmap coding full stack yang dibimbing adyvka di hajrabyadl": "HAJRABYADL_CURRICULUM_DEEPDIVE",
  "ceritakan pengalaman adyvka mengajar app development di smpn 45": "SMPN_45_DETAIL",
  "apa kurikulum mobile mit app inventor yang diajarkan adyvka di smpn 45": "SMPN45_CURRICULUM_DEEPDIVE",
  "ceritakan pengalaman adyvka mengajar app development di smp ins depok": "SMP_INS_DEPOK_DETAIL",
  "bagaimana adyvka mengajarkan logika pemrograman dan arsitektur mobile di ins depok": "SMPINS_CURRICULUM_DEEPDIVE",
  "ceritakan pengalaman adyvka mengajar game development di semut semut the natural school": "SEMUT_SEMUT_DETAIL",
  "apa mekanik game scratch dan cerita interaktif yang diajarkan adyvka di semut semut": "SEMUTSEMUT_CURRICULUM_DEEPDIVE",
  "ceritakan tentang buku yang diterbitkan adyvka tentang membuat game dengan scratch": "BOOK_GAME_SCRATCH",
  "ceritakan pengalaman adyvka mengajar desain aplikasi di al anshar": "AL_ANSHAR_DESIGN_DETAIL",
  "bagaimana adyvka mengajarkan wireframing figma dan sistem desain ui ux di al anshar": "ALANSHAR_DESIGN_FIGMA_DEEPDIVE",
  "ceritakan pengalaman adyvka mengajar desain di mts yasmine": "MTS_YASMINE_DETAIL",
  "apa kurikulum desain grafis dan branding yang diajarkan adyvka di yasmine": "YASMINE_CURRICULUM_DEEPDIVE",
  "ceritakan pengalaman adyvka mengajar game development di al anshar": "AL_ANSHAR_GAME_DETAIL",
  "apa logika game scratch dan coding berbasis blok yang diajarkan adyvka di al anshar": "ALANSHAR_GAME_SCRATCH_DEEPDIVE",
  "ceritakan pengalaman adyvka mengajar game development di griyya sunnah": "GRIYYA_SUNNAH_DETAIL",
  "bagaimana adyvka merancang kurikulum game interaktif untuk anak anak di griyya sunnah": "GRIYYA_CURRICULUM_DEEPDIVE",
  "ceritakan perjalanan solo backpacker 3 negara adyvka": "BACKPACKER_DETAIL",
  "ceritakan pengalaman solo backpacker adyvka keliling 3 negara": "BACKPACKER_DETAIL",
  "apa pelajaran hidup dan kemandirian lintas budaya yang dipelajari adyvka dari solo backpacker": "BACKPACKER_LESSONS_DEEPDIVE",
  "apa pelajaran hidup solo backpacker yang didapat adyvka": "BACKPACKER_LESSONS_DEEPDIVE",
  "bagaimana adyvka mengelola anggaran perjalanan internasional dan mata uang saat remaja": "BACKPACKER_FINANCE_DEEPDIVE",
  "bagaimana manajemen keuangan dan budgeting solo backpacker": "BACKPACKER_FINANCE_DEEPDIVE",
  "ceritakan peran kepemimpinan adyvka di divisi acara osis idn": "OSIS_LEADERSHIP_DETAIL",
  "bagaimana adyvka mengatur eksekusi acara sekolah dan logistik di osis": "OSIS_PROJECTS_DEEPDIVE",
  "ceritakan peran sukarelawan adyvka di barmus voluntrip": "BARMUS_VOLUNTRIP_DETAIL",
  "apa dampak pemberdayaan pemuda dan masyarakat yang dicapai dalam barmus voluntrip": "BARMUS_IMPACT_DEEPDIVE",
  "bagaimana adyvka bertahan hidup dan menghasilkan keuntungan dari modal nol di semarang": "SEMARANG_PROFIT_DEEPDIVE",
  "bagaimana adyvka menghasilkan jutaan rupiah dari modal nol di semarang": "SEMARANG_PROFIT_DEEPDIVE",
  "apa pola pikir wirausaha yang didapat adyvka dari survival di semarang": "SEMARANG_MINDSET_DEEPDIVE",
  "apa mindset wirausaha adyvka dari survival di semarang": "SEMARANG_MINDSET_DEEPDIVE",
  "apa kelihaian jalanan dan rutinitas harian bertahan hidup yang dialami adyvka di semarang": "SEMARANG_DAILY_DEEPDIVE",
  "bagaimana kehidupan sehari-hari dan street smarts adyvka di semarang": "SEMARANG_DAILY_DEEPDIVE",
  "ceritakan peran adyvka sebagai koordinator acara it fest 2025": "IT_FEST_DETAIL",
  "bagaimana adyvka mengoordinasikan operasional dan logistik untuk 100 lebih peserta di it fest 2025": "ITFEST_OPS_DEEPDIVE",
  "ceritakan pengalaman adyvka live in tinggal bersama warga desa": "LIVE_IN_DETAIL",
  "apa kerja bakti tani dan kehidupan masyarakat desa yang dijalani adyvka selama live in": "LIVEIN_LABOR_DEEPDIVE",
  "mengapa juri icomfest memberikan juara 1 untuk pusakaku": "ICOMFEST_JURY_DEEPDIVE",
  "kenapa juri icomfest memilih pusakaku juara 1": "ICOMFEST_JURY_DEEPDIVE",
  "bagaimana adyvka membawakan presentasi live pitch di pnbitc": "PNBITC_PITCH_DEEPDIVE",
  "bagaimana presentasi pitching di pnbitc": "PNBITC_PITCH_DEEPDIVE",
  "apa evaluasi teknis dan masukan yang diberikan juri unila untuk terastani": "UNILA_JURY_DEEPDIVE",
  "apa evaluasi juri unila untuk terastani": "UNILA_JURY_DEEPDIVE",
  "apa konsep algoritma dan manajemen memori yang dikuasai adyvka di kurikulum inti cs50": "CS50_CURRICULUM_DEEPDIVE",
  "apa kurikulum cs50 harvard yang dipelajari": "CS50_CURRICULUM_DEEPDIVE",
  "apa proyek capstone akhir cs50 adyvka dan implementasinya": "CS50_PROJECT_DEEPDIVE",
  "apa proyek capstone akhir cs50": "CS50_PROJECT_DEEPDIVE",
  "ceritakan tentang sertifikat frontend web developer adyvka": "CERT_FRONTEND_WEB",
  "ceritakan tentang sertifikat pemrograman web dasar adyvka": "CERT_WEB_DASAR",
  "sertifikat dasar pemrograman web dicoding belajar apa": "CERT_WEB_DASAR",
  "ceritakan tentang sertifikat git dan github adyvka": "CERT_GIT_GITHUB",
  "sertifikat belajar dasar git dengan github belajar apa dan apa yang didapat": "CERT_GIT_GITHUB",
  "ceritakan tentang sertifikat dasar desain ui ux adyvka": "CERT_UIUX_DESIGN",
  "ceritakan tentang sertifikat data analyst adyvka": "CERT_DATA_ANALYST",
  "ceritakan tentang sertifikat python fundamentals adyvka": "CERT_PYTHON_FUND",
  "ceritakan tentang sertifikat dasar kecerdasan buatan adyvka": "CERT_AI_BASICS",
  "ceritakan tentang sertifikat dasar pemrograman javascript adyvka": "CERT_JS_DASAR",
  "bagaimana adyvka menerapkan percabangan git branching dan resolusi konflik merge": "GIT_WORKFLOW_DEEPDIVE",
  "bagaimana alur kerja branching dan merge conflicts di git": "GIT_WORKFLOW_DEEPDIVE",
  "ceritakan tentang sertifikat dasar desain grafis adyvka": "CERT_GRAPHIC_DESIGN",
  "ceritakan tentang sertifikat pemrograman c dicoding adyvka": "CERT_C_MEMULAI",
  "ceritakan tentang sertifikat pemrograman c skilvul adyvka": "CERT_C_SKILVUL",
  "ceritakan tentang sertifikat logika pemrograman adyvka": "CERT_LOGIKA",
  "ceritakan tentang sertifikat dasar python dicoding adyvka": "CERT_PYTHON_MEMULAI",
  "bagaimana adyvka menerapkan aws iam dan praktik keamanan cloud terbaik": "AWS_SECURITY_DEEPDIVE",
  "bagaimana praktik keamanan cloud iam aws": "AWS_SECURITY_DEEPDIVE",
  "bagaimana adyvka mengelola state dengan react hooks dan siklus hidup komponen di react": "REACT_HOOKS_DEEPDIVE",
  "bagaimana penggunaan hooks dan state management di react": "REACT_HOOKS_DEEPDIVE",
  "ceritakan tentang sertifikat prompt engineering adyvka": "CERT_PROMPT_ENG",
  "ceritakan tentang sertifikat meniti karier sebagai software developer adyvka": "CERT_KARIER",
  "ceritakan tentang sertifikat literasi keuangan adyvka": "CERT_FINANCIAL",
  "ceritakan tentang sertifikat google developer groups adyvka": "CERT_GDG",
  "ceritakan tentang sertifikat kemahiran bahasa inggris adyvka": "CERT_ENGLISH",
  "apa saja buku yang telah ditulis dan diterbitkan oleh adyvka": "BOOKS",
  "apa saja buku resmi yang diterbitkan adyvka": "BOOKS",
  "tell me about adyvka academic transcript in dbs coding camp": "CODING_CAMP_TRANSCRIPT_DEEPDIVE",
  "tell me about adyvka academic transcript in coding camp": "CODING_CAMP_TRANSCRIPT_DEEPDIVE",
  "what is adyvka academic transcript in coding camp": "CODING_CAMP_TRANSCRIPT_DEEPDIVE",
  "ceritakan transkrip nilai akademik coding camp adyvka": "CODING_CAMP_TRANSCRIPT_DEEPDIVE",
  "ceritakan transkrip nilai coding camp adyvka": "CODING_CAMP_TRANSCRIPT_DEEPDIVE",
  "bagaimana transkrip nilai akademik coding camp adyvka": "CODING_CAMP_TRANSCRIPT_DEEPDIVE",
  "apa transkrip nilai akademik coding camp adyvka": "CODING_CAMP_TRANSCRIPT_DEEPDIVE",
  "what score and evaluation did ruangtumbuh achieve as coding camp capstone": "CODING_CAMP_TRANSCRIPT_DEEPDIVE",
  "what was ruangtumbuh score in coding camp capstone": "CODING_CAMP_TRANSCRIPT_DEEPDIVE",
  "berapa nilai proyek capstone ruangtumbuh di coding camp": "CODING_CAMP_TRANSCRIPT_DEEPDIVE",
  "berapa nilai capstone ruangtumbuh di coding camp": "CODING_CAMP_TRANSCRIPT_DEEPDIVE",
  "apa evaluasi dan nilai capstone ruangtumbuh di coding camp": "CODING_CAMP_TRANSCRIPT_DEEPDIVE",
  "ceritakan nilai capstone ruangtumbuh di coding camp": "CODING_CAMP_TRANSCRIPT_DEEPDIVE",
  "tell me about the two tracks six years journey from 2021 to 2026": "TWO_TRACKS_TIMELINE",
  "tell me about the two tracks six years section in about page": "TWO_TRACKS_TIMELINE",
  "tell me about the two tracks six years": "TWO_TRACKS_TIMELINE",
  "what is adyvka story from 2021 to 2026": "TWO_TRACKS_TIMELINE",
  "tell me about adyvka journey from 2021 to 2026": "TWO_TRACKS_TIMELINE",
  "bagaimana cerita adyvka dari 2021 - 2026": "TWO_TRACKS_TIMELINE",
  "bagaimana cerita adyvka dari 2021 sampai 2026": "TWO_TRACKS_TIMELINE",
  "ceritakan perjalanan adyvka dari 2021 sampai 2026": "TWO_TRACKS_TIMELINE",
  "cerita adyvka 2021 2026": "TWO_TRACKS_TIMELINE",
  "ceritakan section two tracks six years": "TWO_TRACKS_TIMELINE",
  "ceritakan section two tracks six years di halaman about": "TWO_TRACKS_TIMELINE",
  "apa itu two tracks six years": "TWO_TRACKS_TIMELINE",
  "bagaimana timeline perjalanan teknis dan kepemimpinan adyvka": "TWO_TRACKS_TIMELINE",
  "apa yang dilewati adyvka dari 2021 hingga 2026": "TWO_TRACKS_TIMELINE",
  "apa yang bisa adyvka lakukan": "WHAT_ADYVKA_CAN_DO",
  "apa aktifitas atau kesibukan adyvka saat ini": "INTERVIEW_CURRENT_ACTIVITIES",
  "apa aktivitas adyvka saat ini": "INTERVIEW_CURRENT_ACTIVITIES",
  "ceritakan kesibukan adyvka saat ini": "INTERVIEW_CURRENT_ACTIVITIES",
  "kesibukan adyvka saat ini": "INTERVIEW_CURRENT_ACTIVITIES",
  "kesibukan kelas 12 adyvka": "INTERVIEW_CURRENT_ACTIVITIES",
  "bagaimana rutinitas magang dan sekolah adyvka": "INTERVIEW_CURRENT_ACTIVITIES",
  "aktivitas magang pt ardyanda dan sekolah": "INTERVIEW_CURRENT_ACTIVITIES",
  "what is adyvka current daily routine and activities": "INTERVIEW_CURRENT_ACTIVITIES",
  "tell me about adyvka current activities in grade 12": "INTERVIEW_CURRENT_ACTIVITIES",
  "what is adyvka current routine in grade 12": "INTERVIEW_CURRENT_ACTIVITIES",
  "apa impian atau rencana studi lanjut adyvka": "INTERVIEW_FUTURE_STUDY_CAREER",
  "apa rencana studi lanjut adyvka": "INTERVIEW_FUTURE_STUDY_CAREER",
  "kemana rencana kuliah atau studi sarjana adyvka": "INTERVIEW_FUTURE_STUDY_CAREER",
  "apa impian karier adyvka": "INTERVIEW_FUTURE_STUDY_CAREER",
  "apa rencana karier jangka panjang adyvka": "INTERVIEW_FUTURE_STUDY_CAREER",
  "rencana kuliah adyvka": "INTERVIEW_FUTURE_STUDY_CAREER",
  "what are adyvka higher education and career goals": "INTERVIEW_FUTURE_STUDY_CAREER",
  "what are adyvka university and study plans": "INTERVIEW_FUTURE_STUDY_CAREER",
  "where does adyvka plan to study for undergraduate degree": "INTERVIEW_FUTURE_STUDY_CAREER",
  "siapa role model atau tokoh panutan adyvka": "INTERVIEW_ROLE_MODEL",
  "siapa role model adyvka": "INTERVIEW_ROLE_MODEL",
  "siapa tokoh panutan adyvka": "INTERVIEW_ROLE_MODEL",
  "siapa yang menginspirasi adyvka": "INTERVIEW_ROLE_MODEL",
  "kenapa david j malan menjadi role model adyvka": "INTERVIEW_ROLE_MODEL",
  "kenapa david malan menginspirasi adyvka": "INTERVIEW_ROLE_MODEL",
  "who is adyvka role model": "INTERVIEW_ROLE_MODEL",
  "who inspires adyvka in computer science": "INTERVIEW_ROLE_MODEL",
  "why is david malan adyvka role model": "INTERVIEW_ROLE_MODEL",
  "apa kekurangan adyvka": "INTERVIEW_WEAKNESSES",
  "apa kelemahan adyvka": "INTERVIEW_WEAKNESSES",
  "apa saja kekurangan adyvka": "INTERVIEW_WEAKNESSES",
  "apa saja kelemahan adyvka": "INTERVIEW_WEAKNESSES",
  "apa area pengembangan diri adyvka": "INTERVIEW_WEAKNESSES",
  "sebutkan kelemahan adyvka dan bagaimana mengatasinya": "INTERVIEW_WEAKNESSES",
  "what are adyvka weaknesses": "INTERVIEW_WEAKNESSES",
  "what is adyvka weakness": "INTERVIEW_WEAKNESSES",
  "what are adyvka areas for growth": "INTERVIEW_WEAKNESSES",
  "what is adyvka greatest weakness and how does he handle it": "INTERVIEW_WEAKNESSES",
  "ceritakan kegagalan adyvka": "INTERVIEW_FAILURE_RESILIENCE",
  "apa kegagalan terbesar adyvka": "INTERVIEW_FAILURE_RESILIENCE",
  "apa kegagalan adyvka": "INTERVIEW_FAILURE_RESILIENCE",
  "ceritakan kegagalan terbesar adyvka dan bagaimana mengatasinya": "INTERVIEW_FAILURE_RESILIENCE",
  "pernahkah adyvka gagal dalam proyek atau hidup": "INTERVIEW_FAILURE_RESILIENCE",
  "bagaimana adyvka bangkit dari kegagalan": "INTERVIEW_FAILURE_RESILIENCE",
  "tell me about a time adyvka failed": "INTERVIEW_FAILURE_RESILIENCE",
  "what was adyvka biggest failure and what did he learn": "INTERVIEW_FAILURE_RESILIENCE",
  "how does adyvka handle setbacks and failure": "INTERVIEW_FAILURE_RESILIENCE",
  "apa projek besar atau ide besar adyvka di masa depan": "INTERVIEW_BIG_FUTURE_PROJECT",
  "projek besar atau rencana ide besar di masa depan": "INTERVIEW_BIG_FUTURE_PROJECT",
  "apa ide besar adyvka": "INTERVIEW_BIG_FUTURE_PROJECT",
  "ceritakan rencana ide besar masa depan adyvka": "INTERVIEW_BIG_FUTURE_PROJECT",
  "proyek ambisius apa yang ingin dibangun adyvka": "INTERVIEW_BIG_FUTURE_PROJECT",
  "what is adyvka big future project or ambitious idea": "INTERVIEW_BIG_FUTURE_PROJECT",
  "what ambitious systems does adyvka want to build in the future": "INTERVIEW_BIG_FUTURE_PROJECT",
  "bagaimana adyvka membagi waktu antara magang sekolah dan proyek": "INTERVIEW_TIME_MANAGEMENT",
  "bagaimana manajemen waktu adyvka": "INTERVIEW_TIME_MANAGEMENT",
  "bagaimana adyvka mengatur prioritas kerja dan belajar": "INTERVIEW_TIME_MANAGEMENT",
  "how does adyvka manage time between internship school and freelance": "INTERVIEW_TIME_MANAGEMENT",
  "how does adyvka prioritize multiple responsibilities": "INTERVIEW_TIME_MANAGEMENT",
  "bagaimana adyvka menangani perbedaan pendapat atau konflik dalam tim": "INTERVIEW_TEAM_CONFLICT",
  "bagaimana cara adyvka menyelesaikan konflik tim": "INTERVIEW_TEAM_CONFLICT",
  "bagaimana adyvka menghadapi perselisihan teknis": "INTERVIEW_TEAM_CONFLICT",
  "how does adyvka handle team conflicts or technical disagreements": "INTERVIEW_TEAM_CONFLICT",
  "how does adyvka collaborate when there are differing opinions": "INTERVIEW_TEAM_CONFLICT",
  "mengapa adyvka memilih rekayasa perangkat lunak": "INTERVIEW_WHY_CS",
  "kenapa adyvka memilih jurusan rpl dan koding": "INTERVIEW_WHY_CS",
  "apa motivasi adyvka memilih computer science": "INTERVIEW_WHY_CS",
  "why did adyvka choose software engineering and computer science": "INTERVIEW_WHY_CS",
  "what motivates adyvka to code and build systems": "INTERVIEW_WHY_CS",
  "apa saja yang bisa adyvka lakukan": "WHAT_ADYVKA_CAN_DO",
  "apa yang bisa dilakukan adyvka": "WHAT_ADYVKA_CAN_DO",
  "apa saja yang bisa dilakukan adyvka": "WHAT_ADYVKA_CAN_DO",
  "adyvka bisa apa": "WHAT_ADYVKA_CAN_DO",
  "adyvka bisa apa saja": "WHAT_ADYVKA_CAN_DO",
  "bisa apa saja adyvka": "WHAT_ADYVKA_CAN_DO",
  "apa yang bisa dikerjakan adyvka": "WHAT_ADYVKA_CAN_DO",
  "kemampuan adyvka": "WHAT_ADYVKA_CAN_DO",
  "what can adyvka do": "WHAT_ADYVKA_CAN_DO",
  "what does adyvka do": "WHAT_ADYVKA_CAN_DO",
  "what can adyvka build": "WHAT_ADYVKA_CAN_DO",
  "what is adyvka capable of": "WHAT_ADYVKA_CAN_DO",
  "what are adyvka capabilities": "WHAT_ADYVKA_CAN_DO",
  "apa yang dibuat adyvka": "LIST_PROJECTS",
  "apa saja yang dibuat adyvka": "LIST_PROJECTS",
  "apa saja projek yang dibuat adyvka": "LIST_PROJECTS",
  "what is adyvka working on and exploring right now": "ABOUT_CURRENT_FOCUS",
  "what is open in the tabs right now": "ABOUT_CURRENT_FOCUS",
  "apa yang sedang dikerjakan adyvka saat ini": "ABOUT_CURRENT_FOCUS",
  "apa fokus utama adyvka saat ini": "ABOUT_CURRENT_FOCUS",
  "ceritakan section right now di halaman about": "ABOUT_CURRENT_FOCUS",
  "apa yang sedang dibuka di tab adyvka": "ABOUT_CURRENT_FOCUS",
  "what is adyvka career direction and next chapter for 2027": "ABOUT_WHATS_NEXT",
  "what is next for adyvka": "ABOUT_WHATS_NEXT",
  "apa rencana adyvka setelah lulus 2027": "ABOUT_WHATS_NEXT",
  "kapan adyvka lulus dan apa rencana ke depan": "ABOUT_WHATS_NEXT",
  "ceritakan section what is next di halaman about": "ABOUT_WHATS_NEXT",
  "ceritakan section whats next di halaman about": "ABOUT_WHATS_NEXT",
  "what are adyvka core capabilities and soft skills": "ABOUT_CORE_CAPABILITIES",
  "apa saja soft skills atau core capabilities adyvka di halaman about": "ABOUT_CORE_CAPABILITIES",
  "apa keahlian non teknis adyvka": "ABOUT_CORE_CAPABILITIES",
  "ceritakan core capabilities adyvka": "ABOUT_CORE_CAPABILITIES",
  "what is adyvka engineering philosophy and quote": "ABOUT_PHILOSOPHY_QUOTE",
  "apa filosofi atau quote adyvka": "ABOUT_PHILOSOPHY_QUOTE",
  "apa arti quote code is how i build systems": "ABOUT_PHILOSOPHY_QUOTE",
  "apa filosofi rekayasa adyvka": "ABOUT_PHILOSOPHY_QUOTE",
  "what services and deliverables can adyvka provide for our team": "CONTACT_SERVICES_SCOPE",
  "what can adyvka deliver for our team": "CONTACT_SERVICES_SCOPE",
  "layanan atau jasa apa yang bisa adyvka berikan untuk tim kami": "CONTACT_SERVICES_SCOPE",
  "apa saja deliverable yang bisa dikerjakan adyvka untuk tim": "CONTACT_SERVICES_SCOPE",
  "apakah adyvka menerima konsultasi kode atau review kode": "CONTACT_SERVICES_SCOPE",
  "apakah adyvka bisa diundang untuk workshop atau speaking": "CONTACT_SERVICES_SCOPE"
};

export function findBestAnswer(rawQuery) {
  const lang = detectLanguage(rawQuery);
  const normalized = normalizeText(rawQuery);
  const words = normalized.split(/\s+/).filter(Boolean);
  const tokens = new Set(words);

  let matchedCard = null;

  const cleanQuery = typeof rawQuery === "string" ? rawQuery.trim().toLowerCase() : "";

  // -------------------------------------------------------------------------
  // PRIORITY -1: DIRECT SUGGESTION CHIP MATCH (100% DETERMINISTIC ROUTING)
  // Guarantees every contextual chip returns its unique, tailored deep-dive card
  // -------------------------------------------------------------------------
  if (cleanQuery && SUGGESTION_EXACT_MAP[cleanQuery]) {
    const cardKey = SUGGESTION_EXACT_MAP[cleanQuery];
    if (KNOWLEDGE_REGISTRY[cardKey]) {
      const card = KNOWLEDGE_REGISTRY[cardKey];
      const localized = card[lang] || card.en || card.id;
      return {
        title: localized.title,
        text: localized.text,
        links: localized.links,
        lang,
      };
    }
  }

  // -------------------------------------------------------------------------
  // PRIORITY SUB-TOPIC & DEEP-DIVE ROUTING FOR CUSTOM QUERIES (100% BILINGUAL)
  // Supports comprehensive Indonesian and English natural language questions
  // -------------------------------------------------------------------------

  // 0. Website Page & Section Specific Inquiries
  if (
    normalized.includes("david malan") ||
    normalized.includes("david j malan") ||
    normalized.includes("role model") ||
    normalized.includes("panutan") ||
    normalized.includes("tokoh panutan") ||
    ((normalized.includes("menginspirasi") || normalized.includes("inspirasi") || normalized.includes("inspires")) && (normalized.includes("adyvka") || normalized.includes("kamu") || normalized.includes("koding")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.INTERVIEW_ROLE_MODEL;
  }
  else if (
    normalized.includes("kekurangan") ||
    normalized.includes("kelemahan") ||
    normalized.includes("weakness") ||
    normalized.includes("weaknesses") ||
    normalized.includes("areas for growth") ||
    normalized.includes("area pengembangan") ||
    normalized.includes("titik lemah")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.INTERVIEW_WEAKNESSES;
  }
  else if (
    normalized.includes("kegagalan") ||
    normalized.includes("pernah gagal") ||
    normalized.includes("biggest failure") ||
    normalized.includes("time adyvka failed") ||
    normalized.includes("setback") ||
    normalized.includes("setbacks") ||
    (normalized.includes("gagal") && (normalized.includes("proyek") || normalized.includes("hidup") || normalized.includes("pernah") || normalized.includes("adyvka") || normalized.includes("ceritakan")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.INTERVIEW_FAILURE_RESILIENCE;
  }
  else if (
    normalized.includes("projek besar") ||
    normalized.includes("proyek besar") ||
    normalized.includes("ide besar") ||
    normalized.includes("rencana ide besar") ||
    normalized.includes("proyek ambisius") ||
    normalized.includes("ambitious idea") ||
    normalized.includes("big future project") ||
    normalized.includes("ambitious systems") ||
    (normalized.includes("ambisi") && (normalized.includes("masa depan") || normalized.includes("proyek") || normalized.includes("projek")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.INTERVIEW_BIG_FUTURE_PROJECT;
  }
  else if (
    (normalized.includes("studi lanjut") || normalized.includes("kuliah") || normalized.includes("universitas") || normalized.includes("undergraduate") || normalized.includes("sarjana") || normalized.includes("degree") || normalized.includes("higher education")) &&
    (normalized.includes("rencana") || normalized.includes("impian") || normalized.includes("plan") || normalized.includes("goals") || normalized.includes("kemana") || normalized.includes("dimana") || normalized.includes("study"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.INTERVIEW_FUTURE_STUDY_CAREER;
  }
  else if (
    (normalized.includes("magang") || normalized.includes("kelas 12") || normalized.includes("ardyanda")) &&
    (normalized.includes("kesibukan") || normalized.includes("aktifitas") || normalized.includes("aktivitas") || normalized.includes("rutinitas") || normalized.includes("kegiatan") || normalized.includes("sehari hari") || normalized.includes("routine"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.INTERVIEW_CURRENT_ACTIVITIES;
  }
  else if (
    (normalized.includes("membagi waktu") || normalized.includes("manajemen waktu") || normalized.includes("manage time") || normalized.includes("time management") || normalized.includes("prioritas kerja")) &&
    (normalized.includes("magang") || normalized.includes("sekolah") || normalized.includes("freelance") || normalized.includes("proyek") || normalized.includes("adyvka") || normalized.includes("belajar"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.INTERVIEW_TIME_MANAGEMENT;
  }
  else if (
    normalized.includes("konflik") ||
    normalized.includes("perbedaan pendapat") ||
    normalized.includes("team conflict") ||
    normalized.includes("team conflicts") ||
    normalized.includes("technical disagreement") ||
    normalized.includes("perselisihan teknis") ||
    (normalized.includes("beda pendapat") && normalized.includes("tim"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.INTERVIEW_TEAM_CONFLICT;
  }
  else if (
    (normalized.includes("mengapa") || normalized.includes("kenapa") || normalized.includes("why") || normalized.includes("motivasi")) &&
    (normalized.includes("rekayasa perangkat lunak") || normalized.includes("software engineering") || normalized.includes("computer science") || normalized.includes("jurusan rpl") || normalized.includes("memilih koding") || normalized.includes("memilih coding"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.INTERVIEW_WHY_CS;
  }
  else if (
    normalized.includes("bisa adyvka lakukan") ||
    normalized.includes("bisa dilakukan adyvka") ||
    normalized.includes("yang bisa adyvka") ||
    normalized.includes("adyvka bisa apa") ||
    normalized.includes("bisa apa saja") ||
    normalized.includes("bisa apa adyvka") ||
    normalized.includes("apa yang bisa dikerjakan") ||
    normalized.includes("apa saja yang bisa dilakukan") ||
    normalized.includes("what can adyvka do") ||
    normalized.includes("what is adyvka capable of") ||
    normalized.includes("what can adyvka build") ||
    normalized.includes("what does adyvka do") ||
    (normalized.includes("kemampuan") && normalized.includes("adyvka")) ||
    (normalized.includes("kapabilitas") && normalized.includes("adyvka")) ||
    ((tokens.has("bisa") || tokens.has("mampu")) && (tokens.has("lakukan") || tokens.has("buat") || tokens.has("kerjakan") || tokens.has("bikin"))) ||
    ((tokens.has("can") || tokens.has("capable")) && (tokens.has("do") || tokens.has("build") || tokens.has("deliver") || tokens.has("create")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.WHAT_ADYVKA_CAN_DO;
  }
  else if (
    normalized.includes("apa yang dibuat") ||
    normalized.includes("apa yang dibangun") ||
    normalized.includes("projek apa saja yang dibuat") ||
    normalized.includes("proyek apa saja yang dibuat") ||
    (tokens.has("dibuat") && (tokens.has("proyek") || tokens.has("projek") || tokens.has("software") || tokens.has("aplikasi") || tokens.has("karya")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.LIST_PROJECTS;
  }
  else if (
    (normalized.includes("2021") && normalized.includes("2026")) ||
    normalized.includes("two tracks") ||
    normalized.includes("six years") ||
    normalized.includes("enam tahun") ||
    (normalized.includes("cerita") && (normalized.includes("2021") || normalized.includes("perjalanan"))) ||
    (normalized.includes("timeline") && (normalized.includes("about") || normalized.includes("karier") || normalized.includes("career") || normalized.includes("perjalanan") || normalized.includes("teknis") || normalized.includes("hidup")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.TWO_TRACKS_TIMELINE;
  }
  else if (
    normalized.includes("right now") ||
    normalized.includes("open in the tabs") ||
    normalized.includes("sedang dibuka di tab") ||
    ((normalized.includes("saat ini") || normalized.includes("sekarang") || normalized.includes("currently") || normalized.includes("right now")) &&
     (normalized.includes("fokus") || normalized.includes("focus") || normalized.includes("dikerjakan") || normalized.includes("working on") || normalized.includes("bangun") || normalized.includes("building") || normalized.includes("aktivitas") || normalized.includes("activities") || normalized.includes("sibuk") || normalized.includes("kesibukan") || normalized.includes("projek saat ini") || normalized.includes("proyek saat ini")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ABOUT_CURRENT_FOCUS;
  }
  else if (
    normalized.includes("what is next") ||
    normalized.includes("whats next") ||
    normalized.includes("next chapter") ||
    normalized.includes("bab berikutnya") ||
    (normalized.includes("2027") && (normalized.includes("lulus") || normalized.includes("graduate") || normalized.includes("graduating") || normalized.includes("kelulusan") || normalized.includes("rencana") || normalized.includes("karier") || normalized.includes("kuliah"))) ||
    ((normalized.includes("rencana") || normalized.includes("plan") || normalized.includes("direction") || normalized.includes("tujuan")) && (normalized.includes("ke depan") || normalized.includes("masa depan") || normalized.includes("future") || normalized.includes("next") || normalized.includes("karier")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ABOUT_WHATS_NEXT;
  }
  else if (
    normalized.includes("core capabilities") ||
    normalized.includes("beyond the code") ||
    (normalized.includes("soft skill") || normalized.includes("soft skills") || normalized.includes("non teknis") || normalized.includes("interpersonal") || normalized.includes("karakter") || normalized.includes("kemampuan inti"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ABOUT_CORE_CAPABILITIES;
  }
  else if (
    normalized.includes("quote") ||
    normalized.includes("kutipan") ||
    normalized.includes("code is how i build") ||
    normalized.includes("built early kept building") ||
    ((normalized.includes("filosofi") || normalized.includes("philosophy") || normalized.includes("prinsip")) && (normalized.includes("koding") || normalized.includes("coding") || normalized.includes("rekayasa") || normalized.includes("engineering") || normalized.includes("kerja") || normalized.includes("hidup")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ABOUT_PHILOSOPHY_QUOTE;
  }
  else if (
    normalized.includes("what i can deliver") ||
    normalized.includes("deliver for your team") ||
    normalized.includes("deliver for our team") ||
    (normalized.includes("deliverables") && (normalized.includes("team") || normalized.includes("tim") || normalized.includes("jasa") || normalized.includes("layanan"))) ||
    ((normalized.includes("layanan") || normalized.includes("services") || normalized.includes("jasa") || normalized.includes("lingkup kerja") || normalized.includes("scope of work")) && (normalized.includes("tim") || normalized.includes("team") || normalized.includes("perusahaan") || normalized.includes("klien") || normalized.includes("adyvka") || normalized.includes("bisa"))) ||
    ((normalized.includes("konsultasi") || normalized.includes("consultation")) && (normalized.includes("kode") || normalized.includes("code") || normalized.includes("arsitektur") || normalized.includes("review"))) ||
    ((normalized.includes("workshop") || normalized.includes("speaking") || normalized.includes("pembicara") || normalized.includes("narasumber")) && (normalized.includes("undang") || normalized.includes("invite") || normalized.includes("bisa") || normalized.includes("terima") || normalized.includes("isi")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CONTACT_SERVICES_SCOPE;
  }

  // 1. Direct Contact Sub-Topics
  else if (
    normalized.includes("whatsapp hotline") ||
    ((tokens.has("whatsapp") || tokens.has("wa")) && (tokens.has("hotline") || tokens.has("reach") || tokens.has("kontak") || tokens.has("nomor") || tokens.has("channel")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CONTACT_WHATSAPP;
  }
  else if (
    normalized.includes("project email") || normalized.includes("send direct project email") ||
    ((tokens.has("email") || tokens.has("surel")) && (tokens.has("proyek") || tokens.has("project") || tokens.has("direct") || tokens.has("resmi") || tokens.has("official")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CONTACT_EMAIL;
  }
  else if (
    normalized.includes("github and linkedin profile links") ||
    ((tokens.has("github") || tokens.has("linkedin")) && (tokens.has("link") || tokens.has("profil") || tokens.has("profile") || tokens.has("links")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CONTACT_SOCIAL;
  }

  // 2. Semarang Survival Deep-Dives
  else if (
    (normalized.includes("semarang") || normalized.includes("survival")) &&
    (normalized.includes("zero capital") || normalized.includes("generate profits") || normalized.includes("generating millions") || normalized.includes("modal nol") || normalized.includes("modal 0") || normalized.includes("jutaan rupiah") || normalized.includes("keuntungan") || normalized.includes("omzet") || normalized.includes("omset"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SEMARANG_PROFIT_DEEPDIVE;
  }
  else if (
    (normalized.includes("semarang") || normalized.includes("survival")) &&
    (normalized.includes("mindset") || normalized.includes("grit") || normalized.includes("mental") || normalized.includes("wirausaha") || normalized.includes("entrepreneurial") || normalized.includes("kegigihan"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SEMARANG_MINDSET_DEEPDIVE;
  }
  else if (
    (normalized.includes("semarang") || normalized.includes("survival")) &&
    (normalized.includes("daily") || normalized.includes("harian") || normalized.includes("sehari hari") || normalized.includes("street smarts") || normalized.includes("rutinitas") || normalized.includes("hustle") || normalized.includes("kehidupan sehari"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SEMARANG_DAILY_DEEPDIVE;
  }

  // 3. Databank ERP Deep-Dives
  else if (
    normalized.includes("databank") &&
    (normalized.includes("scraping") || normalized.includes("puppeteer") || normalized.includes("isdp"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.DATABANK_SCRAPING_DEEPDIVE;
  }
  else if (
    normalized.includes("databank") &&
    (normalized.includes("90") || normalized.includes("persen") || normalized.includes("percent") || normalized.includes("efisiensi") || normalized.includes("time reduction") || normalized.includes("cut 90"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.DATABANK_METRICS_DEEPDIVE;
  }
  else if (
    normalized.includes("databank") &&
    (normalized.includes("approval") || normalized.includes("persetujuan") || normalized.includes("bertingkat") || normalized.includes("hierarchy") || normalized.includes("tier"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.DATABANK_APPROVAL_DEEPDIVE;
  }
  else if (
    normalized.includes("databank") &&
    (normalized.includes("microservice") || normalized.includes("arsitektur") || normalized.includes("architecture") || normalized.includes("schema") || normalized.includes("backend"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.DATABANK_ARCH_DEEPDIVE;
  }

  // 4. Pusakaku Nusantara Deep-Dives
  else if (
    normalized.includes("pusakaku") &&
    (normalized.includes("gamifi") || normalized.includes("kuis") || normalized.includes("quiz") || normalized.includes("permainan") || normalized.includes("game mechanics"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.PUSAKAKU_GAMIFY_DEEPDIVE;
  }
  else if (
    normalized.includes("pusakaku") &&
    (normalized.includes("peta") || normalized.includes("map") || normalized.includes("3d") || normalized.includes("interaktif"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.PUSAKAKU_ARCH_DEEPDIVE;
  }

  // 5. Terastani AI & IoT Deep-Dives
  else if (
    normalized.includes("terastani") &&
    (normalized.includes("penyakit") || normalized.includes("disease") || normalized.includes("vision") || normalized.includes("visi") || normalized.includes("daun") || normalized.includes("deteksi"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.TERASTANI_AI_DEEPDIVE;
  }
  else if (
    normalized.includes("terastani") &&
    (normalized.includes("iot") || normalized.includes("sensor") || normalized.includes("tanah") || normalized.includes("soil") || normalized.includes("kelembapan") || normalized.includes("moisture") || normalized.includes("irigasi"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.TERASTANI_IOT_DEEPDIVE;
  }

  // 6. RuangTumbuh & Coding Camp Transcript Deep-Dives
  else if (
    (normalized.includes("ruangtumbuh") || normalized.includes("coding camp") || normalized.includes("dbs") || normalized.includes("transkrip") || normalized.includes("transcript")) &&
    (normalized.includes("capstone") || normalized.includes("transkrip") || normalized.includes("transcript") || normalized.includes("rapot") || normalized.includes("nilai") || normalized.includes("score") || normalized.includes("evaluasi") || normalized.includes("evaluation") || normalized.includes("predikat"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CODING_CAMP_TRANSCRIPT_DEEPDIVE;
  }
  else if (
    normalized.includes("ruangtumbuh") &&
    (normalized.includes("time bank") || normalized.includes("timebank") || normalized.includes("kredit waktu") || normalized.includes("social credit") || normalized.includes("peer"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.RUANGTUMBUH_TIMEBANK_DEEPDIVE;
  }
  else if (
    normalized.includes("ruangtumbuh") &&
    (normalized.includes("mental health") || normalized.includes("kesehatan mental") || normalized.includes("masalah") || normalized.includes("problem") || normalized.includes("isu") || normalized.includes("kesenjangan"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.RUANGTUMBUH_PROBLEM_DEEPDIVE;
  }

  // 7. PT Ardyanda Deep-Dives
  else if (
    normalized.includes("ardyanda") &&
    (normalized.includes("pph") || normalized.includes("pph21") || normalized.includes("pph 21") || normalized.includes("payroll") || normalized.includes("gaji") || normalized.includes("pajak"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ARDYANDA_PAYROLL_DEEPDIVE;
  }
  else if (
    normalized.includes("ardyanda") &&
    (normalized.includes("98") || normalized.includes("evaluasi") || normalized.includes("evaluation") || normalized.includes("nilai") || normalized.includes("skor"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ARDYANDA_EVAL_DEEPDIVE;
  }
  else if (
    normalized.includes("ardyanda") &&
    (tokens.has("mc") || normalized.includes("master of ceremony") || normalized.includes("pembawa acara") || normalized.includes("public speaking"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ARDYANDA_MC_DEEPDIVE;
  }

  // 8. PT Intisel Deep-Dives
  else if (
    normalized.includes("intisel") &&
    (normalized.includes("bts") || normalized.includes("1000") || normalized.includes("pemetaan") || normalized.includes("mapping") || normalized.includes("site telekomunikasi"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.INTISEL_BTS_DEEPDIVE;
  }
  else if (
    normalized.includes("intisel") &&
    (normalized.includes("tim") || normalized.includes("team") || normalized.includes("leadership") || normalized.includes("mentoring") || normalized.includes("kepemimpinan") || normalized.includes("bimbingan"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.INTISEL_TEAM_DEEPDIVE;
  }

  // 9. Backpacker Deep-Dives
  else if (
    normalized.includes("backpacker") &&
    (normalized.includes("pelajaran") || normalized.includes("lesson") || normalized.includes("kemandirian") || normalized.includes("independence") || normalized.includes("ketangguhan") || normalized.includes("hikmah"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BACKPACKER_LESSONS_DEEPDIVE;
  }
  else if (
    normalized.includes("backpacker") &&
    (normalized.includes("keuangan") || normalized.includes("finance") || normalized.includes("budget") || normalized.includes("uang") || normalized.includes("biaya") || normalized.includes("currency"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BACKPACKER_FINANCE_DEEPDIVE;
  }

  // 10. CS50 Harvard Deep-Dives
  else if (
    normalized.includes("cs50") &&
    (normalized.includes("kurikulum") || normalized.includes("curriculum") || normalized.includes("silabus") || normalized.includes("algoritma") || normalized.includes("algorithm") || normalized.includes("memori") || normalized.includes("memory") || normalized.includes("materi"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CS50_CURRICULUM_DEEPDIVE;
  }
  else if (
    normalized.includes("cs50") &&
    (normalized.includes("capstone") || normalized.includes("proyek akhir") || normalized.includes("final project") || normalized.includes("proyek capstone"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CS50_PROJECT_DEEPDIVE;
  }

  // 11. AWS Security Deep-Dive
  else if (
    (normalized.includes("aws") || normalized.includes("cloud practitioner")) &&
    (normalized.includes("keamanan") || normalized.includes("security") || normalized.includes("iam") || normalized.includes("well architected") || normalized.includes("kepatuhan"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.AWS_SECURITY_DEEPDIVE;
  }

  // 12. Git Workflow Deep-Dive
  else if (
    (normalized.includes("git") || normalized.includes("github")) &&
    (normalized.includes("branch") || normalized.includes("merge") || normalized.includes("conflict") || normalized.includes("percabangan") || normalized.includes("konflik") || normalized.includes("rebase") || normalized.includes("pull request"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.GIT_WORKFLOW_DEEPDIVE;
  }

  // 13. React Hooks Deep-Dive
  else if (
    normalized.includes("react") &&
    (normalized.includes("hook") || normalized.includes("state") || normalized.includes("lifecycle") || normalized.includes("siklus hidup") || normalized.includes("komponen"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.REACT_HOOKS_DEEPDIVE;
  }

  // 14. Hackathon Strategy & Jury Deep-Dives
  else if (
    normalized.includes("icomfest") &&
    (normalized.includes("juri") || normalized.includes("jury") || normalized.includes("juries") || normalized.includes("alasan") || normalized.includes("memilih pusakaku") || normalized.includes("defense"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ICOMFEST_JURY_DEEPDIVE;
  }
  else if (
    normalized.includes("pnbitc") &&
    (normalized.includes("pitch") || normalized.includes("pitching") || normalized.includes("presentasi") || normalized.includes("live demo"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.PNBITC_PITCH_DEEPDIVE;
  }
  else if (
    normalized.includes("unila") &&
    (normalized.includes("juri") || normalized.includes("jury") || normalized.includes("juries") || normalized.includes("evaluasi") || normalized.includes("feedback") || normalized.includes("masukan"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.UNILA_JURY_DEEPDIVE;
  }
  else if (
    normalized.includes("hackathon") &&
    (normalized.includes("strategi") || normalized.includes("strategy") || normalized.includes("tips") || normalized.includes("playbook") || normalized.includes("menang") || normalized.includes("winning"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.HACKATHON_STRATEGY_DEEPDIVE;
  }

  // 15. Richo Bahari Deep-Dives
  else if (
    (normalized.includes("richo") || normalized.includes("bahari")) &&
    (normalized.includes("lighthouse") || normalized.includes("95") || normalized.includes("performa") || normalized.includes("performance") || normalized.includes("optimasi"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.RICHO_PERF_DEEPDIVE;
  }
  else if (
    (normalized.includes("richo") || normalized.includes("bahari")) &&
    (normalized.includes("katalog") || normalized.includes("catalog") || normalized.includes("maritim") || normalized.includes("marine") || normalized.includes("alat berat") || normalized.includes("equipment"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.RICHO_CATALOG_DEEPDIVE;
  }

  // 16. FitSmart AI Deep-Dives
  else if (
    normalized.includes("fitsmart") &&
    (normalized.includes("nutrisi") || normalized.includes("nutrition") || normalized.includes("diet") || normalized.includes("makanan") || normalized.includes("food") || normalized.includes("gemini"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.FITSMART_AI_DEEPDIVE;
  }
  else if (
    normalized.includes("fitsmart") &&
    (normalized.includes("kalori") || normalized.includes("calorie") || normalized.includes("macro") || normalized.includes("makro") || normalized.includes("tracker") || normalized.includes("pelacakan"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.FITSMART_TRACKER_DEEPDIVE;
  }

  // 17. JavaIsland Deep-Dives
  else if (
    normalized.includes("javaisland") &&
    (normalized.includes("booking") || normalized.includes("pemesanan") || normalized.includes("tiket") || normalized.includes("reservation") || normalized.includes("reservasi"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.JAVAISLAND_BOOKING_DEEPDIVE;
  }
  else if (
    normalized.includes("javaisland") &&
    (normalized.includes("budaya") || normalized.includes("culture") || normalized.includes("heritage") || normalized.includes("virtual tour") || normalized.includes("wisata jawa"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.JAVAISLAND_CULTURE_DEEPDIVE;
  }

  // 18. SemuaBisa Deep-Dives
  else if (
    (normalized.includes("semua bisa") || normalized.includes("semuabisa")) &&
    (normalized.includes("aksesibilitas") || normalized.includes("accessibility") || normalized.includes("screen reader") || normalized.includes("pembaca layar") || normalized.includes("wcag") || normalized.includes("disabilitas"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SEMUABISA_ACCESS_DEEPDIVE;
  }
  else if (
    (normalized.includes("semua bisa") || normalized.includes("semuabisa")) &&
    (normalized.includes("arsitektur") || normalized.includes("architecture") || normalized.includes("modular") || normalized.includes("platform edukasi"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SEMUABISA_ARCH_DEEPDIVE;
  }

  // 19. IDNCourse Deep-Dives
  else if (
    normalized.includes("idncourse") &&
    (normalized.includes("video") || normalized.includes("streaming") || normalized.includes("kuis") || normalized.includes("quiz") || normalized.includes("progres") || normalized.includes("progress"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.IDNCOURSE_LMS_DEEPDIVE;
  }
  else if (
    normalized.includes("idncourse") &&
    (normalized.includes("sertifikat") || normalized.includes("certificate") || normalized.includes("verifikasi") || normalized.includes("otomatis") || normalized.includes("automated"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.IDNCOURSE_CERT_DEEPDIVE;
  }

  // 20. Coffee Shop Deep-Dives
  else if (
    (normalized.includes("coffee") || normalized.includes("kopi")) &&
    (normalized.includes("menu") || normalized.includes("minuman") || normalized.includes("beverage") || normalized.includes("kustomisasi") || normalized.includes("personalization"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.COFFEESHOP_MENU_DEEPDIVE;
  }
  else if (
    (normalized.includes("coffee") || normalized.includes("kopi")) &&
    (normalized.includes("mikro") || normalized.includes("micro") || normalized.includes("interaksi") || normalized.includes("interaction") || normalized.includes("ux") || normalized.includes("ui") || normalized.includes("animasi"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.COFFEESHOP_UX_DEEPDIVE;
  }

  // 21. MyStyle Deep-Dives
  else if (
    normalized.includes("mystyle") &&
    (normalized.includes("keranjang") || normalized.includes("cart") || normalized.includes("checkout") || normalized.includes("belanja") || normalized.includes("persistent"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.MYSTYLE_CART_DEEPDIVE;
  }
  else if (
    normalized.includes("mystyle") &&
    (normalized.includes("katalog") || normalized.includes("catalog") || normalized.includes("grid") || normalized.includes("filter") || normalized.includes("fashion") || normalized.includes("busana"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.MYSTYLE_CATALOG_DEEPDIVE;
  }

  // 22. DeliFood Deep-Dives
  else if (
    normalized.includes("delifood") &&
    (normalized.includes("tracking") || normalized.includes("pelacakan") || normalized.includes("kurir") || normalized.includes("driver") || normalized.includes("rute") || normalized.includes("order"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.DELIFOOD_TRACKING_DEEPDIVE;
  }
  else if (
    normalized.includes("delifood") &&
    (normalized.includes("restoran") || normalized.includes("restaurant") || normalized.includes("menu") || normalized.includes("katalog") || normalized.includes("kuliner"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.DELIFOOD_ARCH_DEEPDIVE;
  }

  // 23. AI Ticket Manager Deep-Dives
  else if (
    normalized.includes("ticket") &&
    (normalized.includes("nlp") || normalized.includes("klasifikasi") || normalized.includes("classification") || normalized.includes("triage") || normalized.includes("otomatis") || normalized.includes("gemini"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.AI_TICKET_AI_DEEPDIVE;
  }
  else if (
    normalized.includes("ticket") &&
    (normalized.includes("sla") || normalized.includes("antrean") || normalized.includes("queue") || normalized.includes("analitik") || normalized.includes("analytics") || normalized.includes("metrik"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.AI_TICKET_CLOUD_DEEPDIVE;
  }

  // 24. Smart Attendance Deep-Dives
  else if (
    (normalized.includes("attendance") || normalized.includes("presensi") || normalized.includes("absensi")) &&
    (normalized.includes("gps") || normalized.includes("geofencing") || normalized.includes("wajah") || normalized.includes("facial") || normalized.includes("biometrik") || normalized.includes("biometric"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ATTENDANCE_BIOMETRIC_DEEPDIVE;
  }
  else if (
    (normalized.includes("attendance") || normalized.includes("presensi") || normalized.includes("absensi")) &&
    (normalized.includes("offline") || normalized.includes("indexeddb") || normalized.includes("sinkronisasi") || normalized.includes("sync"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ATTENDANCE_OFFLINE_DEEPDIVE;
  }

  // 25. QR Scanner Deep-Dives
  else if (
    (normalized.includes("qr") || normalized.includes("barcode")) &&
    (normalized.includes("webrtc") || normalized.includes("kamera") || normalized.includes("camera") || normalized.includes("decode") || normalized.includes("decoding") || normalized.includes("kecepatan"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.QR_DECODE_DEEPDIVE;
  }
  else if (
    (normalized.includes("qr") || normalized.includes("barcode")) &&
    (normalized.includes("check in") || normalized.includes("checkin") || normalized.includes("tiket") || normalized.includes("ticket") || normalized.includes("validasi") || normalized.includes("acara"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.QR_CHECKIN_DEEPDIVE;
  }

  // 26. News App Deep-Dives
  else if (
    normalized.includes("news") &&
    (normalized.includes("api") || normalized.includes("rest") || normalized.includes("agregasi") || normalized.includes("aggregation") || normalized.includes("breaking") || normalized.includes("feed") || normalized.includes("berita"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.NEWS_API_DEEPDIVE;
  }
  else if (
    normalized.includes("news") &&
    (normalized.includes("cache") || normalized.includes("bookmark") || normalized.includes("offline") || normalized.includes("kategori") || normalized.includes("simpan"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.NEWS_CACHE_DEEPDIVE;
  }

  // 27. Quran App Deep-Dives
  else if (
    (normalized.includes("quran") || normalized.includes("al quran") || normalized.includes("alquran")) &&
    (normalized.includes("audio") || normalized.includes("qari") || normalized.includes("murottal") || normalized.includes("suara") || normalized.includes("recitation") || normalized.includes("streaming"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.QURAN_AUDIO_DEEPDIVE;
  }
  else if (
    (normalized.includes("quran") || normalized.includes("al quran") || normalized.includes("alquran")) &&
    (normalized.includes("tajwid") || normalized.includes("tajweed") || normalized.includes("arab") || normalized.includes("arabic") || normalized.includes("tipografi") || normalized.includes("typography") || normalized.includes("warna"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.QURAN_TYPO_DEEPDIVE;
  }

  // 28. Teaching & Leadership Deep-Dives
  else if (
    normalized.includes("lazuardi") &&
    (normalized.includes("kurikulum") || normalized.includes("curriculum") || normalized.includes("materi") || normalized.includes("silabus") || normalized.includes("web") || normalized.includes("html") || normalized.includes("css"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.LAZUARDI_CURRICULUM_DEEPDIVE;
  }
  else if (
    normalized.includes("smpn 45") &&
    (normalized.includes("app inventor") || normalized.includes("kurikulum") || normalized.includes("curriculum") || normalized.includes("mit") || normalized.includes("mobile"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SMPN45_CURRICULUM_DEEPDIVE;
  }
  else if (
    (normalized.includes("ins depok") || normalized.includes("smp ins")) &&
    (normalized.includes("logika") || normalized.includes("logic") || normalized.includes("arsitektur") || normalized.includes("kurikulum") || normalized.includes("curriculum"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SMPINS_CURRICULUM_DEEPDIVE;
  }
  else if (
    normalized.includes("semut") &&
    (normalized.includes("scratch") || normalized.includes("game") || normalized.includes("storytelling") || normalized.includes("cerita") || normalized.includes("mekanik"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SEMUTSEMUT_CURRICULUM_DEEPDIVE;
  }
  else if (
    normalized.includes("hajrabyadl") &&
    (normalized.includes("full stack") || normalized.includes("fullstack") || normalized.includes("roadmap") || normalized.includes("kurikulum") || normalized.includes("mentoring"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.HAJRABYADL_CURRICULUM_DEEPDIVE;
  }
  else if (
    normalized.includes("anshar") &&
    (normalized.includes("figma") || normalized.includes("ui ux") || normalized.includes("ui/ux") || normalized.includes("design system") || normalized.includes("wireframing") || normalized.includes("desain aplikasi"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ALANSHAR_DESIGN_FIGMA_DEEPDIVE;
  }
  else if (
    normalized.includes("anshar") &&
    (normalized.includes("scratch") || normalized.includes("game") || normalized.includes("block") || normalized.includes("permainan"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ALANSHAR_GAME_SCRATCH_DEEPDIVE;
  }
  else if (
    normalized.includes("yasmine") &&
    (normalized.includes("grafis") || normalized.includes("graphic") || normalized.includes("branding") || normalized.includes("desain") || normalized.includes("kurikulum"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.YASMINE_CURRICULUM_DEEPDIVE;
  }
  else if (
    normalized.includes("griyya") &&
    (normalized.includes("game") || normalized.includes("anak") || normalized.includes("young") || normalized.includes("interaktif") || normalized.includes("scratch"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.GRIYYA_CURRICULUM_DEEPDIVE;
  }
  else if (
    (normalized.includes("it fest") || normalized.includes("itfest")) &&
    (normalized.includes("100") || normalized.includes("peserta") || normalized.includes("participant") || normalized.includes("logistik") || normalized.includes("operasional") || normalized.includes("operations"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ITFEST_OPS_DEEPDIVE;
  }
  else if (
    (normalized.includes("osis") || normalized.includes("student council")) &&
    (normalized.includes("acara") || normalized.includes("event") || normalized.includes("program") || normalized.includes("eksekusi") || normalized.includes("proyek") || normalized.includes("sekolah"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.OSIS_PROJECTS_DEEPDIVE;
  }
  else if (
    normalized.includes("barmus") &&
    (normalized.includes("pemberdayaan") || normalized.includes("empowerment") || normalized.includes("dampak") || normalized.includes("impact") || normalized.includes("sosial") || normalized.includes("masyarakat") || normalized.includes("komunitas"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BARMUS_IMPACT_DEEPDIVE;
  }
  else if (
    (normalized.includes("live in") || normalized.includes("live-in")) &&
    (normalized.includes("tani") || normalized.includes("farm") || normalized.includes("desa") || normalized.includes("village") || normalized.includes("labor") || normalized.includes("pertanian") || normalized.includes("buruh") || normalized.includes("masyarakat"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.LIVEIN_LABOR_DEEPDIVE;
  }

  if (matchedCard) {
    const localized = matchedCard[lang] || matchedCard.en || matchedCard.id;
    return {
      title: localized.title,
      text: localized.text,
      links: localized.links,
      lang,
    };
  }

  // -------------------------------------------------------------------------
  // PRIORITY 0: GREETINGS, BOT IDENTITY, GRATITUDE & DIRECT CONTACT
  // -------------------------------------------------------------------------

  // 1. Greetings (Halo, Hai, Assalamu'alaikum, Good Morning/Afternoon/Evening)
  if (
    tokens.has("halo") || tokens.has("hai") || tokens.has("hei") || tokens.has("hello") || tokens.has("hi") || tokens.has("hey") ||
    normalized.includes("assalamu alaikum") || normalized.includes("assalamualaikum") ||
    normalized.includes("selamat pagi") || normalized.includes("selamat siang") || normalized.includes("selamat sore") || normalized.includes("selamat malam") ||
    normalized.includes("good morning") || normalized.includes("good afternoon") || normalized.includes("good evening")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.GREETINGS;
  }

  // 2. Bot Identity & Capabilities
  else if (
    tokens.has("botidentity") ||
    normalized.includes("siapa kamu") || normalized.includes("kamu siapa") ||
    normalized.includes("bot apa") || normalized.includes("asisten apa") ||
    normalized.includes("who are you") || normalized.includes("what can you do") ||
    normalized.includes("bisa bantu apa") || normalized.includes("apa saja yang bisa ditanyakan") ||
    normalized.includes("kemampuan bot") || normalized.includes("fitur chatbot")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BOT_IDENTITY;
  }

  // 3. Gratitude & Appreciation
  else if (
    tokens.has("terimakasih") || tokens.has("makasih") || tokens.has("makasi") || tokens.has("tengkyu") ||
    tokens.has("thanks") || normalized.includes("thank you") ||
    tokens.has("keren") || tokens.has("mantap") || tokens.has("hebat") ||
    tokens.has("awesome") || tokens.has("amazing") || tokens.has("impressive") || tokens.has("fantastic") || tokens.has("brilliant") ||
    normalized.includes("awesome job") || normalized.includes("great job") || normalized.includes("good job") || normalized.includes("well done")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.GRATITUDE_THANKS;
  }

  // 4. Contact, WhatsApp, Phone, Email & Direct Social Reach Out
  else if (
    !tokens.has("sertifikat") && !tokens.has("certificate") && !tokens.has("kursus") && !tokens.has("course") &&
    (
      tokens.has("whatsapp") || tokens.has("wa") || tokens.has("telepon") || tokens.has("phone") || tokens.has("call") || tokens.has("hp") ||
      tokens.has("surel") || tokens.has("email") || tokens.has("kontak") || tokens.has("contact") || tokens.has("reach") ||
      normalized.includes("nomor wa") || normalized.includes("no wa") || normalized.includes("nomor telepon") || normalized.includes("no telepon") ||
      normalized.includes("nomor hp") || normalized.includes("chat wa") || normalized.includes("hubungi") ||
      normalized.includes("kontak resmi") || normalized.includes("reach out") || normalized.includes("contact him") || normalized.includes("how can i contact") ||
      ((tokens.has("github") || tokens.has("linkedin") || tokens.has("instagram") || tokens.has("tiktok") || tokens.has("youtube")) &&
       (tokens.has("akun") || tokens.has("account") || tokens.has("profile") || tokens.has("profil") || tokens.has("link") || tokens.has("url") || tokens.has("handle") || tokens.has("sosmed") || tokens.has("medsos") || tokens.has("channel") || tokens.has("username") || tokens.has("follow")))
    )
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CONTACT;
  }

  // 5. CV / Resume Download
  else if (
    (tokens.has("cv") || tokens.has("resume") || normalized.includes("download cv") || normalized.includes("unduh cv") ||
     normalized.includes("unduh resume") || normalized.includes("download resume") || normalized.includes("minta cv")) &&
    !tokens.has("richo") && !tokens.has("bahari")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CV_RESUME;
  }

  // 6. Religion & Faith
  else if (
    tokens.has("agama") || tokens.has("islam") || tokens.has("muslim") || tokens.has("keyakinan") ||
    tokens.has("religion") || tokens.has("faith") || tokens.has("spiritual") || tokens.has("ibadah") ||
    normalized.includes("agama apa") || normalized.includes("apa agama")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.RELIGION_FAITH;
  }

  // 7. Family Background & Upbringing
  else if (
    tokens.has("keluarga") || tokens.has("orangtua") || tokens.has("family") || tokens.has("parents") || tokens.has("parent") ||
    tokens.has("ayah") || tokens.has("ibu") || tokens.has("bapak") || tokens.has("saudara") ||
    tokens.has("father") || tokens.has("mother") || tokens.has("dad") || tokens.has("mom") ||
    tokens.has("siblings") || tokens.has("sibling") || tokens.has("brother") || tokens.has("sister") ||
    normalized.includes("orang tua") || normalized.includes("latar belakang keluarga") || normalized.includes("masa kecil") ||
    normalized.includes("father and mother") || normalized.includes("his parents") || normalized.includes("his family")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.FAMILY_BACKGROUND;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 1: SPECIFIC ENTITY MATCHING - INDIVIDUAL PROJECTS (18 CARDS)
  // Check unique project names first before general corporate/work matches
  // -------------------------------------------------------------------------

  // 1. Databank ERP
  else if (
    tokens.has("databank") || normalized.includes("databank erp") || (tokens.has("isdp") && tokens.has("scraping"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.DATABANK_DETAIL;
  }

  // 2. SIM KEPK FK UMJ Project
  else if (
    (tokens.has("kepk") || normalized.includes("sim kepk") || normalized.includes("klirens etik") || normalized.includes("ethical clearance")) &&
    !normalized.includes("pengalaman kerja")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.KEPK_DETAIL;
  }

  // 3. FitSmart AI Health
  else if (
    tokens.has("fitsmart") || normalized.includes("fit smart") || normalized.includes("gemini health")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.FITSMART_DETAIL;
  }

  // 4. TerasTani Urban OS
  else if (
    tokens.has("terastani") || normalized.includes("teras tani") || (tokens.has("tani") && tokens.has("urban"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.TERASTANI_DETAIL;
  }

  // 5. RuangTumbuh
  else if (
    tokens.has("ruangtumbuh") || normalized.includes("ruang tumbuh") || (tokens.has("mental") && tokens.has("health") && tokens.has("proyek"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.RUANGTUMBUH_DETAIL;
  }

  // 6. Java Island Explorer
  else if (
    normalized.includes("java island") || normalized.includes("javaisland") || tokens.has("javaisland")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.JAVAISLAND_DETAIL;
  }

  // 7. Pusakaku
  else if (
    tokens.has("pusakaku") || (tokens.has("pusaka") && (tokens.has("proyek") || tokens.has("budaya")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.PUSAKAKU_DETAIL;
  }

  // 8. SemuaBisa
  else if (
    tokens.has("semuabisa") || normalized.includes("semua bisa") || (tokens.has("disabilitas") && tokens.has("proyek"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SEMUABISA_DETAIL;
  }

  // 9. IDN Course LMS
  else if (
    tokens.has("idncourse") || normalized.includes("idn course")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.IDNCOURSE_DETAIL;
  }

  // 10. Coffee Shop
  else if (
    tokens.has("coffee") || tokens.has("coffeee") || tokens.has("coffeeshop") || tokens.has("coffeee-shop") ||
    normalized.includes("coffee") || normalized.includes("coffeee") ||
    (tokens.has("kopi") && (tokens.has("proyek") || tokens.has("project") || tokens.has("kedai") || tokens.has("kafe") || tokens.has("cafe")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.COFFEESHOP_DETAIL;
  }

  // 11. MyStyle Shoes
  else if (
    tokens.has("mystyle") || (tokens.has("sepatu") && tokens.has("proyek"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.MYSTYLE_DETAIL;
  }

  // 12. DeliFood
  else if (
    tokens.has("delifood") || normalized.includes("deli food")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.DELIFOOD_DETAIL;
  }

  // 13. AI Ticket Manager
  else if (
    normalized.includes("ai ticket") || normalized.includes("ticket manager") || (tokens.has("ticket") && tokens.has("huggingface"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.AI_TICKET_DETAIL;
  }

  // 14. Attendance App (GPS Geofence Mobile)
  else if (
    tokens.has("attendance") || (tokens.has("absensi") && (tokens.has("mobile") || tokens.has("geofence") || tokens.has("selfie")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ATTENDANCE_DETAIL;
  }

  // 15. QR Scanner / Guest Manager
  else if (
    normalized.includes("qr guest") || normalized.includes("qr scanner") || (tokens.has("qr") && (tokens.has("scanner") || tokens.has("tamu") || tokens.has("tiket")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.QR_SCANNER_DETAIL;
  }

  // 16. News App
  else if (
    normalized.includes("news app") || (tokens.has("berita") && tokens.has("mobile"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.NEWS_APP_DETAIL;
  }

  // 17. Quran App
  else if (
    tokens.has("quran") || normalized.includes("al quran") || normalized.includes("al-quran")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.QURAN_APP_DETAIL;
  }

  // 18. CV Richo Bahari Platform (as project)
  else if (
    (tokens.has("richo") || tokens.has("richobahari") || normalized.includes("richo bahari") || normalized.includes("richobahari")) &&
    !tokens.has("magang") && !tokens.has("freelance") && !tokens.has("gaji") &&
    (tokens.has("proyek") || tokens.has("project") || tokens.has("platform") || tokens.has("website") || tokens.has("compro") || tokens.has("katalog") || tokens.has("studi") || tokens.has("case") || tokens.has("lighthouse") || tokens.has("kontraktor") || tokens.has("alat") || tokens.has("berat") || tokens.has("about") || tokens.has("tentang") || tokens.has("ceritakan") || tokens.has("tell") || tokens.has("what") || tokens.has("apa") || tokens.has("arsitektur") || tokens.has("architecture"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.RICHO_BAHARI_DETAIL;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 2: SPECIFIC ENTITY MATCHING - CERTIFICATES (23 INDIVIDUAL CARDS)
  // Check explicit certificate keywords to avoid colliding with skills/accounts
  // -------------------------------------------------------------------------

  // 1. Git with GitHub (Dicoding)
  else if (
    (tokens.has("git") || tokens.has("github")) &&
    (tokens.has("sertifikat") || tokens.has("certificate") || tokens.has("lisensi") || tokens.has("kursus") || tokens.has("course") || normalized.includes("dasar git") || normalized.includes("git github") || normalized.includes("belajar git")) &&
    !tokens.has("akun") && !tokens.has("link") && !tokens.has("profil") && !tokens.has("url") && !tokens.has("hubungi") && !tokens.has("contact")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_GIT_GITHUB;
  }

  // 2. CS50 Harvard
  else if (
    tokens.has("cs50") || tokens.has("cs50x") || tokens.has("harvard") || normalized.includes("cs 50")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_CS50;
  }

  // 3. AWS Cloud Practitioner
  else if (
    tokens.has("aws") || normalized.includes("cloud practitioner") || normalized.includes("amazon web services")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_AWS_CLOUD;
  }

  // 4. Coding Camp Full Stack (Dicoding x DBS)
  else if (
    tokens.has("dbs") || normalized.includes("coding camp") || (tokens.has("camp") && tokens.has("fullstack"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_CODING_CAMP;
  }

  // 5. Frontend Web Developer (Dicoding)
  else if (
    (tokens.has("frontend") || tokens.has("front-end")) &&
    (tokens.has("sertifikat") || tokens.has("certificate") || tokens.has("certification") || tokens.has("dicoding") || normalized.includes("sertifikat frontend") || normalized.includes("sertifikat front end"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_FRONTEND_WEB;
  }

  // 6. Data Analyst (Dicoding)
  else if (
    normalized.includes("data analyst") || normalized.includes("data analisis") || (tokens.has("analyst") && tokens.has("sertifikat"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_DATA_ANALYST;
  }

  // 7. Backend Developer (Dicoding)
  else if (
    (tokens.has("backend") || tokens.has("back-end")) &&
    (tokens.has("sertifikat") || tokens.has("certificate") || tokens.has("certification") || tokens.has("dicoding") || tokens.has("kursus") || normalized.includes("aplikasi back end") || normalized.includes("aplikasi backend"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_BACKEND;
  }

  // 8. Graphic Design (Canva/Fundamentals)
  else if (
    normalized.includes("graphic design") || normalized.includes("desain grafis") || (tokens.has("grafis") && tokens.has("sertifikat"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_GRAPHIC_DESIGN;
  }

  // 9. UI/UX Design (Skilvul)
  else if (
    (normalized.includes("ui ux") || normalized.includes("ui/ux") || tokens.has("figma")) && (tokens.has("skilvul") || tokens.has("sertifikat"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_UIUX_DESIGN;
  }

  // 10. React (Dicoding)
  else if (
    (tokens.has("react") || tokens.has("reactjs")) &&
    (tokens.has("sertifikat") || tokens.has("certificate") || tokens.has("kursus") || tokens.has("course") || tokens.has("lisensi") || normalized.includes("belajar membuat aplikasi web dengan react"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_REACT;
  }

  // 11. JavaScript Dasar (Dicoding)
  else if (
    (tokens.has("javascript") || tokens.has("js")) &&
    (tokens.has("sertifikat") || tokens.has("certificate") || normalized.includes("dasar javascript") || normalized.includes("dasar js") || tokens.has("dicoding"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_JS_DASAR;
  }

  // 12. Web Dasar HTML CSS (Dicoding)
  else if (
    (normalized.includes("web dasar") || normalized.includes("dasar web") || normalized.includes("pemrograman web") || normalized.includes("dasar pemrograman web") || (tokens.has("html") && tokens.has("css"))) &&
    (tokens.has("sertifikat") || tokens.has("certificate") || tokens.has("dicoding") || tokens.has("lisensi") || tokens.has("kursus") || tokens.has("course"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_WEB_DASAR;
  }

  // 13. C Skilvul (Specific)
  else if (
    (tokens.has("c") && tokens.has("skilvul")) || (tokens.has("c") && normalized.includes("dasar c") && tokens.has("sertifikat"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_C_SKILVUL;
  }

  // 14. C Dicoding
  else if (
    tokens.has("c") && (tokens.has("sertifikat") || tokens.has("certificate") || tokens.has("dicoding")) &&
    (tokens.has("pemrograman") || tokens.has("programming") || normalized.includes("pemrograman c"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_C_MEMULAI;
  }

  // 15. Python Fundamentals (DQLab / Skilvul)
  else if (
    tokens.has("python") && (tokens.has("fundamentals") || tokens.has("dqlab")) && (tokens.has("sertifikat") || tokens.has("certificate"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_PYTHON_FUND;
  }

  // 16. Python Memulai (Dicoding)
  else if (
    tokens.has("python") && (tokens.has("dicoding") || tokens.has("sertifikat") || tokens.has("certificate"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_PYTHON_MEMULAI;
  }

  // 17. Logika Pemrograman (Dicoding)
  else if (
    tokens.has("logika") || normalized.includes("logika pemrograman") || normalized.includes("programming logic")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_LOGIKA;
  }

  // 18. Prompt Engineering (Dicoding)
  else if (
    normalized.includes("prompt engineering") || normalized.includes("prompt engineer")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_PROMPT_ENG;
  }

  // 19. Karier Software Developer (Dicoding)
  else if (
    normalized.includes("meniti karier") || (tokens.has("karier") && tokens.has("developer"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_KARIER;
  }

  // 20. Financial Literacy (Dicoding)
  else if (
    normalized.includes("financial literacy") || normalized.includes("literasi keuangan") || (tokens.has("keuangan") && tokens.has("sertifikat"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_FINANCIAL;
  }

  // 21. AI Basics (Dicoding)
  else if (
    (normalized.includes("dasar ai") || normalized.includes("artificial intelligence basics")) && (tokens.has("sertifikat") || tokens.has("certificate"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_AI_BASICS;
  }

  // 22. Google Developer Groups (GDG)
  else if (
    tokens.has("gdg") || normalized.includes("google developer") || normalized.includes("developer groups")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_GDG;
  }

  // 23. English Proficiency Assessment
  else if (
    normalized.includes("english proficiency") || normalized.includes("kemampuan bahasa inggris") || (tokens.has("english") && tokens.has("assessment"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_ENGLISH;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 3: SPECIFIC WORK, TEACHING & LEADERSHIP EXPERIENCES
  // -------------------------------------------------------------------------

  // 1. PT Ardyanda Digital Inovasi (Magang 1 Tahun)
  else if (
    tokens.has("ardyanda") || normalized.includes("pt ardyanda") || normalized.includes("magang ardyanda") ||
    (tokens.has("payroll") && (tokens.has("kasbon") || tokens.has("presisi") || tokens.has("100")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.PT_ARDYANDA_DETAIL;
  }

  // 2. PT Intisel Prodaktifakom (Work Experience)
  else if (
    tokens.has("intisel") || normalized.includes("pt intisel") || (tokens.has("intisel") && tokens.has("freelance"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.PT_INTISEL_DETAIL;
  }

  // 3. CV Richo Bahari (Work Experience)
  else if (
    (tokens.has("richo") || tokens.has("richobahari") || normalized.includes("richo bahari") || normalized.includes("richobahari")) &&
    (tokens.has("pengalaman") || tokens.has("experience") || tokens.has("kerja") || tokens.has("magang") || tokens.has("freelance") || tokens.has("role") || tokens.has("peran") || tokens.has("klien") || tokens.has("client"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CV_RICHO_BAHARI_DETAIL;
  }

  // 4. SIM KEPK FK UMJ (Work Experience Contract)
  else if (
    (tokens.has("umj") || tokens.has("muhammadiyah") || normalized.includes("fakultas kedokteran umj")) &&
    !normalized.includes("proyek saja")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.KEPK_UMJ_DETAIL;
  }

  // 5. SMPN 25 Depok (Teacher & Principal Training)
  else if (
    normalized.includes("smpn 25") || normalized.includes("smp 25") ||
    (tokens.has("guru") && tokens.has("kepala") && tokens.has("sekolah")) ||
    (tokens.has("pelatihan") && tokens.has("guru") && tokens.has("depok"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SMPN25_TEACHER_TRAINING;
  }

  // 6. SMA Lazuardi GCS
  else if (
    tokens.has("lazuardi") || normalized.includes("sma lazuardi")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SMA_LAZUARDI_DETAIL;
  }

  // 7. SMPN 45 Bandung
  else if (
    normalized.includes("smpn 45") || normalized.includes("smp 45")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SMPN_45_DETAIL;
  }

  // 8. SMP INS Depok
  else if (
    tokens.has("ins") || normalized.includes("smp ins")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SMP_INS_DEPOK_DETAIL;
  }

  // 9. Sekolah Semut-Semut The Natural School
  else if (
    tokens.has("semut") || normalized.includes("semut semut") || normalized.includes("the natural school")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SEMUT_SEMUT_DETAIL;
  }

  // 10. Hajrabyadl
  else if (
    tokens.has("hajrabyadl") || normalized.includes("hajra byadl") || tokens.has("hajra")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.HAJRABYADL_DETAIL;
  }

  // 11. SD/SMP Al-Anshar App Design & Game Development
  else if (tokens.has("anshar") || tokens.has("alanshar")) {
    if (tokens.has("game") || tokens.has("scratch")) {
      matchedCard = KNOWLEDGE_REGISTRY.AL_ANSHAR_GAME_DETAIL;
    } else {
      matchedCard = KNOWLEDGE_REGISTRY.AL_ANSHAR_DESIGN_DETAIL;
    }
  }

  // 13. MTs Yasmine
  else if (
    tokens.has("yasmine") || normalized.includes("mts yasmine")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.MTS_YASMINE_DETAIL;
  }

  // 14. Griyya Sunnah
  else if (
    tokens.has("griyya") || tokens.has("griya") || normalized.includes("griyya sunnah")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.GRIYYA_SUNNAH_DETAIL;
  }

  // 15. Solo Backpacker 3 Countries
  else if (
    tokens.has("backpacker") || tokens.has("backpacking") ||
    normalized.includes("solo backpacker") || normalized.includes("3 negara") || normalized.includes("tiga negara") ||
    (tokens.has("singapura") && tokens.has("malaysia"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BACKPACKER_DETAIL;
  }

  // 16. Business & Life Survival Semarang
  else if (
    tokens.has("semarang") || normalized.includes("life survival") || normalized.includes("business survival") ||
    (tokens.has("survival") && (tokens.has("semarang") || tokens.has("bisnis") || tokens.has("nol rupiah")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SEMARANG_SURVIVAL_DETAIL;
  }

  // 17. Event Division Leader OSIS SMK IDN
  else if (
    tokens.has("osis") || normalized.includes("divisi acara") || normalized.includes("osis smk idn")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.OSIS_LEADERSHIP_DETAIL;
  }

  // 18. Event Coordinator IT FEST 2025
  else if (
    (tokens.has("fest") || tokens.has("festival")) && (tokens.has("koordinator") || tokens.has("panitia") || tokens.has("lead") || tokens.has("coordinator"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.IT_FEST_DETAIL;
  }

  // 19. Barmus Voluntrip
  else if (
    tokens.has("barmus") || tokens.has("voluntrip") || normalized.includes("relawan barmus")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BARMUS_VOLUNTRIP_DETAIL;
  }

  // 20. Live In Pedesaan
  else if (
    tokens.has("livein") || normalized.includes("live in") || normalized.includes("petani tradisional") || (tokens.has("pedesaan") && tokens.has("petani"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.LIVE_IN_DETAIL;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 4: SPECIFIC ACHIEVEMENTS & BOOKS
  // -------------------------------------------------------------------------

  // 0. General Competition Awards Overview (check if asking for all awards or listing multiple competitions)
  else if (
    (tokens.has("prestasi") || tokens.has("penghargaan") || tokens.has("lomba") || tokens.has("juara") || tokens.has("award") || tokens.has("awards") || tokens.has("competition") || tokens.has("competitions")) &&
    (tokens.has("semua") || tokens.has("all") || tokens.has("daftar") || tokens.has("list") || (tokens.has("pnbitc") && tokens.has("icomfest")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ACHIEVEMENTS;
  }

  // 1. PNBITC #18 Bali (Juara 2 Nasional - TerasTani)
  else if (
    tokens.has("pnbitc") || normalized.includes("pnbitc") ||
    normalized.includes("2nd place") || normalized.includes("runner up") || normalized.includes("juara 2") ||
    (tokens.has("bali") && (tokens.has("lomba") || tokens.has("juara") || tokens.has("politeknik") || tokens.has("competition") || tokens.has("kompetisi")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ACHIEV_PNBITC;
  }

  // 2. ICOMFEST 2025 (Juara 1 Nasional - PusakaKu)
  else if (
    tokens.has("icomfest") || (tokens.has("icom") && tokens.has("fest")) ||
    normalized.includes("1st place national") || normalized.includes("1st place web design") ||
    normalized.includes("juara 1 web design") || normalized.includes("juara 1 nasional") ||
    (tokens.has("1st") && tokens.has("place") && (tokens.has("national") || tokens.has("web") || tokens.has("competition") || tokens.has("champion") || tokens.has("award"))) ||
    ((tokens.has("juara") || tokens.has("champion")) && (tokens.has("1") || tokens.has("satu") || tokens.has("pertama") || tokens.has("1st")) && (tokens.has("icomfest") || tokens.has("nasional") || tokens.has("national") || tokens.has("uad") || tokens.has("web") || tokens.has("design")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ACHIEV_ICOMFEST;
  }

  // 3. UNILA National Finalist (SemuaBisa)
  else if (
    tokens.has("unila") || normalized.includes("universitas lampung") ||
    normalized.includes("finalist national") || normalized.includes("finalis nasional") ||
    normalized.includes("top 5 finalist") || normalized.includes("top 5 finalis") ||
    (tokens.has("finalist") && (tokens.has("national") || tokens.has("unila") || tokens.has("lampung") || tokens.has("web") || tokens.has("dev") || tokens.has("competition"))) ||
    (tokens.has("finalis") && (tokens.has("nasional") || tokens.has("unila") || tokens.has("lampung") || tokens.has("web") || tokens.has("dev") || tokens.has("kompetisi")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ACHIEV_UNILA;
  }

  // 4. Poster Competition (dummy-new-achievement)
  else if (
    tokens.has("poster") || normalized.includes("dummy new achievement") || normalized.includes("idul adha festival") ||
    normalized.includes("best poster") || (tokens.has("desain") && tokens.has("poster"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ACHIEV_POSTER;
  }

  // 5. Book 1: Game Making Without Coding
  else if (
    tokens.has("buku") && (tokens.has("game") || tokens.has("scratch") || tokens.has("construct") || tokens.has("tanpa coding"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BOOK_GAME_SCRATCH;
  }

  // 6. Book 2: Modern Web Development with Frameworks
  else if (
    tokens.has("buku") && (tokens.has("web") || tokens.has("website") || tokens.has("framework") || tokens.has("modern"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BOOK_WEB_FRAMEWORK;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 5: CATEGORY OVERVIEWS & GENERAL DOMAINS
  // -------------------------------------------------------------------------
  // All 20 Experiences
  else if (
    normalized.includes("semua pengalaman") || normalized.includes("total pengalaman") || 
    normalized.includes("20 pengalaman") || normalized.includes("all experiences") || 
    normalized.includes("3 pilar") || (tokens.has("pengalaman") && tokens.has("semua")) ||
    normalized.includes("seluruh 20 pengalaman")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ALL_EXPERIENCES;
  }

  // Project Count (e.g. berapa banyak projek yang sudah dikerjakan, how many projects has adyvka built)
  else if (
    tokens.has("jumlahproyek") ||
    (((tokens.has("how") && (tokens.has("many") || tokens.has("much"))) || tokens.has("berapa") || tokens.has("jumlah") || tokens.has("total") || tokens.has("18")) &&
     (tokens.has("proyek") || tokens.has("projek") || tokens.has("project") || tokens.has("projects") || tokens.has("aplikasi") || tokens.has("built") || tokens.has("app") || tokens.has("apps") || tokens.has("applications") || tokens.has("made"))) ||
    normalized.includes("how many project") || normalized.includes("how many app")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.COUNT_PROJECTS;
  }

  // Project Catalog / List
  else if (
    tokens.has("katalogproyek") || tokens.has("katalog") || normalized.includes("daftar proyek") || normalized.includes("list project") ||
    normalized.includes("list all projects") || normalized.includes("show all projects") || normalized.includes("what applications has he built") ||
    normalized.includes("what apps has he built") || normalized.includes("what has he built") ||
    normalized.includes("proyek apa saja") || normalized.includes("apa saja proyek") || 
    (tokens.has("sebutkan") && tokens.has("proyek")) || (tokens.has("proyek") && tokens.has("portofolio")) ||
    (tokens.has("all") && (tokens.has("projects") || tokens.has("apps") || tokens.has("applications") || tokens.has("proyek")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.LIST_PROJECTS;
  }

  // Work Experiences (Overview)
  else if (
    normalized.includes("pengalaman kerja") || normalized.includes("work experience") || 
    normalized.includes("pekerjaan") || (tokens.has("kerja") && (tokens.has("kantor") || tokens.has("perusahaan") || tokens.has("industri")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.WORK_EXPERIENCE;
  }

  // Teaching Experiences (Overview)
  else if (
    tokens.has("mengajar") || tokens.has("teaching") || tokens.has("guru") || tokens.has("mentorship") || 
    tokens.has("pelatihan") || normalized.includes("pengalaman mengajar") || tokens.has("instruktur")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.TEACHING_EXPERIENCE;
  }

  // Leadership Experiences (Overview)
  else if (
    tokens.has("kepemimpinan") || tokens.has("leadership") || tokens.has("organisasi") || tokens.has("ekspedisi")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.LEADERSHIP_EXPERIENCE;
  }

  // Certificates Overview
  else if (
    tokens.has("sertifikat") || tokens.has("certificate") || tokens.has("certificates") || tokens.has("sertifikasi") || tokens.has("certification")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERTIFICATES;
  }

  // Achievements Overview
  else if (
    tokens.has("prestasi") || tokens.has("penghargaan") || tokens.has("lomba") || tokens.has("juara") || 
    tokens.has("award") || tokens.has("awards") || tokens.has("competition") || tokens.has("competitions")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ACHIEVEMENTS;
  }

  // Books Overview
  else if (
    tokens.has("buku") || tokens.has("book") || tokens.has("books") || tokens.has("penulis") || tokens.has("author") || tokens.has("publikasi")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BOOKS;
  }

  // GPA / Academic Record (96/100)
  else if (
    tokens.has("gpa") || tokens.has("ipk") || tokens.has("rapot") || tokens.has("nilai") || 
    tokens.has("grade") || tokens.has("grades") || tokens.has("akademik") || tokens.has("academic") || tokens.has("96")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.GPA_ACADEMIC;
  }

  // Rates & Pricing (checked before general tech stack)
  else if (
    tokens.has("tarif") || tokens.has("harga") || tokens.has("biaya") || tokens.has("gaji") || 
    tokens.has("fee") || tokens.has("fees") || tokens.has("rate") || tokens.has("rates") || tokens.has("pricing") ||
    tokens.has("charge") || tokens.has("charges") || tokens.has("cost") || tokens.has("costs") ||
    normalized.includes("biaya jasa") || normalized.includes("tarif koding") || normalized.includes("tarif projek") ||
    normalized.includes("how much does he charge") || normalized.includes("what are his rates") || normalized.includes("service fee")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.RATES_AND_PRICING;
  }

  // Work Availability & Employment Model
  else if (
    tokens.has("ketersediaankerja") || tokens.has("availability") || tokens.has("available") || tokens.has("ketersediaan") ||
    tokens.has("remote") || tokens.has("freelance") || tokens.has("part-time") || tokens.has("full-time") ||
    tokens.has("parttime") || tokens.has("fulltime") || tokens.has("kontrak") ||
    normalized.includes("ketersediaan kerja") || normalized.includes("open to work") || normalized.includes("available for freelance") ||
    normalized.includes("can i hire") || normalized.includes("hire him") || normalized.includes("open for hire")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.WORK_AVAILABILITY;
  }

  // English Fluency & Communication
  else if (
    tokens.has("inggris") || tokens.has("english") ||
    normalized.includes("bahasa inggris") || normalized.includes("kemampuan bahasa inggris")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ENGLISH_FLUENCY;
  }

  // Mobile Applications
  else if (
    tokens.has("mobile") || tokens.has("flutter") || tokens.has("android") || (tokens.has("aplikasi") && tokens.has("hp"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.MOBILE_APPS;
  }

  // AI Capabilities
  else if (
    tokens.has("ai") || tokens.has("artificial") || tokens.has("intelligence") || tokens.has("gemini") || tokens.has("llm")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.AI_CAPABILITIES;
  }

  // Hobbies & Interests
  else if (
    tokens.has("hobi") || tokens.has("hobby") || tokens.has("hobbies") || tokens.has("minat") || 
    tokens.has("leisure") || tokens.has("interest") || tokens.has("interests") || tokens.has("luang") ||
    normalized.includes("free time") || normalized.includes("spare time") || normalized.includes("in his free time")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.HOBBIES_INTERESTS;
  }

  // Vision & Future Goals
  else if (
    tokens.has("visi") || tokens.has("vision") || tokens.has("cita") || normalized.includes("cita cita") ||
    tokens.has("impian") || tokens.has("tujuan") || tokens.has("goal") || tokens.has("goals") || tokens.has("future")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.VISION_FUTURE_GOALS;
  }

  // Strengths & Why Hire
  else if (
    tokens.has("kelebihan") || tokens.has("keunggulan") || tokens.has("kekuatan") || 
    tokens.has("hire") || tokens.has("rekrut") || normalized.includes("why hire") || 
    (tokens.has("kenapa") && (tokens.has("rekrut") || tokens.has("hire") || tokens.has("pilih"))) ||
    (tokens.has("mengapa") && (tokens.has("rekrut") || tokens.has("hire") || tokens.has("pilih"))) ||
    normalized.includes("alasan merekrut") || normalized.includes("alasan memilih")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.STRENGTHS_WHY_HIRE;
  }

  // Bio & Identity
  else if (
    tokens.has("siapa") || tokens.has("siapakah") || tokens.has("who") || tokens.has("profil") || 
    tokens.has("profile") || tokens.has("biodata") || tokens.has("biografi") || tokens.has("biography") || 
    (tokens.has("about") && tokens.has("adyvka"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BIO_IDENTITY;
  }

  // Age, Birthday & Birthplace
  else if (
    tokens.has("umur") || tokens.has("usia") || tokens.has("age") || tokens.has("old") || 
    tokens.has("lahir") || tokens.has("kelahiran") || tokens.has("birth") || tokens.has("born") || tokens.has("birthday") ||
    normalized.includes("tahun lahir") || normalized.includes("kapan lahir") || normalized.includes("lahir dimana") ||
    normalized.includes("dimana lahir") || normalized.includes("tempat lahir") || normalized.includes("tanggal lahir") ||
    normalized.includes("where was adyvka born") || normalized.includes("where born") || normalized.includes("birth place") ||
    normalized.includes("birthplace")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.AGE_INFO;
  }

  // Education & School
  else if (
    tokens.has("sekolah") || tokens.has("school") || tokens.has("pendidikan") || tokens.has("education") || 
    tokens.has("smk") || tokens.has("idn") || tokens.has("jurusan") || tokens.has("major") || tokens.has("kuliah")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.EDUCATION;
  }

  // Location & Domicile & Origin
  else if (
    tokens.has("domisili") || tokens.has("tinggal") || tokens.has("lokasi") || tokens.has("kota") || 
    tokens.has("asal") || tokens.has("alamat") || tokens.has("rumah") || tokens.has("location") ||
    tokens.has("residence") || tokens.has("residing") || tokens.has("hometown") ||
    (tokens.has("where") && (tokens.has("live") || tokens.has("lives") || tokens.has("located") || tokens.has("based") || tokens.has("from"))) ||
    normalized.includes("tempat tinggal") || normalized.includes("tinggal dimana") || normalized.includes("dimana tinggal") ||
    normalized.includes("asal mana") || normalized.includes("berasal dari") ||
    normalized.includes("where does he live") || normalized.includes("where is he based") ||
    normalized.includes("current residence") || normalized.includes("city of residence") || normalized.includes("what city is he from")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.LOCATION_DOMICILE;
  }

  // Tech Stack & Engineering Skills (General Catch-all for coding skills)
  else if (
    tokens.has("techstack") || tokens.has("stack") || tokens.has("teknologi") || tokens.has("technology") || tokens.has("technologies") ||
    tokens.has("skills") || tokens.has("skill") || tokens.has("keahlian") || tokens.has("koding") || tokens.has("programming") ||
    tokens.has("tools") || tokens.has("framework") || tokens.has("frameworks") || tokens.has("database") || tokens.has("databases") ||
    tokens.has("frontend") || tokens.has("backend") || tokens.has("fullstack") ||
    tokens.has("nestjs") || tokens.has("nextjs") || tokens.has("postgresql") || tokens.has("docker") || tokens.has("typescript") ||
    tokens.has("react") || tokens.has("reactjs") || tokens.has("laravel") || tokens.has("prisma") || tokens.has("tailwind") ||
    tokens.has("bahasakoding") || (tokens.has("bahasa") && !tokens.has("inggris") && !tokens.has("english")) || tokens.has("pemrograman") ||
    normalized.includes("bahasa pemrograman") || normalized.includes("programming language") || normalized.includes("programming languages") ||
    normalized.includes("coding language") || normalized.includes("coding languages") ||
    normalized.includes("dikuasai") || normalized.includes("bisa koding") || normalized.includes("menguasai") ||
    normalized.includes("tech stack") || normalized.includes("what technologies") || normalized.includes("what frameworks") ||
    normalized.includes("dikuasai") || normalized.includes("bisa koding") || normalized.includes("menguasai")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.TECH_STACK;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 6: CORPUS SEARCH FALLBACK
  // -------------------------------------------------------------------------
  else {
    const meaningfulWords = [...tokens].filter((w) => !STOPWORDS.has(w) && w.length >= 3);
    if (meaningfulWords.length > 0) {
      let bestMatchKey = null;
      let maxHits = 0;

      for (const [key, item] of Object.entries(KNOWLEDGE_REGISTRY)) {
        if (key === "OVERVIEW_FALLBACK") continue;
        const corpus = (
          (item.id?.title || "") + " " + (item.id?.text || "") + " " +
          (item.en?.title || "") + " " + (item.en?.text || "")
        ).toLowerCase();

        let hits = 0;
        for (const word of meaningfulWords) {
          if (corpus.includes(word)) {
            hits++;
          }
        }
        if (hits > maxHits) {
          maxHits = hits;
          bestMatchKey = key;
        }
      }

      if (bestMatchKey && maxHits >= 1) {
        matchedCard = KNOWLEDGE_REGISTRY[bestMatchKey];
      }
    }
  }

  const finalCard = matchedCard || KNOWLEDGE_REGISTRY.OVERVIEW_FALLBACK;
  const localized = finalCard[lang] || finalCard.en || finalCard.id;

  return {
    title: localized.title,
    text: localized.text,
    links: localized.links,
    lang,
  };
}
