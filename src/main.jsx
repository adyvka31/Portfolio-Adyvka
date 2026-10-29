import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes.jsx";
import "./index.css";

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
