/**
 * Data table column configuration helpers.
 */

/**
 * Table column config helper #1.
 */
export function createColumn1(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 1,
  };
}

export function visibleColumns1(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority1(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #2.
 */
export function createColumn2(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 2,
  };
}

export function visibleColumns2(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority2(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #3.
 */
export function createColumn3(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 3,
  };
}

export function visibleColumns3(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority3(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #4.
 */
export function createColumn4(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 4,
  };
}

export function visibleColumns4(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority4(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #5.
 */
export function createColumn5(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 5,
  };
}

export function visibleColumns5(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority5(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #6.
 */
export function createColumn6(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 6,
  };
}

export function visibleColumns6(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority6(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #7.
 */
export function createColumn7(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 7,
  };
}

export function visibleColumns7(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority7(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #8.
 */
export function createColumn8(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 8,
  };
}

export function visibleColumns8(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority8(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #9.
 */
export function createColumn9(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 9,
  };
}

export function visibleColumns9(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority9(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #10.
 */
export function createColumn10(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 10,
  };
}

export function visibleColumns10(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority10(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #11.
 */
export function createColumn11(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 11,
  };
}

export function visibleColumns11(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority11(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #12.
 */
export function createColumn12(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 12,
  };
}

export function visibleColumns12(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority12(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #13.
 */
export function createColumn13(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 13,
  };
}

export function visibleColumns13(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority13(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #14.
 */
export function createColumn14(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 14,
  };
}

export function visibleColumns14(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority14(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #15.
 */
export function createColumn15(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 15,
  };
}

export function visibleColumns15(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority15(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #16.
 */
export function createColumn16(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 16,
  };
}

export function visibleColumns16(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority16(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #17.
 */
export function createColumn17(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 17,
  };
}

export function visibleColumns17(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority17(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #18.
 */
export function createColumn18(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 18,
  };
}

export function visibleColumns18(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority18(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #19.
 */
export function createColumn19(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 19,
  };
}

export function visibleColumns19(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority19(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #20.
 */
export function createColumn20(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 20,
  };
}

export function visibleColumns20(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority20(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #21.
 */
export function createColumn21(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 21,
  };
}

export function visibleColumns21(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority21(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #22.
 */
export function createColumn22(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 22,
  };
}

export function visibleColumns22(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority22(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #23.
 */
export function createColumn23(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 23,
  };
}

export function visibleColumns23(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority23(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #24.
 */
export function createColumn24(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 24,
  };
}

export function visibleColumns24(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority24(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}


/**
 * Table column config helper #25.
 */
export function createColumn25(key, label, options = {}) {
  return {
    key,
    label,
    sortable: options.sortable !== false,
    filterable: options.filterable || false,
    width: options.width || "auto",
    align: options.align || "left",
    render: options.render || null,
    hidden: options.hidden || false,
    priority: options.priority || 25,
  };
}

export function visibleColumns25(columns, breakpoint = "desktop") {
  return (columns || []).filter((col) => {
    if (col.hidden) return false;
    if (breakpoint === "mobile" && col.priority > 3) return false;
    if (breakpoint === "tablet" && col.priority > 5) return false;
    return true;
  });
}

export function sortColumnsByPriority25(columns) {
  return [...(columns || [])].sort((a, b) => (a.priority || 99) - (b.priority || 99));
}
