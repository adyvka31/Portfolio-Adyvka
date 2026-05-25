// src/hooks/useCursorSpotlight.js
import { useEffect, useRef } from "react";

export function useCursorSpotlight() {
  const rafIdRef = useRef(null);
  const lastEventRef = useRef(null);
  const dotsCacheRef = useRef([]);

  useEffect(() => {
    // ✅ Disable di mobile dan reduced motion
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isMobile || reducedMotion) return;

    // ✅ Cache DOM elements + observe mutations
    const refreshDotsCache = () => {
      dotsCacheRef.current = Array.from(
        document.querySelectorAll(".global-dots"),
      ).map((el) => ({ el, rect: el.getBoundingClientRect() }));
    };
    refreshDotsCache();

    // ✅ Refresh cache hanya saat resize / route change
    const observer = new MutationObserver(refreshDotsCache);
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("resize", refreshDotsCache, { passive: true });
    window.addEventListener("scroll", refreshDotsCache, { passive: true });

    const update = () => {
      const e = lastEventRef.current;
      if (!e) return;

      const root = document.documentElement;
      root.style.setProperty("--mx", `${e.clientX}px`);
      root.style.setProperty("--my", `${e.clientY}px`);

      // ✅ Pakai cache, tidak panggil getBoundingClientRect lagi
      for (const { el, rect } of dotsCacheRef.current) {
        el.style.setProperty("--dotX", `${e.clientX - rect.left}px`);
        el.style.setProperty("--dotY", `${e.clientY - rect.top}px`);
      }
      rafIdRef.current = null;
    };

    const handleMouseMove = (e) => {
      lastEventRef.current = e;
      // ✅ Throttle dengan rAF — max 1 update per frame
      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", refreshDotsCache);
      window.removeEventListener("scroll", refreshDotsCache);
      observer.disconnect();
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);
}
