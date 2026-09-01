import { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext';
import EmptyState from '../components/EmptyState';
import { Activity, Sparkles, Clock, UserCheck } from 'lucide-react';
import { format, parseISO } from 'date-fns';

export default function ActivityFeed() {
  const { notifications, auditLogs } = useApp();
  const [typeFilter, setTypeFilter] = useState('');

  const combinedFeed = useMemo(() => {
    const notifs = (notifications || []).map((n) => ({
      id: n.id,
      title: n.title,
      description: n.message,
      author: n.author || 'System',
      type: n.type || 'general',
      createdAt: n.createdAt,
    }));
    return notifs;
  }, [notifications]);

  const filtered = useMemo(() => {
    return combinedFeed.filter((a) => !typeFilter || a.type === typeFilter);
  }, [combinedFeed, typeFilter]);

  const types = [...new Set(combinedFeed.map((a) => a.type))];

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Real-Time Team Activity Stream</h2>
          <p className="text-xs text-gray-500 dark:text-slate-400">
            Live chronological timeline of team actions, tool provisioning, and financial records.
          </p>
        </div>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 sm:w-44"
        >
          <option value="">All Activity Types</option>
          {types.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No activity recorded" description="Live team actions will appear here in real time." icon={Activity} />
      ) : (
        <div className="space-y-2.5">
          {filtered.map((a) => (
            <div
              key={a.id}
              className="card bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-4 flex items-start gap-3.5 shadow-md hover:border-slate-700 transition"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
                <Activity className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-bold text-gray-900 dark:text-white">{a.title}</p>
                  <span className="text-[10px] text-gray-400 shrink-0 font-mono">
                    {a.createdAt ? format(parseISO(a.createdAt), 'MMM d, yyyy · h:mm a') : 'Just now'}
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-slate-300 mt-0.5 leading-relaxed">{a.description}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="px-2 py-0.2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold">
                    By {a.author}
                  </span>
                  <span className="px-2 py-0.2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold capitalize">
                    {a.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
