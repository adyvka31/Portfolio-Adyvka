import { useEffect } from "react";

export function useCursorSpotlight() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      // 1. Update variabel untuk Spotlight utama (jika di-set di root/body)
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);

      // 2. Update posisi mask untuk titik-titik (global-dots)
      // PENTING: Taruh querySelectorAll DI DALAM event listener
      // agar elemen baru hasil perpindahan halaman (React Router) selalu terdeteksi
      const dots = document.querySelectorAll(".global-dots");

      dots.forEach((dot) => {
        const rect = dot.getBoundingClientRect();
        // Kalkulasi posisi kursor relatif terhadap kontainer dot
        dot.style.setProperty("--dotX", `${e.clientX - rect.left}px`);
        dot.style.setProperty("--dotY", `${e.clientY - rect.top}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []); // Kosongkan dependency array agar listener cukup dipasang 1x di App.jsx
}
