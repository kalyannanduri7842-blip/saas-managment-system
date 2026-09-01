import {
  Users,
  CheckSquare,
  Landmark,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Plus,
  ArrowUpRight,
  Briefcase
} from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function ManagerDashboardPage() {
  const {
    currentUser,
    approvals,
    handleApproval,
    setQuickAddOpen,
    employees
  } = useAleans();

  const deptEmployees = employees.filter((e) => e.department === currentUser?.department);
  const deptApprovals = approvals.filter(
    (a) => a.targetDepartment === currentUser?.department || a.targetDepartment === 'Executive Board'
  );

  return (
    <div className="space-y-6">
      {/* Top Welcome Banner */}
      <div className="card bg-white border-slate-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-2">
            <span>Managerial Workspace</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Team Management — {currentUser?.name}
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Department Head: <strong className="text-slate-800">{currentUser?.department}</strong> • Operating Branch: {currentUser?.location}
          </p>
        </div>

        <button
          onClick={() => setQuickAddOpen(true)}
          className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/20 flex items-center gap-2 self-start md:self-auto transition"
        >
          <Plus className="w-4 h-4" /> <span>+ Ingest Department Data</span>
        </button>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Department Team Size</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">{deptEmployees.length} Staff</p>
          <span className="text-[10px] text-slate-400 mt-1">Registered in Department</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Pending Team Approvals</p>
          <p className="text-2xl font-extrabold text-amber-600 mt-1">{deptApprovals.filter(a => a.status === 'Pending').length}</p>
          <span className="text-[10px] text-slate-400 mt-1">Action Required</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Department Budget</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">₹0</p>
          <span className="text-[10px] text-slate-400 mt-1">Quarterly Allocation</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Team Attendance</p>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1">100%</p>
          <span className="text-[10px] text-slate-400 mt-1">Active Status</span>
        </div>
      </div>

      {/* Department Approvals & Team Member Roster */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Approvals Box */}
        <div className="card p-5">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">Direct Report Requests for Review</h3>
            <span className="text-xs text-amber-700 font-bold">{deptApprovals.length} Requests</span>
          </div>

          {deptApprovals.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-xs">
              <p className="font-semibold">No pending team requests</p>
              <p className="text-[11px] mt-1">Leave applications and expense claims submitted by your team will appear here.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {deptApprovals.map((app) => (
                <div key={app.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900">{app.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      From: <strong className="text-emerald-700">{app.requester}</strong> • {app.date}
                    </div>
                  </div>

                  {app.status === 'Pending' ? (
                    <div className="flex items-center gap-1.5 shrink-0">
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
                  ) : (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      {app.status}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Team Members List */}
        <div className="card p-5">
          <h3 className="text-sm font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
            Registered Department Team Members
          </h3>
          {deptEmployees.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-xs">
              <p className="font-semibold">No team members registered yet</p>
              <p className="text-[11px] mt-1">When new employees register in {currentUser?.department}, they will be listed here.</p>
            </div>
          ) : (
            <div className="space-y-2 text-xs">
              {deptEmployees.map((emp) => (
                <div key={emp.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center border border-emerald-200">
                      {emp.code || 'EM'}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{emp.name}</div>
                      <div className="text-[10px] text-slate-500">{emp.title || emp.role}</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                    {emp.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
