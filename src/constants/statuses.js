/**
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
