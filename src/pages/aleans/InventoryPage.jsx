import React, { useState } from 'react';
import { Boxes, AlertTriangle, CheckCircle2, Plus, Search, X } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function InventoryPage() {
  const { inventory, addInventoryItem } = useAleans();
  const [showAddModal, setShowAddModal] = useState(false);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('Hardware');
  const [stock, setStock] = useState('50');
  const [price, setPrice] = useState('12,000');
  const [warehouse, setWarehouse] = useState('Hyderabad HQ');

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addInventoryItem({
      name,
      category,
      stock: Number(stock) || 1,
      minReorder: 10,
      unitPrice: price.startsWith('₹') ? price : `₹${price}`,
      warehouse,
    });
    setName('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Inventory & Warehouse Depot</h2>
          <p className="text-xs text-slate-500">SKU catalog, bin locations, warehouse stock counts & valuation.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> <span>+ Add Inventory SKU</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Total Cataloged SKUs</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">{inventory.length}</p>
          <span className="text-[10px] text-slate-400 mt-1">Active Materials</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Total Units in Stock</p>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1">
            {inventory.reduce((acc, curr) => acc + (Number(curr.stock) || 0), 0)}
          </p>
          <span className="text-[10px] text-slate-400 mt-1">Available for Dispatch</span>
        </div>
        <div className="card p-4">
          <p className="text-xs font-bold text-slate-500">Low Stock SKUs</p>
          <p className="text-2xl font-extrabold text-amber-600 mt-1">
            {inventory.filter((i) => i.status === 'Low Stock').length}
          </p>
          <span className="text-[10px] text-slate-400 mt-1">Reorder Required</span>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Inventory SKU Catalog</h3>
          <span className="text-xs text-slate-400">{inventory.length} SKUs Listed</span>
        </div>

        {inventory.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            <p className="font-semibold">No inventory items yet</p>
            <p className="text-[11px] mt-1">Click "+ Add Inventory SKU" to register materials into the warehouse.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500 bg-slate-50">
                  <th className="py-3 px-4 font-bold">SKU Code</th>
                  <th className="py-3 px-4 font-bold">Material / Item Name</th>
                  <th className="py-3 px-4 font-bold">Category</th>
                  <th className="py-3 px-4 font-bold">Stock Count</th>
                  <th className="py-3 px-4 font-bold">Unit Price</th>
                  <th className="py-3 px-4 font-bold">Warehouse</th>
                  <th className="py-3 px-4 font-bold">Added By</th>
                  <th className="py-3 px-4 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {inventory.map((item) => (
                  <tr key={item.sku} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-mono font-bold text-emerald-700">{item.sku}</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{item.name}</td>
                    <td className="py-3 px-4 text-slate-600">{item.category}</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{item.stock}</td>
                    <td className="py-3 px-4 text-slate-700">{item.unitPrice}</td>
                    <td className="py-3 px-4 text-slate-500">{item.warehouse}</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">{item.createdBy}</td>
                    <td className="py-3 px-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-sm font-bold text-slate-900">Add Inventory SKU</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-900">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Item / SKU Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Industrial IoT Gateway"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Hardware">Hardware</option>
                    <option value="Sensors">Sensors</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Electrical">Electrical</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Initial Quantity</label>
                  <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Unit Valuation (₹)</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
                  Register Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
