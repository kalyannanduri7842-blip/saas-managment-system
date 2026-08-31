/**
 * Multi-field sorting utilities for data tables.
 */

/**
 * Sorting helper #1 for table columns.
 */
export function sortByField1(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort1(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #2 for table columns.
 */
export function sortByField2(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort2(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #3 for table columns.
 */
export function sortByField3(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort3(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #4 for table columns.
 */
export function sortByField4(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort4(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #5 for table columns.
 */
export function sortByField5(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort5(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #6 for table columns.
 */
export function sortByField6(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort6(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #7 for table columns.
 */
export function sortByField7(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort7(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #8 for table columns.
 */
export function sortByField8(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort8(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #9 for table columns.
 */
export function sortByField9(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort9(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #10 for table columns.
 */
export function sortByField10(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort10(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #11 for table columns.
 */
export function sortByField11(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort11(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #12 for table columns.
 */
export function sortByField12(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort12(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #13 for table columns.
 */
export function sortByField13(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort13(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #14 for table columns.
 */
export function sortByField14(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort14(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #15 for table columns.
 */
export function sortByField15(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort15(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #16 for table columns.
 */
export function sortByField16(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort16(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #17 for table columns.
 */
export function sortByField17(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort17(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #18 for table columns.
 */
export function sortByField18(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort18(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #19 for table columns.
 */
export function sortByField19(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort19(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #20 for table columns.
 */
export function sortByField20(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort20(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #21 for table columns.
 */
export function sortByField21(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort21(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #22 for table columns.
 */
export function sortByField22(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort22(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #23 for table columns.
 */
export function sortByField23(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort23(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #24 for table columns.
 */
export function sortByField24(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort24(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #25 for table columns.
 */
export function sortByField25(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort25(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #26 for table columns.
 */
export function sortByField26(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort26(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #27 for table columns.
 */
export function sortByField27(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort27(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #28 for table columns.
 */
export function sortByField28(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort28(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #29 for table columns.
 */
export function sortByField29(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort29(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}


/**
 * Sorting helper #30 for table columns.
 */
export function sortByField30(items, field, direction = "asc") {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    if (av == null && bv == null) return 0;
    if (av == null) return direction === "asc" ? 1 : -1;
    if (bv == null) return direction === "asc" ? -1 : 1;
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else if (av instanceof Date && bv instanceof Date) cmp = av - bv;
    else cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: "base" });
    return direction === "desc" ? -cmp : cmp;
  });
}

export function multiSort30(items, specs) {
  if (!Array.isArray(items) || !Array.isArray(specs) || specs.length === 0) return items || [];
  return [...items].sort((a, b) => {
    for (const { field, direction = "asc" } of specs) {
      const av = a[field];
      const bv = b[field];
      let cmp = 0;
      if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
      else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
      if (cmp !== 0) return direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}
