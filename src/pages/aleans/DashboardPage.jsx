import {
  Landmark,
  Receipt,
  Users,
  Boxes,
  ShoppingCart,
  Target,
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowUpRight,
  ShieldCheck,
  Plus
} from 'lucide-react';
import { useAleans } from '../../context/AleansContext';
import ManagerDashboardPage from './ManagerDashboardPage';
import EmployeeDashboardPage from './EmployeeDashboardPage';

export default function DashboardPage() {
  const {
    currentUser,
    finance,
    payroll,
    inventory,
    procurement,
    crm,
    approvals,
    handleApproval,
    setQuickAddOpen,
    auditLogs,
    employees
  } = useAleans();

  // Role-Based Dynamic Dashboard Rendering
  if (currentUser?.systemRole === 'Employee' || currentUser?.role === 'Employee') {
    return <EmployeeDashboardPage />;
  }

  if (currentUser?.systemRole === 'Manager' || currentUser?.role === 'Manager') {
    return <ManagerDashboardPage />;
  }

  // Executive Root Admin Dashboard
  const pendingApprovals = approvals.filter((a) => a.status === 'Pending');

  return (
    <div className="space-y-6">
      {/* Executive Welcome Cockpit */}
      <div className="card bg-white border-slate-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-2">
            <span>Executive Board Cockpit</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Master Overview — {currentUser?.name || 'Authorized Admin'}
          </h1>
          <p className="text-xs text-slate-500 max-w-2xl mt-1">
            Enterprise Resource Planning across operating branches. Indian statutory payroll, GST invoicing, supply chain 3-way matching, and recruitment ATS.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setQuickAddOpen(true)}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/20 flex items-center gap-2 transition"
          >
            <Plus className="w-4 h-4" />
            <span>+ Ingest Data</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <div className="card p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-500">Invoiced Revenue</p>
              <p className="text-xl font-extrabold text-slate-900 mt-1">{finance.monthlyRevenue}</p>
              <span className="text-[10px] text-slate-400 mt-1">{finance.invoices.length} Invoices</span>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
              <Landmark className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="card p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-500">Active Workforce</p>
              <p className="text-xl font-extrabold text-slate-900 mt-1">{employees.length} Staff</p>
              <span className="text-[10px] text-emerald-700 font-bold mt-1">Registered Users</span>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
              <Users className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="card p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-500">CRM Sales Deals</p>
              <p className="text-xl font-extrabold text-slate-900 mt-1">{crm.length} Deals</p>
              <span className="text-[10px] text-slate-400 mt-1">Active Pipeline</span>
            </div>
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
              <Target className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="card p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-500">Procurement POs</p>
              <p className="text-xl font-extrabold text-slate-900 mt-1">{procurement.length} POs</p>
              <span className="text-[10px] text-slate-400 mt-1">Issued Orders</span>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
              <ShoppingCart className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="card p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-500">Inventory SKUs</p>
              <p className="text-xl font-extrabold text-slate-900 mt-1">{inventory.length} Items</p>
              <span className="text-[10px] text-slate-400 mt-1">Warehouse Depots</span>
            </div>
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
              <Boxes className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="card p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-500">Pending Approvals</p>
              <p className="text-xl font-extrabold text-amber-700 mt-1">{pendingApprovals.length}</p>
              <span className="text-[10px] text-slate-400 mt-1">Awaiting Sign-off</span>
            </div>
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
              <Clock className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Approvals & Real-Time Operational Log */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Executive Approvals Queue */}
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">Pending Executive Approvals</h3>
            <span className="text-xs text-amber-700 font-bold">{pendingApprovals.length} Action Required</span>
          </div>

          {pendingApprovals.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-xs">
              <p className="font-semibold">No pending approvals</p>
              <p className="text-[11px] mt-1">Requests from team members will appear here for authorization.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {pendingApprovals.map((app) => (
                <div
                  key={app.id}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 truncate">{app.title}</span>
                      <span className="px-1.5 py-0.2 rounded-md bg-slate-200 text-slate-700 font-semibold text-[10px]">
                        {app.type}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Requested by <strong className="text-emerald-700">{app.requester}</strong> • {app.date}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleApproval(app.id, 'Approved')}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleApproval(app.id, 'Rejected')}
                      className="px-2.5 py-1.5 bg-slate-200 hover:bg-rose-100 text-slate-700 hover:text-rose-700 font-bold rounded-lg text-xs transition"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Live Operations Log */}
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">Live Enterprise Event Trail</h3>
            <span className="text-xs text-slate-500">Recent Activity</span>
          </div>

          {auditLogs.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-xs">
              <p className="font-semibold">No activity recorded yet</p>
              <p className="text-[11px] mt-1">Actions performed by users will stream here in real-time.</p>
            </div>
          ) : (
            <div className="space-y-2.5 max-h-[220px] overflow-y-auto">
              {auditLogs.slice(0, 6).map((log) => (
                <div
                  key={log.id}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                >
                  <div className="flex items-center justify-between gap-1">
                    <div className="font-bold text-slate-900 truncate">
                      {log.actor} <span className="text-emerald-700 font-normal text-[10px]">({log.module})</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">{log.time}</span>
                  </div>
                  <p className="mt-0.5 text-slate-600 text-[11px] leading-snug">{log.details}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
