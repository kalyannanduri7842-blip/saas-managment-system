/**
 * Service layer: auditService
 * Encapsulates business operations and data access for the SaaS Management Platform.
 */
import { generateId } from "./storage.js";

export function listAll(items = []) {
  return Array.isArray(items) ? [...items] : [];
}

export function findById(items, id) {
  if (!Array.isArray(items) || !id) return null;
  return items.find((item) => item.id === id) || null;
}

export function create(items, payload, prefix = "item") {
  const entity = { ...payload, id: generateId(prefix), createdAt: new Date().toISOString() };
  return { items: [...(items || []), entity], entity };
}

export function update(items, id, updates) {
  if (!Array.isArray(items)) return { items: [], entity: null };
  let entity = null;
  const next = items.map((item) => {
    if (item.id === id) {
      entity = { ...item, ...updates, updatedAt: new Date().toISOString() };
      return entity;
    }
    return item;
  });
  return { items: next, entity };
}

export function remove(items, id) {
  if (!Array.isArray(items)) return { items: [], removed: null };
  const removed = items.find((i) => i.id === id) || null;
  return { items: items.filter((i) => i.id !== id), removed };
}

export function search(items, query, fields = ["name"]) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return listAll(items);
  return (items || []).filter((item) =>
    fields.some((f) => String(item[f] || "").toLowerCase().includes(q))
  );
}

export function filterBy(items, predicates = {}) {
  return (items || []).filter((item) =>
    Object.entries(predicates).every(([key, val]) => {
      if (val === null || val === undefined || val === "") return true;
      return item[key] === val;
    })
  );
}

export function paginate(items, page = 1, pageSize = 20) {
  const list = items || [];
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    data: list.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
  };
}

export function sortBy(items, field, direction = "asc") {
  return [...(items || [])].sort((a, b) => {
    const av = a[field];
    const bv = b[field];
    let cmp = 0;
    if (typeof av === "number" && typeof bv === "number") cmp = av - bv;
    else cmp = String(av ?? "").localeCompare(String(bv ?? ""));
    return direction === "desc" ? -cmp : cmp;
  });
}

export const auditService = {
  listAll,
  findById,
  create,
  update,
  remove,
  search,
  filterBy,
  paginate,
  sortBy,
};

export default auditService;
