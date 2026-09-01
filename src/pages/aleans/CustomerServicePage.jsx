import React, { useState } from 'react';
import { Headphones, Plus, CheckCircle2, AlertTriangle, X, Trash2 } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function CustomerServicePage() {
  const { customerService, addServiceContract, deleteServiceContract, isManagerOrAdmin } = useAleans();
  const [showAddModal, setShowAddModal] = useState(false);

  const [client, setClient] = useState('');
  const [coverage, setCoverage] = useState('24x7 Comprehensive');
  const [expiry, setExpiry] = useState('2027-06-30');

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!client) return;
    addServiceContract({
      client,
      coverage,
      expiry,
    });
    setClient('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Customer Service, AMC & Help Desk</h2>
          <p className="text-xs text-slate-500">Service level agreements, warranty tracking, AMC renewals & customer satisfaction.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> <span>+ Add Service Contract</span>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-xs">
        <div className="card p-3">
          <p className="text-[11px] font-bold text-slate-500">Active Contracts</p>
          <p className="text-xl font-extrabold text-slate-900 mt-0.5">{customerService.activeContracts}</p>
          <span className="text-[10px] text-slate-400">0 total</span>
        </div>
        <div className="card p-3">
          <p className="text-[11px] font-bold text-slate-500">Expiring 30 Days</p>
          <p className="text-xl font-extrabold text-slate-900 mt-0.5">{customerService.expiringContracts}</p>
          <span className="text-[10px] text-slate-400">Contracts</span>
        </div>
        <div className="card p-3">
          <p className="text-[11px] font-bold text-slate-500">Expired Contracts</p>
          <p className="text-xl font-extrabold text-slate-900 mt-0.5">{customerService.expiredContracts}</p>
          <span className="text-[10px] text-slate-400">Past end date</span>
        </div>
        <div className="card p-3">
          <p className="text-[11px] font-bold text-slate-500">Open Service Calls</p>
          <p className="text-xl font-extrabold text-slate-900 mt-0.5">{customerService.openCalls}</p>
          <span className="text-[10px] text-slate-400">{customerService.inProgressCalls} in progress</span>
        </div>
        <div className="card p-3">
          <p className="text-[11px] font-bold text-slate-500">SLA Breaches</p>
          <p className="text-xl font-extrabold text-slate-900 mt-0.5">{customerService.slaBreaches}</p>
          <span className="text-[10px] text-slate-400">All time</span>
        </div>
        <div className="card p-3">
          <p className="text-[11px] font-bold text-slate-500">Resolved Calls</p>
          <p className="text-xl font-extrabold text-slate-900 mt-0.5">{customerService.resolvedCalls}</p>
          <span className="text-[10px] text-slate-400">All time</span>
        </div>
        <div className="card p-3">
          <p className="text-[11px] font-bold text-slate-500">Active Warranties</p>
          <p className="text-xl font-extrabold text-slate-900 mt-0.5">{customerService.activeWarranties}</p>
          <span className="text-[10px] text-slate-400">Not expired</span>
        </div>
        <div className="card p-3">
          <p className="text-[11px] font-bold text-slate-500">Avg CSAT</p>
          <p className="text-xl font-extrabold text-emerald-600 mt-0.5">{customerService.avgCSAT}</p>
          <span className="text-[10px] text-slate-400">Satisfaction</span>
        </div>
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">AMC Renewals & Service Master</h3>
          <span className="text-xs text-slate-400">{customerService.amcRenewals.length} Contracts</span>
        </div>

        {customerService.amcRenewals.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            <p className="font-semibold">No AMC contracts due</p>
            <p className="text-[11px] mt-1">Click "+ Add Service Contract" to onboard customer support & AMC plans.</p>
          </div>
        ) : (
          <div className="space-y-3 text-xs">
            {customerService.amcRenewals.map((ticket) => (
              <div key={ticket.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">{ticket.client}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Plan: {ticket.coverage} • Valid Thru: {ticket.expiry} • Added By: {ticket.createdBy}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                    {ticket.status}
                  </span>
                  {isManagerOrAdmin && (
                    <button
                      onClick={() => deleteServiceContract(ticket.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                      title="Delete Contract (Manager Only)"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-sm font-bold text-slate-900">Add Service Contract / AMC</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-900">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Client Enterprise</label>
                <input
                  type="text"
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  placeholder="e.g. Larsen & Toubro Infotech"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Service SLA Plan</label>
                <select
                  value={coverage}
                  onChange={(e) => setCoverage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                >
                  <option value="24x7 Comprehensive">24x7 Mission Critical Comprehensive</option>
                  <option value="Standard Business AMC">Standard Business AMC (8x5)</option>
                  <option value="Preventive Maintenance Only">Preventive Maintenance Only</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Contract Expiry Date</label>
                <input
                  type="date"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
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
                  Save Contract
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
