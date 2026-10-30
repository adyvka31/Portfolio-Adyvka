// src/data/leadershipDetails.js
// Photographic archives & verifiable leadership records

import backpackerHero from "../assets/singapore-malaysia-thailand-backpacker-expedition.webp";
import backpacker2 from "../assets/backpacker/singapore-malaysia-thailand-cross-border-route-2.webp";
import backpacker3 from "../assets/backpacker/singapore-malaysia-thailand-cultural-expedition-3.webp";

import osisHero from "../assets/idn-student-council-event-division-leader.webp";
import osis2 from "../assets/osis/idn-student-council-leadership-summit-2.webp";
import osis3 from "../assets/osis/idn-student-council-event-production-3.webp";

import barmusHero from "../assets/barmus-voluntrip-event-organizer-volunteer.webp";
import barmus2 from "../assets/barmush/barmus-voluntrip-community-outreach-2.webp";
import barmus3 from "../assets/barmush/barmus-voluntrip-team-coordination-3.webp";

import semarangHero from "../assets/pt-intisel-semarang-business-survival.webp";
import semarang2 from "../assets/businesssurvival/pt-intisel-semarang-market-trading-2.webp";
import semarang3 from "../assets/businesssurvival/pt-intisel-semarang-entrepreneurship-survival-3.webp";

import itfestHero from "../assets/it-fest-2025-competition-event-coordinator.webp";

import livein1 from "../assets/livein/idn-boarding-school-rural-livein-immersion-1.webp";
import livein2 from "../assets/livein/idn-boarding-school-community-collaboration-2.webp";
import livein3 from "../assets/livein/idn-boarding-school-rural-life-reflection-3.webp";

export const leadershipDetails = {
  // =========================================================================
  // 01. IDN INTERNATIONAL BACKPACKER (SINGAPORE, MALAYSIA, THAILAND)
  // =========================================================================
  "singapore-malaysia-thailand-backpacker-3-country": {
    badge: "International Expedition",
    subtitle: "Singapore · Malaysia · Thailand",
    roleTitle: "International Backpacker Delegate",
    institution: "Singapore, Malaysia, Thailand",
    period: "Sep 2025",
    summary:
      "Selected as one of only 9 students out of hundreds of applicants for the IDN International Backpacker program. 100% self-funded through freelance coding and design, navigating international transit networks, conducting conversational local interviews in English, and solving real-world crises across Singapore, Malaysia, and Thailand.",
    meta: [
      { label: "Program", value: "IDN International Backpacker" },
      { label: "Destinations", value: "Singapore, Malaysia, Thailand" },
      { label: "Selection", value: "9 Delegates (Top Applicants)" },
      { label: "Funding", value: "100% Self-Funded (Freelance)" },
      { label: "Duration", value: "7 Days (Multi-Border Transit)" },
      { label: "Focus", value: "Global Fluency & Independence" },
    ],
    stack: [
      "Cross-Cultural Fluency",
      "Financial Independence",
      "Crisis Management",
      "Public Speaking",
      "Overland Logistics",
      "Global Networking",
    ],
    links: [
      { label: "LinkedIn Post", url: "https://lnkd.in/p/g2DARFEU" },
    ],
    kpis: [
      {
        value: "3 Countries",
        label: "Tri-Border Expedition",
        note: "Navigating foreign immigration, urban trains, and overland transit networks",
      },
      {
        value: "9 Delegates",
        label: "Rigorous Selection",
        note: "Chosen out of hundreds of applicants following motivation and financial vetting",
      },
      {
        value: "100% Funded",
        label: "Self-Reliance Hustle",
        note: "Fully self-funded through freelance design, web development, and IT coaching",
      },
      {
        value: "7 Days",
        label: "Multi-City Immersion",
        note: "Visiting Google Singapore, Universiti Kuala Lumpur, and Thai academic hubs",
      },
    ],
    story: {
      headline: "3 Countries, 9 Students, 0 Handouts: Surviving and Thriving Across Southeast Asia.",
      lead: "How self-funding an international tri-country expedition through freelance coding, navigating foreign transit systems, and resolving border crises forged unbreakable independence and global adaptability.",
      quote:
        "Navigating foreign transit systems and solving real-world crises on the fly proved to me that when you combine calm communication with relentless resilience, you can adapt, survive, and thrive in any global environment.",
      chapters: [
        {
          chapter: "01",
          title: "The Self-Funding Hustle & Strict Selection",
          content:
            "The 'IDN International Backpacker' program to Singapore, Malaysia, and Thailand was far from a typical high school study tour. The selection process was incredibly rigorous, primarily because we were required to fund the entire journey using our own hard-earned money. Over my holidays, I hustled to raise funds by offering freelance graphic design and web development services, and even taught basic IT skills to my peers and neighbors. After passing a thorough interview regarding my motivation and financial planning, I was thrilled to be chosen as one of only 9 students out of hundreds of applicants. Our independence was tested long before departure; we were tasked with personally booking our flights, securing accommodations, and mapping out public transit routes across all three countries with minimal guidance from our chaperone.",
        },
        {
          chapter: "02",
          title: "Beyond Sightseeing: Tech Hubs, Universities & Local Interviews",
          content:
            "Our itinerary was packed with educational milestones. Rather than just sightseeing, we visited global hubs like the Google office and the National University Centre for Oral Health in Singapore, Universiti Kuala Lumpur in Malaysia, and attended university seminars in Thailand. To push us out of our comfort zones, we were assigned daily tasks to interview locals and document our journey through vlogs. It forced me to overcome my language barriers, walking up to strangers to converse in English about their daily lives, careers, and local culture.",
        },
        {
          chapter: "03",
          title: "The Border Crisis & The True Test of Resilience",
          content:
            "The true test of our resilience occurred at a heavily crowded immigration checkpoint, where our small group accidentally got separated. It was a genuinely terrifying moment, especially since only a few of us held the physical tickets and active phones. We were essentially lost in a foreign country with no way to contact each other. Instead of letting panic take over, we stayed calm and relied on our communication skills, asking local officers and bystanders for help until we successfully reunited. Navigating foreign public transportation systems and solving real-world crises on the fly gave me a massive confidence boost, proving to myself that I can adapt, survive, and thrive in any global environment.",
        },
      ],
    },
    pillarsTitle: "Expedition Pillars & Global Competencies",
    pillarsLead:
      "Core operational, financial, and interpersonal competencies developed while executing an independent multi-national journey.",
    pillars: [
      {
        title: "Self-Reliance & Financial Independence",
        tag: "Personal Agency",
        desc: "Financed 100% of flight bookings, lodging, food, and daily transit entirely through self-earned freelance web design revenue and peer coding tutorials.",
      },
      {
        title: "Cross-Cultural Street Interviews in English",
        tag: "Language Mastery",
        desc: "Overcame conversational hesitation by conducting spontaneous on-camera interviews with citizens, shop owners, and corporate workers in Singapore, KL, and Bangkok.",
      },
      {
        title: "Enterprise & Academic Immersion",
        tag: "Global Perspective",
        desc: "Gained direct exposure to multinational engineering cultures and higher education standards through curated visits to Google Asia-Pacific HQ and Universiti Kuala Lumpur.",
      },
      {
        title: "Crisis Resolution & Transit Navigation",
        tag: "Rapid Problem-Solving",
        desc: "Successfully re-grouped after getting separated at foreign immigration borders without mobile connectivity, using localized communication and transit map deduction.",
      },
    ],
    takeawaysTitle: "Reflections on Global Independence",
    takeawaysLead:
      "Strategic takeaways on stepping out of comfort zones and taking extreme ownership.",
    takeaways: [
      {
        title: "Extreme Ownership of Circumstance",
        desc: "When you pay for your own ticket and map your own route, you take complete responsibility for every outcome. There is no chaperone to blame; you must solve problems proactively.",
      },
      {
        title: "Empathy as a Universal Language",
        desc: "Speaking with everyday locals taught me that communication is not about flawless grammar; it is about humility, attentive listening, and mutual respect.",
      },
      {
        title: "Composure Under High Uncertainty",
        desc: "Facing a foreign border checkpoint separation proved that panic solves nothing. Calm analysis and assertive communication resolve even the most terrifying crises.",
      },
    ],
    documentationTitle: "Tri-Border Photographic Records",
    documentationLead:
      "Official expedition banner, landmark checkpoints, and on-site transit records across Singapore, Malaysia, and Thailand.",
    documentation: [
      {
        id: "backpacker-banner",
        title: "Official IDN Backpacker Tri-Country Delegation",
        tag: "Official Delegation",
        image: backpacker2,
        desc: "The official 9 selected student delegates at the departure gate, displaying the IDN International Backpacker Singapore - Malaysia - Thailand expedition banner.",
      },
      {
        id: "backpacker-marina",
        title: "Marina Bay & Singapore Global Tech Milestone",
        tag: "Urban Immersion",
        image: backpackerHero,
        desc: "Commemorative milestone capture in Singapore following corporate office visits and public transit navigation challenges.",
      },
      {
        id: "backpacker-transit",
        title: "Cross-Border Overland Navigation & University Visits",
        tag: "Transit & Campus",
        image: backpacker3,
        desc: "Documenting multi-modal public transit routes, inter-city trains, and university seminars across the Malaysian and Thai borders.",
      },
    ],
  },

  // =========================================================================
  // 02. IDN STUDENT COUNCIL — EVENT DIVISION LEADER
  // =========================================================================
  "idn-student-council-event-division-leader": {
    badge: "Executive Leadership",
    subtitle: "IDN Boarding School",
    roleTitle: "Event Division Leader",
    institution: "IDN Student Council",
    period: "Jan 2025 - Mar 2026",
    summary:
      "Rose from Grade 10 committee member to Head of the Event Division in Grade 11. Commanded the organizing committee for IT FEST 2025—a national competition with over 500 participants across IT and English categories—directing teams, managing out-of-town guests, and resolving high-pressure backroom operational crises under zero-delay deadlines.",
    meta: [
      { label: "Organization", value: "IDN Student Council (OSIS)" },
      { label: "Role", value: "Head of Event Division" },
      { label: "Tenure", value: "2 Years (Grade 10 Volunteer → Grade 11 Head)" },
      { label: "Flagship Event", value: "IT FEST 2025 (Head of Committee)" },
      { label: "Event Reach", value: "500+ National Participants" },
      { label: "Scope", value: "Live Production, Crisis Triage & Backroom Sprints" },
    ],
    stack: [
      "Executive Leadership",
      "Event Operations",
      "Crisis Triage",
      "Public Speaking",
      "Digital Infrastructure",
      "Team Delegation",
    ],
    kpis: [
      {
        value: "500+ Guests",
        label: "IT FEST 2025 Scale",
        note: "Over 500 national participants competing across IT and English categories",
      },
      {
        value: "Head of Div",
        label: "Promoted in Grade 11",
        note: "Earned promotion to lead the school's most competitive and high-velocity division",
      },
      {
        value: "2 Years",
        label: "Continuous Tenure",
        note: "Steering campus festivals, exhibitions, and national comparative studies",
      },
      {
        value: "Live Triage",
        label: "Backroom Sprint",
        note: "Rapid submission recovery & real-time certificate printing under pressure",
      },
    ],
    story: {
      headline: "From Stage Hand to Head of Division: Leading 500+ Competitors Through the IT FEST Chaos.",
      lead: "How rising to Head of the Student Council's Event Division and steering IT FEST 2025 through digital crashes, out-of-town guest arrivals, and high-pressure backroom certificate sprints proved that true leadership is about keeping a clear head when everything goes wrong.",
      quote:
        "Surviving that chaos taught me that true leadership isn't about running a flawless event; it's about keeping a clear head and fixing things together when everything goes wrong.",
      chapters: [
        {
          chapter: "01",
          title: "Rising from the Ranks to Head of Division",
          content:
            "My interest in running school events started back in junior high, so applying for the Student Council’s Event Division in vocational high school (SMK) was a natural step. It was the most competitive division to get into because our school constantly hosted exhibitions, competitions, and comparative studies. I managed to get in and spent my 10th-grade year learning the ropes from the ground up. By 11th grade, my dedication was recognized, and I was promoted to Head of the Event Division. Suddenly, I wasn't just helping out anymore; I was directing teams and carrying the full weight of the school's operational events on my shoulders.",
        },
        {
          chapter: "02",
          title: "The IT FEST 2025 Reality Check & The Submission Form Crisis",
          content:
            "The biggest reality check of my leadership journey happened when I was appointed head of the organizing committee for IT FEST 2025, a national-level competition with over 500 participants across IT and English categories. Behind the scenes, it was incredibly chaotic. During the preliminary rounds, our team was completely overwhelmed by a flood of participant inquiries. The worst moment hit on submission day: due to a team miscommunication, the submission form was accidentally closed right before the deadline. We had to fix the digital infrastructure in a panic while apologizing to confused participants, learning a very hard lesson about detail-oriented communication.",
        },
        {
          chapter: "03",
          title: "Grand Final Sprints & The Backroom Certificate Race",
          content:
            "The grand final brought a whole different level of stress. We were rushing to finish the stage decorations while simultaneously managing the arrival of out-of-town guests. The most nerve-wracking part was the tiny gap between the judges' final scoring and the winner announcement. The time window was painfully short, and our team was sweating in the back room, frantically typing and printing out the winners' certificates so the closing ceremony wouldn't be delayed. We pulled it off, and seeing the winners smiling on stage made every sleepless night worth it. Surviving that chaos taught me that true leadership isn't about running a flawless event; it's about keeping a clear head and fixing things together when everything goes wrong.",
        },
      ],
    },
    pillarsTitle: "Event Leadership & Crisis Management Frameworks",
    pillarsLead:
      "Core operational frameworks and communication disciplines deployed to lead high-stakes campus and national events.",
    pillars: [
      {
        title: "Detail-Oriented Digital Infrastructure",
        tag: "Digital Operations",
        desc: "Managing multi-track submission pipelines, automated validation forms, and real-time support helpdesks to handle high participant inquiry volumes.",
      },
      {
        title: "Rapid Backroom Score & Certificate Triage",
        tag: "Time Discipline",
        desc: "Establishing high-speed backroom protocols to verify judge scorecards, type winner names, and print formal certificates within tight minute-level windows.",
      },
      {
        title: "Out-of-Town Guest & VIP Protocol",
        tag: "Hospitality & Logistics",
        desc: "Coordinating seamless check-ins, transit logistics, and stage hospitality for arriving regional participants, guest judges, and faculty.",
      },
      {
        title: "Cross-Functional Committee Mentorship",
        tag: "Team Leadership",
        desc: "Directing crews across audio-visual, set decoration, rundown timekeeping, and security with calm, respectful, and transparent communication.",
      },
    ],
    takeawaysTitle: "Reflections on Leading Under Fire",
    takeawaysLead:
      "Key leadership principles forged through live event chaos and high-stakes problem solving.",
    takeaways: [
      {
        title: "A Clear Head Defuses Chaos",
        desc: "Panic only multiplies errors. When digital forms fail or deadlines compress to minutes, a calm leader enables the entire team to focus on solutions rather than blame.",
      },
      {
        title: "Detail-Oriented Communication Is Non-Negotiable",
        desc: "A slight ambiguity in deadline communication creates instant panic among hundreds of contestants. Clarity, redundancy, and proactive updates are essential.",
      },
      {
        title: "The Backroom Crew Makes the Stage Shine",
        desc: "True leadership happens behind the scenes—typing certificates in a sweltering back room and making sure your exhausted team crosses the finish line together.",
      },
    ],
    documentationTitle: "Student Council Archival Records",
    documentationLead:
      "Event organization photos, committee coordination meetings, and stage productions at IDN Boarding School.",
    documentation: [
      {
        id: "osis-stage",
        title: "Campus Festival Main Stage Production",
        tag: "Stage Operations",
        image: osisHero,
        desc: "Overseeing main stage audio, lighting, and timeline execution during an annual IDN Boarding School flagship event.",
      },
      {
        id: "osis-team",
        title: "Event Division Committee Briefing & Coordination",
        tag: "Team Leadership",
        image: osis2,
        desc: "Conducting pre-event run-of-show synchronization with the 30+ committee members prior to guest arrival.",
      },
      {
        id: "osis-milestone",
        title: "Council Closing Ceremony & Milestone Celebration",
        tag: "Executive Tenure",
        image: osis3,
        desc: "Commemorating successful completion of annual event calendar deliverables with the executive council board.",
      },
    ],
  },

  // =========================================================================
  // 03. BARMUS VOLUNTRIP — VOLUNTEER EVENT ORGANIZER
  // =========================================================================
  "barmus-voluntrip-volunteer-event-organizer": {
    badge: "Social Impact & Volunteerism",
    subtitle: "Barmus Voluntrip · Community Outreach",
    roleTitle: "Volunteer Event Organizer",
    institution: "Barmus Voluntrip",
    period: "Feb 2026",
    summary:
      "Served as a frontline volunteer event organizer for Barmus Voluntrip, coordinating grassroots community outreach, logistics pipelines, educational activities, and aid distribution for underprivileged rural families.",
    meta: [
      { label: "Community", value: "Barmus Voluntrip" },
      { label: "Role", value: "Event & Field Coordinator" },
      { label: "Theme", value: "Menebar Kebaikan & Kebahagiaan" },
      { label: "Focus", value: "Social Empathy & Rural Aid" },
      { label: "Beneficiaries", value: "100+ Rural Community Members" },
      { label: "Execution", value: "Field Logistics & Workshops" },
    ],
    stack: [
      "Social Empathy",
      "Grassroots Logistics",
      "Community Outreach",
      "Crisis Triage",
      "Public Engagement",
      "Team Coordination",
    ],
    kpis: [
      {
        value: "100+ People",
        label: "Rural Beneficiaries",
        note: "Directly distributing basic necessities, books, and educational packages",
      },
      {
        value: "Grassroots",
        label: "Field Execution",
        note: "Navigating remote locations, unpaved terrains, and community facilities",
      },
      {
        value: "100% Social",
        label: "Non-Profit Initiative",
        note: "Dedicated to fostering authentic human connection and societal empathy",
      },
      {
        value: "Full Day",
        label: "Interactive Workshops",
        note: "Running educational games and motivational sessions for local children",
      },
    ],
    story: {
      headline: "Stepping Outside Code: Finding Purpose in Grassroots Social Service.",
      lead: "How spending time with marginalized communities through Barmus Voluntrip grounded my engineering ambitions in deep empathy, human dignity, and civic responsibility.",
      quote:
        "Technology is only as valuable as the human lives it uplifts. Rolling up your sleeves to serve people in remote communities teaches empathy that no classroom or codebase ever could.",
      chapters: [
        {
          chapter: "01",
          title: "The Call to Grassroots Service",
          content:
            "As developers, it is easy to become detached from real-world realities while spending long hours behind glowing monitors and optimized algorithms. Joining Barmus Voluntrip was a deliberate decision to reconnect with society and channel my organizational skills toward social good. The mission: deliver aid, educational packages, and joyful workshops to underserved rural communities.",
        },
        {
          chapter: "02",
          title: "Field Logistics in Remote Terrains",
          content:
            "Executing an outreach event in a remote area presents unique logistical challenges. From transporting dozens of heavy aid boxes over uneven paths to setting up makeshift event spaces with zero formal infrastructure, our team had to adapt constantly. I helped coordinate the schedule, ensuring elderly residents were assisted comfortably and children were actively engaged in fun, educational learning circles.",
        },
        {
          chapter: "03",
          title: "The Real Meaning of Impact",
          content:
            "Seeing the genuine smiles on the faces of children receiving their very first storybooks and witnessing the relief of families receiving sustenance left an indelible mark on my character. It instilled in me a deep commitment: throughout my career in software engineering, I will prioritize building digital solutions that actively dismantle societal inequalities.",
        },
      ],
    },
    pillarsTitle: "Outreach Pillars & Community Engagement",
    pillarsLead:
      "Core principles of empathy-driven field execution practiced during Barmus Voluntrip.",
    pillars: [
      {
        title: "Human-Centered Dignified Aid Delivery",
        tag: "Empathy First",
        desc: "Structured the aid handoff process to be warm, respectful, and personal, ensuring every recipient felt valued rather than treated as a mere statistic.",
      },
      {
        title: "Youth Literacy & Inspirational Workshops",
        tag: "Education",
        desc: "Organized engaging literacy circles and storytelling activities to ignite educational curiosity and ambition in rural elementary students.",
      },
      {
        title: "Agile Field Logistics & Terrains",
        tag: "Field Operations",
        desc: "Coordinated inventory transport, volunteer vehicle convoys, and stage setups in locations with limited electrical grid access.",
      },
      {
        title: "Cross-Volunteer Team Synergy",
        tag: "Collaboration",
        desc: "Collaborated seamlessly with volunteers from diverse backgrounds, aligning on clear roles to maximize positive community touchpoints.",
      },
    ],
    takeawaysTitle: "Reflections on Social Responsibility",
    takeawaysLead:
      "Key philosophical insights gained through direct community volunteerism.",
    takeaways: [
      {
        title: "Humility Grounds Engineering",
        desc: "Witnessing real-world hardships reminds me that high-tech innovations mean nothing unless they solve genuine problems for ordinary human beings.",
      },
      {
        title: "The Multiplier Effect of Presence",
        desc: "Material goods provide temporary relief, but giving your undivided time, laughter, and genuine attention leaves a lifelong emotional imprint.",
      },
      {
        title: "Resilience in Austere Conditions",
        desc: "Working efficiently under extreme heat, physical fatigue, and unpredictable field conditions builds mental stamina applicable to all walks of life.",
      },
    ],
    documentationTitle: "Field Outreach Photographic Archives",
    documentationLead:
      "Memorable moments, volunteer aid distribution, and community interactions from Barmus Voluntrip.",
    documentation: [
      {
        id: "barmus-banner",
        title: "Official Barmus Voluntrip Campaign",
        tag: "Official Campaign",
        image: barmus3,
        desc: "Official campaign banner: 'Barmus Voluntrip — Menebar Kebaikan & Kebahagiaan' during field mission kickoff.",
      },
      {
        id: "barmus-field",
        title: "Aid Delivery & Community Interaction",
        tag: "Field Logistics",
        image: barmusHero,
        desc: "Volunteers gathering with community beneficiaries following the successful handoff of food supplies and educational packages.",
      },
      {
        id: "barmus-outreach",
        title: "Youth Engagement & Social Bonding",
        tag: "Community",
        image: barmus2,
        desc: "Interacting directly with local village children through educational games and motivational activities.",
      },
    ],
  },

  // =========================================================================
  // 04. BUSINESS & LIFE SURVIVAL (SEMARANG)
  // =========================================================================
  "pt-intisel-semarang-business-life-survival": {
    badge: "Survival & Grit",
    subtitle: "Semarang, Central Java",
    roleTitle: "Business & Life Survival Candidate",
    institution: "PT Intisel Semarang",
    period: "Nov 2025",
    summary:
      "Completed a grueling one-week survival challenge in an unfamiliar city with zero pocket money or safety net. Secured temporary manual work distributing telecommunications construction equipment to contractors, earning enough to survive and fund the return train ticket home.",
    meta: [
      { label: "Challenge", value: "Business & Life Survival" },
      { label: "Location", value: "Semarang, Central Java" },
      { label: "Duration", value: "7 Days (Unassisted)" },
      { label: "Starting Cash", value: "Rp 0 (Zero Allowance)" },
      { label: "Work", value: "Telecom Field Logistics" },
      { label: "Outcome", value: "100% Self-Earned Return Ticket" },
    ],
    stack: [
      "Extreme Resilience",
      "Street Negotiation",
      "Physical Endurance",
      "Budget Allocation",
      "Field Logistics",
      "Uncertainty Navigation",
    ],
    kpis: [
      {
        value: "Rp 0",
        label: "Starting Capital",
        note: "Dropped off in an unfamiliar city without pocket money or parental assistance",
      },
      {
        value: "7 Days",
        label: "Survival Duration",
        note: "Securing daily food, shelter, and transport solely through physical labor",
      },
      {
        value: "100% Earned",
        label: "Return Ticket Home",
        note: "Successfully earned sufficient funds to pay for transportation back to West Java",
      },
      {
        value: "Telecom",
        label: "Field Logistics Work",
        note: "Handling distribution of telecommunication construction parts to contractors",
      },
    ],
    story: {
      headline: "Stranded in Semarang: Surviving One Week with Zero Money.",
      lead: "How an extreme one-week survival simulation without financial safety nets transformed abstract grit into battle-tested resilience and street-level resourcefulness.",
      quote:
        "When comfort is stripped away and survival depends entirely on your own hands, you discover mental reserves and resourcefulness you never knew existed.",
      chapters: [
        {
          chapter: "01",
          title: "The Drop-Off at Zero Balance",
          content:
            "The Business & Life Survival challenge was designed to test our limits. We were transported to Semarang—a city where none of us had personal connections—and released with exactly zero rupiahs in our pockets. The rules were simple but uncompromising: no asking parents for money, no using personal credit, and no handouts. We had seven days to find employment, secure daily meals and shelter, and earn enough money to purchase our train ticket back to school.",
        },
        {
          chapter: "02",
          title: "Earning Every Single Meal",
          content:
            "On the first day, the urgency of hunger was an intense motivator. We walked kilometers from warehouse to workshop, pitching our willingness to do hard physical labor. We eventually secured work at PT Intisel's telecom equipment yard in Semarang, loading heavy structural hardware, antenna mounts, and cabling onto distribution trucks for regional base transceiver stations (BTS). The work was physically taxing under the tropical sun, but receiving our first cash wage brought an unmatched feeling of self-worth.",
        },
        {
          chapter: "03",
          title: "Boarding the Train Home as a Stronger Person",
          content:
            "By managing our meager income with surgical discipline—prioritizing simple food and resting in safe public spaces—we managed to save enough money by day six. Standing at Semarang Tawang Station on day seven and purchasing our return train tickets with crisp banknotes earned through our own sweat was deeply transformative. It erased any lingering fear of poverty or failure: I now know that wherever life places me, I will survive and build my way forward.",
        },
      ],
    },
    pillarsTitle: "Survival Tenets & Psychological Resilience",
    pillarsLead:
      "Core operational principles that enabled survival and financial independence in Semarang.",
    pillars: [
      {
        title: "Immediate Ego Elimination",
        tag: "Mindset",
        desc: "Cast aside pride and academic titles to willingly undertake heavy physical warehouse loading and distribution tasks to secure daily sustenance.",
      },
      {
        title: "Hyper-Frugal Financial Budgeting",
        tag: "Money Management",
        desc: "Rigorously budgeted every daily rupiah earned, allocating minimal capital for caloric sustenance while banking every surplus coin for the return train ticket.",
      },
      {
        title: "Cold-Door Street Negotiation",
        tag: "Resourcefulness",
        desc: "Approached dozens of local industrial workshops and logistics contractors with clear, professional pitches demonstrating willingness and reliability.",
      },
      {
        title: "Team Solidarity Under Duress",
        tag: "Mutual Support",
        desc: "Maintained complete unity with challenge peers, sharing meals, watching each other's physical health, and boosting morale during exhaustive evenings.",
      },
    ],
    takeawaysTitle: "Reflections on Unfiltered Grit",
    takeawaysLead:
      "Fundamental life lessons forged by living without safety nets.",
    takeaways: [
      {
        title: "Resilience Is a Concrete Muscle",
        desc: "True resilience cannot be learned from business books; it is forged when you are physically exhausted and still have to negotiate your next meal.",
      },
      {
        title: "Every Honest Job Commands Respect",
        desc: "Working in heavy equipment distribution gave me lifelong respect for blue-collar logistics workers whose sweat powers our modern infrastructure.",
      },
      {
        title: "Fear of Adversity Disappears",
        desc: "Once you have survived stranded in a strange city with zero money and built your way out, workplace deadlines and coding bugs will never intimidate you again.",
      },
    ],
    documentationTitle: "Semarang Survival Photographic Documentation",
    documentationLead:
      "Warehouse distribution records, team survival milestones, and the journey home from Semarang.",
    documentation: [
      {
        id: "semarang-warehouse",
        title: "Telecommunications Logistics Distribution",
        tag: "Field Work",
        image: semarang2,
        desc: "Inspecting and preparing telecommunications hardware and cabling at the logistics depot in Semarang.",
      },
      {
        id: "semarang-hero",
        title: "Survival Challenge Completion Milestone",
        tag: "Milestone",
        image: semarangHero,
        desc: "Commemorating the successful completion of the one-week unassisted survival challenge across Semarang.",
      },
      {
        id: "semarang-transit",
        title: "Logistics Field Operation & Dispatch",
        tag: "Operations",
        image: semarang3,
        desc: "Field operations and supply distribution assisting telecom network infrastructure rollout across Central Java.",
      },
    ],
  },

  // =========================================================================
  // 05. COMPETITION EVENT COORDINATOR — IT FEST 2025
  // =========================================================================
  "it-fest-2025-competition-event-coordinator": {
    badge: "Event Leadership",
    subtitle: "IT Fest 2025 · National Competition",
    roleTitle: "Competition Event Coordinator",
    institution: "IT Fest 2025",
    period: "Aug 2025",
    summary:
      "Leveraged event leadership experience to coordinate national-scale IT competitions end-to-end, managing logistics, contest rules, judging committee liaison, team delegation, and technical infrastructure for hundreds of participants.",
    meta: [
      { label: "Event", value: "IT Fest 2025" },
      { label: "Role", value: "Competition Event Coordinator" },
      { label: "Reach", value: "National (High School & University)" },
      { label: "Participants", value: "150+ Competitors" },
      { label: "Focus", value: "Technical Scoring & Floor Operations" },
      { label: "Outcome", value: "Zero Delay Competition Execution" },
    ],
    stack: [
      "Event Coordination",
      "Technical Scoring",
      "Judge Liaison",
      "Time Management",
      "Stakeholder Communication",
      "Live Streaming Support",
    ],
    kpis: [
      {
        value: "150+",
        label: "Competitors Managed",
        note: "Coordinating multi-tier coding and web design competition tracks",
      },
      {
        value: "3 Days",
        label: "Sprint Execution",
        note: "Managing round preliminaries, semifinal reviews, and grand finals",
      },
      {
        value: "100%",
        label: "On-Time Defense",
        note: "Ensuring all contestant pitch slots adhered to strict 10-minute schedules",
      },
      {
        value: "Cross-Track",
        label: "Judge Synchronization",
        note: "Liaising with industry judges and standardizing rubric scorecards",
      },
    ],
    story: {
      headline: "Powering the Operating System of a National Tech Hackathon.",
      lead: "How orchestrating national competition tracks, judge protocols, and high-pressure live final pitches ensured a professional, unbiased tournament experience for hundreds of young developers.",
      quote:
        "In a competition, the contestants' hard work deserves flawless organization. When the event infrastructure runs smoothly, competitors can focus entirely on delivering their absolute best innovations.",
      chapters: [
        {
          chapter: "01",
          title: "Designing the Competition Mechanics",
          content:
            "Organizing IT Fest 2025 required turning abstract rules into a rock-solid operational playbook. Drawing on my background as both an award-winning competitor and student council lead, I helped formulate the tournament rubric, submission timeboxes, anti-plagiarism verification procedures, and staging infrastructure.",
        },
        {
          chapter: "02",
          title: "Floor Coordination Under the Clock",
          content:
            "During the preliminary and final rounds, maintaining tight scheduling was critical. Managing over 150 participants presenting across split breakout rooms required constant liaison with expert judges, timer operators, and tech support. When live streaming audio glitches occurred, our team resolved them within seconds without derailing contestant pitch momentum.",
        },
        {
          chapter: "03",
          title: "Delivering an Unbiased, Celebratory Finale",
          content:
            "The tournament concluded with an electrifying awards ceremony celebrating top student innovators from across Indonesia. Receiving commendation from the judging panel for the event's professional pacing was proof of our team's meticulous preparation and technical discipline.",
        },
      ],
    },
    pillarsTitle: "Operational Pillars & Tournament Integrity",
    pillarsLead:
      "Core operational tenets enforced to guarantee an unbiased, high-caliber competition.",
    pillars: [
      {
        title: "Standardized Multi-Criteria Scoring Rubrics",
        tag: "Fairness & Integrity",
        desc: "Formulated objective evaluation criteria covering code architecture, UI/UX aesthetics, presentation defense, and real-world viability.",
      },
      {
        title: "Precision Timeboxing & Pitch Management",
        tag: "Time Discipline",
        desc: "Enforced strict 7-minute presentation and 5-minute Q&A windows with visible digital timers to maintain absolute parity among finalists.",
      },
      {
        title: "Tech Infrastructure & Live Stream Support",
        tag: "Technical Setup",
        desc: "Coordinated presentation projection, screen mirroring, backup offline slides, and broadcast feeds for remote attendees.",
      },
      {
        title: "Contestant Support & Empathy",
        tag: "Participant Care",
        desc: "Provided clear briefing channels and instant technical unblocking to ensure nervous student finalists felt supported and heard.",
      },
    ],
    takeawaysTitle: "Insights on Engineering Tournaments",
    takeawaysLead:
      "Key lessons from operating competitions from the organizer's vantage point.",
    takeaways: [
      {
        title: "Organizer Empathy Enhances Competitor Performance",
        desc: "Understanding competitor anxiety allows you to design calm backstage environments that let their technical brilliance shine.",
      },
      {
        title: "Redundancy Prevents Disaster",
        desc: "Always have offline presentation backups, spare HDMI converters, and printed scorecards ready for when digital tools stutter.",
      },
      {
        title: "Clear Communication Resolves Disputes",
        desc: "Publishing unambiguous rules beforehand prevents misunderstandings and preserves tournament credibility.",
      },
    ],
    documentationTitle: "IT Fest 2025 Event Documentation",
    documentationLead:
      "On-site competition coordination, judge briefings, and awards staging at IT Fest.",
    documentation: [
      {
        id: "itfest-main",
        title: "Official IT Fest 2025 Tournament Operations",
        tag: "Event Operations",
        image: itfestHero,
        desc: "Stage management and coordination during the live national presentation finals at IT Fest 2025.",
      },
    ],
  },

  // =========================================================================
  // 06. LIVE IN RURAL COMMUNITY IMMERSION — TRADITIONAL AGRICULTURE
  // =========================================================================
  "idn-boarding-school-live-in-rural-immersion": {
    badge: "Community Immersion & Agriculture",
    subtitle: "Rural Village Immersion · IDN Boarding School",
    roleTitle: "Live In Rural Community Delegate",
    institution: "IDN Boarding School",
    period: "May 2024 · 1 Week",
    summary:
      "Participated in an intensive one-week rural Live In program, residing with a traditional farming host family in a village community. Fully integrated into daily agrarian life—from maintaining the family's small shop (warung) and household routines to cultivating crops in the fields, bathing livestock, bonding with village children, and deep cleaning the communal mosque.",
    meta: [
      { label: "Program", value: "Live In Community Immersion" },
      { label: "Institution", value: "IDN Boarding School" },
      { label: "Cohort Size", value: "4 Students per Household" },
      { label: "Focus", value: "Agrarian Living & Social Empathy" },
      { label: "Duration", value: "7 Days (Full Integration)" },
      { label: "Community", value: "Traditional Farming Village" },
    ],
    stack: [
      "Social Empathy",
      "Traditional Agriculture",
      "Community Integration",
      "Cross-Cultural Humility",
      "Livestock & Fieldwork",
      "Team Collaboration",
    ],
    kpis: [
      {
        value: "7 Days",
        label: "Full Integration",
        note: "Living with local host family as active household members",
      },
      {
        value: "4 Members",
        label: "Autonomous Cohort",
        note: "4-student team managing household, warung, and agricultural duties",
      },
      {
        value: "Daily Fields",
        label: "Agrarian Labor",
        note: "Planting crops, clearing agricultural land, and bathing livestock",
      },
      {
        value: "Deep Clean",
        label: "Mosque Restoration",
        note: "Scrubbed every corner of the village mosque as a parting gift of gratitude",
      },
    ],
    story: {
      headline: "Beyond the Screen: Embracing Agrarian Rhythms and Genuine Human Connection.",
      lead: "How spending a full week living in a traditional farming village, getting our hands dirty in agricultural fields, and sharing simple daily moments with our host family redefined my understanding of hard work, humility, and authentic community.",
      quote:
        "Seeing how genuinely happy the villagers were to have had us, and how sad they were to see us leave, made me realize how quickly a deep connection can form between people.",
      chapters: [
        {
          chapter: "01",
          title: "Stepping Into the Host Family's Daily Rhythm",
          content:
            "As part of my school's program, I participated in a \"Live In\" activity where we spent a full week living in a rural village that still relies on traditional farming and agriculture. Assigned to a team of four, we stayed in the home of a local host family. We were not there to just act as tourists or guests; we were there to fully integrate and live exactly as the locals do. Starting from early in the morning, we jumped into their daily routines, helping out with cooking, sweeping, mopping, organizing the house, and even tending to our host family's small shop (warung).",
        },
        {
          chapter: "02",
          title: "Agricultural Fieldwork and Village Bonds",
          content:
            "Our responsibilities went far beyond household chores. Every day, we went out to the fields to help the villagers plant crops, clear the land, and maintain their gardens. I learned entirely new practical skills on the spot, from simple tasks like properly plucking dry leaves to keep plants healthy, to the hands-on experience of bathing livestock. During our free afternoons, we easily bonded with the local children, playing football, running around, and playing hide and seek. There was no awkwardness at all, we genuinely became a part of their community.",
        },
        {
          chapter: "03",
          title: "Mosque Deep Clean & The Emotional Farewell",
          content:
            "On our final day, as a gesture of gratitude, our team worked together to deep clean the local mosque, scrubbing every corner until it was completely spotless. Saying goodbye the next morning turned out to be incredibly emotional. Seeing how genuinely happy the villagers were to have had us, and how sad they were to see us leave, made me realize how quickly a deep connection can form between people. This experience gave me a much deeper appreciation for hard work, the beauty of a simple life, and the true meaning of community.",
        },
      ],
    },
    pillarsTitle: "Agrarian Disciplines & Community Immersion Frameworks",
    pillarsLead:
      "Core operational frameworks and human values cultivated through full-time integration into village society.",
    pillars: [
      {
        title: "Authentic Household Integration",
        tag: "Social Empathy",
        desc: "Shedding urban habits to wake at dawn, cook communal meals, maintain household chores, and assist in running the family's neighborhood warung.",
      },
      {
        title: "Hands-on Agricultural Stewardship",
        tag: "Field Labor",
        desc: "Learning crop management, leaf pruning, weed clearing, and livestock hygiene directly alongside seasoned village farmers.",
      },
      {
        title: "Youth Mentorship & Community Play",
        tag: "Interpersonal Connection",
        desc: "Bonding naturally with village youth through spontaneous afternoon sports and games, bridging cultural gaps without friction.",
      },
      {
        title: "Civic Service & Mosque Restoration",
        tag: "Community Gratitude",
        desc: "Collaborating as a four-person team to deep clean and sanitize the village mosque as an enduring gesture of heartfelt thanks.",
      },
    ],
    takeawaysTitle: "Reflections on Humility, Hard Work, and Belonging",
    takeawaysLead:
      "Enduring life perspectives gained from living simply among hardworking village farmers.",
    takeaways: [
      {
        title: "The Dignity of Manual Labor",
        desc: "Tending crops and caring for livestock under the sun instills a deep, lasting reverence for the agricultural backbone of our nation.",
      },
      {
        title: "Simplicity Is True Abundance",
        desc: "Living with minimal amenities revealed that authentic joy, warmth, and peace come from community ties and honest living, not digital screens.",
      },
      {
        title: "Bonds Form Through Shared Effort",
        desc: "When you labor, eat, and clean together without pretension, profound human connections bridge strangers into family in a matter of days.",
      },
    ],
    documentationTitle: "Live In Photographic Records & Field Archives",
    documentationLead:
      "Visual archives documenting agricultural field labor, household routines, and community service during the Live In program.",
    documentation: [
      {
        id: "livein-fields",
        title: "Agricultural Fieldwork & Land Maintenance",
        tag: "Farming Labor",
        image: livein1,
        desc: "Working alongside local farmers in the village fields, planting crops, clearing land, and learning practical agriculture.",
      },
      {
        id: "livein-daily",
        title: "Host Family Household Integration & Daily Living",
        tag: "Village Immersion",
        image: livein2,
        desc: "Participating in daily household routines, tending the family warung, and bonding with the village community.",
      },
      {
        id: "livein-community",
        title: "Communal Mosque Restoration & Emotional Farewell",
        tag: "Community Service",
        image: livein3,
        desc: "Deep cleaning the local mosque as a team and sharing an emotional farewell with the villagers who welcomed us as family.",
      },
    ],
  },
};

// Aliases for intuitive URL routing
leadershipDetails["backpacker"] =
  leadershipDetails["singapore-malaysia-thailand-backpacker-3-country"];
leadershipDetails["idn-international-backpacker"] =
  leadershipDetails["singapore-malaysia-thailand-backpacker-3-country"];
leadershipDetails["backpacker-3-country"] =
  leadershipDetails["singapore-malaysia-thailand-backpacker-3-country"];
leadershipDetails["backpacker-singapore-malaysia-thailand"] =
  leadershipDetails["singapore-malaysia-thailand-backpacker-3-country"];

leadershipDetails["osis"] =
  leadershipDetails["idn-student-council-event-division-leader"];
leadershipDetails["event-division-leader"] =
  leadershipDetails["idn-student-council-event-division-leader"];
leadershipDetails["idn-student-council"] =
  leadershipDetails["idn-student-council-event-division-leader"];

leadershipDetails["barmus"] =
  leadershipDetails["barmus-voluntrip-volunteer-event-organizer"];
leadershipDetails["barmus-voluntrip"] =
  leadershipDetails["barmus-voluntrip-volunteer-event-organizer"];

leadershipDetails["business-survival"] =
  leadershipDetails["pt-intisel-semarang-business-life-survival"];
leadershipDetails["semarang-survival"] =
  leadershipDetails["pt-intisel-semarang-business-life-survival"];
leadershipDetails["pt-intisel-semarang"] =
  leadershipDetails["pt-intisel-semarang-business-life-survival"];

leadershipDetails["it-fest"] =
  leadershipDetails["it-fest-2025-competition-event-coordinator"];
leadershipDetails["itfest"] =
  leadershipDetails["it-fest-2025-competition-event-coordinator"];
leadershipDetails["it-fest-2025"] =
  leadershipDetails["it-fest-2025-competition-event-coordinator"];

leadershipDetails["live-in"] =
  leadershipDetails["idn-boarding-school-live-in-rural-immersion"];
leadershipDetails["livein"] =
  leadershipDetails["idn-boarding-school-live-in-rural-immersion"];
leadershipDetails["live-in-rural-immersion"] =
  leadershipDetails["idn-boarding-school-live-in-rural-immersion"];
leadershipDetails["live-in-program"] =
  leadershipDetails["idn-boarding-school-live-in-rural-immersion"];
leadershipDetails["idn-live-in"] =
  leadershipDetails["idn-boarding-school-live-in-rural-immersion"];
leadershipDetails["idn-boarding-school-live-in"] =
  leadershipDetails["idn-boarding-school-live-in-rural-immersion"];

// Legacy fallback aliases for mission impossible
leadershipDetails["mission-impossible"] =
  leadershipDetails["idn-boarding-school-live-in-rural-immersion"];
leadershipDetails["edurace"] =
  leadershipDetails["idn-boarding-school-live-in-rural-immersion"];
leadershipDetails["idn-boarding-school-mission-impossible"] =
  leadershipDetails["idn-boarding-school-live-in-rural-immersion"];
