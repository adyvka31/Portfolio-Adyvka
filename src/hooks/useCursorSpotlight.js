import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function useCursorSpotlight() {
  const rafIdRef = useRef(null);
  const lastEventRef = useRef(null);
  const dotsCacheRef = useRef([]);
  const { pathname } = useLocation(); // Untuk mendeteksi perpindahan halaman

  useEffect(() => {
    // 1. Matikan di mobile & mode hemat baterai/motion
    const isMobile = window.matchMedia(
      "(hover: none) and (pointer: coarse)",
    ).matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isMobile || reducedMotion) return;

    // 2. Trik Anti-Reflow: Simpan kordinat ABSOLUT (terhadap dokumen)
    const refreshDotsCache = () => {
      dotsCacheRef.current = Array.from(
        document.querySelectorAll(".global-dots"),
      ).map((el) => {
        const rect = el.getBoundingClientRect();
        return {
          el,
          // Menyimpan posisi tetap meskipun user men-scroll
          absoluteTop: rect.top + window.scrollY,
          absoluteLeft: rect.left + window.scrollX,
        };
      });
    };

    // Ambil elemen dengan jeda agar halaman selesai render
    const timer = setTimeout(refreshDotsCache, 150);
    window.addEventListener("resize", refreshDotsCache, { passive: true });

    // 3. Fungsi Render (Hanya Tulis CSS, Tidak Ada Baca DOM)
    const update = () => {
      const e = lastEventRef.current;
      if (!e) return;

      const root = document.documentElement;

      // Update cahaya utama (.spotlight)
      root.style.setProperty("--mx", `${e.clientX}px`);
      root.style.setProperty("--my", `${e.clientY}px`);

      // Update cahaya titik-titik (.global-dots)
      for (let i = 0; i < dotsCacheRef.current.length; i++) {
        const { el, absoluteTop, absoluteLeft } = dotsCacheRef.current[i];

        // Kalkulasi posisi saat ini secara matematis (SANGAT RINGAN)
        const currentTop = absoluteTop - window.scrollY;
        const currentLeft = absoluteLeft - window.scrollX;

        el.style.setProperty("--dotX", `${e.clientX - currentLeft}px`);
        el.style.setProperty("--dotY", `${e.clientY - currentTop}px`);
      }
      rafIdRef.current = null;
    };

    const handleMouseMove = (e) => {
      lastEventRef.current = e;
      // Gunakan requestAnimationFrame agar terkunci di 60fps/120fps
      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", refreshDotsCache);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [pathname]); // Refresh cache hanya jika URL (halaman) berubah
}
