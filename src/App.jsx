// src/App.jsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar/Navbar";
import PageLoader from "./components/PageLoader/PageLoader";

import { useCursorSpotlight } from "./hooks/useCursorSpotlight";
import useScrollToTop from "./hooks/useScrollToTop";

import HomePage from "./pages/HomePage";

// Lazy imports tetap sama...
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const ExperienceDetailPage = lazy(() => import("./pages/ExperienceDetailPage"));
const AchievementsPage = lazy(() => import("./pages/AchievementsPage"));
const AchievementDetailPage = lazy(
  () => import("./pages/AchievementDetailPage"),
);
const CertificatesPage = lazy(() => import("./pages/CertificatesPage"));
const CertificateDetailPage = lazy(
  () => import("./pages/CertificateDetailPage"),
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function AnimatedRoutes() {
  const location = useLocation();
  useScrollToTop();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/experience/:slug" element={<ExperienceDetailPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route
            path="/achievements/:slug"
            element={<AchievementDetailPage />}
          />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route
            path="/certificates/:slug"
            element={<CertificateDetailPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  useCursorSpotlight();
  return (
    <HelmetProvider>
      <BrowserRouter>
        <LazyMotion features={domAnimation} strict>
          <div className="spotlight" />
          <Navbar />
          <AnimatedRoutes />
        </LazyMotion>
      </BrowserRouter>
    </HelmetProvider>
  );
}
