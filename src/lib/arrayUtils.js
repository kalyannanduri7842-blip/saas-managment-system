/**
 * Array manipulation utilities for lists and tables.
 */

/**
 * Array utility #1.
 */
export function uniqueBy1(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy1(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk1(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate1(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #2.
 */
export function uniqueBy2(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy2(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk2(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate2(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #3.
 */
export function uniqueBy3(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy3(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk3(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate3(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #4.
 */
export function uniqueBy4(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy4(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk4(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate4(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #5.
 */
export function uniqueBy5(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy5(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk5(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate5(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #6.
 */
export function uniqueBy6(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy6(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk6(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate6(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #7.
 */
export function uniqueBy7(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy7(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk7(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate7(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #8.
 */
export function uniqueBy8(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy8(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk8(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate8(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #9.
 */
export function uniqueBy9(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy9(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk9(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate9(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #10.
 */
export function uniqueBy10(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy10(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk10(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate10(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #11.
 */
export function uniqueBy11(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy11(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk11(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate11(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #12.
 */
export function uniqueBy12(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy12(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk12(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate12(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #13.
 */
export function uniqueBy13(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy13(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk13(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate13(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #14.
 */
export function uniqueBy14(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy14(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk14(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate14(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #15.
 */
export function uniqueBy15(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy15(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk15(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate15(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #16.
 */
export function uniqueBy16(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy16(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk16(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate16(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #17.
 */
export function uniqueBy17(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy17(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk17(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate17(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #18.
 */
export function uniqueBy18(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy18(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk18(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate18(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #19.
 */
export function uniqueBy19(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy19(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk19(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate19(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #20.
 */
export function uniqueBy20(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy20(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk20(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate20(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #21.
 */
export function uniqueBy21(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy21(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk21(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate21(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #22.
 */
export function uniqueBy22(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy22(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk22(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate22(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #23.
 */
export function uniqueBy23(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy23(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk23(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate23(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #24.
 */
export function uniqueBy24(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy24(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk24(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate24(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #25.
 */
export function uniqueBy25(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy25(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk25(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate25(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #26.
 */
export function uniqueBy26(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy26(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk26(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate26(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #27.
 */
export function uniqueBy27(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy27(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk27(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate27(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #28.
 */
export function uniqueBy28(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy28(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk28(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate28(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #29.
 */
export function uniqueBy29(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy29(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk29(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate29(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #30.
 */
export function uniqueBy30(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy30(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk30(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate30(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #31.
 */
export function uniqueBy31(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy31(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk31(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate31(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #32.
 */
export function uniqueBy32(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy32(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk32(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate32(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #33.
 */
export function uniqueBy33(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy33(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk33(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate33(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #34.
 */
export function uniqueBy34(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy34(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk34(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate34(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}


/**
 * Array utility #35.
 */
export function uniqueBy35(items, key) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items.filter((item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function groupBy35(items, key) {
  if (!Array.isArray(items)) return {};
  return items.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    const group = k ?? "undefined";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

export function chunk35(items, size) {
  if (!Array.isArray(items) || size < 1) return [];
  const result = [];
  for (let j = 0; j < items.length; j += size) {
    result.push(items.slice(j, j + size));
  }
  return result;
}

export function paginate35(items, page = 1, pageSize = 10) {
  const list = Array.isArray(items) ? items : [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasNext: safePage < totalPages,
    hasPrev: safePage > 1,
  };
}
