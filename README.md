# 🌐 Adyvka's Portfolio 🌐

> **Personal portfolio of Rafif Sava Adyvka Pratama** — Full Stack Engineer & Mobile Developer based in Depok, West Java, Indonesia.

[![Live Demo](https://img.shields.io/badge/Live-adyvka--pratama.netlify.app-7cf2ff?style=flat-square&logo=netlify)](https://adyvka-pratama.netlify.app)
[![Tech Stack](https://img.shields.io/badge/Stack-React%20%2B%20Vite-61dafb?style=flat-square&logo=react)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-white?style=flat-square)](LICENSE)

---

## 📸 Preview

> A dark, AI-native portfolio inspired by **Vercel**, **Linear**, and **Apple** — built for premium aesthetic and professional credibility in the AI/frontend space.

**Design highlights:**
- Near-black background (`#07070A`) with restrained cyan accent (`#7cf2ff`)
- Instrument Serif (italic accents) + Geist Sans + Geist Mono typography
- Aurora gradient hero with cursor spotlight effect
- Cinematic scroll-driven animations with Apple-style easing

---

## ✨ Features

### 🎨 Design & UI
- **Cursor spotlight** — radial glow that follows mouse movement across the entire page
- **Aurora hero** — animated gradient background on the landing section
- **Card hover glow** — per-card spotlight using CSS variables (`--cx`, `--cy`)
- **Meteor shower** — GPU-accelerated falling light beams, disabled on mobile
- **Dot grid** — interactive dot background that reveals on cursor proximity
- **Scroll animations** — `IntersectionObserver`-based reveals with cubic-bezier easing (zero-JS fallback via CSS)
- **3D profile card** — mouse-tracked `rotateX/rotateY` transform on the contact card

### 📄 Pages
| Route | Description |
|---|---|
| `/` | Home — Hero, Marquee, About, Projects, Experience, Recognition, Contact |
| `/about` | Detailed about page with dual-track timeline (Technical + Human) |
| `/projects` | Filterable + searchable project catalogue |
| `/projects/:slug` | Individual project case study |
| `/experience` | Work, teaching, and other experience sections |
| `/experience/:slug` | Individual experience detail |
| `/achievements` | Cinematic achievement showcase |
| `/achievements/:slug` | Individual achievement story |
| `/certificates` | Certificate gallery with verified badge ribbon |
| `/certificates/:slug` | Individual certificate detail |

### ⚡ Performance
- **Static Site Generation (SSG)** via `vite-react-ssg` — pre-rendered HTML for all routes
- **Image optimization** — `vite-imagetools` with automatic AVIF + WebP conversion, responsive `srcset`
- **Code splitting** — manual chunks for `react`, `router`, `framer-motion`, `vendor`
- **Lazy loading** — all page components loaded on demand via `React.lazy`
- **Prefetch on hover** — navbar links prefetch their target page's JS chunk on `mouseEnter`
- **IntersectionObserver** — animations paused when off-screen; meteor shower disabled on mobile

### 🔍 SEO
- React 19 native metadata (`<title>`, `<meta>`) hoisted to `<head>` automatically
- OpenGraph + Twitter Card meta tags per page
- `robots.txt` and `sitemap.xml`
- Google site verification tag
- `application/ld+json` structured data (Person schema)

---

## 🗂 Project Structure

```
portofolio-adyvka/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _redirects            # Netlify SPA redirect rule
│
├── src/
│   ├── assets/               # Images, CV PDF
│   ├── components/
│   │   ├── BottomCTA/        # Reusable call-to-action section
│   │   ├── CaseStudyBlock/   # Detail page section template
│   │   ├── ErrorBoundary/    # Global error boundary
│   │   ├── Icons/            # Inline SVG icon set
│   │   ├── Image/            # Skeleton + lazy image wrapper
│   │   ├── LogoMark/         # Animated "a" logomark
│   │   ├── MediaFrame/       # macOS-style screenshot frame
│   │   ├── Navbar/           # Floating pill navbar + CV modal
│   │   ├── PageHero/         # Reusable page hero component
│   │   ├── PageLoader/       # Suspense fallback spinner
│   │   ├── PageShell/        # Layout wrapper (background + footer)
│   │   ├── PageTransition/   # Framer Motion page fade/slide
│   │   ├── PrevNextNav/      # Sibling navigation for detail pages
│   │   ├── Reveal/           # IntersectionObserver-based reveal
│   │   ├── SEO/              # React 19 head metadata component
│   │   ├── SectionLabel/     # Numbered eyebrow label ("01 — About")
│   │   └── Tag/              # Pill tag component
│   │
│   ├── data/
│   │   ├── portfolio.js          # All portfolio data (projects, experience, etc.)
│   │   ├── projectDetails.js     # Project case study content
│   │   ├── experienceDetails.js  # Experience case study content
│   │   ├── achievementDetails.js # Achievement story content
│   │   └── certificateDetails.js # Certificate detail content
│   │
│   ├── hooks/
│   │   ├── useCardSpotlight.js   # Per-card mouse glow effect
│   │   ├── useCursorSpotlight.js # Global cursor spotlight + dot grid
│   │   └── useScrollToTop.js     # Scroll restoration on route change
│   │
│   ├── layouts/HomeLayout/
│   │   ├── AboutLayout/          # About section with scroll word reveal
│   │   ├── AchievementLayout/    # Tabbed recognition bento grid
│   │   ├── ContactLayout/        # 3D profile card + contact form
│   │   ├── ExperienceLayout/     # Alternating timeline
│   │   ├── FooterLayout/         # Footer with status indicator
│   │   ├── HeroLayout/           # Layered 3-text + photo hero
│   │   ├── ProjectLayout/        # Filterable bento project grid
│   │   └── TextMarqueeLayout/    # Infinite scrolling tech stack
│   │
│   ├── pages/
│   │   ├── HomePage/
│   │   ├── AboutPage/
│   │   ├── ProjectPage/
│   │   ├── ExperiencePage/
│   │   ├── AchievementPage/
│   │   ├── CertificatePage/
│   │   ├── DetailPage/           # Shared detail pages (Project/Experience/Achievement/Certificate)
│   │   └── NotFoundPage/
│   │
│   ├── App.jsx                   # Root layout (Navbar + Outlet)
│   ├── main.jsx                  # ViteReactSSG entry point
│   ├── routes.jsx                # Route definitions
│   └── index.css                 # Global design tokens + utility classes
│
├── vite.config.js
├── package.json
└── eslint.config.js
```

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **SSG** | vite-react-ssg |
| **Routing** | React Router DOM v6 |
| **Animation** | Framer Motion 11 |
| **Image Optimization** | vite-imagetools (AVIF + WebP) |
| **Typography** | Instrument Serif, Geist Sans, Geist Mono |
| **Styling** | CSS Modules + CSS Custom Properties |
| **Linting** | ESLint 10 (react-hooks + react-refresh) |
| **Deployment** | Netlify |

---

## 📦 Dependencies

### Runtime
| Package | Version | Purpose |
|---|---|---|
| `react` | `^19.2.6` | UI framework |
| `react-dom` | `^19.2.6` | DOM renderer |
| `react-router-dom` | `^6.28.0` | Client-side routing |
| `framer-motion` | `^11.18.2` | Animation library |
| `@fontsource/geist` | `^5.2.9` | Geist Sans font |
| `@fontsource-variable/geist-mono` | `^5.2.8` | Geist Mono variable font |
| `@fontsource/instrument-serif` | `^5.2.8` | Instrument Serif font |

### Dev
| Package | Version | Purpose |
|---|---|---|
| `vite` | `^8.0.12` | Build tool (Rolldown-powered) |
| `vite-react-ssg` | `^0.9.1-beta.1` | Static site generation |
| `vite-imagetools` | `^10.0.0` | Image optimization pipeline |
| `@vitejs/plugin-react` | `^6.0.1` | React plugin for Vite |
| `eslint` | `^10.3.0` | Linting |

---

## 👤 About the Author

**Rafif Sava Adyvka Pratama** — Full Stack Engineer & Mobile Developer

- 🌐 Portfolio: [adyvka-pratama.netlify.app](https://adyvka-pratama.netlify.app)
- 💼 LinkedIn: [linkedin.com/in/adyvka-pratama](https://www.linkedin.com/in/adyvka-pratama/)
- 🐙 GitHub: [github.com/adyvka31](https://github.com/adyvka31)
- 📧 Email: rafifdyvka07@gmail.com
- 📍 Based in Depok, West Java, Indonesia

---

<div align="center">
  <sub>Built with care in West Java, Indonesia · © 2026 Rafif Sava Adyvka Pratama</sub>
</div>
