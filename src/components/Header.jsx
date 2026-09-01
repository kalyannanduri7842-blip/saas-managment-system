import { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Bell, Search, Sun, Moon, X, Plus, LogOut, User, CheckCircle2, Shield, ChevronDown, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

export default function Header({ title }) {
  const {
    setSidebarOpen,
    notifications,
    markNotificationRead,
    markAllNotificationsRead,
    toggleTheme,
    settings,
    applications,
    users,
    subscriptions,
    setQuickAddOpen,
  } = useApp();

  const { currentUser, employees, loginAs, logout } = useAuth();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [notifDropdown, setNotifDropdown] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  const navigate = useNavigate();
  const unread = notifications.filter((n) => !n.read).length;
  const isDark = settings?.appearance?.theme === 'dark';

  const notifRef = useRef(null);
  const userRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifDropdown(false);
      }
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const items = [];
    applications.forEach((a) => {
      if (a.name.toLowerCase().includes(q) || a.vendor.toLowerCase().includes(q)) {
        items.push({ type: 'Application', label: a.name, path: `/applications/${a.id}` });
      }
    });
    users.forEach((u) => {
      if (u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)) {
        items.push({ type: 'User', label: u.name, path: `/users/${u.id}` });
      }
    });
    subscriptions.forEach((s) => {
      const app = applications.find((a) => a.id === s.applicationId);
      if (app && (app.name.toLowerCase().includes(q) || s.planName.toLowerCase().includes(q))) {
        items.push({ type: 'Subscription', label: `${app.name} – ${s.planName}`, path: '/subscriptions' });
      }
    });
    return items.slice(0, 8);
  }, [query, applications, users, subscriptions]);

  const handleSwitchUser = (emp) => {
    loginAs(emp.id);
    setUserDropdown(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 sm:gap-4 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 lg:px-6">
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden rounded-xl p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="flex items-center gap-2 flex-1 min-w-0">
        <h1 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white truncate">{title}</h1>
        <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          Live Sync
        </span>
      </div>

      {/* Global Desktop Search */}
      <div className="relative hidden md:block w-64 lg:w-72">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setSearchOpen(true)}
          onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
          placeholder="Search apps, staff, billing..."
          className="w-full bg-gray-100 dark:bg-slate-950 border border-transparent dark:border-slate-800 rounded-xl pl-9 pr-3.5 py-1.5 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition"
        />
        {searchOpen && results.length > 0 && (
          <div className="absolute top-full mt-1.5 w-full rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl py-1.5 z-50 overflow-hidden">
            {results.map((r, i) => (
              <button
                key={i}
                onClick={() => {
                  navigate(r.path);
                  setQuery('');
                }}
                className="flex w-full items-center gap-2 px-3.5 py-2 text-xs hover:bg-gray-50 dark:hover:bg-slate-800/80 text-left transition"
              >
                <span className="text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400 w-16">{r.type}</span>
                <span className="text-gray-900 dark:text-white truncate font-medium">{r.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Quick Add Data Action Button */}
      <button
        onClick={() => setQuickAddOpen(true)}
        className="px-3 py-1.5 sm:px-3.5 sm:py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/20 flex items-center gap-1.5 transition"
      >
        <Plus className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Add Data</span>
      </button>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="rounded-xl p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
        title="Toggle dark/light mode"
      >
        {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
      </button>

      {/* Real-time Notification Bell Dropdown */}
      <div className="relative" ref={notifRef}>
        <button
          onClick={() => setNotifDropdown(!notifDropdown)}
          className="relative rounded-xl p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          title="Notification Center"
        >
          <Bell className="h-4 w-4" />
          {unread > 0 && (
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-extrabold text-white animate-pulse">
              {unread > 9 ? '9+' : unread}
            </span>
          )}
        </button>

        {notifDropdown && (
          <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/50">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-900 dark:text-white">Live Activity Notifications</span>
                <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                  {unread} New
                </span>
              </div>
              {unread > 0 && (
                <button
                  onClick={markAllNotificationsRead}
                  className="text-[11px] text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                >
                  Mark all read
                </button>
              )}
            </div>

            <div className="max-h-80 overflow-y-auto divide-y divide-gray-100 dark:divide-slate-800/60">
              {notifications.length === 0 ? (
                <div className="p-6 text-center text-xs text-gray-400">No active notifications</div>
              ) : (
                notifications.slice(0, 7).map((n) => (
                  <div
                    key={n.id}
                    onClick={() => markNotificationRead(n.id)}
                    className={`p-3.5 text-xs transition cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-800/60 ${
                      !n.read ? 'bg-emerald-500/5' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-bold text-gray-900 dark:text-white">{n.title}</span>
                      <span className="text-[10px] text-gray-400 shrink-0">
                        {new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="mt-1 text-gray-600 dark:text-slate-300 leading-relaxed text-[11px]">{n.message}</p>
                  </div>
                ))
              )}
            </div>

            <div className="p-2.5 border-t border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/50 text-center">
              <button
                onClick={() => {
                  setNotifDropdown(false);
                  navigate('/notifications');
                }}
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                View Full Notification Audit Trail ➔
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Active Logged-In Employee Profile & Quick Switcher Dropdown */}
      <div className="relative" ref={userRef}>
        <button
          onClick={() => setUserDropdown(!userDropdown)}
          className="flex items-center gap-2 p-1 pl-1.5 pr-2 rounded-xl bg-gray-100 dark:bg-slate-800/80 hover:bg-gray-200 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-700/60 transition"
        >
          <img
            src={currentUser?.avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'}
            alt={currentUser?.name}
            className="w-7 h-7 rounded-lg object-cover ring-1 ring-emerald-500/40 shrink-0"
          />
          <div className="hidden sm:block text-left">
            <div className="text-xs font-bold text-gray-900 dark:text-white leading-tight">
              {currentUser?.name || 'Sarah Jenkins'}
            </div>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold leading-none">
              {currentUser?.role || 'Admin'}
            </div>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400 ml-0.5" />
        </button>

        {userDropdown && (
          <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150 text-xs">
            {/* Current Active Employee Info */}
            <div className="p-4 border-b border-gray-100 dark:border-slate-800 bg-gray-50/70 dark:bg-slate-950/70">
              <div className="flex items-center gap-3">
                <img
                  src={currentUser?.avatar}
                  alt={currentUser?.name}
                  className="w-10 h-10 rounded-xl object-cover ring-2 ring-emerald-500"
                />
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-gray-900 dark:text-white truncate">{currentUser?.name}</div>
                  <div className="text-[11px] text-gray-400 truncate">{currentUser?.email}</div>
                  <div className="mt-0.5 inline-block px-2 py-0.2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">
                    {currentUser?.department} • {currentUser?.role}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Switch Employee List */}
            <div className="p-2 border-b border-gray-100 dark:border-slate-800">
              <div className="px-2 py-1 text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                ⚡ Quick Switch Employee Account
              </div>
              <div className="space-y-1 mt-1 max-h-44 overflow-y-auto">
                {employees.map((emp) => (
                  <button
                    key={emp.id}
                    onClick={() => handleSwitchUser(emp)}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition ${
                      emp.id === currentUser?.id
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold'
                        : 'hover:bg-gray-50 dark:hover:bg-slate-800/80 text-gray-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <img src={emp.avatar} alt={emp.name} className="w-5 h-5 rounded-md object-cover" />
                      <span className="truncate">{emp.name}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 shrink-0">{emp.role}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Actions */}
            <div className="p-1.5 space-y-0.5">
              <button
                onClick={() => {
                  setUserDropdown(false);
                  navigate('/settings');
                }}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 text-left transition"
              >
                <User className="w-4 h-4 text-gray-400" />
                <span>My Profile & Preferences</span>
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 text-left font-semibold transition"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out of Platform</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
