import {
  sampleApplications,
  sampleEmployees,
  sampleSubscriptions,
  sampleExpenses,
  sampleNotifications,
  sampleAuditLogs,
  defaultSettings,
} from '../data/sampleData';

const KEYS = {
  applications: 'saas_applications',
  subscriptions: 'saas_subscriptions',
  employees: 'saas_employees',
  currentUser: 'saas_current_user',
  expenses: 'saas_expenses',
  notifications: 'saas_notifications',
  auditLogs: 'saas_audit_logs',
  settings: 'saas_settings',
  initialized: 'saas_initialized_v2',
};

function get(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw || typeof raw !== 'string') return fallback;
    const trimmed = raw.trim();
    if (trimmed.startsWith('<') || trimmed.startsWith('<!DOCTYPE') || trimmed.startsWith('<html>')) {
      return fallback;
    }
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function set(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Failed to persist to localStorage', e);
  }
}

export function initializeData() {
  if (!localStorage.getItem(KEYS.initialized)) {
    set(KEYS.applications, sampleApplications);
    set(KEYS.subscriptions, sampleSubscriptions);
    set(KEYS.employees, sampleEmployees);
    set(KEYS.currentUser, sampleEmployees[0]);
    set(KEYS.expenses, sampleExpenses);
    set(KEYS.notifications, sampleNotifications);
    set(KEYS.auditLogs, sampleAuditLogs);
    set(KEYS.settings, defaultSettings);
    localStorage.setItem(KEYS.initialized, 'true');
  }
}

export const storage = {
  getApplications: () => get(KEYS.applications, sampleApplications),
  setApplications: (data) => set(KEYS.applications, data),
  getSubscriptions: () => get(KEYS.subscriptions, sampleSubscriptions),
  setSubscriptions: (data) => set(KEYS.subscriptions, data),
  getEmployees: () => get(KEYS.employees, sampleEmployees),
  setEmployees: (data) => set(KEYS.employees, data),
  getCurrentUser: () => get(KEYS.currentUser, sampleEmployees[0]),
  setCurrentUser: (data) => set(KEYS.currentUser, data),
  getExpenses: () => get(KEYS.expenses, sampleExpenses),
  setExpenses: (data) => set(KEYS.expenses, data),
  getNotifications: () => get(KEYS.notifications, sampleNotifications),
  setNotifications: (data) => set(KEYS.notifications, data),
  getAuditLogs: () => get(KEYS.auditLogs, sampleAuditLogs),
  setAuditLogs: (data) => set(KEYS.auditLogs, data),
  getSettings: () => get(KEYS.settings, defaultSettings),
  setSettings: (data) => set(KEYS.settings, data),
};

export function generateId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
