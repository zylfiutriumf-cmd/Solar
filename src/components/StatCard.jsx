function StatCard({ label, value, sub }) {
  return (
    <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-yellow-500/5">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{label}</p>
      <p className="mt-5 text-5xl font-semibold text-yellow-300">{value}</p>
      <p className="mt-4 text-sm leading-6 text-slate-300">{sub}</p>
    </div>
  )
}

export default StatCard
