import React, { useState } from 'react';
import { BarChart3, Download, Plus, FileText, CheckCircle2, X, Trash2 } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function MISReportsPage() {
  const { reports, addReport, deleteReport, isManagerOrAdmin } = useAleans();
  const [showAddModal, setShowAddModal] = useState(false);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Financial P&L');
  const [summary, setSummary] = useState('');

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addReport({
      title,
      category,
      summary: summary || 'Executive audited report summary.',
    });
    setTitle('');
    setSummary('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Executive MIS & Board Reports</h2>
          <p className="text-xs text-slate-500">Statutory Tax Filings, Audited Statements & Business Analytics.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> <span>+ Generate MIS Report</span>
        </button>
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Generated Reports Archive</h3>
          <span className="text-xs text-slate-400">{reports.length} Reports</span>
        </div>

        {reports.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            <p className="font-semibold">No MIS reports generated yet</p>
            <p className="text-[11px] mt-1">Click "+ Generate MIS Report" to compile audited statements and analytics.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {reports.map((rep) => (
              <div key={rep.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{rep.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{rep.summary}</p>
                    <span className="inline-block px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 text-[10px] font-semibold mt-1">
                      {rep.category} • Date: {rep.date} • By: {rep.createdBy}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button className="px-3 py-1.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-700 font-bold border border-slate-200 shadow-sm flex items-center gap-1.5 transition">
                    <Download className="w-3.5 h-3.5" /> <span>PDF</span>
                  </button>
                  {isManagerOrAdmin && (
                    <button
                      onClick={() => deleteReport(rep.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                      title="Delete Report (Manager Only)"
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
              <h3 className="text-sm font-bold text-slate-900">Generate New MIS Report</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-900">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Report Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Audited P&L Statement (Q1 & Q2 FY26)"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                >
                  <option value="Financial P&L">Financial P&L</option>
                  <option value="Statutory Tax Return">Statutory Tax Return</option>
                  <option value="Operational Audit">Operational Audit</option>
                  <option value="Board Deck">Executive Board Deck</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Summary / Key Metrics</label>
                <input
                  type="text"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="e.g. EBITDA: ₹4.80 Cr (39.1% Margin)"
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
                  Compile Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
