import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Jika URL memiliki hash (contoh: /#work atau /#about)
    if (hash) {
      // Tunggu sebentar agar halaman dan komponen selesai di-render
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          // Lakukan animasi scroll halus ke elemen yang dituju
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Jika pindah halaman biasa (misal ke /projects), langsung kembali ke paling atas
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
}
