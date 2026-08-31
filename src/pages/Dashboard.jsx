import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppWindow,
  CreditCard,
  DollarSign,
  Users,
  Calendar,
  TrendingUp,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import DashboardCard from '../components/DashboardCard';
import Badge from '../components/Badge';
import { useApp } from '../context/AppContext';
import {
  calculateDashboardStats,
  getMonthlySpendingChart,
  getAppUsageChart,
  getSubscriptionDistribution,
  formatCurrency,
  formatDate,
} from '../utils/calculations';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'];

export default function Dashboard() {
  const { applications, subscriptions, users, expenses } = useApp();
  const navigate = useNavigate();

  const stats = useMemo(
    () => calculateDashboardStats(applications, subscriptions, users),
    [applications, subscriptions, users]
  );

  const monthlyChart = useMemo(() => getMonthlySpendingChart(expenses), [expenses]);
  const usageChart = useMemo(() => getAppUsageChart(applications), [applications]);
  const distChart = useMemo(() => getSubscriptionDistribution(applications), [applications]);

  const getAppName = (id) => applications.find((a) => a.id === id)?.name || 'Unknown';

  return (
    <div className="space-y-6">
      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <DashboardCard
          title="Total Applications"
          value={stats.totalApplications}
          icon={AppWindow}
          color="blue"
        />
        <DashboardCard
          title="Active Subscriptions"
          value={stats.activeSubscriptions}
          icon={CreditCard}
          color="green"
        />
        <DashboardCard
          title="Monthly Spending"
          value={formatCurrency(stats.monthlySpending)}
          icon={DollarSign}
          color="purple"
        />
        <DashboardCard
          title="Annual Spending"
          value={formatCurrency(stats.annualSpending)}
          icon={TrendingUp}
          color="orange"
        />
        <DashboardCard
          title="Upcoming Renewals"
          value={stats.upcomingRenewals.length}
          icon={Calendar}
          color="red"
        />
        <DashboardCard
          title="Total Users"
          value={stats.totalUsers}
          icon={Users}
          color="cyan"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card lg:col-span-1">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Monthly Spending (Last 6 Months)
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyChart}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} className="text-gray-500" />
              <YAxis tick={{ fontSize: 12 }} className="text-gray-500" />
              <Tooltip
                formatter={(v) => formatCurrency(v)}
                contentStyle={{
                  backgroundColor: 'var(--tooltip-bg, #fff)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Application Status
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={usageChart}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                label={({ name, value }) => `${name}: ${value}`}
                labelLine={false}
              >
                {usageChart.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Subscriptions by Category
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={distChart}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                label={({ name, value }) => `${name}: ${value}`}
                labelLine={false}
              >
                {distChart.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Upcoming Renewals */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Upcoming Renewals
          </h3>
          <button
            onClick={() => navigate('/subscriptions')}
            className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400"
          >
            View all
          </button>
        </div>
        {stats.upcomingRenewals.length === 0 ? (
          <p className="text-sm text-gray-500 py-8 text-center">No upcoming renewals</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 text-left">
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Application</th>
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Plan</th>
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Renewal Date</th>
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Cost</th>
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {stats.upcomingRenewals.slice(0, 6).map((s) => (
                  <tr key={s.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                    <td className="py-3 font-medium text-gray-900 dark:text-white">
                      {getAppName(s.applicationId)}
                    </td>
                    <td className="py-3 text-gray-600 dark:text-gray-300">{s.planName}</td>
                    <td className="py-3 text-gray-600 dark:text-gray-300">
                      {formatDate(s.renewalDate)}
                    </td>
                    <td className="py-3 text-gray-600 dark:text-gray-300">
                      {formatCurrency(s.cost)}/{s.billingCycle === 'Yearly' ? 'yr' : 'mo'}
                    </td>
                    <td className="py-3">
                      <Badge status={s.renewalStatus} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
