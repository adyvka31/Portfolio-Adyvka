import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import "@fontsource/geist/400.css";
import "@fontsource/geist/500.css";
import "@fontsource/geist/600.css";
import "@fontsource-variable/geist-mono";
import "@fontsource/instrument-serif/400-italic.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);