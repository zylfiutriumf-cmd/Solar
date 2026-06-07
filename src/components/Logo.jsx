function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-500/20">
        <span className="text-2xl font-black tracking-tight">CS</span>
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
          Company Solar
        </p>
        <p className="text-xs text-slate-400">Bright energy, trusted power</p>
      </div>
    </div>
  )
}

export default Logo

