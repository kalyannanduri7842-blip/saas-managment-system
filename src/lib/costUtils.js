/**
 * Cost, pricing, and utilization calculation utilities.
 */

/**
 * Cost calculation helper #1 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost1(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost1(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser1(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization1(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings1(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #2 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost2(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost2(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser2(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization2(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings2(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #3 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost3(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost3(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser3(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization3(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings3(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #4 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost4(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost4(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser4(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization4(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings4(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #5 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost5(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost5(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser5(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization5(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings5(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #6 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost6(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost6(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser6(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization6(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings6(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #7 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost7(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost7(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser7(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization7(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings7(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #8 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost8(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost8(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser8(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization8(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings8(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #9 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost9(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost9(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser9(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization9(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings9(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #10 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost10(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost10(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser10(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization10(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings10(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #11 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost11(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost11(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser11(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization11(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings11(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #12 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost12(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost12(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser12(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization12(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings12(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #13 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost13(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost13(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser13(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization13(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings13(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #14 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost14(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost14(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser14(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization14(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings14(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #15 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost15(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost15(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser15(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization15(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings15(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #16 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost16(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost16(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser16(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization16(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings16(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #17 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost17(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost17(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser17(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization17(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings17(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #18 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost18(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost18(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser18(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization18(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings18(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #19 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost19(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost19(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser19(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization19(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings19(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #20 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost20(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost20(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser20(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization20(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings20(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #21 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost21(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost21(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser21(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization21(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings21(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #22 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost22(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost22(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser22(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization22(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings22(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #23 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost23(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost23(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser23(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization23(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings23(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #24 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost24(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost24(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser24(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization24(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings24(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #25 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost25(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost25(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser25(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization25(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings25(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #26 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost26(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost26(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser26(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization26(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings26(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #27 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost27(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost27(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser27(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization27(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings27(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #28 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost28(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost28(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser28(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization28(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings28(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #29 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost29(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost29(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser29(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization29(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings29(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #30 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost30(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost30(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser30(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization30(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings30(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #31 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost31(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost31(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser31(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization31(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings31(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #32 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost32(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost32(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser32(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization32(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings32(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #33 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost33(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost33(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser33(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization33(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings33(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #34 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost34(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost34(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser34(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization34(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings34(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #35 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost35(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost35(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser35(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization35(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings35(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #36 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost36(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost36(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser36(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization36(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings36(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #37 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost37(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost37(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser37(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization37(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings37(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #38 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost38(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost38(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser38(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization38(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings38(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #39 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost39(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost39(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser39(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization39(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings39(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}


/**
 * Cost calculation helper #40 for subscription pricing and spend analytics.
 */
export function calculateMonthlyCost40(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Yearly") return n / 12;
  if (billingCycle === "Quarterly") return n / 3;
  return n;
}

export function calculateAnnualCost40(amount, billingCycle) {
  const n = Number(amount) || 0;
  if (billingCycle === "Monthly") return n * 12;
  if (billingCycle === "Quarterly") return n * 4;
  return n;
}

export function calculateCostPerUser40(totalCost, userCount) {
  const users = Number(userCount) || 0;
  if (users <= 0) return 0;
  return (Number(totalCost) || 0) / users;
}

export function calculateSeatUtilization40(used, total) {
  const t = Number(total) || 0;
  if (t <= 0) return 0;
  return Math.min(100, Math.round(((Number(used) || 0) / t) * 100));
}

export function estimateSavings40(currentCost, alternativeCost) {
  const current = Number(currentCost) || 0;
  const alt = Number(alternativeCost) || 0;
  const savings = current - alt;
  const percent = current > 0 ? (savings / current) * 100 : 0;
  return { savings, percent: Math.round(percent * 100) / 100, isSavings: savings > 0 };
}
