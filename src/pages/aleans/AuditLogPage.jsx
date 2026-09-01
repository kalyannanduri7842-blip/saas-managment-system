import React from 'react';
import { History, ShieldCheck } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function AuditLogPage() {
  const { auditLogs } = useAleans();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Immutable Audit Log & Trail</h2>
          <p className="text-xs text-slate-500">Cryptographically verifiable event log across all 24 ERP modules.</p>
        </div>
      </div>

      {/* Audit Log Table */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Chronological Event Trail</h3>
          <span className="text-xs text-slate-400">{auditLogs.length} Events Logged</span>
        </div>

        {auditLogs.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            <p className="font-semibold">No audit events recorded yet</p>
            <p className="text-[11px] mt-1">Actions performed across the ERP system will stream here automatically.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500 bg-slate-50">
                  <th className="py-3 px-4 font-bold">Event ID</th>
                  <th className="py-3 px-4 font-bold">Actor</th>
                  <th className="py-3 px-4 font-bold">Action</th>
                  <th className="py-3 px-4 font-bold">Module</th>
                  <th className="py-3 px-4 font-bold">Event Details</th>
                  <th className="py-3 px-4 font-bold">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {auditLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-mono font-bold text-emerald-700">{log.id}</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{log.actor}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px]">
                        {log.action}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">{log.module}</td>
                    <td className="py-3 px-4 text-slate-600">{log.details}</td>
                    <td className="py-3 px-4 text-slate-400 font-mono">{log.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
