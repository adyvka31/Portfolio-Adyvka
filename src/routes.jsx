// src/routes.jsx
import { lazy } from "react";
import App from "./App.jsx";

// Lazy imports
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectPage/ProjectsPage"));
const ProjectDetailPage = lazy(
  () => import("./pages/DetailPage/ProjectDetailPage"),
);
const ExperiencePage = lazy(
  () => import("./pages/ExperiencePage/ExperiencePage"),
);
const ExperienceDetailPage = lazy(
  () => import("./pages/DetailPage/ExperienceDetailPage"),
);
const AchievementsPage = lazy(
  () => import("./pages/AchievementPage/AchievementsPage"),
);
const AchievementDetailPage = lazy(
  () => import("./pages/DetailPage/AchievementDetailPage"),
);
const CertificatesPage = lazy(
  () => import("./pages/CertificatePage/CertificatesPage"),
);
const CertificateDetailPage = lazy(
  () => import("./pages/DetailPage/CertificateDetailPage"),
);
const NotFoundPage = lazy(() => import("./pages/NotFoudPage/NotFoundPage"));

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "projects/:slug", element: <ProjectDetailPage /> },
      { path: "experience", element: <ExperiencePage /> },
      { path: "experience/:slug", element: <ExperienceDetailPage /> },
      { path: "achievements", element: <AchievementsPage /> },
      { path: "achievements/:slug", element: <AchievementDetailPage /> },
      { path: "certificates", element: <CertificatesPage /> },
      { path: "certificates/:slug", element: <CertificateDetailPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];
