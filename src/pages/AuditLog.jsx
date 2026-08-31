import { useMemo, useState } from 'react';
import { sampleAuditLog } from '../data/sampleAuditLog';
import SearchBar from '../components/SearchBar';
import EmptyState from '../components/EmptyState';
import { FileText } from 'lucide-react';
import { format, parseISO } from 'date-fns';

export default function AuditLog() {
  const [search, setSearch] = useState('');
  const [actionFilter, setActionFilter] = useState('');

  const filtered = useMemo(() => {
    return sampleAuditLog.filter((e) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        e.action.includes(q) ||
        e.entityType.includes(q) ||
        e.actor.includes(q) ||
        e.entityId.includes(q);
      const matchAction = !actionFilter || e.action === actionFilter;
      return matchSearch && matchAction;
    });
  }, [search, actionFilter]);

  const actions = [...new Set(sampleAuditLog.map((e) => e.action))];

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="sm:w-64">
          <SearchBar value={search} onChange={setSearch} placeholder="Search audit log..." />
        </div>
        <select value={actionFilter} onChange={(e) => setActionFilter(e.target.value)} className="input sm:w-40">
          <option value="">All Actions</option>
          {actions.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No audit entries" description="No matching audit log records" icon={FileText} />
      ) : (
        <div className="card p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-left">
                  <th className="px-4 py-3 font-medium text-gray-500">Timestamp</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Action</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Entity</th>
                  <th className="px-4 py-3 font-medium text-gray-500 hidden md:table-cell">Entity ID</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Actor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {filtered.slice(0, 50).map((e) => (
                  <tr key={e.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 whitespace-nowrap">
                      {format(parseISO(e.timestamp), 'MMM d, yyyy HH:mm')}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white capitalize">{e.action}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 capitalize">{e.entityType}</td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell font-mono text-xs">{e.entityId}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{e.actor}</td>
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
