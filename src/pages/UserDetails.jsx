import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Badge from '../components/Badge';

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, applications } = useApp();

  const user = users.find((u) => u.id === id);
  if (!user) {
    return (
      <div className="card text-center py-16">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">User not found</h2>
        <p className="text-sm text-gray-500 mb-4">The user you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/users')} className="btn-primary">
          <ArrowLeft className="h-4 w-4" /> Back to Users
        </button>
      </div>
    );
  }

  const assignedApps = applications.filter((a) => (user.assignedApps || []).includes(a.id));

  return (
    <div className="space-y-6">
      <button onClick={() => navigate('/users')} className="btn-ghost text-sm">
        <ArrowLeft className="h-4 w-4" /> Back to Users
      </button>

      <div className="card">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 text-xl font-bold">
            {user.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
              <Badge status={user.status} />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card">
          <p className="text-xs text-gray-500 dark:text-gray-400">Department</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{user.department || '—'}</p>
        </div>
        <div className="card">
          <p className="text-xs text-gray-500 dark:text-gray-400">Role</p>
          <div className="mt-1"><Badge status={user.role} /></div>
        </div>
        <div className="card">
          <p className="text-xs text-gray-500 dark:text-gray-400">Applications</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{assignedApps.length}</p>
        </div>
      </div>

      <div className="card">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
          Assigned Applications
        </h3>
        {assignedApps.length === 0 ? (
          <p className="text-sm text-gray-500">No applications assigned.</p>
        ) : (
          <div className="space-y-2">
            {assignedApps.map((app) => (
              <Link
                key={app.id}
                to={`/applications/${app.id}`}
                className="flex items-center justify-between rounded-lg border border-gray-200 dark:border-gray-700 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/30"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{app.name}</p>
                  <p className="text-xs text-gray-400">{app.category} · {app.vendor}</p>
                </div>
                <Badge status={app.status} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
