import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function useCursorSpotlight() {
  const rafIdRef = useRef(null);
  const lastEventRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Matikan di mobile & tablet layar sentuh & mode hemat baterai/motion
    const isMobileOrTouch =
      window.innerWidth <= 1024 ||
      window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
      "ontouchstart" in window;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isMobileOrTouch || reducedMotion) return;

    const root = document.documentElement;

    // 2. Fungsi Render Live (Anti-Stale Cache, Anti-Disappear)
    const update = () => {
      const e = lastEventRef.current;
      if (!e) {
        rafIdRef.current = null;
        return;
      }

      // Update cahaya utama kursor (.spotlight)
      root.style.setProperty("--mx", `${e.clientX}px`);
      root.style.setProperty("--my", `${e.clientY}px`);

      // Update posisi titik-titik (.global-dots) secara live terhadap viewport
      const dotElements = document.querySelectorAll(".global-dots");
      for (let i = 0; i < dotElements.length; i++) {
        const el = dotElements[i];
        const rect = el.getBoundingClientRect();
        // Hanya update saat elemen berada di sekitar viewport untuk efisiensi
        if (rect.bottom >= -150 && rect.top <= window.innerHeight + 150) {
          const dotX = e.clientX - rect.left;
          const dotY = e.clientY - rect.top;
          el.style.setProperty("--dotX", `${dotX}px`);
          el.style.setProperty("--dotY", `${dotY}px`);
        }
      }
      rafIdRef.current = null;
    };

    const scheduleUpdate = () => {
      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(update);
      }
    };

    const handleMouseMove = (e) => {
      lastEventRef.current = e;
      scheduleUpdate();
    };

    const handleScroll = () => {
      if (lastEventRef.current) {
        scheduleUpdate();
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [pathname]);
}
