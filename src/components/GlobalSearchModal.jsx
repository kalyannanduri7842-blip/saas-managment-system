import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  X,
  LayoutDashboard,
  User,
  Building2,
  ShieldCheck,
  Users,
  Briefcase,
  Award,
  Landmark,
  Receipt,
  Boxes,
  ShoppingCart,
  Target,
  Cog,
  Headphones,
  FolderArchive,
  BarChart3,
  ArrowRight,
  FileText
} from 'lucide-react';
import { useAleans } from '../context/AleansContext';

export default function GlobalSearchModal({ isOpen, onClose }) {
  const {
    employees,
    finance,
    inventory,
    procurement,
    crm,
    projects,
    documents,
    reports
  } = useAleans();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // All 16 searchable modules
  const modules = [
    { title: 'Dashboard', route: '/', category: 'Navigation', icon: LayoutDashboard, desc: 'Executive KPI cockpit & overview' },
    { title: 'My Portal / Self Service', route: '/employee', category: 'Navigation', icon: User, desc: 'Attendance, leaves & employee self-service' },
    { title: 'Organization', route: '/organization', category: 'Navigation', icon: Building2, desc: 'Corporate legal entity & branches' },
    { title: 'Users & Roles', route: '/users', category: 'Navigation', icon: ShieldCheck, desc: 'RBAC permissions & access control' },
    { title: 'HR & Attendance', route: '/hr', category: 'Navigation', icon: Users, desc: 'Staff directory & onboarding' },
    { title: 'Recruitment & ATS', route: '/recruitment', category: 'Navigation', icon: Briefcase, desc: 'Job postings & talent pipeline' },
    { title: 'Performance & OKR', route: '/performance', category: 'Navigation', icon: Award, desc: 'Company objectives & key results' },
    { title: 'Finance & Accounts', route: '/finance', category: 'Navigation', icon: Landmark, desc: 'GST invoices, revenue & tax ledger' },
    { title: 'Statutory Payroll', route: '/payroll', category: 'Navigation', icon: Receipt, desc: 'Monthly salary disbursal, PF, ESI, TDS' },
    { title: 'Inventory & Stock', route: '/inventory', category: 'Navigation', icon: Boxes, desc: 'Warehouse SKU catalog & material stock' },
    { title: 'Procurement & POs', route: '/procurement', category: 'Navigation', icon: ShoppingCart, desc: 'Purchase orders & vendor matching' },
    { title: 'CRM & Sales', route: '/crm', category: 'Navigation', icon: Target, desc: 'Sales pipeline & client opportunities' },
    { title: 'Operations & Projects', route: '/operations', category: 'Navigation', icon: Cog, desc: 'Project milestones & operational tracking' },
    { title: 'Customer Service & SLA', route: '/service', category: 'Navigation', icon: Headphones, desc: 'AMC contracts, warranties & service calls' },
    { title: 'Documents & DMS', route: '/dms', category: 'Navigation', icon: FolderArchive, desc: 'Encrypted Cloud Vault & legal files' },
    { title: 'MIS & Reports', route: '/reports', category: 'Navigation', icon: BarChart3, desc: 'Audited P&L statements & tax returns' },
  ];

  // Dynamic records
  const dynamicRecords = [
    ...employees.map(e => ({ title: `${e.name} (${e.role})`, route: '/hr', category: 'Employees', icon: Users, desc: `${e.department} • ${e.location}` })),
    ...finance.invoices.map(i => ({ title: `Invoice: ${i.client} (${i.amount})`, route: '/finance', category: 'Invoices', icon: Landmark, desc: `${i.id} • GST: ${i.gst}` })),
    ...inventory.map(inv => ({ title: `SKU: ${inv.name} (${inv.sku})`, route: '/inventory', category: 'Inventory', icon: Boxes, desc: `Stock: ${inv.stock} • ${inv.unitPrice}` })),
    ...procurement.map(p => ({ title: `PO: ${p.vendor} (${p.amount})`, route: '/procurement', category: 'Procurement', icon: ShoppingCart, desc: `${p.poNumber} • ${p.matching}` })),
    ...crm.map(c => ({ title: `Deal: ${c.client} (${c.value})`, route: '/crm', category: 'CRM Deals', icon: Target, desc: `Stage: ${c.stage}` })),
    ...projects.map(pr => ({ title: `Project: ${pr.name}`, route: '/operations', category: 'Operations', icon: Cog, desc: `Lead: ${pr.lead} • Due: ${pr.deadline}` })),
    ...documents.map(d => ({ title: `Doc: ${d.name}`, route: '/dms', category: 'Documents', icon: FolderArchive, desc: `${d.category} • ${d.size}` })),
    ...reports.map(r => ({ title: `Report: ${r.title}`, route: '/reports', category: 'MIS Reports', icon: BarChart3, desc: `${r.category}` })),
  ];

  const allItems = [...modules, ...dynamicRecords];

  const filtered = query.trim() === ''
    ? modules
    : allItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc?.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (item) => {
    navigate(item.route);
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Search Header Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 bg-slate-50/70">
          <Search className="w-5 h-5 text-emerald-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search all 16 dashboards, employees, invoices, deals, projects..."
            className="w-full bg-transparent text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 rounded-lg text-slate-400 hover:text-slate-700">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-[10px] font-mono text-slate-500 shadow-sm">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-50">
          {filtered.length === 0 ? (
            <div className="p-10 text-center text-slate-400 text-xs">
              <p className="font-semibold text-slate-700">No matching records found for "{query}"</p>
              <p className="text-[11px] mt-1">Try searching for a dashboard name, client, invoice, or employee.</p>
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={`${item.route}-${item.title}-${idx}`}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition text-xs ${
                    isSelected ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold truncate">{item.title}</div>
                      {item.desc && <div className="text-[11px] text-slate-400 truncate mt-0.5">{item.desc}</div>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-semibold text-slate-500">
                      {item.category}
                    </span>
                    {isSelected && <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Navigation Hints */}
        <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span>Use <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-600">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-600">↓</kbd> to navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-600">↵</kbd> to open</span>
          </div>
          <span>Alea Enterprise Quick Search</span>
        </div>
      </div>
    </div>
  );
}
