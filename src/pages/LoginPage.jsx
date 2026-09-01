import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight, CheckCircle2, AlertCircle, UserPlus, LogIn } from 'lucide-react';
import { useAleans } from '../context/AleansContext';

export default function LoginPage() {
  const { login, register } = useAleans();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Registration Form
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('password123');
  const [regRole, setRegRole] = useState('Employee'); // 'Admin' | 'Manager' | 'Employee'
  const [regDept, setRegDept] = useState('Engineering & R&D');
  const [regBranch, setRegBranch] = useState('Hyderabad HQ (Hitec City)');
  const [regPhone, setRegPhone] = useState('+91 98490 12345');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');
    const res = login(email, password);
    if (res.success) {
      navigate('/');
    } else {
      setError(res.error);
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!regName.trim() || !regEmail.trim()) {
      setError('Please provide your name and email address');
      return;
    }

    register({
      name: regName,
      email: regEmail,
      password: regPassword,
      role: regRole,
      systemRole: regRole,
      department: regDept,
      location: regBranch,
      phone: regPhone,
    });

    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-600 text-white font-extrabold text-2xl shadow-xl shadow-emerald-600/20 mb-3 ring-4 ring-emerald-50">
          k
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Alea ERP</h2>
        <p className="text-xs text-slate-500 font-medium">Enterprise Resource Planning & Business Operating System</p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50">
          {/* Tab Switcher */}
          <div className="flex rounded-xl bg-slate-100 p-1 mb-6 border border-slate-200">
            <button
              type="button"
              onClick={() => { setActiveTab('login'); setError(''); }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                activeTab === 'login' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('register'); setError(''); }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                activeTab === 'register' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Register New Account
            </button>
          </div>

          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          {activeTab === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Corporate Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your registered email"
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block font-bold text-slate-700">Password</label>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 shadow-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition"
              >
                <span>Sign In to My Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-center">
                <p className="text-[11px] text-slate-400">
                  New employee? <button type="button" onClick={() => setActiveTab('register')} className="text-emerald-700 font-bold hover:underline">Register your account</button>
                </p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Full Legal Name</label>
                <input
                  type="text"
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  placeholder="e.g. Kalyan"
                  required
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500 shadow-sm"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Corporate Email Address</label>
                <input
                  type="email"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  placeholder="e.g. kalyan@company.com"
                  required
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500 shadow-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Access Role Mode</label>
                  <select
                    value={regRole}
                    onChange={(e) => setRegRole(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-semibold focus:outline-none focus:border-emerald-500 shadow-sm"
                  >
                    <option value="Employee">Employee (My Portal & ESS)</option>
                    <option value="Manager">Manager (Team Approval Dashboard)</option>
                    <option value="Admin">Admin (Executive Master Cockpit)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Department</label>
                  <select
                    value={regDept}
                    onChange={(e) => setRegDept(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500 shadow-sm"
                  >
                    <option value="Executive Board">Executive Board</option>
                    <option value="Sales & Growth">Sales & Growth</option>
                    <option value="Engineering & R&D">Engineering & R&D</option>
                    <option value="Finance & Accounts">Finance & Accounts</option>
                    <option value="Operations & Procurement">Operations & Procurement</option>
                    <option value="Human Resources & L&D">Human Resources & L&D</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Operating Branch</label>
                  <select
                    value={regBranch}
                    onChange={(e) => setRegBranch(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500 shadow-sm"
                  >
                    <option value="Hyderabad HQ (Hitec City)">Hyderabad HQ</option>
                    <option value="Bengaluru Tech Center">Bengaluru Tech Center</option>
                    <option value="Mumbai Financial Hub">Mumbai Financial Hub</option>
                    <option value="Chennai Plant & Depot">Chennai Plant & Depot</option>
                    <option value="Delhi NCR Office">Delhi NCR Office</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Password</label>
                  <input
                    type="password"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500 shadow-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition"
              >
                <span>Register & Access Workspace</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
