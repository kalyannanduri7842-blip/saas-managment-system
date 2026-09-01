import { useState } from 'react';
import { X, Receipt, ShoppingCart, Boxes, Target, Calendar, PlaneTakeoff } from 'lucide-react';
import { useAleans } from '../context/AleansContext';

export default function AleansQuickAddModal() {
  const {
    quickAddOpen,
    setQuickAddOpen,
    currentUser,
    addInvoice,
    addPO,
    addInventoryItem,
    addCRMDeal,
    addNotification,
    addAuditLog
  } = useAleans();

  const [activeTab, setActiveTab] = useState('invoice');

  // Form State
  const [invClient, setInvClient] = useState('');
  const [invAmount, setInvAmount] = useState('');
  const [invGst, setInvGst] = useState('18%');

  const [poVendor, setPoVendor] = useState('');
  const [poItems, setPoItems] = useState('');
  const [poAmount, setPoAmount] = useState('');

  const [skuName, setSkuName] = useState('');
  const [skuCategory, setSkuCategory] = useState('Hardware');
  const [skuStock, setSkuStock] = useState('50');
  const [skuPrice, setSkuPrice] = useState('12,500');
  const [skuWarehouse, setSkuWarehouse] = useState('Hyderabad HQ');

  const [crmClient, setCrmClient] = useState('');
  const [crmValue, setCrmValue] = useState('');
  const [crmStage, setCrmStage] = useState('Proposal Submitted');

  const [leaveDays, setLeaveDays] = useState('2');
  const [leaveType, setLeaveType] = useState('Casual Leave (CL)');

  const [expTitle, setExpTitle] = useState('');
  const [expAmount, setExpAmount] = useState('');

  if (!quickAddOpen) return null;

  const handleInvoiceSubmit = (e) => {
    e.preventDefault();
    if (!invClient || !invAmount) return;
    const num = Number(invAmount.replace(/[^0-9.-]+/g, '')) || 0;
    const gstVal = Math.round(num * 0.18);
    addInvoice({
      client: invClient,
      amount: `₹${num.toLocaleString('en-IN')}`,
      gst: `₹${gstVal.toLocaleString('en-IN')}`,
    });
    setInvClient('');
    setInvAmount('');
    setQuickAddOpen(false);
  };

  const handlePOSubmit = (e) => {
    e.preventDefault();
    if (!poVendor || !poAmount) return;
    addPO({
      vendor: poVendor,
      items: poItems || 'Industrial Automation Units',
      amount: poAmount.startsWith('₹') ? poAmount : `₹${poAmount}`,
    });
    setPoVendor('');
    setPoAmount('');
    setPoItems('');
    setQuickAddOpen(false);
  };

  const handleInventorySubmit = (e) => {
    e.preventDefault();
    if (!skuName) return;
    addInventoryItem({
      name: skuName,
      category: skuCategory,
      stock: Number(skuStock) || 1,
      minReorder: 10,
      unitPrice: skuPrice.startsWith('₹') ? skuPrice : `₹${skuPrice}`,
      warehouse: skuWarehouse,
    });
    setSkuName('');
    setQuickAddOpen(false);
  };

  const handleCRMSubmit = (e) => {
    e.preventDefault();
    if (!crmClient || !crmValue) return;
    addCRMDeal({
      client: crmClient,
      value: crmValue.startsWith('₹') ? crmValue : `₹${crmValue}`,
      stage: crmStage,
      probability: '75%',
      expectedClose: '2026-10-15',
    });
    setCrmClient('');
    setCrmValue('');
    setQuickAddOpen(false);
  };

  const handleLeaveSubmit = (e) => {
    e.preventDefault();
    addNotification('Leave Request Submitted', `${currentUser?.name || 'Staff'} applied for ${leaveDays} days ${leaveType}`);
    addAuditLog('APPLY_LEAVE', 'My Portal', `${currentUser?.name || 'Staff'} submitted leave request for ${leaveDays} days`);
    setQuickAddOpen(false);
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    if (!expTitle || !expAmount) return;
    addNotification('Expense Claim Submitted', `${currentUser?.name || 'Staff'} claimed ₹${expAmount} for ${expTitle}`);
    addAuditLog('CLAIM_EXPENSE', 'Travel & Expense', `${currentUser?.name || 'Staff'} submitted expense claim of ₹${expAmount}`);
    setExpTitle('');
    setExpAmount('');
    setQuickAddOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden text-slate-900 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Live Enterprise Data Ingestion</h2>
            <p className="text-[11px] text-slate-500">
              Creator: <strong className="text-emerald-700">{currentUser?.name || 'Authorized User'}</strong> ({currentUser?.role || 'Staff'} • {currentUser?.department || 'Operations'})
            </p>
          </div>
          <button
            onClick={() => setQuickAddOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-100 bg-slate-50 p-1.5 gap-1 text-xs overflow-x-auto">
          <button
            onClick={() => setActiveTab('invoice')}
            className={`py-2 px-3 rounded-xl font-bold flex items-center gap-1.5 whitespace-nowrap transition ${
              activeTab === 'invoice' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Receipt className="w-3.5 h-3.5 text-emerald-600" />
            <span>GST Invoice</span>
          </button>
          <button
            onClick={() => setActiveTab('po')}
            className={`py-2 px-3 rounded-xl font-bold flex items-center gap-1.5 whitespace-nowrap transition ${
              activeTab === 'po' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <ShoppingCart className="w-3.5 h-3.5 text-emerald-600" />
            <span>Purchase Order</span>
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`py-2 px-3 rounded-xl font-bold flex items-center gap-1.5 whitespace-nowrap transition ${
              activeTab === 'inventory' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Boxes className="w-3.5 h-3.5 text-emerald-600" />
            <span>Inventory SKU</span>
          </button>
          <button
            onClick={() => setActiveTab('crm')}
            className={`py-2 px-3 rounded-xl font-bold flex items-center gap-1.5 whitespace-nowrap transition ${
              activeTab === 'crm' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Target className="w-3.5 h-3.5 text-emerald-600" />
            <span>Sales Deal</span>
          </button>
          <button
            onClick={() => setActiveTab('leave')}
            className={`py-2 px-3 rounded-xl font-bold flex items-center gap-1.5 whitespace-nowrap transition ${
              activeTab === 'leave' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            <span>Apply Leave</span>
          </button>
          <button
            onClick={() => setActiveTab('expense')}
            className={`py-2 px-3 rounded-xl font-bold flex items-center gap-1.5 whitespace-nowrap transition ${
              activeTab === 'expense' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <PlaneTakeoff className="w-3.5 h-3.5 text-emerald-600" />
            <span>Claim Expense</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {activeTab === 'invoice' && (
            <form onSubmit={handleInvoiceSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Corporate Client</label>
                <input
                  type="text"
                  value={invClient}
                  onChange={(e) => setInvClient(e.target.value)}
                  placeholder="e.g. Bharat Heavy Electricals"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Invoice Value (₹)</label>
                  <input
                    type="text"
                    value={invAmount}
                    onChange={(e) => setInvAmount(e.target.value)}
                    placeholder="e.g. 25,00,000"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">GST Slab</label>
                  <select
                    value={invGst}
                    onChange={(e) => setInvGst(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="18%">18% Standard GST</option>
                    <option value="12%">12% Concessional</option>
                    <option value="28%">28% Luxury / Heavy</option>
                    <option value="0%">0% Exempt</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setQuickAddOpen(false)}
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
          )}

          {activeTab === 'po' && (
            <form onSubmit={handlePOSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Vendor Enterprise</label>
                <input
                  type="text"
                  value={poVendor}
                  onChange={(e) => setPoVendor(e.target.value)}
                  placeholder="e.g. Siemens India"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Line Items</label>
                <input
                  type="text"
                  value={poItems}
                  onChange={(e) => setPoItems(e.target.value)}
                  placeholder="e.g. Industrial Automation Units"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Total PO Amount (₹)</label>
                <input
                  type="text"
                  value={poAmount}
                  onChange={(e) => setPoAmount(e.target.value)}
                  placeholder="e.g. 18,50,000"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setQuickAddOpen(false)}
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
          )}

          {activeTab === 'inventory' && (
            <form onSubmit={handleInventorySubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Material / SKU Name</label>
                <input
                  type="text"
                  value={skuName}
                  onChange={(e) => setSkuName(e.target.value)}
                  placeholder="e.g. Temperature Sensor Array"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Quantity</label>
                  <input
                    type="number"
                    value={skuStock}
                    onChange={(e) => setSkuStock(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Unit Price (₹)</label>
                  <input
                    type="text"
                    value={skuPrice}
                    onChange={(e) => setSkuPrice(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setQuickAddOpen(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition"
                >
                  Register SKU
                </button>
              </div>
            </form>
          )}

          {activeTab === 'crm' && (
            <form onSubmit={handleCRMSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Client Organization</label>
                <input
                  type="text"
                  value={crmClient}
                  onChange={(e) => setCrmClient(e.target.value)}
                  placeholder="e.g. Reliance Retail"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Pipeline Value (₹)</label>
                <input
                  type="text"
                  value={crmValue}
                  onChange={(e) => setCrmValue(e.target.value)}
                  placeholder="e.g. 1.50 Cr"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setQuickAddOpen(false)}
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
          )}

          {activeTab === 'leave' && (
            <form onSubmit={handleLeaveSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Leave Type</label>
                  <select
                    value={leaveType}
                    onChange={(e) => setLeaveType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Casual Leave (CL)">Casual Leave (CL)</option>
                    <option value="Sick Leave (SL)">Sick Leave (SL)</option>
                    <option value="Privilege Leave (PL)">Privilege Leave (PL)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Duration (Days)</label>
                  <input
                    type="number"
                    value={leaveDays}
                    onChange={(e) => setLeaveDays(e.target.value)}
                    min="1"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setQuickAddOpen(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition"
                >
                  Submit Request
                </button>
              </div>
            </form>
          )}

          {activeTab === 'expense' && (
            <form onSubmit={handleExpenseSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Expense Title</label>
                <input
                  type="text"
                  value={expTitle}
                  onChange={(e) => setExpTitle(e.target.value)}
                  placeholder="e.g. Client Dinner"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Claim Amount (₹)</label>
                <input
                  type="text"
                  value={expAmount}
                  onChange={(e) => setExpAmount(e.target.value)}
                  placeholder="e.g. 3,500"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setQuickAddOpen(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition"
                >
                  Submit Claim
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
