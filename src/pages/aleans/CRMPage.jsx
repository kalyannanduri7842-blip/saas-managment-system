import React, { useState } from 'react';
import { Target, TrendingUp, DollarSign, Plus, Search, X } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function CRMPage() {
  const { crm, addCRMDeal } = useAleans();
  const [showAddModal, setShowAddModal] = useState(false);

  const [client, setClient] = useState('');
  const [value, setValue] = useState('');
  const [stage, setStage] = useState('Proposal Submitted');

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!client || !value) return;
    addCRMDeal({
      client,
      value: value.startsWith('₹') ? value : `₹${value}`,
      stage,
      probability: stage === 'Contract Won' ? '100%' : '75%',
      expectedClose: '2026-10-15',
    });
    setClient('');
    setValue('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">CRM & Sales Funnel</h2>
          <p className="text-xs text-slate-500">Sales pipeline, deal velocity, probability weighting & contract tracking.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> <span>+ Add Sales Deal</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Active Sales Leads</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">{crm.length}</p>
          <span className="text-[10px] text-slate-400 mt-1">Enterprise Prospects</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Deals Won</p>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1">
            {crm.filter((d) => d.stage === 'Contract Won').length}
          </p>
          <span className="text-[10px] text-slate-400 mt-1">Closed Contracts</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Negotiation Stage</p>
          <p className="text-2xl font-extrabold text-amber-600 mt-1">
            {crm.filter((d) => d.stage.includes('Negotiation')).length}
          </p>
          <span className="text-[10px] text-slate-400 mt-1">High Probability</span>
        </div>
      </div>

      {/* Deals Table */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Active Deals Pipeline</h3>
          <span className="text-xs text-slate-400">{crm.length} Deals</span>
        </div>

        {crm.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            <p className="font-semibold">No sales deals yet</p>
            <p className="text-[11px] mt-1">Click "+ Add Sales Deal" to ingest a client opportunity.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500 bg-slate-50">
                  <th className="py-3 px-4 font-bold">Deal ID</th>
                  <th className="py-3 px-4 font-bold">Client Organization</th>
                  <th className="py-3 px-4 font-bold">Contract Value</th>
                  <th className="py-3 px-4 font-bold">Deal Stage</th>
                  <th className="py-3 px-4 font-bold">Win Probability</th>
                  <th className="py-3 px-4 font-bold">Deal Owner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {crm.map((deal) => (
                  <tr key={deal.leadId} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-mono font-bold text-emerald-700">{deal.leadId}</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{deal.client}</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{deal.value}</td>
                    <td className="py-3 px-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                        {deal.stage}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-bold text-slate-700">{deal.probability}</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">{deal.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add Deal Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-sm font-bold text-slate-900">Add Sales Opportunity</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-900">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Client Organization</label>
                <input
                  type="text"
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  placeholder="e.g. Mahindra & Mahindra Automotive"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Deal Value (₹)</label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="e.g. 1.20 Cr"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Pipeline Stage</label>
                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                >
                  <option value="Proposal Submitted">Proposal Submitted (60%)</option>
                  <option value="Negotiation / Contract">Negotiation / Contract (85%)</option>
                  <option value="Contract Won">Contract Won (100%)</option>
                </select>
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
                  Save Deal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
