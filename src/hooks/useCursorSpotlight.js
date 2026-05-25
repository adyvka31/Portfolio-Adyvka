// src/hooks/useCursorSpotlight.js
import { useEffect, useRef } from "react";

export function useCursorSpotlight() {
  const rafIdRef = useRef(null);
  const lastEventRef = useRef(null);
  const dotsCacheRef = useRef([]);

  useEffect(() => {
    // 1. Pengecekan perangkat mobile & aksesibilitas
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Jangan jalankan efek kursor yang mahal ini di HP atau bagi user yang sensitif gerakan
    if (isMobile || reducedMotion) return;

    // 2. Fungsi untuk menyimpan posisi elemen (Cache) agar tidak memanggil getBoundingClientRect() terus menerus
    const refreshDotsCache = () => {
      dotsCacheRef.current = Array.from(
        document.querySelectorAll(".global-dots"),
      ).map((el) => ({ el, rect: el.getBoundingClientRect() }));
    };

    // Panggil sekali saat pertama kali di-render
    refreshDotsCache();

    // 3. Debounce resize: Hanya hitung ulang layout jika user selesai me-resize layar (150ms)
    let resizeTimer;
    const debouncedRefresh = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(refreshDotsCache, 150);
    };

    window.addEventListener("resize", debouncedRefresh, { passive: true });

    // 4. Update posisi kursor menggunakan requestAnimationFrame agar selaras dengan refresh rate monitor (60FPS/120FPS)
    const update = () => {
      const e = lastEventRef.current;
      if (!e) return;

      const root = document.documentElement;
      // Update variabel kursor global
      root.style.setProperty("--mx", `${e.clientX}px`);
      root.style.setProperty("--my", `${e.clientY}px`);

      // Update variabel untuk setiap grid dots yang ada di layar berdasarkan cache
      for (const { el, rect } of dotsCacheRef.current) {
        el.style.setProperty("--dotX", `${e.clientX - rect.left}px`);
        el.style.setProperty("--dotY", `${e.clientY - rect.top}px`);
      }

      rafIdRef.current = null;
    };

    const handleMouseMove = (e) => {
      lastEventRef.current = e;
      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 5. Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", debouncedRefresh);
      clearTimeout(resizeTimer);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);
}
