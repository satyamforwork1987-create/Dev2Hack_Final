import { Link, useNavigate } from "react-router-dom";
import { LogoIcon } from "./SvgIllustrations";

/**
 * Navbar — Creamy Editorial Navigation
 */
const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        padding: "0 32px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid var(--border)",
        background: "rgba(250, 247, 242, 0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Brand & Crest */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <LogoIcon size={34} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            className="font-serif"
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            NOVA AI
          </span>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 600,
              color: "var(--text-muted)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Financial Ledger
          </span>
        </div>
      </Link>

      {/* Navigation Actions */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {token ? (
          <>
            <Link
              to="/upload"
              style={{
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "10px",
                border: "1px solid var(--border)",
                background: "var(--surface-card)",
                color: "var(--text-secondary)",
                fontSize: "13px",
                fontWeight: 600,
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#D1C7B7";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              Upload Statement
            </Link>

            <Link
              to="/dashboard"
              style={{
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "10px",
                border: "1px solid var(--border)",
                background: "var(--surface-card)",
                color: "var(--text-secondary)",
                fontSize: "13px",
                fontWeight: 600,
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#D1C7B7";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              style={{
                padding: "8px 14px",
                borderRadius: "10px",
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--text-muted)",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--risk-high)";
                e.currentTarget.style.borderColor = "var(--risk-high-border)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "10px",
                color: "var(--text-secondary)",
                fontSize: "13px",
                fontWeight: 600,
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              Sign in
            </Link>

            <Link
              to="/register"
              className="btn-creamy-primary"
              style={{
                padding: "8px 18px",
                fontSize: "13px",
                borderRadius: "10px",
              }}
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
