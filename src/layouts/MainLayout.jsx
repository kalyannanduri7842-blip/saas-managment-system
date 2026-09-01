import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ToastContainer from '../components/Toast';
import QuickAddModal from '../components/QuickAddModal';
import { useApp } from '../context/AppContext';

const titles = {
  '/': 'SaaS Executive Overview',
  '/applications': 'SaaS Applications Portfolio',
  '/subscriptions': 'Active Subscriptions & Renewals',
  '/users': 'Employees & Team Licenses',
  '/expenses': 'Corporate Expenses & Invoices',
  '/reports': 'Financial & Churn Reports',
  '/audit-log': 'Live Multi-Employee Audit Log',
  '/activity': 'Real-Time Activity Feed',
  '/integrations': 'Cloud & API Integrations',
  '/billing-history': 'Billing History & Receipts',
  '/notifications': 'Notification Center',
  '/settings': 'System Settings & Profile',
};

export default function MainLayout() {
  const location = useLocation();
  const { loading, quickAddOpen, setQuickAddOpen } = useApp();

  let title = titles[location.pathname] || 'SaaS Manager';
  if (location.pathname.startsWith('/applications/')) title = 'Application Details';
  if (location.pathname.startsWith('/users/')) title = 'Employee Details';

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950">
        <div className="flex flex-col items-center gap-3">
          <div className="h-9 w-9 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
          <p className="text-xs font-semibold text-slate-400">Loading EnterpriseFlow Workspace...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-slate-950">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header title={title} />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
      <ToastContainer />
      <QuickAddModal isOpen={quickAddOpen} onClose={() => setQuickAddOpen(false)} />
    </div>
  );
}
