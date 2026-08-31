import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Users as UsersIcon } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Badge from '../components/Badge';
import { formatCurrency, formatDate } from '../utils/calculations';

export default function ApplicationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { applications, subscriptions, users } = useApp();

  const app = applications.find((a) => a.id === id);
  if (!app) {
    return (
      <div className="card text-center py-16">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Application not found</h2>
        <p className="text-sm text-gray-500 mb-4">The application you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/applications')} className="btn-primary">
          <ArrowLeft className="h-4 w-4" /> Back to Applications
        </button>
      </div>
    );
  }

  const sub = subscriptions.find((s) => s.applicationId === id);
  const assignedUsers = users.filter((u) => (u.assignedApps || []).includes(id));

  return (
    <div className="space-y-6">
      <button onClick={() => navigate('/applications')} className="btn-ghost text-sm">
        <ArrowLeft className="h-4 w-4" /> Back to Applications
      </button>

      <div className="card">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{app.name}</h2>
              <Badge status={app.status} />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{app.vendor} · {app.category}</p>
          </div>
          {app.website && (
            <a
              href={app.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              <ExternalLink className="h-4 w-4" /> Visit Website
            </a>
          )}
        </div>
        {app.description && (
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{app.description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card">
          <p className="text-xs text-gray-500 dark:text-gray-400">Users</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white mt-1">{app.numberOfUsers}</p>
        </div>
        <div className="card">
          <p className="text-xs text-gray-500 dark:text-gray-400">Plan</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white mt-1">{app.subscriptionPlan || '—'}</p>
        </div>
        <div className="card">
          <p className="text-xs text-gray-500 dark:text-gray-400">Monthly Cost</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white mt-1">{formatCurrency(app.monthlyCost)}</p>
        </div>
        <div className="card">
          <p className="text-xs text-gray-500 dark:text-gray-400">Renewal Date</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white mt-1">{formatDate(app.renewalDate)}</p>
        </div>
      </div>

      {sub && (
        <div className="card">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Subscription Details</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-gray-500 dark:text-gray-400">Billing Cycle</p>
              <p className="font-medium text-gray-900 dark:text-white">{sub.billingCycle}</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Cost</p>
              <p className="font-medium text-gray-900 dark:text-white">{formatCurrency(sub.cost)}</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Seats</p>
              <p className="font-medium text-gray-900 dark:text-white">{sub.usedSeats} / {sub.seats}</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Status</p>
              <Badge status={sub.status} />
            </div>
          </div>
        </div>
      )}

      <div className="card">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <UsersIcon className="h-4 w-4" /> Assigned Users ({assignedUsers.length})
        </h3>
        {assignedUsers.length === 0 ? (
          <p className="text-sm text-gray-500">No users assigned to this application.</p>
        ) : (
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {assignedUsers.map((u) => (
              <Link
                key={u.id}
                to={`/users/${u.id}`}
                className="flex items-center justify-between py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700/30 -mx-2 px-2 rounded-lg"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{u.name}</p>
                  <p className="text-xs text-gray-400">{u.email}</p>
                </div>
                <Badge status={u.role} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
