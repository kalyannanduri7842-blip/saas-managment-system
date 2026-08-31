import { useState, useMemo } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import SearchBar from '../components/SearchBar';
import Badge from '../components/Badge';
import Modal from '../components/Modal';
import ConfirmDialog from '../components/ConfirmDialog';
import EmptyState from '../components/EmptyState';
import { formatCurrency, formatDate } from '../utils/calculations';
import { BILLING_CYCLES, SUB_STATUSES } from '../data/sampleData';

const emptyForm = {
  applicationId: '',
  planName: '',
  billingCycle: 'Monthly',
  cost: 0,
  startDate: '',
  renewalDate: '',
  seats: 1,
  usedSeats: 0,
  status: 'Active',
};

export default function Subscriptions() {
  const { applications, subscriptions, addSubscription, updateSubscription, deleteSubscription } = useApp();
  const [search, setSearch] = useState('');
  const [cycleFilter, setCycleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [deleteId, setDeleteId] = useState(null);

  const getAppName = (id) => applications.find((a) => a.id === id)?.name || 'Unknown';

  const filtered = useMemo(() => {
    return subscriptions.filter((s) => {
      const appName = getAppName(s.applicationId).toLowerCase();
      const q = search.toLowerCase();
      const matchSearch = !q || appName.includes(q) || s.planName.toLowerCase().includes(q);
      const matchCycle = !cycleFilter || s.billingCycle === cycleFilter;
      const matchStatus = !statusFilter || s.status === statusFilter;
      return matchSearch && matchCycle && matchStatus;
    });
  }, [subscriptions, search, cycleFilter, statusFilter, applications]);

  const openAdd = () => {
    setEditing(null);
    setForm({ ...emptyForm, applicationId: applications[0]?.id || '' });
    setErrors({});
    setModalOpen(true);
  };

  const openEdit = (sub) => {
    setEditing(sub);
    setForm({ ...sub });
    setErrors({});
    setModalOpen(true);
  };

  const validate = () => {
    const e = {};
    if (!form.applicationId) e.applicationId = 'Application is required';
    if (!form.planName.trim()) e.planName = 'Plan name is required';
    if (!form.cost || Number(form.cost) <= 0) e.cost = 'Cost must be greater than 0';
    if (!form.renewalDate) e.renewalDate = 'Renewal date is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const data = {
      ...form,
      cost: Number(form.cost),
      seats: Number(form.seats) || 1,
      usedSeats: Number(form.usedSeats) || 0,
    };
    if (editing) {
      updateSubscription(editing.id, data);
    } else {
      addSubscription(data);
    }
    setModalOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row gap-3 flex-1">
          <div className="sm:w-64">
            <SearchBar value={search} onChange={setSearch} placeholder="Search by application..." />
          </div>
          <select value={cycleFilter} onChange={(e) => setCycleFilter(e.target.value)} className="input sm:w-36">
            <option value="">All Cycles</option>
            {BILLING_CYCLES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="input sm:w-36">
            <option value="">All Statuses</option>
            {SUB_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <button onClick={openAdd} className="btn-primary shrink-0">
          <Plus className="h-4 w-4" /> Add Subscription
        </button>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="No subscriptions found"
          description="Add a subscription to track billing and renewals"
          action={!search && !cycleFilter && !statusFilter && (
            <button onClick={openAdd} className="btn-primary"><Plus className="h-4 w-4" /> Add Subscription</button>
          )}
        />
      ) : (
        <div className="card p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-left">
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Application</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Plan</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 hidden md:table-cell">Cycle</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Cost</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 hidden lg:table-cell">Seats</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 hidden sm:table-cell">Renewal</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {filtered.map((s) => (
                  <tr key={s.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{getAppName(s.applicationId)}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{s.planName}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 hidden md:table-cell">{s.billingCycle}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{formatCurrency(s.cost)}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 hidden lg:table-cell">{s.usedSeats}/{s.seats}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 hidden sm:table-cell">{formatDate(s.renewalDate)}</td>
                    <td className="px-4 py-3"><Badge status={s.status} /></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => openEdit(s)} className="btn-ghost p-1.5"><Pencil className="h-4 w-4" /></button>
                        <button onClick={() => setDeleteId(s.id)} className="btn-ghost p-1.5 text-red-500"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Edit Subscription' : 'Add Subscription'} size="lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label">Application *</label>
              <select className="input" value={form.applicationId} onChange={(e) => setForm({ ...form, applicationId: e.target.value })}>
                <option value="">Select application</option>
                {applications.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
              </select>
              {errors.applicationId && <p className="text-xs text-red-500 mt-1">{errors.applicationId}</p>}
            </div>
            <div>
              <label className="label">Plan Name *</label>
              <input className="input" value={form.planName} onChange={(e) => setForm({ ...form, planName: e.target.value })} />
              {errors.planName && <p className="text-xs text-red-500 mt-1">{errors.planName}</p>}
            </div>
            <div>
              <label className="label">Billing Cycle</label>
              <select className="input" value={form.billingCycle} onChange={(e) => setForm({ ...form, billingCycle: e.target.value })}>
                {BILLING_CYCLES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Cost ($) *</label>
              <input type="number" step="0.01" className="input" value={form.cost} onChange={(e) => setForm({ ...form, cost: e.target.value })} min="0" />
              {errors.cost && <p className="text-xs text-red-500 mt-1">{errors.cost}</p>}
            </div>
            <div>
              <label className="label">Start Date</label>
              <input type="date" className="input" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
            </div>
            <div>
              <label className="label">Renewal Date *</label>
              <input type="date" className="input" value={form.renewalDate} onChange={(e) => setForm({ ...form, renewalDate: e.target.value })} />
              {errors.renewalDate && <p className="text-xs text-red-500 mt-1">{errors.renewalDate}</p>}
            </div>
            <div>
              <label className="label">Total Seats</label>
              <input type="number" className="input" value={form.seats} onChange={(e) => setForm({ ...form, seats: e.target.value })} min="1" />
            </div>
            <div>
              <label className="label">Used Seats</label>
              <input type="number" className="input" value={form.usedSeats} onChange={(e) => setForm({ ...form, usedSeats: e.target.value })} min="0" />
            </div>
            <div>
              <label className="label">Status</label>
              <select className="input" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                {SUB_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={() => setModalOpen(false)} className="btn-secondary">Cancel</button>
            <button type="submit" className="btn-primary">{editing ? 'Update' : 'Add'} Subscription</button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={() => deleteSubscription(deleteId)}
        title="Delete Subscription"
        message="Are you sure you want to delete this subscription?"
      />
    </div>
  );
}
