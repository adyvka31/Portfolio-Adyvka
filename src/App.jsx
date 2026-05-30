import { Suspense } from "react";
// HAPUS ScrollRestoration dari import
import { Outlet } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import PageLoader from "./components/PageLoader/PageLoader";
import { useCursorSpotlight } from "./hooks/useCursorSpotlight";
import useScrollToTop from "./hooks/useScrollToTop"; 

export default function App() {
  useCursorSpotlight();
  useScrollToTop(); 

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="spotlight" />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </LazyMotion>
  );
}
