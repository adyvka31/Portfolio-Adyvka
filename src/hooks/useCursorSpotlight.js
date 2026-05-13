import { useEffect } from "react";

/**
 * Tracks mouse position and applies it as CSS variables
 * to the global .spotlight element. Desktop-only.
 */
export function useCursorSpotlight() {
  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;

    const spot = document.querySelector(".spotlight");
    if (!spot) return;

    const handleMove = (e) => {
      spot.style.setProperty("--mx", e.clientX + "px");
      spot.style.setProperty("--my", e.clientY + "px");
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
}
