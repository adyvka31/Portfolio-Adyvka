import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes.jsx";
import "./index.css";
import "@fontsource/geist/400.css";
import "@fontsource/geist/500.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource-variable/geist-mono";

// ViteReactSSG otomatis membungkus aplikasi dengan Data Router (solusi error useLocation)
export const createRoot = ViteReactSSG({ routes });
