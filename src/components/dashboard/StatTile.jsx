import * as Icons from 'lucide-react'

export default function StatTile({ label, value, sub, icon, color, lastUpdated }) {
  const LucideIcon = Icons[icon] || Icons.Package

  const timeStr = lastUpdated?.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <div className={`${color} rounded-2xl p-5 text-white flex flex-col justify-between min-h-[140px] relative overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200`}>

      {/* Background watermark icon */}
      <div className="absolute -right-3 -bottom-3 opacity-10 pointer-events-none">
        <LucideIcon size={80} />
      </div>

      {/* Top: label + icon */}
      <div className="flex items-start justify-between">
        <p className="text-sm font-semibold leading-tight max-w-[75%] opacity-95">
          {label}
        </p>
        <div className="bg-white/20 p-2 rounded-xl">
          <LucideIcon size={20} />
        </div>
      </div>

      {/* Value */}
      <div className="mt-3">
        <p className="text-3xl font-bold tracking-tight">{value}</p>
        <p className="text-xs mt-1 opacity-75">{sub}</p>
      </div>

      {/* Footer */}
      <div className="mt-3 pt-2 border-t border-white/20">
        <p className="text-xs opacity-60">Updated: {timeStr}</p>
      </div>

    </div>
  )
}