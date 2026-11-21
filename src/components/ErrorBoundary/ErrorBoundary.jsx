import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // If it's a dynamic import / chunk load error from a newly deployed build, auto-reload once
    const errorMsg = error?.message || "";
    const isChunkError =
      errorMsg.includes("Failed to fetch dynamically imported module") ||
      errorMsg.includes("Importing a module script failed") ||
      errorMsg.includes("error loading dynamically imported module") ||
      error?.name === "ChunkLoadError";

    if (isChunkError && typeof window !== "undefined") {
      const lastReload = sessionStorage.getItem("app_chunk_reload_time");
      const now = Date.now();
      if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
        sessionStorage.setItem("app_chunk_reload_time", String(now));
        window.location.reload();
        return;
      }
    }

    // Production: send to Sentry/LogRocket
    if (import.meta.env.PROD) {
      console.error("App error:", error, errorInfo);
    }
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      const errorMsg = this.state.error?.message || "";
      const isChunkError =
        errorMsg.includes("Failed to fetch dynamically imported module") ||
        errorMsg.includes("Importing a module script failed") ||
        errorMsg.includes("error loading dynamically imported module") ||
        this.state.error?.name === "ChunkLoadError";

      if (isChunkError) {
        return (
          <div
            style={{
              minHeight: "60vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              color: "#fff",
              textAlign: "center",
              padding: "2rem",
            }}
          >
            <p style={{ color: "var(--ink-200)", fontSize: "0.9375rem" }}>
              Updating to the latest version...
            </p>
          </div>
        );
      }
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            textAlign: "center",
            background: "var(--ink-950)",
            color: "#fff",
          }}
        >
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Something went wrong.
          </h1>
          <p
            style={{
              color: "var(--ink-200)",
              marginBottom: "2rem",
              maxWidth: "32rem",
            }}
          >
            An unexpected error occurred. This has been logged. Try refreshing
            the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "0.875rem 1.5rem",
              borderRadius: "9999px",
              background: "#fff",
              color: "var(--ink-950)",
              border: "none",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
