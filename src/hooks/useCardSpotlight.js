import { useCallback } from "react";

/**
 * Returns a mousemove handler that tracks cursor position relative
 * to the card and sets --cx / --cy CSS variables for the glow effect.
 */
export function useCardSpotlight() {
  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--cx", e.clientX - rect.left + "px");
    card.style.setProperty("--cy", e.clientY - rect.top + "px");
  }, []);

  return { onMouseMove: handleMouseMove };
}
