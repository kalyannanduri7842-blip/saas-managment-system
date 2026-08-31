import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Applications from './pages/Applications';
import ApplicationDetails from './pages/ApplicationDetails';
import Subscriptions from './pages/Subscriptions';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import Expenses from './pages/Expenses';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import AuditLog from './pages/AuditLog';
import ActivityFeed from './pages/ActivityFeed';
import Integrations from './pages/Integrations';
import BillingHistory from './pages/BillingHistory';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/applications/:id" element={<ApplicationDetails />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/audit-log" element={<AuditLog />} />
            <Route path="/activity" element={<ActivityFeed />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/billing-history" element={<BillingHistory />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
