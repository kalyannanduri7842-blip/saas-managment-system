export default function DashboardCard({ title, value, subtitle, icon: Icon, color = 'emerald' }) {
  const colors = {
    emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-emerald-500/10',
    green: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    teal: 'bg-teal-500/10 text-teal-400 border border-teal-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    orange: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    rose: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
    red: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
    slate: 'bg-slate-800 text-slate-300 border border-slate-700',
    blue: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    cyan: 'bg-teal-500/10 text-teal-400 border border-teal-500/20',
  };

  const activeColor = colors[color] || colors.emerald;

  return (
    <div className="card hover:border-slate-700 transition-all shadow-lg hover:shadow-emerald-950/20">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-400">{title}</p>
          <p className="mt-1.5 text-xl sm:text-2xl font-extrabold text-white tracking-tight">{value}</p>
          {subtitle && (
            <p className="mt-1 text-[11px] text-slate-500">{subtitle}</p>
          )}
        </div>
        {Icon && (
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ${activeColor}`}>
            <Icon className="h-5 w-5" />
          </div>
        )}
      </div>
    </div>
  );
}
