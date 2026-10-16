/**
 * Filters — Creamy Editorial Filter Controls
 */
const Filters = ({ filters, onChange, categories }) => {
  const riskLevels = ["All", "Normal", "Medium", "High"];

  const selectStyle = {
    padding: "8px 14px",
    borderRadius: "10px",
    border: "1px solid var(--border)",
    background: "#FFFFFF",
    color: "var(--text-primary)",
    fontSize: "13px",
    fontFamily: "var(--font-sans)",
    outline: "none",
    cursor: "pointer",
    transition: "border-color 0.15s ease",
    minWidth: "130px",
  };

  const inputStyle = {
    ...selectStyle,
    colorScheme: "light",
  };

  return (
    <div
      className="creamy-card"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        alignItems: "center",
        marginBottom: "24px",
        padding: "16px 20px",
      }}
    >
      <span
        style={{
          fontSize: "11px",
          fontWeight: 700,
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginRight: "4px",
        }}
      >
        Filters
      </span>

      {/* Risk Level Filter */}
      <select
        value={filters.riskLevel}
        onChange={(e) => onChange({ ...filters, riskLevel: e.target.value })}
        style={selectStyle}
        id="risk-filter"
      >
        {riskLevels.map((lvl) => (
          <option key={lvl} value={lvl}>
            {lvl === "All" ? "All Severity" : `${lvl} Severity`}
          </option>
        ))}
      </select>

      {/* Category Filter */}
      <select
        value={filters.category}
        onChange={(e) => onChange({ ...filters, category: e.target.value })}
        style={selectStyle}
        id="category-filter"
      >
        <option value="All">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Date From */}
      <input
        type="date"
        value={filters.dateFrom}
        onChange={(e) => onChange({ ...filters, dateFrom: e.target.value })}
        style={inputStyle}
        placeholder="From Date"
        id="date-from-filter"
      />

      {/* Date To */}
      <input
        type="date"
        value={filters.dateTo}
        onChange={(e) => onChange({ ...filters, dateTo: e.target.value })}
        style={inputStyle}
        placeholder="To Date"
        id="date-to-filter"
      />

      {/* Reset button if any filter is active */}
      {(filters.riskLevel !== "All" ||
        filters.category !== "All" ||
        filters.dateFrom ||
        filters.dateTo) && (
        <button
          onClick={() =>
            onChange({
              riskLevel: "All",
              category: "All",
              dateFrom: "",
              dateTo: "",
            })
          }
          style={{
            background: "none",
            border: "none",
            color: "var(--accent)",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
            padding: "6px 10px",
            textDecoration: "underline",
          }}
        >
          Reset Filters
        </button>
      )}
    </div>
  );
};

export default Filters;
