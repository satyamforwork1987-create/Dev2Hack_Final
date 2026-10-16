import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axios";
import SummaryCards from "../components/SummaryCards";
import Filters from "../components/Filters";
import TransactionTable from "../components/TransactionTable";
import Charts from "../components/Charts";

/**
 * Dashboard — Creamy Editorial Analytics & Anomaly Audit
 */
const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    riskLevel: "All",
    category: "All",
    dateFrom: "",
    dateTo: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [txRes, summaryRes] = await Promise.all([
        axiosInstance.get("/transactions?limit=5000&order=desc"),
        axiosInstance.get("/transactions/summary"),
      ]);

      const txData = txRes.data.data?.transactions || [];
      setTransactions(txData);

      const riskCounts = { Normal: 0, Medium: 0, High: 0 };
      txData.forEach((tx) => {
        riskCounts[tx.riskLevel] = (riskCounts[tx.riskLevel] || 0) + 1;
      });

      setSummary({
        ...summaryRes.data.data,
        riskCounts,
      });
    } catch (err) {
      setError("Unable to retrieve records. Ensure the backend server is reachable.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredTransactions = useMemo(() => {
    return transactions.filter((tx) => {
      if (filters.riskLevel !== "All" && tx.riskLevel !== filters.riskLevel)
        return false;

      if (filters.category !== "All" && tx.category !== filters.category)
        return false;

      if (filters.dateFrom) {
        const from = new Date(filters.dateFrom);
        if (new Date(tx.date) < from) return false;
      }
      if (filters.dateTo) {
        const to = new Date(filters.dateTo);
        to.setHours(23, 59, 59);
        if (new Date(tx.date) > to) return false;
      }

      return true;
    });
  }, [transactions, filters]);

  const categories = useMemo(() => {
    const cats = new Set(transactions.map((tx) => tx.category).filter(Boolean));
    return [...cats].sort();
  }, [transactions]);

  // Loading state
  if (loading) {
    return (
      <div
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          background: "var(--surface)",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            border: "3px solid var(--border)",
            borderTopColor: "var(--accent)",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }}
        />
        <p style={{ fontSize: "14px", color: "var(--text-muted)", fontWeight: 500 }}>
          Auditing financial records...
        </p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          background: "var(--surface)",
        }}
      >
        <div
          className="creamy-card"
          style={{
            padding: "36px",
            maxWidth: "460px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "32px", marginBottom: "12px" }}>⚠️</div>
          <h3
            className="font-serif"
            style={{ fontSize: "20px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}
          >
            Connection Notice
          </h3>
          <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "24px", lineHeight: 1.5 }}>
            {error}
          </p>
          <button onClick={fetchData} className="btn-creamy-primary">
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "calc(100vh - 64px)", background: "var(--surface)", padding: "36px 32px 60px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Page Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--accent)",
              }}
            >
              Audited Ledger
            </span>
            <h1
              className="font-serif"
              style={{
                fontSize: "30px",
                fontWeight: 600,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                marginTop: "4px",
              }}
            >
              Financial Intelligence Dashboard
            </h1>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <Link
              to="/upload"
              className="btn-creamy-primary"
              style={{ padding: "10px 18px", fontSize: "13px" }}
            >
              + Upload Statement
            </Link>
          </div>
        </div>

        {/* Empty State */}
        {transactions.length === 0 ? (
          <div
            className="creamy-card"
            style={{
              padding: "64px 32px",
              textAlign: "center",
              maxWidth: "540px",
              margin: "40px auto",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "16px" }}>📑</div>
            <h3
              className="font-serif"
              style={{ fontSize: "22px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}
            >
              No Statements Uploaded Yet
            </h3>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "24px", lineHeight: 1.6 }}>
              Upload your first bank or UPI statement (CSV or PDF) to generate
              automated categorization and anomaly risk assessments.
            </p>
            <Link to="/upload" className="btn-creamy-primary">
              Upload Your First Statement
            </Link>
          </div>
        ) : (
          <>
            {/* KPI Cards */}
            <SummaryCards summary={summary} />

            {/* Visual Charts */}
            <Charts transactions={filteredTransactions} />

            {/* Filter Controls */}
            <Filters
              filters={filters}
              onChange={setFilters}
              categories={categories}
            />

            {/* Transaction Journal Table */}
            <TransactionTable transactions={filteredTransactions} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
