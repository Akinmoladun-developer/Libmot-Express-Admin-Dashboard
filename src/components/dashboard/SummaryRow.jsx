import * as Icons from 'lucide-react'

export default function SummaryRow({ totals }) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {totals.map((item, i) => {
        const LucideIcon = Icons[item.icon] || Icons.BarChart2
        return (
          <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="bg-blue-900 text-white p-3 rounded-xl">
              <LucideIcon size={22} />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">{item.label}</p>
              <p className="text-xl font-bold text-gray-800">{item.value}</p>
              <p className="text-xs text-green-600 mt-0.5">{item.change}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}