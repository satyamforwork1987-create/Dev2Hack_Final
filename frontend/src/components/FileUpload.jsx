import { useState, useRef } from "react";
import axiosInstance from "../api/axios";
import { UploadDropzoneIllustration } from "./SvgIllustrations";

/**
 * FileUpload — Creamy tactile drag & drop upload
 */
const FileUpload = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    setError(null);
    setResult(null);
    if (e.dataTransfer.files[0]) validateAndSet(e.dataTransfer.files[0]);
  };

  const validateAndSet = (f) => {
    const ext = f.name.split(".").pop().toLowerCase();
    if (ext !== "csv" && ext !== "pdf") {
      setError("Please select a valid CSV or PDF bank statement.");
      return;
    }
    if (f.size > 50 * 1024 * 1024) {
      setError("File exceeds 50MB limit.");
      return;
    }
    setFile(f);
    setError(null);
    setResult(null);
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setProgress(0);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("statement", file);

    try {
      const res = await axiosInstance.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 300000,
        onUploadProgress: (e) => {
          setProgress(Math.round((e.loaded * 100) / e.total));
        },
      });

      setResult(res.data);
      setFile(null);
      if (inputRef.current) inputRef.current.value = "";
      if (onUploadSuccess) onUploadSuccess(res.data);
    } catch (err) {
      setError(
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Upload failed. Please check the backend connection."
      );
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  const formatSize = (b) =>
    b < 1024 ? b + " B" : b < 1048576 ? (b / 1024).toFixed(1) + " KB" : (b / 1048576).toFixed(1) + " MB";

  return (
    <div>
      {/* Drop Zone */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => !uploading && inputRef.current?.click()}
        id="file-drop-zone"
        className="creamy-card"
        style={{
          border: `2px dashed ${dragActive ? "var(--accent)" : "var(--border)"}`,
          background: dragActive ? "var(--accent-soft)" : "var(--surface-card)",
          padding: "44px 28px",
          textAlign: "center",
          cursor: uploading ? "not-allowed" : "pointer",
          transition: "all 0.2s ease",
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".csv,.pdf"
          onChange={(e) => e.target.files[0] && validateAndSet(e.target.files[0])}
          style={{ display: "none" }}
          id="statement-input"
        />

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
          <UploadDropzoneIllustration dragActive={dragActive} />
        </div>

        <h3
          className="font-serif"
          style={{
            fontSize: "19px",
            fontWeight: 600,
            color: "var(--text-primary)",
            marginBottom: "6px",
          }}
        >
          {dragActive ? "Release statement here" : "Choose statement file or drag here"}
        </h3>
        <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
          Supports CSV or PDF bank exports (max 50MB)
        </p>

        {/* Selected File Card */}
        {file && (
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              marginTop: "20px",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 18px",
              borderRadius: "10px",
              background: "var(--surface-subtle)",
              border: "1px solid var(--border)",
              maxWidth: "100%",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  maxWidth: "280px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {file.name}
              </div>
              <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                {formatSize(file.size)}
              </div>
            </div>

            <button
              onClick={() => setFile(null)}
              style={{
                background: "none",
                border: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
                padding: "4px",
                fontSize: "14px",
                lineHeight: 1,
              }}
              title="Remove file"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {uploading && (
        <div style={{ marginTop: "18px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--text-secondary)",
              marginBottom: "6px",
            }}
          >
            <span>Analyzing transactions...</span>
            <span>{progress}%</span>
          </div>
          <div
            style={{
              height: "6px",
              borderRadius: "999px",
              background: "var(--border)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "var(--accent)",
                transition: "width 0.2s ease",
              }}
            />
          </div>
        </div>
      )}

      {/* Error Notice */}
      {error && (
        <div
          style={{
            marginTop: "16px",
            padding: "12px 16px",
            borderRadius: "10px",
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

      {/* Upload Action Button */}
      {file && !uploading && (
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
          <button
            onClick={handleUpload}
            className="btn-creamy-primary"
            style={{ width: "100%", padding: "14px 24px" }}
          >
            Process & Detect Anomalies
          </button>
        </div>
      )}

      {/* Success Notification */}
      {result && (
        <div
          style={{
            marginTop: "16px",
            padding: "14px 18px",
            borderRadius: "10px",
            background: "var(--risk-normal-bg)",
            border: "1px solid var(--risk-normal-border)",
            color: "var(--risk-normal)",
            fontSize: "13px",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          ✓ Successfully processed {result.data?.insertedCount || result.data?.total || ""} transactions!
        </div>
      )}
    </div>
  );
};

export default FileUpload;
