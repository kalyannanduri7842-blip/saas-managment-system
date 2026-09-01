import React, { useState } from 'react';
import { ShoppingCart, CheckCircle2, AlertTriangle, Plus, Search, X } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function ProcurementPage() {
  const { procurement, addPO } = useAleans();
  const [showAddModal, setShowAddModal] = useState(false);

  const [vendor, setVendor] = useState('');
  const [items, setItems] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!vendor || !amount) return;
    addPO({
      vendor,
      items: items || 'Industrial Components',
      amount: amount.startsWith('₹') ? amount : `₹${amount}`,
    });
    setVendor('');
    setItems('');
    setAmount('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Procurement & 3-Way Matched POs</h2>
          <p className="text-xs text-slate-500">Purchase Orders, vendor contracts, and 3-way matching against GRN.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> <span>+ Issue Purchase Order</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Issued Purchase Orders</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">{procurement.length}</p>
          <span className="text-[10px] text-slate-400 mt-1">Vendor Orders</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">3-Way Verified POs</p>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1">
            {procurement.filter((p) => p.matching === '3-Way Verified').length}
          </p>
          <span className="text-[10px] text-slate-400 mt-1">GRN Matched</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Pending Approvals</p>
          <p className="text-2xl font-extrabold text-amber-600 mt-1">
            {procurement.filter((p) => p.status === 'Pending Approval').length}
          </p>
          <span className="text-[10px] text-slate-400 mt-1">Awaiting Sign-off</span>
        </div>
      </div>

      {/* PO Table */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Purchase Orders Master List</h3>
          <span className="text-xs text-slate-400">{procurement.length} POs</span>
        </div>

        {procurement.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            <p className="font-semibold">No purchase orders yet</p>
            <p className="text-[11px] mt-1">Click "+ Issue Purchase Order" to generate an order for a vendor.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500 bg-slate-50">
                  <th className="py-3 px-4 font-bold">PO Number</th>
                  <th className="py-3 px-4 font-bold">Vendor Enterprise</th>
                  <th className="py-3 px-4 font-bold">Line Items</th>
                  <th className="py-3 px-4 font-bold">Total Amount</th>
                  <th className="py-3 px-4 font-bold">Matching</th>
                  <th className="py-3 px-4 font-bold">Created By</th>
                  <th className="py-3 px-4 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {procurement.map((po) => (
                  <tr key={po.poNumber} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-mono font-bold text-emerald-700">{po.poNumber}</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{po.vendor}</td>
                    <td className="py-3 px-4 text-slate-600">{po.items}</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{po.amount}</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">{po.matching}</td>
                    <td className="py-3 px-4 text-slate-700">{po.createdBy}</td>
                    <td className="py-3 px-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                        {po.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add PO Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-sm font-bold text-slate-900">Issue Purchase Order</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-900">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Vendor Enterprise</label>
                <input
                  type="text"
                  value={vendor}
                  onChange={(e) => setVendor(e.target.value)}
                  placeholder="e.g. Schneider Electric India"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Ordered Items / Details</label>
                <input
                  type="text"
                  value={items}
                  onChange={(e) => setItems(e.target.value)}
                  placeholder="e.g. Industrial Automation Units (50x)"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Total PO Amount (₹)</label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="e.g. 18,50,000"
                  required
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
                  Authorize PO
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
