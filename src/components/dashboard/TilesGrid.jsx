import StatTile from './StatTile'
import { dashboardStats } from '../../data/mockData'

export default function TilesGrid({ lastUpdated }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {dashboardStats.map((stat) => (
          <StatTile
            key={stat.id}
            label={stat.label}
            value={stat.value}
            sub={stat.sub}
            icon={stat.icon}
            color={stat.color}
            lastUpdated={lastUpdated}
          />
        ))}
      </div>
    </div>
  )
}