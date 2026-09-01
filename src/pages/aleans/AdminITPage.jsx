import React, { useState } from 'react';
import { Server, ShieldCheck, Plus, X, Lock, Trash2 } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function AdminITPage() {
  const { itAssets, addITAsset, deleteITAsset, isManagerOrAdmin } = useAleans();
  const [showAddModal, setShowAddModal] = useState(false);

  const [name, setName] = useState('');
  const [type, setType] = useState('Compute Cluster Server');
  const [ip, setIp] = useState('10.0.4.12');

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addITAsset({
      name,
      type,
      ip,
    });
    setName('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Admin & IT Asset Fleet</h2>
          <p className="text-xs text-slate-500">Hardware Fleet, Cloud Clusters, SOC-2 Policy Enforcement & Telemetry.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> <span>+ Register IT Asset</span>
        </button>
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Registered IT Asset Inventory</h3>
          <span className="text-xs text-slate-400">{itAssets.length} Assets</span>
        </div>

        {itAssets.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            <p className="font-semibold">No IT assets registered yet</p>
            <p className="text-[11px] mt-1">Click "+ Register IT Asset" to catalog enterprise servers and hardware.</p>
          </div>
        ) : (
          <div className="space-y-3 text-xs">
            {itAssets.map((asset) => (
              <div key={asset.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">{asset.name}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{asset.type} • IP: {asset.ip}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                    {asset.status}
                  </span>
                  {isManagerOrAdmin && (
                    <button
                      onClick={() => deleteITAsset(asset.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                      title="Delete Asset (Manager Only)"
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
              <h3 className="text-sm font-bold text-slate-900">Register IT Asset</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-900">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Asset Name / Hostname</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Primary DB Replica Cluster #1"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Asset Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                >
                  <option value="Compute Cluster Server">Compute Cluster Server</option>
                  <option value="Employee Hardware Laptop">Employee Hardware Laptop</option>
                  <option value="Network Switch / Firewall">Network Switch / Firewall</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">IP / Asset Serial Tag</label>
                <input
                  type="text"
                  value={ip}
                  onChange={(e) => setIp(e.target.value)}
                  placeholder="e.g. 10.0.4.12"
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
                  Register Asset
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
