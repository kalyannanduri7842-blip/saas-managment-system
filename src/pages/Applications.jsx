import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Pencil, Trash2, Eye, ExternalLink } from 'lucide-react';
import { useApp } from '../context/AppContext';
import SearchBar from '../components/SearchBar';
import Badge from '../components/Badge';
import Modal from '../components/Modal';
import ConfirmDialog from '../components/ConfirmDialog';
import EmptyState from '../components/EmptyState';
import { formatCurrency, formatDate } from '../utils/calculations';
import { CATEGORIES, APP_STATUSES } from '../data/sampleData';

const emptyForm = {
  name: '',
  vendor: '',
  category: 'Productivity',
  description: '',
  website: '',
  status: 'Active',
  numberOfUsers: 0,
  subscriptionPlan: '',
  monthlyCost: 0,
  renewalDate: '',
};

export default function Applications() {
  const { applications, addApplication, updateApplication, deleteApplication } = useApp();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [deleteId, setDeleteId] = useState(null);

  const filtered = useMemo(() => {
    return applications.filter((a) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        a.name.toLowerCase().includes(q) ||
        a.vendor.toLowerCase().includes(q);
      const matchCat = !categoryFilter || a.category === categoryFilter;
      const matchStatus = !statusFilter || a.status === statusFilter;
      return matchSearch && matchCat && matchStatus;
    });
  }, [applications, search, categoryFilter, statusFilter]);

  const openAdd = () => {
    setEditing(null);
    setForm(emptyForm);
    setErrors({});
    setModalOpen(true);
  };

  const openEdit = (app) => {
    setEditing(app);
    setForm({ ...app });
    setErrors({});
    setModalOpen(true);
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.vendor.trim()) e.vendor = 'Vendor is required';
    if (!form.category) e.category = 'Category is required';
    if (form.monthlyCost < 0) e.monthlyCost = 'Cost cannot be negative';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const data = {
      ...form,
      numberOfUsers: Number(form.numberOfUsers) || 0,
      monthlyCost: Number(form.monthlyCost) || 0,
    };
    if (editing) {
      updateApplication(editing.id, data);
    } else {
      addApplication(data);
    }
    setModalOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row gap-3 flex-1">
          <div className="sm:w-64">
            <SearchBar value={search} onChange={setSearch} placeholder="Search by name or vendor..." />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="input sm:w-40"
          >
            <option value="">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="input sm:w-36"
          >
            <option value="">All Statuses</option>
            {APP_STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <button onClick={openAdd} className="btn-primary shrink-0">
          <Plus className="h-4 w-4" /> Add Application
        </button>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="No applications found"
          description={search || categoryFilter || statusFilter ? 'Try adjusting your filters' : 'Add your first SaaS application to get started'}
          action={
            !search && !categoryFilter && !statusFilter && (
              <button onClick={openAdd} className="btn-primary">
                <Plus className="h-4 w-4" /> Add Application
              </button>
            )
          }
        />
      ) : (
        <div className="card p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-left">
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Name</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 hidden md:table-cell">Category</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 hidden lg:table-cell">Vendor</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 hidden sm:table-cell">Users</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 hidden lg:table-cell">Monthly Cost</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 hidden xl:table-cell">Renewal</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {filtered.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-900 dark:text-white">{app.name}</div>
                      <div className="text-xs text-gray-400 md:hidden">{app.category}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 hidden md:table-cell">{app.category}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 hidden lg:table-cell">{app.vendor}</td>
                    <td className="px-4 py-3"><Badge status={app.status} /></td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 hidden sm:table-cell">{app.numberOfUsers}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 hidden lg:table-cell">
                      {formatCurrency(app.monthlyCost)}
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 hidden xl:table-cell">
                      {formatDate(app.renewalDate)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => navigate(`/applications/${app.id}`)}
                          className="btn-ghost p-1.5"
                          title="View"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button onClick={() => openEdit(app)} className="btn-ghost p-1.5" title="Edit">
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => setDeleteId(app.id)}
                          className="btn-ghost p-1.5 text-red-500 hover:text-red-600"
                          title="Delete"
                        >
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

      {/* Add/Edit Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing ? 'Edit Application' : 'Add Application'}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label">Name *</label>
              <input className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="label">Vendor *</label>
              <input className="input" value={form.vendor} onChange={(e) => setForm({ ...form, vendor: e.target.value })} />
              {errors.vendor && <p className="text-xs text-red-500 mt-1">{errors.vendor}</p>}
            </div>
            <div>
              <label className="label">Category *</label>
              <select className="input" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Status</label>
              <select className="input" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                {APP_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Website</label>
              <input className="input" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} placeholder="https://" />
            </div>
            <div>
              <label className="label">Subscription Plan</label>
              <input className="input" value={form.subscriptionPlan} onChange={(e) => setForm({ ...form, subscriptionPlan: e.target.value })} />
            </div>
            <div>
              <label className="label">Number of Users</label>
              <input type="number" className="input" value={form.numberOfUsers} onChange={(e) => setForm({ ...form, numberOfUsers: e.target.value })} min="0" />
            </div>
            <div>
              <label className="label">Monthly Cost ($)</label>
              <input type="number" step="0.01" className="input" value={form.monthlyCost} onChange={(e) => setForm({ ...form, monthlyCost: e.target.value })} min="0" />
            </div>
            <div>
              <label className="label">Renewal Date</label>
              <input type="date" className="input" value={form.renewalDate} onChange={(e) => setForm({ ...form, renewalDate: e.target.value })} />
            </div>
          </div>
          <div>
            <label className="label">Description</label>
            <textarea className="input" rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={() => setModalOpen(false)} className="btn-secondary">Cancel</button>
            <button type="submit" className="btn-primary">{editing ? 'Update' : 'Add'} Application</button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={() => deleteApplication(deleteId)}
        title="Delete Application"
        message="Are you sure you want to delete this application? Related subscriptions will also be removed."
      />
    </div>
  );
}
