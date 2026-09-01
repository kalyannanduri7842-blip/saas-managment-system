import React, { useState } from 'react';
import { Receipt, CheckCircle2, DollarSign, Plus, X } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function PayrollPage() {
  const { payroll, employees, addAuditLog, addNotification } = useAleans();
  const [disbursed, setDisbursed] = useState(false);

  const handleRunPayroll = () => {
    setDisbursed(true);
    addNotification('Payroll Executed', `September 2026 payroll processed for ${employees.length} employees.`);
    addAuditLog('DISBURSE_PAYROLL', 'Payroll', `Executed salary disbursals via HDFC SFMS API`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Statutory Payroll & Tax Engine</h2>
          <p className="text-xs text-slate-500">Provident Fund (EPF), ESI, TDS Tax Withholding & SFMS Bank API.</p>
        </div>
        <button
          onClick={handleRunPayroll}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition self-start sm:self-auto"
        >
          <Receipt className="w-4 h-4" /> <span>+ Execute Monthly Payroll</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Total Disbursed (Cycle)</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">{disbursed ? '₹14,50,000' : '₹0'}</p>
          <span className="text-[10px] text-slate-400 mt-1">{payroll.currentCycle}</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Registered Employees</p>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1">{employees.length} Staff</p>
          <span className="text-[10px] text-slate-400 mt-1">Eligible for Disbursal</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Statutory Deductions (PF/ESI/TDS)</p>
          <p className="text-2xl font-extrabold text-teal-600 mt-1">{disbursed ? '₹2,45,000' : '₹0'}</p>
          <span className="text-[10px] text-slate-400 mt-1">Compliant Withholding</span>
        </div>
      </div>

      {/* Disbursal Status */}
      <div className="card p-5">
        <h3 className="text-sm font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
          Corporate Banking Disbursal Status
        </h3>
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between">
          <div>
            <div className="font-bold text-slate-900">
              {disbursed ? 'Bank Disbursal Completed (HDFC SFMS API)' : 'No active cycle run for September 2026'}
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {disbursed ? `Direct deposit credited to ${employees.length} staff accounts.` : 'Click "+ Execute Monthly Payroll" to compute wages and disburse.'}
            </p>
          </div>
          <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
            disbursed ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-600 border border-slate-200'
          }`}>
            {disbursed ? 'Processed' : 'Draft'}
          </span>
        </div>
      </div>
    </div>
  );
}
