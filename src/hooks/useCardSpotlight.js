import { useCallback, useRef, useEffect } from "react";

/**
 * Returns a mousemove handler that tracks cursor position relative
 * to the card and sets --cx / --cy CSS variables for the glow effect.
 */
export function useCardSpotlight() {
  const isTouchDevice =
    typeof window !== "undefined" &&
    (window.innerWidth <= 1024 ||
      window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
      "ontouchstart" in window);

  const rafId = useRef(null);

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (isTouchDevice) return;
      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--cx", e.clientX - rect.left + "px");
        card.style.setProperty("--cy", e.clientY - rect.top + "px");
      });
    },
    [isTouchDevice],
  );

  if (isTouchDevice) return {};
  return { onMouseMove: handleMouseMove };
}
