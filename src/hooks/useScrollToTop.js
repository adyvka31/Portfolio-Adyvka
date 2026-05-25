import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let timeoutId; 

    if (hash) {
      timeoutId = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [pathname, hash]);
}
