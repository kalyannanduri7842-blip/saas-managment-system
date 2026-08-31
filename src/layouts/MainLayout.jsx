import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ToastContainer from '../components/Toast';
import { useApp } from '../context/AppContext';

const titles = {
  '/': 'Dashboard',
  '/applications': 'Applications',
  '/subscriptions': 'Subscriptions',
  '/users': 'Users',
  '/expenses': 'Expenses',
  '/reports': 'Reports',
  '/audit-log': 'Audit Log',
  '/activity': 'Activity Feed',
  '/integrations': 'Integrations',
  '/billing-history': 'Billing History',
  '/notifications': 'Notifications',
  '/settings': 'Settings',
};

export default function MainLayout() {
  const location = useLocation();
  const { loading } = useApp();

  let title = titles[location.pathname] || 'SaaS Manager';
  if (location.pathname.startsWith('/applications/')) title = 'Application Details';
  if (location.pathname.startsWith('/users/')) title = 'User Details';

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-600 border-t-transparent" />
          <p className="text-sm text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header title={title} />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
      <ToastContainer />
    </div>
  );
}
