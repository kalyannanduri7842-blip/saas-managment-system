/**
 * Validation rules for user forms and user data integrity.
 */
const EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export function validateUserName(name) {
  const errors = [];
  if (!name || typeof name !== "string" || !name.trim()) {
    errors.push("Name is required");
    return errors;
  }
  const trimmed = name.trim();
  if (trimmed.length < 2) errors.push("Name must be at least 2 characters");
  if (trimmed.length > 80) errors.push("Name must be at most 80 characters");
  if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
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
