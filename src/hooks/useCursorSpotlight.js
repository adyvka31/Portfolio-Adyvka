// src/hooks/useCursorSpotlight.js
import { useEffect } from "react";

export function useCursorSpotlight() {
  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;

    const spot = document.querySelector(".spotlight");
    // Ambil elemen titik-titik
    const globalDots = document.querySelector(".global-dots");

    const handleMove = (e) => {
      // Senter elemen global bawaan (Hero dll)
      if (spot) {
        spot.style.setProperty("--mx", e.clientX + "px");
        spot.style.setProperty("--my", e.clientY + "px");
      }

      // Senter khusus untuk elemen titik-titik
      if (globalDots) {
        const rect = globalDots.getBoundingClientRect();
        // Kalkulasi posisi X dan Y murni di dalam kotak .global-dots
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        globalDots.style.setProperty("--dotX", x + "px");
        globalDots.style.setProperty("--dotY", y + "px");
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
}
