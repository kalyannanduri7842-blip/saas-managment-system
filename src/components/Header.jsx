import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Bell, Search, Sun, Moon, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Header({ title }) {
  const { setSidebarOpen, notifications, toggleTheme, settings, applications, users, subscriptions } = useApp();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const unread = notifications.filter((n) => !n.read).length;
  const isDark = settings?.appearance?.theme === 'dark';

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

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 lg:px-6">
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <Menu className="h-5 w-5" />
      </button>

      <h1 className="text-lg font-semibold text-gray-900 dark:text-white flex-1 truncate">{title}</h1>

      {/* Desktop search */}
      <div className="relative hidden md:block w-72">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setSearchOpen(true)}
          onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
          placeholder="Search apps, users..."
          className="input pl-9 py-1.5"
        />
        {searchOpen && results.length > 0 && (
          <div className="absolute top-full mt-1 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg py-1 z-50">
            {results.map((r, i) => (
              <button
                key={i}
                onClick={() => {
                  navigate(r.path);
                  setQuery('');
                }}
                className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 text-left"
              >
                <span className="text-xs text-gray-400 w-20">{r.type}</span>
                <span className="text-gray-900 dark:text-white truncate">{r.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Mobile search toggle */}
      <button
        onClick={() => setSearchOpen(!searchOpen)}
        className="md:hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
      </button>

      <button
        onClick={toggleTheme}
        className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
        title="Toggle theme"
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      <button
        onClick={() => navigate('/notifications')}
        className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <Bell className="h-5 w-5" />
        {unread > 0 && (
          <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
            {unread > 9 ? '9+' : unread}
          </span>
        )}
      </button>

      <div className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 text-sm font-semibold">
        {(settings?.profile?.name || 'U').charAt(0)}
      </div>

      {/* Mobile search dropdown */}
      {searchOpen && (
        <div className="absolute top-16 left-0 right-0 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 md:hidden z-40">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search apps, users..."
            className="input"
            autoFocus
          />
          {results.length > 0 && (
            <div className="mt-2 space-y-1">
              {results.map((r, i) => (
                <button
                  key={i}
                  onClick={() => {
                    navigate(r.path);
                    setQuery('');
                    setSearchOpen(false);
                  }}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 text-left"
                >
                  <span className="text-xs text-gray-400 w-20">{r.type}</span>
                  <span className="truncate">{r.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
