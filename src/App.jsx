import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AleansProvider } from './context/AleansContext';
import ProtectedRoute from './components/ProtectedRoute';
import AleansLayout from './layouts/AleansLayout';
import LoginPage from './pages/LoginPage';

// 24 Module Pages + Settings
import DashboardPage from './pages/aleans/DashboardPage';
import MyPortalPage from './pages/aleans/MyPortalPage';
import OrganizationPage from './pages/aleans/OrganizationPage';
import UsersRolesPage from './pages/aleans/UsersRolesPage';
import HRPage from './pages/aleans/HRPage';
import RecruitmentPage from './pages/aleans/RecruitmentPage';
import PerformancePage from './pages/aleans/PerformancePage';
import FinancePage from './pages/aleans/FinancePage';
import PayrollPage from './pages/aleans/PayrollPage';
import InventoryPage from './pages/aleans/InventoryPage';
import ProcurementPage from './pages/aleans/ProcurementPage';
import CRMPage from './pages/aleans/CRMPage';
import OperationsPage from './pages/aleans/OperationsPage';
import QualityPage from './pages/aleans/QualityPage';
import CustomerServicePage from './pages/aleans/CustomerServicePage';
import DocumentsPage from './pages/aleans/DocumentsPage';
import AdminITPage from './pages/aleans/AdminITPage';
import LearningPage from './pages/aleans/LearningPage';
import TravelExpensePage from './pages/aleans/TravelExpensePage';
import MISReportsPage from './pages/aleans/MISReportsPage';
import ApprovalsPage from './pages/aleans/ApprovalsPage';
import HelpDeskPage from './pages/aleans/HelpDeskPage';
import IntegrationsPage from './pages/aleans/IntegrationsPage';
import AuditLogPage from './pages/aleans/AuditLogPage';
import SettingsPage from './pages/aleans/SettingsPage';

export default function App() {
  return (
    <AleansProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Authentication Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Enterprise ERP Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AleansLayout />}>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/employee" element={<MyPortalPage />} />
              <Route path="/organization" element={<OrganizationPage />} />
              <Route path="/users" element={<UsersRolesPage />} />
              <Route path="/hr" element={<HRPage />} />
              <Route path="/recruitment" element={<RecruitmentPage />} />
              <Route path="/performance" element={<PerformancePage />} />
              <Route path="/finance" element={<FinancePage />} />
              <Route path="/payroll" element={<PayrollPage />} />
              <Route path="/inventory" element={<InventoryPage />} />
              <Route path="/procurement" element={<ProcurementPage />} />
              <Route path="/crm" element={<CRMPage />} />
              <Route path="/operations" element={<OperationsPage />} />
              <Route path="/quality" element={<QualityPage />} />
              <Route path="/service" element={<CustomerServicePage />} />
              <Route path="/dms" element={<DocumentsPage />} />
              <Route path="/admin" element={<AdminITPage />} />
              <Route path="/ld" element={<LearningPage />} />
              <Route path="/travel" element={<TravelExpensePage />} />
              <Route path="/reports" element={<MISReportsPage />} />
              <Route path="/approvals" element={<ApprovalsPage />} />
              <Route path="/helpdesk" element={<HelpDeskPage />} />
              <Route path="/integrations" element={<IntegrationsPage />} />
              <Route path="/audit-log" element={<AuditLogPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AleansProvider>
  );
}
