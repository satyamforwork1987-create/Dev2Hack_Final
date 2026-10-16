import { useNavigate } from "react-router-dom";
import FileUpload from "../components/FileUpload";

/**
 * UploadPage — Creamy Editorial Statement Ingestion
 */
const UploadPage = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    setTimeout(() => navigate("/dashboard"), 1200);
  };

  return (
    <div style={{ minHeight: "calc(100vh - 64px)", background: "var(--surface)", padding: "50px 24px" }}>
      <main
        style={{
          maxWidth: "540px",
          margin: "0 auto",
        }}
      >
        <div className="animate-slide-up" style={{ textAlign: "center", marginBottom: "32px" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--accent)",
            }}
          >
            Statement Ingestion
          </span>
          <h1
            className="font-serif"
            style={{
              fontSize: "30px",
              fontWeight: 600,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              marginTop: "4px",
              marginBottom: "8px",
            }}
          >
            Upload Bank Statement
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-secondary)",
              lineHeight: 1.5,
              maxWidth: "420px",
              margin: "0 auto",
            }}
          >
            Upload any standard CSV statement. Columns and dates are parsed
            automatically.
          </p>
        </div>

        {/* Upload Box */}
        <FileUpload onUploadSuccess={handleSuccess} />

        {/* Privacy Note */}
        <div
          style={{
            marginTop: "28px",
            padding: "16px 20px",
            borderRadius: "12px",
            background: "var(--surface-subtle)",
            border: "1px solid var(--border)",
            fontSize: "12px",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            display: "flex",
            gap: "12px",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "16px", color: "var(--sage)" }}>🔒</span>
          <div>
            <strong style={{ color: "var(--text-primary)" }}>Private & Confidential:</strong>{" "}
            Statements are ingested directly into your private session. NOVA AI does not
            store banking passwords, account numbers, or share records with third parties.
          </div>
        </div>
      </main>
    </div>
  );
};

export default UploadPage;
