import { Link } from "react-router-dom";
import PageShell from "../components/PageShell/PageShell";
import PageHero from "../components/PageHero/PageHero";

export default function NotFoundPage() {
  return (
    <PageShell>
      <PageHero
        number="404"
        label="Not Found"
        title="This page took a wrong turn."
        italicWord="wrong turn"
        description="The route you tried doesn't exist (or moved). The links in the nav still work."
      />
      <div style={{ textAlign: "center", padding: "2rem 1.5rem 6rem" }}>
        <Link
          to="/"
          className="btn-primary"
          style={{
            display: "inline-flex",
            background: "#fff",
            color: "var(--ink-950)",
            padding: "0.875rem 1.5rem",
            borderRadius: "9999px",
            fontWeight: 500,
          }}
        >
          Back to home
        </Link>
      </div>
    </PageShell>
  );
}
