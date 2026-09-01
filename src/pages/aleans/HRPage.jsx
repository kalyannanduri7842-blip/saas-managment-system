import { useState } from 'react';
import { Users, Search, Plus, Filter, Mail, Phone, MapPin, CheckCircle2, ShieldCheck, X } from 'lucide-react';
import { useAleans, getInitials } from '../../context/AleansContext';

export default function HRPage() {
  const { employees, register, currentUser } = useAleans();
  const [showAddModal, setShowAddModal] = useState(false);

  // New Employee Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Employee');
  const [department, setDepartment] = useState('Engineering & R&D');
  const [location, setLocation] = useState('Hyderabad HQ');
  const [phone, setPhone] = useState('+91 98490 00000');
  const [ctc, setCtc] = useState('₹18,00,000');

  const handleCreateEmployee = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    register({
      name,
      email,
      role,
      department,
      location,
      phone,
      ctc,
    });
    setName('');
    setEmail('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Human Resources & Employee Directory</h2>
          <p className="text-xs text-slate-500">Corporate Employee Master, Department Allocations & Role Hierarchy.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> <span>+ Onboard Employee</span>
        </button>
      </div>

      {/* Directory Table */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Registered Corporate Staff</h3>
          <span className="text-xs text-slate-400">{employees.length} Members</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500 bg-slate-50">
                <th className="py-3 px-4 font-bold">Emp Code</th>
                <th className="py-3 px-4 font-bold">Employee Name</th>
                <th className="py-3 px-4 font-bold">Designation / Role</th>
                <th className="py-3 px-4 font-bold">Department</th>
                <th className="py-3 px-4 font-bold">Operating Branch</th>
                <th className="py-3 px-4 font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {employees.map((emp) => (
                <tr key={emp.id} className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-mono font-bold text-emerald-700">{emp.id}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                        {emp.code || getInitials(emp.name)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{emp.name}</div>
                        <div className="text-[11px] text-slate-400">{emp.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-slate-100 text-slate-700">
                      {emp.role}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-700 font-semibold">{emp.department}</td>
                  <td className="py-3 px-4 text-slate-500">{emp.location}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                      {emp.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Onboard Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-sm font-bold text-slate-900">Onboard New Corporate Employee</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-900">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateEmployee} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Full Legal Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Anand Kumar"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Corporate Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. anand.kumar@aleanserp.com"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Role Type</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Employee">Employee (Staff)</option>
                    <option value="Manager">Manager (Team Lead)</option>
                    <option value="Admin">Admin (Executive)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Department</label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Engineering & R&D">Engineering & R&D</option>
                    <option value="Finance & Accounts">Finance & Accounts</option>
                    <option value="Sales & Growth">Sales & Growth</option>
                    <option value="Operations & Procurement">Operations & Procurement</option>
                    <option value="Executive Board">Executive Board</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Branch</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Hyderabad HQ">Hyderabad HQ</option>
                    <option value="Bengaluru Tech Center">Bengaluru Tech Center</option>
                    <option value="Mumbai Financial Hub">Mumbai Financial Hub</option>
                    <option value="Chennai Plant & Depot">Chennai Plant & Depot</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Annual CTC</label>
                  <input
                    type="text"
                    value={ctc}
                    onChange={(e) => setCtc(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition"
                >
                  Confirm Onboarding
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
