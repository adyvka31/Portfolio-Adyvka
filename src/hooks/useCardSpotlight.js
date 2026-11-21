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
      const card = e.currentTarget;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        if (!card || !card.style) return;
        card.style.setProperty("--cx", clientX - rect.left + "px");
        card.style.setProperty("--cy", clientY - rect.top + "px");
      });
    },
    [isTouchDevice],
  );

  if (isTouchDevice) return {};
  return { onMouseMove: handleMouseMove };
}
