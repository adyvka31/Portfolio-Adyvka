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
