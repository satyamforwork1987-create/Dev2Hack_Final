import { useState } from "react";
import RiskBadge from "./RiskBadge";

/**
 * TransactionTable — Creamy Editorial Ledger Table
 */
const ROWS_PER_PAGE = 15;

const TransactionTable = ({ transactions }) => {
  const [sortKey, setSortKey] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder((o) => (o === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("desc");
    }
    setPage(1);
  };

  const sorted = [...transactions].sort((a, b) => {
    let aVal = a[sortKey];
    let bVal = b[sortKey];

    if (sortKey === "date") {
      aVal = new Date(aVal).getTime();
      bVal = new Date(bVal).getTime();
    }
    if (sortKey === "amount") {
      aVal = Math.abs(aVal);
      bVal = Math.abs(bVal);
    }
    if (sortKey === "riskLevel") {
      const order = { High: 3, Medium: 2, Normal: 1 };
      aVal = order[aVal] || 0;
      bVal = order[bVal] || 0;
    }

    if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
    if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / ROWS_PER_PAGE);
  const paginated = sorted.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE
  );

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const formatCurrency = (n) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(Math.abs(n));

  const SortIndicator = ({ column }) => {
    if (sortKey !== column) return <span style={{ opacity: 0.3, marginLeft: "4px" }}>↕</span>;
    return <span style={{ marginLeft: "4px", color: "var(--accent)" }}>{sortOrder === "asc" ? "↑" : "↓"}</span>;
  };

  const thStyle = {
    padding: "12px 16px",
    fontSize: "11px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "var(--text-muted)",
    textAlign: "left",
    cursor: "pointer",
    userSelect: "none",
    borderBottom: "1px solid var(--border)",
  };

  return (
    <div className="creamy-card" style={{ overflow: "hidden" }}>
      <div
        style={{
          padding: "20px 24px",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          background: "#FAF7F2",
        }}
      >
        <div>
          <h3
            className="font-serif"
            style={{ fontSize: "17px", fontWeight: 600, color: "var(--text-primary)" }}
          >
            Transaction Journal
          </h3>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>
            Showing {paginated.length} of {sorted.length} recorded line items
          </p>
        </div>

        {totalPages > 1 && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              style={{
                padding: "6px 12px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                background: page === 1 ? "transparent" : "#FFFFFF",
                color: page === 1 ? "var(--text-muted)" : "var(--text-primary)",
                cursor: page === 1 ? "not-allowed" : "pointer",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              ← Prev
            </button>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 500 }}>
              {page} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              style={{
                padding: "6px 12px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                background: page === totalPages ? "transparent" : "#FFFFFF",
                color: page === totalPages ? "var(--text-muted)" : "var(--text-primary)",
                cursor: page === totalPages ? "not-allowed" : "pointer",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              Next →
            </button>
          </div>
        )}
      </div>

      {/* Table Container */}
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
          <thead>
            <tr style={{ background: "#FAF7F2" }}>
              <th onClick={() => handleSort("date")} style={thStyle}>
                Date <SortIndicator column="date" />
              </th>
              <th onClick={() => handleSort("description")} style={thStyle}>
                Merchant / Description <SortIndicator column="description" />
              </th>
              <th onClick={() => handleSort("category")} style={thStyle}>
                Category <SortIndicator column="category" />
              </th>
              <th onClick={() => handleSort("amount")} style={{ ...thStyle, textAlign: "right" }}>
                Amount <SortIndicator column="amount" />
              </th>
              <th onClick={() => handleSort("riskLevel")} style={thStyle}>
                Risk Status <SortIndicator column="riskLevel" />
              </th>
              <th style={thStyle}>Analysis Reason</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  style={{
                    padding: "48px 24px",
                    textAlign: "center",
                    color: "var(--text-muted)",
                    fontSize: "14px",
                  }}
                >
                  No transactions match the selected filters.
                </td>
              </tr>
            ) : (
              paginated.map((tx, idx) => {
                const isHigh = tx.riskLevel === "High";
                const isMedium = tx.riskLevel === "Medium";
                return (
                  <tr
                    key={tx._id || idx}
                    style={{
                      borderBottom: "1px solid var(--border-light)",
                      background: isHigh ? "#FFF9F9" : isMedium ? "#FFFCF5" : "#FFFFFF",
                      transition: "background-color 0.1s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isHigh && !isMedium) e.currentTarget.style.backgroundColor = "#FCFAF6";
                    }}
                    onMouseLeave={(e) => {
                      if (!isHigh && !isMedium) e.currentTarget.style.backgroundColor = "#FFFFFF";
                    }}
                  >
                    <td style={{ padding: "14px 16px", color: "var(--text-secondary)", whiteSpace: "nowrap", fontWeight: 500 }}>
                      {formatDate(tx.date)}
                    </td>
                    <td style={{ padding: "14px 16px", fontWeight: 600, color: "var(--text-primary)" }}>
                      {tx.merchantCleaned || tx.description || "Unspecified"}
                    </td>
                    <td style={{ padding: "14px 16px" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "3px 8px",
                          borderRadius: "6px",
                          background: "var(--surface-subtle)",
                          color: "var(--text-secondary)",
                          fontSize: "11px",
                          fontWeight: 600,
                        }}
                      >
                        {tx.category || "Others"}
                      </span>
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        textAlign: "right",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        color: tx.amount < 0 ? "var(--text-primary)" : "var(--sage)",
                      }}
                    >
                      {formatCurrency(tx.amount)}
                    </td>
                    <td style={{ padding: "14px 16px" }}>
                      <RiskBadge level={tx.riskLevel} score={tx.anomalyScore} />
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        fontSize: "12px",
                        color: isHigh ? "var(--risk-high)" : "var(--text-muted)",
                        maxWidth: "260px",
                        lineHeight: 1.4,
                      }}
                    >
                      {tx.anomalyReason || (tx.riskLevel === "Normal" ? "Within regular spending tolerance" : "Unusual pattern")}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
