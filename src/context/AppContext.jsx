import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { storage, initializeData, generateId } from '../services/storage';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [applications, setApplications] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [users, setUsers] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [settings, setSettings] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    initializeData();
    setApplications(storage.getApplications());
    setSubscriptions(storage.getSubscriptions());
    setUsers(storage.getUsers());
    setExpenses(storage.getExpenses());
    setNotifications(storage.getNotifications());
    const s = storage.getSettings();
    setSettings(s);
    if (s?.appearance?.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setLoading(false);
  }, []);

  const persistApps = useCallback((data) => {
    setApplications(data);
    storage.setApplications(data);
  }, []);

  const persistSubs = useCallback((data) => {
    setSubscriptions(data);
    storage.setSubscriptions(data);
  }, []);

  const persistUsers = useCallback((data) => {
    setUsers(data);
    storage.setUsers(data);
  }, []);

  const persistExpenses = useCallback((data) => {
    setExpenses(data);
    storage.setExpenses(data);
  }, []);

  const persistNotifs = useCallback((data) => {
    setNotifications(data);
    storage.setNotifications(data);
  }, []);

  const persistSettings = useCallback((data) => {
    setSettings(data);
    storage.setSettings(data);
    if (data?.appearance?.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const showToast = useCallback((message, type = 'success') => {
    const id = generateId('toast');
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Applications CRUD
  const addApplication = useCallback((app) => {
    const newApp = { ...app, id: generateId('app') };
    persistApps([...applications, newApp]);
    const notif = {
      id: generateId('notif'),
      title: 'New Application Added',
      message: `${app.name} was added to your SaaS portfolio`,
      type: 'application',
      read: false,
      createdAt: new Date().toISOString(),
    };
    persistNotifs([notif, ...notifications]);
    showToast('Application added successfully');
    return newApp;
  }, [applications, notifications, persistApps, persistNotifs, showToast]);

  const updateApplication = useCallback((id, updates) => {
    persistApps(applications.map((a) => (a.id === id ? { ...a, ...updates } : a)));
    showToast('Application updated successfully');
  }, [applications, persistApps, showToast]);

  const deleteApplication = useCallback((id) => {
    persistApps(applications.filter((a) => a.id !== id));
    persistSubs(subscriptions.filter((s) => s.applicationId !== id));
    persistUsers(users.map((u) => ({
      ...u,
      assignedApps: (u.assignedApps || []).filter((aid) => aid !== id),
    })));
    showToast('Application deleted successfully');
  }, [applications, subscriptions, users, persistApps, persistSubs, persistUsers, showToast]);

  // Subscriptions CRUD
  const addSubscription = useCallback((sub) => {
    const newSub = { ...sub, id: generateId('sub') };
    persistSubs([...subscriptions, newSub]);
    showToast('Subscription added successfully');
    return newSub;
  }, [subscriptions, persistSubs, showToast]);

  const updateSubscription = useCallback((id, updates) => {
    persistSubs(subscriptions.map((s) => (s.id === id ? { ...s, ...updates } : s)));
    showToast('Subscription updated successfully');
  }, [subscriptions, persistSubs, showToast]);

  const deleteSubscription = useCallback((id) => {
    persistSubs(subscriptions.filter((s) => s.id !== id));
    showToast('Subscription deleted successfully');
  }, [subscriptions, persistSubs, showToast]);

  // Users CRUD
  const addUser = useCallback((user) => {
    const newUser = { ...user, id: generateId('user'), assignedApps: user.assignedApps || [] };
    persistUsers([...users, newUser]);
    showToast('User added successfully');
    return newUser;
  }, [users, persistUsers, showToast]);

  const updateUser = useCallback((id, updates) => {
    persistUsers(users.map((u) => (u.id === id ? { ...u, ...updates } : u)));
    showToast('User updated successfully');
  }, [users, persistUsers, showToast]);

  const deleteUser = useCallback((id) => {
    persistUsers(users.filter((u) => u.id !== id));
    showToast('User deleted successfully');
  }, [users, persistUsers, showToast]);

  const assignAppsToUser = useCallback((userId, appIds) => {
    persistUsers(users.map((u) => (u.id === userId ? { ...u, assignedApps: appIds } : u)));
    showToast('Applications assigned successfully');
  }, [users, persistUsers, showToast]);

  // Expenses
  const addExpense = useCallback((exp) => {
    const newExp = { ...exp, id: generateId('exp') };
    persistExpenses([...expenses, newExp]);
    showToast('Expense added successfully');
    return newExp;
  }, [expenses, persistExpenses, showToast]);

  const deleteExpense = useCallback((id) => {
    persistExpenses(expenses.filter((e) => e.id !== id));
    showToast('Expense deleted successfully');
  }, [expenses, persistExpenses, showToast]);

  // Notifications
  const markNotificationRead = useCallback((id) => {
    persistNotifs(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)));
  }, [notifications, persistNotifs]);

  const markAllNotificationsRead = useCallback(() => {
    persistNotifs(notifications.map((n) => ({ ...n, read: true })));
    showToast('All notifications marked as read');
  }, [notifications, persistNotifs, showToast]);

  const deleteNotification = useCallback((id) => {
    persistNotifs(notifications.filter((n) => n.id !== id));
  }, [notifications, persistNotifs]);

  const toggleTheme = useCallback(() => {
    if (!settings) return;
    const newTheme = settings.appearance.theme === 'dark' ? 'light' : 'dark';
    persistSettings({
      ...settings,
      appearance: { ...settings.appearance, theme: newTheme },
    });
  }, [settings, persistSettings]);

  const value = {
    applications,
    subscriptions,
    users,
    expenses,
    notifications,
    settings,
    toasts,
    loading,
    sidebarOpen,
    setSidebarOpen,
    addApplication,
    updateApplication,
    deleteApplication,
    addSubscription,
    updateSubscription,
    deleteSubscription,
    addUser,
    updateUser,
    deleteUser,
    assignAppsToUser,
    addExpense,
    deleteExpense,
    markNotificationRead,
    markAllNotificationsRead,
    deleteNotification,
    persistSettings,
    toggleTheme,
    showToast,
    removeToast,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
