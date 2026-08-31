/**
 * Dashboard metric computation helpers.
 */

/**
 * Dashboard metric calculator #1.
 */
export function computeMetric1(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 1,
  };
}

export function computeTrend1(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #2.
 */
export function computeMetric2(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 2,
  };
}

export function computeTrend2(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #3.
 */
export function computeMetric3(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 3,
  };
}

export function computeTrend3(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #4.
 */
export function computeMetric4(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 4,
  };
}

export function computeTrend4(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #5.
 */
export function computeMetric5(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 5,
  };
}

export function computeTrend5(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #6.
 */
export function computeMetric6(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 6,
  };
}

export function computeTrend6(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #7.
 */
export function computeMetric7(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 7,
  };
}

export function computeTrend7(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #8.
 */
export function computeMetric8(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 8,
  };
}

export function computeTrend8(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #9.
 */
export function computeMetric9(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 9,
  };
}

export function computeTrend9(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #10.
 */
export function computeMetric10(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 10,
  };
}

export function computeTrend10(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #11.
 */
export function computeMetric11(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 11,
  };
}

export function computeTrend11(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #12.
 */
export function computeMetric12(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 12,
  };
}

export function computeTrend12(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #13.
 */
export function computeMetric13(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 13,
  };
}

export function computeTrend13(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #14.
 */
export function computeMetric14(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 14,
  };
}

export function computeTrend14(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #15.
 */
export function computeMetric15(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 15,
  };
}

export function computeTrend15(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #16.
 */
export function computeMetric16(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 16,
  };
}

export function computeTrend16(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #17.
 */
export function computeMetric17(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 17,
  };
}

export function computeTrend17(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #18.
 */
export function computeMetric18(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 18,
  };
}

export function computeTrend18(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #19.
 */
export function computeMetric19(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 19,
  };
}

export function computeTrend19(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #20.
 */
export function computeMetric20(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 20,
  };
}

export function computeTrend20(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #21.
 */
export function computeMetric21(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 21,
  };
}

export function computeTrend21(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #22.
 */
export function computeMetric22(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 22,
  };
}

export function computeTrend22(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #23.
 */
export function computeMetric23(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 23,
  };
}

export function computeTrend23(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #24.
 */
export function computeMetric24(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 24,
  };
}

export function computeTrend24(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #25.
 */
export function computeMetric25(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 25,
  };
}

export function computeTrend25(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #26.
 */
export function computeMetric26(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 26,
  };
}

export function computeTrend26(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #27.
 */
export function computeMetric27(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 27,
  };
}

export function computeTrend27(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #28.
 */
export function computeMetric28(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 28,
  };
}

export function computeTrend28(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #29.
 */
export function computeMetric29(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 29,
  };
}

export function computeTrend29(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #30.
 */
export function computeMetric30(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 30,
  };
}

export function computeTrend30(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #31.
 */
export function computeMetric31(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 31,
  };
}

export function computeTrend31(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #32.
 */
export function computeMetric32(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 32,
  };
}

export function computeTrend32(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #33.
 */
export function computeMetric33(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 33,
  };
}

export function computeTrend33(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #34.
 */
export function computeMetric34(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 34,
  };
}

export function computeTrend34(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}


/**
 * Dashboard metric calculator #35.
 */
export function computeMetric35(applications, subscriptions, users, expenses) {
  const activeApps = applications.filter((a) => a.status === "Active").length;
  const trialApps = applications.filter((a) => a.status === "Trial").length;
  const activeSubs = subscriptions.filter((s) => s.status === "Active" || s.status === "Trial").length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const totalExpense = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const monthlyFromSubs = subscriptions
    .filter((s) => s.status !== "Cancelled")
    .reduce((sum, s) => {
      const c = s.cost || 0;
      if (s.billingCycle === "Yearly") return sum + c / 12;
      if (s.billingCycle === "Quarterly") return sum + c / 3;
      return sum + c;
    }, 0);
  return {
    activeApps,
    trialApps,
    activeSubs,
    activeUsers,
    totalExpense: Math.round(totalExpense * 100) / 100,
    monthlySpend: Math.round(monthlyFromSubs * 100) / 100,
    annualSpend: Math.round(monthlyFromSubs * 12 * 100) / 100,
    metricIndex: 35,
  };
}

export function computeTrend35(current, previous) {
  if (!previous || previous === 0) return { change: 0, percent: 0, direction: "flat" };
  const change = current - previous;
  const percent = Math.round((change / previous) * 10000) / 100;
  const direction = change > 0 ? "up" : change < 0 ? "down" : "flat";
  return { change: Math.round(change * 100) / 100, percent, direction };
}
