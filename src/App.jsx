import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import PageLoader from "./components/PageLoader/PageLoader";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { useCursorSpotlight } from "./hooks/useCursorSpotlight";
import useScrollToTop from "./hooks/useScrollToTop";

const Chatbot = lazy(() => import("./components/Chatbot/Chatbot"));

export default function App() {
  useCursorSpotlight();
  useScrollToTop();

  return (
    <LazyMotion features={domAnimation} strict>
      <ProgressBar />
      <div className="spotlight" />
      <Navbar />
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </LazyMotion>
  );
}
