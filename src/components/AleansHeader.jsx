import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bell,
  Search,
  Plus,
  Building2,
  ChevronDown,
  LogOut,
  User,
  Settings,
} from 'lucide-react';
import { useAleans } from '../context/AleansContext';

export default function AleansHeader({ title }) {
  const {
    currentUser,
    organization,
    notifications,
    markAllNotificationsRead,
    setQuickAddOpen,
    logout,
  } = useAleans();

  const navigate = useNavigate();
  const [branchDropdown, setBranchDropdown] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(organization.branches[0]);
  const [userDropdown, setUserDropdown] = useState(false);
  const [notifDropdown, setNotifDropdown] = useState(false);

  const notifRef = useRef(null);
  const userRef = useRef(null);
  const branchRef = useRef(null);

  const unreadNotifs = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    function handleClickOutside(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotifDropdown(false);
      if (userRef.current && !userRef.current.contains(e.target)) setUserDropdown(false);
      if (branchRef.current && !branchRef.current.contains(e.target)) setBranchDropdown(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 backdrop-blur-md px-5 lg:px-7 shadow-sm">
      {/* Left: Title & Operating Branch */}
      <div className="flex items-center gap-4 min-w-0">
        <div>
          <h1 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight truncate flex items-center gap-2">
            <span>{title}</span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Live Cloud ERP
            </span>
          </h1>
        </div>

        {/* Operating Branch Selector */}
        <div className="relative hidden md:block" ref={branchRef}>
          <button
            onClick={() => setBranchDropdown(!branchDropdown)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-700 transition"
          >
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            <span className="truncate max-w-[160px]">{selectedBranch.name.split('(')[0]}</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {branchDropdown && (
            <div className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-slate-200 bg-white shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-1 text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                Select Operating Branch / Plant
              </div>
              <div className="space-y-1 mt-1">
                {organization.branches.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      setSelectedBranch(b);
                      setBranchDropdown(false);
                    }}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs transition ${
                      b.id === selectedBranch.id
                        ? 'bg-emerald-50 text-emerald-700 font-bold border border-emerald-200'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-semibold">{b.name}</div>
                      <div className="text-[10px] text-slate-500">{b.type}</div>
                    </div>
                    <span className="text-[10px] text-slate-400">{b.employees} Staff</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right: Actions & User Details */}
      <div className="flex items-center gap-3">
        {/* + Ingest Data Action */}
        <button
          onClick={() => setQuickAddOpen(true)}
          className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">+ Ingest Data</span>
        </button>

        {/* Live Notification Bell */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setNotifDropdown(!notifDropdown)}
            className="relative rounded-xl p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition"
            title="Notification Center"
          >
            <Bell className="h-4 w-4" />
            {unreadNotifs > 0 && (
              <span className="absolute top-1.5 right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-600 text-[9px] font-extrabold text-white">
                {unreadNotifs}
              </span>
            )}
          </button>

          {notifDropdown && (
            <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 rounded-2xl border border-slate-200 bg-white shadow-2xl z-50 overflow-hidden text-xs">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50">
                <span className="font-bold text-slate-900">Live Operations Feed</span>
                {unreadNotifs > 0 && (
                  <button
                    onClick={markAllNotificationsRead}
                    className="text-[11px] text-emerald-700 hover:underline font-semibold"
                  >
                    Mark all read
                  </button>
                )}
              </div>
              <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                {notifications.length === 0 ? (
                  <div className="p-8 text-center text-slate-400 text-xs">
                    <p className="font-medium">No notifications yet</p>
                  </div>
                ) : (
                  notifications.map((n) => (
                    <div key={n.id} className="p-3.5 hover:bg-slate-50 transition">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-slate-900">{n.title}</span>
                        <span className="text-[10px] text-slate-400 font-mono">{n.time}</span>
                      </div>
                      <p className="mt-1 text-slate-600 text-[11px] leading-relaxed">{n.message}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Logged-In User Details Dropdown */}
        <div className="relative" ref={userRef}>
          <button
            onClick={() => setUserDropdown(!userDropdown)}
            className="flex items-center gap-2 p-1 pl-1.5 pr-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition"
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center border border-emerald-200 shrink-0">
              {currentUser?.code || 'EM'}
            </div>
            <div className="hidden md:block text-left">
              <div className="text-xs font-bold text-slate-900 leading-tight">{currentUser?.name}</div>
              <div className="text-[10px] text-emerald-700 font-semibold leading-none">{currentUser?.role}</div>
            </div>
            <ChevronDown className="w-3 h-3 text-slate-400 ml-0.5" />
          </button>

          {userDropdown && (
            <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-slate-200 bg-white shadow-2xl z-50 overflow-hidden text-xs">
              <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-extrabold text-sm flex items-center justify-center shadow-sm">
                  {currentUser?.code || 'EM'}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-slate-900 truncate">{currentUser?.name}</div>
                  <div className="text-[11px] text-slate-500 truncate">{currentUser?.email}</div>
                  <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">
                    {currentUser?.role} • {currentUser?.department}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-1.5 space-y-0.5">
                <button
                  onClick={() => {
                    setUserDropdown(false);
                    navigate('/settings');
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-50 text-left font-medium transition"
                >
                  <Settings className="w-4 h-4 text-slate-400" />
                  <span>Profile Settings & Password</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-rose-600 hover:bg-rose-50 text-left font-semibold transition"
                >
                  <LogOut className="w-4 h-4 text-rose-500" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
