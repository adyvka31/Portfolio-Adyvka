# 🌐 Rafif Sava Adyvka Pratama — Official Portfolio

> **Production-grade, AI-native personal portfolio & systems showcase.**
> Engineered with **React 19**, **Vite 8**, **Static Site Generation (SSG)**, and modern **Glassmorphism Architecture**.

[![Live Demo](https://img.shields.io/badge/Live%20Site-adyvkapratama.my.id-7cf2ff?style=for-the-badge&logo=googlechrome&logoColor=black)](https://adyvkapratama.my.id)
[![React 19](https://img.shields.io/badge/React-19.2.6-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite 8](https://img.shields.io/badge/Vite-8.0.12-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![SSG](https://img.shields.io/badge/SSG-71%20Static%20Pages-success?style=for-the-badge&logo=fastapi)](https://github.com/antfu/vite-ssg)
[![SEO & AEO](https://img.shields.io/badge/SEO%20%26%20AEO-Schema.org%20%40graph-purple?style=for-the-badge&logo=google)](https://schema.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-white?style=for-the-badge)](LICENSE)

---

## 📑 Table of Contents

- [Vision & Aesthetic](#-vision--aesthetic)
- [Key Engineering Highlights](#-key-engineering-highlights)
- [Page Architecture & Routes](#-page-architecture--routes)
- [Tech Stack](#-tech-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started](#-getting-started)
- [Content Management Guide](#-content-management-guide)
- [SEO, Schema.org & AI Engine Optimization (AEO)](#-seo-schemaorg--ai-engine-optimization-aeo)
- [Performance & Security Architecture](#-performance--security-architecture)
- [Author & Connect](#-author--connect)

---

## 🎨 Vision & Aesthetic

This portfolio is built to reflect the craftsmanship of a **Software Engineer & Systems Architect**. Inspired by design systems from **Linear**, **Vercel**, and **Apple**, the application blends dark luxury with micro-interactions:

- **Ultra-Dark Canvas**: Deep foundation (`#07070a` and `#0a0a0c`) paired with an electric cyan accent (`#7cf2ff`).
- **Precision Typography**: Editorial pairing of **Instrument Serif** (italic accents) with **Geist Sans** and **Geist Mono**.
- **Unified Glassmorphism Card System**: Real-time cursor spotlight reflection (`--mouse-x`, `--mouse-y`) with GPU-accelerated backdrop blur (`-webkit-backdrop-filter`) and reactive borders across all pages.
- **Atmospheric Backgrounds**: Interactive dot-grid proximity reveals, aurora gradient mesh, and meteor light beams disabled gracefully on mobile devices.

---

## ⚡ Key Engineering Highlights

### 1. Static Site Generation (SSG) with Vite React SSG
- **Pre-rendered HTML**: All 71 static and dynamic detail routes (`/projects/*`, `/experience/*`, `/achievements/*`, `/certificates/*`) are compiled into standalone HTML documents at build time.
- **Zero-Flicker Hydration**: Pre-populated static loader data cache in `index.html` eliminates layout jumps and hydration mismatches.
- **Fail-Safe Route Boundary**: Integrated [`RootErrorBoundary`](src/components/RootErrorBoundary/RootErrorBoundary.jsx) handles chunk-load timeouts, stale deployments, and offline states gracefully.

### 2. Unified Card & Spotlight Architecture
- **Single Source of Truth**: All cards across homepage, catalogue pages, and deep case-study pages share the unified [`Card`](src/components/Card/Card.jsx) component.
- **Hardware-Accelerated Glow**: Uses CSS custom variables driven by [`useCardSpotlight`](src/hooks/useCardSpotlight.js) with `-webkit-backdrop-filter` fallback layers to guarantee glass styling consistency between local development and production CDNs.

### 3. Automated Image Optimization Pipeline
- **Modern Formats**: 175 semantic assets processed by [`vite-imagetools`](vite.config.js) into next-gen **WebP** and **AVIF** formats.
- **Responsive `srcset`**: The [`Image`](src/components/Image/Image.jsx) component automatically renders responsive resolution sets with skeleton placeholders to achieve zero Cumulative Layout Shift (CLS = 0).
- **100% Semantic Alt Attributes**: Every visual asset is indexed with descriptive, keyword-rich alternative text.

### 4. Dynamic XML Sitemap Automation
- The build pipeline executes [`scripts/generate-sitemap.js`](scripts/generate-sitemap.js) before SSG compilation, syncing 70 production routes directly from [`routesManifest.js`](src/data/routesManifest.js).
- Verified against the official W3C XML schema via `xmllint`.

---

## 🗺 Page Architecture & Routes

| URL Pattern | Page Type | Description |
|---|---|---|
| `/` | Landing / Profile | Cinematic Hero, Live Stack Marquee, About Teaser, Featured Bento Grids, Interactive 3D Contact Card |
| `/about` | Long-form Bio | Technical & human dual-track narrative, core engineering philosophy, tech ecosystem |
| `/projects` | Catalogue | Filterable & searchable showcase of enterprise ERPs, distributed systems, mobile apps, and developer tools |
| `/projects/:slug` | Case Study | In-depth architectural case studies (Problem, System Architecture, Key Challenges, Metrics Grid, HD Gallery) |
| `/experience` | Timeline | Categorized career chronology (Full-time, Contract, Freelance, Technical Instructor, Leadership) |
| `/experience/:slug` | Experience Detail | Narrative breakdown of roles, responsibilities, technical stacks, and organizational impact |
| `/achievements` | Showcase | Competitive programming, national hackathons, and design contest trophies |
| `/achievements/:slug`| Achievement Story | Behind-the-scenes competition journey, technical submissions, and press coverage |
| `/certificates` | Credential Vault | Verified professional certifications (Harvard CS50, Dicoding, AWS, Skilvul) with badge ribbon filters |
| `/certificates/:slug`| Credential Detail | Skills assessed, credential validation links, and learning takeaways |
| `/contact` | Communication Hub | Direct messaging form, GPG/social channels, and consultation scheduling |
| `/*` | 404 Fallback | Branded recovery page guiding visitors back to active routes |

---

## 🛠 Tech Stack

### Core & Framework
- **Runtime**: [React 19](https://react.dev) (`^19.2.6`)
- **Build Engine**: [Vite 8](https://vitejs.dev) (`^8.0.12`)
- **Static Generation**: [vite-react-ssg](https://github.com/antfu/vite-ssg) (`^0.9.1-beta.1`)
- **Routing**: [React Router DOM v6](https://reactrouter.com) (`^6.28.0`)
- **Motion & Physics**: [Framer Motion 11](https://www.framer.com/motion/) (`^11.18.2`)

### Typography & Styling
- **Fonts**: `@fontsource/geist` (Sans), `@fontsource-variable/geist-mono` (Mono), `@fontsource/instrument-serif` (Display Serif)
- **Styling Architecture**: Vanilla CSS Modules (`*.module.css`) + CSS Custom Properties Design Tokens
- **Asset Pipeline**: `vite-imagetools` (AVIF/WebP image transforms)

---

## 🗂 Project Directory Structure

```text
portofolio-adyvka/
├── public/
│   ├── assets/fonts/               # Critical preloaded WOFF2 font files
│   ├── apple-touch-icon.png        # iOS Safari home screen clip (180x180)
│   ├── favicon-16x16.png           # Browser tab favicon (16x16)
│   ├── favicon-32x32.png           # Browser tab favicon (32x32)
│   ├── favicon-48x48.png           # Google SERP mobile favicon (48x48)
│   ├── favicon.ico                 # Fallback root favicon
│   ├── favicon.svg                 # Scalable dark/light vector favicon
│   ├── logo-192.png                # PWA application icon (192x192)
│   ├── logo-512.png                # PWA splash screen icon (512x512)
│   ├── og-image.jpg                # Universal OpenGraph social banner
│   ├── llms.txt                    # AI Search Engine / LLM agent discovery file
│   ├── robots.txt                  # Search engine crawler policies
│   ├── site.webmanifest            # W3C Progressive Web App manifest
│   ├── sitemap.xml                 # Validated XML sitemap (auto-generated)
│   ├── _headers                    # Edge security & cache-control policies
│   └── _redirects                  # SPA client-side routing fallback
│
├── scripts/
│   └── generate-sitemap.js         # Automated XML sitemap builder
│
├── src/
│   ├── assets/                     # 175 semantic, keyword-rich visual assets
│   ├── components/
│   │   ├── BottomCTA/              # Reusable call-to-action conversion strip
│   │   ├── Card/                   # Unified spotlight glass card component
│   │   ├── CaseStudyBlock/         # Modular case study block template
│   │   ├── DocumentationGallery/   # Interactive photo documentation viewer
│   │   ├── EmptyState/             # Search zero-state indicator
│   │   ├── ErrorBoundary/          # Component-level error catcher
│   │   ├── Icons/                  # Accessible inline SVG icon library
│   │   ├── Image/                  # Multi-format responsive image wrapper
│   │   ├── Lightbox/               # Fullscreen HD image inspection modal
│   │   ├── LogoMark/               # Animated brand logomark
│   │   ├── MediaFrame/             # Browser-window framed screenshot
│   │   ├── MetricsGrid/            # Key results numeric metrics card
│   │   ├── Navbar/                 # Floating frosted navigation pill + CV modal
│   │   ├── PageHero/               # Standardized page title header
│   │   ├── PageLoader/             # Suspense route transition indicator
│   │   ├── PageShell/              # Universal background grid & footer wrapper
│   │   ├── PageTransition/         # Smooth route transition animator
│   │   ├── PrevNextNav/            # Sibling route navigation pagination
│   │   ├── ProgressBar/            # Reading progress indicator
│   │   ├── ProjectGallery/         # Bento screenshot showcase
│   │   ├── Reveal/                 # Viewport intersection reveal wrapper
│   │   ├── RootErrorBoundary/      # Top-level catastrophic error handler
│   │   ├── SectionLabel/           # Numbered eyebrow section badge ("01 — Projects")
│   │   ├── SEO/                    # Enterprise Schema.org JSON-LD & meta manager
│   │   ├── SubNav/                 # Secondary filtering pill tabs
│   │   └── Tag/                    # Technology skill tag component
│   │
│   ├── data/
│   │   ├── achievementDetails.js   # Rich stories for competition achievements
│   │   ├── certificateDetails.js   # Credential issuer & curriculum data
│   │   ├── experienceDetails.js    # Work & engineering experience stories
│   │   ├── leadershipDetails.js    # Community & organization leadership stories
│   │   ├── portfolio.js            # Primary index data (projects, stats, skills)
│   │   ├── projectDetails.js       # Comprehensive system architecture narratives
│   │   ├── routesManifest.js       # Centralized route catalog for SSG & Sitemap
│   │   ├── siteConfig.js           # Global constants (domain, author, OG defaults)
│   │   └── teachingDetails.js      # Technical instructor & workshop records
│   │
│   ├── hooks/
│   │   ├── useCardSpotlight.js     # Card-level mouse reflection coordinates
│   │   ├── useCursorSpotlight.js   # Global radial ambient glow
│   │   └── useScrollToTop.js       # Route change scroll reset
│   │
│   ├── layouts/HomeLayout/         # Modular homepage sections
│   │   ├── AboutLayout/
│   │   ├── AchievementLayout/
│   │   ├── ContactLayout/
│   │   ├── ExperienceLayout/
│   │   ├── FooterLayout/
│   │   ├── HeroLayout/
│   │   ├── ProjectLayout/
│   │   └── TextMarqueeLayout/
│   │
│   ├── pages/                      # Top-level view routes
│   │   ├── AboutPage/
│   │   ├── AchievementPage/
│   │   ├── CertificatePage/
│   │   ├── ContactPage/
│   │   ├── DetailPage/             # Dynamic slug case-study renders
│   │   ├── ExperiencePage/
│   │   ├── HomePage/
│   │   ├── NotFoundPage/
│   │   └── ProjectPage/
│   │
│   ├── templates/                  # Reusable page templates
│   │   └── NarrativeDetailTemplate/
│   │
│   ├── App.jsx                     # Layout scaffold (Navbar + Suspense Outlet)
│   ├── index.css                   # Design tokens, reset, typography, and glass styles
│   ├── main.jsx                    # Client/SSG entry hydration point
│   └── routes.jsx                  # React Router v6 route configuration
│
├── index.html                      # HTML root template with preloads & GTM
├── package.json                    # Dependencies and build scripts
└── vite.config.js                  # Rollup manual chunks & imagetools config
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.x` or `v20.x+` (LTS recommended)
- **Package Manager**: `npm` (v9+) or `pnpm`

### Installation
Clone the repository and install runtime dependencies:
```bash
git clone https://github.com/adyvka31/portofolio-adyvka.git
cd portofolio-adyvka
npm install
```

### Development Server
Starts the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build & SSG
Generates the sitemap and compiles all 71 static pages into the `dist/` directory:
```bash
npm run build
```

### Preview Production Build
Locally tests the generated static files before deployment:
```bash
npm run preview
```

### Code Quality & Linting
Runs ESLint with React Hooks and React Refresh rules:
```bash
npm run lint
```

---

## 📝 Content Management Guide

### Adding a New Project
1. **Prepare Visual Assets**: Add optimized screenshots to `src/assets/<project-name>/` using descriptive kebab-case names (e.g., `myproject-architecture-overview.webp`).
2. **Register in Portfolio Index**: Add entry to the `projects` array in [`src/data/portfolio.js`](src/data/portfolio.js).
3. **Write Detailed Case Study**: Add the deep-dive narrative (problem statement, architecture, metrics) to [`src/data/projectDetails.js`](src/data/projectDetails.js).
4. **Register Route Slug**: Add the slug string to `PROJECT_SLUGS` in [`src/data/routesManifest.js`](src/data/routesManifest.js).
5. **Rebuild**: Run `npm run build` to generate the new static page and update `sitemap.xml`.

---

## 🔍 SEO, Schema.org & AI Engine Optimization (AEO)

The platform is engineered to rank on both traditional search engines (Google, Bing) and AI search agents (Perplexity, ChatGPT, Claude, Apple Intelligence):

### Structured Data Graph (`application/ld+json`)
Every page injects a connected `@graph` schema adhering strictly to Schema.org standards:
- **`Person`**: Encapsulates identity (*Rafif Sava Adyvka Pratama*), occupation (*Software Engineer & Systems Architect*), verified affiliations (*PT Intisel Prodaktifakom*, *SMK IDN Boarding School*, *Harvard CS50*), and `sameAs` social links.
- **`WebSite` & `WebPage`**: Canonical URLs, publisher IDs, and language tags (`en-US`).
- **`ProfilePage`**: Attached to identity pages (`/` and `/about`) for Google Profile indexing.
- **`BreadcrumbList`**: Hierarchical position tracking for detail routes.
- **`ItemList`**: Structural catalog representation for projects, achievements, and credentials.

### AI Search Agent Discovery (`llms.txt`)
Includes a standardized [`public/llms.txt`](public/llms.txt) specification allowing LLM web crawlers to read an authoritative Markdown summary of projects, architecture, achievements, and contact channels.

### Regional Geo-Tagging
Explicitly declared geographic coordinates targeting West Java, Indonesia:
```html
<meta name="geo.region" content="ID-JB" />
<meta name="geo.placename" content="Depok, West Java, Indonesia" />
<meta name="geo.position" content="-6.4025;106.7942" />
<meta name="ICBM" content="-6.4025, 106.7942" />
```

---

## 🛡 Performance & Security Architecture

### HTTP Headers & Edge Caching (`public/_headers`)
```http
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(self)
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate
```

### Core Web Vitals Optimization
- **Deferred Analytics**: Google Tag Manager (`G-PKG14RYTBS`) loads on first user interaction or through `requestIdleCallback` after 3.5 seconds, avoiding main-thread congestion during First Contentful Paint (FCP).
- **Manual Chunk Splitting**: Bundles are isolated into `react`, `router`, `motion`, and `vendor` chunks in [`vite.config.js`](vite.config.js) to optimize browser cache hits.
- **Font Preloading**: WOFF2 subsets for headline and body typefaces are preloaded directly in `<head>`.

---

## 👤 Author & Connect

**Rafif Sava Adyvka Pratama (Adyvka)**  
*Software Engineer & Systems Architect* — Depok, West Java, Indonesia

- 🌐 **Website**: [adyvkapratama.my.id](https://adyvkapratama.my.id)
- 💼 **LinkedIn**: [linkedin.com/in/adyvka-pratama](https://www.linkedin.com/in/adyvka-pratama/)
- 🐙 **GitHub**: [@adyvka31](https://github.com/adyvka31)
- 📺 **YouTube**: [@adyvkapratama](https://www.youtube.com/@adyvkapratama)
- 📸 **Instagram**: [@adyvkaa](https://instagram.com/adyvkaa)
- 🎵 **TikTok**: [@adypraa31](https://www.tiktok.com/@adypraa31)
- 📧 **Direct Inquiries**: [rafifdyvka07@gmail.com](mailto:rafifdyvka07@gmail.com)

---

<div align="center">
  <sub>Crafted with precision & passion in Depok, Indonesia · © 2026 Rafif Sava Adyvka Pratama</sub>
</div>
