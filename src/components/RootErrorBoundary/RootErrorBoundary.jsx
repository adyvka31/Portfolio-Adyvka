import { useRouteError } from "react-router-dom";
import { useEffect } from "react";

export default function RootErrorBoundary() {
  const error = useRouteError();

  const isChunkOrManifestError =
    error?.message?.includes("<!DOCTYPE") ||
    error?.message?.includes("is not valid JSON") ||
    error?.message?.includes("dynamically imported module") ||
    error?.name === "ChunkLoadError";

  useEffect(() => {
    // If it's a version / chunk / manifest mismatch after a new build deployment,
    // automatically reload once to refresh all assets seamlessly.
    if (isChunkOrManifestError) {
      const lastReload = sessionStorage.getItem("app_chunk_reload_time");
      const now = Date.now();
      if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
        sessionStorage.setItem("app_chunk_reload_time", String(now));
        window.location.reload();
      }
    }
  }, [isChunkOrManifestError]);

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
        background: "#08080a",
        color: "#fff",
        fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        className="card glass"
        style={{
          padding: "2.5rem 2rem",
          maxWidth: "32rem",
          borderRadius: "1.25rem",
          border: "1px solid rgba(124, 242, 255, 0.2)",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
        }}
      >
        <span
          style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: "0.75rem",
            color: "var(--accent-glow, #7cf2ff)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
            display: "inline-block",
          }}
        >
          // Application Notice
        </span>
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: 500,
            marginBottom: "0.75rem",
            color: "#fff",
          }}
        >
          {isChunkOrManifestError
            ? "Pembaruan Versi Tersedia"
            : "Terjadi Kendala Teknis"}
        </h1>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "0.9375rem",
            lineHeight: 1.6,
            marginBottom: "1.75rem",
          }}
        >
          {isChunkOrManifestError
            ? "Versi terbaru dari portofolio telah dipublikasikan. Silakan muat ulang halaman untuk memperbarui aset aplikasi."
            : (error?.message || "Terjadi kesalahan saat memproses rute aplikasi.")}
        </p>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: "0.75rem 1.75rem",
            borderRadius: "9999px",
            background: "#fff",
            color: "#08080a",
            border: "none",
            fontWeight: 600,
            fontSize: "0.875rem",
            cursor: "pointer",
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.9";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Muat Ulang Halaman
        </button>
      </div>
    </div>
  );
}
