import React, { useState } from 'react';
import { Landmark, Receipt, ArrowUpRight, Plus, Download, FileText, X, Trash2, Search } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function FinancePage() {
  const { finance, addInvoice, deleteInvoice, isManagerOrAdmin } = useAleans();
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [client, setClient] = useState('');
  const [amount, setAmount] = useState('');
  const [gst, setGst] = useState('18%');

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!client || !amount) return;
    const num = Number(amount.replace(/[^0-9.-]+/g, '')) || 0;
    const gstVal = Math.round(num * 0.18);
    addInvoice({
      client,
      amount: `₹${num.toLocaleString('en-IN')}`,
      gst: `₹${gstVal.toLocaleString('en-IN')}`,
    });
    setClient('');
    setAmount('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Finance, Accounts & GST Ledger</h2>
          <p className="text-xs text-slate-500">General Ledger, Accounts Receivable, GSTR-1 / 3B Tax Liability & Invoicing.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> <span>+ Generate GST Invoice</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Total Invoiced Revenue</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">{finance.monthlyRevenue}</p>
          <span className="text-[10px] text-slate-400 mt-1">{finance.invoices.length} Invoices</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">GST Output Liability (18%)</p>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1">{finance.gstLiabilityThisMonth}</p>
          <span className="text-[10px] text-slate-400 mt-1">GSTR-1 Ready</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Outstanding Receivables</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">{finance.outstandingReceivables}</p>
          <span className="text-[10px] text-slate-400 mt-1">Pending Clearance</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Accounts Payable</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">{finance.accountsPayable}</p>
          <span className="text-[10px] text-slate-400 mt-1">Vendor Dues</span>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="card p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900">GST Tax Invoices</h3>
            <span className="text-xs text-slate-400">({finance.invoices.length} Records)</span>
          </div>
          <div className="relative flex items-center w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search client, invoice #..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
            />
          </div>
        </div>

        {finance.invoices.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            <p className="font-semibold">No invoices generated yet</p>
            <p className="text-[11px] mt-1">Click "+ Generate GST Invoice" to issue a sales tax invoice.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500 bg-slate-50">
                  <th className="py-3 px-4 font-bold">Invoice #</th>
                  <th className="py-3 px-4 font-bold">Client / Entity</th>
                  <th className="py-3 px-4 font-bold">Invoice Value</th>
                  <th className="py-3 px-4 font-bold">GST (18%)</th>
                  <th className="py-3 px-4 font-bold">Created By</th>
                  <th className="py-3 px-4 font-bold">Status</th>
                  {isManagerOrAdmin && <th className="py-3 px-4 font-bold text-right">Actions</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {finance.invoices.filter(i => searchTerm.trim() === '' || i.client.toLowerCase().includes(searchTerm.toLowerCase()) || i.id.toLowerCase().includes(searchTerm.toLowerCase())).map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-mono font-bold text-emerald-700">{inv.id}</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{inv.client}</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{inv.amount}</td>
                    <td className="py-3 px-4 text-slate-600">{inv.gst}</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">{inv.createdBy}</td>
                    <td className="py-3 px-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 font-bold text-[10px] border border-amber-200">
                        {inv.status}
                      </span>
                    </td>
                    {isManagerOrAdmin && (
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => deleteInvoice(inv.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-200 transition"
                          title="Delete Invoice (Manager Only)"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add Invoice Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-sm font-bold text-slate-900">Generate GST Sales Invoice</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-900">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Corporate Client</label>
                <input
                  type="text"
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  placeholder="e.g. Tata Consultancy Services"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Invoice Amount (₹)</label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="e.g. 15,00,000"
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
                  Post Invoice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
