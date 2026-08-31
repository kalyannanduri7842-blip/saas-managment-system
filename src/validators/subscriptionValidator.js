/**
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
