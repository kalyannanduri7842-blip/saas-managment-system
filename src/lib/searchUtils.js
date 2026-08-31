/**
 * Client-side search indexing and highlighting.
 */

/**
 * Search index helper #1.
 */
export function buildSearchIndex1(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex1(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch1(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #2.
 */
export function buildSearchIndex2(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex2(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch2(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #3.
 */
export function buildSearchIndex3(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex3(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch3(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #4.
 */
export function buildSearchIndex4(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex4(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch4(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #5.
 */
export function buildSearchIndex5(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex5(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch5(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #6.
 */
export function buildSearchIndex6(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex6(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch6(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #7.
 */
export function buildSearchIndex7(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex7(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch7(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #8.
 */
export function buildSearchIndex8(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex8(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch8(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #9.
 */
export function buildSearchIndex9(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex9(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch9(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #10.
 */
export function buildSearchIndex10(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex10(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch10(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #11.
 */
export function buildSearchIndex11(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex11(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch11(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #12.
 */
export function buildSearchIndex12(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex12(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch12(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #13.
 */
export function buildSearchIndex13(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex13(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch13(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #14.
 */
export function buildSearchIndex14(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex14(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch14(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #15.
 */
export function buildSearchIndex15(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex15(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch15(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #16.
 */
export function buildSearchIndex16(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex16(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch16(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #17.
 */
export function buildSearchIndex17(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex17(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch17(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #18.
 */
export function buildSearchIndex18(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex18(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch18(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #19.
 */
export function buildSearchIndex19(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex19(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch19(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #20.
 */
export function buildSearchIndex20(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex20(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch20(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #21.
 */
export function buildSearchIndex21(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex21(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch21(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #22.
 */
export function buildSearchIndex22(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex22(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch22(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #23.
 */
export function buildSearchIndex23(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex23(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch23(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #24.
 */
export function buildSearchIndex24(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex24(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch24(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #25.
 */
export function buildSearchIndex25(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex25(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch25(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #26.
 */
export function buildSearchIndex26(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex26(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch26(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #27.
 */
export function buildSearchIndex27(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex27(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch27(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #28.
 */
export function buildSearchIndex28(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex28(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch28(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #29.
 */
export function buildSearchIndex29(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex29(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch29(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}


/**
 * Search index helper #30.
 */
export function buildSearchIndex30(items, fields) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const tokens = fields
      .map((f) => item[f])
      .filter((v) => v != null)
      .map((v) => String(v).toLowerCase())
      .join(" ");
    return { item, tokens, id: item.id };
  });
}

export function searchIndex30(index, query, limit = 20) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const results = [];
  for (const entry of index) {
    const score = terms.reduce((s, t) => s + (entry.tokens.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ ...entry, score });
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.item);
}

export function highlightMatch30(text, query) {
  if (!text || !query) return text || "";
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(" + q + ")", "gi");
  return String(text).replace(re, "<mark>$1</mark>");
}
