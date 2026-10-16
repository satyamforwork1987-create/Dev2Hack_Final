/**
 * SummaryCards — Creamy Editorial KPI cards
 */
const SummaryCards = ({ summary }) => {
  if (!summary) return null;

  const { totalTransactions, summary: typeSummary } = summary;
  const totalVolume = typeSummary?.reduce((sum, s) => sum + Math.abs(s.total), 0) || 0;
  const avgValue = totalTransactions > 0 ? totalVolume / totalTransactions : 0;

  const highRisk = summary.riskCounts?.High || 0;
  const mediumRisk = summary.riskCounts?.Medium || 0;

  const formatINR = (n) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);

  const cards = [
    {
      label: "Total Audited",
      value: totalTransactions?.toLocaleString("en-IN") || "0",
      subtext: "Parsed transactions",
      accent: "#1C1917",
    },
    {
      label: "Gross Volume",
      value: formatINR(totalVolume),
      subtext: "Debits & credits",
      accent: "#B45309",
    },
    {
      label: "Mean Transaction",
      value: formatINR(avgValue),
      subtext: "Per record average",
      accent: "#57534E",
    },
    {
      label: "High Anomalies",
      value: highRisk.toString(),
      subtext: "Immediate review",
      accent: "#991B1B",
      highlight: highRisk > 0,
    },
    {
      label: "Moderate Watch",
      value: mediumRisk.toString(),
      subtext: "Mild deviations",
      accent: "#D97706",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "16px",
        marginBottom: "28px",
      }}
    >
      {cards.map((c, idx) => (
        <div
          key={idx}
          className="creamy-card"
          style={{
            padding: "20px 22px",
            background: c.highlight ? "var(--risk-high-bg)" : "var(--surface-card)",
            borderColor: c.highlight ? "var(--risk-high-border)" : "var(--border)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: c.highlight ? "var(--risk-high)" : "var(--text-muted)",
              marginBottom: "8px",
            }}
          >
            {c.label}
          </div>

          <div
            className="font-serif"
            style={{
              fontSize: "26px",
              fontWeight: 600,
              color: c.highlight ? "var(--risk-high)" : "var(--text-primary)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "4px",
            }}
          >
            {c.value}
          </div>

          <div
            style={{
              fontSize: "11px",
              color: c.highlight ? "var(--risk-high)" : "var(--text-muted)",
            }}
          >
            {c.subtext}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
