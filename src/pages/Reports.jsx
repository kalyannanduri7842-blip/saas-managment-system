import { useState, useMemo } from 'react';
import { Download, Printer } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Badge from '../components/Badge';
import { formatCurrency, getMonthlyEquivalent, getAnnualEquivalent, exportToCSV } from '../utils/calculations';
import { CATEGORIES, APP_STATUSES } from '../data/sampleData';

export default function Reports() {
  const { applications, subscriptions, users } = useApp();
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [activeTab, setActiveTab] = useState('spending');

  const filteredApps = useMemo(() => {
    return applications.filter((a) => {
      const matchCat = !categoryFilter || a.category === categoryFilter;
      const matchStatus = !statusFilter || a.status === statusFilter;
      return matchCat && matchStatus;
    });
  }, [applications, categoryFilter, statusFilter]);

  const spendingReport = useMemo(() => {
    return filteredApps.map((app) => {
      const sub = subscriptions.find((s) => s.applicationId === app.id);
      const monthly = sub ? getMonthlyEquivalent(sub) : app.monthlyCost || 0;
      const annual = sub ? getAnnualEquivalent(sub) : (app.monthlyCost || 0) * 12;
      const userCount = users.filter((u) => (u.assignedApps || []).includes(app.id)).length || app.numberOfUsers;
      return {
        application: app.name,
        monthlyCost: monthly,
        annualCost: annual,
        users: userCount,
        costPerUser: userCount > 0 ? monthly / userCount : 0,
        category: app.category,
        status: app.status,
      };
    });
  }, [filteredApps, subscriptions, users]);

  const subscriptionReport = useMemo(() => {
    const active = subscriptions.filter((s) => s.status === 'Active').length;
    const expiring = subscriptions.filter((s) => s.status === 'Expiring' || s.status === 'Trial').length;
    const cancelled = subscriptions.filter((s) => s.status === 'Cancelled').length;
    return { active, expiring, cancelled, total: subscriptions.length };
  }, [subscriptions]);

  const usageReport = useMemo(() => {
    return subscriptions.map((s) => {
      const app = applications.find((a) => a.id === s.applicationId);
      const usage = s.seats > 0 ? Math.round((s.usedSeats / s.seats) * 100) : 0;
      return {
        application: app?.name || 'Unknown',
        totalSeats: s.seats,
        usedSeats: s.usedSeats,
        availableSeats: s.seats - s.usedSeats,
        usagePercentage: usage,
        status: s.status,
      };
    });
  }, [subscriptions, applications]);

  const handleExport = () => {
    if (activeTab === 'spending') {
      exportToCSV(
        spendingReport.map((r) => ({
          Application: r.application,
          'Monthly Cost': r.monthlyCost.toFixed(2),
          'Annual Cost': r.annualCost.toFixed(2),
          Users: r.users,
          'Cost Per User': r.costPerUser.toFixed(2),
          Category: r.category,
          Status: r.status,
        })),
        'saas-spending-report'
      );
    } else if (activeTab === 'usage') {
      exportToCSV(
        usageReport.map((r) => ({
          Application: r.application,
          'Total Seats': r.totalSeats,
          'Used Seats': r.usedSeats,
          'Available Seats': r.availableSeats,
          'Usage %': r.usagePercentage,
          Status: r.status,
        })),
        'saas-usage-report'
      );
    }
  };

  const tabs = [
    { id: 'spending', label: 'SaaS Spending' },
    { id: 'subscription', label: 'Subscriptions' },
    { id: 'usage', label: 'Usage' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="flex gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === t.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {(activeTab === 'spending' || activeTab === 'usage') && (
            <button onClick={handleExport} className="btn-secondary text-sm">
              <Download className="h-4 w-4" /> Export CSV
            </button>
          )}
          <button onClick={() => window.print()} className="btn-secondary text-sm">
            <Printer className="h-4 w-4" /> Print
          </button>
        </div>
      </div>

      {(activeTab === 'spending') && (
        <div className="flex flex-col sm:flex-row gap-3">
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="input sm:w-44">
            <option value="">All Categories</option>
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="input sm:w-36">
            <option value="">All Statuses</option>
            {APP_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      )}

      {activeTab === 'spending' && (
        <div className="card p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-left">
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Application</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Monthly Cost</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Annual Cost</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Users</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Cost/User</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {spendingReport.map((r, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{r.application}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{formatCurrency(r.monthlyCost)}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{formatCurrency(r.annualCost)}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{r.users}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{formatCurrency(r.costPerUser)}</td>
                    <td className="px-4 py-3"><Badge status={r.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'subscription' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card text-center">
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">{subscriptionReport.active}</p>
            <p className="text-sm text-gray-500 mt-1">Active Subscriptions</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{subscriptionReport.expiring}</p>
            <p className="text-sm text-gray-500 mt-1">Expiring / Trial</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-bold text-red-600 dark:text-red-400">{subscriptionReport.cancelled}</p>
            <p className="text-sm text-gray-500 mt-1">Cancelled</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{subscriptionReport.total}</p>
            <p className="text-sm text-gray-500 mt-1">Total Subscriptions</p>
          </div>
        </div>
      )}

      {activeTab === 'usage' && (
        <div className="card p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-left">
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Application</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Total Seats</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Used</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Available</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Usage</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {usageReport.map((r, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{r.application}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{r.totalSeats}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{r.usedSeats}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{r.availableSeats}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                          <div
                            className={`h-2 rounded-full ${r.usagePercentage > 90 ? 'bg-red-500' : r.usagePercentage > 70 ? 'bg-yellow-500' : 'bg-green-500'}`}
                            style={{ width: `${Math.min(r.usagePercentage, 100)}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">{r.usagePercentage}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3"><Badge status={r.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
