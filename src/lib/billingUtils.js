/**
 * Billing history and invoice helpers.
 */

/**
 * Billing history helper #1.
 */
export function createBillingRecord1(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-1`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-1`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth1(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling1(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #2.
 */
export function createBillingRecord2(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-2`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-2`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth2(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling2(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #3.
 */
export function createBillingRecord3(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-3`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-3`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth3(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling3(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #4.
 */
export function createBillingRecord4(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-4`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-4`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth4(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling4(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #5.
 */
export function createBillingRecord5(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-5`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-5`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth5(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling5(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #6.
 */
export function createBillingRecord6(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-6`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-6`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth6(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling6(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #7.
 */
export function createBillingRecord7(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-7`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-7`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth7(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling7(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #8.
 */
export function createBillingRecord8(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-8`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-8`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth8(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling8(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #9.
 */
export function createBillingRecord9(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-9`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-9`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth9(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling9(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #10.
 */
export function createBillingRecord10(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-10`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-10`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth10(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling10(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #11.
 */
export function createBillingRecord11(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-11`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-11`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth11(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling11(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #12.
 */
export function createBillingRecord12(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-12`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-12`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth12(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling12(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #13.
 */
export function createBillingRecord13(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-13`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-13`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth13(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling13(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #14.
 */
export function createBillingRecord14(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-14`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-14`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth14(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling14(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #15.
 */
export function createBillingRecord15(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-15`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-15`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth15(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling15(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #16.
 */
export function createBillingRecord16(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-16`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-16`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth16(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling16(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #17.
 */
export function createBillingRecord17(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-17`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-17`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth17(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling17(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #18.
 */
export function createBillingRecord18(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-18`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-18`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth18(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling18(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #19.
 */
export function createBillingRecord19(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-19`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-19`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth19(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling19(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #20.
 */
export function createBillingRecord20(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-20`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-20`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth20(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling20(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #21.
 */
export function createBillingRecord21(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-21`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-21`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth21(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling21(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #22.
 */
export function createBillingRecord22(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-22`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-22`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth22(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling22(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #23.
 */
export function createBillingRecord23(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-23`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-23`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth23(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling23(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #24.
 */
export function createBillingRecord24(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-24`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-24`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth24(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling24(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}


/**
 * Billing history helper #25.
 */
export function createBillingRecord25(applicationId, amount, status, date, extra = {}) {
  return {
    id: `bill-${Date.now()}-${Math.random().toString(36).slice(2, 7)}-25`,
    applicationId,
    amount: Number(amount) || 0,
    status: status || "Paid",
    date: date || new Date().toISOString().slice(0, 10),
    invoiceNumber: extra.invoiceNumber || `INV-${Date.now()}-25`,
    currency: extra.currency || "USD",
    description: extra.description || "",
    ...extra,
  };
}

export function sumBillingByMonth25(records) {
  const map = {};
  (records || []).forEach((r) => {
    const month = (r.date || "").slice(0, 7);
    if (!month) return;
    map[month] = (map[month] || 0) + (Number(r.amount) || 0);
  });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, amount]) => ({ month, amount: Math.round(amount * 100) / 100 }));
}

export function filterBilling25(records, { status, applicationId, from, to } = {}) {
  return (records || []).filter((r) => {
    if (status && r.status !== status) return false;
    if (applicationId && r.applicationId !== applicationId) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    return true;
  });
}
