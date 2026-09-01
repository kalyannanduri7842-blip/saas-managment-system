import React from 'react';
import { CheckSquare, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function ApprovalsPage() {
  const { approvals, handleApproval } = useAleans();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Universal Approvals Hub</h2>
          <p className="text-xs text-slate-500">Executive & Departmental Sign-off Queue for Leaves, Expenses, POs & Discounts.</p>
        </div>
      </div>

      {/* Approvals Queue */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Pending Authorizations Queue</h3>
          <span className="text-xs text-amber-700 font-bold">{approvals.filter(a => a.status === 'Pending').length} Pending</span>
        </div>

        {approvals.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            <p className="font-semibold">No pending approval requests</p>
            <p className="text-[11px] mt-1">Leave applications, expense claims, and PO sign-offs will appear here for review.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {approvals.map((app) => (
              <div key={app.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">{app.title}</span>
                    <span className="px-1.5 py-0.2 rounded bg-slate-200 text-slate-700 font-semibold text-[10px]">{app.type}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Requester: <strong className="text-emerald-700">{app.requester}</strong> • Date: {app.date}
                  </div>
                </div>

                {app.status === 'Pending' ? (
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleApproval(app.id, 'Approved')}
                      className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-sm transition"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleApproval(app.id, 'Rejected')}
                      className="px-3 py-1.5 bg-slate-200 hover:bg-rose-100 text-slate-700 hover:text-rose-700 font-bold rounded-xl text-xs transition"
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                    app.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
                  }`}>
                    {app.status}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
