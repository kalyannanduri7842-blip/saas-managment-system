import { useMemo, useState } from 'react';
import { sampleBillingHistory } from '../data/sampleBillingHistory';
import { useApp } from '../context/AppContext';
import SearchBar from '../components/SearchBar';
import Badge from '../components/Badge';
import { formatCurrency, formatDate } from '../utils/calculations';

export default function BillingHistory() {
  const { applications } = useApp();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const getAppName = (id) => applications.find((a) => a.id === id)?.name || id;

  const filtered = useMemo(() => {
    return sampleBillingHistory.filter((b) => {
      const name = getAppName(b.applicationId).toLowerCase();
      const matchSearch = !search || name.includes(search.toLowerCase()) || b.invoiceNumber.toLowerCase().includes(search.toLowerCase());
      const matchStatus = !statusFilter || b.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [search, statusFilter, applications]);

  const total = filtered.reduce((s, b) => s + b.amount, 0);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row gap-3 flex-1">
          <div className="sm:w-64">
            <SearchBar value={search} onChange={setSearch} placeholder="Search invoices..." />
          </div>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="input sm:w-36">
            <option value="">All Statuses</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Total: {formatCurrency(total)}
        </p>
      </div>

      <div className="card p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-left">
                <th className="px-4 py-3 font-medium text-gray-500">Invoice</th>
                <th className="px-4 py-3 font-medium text-gray-500">Application</th>
                <th className="px-4 py-3 font-medium text-gray-500">Amount</th>
                <th className="px-4 py-3 font-medium text-gray-500 hidden sm:table-cell">Date</th>
                <th className="px-4 py-3 font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {filtered.map((b) => (
                <tr key={b.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-4 py-3 font-mono text-xs text-gray-600 dark:text-gray-300">{b.invoiceNumber}</td>
                  <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{getAppName(b.applicationId)}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{formatCurrency(b.amount)}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300 hidden sm:table-cell">{formatDate(b.date)}</td>
                  <td className="px-4 py-3"><Badge status={b.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
