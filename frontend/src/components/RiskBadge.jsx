/**
 * RiskBadge — Creamy tactile risk indicator pill
 */
const RiskBadge = ({ level, score }) => {
  const config = {
    Normal: {
      bg: "var(--risk-normal-bg)",
      color: "var(--risk-normal)",
      border: "var(--risk-normal-border)",
      dot: "var(--risk-normal)",
    },
    Medium: {
      bg: "var(--risk-medium-bg)",
      color: "var(--risk-medium)",
      border: "var(--risk-medium-border)",
      dot: "var(--risk-medium)",
    },
    High: {
      bg: "var(--risk-high-bg)",
      color: "var(--risk-high)",
      border: "var(--risk-high-border)",
      dot: "var(--risk-high)",
    },
  };

  const style = config[level] || config.Normal;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          padding: "3px 10px",
          borderRadius: "999px",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.03em",
          background: style.bg,
          color: style.color,
          border: `1px solid ${style.border}`,
          textTransform: "uppercase",
        }}
      >
        <span
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: style.dot,
          }}
        />
        {level}
      </span>
      {score > 0 && (
        <span
          style={{
            fontSize: "10.5px",
            color: "var(--text-muted)",
            fontWeight: 600,
          }}
        >
          {score}
        </span>
      )}
    </div>
  );
};

export default RiskBadge;
