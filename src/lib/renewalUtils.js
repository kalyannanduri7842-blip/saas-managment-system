/**
 * Renewal calendar and scheduling utilities for subscription lifecycle management.
 */

/**
 * Renewal scheduling helper #1 for subscription calendar and alerts.
 */
export function computeRenewalWindow1(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (1));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 1,
  };
}

export function groupRenewalsByMonth1(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 1 }));
}

export function prioritizeRenewals1(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #2 for subscription calendar and alerts.
 */
export function computeRenewalWindow2(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (2));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 2,
  };
}

export function groupRenewalsByMonth2(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 2 }));
}

export function prioritizeRenewals2(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #3 for subscription calendar and alerts.
 */
export function computeRenewalWindow3(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (3));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 3,
  };
}

export function groupRenewalsByMonth3(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 3 }));
}

export function prioritizeRenewals3(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #4 for subscription calendar and alerts.
 */
export function computeRenewalWindow4(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (4));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 4,
  };
}

export function groupRenewalsByMonth4(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 4 }));
}

export function prioritizeRenewals4(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #5 for subscription calendar and alerts.
 */
export function computeRenewalWindow5(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (0));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 5,
  };
}

export function groupRenewalsByMonth5(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 5 }));
}

export function prioritizeRenewals5(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #6 for subscription calendar and alerts.
 */
export function computeRenewalWindow6(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (1));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 6,
  };
}

export function groupRenewalsByMonth6(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 6 }));
}

export function prioritizeRenewals6(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #7 for subscription calendar and alerts.
 */
export function computeRenewalWindow7(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (2));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 7,
  };
}

export function groupRenewalsByMonth7(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 7 }));
}

export function prioritizeRenewals7(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #8 for subscription calendar and alerts.
 */
export function computeRenewalWindow8(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (3));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 8,
  };
}

export function groupRenewalsByMonth8(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 8 }));
}

export function prioritizeRenewals8(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #9 for subscription calendar and alerts.
 */
export function computeRenewalWindow9(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (4));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 9,
  };
}

export function groupRenewalsByMonth9(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 9 }));
}

export function prioritizeRenewals9(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #10 for subscription calendar and alerts.
 */
export function computeRenewalWindow10(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (0));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 10,
  };
}

export function groupRenewalsByMonth10(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 10 }));
}

export function prioritizeRenewals10(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #11 for subscription calendar and alerts.
 */
export function computeRenewalWindow11(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (1));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 11,
  };
}

export function groupRenewalsByMonth11(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 11 }));
}

export function prioritizeRenewals11(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #12 for subscription calendar and alerts.
 */
export function computeRenewalWindow12(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (2));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 12,
  };
}

export function groupRenewalsByMonth12(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 12 }));
}

export function prioritizeRenewals12(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #13 for subscription calendar and alerts.
 */
export function computeRenewalWindow13(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (3));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 13,
  };
}

export function groupRenewalsByMonth13(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 13 }));
}

export function prioritizeRenewals13(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #14 for subscription calendar and alerts.
 */
export function computeRenewalWindow14(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (4));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 14,
  };
}

export function groupRenewalsByMonth14(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 14 }));
}

export function prioritizeRenewals14(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #15 for subscription calendar and alerts.
 */
export function computeRenewalWindow15(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (0));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 15,
  };
}

export function groupRenewalsByMonth15(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 15 }));
}

export function prioritizeRenewals15(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #16 for subscription calendar and alerts.
 */
export function computeRenewalWindow16(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (1));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 16,
  };
}

export function groupRenewalsByMonth16(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 16 }));
}

export function prioritizeRenewals16(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #17 for subscription calendar and alerts.
 */
export function computeRenewalWindow17(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (2));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 17,
  };
}

export function groupRenewalsByMonth17(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 17 }));
}

export function prioritizeRenewals17(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #18 for subscription calendar and alerts.
 */
export function computeRenewalWindow18(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (3));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 18,
  };
}

export function groupRenewalsByMonth18(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 18 }));
}

export function prioritizeRenewals18(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #19 for subscription calendar and alerts.
 */
export function computeRenewalWindow19(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (4));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 19,
  };
}

export function groupRenewalsByMonth19(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 19 }));
}

export function prioritizeRenewals19(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #20 for subscription calendar and alerts.
 */
export function computeRenewalWindow20(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (0));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 20,
  };
}

export function groupRenewalsByMonth20(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 20 }));
}

export function prioritizeRenewals20(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #21 for subscription calendar and alerts.
 */
export function computeRenewalWindow21(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (1));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 21,
  };
}

export function groupRenewalsByMonth21(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 21 }));
}

export function prioritizeRenewals21(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #22 for subscription calendar and alerts.
 */
export function computeRenewalWindow22(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (2));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 22,
  };
}

export function groupRenewalsByMonth22(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 22 }));
}

export function prioritizeRenewals22(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #23 for subscription calendar and alerts.
 */
export function computeRenewalWindow23(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (3));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 23,
  };
}

export function groupRenewalsByMonth23(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 23 }));
}

export function prioritizeRenewals23(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #24 for subscription calendar and alerts.
 */
export function computeRenewalWindow24(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (4));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 24,
  };
}

export function groupRenewalsByMonth24(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 24 }));
}

export function prioritizeRenewals24(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #25 for subscription calendar and alerts.
 */
export function computeRenewalWindow25(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (0));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 25,
  };
}

export function groupRenewalsByMonth25(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 25 }));
}

export function prioritizeRenewals25(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #26 for subscription calendar and alerts.
 */
export function computeRenewalWindow26(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (1));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 26,
  };
}

export function groupRenewalsByMonth26(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 26 }));
}

export function prioritizeRenewals26(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #27 for subscription calendar and alerts.
 */
export function computeRenewalWindow27(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (2));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 27,
  };
}

export function groupRenewalsByMonth27(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 27 }));
}

export function prioritizeRenewals27(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #28 for subscription calendar and alerts.
 */
export function computeRenewalWindow28(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (3));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 28,
  };
}

export function groupRenewalsByMonth28(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 28 }));
}

export function prioritizeRenewals28(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #29 for subscription calendar and alerts.
 */
export function computeRenewalWindow29(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (4));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 29,
  };
}

export function groupRenewalsByMonth29(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 29 }));
}

export function prioritizeRenewals29(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #30 for subscription calendar and alerts.
 */
export function computeRenewalWindow30(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (0));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 30,
  };
}

export function groupRenewalsByMonth30(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 30 }));
}

export function prioritizeRenewals30(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #31 for subscription calendar and alerts.
 */
export function computeRenewalWindow31(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (1));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 31,
  };
}

export function groupRenewalsByMonth31(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 31 }));
}

export function prioritizeRenewals31(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #32 for subscription calendar and alerts.
 */
export function computeRenewalWindow32(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (2));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 32,
  };
}

export function groupRenewalsByMonth32(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 32 }));
}

export function prioritizeRenewals32(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #33 for subscription calendar and alerts.
 */
export function computeRenewalWindow33(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (3));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 33,
  };
}

export function groupRenewalsByMonth33(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 33 }));
}

export function prioritizeRenewals33(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}


/**
 * Renewal scheduling helper #34 for subscription calendar and alerts.
 */
export function computeRenewalWindow34(renewalDate, leadDays = 14) {
  const renewal = new Date(renewalDate);
  if (Number.isNaN(renewal.getTime())) return null;
  const start = new Date(renewal);
  start.setDate(start.getDate() - leadDays - (4));
  const now = new Date();
  const daysUntil = Math.ceil((renewal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let status = "Upcoming";
  if (daysUntil < 0) status = "Expired";
  else if (daysUntil <= leadDays) status = "Due Soon";
  else if (daysUntil <= 45) status = "Upcoming";
  else status = "Scheduled";
  return {
    renewalDate: renewal.toISOString().slice(0, 10),
    windowStart: start.toISOString().slice(0, 10),
    daysUntil,
    status,
    leadDays,
    handler: 34,
  };
}

export function groupRenewalsByMonth34(subscriptions) {
  const groups = {};
  (subscriptions || []).forEach((sub) => {
    if (!sub.renewalDate) return;
    const month = sub.renewalDate.slice(0, 7);
    if (!groups[month]) groups[month] = [];
    groups[month].push(sub);
  });
  return Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({ month, items, count: items.length, index: 34 }));
}

export function prioritizeRenewals34(subscriptions, limit = 10) {
  const now = Date.now();
  return [...(subscriptions || [])]
    .filter((s) => s.renewalDate && s.status !== "Cancelled")
    .map((s) => {
      const days = Math.ceil((new Date(s.renewalDate).getTime() - now) / (86400000));
      return { ...s, daysUntil: days, priority: days < 0 ? 0 : days };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}
