/**
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
