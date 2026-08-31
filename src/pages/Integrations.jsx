import { sampleIntegrations } from '../data/sampleIntegrations';
import Badge from '../components/Badge';
import { Puzzle } from 'lucide-react';

const statusMap = {
  connected: 'Active',
  disconnected: 'Inactive',
  error: 'Failed',
  syncing: 'Pending',
};

export default function Integrations() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Manage third-party integrations connected to your SaaS portfolio.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleIntegrations.map((integ) => (
          <div key={integ.id} className="card">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <Puzzle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{integ.provider}</p>
                  <p className="text-xs text-gray-400">Sync every {integ.syncIntervalMinutes}m</p>
                </div>
              </div>
              <Badge status={statusMap[integ.status] || integ.status} />
            </div>
            <div className="text-xs text-gray-500 space-y-1">
              <p>API Key: {integ.apiKeyConfigured ? 'Configured' : 'Not set'}</p>
              <p>Last sync: {integ.lastSyncAt ? integ.lastSyncAt.slice(0, 16).replace('T', ' ') : 'Never'}</p>
              <p>Enabled: {integ.enabled ? 'Yes' : 'No'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
