import React, { useState } from 'react';
import { Building2, Plus, CheckCircle2, MapPin, X } from 'lucide-react';
import { useAleans } from '../../context/AleansContext';

export default function OrganizationPage() {
  const { organization, employees } = useAleans();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Organization Structure & Legal Entity</h2>
          <p className="text-xs text-slate-500">Corporate Legal Identity, Operating Branches & Department Hierarchies.</p>
        </div>
      </div>

      {/* Corporate Filing Card */}
      <div className="card p-6 bg-white">
        <h3 className="text-sm font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
          Corporate Legal Master
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-400 font-semibold block">Company Name</span>
            <span className="font-bold text-slate-900 mt-0.5 block">{organization.name}</span>
          </div>
          <div>
            <span className="text-slate-400 font-semibold block">Total Registered Workforce</span>
            <span className="font-bold text-emerald-700 mt-0.5 block">{employees.length} Active Staff</span>
          </div>
          <div>
            <span className="text-slate-400 font-semibold block">Primary HQ Location</span>
            <span className="font-bold text-slate-900 mt-0.5 block">{organization.headquarters}</span>
          </div>
          <div>
            <span className="text-slate-400 font-semibold block">Compliance Status</span>
            <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200 mt-0.5">
              Active Corporate Entity
            </span>
          </div>
        </div>
      </div>

      {/* Branches & Operating Hubs */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Operating Branches & Facilities</h3>
          <span className="text-xs text-slate-400">{organization.branches.length} Branches</span>
        </div>

        {organization.branches.length === 0 ? (
          <div className="py-8 text-center text-slate-400 text-xs">
            <p className="font-semibold">Registered staff locations will display here</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {organization.branches.map((b) => (
              <div key={b.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-emerald-600" />
                  <span className="font-bold text-slate-900">{b.name}</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">{b.type}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
