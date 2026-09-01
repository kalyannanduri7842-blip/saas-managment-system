import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  AppWindow,
  CreditCard,
  Users,
  Receipt,
  BarChart3,
  Bell,
  Settings,
  X,
  LogOut,
  Layers,
  FileText,
  Activity,
  Puzzle,
  Wallet,
  Shield,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Executive Dashboard' },
  { to: '/applications', icon: AppWindow, label: 'Applications' },
  { to: '/subscriptions', icon: CreditCard, label: 'Subscriptions' },
  { to: '/users', icon: Users, label: 'Employees & Licenses' },
  { to: '/expenses', icon: Receipt, label: 'Expenses & Invoices' },
  { to: '/reports', icon: BarChart3, label: 'Financial Reports' },
  { to: '/audit-log', icon: FileText, label: 'Live Audit Log' },
  { to: '/activity', icon: Activity, label: 'Activity Feed' },
  { to: '/integrations', icon: Puzzle, label: 'Integrations' },
  { to: '/billing-history', icon: Wallet, label: 'Billing History' },
  { to: '/notifications', icon: Bell, label: 'Notifications' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen, notifications } = useApp();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const unread = notifications.filter((n) => !n.read).length;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 flex flex-col transition-transform duration-200 lg:translate-x-0 lg:static lg:z-auto ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Banner */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/50">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-500/20">
              <Layers className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-gray-900 dark:text-white leading-tight">EnterpriseFlow</p>
              <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                Multi-Employee SaaS
              </p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden rounded-lg p-1 text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-200'
                }`
              }
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="flex-1 truncate">{label}</span>
              {label === 'Notifications' && unread > 0 && (
                <span className="flex h-4 min-w-[18px] items-center justify-center rounded-full bg-rose-500 px-1 text-[9px] font-bold text-white">
                  {unread}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Logged in Employee Card */}
        <div className="border-t border-gray-200 dark:border-slate-800 p-3 bg-gray-50/80 dark:bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <img
              src={currentUser?.avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'}
              alt={currentUser?.name}
              className="w-8 h-8 rounded-lg object-cover ring-1 ring-emerald-500/40 shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-gray-900 dark:text-white truncate">
                {currentUser?.name || 'Sarah Jenkins'}
              </p>
              <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold truncate">
                {currentUser?.role || 'Admin'}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="rounded-lg p-1.5 text-gray-400 hover:text-rose-500 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
              title="Sign Out"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
