import React, { useState } from 'react';
import { FolderArchive, Download, Plus, FileText, Lock, ShieldCheck, X, Trash2 } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function DocumentsPage() {
  const { documents, addDocument, deleteDocument, isManagerOrAdmin } = useAleans();
  const [showAddModal, setShowAddModal] = useState(false);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('Legal & Corporate');
  const [size, setSize] = useState('2.4 MB');

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addDocument({
      name,
      category,
      size,
    });
    setName('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Document Management System (DMS)</h2>
          <p className="text-xs text-slate-500">Encrypted Cloud Vault, Corporate Legal Filings & Digital Signature Archives.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> <span>+ Upload Document</span>
        </button>
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Encrypted Cloud Vault</h3>
          <span className="text-xs text-slate-400">{documents.length} Files</span>
        </div>

        {documents.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            <p className="font-semibold">No documents stored in Cloud Vault</p>
            <p className="text-[11px] mt-1">Click "+ Upload Document" to store contracts, certifications, and filings.</p>
          </div>
        ) : (
          <div className="space-y-3 text-xs">
            {documents.map((doc) => (
              <div key={doc.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{doc.name}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Size: {doc.size} • Uploaded: {doc.uploadedDate} • By: {doc.uploadedBy}
                    </p>
                    <span className="inline-block px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 text-[10px] font-semibold mt-1">
                      {doc.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-700 font-bold border border-slate-200 shadow-sm flex items-center gap-1.5 shrink-0 transition">
                    <Download className="w-3.5 h-3.5" /> <span>Download</span>
                  </button>
                  {isManagerOrAdmin && (
                    <button
                      onClick={() => deleteDocument(doc.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                      title="Delete Document (Manager Only)"
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
              <h3 className="text-sm font-bold text-slate-900">Upload Document to Cloud Vault</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-900">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Document Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alea Certificate of Incorporation"
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
                  <option value="Legal & Corporate">Legal & Corporate</option>
                  <option value="Audits & Compliance">Audits & Compliance</option>
                  <option value="Vendor Agreements">Vendor Agreements</option>
                  <option value="Tax & GST Filings">Tax & GST Filings</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Estimated File Size</label>
                <input
                  type="text"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  placeholder="e.g. 2.4 MB"
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
                  Save & Encrypt File
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
