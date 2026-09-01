import { useState } from 'react';
import {
  User,
  Clock,
  Calendar,
  FileText,
  Download,
  Plus,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  Layers
} from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function EmployeeDashboardPage() {
  const { currentUser, addNotification, addAuditLog } = useAleans();
  const [clockedIn, setClockedIn] = useState(true);

  // Quick Leave Request
  const [leaveDays, setLeaveDays] = useState('2');
  const [leaveType, setLeaveType] = useState('Casual Leave (CL)');
  const [leaveReason, setLeaveReason] = useState('');
  const [leaveSubmitted, setLeaveSubmitted] = useState(false);

  // Quick Expense Claim
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseSubmitted, setExpenseSubmitted] = useState(false);

  const handleClockToggle = () => {
    const nextState = !clockedIn;
    setClockedIn(nextState);
    const action = nextState ? 'Clocked In (09:15 AM)' : 'Clocked Out (06:30 PM)';
    addNotification('Biometric Attendance', `${currentUser?.name} ${action}`);
    addAuditLog(nextState ? 'CLOCK_IN' : 'CLOCK_OUT', 'Employee Dashboard', `${currentUser?.name} logged attendance`);
  };

  const handleLeaveSubmit = (e) => {
    e.preventDefault();
    setLeaveSubmitted(true);
    addNotification('Leave Request Submitted', `${currentUser?.name} applied for ${leaveDays} days ${leaveType}`);
    addAuditLog('APPLY_LEAVE', 'Employee Dashboard', `${currentUser?.name} submitted leave request for ${leaveDays} days`);
    setTimeout(() => {
      setLeaveSubmitted(false);
      setLeaveReason('');
    }, 4000);
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    if (!expenseTitle || !expenseAmount) return;
    setExpenseSubmitted(true);
    addNotification('Expense Claim Submitted', `${currentUser?.name} claimed ₹${expenseAmount} for ${expenseTitle}`);
    addAuditLog('CLAIM_EXPENSE', 'Employee Dashboard', `${currentUser?.name} submitted expense claim for ₹${expenseAmount}`);
    setTimeout(() => {
      setExpenseSubmitted(false);
      setExpenseTitle('');
      setExpenseAmount('');
    }, 4000);
  };

  return (
    <div className="space-y-6">
      {/* Top Welcome Header */}
      <div className="card bg-white border-slate-200 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-md shadow-emerald-600/20 ring-4 ring-emerald-50">
            {currentUser?.code || 'EM'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold text-slate-900">{currentUser?.name}</h1>
              <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">{currentUser?.code}</span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">{currentUser?.title || currentUser?.role} • {currentUser?.department}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Location: {currentUser?.location} • CTC: {currentUser?.ctc}</p>
          </div>
        </div>

        <button
          onClick={handleClockToggle}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-md transition ${
            clockedIn ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>{clockedIn ? 'Biometric Clocked In (09:15 AM)' : 'Clock In Now'}</span>
        </button>
      </div>

      {/* Leave Quota Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Casual Leave (CL)</p>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1">{currentUser?.leavesBalance?.cl || 12} Days</p>
          <span className="text-[10px] text-slate-400 mt-0.5">Available balance</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Sick Leave (SL)</p>
          <p className="text-2xl font-extrabold text-teal-600 mt-1">{currentUser?.leavesBalance?.sl || 8} Days</p>
          <span className="text-[10px] text-slate-400 mt-0.5">Medical certification balance</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Privilege Leave (PL)</p>
          <p className="text-2xl font-extrabold text-amber-600 mt-1">{currentUser?.leavesBalance?.pl || 15} Days</p>
          <span className="text-[10px] text-slate-400 mt-0.5">Annual vacation quota</span>
        </div>
      </div>

      {/* Fast Ingestion Actions: Apply Leave & File Expense */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fast Apply Leave */}
        <div className="card p-5">
          <h3 className="text-sm font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
            Submit Leave Request to Manager
          </h3>

          {leaveSubmitted ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Leave request submitted! Routed to your department manager for sign-off.</span>
            </div>
          ) : (
            <form onSubmit={handleLeaveSubmit} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Leave Type</label>
                  <select
                    value={leaveType}
                    onChange={(e) => setLeaveType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Casual Leave (CL)">Casual Leave (CL)</option>
                    <option value="Sick Leave (SL)">Sick Leave (SL)</option>
                    <option value="Privilege Leave (PL)">Privilege Leave (PL)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Duration (Days)</label>
                  <input
                    type="number"
                    value={leaveDays}
                    onChange={(e) => setLeaveDays(e.target.value)}
                    min="1"
                    max="15"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Reason / Notes</label>
                <input
                  type="text"
                  value={leaveReason}
                  onChange={(e) => setLeaveReason(e.target.value)}
                  placeholder="e.g. Personal family work"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition"
              >
                Submit Leave Application
              </button>
            </form>
          )}
        </div>

        {/* Fast Claim Expense */}
        <div className="card p-5">
          <h3 className="text-sm font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
            Submit Expense Reimbursement Claim
          </h3>

          {expenseSubmitted ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Expense claim of ₹{expenseAmount} submitted for finance review.</span>
            </div>
          ) : (
            <form onSubmit={handleExpenseSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Expense Title / Vendor</label>
                <input
                  type="text"
                  value={expenseTitle}
                  onChange={(e) => setExpenseTitle(e.target.value)}
                  placeholder="e.g. Travel & Client Logistics"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Claim Amount (₹)</label>
                <input
                  type="text"
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                  placeholder="e.g. 4,500"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition"
              >
                Submit Expense Claim
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
