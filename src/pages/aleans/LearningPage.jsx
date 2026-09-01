import React, { useState } from 'react';
import { GraduationCap, Award, CheckCircle2, Plus, X, Trash2 } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function LearningPage() {
  const { trainingCourses, addTrainingCourse, deleteTrainingCourse, isManagerOrAdmin } = useAleans();
  const [showAddModal, setShowAddModal] = useState(false);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Statutory Compliance');
  const [duration, setDuration] = useState('4 Weeks');

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTrainingCourse({
      title,
      category,
      duration,
    });
    setTitle('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">L&D and Employee Skill Matrices</h2>
          <p className="text-xs text-slate-500">Corporate Certifications, Statutory Compliance Training & Upskilling.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> <span>+ Add Training Module</span>
        </button>
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Active Training Modules</h3>
          <span className="text-xs text-slate-400">{trainingCourses.length} Modules</span>
        </div>

        {trainingCourses.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-xs">
            <p className="font-semibold">No training modules enrolled yet</p>
            <p className="text-[11px] mt-1">Click "+ Add Training Module" to create corporate courses and skill tracks.</p>
          </div>
        ) : (
          <div className="space-y-3 text-xs">
            {trainingCourses.map((course) => (
              <div key={course.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">{course.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{course.category} • Duration: {course.duration}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                    {course.status}
                  </span>
                  {isManagerOrAdmin && (
                    <button
                      onClick={() => deleteTrainingCourse(course.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                      title="Delete Course (Manager Only)"
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
              <h3 className="text-sm font-bold text-slate-900">Add New Training Course</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-900">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Course Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Statutory GST & E-Way Bill Regulations 2026"
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
                  <option value="Statutory Compliance">Statutory Compliance</option>
                  <option value="Quality & Six Sigma">Quality & Six Sigma</option>
                  <option value="Cyber Security & IT">Cyber Security & IT</option>
                  <option value="Leadership & Executive">Leadership & Executive</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Duration</label>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="e.g. 4 Weeks"
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
                  Create Module
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
