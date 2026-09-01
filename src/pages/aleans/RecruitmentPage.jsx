import React, { useState } from 'react';
import { Briefcase, Plus, X, CheckCircle2, Trash2 } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function RecruitmentPage() {
  const { recruitment, addJobPosting, deleteJobPosting, isManagerOrAdmin } = useAleans();
  const [showAddModal, setShowAddModal] = useState(false);

  const [title, setTitle] = useState('');
  const [dept, setDept] = useState('Engineering & R&D');
  const [location, setLocation] = useState('Hyderabad HQ');

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addJobPosting({
      title,
      dept,
      location,
    });
    setTitle('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Recruitment & ATS</h2>
          <p className="text-xs text-slate-500">Applicant Tracking System, Job Openings & Candidate Pipeline.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> <span>+ Post Job Opening</span>
        </button>
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Active Job Requisitions</h3>
          <span className="text-xs text-slate-400">{recruitment.length} Openings</span>
        </div>

        {recruitment.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            <p className="font-semibold">No active job openings</p>
            <p className="text-[11px] mt-1">Click "+ Post Job Opening" to create recruitment requisitions.</p>
          </div>
        ) : (
          <div className="space-y-3 text-xs">
            {recruitment.map((job) => (
              <div key={job.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">{job.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {job.dept} • Location: {job.location} • Applicants: {job.applicants} • Posted By: {job.postedBy}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                    {job.status}
                  </span>
                  {isManagerOrAdmin && (
                    <button
                      onClick={() => deleteJobPosting(job.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                      title="Delete Job (Manager Only)"
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
              <h3 className="text-sm font-bold text-slate-900">Post Job Requisition</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-900">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Job Designation Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Senior ERP Architect"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Department</label>
                <select
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                >
                  <option value="Engineering & R&D">Engineering & R&D</option>
                  <option value="Sales & Growth">Sales & Growth</option>
                  <option value="Finance & Accounts">Finance & Accounts</option>
                  <option value="Operations & Procurement">Operations & Procurement</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Operating Location</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-emerald-500"
                >
                  <option value="Hyderabad HQ">Hyderabad HQ</option>
                  <option value="Bengaluru Tech Center">Bengaluru Tech Center</option>
                  <option value="Mumbai Financial Hub">Mumbai Financial Hub</option>
                  <option value="Chennai Plant & Depot">Chennai Plant & Depot</option>
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
                  Publish Requisition
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
