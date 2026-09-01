import { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext';
import SearchBar from '../components/SearchBar';
import EmptyState from '../components/EmptyState';
import { FileText, ShieldCheck, Activity, User, Clock } from 'lucide-react';
import { format, parseISO } from 'date-fns';

export default function AuditLog() {
  const { auditLogs } = useApp();
  const [search, setSearch] = useState('');
  const [actionFilter, setActionFilter] = useState('');

  const filtered = useMemo(() => {
    return (auditLogs || []).filter((e) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        (e.action && e.action.toLowerCase().includes(q)) ||
        (e.target && e.target.toLowerCase().includes(q)) ||
        (e.actor && e.actor.toLowerCase().includes(q)) ||
        (e.details && e.details.toLowerCase().includes(q));
      const matchAction = !actionFilter || e.action === actionFilter;
      return matchSearch && matchAction;
    });
  }, [auditLogs, search, actionFilter]);

  const actions = [...new Set((auditLogs || []).map((e) => e.action))];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Multi-Employee Audit Log</h2>
          <p className="text-xs text-gray-500 dark:text-slate-400">
            Immutable security and operational event trail recorded across all team members.
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold self-start sm:self-auto">
          <ShieldCheck className="w-4 h-4" />
          <span>Real-Time Audit Protection Active</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} placeholder="Search by actor, action, or target item..." />
        </div>
        <select
          value={actionFilter}
          onChange={(e) => setActionFilter(e.target.value)}
          className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 sm:w-44"
        >
          <option value="">All Action Types</option>
          {actions.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>

      {/* Log Table */}
      {filtered.length === 0 ? (
        <EmptyState title="No audit entries found" description="No matching audit records in the current timeframe." icon={FileText} />
      ) : (
        <div className="card p-0 overflow-hidden bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-950/70 text-left">
                  <th className="px-4 py-3 font-bold text-gray-500 dark:text-slate-400">Timestamp</th>
                  <th className="px-4 py-3 font-bold text-gray-500 dark:text-slate-400">Employee Actor</th>
                  <th className="px-4 py-3 font-bold text-gray-500 dark:text-slate-400">Action Type</th>
                  <th className="px-4 py-3 font-bold text-gray-500 dark:text-slate-400">Target Resource</th>
                  <th className="px-4 py-3 font-bold text-gray-500 dark:text-slate-400">Event Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-slate-800/60">
                {filtered.map((e) => (
                  <tr key={e.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/40 transition">
                    <td className="px-4 py-3 text-gray-500 dark:text-slate-400 whitespace-nowrap font-mono">
                      {e.timestamp ? format(parseISO(e.timestamp), 'MMM d, yyyy · HH:mm:ss') : 'Just now'}
                    </td>
                    <td className="px-4 py-3 font-bold text-gray-900 dark:text-white">
                      <div className="flex items-center gap-1.5">
                        <span>{e.actor}</span>
                        {e.role && (
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                            ({e.role})
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {e.action}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-semibold text-gray-800 dark:text-slate-200">{e.target}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-slate-300 max-w-md truncate">{e.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
