import { useState } from 'react';
import { X, Layers, CreditCard, Receipt, UserPlus, Sparkles, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { CATEGORIES, DEPARTMENTS, ROLES, BILLING_CYCLES } from '../data/sampleData';

export default function QuickAddModal({ isOpen, onClose }) {
  const { addApplication, addSubscription, addExpense, addUser, applications } = useApp();
  const { currentUser } = useAuth();

  const [activeTab, setActiveTab] = useState('app'); // 'app' | 'sub' | 'exp' | 'emp'

  // Form states
  const [appName, setAppName] = useState('');
  const [appVendor, setAppVendor] = useState('');
  const [appCategory, setAppCategory] = useState(CATEGORIES[0]);
  const [appCost, setAppCost] = useState('');
  const [appSeats, setAppSeats] = useState('10');
  const [appDept, setAppDept] = useState(DEPARTMENTS[0]);
  const [appPlan, setAppPlan] = useState('Business');

  const [subAppId, setSubAppId] = useState(applications[0]?.id || 'app-1');
  const [subPlan, setSubPlan] = useState('Enterprise Tier');
  const [subCycle, setSubCycle] = useState('Monthly');
  const [subCost, setSubCost] = useState('');
  const [subRenewal, setSubRenewal] = useState('2026-10-15');
  const [subSeats, setSubSeats] = useState('25');

  const [expTitle, setExpTitle] = useState('');
  const [expAmount, setExpAmount] = useState('');
  const [expCategory, setExpCategory] = useState(CATEGORIES[0]);
  const [expStatus, setExpStatus] = useState('Paid');

  const [empName, setEmpName] = useState('');
  const [empEmail, setEmpEmail] = useState('');
  const [empDept, setEmpDept] = useState(DEPARTMENTS[0]);
  const [empRole, setEmpRole] = useState(ROLES[1]);

  if (!isOpen) return null;

  const handleAppSubmit = (e) => {
    e.preventDefault();
    if (!appName.trim()) return;

    addApplication({
      name: appName,
      vendor: appVendor || appName,
      category: appCategory,
      monthlyCost: Number(appCost) || 50,
      numberOfUsers: Number(appSeats) || 1,
      department: appDept,
      subscriptionPlan: appPlan,
      status: 'Active',
      website: `https://${appName.toLowerCase().replace(/\s+/g, '')}.com`,
      description: `Managed SaaS tool added by ${currentUser?.name || 'Staff'}.`,
    });

    setAppName('');
    setAppCost('');
    onClose();
  };

  const handleSubSubmit = (e) => {
    e.preventDefault();
    addSubscription({
      applicationId: subAppId,
      planName: subPlan,
      billingCycle: subCycle,
      cost: Number(subCost) || 100,
      renewalDate: subRenewal,
      seats: Number(subSeats) || 10,
      usedSeats: Math.max(1, Math.floor((Number(subSeats) || 10) * 0.8)),
      status: 'Active',
    });
    setSubCost('');
    onClose();
  };

  const handleExpSubmit = (e) => {
    e.preventDefault();
    if (!expTitle.trim()) return;
    addExpense({
      title: expTitle,
      amount: Number(expAmount) || 0,
      category: expCategory,
      paymentStatus: expStatus,
      date: new Date().toISOString().split('T')[0],
    });
    setExpTitle('');
    setExpAmount('');
    onClose();
  };

  const handleEmpSubmit = (e) => {
    e.preventDefault();
    if (!empName.trim() || !empEmail.trim()) return;
    addUser({
      name: empName,
      email: empEmail,
      department: empDept,
      role: empRole,
    });
    setEmpName('');
    setEmpEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden text-slate-100 flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Live Data Ingestion Center</h2>
              <p className="text-[11px] text-slate-400">
                Logged in as <span className="text-emerald-400 font-semibold">{currentUser?.name}</span> ({currentUser?.role})
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Picker */}
        <div className="flex border-b border-slate-800 bg-slate-950/40 p-1.5 gap-1 text-xs">
          <button
            onClick={() => setActiveTab('app')}
            className={`flex-1 py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 transition ${
              activeTab === 'app' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>SaaS Tool</span>
          </button>
          <button
            onClick={() => setActiveTab('sub')}
            className={`flex-1 py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 transition ${
              activeTab === 'sub' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>Subscription</span>
          </button>
          <button
            onClick={() => setActiveTab('exp')}
            className={`flex-1 py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 transition ${
              activeTab === 'exp' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Receipt className="w-3.5 h-3.5" />
            <span>Expense</span>
          </button>
          <button
            onClick={() => setActiveTab('emp')}
            className={`flex-1 py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 transition ${
              activeTab === 'emp' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Employee</span>
          </button>
        </div>

        {/* Forms */}
        <div className="p-6">
          {activeTab === 'app' && (
            <form onSubmit={handleAppSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Application Name</label>
                  <input
                    type="text"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    placeholder="e.g. Datadog APM"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Vendor Company</label>
                  <input
                    type="text"
                    value={appVendor}
                    onChange={(e) => setAppVendor(e.target.value)}
                    placeholder="e.g. Datadog Inc."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
                  <select
                    value={appCategory}
                    onChange={(e) => setAppCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Monthly Cost ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={appCost}
                    onChange={(e) => setAppCost(e.target.value)}
                    placeholder="450.00"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Seats / Licenses</label>
                  <input
                    type="number"
                    value={appSeats}
                    onChange={(e) => setAppSeats(e.target.value)}
                    placeholder="25"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Department Owner</label>
                <select
                  value={appDept}
                  onChange={(e) => setAppDept(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  {DEPARTMENTS.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-600/25 flex items-center gap-1.5"
                >
                  <span>Submit & Update Dashboard</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {activeTab === 'sub' && (
            <form onSubmit={handleSubSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Target Application</label>
                <select
                  value={subAppId}
                  onChange={(e) => setSubAppId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  {applications.map((a) => (
                    <option key={a.id} value={a.id}>{a.name} ({a.vendor})</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Plan Tier</label>
                  <input
                    type="text"
                    value={subPlan}
                    onChange={(e) => setSubPlan(e.target.value)}
                    placeholder="e.g. Enterprise Cloud"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Billing Cycle</label>
                  <select
                    value={subCycle}
                    onChange={(e) => setSubCycle(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    {BILLING_CYCLES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Recurring Cost ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={subCost}
                    onChange={(e) => setSubCost(e.target.value)}
                    placeholder="1200.00"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Next Renewal Date</label>
                  <input
                    type="date"
                    value={subRenewal}
                    onChange={(e) => setSubRenewal(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-600/25 flex items-center gap-1.5"
                >
                  <span>Record Subscription</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {activeTab === 'exp' && (
            <form onSubmit={handleExpSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Expense / Invoice Title</label>
                <input
                  type="text"
                  value={expTitle}
                  onChange={(e) => setExpTitle(e.target.value)}
                  placeholder="e.g. AWS Cloud Cluster On-Demand Invoicing"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Total Amount ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={expAmount}
                    onChange={(e) => setExpAmount(e.target.value)}
                    placeholder="3450.00"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Payment Status</label>
                  <select
                    value={expStatus}
                    onChange={(e) => setExpStatus(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending Approval</option>
                    <option value="Failed">Failed</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-600/25 flex items-center gap-1.5"
                >
                  <span>Post Invoice to Ledger</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {activeTab === 'emp' && (
            <form onSubmit={handleEmpSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Employee Full Name</label>
                  <input
                    type="text"
                    value={empName}
                    onChange={(e) => setEmpName(e.target.value)}
                    placeholder="e.g. Jason Scott"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Corporate Email</label>
                  <input
                    type="email"
                    value={empEmail}
                    onChange={(e) => setEmpEmail(e.target.value)}
                    placeholder="jason@enterprise.io"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Department</label>
                  <select
                    value={empDept}
                    onChange={(e) => setEmpDept(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    {DEPARTMENTS.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Access Role</label>
                  <select
                    value={empRole}
                    onChange={(e) => setEmpRole(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    {ROLES.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-600/25 flex items-center gap-1.5"
                >
                  <span>Onboard & Assign Seats</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
