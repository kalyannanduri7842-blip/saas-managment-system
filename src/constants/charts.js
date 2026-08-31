/**
 * Chart configuration, color palettes, and default options for Recharts.
 */
export const CHART_COLORS = [
  "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6",
  "#06b6d4", "#ec4899", "#84cc16", "#f97316", "#6366f1",
  "#14b8a6", "#a855f7", "#22c55e", "#0ea5e9", "#64748b",
];

export const STATUS_CHART_COLORS = {
  Active: "#10b981",
  Trial: "#3b82f6",
  Expired: "#ef4444",
  Cancelled: "#6b7280",
  Expiring: "#f59e0b",
  Paid: "#10b981",
  Pending: "#f59e0b",
  Failed: "#ef4444",
};

export const DEFAULT_BAR_CHART_CONFIG = {
  margin: { top: 10, right: 10, left: 0, bottom: 0 },
  barSize: 28,
  radius: [4, 4, 0, 0],
};

export const DEFAULT_PIE_CHART_CONFIG = {
  innerRadius: 0,
  outerRadius: 70,
  paddingAngle: 2,
  cx: "50%",
  cy: "50%",
};

export const TOOLTIP_STYLE = {
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  fontSize: "12px",
  padding: "8px 12px",
};

export const DARK_TOOLTIP_STYLE = {
  backgroundColor: "#1f2937",
  border: "1px solid #374151",
  borderRadius: "8px",
  fontSize: "12px",
  padding: "8px 12px",
  color: "#f3f4f6",
};

export function getChartColor(index) {
  return CHART_COLORS[index % CHART_COLORS.length];
}

export function buildPieData(counts) {
  return Object.entries(counts)
    .filter(([, v]) => v > 0)
    .map(([name, value]) => ({ name, value }));
}
