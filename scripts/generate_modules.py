#!/usr/bin/env python3
"""Generate substantial production application modules for SaaS Management Platform."""
import os

BASE = os.path.join(os.path.dirname(__file__), "..", "src")

def write(path, content):
    full = os.path.join(BASE, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w") as f:
        f.write(content)
    return len(content.splitlines())

total = 0

# ========== CONSTANTS ==========
categories_block = "\n".join([
    f'  {{ id: "cat-{i}", name: "{name}", description: "Category for {name.lower()} related SaaS tools and services used across the organization.", icon: "{icon}", color: "{color}" }},'
    for i, (name, icon, color) in enumerate([
        ("Communication", "message-circle", "#3b82f6"),
        ("Productivity", "briefcase", "#10b981"),
        ("Development", "code", "#8b5cf6"),
        ("Design", "palette", "#ec4899"),
        ("Project Management", "kanban", "#f59e0b"),
        ("Security", "shield", "#ef4444"),
        ("Marketing", "megaphone", "#06b6d4"),
        ("Analytics", "bar-chart", "#6366f1"),
        ("HR", "users", "#14b8a6"),
        ("Finance", "dollar-sign", "#84cc16"),
        ("Customer Support", "headphones", "#f97316"),
        ("Sales", "trending-up", "#0ea5e9"),
        ("Legal", "scale", "#64748b"),
        ("Operations", "settings", "#a855f7"),
        ("Infrastructure", "server", "#22c55e"),
    ], 1)
])

total += write("constants/categories.js", f'''/**
 * Application category definitions used throughout the SaaS Management Platform.
 * Each category groups related SaaS applications for filtering, reporting, and analytics.
 */
export const CATEGORY_DEFINITIONS = [
{categories_block}
];

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORY_DEFINITIONS.map((c) => [c.name, c])
);

export const CATEGORY_COLORS = Object.fromEntries(
  CATEGORY_DEFINITIONS.map((c) => [c.name, c.color])
);

export function getCategoryById(id) {{
  return CATEGORY_DEFINITIONS.find((c) => c.id === id) || null;
}}

export function getCategoryByName(name) {{
  return CATEGORY_MAP[name] || null;
}}

export function getAllCategoryNames() {{
  return CATEGORY_DEFINITIONS.map((c) => c.name);
}}

export function getCategoryColor(name) {{
  return CATEGORY_COLORS[name] || "#6b7280";
}}
''')

# Status constants
total += write("constants/statuses.js", '''/**
 * Status enumerations and helpers for applications, subscriptions, users, payments, and renewals.
 */
export const APPLICATION_STATUSES = [
  { value: "Active", label: "Active", color: "green", description: "Application is currently in use and fully operational" },
  { value: "Trial", label: "Trial", color: "blue", description: "Application is in trial period evaluation" },
  { value: "Expired", label: "Expired", color: "red", description: "Application subscription has expired" },
  { value: "Cancelled", label: "Cancelled", color: "gray", description: "Application has been cancelled and is no longer active" },
];

export const SUBSCRIPTION_STATUSES = [
  { value: "Active", label: "Active", color: "green", description: "Subscription is active and billing is current" },
  { value: "Trial", label: "Trial", color: "blue", description: "Subscription is in trial period" },
  { value: "Expiring", label: "Expiring", color: "yellow", description: "Subscription is approaching renewal or expiration" },
  { value: "Cancelled", label: "Cancelled", color: "gray", description: "Subscription has been cancelled" },
];

export const USER_STATUSES = [
  { value: "Active", label: "Active", color: "green", description: "User account is active" },
  { value: "Inactive", label: "Inactive", color: "gray", description: "User account is inactive" },
];

export const PAYMENT_STATUSES = [
  { value: "Paid", label: "Paid", color: "green", description: "Payment completed successfully" },
  { value: "Pending", label: "Pending", color: "yellow", description: "Payment is pending processing" },
  { value: "Failed", label: "Failed", color: "red", description: "Payment failed and requires attention" },
];

export const RENEWAL_STATUSES = [
  { value: "Due Soon", label: "Due Soon", color: "yellow", description: "Renewal is due within 14 days" },
  { value: "Upcoming", label: "Upcoming", color: "blue", description: "Renewal is scheduled within 45 days" },
  { value: "Expired", label: "Expired", color: "red", description: "Renewal date has passed" },
];

export const USER_ROLES = [
  { value: "Admin", label: "Administrator", permissions: ["read", "write", "delete", "manage_users", "manage_billing"] },
  { value: "Manager", label: "Manager", permissions: ["read", "write", "manage_team"] },
  { value: "Employee", label: "Employee", permissions: ["read"] },
];

export const BILLING_CYCLES = [
  { value: "Monthly", label: "Monthly", months: 1, description: "Billed every month" },
  { value: "Quarterly", label: "Quarterly", months: 3, description: "Billed every 3 months" },
  { value: "Yearly", label: "Yearly", months: 12, description: "Billed annually" },
];

export const NOTIFICATION_TYPES = [
  { value: "renewal", label: "Renewal", icon: "calendar" },
  { value: "payment", label: "Payment", icon: "credit-card" },
  { value: "application", label: "Application", icon: "app-window" },
  { value: "user", label: "User", icon: "user" },
  { value: "system", label: "System", icon: "bell" },
  { value: "security", label: "Security", icon: "shield" },
];

export function getStatusConfig(statusList, value) {
  return statusList.find((s) => s.value === value) || { value, label: value, color: "gray" };
}

export function getStatusColor(statusList, value) {
  return getStatusConfig(statusList, value).color;
}

export function isActiveStatus(status) {
  return status === "Active" || status === "Trial";
}

export function isTerminalStatus(status) {
  return status === "Expired" || status === "Cancelled" || status === "Inactive";
}
''')

# Departments
depts = ["Engineering", "Product", "Design", "Sales", "Marketing", "HR", "Finance", "Customer Success", "Legal", "Operations", "IT", "Security", "Data Science", "Support", "Business Development"]
dept_block = ",\n".join([f'  {{ id: "dept-{i}", name: "{d}", code: "{d[:3].upper()}", budgetCode: "BUD-{1000+i}" }}' for i, d in enumerate(depts, 1)])
total += write("constants/departments.js", f'''/**
 * Organizational department definitions.
 */
export const DEPARTMENTS = [
{dept_block}
];

export const DEPARTMENT_NAMES = DEPARTMENTS.map((d) => d.name);

export function getDepartmentById(id) {{
  return DEPARTMENTS.find((d) => d.id === id) || null;
}}

export function getDepartmentByName(name) {{
  return DEPARTMENTS.find((d) => d.name === name) || null;
}}
''')

# Navigation
total += write("constants/navigation.js", '''/**
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
''')

# Chart colors and config
total += write("constants/charts.js", '''/**
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
''')

# ========== VALIDATORS ==========
total += write("validators/applicationValidator.js", '''/**
 * Validation rules and helpers for SaaS application forms and data.
 */
const URL_PATTERN = /^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;

export function validateApplicationName(name) {
  const errors = [];
  if (!name || typeof name !== "string") {
    errors.push("Application name is required");
    return errors;
  }
  const trimmed = name.trim();
  if (trimmed.length === 0) errors.push("Application name is required");
  if (trimmed.length < 2) errors.push("Application name must be at least 2 characters");
  if (trimmed.length > 100) errors.push("Application name must be at most 100 characters");
  if (!/^[a-zA-Z0-9\\s.\\-+&()]+$/.test(trimmed)) {
    errors.push("Application name contains invalid characters");
  }
  return errors;
}

export function validateVendor(vendor) {
  const errors = [];
  if (!vendor || typeof vendor !== "string" || !vendor.trim()) {
    errors.push("Vendor is required");
    return errors;
  }
  if (vendor.trim().length < 2) errors.push("Vendor must be at least 2 characters");
  if (vendor.trim().length > 100) errors.push("Vendor must be at most 100 characters");
  return errors;
}

export function validateCategory(category, allowedCategories) {
  const errors = [];
  if (!category) {
    errors.push("Category is required");
    return errors;
  }
  if (allowedCategories && !allowedCategories.includes(category)) {
    errors.push(`Category must be one of: ${allowedCategories.join(", ")}`);
  }
  return errors;
}

export function validateWebsite(website) {
  const errors = [];
  if (!website) return errors;
  if (typeof website !== "string") {
    errors.push("Website must be a string");
    return errors;
  }
  const trimmed = website.trim();
  if (trimmed && !URL_PATTERN.test(trimmed)) {
    errors.push("Website must be a valid URL starting with http:// or https://");
  }
  return errors;
}

export function validateMonthlyCost(cost) {
  const errors = [];
  if (cost === undefined || cost === null || cost === "") {
    return errors;
  }
  const num = Number(cost);
  if (Number.isNaN(num)) errors.push("Monthly cost must be a number");
  else if (num < 0) errors.push("Monthly cost cannot be negative");
  else if (num > 1000000) errors.push("Monthly cost seems unreasonably high");
  return errors;
}

export function validateNumberOfUsers(count) {
  const errors = [];
  if (count === undefined || count === null || count === "") return errors;
  const num = Number(count);
  if (Number.isNaN(num)) errors.push("Number of users must be a number");
  else if (!Number.isInteger(num)) errors.push("Number of users must be a whole number");
  else if (num < 0) errors.push("Number of users cannot be negative");
  else if (num > 100000) errors.push("Number of users seems unreasonably high");
  return errors;
}

export function validateStatus(status, allowedStatuses) {
  const errors = [];
  if (!status) return errors;
  if (allowedStatuses && !allowedStatuses.includes(status)) {
    errors.push(`Status must be one of: ${allowedStatuses.join(", ")}`);
  }
  return errors;
}

export function validateRenewalDate(dateStr) {
  const errors = [];
  if (!dateStr) return errors;
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) errors.push("Renewal date is invalid");
  return errors;
}

export function validateApplication(data, options = {}) {
  const {
    categories = ["Communication", "Productivity", "Development", "Design", "Project Management", "Security", "Marketing"],
    statuses = ["Active", "Trial", "Expired", "Cancelled"],
  } = options;

  const fieldErrors = {
    name: validateApplicationName(data.name),
    vendor: validateVendor(data.vendor),
    category: validateCategory(data.category, categories),
    website: validateWebsite(data.website),
    monthlyCost: validateMonthlyCost(data.monthlyCost),
    numberOfUsers: validateNumberOfUsers(data.numberOfUsers),
    status: validateStatus(data.status, statuses),
    renewalDate: validateRenewalDate(data.renewalDate),
  };

  const isValid = Object.values(fieldErrors).every((arr) => arr.length === 0);
  const flatErrors = Object.entries(fieldErrors)
    .filter(([, errs]) => errs.length > 0)
    .reduce((acc, [key, errs]) => {
      acc[key] = errs[0];
      return acc;
    }, {});

  return { isValid, errors: flatErrors, fieldErrors };
}

export function sanitizeApplication(data) {
  return {
    name: (data.name || "").trim(),
    vendor: (data.vendor || "").trim(),
    category: data.category || "Productivity",
    description: (data.description || "").trim(),
    website: (data.website || "").trim(),
    status: data.status || "Active",
    numberOfUsers: Math.max(0, Math.floor(Number(data.numberOfUsers) || 0)),
    subscriptionPlan: (data.subscriptionPlan || "").trim(),
    monthlyCost: Math.max(0, Number(data.monthlyCost) || 0),
    renewalDate: data.renewalDate || "",
  };
}
''')

total += write("validators/userValidator.js", '''/**
 * Validation rules for user forms and user data integrity.
 */
const EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export function validateUserName(name) {
  const errors = [];
  if (!name || typeof name !== "string" || !name.trim()) {
    errors.push("Name is required");
    return errors;
  }
  const trimmed = name.trim();
  if (trimmed.length < 2) errors.push("Name must be at least 2 characters");
  if (trimmed.length > 80) errors.push("Name must be at most 80 characters");
  if (!/^[a-zA-Z\\s.'-]+$/.test(trimmed)) {
    errors.push("Name can only contain letters, spaces, hyphens, apostrophes, and periods");
  }
  return errors;
}

export function validateEmail(email) {
  const errors = [];
  if (!email || typeof email !== "string" || !email.trim()) {
    errors.push("Email is required");
    return errors;
  }
  const trimmed = email.trim().toLowerCase();
  if (!EMAIL_PATTERN.test(trimmed)) errors.push("Please enter a valid email address");
  if (trimmed.length > 254) errors.push("Email is too long");
  return errors;
}

export function validateRole(role, allowedRoles = ["Admin", "Manager", "Employee"]) {
  const errors = [];
  if (!role) {
    errors.push("Role is required");
    return errors;
  }
  if (!allowedRoles.includes(role)) {
    errors.push(`Role must be one of: ${allowedRoles.join(", ")}`);
  }
  return errors;
}

export function validateDepartment(department) {
  const errors = [];
  if (department && department.length > 60) {
    errors.push("Department name is too long");
  }
  return errors;
}

export function validateUserStatus(status, allowed = ["Active", "Inactive"]) {
  const errors = [];
  if (status && !allowed.includes(status)) {
    errors.push(`Status must be one of: ${allowed.join(", ")}`);
  }
  return errors;
}

export function validateAssignedApps(apps) {
  const errors = [];
  if (apps === undefined || apps === null) return errors;
  if (!Array.isArray(apps)) {
    errors.push("Assigned applications must be an array");
    return errors;
  }
  if (apps.length > 100) errors.push("Cannot assign more than 100 applications to a user");
  return errors;
}

export function validateUser(data, options = {}) {
  const fieldErrors = {
    name: validateUserName(data.name),
    email: validateEmail(data.email),
    role: validateRole(data.role, options.roles),
    department: validateDepartment(data.department),
    status: validateUserStatus(data.status, options.statuses),
    assignedApps: validateAssignedApps(data.assignedApps),
  };

  const isValid = Object.values(fieldErrors).every((arr) => arr.length === 0);
  const errors = Object.entries(fieldErrors)
    .filter(([, errs]) => errs.length > 0)
    .reduce((acc, [key, errs]) => {
      acc[key] = errs[0];
      return acc;
    }, {});

  return { isValid, errors, fieldErrors };
}

export function sanitizeUser(data) {
  return {
    name: (data.name || "").trim(),
    email: (data.email || "").trim().toLowerCase(),
    department: (data.department || "").trim(),
    role: data.role || "Employee",
    status: data.status || "Active",
    assignedApps: Array.isArray(data.assignedApps) ? [...new Set(data.assignedApps)] : [],
  };
}

export function isEmailUnique(email, users, excludeId = null) {
  const normalized = (email || "").trim().toLowerCase();
  return !users.some((u) => u.email === normalized && u.id !== excludeId);
}
''')

total += write("validators/subscriptionValidator.js", '''/**
 * Validation for subscription records and forms.
 */
export function validatePlanName(planName) {
  const errors = [];
  if (!planName || typeof planName !== "string" || !planName.trim()) {
    errors.push("Plan name is required");
    return errors;
  }
  if (planName.trim().length > 80) errors.push("Plan name is too long");
  return errors;
}

export function validateCost(cost) {
  const errors = [];
  if (cost === undefined || cost === null || cost === "") {
    errors.push("Cost is required");
    return errors;
  }
  const num = Number(cost);
  if (Number.isNaN(num)) errors.push("Cost must be a number");
  else if (num <= 0) errors.push("Cost must be greater than 0");
  else if (num > 10000000) errors.push("Cost seems unreasonably high");
  return errors;
}

export function validateBillingCycle(cycle, allowed = ["Monthly", "Quarterly", "Yearly"]) {
  const errors = [];
  if (!cycle) {
    errors.push("Billing cycle is required");
    return errors;
  }
  if (!allowed.includes(cycle)) {
    errors.push(`Billing cycle must be one of: ${allowed.join(", ")}`);
  }
  return errors;
}

export function validateSeats(seats, usedSeats) {
  const errors = [];
  const s = Number(seats);
  const u = Number(usedSeats);
  if (Number.isNaN(s) || s < 1) errors.push("Total seats must be at least 1");
  if (Number.isNaN(u) || u < 0) errors.push("Used seats cannot be negative");
  if (!Number.isNaN(s) && !Number.isNaN(u) && u > s) {
    errors.push("Used seats cannot exceed total seats");
  }
  return errors;
}

export function validateDates(startDate, renewalDate) {
  const errors = [];
  if (!renewalDate) {
    errors.push("Renewal date is required");
    return errors;
  }
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) {
    errors.push("Renewal date is invalid");
    return errors;
  }
  if (startDate) {
    const start = new Date(startDate);
    if (!Number.isNaN(start.getTime()) && renewal < start) {
      errors.push("Renewal date cannot be before start date");
    }
  }
  return errors;
}

export function validateApplicationId(applicationId, applications) {
  const errors = [];
  if (!applicationId) {
    errors.push("Application is required");
    return errors;
  }
  if (applications && !applications.some((a) => a.id === applicationId)) {
    errors.push("Selected application does not exist");
  }
  return errors;
}

export function validateSubscription(data, options = {}) {
  const fieldErrors = {
    applicationId: validateApplicationId(data.applicationId, options.applications),
    planName: validatePlanName(data.planName),
    cost: validateCost(data.cost),
    billingCycle: validateBillingCycle(data.billingCycle),
    seats: validateSeats(data.seats, data.usedSeats),
    dates: validateDates(data.startDate, data.renewalDate),
  };

  const isValid = Object.values(fieldErrors).every((arr) => arr.length === 0);
  const errors = {};
  if (fieldErrors.applicationId.length) errors.applicationId = fieldErrors.applicationId[0];
  if (fieldErrors.planName.length) errors.planName = fieldErrors.planName[0];
  if (fieldErrors.cost.length) errors.cost = fieldErrors.cost[0];
  if (fieldErrors.billingCycle.length) errors.billingCycle = fieldErrors.billingCycle[0];
  if (fieldErrors.seats.length) errors.seats = fieldErrors.seats[0];
  if (fieldErrors.dates.length) errors.renewalDate = fieldErrors.dates[0];

  return { isValid, errors, fieldErrors };
}

export function sanitizeSubscription(data) {
  return {
    applicationId: data.applicationId || "",
    planName: (data.planName || "").trim(),
    billingCycle: data.billingCycle || "Monthly",
    cost: Math.max(0, Number(data.cost) || 0),
    startDate: data.startDate || "",
    renewalDate: data.renewalDate || "",
    seats: Math.max(1, Math.floor(Number(data.seats) || 1)),
    usedSeats: Math.max(0, Math.floor(Number(data.usedSeats) || 0)),
    status: data.status || "Active",
  };
}
''')

total += write("validators/expenseValidator.js", '''/**
 * Validation for expense records.
 */
export function validateExpenseAmount(amount) {
  const errors = [];
  if (amount === undefined || amount === null || amount === "") {
    errors.push("Amount is required");
    return errors;
  }
  const num = Number(amount);
  if (Number.isNaN(num)) errors.push("Amount must be a number");
  else if (num <= 0) errors.push("Amount must be greater than 0");
  else if (num > 10000000) errors.push("Amount seems unreasonably high");
  return errors;
}

export function validateExpenseDate(dateStr) {
  const errors = [];
  if (!dateStr) {
    errors.push("Date is required");
    return errors;
  }
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) errors.push("Date is invalid");
  const future = new Date();
  future.setFullYear(future.getFullYear() + 1);
  if (date > future) errors.push("Date cannot be more than one year in the future");
  return errors;
}

export function validatePaymentStatus(status, allowed = ["Paid", "Pending", "Failed"]) {
  const errors = [];
  if (status && !allowed.includes(status)) {
    errors.push(`Payment status must be one of: ${allowed.join(", ")}`);
  }
  return errors;
}

export function validateExpense(data, options = {}) {
  const fieldErrors = {
    applicationId: !data.applicationId ? ["Application is required"] : [],
    amount: validateExpenseAmount(data.amount),
    date: validateExpenseDate(data.date),
    paymentStatus: validatePaymentStatus(data.paymentStatus),
  };

  if (options.applications && data.applicationId) {
    if (!options.applications.some((a) => a.id === data.applicationId)) {
      fieldErrors.applicationId = ["Selected application does not exist"];
    }
  }

  const isValid = Object.values(fieldErrors).every((arr) => arr.length === 0);
  const errors = Object.entries(fieldErrors)
    .filter(([, errs]) => errs.length > 0)
    .reduce((acc, [key, errs]) => {
      acc[key] = errs[0];
      return acc;
    }, {});

  return { isValid, errors, fieldErrors };
}

export function sanitizeExpense(data) {
  return {
    applicationId: data.applicationId || "",
    category: data.category || "Productivity",
    amount: Math.max(0, Number(data.amount) || 0),
    billingCycle: data.billingCycle || "Monthly",
    date: data.date || new Date().toISOString().slice(0, 10),
    paymentStatus: data.paymentStatus || "Paid",
  };
}
''')

print(f"Phase 1 constants+validators: {total} lines")
print(total)
