/**
 * Navigation configuration for sidebar and routing.
 */
export const SIDEBAR_NAV_ITEMS = [
  { path: "/", label: "Dashboard", icon: "LayoutDashboard", section: "main" },
  { path: "/applications", label: "Applications", icon: "AppWindow", section: "main" },
  { path: "/subscriptions", label: "Subscriptions", icon: "CreditCard", section: "main" },
  { path: "/users", label: "Users", icon: "Users", section: "main" },
  { path: "/expenses", label: "Expenses", icon: "Receipt", section: "main" },
  { path: "/reports", label: "Reports", icon: "BarChart3", section: "analytics" },
  { path: "/audit-log", label: "Audit Log", icon: "FileText", section: "analytics" },
  { path: "/activity", label: "Activity Feed", icon: "Activity", section: "analytics" },
  { path: "/integrations", label: "Integrations", icon: "Puzzle", section: "system" },
  { path: "/billing-history", label: "Billing History", icon: "Wallet", section: "system" },
  { path: "/notifications", label: "Notifications", icon: "Bell", section: "system" },
  { path: "/settings", label: "Settings", icon: "Settings", section: "system" },
];

export const PAGE_TITLES = {
  "/": "Dashboard",
  "/applications": "Applications",
  "/subscriptions": "Subscriptions",
  "/users": "Users",
  "/expenses": "Expenses",
  "/reports": "Reports",
  "/notifications": "Notifications",
  "/settings": "Settings",
  "/audit-log": "Audit Log",
  "/activity": "Activity Feed",
  "/integrations": "Integrations",
  "/billing-history": "Billing History",
};

export function getPageTitle(pathname) {
  if (PAGE_TITLES[pathname]) return PAGE_TITLES[pathname];
  if (pathname.startsWith("/applications/")) return "Application Details";
  if (pathname.startsWith("/users/")) return "User Details";
  return "SaaS Manager";
}

export function getNavSection(items, section) {
  return items.filter((item) => item.section === section);
}
