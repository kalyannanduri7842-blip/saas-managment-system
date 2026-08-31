/**
 * Cost optimization and underutilization detection.
 */

/**
 * Cost optimization recommendation helper #1.
 */
export function detectUnderutilizedSeats1(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 1,
  };
}

export function suggestDowngrade1(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 1,
  };
}

export function comparePlanCosts1(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #2.
 */
export function detectUnderutilizedSeats2(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 2,
  };
}

export function suggestDowngrade2(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 2,
  };
}

export function comparePlanCosts2(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #3.
 */
export function detectUnderutilizedSeats3(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 3,
  };
}

export function suggestDowngrade3(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 3,
  };
}

export function comparePlanCosts3(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #4.
 */
export function detectUnderutilizedSeats4(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 4,
  };
}

export function suggestDowngrade4(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 4,
  };
}

export function comparePlanCosts4(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #5.
 */
export function detectUnderutilizedSeats5(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 5,
  };
}

export function suggestDowngrade5(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 5,
  };
}

export function comparePlanCosts5(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #6.
 */
export function detectUnderutilizedSeats6(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 6,
  };
}

export function suggestDowngrade6(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 6,
  };
}

export function comparePlanCosts6(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #7.
 */
export function detectUnderutilizedSeats7(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 7,
  };
}

export function suggestDowngrade7(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 7,
  };
}

export function comparePlanCosts7(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #8.
 */
export function detectUnderutilizedSeats8(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 8,
  };
}

export function suggestDowngrade8(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 8,
  };
}

export function comparePlanCosts8(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #9.
 */
export function detectUnderutilizedSeats9(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 9,
  };
}

export function suggestDowngrade9(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 9,
  };
}

export function comparePlanCosts9(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #10.
 */
export function detectUnderutilizedSeats10(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 10,
  };
}

export function suggestDowngrade10(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 10,
  };
}

export function comparePlanCosts10(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #11.
 */
export function detectUnderutilizedSeats11(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 11,
  };
}

export function suggestDowngrade11(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 11,
  };
}

export function comparePlanCosts11(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #12.
 */
export function detectUnderutilizedSeats12(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 12,
  };
}

export function suggestDowngrade12(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 12,
  };
}

export function comparePlanCosts12(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #13.
 */
export function detectUnderutilizedSeats13(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 13,
  };
}

export function suggestDowngrade13(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 13,
  };
}

export function comparePlanCosts13(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #14.
 */
export function detectUnderutilizedSeats14(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 14,
  };
}

export function suggestDowngrade14(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 14,
  };
}

export function comparePlanCosts14(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #15.
 */
export function detectUnderutilizedSeats15(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 15,
  };
}

export function suggestDowngrade15(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 15,
  };
}

export function comparePlanCosts15(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #16.
 */
export function detectUnderutilizedSeats16(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 16,
  };
}

export function suggestDowngrade16(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 16,
  };
}

export function comparePlanCosts16(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #17.
 */
export function detectUnderutilizedSeats17(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 17,
  };
}

export function suggestDowngrade17(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 17,
  };
}

export function comparePlanCosts17(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #18.
 */
export function detectUnderutilizedSeats18(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 18,
  };
}

export function suggestDowngrade18(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 18,
  };
}

export function comparePlanCosts18(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #19.
 */
export function detectUnderutilizedSeats19(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 19,
  };
}

export function suggestDowngrade19(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 19,
  };
}

export function comparePlanCosts19(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #20.
 */
export function detectUnderutilizedSeats20(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 20,
  };
}

export function suggestDowngrade20(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 20,
  };
}

export function comparePlanCosts20(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #21.
 */
export function detectUnderutilizedSeats21(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 21,
  };
}

export function suggestDowngrade21(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 21,
  };
}

export function comparePlanCosts21(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #22.
 */
export function detectUnderutilizedSeats22(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 22,
  };
}

export function suggestDowngrade22(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 22,
  };
}

export function comparePlanCosts22(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #23.
 */
export function detectUnderutilizedSeats23(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 23,
  };
}

export function suggestDowngrade23(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 23,
  };
}

export function comparePlanCosts23(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #24.
 */
export function detectUnderutilizedSeats24(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 24,
  };
}

export function suggestDowngrade24(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 24,
  };
}

export function comparePlanCosts24(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #25.
 */
export function detectUnderutilizedSeats25(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 25,
  };
}

export function suggestDowngrade25(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 25,
  };
}

export function comparePlanCosts25(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #26.
 */
export function detectUnderutilizedSeats26(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 26,
  };
}

export function suggestDowngrade26(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 26,
  };
}

export function comparePlanCosts26(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #27.
 */
export function detectUnderutilizedSeats27(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 27,
  };
}

export function suggestDowngrade27(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 27,
  };
}

export function comparePlanCosts27(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #28.
 */
export function detectUnderutilizedSeats28(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 28,
  };
}

export function suggestDowngrade28(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 28,
  };
}

export function comparePlanCosts28(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}


/**
 * Cost optimization recommendation helper #29.
 */
export function detectUnderutilizedSeats29(subscription, threshold = 0.5) {
  const total = Number(subscription.seats) || 0;
  const used = Number(subscription.usedSeats) || 0;
  if (total <= 0) return null;
  const utilization = used / total;
  if (utilization >= threshold) return null;
  const wasted = total - used;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  return {
    subscriptionId: subscription.id,
    utilization: Math.round(utilization * 100),
    wastedSeats: wasted,
    potentialMonthlySavings: Math.round(wasted * costPerSeat * 100) / 100,
    threshold,
    index: 29,
  };
}

export function suggestDowngrade29(subscription, targetSeats) {
  const total = Number(subscription.seats) || 0;
  const target = Math.max(1, Number(targetSeats) || 1);
  if (target >= total) return null;
  const monthly = subscription.billingCycle === "Yearly"
    ? (subscription.cost || 0) / 12
    : subscription.billingCycle === "Quarterly"
    ? (subscription.cost || 0) / 3
    : (subscription.cost || 0);
  const costPerSeat = total > 0 ? monthly / total : 0;
  const newMonthly = costPerSeat * target;
  return {
    currentSeats: total,
    targetSeats: target,
    currentMonthly: Math.round(monthly * 100) / 100,
    projectedMonthly: Math.round(newMonthly * 100) / 100,
    monthlySavings: Math.round((monthly - newMonthly) * 100) / 100,
    index: 29,
  };
}

export function comparePlanCosts29(plans) {
  return [...(plans || [])]
    .map((p) => ({
      ...p,
      monthlyEquivalent: p.billingCycle === "Yearly" ? p.cost / 12
        : p.billingCycle === "Quarterly" ? p.cost / 3
        : p.cost,
    }))
    .sort((a, b) => a.monthlyEquivalent - b.monthlyEquivalent);
}
