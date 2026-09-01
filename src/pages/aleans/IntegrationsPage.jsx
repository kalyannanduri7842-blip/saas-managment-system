import React, { useState } from 'react';
import { Puzzle, Plus, X, CheckCircle2, Trash2 } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function IntegrationsPage() {
  const { integrationsList, addIntegration, deleteIntegration, isManagerOrAdmin } = useAleans();
  const [showAddModal, setShowAddModal] = useState(false);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('Banking & Disbursal');
  const [endpoint, setEndpoint] = useState('https://api.gateway.com/v1');

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addIntegration({
      name,
      category,
      endpoint,
    });
    setName('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Enterprise API Integrations Hub</h2>
          <p className="text-xs text-slate-500">Corporate Banking APIs, Statutory GST Gateways, Biometrics & ERP Connectors.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> <span>+ Connect Integration</span>
        </button>
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Connected API Gateways</h3>
          <span className="text-xs text-slate-400">{integrationsList.length} Connected</span>
        </div>

        {integrationsList.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            <p className="font-semibold">No external integrations connected yet</p>
            <p className="text-[11px] mt-1">Click "+ Connect Integration" to link banking APIs, GST e-way bill gateways, or biometrics.</p>
          </div>
        ) : (
          <div className="space-y-3 text-xs">
            {integrationsList.map((api) => (
              <div key={api.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">{api.name}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{api.category} • Endpoint: {api.endpoint}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                    {api.status}
                  </span>
                  {isManagerOrAdmin && (
                    <button
                      onClick={() => deleteIntegration(api.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                      title="Disconnect Integration (Manager Only)"
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
              <h3 className="text-sm font-bold text-slate-900">Connect Enterprise API</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-900">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">API Name / Provider</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. HDFC Corporate SFMS Banking API"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Integration Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                >
                  <option value="Banking & Disbursal">Banking & Disbursal</option>
                  <option value="Statutory GST Portal">Statutory GST Portal</option>
                  <option value="Biometric Attendance Gateway">Biometric Attendance Gateway</option>
                  <option value="SMS / WhatsApp Business API">SMS / WhatsApp Business API</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Gateway Endpoint URI</label>
                <input
                  type="text"
                  value={endpoint}
                  onChange={(e) => setEndpoint(e.target.value)}
                  placeholder="e.g. https://api.hdfcbank.com/v2/sfms"
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
                  Connect API
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
