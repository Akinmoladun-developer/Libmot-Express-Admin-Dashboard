import { useState, useEffect, useCallback } from 'react'
import TilesGrid from '../components/dashboard/TilesGrid'
import SummaryRow from '../components/dashboard/SummaryRow'
import { ShipmentBarChart, RevenueLineChart, ShipmentPieChart } from '../components/dashboard/Charts'
import { summaryTotals, barChartData, lineChartData, pieChartData } from '../data/mockData'

export default function Dashboard() {
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [loading, setLoading] = useState(false)
  const [liveClock, setLiveClock] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setLiveClock(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const handleRefresh = useCallback(() => {
    setLoading(true)
    setTimeout(() => {
      setLastUpdated(new Date())
      setLoading(false)
    }, 1500)
  }, [])

  const formatTime = (date) =>
    date.toLocaleTimeString('en-GB', {
      hour: '2-digit', minute: '2-digit', second: '2-digit',
    })

  const formatDateTime = (date) =>
    date.toLocaleString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
    })

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Operations Overview</h3>
          <p className="text-sm text-gray-400 mt-1">Live snapshot · Okota Terminal</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-lg font-bold text-blue-900 tabular-nums">
              {formatTime(liveClock)}
            </p>
            <p className="text-xs text-gray-400">
              Last updated: {formatDateTime(lastUpdated)}
            </p>
          </div>
          <button
            onClick={handleRefresh}
            disabled={loading}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white transition-all shadow
              ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-900 hover:bg-blue-800 active:scale-95'}`}
          >
            <span className={`inline-block ${loading ? 'animate-spin' : ''}`}>🔄</span>
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>

      {/* Status Badges */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <StatusBadge color="green" label="System Online" />
        <StatusBadge color="blue" label="Okota Terminal" />
        <StatusBadge color="yellow" label="Mock Data Mode" />
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="flex flex-col items-center gap-3 text-gray-400">
            <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-900 rounded-full animate-spin" />
            <p className="text-sm">Fetching latest data...</p>
          </div>
        </div>
      ) : (
        <>
          {/* Summary Totals Row */}
          <SummaryRow totals={summaryTotals} />

          {/* Stat Tiles */}
          <TilesGrid lastUpdated={lastUpdated} />

          {/* Charts Section */}
          <div className="mt-8">
            <h4 className="text-base font-semibold text-gray-700 mb-4">Analytics</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              <ShipmentBarChart data={barChartData} />
              <RevenueLineChart data={lineChartData} />
              <ShipmentPieChart data={pieChartData} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

function StatusBadge({ color, label }) {
  const colors = {
    green: 'bg-green-100 text-green-700',
    blue: 'bg-blue-100 text-blue-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    red: 'bg-red-100 text-red-700',
  }
  return (
    <span className={`text-xs font-medium px-3 py-1 rounded-full ${colors[color]}`}>
      {label}
    </span>
  )
}