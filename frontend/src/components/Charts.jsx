import { useMemo } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell,
  BarChart, Bar,
} from "recharts";

/**
 * Charts — Creamy Editorial Financial Visualizations
 */

const CREAMY_PIE_COLORS = [
  "#B45309", // Warm Caramel / Amber
  "#15803D", // Heritage Forest Sage
  "#78350F", // Deep Espresso
  "#D97706", // Honey
  "#9A3412", // Terracotta
  "#57534E", // Warm Stone
  "#991B1B", // Crimson
  "#0284C7", // Slate Blue
];

const RISK_COLORS = {
  Normal: "#15803D",
  Medium: "#B45309",
  High: "#991B1B",
};

// Creamy tooltip styling
const creamyTooltipStyle = {
  backgroundColor: "#FFFFFF",
  border: "1px solid #E8E2D5",
  borderRadius: "10px",
  boxShadow: "0 4px 16px rgba(40, 30, 20, 0.08)",
  fontSize: "12px",
  color: "#1F1D1A",
  fontFamily: "var(--font-sans)",
  padding: "8px 12px",
};

const Charts = ({ transactions }) => {
  // --- 1. Transaction Trend Data ---
  const spendingTrend = useMemo(() => {
    const dailyMap = {};
    for (const tx of transactions) {
      const day = new Date(tx.date).toISOString().split("T")[0];
      dailyMap[day] = (dailyMap[day] || 0) + Math.abs(tx.amount);
    }
    return Object.entries(dailyMap)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, amount]) => ({
        date: new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" }),
        amount: Math.round(amount),
      }));
  }, [transactions]);

  // --- 2. Category Distribution Data ---
  const categoryData = useMemo(() => {
    const catMap = {};
    for (const tx of transactions) {
      const cat = tx.category || "Uncategorized";
      catMap[cat] = (catMap[cat] || 0) + Math.abs(tx.amount);
    }
    return Object.entries(catMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([name, value]) => ({ name, value: Math.round(value) }));
  }, [transactions]);

  // --- 3. Risk Distribution Data ---
  const riskData = useMemo(() => {
    const counts = { Normal: 0, Medium: 0, High: 0 };
    for (const tx of transactions) {
      if (counts[tx.riskLevel] !== undefined) {
        counts[tx.riskLevel]++;
      }
    }
    return Object.entries(counts).map(([name, count]) => ({
      name,
      count,
      fill: RISK_COLORS[name],
    }));
  }, [transactions]);

  if (!transactions || transactions.length === 0) return null;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "20px",
        marginBottom: "28px",
      }}
    >
      {/* 1. Daily Volume Trend */}
      <div className="creamy-card" style={{ padding: "24px 20px" }}>
        <div style={{ marginBottom: "16px" }}>
          <h4
            className="font-serif"
            style={{ fontSize: "16px", fontWeight: 600, color: "var(--text-primary)" }}
          >
            Volume Timeline
          </h4>
          <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
            Daily transaction volume fluctuations
          </p>
        </div>
        <div style={{ width: "100%", height: 220 }}>
          <ResponsiveContainer>
            <LineChart data={spendingTrend}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="date" tickLine={false} axisLine={false} />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(val) => `₹${val > 1000 ? `${Math.round(val / 1000)}k` : val}`}
              />
              <Tooltip
                contentStyle={creamyTooltipStyle}
                formatter={(val) => [`₹${val.toLocaleString("en-IN")}`, "Volume"]}
              />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#1C1917"
                strokeWidth={2.5}
                dot={{ r: 3, fill: "#B45309", stroke: "#FFFFFF", strokeWidth: 1.5 }}
                activeDot={{ r: 5, fill: "#1C1917" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 2. Category Distribution */}
      <div className="creamy-card" style={{ padding: "24px 20px" }}>
        <div style={{ marginBottom: "16px" }}>
          <h4
            className="font-serif"
            style={{ fontSize: "16px", fontWeight: 600, color: "var(--text-primary)" }}
          >
            Expense Breakdown
          </h4>
          <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
            Spending concentration by category
          </p>
        </div>
        <div style={{ width: "100%", height: 220, display: "flex", alignItems: "center" }}>
          <ResponsiveContainer width="55%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                innerRadius={48}
                outerRadius={75}
                paddingAngle={3}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={CREAMY_PIE_COLORS[index % CREAMY_PIE_COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={creamyTooltipStyle}
                formatter={(val) => [`₹${val.toLocaleString("en-IN")}`, "Total"]}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Clean Legend */}
          <div style={{ width: "45%", paddingLeft: "10px", fontSize: "11.5px" }}>
            {categoryData.slice(0, 5).map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  marginBottom: "8px",
                  color: "var(--text-secondary)",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "2px",
                    background: CREAMY_PIE_COLORS[idx % CREAMY_PIE_COLORS.length],
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Risk Classification */}
      <div className="creamy-card" style={{ padding: "24px 20px" }}>
        <div style={{ marginBottom: "16px" }}>
          <h4
            className="font-serif"
            style={{ fontSize: "16px", fontWeight: 600, color: "var(--text-primary)" }}
          >
            Risk Classification
          </h4>
          <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
            Distribution of normal vs anomalous records
          </p>
        </div>
        <div style={{ width: "100%", height: 220 }}>
          <ResponsiveContainer>
            <BarChart data={riskData} barSize={36}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip contentStyle={creamyTooltipStyle} />
              <Bar dataKey="count" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Charts;
