const styles = {
  Active: 'badge-green',
  Trial: 'badge-blue',
  Expired: 'badge-red',
  Cancelled: 'badge-gray',
  Expiring: 'badge-yellow',
  Inactive: 'badge-gray',
  Paid: 'badge-green',
  Pending: 'badge-yellow',
  Failed: 'badge-red',
  'Due Soon': 'badge-yellow',
  Upcoming: 'badge-blue',
  Admin: 'badge-purple',
  Manager: 'badge-blue',
  Employee: 'badge-gray',
};

export default function Badge({ status, children }) {
  const cls = styles[status] || 'badge-gray';
  return <span className={cls}>{children || status}</span>;
}
