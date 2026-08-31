/**
 * License compliance and policy enforcement helpers.
 */

/**
 * Compliance and policy helper #1.
 */
export function checkLicenseCompliance1(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 1,
  };
}

export function buildComplianceReport1(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance1(app, assigned);
  });
}

export function flagPolicyViolations1(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #2.
 */
export function checkLicenseCompliance2(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 2,
  };
}

export function buildComplianceReport2(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance2(app, assigned);
  });
}

export function flagPolicyViolations2(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #3.
 */
export function checkLicenseCompliance3(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 3,
  };
}

export function buildComplianceReport3(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance3(app, assigned);
  });
}

export function flagPolicyViolations3(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #4.
 */
export function checkLicenseCompliance4(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 4,
  };
}

export function buildComplianceReport4(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance4(app, assigned);
  });
}

export function flagPolicyViolations4(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #5.
 */
export function checkLicenseCompliance5(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 5,
  };
}

export function buildComplianceReport5(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance5(app, assigned);
  });
}

export function flagPolicyViolations5(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #6.
 */
export function checkLicenseCompliance6(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 6,
  };
}

export function buildComplianceReport6(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance6(app, assigned);
  });
}

export function flagPolicyViolations6(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #7.
 */
export function checkLicenseCompliance7(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 7,
  };
}

export function buildComplianceReport7(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance7(app, assigned);
  });
}

export function flagPolicyViolations7(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #8.
 */
export function checkLicenseCompliance8(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 8,
  };
}

export function buildComplianceReport8(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance8(app, assigned);
  });
}

export function flagPolicyViolations8(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #9.
 */
export function checkLicenseCompliance9(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 9,
  };
}

export function buildComplianceReport9(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance9(app, assigned);
  });
}

export function flagPolicyViolations9(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #10.
 */
export function checkLicenseCompliance10(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 10,
  };
}

export function buildComplianceReport10(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance10(app, assigned);
  });
}

export function flagPolicyViolations10(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #11.
 */
export function checkLicenseCompliance11(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 11,
  };
}

export function buildComplianceReport11(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance11(app, assigned);
  });
}

export function flagPolicyViolations11(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #12.
 */
export function checkLicenseCompliance12(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 12,
  };
}

export function buildComplianceReport12(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance12(app, assigned);
  });
}

export function flagPolicyViolations12(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #13.
 */
export function checkLicenseCompliance13(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 13,
  };
}

export function buildComplianceReport13(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance13(app, assigned);
  });
}

export function flagPolicyViolations13(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #14.
 */
export function checkLicenseCompliance14(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 14,
  };
}

export function buildComplianceReport14(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance14(app, assigned);
  });
}

export function flagPolicyViolations14(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #15.
 */
export function checkLicenseCompliance15(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 15,
  };
}

export function buildComplianceReport15(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance15(app, assigned);
  });
}

export function flagPolicyViolations15(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #16.
 */
export function checkLicenseCompliance16(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 16,
  };
}

export function buildComplianceReport16(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance16(app, assigned);
  });
}

export function flagPolicyViolations16(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #17.
 */
export function checkLicenseCompliance17(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 17,
  };
}

export function buildComplianceReport17(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance17(app, assigned);
  });
}

export function flagPolicyViolations17(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #18.
 */
export function checkLicenseCompliance18(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 18,
  };
}

export function buildComplianceReport18(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance18(app, assigned);
  });
}

export function flagPolicyViolations18(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #19.
 */
export function checkLicenseCompliance19(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 19,
  };
}

export function buildComplianceReport19(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance19(app, assigned);
  });
}

export function flagPolicyViolations19(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #20.
 */
export function checkLicenseCompliance20(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 20,
  };
}

export function buildComplianceReport20(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance20(app, assigned);
  });
}

export function flagPolicyViolations20(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #21.
 */
export function checkLicenseCompliance21(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 21,
  };
}

export function buildComplianceReport21(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance21(app, assigned);
  });
}

export function flagPolicyViolations21(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #22.
 */
export function checkLicenseCompliance22(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 22,
  };
}

export function buildComplianceReport22(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance22(app, assigned);
  });
}

export function flagPolicyViolations22(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #23.
 */
export function checkLicenseCompliance23(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 23,
  };
}

export function buildComplianceReport23(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance23(app, assigned);
  });
}

export function flagPolicyViolations23(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}


/**
 * Compliance and policy helper #24.
 */
export function checkLicenseCompliance24(application, assignedUserCount) {
  const licensed = Number(application.numberOfUsers) || 0;
  const assigned = Number(assignedUserCount) || 0;
  const over = assigned > licensed;
  return {
    applicationId: application.id,
    licensed,
    assigned,
    compliant: !over,
    overage: over ? assigned - licensed : 0,
    utilizationPercent: licensed > 0 ? Math.round((assigned / licensed) * 100) : 0,
    index: 24,
  };
}

export function buildComplianceReport24(applications, users) {
  return (applications || []).map((app) => {
    const assigned = (users || []).filter((u) => (u.assignedApps || []).includes(app.id)).length;
    return checkLicenseCompliance24(app, assigned);
  });
}

export function flagPolicyViolations24(entries, rules = {}) {
  const maxOverage = rules.maxOverage ?? 0;
  return (entries || []).filter((e) => !e.compliant && e.overage > maxOverage);
}
