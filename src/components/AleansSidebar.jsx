import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  Building2,
  ShieldCheck,
  Users,
  Briefcase,
  Award,
  Landmark,
  Receipt,
  Boxes,
  ShoppingCart,
  Target,
  Cog,
  Headphones,
  FolderArchive,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Search,
  LogOut,
  X
} from 'lucide-react';
import { useAleans } from '../context/AleansContext';

export const navModules = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, badge: null },
  { to: '/employee', label: 'My Portal / Self Service', icon: User, badge: null },
  { to: '/organization', label: 'Organization', icon: Building2, badge: null },
  { to: '/users', label: 'Users & Roles', icon: ShieldCheck, badge: null },
  { to: '/hr', label: 'HR & Attendance', icon: Users, badge: null },
  { to: '/recruitment', label: 'Recruitment & ATS', icon: Briefcase, badge: null },
  { to: '/performance', label: 'Performance & OKR', icon: Award, badge: null },
  { to: '/finance', label: 'Finance & Accounts', icon: Landmark, badge: null },
  { to: '/payroll', label: 'Statutory Payroll', icon: Receipt, badge: null },
  { to: '/inventory', label: 'Inventory & Stock', icon: Boxes, badge: null },
  { to: '/procurement', label: 'Procurement & POs', icon: ShoppingCart, badge: null },
  { to: '/crm', label: 'CRM & Sales', icon: Target, badge: null },
  { to: '/operations', label: 'Operations & Projects', icon: Cog, badge: null },
  { to: '/service', label: 'Customer Service & SLA', icon: Headphones, badge: null },
  { to: '/dms', label: 'Documents & DMS', icon: FolderArchive, badge: null },
  { to: '/reports', label: 'MIS & Reports', icon: BarChart3, badge: null },
];

export default function AleansSidebar() {
  const { currentUser, sidebarCollapsed, setSidebarCollapsed, approvals, logout, setSearchOpen } = useAleans();
  const [filterQuery, setFilterQuery] = useState('');
  const navigate = useNavigate();
  const pendingApprovals = approvals.filter((a) => a.status === 'Pending').length;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const displayedModules = filterQuery.trim() === ''
    ? navModules
    : navModules.filter(m => m.label.toLowerCase().includes(filterQuery.toLowerCase()));

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-full bg-white border-r border-slate-200 flex flex-col transition-all duration-300 shadow-sm ${
        sidebarCollapsed ? 'w-20' : 'w-72'
      }`}
    >
      {/* Top Organization Brand Bar */}
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-200 bg-slate-50/50">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white font-extrabold text-lg shadow-md shadow-emerald-600/20">
            k
          </div>
          {!sidebarCollapsed && (
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-extrabold text-slate-900 tracking-tight truncate">
                  {currentUser?.name || 'Alea ERP'}
                </span>
                <span className="px-1.5 py-0.2 rounded-md bg-emerald-50 text-emerald-700 font-bold text-[9px] border border-emerald-200">
                  ERP
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium truncate">Enterprise Operating System</p>
            </div>
          )}
        </div>

        {!sidebarCollapsed && (
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-700">
            {currentUser?.code || 'EM'}
          </div>
        )}
      </div>

      {/* Global Interactive Search Input */}
      {!sidebarCollapsed && (
        <div className="px-3 pt-3 pb-1">
          <div className="relative flex items-center px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 focus-within:border-emerald-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-emerald-100 transition">
            <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search 16 modules..."
              className="w-full bg-transparent pl-2 pr-1 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
            {filterQuery ? (
              <button onClick={() => setFilterQuery('')} className="text-slate-400 hover:text-slate-700 p-0.5">
                <X className="w-3 h-3" />
              </button>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="px-1.5 py-0.5 rounded bg-white text-[10px] font-mono text-slate-500 border border-slate-200 shadow-sm hover:border-emerald-500 hover:text-emerald-700 transition"
                title="Open Global Search (Ctrl+K)"
              >
                ⌘K
              </button>
            )}
          </div>
        </div>
      )}

      {/* 16 Modules Navigation Tree */}
      <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-0.5">
        {displayedModules.length === 0 ? (
          <div className="py-6 text-center text-slate-400 text-xs">
            <p>No module found</p>
          </div>
        ) : (
          displayedModules.map(({ to, label, icon: Icon, badge }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-semibold transition-all group ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                }`
              }
              title={sidebarCollapsed ? label : undefined}
            >
              <Icon className="h-4 w-4 shrink-0 transition group-hover:scale-105" />
              {!sidebarCollapsed && (
                <>
                  <span className="flex-1 truncate">{label}</span>
                  {label === 'Approvals Hub' && pendingApprovals > 0 ? (
                    <span className="flex h-4 min-w-[18px] items-center justify-center rounded-full bg-amber-100 text-amber-800 border border-amber-200 px-1 text-[9px] font-bold">
                      {pendingApprovals}
                    </span>
                  ) : badge ? (
                    <span className="px-1.5 py-0.2 rounded-md bg-slate-100 text-slate-600 group-hover:text-emerald-700 text-[10px] font-bold border border-slate-200">
                      {badge}
                    </span>
                  ) : null}
                </>
              )}
            </NavLink>
          ))
        )}
      </nav>

      {/* Logged-In User Profile Card */}
      <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-2">
        {!sidebarCollapsed && (
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center border border-emerald-200 shrink-0">
              {currentUser?.code || 'EM'}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-slate-900 truncate">{currentUser?.name}</p>
              <p className="text-[10px] text-emerald-700 font-semibold truncate">{currentUser?.role}</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-200 transition"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        )}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200 shadow-sm transition mx-auto"
          title={sidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>
    </aside>
  );
}
