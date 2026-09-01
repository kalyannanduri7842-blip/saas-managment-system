import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppWindow,
  CreditCard,
  DollarSign,
  Users,
  Calendar,
  TrendingUp,
  Plus,
  Sparkles,
  Activity,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
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
import { useAuth } from '../context/AuthContext';
import {
  calculateDashboardStats,
  getMonthlySpendingChart,
  getAppUsageChart,
  getSubscriptionDistribution,
  formatCurrency,
  formatDate,
} from '../utils/calculations';

const COLORS = ['#10b981', '#10b981', '#8b5cf6', '#f59e0b', '#14b8a6', '#ec4899', '#ef4444'];

export default function Dashboard() {
  const { applications, subscriptions, users, expenses, auditLogs, setQuickAddOpen } = useApp();
  const { currentUser } = useAuth();
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
      {/* Active Employee Welcome & Quick Ingestion Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-slate-800 p-6 sm:p-7 shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Multi-Employee Active Session</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Welcome, {currentUser?.name || 'Sarah Jenkins'}!
            </h1>
            <p className="text-xs text-slate-400 max-w-2xl">
              Connected as <span className="text-emerald-400 font-semibold">{currentUser?.role}</span> in{' '}
              <span className="text-white font-semibold">{currentUser?.department}</span>. Any data you add or update
              instantly syncs across team dashboards with real-time audit notifications.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setQuickAddOpen(true)}
              className="px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-600/30 flex items-center gap-2 transition"
            >
              <Plus className="w-4 h-4" />
              <span>+ Quick Ingest Data</span>
            </button>
            <button
              onClick={() => navigate('/audit-log')}
              className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Audit Log</span>
            </button>
          </div>
        </div>
      </div>

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
          title="Team Licenses / Staff"
          value={users.length}
          icon={Users}
          color="cyan"
        />
      </div>

      {/* Real-time Team Activity Feed & Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Spending Bar Chart */}
        <div className="card bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-5 shadow-lg">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-between">
            <span>Monthly SaaS Spend</span>
            <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">Invoiced</span>
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyChart}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-slate-800" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} className="text-gray-500" />
              <YAxis tick={{ fontSize: 11 }} className="text-gray-500" />
              <Tooltip
                formatter={(v) => formatCurrency(v)}
                contentStyle={{
                  backgroundColor: '#0f172a',
                  borderColor: '#1e293b',
                  borderRadius: '12px',
                  fontSize: '12px',
                  color: '#fff',
                }}
              />
              <Bar dataKey="amount" fill="#10b981" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Subscriptions by Category */}
        <div className="card bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-5 shadow-lg">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-between">
            <span>Spend by Category</span>
            <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">Breakdown</span>
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

        {/* Live Multi-Employee Ingestion Stream */}
        <div className="card bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col">
          <div className="flex items-center justify-between mb-3 border-b border-gray-100 dark:border-slate-800 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Live Team Ingestions</h3>
            </div>
            <button
              onClick={() => navigate('/audit-log')}
              className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              View Full Log ➔
            </button>
          </div>

          <div className="space-y-2.5 flex-1 overflow-y-auto max-h-[220px]">
            {auditLogs.slice(0, 5).map((log) => (
              <div
                key={log.id}
                className="p-2.5 rounded-xl bg-gray-50 dark:bg-slate-950/70 border border-gray-100 dark:border-slate-800/80 text-xs"
              >
                <div className="flex items-center justify-between gap-1">
                  <div className="font-bold text-gray-900 dark:text-white truncate">
                    {log.actor}{' '}
                    <span className="text-[10px] font-normal text-emerald-600 dark:text-emerald-400">
                      ({log.role})
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-400 shrink-0">
                    {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <p className="mt-0.5 text-gray-600 dark:text-slate-300 text-[11px] leading-snug truncate">
                  {log.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Renewals Table */}
      <div className="card bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">
              Upcoming Subscription Renewals & Contracts
            </h3>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              {stats.upcomingRenewals.length} Action Required
            </span>
          </div>
          <button
            onClick={() => navigate('/subscriptions')}
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            Manage Subscriptions ➔
          </button>
        </div>

        {stats.upcomingRenewals.length === 0 ? (
          <p className="text-xs text-gray-500 py-8 text-center">No upcoming renewals found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-200 dark:border-slate-800 text-left">
                  <th className="pb-3 font-bold text-gray-500 dark:text-slate-400">Application</th>
                  <th className="pb-3 font-bold text-gray-500 dark:text-slate-400">Plan Tier</th>
                  <th className="pb-3 font-bold text-gray-500 dark:text-slate-400">Renewal Date</th>
                  <th className="pb-3 font-bold text-gray-500 dark:text-slate-400">Cost</th>
                  <th className="pb-3 font-bold text-gray-500 dark:text-slate-400">Owner</th>
                  <th className="pb-3 font-bold text-gray-500 dark:text-slate-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-slate-800/60">
                {stats.upcomingRenewals.slice(0, 6).map((s) => (
                  <tr key={s.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/40 transition">
                    <td className="py-3 font-bold text-gray-900 dark:text-white">
                      {getAppName(s.applicationId)}
                    </td>
                    <td className="py-3 text-gray-600 dark:text-slate-300">{s.planName}</td>
                    <td className="py-3 text-gray-600 dark:text-slate-300">
                      {formatDate(s.renewalDate)}
                    </td>
                    <td className="py-3 font-bold text-gray-900 dark:text-white">
                      {formatCurrency(s.cost)}/{s.billingCycle === 'Yearly' ? 'yr' : 'mo'}
                    </td>
                    <td className="py-3 text-emerald-600 dark:text-emerald-400 font-medium">
                      {s.addedBy || 'Sarah Jenkins'}
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
