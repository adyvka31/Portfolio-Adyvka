import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes.jsx";
import "./index.css";

// Mencegah vite-react-ssg melakukan fetch static-loader-data-manifest-*.json
// Seluruh data portofolio dibundel secara statis di modul JS (bukan via data loaders).
// Pre-setting manifest ini mencegah error 404 HTML:
// "SyntaxError: Unexpected token '<', '<!DOCTYPE '... is not valid JSON"
// saat rotasi hash build/deploy atau transisi client-side.
if (typeof window !== "undefined") {
  window.__VITE_REACT_SSG_STATIC_LOADER_MANIFEST__ =
    window.__VITE_REACT_SSG_STATIC_LOADER_MANIFEST__ || {};
  window.__VITE_REACT_SSG_STATIC_LOADER_DATA__ =
    window.__VITE_REACT_SSG_STATIC_LOADER_DATA__ || {};
}

// ViteReactSSG otomatis membungkus aplikasi dengan Data Router
export const createRoot = ViteReactSSG({
  routes,
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
    v7_startTransition: true,
  },
});
