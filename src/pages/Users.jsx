import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Pencil, Trash2, Eye, LogIn, UserCheck, Shield, Sparkles, Building, Mail } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import SearchBar from '../components/SearchBar';
import Badge from '../components/Badge';
import Modal from '../components/Modal';
import ConfirmDialog from '../components/ConfirmDialog';
import EmptyState from '../components/EmptyState';
import { ROLES, DEPARTMENTS } from '../data/sampleData';

const emptyForm = {
  name: '',
  email: '',
  department: 'Engineering',
  role: 'Employee',
  status: 'Active',
  assignedApps: ['app-1', 'app-2'],
};

export default function Users() {
  const { users, applications, addUser, updateUser, deleteUser, showToast } = useApp();
  const { currentUser, loginAs } = useAuth();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [deptFilter, setDeptFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [deleteId, setDeleteId] = useState(null);

  const filtered = useMemo(() => {
    return users.filter((u) => {
      const q = search.toLowerCase();
      const matchSearch = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
      const matchRole = !roleFilter || u.role === roleFilter;
      const matchDept = !deptFilter || u.department === deptFilter;
      return matchSearch && matchRole && matchDept;
    });
  }, [users, search, roleFilter, deptFilter]);

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

  const handleSwitchAccount = (user) => {
    loginAs(user.id);
    showToast(`Switched active employee to ${user.name} (${user.role})`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    if (editing) {
      updateUser(editing.id, form);
    } else {
      addUser(form);
    }
    setModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header action bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Employee & Team Directory</h2>
          <p className="text-xs text-gray-500 dark:text-slate-400">
            Manage company staff, assigned SaaS licenses, and switch employee workspaces.
          </p>
        </div>
        <button
          onClick={openAdd}
          className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5 transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Onboard Employee</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} placeholder="Search employees by name or email..." />
        </div>
        <select
          value={deptFilter}
          onChange={(e) => setDeptFilter(e.target.value)}
          className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500"
        >
          <option value="">All Departments</option>
          {DEPARTMENTS.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500"
        >
          <option value="">All Roles</option>
          {ROLES.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Employee List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.length === 0 ? (
          <div className="col-span-full">
            <EmptyState title="No employees found" description="Try adjusting your filters or onboard a new staff member." />
          </div>
        ) : (
          filtered.map((user) => {
            const isSelf = currentUser?.id === user.id;
            return (
              <div
                key={user.id}
                className={`p-5 rounded-2xl bg-white dark:bg-slate-900 border transition-all shadow-md flex flex-col justify-between ${
                  isSelf
                    ? 'border-emerald-500/60 ring-2 ring-emerald-500/20 shadow-emerald-500/10'
                    : 'border-gray-200 dark:border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                        alt={user.name}
                        className="w-12 h-12 rounded-xl object-cover ring-1 ring-slate-700 shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate">{user.name}</h3>
                          {isSelf && (
                            <span className="px-1.5 py-0.2 rounded-md bg-emerald-500/20 text-emerald-400 font-bold text-[9px]">
                              YOU
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-slate-400 truncate">{user.title || user.role}</p>
                        <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold truncate mt-0.5">
                          {user.department}
                        </p>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-700/50">
                      {user.role}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-gray-500 dark:text-slate-400 border-t border-gray-100 dark:border-slate-800/80 pt-3 my-3">
                    <div className="flex items-center gap-2 truncate">
                      <Mail className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                      <span className="truncate">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                      <span>{user.assignedApps?.length || 3} Assigned SaaS Tools</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-gray-100 dark:border-slate-800/80">
                  <button
                    onClick={() => handleSwitchAccount(user)}
                    className={`flex-1 py-1.5 px-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition ${
                      isSelf
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : 'bg-slate-800 hover:bg-emerald-950/60 text-slate-300 hover:text-emerald-400 border border-slate-700 hover:border-emerald-500/40'
                    }`}
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>{isSelf ? 'Active Session' : 'Login As'}</span>
                  </button>

                  <button
                    onClick={() => openEdit(user)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
                    title="Edit Employee"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setDeleteId(user.id)}
                    className="p-2 text-gray-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition"
                    title="Remove Employee"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Add/Edit Employee Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Edit Employee' : 'Onboard Employee'}>
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-300 mb-1">Full Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Thomas Wayne"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
            />
            {errors.name && <p className="text-rose-400 text-[10px] mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block font-semibold text-slate-300 mb-1">Corporate Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="thomas@enterprise.io"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
            />
            {errors.email && <p className="text-rose-400 text-[10px] mt-1">{errors.email}</p>}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-300 mb-1">Department</label>
              <select
                value={form.department}
                onChange={(e) => setForm({ ...form, department: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-2 text-white focus:outline-none focus:border-emerald-500"
              >
                {DEPARTMENTS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-300 mb-1">Access Role</label>
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-2 text-white focus:outline-none focus:border-emerald-500"
              >
                {ROLES.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-3 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold shadow-lg shadow-emerald-600/25"
            >
              Save Employee
            </button>
          </div>
        </form>
      </Modal>

      {/* Confirm Delete */}
      <ConfirmDialog
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={() => {
          deleteUser(deleteId);
          setDeleteId(null);
        }}
        title="Remove Employee"
        message="Are you sure you want to remove this employee from the directory? Their SaaS tool assignments will be unlinked."
      />
    </div>
  );
}
