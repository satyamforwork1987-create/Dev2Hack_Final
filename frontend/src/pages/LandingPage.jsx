import { Link, Navigate } from "react-router-dom";
import {
  HeroLedgerIllustration,
  AnomalyIcon,
  SecurityVaultIcon,
  RiskScoreIcon,
  AnalyticsTrendIcon,
  StepIcon,
} from "../components/SvgIllustrations";

/* ===== Feature Data with Handcrafted SVGs ===== */
const features = [
  {
    icon: <AnomalyIcon size={44} />,
    title: "Statistical Anomaly Detection",
    desc: "Identifies duplicate debits, extreme volume spikes, and unusual merchants using historical behavioral modeling.",
    tag: "Z-Score Engine",
  },
  {
    icon: <SecurityVaultIcon size={44} />,
    title: "Zero-Leak Data Privacy",
    desc: "Your transaction history is partitioned into an isolated ledger workspace. Never shared or used for ad targeting.",
    tag: "Bank-Grade Encryption",
  },
  {
    icon: <RiskScoreIcon size={44} />,
    title: "Granular Risk Scoring",
    desc: "Every transaction receives an objective risk score from 0 to 100 with explainable reasoning on why it was flagged.",
    tag: "Explainable Alerts",
  },
  {
    icon: <AnalyticsTrendIcon size={44} />,
    title: "Financial Ledger Intelligence",
    desc: "Visualizes trends across debit/credit flows, spending categories, and monthly distributions with zero clutter.",
    tag: "Clear Visualization",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload Bank Statement",
    desc: "Drag and drop any standard CSV or PDF statement from your banking or UPI app.",
  },
  {
    number: "02",
    title: "Automatic Parsing",
    desc: "Our engine standardizes dates, cleans raw merchant descriptions, and separates debits.",
  },
  {
    number: "03",
    title: "Behavioral Analysis",
    desc: "Statistical algorithms evaluate spending deviations and flag transactions that break your norms.",
  },
  {
    number: "04",
    title: "Review Insights",
    desc: "Explore your clean financial timeline, filter by risk severity, and export verified records.",
  },
];

const stats = [
  { value: "10,000+", label: "Transactions Audited" },
  { value: "99.4%", label: "Precision Rate" },
  { value: "< 2s", label: "Average Parse Time" },
  { value: "100%", label: "Private & Local First" },
];

const LandingPage = () => {
  const token = localStorage.getItem("token");
  if (token) return <Navigate to="/dashboard" replace />;

  return (
    <div style={{ minHeight: "100vh", background: "var(--surface)" }}>
      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          padding: "70px 24px 60px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left Column: Editorial Copy */}
          <div className="animate-fade-in">
            {/* Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-border)",
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--accent)",
                marginBottom: "24px",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)" }} />
              Personal Finance Behavioral Intelligence
            </div>

            {/* Headline */}
            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(38px, 5.5vw, 58px)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "20px",
              }}
            >
              A financial ledger that spots what banks miss.
            </h1>

            {/* Subheading */}
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.65,
                color: "var(--text-secondary)",
                maxWidth: "510px",
                marginBottom: "34px",
              }}
            >
              Banks give you raw records. NOVA AI converts your statements into
              actionable intelligence — uncovering anomalies, duplicate charges,
              and spending shifts with transparent clarity.
            </p>

            {/* Call to Actions */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
              <Link to="/register" className="btn-creamy-primary" style={{ padding: "14px 28px", fontSize: "15px" }}>
                Analyze Your Statement
                <span style={{ fontSize: "16px" }}>→</span>
              </Link>

              <Link to="/login" className="btn-creamy-secondary" style={{ padding: "14px 24px", fontSize: "15px" }}>
                Sign In to Ledger
              </Link>
            </div>

            {/* Trust Footnote */}
            <div
              style={{
                marginTop: "32px",
                display: "flex",
                alignItems: "center",
                gap: "24px",
                paddingTop: "24px",
                borderTop: "1px solid var(--border-light)",
                fontSize: "12px",
                color: "var(--text-muted)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "var(--sage)", fontSize: "14px" }}>✓</span>
                Works with any bank CSV/PDF
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "var(--sage)", fontSize: "14px" }}>✓</span>
                No banking credentials required
              </div>
            </div>
          </div>

          {/* Right Column: Handcrafted Hero SVG Illustration */}
          <div
            className="animate-slide-up stagger-1"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HeroLedgerIllustration />
          </div>
        </div>
      </section>

      {/* ===== METRICS RIBBON ===== */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          background: "var(--surface-card)",
          padding: "36px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "28px",
          }}
        >
          {stats.map((s, idx) => (
            <div key={idx} style={{ textAlign: "center" }}>
              <div
                className="font-serif"
                style={{
                  fontSize: "36px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {s.value}
              </div>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--text-muted)",
                  marginTop: "6px",
                  fontWeight: 500,
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section
        style={{
          padding: "90px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto 60px" }}>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--accent)",
            }}
          >
            Core Architecture
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(30px, 4vw, 42px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginTop: "12px",
              marginBottom: "16px",
            }}
          >
            Built for financial discernment, not automated noise.
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
            Most trackers force you into manual budgeting spreadsheets. NOVA AI acts like an
            auditor examining your transactions with statistical scrutiny.
          </p>
        </div>

        {/* Feature Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {features.map((f, idx) => (
            <div
              key={idx}
              className="creamy-card creamy-card-hover"
              style={{
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ marginBottom: "20px" }}>{f.icon}</div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--accent)",
                  marginBottom: "8px",
                }}
              >
                {f.tag}
              </span>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "10px",
                  letterSpacing: "-0.01em",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section
        style={{
          background: "var(--surface-subtle)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
              }}
            >
              Workflow
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: "34px",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginTop: "8px",
              }}
            >
              From raw statement to audited clarity
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "24px",
            }}
          >
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="creamy-card"
                style={{
                  padding: "28px 24px",
                  background: "var(--surface-card)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <StepIcon number={st.number} />
                  <h4 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-primary)" }}>
                    {st.title}
                  </h4>
                </div>
                <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section
        style={{
          padding: "90px 24px",
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h2
          className="font-serif"
          style={{
            fontSize: "clamp(32px, 4vw, 44px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: "16px",
          }}
        >
          Review your finances with complete confidence.
        </h2>
        <p style={{ fontSize: "16px", color: "var(--text-secondary)", marginBottom: "32px", lineHeight: 1.6 }}>
          Start in less than sixty seconds. Simply drag and drop your recent bank
          statement to inspect anomalous transactions and category trends.
        </p>
        <Link
          to="/register"
          className="btn-creamy-primary"
          style={{ padding: "16px 36px", fontSize: "15px", borderRadius: "12px" }}
        >
          Get Started — Free Workspace
        </Link>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          background: "var(--surface-card)",
          padding: "32px 24px",
          textAlign: "center",
          fontSize: "13px",
          color: "var(--text-muted)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="font-serif" style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "16px" }}>NOVA AI</span>
            <span>· Personal Financial Ledger & Anomaly Detection</span>
          </div>
          <div>All processing operates in your secure private space.</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
