// Indexed by the slug generated in portfolio.js (slugify of title)
// Add an entry per achievement / experience item you want a detail page for.
export const achievementDetails = {
  "1st-place-national-web-design-competition": {
    summary:
      "Took first place at Icomfest 2025's national web design competition against 80+ teams — judged on UX, code quality, and accessibility.",
    meta: [
      { label: "Category", value: "Competition" },
      { label: "Result", value: "1st Place" },
      { label: "Date", value: "Feb 2025" },
      { label: "Teams", value: "80+" },
    ],
    sections: [
      {
        title: "The brief",
        body: [
          "Build a website for a fictional NGO that promotes digital literacy in rural Indonesia. 48 hours. Judges scored on visual design, code quality, accessibility, and a live Q&A.",
        ],
      },
      {
        title: "Approach",
        body: [
          "I went hard on accessibility — full keyboard nav, screen-reader landmarks, prefers-reduced-motion handling. Most teams skipped this entirely.",
          "Visually I leaned editorial: large serif accents, generous whitespace, a single accent color. The opposite of every other entry, which all defaulted to gradient + bento.",
        ],
      },
      {
        title: "Why it won",
        body: [
          "Judges called out the accessibility implementation specifically. The Q&A came down to a single question: 'walk me through your color contrast decisions.' I had an answer ready because I'd built the design system around WCAG AA from the start.",
        ],
      },
    ],
    stack: ["React", "Vite", "Tailwind", "Framer Motion"],
  },

  "finalist-national-web-dev-competition": {
    summary:
      "Top-5 finalist at Universitas Lampung's national web dev competition — judged on technical implementation and presentation.",
    meta: [
      { label: "Category", value: "Competition" },
      { label: "Result", value: "Top 5 / Finalist" },
      { label: "Date", value: "Nov 2024" },
    ],
    sections: [
      {
        title: "The challenge",
        body: [
          "Build a full-stack web app addressing a public sector problem. Two weeks. Judged on technical depth, presentation, and impact narrative.",
        ],
      },
      {
        title: "What I built",
        body: [
          "A platform connecting local food vendors with surplus produce from supermarkets — basically a B2B marketplace for reducing food waste.",
        ],
      },
      {
        title: "What I'd do differently",
        body: [
          "I over-engineered the backend. The judges cared about the user story, not whether I'd used CQRS. Lesson learned for the next one.",
        ],
      },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Tailwind"],
  },

  "web-development-instructor": {
    summary:
      "Taught the basics of web development to high-schoolers at SMA Lazuardi GCS — 4 sessions, ~30 students.",
    meta: [
      { label: "Category", value: "Teaching" },
      { label: "Sessions", value: "4" },
      { label: "Date", value: "Sep 2025" },
    ],
    sections: [
      {
        title: "What I taught",
        body: [
          "HTML semantics, CSS layout, and the absolute minimum JavaScript needed to make a page do something. No frameworks, no build tools — just the browser.",
        ],
      },
      {
        title: "What I learned teaching",
        body: [
          "The questions students ask are the ones senior devs forgot to ask years ago. 'Why does this work?' is the most valuable thing you can hear when you've been on autopilot.",
        ],
      },
    ],
    stack: ["HTML", "CSS", "JavaScript"],
  },

  "event-division-leader": {
    summary:
      "Led the events division of the IDN Student Council for a full school year — owned 6 major events from concept to execution.",
    meta: [
      { label: "Category", value: "Leadership" },
      { label: "Period", value: "Jan 2025 — Mar 2026" },
      { label: "Events", value: "6 major" },
    ],
    sections: [
      {
        title: "The role",
        body: [
          "Owned planning, sponsorship, logistics, and a team of 12 for every flagship student event during my term.",
        ],
      },
      {
        title: "Biggest takeaways",
        body: [
          {
            type: "list",
            items: [
              "Delegation is harder than doing it yourself — but you learn nothing if you don't.",
              "Sponsorship outreach is a sales job. Write the deck like you'd pitch a startup.",
              "Post-mortems matter more than retros. Write them while it still hurts.",
            ],
          },
        ],
      },
    ],
  },

  // Stub remaining items so routes don't 404; expand later.
  "app-development-instructor": {
    summary:
      "Taught basic Android app development to junior high students at SMP INS Depok.",
    meta: [
      { label: "Category", value: "Teaching" },
      { label: "Date", value: "Oct 2023" },
    ],
    sections: [
      {
        title: "Overview",
        body: [
          "Introductory sessions on mobile app development concepts and hands-on exercises.",
        ],
      },
    ],
  },
  "backpacker-3-country": {
    summary:
      "Solo backpacking trip through Singapore, Malaysia, and Thailand — budget, route, and logistics all self-managed.",
    meta: [
      { label: "Date", value: "Sep 2025" },
      { label: "Countries", value: "3" },
    ],
    sections: [
      {
        title: "Why it mattered",
        body: [
          "Same skills as project management — planning, contingency, comfort with uncertainty. Just with worse Wi-Fi.",
        ],
      },
    ],
  },
  "game-development-instructor": {
    summary: "Taught basic game development concepts to junior high students.",
    meta: [{ label: "Date", value: "Oct 2023" }],
    sections: [
      {
        title: "Overview",
        body: [
          "Hands-on introduction to game logic, simple physics, and asset workflow.",
        ],
      },
    ],
  },
  "volunteer-event-organizer": {
    summary:
      "Volunteer with Barmus Voluntrip — coordinated logistics for a community volunteering event.",
    meta: [{ label: "Date", value: "Feb 2026" }],
    sections: [
      {
        title: "Role",
        body: [
          "Logistics coordination, on-ground execution, and post-event reporting.",
        ],
      },
    ],
  },
};
