/**
 * Validation rules and helpers for SaaS application forms and data.
 */
const URL_PATTERN = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;

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
  if (!/^[a-zA-Z0-9\s.\-+&()]+$/.test(trimmed)) {
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
