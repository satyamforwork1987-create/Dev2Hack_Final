import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";
import { LogoIcon } from "../components/SvgIllustrations";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axiosInstance.post("/auth/register", formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid var(--border)",
    background: "#FFFFFF",
    color: "var(--text-primary)",
    fontSize: "14px",
    fontFamily: "var(--font-sans)",
    outline: "none",
    transition: "border-color 0.15s ease",
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        background: "var(--surface)",
      }}
    >
      <div
        className="animate-slide-up"
        style={{ width: "100%", maxWidth: "440px" }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ display: "inline-flex", marginBottom: "16px" }}>
            <LogoIcon size={44} />
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: "26px",
              fontWeight: 600,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              marginBottom: "6px",
            }}
          >
            Create Private Ledger
          </h1>
          <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
            Get started with isolated financial anomaly detection
          </p>
        </div>

        {/* Card Form */}
        <div className="creamy-card" style={{ padding: "32px 28px" }}>
          {error && (
            <div
              style={{
                marginBottom: "20px",
                padding: "12px 14px",
                borderRadius: "8px",
                background: "var(--risk-high-bg)",
                border: "1px solid var(--risk-high-border)",
                color: "var(--risk-high)",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "18px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  marginBottom: "6px",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Eleanor Vance"
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>

            <div style={{ marginBottom: "18px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  marginBottom: "6px",
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="eleanor@domain.com"
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  marginBottom: "6px",
                }}
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                minLength={6}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-creamy-primary"
              style={{
                width: "100%",
                padding: "13px 20px",
                fontSize: "14px",
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? "Creating Workspace..." : "Create Account"}
            </button>
          </form>

          <div
            style={{
              marginTop: "24px",
              paddingTop: "20px",
              borderTop: "1px solid var(--border-light)",
              textAlign: "center",
              fontSize: "13px",
              color: "var(--text-muted)",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "var(--accent)",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
