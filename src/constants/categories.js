/**
 * Application category definitions used throughout the SaaS Management Platform.
 * Each category groups related SaaS applications for filtering, reporting, and analytics.
 */
export const CATEGORY_DEFINITIONS = [
  { id: "cat-1", name: "Communication", description: "Category for communication related SaaS tools and services used across the organization.", icon: "message-circle", color: "#3b82f6" },
  { id: "cat-2", name: "Productivity", description: "Category for productivity related SaaS tools and services used across the organization.", icon: "briefcase", color: "#10b981" },
  { id: "cat-3", name: "Development", description: "Category for development related SaaS tools and services used across the organization.", icon: "code", color: "#8b5cf6" },
  { id: "cat-4", name: "Design", description: "Category for design related SaaS tools and services used across the organization.", icon: "palette", color: "#ec4899" },
  { id: "cat-5", name: "Project Management", description: "Category for project management related SaaS tools and services used across the organization.", icon: "kanban", color: "#f59e0b" },
  { id: "cat-6", name: "Security", description: "Category for security related SaaS tools and services used across the organization.", icon: "shield", color: "#ef4444" },
  { id: "cat-7", name: "Marketing", description: "Category for marketing related SaaS tools and services used across the organization.", icon: "megaphone", color: "#06b6d4" },
  { id: "cat-8", name: "Analytics", description: "Category for analytics related SaaS tools and services used across the organization.", icon: "bar-chart", color: "#6366f1" },
  { id: "cat-9", name: "HR", description: "Category for hr related SaaS tools and services used across the organization.", icon: "users", color: "#14b8a6" },
  { id: "cat-10", name: "Finance", description: "Category for finance related SaaS tools and services used across the organization.", icon: "dollar-sign", color: "#84cc16" },
  { id: "cat-11", name: "Customer Support", description: "Category for customer support related SaaS tools and services used across the organization.", icon: "headphones", color: "#f97316" },
  { id: "cat-12", name: "Sales", description: "Category for sales related SaaS tools and services used across the organization.", icon: "trending-up", color: "#0ea5e9" },
  { id: "cat-13", name: "Legal", description: "Category for legal related SaaS tools and services used across the organization.", icon: "scale", color: "#64748b" },
  { id: "cat-14", name: "Operations", description: "Category for operations related SaaS tools and services used across the organization.", icon: "settings", color: "#a855f7" },
  { id: "cat-15", name: "Infrastructure", description: "Category for infrastructure related SaaS tools and services used across the organization.", icon: "server", color: "#22c55e" },
];

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORY_DEFINITIONS.map((c) => [c.name, c])
);

export const CATEGORY_COLORS = Object.fromEntries(
  CATEGORY_DEFINITIONS.map((c) => [c.name, c.color])
);

export function getCategoryById(id) {
  return CATEGORY_DEFINITIONS.find((c) => c.id === id) || null;
}

export function getCategoryByName(name) {
  return CATEGORY_MAP[name] || null;
}

export function getAllCategoryNames() {
  return CATEGORY_DEFINITIONS.map((c) => c.name);
}

export function getCategoryColor(name) {
  return CATEGORY_COLORS[name] || "#6b7280";
}
