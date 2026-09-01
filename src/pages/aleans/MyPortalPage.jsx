import React, { useState } from 'react';
import { Clock, Calendar, FileText, Download, CheckCircle2 } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function MyPortalPage() {
  const { currentUser, addNotification, addAuditLog } = useAleans();
  const [clockedIn, setClockedIn] = useState(true);

  const handleClockToggle = () => {
    const nextState = !clockedIn;
    setClockedIn(nextState);
    const action = nextState ? 'Clocked In (09:15 AM)' : 'Clocked Out (06:30 PM)';
    addNotification('Biometric Attendance', `${currentUser?.name || 'Staff'} ${action}`);
    addAuditLog(nextState ? 'CLOCK_IN' : 'CLOCK_OUT', 'My Portal', `${currentUser?.name || 'Staff'} logged attendance`);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="card p-6 bg-white border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white font-extrabold text-xl flex items-center justify-center shadow-md shadow-emerald-600/20 ring-4 ring-emerald-50 shrink-0">
            {currentUser?.code || 'EM'}
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-900">{currentUser?.name || 'Staff Employee'}</h1>
            <p className="text-xs text-slate-500 mt-0.5">{currentUser?.title || currentUser?.role || 'Staff'} • {currentUser?.department || 'Operations'}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Location: {currentUser?.location || 'Hyderabad HQ'} • Joined: {currentUser?.joinedDate || '2026-01-10'}</p>
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

      {/* Leave Quota */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Casual Leave (CL)</p>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1">{currentUser?.leavesBalance?.cl ?? 12} Days</p>
          <span className="text-[10px] text-slate-400 mt-0.5">Available quota</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Sick Leave (SL)</p>
          <p className="text-2xl font-extrabold text-teal-600 mt-1">{currentUser?.leavesBalance?.sl ?? 8} Days</p>
          <span className="text-[10px] text-slate-400 mt-0.5">Medical certification balance</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Privilege Leave (PL)</p>
          <p className="text-2xl font-extrabold text-amber-600 mt-1">{currentUser?.leavesBalance?.pl ?? 15} Days</p>
          <span className="text-[10px] text-slate-400 mt-0.5">Annual vacation quota</span>
        </div>
      </div>
    </div>
  );
}
