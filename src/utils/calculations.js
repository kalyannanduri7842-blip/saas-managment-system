import { differenceInDays, parseISO, format, subMonths, startOfMonth } from 'date-fns';

export function getMonthlyEquivalent(sub) {
  if (sub.billingCycle === 'Monthly') return sub.cost;
  if (sub.billingCycle === 'Quarterly') return sub.cost / 3;
  if (sub.billingCycle === 'Yearly') return sub.cost / 12;
  return sub.cost;
}

export function getAnnualEquivalent(sub) {
  if (sub.billingCycle === 'Monthly') return sub.cost * 12;
  if (sub.billingCycle === 'Quarterly') return sub.cost * 4;
  if (sub.billingCycle === 'Yearly') return sub.cost;
  return sub.cost;
}

export function calculateDashboardStats(applications, subscriptions, users) {
  const activeApps = applications.filter((a) => a.status === 'Active').length;
  const activeSubs = subscriptions.filter((s) => s.status === 'Active' || s.status === 'Trial').length;
  
  const monthlySpending = subscriptions
    .filter((s) => s.status === 'Active' || s.status === 'Trial' || s.status === 'Expiring')
    .reduce((sum, s) => sum + getMonthlyEquivalent(s), 0);

  const annualSpending = subscriptions
    .filter((s) => s.status === 'Active' || s.status === 'Trial' || s.status === 'Expiring')
    .reduce((sum, s) => sum + getAnnualEquivalent(s), 0);

  const today = new Date();
  const upcomingRenewals = subscriptions
    .filter((s) => s.status !== 'Cancelled')
    .map((s) => {
      const days = differenceInDays(parseISO(s.renewalDate), today);
      let status = 'Upcoming';
      if (days < 0) status = 'Expired';
      else if (days <= 14) status = 'Due Soon';
      return { ...s, daysUntil: days, renewalStatus: status };
    })
    .filter((s) => s.daysUntil <= 45)
    .sort((a, b) => a.daysUntil - b.daysUntil);

  return {
    totalApplications: applications.length,
    activeApplications: activeApps,
    activeSubscriptions: activeSubs,
    monthlySpending: Math.round(monthlySpending * 100) / 100,
    annualSpending: Math.round(annualSpending * 100) / 100,
    totalUsers: users.filter((u) => u.status === 'Active').length,
    upcomingRenewals,
  };
}

export function getMonthlySpendingChart(expenses) {
  const months = [];
  for (let i = 5; i >= 0; i--) {
    const d = subMonths(startOfMonth(new Date()), i);
    months.push({
      key: format(d, 'yyyy-MM'),
      label: format(d, 'MMM'),
      amount: 0,
    });
  }

  expenses.forEach((e) => {
    const key = e.date.slice(0, 7);
    const m = months.find((x) => x.key === key);
    if (m) m.amount += e.amount;
  });

  return months.map((m) => ({ name: m.label, amount: Math.round(m.amount * 100) / 100 }));
}

export function getAppUsageChart(applications) {
  const counts = { Active: 0, Trial: 0, Expired: 0, Cancelled: 0 };
  applications.forEach((a) => {
    if (counts[a.status] !== undefined) counts[a.status]++;
  });
  return Object.entries(counts)
    .filter(([, v]) => v > 0)
    .map(([name, value]) => ({ name, value }));
}

export function getSubscriptionDistribution(applications) {
  const counts = {};
  applications.forEach((a) => {
    counts[a.category] = (counts[a.category] || 0) + 1;
  });
  return Object.entries(counts).map(([name, value]) => ({ name, value }));
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount || 0);
}

export function formatDate(dateStr) {
  if (!dateStr) return '—';
  try {
    return format(parseISO(dateStr), 'MMM d, yyyy');
  } catch {
    return dateStr;
  }
}

export function exportToCSV(data, filename) {
  if (!data.length) return;
  const headers = Object.keys(data[0]);
  const rows = data.map((row) =>
    headers.map((h) => {
      const val = row[h];
      if (typeof val === 'string' && (val.includes(',') || val.includes('"'))) {
        return `"${val.replace(/"/g, '""')}"`;
      }
      return val ?? '';
    }).join(',')
  );
  const csv = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${filename}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}
