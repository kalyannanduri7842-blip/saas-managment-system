import React, { useState } from 'react';
import { ShieldCheck, Plus, AlertCircle, X, Trash2 } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function QualityPage() {
  const { quality, addQualityNCR, deleteQualityNCR, isManagerOrAdmin } = useAleans();
  const [showAddModal, setShowAddModal] = useState(false);

  const [title, setTitle] = useState('');
  const [severity, setSeverity] = useState('Medium');
  const [supplier, setSupplier] = useState('');

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addQualityNCR({
      title,
      severity,
      supplier: supplier || 'Internal Plant Floor',
    });
    setTitle('');
    setSupplier('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Quality Assurance & Six Sigma (NCR / CAPA)</h2>
          <p className="text-xs text-slate-500">Non-Conformance Reports (NCR), Corrective Actions (CAPA) & PPM Metrics.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> <span>+ Add Inspection / NCR</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Total Lots Inspected</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">{quality.totalLots}</p>
          <span className="text-[10px] text-slate-400 mt-1">{quality.pendingLots} pending</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Rejected Lots</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">{quality.rejectedLots}</p>
          <span className="text-[10px] text-slate-400 mt-1">{quality.acceptedLots} accepted</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Open NCRs</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">{quality.openNCRs}</p>
          <span className="text-[10px] text-slate-400 mt-1">{quality.criticalNCRs} critical</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Overdue CAPAs</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">{quality.overdueCAPAs}</p>
          <span className="text-[10px] text-slate-400 mt-1">{quality.totalOpenCAPAs} total open</span>
        </div>
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Recent NCRs & Defect Logging</h3>
          <span className="text-xs text-slate-400">{quality.ncrs.length} Records</span>
        </div>

        {quality.ncrs.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            <p className="font-semibold">No NCRs yet</p>
            <p className="text-[11px] mt-1">Click "+ Add Inspection / NCR" to record quality non-conformances.</p>
          </div>
        ) : (
          <div className="space-y-3 text-xs">
            {quality.ncrs.map((ncr) => (
              <div key={ncr.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">{ncr.title}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    ID: {ncr.id} • Severity: {ncr.severity} • Supplier: {ncr.supplier} • Logged By: {ncr.createdBy}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 font-bold text-[10px] border border-rose-200">
                    {ncr.status}
                  </span>
                  {isManagerOrAdmin && (
                    <button
                      onClick={() => deleteQualityNCR(ncr.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                      title="Delete NCR (Manager Only)"
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
              <h3 className="text-sm font-bold text-slate-900">Record Quality NCR / Defect</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-900">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Non-Conformance Summary</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. PCB Solder Joint Bridging on Line #4"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Severity Level</label>
                <select
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                >
                  <option value="Low">Low Minor Non-Conformance</option>
                  <option value="Medium">Medium Major Defect</option>
                  <option value="Critical">Critical Safety / Production Halt</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Supplier / Assembly Line</label>
                <input
                  type="text"
                  value={supplier}
                  onChange={(e) => setSupplier(e.target.value)}
                  placeholder="e.g. Plant Assembly Bay #2"
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
                  Log Quality Issue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
