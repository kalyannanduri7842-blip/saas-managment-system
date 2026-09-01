import React, { useState } from 'react';
import { PlaneTakeoff, Plus, CheckCircle2, DollarSign, X, Trash2 } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function TravelExpensePage() {
  const { travelClaims, addTravelClaim, deleteTravelClaim, isManagerOrAdmin } = useAleans();
  const [showAddModal, setShowAddModal] = useState(false);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [purpose, setPurpose] = useState('Client Meeting / Sales Travel');

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    addTravelClaim({
      title,
      amount: amount.startsWith('₹') ? amount : `₹${amount}`,
      purpose,
    });
    setTitle('');
    setAmount('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Travel & Expense Reimbursements</h2>
          <p className="text-xs text-slate-500">Corporate Travel Bookings, Per Diem Allowances & Expense Claims.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> <span>+ Submit Expense Claim</span>
        </button>
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Submitted Travel Claims</h3>
          <span className="text-xs text-slate-400">{travelClaims.length} Claims</span>
        </div>

        {travelClaims.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            <p className="font-semibold">No travel claims submitted yet</p>
            <p className="text-[11px] mt-1">Click "+ Submit Expense Claim" to submit a reimbursement request.</p>
          </div>
        ) : (
          <div className="space-y-3 text-xs">
            {travelClaims.map((claim) => (
              <div key={claim.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">{claim.title}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Claimant: <strong className="text-emerald-700">{claim.claimant}</strong> • Total: <strong className="text-slate-900">{claim.amount}</strong> • {claim.purpose}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 font-bold text-[10px] border border-amber-200">
                    {claim.status}
                  </span>
                  {isManagerOrAdmin && (
                    <button
                      onClick={() => deleteTravelClaim(claim.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                      title="Delete Claim (Manager Only)"
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
              <h3 className="text-sm font-bold text-slate-900">Submit Travel Expense Claim</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-900">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Claim Title / Description</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Mumbai Client Roadshow & Contract Signing"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Claim Amount (₹)</label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="e.g. 48,500"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Purpose Category</label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                >
                  <option value="Client Meeting / Sales Travel">Client Meeting / Sales Travel</option>
                  <option value="Plant Inspection & Operations">Plant Inspection & Operations</option>
                  <option value="Conference & Industry Seminar">Conference & Industry Seminar</option>
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
                  File Claim
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
