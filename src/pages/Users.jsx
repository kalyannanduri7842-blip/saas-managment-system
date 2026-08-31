import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Pencil, Trash2, Eye, Link2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import SearchBar from '../components/SearchBar';
import Badge from '../components/Badge';
import Modal from '../components/Modal';
import ConfirmDialog from '../components/ConfirmDialog';
import EmptyState from '../components/EmptyState';
import { ROLES, USER_STATUSES } from '../data/sampleData';

const emptyForm = {
  name: '',
  email: '',
  department: '',
  role: 'Employee',
  status: 'Active',
  assignedApps: [],
};

export default function Users() {
  const { users, applications, addUser, updateUser, deleteUser, assignAppsToUser } = useApp();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [assignOpen, setAssignOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [assignUser, setAssignUser] = useState(null);
  const [selectedApps, setSelectedApps] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [deleteId, setDeleteId] = useState(null);

  const filtered = useMemo(() => {
    return users.filter((u) => {
      const q = search.toLowerCase();
      const matchSearch = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
      const matchRole = !roleFilter || u.role === roleFilter;
      const matchStatus = !statusFilter || u.status === statusFilter;
      return matchSearch && matchRole && matchStatus;
    });
  }, [users, search, roleFilter, statusFilter]);

  const openAdd = () => {
    setEditing(null);
    setForm(emptyForm);
    setErrors({});
    setModalOpen(true);
  };

  const openEdit = (user) => {
    setEditing(user);
    setForm({ ...user, assignedApps: user.assignedApps || [] });
    setErrors({});
    setModalOpen(true);
  };

  const openAssign = (user) => {
    setAssignUser(user);
    setSelectedApps(user.assignedApps || []);
    setAssignOpen(true);
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.role) e.role = 'Role is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (editing) {
      updateUser(editing.id, form);
    } else {
      addUser(form);
    }
    setModalOpen(false);
  };

  const handleAssign = () => {
    if (assignUser) {
      assignAppsToUser(assignUser.id, selectedApps);
      setAssignOpen(false);
    }
  };

  const toggleApp = (appId) => {
    setSelectedApps((prev) =>
      prev.includes(appId) ? prev.filter((id) => id !== appId) : [...prev, appId]
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row gap-3 flex-1">
          <div className="sm:w-64">
            <SearchBar value={search} onChange={setSearch} placeholder="Search by name or email..." />
          </div>
          <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} className="input sm:w-36">
            <option value="">All Roles</option>
            {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="input sm:w-36">
            <option value="">All Statuses</option>
            {USER_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <button onClick={openAdd} className="btn-primary shrink-0">
          <Plus className="h-4 w-4" /> Add User
        </button>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="No users found"
          description="Add team members to manage application access"
          action={!search && !roleFilter && !statusFilter && (
            <button onClick={openAdd} className="btn-primary"><Plus className="h-4 w-4" /> Add User</button>
          )}
        />
      ) : (
        <div className="card p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-left">
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Name</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 hidden md:table-cell">Email</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 hidden lg:table-cell">Department</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Role</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 hidden sm:table-cell">Apps</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {filtered.map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-900 dark:text-white">{u.name}</div>
                      <div className="text-xs text-gray-400 md:hidden">{u.email}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 hidden md:table-cell">{u.email}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 hidden lg:table-cell">{u.department}</td>
                    <td className="px-4 py-3"><Badge status={u.role} /></td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 hidden sm:table-cell">
                      {(u.assignedApps || []).length}
                    </td>
                    <td className="px-4 py-3"><Badge status={u.status} /></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => navigate(`/users/${u.id}`)} className="btn-ghost p-1.5" title="View">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button onClick={() => openAssign(u)} className="btn-ghost p-1.5" title="Assign Apps">
                          <Link2 className="h-4 w-4" />
                        </button>
                        <button onClick={() => openEdit(u)} className="btn-ghost p-1.5" title="Edit">
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button onClick={() => setDeleteId(u.id)} className="btn-ghost p-1.5 text-red-500" title="Delete">
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
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Edit User' : 'Add User'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">Name *</label>
            <input className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="label">Email *</label>
            <input type="email" className="input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="label">Department</label>
            <input className="input" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">Role *</label>
              <select className="input" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Status</label>
              <select className="input" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                {USER_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={() => setModalOpen(false)} className="btn-secondary">Cancel</button>
            <button type="submit" className="btn-primary">{editing ? 'Update' : 'Add'} User</button>
          </div>
        </form>
      </Modal>

      {/* Assign Apps Modal */}
      <Modal open={assignOpen} onClose={() => setAssignOpen(false)} title={`Assign Apps – ${assignUser?.name || ''}`}>
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {applications.map((app) => (
            <label
              key={app.id}
              className="flex items-center gap-3 rounded-lg border border-gray-200 dark:border-gray-700 p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30"
            >
              <input
                type="checkbox"
                checked={selectedApps.includes(app.id)}
                onChange={() => toggleApp(app.id)}
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{app.name}</p>
                <p className="text-xs text-gray-400">{app.category}</p>
              </div>
              <Badge status={app.status} />
            </label>
          ))}
        </div>
        <div className="flex justify-end gap-3 pt-4">
          <button onClick={() => setAssignOpen(false)} className="btn-secondary">Cancel</button>
          <button onClick={handleAssign} className="btn-primary">Save Assignments</button>
        </div>
      </Modal>

      <ConfirmDialog
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={() => deleteUser(deleteId)}
        title="Delete User"
        message="Are you sure you want to delete this user?"
      />
    </div>
  );
}
