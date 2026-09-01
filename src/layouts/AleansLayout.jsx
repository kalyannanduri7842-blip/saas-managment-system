import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AleansSidebar from '../components/AleansSidebar';
import AleansHeader from '../components/AleansHeader';
import AleansQuickAddModal from '../components/AleansQuickAddModal';
import GlobalSearchModal from '../components/GlobalSearchModal';
import { useAleans } from '../context/AleansContext';

const titles = {
  '/': 'Executive Overview',
  '/dashboard': 'Executive Overview',
  '/employee': 'My Portal & Employee Self-Service',
  '/organization': 'Organization Structure & Entities',
  '/users': 'Users & Role-Based Access Control',
  '/hr': 'HR Operations & Biometric Attendance',
  '/recruitment': 'Recruitment & Applicant Tracking (ATS)',
  '/performance': 'Performance Management & OKRs',
  '/finance': 'Finance, Accounts & GST Ledger',
  '/payroll': 'Statutory Payroll & Tax Engine',
  '/inventory': 'Inventory & Warehouse Depot',
  '/procurement': 'Procurement & 3-Way Matched POs',
  '/crm': 'CRM & Enterprise Sales Funnel',
  '/operations': 'Operations & Project Execution',
  '/service': 'Customer Service & SLA Tracking',
  '/dms': 'Document Management System (DMS)',
  '/reports': 'Executive MIS & Board Reports',
  '/settings': 'User Profile & Security Settings',
};

export default function AleansLayout() {
  const location = useLocation();
  const { sidebarCollapsed, searchOpen, setSearchOpen } = useAleans();

  const currentTitle = titles[location.pathname] || 'Alea ERP';

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [setSearchOpen]);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-900 antialiased font-sans">
      <AleansSidebar />
      <div className={`flex flex-1 flex-col overflow-hidden transition-all duration-300 ${
        sidebarCollapsed ? 'pl-20' : 'pl-72'
      }`}>
        <AleansHeader title={currentTitle} />
        <main className="flex-1 overflow-y-auto p-5 lg:p-7 bg-slate-50">
          <Outlet />
        </main>
      </div>
      <AleansQuickAddModal />
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
