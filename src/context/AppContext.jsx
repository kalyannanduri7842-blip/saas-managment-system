import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { storage, initializeData, generateId } from '../services/storage';
import { useAuth } from './AuthContext';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const { currentUser } = useAuth();
  const [applications, setApplications] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [users, setUsers] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [auditLogs, setAuditLogs] = useState([]);
  const [settings, setSettings] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [quickAddOpen, setQuickAddOpen] = useState(false);

  useEffect(() => {
    initializeData();
    setApplications(storage.getApplications());
    setSubscriptions(storage.getSubscriptions());
    setUsers(storage.getEmployees());
    setExpenses(storage.getExpenses());
    setNotifications(storage.getNotifications());
    setAuditLogs(storage.getAuditLogs());
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
    storage.setEmployees(data);
  }, []);

  const persistExpenses = useCallback((data) => {
    setExpenses(data);
    storage.setExpenses(data);
  }, []);

  const persistNotifs = useCallback((data) => {
    setNotifications(data);
    storage.setNotifications(data);
  }, []);

  const persistAudit = useCallback((data) => {
    setAuditLogs(data);
    storage.setAuditLogs(data);
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
    }, 4500);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const logActivity = useCallback((action, target, details) => {
    const authorName = currentUser?.name || 'Authorized Staff';
    const authorRole = currentUser?.role || 'Team Member';
    const newLog = {
      id: generateId('aud'),
      actor: authorName,
      role: authorRole,
      action,
      target,
      details,
      timestamp: new Date().toISOString(),
    };
    const updatedLogs = [newLog, ...auditLogs];
    persistAudit(updatedLogs);
    return newLog;
  }, [currentUser, auditLogs, persistAudit]);

  // Applications CRUD
  const addApplication = useCallback((app) => {
    const authorName = currentUser?.name || 'Sarah Jenkins';
    const authorRole = currentUser?.role || 'Admin';
    const newApp = {
      ...app,
      id: generateId('app'),
      monthlyCost: Number(app.monthlyCost) || 0,
      numberOfUsers: Number(app.numberOfUsers) || 1,
      addedBy: authorName,
      department: app.department || currentUser?.department || 'Engineering',
      createdAt: new Date().toISOString(),
    };

    persistApps([newApp, ...applications]);

    // Live Notification
    const notif = {
      id: generateId('notif'),
      title: 'New Application Added',
      message: `${authorName} (${authorRole}) added ${newApp.name} ($${newApp.monthlyCost}/mo)`,
      type: 'application',
      read: false,
      createdAt: new Date().toISOString(),
      author: authorName,
    };
    persistNotifs([notif, ...notifications]);

    // Live Audit Log
    logActivity('CREATE', newApp.name, `Added SaaS application with ${newApp.numberOfUsers} seats ($${newApp.monthlyCost}/mo)`);

    showToast(`"${newApp.name}" was added by ${authorName} and updated on the dashboard!`);
    return newApp;
  }, [currentUser, applications, notifications, persistApps, persistNotifs, logActivity, showToast]);

  const updateApplication = useCallback((id, updates) => {
    const targetApp = applications.find((a) => a.id === id);
    const authorName = currentUser?.name || 'Staff';
    persistApps(applications.map((a) => (a.id === id ? { ...a, ...updates } : a)));

    logActivity('UPDATE', targetApp?.name || 'Application', `Updated application attributes by ${authorName}`);
    showToast('Application updated successfully');
  }, [currentUser, applications, persistApps, logActivity, showToast]);

  const deleteApplication = useCallback((id) => {
    const targetApp = applications.find((a) => a.id === id);
    const authorName = currentUser?.name || 'Staff';
    persistApps(applications.filter((a) => a.id !== id));
    persistSubs(subscriptions.filter((s) => s.applicationId !== id));

    logActivity('DELETE', targetApp?.name || 'Application', `Decommissioned application by ${authorName}`);
    showToast('Application deleted successfully', 'info');
  }, [currentUser, applications, subscriptions, persistApps, persistSubs, logActivity, showToast]);

  // Subscriptions CRUD
  const addSubscription = useCallback((sub) => {
    const authorName = currentUser?.name || 'Sarah Jenkins';
    const newSub = {
      ...sub,
      id: generateId('sub'),
      cost: Number(sub.cost) || 0,
      seats: Number(sub.seats) || 1,
      usedSeats: Number(sub.usedSeats) || 1,
      addedBy: authorName,
      createdAt: new Date().toISOString(),
    };
    persistSubs([newSub, ...subscriptions]);

    const notif = {
      id: generateId('notif'),
      title: 'New Subscription Plan',
      message: `${authorName} activated ${newSub.planName} plan ($${newSub.cost})`,
      type: 'renewal',
      read: false,
      createdAt: new Date().toISOString(),
      author: authorName,
    };
    persistNotifs([notif, ...notifications]);

    logActivity('CREATE', `Subscription: ${newSub.planName}`, `Logged ${newSub.billingCycle} subscription renewal for $${newSub.cost}`);
    showToast(`Subscription plan added by ${authorName}`);
    return newSub;
  }, [currentUser, subscriptions, notifications, persistSubs, persistNotifs, logActivity, showToast]);

  const updateSubscription = useCallback((id, updates) => {
    persistSubs(subscriptions.map((s) => (s.id === id ? { ...s, ...updates } : s)));
    showToast('Subscription updated');
  }, [subscriptions, persistSubs, showToast]);

  const deleteSubscription = useCallback((id) => {
    persistSubs(subscriptions.filter((s) => s.id !== id));
    showToast('Subscription deleted', 'info');
  }, [subscriptions, persistSubs, showToast]);

  // Users CRUD
  const addUser = useCallback((user) => {
    const authorName = currentUser?.name || 'Staff';
    const newUser = {
      ...user,
      id: generateId('emp'),
      avatar: user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user.name)}`,
      status: user.status || 'Active',
      joinedDate: new Date().toISOString().split('T')[0],
      assignedApps: user.assignedApps || ['app-1'],
    };
    persistUsers([newUser, ...users]);

    const notif = {
      id: generateId('notif'),
      title: 'New Employee Onboarded',
      message: `${authorName} added ${newUser.name} to ${newUser.department}`,
      type: 'user',
      read: false,
      createdAt: new Date().toISOString(),
      author: authorName,
    };
    persistNotifs([notif, ...notifications]);

    logActivity('ONBOARD', newUser.name, `Added new employee to ${newUser.department} (${newUser.role})`);
    showToast(`Employee ${newUser.name} added successfully!`);
    return newUser;
  }, [currentUser, users, notifications, persistUsers, persistNotifs, logActivity, showToast]);

  const updateUser = useCallback((id, updates) => {
    persistUsers(users.map((u) => (u.id === id ? { ...u, ...updates } : u)));
    showToast('Employee profile updated');
  }, [users, persistUsers, showToast]);

  const deleteUser = useCallback((id) => {
    persistUsers(users.filter((u) => u.id !== id));
    showToast('Employee removed', 'info');
  }, [users, persistUsers, showToast]);

  // Expenses CRUD
  const addExpense = useCallback((exp) => {
    const authorName = currentUser?.name || 'Alex Mercer';
    const newExp = {
      ...exp,
      id: generateId('exp'),
      amount: Number(exp.amount) || 0,
      loggedBy: authorName,
      date: exp.date || new Date().toISOString().split('T')[0],
      paymentStatus: exp.paymentStatus || 'Paid',
    };
    persistExpenses([newExp, ...expenses]);

    const notif = {
      id: generateId('notif'),
      title: 'Expense Invoice Logged',
      message: `${authorName} logged invoice for ${newExp.title || newExp.category} ($${newExp.amount.toFixed(2)})`,
      type: 'payment',
      read: false,
      createdAt: new Date().toISOString(),
      author: authorName,
    };
    persistNotifs([notif, ...notifications]);

    logActivity('EXPENSE', newExp.title || 'Invoice', `Logged ${newExp.paymentStatus} expense payment of $${newExp.amount}`);
    showToast(`Invoice of $${newExp.amount.toFixed(2)} recorded on Dashboard`);
    return newExp;
  }, [currentUser, expenses, notifications, persistExpenses, persistNotifs, logActivity, showToast]);

  // Notification helpers
  const markNotificationRead = useCallback((id) => {
    persistNotifs(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)));
  }, [notifications, persistNotifs]);

  const markAllNotificationsRead = useCallback(() => {
    persistNotifs(notifications.map((n) => ({ ...n, read: true })));
    showToast('All notifications marked as read');
  }, [notifications, persistNotifs, showToast]);

  const clearNotifications = useCallback(() => {
    persistNotifs([]);
    showToast('Notifications cleared');
  }, [persistNotifs, showToast]);

  const toggleTheme = useCallback(() => {
    const currentTheme = settings?.appearance?.theme || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    persistSettings({
      ...settings,
      appearance: { ...settings?.appearance, theme: newTheme },
    });
  }, [settings, persistSettings]);

  return (
    <AppContext.Provider
      value={{
        applications,
        subscriptions,
        users,
        expenses,
        notifications,
        auditLogs,
        settings,
        toasts,
        loading,
        sidebarOpen,
        quickAddOpen,
        setSidebarOpen,
        setQuickAddOpen,
        showToast,
        removeToast,
        addApplication,
        updateApplication,
        deleteApplication,
        addSubscription,
        updateSubscription,
        deleteSubscription,
        addUser,
        updateUser,
        deleteUser,
        addExpense,
        markNotificationRead,
        markAllNotificationsRead,
        clearNotifications,
        updateSettings: persistSettings,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
