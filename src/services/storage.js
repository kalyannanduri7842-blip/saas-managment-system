import {
  sampleApplications,
  sampleUsers,
  sampleSubscriptions,
  sampleExpenses,
  sampleNotifications,
  defaultSettings,
} from '../data/sampleData';

const KEYS = {
  applications: 'saas_applications',
  subscriptions: 'saas_subscriptions',
  users: 'saas_users',
  expenses: 'saas_expenses',
  notifications: 'saas_notifications',
  settings: 'saas_settings',
  initialized: 'saas_initialized',
};

function get(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function initializeData() {
  if (!localStorage.getItem(KEYS.initialized)) {
    set(KEYS.applications, sampleApplications);
    set(KEYS.subscriptions, sampleSubscriptions);
    set(KEYS.users, sampleUsers);
    set(KEYS.expenses, sampleExpenses);
    set(KEYS.notifications, sampleNotifications);
    set(KEYS.settings, defaultSettings);
    localStorage.setItem(KEYS.initialized, 'true');
  }
}

export const storage = {
  getApplications: () => get(KEYS.applications, []),
  setApplications: (data) => set(KEYS.applications, data),
  getSubscriptions: () => get(KEYS.subscriptions, []),
  setSubscriptions: (data) => set(KEYS.subscriptions, data),
  getUsers: () => get(KEYS.users, []),
  setUsers: (data) => set(KEYS.users, data),
  getExpenses: () => get(KEYS.expenses, []),
  setExpenses: (data) => set(KEYS.expenses, data),
  getNotifications: () => get(KEYS.notifications, []),
  setNotifications: (data) => set(KEYS.notifications, data),
  getSettings: () => get(KEYS.settings, defaultSettings),
  setSettings: (data) => set(KEYS.settings, data),
};

export function generateId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
