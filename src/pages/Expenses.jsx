import { useState, useMemo } from 'react';
import { Plus, Trash2, DollarSign, Calendar, TrendingUp } from 'lucide-react';
import { useApp } from '../context/AppContext';
import SearchBar from '../components/SearchBar';
import Badge from '../components/Badge';
import Modal from '../components/Modal';
import ConfirmDialog from '../components/ConfirmDialog';
import EmptyState from '../components/EmptyState';
import DashboardCard from '../components/DashboardCard';
import { formatCurrency, formatDate } from '../utils/calculations';
import { PAYMENT_STATUSES, BILLING_CYCLES, CATEGORIES } from '../data/sampleData';

const emptyForm = {
  applicationId: '',
  category: 'Productivity',
  amount: 0,
  billingCycle: 'Monthly',
  date: new Date().toISOString().slice(0, 10),
  paymentStatus: 'Paid',
};

export default function Expenses() {
  const { expenses, applications, addExpense, deleteExpense } = useApp();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [deleteId, setDeleteId] = useState(null);

  const getAppName = (id) => applications.find((a) => a.id === id)?.name || 'Unknown';

  const filtered = useMemo(() => {
    return expenses.filter((e) => {
      const appName = getAppName(e.applicationId).toLowerCase();
      const q = search.toLowerCase();
      const matchSearch = !q || appName.includes(q) || e.category.toLowerCase().includes(q);
      const matchStatus = !statusFilter || e.paymentStatus === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [expenses, search, statusFilter, applications]);

  const totals = useMemo(() => {
    const total = expenses.reduce((s, e) => s + e.amount, 0);
    const now = new Date();
    const thisMonth = expenses
      .filter((e) => {
        const d = new Date(e.date);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      })
      .reduce((s, e) => s + e.amount, 0);
    const thisYear = expenses
      .filter((e) => new Date(e.date).getFullYear() === now.getFullYear())
      .reduce((s, e) => s + e.amount, 0);
    return { total, thisMonth, thisYear };
  }, [expenses]);

  const validate = () => {
    const e = {};
    if (!form.applicationId) e.applicationId = 'Application is required';
    if (!form.amount || Number(form.amount) <= 0) e.amount = 'Amount must be greater than 0';
    if (!form.date) e.date = 'Date is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    addExpense({ ...form, amount: Number(form.amount) });
    setModalOpen(false);
    setForm(emptyForm);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <DashboardCard title="Total Expenses" value={formatCurrency(totals.total)} icon={DollarSign} color="blue" />
        <DashboardCard title="This Month" value={formatCurrency(totals.thisMonth)} icon={Calendar} color="green" />
        <DashboardCard title="This Year" value={formatCurrency(totals.thisYear)} icon={TrendingUp} color="purple" />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row gap-3 flex-1">
          <div className="sm:w-64">
            <SearchBar value={search} onChange={setSearch} placeholder="Search expenses..." />
          </div>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="input sm:w-36">
            <option value="">All Statuses</option>
            {PAYMENT_STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() => {
            setForm({ ...emptyForm, applicationId: applications[0]?.id || '' });
            setModalOpen(true);
          }}
          className="btn-primary shrink-0"
        >
          <Plus className="h-4 w-4" /> Add Expense
        </button>
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No expenses found" description="Track your SaaS spending by adding expenses" />
      ) : (
        <div className="card p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-left">
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Application</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 hidden md:table-cell">Category</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Amount</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 hidden sm:table-cell">Cycle</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 hidden lg:table-cell">Date</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {filtered.map((e) => (
                  <tr key={e.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{getAppName(e.applicationId)}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 hidden md:table-cell">{e.category}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{formatCurrency(e.amount)}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 hidden sm:table-cell">{e.billingCycle}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 hidden lg:table-cell">{formatDate(e.date)}</td>
                    <td className="px-4 py-3"><Badge status={e.paymentStatus} /></td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end">
                        <button onClick={() => setDeleteId(e.id)} className="btn-ghost p-1.5 text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Add Expense">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">Application *</label>
            <select className="input" value={form.applicationId} onChange={(e) => setForm({ ...form, applicationId: e.target.value })}>
              <option value="">Select</option>
              {applications.map((a) => (
                <option key={a.id} value={a.id}>{a.name}</option>
              ))}
            </select>
            {errors.applicationId && <p className="text-xs text-red-500 mt-1">{errors.applicationId}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">Category</label>
              <select className="input" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Amount ($) *</label>
              <input type="number" step="0.01" className="input" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
              {errors.amount && <p className="text-xs text-red-500 mt-1">{errors.amount}</p>}
            </div>
            <div>
              <label className="label">Billing Cycle</label>
              <select className="input" value={form.billingCycle} onChange={(e) => setForm({ ...form, billingCycle: e.target.value })}>
                {BILLING_CYCLES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Date *</label>
              <input type="date" className="input" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </div>
            <div>
              <label className="label">Payment Status</label>
              <select className="input" value={form.paymentStatus} onChange={(e) => setForm({ ...form, paymentStatus: e.target.value })}>
                {PAYMENT_STATUSES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={() => setModalOpen(false)} className="btn-secondary">Cancel</button>
            <button type="submit" className="btn-primary">Add Expense</button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={() => deleteExpense(deleteId)}
        title="Delete Expense"
        message="Are you sure you want to delete this expense?"
      />
    </div>
  );
}
