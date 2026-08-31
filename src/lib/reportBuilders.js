/**
 * Report row builders and summarizers.
 */

/**
 * Report builder #1 for SaaS spending and usage analytics.
 */
export function buildSpendingRow1(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow1(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport1(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #2 for SaaS spending and usage analytics.
 */
export function buildSpendingRow2(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow2(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport2(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #3 for SaaS spending and usage analytics.
 */
export function buildSpendingRow3(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow3(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport3(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #4 for SaaS spending and usage analytics.
 */
export function buildSpendingRow4(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow4(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport4(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #5 for SaaS spending and usage analytics.
 */
export function buildSpendingRow5(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow5(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport5(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #6 for SaaS spending and usage analytics.
 */
export function buildSpendingRow6(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow6(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport6(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #7 for SaaS spending and usage analytics.
 */
export function buildSpendingRow7(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow7(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport7(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #8 for SaaS spending and usage analytics.
 */
export function buildSpendingRow8(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow8(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport8(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #9 for SaaS spending and usage analytics.
 */
export function buildSpendingRow9(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow9(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport9(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #10 for SaaS spending and usage analytics.
 */
export function buildSpendingRow10(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow10(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport10(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #11 for SaaS spending and usage analytics.
 */
export function buildSpendingRow11(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow11(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport11(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #12 for SaaS spending and usage analytics.
 */
export function buildSpendingRow12(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow12(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport12(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #13 for SaaS spending and usage analytics.
 */
export function buildSpendingRow13(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow13(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport13(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #14 for SaaS spending and usage analytics.
 */
export function buildSpendingRow14(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow14(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport14(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #15 for SaaS spending and usage analytics.
 */
export function buildSpendingRow15(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow15(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport15(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #16 for SaaS spending and usage analytics.
 */
export function buildSpendingRow16(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow16(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport16(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #17 for SaaS spending and usage analytics.
 */
export function buildSpendingRow17(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow17(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport17(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #18 for SaaS spending and usage analytics.
 */
export function buildSpendingRow18(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow18(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport18(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #19 for SaaS spending and usage analytics.
 */
export function buildSpendingRow19(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow19(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport19(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #20 for SaaS spending and usage analytics.
 */
export function buildSpendingRow20(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow20(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport20(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #21 for SaaS spending and usage analytics.
 */
export function buildSpendingRow21(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow21(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport21(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #22 for SaaS spending and usage analytics.
 */
export function buildSpendingRow22(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow22(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport22(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #23 for SaaS spending and usage analytics.
 */
export function buildSpendingRow23(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow23(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport23(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #24 for SaaS spending and usage analytics.
 */
export function buildSpendingRow24(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow24(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport24(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #25 for SaaS spending and usage analytics.
 */
export function buildSpendingRow25(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow25(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport25(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #26 for SaaS spending and usage analytics.
 */
export function buildSpendingRow26(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow26(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport26(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #27 for SaaS spending and usage analytics.
 */
export function buildSpendingRow27(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow27(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport27(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #28 for SaaS spending and usage analytics.
 */
export function buildSpendingRow28(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow28(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport28(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #29 for SaaS spending and usage analytics.
 */
export function buildSpendingRow29(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow29(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport29(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #30 for SaaS spending and usage analytics.
 */
export function buildSpendingRow30(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow30(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport30(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #31 for SaaS spending and usage analytics.
 */
export function buildSpendingRow31(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow31(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport31(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #32 for SaaS spending and usage analytics.
 */
export function buildSpendingRow32(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow32(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport32(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #33 for SaaS spending and usage analytics.
 */
export function buildSpendingRow33(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow33(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport33(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #34 for SaaS spending and usage analytics.
 */
export function buildSpendingRow34(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow34(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport34(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #35 for SaaS spending and usage analytics.
 */
export function buildSpendingRow35(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow35(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport35(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #36 for SaaS spending and usage analytics.
 */
export function buildSpendingRow36(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow36(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport36(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #37 for SaaS spending and usage analytics.
 */
export function buildSpendingRow37(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow37(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport37(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #38 for SaaS spending and usage analytics.
 */
export function buildSpendingRow38(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow38(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport38(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #39 for SaaS spending and usage analytics.
 */
export function buildSpendingRow39(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow39(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport39(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}


/**
 * Report builder #40 for SaaS spending and usage analytics.
 */
export function buildSpendingRow40(app, subscription, userCount) {
  const monthly = subscription
    ? (subscription.billingCycle === "Yearly" ? subscription.cost / 12
      : subscription.billingCycle === "Quarterly" ? subscription.cost / 3
      : subscription.cost)
    : (app.monthlyCost || 0);
  const annual = monthly * 12;
  const users = userCount || app.numberOfUsers || 0;
  return {
    id: app.id,
    application: app.name,
    vendor: app.vendor,
    category: app.category,
    status: app.status,
    monthlyCost: Math.round(monthly * 100) / 100,
    annualCost: Math.round(annual * 100) / 100,
    users,
    costPerUser: users > 0 ? Math.round((monthly / users) * 100) / 100 : 0,
    plan: subscription?.planName || app.subscriptionPlan || "—",
  };
}

export function buildUsageRow40(subscription, appName) {
  const total = subscription.seats || 0;
  const used = subscription.usedSeats || 0;
  const available = Math.max(0, total - used);
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return {
    id: subscription.id,
    application: appName,
    totalSeats: total,
    usedSeats: used,
    availableSeats: available,
    usagePercentage: pct,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
  };
}

export function summarizeReport40(rows, costKey = "monthlyCost") {
  const total = rows.reduce((s, r) => s + (Number(r[costKey]) || 0), 0);
  const count = rows.length;
  const avg = count > 0 ? total / count : 0;
  return { total: Math.round(total * 100) / 100, count, average: Math.round(avg * 100) / 100 };
}
