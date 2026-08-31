import { useMemo, useState } from 'react';
import { sampleActivity } from '../data/sampleActivity';
import EmptyState from '../components/EmptyState';
import { Activity } from 'lucide-react';
import { format, parseISO } from 'date-fns';

export default function ActivityFeed() {
  const [typeFilter, setTypeFilter] = useState('');

  const filtered = useMemo(() => {
    return sampleActivity.filter((a) => !typeFilter || a.type === typeFilter);
  }, [typeFilter]);

  const types = [...new Set(sampleActivity.map((a) => a.type))];

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="input sm:w-44">
          <option value="">All Types</option>
          {types.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No activity" description="Activity events will appear here" icon={Activity} />
      ) : (
        <div className="space-y-2">
          {filtered.map((a) => (
            <div key={a.id} className={`card flex items-start gap-3 ${a.read ? 'opacity-60' : ''}`}>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
                <Activity className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{a.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{a.description}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {format(parseISO(a.createdAt), 'MMM d, yyyy · h:mm a')} · {a.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
