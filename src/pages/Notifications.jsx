import { Bell, Check, CheckCheck, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import EmptyState from '../components/EmptyState';
import { format, parseISO } from 'date-fns';

const typeColors = {
  renewal: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  payment: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  application: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  user: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
};

export default function Notifications() {
  const {
    notifications,
    markNotificationRead,
    markAllNotificationsRead,
    deleteNotification,
  } = useApp();

  const unread = notifications.filter((n) => !n.read).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {unread > 0 ? `${unread} unread notification${unread > 1 ? 's' : ''}` : 'All caught up!'}
        </p>
        {unread > 0 && (
          <button onClick={markAllNotificationsRead} className="btn-secondary text-sm">
            <CheckCheck className="h-4 w-4" /> Mark all as read
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <EmptyState
          title="No notifications"
          description="You're all caught up! New notifications will appear here."
          icon={Bell}
        />
      ) : (
        <div className="space-y-2">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`card flex items-start gap-4 transition-opacity ${
                n.read ? 'opacity-60' : ''
              }`}
            >
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${typeColors[n.type] || typeColors.application}`}>
                <Bell className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className={`text-sm font-medium ${n.read ? 'text-gray-600 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>
                      {n.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{n.message}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {format(parseISO(n.createdAt), 'MMM d, yyyy · h:mm a')}
                    </p>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    {!n.read && (
                      <button
                        onClick={() => markNotificationRead(n.id)}
                        className="btn-ghost p-1.5"
                        title="Mark as read"
                      >
                        <Check className="h-4 w-4" />
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(n.id)}
                      className="btn-ghost p-1.5 text-red-500"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
