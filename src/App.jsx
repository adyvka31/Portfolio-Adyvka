import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import PageLoader from "./components/PageLoader/PageLoader";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Chatbot from "./components/Chatbot/Chatbot";
import { useCursorSpotlight } from "./hooks/useCursorSpotlight";
import useScrollToTop from "./hooks/useScrollToTop";

export default function App() {
  useCursorSpotlight();
  useScrollToTop();

  return (
    <LazyMotion features={domAnimation} strict>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ProgressBar />
      <div className="spotlight" />
      <Navbar />
      <div id="main-content" tabIndex={-1} style={{ outline: "none" }}>
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </div>
      <Chatbot />
    </LazyMotion>
  );
}
