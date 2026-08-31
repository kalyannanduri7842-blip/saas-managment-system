/**
 * Vendor aggregation and deduplication utilities.
 */

/**
 * Vendor management helper #1.
 */
export function normalizeVendorName1(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor1(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName1(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 1,
  }));
}

export function rankVendorsBySpend1(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates1(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName1(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #2.
 */
export function normalizeVendorName2(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor2(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName2(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 2,
  }));
}

export function rankVendorsBySpend2(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates2(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName2(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #3.
 */
export function normalizeVendorName3(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor3(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName3(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 3,
  }));
}

export function rankVendorsBySpend3(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates3(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName3(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #4.
 */
export function normalizeVendorName4(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor4(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName4(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 4,
  }));
}

export function rankVendorsBySpend4(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates4(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName4(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #5.
 */
export function normalizeVendorName5(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor5(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName5(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 5,
  }));
}

export function rankVendorsBySpend5(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates5(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName5(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #6.
 */
export function normalizeVendorName6(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor6(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName6(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 6,
  }));
}

export function rankVendorsBySpend6(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates6(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName6(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #7.
 */
export function normalizeVendorName7(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor7(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName7(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 7,
  }));
}

export function rankVendorsBySpend7(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates7(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName7(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #8.
 */
export function normalizeVendorName8(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor8(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName8(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 8,
  }));
}

export function rankVendorsBySpend8(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates8(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName8(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #9.
 */
export function normalizeVendorName9(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor9(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName9(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 9,
  }));
}

export function rankVendorsBySpend9(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates9(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName9(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #10.
 */
export function normalizeVendorName10(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor10(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName10(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 10,
  }));
}

export function rankVendorsBySpend10(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates10(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName10(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #11.
 */
export function normalizeVendorName11(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor11(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName11(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 11,
  }));
}

export function rankVendorsBySpend11(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates11(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName11(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #12.
 */
export function normalizeVendorName12(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor12(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName12(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 12,
  }));
}

export function rankVendorsBySpend12(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates12(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName12(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #13.
 */
export function normalizeVendorName13(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor13(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName13(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 13,
  }));
}

export function rankVendorsBySpend13(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates13(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName13(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #14.
 */
export function normalizeVendorName14(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor14(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName14(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 14,
  }));
}

export function rankVendorsBySpend14(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates14(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName14(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #15.
 */
export function normalizeVendorName15(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor15(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName15(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 15,
  }));
}

export function rankVendorsBySpend15(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates15(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName15(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #16.
 */
export function normalizeVendorName16(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor16(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName16(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 16,
  }));
}

export function rankVendorsBySpend16(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates16(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName16(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #17.
 */
export function normalizeVendorName17(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor17(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName17(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 17,
  }));
}

export function rankVendorsBySpend17(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates17(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName17(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #18.
 */
export function normalizeVendorName18(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor18(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName18(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 18,
  }));
}

export function rankVendorsBySpend18(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates18(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName18(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #19.
 */
export function normalizeVendorName19(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor19(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName19(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 19,
  }));
}

export function rankVendorsBySpend19(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates19(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName19(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #20.
 */
export function normalizeVendorName20(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor20(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName20(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 20,
  }));
}

export function rankVendorsBySpend20(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates20(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName20(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #21.
 */
export function normalizeVendorName21(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor21(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName21(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 21,
  }));
}

export function rankVendorsBySpend21(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates21(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName21(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #22.
 */
export function normalizeVendorName22(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor22(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName22(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 22,
  }));
}

export function rankVendorsBySpend22(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates22(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName22(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #23.
 */
export function normalizeVendorName23(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor23(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName23(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 23,
  }));
}

export function rankVendorsBySpend23(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates23(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName23(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #24.
 */
export function normalizeVendorName24(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor24(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName24(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 24,
  }));
}

export function rankVendorsBySpend24(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates24(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName24(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #25.
 */
export function normalizeVendorName25(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor25(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName25(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 25,
  }));
}

export function rankVendorsBySpend25(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates25(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName25(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #26.
 */
export function normalizeVendorName26(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor26(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName26(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 26,
  }));
}

export function rankVendorsBySpend26(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates26(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName26(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #27.
 */
export function normalizeVendorName27(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor27(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName27(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 27,
  }));
}

export function rankVendorsBySpend27(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates27(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName27(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #28.
 */
export function normalizeVendorName28(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor28(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName28(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 28,
  }));
}

export function rankVendorsBySpend28(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates28(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName28(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}


/**
 * Vendor management helper #29.
 */
export function normalizeVendorName29(name) {
  if (!name || typeof name !== "string") return "";
  return name.trim().replace(/\s+/g, " ");
}

export function groupApplicationsByVendor29(applications) {
  const map = {};
  (applications || []).forEach((app) => {
    const vendor = normalizeVendorName29(app.vendor) || "Unknown";
    if (!map[vendor]) map[vendor] = { vendor, applications: [], totalMonthly: 0, totalUsers: 0 };
    map[vendor].applications.push(app);
    map[vendor].totalMonthly += Number(app.monthlyCost) || 0;
    map[vendor].totalUsers += Number(app.numberOfUsers) || 0;
  });
  return Object.values(map).map((v) => ({
    ...v,
    totalMonthly: Math.round(v.totalMonthly * 100) / 100,
    appCount: v.applications.length,
    index: 29,
  }));
}

export function rankVendorsBySpend29(vendorGroups) {
  return [...(vendorGroups || [])].sort((a, b) => (b.totalMonthly || 0) - (a.totalMonthly || 0));
}

export function findVendorDuplicates29(applications) {
  const byNormalized = {};
  (applications || []).forEach((app) => {
    const key = normalizeVendorName29(app.vendor).toLowerCase();
    if (!byNormalized[key]) byNormalized[key] = [];
    byNormalized[key].push(app);
  });
  return Object.entries(byNormalized)
    .filter(([, apps]) => apps.length > 1)
    .map(([key, apps]) => ({ vendorKey: key, applications: apps, count: apps.length }));
}
