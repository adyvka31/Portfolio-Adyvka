// Contextual Suggestions & Quick Prompts for Chatbot
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
      "label": "💻 Web Programming Fundamentals",
      "query": "tell me about adyvka basic web programming certificate"
    },
    {
      "id": "cert_front_react",
      "label": "⚛️ React Web Application Development",
      "query": "tell me about adyvka react web development certificate"
    },
    {
      "id": "cert_front_git",
      "label": "🐙 Git & GitHub Fundamentals",
      "query": "tell me about adyvka git and github certificate"
    },
    {
      "id": "cert_front_uiux",
      "label": "🎨 UI/UX Design (Figma)",
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
      "label": "📊 Data Analysis with Excel Overview",
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
      "label": "🛠️ Building Backend Applications Overview",
      "query": "tell me about adyvka backend developer certificate"
    },
    {
      "id": "cert_back_js",
      "label": "⚡ JavaScript Programming Fundamentals",
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
      "label": "🐙 Git & GitHub Fundamentals",
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
      "label": "🐙 Git & GitHub Fundamentals Overview",
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
      "label": "📐 UI/UX Design (Figma)",
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
      "label": "💻 Getting Started with C Overview",
      "query": "tell me about adyvka c programming certificate dicoding"
    },
    {
      "id": "cert_c_mem_skilvul",
      "label": "⌨️ C Programming Fundamentals (Skilvul)",
      "query": "tell me about adyvka c programming certificate skilvul"
    },
    {
      "id": "cert_c_mem_cs50",
      "label": "🎓 Harvard CS50 Computer Science",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_c_mem_logika",
      "label": "🧠 Introduction to Programming Logic",
      "query": "tell me about adyvka programming logic certificate"
    },
    {
      "id": "cert_c_mem_py",
      "label": "🐍 Getting Started with Python",
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
      "label": "📐 UI/UX Design (Figma) Overview",
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
      "label": "🐍 Getting Started with Python",
      "query": "tell me about adyvka python basics certificate dicoding"
    },
    {
      "id": "cert_pyfund_data",
      "label": "📊 Data Analysis with Excel",
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
      "label": "⚡ JavaScript Fundamentals Overview",
      "query": "tell me about adyvka javascript basics certificate"
    },
    {
      "id": "cert_js_react",
      "label": "⚛️ React Web Application Development",
      "query": "tell me about adyvka react web development certificate"
    },
    {
      "id": "cert_js_backend",
      "label": "🛠️ Building Backend Applications",
      "query": "tell me about adyvka backend developer certificate"
    },
    {
      "id": "cert_js_web",
      "label": "💻 Web Programming Fundamentals",
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
      "label": "🛠️ Building Backend Applications",
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
      "label": "⚛️ Building Web Apps with React Overview",
      "query": "tell me about adyvka react web development certificate"
    },
    {
      "id": "cert_react_hooks",
      "label": "🎣 React Hooks & State Management Architecture",
      "query": "how does adyvka manage state with react hooks and component lifecycle in react"
    },
    {
      "id": "cert_react_js",
      "label": "⚡ JavaScript Programming Fundamentals",
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
      "label": "🐍 Python Programming Overview",
      "query": "tell me about adyvka python basics certificate dicoding"
    },
    {
      "id": "cert_pymem_fund",
      "label": "🐍 Python Fundamentals (DQLab)",
      "query": "tell me about adyvka python fundamentals certificate"
    },
    {
      "id": "cert_pymem_data",
      "label": "📊 Data Analysis with Excel",
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
      "label": "💻 Web Programming Fundamentals Overview",
      "query": "tell me about adyvka basic web programming certificate"
    },
    {
      "id": "cert_web_front",
      "label": "🌐 Frontend Web Developer Certification",
      "query": "tell me about adyvka frontend web developer certificate"
    },
    {
      "id": "cert_web_js",
      "label": "⚡ JavaScript Programming Fundamentals",
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
      "label": "🧠 Programming Logic Overview",
      "query": "tell me about adyvka programming logic certificate"
    },
    {
      "id": "cert_log_c",
      "label": "💻 Getting Started with C",
      "query": "tell me about adyvka c programming certificate dicoding"
    },
    {
      "id": "cert_log_js",
      "label": "⚡ JavaScript Programming Fundamentals",
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
      "label": "⌨️ C Programming Fundamentals Overview",
      "query": "tell me about adyvka c programming certificate skilvul"
    },
    {
      "id": "cert_cskil_dicoding",
      "label": "💻 Getting Started with C (Dicoding)",
      "query": "tell me about adyvka c programming certificate dicoding"
    },
    {
      "id": "cert_cskil_cs50",
      "label": "🎓 Harvard CS50 Computer Science",
      "query": "tell me about adyvka harvard university cs50 certificate"
    },
    {
      "id": "cert_cskil_log",
      "label": "🧠 Introduction to Programming Logic",
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
      "label": "🤖 Prompt Engineering Fundamentals Overview",
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
      "label": "📊 Data Analysis with Excel",
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
      "label": "🚀 Software Developer Career Overview",
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
      "label": "🐙 Git & GitHub Fundamentals",
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
      "label": "🚀 Building a Career as a Software Developer",
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
      "label": "🤖 Prompt Engineering Fundamentals",
      "query": "tell me about adyvka prompt engineering certificate"
    },
    {
      "id": "cert_ai_python",
      "label": "🐍 Python Fundamentals Certification",
      "query": "tell me about adyvka python fundamentals certificate"
    },
    {
      "id": "cert_ai_data",
      "label": "📊 Data Analysis with Excel",
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
      "label": "🚀 Building a Career as a Software Developer",
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


export function getContextualSuggestions(pathname = "/") {
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
      { id: "dyn_cert_all", label: "📜 Explore All 25 Certifications", query: "what certificates and certifications does adyvka have" },
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
