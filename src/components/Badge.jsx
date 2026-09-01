const styles = {
  Active: 'badge-emerald',
  Trial: 'badge-teal',
  Expired: 'badge-rose',
  Cancelled: 'badge-slate',
  Expiring: 'badge-amber',
  Inactive: 'badge-slate',
  Paid: 'badge-emerald',
  Pending: 'badge-amber',
  Failed: 'badge-rose',
  'Due Soon': 'badge-amber',
  Upcoming: 'badge-teal',
  Admin: 'badge-emerald',
  'Finance Lead': 'badge-amber',
  'Sales Director': 'badge-teal',
  'DevOps Lead': 'badge-purple',
  'Customer Success': 'badge-teal',
  'Product Lead': 'badge-amber',
  Manager: 'badge-teal',
  Employee: 'badge-slate',
};

export default function Badge({ status, children }) {
  const cls = styles[status] || 'badge-slate';
  return <span className={cls}>{children || status}</span>;
}
