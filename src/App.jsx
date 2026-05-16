import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import { useCursorSpotlight } from "./hooks/useCursorSpotlight";
import useScrollToTop from "./hooks/useScrollToTop";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ExperiencePage from "./pages/ExperiencePage";
import ExperienceDetailPage from "./pages/ExperienceDetailPage";
import AchievementsPage from "./pages/AchievementsPage";
import AchievementDetailPage from "./pages/AchievementDetailPage";
import CertificatesPage from "./pages/CertificatesPage";
import CertificateDetailPage from "./pages/CertificateDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function AnimatedRoutes() {
  const location = useLocation();
  useScrollToTop();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/experience/:slug" element={<ExperienceDetailPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/achievements/:slug" element={<AchievementDetailPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/certificates/:slug" element={<CertificateDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  useCursorSpotlight();
  return (
    <BrowserRouter>
      <div className="spotlight" />
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
